FROM mhart/alpine-node:6.5.0
ADD package.json /data/
ADD test /data/test/
ADD scenarios /data/scenarios/

WORKDIR /data
RUN npm install -g mocha
RUN npm install
ENV BABL_ENDPOINT supervisor:4445
CMD ["echo"]
