'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7e200f5550731b6671336a2df9bcfcf8",
"assets/assets/icons/bandeiraBRAIcon.png": "9602cc52cc48afe08e5e14cf1101268d",
"assets/assets/icons/bandeiraEUAIcon.png": "4802227c362c1702ae8ed051732b66f1",
"assets/assets/icons/bandeiraSPAIcon.png": "224685485da872287658bf04cfcbffa8",
"assets/assets/icons/chat.svg": "6603c9da23d55c3ab75cf052cf2e5b53",
"assets/assets/icons/facebook.svg": "e44d4dd6594e6ae6718a89059f29cdc7",
"assets/assets/icons/google-plus.svg": "3f71987b1e86c1f980e19a685acd040c",
"assets/assets/icons/login.svg": "a7711b1f104c98c8ae18420653074837",
"assets/assets/icons/signup.svg": "2fa408c0387578db0675dc11edc3e0fa",
"assets/assets/icons/twitter.svg": "7e145c9eb60da95379f070be9920eca5",
"assets/assets/images/A01F1.png": "cbd94c6516b84ef774d456287cbe4758",
"assets/assets/images/A01F10.png": "f6efb5c009d0d3628e606fa6a4144efc",
"assets/assets/images/A01F11.png": "eac87f712a2f6862684416db3b0c5750",
"assets/assets/images/A01F12.png": "30283fe4fb836013123c1e231f168946",
"assets/assets/images/A01F13.png": "7e04c35c5d5538b8b9d36c60d84d5d77",
"assets/assets/images/A01F14.png": "c0e5c25780e6ad2a9dcf72352b74cbe0",
"assets/assets/images/A01F15.png": "5031c5c6de1c87ddb90d2bc83addee5a",
"assets/assets/images/A01F16.png": "8b6b61e036d11edbb2dafd80b1bdfe67",
"assets/assets/images/A01F2.png": "3783ff938cf7b9b59a1d79fda9935bb8",
"assets/assets/images/A01F3.png": "239f8e09e61bb557693bad58694f9a1a",
"assets/assets/images/A01F4.png": "821168bcba95dc22d4e6a9446d1f2e8f",
"assets/assets/images/A01F5.png": "453b6d1adb367cbff02799aeac63b410",
"assets/assets/images/A01F6.png": "3172deeb59909bf8145c08fc81da1772",
"assets/assets/images/A01F7.png": "c144227cec5bb5519bea121b7c46d030",
"assets/assets/images/A01F8.png": "7d23f16c42fbff0fee3b4f02af32ead5",
"assets/assets/images/A01F9.png": "b9941eb325d00a97acf293c0250a6786",
"assets/assets/images/G1F1.png": "d5bc8d8b8e27e324750909932e1bbcc9",
"assets/assets/images/G1F2.png": "7c6f04eae9a74182b227fab705e0d86e",
"assets/assets/images/G2F1.png": "fa1456b1e97e43d7ea5f4a1448e1c349",
"assets/assets/images/G2F2.png": "11054e9cf22c69d83e007337f72b038b",
"assets/assets/images/G3F1.png": "be28839348120af0463687bfee776f4f",
"assets/assets/images/G3F2.png": "dd568db00931b3f80c8ca637b04ca842",
"assets/assets/images/G4F1.png": "e5f6087d88a946bff12169e004efb248",
"assets/assets/images/G4F2.png": "29e5095a1fed357df5a2a1ce9c41e844",
"assets/assets/images/G5F1.png": "02643d4376c74a6730946ae3b2b0a88b",
"assets/assets/images/G5F2.png": "c810174f37a312ef37c872c50c90a4ab",
"assets/assets/images/G6F1.png": "756aa460a20f6800c331277afab2afc3",
"assets/assets/images/G6F2.png": "9b44ad8c6ce6983685621ded4d41c87d",
"assets/assets/images/livrovibracao.webp": "68e6b911d437c8fba26c1298bb740700",
"assets/assets/langs/en_US.json": "8dcaf6e2ec13ea9b01370b0f44d8e7e6",
"assets/assets/langs/es_ES.json": "80ad2deec94f1f2576144322ce29238d",
"assets/assets/langs/pt_BR.json": "e6f466e0690e89a58ae4d611b0c65b13",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "3ff498a60a73784e6509b5c5de83b80c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "098eb9aa43c17d45d1945b46bd78a3ec",
"/": "098eb9aa43c17d45d1945b46bd78a3ec",
"main.dart.js": "0ecfd4e5df63cf7c67bade60ebf259c6",
"manifest.json": "366d24dab98978321bf2af740356be97",
"version.json": "987471763695800e243621872bc3a279"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
