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
parcelRegister("89fAY", function(module, exports) {

$parcel$export(module.exports, "register", () => $5eeb42e2cadd9fdf$export$6503ec6e8aabbaf, (v) => $5eeb42e2cadd9fdf$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $5eeb42e2cadd9fdf$export$f7ad0328861e2f03, (v) => $5eeb42e2cadd9fdf$export$f7ad0328861e2f03 = v);
var $5eeb42e2cadd9fdf$export$6503ec6e8aabbaf;
var $5eeb42e2cadd9fdf$export$f7ad0328861e2f03;
"use strict";
var $5eeb42e2cadd9fdf$var$mapping = new Map();
function $5eeb42e2cadd9fdf$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$5eeb42e2cadd9fdf$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $5eeb42e2cadd9fdf$var$resolve(id) {
    var resolved = $5eeb42e2cadd9fdf$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$5eeb42e2cadd9fdf$export$6503ec6e8aabbaf = $5eeb42e2cadd9fdf$var$register;
$5eeb42e2cadd9fdf$export$f7ad0328861e2f03 = $5eeb42e2cadd9fdf$var$resolve;

});

parcelRegister("ahrFh", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $77c0f39361ddffc5$export$bdfd709ae4826697, (v) => $77c0f39361ddffc5$export$bdfd709ae4826697 = v);
var $77c0f39361ddffc5$export$bdfd709ae4826697;
var $77c0f39361ddffc5$export$c9e73fbda7da57b6;
var $77c0f39361ddffc5$export$5a759dc7a1cfb72a;
"use strict";
var $77c0f39361ddffc5$var$bundleURL = {};
function $77c0f39361ddffc5$var$getBundleURLCached(id) {
    var value = $77c0f39361ddffc5$var$bundleURL[id];
    if (!value) {
        value = $77c0f39361ddffc5$var$getBundleURL();
        $77c0f39361ddffc5$var$bundleURL[id] = value;
    }
    return value;
}
function $77c0f39361ddffc5$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $77c0f39361ddffc5$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $77c0f39361ddffc5$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $77c0f39361ddffc5$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$77c0f39361ddffc5$export$bdfd709ae4826697 = $77c0f39361ddffc5$var$getBundleURLCached;
$77c0f39361ddffc5$export$c9e73fbda7da57b6 = $77c0f39361ddffc5$var$getBaseURL;
$77c0f39361ddffc5$export$5a759dc7a1cfb72a = $77c0f39361ddffc5$var$getOrigin;

});

parcelRegister("7RhcI", function(module, exports) {


module.exports = (parcelRequire("lFNzr"))((parcelRequire("89fAY")).resolve("cQBo9")).then(()=>parcelRequire("azlNV"));

});
parcelRegister("lFNzr", function(module, exports) {
"use strict";

var $4TwIs = parcelRequire("4TwIs");
module.exports = $4TwIs(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
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
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

});
parcelRegister("4TwIs", function(module, exports) {
"use strict";
var $3905ad2fa6d1ba16$var$cachedBundles = {};
var $3905ad2fa6d1ba16$var$cachedPreloads = {};
var $3905ad2fa6d1ba16$var$cachedPrefetches = {};
function $3905ad2fa6d1ba16$var$getCache(type) {
    switch(type){
        case "preload":
            return $3905ad2fa6d1ba16$var$cachedPreloads;
        case "prefetch":
            return $3905ad2fa6d1ba16$var$cachedPrefetches;
        default:
            return $3905ad2fa6d1ba16$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $3905ad2fa6d1ba16$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});



var $14c9811f84519654$exports = {};


(parcelRequire("89fAY")).register((parcelRequire("ahrFh")).getBundleURL("fjx3M"), JSON.parse('["fjx3M","index.js","cQBo9","promise-based-dynamic-import.19a83599.js"]'));

// index.js

(parcelRequire("7RhcI")).then((module)=>{
    console.log(module.foo);
});

})();
