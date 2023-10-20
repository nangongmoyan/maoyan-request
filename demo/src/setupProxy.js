const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(createProxyMiddleware('/mmdb',
    {
      "target": "https://api.maoyan.com",
      "changeOrigin": true,
    }))
}