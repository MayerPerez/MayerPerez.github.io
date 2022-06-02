'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "76625e685b598799834cef92ab92fffa",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "ba69225b5c2dfb31f07092fe8c53911b",
"main.dart.js": "2ac38796b886ce61c72ab1266880bd6b",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"index.html": "170e4f120e0708c8632475a1d7a4348e",
"/": "170e4f120e0708c8632475a1d7a4348e",
"assets/AssetManifest.json": "7b43fe9b849ef31f938adead3d43c4ea",
"assets/NOTICES": "94b976561df879a55982663d601f0b03",
"assets/FontManifest.json": "87975742dfc3bbe78d868b1d384012b0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/img/intro/usuario.png": "471a1ad342659289433e05a611d206f8",
"assets/assets/img/intro/news.png": "f58723cfa0992f6fda50ed7ebe1ede25",
"assets/assets/img/logo_fortuna_1.PNG": "33e2f96aac7c55dad2dff30bb6a3193d",
"assets/assets/img/notices/lupa.png": "c047592db60569b86535dc2088e73147",
"assets/assets/img/dialog/phone.svg": "a8e989795fae3ec85fac3a11dfff4c17",
"assets/assets/img/dialog/phone.png": "c46b1d2f922e9771eb5c19479270ef79",
"assets/assets/img/dialog/birthday.jpg": "a3733b5e2741459e1365d8a850435dbb",
"assets/assets/img/dialog/email.jpg": "e4a803e0cf6012e7fffc22debdecc928",
"assets/assets/img/logo_avi_1.png": "fd0c2053efc114572609d1a5c0311580",
"assets/assets/img/logos/logo-h-blue.png": "6db949958582869311cf6fa21b070503",
"assets/assets/img/logos/logo-v-blue.png": "2a9019eeaf3292cb3ce589eb4f03cf19",
"assets/assets/img/logos/logo-v-white.png": "979a37d4249a43071d64763f8cc7fc9a",
"assets/assets/img/week/prueba_1.png": "44350b83e0504b908a61038ba56a1f33",
"assets/assets/img/week/lunes.jpg": "37444b2208630803209876d82faae613",
"assets/assets/img/week/week.jpg": "ba2b3c0280c578ad05fc9468cd36c3de",
"assets/assets/img/week/OCT_Eficiencia.jpg": "b14e0c95935d2c7e1cee8b29b92fb117",
"assets/assets/img/week/martes.jpg": "4da0ade18f69c446d90cd9bedb3b201b",
"assets/assets/img/week/OCT_Integridad.jpg": "90fd2a5911a9345703f32ba2b0559d41",
"assets/assets/img/week/miercoles.jpg": "7b4817b81f7c8cc55ae8e860532c205a",
"assets/assets/img/week/OCT_Trabajo%2520en%2520Equipo.jpg": "0ad4f2b579d013feb4a287cb0983d9d0",
"assets/assets/img/week/OCT_Compromiso.jpg": "3384d831cfb631e4692e59cfb10d75cc",
"assets/assets/img/week/viernes.jpg": "d71e8a4aad9e827f332683d6242bdaf1",
"assets/assets/img/week/jueves.jpg": "4eda6d70b0868aab9b5a60d4ff8eb7c6",
"assets/assets/img/loading.gif": "c561fe0b952b41050ca70b9ac74797ee",
"assets/assets/img/headers/payrollDetailHeader.png": "b5b7764f36754fbf89865c0e82328695",
"assets/assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"assets/assets/fonts/Raleway-Black.ttf": "46818ebd4f76c4e6fe9b030dbc74f5cf",
"assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/assets/fonts/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67"
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
