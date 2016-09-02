Run:

```
fig up

fig ps
# should show all services are up
```

Test
```
babl -c localhost:4445 ping larskluge/string-upcase
# => ping.. pong
```

Run the tests:
```
fig run testsuite mocha
```
