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
parcelRegister("64ZBF", function(module, exports) {

$parcel$export(module.exports, "register", () => $46d2e78d358978e7$export$6503ec6e8aabbaf, (v) => $46d2e78d358978e7$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $46d2e78d358978e7$export$f7ad0328861e2f03, (v) => $46d2e78d358978e7$export$f7ad0328861e2f03 = v);
var $46d2e78d358978e7$export$6503ec6e8aabbaf;
var $46d2e78d358978e7$export$f7ad0328861e2f03;
"use strict";
var $46d2e78d358978e7$var$mapping = new Map();
function $46d2e78d358978e7$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$46d2e78d358978e7$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $46d2e78d358978e7$var$resolve(id) {
    var resolved = $46d2e78d358978e7$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$46d2e78d358978e7$export$6503ec6e8aabbaf = $46d2e78d358978e7$var$register;
$46d2e78d358978e7$export$f7ad0328861e2f03 = $46d2e78d358978e7$var$resolve;

});

parcelRegister("f5g1z", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $afb3c0b8eb2c606c$export$bdfd709ae4826697, (v) => $afb3c0b8eb2c606c$export$bdfd709ae4826697 = v);
var $afb3c0b8eb2c606c$export$bdfd709ae4826697;
var $afb3c0b8eb2c606c$export$c9e73fbda7da57b6;
var $afb3c0b8eb2c606c$export$5a759dc7a1cfb72a;
"use strict";
var $afb3c0b8eb2c606c$var$bundleURL = {};
function $afb3c0b8eb2c606c$var$getBundleURLCached(id) {
    var value = $afb3c0b8eb2c606c$var$bundleURL[id];
    if (!value) {
        value = $afb3c0b8eb2c606c$var$getBundleURL();
        $afb3c0b8eb2c606c$var$bundleURL[id] = value;
    }
    return value;
}
function $afb3c0b8eb2c606c$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $afb3c0b8eb2c606c$var$getBaseURL(matches[2]);
    }
    return "/";
}
function $afb3c0b8eb2c606c$var$getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $afb3c0b8eb2c606c$var$getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
$afb3c0b8eb2c606c$export$bdfd709ae4826697 = $afb3c0b8eb2c606c$var$getBundleURLCached;
$afb3c0b8eb2c606c$export$c9e73fbda7da57b6 = $afb3c0b8eb2c606c$var$getBaseURL;
$afb3c0b8eb2c606c$export$5a759dc7a1cfb72a = $afb3c0b8eb2c606c$var$getOrigin;

});

parcelRegister("fJGny", function(module, exports) {


module.exports = (parcelRequire("eWeuL"))((parcelRequire("64ZBF")).resolve("cQBo9")).then(()=>parcelRequire("azlNV"));

});
parcelRegister("eWeuL", function(module, exports) {
"use strict";

var $ilNVH = parcelRequire("ilNVH");
module.exports = $ilNVH(function(bundle) {
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
parcelRegister("ilNVH", function(module, exports) {
"use strict";
var $d5c0eb2670eae4a6$var$cachedBundles = {};
var $d5c0eb2670eae4a6$var$cachedPreloads = {};
var $d5c0eb2670eae4a6$var$cachedPrefetches = {};
function $d5c0eb2670eae4a6$var$getCache(type) {
    switch(type){
        case "preload":
            return $d5c0eb2670eae4a6$var$cachedPreloads;
        case "prefetch":
            return $d5c0eb2670eae4a6$var$cachedPrefetches;
        default:
            return $d5c0eb2670eae4a6$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $d5c0eb2670eae4a6$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});



var $ce90dbfcb9b6ff06$exports = {};


(parcelRequire("64ZBF")).register((parcelRequire("f5g1z")).getBundleURL("fjx3M"), JSON.parse('["fjx3M","index.js","cQBo9","promise-based-dynamic-import.19a83599.js"]'));

// index.js

(parcelRequire("fJGny")).then((module)=>{
    console.log(module.foo);
});

})();
