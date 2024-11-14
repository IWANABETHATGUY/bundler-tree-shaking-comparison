(() => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("8SF9g", function(module, exports) {

$parcel$export(module.exports, "register", () => $677349188de53a95$export$6503ec6e8aabbaf, (v) => $677349188de53a95$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $677349188de53a95$export$f7ad0328861e2f03, (v) => $677349188de53a95$export$f7ad0328861e2f03 = v);
var $677349188de53a95$export$6503ec6e8aabbaf;
var $677349188de53a95$export$f7ad0328861e2f03;
"use strict";
var $677349188de53a95$var$mapping = new Map();
function $677349188de53a95$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$677349188de53a95$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $677349188de53a95$var$resolve(id) {
    var resolved = $677349188de53a95$var$mapping.get(id);
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$677349188de53a95$export$6503ec6e8aabbaf = $677349188de53a95$var$register;
$677349188de53a95$export$f7ad0328861e2f03 = $677349188de53a95$var$resolve;

});

parcelRegister("71vaS", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $51d0ceff0548d078$export$bdfd709ae4826697, (v) => $51d0ceff0548d078$export$bdfd709ae4826697 = v);
var $51d0ceff0548d078$export$bdfd709ae4826697;
var $51d0ceff0548d078$export$c9e73fbda7da57b6;
var $51d0ceff0548d078$export$5a759dc7a1cfb72a;
"use strict";
var $51d0ceff0548d078$var$bundleURL = {};
function $51d0ceff0548d078$var$getBundleURLCached(id) {
    var value = $51d0ceff0548d078$var$bundleURL[id];
    if (!value) {
        value = $51d0ceff0548d078$var$getBundleURL();
        $51d0ceff0548d078$var$bundleURL[id] = value;
    }
    return value;
}
function $51d0ceff0548d078$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $51d0ceff0548d078$var$getBaseURL(matches[2]);
    }
    return '/';
}
function $51d0ceff0548d078$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $51d0ceff0548d078$var$getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
$51d0ceff0548d078$export$bdfd709ae4826697 = $51d0ceff0548d078$var$getBundleURLCached;
$51d0ceff0548d078$export$c9e73fbda7da57b6 = $51d0ceff0548d078$var$getBaseURL;
$51d0ceff0548d078$export$5a759dc7a1cfb72a = $51d0ceff0548d078$var$getOrigin;

});

parcelRegister("3y4Sl", function(module, exports) {
"use strict";

var $lUaIb = parcelRequire("lUaIb");
module.exports = $lUaIb(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName('script');
        if ([].concat(existingScripts).some(function(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement('link');
        preloadLink.href = bundle;
        preloadLink.rel = 'preload';
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    });
});

});
parcelRegister("lUaIb", function(module, exports) {
"use strict";
var $ff272306d1d919dd$var$cachedBundles = {};
var $ff272306d1d919dd$var$cachedPreloads = {};
var $ff272306d1d919dd$var$cachedPrefetches = {};
function $ff272306d1d919dd$var$getCache(type) {
    switch(type){
        case 'preload':
            return $ff272306d1d919dd$var$cachedPreloads;
        case 'prefetch':
            return $ff272306d1d919dd$var$cachedPrefetches;
        default:
            return $ff272306d1d919dd$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $ff272306d1d919dd$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});


var $958903ea0f2d76c2$exports = {};


(parcelRequire("8SF9g")).register((parcelRequire("71vaS")).getBundleURL('7bjMi'), JSON.parse("[\"7bjMi\",\"index.js\",\"akRGy\",\"dynamic-import-await-namespace.eb8b02f3.js\"]"));

// index.js
var $06afe2a7760bcbad$exports = {};


$06afe2a7760bcbad$exports = (parcelRequire("3y4Sl"))((parcelRequire("8SF9g")).resolve("akRGy")).then(()=>parcelRequire('dYUvU'));


const $ccd9b3ee6851c969$var$ns = await $06afe2a7760bcbad$exports;
console.log(`ns.bar: `, $ccd9b3ee6851c969$var$ns.bar);

})();
