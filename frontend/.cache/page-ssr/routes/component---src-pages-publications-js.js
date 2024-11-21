exports.id = "component---src-pages-publications-js";
exports.ids = ["component---src-pages-publications-js"];
exports.modules = {

/***/ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.applyTrailingSlashOption = void 0;
const endsWithSuffixes = (suffixes, input) => {
  for (const suffix of suffixes) {
    if (input.endsWith(suffix)) return true;
  }
  return false;
};
const suffixes = [`.html`, `.json`, `.js`, `.map`, `.txt`, `.xml`, `.pdf`];
const applyTrailingSlashOption = (input, option = `always`) => {
  if (input === `/`) return input;
  const hasTrailingSlash = input.endsWith(`/`);
  if (endsWithSuffixes(suffixes, input)) {
    return input;
  }
  if (option === `always`) {
    return hasTrailingSlash ? input : `${input}/`;
  }
  if (option === `never`) {
    return hasTrailingSlash ? input.slice(0, -1) : input;
  }
  return input;
};
exports.applyTrailingSlashOption = applyTrailingSlashOption;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
exports.ScrollContext = _scrollHandler.ScrollHandler;
var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");
exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";
var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);
  function ScrollHandler() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;
    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;
      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };
    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };
    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));
      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };
    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;
      if (!shouldUpdateScroll) {
        return true;
      }

      // Hack to allow accessing this._stateStorage.
      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };
    return _this;
  }
  var _proto = ScrollHandler.prototype;
  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;
    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }
    this._isTicking = false;
  };
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
      key = _this$props$location.key,
      hash = _this$props$location.hash;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /** If a hash is present in the browser url as the component mounts (i.e. the user is navigating
     * from an external website) then scroll to the hash instead of any previously stored scroll
     * position. */
    if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    } else if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
      hash = _this$props$location2.hash,
      key = _this$props$location2.key;
    var scrollPosition;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */

    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };
  return ScrollHandler;
}(React.Component);
exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";
var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}
  var _proto = SessionStorage.prototype;
  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);
    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }
      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }
      return 0;
    }
  };
  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);
    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };
  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };
  return SessionStorage;
}();
exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
var _react = __webpack_require__(/*! react */ "react");
var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./.cache/context-utils.js":
/*!*********************************!*\
  !*** ./.cache/context-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createServerOrClientContext: () => (/* binding */ createServerOrClientContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// Ensure serverContext is not created more than once as React will throw when creating it more than once
// https://github.com/facebook/react/blob/dd2d6522754f52c70d02c51db25eb7cbd5d1c8eb/packages/react/src/ReactServerContext.js#L101
const createServerContext = (name, defaultValue = null) => {
  /* eslint-disable no-undef */
  if (!globalThis.__SERVER_CONTEXT) {
    globalThis.__SERVER_CONTEXT = {};
  }
  if (!globalThis.__SERVER_CONTEXT[name]) {
    globalThis.__SERVER_CONTEXT[name] = react__WEBPACK_IMPORTED_MODULE_0___default().createServerContext(name, defaultValue);
  }
  return globalThis.__SERVER_CONTEXT[name];
};
function createServerOrClientContext(name, defaultValue) {
  if ((react__WEBPACK_IMPORTED_MODULE_0___default().createServerContext)) {
    return createServerContext(name, defaultValue);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultValue);
}


/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanPath: () => (/* binding */ cleanPath),
/* harmony export */   findMatchPath: () => (/* binding */ findMatchPath),
/* harmony export */   findPath: () => (/* binding */ findPath),
/* harmony export */   grabMatchParams: () => (/* binding */ grabMatchParams),
/* harmony export */   setMatchPaths: () => (/* binding */ setMatchPaths)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];
const trimPathname = rawPathname => {
  let newRawPathname = rawPathname;
  const queryIndex = rawPathname.indexOf(`?`);
  if (queryIndex !== -1) {
    const [path, qs] = rawPathname.split(`?`);
    newRawPathname = `${path}?${encodeURIComponent(qs)}`;
  }
  const pathname = decodeURIComponent(newRawPathname);

  // Remove the pathPrefix from the pathname.
  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname, decodeURIComponent(""))
  // Remove any hashfragment
  .split(`#`)[0];
  return trimmedPathname;
};
function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  }
  // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router
  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}

/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */
const setMatchPaths = value => {
  matchPaths = value;
};

/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */
const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);
  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);
  }
  return null;
};

/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */
const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);
  if (path) {
    return path.params;
  }
  return {};
};

// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }
  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);
  if (redirect) {
    return findPath(redirect.toPath);
  }
  let foundPath = findMatchPath(trimmedPathname);
  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }
  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};

/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */
const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;
  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }
  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.Link),
/* harmony export */   PageRenderer: () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   Script: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.Script),
/* harmony export */   ScriptStrategy: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.ScriptStrategy),
/* harmony export */   Slice: () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_5__.Slice),
/* harmony export */   StaticQuery: () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQuery),
/* harmony export */   StaticQueryContext: () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQueryContext),
/* harmony export */   collectedScriptsByPage: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.collectedScriptsByPage),
/* harmony export */   graphql: () => (/* binding */ graphql),
/* harmony export */   navigate: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.navigate),
/* harmony export */   parsePath: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.parsePath),
/* harmony export */   prefetchPathname: () => (/* binding */ prefetchPathname),
/* harmony export */   scriptCache: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCache),
/* harmony export */   scriptCallbackCache: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCallbackCache),
/* harmony export */   useScrollRestoration: () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__.useScrollRestoration),
/* harmony export */   useStaticQuery: () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery),
/* harmony export */   withAssetPrefix: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withAssetPrefix),
/* harmony export */   withPrefix: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withPrefix)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/dist/index.modern.mjs");
/* harmony import */ var _static_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-query */ "./.cache/static-query.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slice */ "./.cache/slice.js");
/* harmony import */ var gatsby_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-script */ "./node_modules/gatsby-script/dist/index.modern.mjs");

const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_0__["default"].enqueue;
function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}








/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLoader: () => (/* binding */ BaseLoader),
/* harmony export */   PageResourceStatus: () => (/* binding */ PageResourceStatus),
/* harmony export */   ProdLoader: () => (/* binding */ ProdLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getSliceResults: () => (/* binding */ getSliceResults),
/* harmony export */   getStaticQueryResults: () => (/* binding */ getStaticQueryResults),
/* harmony export */   publicLoader: () => (/* binding */ publicLoader),
/* harmony export */   setLoader: () => (/* binding */ setLoader)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-server-dom-webpack */ "./node_modules/react-server-dom-webpack/index.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");





/**
 * Available resource loading statuses
 */
const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,
  /**
   * Resources loaded successfully
   */
  Success: `success`
};
const preferDefault = m => m && m.default || m;
const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};
const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`);
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json${maybeSearch ? `?${maybeSearch}` : ``}`;
};

/**
 * Utility to check the path that goes into doFetch for e.g. potential malicious intentions.
 * It checks for "//" because with this you could do a fetch request to a different domain.
 */
const shouldAbortFetch = rawPath => rawPath.startsWith(`//`);
function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };
    req.send(null);
  });
}
const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }
    if (navigator.connection.saveData) {
      return false;
    }
  }
  return true;
};

// Regex that matches common search crawlers
const BOT_REGEX = /bot|crawler|spider|crawling/i;
const toPageResources = (pageData, component = null, head) => {
  var _pageData$slicesMap;
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError,
    slicesMap: (_pageData$slicesMap = pageData.slicesMap) !== null && _pageData$slicesMap !== void 0 ? _pageData$slicesMap : {}
  };
  return {
    component,
    head,
    json: pageData.result,
    page
  };
};
function waitForResponse(response) {
  return new Promise(resolve => {
    try {
      const result = response.readRoot();
      resolve(result);
    } catch (err) {
      if (Object.hasOwnProperty.call(err, `_response`) && Object.hasOwnProperty.call(err, `_status`)) {
        setTimeout(() => {
          waitForResponse(response).then(resolve);
        }, 200);
      } else {
        throw err;
      }
    }
  });
}
class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.partialHydrationDb = new Map();
    this.slicesDataDb = new Map();
    this.sliceInflightDb = new Map();
    this.slicesDb = new Map();
    this.isPrefetchQueueRunning = false;
    this.prefetchQueued = [];
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.setMatchPaths)(matchPaths);
  }
  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);
    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    }

    // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }
  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }
  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req;

      // Handle 200
      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);
          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }
          const maybeSearch = pagePath.split(`?`)[1];
          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`;
          }
          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }
  fetchPartialHydrationJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath).replace(`.json`, `-rsc.json`);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req;

      // Handle 200
      if (status === 200) {
        try {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: responseText
          });
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }
  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);
      if (true) {
        return Promise.resolve(pageData);
      }
    }
    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }
  loadPartialHydrationJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.partialHydrationDb.has(pagePath)) {
      const pageData = this.partialHydrationDb.get(pagePath);
      if (true) {
        return Promise.resolve(pageData);
      }
    }
    return this.fetchPartialHydrationJson({
      pagePath
    }).then(pageData => {
      this.partialHydrationDb.set(pagePath, pageData);
      return pageData;
    });
  }
  loadSliceDataJson(sliceName) {
    if (this.slicesDataDb.has(sliceName)) {
      const jsonPayload = this.slicesDataDb.get(sliceName);
      return Promise.resolve({
        sliceName,
        jsonPayload
      });
    }
    const url = `${""}/slice-data/${sliceName}.json`;
    return doFetch(url, `GET`).then(res => {
      const jsonPayload = JSON.parse(res.responseText);
      this.slicesDataDb.set(sliceName, jsonPayload);
      return {
        sliceName,
        jsonPayload
      };
    });
  }
  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findMatchPath)(rawPath);
  }

  // TODO check all uses of this and whether they use undefined for page resources not exist
  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);
      if (true) {
        if (page.error) {
          return Promise.resolve({
            error: page.error,
            status: page.status
          });
        }
        return Promise.resolve(page.payload);
      }
    }
    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }
    const loadDataPromises = [this.loadAppData(), this.loadPageDataJson(pagePath)];
    if (false) {}
    const inFlightPromise = Promise.all(loadDataPromises).then(allData => {
      const [appDataResponse, pageDataResponse, rscDataResponse] = allData;
      if (pageDataResponse.status === PageResourceStatus.Error || (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.status) === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }
      let pageData = pageDataResponse.payload;
      const {
        componentChunkName,
        staticQueryHashes: pageStaticQueryHashes = [],
        slicesMap = {}
      } = pageData;
      const finalResult = {};
      const dedupedSliceNames = Array.from(new Set(Object.values(slicesMap)));
      const loadSlice = slice => {
        if (this.slicesDb.has(slice.name)) {
          return this.slicesDb.get(slice.name);
        } else if (this.sliceInflightDb.has(slice.name)) {
          return this.sliceInflightDb.get(slice.name);
        }
        const inFlight = this.loadComponent(slice.componentChunkName).then(component => {
          return {
            component: preferDefault(component),
            sliceContext: slice.result.sliceContext,
            data: slice.result.data
          };
        });
        this.sliceInflightDb.set(slice.name, inFlight);
        inFlight.then(results => {
          this.slicesDb.set(slice.name, results);
          this.sliceInflightDb.delete(slice.name);
        });
        return inFlight;
      };
      return Promise.all(dedupedSliceNames.map(sliceName => this.loadSliceDataJson(sliceName))).then(slicesData => {
        const slices = [];
        const dedupedStaticQueryHashes = [...pageStaticQueryHashes];
        for (const {
          jsonPayload,
          sliceName
        } of Object.values(slicesData)) {
          slices.push({
            name: sliceName,
            ...jsonPayload
          });
          for (const staticQueryHash of jsonPayload.staticQueryHashes) {
            if (!dedupedStaticQueryHashes.includes(staticQueryHash)) {
              dedupedStaticQueryHashes.push(staticQueryHash);
            }
          }
        }
        const loadChunkPromises = [Promise.all(slices.map(loadSlice)), this.loadComponent(componentChunkName, `head`)];
        if (true) {
          loadChunkPromises.push(this.loadComponent(componentChunkName));
        }

        // In develop we have separate chunks for template and Head components
        // to enable HMR (fast refresh requires single exports).
        // In production we have shared chunk with both exports. Double loadComponent here
        // will be deduped by webpack runtime resulting in single request and single module
        // being loaded for both `component` and `head`.
        // get list of components to get
        const componentChunkPromises = Promise.all(loadChunkPromises).then(components => {
          const [sliceComponents, headComponent, pageComponent] = components;
          finalResult.createdAt = new Date();
          for (const sliceComponent of sliceComponents) {
            if (!sliceComponent || sliceComponent instanceof Error) {
              finalResult.status = PageResourceStatus.Error;
              finalResult.error = sliceComponent;
            }
          }
          if ( true && (!pageComponent || pageComponent instanceof Error)) {
            finalResult.status = PageResourceStatus.Error;
            finalResult.error = pageComponent;
          }
          let pageResources;
          if (finalResult.status !== PageResourceStatus.Error) {
            finalResult.status = PageResourceStatus.Success;
            if (pageDataResponse.notFound === true || (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.notFound) === true) {
              finalResult.notFound = true;
            }
            pageData = Object.assign(pageData, {
              webpackCompilationHash: appDataResponse ? appDataResponse.webpackCompilationHash : ``
            });
            if (typeof (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.payload) === `string`) {
              pageResources = toPageResources(pageData, null, headComponent);
              pageResources.partialHydration = rscDataResponse.payload;
              const readableStream = new ReadableStream({
                start(controller) {
                  const te = new TextEncoder();
                  controller.enqueue(te.encode(rscDataResponse.payload));
                },
                pull(controller) {
                  // close on next read when queue is empty
                  controller.close();
                },
                cancel() {}
              });
              return waitForResponse((0,react_server_dom_webpack__WEBPACK_IMPORTED_MODULE_0__.createFromReadableStream)(readableStream)).then(result => {
                pageResources.partialHydration = result;
                return pageResources;
              });
            } else {
              pageResources = toPageResources(pageData, pageComponent, headComponent);
            }
          }

          // undefined if final result is an error
          return pageResources;
        });

        // get list of static queries to get
        const staticQueryBatchPromise = Promise.all(dedupedStaticQueryHashes.map(staticQueryHash => {
          // Check for cache in case this static query result has already been loaded
          if (this.staticQueryDb[staticQueryHash]) {
            const jsonPayload = this.staticQueryDb[staticQueryHash];
            return {
              staticQueryHash,
              jsonPayload
            };
          }
          return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
            const jsonPayload = JSON.parse(req.responseText);
            return {
              staticQueryHash,
              jsonPayload
            };
          }).catch(() => {
            throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
          });
        })).then(staticQueryResults => {
          const staticQueryResultsMap = {};
          staticQueryResults.forEach(({
            staticQueryHash,
            jsonPayload
          }) => {
            staticQueryResultsMap[staticQueryHash] = jsonPayload;
            this.staticQueryDb[staticQueryHash] = jsonPayload;
          });
          return staticQueryResultsMap;
        });
        return Promise.all([componentChunkPromises, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
          let payload;
          if (pageResources) {
            payload = {
              ...pageResources,
              staticQueryResults
            };
            finalResult.payload = payload;
            _emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`, {
              page: payload,
              pageResources: payload
            });
          }
          this.pageDb.set(pagePath, finalResult);
          if (finalResult.error) {
            return {
              error: finalResult.error,
              status: finalResult.status
            };
          }
          return payload;
        })
        // when static-query fail to load we throw a better error
        .catch(err => {
          return {
            error: err,
            status: PageResourceStatus.Error
          };
        });
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  }

  // returns undefined if the page does not exists in cache
  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);
      if (pageData.payload) {
        return pageData.payload;
      }
      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }
    return undefined;
  }
  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    }

    // Don't prefetch if this is a crawler bot
    if (navigator.userAgent && BOT_REGEX.test(navigator.userAgent)) {
      return false;
    }

    // Check if the page exists.
    if (this.pageDb.has(pagePath)) {
      return false;
    }
    return true;
  }
  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {}
      };
    }
    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {}
      };
    }
    const defer = {
      resolve: null,
      reject: null,
      promise: null
    };
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    this.prefetchQueued.push([pagePath, defer]);
    const abortC = new AbortController();
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath);
      // remove from the queue
      if (index !== -1) {
        this.prefetchQueued.splice(index, 1);
      }
    });
    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true;
      setTimeout(() => {
        this._processNextPrefetchBatch();
      }, 3000);
    }
    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC)
    };
  }
  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0));
    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4);
      const prefetches = Promise.all(toPrefetch.map(([pagePath, dPromise]) => {
        // Tell plugins with custom prefetching logic that they should start
        // prefetching this path.
        if (!this.prefetchTriggered.has(pagePath)) {
          this.apiRunner(`onPrefetchPathname`, {
            pathname: pagePath
          });
          this.prefetchTriggered.add(pagePath);
        }

        // If a plugin has disabled core prefetching, stop now.
        if (this.prefetchDisabled) {
          return dPromise.resolve(false);
        }
        return this.doPrefetch((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pagePath)).then(() => {
          if (!this.prefetchCompleted.has(pagePath)) {
            this.apiRunner(`onPostPrefetchPathname`, {
              pathname: pagePath
            });
            this.prefetchCompleted.add(pagePath);
          }
          dPromise.resolve(true);
        });
      }));
      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch();
          }, 3000);
        });
      } else {
        this.isPrefetchQueueRunning = false;
      }
    });
  }
  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    if (false) {} else {
      return (0,_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl, {
        crossOrigin: `anonymous`,
        as: `fetch`
      }).then(() =>
      // This was just prefetched, so will return a response from
      // the cache instead of making another request to the server
      this.loadPageDataJson(pagePath));
    }
  }
  hovering(rawPath) {
    this.loadPage(rawPath);
  }
  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);
    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }
  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }
  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;
      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      }

      // Handle 200
      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);
          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }
          appData = jsonPayload;
        } catch (err) {
          // continue regardless of error
        }
      }
      return appData;
    });
  }
}
const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);
class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = (chunkName, exportType = `components`) => {
      if (true) {
        exportType = `components`;
      }
      if (!asyncRequires[exportType][chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name "${chunkName}"`);
      }
      return asyncRequires[exportType][chunkName]()
      // loader will handle the case when component is error
      .catch(err => err);
    };
    super(loadComponent, matchPaths);
    if (pageData) {
      this.pageDataDb.set((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`
      });
    }
  }
  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }
      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(() => pageData);
    });
  }
  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data;
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data;
        });
      }
      return data;
    });
  }
  loadPartialHydrationJson(rawPath) {
    return super.loadPartialHydrationJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data;
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data;
        });
      }
      return data;
    });
  }
}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}
function getSliceResults() {
  if (instance) {
    return instance.slicesDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch;
  }
  let [path, search = ``] = pathAndSearch.split(`?`);
  if (search) {
    search = `?` + search;
  }
  if (path === `/`) {
    return `/` + search;
  }
  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search;
  }
  return path + search;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }
  const fakeLink = document.createElement(`link`);
  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }
  return false;
};
const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }
    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};
const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);
    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };
    req.send(null);
  });
};
const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};
const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }
    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;
if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maybeGetBrowserRedirect: () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");


// Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);
  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }
  return redirect;
}

/***/ }),

/***/ "./.cache/slice.js":
/*!*************************!*\
  !*** ./.cache/slice.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slice: () => (/* binding */ Slice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slice_server_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice/server-slice */ "./.cache/slice/server-slice.js");
/* harmony import */ var _slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice/inline-slice */ "./.cache/slice/inline-slice.js");
/* harmony import */ var _slice_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice/context */ "./.cache/slice/context.js");
"use client";





function Slice(props) {
  if (true) {
    // we use sliceName internally, so remap alias to sliceName
    const internalProps = {
      ...props,
      sliceName: props.alias
    };
    delete internalProps.alias;
    delete internalProps.__renderedByLocation;
    const slicesContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slice_context__WEBPACK_IMPORTED_MODULE_3__.SlicesContext);

    // validate props
    const propErrors = validateSliceProps(props);
    if (Object.keys(propErrors).length) {
      throw new SlicePropsError(slicesContext.renderEnvironment === `browser`, internalProps.sliceName, propErrors, props.__renderedByLocation);
    }
    if (slicesContext.renderEnvironment === `server`) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_server_slice__WEBPACK_IMPORTED_MODULE_1__.ServerSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `browser`) {
      // in the browser, we'll just render the component as is
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `engines` || slicesContext.renderEnvironment === `dev-ssr`) {
      // if we're in SSR, we'll just render the component as is
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `slices`) {
      // we are not yet supporting nested slices

      let additionalContextMessage = ``;

      // just in case generating additional contextual information fails, we still want the base message to show
      // and not show another cryptic error message
      try {
        additionalContextMessage = `\n\nSlice component "${slicesContext.sliceRoot.name}" (${slicesContext.sliceRoot.componentPath}) tried to render <Slice alias="${props.alias}"/>`;
      } catch {
        // don't need to handle it, we will just skip the additional context message if we fail to generate it
      }
      throw new Error(`Nested slices are not supported.${additionalContextMessage}\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices`);
    } else {
      throw new Error(`Slice context "${slicesContext.renderEnvironment}" is not supported.`);
    }
  } else {}
}
class SlicePropsError extends Error {
  constructor(inBrowser, sliceName, propErrors, renderedByLocation) {
    const errors = Object.entries(propErrors).map(([key, value]) => `not serializable "${value}" type passed to "${key}" prop`).join(`, `);
    const name = `SlicePropsError`;
    let stack = ``;
    let message = ``;
    if (inBrowser) {
      // They're just (kinda) kidding, I promise... You can still work here <3
      //   https://www.gatsbyjs.com/careers/
      const fullStack = react__WEBPACK_IMPORTED_MODULE_0___default().__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack();

      // remove the first line of the stack trace
      const stackLines = fullStack.trim().split(`\n`).slice(1);
      stackLines[0] = stackLines[0].trim();
      stack = `\n` + stackLines.join(`\n`);
      message = `Slice "${sliceName}" was passed props that are not serializable (${errors}).`;
    } else {
      // we can't really grab any extra info outside of the browser, so just print what we can
      message = `${name}: Slice "${sliceName}" was passed props that are not serializable (${errors}).`;
      const stackLines = new Error().stack.trim().split(`\n`).slice(2);
      stack = `${message}\n${stackLines.join(`\n`)}`;
    }
    super(message);
    this.name = name;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, SlicePropsError);
    }
    if (renderedByLocation) {
      this.forcedLocation = {
        ...renderedByLocation,
        functionName: `Slice`
      };
    }
  }
}
const validateSliceProps = (props, errors = {}, seenObjects = [], path = null) => {
  // recursively validate all props
  for (const [name, value] of Object.entries(props)) {
    if (value === undefined || value === null || !path && name === `children`) {
      continue;
    }
    const propPath = path ? `${path}.${name}` : name;
    if (typeof value === `function`) {
      errors[propPath] = typeof value;
    } else if (typeof value === `object` && seenObjects.indexOf(value) <= 0) {
      seenObjects.push(value);
      validateSliceProps(value, errors, seenObjects, propPath);
    }
  }
  return errors;
};

