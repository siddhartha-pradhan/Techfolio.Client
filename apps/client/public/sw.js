if (!self.define) {
    let e,
        c = {};
    const s = (s, n) => (
        (s = new URL(s + '.js', n).href),
        c[s] ||
            new Promise((c) => {
                if ('document' in self) {
                    const e = document.createElement('script');
                    ((e.src = s), (e.onload = c), document.head.appendChild(e));
                } else ((e = s), importScripts(s), c());
            }).then(() => {
                let e = c[s];
                if (!e) throw new Error(`Module ${s} didn’t register its module`);
                return e;
            })
    );
    self.define = (n, i) => {
        const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (c[t]) return;
        let a = {};
        const r = (e) => s(e, t),
            o = { module: { uri: t }, exports: a, require: r };
        c[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), a));
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
                    url: '/_next/static/chunks/191-aa3bbc097a2ccd9d.js',
                    revision: 'aa3bbc097a2ccd9d',
                },
                {
                    url: '/_next/static/chunks/384-f28c59013feb2b25.js',
                    revision: 'f28c59013feb2b25',
                },
                {
                    url: '/_next/static/chunks/7a243e6b-e79eb2ba65f94547.js',
                    revision: 'e79eb2ba65f94547',
                },
                {
                    url: '/_next/static/chunks/app/_global-error/page-32ccbca386c1b788.js',
                    revision: '32ccbca386c1b788',
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-3b16300d436938a7.js',
                    revision: '3b16300d436938a7',
                },
                {
                    url: '/_next/static/chunks/app/layout-75e2fa0b088b5c98.js',
                    revision: '75e2fa0b088b5c98',
                },
                {
                    url: '/_next/static/chunks/app/page-256e81b02e0a18e2.js',
                    revision: '256e81b02e0a18e2',
                },
                {
                    url: '/_next/static/chunks/framework-6c562198cd4f8865.js',
                    revision: '6c562198cd4f8865',
                },
                {
                    url: '/_next/static/chunks/main-89eae6b7715508f4.js',
                    revision: '89eae6b7715508f4',
                },
                {
                    url: '/_next/static/chunks/main-app-27fa1ac4a3965af4.js',
                    revision: '27fa1ac4a3965af4',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/app-error-32ccbca386c1b788.js',
                    revision: '32ccbca386c1b788',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/forbidden-32ccbca386c1b788.js',
                    revision: '32ccbca386c1b788',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/global-error-9710b7b909b3f87e.js',
                    revision: '9710b7b909b3f87e',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/not-found-32ccbca386c1b788.js',
                    revision: '32ccbca386c1b788',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/unauthorized-32ccbca386c1b788.js',
                    revision: '32ccbca386c1b788',
                },
                {
                    url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
                    revision: '846118c33b2c0e922d7b3a7676f81f6f',
                },
                {
                    url: '/_next/static/chunks/webpack-6a82b9a3f57ab474.js',
                    revision: '6a82b9a3f57ab474',
                },
                { url: '/_next/static/css/dc748099e5e4ac5e.css', revision: 'dc748099e5e4ac5e' },
                {
                    url: '/_next/static/nz2xslS_k_LaOxyajg7IX/_buildManifest.js',
                    revision: 'a326463c9047197dcf4a54ee587b36ab',
                },
                {
                    url: '/_next/static/nz2xslS_k_LaOxyajg7IX/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                { url: '/favicon.png', revision: 'a7200bf7ac1f4357fd9f5d57fece55dd' },
                { url: '/icons/192x192.png', revision: '259aa264e8da70175f03e1e78f495685' },
                { url: '/icons/512x512.png', revision: 'a7c4846310a7506d3fdb60caabfd9406' },
                { url: '/images/bambi.jpg', revision: '9bf5c3a2232b22994017f5b3792fe5c2' },
                { url: '/images/lucy.jpg', revision: '6daef32f80287ce2c371d14cfde52e5f' },
                { url: '/images/techies.gif', revision: 'f7ff3ede07646196bc0dab74d63f2bbb' },
                { url: '/images/zoey.jpg', revision: 'f16065228ef31565747d323cee877485' },
                { url: '/manifest.webmanifest', revision: '341b2b7dd68612cca8a0b4b39edc54c2' },
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
                        cacheWillUpdate: async ({ request: e, response: c, event: s, state: n }) =>
                            c && 'opaqueredirect' === c.type
                                ? new Response(c.body, {
                                      status: 200,
                                      statusText: 'OK',
                                      headers: c.headers,
                                  })
                                : c,
                    },
                ],
            }),
            'GET',
        ),
        e.registerRoute(
            ({ request: e }) => 'document' === e.destination,
            new e.NetworkFirst({ cacheName: 'pages', networkTimeoutSeconds: 3, plugins: [] }),
            'GET',
        ),
        e.registerRoute(
            ({ request: e }) => ['script', 'style', 'worker'].includes(e.destination),
            new e.StaleWhileRevalidate({ cacheName: 'assets', plugins: [] }),
            'GET',
        ),
        e.registerRoute(
            ({ request: e }) => 'image' === e.destination,
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
