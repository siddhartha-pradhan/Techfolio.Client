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
    self.define = (i, c) => {
        const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (s[t]) return;
        let a = {};
        const r = (e) => n(e, t),
            d = { module: { uri: t }, exports: a, require: r };
        s[t] = Promise.all(i.map((e) => d[e] || r(e))).then((e) => (c(...e), a));
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
                    revision: 'd97c7e178c668bb575acec11cce74437',
                },
                {
                    url: '/_next/static/chunks/148.d362f559abcb5d59.js',
                    revision: 'd362f559abcb5d59',
                },
                {
                    url: '/_next/static/chunks/253-6e1ebc44efc411c2.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/558.b5d68fb311e3504b.js',
                    revision: 'b5d68fb311e3504b',
                },
                {
                    url: '/_next/static/chunks/658-6a4d9445cf50c9a9.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-083a145b0315573d.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/app/layout-dcf46bfebc294728.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/app/page-5e797862a85c69b0.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/dbfee710-ae4fd846fa5d889d.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/framework-2eb0f313d1be0218.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/main-ac7adca1dfcacbcf.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/main-app-7ab51c35841e1c9b.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/pages/_app-927d3198a766c5df.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/pages/_error-700ba20b8ebaee7d.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                {
                    url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
                    revision: '846118c33b2c0e922d7b3a7676f81f6f',
                },
                {
                    url: '/_next/static/chunks/webpack-da2fc22283177aae.js',
                    revision: 'wdYkGNYLCSI0wQ-SdJyOI',
                },
                { url: '/_next/static/css/eb2a02edbc00e656.css', revision: 'eb2a02edbc00e656' },
                {
                    url: '/_next/static/wdYkGNYLCSI0wQ-SdJyOI/_buildManifest.js',
                    revision: '0e740010d8e9ed7d9466c892773022e2',
                },
                {
                    url: '/_next/static/wdYkGNYLCSI0wQ-SdJyOI/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                { url: '/favicon.svg', revision: '50764f72c514ccf4003c3d6064d9ee53' },
                { url: '/icons/192x192.png', revision: 'cd6fece2437e26bc5f92aeb68c781b1a' },
                { url: '/icons/512x512.png', revision: 'e13937b20bae89872b353e541705543c' },
                { url: '/images/bambi.jpg', revision: '9bf5c3a2232b22994017f5b3792fe5c2' },
                { url: '/images/lucy.jpg', revision: '6daef32f80287ce2c371d14cfde52e5f' },
                { url: '/images/zoey.jpg', revision: 'f16065228ef31565747d323cee877485' },
                { url: '/manifest.webmanifest', revision: 'e59c01da159ef47918b8dc97b34fed34' },
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
