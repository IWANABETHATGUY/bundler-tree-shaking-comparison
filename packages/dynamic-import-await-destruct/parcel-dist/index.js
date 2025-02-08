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
parcelRegister("33tOP", function(module, exports) {

$parcel$export(module.exports, "register", () => $2398c854cd49ea56$export$6503ec6e8aabbaf, (v) => $2398c854cd49ea56$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $2398c854cd49ea56$export$f7ad0328861e2f03, (v) => $2398c854cd49ea56$export$f7ad0328861e2f03 = v);
var $2398c854cd49ea56$export$6503ec6e8aabbaf;
var $2398c854cd49ea56$export$f7ad0328861e2f03;
"use strict";
var $2398c854cd49ea56$var$mapping = new Map();
function $2398c854cd49ea56$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$2398c854cd49ea56$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $2398c854cd49ea56$var$resolve(id) {
    var resolved = $2398c854cd49ea56$var$mapping.get(id);
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$2398c854cd49ea56$export$6503ec6e8aabbaf = $2398c854cd49ea56$var$register;
$2398c854cd49ea56$export$f7ad0328861e2f03 = $2398c854cd49ea56$var$resolve;

});

parcelRegister("018qO", function(module, exports) {

$parcel$export(module.exports, "getBundleURL", () => $0036a26f50481695$export$bdfd709ae4826697, (v) => $0036a26f50481695$export$bdfd709ae4826697 = v);
var $0036a26f50481695$export$bdfd709ae4826697;
var $0036a26f50481695$export$c9e73fbda7da57b6;
var $0036a26f50481695$export$5a759dc7a1cfb72a;
"use strict";
var $0036a26f50481695$var$bundleURL = {};
function $0036a26f50481695$var$getBundleURLCached(id) {
    var value = $0036a26f50481695$var$bundleURL[id];
    if (!value) {
        value = $0036a26f50481695$var$getBundleURL();
        $0036a26f50481695$var$bundleURL[id] = value;
    }
    return value;
}
function $0036a26f50481695$var$getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return $0036a26f50481695$var$getBaseURL(matches[2]);
    }
    return '/';
}
function $0036a26f50481695$var$getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function $0036a26f50481695$var$getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
$0036a26f50481695$export$bdfd709ae4826697 = $0036a26f50481695$var$getBundleURLCached;
$0036a26f50481695$export$c9e73fbda7da57b6 = $0036a26f50481695$var$getBaseURL;
$0036a26f50481695$export$5a759dc7a1cfb72a = $0036a26f50481695$var$getOrigin;

});

parcelRegister("iZcSh", function(module, exports) {
"use strict";

var $396Vw = parcelRequire("396Vw");
module.exports = $396Vw(function(bundle) {
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
parcelRegister("396Vw", function(module, exports) {
"use strict";
var $24a795e1866223cf$var$cachedBundles = {};
var $24a795e1866223cf$var$cachedPreloads = {};
var $24a795e1866223cf$var$cachedPrefetches = {};
function $24a795e1866223cf$var$getCache(type) {
    switch(type){
        case 'preload':
            return $24a795e1866223cf$var$cachedPreloads;
        case 'prefetch':
            return $24a795e1866223cf$var$cachedPrefetches;
        default:
            return $24a795e1866223cf$var$cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = $24a795e1866223cf$var$getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

});


var $5bd520ba8987a540$exports = {};


(parcelRequire("33tOP")).register((parcelRequire("018qO")).getBundleURL('jcyqO'), JSON.parse("[\"jcyqO\",\"index.js\",\"ethBj\",\"dynamic-import-await-destruct.a2ffda3d.js\"]"));

// index.js
var $8f2ee8c34bea8dfd$exports = {};


$8f2ee8c34bea8dfd$exports = (parcelRequire("iZcSh"))((parcelRequire("33tOP")).resolve("ethBj")).then(()=>parcelRequire('84NNf'));


const { bar: $cb5ed5e99f561d89$var$bar } = await $8f2ee8c34bea8dfd$exports;
console.log(`bar: `, $cb5ed5e99f561d89$var$bar);

})();
