FROM docker.with.me/ubuntu-14.04:node-6
MAINTAINER Mario Tacke

RUN apt-get update --fix-missing
RUN apt-get install -y dpkg-dev debhelper python wget

# setup local filesystem
ADD . /root/app
WORKDIR /root/app

CMD (cd debian && ./build.sh $NODE_ENV)
