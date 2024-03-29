var staticCache = 'site-static';
var assets = [
    'index.html',
    'app.js',
    'about.html',
    'bg.jpg',
    'map.js',
    'style.css',
    'crime_database/casenum.html',
    'crime_database/caseyear.html',
    'crime_database/crimesearch.html',
    'crime_database/year.html',
    'geolocation/geolocation.html',
    'geolocation/geolocation.js',
    'script/navbar.js',
    'script/result.js',
    'sex_offenders/age.html',
    'sex_offenders/block.html',
    'sex_offenders/race.html',
    'sex_offenders/sexoffendersearch.html',
 ];
 //install event
 self.addEventListener('install', evt => {
     console.log(1);
     console.log('service worker installed');
   evt.waitUntil(caches.open(staticCache).then(cache => {
         console.log('cache adding');
         cache.addAll(assets);                        
       })
     );
 });

 //activate event
 self.addEventListener('activate', evt =>{
       console.log('service worker activated');
 });

 //fetch event
 self.addEventListener('fetch', evt=>{
          //console.log('fetch event', evt);
          evt.respondWith(
              caches.match(evt.request).then(cacheRes => {
                  return cacheRes || fetch(evt.request);
              })
          );
 }); 