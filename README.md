# @koa/webpack-hot-middleware
webpack dev middleware for koa 2.x.

## 自己用的，别人的我管不了，我也不一定维护

## Usage

```javascript
const app = require('koa')();
const webpackMiddleware = require("webpack-hot-middleware-by-koa2");
app.use(webpackMiddleware(...));
```

### Example usage
```javascript
const app = require('koa')();
app.use(webpackMiddleware(webpack({
    // webpack options
    // webpackMiddleware takes a Compiler object as first parameter
    // which is returned by webpack(...) without callback.
    entry: "...",
    output: {
        path: "/"
        // no real path is required, just pass "/"
        // but it will work with other paths too.
    }
}), {
    // all options optional

    noInfo: false,
    // display no info to console (only warnings and errors)

    quiet: false,
    // display nothing to the console

    lazy: true,
    // switch into lazy mode
    // that means no watching, but recompilation on every request

    watchDelay: 300,
    // delay after change (only lazy: false)

    publicPath: "/assets/",
    // public path to bind the middleware to
    // use the same as in webpack

    headers: { "X-Custom-Header": "yes" },
    // custom headers

    stats: {
        colors: true
    }
    // options for formating the statistics
}));
```