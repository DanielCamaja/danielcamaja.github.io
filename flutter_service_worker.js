'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1f6a22147e0f3a3899af4b8e6e68db59",
"index.html": "61dbce61cc20b5a9cf42d3e3fd3a1056",
"/": "61dbce61cc20b5a9cf42d3e3fd3a1056",
"main.dart.js": "6f4ba94670c9f9fe0a70258fa1e5e1ae",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "79b7eb3cb062f106d7e550ae51344c6d",
"assets/images/ic_qr_code.svg": "eb6c73fe9dfc9a8b6d6c11bd7e43307c",
"assets/images/ic_promo_code.png": "98b7022610491b1b24a820e9ea341663",
"assets/images/ic_table.png": "a73052fe592544c687205ca2a3278fe8",
"assets/images/ic_notification.png": "fd6be879f388f618bec50ef4076f9238",
"assets/images/ic_refer_friends_bg.jpg": "790c4985c60f8872b3435bfb8b7f1b53",
"assets/images/ic_chair.png": "41f2e68889d5ba581f1d02fff8000cd7",
"assets/images/ic_qr_code.png": "e758ade82ea537431d006079ee4dfd90",
"assets/images/ic_reward_credits.png": "c990be37382f6848efa768d9bdcfda6b",
"assets/images/ic_table1.png": "e20ec7c13960bf57a2f4eceaf22aa47c",
"assets/images/ic_logout.png": "11acf451d25948a0e24e4c2bd229e8ad",
"assets/images/details_shoes_image.webp": "e4afa529d8da1dc8baa9162fab2e70f7",
"assets/images/ic_invite_friends.png": "e58787bd1cce020acf621ccca406fcee",
"assets/images/ic_thank_you.png": "e3da3aa3b72fc3710ceb7034ac0d0cd0",
"assets/images/ic_payment.png": "99c09853ec20433fd55b7257231a067f",
"assets/images/ic_search.png": "b860c953d089423d9e27e7c1b580537f",
"assets/images/ic_settings.png": "d5ff1f38c476aa104d4699e7d5ccfb19",
"assets/images/ic_shopping_cart.png": "b4c55a27c5aa530e184d8e7ed86ad470",
"assets/images/ic_logo.png": "bf4abbec7e134caba3dafaaed82f4c7e",
"assets/images/ic_chair4.png": "a735d49578249096450113a75e32b1f5",
"assets/images/ic_user_profile.png": "2a4975c025ddd9bc4989038909d2b909",
"assets/images/shoes_1.png": "c43334ac9ca06bd16349a21a4aa1b16a",
"assets/images/ic_support.png": "346002f79dd5f2912e5fa1bcad74c046",
"assets/images/shoes_2.png": "328c0835f309cbe95d273f02e55024a0",
"assets/images/shoes_3.png": "1b4652bb112c3df049687664e7f136f3",
"assets/images/slider_img.webp": "896ef227e2575fe21532459d771eb652",
"assets/images/ic_chair2.png": "eb4e9e981a8070214e3b9e084ad27383",
"assets/images/shoes_7.png": "402d393581add1f6674eeacae1bd556e",
"assets/images/shoes_6.png": "76bfd76c09993557d212a8dbd0346f6a",
"assets/images/ic_chair1.png": "c8db862febbeaa46734e81c729f97783",
"assets/images/ic_about_us.png": "e4f524339506bbd81215ad722c56868e",
"assets/images/shoes_4.png": "1c14fd11d0da730016d466cf9ca067f2",
"assets/images/shoes_5.png": "b9f6d5117ae6d815ed32340b5ab6c527",
"assets/AssetManifest.json": "8e5160486d00ee386e3cd49368ec66d5",
"assets/NOTICES": "12db5a9b654909c4735d8ae7ed779791",
"assets/FontManifest.json": "5ab2b67a307aae328bb6434a8cd29268",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"assets/fonts/helvetica/HelveticaNeue_Medium.ttf": "0a13c540938b1b7dd3996b02ea568e5f",
"assets/fonts/helvetica/HelveticaNeue_Regular.ttf": "ccad04d46768981ff847f22e8a53b5b3",
"assets/fonts/helvetica/HelveticaNeue_BlackCond.ttf": "4ff686ee78ff095848014f4283f67a41",
"assets/fonts/helvetica/HelveticaNeue-Bold.ttf": "b8edca3e45f1f16bc6e20464bd8f2fff",
"assets/fonts/helvetica/HelveticaNeue_Light.ttf": "0facaae97183b8fede52099930aefd8d",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
