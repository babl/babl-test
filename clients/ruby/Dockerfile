FROM ruby:2.3.1
ENV BABL_ENDPOINT supervisor:4445
ENV RACK_ENV production
ADD Gemfile server /data/
WORKDIR /data
RUN bundle
CMD ["./server", "-p 3000"]