/***/ }),

/***/ "./.cache/slice/context.js":
/*!*********************************!*\
  !*** ./.cache/slice/context.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlicesContext: () => (/* binding */ SlicesContext),
/* harmony export */   SlicesMapContext: () => (/* binding */ SlicesMapContext),
/* harmony export */   SlicesPropsContext: () => (/* binding */ SlicesPropsContext),
/* harmony export */   SlicesResultsContext: () => (/* binding */ SlicesResultsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SlicesResultsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesMapContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesPropsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});


/***/ }),

/***/ "./.cache/slice/inline-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/inline-slice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSlice: () => (/* binding */ InlineSlice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");


const InlineSlice = ({
  sliceName,
  allowEmpty,
  children,
  ...sliceProps
}) => {
  const slicesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesMapContext);
  const slicesResultsMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesResultsContext);
  const concreteSliceName = slicesMap[sliceName];
  const slice = slicesResultsMap.get(concreteSliceName);
  if (!slice) {
    if (allowEmpty) {
      return null;
    } else {
      throw new Error(`Slice "${concreteSliceName}" for "${sliceName}" slot not found`);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slice.component, Object.assign({
    sliceContext: slice.sliceContext,
    data: slice.data
  }, sliceProps), children);
};

/***/ }),

/***/ "./.cache/slice/server-slice-renderer.js":
/*!***********************************************!*\
  !*** ./.cache/slice/server-slice-renderer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerSliceRenderer: () => (/* binding */ ServerSliceRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ServerSliceRenderer = ({
  sliceId,
  children
}) => {
  const contents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-start`, {
    id: `${sliceId}-1`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-end`, {
    id: `${sliceId}-1`
  })];
  if (children) {
    // if children exist, we split the slice into a before and after piece
    // see renderSlices in render-html
    contents.push(children);
    contents.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-start`, {
      id: `${sliceId}-2`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-end`, {
      id: `${sliceId}-2`
    }));
  }
  return contents;
};

/***/ }),

/***/ "./.cache/slice/server-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/server-slice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerSlice: () => (/* binding */ ServerSlice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-core-utils/create-content-digest */ "./node_modules/gatsby-core-utils/dist/create-content-digest.mjs");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");
/* harmony import */ var _server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-slice-renderer */ "./.cache/slice/server-slice-renderer.js");




const getSliceId = (sliceName, sliceProps) => {
  if (!Object.keys(sliceProps).length) {
    return sliceName;
  }
  const propsString = (0,gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__.createContentDigest)(sliceProps);
  return `${sliceName}-${propsString}`;
};
const ServerSlice = ({
  sliceName,
  allowEmpty,
  children,
  ...sliceProps
}) => {
  const slicesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesMapContext);
  const slicesProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesPropsContext);
  const concreteSliceName = slicesMap[sliceName];
  if (!concreteSliceName) {
    if (allowEmpty) {
      return null;
    } else {
      throw new Error(`Slice "${concreteSliceName}" for "${sliceName}" slot not found`);
    }
  }
  const sliceId = getSliceId(concreteSliceName, sliceProps);

  // set props on context object for static-entry to return
  let sliceUsage = slicesProps[sliceId];
  if (!sliceUsage) {
    slicesProps[sliceId] = sliceUsage = {
      props: sliceProps,
      sliceName: concreteSliceName,
      hasChildren: !!children
    };
  } else {
    if (children) {
      sliceUsage.hasChildren = true;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__.ServerSliceRenderer, {
    sliceId: sliceId
  }, children);
};

/***/ }),

/***/ "./.cache/static-query.js":
/*!********************************!*\
  !*** ./.cache/static-query.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaticQuery: () => (/* binding */ StaticQuery),
/* harmony export */   StaticQueryContext: () => (/* binding */ StaticQueryContext),
/* harmony export */   useStaticQuery: () => (/* binding */ useStaticQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-utils */ "./.cache/context-utils.js");



const StaticQueryContext = (0,_context_utils__WEBPACK_IMPORTED_MODULE_1__.createServerOrClientContext)(`StaticQuery`, {});
function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}
let warnedAboutStaticQuery = false;

// TODO(v6): Remove completely
const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  if ( true && !warnedAboutStaticQuery) {
    console.warn(`The <StaticQuery /> component is deprecated and will be removed in Gatsby v6. Use useStaticQuery instead. Refer to the migration guide for more information: https://gatsby.dev/migrating-4-to-5/#staticquery--is-deprecated`);
    warnedAboutStaticQuery = true;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};
StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
const useStaticQuery = query => {
  var _context$query;
  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    // TODO(v5): Remove since we require React >= 18
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }
  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext);

  // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction
  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }
  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};


/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */

function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }
  if (str === prefix) {
    return `/`;
  }
  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }
  return str;
}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");


const Footer = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "bg-[#1d8f92] text-white py-16",
    style: {
      backgroundImage: `url(${__webpack_require__(/*! ../assets/images/ALG-Patterns.png */ "./src/assets/images/ALG-Patterns.png")})`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: 'top'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-6xl mx-auto px-6 space-y-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid sm:grid-cols-4 gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "About Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/our-mission",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Our Mission")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/institutional-framework",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Our Institutional Framework")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/history",
    className: "hover:text-[#f6941e] transition-colors"
  }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/leadership-governance",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Leadership and Governance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/impact",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Our Impact")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "More from the Forum"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://huduma.leoafricainstitute.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Huduma Fellowship")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://yelp.leoafricainstitute.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "YELP")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://leoafricareview.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "L\xE9O Africa Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://alg.leoafricainstitute.org/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Annual Leaders Gathering")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "Engage with Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/signin",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Sign In")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/partner",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Partner with Us")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/membership",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Become a Member")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/press-releases",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Sign Up for Press Releases")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/newsletter",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Subscribe to Newsletters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/contact",
    className: "hover:text-[#f6941e] transition-colors"
  }, "Contact Us")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold mb-4 text-[#f6941e]"
  }, "Stay Updated"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm mb-4"
  }, "Join our mailing list to receive the latest news and updates from the L\xE9O Africa Institute."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "https://mailchimp.com/subscribe",
    method: "POST",
    className: "flex flex-col space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    name: "email",
    placeholder: "Your email address",
    className: "p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#2bbecb]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "bg-[#f6941e] text-white p-2 rounded-md hover:bg-[#2bbecb] transition-colors"
  }, "Subscribe")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border-t border-gray-300 pt-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6 sm:mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/sitemap",
    className: "text-sm hover:text-[#f6941e] transition-colors"
  }, "Sitemap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/privacy-policy",
    className: "text-sm hover:text-[#f6941e] transition-colors"
  }, "Privacy Policy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://x.com/LeoAfricaInst",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTwitter, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.facebook.com/LeOAfricaInstitute/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFacebookF, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.instagram.com/leoafricainst/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaInstagram, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.linkedin.com/company/18203194/admin/page-posts/published/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedinIn, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/@leoafricainstitute",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaYoutube, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://flickr.com/people/africaforum/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFlickr, {
    className: "w-6 h-6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:communications@leoafricainstitute.org",
    className: "hover:text-[#f6941e] transition-all transform hover:scale-110"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaEnvelope, {
    className: "w-6 h-6"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col sm:flex-row justify-between items-center text-sm border-t border-gray-300 pt-6 mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", currentYear, " L\xE9O Africa Institute. All rights reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://index.ug",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "hover:text-[#f6941e] transition-colors"
  }, "A creation of Index Digital"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.mjs");




const Layout = ({
  children
}) => {
  const {
    0: isBottom,
    1: setIsBottom
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleScroll = () => {
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
    setIsBottom(isAtBottom);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToPosition = () => {
    if (isBottom) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "layout relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "content"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onClick: scrollToPosition,
    className: "fixed bottom-10 right-10 flex flex-col items-center cursor-pointer group"
  }, isBottom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiArrowUp, {
    className: "w-10 h-10 text-[#f6911e] animate-bounce transition-transform duration-300 ease-in-out group-hover:text-[#3b3b3b] group-hover:scale-110"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiArrowDown, {
    className: "w-10 h-10 text-[#f6911e] animate-bounce transition-transform duration-300 ease-in-out group-hover:text-[#1e8e92] group-hover:scale-110"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm mt-2 text-[#1e8e92] group-hover:text-[#f6911e] transition-opacity duration-300"
  }, isBottom ? 'Scroll to Top' : 'Scroll to Bottom')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prefooter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Multimedia/MultimediaHome.js":
/*!*****************************************************!*\
  !*** ./src/components/Multimedia/MultimediaHome.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");


const MultimediaHome = ({
  data
}) => {
  var _data$allPrismicBlogP;
  const multimediaItems = (data === null || data === void 0 ? void 0 : (_data$allPrismicBlogP = data.allPrismicBlogPosts) === null || _data$allPrismicBlogP === void 0 ? void 0 : _data$allPrismicBlogP.nodes) || [];
  const featuredItems = multimediaItems.slice(0, 2); // First 2 items
  const otherItems = multimediaItems.slice(2, 5); // Next 3 items

  if (multimediaItems.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-center text-gray-600"
    }, "No multimedia items available.");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "container mx-auto px-6 lg:px-20 py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-3xl font-bold text-gray-800 mb-4"
  }, "Latest Updates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg text-gray-600 mb-8"
  }, "Explore a curated selection of our most recent multimedia content, offering insights, stories, and impactful updates."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12"
  }, featuredItems.map(item => {
    var _item$data$featured_i, _item$data$categories;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.id,
      className: "relative bg-white shadow-lg rounded-lg overflow-hidden group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`
    }, ((_item$data$featured_i = item.data.featured_image) === null || _item$data$featured_i === void 0 ? void 0 : _item$data$featured_i.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.data.featured_image.url,
      alt: item.data.title,
      className: "w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-2xl font-bold text-gray-800 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "hover:underline"
    }, item.data.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm text-gray-500 mb-4"
    }, "Published on ", item.data.publish_date, " by", " ", item.data.author || "Unknown"), ((_item$data$categories = item.data.categories) === null || _item$data$categories === void 0 ? void 0 : _item$data$categories.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-wrap gap-2 mb-4"
    }, item.data.categories.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/${category.category.toLowerCase()}`,
      key: index,
      className: "px-3 py-1 text-sm font-medium text-white bg-[#f6941e] rounded-full hover:bg-[#1d8f92] transition-colors"
    }, category.category))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
    }, "Read More \u2192")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold text-gray-800 mb-2"
  }, "More Insights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg text-gray-600 mb-6"
  }, "Browse through a variety of multimedia resources that provide insights and inspiration across all categories."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, otherItems.map(item => {
    var _item$data$featured_i2, _item$data$categories2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.id,
      className: "bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`
    }, ((_item$data$featured_i2 = item.data.featured_image) === null || _item$data$featured_i2 === void 0 ? void 0 : _item$data$featured_i2.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: item.data.featured_image.url,
      alt: item.data.title,
      className: "w-full h-48 object-cover"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-xl font-bold text-gray-800 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "hover:underline"
    }, item.data.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm text-gray-500 mb-2"
    }, "Published on ", item.data.publish_date, " by", " ", item.data.author || "Unknown"), ((_item$data$categories2 = item.data.categories) === null || _item$data$categories2 === void 0 ? void 0 : _item$data$categories2.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "flex flex-wrap gap-2 mb-4"
    }, item.data.categories.map((category, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/${category.category.toLowerCase()}`,
      key: index,
      className: "px-3 py-1 text-sm font-medium text-white bg-[#1d8f92] rounded-full hover:bg-[#f6941e] transition-colors"
    }, category.category))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: `/blog/${item.uid}`,
      className: "mt-2 inline-block text-[#1e8e92] font-semibold hover:underline"
    }, "Read More \u2192")));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultimediaHome);

/***/ }),

/***/ "./src/pages/publications.js?export=default":
/*!**************************************************!*\
  !*** ./src/pages/publications.js?export=default ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Multimedia_MultimediaHome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Multimedia/MultimediaHome */ "./src/components/Multimedia/MultimediaHome.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/dist/index.js");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.mjs");
/* harmony import */ var _assets_images_alg_2023_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/alg-2023.png */ "./src/assets/images/alg-2023.png");


 // Import MultimediaHome


 // Import download icon
 // Replace with actual image

const PublicationsComponent = ({
  data
}) => {
  var _latestPublication$da;
  const publicationArticles = data.allPrismicBlogPosts.nodes;
  if (!publicationArticles || publicationArticles.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-center text-gray-600"
    }, "No publications available.");
  }

  // Latest publication for hero section
  const latestPublication = publicationArticles[0];
  // Other publications
  const otherPublications = publicationArticles.slice(1, 6);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "relative bg-[#1d8f92] text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-[#545456]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto flex justify-between items-center px-6 lg:px-20 py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-bold text-white"
  }, ((_latestPublication$da = latestPublication.data.categories[0]) === null || _latestPublication$da === void 0 ? void 0 : _latestPublication$da.category) || "Publication"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/path/to/publication.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center space-x-2 px-3 py-1 bg-[#1d8f92] text-white font-medium rounded hover:bg-white hover:text-[#1d8f92] transition-transform duration-300 transform hover:scale-105"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineDownload, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Download PDF")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto px-6 lg:px-20 py-8 lg:py-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-6 lg:space-y-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm font-medium text-[#f6941e]"
  }, "Our Latest Publications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "border-t border-gray-300 w-[270px] animate-slide-in"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-sm"
  }, latestPublication.data.publish_date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "text-2xl sm:text-3xl font-bold leading-snug"
  }, latestPublication.data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/path/to/publication.pdf",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "flex items-center space-x-2 px-2 py-1 bg-[#f6941e] text-white font-medium rounded hover:bg-[#1d8f92] transition-transform duration-300 transform hover:scale-105",
    style: {
      maxWidth: "116px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiOutlineDownload, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Download")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-base text-gray-200 leading-relaxed"
  }, "This report delves into groundbreaking insights and transformative ideas, offering actionable recommendations for meaningful change. Stay informed and explore key findings shaping critical discussions today."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center space-x-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-sm font-medium text-gray-300"
  }, "Share Publication:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookShareButton, {
    url: shareUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.FacebookIcon, {
    size: 32,
    round: true,
    className: "hover:scale-110 transition-transform duration-300",
    style: {
      fill: "white",
      backgroundColor: "transparent"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.TwitterShareButton, {
    url: shareUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.TwitterIcon, {
    size: 32,
    round: true,
    className: "hover:scale-110 transition-transform duration-300",
    style: {
      fill: "white",
      backgroundColor: "transparent"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.LinkedinShareButton, {
    url: shareUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.LinkedinIcon, {
    size: 32,
    round: true,
    className: "hover:scale-110 transition-transform duration-300",
    style: {
      fill: "white",
      backgroundColor: "transparent"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.WhatsappShareButton, {
    url: shareUrl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_share__WEBPACK_IMPORTED_MODULE_6__.WhatsappIcon, {
    size: 32,
    round: true,
    className: "hover:scale-110 transition-transform duration-300",
    style: {
      fill: "white",
      backgroundColor: "transparent"
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _assets_images_alg_2023_png__WEBPACK_IMPORTED_MODULE_4__["default"],
    alt: "Latest Publication",
    className: "w-full max-w-sm h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "prefooter"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto px-6 lg:px-20 py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-3xl font-bold text-gray-800 mb-4"
  }, "Explore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-lg text-gray-600 mb-6"
  }, "Explore a curated collection of thought-provoking publications that reflect the L\xE9O Africa Institute\u2019s commitment to advancing transformative ideas and fostering impactful change. Dive into these expertly crafted works to uncover innovative perspectives and actionable recommendations designed to shape a brighter, more inclusive future."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  }, otherPublications.map(article => {
    var _article$data$feature;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: article.id,
      className: "bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: `/blog/${article.uid}`
    }, ((_article$data$feature = article.data.featured_image) === null || _article$data$feature === void 0 ? void 0 : _article$data$feature.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: article.data.featured_image.url,
      alt: article.data.title,
      className: "w-full h-48 object-cover"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "p-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
      className: "text-xl font-bold text-gray-800 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: `/blog/${article.uid}`,
      className: "hover:text-[#1e8e92] transition-colors"
    }, article.data.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "text-sm text-gray-500 mb-2"
    }, "Published on ", article.data.publish_date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: `/blog/${article.uid}`,
      className: "mt-4 inline-block text-[#1e8e92] font-semibold hover:underline"
    }, "Read More \u2192")));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", {
    className: "my-12 border-t-2 border-gray-300 w-11/12 mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container mx-auto px-6 lg:px-20 py-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Multimedia_MultimediaHome__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: data
  })));
};
const query = "858656952";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PublicationsComponent);

/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/jsonp/node_modules/debug/src/index.js")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/jsonp/node_modules/debug/src/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/jsonp/node_modules/debug/src/browser.js ***!
  \**************************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/jsonp/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = ({}).DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/jsonp/node_modules/debug/src/debug.js":
/*!************************************************************!*\
  !*** ./node_modules/jsonp/node_modules/debug/src/debug.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/jsonp/node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/jsonp/node_modules/debug/src/index.js":
/*!************************************************************!*\
  !*** ./node_modules/jsonp/node_modules/debug/src/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "./node_modules/jsonp/node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "./node_modules/jsonp/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "./node_modules/jsonp/node_modules/debug/src/node.js":
/*!***********************************************************!*\
  !*** ./node_modules/jsonp/node_modules/debug/src/node.js ***!
  \***********************************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(/*! tty */ "tty");
var util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/jsonp/node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(({})).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = ({})[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(({}).DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete ({}).DEBUG;
  } else {
    ({}).DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return ({}).DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(/*! fs */ "fs");
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(/*! net */ "net");
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ "./node_modules/jsonp/node_modules/ms/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/jsonp/node_modules/ms/index.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/node-object-hash/dist/hasher.js":
/*!******************************************************!*\
  !*** ./node_modules/node-object-hash/dist/hasher.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var objectSorter_1 = __importDefault(__webpack_require__(/*! ./objectSorter */ "./node_modules/node-object-hash/dist/objectSorter.js"));
var crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Default hash algorithm
 */
var DEFAULT_ALG = 'sha256';
/**
 * Default hash string enoding
 */
var DEFAULT_ENC = 'hex';
/**
 * Hasher constructor
 * @param options hasher options
 * @return hasher instance
 */
function hasher(options) {
    if (options === void 0) { options = {}; }
    var sortObject = (0, objectSorter_1.default)(options);
    /**
     * Object hash function
     * @param obj object to hash
     * @param opts hasher options
     * @returns hash string
     */
    function hashObject(obj, opts) {
        if (opts === void 0) { opts = {}; }
        var alg = opts.alg || options.alg || DEFAULT_ALG;
        var enc = opts.enc || options.enc || DEFAULT_ENC;
        var sorted = sortObject(obj);
        return crypto_1.default.createHash(alg).update(sorted).digest(enc);
    }
    return {
        hash: hashObject,
        sort: sortObject,
        sortObject: sortObject,
    };
}
module.exports = hasher;
//# sourceMappingURL=hasher.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/objectSorter.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/objectSorter.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
var str = __importStar(__webpack_require__(/*! ./stringifiers */ "./node_modules/node-object-hash/dist/stringifiers.js"));
/**
 * Object sorter consturctor
 * @param options object transformation options
 * @return function that transforms object to strings
 */
