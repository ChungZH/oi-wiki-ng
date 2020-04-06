/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "7922bb8879640d81f8483b8339dbd8c9"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "519275a2e7c073f577a631244565da8d"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "eee2aabf79090f188c6455b6ddd90b61"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "ac5cb410d5983630f4e1d9f54b92ebf7"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "921a0bb1e1b54b1a8c0456d37b96d788"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "e6d65294567f1d06bb2827c8c48bea00"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "53be2711bcb979adf1b445357314d594"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "3b0c35ed49c2368f63f128e10ab55dad"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "db2c2aa7126e3026daa49022724bad07"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "706edc0c2699f7e4fbe019be461f51cc"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "76ad8f6392774f466913e6c8e1d1d62f"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "28a5eecdca0f590555445faa5764966d"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "29b7456944571816b51445f42d556d0f"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "5bd84598b560456325e79860cbd4a440"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "70391c156306982994772f6d2eb7e583"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "ad8cf043b7b16c339d4a063f55eedae4"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "409185b4b48ba133266454fe3e277a4a"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "becd73fa324bfa3709f421c539fc4679"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "4be78716a074756dcbb62dfda321107d"
  },
  {
    "url": "page-data/theme-guide/customization/page-data.json",
    "revision": "33544e51f193d8924a2f15a1fe227431"
  },
  {
    "url": "page-data/theme-guide/mdx-components/page-data.json",
    "revision": "59a06c49c0487f9b35753fecc82ca46e"
  },
  {
    "url": "page-data/theme-guide/navigation/page-data.json",
    "revision": "b137bc6d0b39f26b0679729f2a63e540"
  },
  {
    "url": "page-data/theme-guide/page-data.json",
    "revision": "83e0fbe7549376da291fac9d3c5cae6e"
  },
  {
    "url": "13-899d0ba69f7487f84b0e.js"
  },
  {
    "url": "252f366e-6fd6fabcac958df6ce74.js"
  },
  {
    "url": "app-df6d36c6ac8648fbd55b.js"
  },
  {
    "url": "bab4896a-2756987806c3fc9038c0.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-d114d0083f2312cf64f0.js"
  },
  {
    "url": "component---src-pages-404-js-949d4c5e9ae0e68b9d4a.js"
  },
  {
    "url": "component---src-pages-pages-js-ba719e67671b1a3dca36.js"
  },
  {
    "url": "component---src-pages-tags-js-a9515e1de25662f0c628.js"
  },
  {
    "url": "component---src-templates-doc-js-5167b00c314e51d15b26.js"
  },
  {
    "url": "component---src-templates-tags-js-14699e14c1f25976b982.js"
  },
  {
    "url": "extra.js"
  },
  {
    "url": "f86031bd1ddfa9e115cd9bb56d044332800ba4da-c3e0343ddef6c2bc21e6.js"
  },
  {
    "url": "framework-e94c62ba7ecbd1156bac.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-f187bdb8a6e5cf666a7e.js"
  },
  {
    "url": "webpack-runtime-958245ff8c7f36c5c458.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ea113a51dd926b04b560a5442a65f8e7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-df6d36c6ac8648fbd55b.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
