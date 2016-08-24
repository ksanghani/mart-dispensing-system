'use strict';

const gulp     = require('gulp');
const util     = require('gulp-util');
const zip      = require('gulp-vinyl-zip');
const symdest  = require('gulp-symdest');
const gulpif   = require('gulp-if');
const fs       = require('fs-extra');
const webpack  = require('webpack');
const config   = require('./webpack.config.js');
const electron = require('gulp-atom-electron');
const argv     = require('yargs').argv;

const WebpackDevServer = require('webpack-dev-server');

const identifier      = 'com.withme';
const electronVersion = '1.3.2';

gulp.task('manifest', () => {
    const json = fs.readJsonSync('./package.json');
    const base = fs.readJsonSync('./src/package.json');
    const NODE_ENV = process.env.NODE_ENV;

    base.scripts.postinstall =
        base.scripts.postinstall.replace('@@TARGET', electronVersion);

    const manifest = Object.assign({}, base, {
        name: `${identifier}.${json.name}${NODE_ENV === 'dev' ? '-dev' : ''}`,
        description: json.description,
        version: json.version,
        license: json.license
    });

    if (NODE_ENV) {
        manifest.env = NODE_ENV;
    }

    return fs.outputJsonSync('./dist/package.json', manifest);
});

gulp.task('copy', () => {
    return gulp
        .src([
            'src/main.js',
            'src/config/*'
        ], { base: 'src' })
        .pipe(gulp.dest('./dist'));
});

gulp.task('webpack', (callback) => {
    const webpackConfig = Object.create(config);

    webpack(webpackConfig, (err, stats) => {
        if (err) throw new util.PluginError('webpack', err);

        util.log('[webpack]', stats.toString({
            colors: true
        }));

        callback();
    });
});

gulp.task('package', () => {
    const { name, version } = fs.readJsonSync('./package.json');
    const platform = argv.platform || 'linux';
    const arch = argv.arch || 'x64';
    const release = `release/${platform}-${arch}`;

    fs.emptyDirSync(`release/${platform}-${arch}`);

    return gulp.src('dist/**')
        .pipe(electron({
            version: electronVersion,
            platform,
            arch
        }))
        .pipe(gulpif(platform === 'darwin', symdest(release)))
        .pipe(gulpif(platform === 'linux', gulp.dest(release)))
        .pipe(zip.dest(`release/${identifier}.${name}-${version}-${platform}-${arch}.zip`));
});

gulp.task('watch', () => {
    gulp.watch(['package.json', 'src/package.json'], ['manifest', 'notice']);
    gulp.watch(['src/main.js', 'src/config/*'], ['copy', 'notice']);
});

gulp.task('notice', () => {
    util.log(util.colors.black.bgYellow('-----------------------------------'));
    util.log(util.colors.black.bgYellow(' Source files have changed!        '));
    util.log(util.colors.black.bgYellow(' Reload your electron instance.    '));
    util.log(util.colors.black.bgYellow('-----------------------------------'));
});

gulp.task('webpack-dev-server', () => {
    const webpackConfig = Object.create(config);

    webpackConfig.entry = webpackConfig.entry.concat([
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080/'
    ]);

    webpackConfig.plugins = webpackConfig.plugins.concat([
        new webpack.HotModuleReplacementPlugin()
    ]);

    const compiler = webpack(webpackConfig);
    const server = new WebpackDevServer(compiler, {
        historyApiFallback: true,
        stats: {
            colors: true
        }
    });

    server.listen(8080, 'localhost', (err) => {
        if (err) throw new util.PluginError('webpack-dev-server', err);

        util.log('[webpack-dev-server]',
            'http://localhost:8080/webpack-dev-server/index.html');
    });
});

gulp.task('default', ['manifest', 'copy', 'watch', 'webpack-dev-server']);
gulp.task('build', ['manifest', 'copy', 'webpack']);
