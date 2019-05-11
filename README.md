# Sample React App

You can run the app with a simple Nginx Docker command similar to:

```
docker run -p 8000:80 --rm -v "$(pwd)":/usr/share/nginx/html:ro nginx:alpine
```


## Troubleshooting

### `mjs` file extension support

Unfortunately, Nginx does not support the `mjs` mimetype out of the box so we
have to add a custom config to add the type:

```
# /etc/nginx/conf.d/mimetypes.conf
types {
  application/javascript mjs;
}
```

Alternatively, you could use something like [serve](https://www.npmjs.com/package/serve)
by running `npx serve`. You could even install it locally so it wouldn't attempt
to fetch the package each time you run the command.
