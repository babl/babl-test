Run:

```
bin/compose up
```

Check if everything is Up:
```
bin/compose ps
```

Ping any module to see if it's all good:
```
babl -c localhost:4445 ping larskluge/string-upcase
=> ping.. pong
```

Run the tests:
```
bin/test
# or
CLIENT=ruby bin/test
```
where `CLIENT` is a comma-separated list. Supported values: node, ruby, cli.

To use custom version of babl-server in all declared modules place `babl-server_linux_amd64` file inside `dev` directory.

Use `bin/compose` like `docker-compose`.
