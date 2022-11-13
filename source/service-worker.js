/** @format */
/* aiok learn form https://blog.skk.moe/post/hello-workbox/ */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js'
);
workbox.setConfig({
  modulePathPrefix: 'https://storage.googleapis.com/workbox-cdn/releases/3.6.1/',
});
// 定义缓存版本号和默认 Cache Storage 条目数
let cacheSuffixVersion = '-181111';
const maxEntries = 100;
workbox.routing.registerRoute(
  // 使用正则表达式匹配路由
  new RegExp('^https://imgur.lzmun.com/'),
  workbox.strategies.cacheFirst({
    // cache storage 名称和版本号
    cacheName: 'img-cache' + cacheSuffixVersion,
    plugins: [
      // 使用 expiration 插件实现缓存条目数目和时间控制
      new workbox.expiration.Plugin({
        // 最大保存项目
        maxEntries,
        // 缓存 30 天
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
      // 使用 cacheableResponse 插件缓存状态码为 0 的请求
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);
workbox.routing.registerRoute(
  new RegExp('^https://cdn.jsdelivr.net'),
  workbox.strategies.cacheFirst({
    cacheName: 'static-lib' + cacheSuffixVersion,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);
workbox.routing.registerRoute(
  // Cache Image File
  /.*\.(?:png|jpg|jpeg|svg|gif)/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'img-cache' + cacheSuffixVersion,
  })
);

workbox.routing.registerRoute(
  // Cache CSS & JS files
  /.*\.(css|js)/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-assets-cache',
  })
);
workbox.routing.setDefaultHandler(
  workbox.strategies.networkFirst({
    options: [
      {
        // 超过 3s 请求没有响应则 fallback 到 cache
        networkTimeoutSeconds: 3,
      },
    ],
  })
);