function objectSorter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign({ sort: true, coerce: true, trim: false }, options), sort = _a.sort, coerce = _a.coerce, trim = _a.trim;
    var stringifiers = {
        unknown: function _unknown(obj) {
            var _a, _b;
            // `unknonw` - is a typo, saved for backward compatibility
            var constructorName = (_b = (_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'unknonw';
            var objectName = typeof obj.toString === 'function' ? obj.toString() : 'unknown';
            return "<:" + constructorName + ">:" + objectName;
        },
    };
    var sortOptions = {
        array: typeof sort === 'boolean' ? sort : sort.array,
        typedArray: typeof sort === 'boolean' ? false : sort.typedArray,
        object: typeof sort === 'boolean' ? sort : sort.object,
        set: typeof sort === 'boolean' ? sort : sort.set,
        map: typeof sort === 'boolean' ? sort : sort.map,
    };
    var coerceOptions = {
        boolean: typeof coerce === 'boolean' ? coerce : coerce.boolean,
        number: typeof coerce === 'boolean' ? coerce : coerce.number,
        bigint: typeof coerce === 'boolean' ? coerce : coerce.bigint,
        string: typeof coerce === 'boolean' ? coerce : coerce.string,
        undefined: typeof coerce === 'boolean' ? coerce : coerce.undefined,
        null: typeof coerce === 'boolean' ? coerce : coerce.null,
        symbol: typeof coerce === 'boolean' ? coerce : coerce.symbol,
        function: typeof coerce === 'boolean' ? coerce : coerce.function,
        date: typeof coerce === 'boolean' ? coerce : coerce.date,
        set: typeof coerce === 'boolean' ? coerce : coerce.set,
    };
    var trimOptions = {
        string: typeof trim === 'boolean' ? trim : trim.string,
        function: typeof trim === 'boolean' ? trim : trim.function,
    };
    stringifiers.hashable = str._hashable.bind(stringifiers);
    if (trimOptions.string) {
        stringifiers.string = coerceOptions.string
            ? str._stringTrimCoerce.bind(stringifiers)
            : str._stringTrim.bind(stringifiers);
    }
    else {
        stringifiers.string = coerceOptions.string
            ? str._stringCoerce.bind(stringifiers)
            : str._string.bind(stringifiers);
    }
    stringifiers.number = coerceOptions.number
        ? str._numberCoerce.bind(stringifiers)
        : str._number.bind(stringifiers);
    stringifiers.bigint = coerceOptions.bigint
        ? str._bigIntCoerce.bind(stringifiers)
        : str._bigInt.bind(stringifiers);
    stringifiers.boolean = coerceOptions.boolean
        ? str._booleanCoerce.bind(stringifiers)
        : str._boolean.bind(stringifiers);
    stringifiers.symbol = coerceOptions.symbol
        ? str._symbolCoerce.bind(stringifiers)
        : str._symbol.bind(stringifiers);
    stringifiers.undefined = coerceOptions.undefined
        ? str._undefinedCoerce.bind(stringifiers)
        : str._undefined.bind(stringifiers);
    stringifiers.null = coerceOptions.null
        ? str._nullCoerce.bind(stringifiers)
        : str._null.bind(stringifiers);
    if (trimOptions.function) {
        stringifiers.function = coerceOptions.function
            ? str._functionTrimCoerce.bind(stringifiers)
            : str._functionTrim.bind(stringifiers);
    }
    else {
        stringifiers.function = coerceOptions.function
            ? str._functionCoerce.bind(stringifiers)
            : str._function.bind(stringifiers);
    }
    stringifiers.date = coerceOptions.date
        ? str._dateCoerce.bind(stringifiers)
        : str._date.bind(stringifiers);
    stringifiers.array = sortOptions.array
        ? str._arraySort.bind(stringifiers)
        : str._array.bind(stringifiers);
    stringifiers.typedarray = sortOptions.typedArray
        ? str._typedArraySort.bind(stringifiers)
        : str._typedArray.bind(stringifiers);
    if (sortOptions.set) {
        stringifiers.set = coerceOptions.set
            ? str._setSortCoerce.bind(stringifiers)
            : str._setSort.bind(stringifiers);
    }
    else {
        stringifiers.set = coerceOptions.set
            ? str._setCoerce.bind(stringifiers)
            : str._set.bind(stringifiers);
    }
    stringifiers.object = sortOptions.object
        ? str._objectSort.bind(stringifiers)
        : str._object.bind(stringifiers);
    stringifiers.map = sortOptions.map
        ? str._mapSort.bind(stringifiers)
        : str._map.bind(stringifiers);
    /**
     * Serializes object to string
     * @param obj object
     */
    function objectToString(obj) {
        return stringifiers[(0, typeGuess_1.guessType)(obj)](obj);
    }
    return objectToString;
}
module.exports = objectSorter;
//# sourceMappingURL=objectSorter.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/stringifiers.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/stringifiers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @private
 * @inner
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._mapSort = exports._map = exports._objectSort = exports._object = exports._setCoerce = exports._set = exports._setSort = exports._setSortCoerce = exports._typedArray = exports._typedArraySort = exports._array = exports._arraySort = exports._date = exports._dateCoerce = exports._functionTrim = exports._functionTrimCoerce = exports._function = exports._functionCoerce = exports._null = exports._nullCoerce = exports._undefined = exports._undefinedCoerce = exports._symbol = exports._symbolCoerce = exports._boolean = exports._booleanCoerce = exports._bigInt = exports._bigIntCoerce = exports._number = exports._numberCoerce = exports._stringTrim = exports._stringTrimCoerce = exports._string = exports._stringCoerce = exports._hashable = exports.PREFIX = void 0;
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
/**
 * Prefixes that used when type coercion is disabled
 */
exports.PREFIX = {
    string: '<:s>',
    number: '<:n>',
    bigint: '<:bi>',
    boolean: '<:b>',
    symbol: '<:smbl>',
    undefined: '<:undf>',
    null: '<:null>',
    function: '<:func>',
    array: '',
    date: '<:date>',
    set: '<:set>',
    map: '<:map>',
};
/**
 * Converts Hashable to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _hashable(obj) {
    return obj.toHashableString();
}
exports._hashable = _hashable;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringCoerce(obj) {
    return obj;
}
exports._stringCoerce = _stringCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _string(obj) {
    return exports.PREFIX.string + ':' + obj;
}
exports._string = _string;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringTrimCoerce(obj) {
    return obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrimCoerce = _stringTrimCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringTrim(obj) {
    return exports.PREFIX.string + ':' + obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrim = _stringTrim;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _numberCoerce(obj) {
    return obj.toString();
}
exports._numberCoerce = _numberCoerce;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _number(obj) {
    return exports.PREFIX.number + ":" + obj;
}
exports._number = _number;
/**
 * Converts BigInt to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _bigIntCoerce(obj) {
    return obj.toString();
}
exports._bigIntCoerce = _bigIntCoerce;
/**
 * Converts BigInt to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _bigInt(obj) {
    return exports.PREFIX.bigint + ":" + obj.toString();
}
exports._bigInt = _bigInt;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _booleanCoerce(obj) {
    return obj ? '1' : '0';
}
exports._booleanCoerce = _booleanCoerce;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _boolean(obj) {
    return exports.PREFIX.boolean + ':' + obj.toString();
}
exports._boolean = _boolean;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _symbolCoerce() {
    return exports.PREFIX.symbol;
}
exports._symbolCoerce = _symbolCoerce;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _symbol(obj) {
    return exports.PREFIX.symbol + ':' + obj.toString();
}
exports._symbol = _symbol;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _undefinedCoerce() {
    return '';
}
exports._undefinedCoerce = _undefinedCoerce;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _undefined() {
    return exports.PREFIX.undefined;
}
exports._undefined = _undefined;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _nullCoerce() {
    return '';
}
exports._nullCoerce = _nullCoerce;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _null() {
    return exports.PREFIX.null;
}
exports._null = _null;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionCoerce(obj) {
    return obj.name + '=>' + obj.toString();
}
exports._functionCoerce = _functionCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _function(obj) {
    return exports.PREFIX.function + ':' + obj.name + '=>' + obj.toString();
}
exports._function = _function;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionTrimCoerce(obj) {
    return (obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrimCoerce = _functionTrimCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionTrim(obj) {
    return (exports.PREFIX.function +
        ':' +
        obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrim = _functionTrim;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _dateCoerce(obj) {
    return obj.toISOString();
}
exports._dateCoerce = _dateCoerce;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _date(obj) {
    return exports.PREFIX.date + ':' + obj.toISOString();
}
exports._date = _date;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _arraySort(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[(0, typeGuess_1.guessType)(item)](item);
        })
            .sort()
            .toString() +
        ']');
}
exports._arraySort = _arraySort;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _array(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[(0, typeGuess_1.guessType)(item)](item);
        })
            .toString() +
        ']');
}
exports._array = _array;
/**
 * Converts TypedArray to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _typedArraySort(obj) {
    var stringifiers = this;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var values = Array.prototype.slice.call(obj);
    return ('[' +
        values
            .map(function (num) {
            return stringifiers[(0, typeGuess_1.guessType)(num)](num);
        })
            .sort()
            .toString() +
        ']');
}
exports._typedArraySort = _typedArraySort;
/**
 * Converts TypedArray to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _typedArray(obj) {
    var stringifiers = this;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var values = Array.prototype.slice.call(obj);
    return ('[' +
        values
            .map(function (num) {
            return stringifiers[(0, typeGuess_1.guessType)(num)](num);
        })
            .toString() +
        ']');
}
exports._typedArray = _typedArray;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setSortCoerce(obj) {
    return _arraySort.call(this, Array.from(obj));
}
exports._setSortCoerce = _setSortCoerce;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setSort(obj) {
    return exports.PREFIX.set + ":" + _arraySort.call(this, Array.from(obj));
}
exports._setSort = _setSort;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _set(obj) {
    return exports.PREFIX.set + ":" + _array.call(this, Array.from(obj));
}
exports._set = _set;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setCoerce(obj) {
    return _array.call(this, Array.from(obj));
}
exports._setCoerce = _setCoerce;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _object(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj);
    var objArray = [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var val = obj[key];
        var valT = (0, typeGuess_1.guessType)(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._object = _object;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _objectSort(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj).sort();
    var objArray = [];
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var val = obj[key];
        var valT = (0, typeGuess_1.guessType)(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._objectSort = _objectSort;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _map(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var _a = item, key = _a[0], value = _a[1];
        mapped.push([
            stringifiers[(0, typeGuess_1.guessType)(key)](key),
            stringifiers[(0, typeGuess_1.guessType)(value)](value),
        ]);
    }
    return '[' + mapped.join(';') + ']';
}
exports._map = _map;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _mapSort(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        var _a = item, key = _a[0], value = _a[1];
        mapped.push([
            stringifiers[(0, typeGuess_1.guessType)(key)](key),
            stringifiers[(0, typeGuess_1.guessType)(value)](value),
        ]);
    }
    return '[' + mapped.sort().join(';') + ']';
}
exports._mapSort = _mapSort;
//# sourceMappingURL=stringifiers.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/typeGuess.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-object-hash/dist/typeGuess.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.guessType = exports.guessObjectType = exports.TYPE_MAP = void 0;
/**
 * Type mapping rules.
 */
exports.TYPE_MAP = {
    Array: 'array',
    Int8Array: 'typedarray',
    Uint8Array: 'typedarray',
    Uint8ClampedArray: 'typedarray',
    Int16Array: 'typedarray',
    Uint16Array: 'typedarray',
    Int32Array: 'typedarray',
    Uint32Array: 'typedarray',
    Float32Array: 'typedarray',
    Float64Array: 'typedarray',
    BigUint64Array: 'typedarray',
    BigInt64Array: 'typedarray',
    Buffer: 'typedarray',
    Map: 'map',
    Set: 'set',
    Date: 'date',
    String: 'string',
    Number: 'number',
    BigInt: 'bigint',
    Boolean: 'boolean',
    Object: 'object',
};
/**
 * Guess object type
 * @param obj analyzed object
 * @return object type
 */
function guessObjectType(obj) {
    var _a, _b;
    if (obj === null) {
        return 'null';
    }
    if (instanceOfHashable(obj)) {
        return 'hashable';
    }
    var type = (_b = (_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'unknown';
    return exports.TYPE_MAP[type] || 'unknown';
}
exports.guessObjectType = guessObjectType;
/**
 * Guess variable type
 * @param obj analyzed variable
 * @return variable type
 */
function guessType(obj) {
    var type = typeof obj;
    return type !== 'object' ? type : guessObjectType(obj);
}
exports.guessType = guessType;
/**
 * Identify if object is instance of Hashable interface
 * @param object analyzed variable
 * @return true if object has toHashableString property and this property is function
 * otherwise return false
 */
function instanceOfHashable(object) {
    return typeof object.toHashableString === 'function';
}
//# sourceMappingURL=typeGuess.js.map

/***/ }),

/***/ "./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

function createStringDecoder() {
  return new TextDecoder();
}
var decoderOptions = {
  stream: true
};
function readPartialStringChunk(decoder, buffer) {
  return decoder.decode(buffer, decoderOptions);
}
function readFinalStringChunk(decoder, buffer) {
  return decoder.decode(buffer);
}

function parseModel(response, json) {
  return JSON.parse(json, response._fromJSON);
}

// eslint-disable-next-line no-unused-vars
function resolveModuleReference(bundlerConfig, moduleData) {
  if (bundlerConfig) {
    return bundlerConfig[moduleData.id][moduleData.name];
  }

  return moduleData;
} // The chunk cache contains all the chunks we've preloaded so far.
// If they're still pending they're a thenable. This map also exists
// in Webpack but unfortunately it's not exposed so we have to
// replicate it in user space. null means that it has already loaded.

var chunkCache = new Map(); // Start preloading the modules since we might need them soon.
// This function doesn't suspend.

function preloadModule(moduleData) {
  var chunks = moduleData.chunks;

  for (var i = 0; i < chunks.length; i++) {
    var chunkId = chunks[i];
    var entry = chunkCache.get(chunkId);

    if (entry === undefined) {
      var thenable = __webpack_require__.e(chunkId);

      var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
      var reject = chunkCache.set.bind(chunkCache, chunkId);
      thenable.then(resolve, reject);
      chunkCache.set(chunkId, thenable);
    }
  }
} // Actually require the module or suspend if it's not yet ready.
// Increase priority if necessary.

function requireModule(moduleData) {
  var chunks = moduleData.chunks;

  for (var i = 0; i < chunks.length; i++) {
    var chunkId = chunks[i];
    var entry = chunkCache.get(chunkId);

    if (entry !== null) {
      // We assume that preloadModule has been called before.
      // So we don't expect to see entry being undefined here, that's an error.
      // Let's throw either an error or the Promise.
      throw entry;
    }
  }

  var moduleExports = __webpack_require__(moduleData.id);

  if (moduleData.name === '*') {
    // This is a placeholder value that represents that the caller imported this
    // as a CommonJS module as is.
    return moduleExports;
  }

  if (moduleData.name === '') {
    // This is a placeholder value that represents that the caller accessed the
    // default property of this if it was an ESM interop module.
    return moduleExports.__esModule ? moduleExports.default : moduleExports;
  }

  return moduleExports[moduleData.name];
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ContextRegistry = ReactSharedInternals.ContextRegistry;
function getOrCreateServerContext(globalName) {
  if (!ContextRegistry[globalName]) {
    ContextRegistry[globalName] = React.createServerContext(globalName, REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED);
  }

  return ContextRegistry[globalName];
}

var PENDING = 0;
var RESOLVED_MODEL = 1;
var RESOLVED_MODULE = 2;
var INITIALIZED = 3;
var ERRORED = 4;

function Chunk(status, value, response) {
  this._status = status;
  this._value = value;
  this._response = response;
}

Chunk.prototype.then = function (resolve) {
  var chunk = this;

  if (chunk._status === PENDING) {
    if (chunk._value === null) {
      chunk._value = [];
    }

    chunk._value.push(resolve);
  } else {
    resolve();
  }
};

function readChunk(chunk) {
  switch (chunk._status) {
    case INITIALIZED:
      return chunk._value;

    case RESOLVED_MODEL:
      return initializeModelChunk(chunk);

    case RESOLVED_MODULE:
      return initializeModuleChunk(chunk);

    case PENDING:
      // eslint-disable-next-line no-throw-literal
      throw chunk;

    default:
      throw chunk._value;
  }
}

function readRoot() {
  var response = this;
  var chunk = getChunk(response, 0);
  return readChunk(chunk);
}

function createPendingChunk(response) {
  return new Chunk(PENDING, null, response);
}

function createErrorChunk(response, error) {
  return new Chunk(ERRORED, error, response);
}

function createInitializedChunk(response, value) {
  return new Chunk(INITIALIZED, value, response);
}

function wakeChunk(listeners) {
  if (listeners !== null) {
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  }
}

function triggerErrorOnChunk(chunk, error) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var erroredChunk = chunk;
  erroredChunk._status = ERRORED;
  erroredChunk._value = error;
  wakeChunk(listeners);
}

function createResolvedModelChunk(response, value) {
  return new Chunk(RESOLVED_MODEL, value, response);
}

function createResolvedModuleChunk(response, value) {
  return new Chunk(RESOLVED_MODULE, value, response);
}

function resolveModelChunk(chunk, value) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var resolvedChunk = chunk;
  resolvedChunk._status = RESOLVED_MODEL;
  resolvedChunk._value = value;
  wakeChunk(listeners);
}

function resolveModuleChunk(chunk, value) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var resolvedChunk = chunk;
  resolvedChunk._status = RESOLVED_MODULE;
  resolvedChunk._value = value;
  wakeChunk(listeners);
}

function initializeModelChunk(chunk) {
  var value = parseModel(chunk._response, chunk._value);
  var initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}

function initializeModuleChunk(chunk) {
  var value = requireModule(chunk._value);
  var initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
} // Report that any missing chunks in the model is now going to throw this
// error upon read. Also notify any pending promises.


function reportGlobalError(response, error) {
  response._chunks.forEach(function (chunk) {
    // If this chunk was already resolved or errored, it won't
    // trigger an error but if it wasn't then we need to
    // because we won't be getting any new data to resolve it.
    triggerErrorOnChunk(chunk, error);
  });
}

function createElement(type, key, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: null,
    props: props,
    // Record the component responsible for creating this element.
    _owner: null
  };

  {
    // We don't really need to add any of these but keeping them for good measure.
    // Unfortunately, _store is enumerable in jest matchers so for equality to
    // work, I need to keep it or make _store non-enumerable in the other file.
    element._store = {};
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: true // This element has already been validated on the server.

    });
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: null
    });
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: null
    });
  }

  return element;
}

function createLazyChunkWrapper(chunk) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: chunk,
    _init: readChunk
  };
  return lazyType;
}

function getChunk(response, id) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunk = createPendingChunk(response);
    chunks.set(id, chunk);
  }

  return chunk;
}

function parseModelString(response, parentObject, value) {
  switch (value[0]) {
    case '$':
      {
        if (value === '$') {
          return REACT_ELEMENT_TYPE;
        } else if (value[1] === '$' || value[1] === '@') {
          // This was an escaped string value.
          return value.substring(1);
        } else {
          var id = parseInt(value.substring(1), 16);
          var chunk = getChunk(response, id);
          return readChunk(chunk);
        }
      }

    case '@':
      {
        var _id = parseInt(value.substring(1), 16);

        var _chunk = getChunk(response, _id); // We create a React.lazy wrapper around any lazy values.
        // When passed into React, we'll know how to suspend on this.


        return createLazyChunkWrapper(_chunk);
      }
  }

  return value;
}
function parseModelTuple(response, value) {
  var tuple = value;

  if (tuple[0] === REACT_ELEMENT_TYPE) {
    // TODO: Consider having React just directly accept these arrays as elements.
    // Or even change the ReactElement type to be an array.
    return createElement(tuple[1], tuple[2], tuple[3]);
  }

  return value;
}
function createResponse(bundlerConfig) {
  var chunks = new Map();
  var response = {
    _bundlerConfig: bundlerConfig,
    _chunks: chunks,
    readRoot: readRoot
  };
  return response;
}
function resolveModel(response, id, model) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunks.set(id, createResolvedModelChunk(response, model));
  } else {
    resolveModelChunk(chunk, model);
  }
}
function resolveProvider(response, id, contextName) {
  var chunks = response._chunks;
  chunks.set(id, createInitializedChunk(response, getOrCreateServerContext(contextName).Provider));
}
function resolveModule(response, id, model) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);
  var moduleMetaData = parseModel(response, model);
  var moduleReference = resolveModuleReference(response._bundlerConfig, moduleMetaData); // TODO: Add an option to encode modules that are lazy loaded.
  // For now we preload all modules as early as possible since it's likely
  // that we'll need them.

  preloadModule(moduleReference);

  if (!chunk) {
    chunks.set(id, createResolvedModuleChunk(response, moduleReference));
  } else {
    resolveModuleChunk(chunk, moduleReference);
  }
}
function resolveSymbol(response, id, name) {
  var chunks = response._chunks; // We assume that we'll always emit the symbol before anything references it
  // to save a few bytes.

  chunks.set(id, createInitializedChunk(response, Symbol.for(name)));
}
function resolveError(response, id, message, stack) {
  // eslint-disable-next-line react-internal/prod-error-codes
  var error = new Error(message);
  error.stack = stack;
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunks.set(id, createErrorChunk(response, error));
  } else {
    triggerErrorOnChunk(chunk, error);
  }
}
function close(response) {
  // In case there are any remaining unresolved chunks, they won't
  // be resolved now. So we need to issue an error to those.
  // Ideally we should be able to early bail out if we kept a
  // ref count of pending chunks.
  reportGlobalError(response, new Error('Connection closed.'));
}

function processFullRow(response, row) {
  if (row === '') {
    return;
  }

  var tag = row[0]; // When tags that are not text are added, check them here before
  // parsing the row as text.
  // switch (tag) {
  // }

  var colon = row.indexOf(':', 1);
  var id = parseInt(row.substring(1, colon), 16);
  var text = row.substring(colon + 1);

  switch (tag) {
    case 'J':
      {
        resolveModel(response, id, text);
        return;
      }

    case 'M':
      {
        resolveModule(response, id, text);
        return;
      }

    case 'P':
      {
        resolveProvider(response, id, text);
        return;
      }

    case 'S':
      {
        resolveSymbol(response, id, JSON.parse(text));
        return;
      }

    case 'E':
      {
        var errorInfo = JSON.parse(text);
        resolveError(response, id, errorInfo.message, errorInfo.stack);
        return;
      }

    default:
      {
        throw new Error("Error parsing the data. It's probably an error code or network corruption.");
      }
  }
}

function processStringChunk(response, chunk, offset) {
  var linebreak = chunk.indexOf('\n', offset);

  while (linebreak > -1) {
    var fullrow = response._partialRow + chunk.substring(offset, linebreak);
    processFullRow(response, fullrow);
    response._partialRow = '';
    offset = linebreak + 1;
    linebreak = chunk.indexOf('\n', offset);
  }

  response._partialRow += chunk.substring(offset);
}
function processBinaryChunk(response, chunk) {

  var stringDecoder = response._stringDecoder;
  var linebreak = chunk.indexOf(10); // newline

  while (linebreak > -1) {
    var fullrow = response._partialRow + readFinalStringChunk(stringDecoder, chunk.subarray(0, linebreak));
    processFullRow(response, fullrow);
    response._partialRow = '';
    chunk = chunk.subarray(linebreak + 1);
    linebreak = chunk.indexOf(10); // newline
  }

  response._partialRow += readPartialStringChunk(stringDecoder, chunk);
}

function createFromJSONCallback(response) {
  return function (key, value) {
    if (typeof value === 'string') {
      // We can't use .bind here because we need the "this" value.
      return parseModelString(response, this, value);
    }

    if (typeof value === 'object' && value !== null) {
      return parseModelTuple(response, value);
    }

    return value;
  };
}

function createResponse$1(bundlerConfig) {
  // NOTE: CHECK THE COMPILER OUTPUT EACH TIME YOU CHANGE THIS.
  // It should be inlined to one object literal but minor changes can break it.
  var stringDecoder =  createStringDecoder() ;
  var response = createResponse(bundlerConfig);
  response._partialRow = '';

  {
    response._stringDecoder = stringDecoder;
  } // Don't inline this call because it causes closure to outline the call above.


  response._fromJSON = createFromJSONCallback(response);
  return response;
}

