if (!self.define) {
    let e,
        s = {};
    const n = (n, i) => (
        (n = new URL(n + '.js', i).href),
        s[n] ||
            new Promise((s) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    ((e.src = n), (e.onload = s), document.head.appendChild(e));
                } else ((e = n), importScripts(n), s());
            }).then(() => {
                let e = s[n];
                if (!e) throw new Error(`Module ${n} didn’t register its module`);
                return e;
            })
    );
    self.define = (i, t) => {
        const a = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[a]) return;
        let c = {};
        const r = (e) => n(e, a),
            d = { module: { uri: a }, exports: c, require: r };
        s[a] = Promise.all(i.map((e) => d[e] || r(e))).then((e) => (t(...e), c));
    };
}
define(['./workbox-5c0ed218'], function (e) {
    'use strict';
    (importScripts(),
        self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                {
                    url: '/_next/app-build-manifest.json',
                    revision: 'da2dd5a6f036f60fccd482792199b1bd',
                },
                {
                    url: '/_next/static/IQdFPD9QRD0Y76n8HD_s1/_buildManifest.js',
                    revision: '7941cd2e5727b8ab2b9020743e06b3ad',
                },
                {
                    url: '/_next/static/IQdFPD9QRD0Y76n8HD_s1/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                {
                    url: '/_next/static/chunks/116.585fd2e5656191c7.js',
                    revision: '585fd2e5656191c7',
                },
                {
                    url: '/_next/static/chunks/273.5f8badbdb6f7a1bd.js',
                    revision: '5f8badbdb6f7a1bd',
                },
                {
                    url: '/_next/static/chunks/315-6a94162945ee7e4a.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/533-25d34aca8158d5a8.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-16b8c5072d40e5c2.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/app/layout-4ca1f0d3bef4c495.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/app/page-fa9cca8a0d93d39f.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/c57b036f-f7b96fd4025b2672.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/framework-ffa79524b3b2762d.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/main-1609d7da3e7e737c.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/main-app-ecf53726c99474e2.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/pages/_app-cce2a53abc330b31.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/pages/_error-656be519436934b2.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                {
                    url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
                    revision: '846118c33b2c0e922d7b3a7676f81f6f',
                },
                {
                    url: '/_next/static/chunks/webpack-b712c1c73ecdd6f9.js',
                    revision: 'IQdFPD9QRD0Y76n8HD_s1',
                },
                { url: '/_next/static/css/2727517ba2fb0fdf.css', revision: '2727517ba2fb0fdf' },
                { url: '/favicon.png', revision: 'a7200bf7ac1f4357fd9f5d57fece55dd' },
                { url: '/icons/192x192.png', revision: '259aa264e8da70175f03e1e78f495685' },
                { url: '/icons/512x512.png', revision: 'a7c4846310a7506d3fdb60caabfd9406' },
                { url: '/images/bambi.jpg', revision: '9bf5c3a2232b22994017f5b3792fe5c2' },
                { url: '/images/lucy.jpg', revision: '6daef32f80287ce2c371d14cfde52e5f' },
                { url: '/images/techies.gif', revision: 'f7ff3ede07646196bc0dab74d63f2bbb' },
                { url: '/images/zoey.jpg', revision: 'f16065228ef31565747d323cee877485' },
                { url: '/manifest.webmanifest', revision: '4e1572f24ebdf1a4d684bb5ac29af638' },
            ],
            { ignoreURLParametersMatching: [] },
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            '/',
            new e.NetworkFirst({
                cacheName: 'start-url',
                plugins: [
                    {
                        cacheWillUpdate: async ({ request: e, response: s, event: n, state: i }) =>
                            s && 'opaqueredirect' === s.type
                                ? new Response(s.body, {
                                      status: 200,
                                      statusText: 'OK',
                                      headers: s.headers,
                                  })
                                : s,
                    },
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            function (e) {
                return 'document' === e.request.destination;
            },
            new e.NetworkFirst({ cacheName: 'pages', networkTimeoutSeconds: 3, plugins: [] }),
            'GET',
        ),
        e.registerRoute(
            function (e) {
                var s = e.request;
                return ['script', 'style', 'worker'].includes(s.destination);
            },
            new e.StaleWhileRevalidate({ cacheName: 'assets', plugins: [] }),
            'GET',
        ),
        e.registerRoute(
            function (e) {
                return 'image' === e.request.destination;
            },
            new e.StaleWhileRevalidate({ cacheName: 'images', plugins: [] }),
            'GET',
        ),
        e.registerRoute(
            /^https:\/\/fonts\.(gstatic|googleapis)\.com\/.*/i,
            new e.CacheFirst({
                cacheName: 'google-fonts',
                plugins: [new e.ExpirationPlugin({ maxEntries: 30, maxAgeSeconds: 31536e3 })],
            }),
            'GET',
        ));
});
