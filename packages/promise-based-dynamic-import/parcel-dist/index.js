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
parcelRegister("g7kjK", function(module, exports) {

$parcel$export(module.exports, "register", () => $bbbd0f713051c0b2$export$6503ec6e8aabbaf, (v) => $bbbd0f713051c0b2$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $bbbd0f713051c0b2$export$f7ad0328861e2f03, (v) => $bbbd0f713051c0b2$export$f7ad0328861e2f03 = v);
var $bbbd0f713051c0b2$export$6503ec6e8aabbaf;
var $bbbd0f713051c0b2$export$f7ad0328861e2f03;
"use strict";
var $bbbd0f713051c0b2$var$mapping = new Map();
function $bbbd0f713051c0b2$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$bbbd0f713051c0b2$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $bbbd0f713051c0b2$var$resolve(id) {
    var resolved = $bbbd0f713051c0b2$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$bbbd0f713051c0b2$export$6503ec6e8aabbaf = $bbbd0f713051c0b2$var$register;
$bbbd0f713051c0b2$export$f7ad0328861e2f03 = $bbbd0f713051c0b2$var$resolve;

});

parcelRegister("8UnWT", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $67c6216dc1643a77$export$bdfd709ae4826697, (v) => $67c6216dc1643a77$export$bdfd709ae4826697 = v);
var $67c6216dc1643a77$export$bdfd709ae4826697;
var $67c6216dc1643a77$export$c9e73fbda7da57b6;
var $67c6216dc1643a77$export$5a759dc7a1cfb72a;
"use strict";
var $67c6216dc1643a77$var$bundleURL = {};
function $67c6216dc1643a77$var$getBundleURLCached(id) {
    var value = $67c6216dc1643a77$var$bundleURL[id];
    if (!value) {
        value = $67c6216dc1643a77$var$getBundleURL();
        $67c6216dc1643a77$var$bundleURL[id] = value;
    }
    return value;
}
function $67c6216dc1643a77$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $67c6216dc1643a77$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $67c6216dc1643a77$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $67c6216dc1643a77$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$67c6216dc1643a77$export$bdfd709ae4826697 = $67c6216dc1643a77$var$getBundleURLCached;
$67c6216dc1643a77$export$c9e73fbda7da57b6 = $67c6216dc1643a77$var$getBaseURL;
$67c6216dc1643a77$export$5a759dc7a1cfb72a = $67c6216dc1643a77$var$getOrigin;

});

parcelRegister("eNvx9", function(module, exports) {


module.exports = (parcelRequire("37w3E"))((parcelRequire("g7kjK")).resolve("cQBo9")).then(()=>parcelRequire("azlNV"));

});
parcelRegister("37w3E", function(module, exports) {
"use strict";

var $8e8z6 = parcelRequire("8e8z6");
module.exports = $8e8z6(function(bundle) {
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
parcelRegister("8e8z6", function(module, exports) {
"use strict";
var $5fd64662a0f0ec45$var$cachedBundles = {};
var $5fd64662a0f0ec45$var$cachedPreloads = {};
var $5fd64662a0f0ec45$var$cachedPrefetches = {};
function $5fd64662a0f0ec45$var$getCache(type) {
    switch(type){
        case "preload":
            return $5fd64662a0f0ec45$var$cachedPreloads;
        case "prefetch":
            return $5fd64662a0f0ec45$var$cachedPrefetches;
        default:
            return $5fd64662a0f0ec45$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $5fd64662a0f0ec45$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});



var $1d65f0b92e81eaa6$exports = {};


(parcelRequire("g7kjK")).register((parcelRequire("8UnWT")).getBundleURL("fjx3M"), JSON.parse('["fjx3M","index.js","cQBo9","promise-based-dynamic-import.19a83599.js"]'));

// index.js

(parcelRequire("eNvx9")).then((module)=>{
    console.log(module.foo);
});

})();
