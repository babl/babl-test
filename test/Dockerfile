FROM mhart/alpine-node:latest
ADD package.json test /data/
WORKDIR /data
RUN npm install -g mocha
RUN npm install
CMD ["echo"]
