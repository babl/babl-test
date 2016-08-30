Run:

```
fig up
# module and supervisor will crash

fig scale module=1
fig scale supervisor=1
fig scale supervisor=1

fig ps
# should show all services are up

# test
babl -c localhost:4445 ping larskluge/string-upcase
```