function startReadingFromStream(response, stream) {
  var reader = stream.getReader();

  function progress(_ref) {
    var done = _ref.done,
        value = _ref.value;

    if (done) {
      close(response);
      return;
    }

    var buffer = value;
    processBinaryChunk(response, buffer);
    return reader.read().then(progress, error);
  }

  function error(e) {
    reportGlobalError(response, e);
  }

  reader.read().then(progress, error);
}

function createFromReadableStream(stream, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  startReadingFromStream(response, stream);
  return response;
}

function createFromFetch(promiseForResponse, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  promiseForResponse.then(function (r) {
    startReadingFromStream(response, r.body);
  }, function (e) {
    reportGlobalError(response, e);
  });
  return response;
}

function createFromXHR(request, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  var processedLength = 0;

  function progress(e) {
    var chunk = request.responseText;
    processStringChunk(response, chunk, processedLength);
    processedLength = chunk.length;
  }

  function load(e) {
    progress();
    close(response);
  }

  function error(e) {
    reportGlobalError(response, new TypeError('Network error'));
  }

  request.addEventListener('progress', progress);
  request.addEventListener('load', load);
  request.addEventListener('error', error);
  request.addEventListener('abort', error);
  request.addEventListener('timeout', error);
  return response;
}

exports.createFromFetch = createFromFetch;
exports.createFromReadableStream = createFromReadableStream;
exports.createFromXHR = createFromXHR;
  })();
}


/***/ }),

/***/ "./node_modules/react-server-dom-webpack/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-server-dom-webpack/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-server-dom-webpack.development.js */ "./node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.development.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_PORTAL_TYPE = Symbol.for('react.portal');
var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
var REACT_MEMO_TYPE = Symbol.for('react.memo');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      printWarning('error', format, args);
    }
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    } // eslint-disable-next-line react-internal/safe-string-coercion


    var argsWithFormat = args.map(function (item) {
      return String(item);
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// -----------------------------------------------------------------------------

var enableScopeAPI = false; // Experimental Create Event Handle API.
var enableCacheElement = false;
var enableTransitionTracing = false; // No known bugs, but needs performance testing

var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
// stuff. Intended to enable React core members to more easily debug scheduling
// issues in DEV builds.

var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

var REACT_MODULE_REFERENCE;

{
  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
}

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var displayName = outerType.displayName;

  if (displayName) {
    return displayName;
  }

  var functionName = innerType.displayName || innerType.name || '';
  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
} // Keep in sync with react-reconciler/getComponentNameFromFiber


function getContextName(type) {
  return type.displayName || 'Context';
} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


function getComponentNameFromType(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';

  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        var outerName = type.displayName || null;

        if (outerName !== null) {
          return outerName;
        }

        return getComponentNameFromType(type.type) || 'Memo';

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentNameFromType(init(payload));
          } catch (x) {
            return null;
          }
        }

      // eslint-disable-next-line no-fallthrough
    }
  }

  return null;
}

var assign = Object.assign;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: assign({}, props, {
          value: prevLog
        }),
        info: assign({}, props, {
          value: prevInfo
        }),
        warn: assign({}, props, {
          value: prevWarn
        }),
        error: assign({}, props, {
          value: prevError
        }),
        group: assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if ( !fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                // but we have a user-provided "displayName"
                // splice it in to make the stack more readable.


                if (fn.displayName && _frame.includes('<anonymous>')) {
                  _frame = _frame.replace('<anonymous>', fn.displayName);
                }

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            // eslint-disable-next-line react-internal/prod-error-codes
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

function isArray(a) {
  return isArrayImpl(a);
}

/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */
// $FlowFixMe only called in DEV, so void return is not possible.
function typeName(value) {
  {
    // toStringTag is needed for namespaced types like Temporal.Instant
    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
    return type;
  }
} // $FlowFixMe only called in DEV, so void return is not possible.


function willCoercionThrow(value) {
  {
    try {
      testStringCoercion(value);
      return false;
    } catch (e) {
      return true;
    }
  }
}

function testStringCoercion(value) {
  // If you ended up here by following an exception call stack, here's what's
  // happened: you supplied an object or symbol value to React (as a prop, key,
  // DOM attribute, CSS property, string ref, etc.) and when React tried to
  // coerce it to a string using `'' + value`, an exception was thrown.
  //
  // The most common types that will cause this exception are `Symbol` instances
  // and Temporal objects like `Temporal.Instant`. But any object that has a
  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
  // exception. (Library authors do this to prevent users from using built-in
  // numeric operators like `+` or comparison operators like `>=` because custom
  // methods are needed to perform accurate arithmetic or comparison.)
  //
  // To fix the problem, coerce this object or symbol value to a string before
  // passing it to React. The most reliable way is usually `String(value)`.
  //
  // To find which value is throwing, check the browser or debugger console.
  // Before this exception was thrown, there should be `console.error` output
  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
  // problem and how that type was used: key, atrribute, input value prop, etc.
  // In most cases, this console output also shows the component and its
  // ancestor components where the exception happened.
  //
  // eslint-disable-next-line react-internal/safe-string-coercion
  return '' + value;
}
function checkKeyStringCoercion(value) {
  {
    if (willCoercionThrow(value)) {
      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      {
        checkKeyStringCoercion(maybeKey);
      }

      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */


function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentNameFromType(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentNameFromType(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

var didWarnAboutKeySpread = {};
function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    {
      if (hasOwnProperty.call(props, 'key')) {
        var componentName = getComponentNameFromType(type);
        var keys = Object.keys(props).filter(function (k) {
          return k !== 'key';
        });
        var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';

        if (!didWarnAboutKeySpread[componentName + beforeExample]) {
          var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';

          error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);

          didWarnAboutKeySpread[componentName + beforeExample] = true;
        }
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.development.js */ "./node_modules/react/cjs/react-jsx-runtime.development.js");
}


/***/ }),

/***/ "./src/assets/images/ALG-Patterns.png":
/*!********************************************!*\
  !*** ./src/assets/images/ALG-Patterns.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/ALG-Patterns-66a944e460a16d1a8e522183efd76883.png");

/***/ }),

/***/ "./src/assets/images/alg-2023.png":
/*!****************************************!*\
  !*** ./src/assets/images/alg-2023.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/alg-2023-b48ea107814dd904c00d084e72dff7d3.png");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, setPrototypeOf(t, o);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/create-content-digest.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/create-content-digest.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentDigest: () => (/* binding */ createContentDigest)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var node_object_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-object-hash */ "./node_modules/node-object-hash/dist/hasher.js");


const hasher = node_object_hash__WEBPACK_IMPORTED_MODULE_1__({
  coerce: false,
  alg: `md5`,
  enc: `hex`,
  sort: {
    map: true,
    object: true,
    array: false,
    set: false
  }
});
const hashPrimitive = input => crypto__WEBPACK_IMPORTED_MODULE_0__.createHash(`md5`).update(input).digest(`hex`);

/**
 * Hashes an input using md5 hash of hexadecimal digest.
 *
 * @param input The input to encrypt
 * @return The content digest
 */

const createContentDigest = input => {
  if (typeof input === `object` && !Buffer.isBuffer(input)) {
    return hasher.hash(input);
  }
  return hashPrimitive(input);
};

/***/ }),

