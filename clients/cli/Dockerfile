FROM ruby:2.3.1
ENV RACK_ENV production
ADD babl /bin/
ADD Gemfile server /data/
WORKDIR /data
RUN bundle
CMD ["./server", "-p 3000"]
