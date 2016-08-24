echo "Cleaning artifacts..." && npm run clean
echo "Installing dependencies..." && npm install
echo "Downloading assets..." && npm run setup
echo "Linting..." && npm run lint
echo "Building..." && npm run build
echo "Installing electron dependencies..." && (cd ../dist/ && npm install --unsafe-perm)
echo "Packaging..." && npm run package

extract ()
{
    echo $(cat ../package.json | grep "$1" | sed -e 's/.*"\(.*\)",/\1/')
}

replace ()
{
    sed -e "s/@PRODUCT/$PRODUCT/g; \
            s/@VERSION/$VERSION/g; \
            s/@EMAIL/$EMAIL/g; \
            s/@TIMESTAMP/$TIMESTAMP/g; \
            s/@SUMMARY/$SUMMARY/g; \
            s/@DESCRIPTION/$DESCRIPTION/g" "$1" > "$2"
}

if [ "$1" = "dev" ]; then
  SUFFIX="-dev"
fi

PRODUCT=$(extract "name")$SUFFIX
SUMMARY=$(extract "description")
DESCRIPTION=$(extract "description")
VERSION=$(extract "version")
EMAIL="WithMe Ops <ops@with.me>"
TIMESTAMP=$(date +"%a, %d %b %Y %H:%M:%S %z")
USER="swm"
DIST="dist/$PRODUCT-$VERSION"

rm -rf dist/
mkdir -p $DIST/debian/source
mkdir -p $DIST/home/$USER/$PRODUCT

echo "1.0" > $DIST/debian/source/format
echo "9" > $DIST/debian/compat

replace changelog $DIST/debian/changelog
replace control $DIST/debian/control
# replace files $DIST/debian/files

cp rules $DIST/debian/rules
chmod +x $DIST/debian/rules

cp -R ../release/linux*/* $DIST/home/$USER/$PRODUCT

(cd $DIST && dpkg-buildpackage)