/***/ "./node_modules/gatsby-link/dist/index.modern.mjs":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-link/dist/index.modern.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ E),
/* harmony export */   navigate: () => (/* binding */ g),
/* harmony export */   parsePath: () => (/* binding */ a),
/* harmony export */   withAssetPrefix: () => (/* binding */ v),
/* harmony export */   withPrefix: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-page-utils/apply-trailing-slash-option */ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js");
"use client"
;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=> true? true?"":0:0,h=()=> true? true?"":0:0;function f(t,e=p()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:h())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const u=t=>null==t?void 0:t.startsWith("/"),_=()=> true?"always":0;function d(t,e){const{pathname:n,search:r,hash:o}=a(t);return`${(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__.applyTrailingSlashOption)(n,e)}${r}${o}`}const m=(t,e)=>"number"==typeof t?t:l(t)?u(t)?function(t){const e=f(t),n=_();return"always"===n||"never"===n?d(e,n):e}(t):function(t,e){if(u(t))return t;const r=_(),o=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.resolve)(t,e);return"always"===r||"never"===r?d(o,r):o}(t,e):t,y=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];function v(t){return f(t,h())}const b={activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3__.string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_3__.object,partiallyActive:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool};function w(t){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,({location:n})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(P,i({},t,{_location:n})))}class P extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(m(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver(n=>{n.forEach(n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)})});return n.observe(t),{instance:n,el:t}})(t,t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()}))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,y); false||l(n)||console.warn(`External link ${n} was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links`);const _=m(n,f.pathname);return l(_)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Link,i({to:_,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(_);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(_)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(_,{state:p,replace:e})}return!0}},u)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",i({href:_},u))}}P.propTypes=i({},b,{onClick:prop_types__WEBPACK_IMPORTED_MODULE_3__.func,to:prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,replace:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3__.object});const E=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((t,n)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,i({innerRef:n},t))),g=(t,e)=>{window.___navigate(m(t,window.location.pathname),e)};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ "./node_modules/react-icons/hi/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/react-icons/hi/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HiAcademicCap: () => (/* binding */ HiAcademicCap),
/* harmony export */   HiAdjustments: () => (/* binding */ HiAdjustments),
/* harmony export */   HiAnnotation: () => (/* binding */ HiAnnotation),
/* harmony export */   HiArchive: () => (/* binding */ HiArchive),
/* harmony export */   HiArrowCircleDown: () => (/* binding */ HiArrowCircleDown),
/* harmony export */   HiArrowCircleLeft: () => (/* binding */ HiArrowCircleLeft),
/* harmony export */   HiArrowCircleRight: () => (/* binding */ HiArrowCircleRight),
/* harmony export */   HiArrowCircleUp: () => (/* binding */ HiArrowCircleUp),
/* harmony export */   HiArrowDown: () => (/* binding */ HiArrowDown),
/* harmony export */   HiArrowLeft: () => (/* binding */ HiArrowLeft),
/* harmony export */   HiArrowNarrowDown: () => (/* binding */ HiArrowNarrowDown),
/* harmony export */   HiArrowNarrowLeft: () => (/* binding */ HiArrowNarrowLeft),
/* harmony export */   HiArrowNarrowRight: () => (/* binding */ HiArrowNarrowRight),
/* harmony export */   HiArrowNarrowUp: () => (/* binding */ HiArrowNarrowUp),
/* harmony export */   HiArrowRight: () => (/* binding */ HiArrowRight),
/* harmony export */   HiArrowSmDown: () => (/* binding */ HiArrowSmDown),
/* harmony export */   HiArrowSmLeft: () => (/* binding */ HiArrowSmLeft),
/* harmony export */   HiArrowSmRight: () => (/* binding */ HiArrowSmRight),
/* harmony export */   HiArrowSmUp: () => (/* binding */ HiArrowSmUp),
/* harmony export */   HiArrowUp: () => (/* binding */ HiArrowUp),
/* harmony export */   HiArrowsExpand: () => (/* binding */ HiArrowsExpand),
/* harmony export */   HiAtSymbol: () => (/* binding */ HiAtSymbol),
/* harmony export */   HiBackspace: () => (/* binding */ HiBackspace),
/* harmony export */   HiBadgeCheck: () => (/* binding */ HiBadgeCheck),
/* harmony export */   HiBan: () => (/* binding */ HiBan),
/* harmony export */   HiBeaker: () => (/* binding */ HiBeaker),
/* harmony export */   HiBell: () => (/* binding */ HiBell),
/* harmony export */   HiBookOpen: () => (/* binding */ HiBookOpen),
/* harmony export */   HiBookmark: () => (/* binding */ HiBookmark),
/* harmony export */   HiBookmarkAlt: () => (/* binding */ HiBookmarkAlt),
/* harmony export */   HiBriefcase: () => (/* binding */ HiBriefcase),
/* harmony export */   HiCake: () => (/* binding */ HiCake),
/* harmony export */   HiCalculator: () => (/* binding */ HiCalculator),
/* harmony export */   HiCalendar: () => (/* binding */ HiCalendar),
/* harmony export */   HiCamera: () => (/* binding */ HiCamera),
/* harmony export */   HiCash: () => (/* binding */ HiCash),
/* harmony export */   HiChartBar: () => (/* binding */ HiChartBar),
/* harmony export */   HiChartPie: () => (/* binding */ HiChartPie),
/* harmony export */   HiChartSquareBar: () => (/* binding */ HiChartSquareBar),
/* harmony export */   HiChat: () => (/* binding */ HiChat),
/* harmony export */   HiChatAlt: () => (/* binding */ HiChatAlt),
/* harmony export */   HiChatAlt2: () => (/* binding */ HiChatAlt2),
/* harmony export */   HiCheck: () => (/* binding */ HiCheck),
/* harmony export */   HiCheckCircle: () => (/* binding */ HiCheckCircle),
/* harmony export */   HiChevronDoubleDown: () => (/* binding */ HiChevronDoubleDown),
/* harmony export */   HiChevronDoubleLeft: () => (/* binding */ HiChevronDoubleLeft),
/* harmony export */   HiChevronDoubleRight: () => (/* binding */ HiChevronDoubleRight),
/* harmony export */   HiChevronDoubleUp: () => (/* binding */ HiChevronDoubleUp),
/* harmony export */   HiChevronDown: () => (/* binding */ HiChevronDown),
/* harmony export */   HiChevronLeft: () => (/* binding */ HiChevronLeft),
/* harmony export */   HiChevronRight: () => (/* binding */ HiChevronRight),
/* harmony export */   HiChevronUp: () => (/* binding */ HiChevronUp),
/* harmony export */   HiChip: () => (/* binding */ HiChip),
/* harmony export */   HiClipboard: () => (/* binding */ HiClipboard),
/* harmony export */   HiClipboardCheck: () => (/* binding */ HiClipboardCheck),
/* harmony export */   HiClipboardCopy: () => (/* binding */ HiClipboardCopy),
/* harmony export */   HiClipboardList: () => (/* binding */ HiClipboardList),
/* harmony export */   HiClock: () => (/* binding */ HiClock),
/* harmony export */   HiCloud: () => (/* binding */ HiCloud),
/* harmony export */   HiCloudDownload: () => (/* binding */ HiCloudDownload),
/* harmony export */   HiCloudUpload: () => (/* binding */ HiCloudUpload),
/* harmony export */   HiCode: () => (/* binding */ HiCode),
/* harmony export */   HiCog: () => (/* binding */ HiCog),
/* harmony export */   HiCollection: () => (/* binding */ HiCollection),
/* harmony export */   HiColorSwatch: () => (/* binding */ HiColorSwatch),
/* harmony export */   HiCreditCard: () => (/* binding */ HiCreditCard),
/* harmony export */   HiCube: () => (/* binding */ HiCube),
/* harmony export */   HiCubeTransparent: () => (/* binding */ HiCubeTransparent),
/* harmony export */   HiCurrencyBangladeshi: () => (/* binding */ HiCurrencyBangladeshi),
/* harmony export */   HiCurrencyDollar: () => (/* binding */ HiCurrencyDollar),
/* harmony export */   HiCurrencyEuro: () => (/* binding */ HiCurrencyEuro),
/* harmony export */   HiCurrencyPound: () => (/* binding */ HiCurrencyPound),
/* harmony export */   HiCurrencyRupee: () => (/* binding */ HiCurrencyRupee),
/* harmony export */   HiCurrencyYen: () => (/* binding */ HiCurrencyYen),
/* harmony export */   HiCursorClick: () => (/* binding */ HiCursorClick),
/* harmony export */   HiDatabase: () => (/* binding */ HiDatabase),
/* harmony export */   HiDesktopComputer: () => (/* binding */ HiDesktopComputer),
/* harmony export */   HiDeviceMobile: () => (/* binding */ HiDeviceMobile),
/* harmony export */   HiDeviceTablet: () => (/* binding */ HiDeviceTablet),
/* harmony export */   HiDocument: () => (/* binding */ HiDocument),
/* harmony export */   HiDocumentAdd: () => (/* binding */ HiDocumentAdd),
/* harmony export */   HiDocumentDownload: () => (/* binding */ HiDocumentDownload),
/* harmony export */   HiDocumentDuplicate: () => (/* binding */ HiDocumentDuplicate),
/* harmony export */   HiDocumentRemove: () => (/* binding */ HiDocumentRemove),
/* harmony export */   HiDocumentReport: () => (/* binding */ HiDocumentReport),
/* harmony export */   HiDocumentSearch: () => (/* binding */ HiDocumentSearch),
/* harmony export */   HiDocumentText: () => (/* binding */ HiDocumentText),
/* harmony export */   HiDotsCircleHorizontal: () => (/* binding */ HiDotsCircleHorizontal),
/* harmony export */   HiDotsHorizontal: () => (/* binding */ HiDotsHorizontal),
/* harmony export */   HiDotsVertical: () => (/* binding */ HiDotsVertical),
/* harmony export */   HiDownload: () => (/* binding */ HiDownload),
/* harmony export */   HiDuplicate: () => (/* binding */ HiDuplicate),
/* harmony export */   HiEmojiHappy: () => (/* binding */ HiEmojiHappy),
/* harmony export */   HiEmojiSad: () => (/* binding */ HiEmojiSad),
/* harmony export */   HiExclamation: () => (/* binding */ HiExclamation),
/* harmony export */   HiExclamationCircle: () => (/* binding */ HiExclamationCircle),
/* harmony export */   HiExternalLink: () => (/* binding */ HiExternalLink),
/* harmony export */   HiEye: () => (/* binding */ HiEye),
/* harmony export */   HiEyeOff: () => (/* binding */ HiEyeOff),
/* harmony export */   HiFastForward: () => (/* binding */ HiFastForward),
/* harmony export */   HiFilm: () => (/* binding */ HiFilm),
/* harmony export */   HiFilter: () => (/* binding */ HiFilter),
/* harmony export */   HiFingerPrint: () => (/* binding */ HiFingerPrint),
/* harmony export */   HiFire: () => (/* binding */ HiFire),
/* harmony export */   HiFlag: () => (/* binding */ HiFlag),
/* harmony export */   HiFolder: () => (/* binding */ HiFolder),
/* harmony export */   HiFolderAdd: () => (/* binding */ HiFolderAdd),
/* harmony export */   HiFolderDownload: () => (/* binding */ HiFolderDownload),
/* harmony export */   HiFolderOpen: () => (/* binding */ HiFolderOpen),
/* harmony export */   HiFolderRemove: () => (/* binding */ HiFolderRemove),
/* harmony export */   HiGift: () => (/* binding */ HiGift),
/* harmony export */   HiGlobe: () => (/* binding */ HiGlobe),
/* harmony export */   HiGlobeAlt: () => (/* binding */ HiGlobeAlt),
/* harmony export */   HiHand: () => (/* binding */ HiHand),
/* harmony export */   HiHashtag: () => (/* binding */ HiHashtag),
/* harmony export */   HiHeart: () => (/* binding */ HiHeart),
/* harmony export */   HiHome: () => (/* binding */ HiHome),
/* harmony export */   HiIdentification: () => (/* binding */ HiIdentification),
/* harmony export */   HiInbox: () => (/* binding */ HiInbox),
/* harmony export */   HiInboxIn: () => (/* binding */ HiInboxIn),
/* harmony export */   HiInformationCircle: () => (/* binding */ HiInformationCircle),
/* harmony export */   HiKey: () => (/* binding */ HiKey),
/* harmony export */   HiLibrary: () => (/* binding */ HiLibrary),
/* harmony export */   HiLightBulb: () => (/* binding */ HiLightBulb),
/* harmony export */   HiLightningBolt: () => (/* binding */ HiLightningBolt),
/* harmony export */   HiLink: () => (/* binding */ HiLink),
/* harmony export */   HiLocationMarker: () => (/* binding */ HiLocationMarker),
/* harmony export */   HiLockClosed: () => (/* binding */ HiLockClosed),
/* harmony export */   HiLockOpen: () => (/* binding */ HiLockOpen),
/* harmony export */   HiLogin: () => (/* binding */ HiLogin),
/* harmony export */   HiLogout: () => (/* binding */ HiLogout),
/* harmony export */   HiMail: () => (/* binding */ HiMail),
/* harmony export */   HiMailOpen: () => (/* binding */ HiMailOpen),
/* harmony export */   HiMap: () => (/* binding */ HiMap),
/* harmony export */   HiMenu: () => (/* binding */ HiMenu),
/* harmony export */   HiMenuAlt1: () => (/* binding */ HiMenuAlt1),
/* harmony export */   HiMenuAlt2: () => (/* binding */ HiMenuAlt2),
/* harmony export */   HiMenuAlt3: () => (/* binding */ HiMenuAlt3),
/* harmony export */   HiMenuAlt4: () => (/* binding */ HiMenuAlt4),
/* harmony export */   HiMicrophone: () => (/* binding */ HiMicrophone),
/* harmony export */   HiMinus: () => (/* binding */ HiMinus),
/* harmony export */   HiMinusCircle: () => (/* binding */ HiMinusCircle),
/* harmony export */   HiMinusSm: () => (/* binding */ HiMinusSm),
/* harmony export */   HiMoon: () => (/* binding */ HiMoon),
/* harmony export */   HiMusicNote: () => (/* binding */ HiMusicNote),
/* harmony export */   HiNewspaper: () => (/* binding */ HiNewspaper),
/* harmony export */   HiOfficeBuilding: () => (/* binding */ HiOfficeBuilding),
/* harmony export */   HiOutlineAcademicCap: () => (/* binding */ HiOutlineAcademicCap),
/* harmony export */   HiOutlineAdjustments: () => (/* binding */ HiOutlineAdjustments),
/* harmony export */   HiOutlineAnnotation: () => (/* binding */ HiOutlineAnnotation),
/* harmony export */   HiOutlineArchive: () => (/* binding */ HiOutlineArchive),
/* harmony export */   HiOutlineArrowCircleDown: () => (/* binding */ HiOutlineArrowCircleDown),
/* harmony export */   HiOutlineArrowCircleLeft: () => (/* binding */ HiOutlineArrowCircleLeft),
/* harmony export */   HiOutlineArrowCircleRight: () => (/* binding */ HiOutlineArrowCircleRight),
/* harmony export */   HiOutlineArrowCircleUp: () => (/* binding */ HiOutlineArrowCircleUp),
/* harmony export */   HiOutlineArrowDown: () => (/* binding */ HiOutlineArrowDown),
/* harmony export */   HiOutlineArrowLeft: () => (/* binding */ HiOutlineArrowLeft),
/* harmony export */   HiOutlineArrowNarrowDown: () => (/* binding */ HiOutlineArrowNarrowDown),
/* harmony export */   HiOutlineArrowNarrowLeft: () => (/* binding */ HiOutlineArrowNarrowLeft),
/* harmony export */   HiOutlineArrowNarrowRight: () => (/* binding */ HiOutlineArrowNarrowRight),
/* harmony export */   HiOutlineArrowNarrowUp: () => (/* binding */ HiOutlineArrowNarrowUp),
/* harmony export */   HiOutlineArrowRight: () => (/* binding */ HiOutlineArrowRight),
/* harmony export */   HiOutlineArrowSmDown: () => (/* binding */ HiOutlineArrowSmDown),
/* harmony export */   HiOutlineArrowSmLeft: () => (/* binding */ HiOutlineArrowSmLeft),
/* harmony export */   HiOutlineArrowSmRight: () => (/* binding */ HiOutlineArrowSmRight),
/* harmony export */   HiOutlineArrowSmUp: () => (/* binding */ HiOutlineArrowSmUp),
/* harmony export */   HiOutlineArrowUp: () => (/* binding */ HiOutlineArrowUp),
/* harmony export */   HiOutlineArrowsExpand: () => (/* binding */ HiOutlineArrowsExpand),
/* harmony export */   HiOutlineAtSymbol: () => (/* binding */ HiOutlineAtSymbol),
/* harmony export */   HiOutlineBackspace: () => (/* binding */ HiOutlineBackspace),
/* harmony export */   HiOutlineBadgeCheck: () => (/* binding */ HiOutlineBadgeCheck),
/* harmony export */   HiOutlineBan: () => (/* binding */ HiOutlineBan),
/* harmony export */   HiOutlineBeaker: () => (/* binding */ HiOutlineBeaker),
/* harmony export */   HiOutlineBell: () => (/* binding */ HiOutlineBell),
/* harmony export */   HiOutlineBookOpen: () => (/* binding */ HiOutlineBookOpen),
/* harmony export */   HiOutlineBookmark: () => (/* binding */ HiOutlineBookmark),
/* harmony export */   HiOutlineBookmarkAlt: () => (/* binding */ HiOutlineBookmarkAlt),
/* harmony export */   HiOutlineBriefcase: () => (/* binding */ HiOutlineBriefcase),
/* harmony export */   HiOutlineCake: () => (/* binding */ HiOutlineCake),
/* harmony export */   HiOutlineCalculator: () => (/* binding */ HiOutlineCalculator),
/* harmony export */   HiOutlineCalendar: () => (/* binding */ HiOutlineCalendar),
/* harmony export */   HiOutlineCamera: () => (/* binding */ HiOutlineCamera),
/* harmony export */   HiOutlineCash: () => (/* binding */ HiOutlineCash),
/* harmony export */   HiOutlineChartBar: () => (/* binding */ HiOutlineChartBar),
/* harmony export */   HiOutlineChartPie: () => (/* binding */ HiOutlineChartPie),
/* harmony export */   HiOutlineChartSquareBar: () => (/* binding */ HiOutlineChartSquareBar),
/* harmony export */   HiOutlineChat: () => (/* binding */ HiOutlineChat),
/* harmony export */   HiOutlineChatAlt: () => (/* binding */ HiOutlineChatAlt),
/* harmony export */   HiOutlineChatAlt2: () => (/* binding */ HiOutlineChatAlt2),
/* harmony export */   HiOutlineCheck: () => (/* binding */ HiOutlineCheck),
/* harmony export */   HiOutlineCheckCircle: () => (/* binding */ HiOutlineCheckCircle),
/* harmony export */   HiOutlineChevronDoubleDown: () => (/* binding */ HiOutlineChevronDoubleDown),
/* harmony export */   HiOutlineChevronDoubleLeft: () => (/* binding */ HiOutlineChevronDoubleLeft),
/* harmony export */   HiOutlineChevronDoubleRight: () => (/* binding */ HiOutlineChevronDoubleRight),
/* harmony export */   HiOutlineChevronDoubleUp: () => (/* binding */ HiOutlineChevronDoubleUp),
/* harmony export */   HiOutlineChevronDown: () => (/* binding */ HiOutlineChevronDown),
/* harmony export */   HiOutlineChevronLeft: () => (/* binding */ HiOutlineChevronLeft),
/* harmony export */   HiOutlineChevronRight: () => (/* binding */ HiOutlineChevronRight),
/* harmony export */   HiOutlineChevronUp: () => (/* binding */ HiOutlineChevronUp),
/* harmony export */   HiOutlineChip: () => (/* binding */ HiOutlineChip),
/* harmony export */   HiOutlineClipboard: () => (/* binding */ HiOutlineClipboard),
/* harmony export */   HiOutlineClipboardCheck: () => (/* binding */ HiOutlineClipboardCheck),
/* harmony export */   HiOutlineClipboardCopy: () => (/* binding */ HiOutlineClipboardCopy),
/* harmony export */   HiOutlineClipboardList: () => (/* binding */ HiOutlineClipboardList),
/* harmony export */   HiOutlineClock: () => (/* binding */ HiOutlineClock),
/* harmony export */   HiOutlineCloud: () => (/* binding */ HiOutlineCloud),
/* harmony export */   HiOutlineCloudDownload: () => (/* binding */ HiOutlineCloudDownload),
/* harmony export */   HiOutlineCloudUpload: () => (/* binding */ HiOutlineCloudUpload),
/* harmony export */   HiOutlineCode: () => (/* binding */ HiOutlineCode),
/* harmony export */   HiOutlineCog: () => (/* binding */ HiOutlineCog),
/* harmony export */   HiOutlineCollection: () => (/* binding */ HiOutlineCollection),
/* harmony export */   HiOutlineColorSwatch: () => (/* binding */ HiOutlineColorSwatch),
/* harmony export */   HiOutlineCreditCard: () => (/* binding */ HiOutlineCreditCard),
/* harmony export */   HiOutlineCube: () => (/* binding */ HiOutlineCube),
/* harmony export */   HiOutlineCubeTransparent: () => (/* binding */ HiOutlineCubeTransparent),
/* harmony export */   HiOutlineCurrencyBangladeshi: () => (/* binding */ HiOutlineCurrencyBangladeshi),
/* harmony export */   HiOutlineCurrencyDollar: () => (/* binding */ HiOutlineCurrencyDollar),
/* harmony export */   HiOutlineCurrencyEuro: () => (/* binding */ HiOutlineCurrencyEuro),
/* harmony export */   HiOutlineCurrencyPound: () => (/* binding */ HiOutlineCurrencyPound),
/* harmony export */   HiOutlineCurrencyRupee: () => (/* binding */ HiOutlineCurrencyRupee),
/* harmony export */   HiOutlineCurrencyYen: () => (/* binding */ HiOutlineCurrencyYen),
/* harmony export */   HiOutlineCursorClick: () => (/* binding */ HiOutlineCursorClick),
/* harmony export */   HiOutlineDatabase: () => (/* binding */ HiOutlineDatabase),
/* harmony export */   HiOutlineDesktopComputer: () => (/* binding */ HiOutlineDesktopComputer),
/* harmony export */   HiOutlineDeviceMobile: () => (/* binding */ HiOutlineDeviceMobile),
/* harmony export */   HiOutlineDeviceTablet: () => (/* binding */ HiOutlineDeviceTablet),
/* harmony export */   HiOutlineDocument: () => (/* binding */ HiOutlineDocument),
/* harmony export */   HiOutlineDocumentAdd: () => (/* binding */ HiOutlineDocumentAdd),
/* harmony export */   HiOutlineDocumentDownload: () => (/* binding */ HiOutlineDocumentDownload),
/* harmony export */   HiOutlineDocumentDuplicate: () => (/* binding */ HiOutlineDocumentDuplicate),
/* harmony export */   HiOutlineDocumentRemove: () => (/* binding */ HiOutlineDocumentRemove),
/* harmony export */   HiOutlineDocumentReport: () => (/* binding */ HiOutlineDocumentReport),
/* harmony export */   HiOutlineDocumentSearch: () => (/* binding */ HiOutlineDocumentSearch),
/* harmony export */   HiOutlineDocumentText: () => (/* binding */ HiOutlineDocumentText),
/* harmony export */   HiOutlineDotsCircleHorizontal: () => (/* binding */ HiOutlineDotsCircleHorizontal),
/* harmony export */   HiOutlineDotsHorizontal: () => (/* binding */ HiOutlineDotsHorizontal),
/* harmony export */   HiOutlineDotsVertical: () => (/* binding */ HiOutlineDotsVertical),
/* harmony export */   HiOutlineDownload: () => (/* binding */ HiOutlineDownload),
/* harmony export */   HiOutlineDuplicate: () => (/* binding */ HiOutlineDuplicate),
/* harmony export */   HiOutlineEmojiHappy: () => (/* binding */ HiOutlineEmojiHappy),
/* harmony export */   HiOutlineEmojiSad: () => (/* binding */ HiOutlineEmojiSad),
/* harmony export */   HiOutlineExclamation: () => (/* binding */ HiOutlineExclamation),
/* harmony export */   HiOutlineExclamationCircle: () => (/* binding */ HiOutlineExclamationCircle),
/* harmony export */   HiOutlineExternalLink: () => (/* binding */ HiOutlineExternalLink),
/* harmony export */   HiOutlineEye: () => (/* binding */ HiOutlineEye),
/* harmony export */   HiOutlineEyeOff: () => (/* binding */ HiOutlineEyeOff),
/* harmony export */   HiOutlineFastForward: () => (/* binding */ HiOutlineFastForward),
/* harmony export */   HiOutlineFilm: () => (/* binding */ HiOutlineFilm),
/* harmony export */   HiOutlineFilter: () => (/* binding */ HiOutlineFilter),
/* harmony export */   HiOutlineFingerPrint: () => (/* binding */ HiOutlineFingerPrint),
/* harmony export */   HiOutlineFire: () => (/* binding */ HiOutlineFire),
/* harmony export */   HiOutlineFlag: () => (/* binding */ HiOutlineFlag),
/* harmony export */   HiOutlineFolder: () => (/* binding */ HiOutlineFolder),
/* harmony export */   HiOutlineFolderAdd: () => (/* binding */ HiOutlineFolderAdd),
/* harmony export */   HiOutlineFolderDownload: () => (/* binding */ HiOutlineFolderDownload),
/* harmony export */   HiOutlineFolderOpen: () => (/* binding */ HiOutlineFolderOpen),
/* harmony export */   HiOutlineFolderRemove: () => (/* binding */ HiOutlineFolderRemove),
/* harmony export */   HiOutlineGift: () => (/* binding */ HiOutlineGift),
/* harmony export */   HiOutlineGlobe: () => (/* binding */ HiOutlineGlobe),
/* harmony export */   HiOutlineGlobeAlt: () => (/* binding */ HiOutlineGlobeAlt),
/* harmony export */   HiOutlineHand: () => (/* binding */ HiOutlineHand),
/* harmony export */   HiOutlineHashtag: () => (/* binding */ HiOutlineHashtag),
/* harmony export */   HiOutlineHeart: () => (/* binding */ HiOutlineHeart),
/* harmony export */   HiOutlineHome: () => (/* binding */ HiOutlineHome),
/* harmony export */   HiOutlineIdentification: () => (/* binding */ HiOutlineIdentification),
/* harmony export */   HiOutlineInbox: () => (/* binding */ HiOutlineInbox),
/* harmony export */   HiOutlineInboxIn: () => (/* binding */ HiOutlineInboxIn),
/* harmony export */   HiOutlineInformationCircle: () => (/* binding */ HiOutlineInformationCircle),
/* harmony export */   HiOutlineKey: () => (/* binding */ HiOutlineKey),
/* harmony export */   HiOutlineLibrary: () => (/* binding */ HiOutlineLibrary),
/* harmony export */   HiOutlineLightBulb: () => (/* binding */ HiOutlineLightBulb),
/* harmony export */   HiOutlineLightningBolt: () => (/* binding */ HiOutlineLightningBolt),
/* harmony export */   HiOutlineLink: () => (/* binding */ HiOutlineLink),
/* harmony export */   HiOutlineLocationMarker: () => (/* binding */ HiOutlineLocationMarker),
/* harmony export */   HiOutlineLockClosed: () => (/* binding */ HiOutlineLockClosed),
/* harmony export */   HiOutlineLockOpen: () => (/* binding */ HiOutlineLockOpen),
/* harmony export */   HiOutlineLogin: () => (/* binding */ HiOutlineLogin),
/* harmony export */   HiOutlineLogout: () => (/* binding */ HiOutlineLogout),
/* harmony export */   HiOutlineMail: () => (/* binding */ HiOutlineMail),
/* harmony export */   HiOutlineMailOpen: () => (/* binding */ HiOutlineMailOpen),
/* harmony export */   HiOutlineMap: () => (/* binding */ HiOutlineMap),
/* harmony export */   HiOutlineMenu: () => (/* binding */ HiOutlineMenu),
/* harmony export */   HiOutlineMenuAlt1: () => (/* binding */ HiOutlineMenuAlt1),
/* harmony export */   HiOutlineMenuAlt2: () => (/* binding */ HiOutlineMenuAlt2),
/* harmony export */   HiOutlineMenuAlt3: () => (/* binding */ HiOutlineMenuAlt3),
/* harmony export */   HiOutlineMenuAlt4: () => (/* binding */ HiOutlineMenuAlt4),
/* harmony export */   HiOutlineMicrophone: () => (/* binding */ HiOutlineMicrophone),
/* harmony export */   HiOutlineMinus: () => (/* binding */ HiOutlineMinus),
/* harmony export */   HiOutlineMinusCircle: () => (/* binding */ HiOutlineMinusCircle),
/* harmony export */   HiOutlineMinusSm: () => (/* binding */ HiOutlineMinusSm),
/* harmony export */   HiOutlineMoon: () => (/* binding */ HiOutlineMoon),
/* harmony export */   HiOutlineMusicNote: () => (/* binding */ HiOutlineMusicNote),
/* harmony export */   HiOutlineNewspaper: () => (/* binding */ HiOutlineNewspaper),
/* harmony export */   HiOutlineOfficeBuilding: () => (/* binding */ HiOutlineOfficeBuilding),
/* harmony export */   HiOutlinePaperAirplane: () => (/* binding */ HiOutlinePaperAirplane),
/* harmony export */   HiOutlinePaperClip: () => (/* binding */ HiOutlinePaperClip),
/* harmony export */   HiOutlinePause: () => (/* binding */ HiOutlinePause),
/* harmony export */   HiOutlinePencil: () => (/* binding */ HiOutlinePencil),
/* harmony export */   HiOutlinePencilAlt: () => (/* binding */ HiOutlinePencilAlt),
/* harmony export */   HiOutlinePhone: () => (/* binding */ HiOutlinePhone),
/* harmony export */   HiOutlinePhoneIncoming: () => (/* binding */ HiOutlinePhoneIncoming),
/* harmony export */   HiOutlinePhoneMissedCall: () => (/* binding */ HiOutlinePhoneMissedCall),
/* harmony export */   HiOutlinePhoneOutgoing: () => (/* binding */ HiOutlinePhoneOutgoing),
/* harmony export */   HiOutlinePhotograph: () => (/* binding */ HiOutlinePhotograph),
/* harmony export */   HiOutlinePlay: () => (/* binding */ HiOutlinePlay),
/* harmony export */   HiOutlinePlus: () => (/* binding */ HiOutlinePlus),
/* harmony export */   HiOutlinePlusCircle: () => (/* binding */ HiOutlinePlusCircle),
/* harmony export */   HiOutlinePlusSm: () => (/* binding */ HiOutlinePlusSm),
/* harmony export */   HiOutlinePresentationChartBar: () => (/* binding */ HiOutlinePresentationChartBar),
/* harmony export */   HiOutlinePresentationChartLine: () => (/* binding */ HiOutlinePresentationChartLine),
/* harmony export */   HiOutlinePrinter: () => (/* binding */ HiOutlinePrinter),
/* harmony export */   HiOutlinePuzzle: () => (/* binding */ HiOutlinePuzzle),
/* harmony export */   HiOutlineQrcode: () => (/* binding */ HiOutlineQrcode),
/* harmony export */   HiOutlineQuestionMarkCircle: () => (/* binding */ HiOutlineQuestionMarkCircle),
/* harmony export */   HiOutlineReceiptRefund: () => (/* binding */ HiOutlineReceiptRefund),
/* harmony export */   HiOutlineReceiptTax: () => (/* binding */ HiOutlineReceiptTax),
/* harmony export */   HiOutlineRefresh: () => (/* binding */ HiOutlineRefresh),
/* harmony export */   HiOutlineReply: () => (/* binding */ HiOutlineReply),
/* harmony export */   HiOutlineRewind: () => (/* binding */ HiOutlineRewind),
/* harmony export */   HiOutlineRss: () => (/* binding */ HiOutlineRss),
/* harmony export */   HiOutlineSave: () => (/* binding */ HiOutlineSave),
/* harmony export */   HiOutlineSaveAs: () => (/* binding */ HiOutlineSaveAs),
/* harmony export */   HiOutlineScale: () => (/* binding */ HiOutlineScale),
/* harmony export */   HiOutlineScissors: () => (/* binding */ HiOutlineScissors),
/* harmony export */   HiOutlineSearch: () => (/* binding */ HiOutlineSearch),
/* harmony export */   HiOutlineSearchCircle: () => (/* binding */ HiOutlineSearchCircle),
/* harmony export */   HiOutlineSelector: () => (/* binding */ HiOutlineSelector),
/* harmony export */   HiOutlineServer: () => (/* binding */ HiOutlineServer),
/* harmony export */   HiOutlineShare: () => (/* binding */ HiOutlineShare),
/* harmony export */   HiOutlineShieldCheck: () => (/* binding */ HiOutlineShieldCheck),
/* harmony export */   HiOutlineShieldExclamation: () => (/* binding */ HiOutlineShieldExclamation),
/* harmony export */   HiOutlineShoppingBag: () => (/* binding */ HiOutlineShoppingBag),
/* harmony export */   HiOutlineShoppingCart: () => (/* binding */ HiOutlineShoppingCart),
/* harmony export */   HiOutlineSortAscending: () => (/* binding */ HiOutlineSortAscending),
/* harmony export */   HiOutlineSortDescending: () => (/* binding */ HiOutlineSortDescending),
/* harmony export */   HiOutlineSparkles: () => (/* binding */ HiOutlineSparkles),
/* harmony export */   HiOutlineSpeakerphone: () => (/* binding */ HiOutlineSpeakerphone),
/* harmony export */   HiOutlineStar: () => (/* binding */ HiOutlineStar),
/* harmony export */   HiOutlineStatusOffline: () => (/* binding */ HiOutlineStatusOffline),
/* harmony export */   HiOutlineStatusOnline: () => (/* binding */ HiOutlineStatusOnline),
/* harmony export */   HiOutlineStop: () => (/* binding */ HiOutlineStop),
/* harmony export */   HiOutlineSun: () => (/* binding */ HiOutlineSun),
/* harmony export */   HiOutlineSupport: () => (/* binding */ HiOutlineSupport),
/* harmony export */   HiOutlineSwitchHorizontal: () => (/* binding */ HiOutlineSwitchHorizontal),
/* harmony export */   HiOutlineSwitchVertical: () => (/* binding */ HiOutlineSwitchVertical),
/* harmony export */   HiOutlineTable: () => (/* binding */ HiOutlineTable),
/* harmony export */   HiOutlineTag: () => (/* binding */ HiOutlineTag),
/* harmony export */   HiOutlineTemplate: () => (/* binding */ HiOutlineTemplate),
/* harmony export */   HiOutlineTerminal: () => (/* binding */ HiOutlineTerminal),
/* harmony export */   HiOutlineThumbDown: () => (/* binding */ HiOutlineThumbDown),
/* harmony export */   HiOutlineThumbUp: () => (/* binding */ HiOutlineThumbUp),
/* harmony export */   HiOutlineTicket: () => (/* binding */ HiOutlineTicket),
/* harmony export */   HiOutlineTranslate: () => (/* binding */ HiOutlineTranslate),
/* harmony export */   HiOutlineTrash: () => (/* binding */ HiOutlineTrash),
/* harmony export */   HiOutlineTrendingDown: () => (/* binding */ HiOutlineTrendingDown),
/* harmony export */   HiOutlineTrendingUp: () => (/* binding */ HiOutlineTrendingUp),
/* harmony export */   HiOutlineTruck: () => (/* binding */ HiOutlineTruck),
/* harmony export */   HiOutlineUpload: () => (/* binding */ HiOutlineUpload),
/* harmony export */   HiOutlineUser: () => (/* binding */ HiOutlineUser),
/* harmony export */   HiOutlineUserAdd: () => (/* binding */ HiOutlineUserAdd),
/* harmony export */   HiOutlineUserCircle: () => (/* binding */ HiOutlineUserCircle),
/* harmony export */   HiOutlineUserGroup: () => (/* binding */ HiOutlineUserGroup),
/* harmony export */   HiOutlineUserRemove: () => (/* binding */ HiOutlineUserRemove),
/* harmony export */   HiOutlineUsers: () => (/* binding */ HiOutlineUsers),
/* harmony export */   HiOutlineVariable: () => (/* binding */ HiOutlineVariable),
/* harmony export */   HiOutlineVideoCamera: () => (/* binding */ HiOutlineVideoCamera),
/* harmony export */   HiOutlineViewBoards: () => (/* binding */ HiOutlineViewBoards),
/* harmony export */   HiOutlineViewGrid: () => (/* binding */ HiOutlineViewGrid),
/* harmony export */   HiOutlineViewGridAdd: () => (/* binding */ HiOutlineViewGridAdd),
/* harmony export */   HiOutlineViewList: () => (/* binding */ HiOutlineViewList),
/* harmony export */   HiOutlineVolumeOff: () => (/* binding */ HiOutlineVolumeOff),
/* harmony export */   HiOutlineVolumeUp: () => (/* binding */ HiOutlineVolumeUp),
/* harmony export */   HiOutlineWifi: () => (/* binding */ HiOutlineWifi),
/* harmony export */   HiOutlineX: () => (/* binding */ HiOutlineX),
/* harmony export */   HiOutlineXCircle: () => (/* binding */ HiOutlineXCircle),
/* harmony export */   HiOutlineZoomIn: () => (/* binding */ HiOutlineZoomIn),
/* harmony export */   HiOutlineZoomOut: () => (/* binding */ HiOutlineZoomOut),
/* harmony export */   HiPaperAirplane: () => (/* binding */ HiPaperAirplane),
/* harmony export */   HiPaperClip: () => (/* binding */ HiPaperClip),
/* harmony export */   HiPause: () => (/* binding */ HiPause),
/* harmony export */   HiPencil: () => (/* binding */ HiPencil),
/* harmony export */   HiPencilAlt: () => (/* binding */ HiPencilAlt),
/* harmony export */   HiPhone: () => (/* binding */ HiPhone),
/* harmony export */   HiPhoneIncoming: () => (/* binding */ HiPhoneIncoming),
/* harmony export */   HiPhoneMissedCall: () => (/* binding */ HiPhoneMissedCall),
/* harmony export */   HiPhoneOutgoing: () => (/* binding */ HiPhoneOutgoing),
/* harmony export */   HiPhotograph: () => (/* binding */ HiPhotograph),
/* harmony export */   HiPlay: () => (/* binding */ HiPlay),
/* harmony export */   HiPlus: () => (/* binding */ HiPlus),
/* harmony export */   HiPlusCircle: () => (/* binding */ HiPlusCircle),
/* harmony export */   HiPlusSm: () => (/* binding */ HiPlusSm),
/* harmony export */   HiPresentationChartBar: () => (/* binding */ HiPresentationChartBar),
/* harmony export */   HiPresentationChartLine: () => (/* binding */ HiPresentationChartLine),
/* harmony export */   HiPrinter: () => (/* binding */ HiPrinter),
/* harmony export */   HiPuzzle: () => (/* binding */ HiPuzzle),
/* harmony export */   HiQrcode: () => (/* binding */ HiQrcode),
/* harmony export */   HiQuestionMarkCircle: () => (/* binding */ HiQuestionMarkCircle),
/* harmony export */   HiReceiptRefund: () => (/* binding */ HiReceiptRefund),
/* harmony export */   HiReceiptTax: () => (/* binding */ HiReceiptTax),
/* harmony export */   HiRefresh: () => (/* binding */ HiRefresh),
/* harmony export */   HiReply: () => (/* binding */ HiReply),
/* harmony export */   HiRewind: () => (/* binding */ HiRewind),
/* harmony export */   HiRss: () => (/* binding */ HiRss),
/* harmony export */   HiSave: () => (/* binding */ HiSave),
/* harmony export */   HiSaveAs: () => (/* binding */ HiSaveAs),
/* harmony export */   HiScale: () => (/* binding */ HiScale),
/* harmony export */   HiScissors: () => (/* binding */ HiScissors),
/* harmony export */   HiSearch: () => (/* binding */ HiSearch),
/* harmony export */   HiSearchCircle: () => (/* binding */ HiSearchCircle),
/* harmony export */   HiSelector: () => (/* binding */ HiSelector),
/* harmony export */   HiServer: () => (/* binding */ HiServer),
/* harmony export */   HiShare: () => (/* binding */ HiShare),
/* harmony export */   HiShieldCheck: () => (/* binding */ HiShieldCheck),
/* harmony export */   HiShieldExclamation: () => (/* binding */ HiShieldExclamation),
/* harmony export */   HiShoppingBag: () => (/* binding */ HiShoppingBag),
/* harmony export */   HiShoppingCart: () => (/* binding */ HiShoppingCart),
/* harmony export */   HiSortAscending: () => (/* binding */ HiSortAscending),
/* harmony export */   HiSortDescending: () => (/* binding */ HiSortDescending),
/* harmony export */   HiSparkles: () => (/* binding */ HiSparkles),
/* harmony export */   HiSpeakerphone: () => (/* binding */ HiSpeakerphone),
/* harmony export */   HiStar: () => (/* binding */ HiStar),
/* harmony export */   HiStatusOffline: () => (/* binding */ HiStatusOffline),
/* harmony export */   HiStatusOnline: () => (/* binding */ HiStatusOnline),
/* harmony export */   HiStop: () => (/* binding */ HiStop),
/* harmony export */   HiSun: () => (/* binding */ HiSun),
/* harmony export */   HiSupport: () => (/* binding */ HiSupport),
/* harmony export */   HiSwitchHorizontal: () => (/* binding */ HiSwitchHorizontal),
/* harmony export */   HiSwitchVertical: () => (/* binding */ HiSwitchVertical),
/* harmony export */   HiTable: () => (/* binding */ HiTable),
/* harmony export */   HiTag: () => (/* binding */ HiTag),
/* harmony export */   HiTemplate: () => (/* binding */ HiTemplate),
/* harmony export */   HiTerminal: () => (/* binding */ HiTerminal),
/* harmony export */   HiThumbDown: () => (/* binding */ HiThumbDown),
/* harmony export */   HiThumbUp: () => (/* binding */ HiThumbUp),
/* harmony export */   HiTicket: () => (/* binding */ HiTicket),
/* harmony export */   HiTranslate: () => (/* binding */ HiTranslate),
/* harmony export */   HiTrash: () => (/* binding */ HiTrash),
/* harmony export */   HiTrendingDown: () => (/* binding */ HiTrendingDown),
/* harmony export */   HiTrendingUp: () => (/* binding */ HiTrendingUp),
/* harmony export */   HiTruck: () => (/* binding */ HiTruck),
/* harmony export */   HiUpload: () => (/* binding */ HiUpload),
/* harmony export */   HiUser: () => (/* binding */ HiUser),
/* harmony export */   HiUserAdd: () => (/* binding */ HiUserAdd),
/* harmony export */   HiUserCircle: () => (/* binding */ HiUserCircle),
/* harmony export */   HiUserGroup: () => (/* binding */ HiUserGroup),
/* harmony export */   HiUserRemove: () => (/* binding */ HiUserRemove),
/* harmony export */   HiUsers: () => (/* binding */ HiUsers),
/* harmony export */   HiVariable: () => (/* binding */ HiVariable),
/* harmony export */   HiVideoCamera: () => (/* binding */ HiVideoCamera),
/* harmony export */   HiViewBoards: () => (/* binding */ HiViewBoards),
/* harmony export */   HiViewGrid: () => (/* binding */ HiViewGrid),
/* harmony export */   HiViewGridAdd: () => (/* binding */ HiViewGridAdd),
/* harmony export */   HiViewList: () => (/* binding */ HiViewList),
/* harmony export */   HiVolumeOff: () => (/* binding */ HiVolumeOff),
/* harmony export */   HiVolumeUp: () => (/* binding */ HiVolumeUp),
/* harmony export */   HiWifi: () => (/* binding */ HiWifi),
/* harmony export */   HiX: () => (/* binding */ HiX),
/* harmony export */   HiXCircle: () => (/* binding */ HiXCircle),
/* harmony export */   HiZoomIn: () => (/* binding */ HiZoomIn),
/* harmony export */   HiZoomOut: () => (/* binding */ HiZoomOut)
/* harmony export */ });
/* harmony import */ var _lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/index.mjs */ "./node_modules/react-icons/lib/index.mjs");
// THIS FILE IS AUTO GENERATED

