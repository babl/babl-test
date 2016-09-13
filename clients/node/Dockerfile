FROM mhart/alpine-node:6.5.0
ADD server package.json /data/
WORKDIR /data
RUN npm install
CMD ["./server"]
