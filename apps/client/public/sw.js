if (!self.define) {
    let e,
        c = {};
    const s = (s, i) => (
        (s = new URL(s + '.js', i).href),
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
    self.define = (i, n) => {
        const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
        if (c[t]) return;
        let a = {};
        const r = (e) => s(e, t),
            o = { module: { uri: t }, exports: a, require: r };
        c[t] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (n(...e), a));
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
                    url: '/_next/static/5qO1NW1INvegKx4T9QEi6/_buildManifest.js',
                    revision: 'a326463c9047197dcf4a54ee587b36ab',
                },
                {
                    url: '/_next/static/5qO1NW1INvegKx4T9QEi6/_ssgManifest.js',
                    revision: 'b6652df95db52feb4daf4eca35380933',
                },
                {
                    url: '/_next/static/chunks/366-d18e43e169b9e40c.js',
                    revision: 'd18e43e169b9e40c',
                },
                {
                    url: '/_next/static/chunks/515-9c760e411de87ded.js',
                    revision: '9c760e411de87ded',
                },
                {
                    url: '/_next/static/chunks/app/_global-error/page-6c76a0070c5b7cba.js',
                    revision: '6c76a0070c5b7cba',
                },
                {
                    url: '/_next/static/chunks/app/_not-found/page-6b183fd8901a5380.js',
                    revision: '6b183fd8901a5380',
                },
                {
                    url: '/_next/static/chunks/app/layout-a713a7e1ee3b29e2.js',
                    revision: 'a713a7e1ee3b29e2',
                },
                {
                    url: '/_next/static/chunks/app/page-1aca226c18a489a3.js',
                    revision: '1aca226c18a489a3',
                },
                {
                    url: '/_next/static/chunks/f8b76395-76336b92bf155843.js',
                    revision: '76336b92bf155843',
                },
                {
                    url: '/_next/static/chunks/framework-b29ac38d080a641b.js',
                    revision: 'b29ac38d080a641b',
                },
                {
                    url: '/_next/static/chunks/main-5a4dbf326645ce1c.js',
                    revision: '5a4dbf326645ce1c',
                },
                {
                    url: '/_next/static/chunks/main-app-f0fb249fc2c113b8.js',
                    revision: 'f0fb249fc2c113b8',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/app-error-6c76a0070c5b7cba.js',
                    revision: '6c76a0070c5b7cba',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/forbidden-6c76a0070c5b7cba.js',
                    revision: '6c76a0070c5b7cba',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/global-error-9ed20555528c78fa.js',
                    revision: '9ed20555528c78fa',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/not-found-6c76a0070c5b7cba.js',
                    revision: '6c76a0070c5b7cba',
                },
                {
                    url: '/_next/static/chunks/next/dist/client/components/builtin/unauthorized-6c76a0070c5b7cba.js',
                    revision: '6c76a0070c5b7cba',
                },
                {
                    url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
                    revision: '846118c33b2c0e922d7b3a7676f81f6f',
                },
                {
                    url: '/_next/static/chunks/webpack-5844fc628f3cace3.js',
                    revision: '5844fc628f3cace3',
                },
                { url: '/_next/static/css/dc748099e5e4ac5e.css', revision: 'dc748099e5e4ac5e' },
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
                        cacheWillUpdate: async ({ request: e, response: c, event: s, state: i }) =>
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