function HiAcademicCap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"},"child":[]}]})(props);
};
function HiAdjustments (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"},"child":[]}]})(props);
};
function HiAnnotation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArchive (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowCircleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowNarrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowSmUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiArrowsExpand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 110-2h4a1 1 0 011 1v4a1 1 0 11-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 112 0v1.586l2.293-2.293a1 1 0 011.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 110-2h1.586l-2.293-2.293a1 1 0 011.414-1.414L15 13.586V12a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiAtSymbol (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBackspace (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBadgeCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBan (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBeaker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBell (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"},"child":[]}]})(props);
};
function HiBookOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"},"child":[]}]})(props);
};
function HiBookmarkAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiBookmark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"},"child":[]}]})(props);
};
function HiBriefcase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"},"child":[]}]})(props);
};
function HiCake (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCalculator (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCalendar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"},"child":[]}]})(props);
};
function HiChartPie (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"},"child":[]},{"tag":"path","attr":{"d":"M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"},"child":[]}]})(props);
};
function HiChartSquareBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChatAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"},"child":[]},{"tag":"path","attr":{"d":"M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"},"child":[]}]})(props);
};
function HiChatAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChat (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCheckCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDoubleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChevronUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiChip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13 7H7v6h6V7z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiClipboardCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiClipboardCopy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"},"child":[]},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z"},"child":[]}]})(props);
};
function HiClipboardList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiClipboard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"},"child":[]},{"tag":"path","attr":{"d":"M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"},"child":[]}]})(props);
};
function HiClock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCloudDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCloudUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"},"child":[]},{"tag":"path","attr":{"d":"M9 13h2v5a1 1 0 11-2 0v-5z"},"child":[]}]})(props);
};
function HiCloud (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"},"child":[]}]})(props);
};
function HiCode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCog (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCollection (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"},"child":[]}]})(props);
};
function HiColorSwatch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCreditCard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCubeTransparent (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCube (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"},"child":[]}]})(props);
};
function HiCurrencyBangladeshi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyDollar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyEuro (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.736 6.979C9.208 6.193 9.696 6 10 6c.304 0 .792.193 1.264.979a1 1 0 001.715-1.029C12.279 4.784 11.232 4 10 4s-2.279.784-2.979 1.95c-.285.475-.507 1-.67 1.55H6a1 1 0 000 2h.013a9.358 9.358 0 000 1H6a1 1 0 100 2h.351c.163.55.385 1.075.67 1.55C7.721 15.216 8.768 16 10 16s2.279-.784 2.979-1.95a1 1 0 10-1.715-1.029c-.472.786-.96.979-1.264.979-.304 0-.792-.193-1.264-.979a4.265 4.265 0 01-.264-.521H10a1 1 0 100-2H8.017a7.36 7.36 0 010-1H10a1 1 0 100-2H8.472c.08-.185.167-.36.264-.521z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyPound (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-14a3 3 0 00-3 3v2H7a1 1 0 000 2h1v1a1 1 0 01-1 1 1 1 0 100 2h6a1 1 0 100-2H9.83c.11-.313.17-.65.17-1v-1h1a1 1 0 100-2h-1V7a1 1 0 112 0 1 1 0 102 0 3 3 0 00-3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyRupee (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCurrencyYen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7.858 5.485a1 1 0 00-1.715 1.03L7.633 9H7a1 1 0 100 2h1.834l.166.277V12H7a1 1 0 100 2h2v1a1 1 0 102 0v-1h2a1 1 0 100-2h-2v-.723l.166-.277H13a1 1 0 100-2h-.634l1.492-2.486a1 1 0 10-1.716-1.029L10.034 9h-.068L7.858 5.485z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiCursorClick (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"},"child":[]},{"tag":"path","attr":{"d":"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"},"child":[]},{"tag":"path","attr":{"d":"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"},"child":[]}]})(props);
};
function HiDesktopComputer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDeviceMobile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDeviceTablet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"},"child":[]},{"tag":"path","attr":{"d":"M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"},"child":[]}]})(props);
};
function HiDocumentRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm1 8a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentReport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocumentText (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDocument (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDotsCircleHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDotsHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"},"child":[]}]})(props);
};
function HiDotsVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"},"child":[]}]})(props);
};
function HiDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"},"child":[]},{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"},"child":[]}]})(props);
};
function HiEmojiHappy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiEmojiSad (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiExclamationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiExternalLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"},"child":[]},{"tag":"path","attr":{"d":"M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"},"child":[]}]})(props);
};
function HiEyeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"},"child":[]}]})(props);
};
function HiEye (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 12a2 2 0 100-4 2 2 0 000 4z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFastForward (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"},"child":[]}]})(props);
};
function HiFilm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFilter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFingerPrint (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFire (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFlag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiFolderAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"},"child":[]}]})(props);
};
function HiFolderDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1.586l-.293-.293a1 1 0 10-1.414 1.414l2 2 .002.002a.997.997 0 001.41 0l.002-.002 2-2a1 1 0 00-1.414-1.414l-.293.293V9z"},"child":[]}]})(props);
};
function HiFolderOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"},"child":[]}]})(props);
};
function HiFolderRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm4 6a1 1 0 100 2h4a1 1 0 100-2H8z"},"child":[]}]})(props);
};
function HiFolder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"},"child":[]}]})(props);
};
function HiGift (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"},"child":[]}]})(props);
};
function HiGlobeAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiGlobe (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHashtag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHeart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiHome (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},"child":[]}]})(props);
};
function HiIdentification (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiInboxIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"},"child":[]},{"tag":"path","attr":{"d":"M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"},"child":[]}]})(props);
};
function HiInbox (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiInformationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiKey (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLibrary (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLightBulb (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"},"child":[]}]})(props);
};
function HiLightningBolt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLocationMarker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLockClosed (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLockOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"},"child":[]}]})(props);
};
function HiLogin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiLogout (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMailOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMail (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"},"child":[]},{"tag":"path","attr":{"d":"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"},"child":[]}]})(props);
};
function HiMap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt1 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt3 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenuAlt4 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMenu (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMicrophone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMinusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMinusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMinus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiMoon (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},"child":[]}]})(props);
};
function HiMusicNote (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"},"child":[]}]})(props);
};
function HiNewspaper (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"},"child":[]}]})(props);
};
function HiOfficeBuilding (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPaperAirplane (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"},"child":[]}]})(props);
};
function HiPaperClip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPause (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPencilAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPencil (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"},"child":[]}]})(props);
};
function HiPhoneIncoming (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"},"child":[]},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]}]})(props);
};
function HiPhoneMissedCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]},{"tag":"path","attr":{"d":"M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"},"child":[]}]})(props);
};
function HiPhoneOutgoing (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"},"child":[]},{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]}]})(props);
};
function HiPhone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},"child":[]}]})(props);
};
function HiPhotograph (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlay (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPlus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPresentationChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPresentationChartLine (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPrinter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiPuzzle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"},"child":[]}]})(props);
};
function HiQrcode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"},"child":[]}]})(props);
};
function HiQuestionMarkCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiReceiptRefund (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9H10a3 3 0 013 3v1a1 1 0 102 0v-1a5 5 0 00-5-5H8.414l1.293-1.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiReceiptTax (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiRefresh (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiReply (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiRewind (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"},"child":[]}]})(props);
};
function HiRss (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"},"child":[]},{"tag":"path","attr":{"d":"M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"},"child":[]}]})(props);
};
function HiSaveAs (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z"},"child":[]},{"tag":"path","attr":{"d":"M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z"},"child":[]}]})(props);
};
function HiSave (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"},"child":[]}]})(props);
};
function HiScale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiScissors (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.5 2a3.5 3.5 0 101.665 6.58L8.585 10l-1.42 1.42a3.5 3.5 0 101.414 1.414l8.128-8.127a1 1 0 00-1.414-1.414L10 8.586l-1.42-1.42A3.5 3.5 0 005.5 2zM4 5.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"d":"M12.828 11.414a1 1 0 00-1.414 1.414l3.879 3.88a1 1 0 001.414-1.415l-3.879-3.879z"},"child":[]}]})(props);
};
function HiSearchCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 9a2 2 0 114 0 2 2 0 01-4 0z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSelector (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiServer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShare (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"},"child":[]}]})(props);
};
function HiShieldCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShieldExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShoppingBag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiShoppingCart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"},"child":[]}]})(props);
};
function HiSortAscending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z"},"child":[]}]})(props);
};
function HiSortDescending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"},"child":[]}]})(props);
};
function HiSparkles (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSpeakerphone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiStar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},"child":[]}]})(props);
};
function HiStatusOffline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z"},"child":[]}]})(props);
};
function HiStatusOnline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiStop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSun (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiSwitchHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"},"child":[]}]})(props);
};
function HiSwitchVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"},"child":[]}]})(props);
};
function HiTable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTemplate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"},"child":[]}]})(props);
};
function HiTerminal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiThumbDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"},"child":[]}]})(props);
};
function HiThumbUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"},"child":[]}]})(props);
};
function HiTicket (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"},"child":[]}]})(props);
};
function HiTranslate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTrash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTrendingDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTrendingUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiTruck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"},"child":[]},{"tag":"path","attr":{"d":"M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"},"child":[]}]})(props);
};
function HiUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiUserAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"},"child":[]}]})(props);
};
function HiUserCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiUserGroup (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},"child":[]}]})(props);
};
function HiUserRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"},"child":[]}]})(props);
};
function HiUser (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiUsers (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"},"child":[]}]})(props);
};
function HiVariable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiVideoCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"},"child":[]}]})(props);
};
function HiViewBoards (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M2 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM15 3a1 1 0 00-1 1v12a1 1 0 001 1h2a1 1 0 001-1V4a1 1 0 00-1-1h-2z"},"child":[]}]})(props);
};
function HiViewGridAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"},"child":[]}]})(props);
};
function HiViewGrid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"},"child":[]}]})(props);
};
function HiViewList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiVolumeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiVolumeUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiWifi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiXCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiX (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiZoomIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8zm6-4a4 4 0 100 8 4 4 0 000-8z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiZoomOut (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"viewBox":"0 0 20 20","fill":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","d":"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"fillRule":"evenodd","d":"M5 8a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z","clipRule":"evenodd"},"child":[]}]})(props);
};
function HiOutlineAcademicCap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M12 14l9-5-9-5-9 5 9 5z"},"child":[]},{"tag":"path","attr":{"d":"M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"},"child":[]}]})(props);
};
function HiOutlineAdjustments (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"},"child":[]}]})(props);
};
function HiOutlineAnnotation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"},"child":[]}]})(props);
};
function HiOutlineArchive (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"},"child":[]}]})(props);
};
function HiOutlineArrowCircleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"},"child":[]}]})(props);
};
function HiOutlineArrowCircleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"},"child":[]}]})(props);
};
function HiOutlineArrowCircleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineArrowCircleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"},"child":[]}]})(props);
};
function HiOutlineArrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 14l-7 7m0 0l-7-7m7 7V3"},"child":[]}]})(props);
};
function HiOutlineArrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 19l-7-7m0 0l7-7m-7 7h18"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 17l-4 4m0 0l-4-4m4 4V3"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16l-4-4m0 0l4-4m-4 4h18"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 8l4 4m0 0l-4 4m4-4H3"},"child":[]}]})(props);
};
function HiOutlineArrowNarrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7l4-4m0 0l4 4m-4-4v18"},"child":[]}]})(props);
};
function HiOutlineArrowRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 5l7 7m0 0l-7 7m7-7H3"},"child":[]}]})(props);
};
function HiOutlineArrowSmDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 13l-5 5m0 0l-5-5m5 5V6"},"child":[]}]})(props);
};
function HiOutlineArrowSmLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 17l-5-5m0 0l5-5m-5 5h12"},"child":[]}]})(props);
};
function HiOutlineArrowSmRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7l5 5m0 0l-5 5m5-5H6"},"child":[]}]})(props);
};
function HiOutlineArrowSmUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 11l5-5m0 0l5 5m-5-5v12"},"child":[]}]})(props);
};
function HiOutlineArrowUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 10l7-7m0 0l7 7m-7-7v18"},"child":[]}]})(props);
};
function HiOutlineArrowsExpand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"},"child":[]}]})(props);
};
function HiOutlineAtSymbol (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"},"child":[]}]})(props);
};
function HiOutlineBackspace (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"},"child":[]}]})(props);
};
function HiOutlineBadgeCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"},"child":[]}]})(props);
};
function HiOutlineBan (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"},"child":[]}]})(props);
};
function HiOutlineBeaker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"},"child":[]}]})(props);
};
function HiOutlineBell (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"},"child":[]}]})(props);
};
function HiOutlineBookOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"},"child":[]}]})(props);
};
function HiOutlineBookmarkAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineBookmark (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"},"child":[]}]})(props);
};
function HiOutlineBriefcase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineCake (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"},"child":[]}]})(props);
};
function HiOutlineCalculator (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineCalendar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 13a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]}]})(props);
};
function HiOutlineCash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]}]})(props);
};
function HiOutlineChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineChartPie (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"},"child":[]}]})(props);
};
function HiOutlineChartSquareBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineChatAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"},"child":[]}]})(props);
};
function HiOutlineChatAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"},"child":[]}]})(props);
};
function HiOutlineChat (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"},"child":[]}]})(props);
};
function HiOutlineCheckCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 13l4 4L19 7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 13l-7 7-7-7m14-8l-7 7-7-7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 19l-7-7 7-7m8 14l-7-7 7-7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 5l7 7-7 7M5 5l7 7-7 7"},"child":[]}]})(props);
};
function HiOutlineChevronDoubleUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 11l7-7 7 7M5 19l7-7 7 7"},"child":[]}]})(props);
};
function HiOutlineChevronDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 9l-7 7-7-7"},"child":[]}]})(props);
};
function HiOutlineChevronLeft (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 19l-7-7 7-7"},"child":[]}]})(props);
};
function HiOutlineChevronRight (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5l7 7-7 7"},"child":[]}]})(props);
};
function HiOutlineChevronUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 15l7-7 7 7"},"child":[]}]})(props);
};
function HiOutlineChip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"},"child":[]}]})(props);
};
function HiOutlineClipboardCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"},"child":[]}]})(props);
};
function HiOutlineClipboardCopy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"},"child":[]}]})(props);
};
function HiOutlineClipboardList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"},"child":[]}]})(props);
};
function HiOutlineClipboard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"},"child":[]}]})(props);
};
function HiOutlineClock (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCloudDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"},"child":[]}]})(props);
};
function HiOutlineCloudUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"},"child":[]}]})(props);
};
function HiOutlineCloud (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"},"child":[]}]})(props);
};
function HiOutlineCode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"},"child":[]}]})(props);
};
function HiOutlineCog (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]}]})(props);
};
function HiOutlineCollection (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"},"child":[]}]})(props);
};
function HiOutlineColorSwatch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"},"child":[]}]})(props);
};
function HiOutlineCreditCard (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"},"child":[]}]})(props);
};
function HiOutlineCubeTransparent (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"},"child":[]}]})(props);
};
function HiOutlineCube (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"},"child":[]}]})(props);
};
function HiOutlineCurrencyBangladeshi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyDollar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyEuro (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyPound (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyRupee (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCurrencyYen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 8l3 5m0 0l3-5m-3 5v4m-3-5h6m-6 3h6m6-3a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineCursorClick (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"},"child":[]}]})(props);
};
function HiOutlineDatabase (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"},"child":[]}]})(props);
};
function HiOutlineDesktopComputer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDeviceMobile (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDeviceTablet (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"},"child":[]}]})(props);
};
function HiOutlineDocumentRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentReport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocumentSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"},"child":[]}]})(props);
};
function HiOutlineDocumentText (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineDocument (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineDotsCircleHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineDotsHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"},"child":[]}]})(props);
};
function HiOutlineDotsVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"},"child":[]}]})(props);
};
function HiOutlineDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"},"child":[]}]})(props);
};
function HiOutlineDuplicate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineEmojiHappy (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineEmojiSad (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineExclamationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"},"child":[]}]})(props);
};
function HiOutlineExternalLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"},"child":[]}]})(props);
};
function HiOutlineEyeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"},"child":[]}]})(props);
};
function HiOutlineEye (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"},"child":[]}]})(props);
};
function HiOutlineFastForward (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"},"child":[]}]})(props);
};
function HiOutlineFilm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"},"child":[]}]})(props);
};
function HiOutlineFilter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"},"child":[]}]})(props);
};
function HiOutlineFingerPrint (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"},"child":[]}]})(props);
};
function HiOutlineFire (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"},"child":[]}]})(props);
};
function HiOutlineFlag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"},"child":[]}]})(props);
};
function HiOutlineFolderAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineFolderDownload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineFolderOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"},"child":[]}]})(props);
};
function HiOutlineFolderRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"},"child":[]}]})(props);
};
function HiOutlineFolder (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"},"child":[]}]})(props);
};
function HiOutlineGift (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"},"child":[]}]})(props);
};
function HiOutlineGlobeAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"},"child":[]}]})(props);
};
function HiOutlineGlobe (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineHand (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"},"child":[]}]})(props);
};
function HiOutlineHashtag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 20l4-16m2 16l4-16M6 9h14M4 15h14"},"child":[]}]})(props);
};
function HiOutlineHeart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},"child":[]}]})(props);
};
function HiOutlineHome (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},"child":[]}]})(props);
};
function HiOutlineIdentification (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"},"child":[]}]})(props);
};
function HiOutlineInboxIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"},"child":[]}]})(props);
};
function HiOutlineInbox (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"},"child":[]}]})(props);
};
function HiOutlineInformationCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineKey (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"},"child":[]}]})(props);
};
function HiOutlineLibrary (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"},"child":[]}]})(props);
};
function HiOutlineLightBulb (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"},"child":[]}]})(props);
};
function HiOutlineLightningBolt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 10V3L4 14h7v7l9-11h-7z"},"child":[]}]})(props);
};
function HiOutlineLink (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"},"child":[]}]})(props);
};
function HiOutlineLocationMarker (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 11a3 3 0 11-6 0 3 3 0 016 0z"},"child":[]}]})(props);
};
function HiOutlineLockClosed (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"},"child":[]}]})(props);
};
function HiOutlineLockOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineLogin (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"},"child":[]}]})(props);
};
function HiOutlineLogout (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"},"child":[]}]})(props);
};
function HiOutlineMailOpen (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"},"child":[]}]})(props);
};
function HiOutlineMail (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineMap (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"},"child":[]}]})(props);
};
function HiOutlineMenuAlt1 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h8m-8 6h16"},"child":[]}]})(props);
};
function HiOutlineMenuAlt2 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16M4 18h7"},"child":[]}]})(props);
};
function HiOutlineMenuAlt3 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16m-7 6h7"},"child":[]}]})(props);
};
function HiOutlineMenuAlt4 (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 8h16M4 16h16"},"child":[]}]})(props);
};
function HiOutlineMenu (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 12h16M4 18h16"},"child":[]}]})(props);
};
function HiOutlineMicrophone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"},"child":[]}]})(props);
};
function HiOutlineMinusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineMinusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18 12H6"},"child":[]}]})(props);
};
function HiOutlineMinus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20 12H4"},"child":[]}]})(props);
};
function HiOutlineMoon (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},"child":[]}]})(props);
};
function HiOutlineMusicNote (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"},"child":[]}]})(props);
};
function HiOutlineNewspaper (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"},"child":[]}]})(props);
};
function HiOutlineOfficeBuilding (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"},"child":[]}]})(props);
};
function HiOutlinePaperAirplane (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"},"child":[]}]})(props);
};
function HiOutlinePaperClip (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"},"child":[]}]})(props);
};
function HiOutlinePause (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlinePencilAlt (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"},"child":[]}]})(props);
};
function HiOutlinePencil (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"},"child":[]}]})(props);
};
function HiOutlinePhoneIncoming (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"},"child":[]}]})(props);
};
function HiOutlinePhoneMissedCall (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"},"child":[]}]})(props);
};
function HiOutlinePhoneOutgoing (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"},"child":[]}]})(props);
};
function HiOutlinePhone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"},"child":[]}]})(props);
};
function HiOutlinePhotograph (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlinePlay (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlinePlusCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlinePlusSm (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 6v6m0 0v6m0-6h6m-6 0H6"},"child":[]}]})(props);
};
function HiOutlinePlus (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4v16m8-8H4"},"child":[]}]})(props);
};
function HiOutlinePresentationChartBar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},"child":[]}]})(props);
};
function HiOutlinePresentationChartLine (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"},"child":[]}]})(props);
};
function HiOutlinePrinter (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"},"child":[]}]})(props);
};
function HiOutlinePuzzle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"},"child":[]}]})(props);
};
function HiOutlineQrcode (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"},"child":[]}]})(props);
};
function HiOutlineQuestionMarkCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineReceiptRefund (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"},"child":[]}]})(props);
};
function HiOutlineReceiptTax (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"},"child":[]}]})(props);
};
function HiOutlineRefresh (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},"child":[]}]})(props);
};
function HiOutlineReply (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"},"child":[]}]})(props);
};
function HiOutlineRewind (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"},"child":[]}]})(props);
};
function HiOutlineRss (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"},"child":[]}]})(props);
};
function HiOutlineSaveAs (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 16v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m3-4H9a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-1m-1 4l-3 3m0 0l-3-3m3 3V3"},"child":[]}]})(props);
};
function HiOutlineSave (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"},"child":[]}]})(props);
};
function HiOutlineScale (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"},"child":[]}]})(props);
};
function HiOutlineScissors (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"},"child":[]}]})(props);
};
function HiOutlineSearchCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineSearch (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},"child":[]}]})(props);
};
function HiOutlineSelector (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 9l4-4 4 4m0 6l-4 4-4-4"},"child":[]}]})(props);
};
function HiOutlineServer (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"},"child":[]}]})(props);
};
function HiOutlineShare (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"},"child":[]}]})(props);
};
function HiOutlineShieldCheck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"},"child":[]}]})(props);
};
function HiOutlineShieldExclamation (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"},"child":[]}]})(props);
};
function HiOutlineShoppingBag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"},"child":[]}]})(props);
};
function HiOutlineShoppingCart (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]}]})(props);
};
function HiOutlineSortAscending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"},"child":[]}]})(props);
};
function HiOutlineSortDescending (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"},"child":[]}]})(props);
};
function HiOutlineSparkles (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"},"child":[]}]})(props);
};
function HiOutlineSpeakerphone (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"},"child":[]}]})(props);
};
function HiOutlineStar (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"},"child":[]}]})(props);
};
function HiOutlineStatusOffline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"},"child":[]}]})(props);
};
function HiOutlineStatusOnline (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z"},"child":[]}]})(props);
};
function HiOutlineStop (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"},"child":[]}]})(props);
};
function HiOutlineSun (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},"child":[]}]})(props);
};
function HiOutlineSupport (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"},"child":[]}]})(props);
};
function HiOutlineSwitchHorizontal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"},"child":[]}]})(props);
};
function HiOutlineSwitchVertical (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"},"child":[]}]})(props);
};
function HiOutlineTable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineTag (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"},"child":[]}]})(props);
};
function HiOutlineTemplate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"},"child":[]}]})(props);
};
function HiOutlineTerminal (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineThumbDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"},"child":[]}]})(props);
};
function HiOutlineThumbUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"},"child":[]}]})(props);
};
function HiOutlineTicket (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"},"child":[]}]})(props);
};
function HiOutlineTranslate (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"},"child":[]}]})(props);
};
function HiOutlineTrash (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},"child":[]}]})(props);
};
function HiOutlineTrendingDown (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"},"child":[]}]})(props);
};
function HiOutlineTrendingUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"},"child":[]}]})(props);
};
function HiOutlineTruck (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"d":"M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"},"child":[]}]})(props);
};
function HiOutlineUpload (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"},"child":[]}]})(props);
};
function HiOutlineUserAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"},"child":[]}]})(props);
};
function HiOutlineUserCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineUserGroup (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"},"child":[]}]})(props);
};
function HiOutlineUserRemove (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"},"child":[]}]})(props);
};
function HiOutlineUser (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"},"child":[]}]})(props);
};
function HiOutlineUsers (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"},"child":[]}]})(props);
};
function HiOutlineVariable (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4.871 4A17.926 17.926 0 003 12c0 2.874.673 5.59 1.871 8m14.13 0a17.926 17.926 0 001.87-8c0-2.874-.673-5.59-1.87-8M9 9h1.246a1 1 0 01.961.725l1.586 5.55a1 1 0 00.961.725H15m1-7h-.08a2 2 0 00-1.519.698L9.6 15.302A2 2 0 018.08 16H8"},"child":[]}]})(props);
};
function HiOutlineVideoCamera (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineViewBoards (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"},"child":[]}]})(props);
};
function HiOutlineViewGridAdd (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"},"child":[]}]})(props);
};
function HiOutlineViewGrid (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"},"child":[]}]})(props);
};
function HiOutlineViewList (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M4 6h16M4 10h16M4 14h16M4 18h16"},"child":[]}]})(props);
};
function HiOutlineVolumeOff (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z","clipRule":"evenodd"},"child":[]},{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"},"child":[]}]})(props);
};
function HiOutlineVolumeUp (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"},"child":[]}]})(props);
};
function HiOutlineWifi (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"},"child":[]}]})(props);
};
function HiOutlineXCircle (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"},"child":[]}]})(props);
};
function HiOutlineX (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M6 18L18 6M6 6l12 12"},"child":[]}]})(props);
};
function HiOutlineZoomIn (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"},"child":[]}]})(props);
};
function HiOutlineZoomOut (props) {
  return (0,_lib_index_mjs__WEBPACK_IMPORTED_MODULE_0__.GenIcon)({"tag":"svg","attr":{"fill":"none","viewBox":"0 0 24 24","strokeWidth":"2","stroke":"currentColor","aria-hidden":"true"},"child":[{"tag":"path","attr":{"strokeLinecap":"round","strokeLinejoin":"round","d":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"},"child":[]}]})(props);
};


/***/ }),

/***/ "./node_modules/react-share/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-share/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailIcon: () => (/* binding */ EmailIcon$1),
/* harmony export */   EmailShareButton: () => (/* binding */ EmailShareButton$1),
/* harmony export */   FacebookIcon: () => (/* binding */ FacebookIcon$1),
/* harmony export */   FacebookMessengerIcon: () => (/* binding */ FacebookMessengerIcon$1),
/* harmony export */   FacebookMessengerShareButton: () => (/* binding */ FacebookMessengerShareButton$1),
/* harmony export */   FacebookShareButton: () => (/* binding */ FacebookShareButton$1),
/* harmony export */   FacebookShareCount: () => (/* binding */ FacebookShareCount),
/* harmony export */   GabIcon: () => (/* binding */ GabIcon$1),
/* harmony export */   GabShareButton: () => (/* binding */ GabShareButton$1),
/* harmony export */   HatenaIcon: () => (/* binding */ HatenaIcon$1),
/* harmony export */   HatenaShareButton: () => (/* binding */ HatenaShareButton$1),
/* harmony export */   HatenaShareCount: () => (/* binding */ HatenaShareCount),
/* harmony export */   InstapaperIcon: () => (/* binding */ InstapaperIcon$1),
/* harmony export */   InstapaperShareButton: () => (/* binding */ InstapaperShareButton$1),
/* harmony export */   LineIcon: () => (/* binding */ LineIcon$1),
/* harmony export */   LineShareButton: () => (/* binding */ LineShareButton$1),
/* harmony export */   LinkedinIcon: () => (/* binding */ LinkedinIcon$1),
/* harmony export */   LinkedinShareButton: () => (/* binding */ LinkedinShareButton$1),
/* harmony export */   LivejournalIcon: () => (/* binding */ LivejournalIcon$1),
/* harmony export */   LivejournalShareButton: () => (/* binding */ LivejournalShareButton$1),
/* harmony export */   MailruIcon: () => (/* binding */ MailruIcon$1),
/* harmony export */   MailruShareButton: () => (/* binding */ MailruShareButton$1),
/* harmony export */   OKIcon: () => (/* binding */ OKIcon$1),
/* harmony export */   OKShareButton: () => (/* binding */ OKShareButton$1),
/* harmony export */   OKShareCount: () => (/* binding */ OKShareCount),
/* harmony export */   PinterestIcon: () => (/* binding */ PinterestIcon$1),
/* harmony export */   PinterestShareButton: () => (/* binding */ PinterestShareButton$1),
/* harmony export */   PinterestShareCount: () => (/* binding */ PinterestShareCount),
/* harmony export */   PocketIcon: () => (/* binding */ PocketIcon$1),
/* harmony export */   PocketShareButton: () => (/* binding */ PocketShareButton$1),
/* harmony export */   RedditIcon: () => (/* binding */ RedditIcon$1),
/* harmony export */   RedditShareButton: () => (/* binding */ RedditShareButton$1),
/* harmony export */   RedditShareCount: () => (/* binding */ RedditShareCount),
/* harmony export */   TelegramIcon: () => (/* binding */ TelegramIcon$1),
/* harmony export */   TelegramShareButton: () => (/* binding */ TelegramShareButton$1),
/* harmony export */   TumblrIcon: () => (/* binding */ TumblrIcon$1),
/* harmony export */   TumblrShareButton: () => (/* binding */ TumblrShareButton$1),
/* harmony export */   TumblrShareCount: () => (/* binding */ TumblrShareCount),
/* harmony export */   TwitterIcon: () => (/* binding */ TwitterIcon$1),
/* harmony export */   TwitterShareButton: () => (/* binding */ TwitterShareButton$1),
/* harmony export */   VKIcon: () => (/* binding */ VKIcon$1),
/* harmony export */   VKShareButton: () => (/* binding */ VKShareButton$1),
/* harmony export */   VKShareCount: () => (/* binding */ VKShareCount),
/* harmony export */   ViberIcon: () => (/* binding */ ViberIcon$1),
/* harmony export */   ViberShareButton: () => (/* binding */ ViberShareButton$1),
/* harmony export */   WeiboIcon: () => (/* binding */ WeiboIcon$1),
/* harmony export */   WeiboShareButton: () => (/* binding */ WeiboShareButton$1),
/* harmony export */   WhatsappIcon: () => (/* binding */ WhatsappIcon$1),
/* harmony export */   WhatsappShareButton: () => (/* binding */ WhatsappShareButton$1),
/* harmony export */   WorkplaceIcon: () => (/* binding */ WorkplaceIcon$1),
/* harmony export */   WorkplaceShareButton: () => (/* binding */ WorkplaceShareButton$1),
/* harmony export */   XIcon: () => (/* binding */ XIcon$1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




function createIcon(iconConfig) {
  const Icon = (_a) => {
    var _b = _a, {
      bgStyle = {},
      borderRadius = 0,
      iconFillColor = "white",
      round = false,
      size = 64
    } = _b, rest = __objRest(_b, [
      "bgStyle",
      "borderRadius",
      "iconFillColor",
      "round",
      "size"
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", __spreadProps(__spreadValues({ viewBox: "0 0 64 64", width: size, height: size }, rest), { children: [
      round ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "32", cy: "32", r: "32", fill: iconConfig.color, style: bgStyle }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "rect",
        {
          width: "64",
          height: "64",
          rx: borderRadius,
          ry: borderRadius,
          fill: iconConfig.color,
          style: bgStyle
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: iconConfig.path, fill: iconFillColor })
    ] }));
  };
  return Icon;
}
const EmailIcon = createIcon({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
const EmailIcon$1 = EmailIcon;
function objectToGetParams(object) {
  const params = Object.entries(object).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  return params.length > 0 ? `?${params.join("&")}` : "";
}
const isPromise = (obj) => !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
const getBoxPositionOnWindowCenter = (width, height) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
});
const getBoxPositionOnScreenCenter = (width, height) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2
});
function windowOpen(url, _a, onClose) {
  var _b = _a, { height, width } = _b, configRest = __objRest(_b, ["height", "width"]);
  const config = __spreadValues({
    height,
    width,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "no",
    centerscreen: "yes",
    chrome: "yes"
  }, configRest);
  const shareDialog = window.open(
    url,
    "",
    Object.keys(config).map((key) => `${key}=${config[key]}`).join(", ")
  );
  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e) {
        console.error(e);
      }
    }, 1e3);
  }
  return shareDialog;
}
function ShareButton(_c) {
  var _d = _c, {
    beforeOnClick,
    children,
    className,
    disabled,
    disabledStyle = { opacity: 0.6 },
    forwardedRef,
    htmlTitle,
    networkLink,
    networkName,
    onClick,
    onShareWindowClose,
    openShareDialogOnClick = true,
    opts,
    resetButtonStyle = true,
    style,
    url,
    windowHeight = 400,
    windowPosition = "windowCenter",
    windowWidth = 550
  } = _d, rest = __objRest(_d, [
    "beforeOnClick",
    "children",
    "className",
    "disabled",
    "disabledStyle",
    "forwardedRef",
    "htmlTitle",
    "networkLink",
    "networkName",
    "onClick",
    "onShareWindowClose",
    "openShareDialogOnClick",
    "opts",
    "resetButtonStyle",
    "style",
    "url",
    "windowHeight",
    "windowPosition",
    "windowWidth"
  ]);
  const handleClick = async (event) => {
    const link = networkLink(url, opts);
    if (disabled) {
      return;
    }
    event.preventDefault();
    if (beforeOnClick) {
      const returnVal = beforeOnClick();
      if (isPromise(returnVal)) {
        await returnVal;
      }
    }
    if (openShareDialogOnClick) {
      const windowConfig = __spreadValues({
        height: windowHeight,
        width: windowWidth
      }, windowPosition === "windowCenter" ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));
      windowOpen(link, windowConfig, onShareWindowClose);
    }
    if (onClick) {
      onClick(event, link);
    }
  };
  const newClassName = classnames__WEBPACK_IMPORTED_MODULE_2__(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!disabled,
      disabled: !!disabled
    },
    className
  );
  const newStyle = resetButtonStyle ? __spreadValues(__spreadValues({
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  }, style), disabled && disabledStyle) : __spreadValues(__spreadValues({}, style), disabled && disabledStyle);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "button",
    __spreadProps(__spreadValues({}, rest), {
      className: newClassName,
      onClick: handleClick,
      ref: forwardedRef,
      style: newStyle,
      title: htmlTitle,
      children
    })
  );
}
function createShareButton(networkName, link, optsMap, defaultProps) {
  function CreatedButton(props, ref) {
    const opts = optsMap(props);
    const passedProps = __spreadValues({}, props);
    const optsKeys = Object.keys(opts);
    optsKeys.forEach((key) => {
      delete passedProps[key];
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      ShareButton,
      __spreadProps(__spreadValues(__spreadValues({}, defaultProps), passedProps), {
        forwardedRef: ref,
        networkName,
        networkLink: link,
        opts: optsMap(props)
      })
    );
  }
  CreatedButton.displayName = `ShareButton-${networkName}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(CreatedButton);
}
function emailLink(url, { subject, body, separator }) {
  return "mailto:" + objectToGetParams({ subject, body: body ? body + separator + url : url });
}
const EmailShareButton = createShareButton(
  "email",
  emailLink,
  (props) => ({
    subject: props.subject,
    body: props.body,
    separator: props.separator || " "
  }),
  {
    openShareDialogOnClick: false,
    onClick: (_, link) => {
      window.location.href = link;
    }
  }
);
const EmailShareButton$1 = EmailShareButton;
const FacebookIcon = createIcon({
  color: "#0965FE",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
});
const FacebookIcon$1 = FacebookIcon;
const FacebookMessengerIcon = createIcon({
  color: "#0A7CFF",
  networkName: "facebookmessenger",
  path: "M 53.066406 21.871094 C 52.667969 21.339844 51.941406 21.179688 51.359375 21.496094 L 37.492188 29.058594 L 28.867188 21.660156 C 28.339844 21.207031 27.550781 21.238281 27.054688 21.730469 L 11.058594 37.726562 C 10.539062 38.25 10.542969 39.09375 11.0625 39.613281 C 11.480469 40.027344 12.121094 40.121094 12.640625 39.839844 L 26.503906 32.28125 L 35.136719 39.679688 C 35.667969 40.132812 36.457031 40.101562 36.949219 39.609375 L 52.949219 23.613281 C 53.414062 23.140625 53.464844 22.398438 53.066406 21.871094 Z M 53.066406 21.871094"
});
const FacebookMessengerIcon$1 = FacebookMessengerIcon;
function facebookMessengerLink(url, { appId, redirectUri, to }) {
  return "https://www.facebook.com/dialog/send" + objectToGetParams({
    link: url,
    redirect_uri: redirectUri || url,
    app_id: appId,
    to
  });
}
const FacebookMessengerShareButton = createShareButton(
  "facebookmessenger",
  facebookMessengerLink,
  (props) => ({
    appId: props.appId,
    redirectUri: props.redirectUri,
    to: props.to
  }),
  {
    windowWidth: 1e3,
    windowHeight: 820
  }
);
const FacebookMessengerShareButton$1 = FacebookMessengerShareButton;
class AssertionError extends Error {
  constructor(message) {
    super(message);
    this.name = "AssertionError";
  }
}
function assert(value, message) {
  if (!value) {
    throw new AssertionError(message);
  }
}
function facebookLink(url, { hashtag }) {
  assert(url, "facebook.url");
  return "https://www.facebook.com/sharer/sharer.php" + objectToGetParams({ u: url, hashtag });
}
const FacebookShareButton = createShareButton(
  "facebook",
  facebookLink,
  (props) => ({ hashtag: props.hashtag }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const FacebookShareButton$1 = FacebookShareButton;
function useIsMounted() {
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => isMounted.current, []);
}
function SocialMediaShareCount(_e) {
  var _f = _e, {
    children = (shareCount) => shareCount,
    className,
    getCount,
    url
  } = _f, rest = __objRest(_f, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const isMounted = useIsMounted();
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(true);
    getCount(url, (count2) => {
      if (isMounted()) {
        setCount(count2);
        setIsLoading(false);
      }
    });
  }, [url]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __spreadProps(__spreadValues({ className: classnames__WEBPACK_IMPORTED_MODULE_2__("react-share__ShareCount", className) }, rest), { children: !isLoading && count !== void 0 && children(count) }));
}
function createShareCount(getCount) {
  const ShareCount = (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SocialMediaShareCount, __spreadValues({ getCount }, props));
  ShareCount.displayName = `ShareCount(${getCount.name})`;
  return ShareCount;
}
function getFacebookShareCount(shareUrl, callback) {
  const endpoint = `https://graph.facebook.com/?id=${shareUrl}&fields=og_object{engagement}`;
  jsonp__WEBPACK_IMPORTED_MODULE_3__(endpoint, (err, data) => {
    callback(
      !err && data && data.og_object && data.og_object.engagement ? data.og_object.engagement.count : void 0
    );
  });
}
const FacebookShareCount = createShareCount(getFacebookShareCount);
const HatenaIcon = createIcon({
  color: "#009ad9",
  networkName: "hatena",
  path: "M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "
});
const HatenaIcon$1 = HatenaIcon;
function hatenaLink(url, { title }) {
  assert(url, "hatena.url");
  return `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`;
}
const HatenaShareButton = createShareButton(
  "hatena",
  hatenaLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
const HatenaShareButton$1 = HatenaShareButton;
function getHatenaShareCount(shareUrl, callback) {
  const url = "https://bookmark.hatenaapis.com/count/entry";
  jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(data != null ? data : void 0);
    }
  );
}
const HatenaShareCount = createShareCount(getHatenaShareCount);
const InstapaperIcon = createIcon({
  color: "#1F1F1F",
  networkName: "instapaper",
  path: "M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z"
});
const InstapaperIcon$1 = InstapaperIcon;
function instapaperLink(url, { title, description }) {
  assert(url, "instapaper.url");
  return "http://www.instapaper.com/hello2" + objectToGetParams({
    url,
    title,
    description
  });
}
const InstapaperShareButton = createShareButton(
  "instapaper",
  instapaperLink,
  (props) => ({
    title: props.title,
    description: props.description
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
    windowPosition: "windowCenter"
  }
);
const InstapaperShareButton$1 = InstapaperShareButton;
const LineIcon = createIcon({
  color: "#00b800",
  networkName: "line",
  path: "M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"
});
const LineIcon$1 = LineIcon;
function lineLink(url, { title }) {
  assert(url, "line.url");
  return "https://social-plugins.line.me/lineit/share" + objectToGetParams({
    url,
    text: title
  });
}
const LineShareButton = createShareButton(
  "line",
  lineLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
const LineShareButton$1 = LineShareButton;
const LinkedinIcon = createIcon({
  color: "#0077B5",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
const LinkedinIcon$1 = LinkedinIcon;
function linkedinLink(url, { title, summary, source }) {
  assert(url, "linkedin.url");
  return "https://linkedin.com/shareArticle" + objectToGetParams({ url, mini: "true", title, summary, source });
}
const LinkedinShareButton = createShareButton(
  "linkedin",
  linkedinLink,
  ({ title, summary, source }) => ({ title, summary, source }),
  {
    windowWidth: 750,
    windowHeight: 600
  }
);
const LinkedinShareButton$1 = LinkedinShareButton;
const LivejournalIcon = createIcon({
  color: "#21A5D8",
  networkName: "livejournal",
  path: "M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z"
});
const LivejournalIcon$1 = LivejournalIcon;
function livejournalLink(url, { title, description }) {
  assert(url, "livejournal.url");
  return "https://www.livejournal.com/update.bml" + objectToGetParams({
    subject: title,
    event: description
  });
}
const LivejournalShareButton = createShareButton(
  "livejournal",
  livejournalLink,
  (props) => ({
    title: props.title,
    description: props.description
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const LivejournalShareButton$1 = LivejournalShareButton;
const MailruIcon = createIcon({
  color: "#168DE2",
  networkName: "mailru",
  path: "M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z"
});
const MailruIcon$1 = MailruIcon;
function mailruLink(url, { title, description, imageUrl }) {
  assert(url, "mailru.url");
  return "https://connect.mail.ru/share" + objectToGetParams({
    url,
    title,
    description,
    image_url: imageUrl
  });
}
const MailruShareButton = createShareButton(
  "mailru",
  mailruLink,
  (props) => ({
    title: props.title,
    description: props.description,
    imageUrl: props.imageUrl
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const MailruShareButton$1 = MailruShareButton;
const OKIcon = createIcon({
  color: "#F97400",
  networkName: "ok",
  path: "M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z "
});
const OKIcon$1 = OKIcon;
function okLink(url, { title, description, image }) {
  assert(url, "ok.url");
  return "https://connect.ok.ru/offer" + objectToGetParams({
    url,
    title,
    description,
    imageUrl: image
  });
}
const OKShareButton = createShareButton(
  "ok",
  okLink,
  (props) => ({
    title: props.title,
    description: props.description,
    image: props.image
  }),
  {
    windowWidth: 588,
    windowHeight: 480,
    windowPosition: "screenCenter"
  }
);
const OKShareButton$1 = OKShareButton;
function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index2, _count) {
          var _a, _b;
          (_b = (_a = window.OK.callbacks)[index2]) == null ? void 0 : _b.call(_a, _count);
        }
      },
      callbacks: []
    };
  }
  const url = "https://connect.ok.ru/dk";
  const index = window.OK.callbacks.length;
  window.ODKL = {
    updateCount(index2, count) {
      var _a, _b;
      const callbackIndex = index2 === "" ? 0 : parseInt(index2.replace("react-share-", ""), 10);
      (_b = (_a = window.OK.callbacks)[callbackIndex]) == null ? void 0 : _b.call(_a, count === "" ? void 0 : parseInt(count, 10));
    }
  };
  window.OK.callbacks.push(callback);
  return jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      "st.cmd": "extLike",
      uid: `react-share-${index}`,
      ref: shareUrl
    })
  );
}
const OKShareCount = createShareCount(getOKShareCount);
const PinterestIcon = createIcon({
  color: "#E60023",
  networkName: "pinterest",
  path: "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"
});
const PinterestIcon$1 = PinterestIcon;
function pinterestLink(url, { media, description, pinId }) {
  if (pinId) {
    return `https://pinterest.com/pin/${pinId}/repin/x/`;
  }
  assert(url, "pinterest.url");
  assert(media, "pinterest.media");
  return "https://pinterest.com/pin/create/button/" + objectToGetParams({
    url,
    media,
    description
  });
}
const PinterestShareButton = createShareButton(
  "pinterest",
  pinterestLink,
  (props) => ({
    media: props.media,
    description: props.description,
    pinId: props.pinId
  }),
  {
    windowWidth: 1e3,
    windowHeight: 730
  }
);
const PinterestShareButton$1 = PinterestShareButton;
function getPinterestShareCount(shareUrl, callback) {
  const url = "https://api.pinterest.com/v1/urls/count.json";
  jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(data ? data.count : void 0);
    }
  );
}
const PinterestShareCount = createShareCount(getPinterestShareCount);
const PocketIcon = createIcon({
  color: "#EF3F56",
  networkName: "pocket",
  path: "M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z"
});
const PocketIcon$1 = PocketIcon;
function pocketLink(url, { title }) {
  assert(url, "pocket.url");
  return "https://getpocket.com/save" + objectToGetParams({
    url,
    title
  });
}
const PocketShareButton = createShareButton(
  "pocket",
  pocketLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
const PocketShareButton$1 = PocketShareButton;
const RedditIcon = createIcon({
  color: "#FF5700",
  networkName: "reddit",
  path: "M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344"
});
const RedditIcon$1 = RedditIcon;
function redditLink(url, { title }) {
  assert(url, "reddit.url");
  return "https://www.reddit.com/web/submit" + objectToGetParams({
    url,
    title
  });
}
const RedditShareButton = createShareButton(
  "reddit",
  redditLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
const RedditShareButton$1 = RedditShareButton;
function gabLink(url, { title }) {
  assert(url, "gab.url");
  return "https://gab.com/compose" + objectToGetParams({
    url,
    text: title
  });
}
const GabShareButton = createShareButton(
  "gab",
  gabLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: "windowCenter"
  }
);
const GabShareButton$1 = GabShareButton;
const GabIcon = createIcon({
  color: "#00d178",
  networkName: "gab",
  path: "m17.0506,23.97457l5.18518,0l0,14.23933c0,6.82699 -3.72695,10.09328 -9.33471,10.09328c-2.55969,0 -4.82842,-0.87286 -6.22084,-2.0713l2.07477,-3.88283c1.19844,0.81051 2.33108,1.29543 3.85511,1.29543c2.75366,0 4.44049,-1.97432 4.44049,-4.82149l0,-0.87286c-1.16728,1.39242 -2.81947,2.0713 -4.63446,2.0713c-4.44048,0 -7.81068,-3.68885 -7.81068,-8.28521c0,-4.59289 3.37019,-8.28174 7.81068,-8.28174c1.81499,0 3.46718,0.67888 4.63446,2.0713l0,-1.55521zm-3.62997,11.39217c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm25.7077,4.13913l-5.18518,0l0,-1.29197c-1.00448,1.13264 -2.3969,1.81152 -4.21188,1.81152c-3.62997,0 -5.63893,-2.52504 -5.63893,-5.4034c0,-4.27076 5.251,-5.85715 9.78846,-4.49937c-0.09698,-1.39241 -0.9733,-2.39343 -2.78829,-2.39343c-1.26426,0 -2.72248,0.48492 -3.62997,1.00102l-1.5552,-3.72003c1.19844,-0.77587 3.40136,-1.55174 5.96452,-1.55174c3.78931,0 7.25648,2.13365 7.25648,7.95962l0,8.08777zm-5.18518,-6.14809c-2.42806,-0.77587 -4.66563,-0.3533 -4.66563,1.36124c0,1.00101 0.84168,1.6799 1.84616,1.6799c1.20191,0 2.56315,-0.96984 2.81947,-3.04115zm13.00626,-17.66495l0,9.83695c1.16727,-1.39242 2.81946,-2.0713 4.63445,-2.0713c4.44048,0 7.81068,3.68885 7.81068,8.28174c0,4.59636 -3.37019,8.28521 -7.81068,8.28521c-1.81499,0 -3.46718,-0.67888 -4.63445,-2.0713l0,1.55174l-5.18519,0l0,-23.81304l5.18519,0zm3.62997,19.67391c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm0,0"
});
const GabIcon$1 = GabIcon;
function getRedditShareCount(shareUrl, callback) {
  const endpoint = `https://www.reddit.com/api/info.json?limit=1&url=${shareUrl}`;
  jsonp__WEBPACK_IMPORTED_MODULE_3__(endpoint, { param: "jsonp" }, (err, response) => {
    callback(
      !err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : void 0
    );
  });
}
const RedditShareCount = createShareCount(getRedditShareCount);
const TelegramIcon = createIcon({
  color: "#25A3E3",
  networkName: "telegram",
  path: "m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
});
const TelegramIcon$1 = TelegramIcon;
function telegramLink(url, { title }) {
  assert(url, "telegram.url");
  return "https://telegram.me/share/url" + objectToGetParams({
    url,
    text: title
  });
}
const TelegramShareButton = createShareButton(
  "telegram",
  telegramLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const TelegramShareButton$1 = TelegramShareButton;
const TumblrIcon = createIcon({
  color: "#34526f",
  networkName: "tumblr",
  path: "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z"
});
const TumblrIcon$1 = TumblrIcon;
function tumblrLink(url, {
  title,
  caption,
  tags,
  posttype
}) {
  assert(url, "tumblr.url");
  return "https://www.tumblr.com/widgets/share/tool" + objectToGetParams({
    canonicalUrl: url,
    title,
    caption,
    tags,
    posttype
  });
}
const TumblrShareButton = createShareButton(
  "tumblr",
  tumblrLink,
  (props) => ({
    title: props.title,
    tags: (props.tags || []).join(","),
    caption: props.caption,
    posttype: props.posttype || "link"
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const TumblrShareButton$1 = TumblrShareButton;
function getTumblrShareCount(shareUrl, callback) {
  const endpoint = "https://api.tumblr.com/v2/share/stats";
  return jsonp__WEBPACK_IMPORTED_MODULE_3__(
    endpoint + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(!err && data && data.response ? data.response.note_count : void 0);
    }
  );
}
const TumblrShareCount = createShareCount(getTumblrShareCount);
const TwitterIcon = createIcon({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
const TwitterIcon$1 = TwitterIcon;
function twitterLink(url, {
  title,
  via,
  hashtags = [],
  related = []
}) {
  assert(url, "twitter.url");
  assert(Array.isArray(hashtags), "twitter.hashtags is not an array");
  assert(Array.isArray(related), "twitter.related is not an array");
  return "https://twitter.com/intent/tweet" + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.length > 0 ? hashtags.join(",") : void 0,
    related: related.length > 0 ? related.join(",") : void 0
  });
}
const TwitterShareButton = createShareButton(
  "twitter",
  twitterLink,
  (props) => ({
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const TwitterShareButton$1 = TwitterShareButton;
const ViberIcon = createIcon({
  color: "#7360f2",
  networkName: "viber",
  path: "m31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z"
});
const ViberIcon$1 = ViberIcon;
function viberLink(url, { title, separator }) {
  assert(url, "viber.url");
  return "viber://forward" + objectToGetParams({
    text: title ? title + separator + url : url
  });
}
const ViberShareButton = createShareButton(
  "viber",
  viberLink,
  (props) => ({
    title: props.title,
    separator: props.separator || " "
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const ViberShareButton$1 = ViberShareButton;
const VKIcon = createIcon({
  color: "#4C75A3",
  networkName: "vk",
  path: "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z"
});
const VKIcon$1 = VKIcon;
function vkLink(url, { title, image, noParse, noVkLinks }) {
  assert(url, "vk.url");
  return "https://vk.com/share.php" + objectToGetParams({
    url,
    title,
    image,
    noparse: noParse ? 1 : 0,
    no_vk_links: noVkLinks ? 1 : 0
  });
}
const VKShareButton = createShareButton(
  "vk",
  vkLink,
  (props) => ({
    title: props.title,
    image: props.image,
    noParse: props.noParse,
    noVkLinks: props.noVkLinks
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const VKShareButton$1 = VKShareButton;
function getVKShareCount(shareUrl, callback) {
  if (!window.VK)
    window.VK = {};
  window.VK.Share = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    count: (index2, count) => {
      var _a, _b;
      return (_b = (_a = window.VK.callbacks) == null ? void 0 : _a[index2]) == null ? void 0 : _b.call(_a, count);
    }
  };
  window.VK.callbacks = [];
  const url = "https://vk.com/share.php";
  const index = window.VK.callbacks.length;
  window.VK.callbacks.push(callback);
  return jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      act: "count",
      index,
      url: shareUrl
    })
  );
}
const VKShareCount = createShareCount(getVKShareCount);
const WeiboIcon = createIcon({
  color: "#DF2029",
  networkName: "weibo",
  path: "M40.9756152,15.0217119 C40.5000732,15.0546301 39.9999314,15.1204666 39.5325878,15.2192213 C38.6634928,15.4085016 38.0977589,16.2643757 38.2863368,17.1284787 C38.4667163,18.0008129 39.3194143,18.5686519 40.1885094,18.3793715 C42.8613908,17.8115326 45.7720411,18.6427174 47.7316073,20.8153207 C49.6911735,22.996153 50.2077122,25.975254 49.3714112,28.5840234 C49.1008441,29.4316684 49.5763861,30.3533789 50.4208857,30.6249537 C51.2653852,30.8965286 52.1754769,30.4192153 52.4542425,29.5715703 C53.6349013,25.9011885 52.9133876,21.7699494 50.1585171,18.7085538 C48.0923641,16.4042776 45.2063093,15.1533848 42.3530505,15.0217119 C41.8775084,14.9970227 41.4511594,14.9887937 40.9756152,15.0217119 Z M27.9227762,19.8277737 C24.9957268,20.140498 20.863421,22.4365431 17.2312548,26.0822378 C13.2711279,30.0571148 11,34.2871065 11,37.9328012 C11,44.9032373 19.8713401,49.125 28.5786978,49.125 C39.9917329,49.125 47.600423,42.4261409 47.600423,37.1427636 C47.600423,33.9496952 44.9603397,32.1638816 42.549827,31.4149913 C41.9594976,31.2339421 41.5167516,31.1434164 41.8283133,30.3616079 C42.5006339,28.66632 42.6236176,27.1932286 41.8939054,26.1480742 C40.5328692,24.1894405 36.7203236,24.2881952 32.448635,26.0822378 C32.448635,26.0822378 31.1203949,26.6912261 31.4647526,25.6213825 C32.1206742,23.4981576 32.0304845,21.712342 31.0056075,20.6836478 C30.2840938,19.9512176 29.2510184,19.6878718 27.9227762,19.8277737 Z M42.0906819,20.6836478 C41.6233383,20.6589586 41.1723917,20.716566 40.7132466,20.8153207 C39.9671353,20.9716828 39.4997917,21.7781784 39.6637721,22.5270687 C39.8277525,23.275959 40.5574647,23.7450433 41.303576,23.5804521 C42.1972686,23.3911718 43.2057485,23.6380596 43.8616701,24.3704897 C44.5175916,25.1029198 44.6733735,26.0657797 44.3864073,26.9381118 C44.1486363,27.6705419 44.5093932,28.4770397 45.2391054,28.7156963 C45.9688176,28.9461239 46.780521,28.5922524 47.0100936,27.8598223 C47.584026,26.0740087 47.2396661,24.0248493 45.8950269,22.5270687 C44.886547,21.4078489 43.4845162,20.7494842 42.0906819,20.6836478 Z M29.496988,29.9665891 C35.3100922,30.1723275 39.9917329,33.0691319 40.3852858,37.0769272 C40.8362324,41.6607904 35.5970585,45.9319315 28.6442899,46.6232144 C21.6915214,47.3144973 15.6488446,44.154347 15.197898,39.5787128 C14.7469514,34.9948495 20.059916,30.7237084 27.004486,30.0324256 C27.8735831,29.950131 28.6688875,29.9336709 29.496988,29.9665891 Z M25.5614586,34.3776322 C23.183744,34.5916017 20.9372116,35.9577073 19.9205332,37.9328012 C18.5348994,40.6238672 19.9041362,43.6029661 23.0689567,44.582284 C26.340366,45.5945202 30.1857056,44.0638213 31.5303448,41.1587879 C32.8503864,38.3195909 31.1613894,35.3734082 27.9227762,34.5751416 C27.1438688,34.3776322 26.356763,34.3035667 25.5614586,34.3776322 Z M24.052839,38.7228388 C24.3316067,38.7310678 24.5857748,38.8215935 24.8399449,38.9203482 C25.8648218,39.3400561 26.1845841,40.4428158 25.5614586,41.4221338 C24.9219361,42.3932227 23.5690963,42.8623069 22.5442194,42.4096807 C21.5357395,41.9652856 21.2487754,40.8542948 21.8882979,39.9078951 C22.3638421,39.2001542 23.2247386,38.7146097 24.052839,38.7228388 Z"
});
const WeiboIcon$1 = WeiboIcon;
function weiboLink(url, { title, image }) {
  assert(url, "weibo.url");
  return "http://service.weibo.com/share/share.php" + objectToGetParams({
    url,
    title,
    pic: image
  });
}
const WeiboShareButton = createShareButton(
  "weibo",
  weiboLink,
  (props) => ({
    title: props.title,
    image: props.image
  }),
  {
    windowWidth: 660,
    windowHeight: 550,
    windowPosition: "screenCenter"
  }
);
const WeiboShareButton$1 = WeiboShareButton;
const WhatsappIcon = createIcon({
  color: "#25D366",
  networkName: "whatsapp",
  path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
});
const WhatsappIcon$1 = WhatsappIcon;
function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function whatsappLink(url, { title, separator }) {
  assert(url, "whatsapp.url");
  return "https://" + (isMobileOrTablet() ? "api" : "web") + ".whatsapp.com/send" + objectToGetParams({
    text: title ? title + separator + url : url
  });
}
const WhatsappShareButton = createShareButton(
  "whatsapp",
  whatsappLink,
  (props) => ({
    title: props.title,
    separator: props.separator || " "
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const WhatsappShareButton$1 = WhatsappShareButton;
const WorkplaceIcon = createIcon({
  color: "#4326c4",
  networkName: "workplace",
  path: "M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z"
});
const WorkplaceIcon$1 = WorkplaceIcon;
function workplaceLink(url, { quote, hashtag }) {
  assert(url, "workplace.url");
  return "https://work.facebook.com/sharer.php" + objectToGetParams({
    u: url,
    quote,
    hashtag
  });
}
const WorkplaceShareButton = createShareButton(
  "workplace",
  workplaceLink,
  (props) => ({
    quote: props.quote,
    hashtag: props.hashtag
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const WorkplaceShareButton$1 = WorkplaceShareButton;
const XIcon = createIcon({
  color: "#000000",
  networkName: "X",
  path: "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
});
const XIcon$1 = XIcon;

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ })

};
;
//# sourceMappingURL=component---src-pages-publications-js.js.map