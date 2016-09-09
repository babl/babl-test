FROM mhart/alpine-node:6.5.0
ENV BABL_ENDPOINT supervisor:4445
ADD server package.json /data/
WORKDIR /data
RUN npm install
CMD ["./server"]
