const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/mmdb/movie',
    createProxyMiddleware({
      target: 'https://api.maoyan.com',
      changeOrigin: true,
      // pathRewrite: rewriteFn
    })
  );
};

const rewriteFn = function (path, req) {
  console.log({ path })
  return path.replace('/mmdb/movie', '/');
};