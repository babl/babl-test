FROM mhart/alpine-node:6.5.0
RUN npm install -g mocha
WORKDIR /data
ADD package.json /data/
RUN npm install
ADD test /data/test/
ADD scenarios /data/scenarios/
CMD ["echo"]
