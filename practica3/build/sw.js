if(!self.define){let s,o={};const e=(e,i)=>(e=new URL(e+".js",i).href,o[e]||new Promise((o=>{if("document"in self){const s=document.createElement("script");s.src=e,s.onload=o,document.head.appendChild(s)}else s=e,importScripts(e),o()})).then((()=>{let s=o[e];if(!s)throw new Error(`Module ${e} didn’t register its module`);return s})));self.define=(i,r)=>{const c=s||("document"in self?document.currentScript.src:"")||location.href;if(o[c])return;let b={};const a=s=>e(s,c),t={module:{uri:c},exports:b,require:a};o[c]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(r(...s),b)))}}define(["./workbox-915e8d08"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"build/asset-manifest.json",revision:"698f3634345e324739a50e96a6092aea"},{url:"build/book_search_logo.ico",revision:"b8ace5f38c912fe65c683de3248230b4"},{url:"build/book_search_logo.jpg",revision:"ab63663cd89a74a3e124ce5b09f9e6e2"},{url:"build/bootstrap/css/bootstrap-grid.css",revision:"c223f119ec9dea026126fc19efa1cda4"},{url:"build/bootstrap/css/bootstrap-grid.min.css",revision:"0bc3c052956530975a1406d6788a256e"},{url:"build/bootstrap/css/bootstrap-grid.rtl.css",revision:"8122a112a175dcfc1ce51596916dec94"},{url:"build/bootstrap/css/bootstrap-grid.rtl.min.css",revision:"76c20e07d9962cf2045b0a68e0c70172"},{url:"build/bootstrap/css/bootstrap-reboot.css",revision:"89f8de928a633a7258c08ba409dc5413"},{url:"build/bootstrap/css/bootstrap-reboot.min.css",revision:"05d3df42ebb67a65040216f50432680d"},{url:"build/bootstrap/css/bootstrap-reboot.rtl.css",revision:"654a6734347a7a718ac6529411270276"},{url:"build/bootstrap/css/bootstrap-reboot.rtl.min.css",revision:"c20056469f2d0f6bf6e88cc481d228ac"},{url:"build/bootstrap/css/bootstrap-utilities.css",revision:"66ab28268efbc0dafdb53791d41e755e"},{url:"build/bootstrap/css/bootstrap-utilities.min.css",revision:"08aded6a77f986e24299bf9a00f3791d"},{url:"build/bootstrap/css/bootstrap-utilities.rtl.css",revision:"dfe0f0007ab21ab80c134ef0777af72f"},{url:"build/bootstrap/css/bootstrap-utilities.rtl.min.css",revision:"8479d3eb9eb3e42703c2a46bd839281c"},{url:"build/bootstrap/css/bootstrap.css",revision:"e130b5189b00dbf9549803614a0c35d0"},{url:"build/bootstrap/css/bootstrap.min.css",revision:"1bcf7ee45ab9975f9b9eb016fb96771a"},{url:"build/bootstrap/css/bootstrap.rtl.css",revision:"554e153e05fe7b5c3cfd037b73997215"},{url:"build/bootstrap/css/bootstrap.rtl.min.css",revision:"e9066195b42ddded5976a1c61cd82e2a"},{url:"build/bootstrap/js/bootstrap.bundle.js",revision:"52644fccff74e4628dca0927a252a331"},{url:"build/bootstrap/js/bootstrap.bundle.min.js",revision:"bd31cd6c0de0972f2e5d260a09ba121f"},{url:"build/bootstrap/js/bootstrap.esm.js",revision:"b5d04182a22ae8dd176f22764006328d"},{url:"build/bootstrap/js/bootstrap.esm.min.js",revision:"19a515baeb496959205ee88676f9979c"},{url:"build/bootstrap/js/bootstrap.js",revision:"3bcf04ed66b298f314c5241d97868b20"},{url:"build/bootstrap/js/bootstrap.min.js",revision:"f031fc3fc2f16ebcd7ed6a997e35c10a"},{url:"build/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"build/index.html",revision:"0f501dea387890373ee4c5bf9e2b294a"},{url:"build/logo.jpg",revision:"5e3e01d84ca0f9845c82d251c8e12839"},{url:"build/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"build/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"build/manifest.json",revision:"89be60895176466398d53bd4a693d9f6"},{url:"build/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"build/static/css/main.e6c13ad2.css",revision:"9f6fd7b89af737fe9ff6849a58501b1b"},{url:"build/static/js/488.e9140a23.chunk.js",revision:"369dd2f298fa5fa226d070baab2851ea"},{url:"build/static/js/main.70675363.js",revision:"c14ded68e70507baa0519230b1216f19"},{url:"build/static/js/main.70675363.js.LICENSE.txt",revision:"cccfa45cda3f72c4ebb3fb2f4ba53a71"},{url:"package-lock.json",revision:"9046615fe7b20a67790fc2fd4606e075"},{url:"package.json",revision:"00844dfe964bec6b3aa66d985e662dc1"},{url:"public/book_search_logo.ico",revision:"b8ace5f38c912fe65c683de3248230b4"},{url:"public/book_search_logo.jpg",revision:"ab63663cd89a74a3e124ce5b09f9e6e2"},{url:"public/bootstrap/css/bootstrap-grid.css",revision:"c223f119ec9dea026126fc19efa1cda4"},{url:"public/bootstrap/css/bootstrap-grid.min.css",revision:"0bc3c052956530975a1406d6788a256e"},{url:"public/bootstrap/css/bootstrap-grid.rtl.css",revision:"8122a112a175dcfc1ce51596916dec94"},{url:"public/bootstrap/css/bootstrap-grid.rtl.min.css",revision:"76c20e07d9962cf2045b0a68e0c70172"},{url:"public/bootstrap/css/bootstrap-reboot.css",revision:"89f8de928a633a7258c08ba409dc5413"},{url:"public/bootstrap/css/bootstrap-reboot.min.css",revision:"05d3df42ebb67a65040216f50432680d"},{url:"public/bootstrap/css/bootstrap-reboot.rtl.css",revision:"654a6734347a7a718ac6529411270276"},{url:"public/bootstrap/css/bootstrap-reboot.rtl.min.css",revision:"c20056469f2d0f6bf6e88cc481d228ac"},{url:"public/bootstrap/css/bootstrap-utilities.css",revision:"66ab28268efbc0dafdb53791d41e755e"},{url:"public/bootstrap/css/bootstrap-utilities.min.css",revision:"08aded6a77f986e24299bf9a00f3791d"},{url:"public/bootstrap/css/bootstrap-utilities.rtl.css",revision:"dfe0f0007ab21ab80c134ef0777af72f"},{url:"public/bootstrap/css/bootstrap-utilities.rtl.min.css",revision:"8479d3eb9eb3e42703c2a46bd839281c"},{url:"public/bootstrap/css/bootstrap.css",revision:"e130b5189b00dbf9549803614a0c35d0"},{url:"public/bootstrap/css/bootstrap.min.css",revision:"1bcf7ee45ab9975f9b9eb016fb96771a"},{url:"public/bootstrap/css/bootstrap.rtl.css",revision:"554e153e05fe7b5c3cfd037b73997215"},{url:"public/bootstrap/css/bootstrap.rtl.min.css",revision:"e9066195b42ddded5976a1c61cd82e2a"},{url:"public/bootstrap/js/bootstrap.bundle.js",revision:"52644fccff74e4628dca0927a252a331"},{url:"public/bootstrap/js/bootstrap.bundle.min.js",revision:"bd31cd6c0de0972f2e5d260a09ba121f"},{url:"public/bootstrap/js/bootstrap.esm.js",revision:"b5d04182a22ae8dd176f22764006328d"},{url:"public/bootstrap/js/bootstrap.esm.min.js",revision:"19a515baeb496959205ee88676f9979c"},{url:"public/bootstrap/js/bootstrap.js",revision:"3bcf04ed66b298f314c5241d97868b20"},{url:"public/bootstrap/js/bootstrap.min.js",revision:"f031fc3fc2f16ebcd7ed6a997e35c10a"},{url:"public/favicon.ico",revision:"c92b85a5b907c70211f4ec25e29a8c4a"},{url:"public/index.html",revision:"ec2b6edb745e12f00d3d65fd6df7428f"},{url:"public/logo.jpg",revision:"5e3e01d84ca0f9845c82d251c8e12839"},{url:"public/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"public/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"public/manifest.json",revision:"89be60895176466398d53bd4a693d9f6"},{url:"public/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"public/ServiceWorker.js",revision:"f9bb8924fbef4c5e7c8a2712e6c86c90"},{url:"README.md",revision:"47731d5d79e63873f27a86d4c4933a47"},{url:"src/App.css",revision:"d13a52212899f79d8eaec9710ea53b39"},{url:"src/App.js",revision:"e5e7420395f0c10ac18ecec470f213c3"},{url:"src/App.test.js",revision:"83ca979af0e840672a4aa673b0c7be01"},{url:"src/components/BookList.js",revision:"bd8b463020be37e4cb93c4a457ac89c7"},{url:"src/components/Categories.js",revision:"3de460bc69df807a0b4d8e5bb8011ac8"},{url:"src/components/SearchBar.js",revision:"2461579f4fc1603a2c5a57678a9f56bd"},{url:"src/index.css",revision:"7386d27f653921d6b5c3b54e0cd9d67d"},{url:"src/index.js",revision:"629a394e756bf7a25f89da0d3f868ce0"},{url:"src/logo.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"src/reportWebVitals.js",revision:"b528fd380de9b503eb5c84973639cca4"},{url:"src/setupTests.js",revision:"72158175c4ba432ede32a7c2ca4143e0"},{url:"src/utils/api.js",revision:"d47a1fe8215bbaf847f47f69a9487873"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map