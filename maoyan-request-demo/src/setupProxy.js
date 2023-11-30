const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/mmdb',
    createProxyMiddleware({
      target: 'https://api.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/sns',
    createProxyMiddleware({
      target: 'https://api.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/avitrade',
    createProxyMiddleware({
      target: 'https://api.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/market',
    createProxyMiddleware({
      target: 'https://api.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/review',
    createProxyMiddleware({
      target: 'https://api.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/maoyansh',
    createProxyMiddleware({
      target: 'https://wx.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/position',
    createProxyMiddleware({
      target: 'https://ad.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/vod',
    createProxyMiddleware({
      target: 'https://vod-movie.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/ajax/filterCinemas',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/ajax/moreCinemas',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/mtrade/cinema',
    createProxyMiddleware({
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/mtrade/mmcs',
    createProxyMiddleware({
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    })
  );
};
