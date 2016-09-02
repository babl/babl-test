FROM mhart/alpine-node:6.5.0
ADD package.json test /data/
WORKDIR /data
RUN npm install -g mocha
RUN npm install
CMD ["echo"]
