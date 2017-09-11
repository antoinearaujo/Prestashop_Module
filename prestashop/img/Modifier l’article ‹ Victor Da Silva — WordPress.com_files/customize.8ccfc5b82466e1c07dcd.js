webpackJsonp(["customize"],{

/***/ "./client/components/sidebar-navigation/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _selectors = __webpack_require__("./client/state/document-head/selectors.js");

var _actions = __webpack_require__("./client/state/ui/layout-focus/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
var SidebarNavigation = function (_React$Component) {
	(0, _inherits3.default)(SidebarNavigation, _React$Component);

	function SidebarNavigation(props) {
		(0, _classCallCheck3.default)(this, SidebarNavigation);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SidebarNavigation.__proto__ || (0, _getPrototypeOf2.default)(SidebarNavigation)).call(this, props));

		_this.toggleSidebar = _this.toggleSidebar.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(SidebarNavigation, [{
		key: 'toggleSidebar',
		value: function toggleSidebar(event) {
			event.preventDefault();
			this.props.setLayoutFocus('sidebar');
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'header',
				{ className: 'current-section' },
				_react2.default.createElement(
					'a',
					{ onClick: this.toggleSidebar, className: this.props.linkClassName },
					_react2.default.createElement(_gridicons2.default, { icon: 'chevron-left' }),
					this.props.children,
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'p',
							{ className: 'current-section__' + this.props.sectionName + '-title' },
							this.props.sectionTitle
						),
						_react2.default.createElement(
							'h1',
							{ className: 'current-section__section-title' },
							this.props.title
						)
					)
				)
			);
		}
	}]);
	return SidebarNavigation;
}(_react2.default.Component); /**
                               * External dependencies
                               */


SidebarNavigation.propTypes = {
	title: _react.PropTypes.string,
	linkClassName: _react.PropTypes.string,
	sectionTitle: _react.PropTypes.string,
	sectionName: _react.PropTypes.string.isRequired,
	setLayoutFocus: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		title: (0, _selectors.getDocumentHeadTitle)(state)
	};
}, { setLayoutFocus: _actions.setLayoutFocus })(SidebarNavigation);
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/wporg/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _superagent = __webpack_require__("./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

var _jsonp = __webpack_require__("./client/lib/wporg/jsonp.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var debug = (0, _debug2.default)('wporg');

/**
 * Constants
 */
/**
 * External dependencies
 */
var _WPORG_PLUGINS_LIST = 'https://api.wordpress.org/plugins/info/1.1/?action=query_plugins',
    _DEFAULT_PAGE_SIZE = 24,
    _DEFAULT_CATEGORY = 'all',
    _DEFAULT_FIRST_PAGE = 1;

var _WPORG_THEMES_ENDPOINT = 'https://api.wordpress.org/themes/info/1.1/';

function getWporgLocaleCode() {
	var currentLocaleCode, wpOrgLocaleCode;

	currentLocaleCode = _i18nCalypso2.default.getLocaleSlug();
	wpOrgLocaleCode = (0, _find3.default)((0, _config2.default)('languages'), { langSlug: currentLocaleCode }).wpLocale;

	if (wpOrgLocaleCode === '') {
		wpOrgLocaleCode = currentLocaleCode;
	}

	return wpOrgLocaleCode;
}

module.exports = {

	/**
  * If successful, will call the provided callback with an object with plugin details.
  * @param {string} pluginSlug The plugin identifier.
  * @param {function} callback Callback that gets executed after the XHR returns the results.
  */
	fetchPluginInformation: function fetchPluginInformation(pluginSlug, callback) {
		var baseUrl,
		    query = { fields: 'icons,banners,compatibility,ratings,-contributors', locale: getWporgLocaleCode() };

		pluginSlug = pluginSlug.replace(new RegExp('.php$'), '');

		baseUrl = 'https://api.wordpress.org/plugins/info/1.0/' + pluginSlug + '.jsonp';
		(0, _jsonp2.default)(baseUrl, query, function (error, data) {
			if (error) {
				debug('error downloading plugin details from .org: %s', error);
				callback(error, null);
				return;
			}

			if (!data || !data.slug) {
				debug('unrecognized format fetching plugin details from .org: %s', data);
				callback(new Error('Unrecognized response format'), null);
				return;
			}

			callback(null, data);
		});
	},
	fetchPluginsList: function fetchPluginsList(options, callback) {
		var payload;
		// default variables;
		options.page = options.page || _DEFAULT_FIRST_PAGE;
		options.pageSize = options.pageSize || _DEFAULT_PAGE_SIZE;
		options.category = options.category || _DEFAULT_CATEGORY;
		options.search = options.search;

		payload = 'request[page]=' + options.page + '&request[per_page]=' + options.pageSize + '&request[fields][icons]=1&request[fields][banners]=1' + '&request[fields][compatibility]=1&request[fields][tested]=0' + '&request[fields][requires]=0&request[fields][sections]=0';

		if (options.search) {
			payload += '&request[search]=' + options.search;
		} else {
			payload += '&request[browse]=' + options.category;
		}
		_superagent2.default.post(_WPORG_PLUGINS_LIST).set('Accept', 'application/json').send(encodeURI(payload)).end(function (err, data) {
			callback(err, data.body);
		});
	},
	/**
  * Get information about a given theme from the WordPress.org API.
  * If provided with a callback, will call that on succes with an object with theme details.
  * Otherwise, will return a promise.
  *
  * @param {string}     themeId  The theme identifier.
  * @returns {Promise.<Object>}  A promise that returns a `theme` object
  */
	fetchThemeInformation: function fetchThemeInformation(themeId) {
		var query = {
			action: 'theme_information',
			// Return an `author` object containing `user_nicename` and `display_name` attrs.
			// This is for consistency with WP.com, which always returns the display name as `author`.
			'request[fields][extended_author]': true,
			'request[slug]': themeId
		};
		return _superagent2.default.get(_WPORG_THEMES_ENDPOINT).set('Accept', 'application/json').query(query).then(function (_ref) {
			var body = _ref.body;
			return body;
		});
	},
	/**
  * Get information about a given theme from the WordPress.org API.
  *
  * @param  {Object}        options         Theme query
  * @param  {String}        options.search  Search string
  * @param  {Number}        options.number  How many themes to return per page
  * @param  {Number}        options.page    Which page of matching themes to return
  * @returns {Promise.<Object>}             A promise that returns an object containing a `themes` array and an `info` object
  */
	fetchThemesList: function fetchThemesList() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var search = options.search,
		    page = options.page,
		    number = options.number;

		var query = {
			action: 'query_themes',
			// Return an `author` object containing `user_nicename` and `display_name` attrs.
			// This is for consistency with WP.com, which always returns the display name as `author`.
			'request[fields][extended_author]': true,
			'request[search]': search,
			'request[page]': page,
			'request[per_page]:': number
		};

		return _superagent2.default.get(_WPORG_THEMES_ENDPOINT).set('Accept', 'application/json').query(query).then(function (_ref2) {
			var body = _ref2.body;
			return body;
		});
	}
};

/***/ }),

/***/ "./client/lib/wporg/jsonp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Simple jsonp module that works with the slightly unconventional api.wordpress.org api. Highly inspired by http://github.com/webmodules/jsonp
 */

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('jsonp'),
    qs = __webpack_require__("./node_modules/qs/lib/index.js");

/**
 * Module exports.
 */
module.exports = jsonp;

/**
 * Callback index.
 */
var count = 0;

/**
 * Noop function. Does nothing.
 */
function noop() {}

/**
 * JSONP handler
 *
 * @param {String} url
 * @param {Object} query params
 * @param {Function} optional callback
 */
function jsonp(url, query, fn) {
	var prefix = '__jp',
	    timeout = 60000,
	    enc = encodeURIComponent,
	    target = document.getElementsByTagName('script')[0] || document.head,
	    script,
	    timer,
	    id;

	// generate a unique id for this request
	id = prefix + count++;

	if (timeout) {
		timer = setTimeout(function () {
			cleanup();
			if (fn) {
				fn(new Error('Timeout'));
			}
		}, timeout);
	}

	function cleanup() {
		if (script.parentNode) {
			script.parentNode.removeChild(script);
		}

		window[id] = noop;
		if (timer) {
			clearTimeout(timer);
		}
	}

	function cancel() {
		if (window[id]) {
			cleanup();
		}
	}

	window[id] = function (data) {
		debug('jsonp got', data);
		cleanup();
		if (fn) {
			fn(null, data);
		}
	};

	// add qs component
	url += '=' + enc(id) + '?' + qs.stringify(query);

	debug('jsonp req "%s"', url);

	// create script
	script = document.createElement('script');
	script.src = url;
	target.parentNode.insertBefore(script, target);

	return cancel;
}

/***/ }),

/***/ "./client/my-sites/customize/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defer2 = __webpack_require__("./node_modules/lodash/defer.js");

var _defer3 = _interopRequireDefault(_defer2);

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _cart = __webpack_require__("./client/lib/upgrades/actions/cart.js");

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _cartItems = __webpack_require__("./client/lib/cart-values/cart-items.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomizeActions = {
	purchase: function purchase(id, site) {
		(0, _cart.addItem)((0, _cartItems.themeItem)(id, 'customizer'));

		(0, _helpers.trackClick)('customizer', 'purchase');

		(0, _defer3.default)(function () {
			(0, _page2.default)('/checkout/' + site.slug);

			_dispatcher2.default.handleViewAction({
				type: 'THEME_PURCHASE_WITH_CUSTOMIZER',
				id: id,
				site: site
			});
		});
	},

	// TODO: Once this entire module is converted to Redux,
	// `themeActivated` shouldn't be passed as an argument anymore,
	// but directly imported and dispatch()ed from inside `activated()`,
	// which needs to be turned into a Redux thunk.
	activated: function activated(stylesheet, site, themeActivated) {
		(0, _helpers.trackClick)('customizer', 'activate');

		(0, _page2.default)('/themes/' + site.slug);

		themeActivated(stylesheet, site.ID, 'customizer');
	},

	close: function close(previousPath) {
		if (previousPath.indexOf('/themes') > -1) {
			(0, _helpers.trackClick)('customizer', 'close');
		}

		_dispatcher2.default.handleViewAction({
			type: 'CLOSED_CUSTOMIZER',
			previousPath: previousPath
		});
	}
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


module.exports = CustomizeActions;

/***/ }),

/***/ "./client/my-sites/customize/controller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.customize = customize;

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _path = __webpack_require__("./client/lib/route/path.js");

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _actions = __webpack_require__("./client/state/document-head/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function customize(context) {
	var CustomizeComponent = __webpack_require__("./client/my-sites/customize/main.jsx"),
	    basePath = (0, _path.sectionify)(context.path);

	_analytics2.default.pageView.record(basePath, 'Customizer');

	// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
	context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('Customizer', { textOnly: true })));

	_reactDom2.default.render(_react2.default.createElement(_reactRedux.Provider, { store: context.store }, _react2.default.createElement(CustomizeComponent, {
		domain: context.params.domain || '',
		pathname: context.pathname,
		prevPath: context.prevPath || '',
		query: context.query,
		panel: context.params.panel
	})), document.getElementById('primary'));
}

/**
 * Internal Dependencies
 */
/**
 * External Dependencies
 */

/***/ }),

/***/ "./client/my-sites/customize/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  if (_config2.default.isEnabled('manage/customize')) {
    (0, _page2.default)('/customize/:panel([^\.]+)?', _controller.siteSelection, _controller.sites);
    (0, _page2.default)('/customize/:panel?/:domain', _controller.siteSelection, _controller.navigation, _controller2.customize);
  }
};

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _controller = __webpack_require__("./client/my-sites/controller.js");

var _controller2 = __webpack_require__("./client/my-sites/customize/controller.js");

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
module.exports = exports['default']; /**
                                      * External dependencies
                                      */

/***/ }),

/***/ "./client/my-sites/customize/loading-panel.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _spinner = __webpack_require__("./client/components/spinner/index.jsx");

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'CustomizerLoadingPanel',

	propTypes: {
		isLoaded: _react2.default.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			isLoaded: false
		};
	},

	render: function render() {
		var noticeClassNames = (0, _classnames2.default)('customizer-loading-panel__notice', {
			'is-iframe-loaded': this.props.isLoaded
		});

		return _react2.default.createElement(
			'div',
			{ className: noticeClassNames },
			_react2.default.createElement(
				'div',
				{ className: 'customizer-loading-panel__notice-label' },
				_react2.default.createElement(_spinner2.default, null),
				this.translate('Loading the Customizer…')
			)
		);
	}
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/customize/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _startsWith2 = __webpack_require__("./node_modules/lodash/startsWith.js");

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _cloneDeep2 = __webpack_require__("./node_modules/lodash/cloneDeep.js");

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _url = __webpack_require__("./node_modules/url/url.js");

var _url2 = _interopRequireDefault(_url);

var _qs = __webpack_require__("./node_modules/qs/lib/index.js");

var _qs2 = _interopRequireDefault(_qs);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _notices = __webpack_require__("./client/notices/index.js");

var _notices2 = _interopRequireDefault(_notices);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _loadingPanel = __webpack_require__("./client/my-sites/customize/loading-panel.jsx");

var _loadingPanel2 = _interopRequireDefault(_loadingPanel);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _actions = __webpack_require__("./client/my-sites/customize/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _actions3 = __webpack_require__("./client/state/themes/actions.js");

var _panels = __webpack_require__("./client/my-sites/customize/panels.js");

var _getMenusUrl = __webpack_require__("./client/state/selectors/get-menus-url.js");

var _getMenusUrl2 = _interopRequireDefault(_getMenusUrl);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('calypso:my-sites:customize');

// Used to allow timing-out the iframe loading process


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var loadingTimer = void 0;

var Customize = function (_React$Component) {
	(0, _inherits3.default)(Customize, _React$Component);

	function Customize(props) {
		(0, _classCallCheck3.default)(this, Customize);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Customize.__proto__ || (0, _getPrototypeOf2.default)(Customize)).call(this, props));

		_this.redirectIfNeeded = function (pathname) {
			var _this$props = _this.props,
			    menusUrl = _this$props.menusUrl,
			    isJetpack = _this$props.isJetpack,
			    customizerUrl = _this$props.customizerUrl;

			if ((0, _startsWith3.default)(pathname, '/customize/menus') && pathname !== menusUrl) {
				(0, _page2.default)(menusUrl);
			}
			if (isJetpack) {
				(0, _page2.default)(customizerUrl);
			}
		};

		_this.canUserCustomizeDomain = function () {
			var site = _this.props.site;

			if (!site) {
				debug('domain is not in the user\'s site list', _this.props.domain);
				return false;
			}
			if (site.capabilities && site.capabilities.edit_theme_options) {
				return true;
			}
			debug('user cannot customize domain', _this.props.domain);
			return false;
		};

		_this.getPreviousPath = function () {
			var path = _this.props.prevPath;
			if (!path || /^\/customize\/?/.test(path)) {
				path = '/stats';
				if (_this.props.domain) {
					path += '/' + _this.props.domain;
				}
			}
			return path;
		};

		_this.goBack = function () {
			var path = _this.getPreviousPath();

			_actions2.default.close(path);

			debug('returning to previous page', path);
			_page2.default.back(path);
		};

		_this.waitForLoading = function () {
			debug('waiting for iframe to load');
			_this.cancelWaitingTimer();
			loadingTimer = setTimeout(_this.cancelCustomizer, 25000);
		};

		_this.cancelWaitingTimer = function () {
			if (loadingTimer) {
				clearTimeout(loadingTimer);
			}
		};

		_this.cancelCustomizer = function () {
			if (_this.state.iframeLoaded) {
				return;
			}
			debug('iframe loading timed out');
			_this.setState({ timeoutError: true });
		};

		_this.getUrl = function () {
			var site = _this.props.site;

			if (!site) {
				return false;
			}
			var domain = '//' + site.domain;
			if (site.options && site.options.unmapped_url) {
				domain = site.options.unmapped_url;
			}

			// Customizer
			if (site.options && site.options.admin_url) {
				return site.options.admin_url + 'customize.php?' + _this.buildCustomizerQuery();
			}
			return domain + '/wp-admin/customize.php?' + _this.buildCustomizerQuery();
		};

		_this.buildCustomizerQuery = function () {
			var _window$location = window.location,
			    protocol = _window$location.protocol,
			    host = _window$location.host;

			var query = (0, _cloneDeep3.default)(_this.props.query);
			var _this$props2 = _this.props,
			    panel = _this$props2.panel,
			    site = _this$props2.site;


			query.return = protocol + '//' + host + _this.getPreviousPath();
			query.calypso = true;
			query.calypsoOrigin = protocol + '//' + host;
			if (site.options && site.options.frame_nonce) {
				query['frame-nonce'] = site.options.frame_nonce;
			}

			var focus = (0, _panels.getCustomizerFocus)(panel);
			if (focus) {
				(0, _assign2.default)(query, focus);
			}

			if (panel === 'amp') {
				query.customize_amp = 1;
			}

			return _qs2.default.stringify(query);
		};

		_this.listenToCustomizer = function () {
			window.removeEventListener('message', _this.onMessage, false);
			window.addEventListener('message', _this.onMessage, false);
		};

		_this.onMessage = function (event) {
			var site = _this.props.site;

			if (!site || !site.options) {
				debug('ignoring message received from iframe because the site data cannot be found');
				return;
			}

			var parsedOrigin = _url2.default.parse(event.origin, true);
			var parsedSite = _url2.default.parse(site.options.unmapped_url);

			if (parsedOrigin.hostname !== _this.props.domain && parsedOrigin.hostname !== parsedSite.hostname) {
				debug('ignoring message received from iframe with incorrect origin', event.origin);
				return;
			}
			// Ensure we have a string that's JSON.parse-able
			if (typeof event.data !== 'string' || event.data[0] !== '{') {
				debug('ignoring message received from iframe with bad data', event.data);
				return;
			}
			var message = JSON.parse(event.data);
			if (message.calypso && message.command) {
				switch (message.command) {
					case 'back':
						debug('iframe says it is done', message);
						if (message.error) {
							_this.setState({ errorFromIframe: message.error });
							return;
						}
						if (message.warning) {
							_notices2.default.warning(message.warning, { displayOnNextPage: true });
						}
						if (message.info) {
							_notices2.default.info(message.info, { displayOnNextPage: true });
						}
						if (message.success) {
							_notices2.default.success(message.success, { displayOnNextPage: true });
						}
						_this.goBack();
						break;
					case 'loading':
						debug('iframe says it is starting loading customizer');
						_this.cancelWaitingTimer();
						break;
					case 'loaded':
						debug('iframe says it is finished loading customizer');
						_this.cancelWaitingTimer();
						_this.setState({ iframeLoaded: true });
						break;
					case 'activated':
						_actions2.default.activated(message.theme.stylesheet, site, _this.props.themeActivated);
						break;
					case 'purchased':
						var themeSlug = message.theme.stylesheet.split('/')[1];
						_actions2.default.purchase(themeSlug, site);
						break;
				}
			}
		};

		_this.renderErrorPage = function (error) {
			return _react2.default.createElement(
				'div',
				{ className: 'main main-column customize', role: 'main' },
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(_emptyContent2.default, {
					title: error.title,
					line: error.line,
					action: error.action,
					actionURL: error.actionURL,
					actionCallback: error.actionCallback
				})
			);
		};

		_this.state = {
			iframeLoaded: false,
			errorFromIframe: false,
			timeoutError: false
		};
		return _this;
	}

	(0, _createClass3.default)(Customize, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.redirectIfNeeded(this.props.pathname);
			this.listenToCustomizer();
			this.waitForLoading();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (window) {
				window.scrollTo(0, 0);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (window) {
				window.removeEventListener('message', this.onMessage, false);
			}
			this.cancelWaitingTimer();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.redirectIfNeeded(nextProps.pathname);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.timeoutError) {
				this.cancelWaitingTimer();
				return this.renderErrorPage({
					title: this.props.translate('Sorry, the customizing tools did not load correctly'),
					action: this.props.translate('Try again'),
					actionCallback: function actionCallback() {
						window.location.reload();
					}
				});
			}

			if (this.state.errorFromIframe) {
				this.cancelWaitingTimer();
				return this.renderErrorPage({
					title: this.state.errorFromIframe
				});
			}

			if (!this.props.site) {
				return _react2.default.createElement(
					'div',
					{ className: 'main main-column customize is-iframe', role: 'main' },
					_react2.default.createElement(_loadingPanel2.default, null)
				);
			}

			if (!this.canUserCustomizeDomain()) {
				this.cancelWaitingTimer();
				return this.renderErrorPage({
					title: this.props.translate('Sorry, you do not have enough permissions to customize this site')
				});
			}

			var iframeUrl = this.getUrl();

			if (iframeUrl) {
				debug('loading iframe URL', iframeUrl);
				var iframeClassName = this.state.iframeLoaded ? 'is-iframe-loaded' : '';
				// The loading message here displays while the iframe is loading. When the
				// loading completes, the customizer will send a postMessage back to this
				// component. If the loading takes longer than 25 seconds (see
				// waitForLoading above) then an error will be shown.
				return _react2.default.createElement(
					'div',
					{ className: 'main main-column customize is-iframe', role: 'main' },
					_react2.default.createElement(_loadingPanel2.default, { isLoaded: this.state.iframeLoaded }),
					_react2.default.createElement('iframe', { className: iframeClassName, src: iframeUrl })
				);
			}

			// This should never be shown, because getUrl will always return a value if
			// canUserCustomizeDomain returns true. But just in case...
			this.cancelWaitingTimer();
			return this.renderErrorPage({
				title: this.props.translate('Sorry, the customizing tools did not load correctly'),
				action: this.props.translate('Try again'),
				actionCallback: function actionCallback() {
					window.location.reload();
				}
			});
		}
	}]);
	return Customize;
}(_react2.default.Component);

Customize.propTypes = {
	domain: _react.PropTypes.string.isRequired,
	site: _react.PropTypes.object.isRequired,
	pathname: _react.PropTypes.string.isRequired,
	prevPath: _react.PropTypes.string,
	query: _react.PropTypes.object,
	themeActivated: _react.PropTypes.func.isRequired,
	panel: _react.PropTypes.string,
	isJetpack: _react.PropTypes.bool,
	customizerUrl: _react.PropTypes.string,
	translate: _react.PropTypes.func.isRequired
};
Customize.defaultProps = {
	domain: '',
	prevPath: null
};
exports.default = (0, _reactRedux.connect)(function (state) {
	var site = (0, _selectors.getSelectedSite)(state);
	var siteId = (0, _get3.default)(site, 'ID');
	return {
		site: site,
		menusUrl: (0, _getMenusUrl2.default)(state, siteId),
		isJetpack: (0, _selectors2.isJetpackSite)(state, siteId),
		// TODO: include panel from props?
		customizerUrl: (0, _selectors2.getCustomizerUrl)(state, siteId)
	};
}, { themeActivated: _actions3.themeActivated })((0, _i18nCalypso.localize)(Customize));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sidebar-navigation/sidebar-navigation.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _sidebarNavigation = __webpack_require__("./client/components/sidebar-navigation/index.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _siteIcon = __webpack_require__("./client/blocks/site-icon/index.jsx");

var _siteIcon2 = _interopRequireDefault(_siteIcon);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var MySitesSidebarNavigation = function MySitesSidebarNavigation(_ref) {
	var site = _ref.site,
	    translate = _ref.translate;

	var currentSiteTitle = translate('All Sites'),
	    allSitesClass = 'all-sites';

	if (site) {
		currentSiteTitle = site.title;
		allSitesClass = null;
	}

	return _react2.default.createElement(
		_sidebarNavigation2.default,
		{
			linkClassName: allSitesClass,
			sectionName: 'site',
			sectionTitle: currentSiteTitle },
		site && _react2.default.createElement(_siteIcon2.default, { site: site })
	);
};

/**
 * Internal Dependencies
 */
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		site: (0, _selectors.getSelectedSite)(state)
	};
})((0, _i18nCalypso.localize)(MySitesSidebarNavigation));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _mapValues2 = __webpack_require__("./node_modules/lodash/mapValues.js");

var _mapValues3 = _interopRequireDefault(_mapValues2);

exports.trackClick = trackClick;
exports.addTracking = addTracking;
exports.getAnalyticsData = getAnalyticsData;

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _toTitleCase = __webpack_require__("./node_modules/to-title-case/index.js");

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _path = __webpack_require__("./client/lib/route/path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function trackClick(componentName, eventName) {
	var verb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'click';

	var stat = componentName + ' ' + eventName + ' ' + verb;
	_analytics2.default.ga.recordEvent('Themes', (0, _toTitleCase2.default)(stat));
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function addTracking(options) {
	return (0, _mapValues3.default)(options, appendActionTracking);
}

function appendActionTracking(option, name) {
	var _action = option.action;


	return (0, _assign2.default)({}, option, {
		action: function action(t) {
			_action && _action(t);
			trackClick('more button', name);
		}
	});
}

function getAnalyticsData(path, tier, site_id) {
	var basePath = (0, _path.sectionify)(path);
	var analyticsPageTitle = 'Themes';

	if (tier) {
		basePath += '/type/:tier';
	}

	if (site_id) {
		basePath += '/:site_id';
		analyticsPageTitle += ' > Single Site';
	}

	if (tier) {
		analyticsPageTitle += ' > Type > ' + (0, _toTitleCase2.default)(tier);
	}

	return { basePath: basePath, analyticsPageTitle: analyticsPageTitle };
}

/***/ }),

/***/ "./client/state/themes/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _endsWith2 = __webpack_require__("./node_modules/lodash/endsWith.js");

var _endsWith3 = _interopRequireDefault(_endsWith2);

var _delay2 = __webpack_require__("./node_modules/lodash/delay.js");

var _delay3 = _interopRequireDefault(_delay2);

var _property2 = __webpack_require__("./node_modules/lodash/property.js");

var _property3 = _interopRequireDefault(_property2);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

exports.setBackPath = setBackPath;
exports.receiveTheme = receiveTheme;
exports.receiveThemes = receiveThemes;
exports.requestThemes = requestThemes;
exports.themeRequestFailure = themeRequestFailure;
exports.requestTheme = requestTheme;
exports.requestActiveTheme = requestActiveTheme;
exports.activate = activate;
exports.activateTheme = activateTheme;
exports.themeActivated = themeActivated;
exports.installTheme = installTheme;
exports.clearActivated = clearActivated;
exports.tryAndCustomize = tryAndCustomize;
exports.installAndTryAndCustomizeTheme = installAndTryAndCustomizeTheme;
exports.tryAndCustomizeTheme = tryAndCustomizeTheme;
exports.installAndActivateTheme = installAndActivateTheme;
exports.uploadTheme = uploadTheme;
exports.clearThemeUpload = clearThemeUpload;
exports.initiateThemeTransfer = initiateThemeTransfer;
exports.pollThemeTransferStatus = pollThemeTransferStatus;
exports.deleteTheme = deleteTheme;
exports.confirmDelete = confirmDelete;
exports.setThemePreviewOptions = setThemePreviewOptions;
exports.showThemePreview = showThemePreview;
exports.hideThemePreview = hideThemePreview;
exports.requestThemeFilters = requestThemeFilters;

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _wporg = __webpack_require__("./client/lib/wporg/index.js");

var _wporg2 = _interopRequireDefault(_wporg);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

var _utils = __webpack_require__("./client/state/themes/utils.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _isSiteAutomatedTransfer = __webpack_require__("./client/state/selectors/is-site-automated-transfer.js");

var _isSiteAutomatedTransfer2 = _interopRequireDefault(_isSiteAutomatedTransfer);

var _prependThemeFilterKeys = __webpack_require__("./client/state/selectors/prepend-theme-filter-keys.js");

var _prependThemeFilterKeys2 = _interopRequireDefault(_prependThemeFilterKeys);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _accept = __webpack_require__("./client/lib/accept/index.js");

var _accept2 = _interopRequireDefault(_accept);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('calypso:themes:actions'); //eslint-disable-line no-unused-vars

// Set destination for 'back' button on theme sheet


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function setBackPath(path) {
	return {
		type: _actionTypes.THEME_BACK_PATH_SET,
		path: path
	};
}

/**
 * Returns an action object to be used in signalling that a theme object has
 * been received.
 *
 * @param  {Object} theme  Theme received
 * @param  {Number} siteId ID of site for which themes have been received
 * @return {Object}        Action object
 */
function receiveTheme(theme, siteId) {
	return receiveThemes([theme], siteId);
}

/**
 * Returns an action object to be used in signalling that theme objects from
 * a query have been received.
 *
 * @param {Array}  themes Themes received
 * @param {number} siteId ID of site for which themes have been received
 * @param {?Object} query Theme query used in the API request
 * @param {?number} foundCount Number of themes returned by the query
 * @return {Object} Action object
 */
function receiveThemes(themes, siteId, query, foundCount) {
	return function (dispatch, getState) {
		var filteredThemes = themes;
		var found = foundCount;

		if ((0, _selectors2.isJetpackSite)(getState(), siteId)) {
			/*
    * We need to do client-side filtering for Jetpack sites because:
    * 1) Jetpack theme API does not support search queries
    * 2) We need to filter out all wpcom themes to show an 'Uploaded' list
    */
			var filterWpcom = (0, _selectors.shouldFilterWpcomThemes)(getState(), siteId);
			filteredThemes = (0, _filter3.default)(themes, function (theme) {
				return (0, _utils.isThemeMatchingQuery)(query, theme) && !(filterWpcom && (0, _utils.isThemeFromWpcom)(theme));
			});
			// Jetpack API returns all themes in one response (no paging)
			found = filteredThemes.length;
		}

		dispatch({
			type: _actionTypes.THEMES_REQUEST_SUCCESS,
			themes: filteredThemes,
			siteId: siteId,
			query: query,
			found: found
		});
	};
}

/**
 * Triggers a network request to fetch themes for the specified site and query.
 *
 * @param  {Number|String} siteId        Jetpack site ID or 'wpcom' for any WPCOM site
 * @param  {Object}        query         Theme query
 * @param  {String}        query.search  Search string
 * @param  {String}        query.tier    Theme tier: 'free', 'premium', or '' (either)
 * @param  {String}        query.filter  Filter
 * @param  {Number}        query.number  How many themes to return per page
 * @param  {Number}        query.offset  At which item to start the set of returned themes
 * @param  {Number}        query.page    Which page of matching themes to return
 * @return {Function}                    Action thunk
 */
function requestThemes(siteId) {
	var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return function (dispatch, getState) {
		var startTime = new Date().getTime();

		dispatch({
			type: _actionTypes.THEMES_REQUEST,
			siteId: siteId,
			query: query
		});

		var request = void 0;

		if (siteId === 'wporg') {
			request = function request() {
				return _wporg2.default.fetchThemesList(query);
			};
		} else if (siteId === 'wpcom') {
			request = function request() {
				return _wp2.default.undocumented().themes(null, (0, _extends3.default)({}, query, { apiVersion: '1.2' }));
			};
		} else {
			request = function request() {
				return _wp2.default.undocumented().themes(siteId, (0, _extends3.default)({}, query, { apiVersion: '1' }));
			};
		}

		// WP.com returns the number of results in a `found` attr, so we can use that right away.
		// WP.org returns an `info` object containing a `results` number, so we destructure that
		// and use it as default value for `found`.
		return request().then(function (_ref) {
			var rawThemes = _ref.themes,
			    _ref$info = _ref.info;
			_ref$info = _ref$info === undefined ? {} : _ref$info;
			var results = _ref$info.results,
			    _ref$found = _ref.found,
			    found = _ref$found === undefined ? results : _ref$found;

			var themes = void 0;
			if (siteId === 'wporg') {
				themes = (0, _map3.default)(rawThemes, _utils.normalizeWporgTheme);
			} else if (siteId === 'wpcom') {
				themes = (0, _map3.default)(rawThemes, _utils.normalizeWpcomTheme);
			} else {
				// Jetpack Site
				themes = (0, _map3.default)(rawThemes, _utils.normalizeJetpackTheme);
			}

			if ((query.search || query.filter) && query.page === 1) {
				var responseTime = new Date().getTime() - startTime;
				var search_taxonomies = (0, _prependThemeFilterKeys2.default)(getState(), query.filter);
				var search_term = search_taxonomies + (query.search || '');
				var trackShowcaseSearch = (0, _actions.recordTracksEvent)('calypso_themeshowcase_search', {
					search_term: search_term || null,
					search_taxonomies: search_taxonomies,
					tier: query.tier,
					response_time_in_ms: responseTime,
					result_count: found,
					results_first_page: themes.map((0, _property3.default)('id')).join()
				});
				dispatch(trackShowcaseSearch);
			}

			dispatch(receiveThemes(themes, siteId, query, found));
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.THEMES_REQUEST_FAILURE,
				siteId: siteId,
				query: query,
				error: error
			});
		});
	};
}

function themeRequestFailure(siteId, themeId, error) {
	return {
		type: _actionTypes.THEME_REQUEST_FAILURE,
		siteId: siteId,
		themeId: themeId,
		error: error
	};
}

/**
 * Triggers a network request to fetch a specific theme from a site.
 *
 * @param  {String}   themeId Theme ID
 * @param  {Number}   siteId  Site ID
 * @return {Function}         Action thunk
 */
function requestTheme(themeId, siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.THEME_REQUEST,
			siteId: siteId,
			themeId: themeId
		});

		if (siteId === 'wporg') {
			return _wporg2.default.fetchThemeInformation(themeId).then(function (theme) {
				// Apparently, the WP.org REST API endpoint doesn't 404 but instead returns false
				// if a theme can't be found.
				if (!theme) {
					throw 'Theme not found'; // Will be caught by .catch() below
				}
				dispatch(receiveTheme((0, _utils.normalizeWporgTheme)(theme), siteId));
				dispatch({
					type: _actionTypes.THEME_REQUEST_SUCCESS,
					siteId: siteId,
					themeId: themeId
				});
			}).catch(function (error) {
				dispatch({
					type: _actionTypes.THEME_REQUEST_FAILURE,
					siteId: siteId,
					themeId: themeId,
					error: error
				});
			});
		}

		if (siteId === 'wpcom') {
			return _wp2.default.undocumented().themeDetails(themeId).then(function (theme) {
				dispatch(receiveTheme((0, _utils.normalizeWpcomTheme)(theme), siteId));
				dispatch({
					type: _actionTypes.THEME_REQUEST_SUCCESS,
					siteId: siteId,
					themeId: themeId
				});
			}).catch(function (error) {
				dispatch({
					type: _actionTypes.THEME_REQUEST_FAILURE,
					siteId: siteId,
					themeId: themeId,
					error: error
				});
			});
		}

		// See comment next to lib/wpcom-undocumented/lib/undocumented#jetpackThemeDetails() why we can't
		// the regular themeDetails() method for Jetpack sites yet.
		return _wp2.default.undocumented().jetpackThemeDetails(themeId, siteId).then(function (_ref2) {
			var themes = _ref2.themes;

			dispatch(receiveThemes((0, _map3.default)(themes, _utils.normalizeJetpackTheme), siteId));
			dispatch({
				type: _actionTypes.THEME_REQUEST_SUCCESS,
				siteId: siteId,
				themeId: themeId
			});
		}).catch(function (error) {
			dispatch(themeRequestFailure(siteId, themeId, error));
		});
	};
}

/**
 * This action queries wpcom endpoint for active theme for site.
 * If request success information about active theme is stored in Redux themes subtree.
 * In case of error, error is stored in Redux themes subtree.
 *
 * @param  {Number}   siteId Site for which to check active theme
 * @return {Function}        Redux thunk with request action
 */
function requestActiveTheme(siteId) {
	return function (dispatch, getState) {
		dispatch({
			type: _actionTypes.ACTIVE_THEME_REQUEST,
			siteId: siteId
		});

		return _wp2.default.undocumented().activeTheme(siteId).then(function (theme) {
			debug('Received current theme', theme);
			// We want to store the theme object in the appropriate Redux subtree -- either 'wpcom'
			// for WPCOM sites, or siteId for Jetpack sites.
			var siteIdOrWpcom = (0, _selectors2.isJetpackSite)(getState(), siteId) ? siteId : 'wpcom';
			dispatch(receiveTheme(theme, siteIdOrWpcom));
			dispatch({
				type: _actionTypes.ACTIVE_THEME_REQUEST_SUCCESS,
				siteId: siteId,
				theme: theme
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.ACTIVE_THEME_REQUEST_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

/**
 * Triggers a network request to activate a specific theme on a given site.
 * If it's a Jetpack site, installs the theme prior to activation if it isn't already.
 *
 * @param  {String}   themeId   Theme ID
 * @param  {Number}   siteId    Site ID
 * @param  {String}   source    The source that is reuquesting theme activation, e.g. 'showcase'
 * @param  {Boolean}  purchased Whether the theme has been purchased prior to activation
 * @return {Function}           Action thunk
 */
function activate(themeId, siteId) {
	var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
	var purchased = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	return function (dispatch, getState) {
		if ((0, _selectors2.isJetpackSite)(getState(), siteId) && !(0, _selectors.getTheme)(getState(), siteId, themeId)) {
			var installId = suffixThemeIdForInstall(getState(), siteId, themeId);
			// If theme is already installed, installation will silently fail,
			// and it will just be activated.
			return dispatch(installAndActivateTheme(installId, siteId, source, purchased));
		}

		return dispatch(activateTheme(themeId, siteId, source, purchased));
	};
}

/**
 * Triggers a network request to activate a specific theme on a given site.
 *
 * @param  {String}   themeId   Theme ID
 * @param  {Number}   siteId    Site ID
 * @param  {String}   source    The source that is reuquesting theme activation, e.g. 'showcase'
 * @param  {Boolean}  purchased Whether the theme has been purchased prior to activation
 * @return {Function}           Action thunk
 */
function activateTheme(themeId, siteId) {
	var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
	var purchased = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	return function (dispatch) {
		dispatch({
			type: _actionTypes.THEME_ACTIVATE,
			themeId: themeId,
			siteId: siteId
		});

		return _wp2.default.undocumented().activateTheme(themeId, siteId).then(function (theme) {
			// Fall back to ID for Jetpack sites which don't return a stylesheet attr.
			var themeStylesheet = theme.stylesheet || themeId;
			dispatch(themeActivated(themeStylesheet, siteId, source, purchased));
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.THEME_ACTIVATE_FAILURE,
				themeId: themeId,
				siteId: siteId,
				error: error
			});
		});
	};
}

/**
 * Returns an action thunk to be used in signalling that a theme has been activated
 * on a given site. Careful, this action is different from most others here in that
 * expects a theme stylesheet string (not just a theme ID).
 *
 * @param  {String}   themeStylesheet Theme stylesheet string (*not* just a theme ID!)
 * @param  {Number}   siteId          Site ID
 * @param  {String}   source          The source that is reuquesting theme activation, e.g. 'showcase'
 * @param  {Boolean}  purchased       Whether the theme has been purchased prior to activation
 * @return {Function}                 Action thunk
 */
function themeActivated(themeStylesheet, siteId) {
	var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
	var purchased = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	var themeActivatedThunk = function themeActivatedThunk(dispatch, getState) {
		var action = {
			type: _actionTypes.THEME_ACTIVATE_SUCCESS,
			themeStylesheet: themeStylesheet,
			siteId: siteId
		};
		var previousThemeId = (0, _selectors.getActiveTheme)(getState(), siteId);
		var query = (0, _selectors.getLastThemeQuery)(getState(), siteId);
		var search_taxonomies = (0, _prependThemeFilterKeys2.default)(getState(), query.filter);
		var search_term = search_taxonomies + (query.search || '');
		var trackThemeActivation = (0, _actions.recordTracksEvent)('calypso_themeshowcase_theme_activate', {
			theme: (0, _utils.getThemeIdFromStylesheet)(themeStylesheet),
			previous_theme: previousThemeId,
			source: source,
			purchased: purchased,
			search_term: search_term || null,
			search_taxonomies: search_taxonomies
		});
		dispatch((0, _actions.withAnalytics)(trackThemeActivation, action));
	};
	return themeActivatedThunk; // it is named function just for testing purposes
}

/**
 * Triggers a network request to install a WordPress.org or WordPress.com theme on a Jetpack site.
 * To install a theme from WordPress.com, suffix the theme name with '-wpcom'. Note that this options
 * requires Jetpack 4.4
 *
 * @param  {String}   themeId Theme ID. If suffixed with '-wpcom', install from WordPress.com
 * @param  {String}   siteId  Jetpack Site ID
 * @return {Function}         Action thunk
 */
function installTheme(themeId, siteId) {
	return function (dispatch, getState) {
		dispatch({
			type: _actionTypes.THEME_INSTALL,
			siteId: siteId,
			themeId: themeId
		});

		return _wp2.default.undocumented().installThemeOnJetpack(siteId, themeId).then(function (theme) {
			dispatch(receiveTheme(theme, siteId));
			dispatch({
				type: _actionTypes.THEME_INSTALL_SUCCESS,
				siteId: siteId,
				themeId: themeId
			});

			// Install parent theme if theme requires one
			if ((0, _endsWith3.default)(themeId, '-wpcom')) {
				var parentThemeId = (0, _selectors.getWpcomParentThemeId)(getState(), themeId.replace('-wpcom', ''));
				if (parentThemeId) {
					return dispatch(installTheme(parentThemeId + '-wpcom', siteId));
				}
			}
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.THEME_INSTALL_FAILURE,
				siteId: siteId,
				themeId: themeId,
				error: error
			});
		});
	};
}

/**
 * Returns an action object to be used in signalling that theme activated status
 * for site should be cleared
 *
 * @param  {Number}   siteId    Site ID
 * @return {Object}        Action object
 */
function clearActivated(siteId) {
	return {
		type: _actionTypes.THEME_CLEAR_ACTIVATED,
		siteId: siteId
	};
}

/**
 * Switches to the customizer to preview a given theme.
 * If it's a Jetpack site, installs the theme prior to activation if it isn't already.
 *
 * @param  {String}   themeId   Theme ID
 * @param  {Number}   siteId    Site ID
 * @return {Function}           Action thunk
 */
function tryAndCustomize(themeId, siteId) {
	return function (dispatch, getState) {
		if ((0, _selectors2.isJetpackSite)(getState(), siteId) && !(0, _selectors.getTheme)(getState(), siteId, themeId)) {
			var installId = suffixThemeIdForInstall(getState(), siteId, themeId);
			// If theme is already installed, installation will silently fail,
			// and we just switch to the customizer.
			return dispatch(installAndTryAndCustomizeTheme(installId, siteId));
		}

		return dispatch(tryAndCustomizeTheme(themeId, siteId));
	};
}

/**
 * Triggers a network request to install theme on Jetpack site.
 * After installataion it switches page to the customizer
 * See installTheme doc for install options.
 * Requires Jetpack 4.4
 *
 * @param  {String}   themeId      WP.com Theme ID
 * @param  {String}   siteId       Jetpack Site ID
 * @return {Function}              Action thunk
 */
function installAndTryAndCustomizeTheme(themeId, siteId) {
	return function (dispatch) {
		return dispatch(installTheme(themeId, siteId)).then(function () {
			dispatch(tryAndCustomizeTheme(themeId, siteId));
		});
	};
}

/**
 * Triggers a switch to the try&customize page of theme.
 * When theme is not available dispatches FAILURE action
 * that trigers displaying error notice by notices middlewaere
 *
 * @param  {String}   themeId      WP.com Theme ID
 * @param  {String}   siteId       Jetpack Site ID
 * @return {Function}              Action thunk
 */
function tryAndCustomizeTheme(themeId, siteId) {
	return function (dispatch, getState) {
		(0, _page2.default)((0, _selectors.getThemeCustomizeUrl)(getState(), themeId, siteId));
	};
}

/**
 * Triggers a network request to install and activate a specific theme on a given
 * Jetpack site. If the themeId parameter is suffixed with '-wpcom', install the
 * theme from WordPress.com. Otherwise, install from WordPress.org.
 *
 * @param  {String}   themeId   Theme ID. If suffixed with '-wpcom', install theme from WordPress.com
 * @param  {Number}   siteId    Site ID
 * @param  {String}   source    The source that is reuquesting theme activation, e.g. 'showcase'
 * @param  {Boolean}  purchased Whether the theme has been purchased prior to activation
 * @return {Function}           Action thunk
 */
function installAndActivateTheme(themeId, siteId) {
	var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
	var purchased = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	return function (dispatch) {
		return dispatch(installTheme(themeId, siteId)).then(function () {
			// This will be called even if `installTheme` silently fails. We rely on
			// `activateTheme`'s own error handling here.
			dispatch(activateTheme(themeId, siteId, source, purchased));
		});
	};
}

/**
 * Triggers a theme upload to the given site.
 *
 * @param {Number} siteId -- Site to upload to
 * @param {File} file -- the theme zip to upload
 *
 * @return {Function} the action function
 */
function uploadTheme(siteId, file) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.THEME_UPLOAD_START,
			siteId: siteId
		});
		return _wp2.default.undocumented().uploadTheme(siteId, file, function (event) {
			dispatch({
				type: _actionTypes.THEME_UPLOAD_PROGRESS,
				siteId: siteId,
				loaded: event.loaded,
				total: event.total
			});
		}).then(function (theme) {
			dispatch(receiveTheme(theme, siteId));
			dispatch({
				type: _actionTypes.THEME_UPLOAD_SUCCESS,
				siteId: siteId,
				themeId: theme.id
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.THEME_UPLOAD_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

/**
 * Clears any state remaining from a previous
 * theme upload to the given site.
 *
 * @param {Number} siteId -- site to clear state for
 *
 * @return {Object} the action object to dispatch
 */
function clearThemeUpload(siteId) {
	return {
		type: _actionTypes.THEME_UPLOAD_CLEAR,
		siteId: siteId
	};
}

/**
 * Start an Automated Transfer with an uploaded theme.
 *
 * @param {Number} siteId -- the site to transfer
 * @param {File} file -- theme zip to upload
 * @param {String} plugin -- plugin slug
 *
 * @returns {Promise} for testing purposes only
 */
function initiateThemeTransfer(siteId, file, plugin) {
	var context = !!plugin ? 'plugins' : 'themes';
	return function (dispatch) {
		var themeInitiateRequest = {
			type: _actionTypes.THEME_TRANSFER_INITIATE_REQUEST,
			siteId: siteId
		};

		dispatch((0, _actions.withAnalytics)((0, _actions.recordTracksEvent)('calypso_automated_transfer_initiate_transfer', { plugin: plugin, context: context }), themeInitiateRequest));
		return _wp2.default.undocumented().initiateTransfer(siteId, plugin, file, function (event) {
			dispatch({
				type: _actionTypes.THEME_TRANSFER_INITIATE_PROGRESS,
				siteId: siteId,
				loaded: event.loaded,
				total: event.total
			});
		}).then(function (_ref3) {
			var transfer_id = _ref3.transfer_id;

			if (!transfer_id) {
				return dispatch(transferInitiateFailure(siteId, { error: 'initiate_failure' }, plugin));
			}
			var themeInitiateSuccessAction = {
				type: _actionTypes.THEME_TRANSFER_INITIATE_SUCCESS,
				siteId: siteId,
				transferId: transfer_id
			};
			dispatch((0, _actions.withAnalytics)((0, _actions.recordTracksEvent)('calypso_automated_transfer_initiate_success', { plugin: plugin, context: context }), themeInitiateSuccessAction));
			dispatch(pollThemeTransferStatus(siteId, transfer_id));
		}).catch(function (error) {
			dispatch(transferInitiateFailure(siteId, error, plugin));
		});
	};
}

// receive a transfer status
function transferStatus(siteId, transferId, status, message, themeId) {
	return {
		type: _actionTypes.THEME_TRANSFER_STATUS_RECEIVE,
		siteId: siteId,
		transferId: transferId,
		status: status,
		message: message,
		themeId: themeId
	};
}

// receive a transfer status error
function transferStatusFailure(siteId, transferId, error) {
	return {
		type: _actionTypes.THEME_TRANSFER_STATUS_FAILURE,
		siteId: siteId,
		transferId: transferId,
		error: error
	};
}

// receive a transfer initiation failure
function transferInitiateFailure(siteId, error, plugin) {
	var context = !!plugin ? 'plugin' : 'theme';
	return function (dispatch) {
		var themeInitiateFailureAction = {
			type: _actionTypes.THEME_TRANSFER_INITIATE_FAILURE,
			siteId: siteId,
			error: error
		};
		dispatch((0, _actions.withAnalytics)((0, _actions.recordTracksEvent)('calypso_automated_transfer_initiate_failure', { plugin: plugin, context: context }), themeInitiateFailureAction));
	};
}
/**
 * Make API calls to the transfer status endpoint until a status complete is received,
 * or an error is received, or the timeout is reached.
 *
 * The returned promise is only for testing purposes, and therefore is never rejected,
 * to avoid unhandled rejections in production.
 *
 * @param {Number} siteId -- the site being transferred
 * @param {Number} transferId -- the specific transfer
 * @param {Number} [interval] -- time between poll attemps
 * @param {Number} [timeout] -- time to wait for 'complete' status before bailing
 *
 * @return {Promise} for testing purposes only
 */
function pollThemeTransferStatus(siteId, transferId) {
	var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
	var timeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 180000;

	var endTime = Date.now() + timeout;
	return function (dispatch) {
		var pollStatus = function pollStatus(resolve, reject) {
			if (Date.now() > endTime) {
				// timed-out, stop polling
				dispatch(transferStatusFailure(siteId, transferId, 'client timeout'));
				return resolve();
			}
			return _wp2.default.undocumented().transferStatus(siteId, transferId).then(function (_ref4) {
				var status = _ref4.status,
				    message = _ref4.message,
				    uploaded_theme_slug = _ref4.uploaded_theme_slug;

				dispatch(transferStatus(siteId, transferId, status, message, uploaded_theme_slug));
				if (status === 'complete') {
					// finished, stop polling
					var context = !!uploaded_theme_slug ? 'themes' : 'plugins';
					dispatch((0, _actions.recordTracksEvent)('calypso_automated_transfer_complete', { transfer_id: transferId, context: context }));
					return resolve();
				}
				// poll again
				return (0, _delay3.default)(pollStatus, interval, resolve, reject);
			}).catch(function (error) {
				dispatch(transferStatusFailure(siteId, transferId, error));
				// error, stop polling
				return resolve();
			});
		};
		return new _promise2.default(pollStatus);
	};
}

/**
 * Deletes a theme from the given Jetpack site.
 *
 * @param {String} themeId -- Theme to delete
 * @param {Number} siteId -- Site to delete theme from
 *
 * @return {Function} Action thunk
 */
function deleteTheme(themeId, siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.THEME_DELETE,
			themeId: themeId,
			siteId: siteId
		});
		return _wp2.default.undocumented().deleteThemeFromJetpack(siteId, themeId).then(function (theme) {
			dispatch({
				type: _actionTypes.THEME_DELETE_SUCCESS,
				themeId: themeId,
				siteId: siteId,
				themeName: theme.name
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.THEME_DELETE_FAILURE,
				themeId: themeId,
				siteId: siteId,
				error: error
			});
		});
	};
}

/**
 * Shows dialog asking user to confirm delete of theme
 * from jetpack site. Deletes theme if user confirms.
 *
 * @param {String} themeId -- Theme to delete
 * @param {Number} siteId -- Site to delete theme from
 *
 * @return {Function} Action thunk
 */
function confirmDelete(themeId, siteId) {
	return function (dispatch, getState) {
		var _getTheme = (0, _selectors.getTheme)(getState(), siteId, themeId),
		    themeName = _getTheme.name;

		var siteTitle = (0, _selectors2.getSiteTitle)(getState(), siteId);
		(0, _accept2.default)(_i18nCalypso2.default.translate('Are you sure you want to delete %(themeName)s from %(siteTitle)s?', { args: { themeName: themeName, siteTitle: siteTitle }, comment: 'Themes: theme delete confirmation dialog' }), function (accepted) {
			accepted && dispatch(deleteTheme(themeId, siteId));
		}, _i18nCalypso2.default.translate('Delete %(themeName)s', { args: { themeName: themeName }, comment: 'Themes: theme delete dialog confirm button' }), _i18nCalypso2.default.translate('Back', { context: 'go back (like the back button in a browser)' }));
	};
}

function setThemePreviewOptions(primary, secondary) {
	return {
		type: _actionTypes.THEME_PREVIEW_OPTIONS,
		primary: primary,
		secondary: secondary
	};
}

function showThemePreview(themeId) {
	return {
		type: _actionTypes.THEME_PREVIEW_STATE,
		themeId: themeId
	};
}

function hideThemePreview() {
	return {
		type: _actionTypes.THEME_PREVIEW_STATE,
		themeId: null
	};
}

/**
 * Triggers a network request to fetch all available theme filters.
 *
 * @return {Object} A nested list of theme filters, keyed by filter slug
 */
function requestThemeFilters() {
	return {
		type: _actionTypes.THEME_FILTERS_REQUEST
	};
}

/**
 * Install of any theme hosted as a zip on wpcom must
 * be suffixed with -wpcom. Themes on AT sites are not
 * installed via downloaded zip.
 *
 * @param {Object} state Global state tree
 * @param {number} siteId Site ID
 * @param {string} themeId Theme ID
 * @return {string} the theme id to use when installing the theme
 */
function suffixThemeIdForInstall(state, siteId, themeId) {
	// AT sites do not use the -wpcom suffix
	if ((0, _isSiteAutomatedTransfer2.default)(state, siteId)) {
		return themeId;
	}
	if (!(0, _selectors.isDownloadableFromWpcom)(state, themeId)) {
		return themeId;
	}
	return themeId + '-wpcom';
}

/***/ }),

/***/ "./client/state/themes/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRequestingThemesForQueryIgnoringPage = exports.getThemesForQueryIgnoringPage = exports.getThemesForQuery = exports.getTheme = undefined;

var _uniq2 = __webpack_require__("./node_modules/lodash/uniq.js");

var _uniq3 = _interopRequireDefault(_uniq2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

exports.getCanonicalTheme = getCanonicalTheme;
exports.getThemeRequestErrors = getThemeRequestErrors;
exports.getLastThemeQuery = getLastThemeQuery;
exports.isRequestingThemesForQuery = isRequestingThemesForQuery;
exports.getThemesFoundForQuery = getThemesFoundForQuery;
exports.getThemesLastPageForQuery = getThemesLastPageForQuery;
exports.isThemesLastPageForQuery = isThemesLastPageForQuery;
exports.isRequestingTheme = isRequestingTheme;
exports.isRequestingActiveTheme = isRequestingActiveTheme;
exports.isWpcomTheme = isWpcomTheme;
exports.isWporgTheme = isWporgTheme;
exports.getThemeDetailsUrl = getThemeDetailsUrl;
exports.getThemeSupportUrl = getThemeSupportUrl;
exports.getThemeHelpUrl = getThemeHelpUrl;
exports.getThemePurchaseUrl = getThemePurchaseUrl;
exports.getThemeCustomizeUrl = getThemeCustomizeUrl;
exports.getThemeSignupUrl = getThemeSignupUrl;
exports.getThemeDemoUrl = getThemeDemoUrl;
exports.getThemeForumUrl = getThemeForumUrl;
exports.getActiveTheme = getActiveTheme;
exports.isThemeActive = isThemeActive;
exports.isActivatingTheme = isActivatingTheme;
exports.hasActivatedTheme = hasActivatedTheme;
exports.isInstallingTheme = isInstallingTheme;
exports.isThemePremium = isThemePremium;
exports.isPremiumThemeAvailable = isPremiumThemeAvailable;
exports.isThemeAvailableOnJetpackSite = isThemeAvailableOnJetpackSite;
exports.isThemePurchased = isThemePurchased;
exports.getThemePreviewThemeOptions = getThemePreviewThemeOptions;
exports.themePreviewVisibility = themePreviewVisibility;
exports.getWpcomParentThemeId = getWpcomParentThemeId;
exports.isDownloadableFromWpcom = isDownloadableFromWpcom;
exports.shouldFilterWpcomThemes = shouldFilterWpcomThemes;
exports.getJetpackUpgradeUrlIfPremiumTheme = getJetpackUpgradeUrlIfPremiumTheme;
exports.getPremiumThemePrice = getPremiumThemePrice;

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _createSelector = __webpack_require__("./client/lib/create-selector/index.js");

var _createSelector2 = _interopRequireDefault(_createSelector);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/purchases/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/plans/selectors.js");

var _utils = __webpack_require__("./client/state/themes/utils.js");

var _constants = __webpack_require__("./client/state/themes/constants.js");

var _constants2 = __webpack_require__("./client/lib/plans/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a theme object by site ID, theme ID pair.
 *
 * @param  {Object}  state   Global state tree
 * @param  {Number}  siteId  Site ID
 * @param  {String}  themeId Theme ID
 * @return {?Object}         Theme object
 */


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var getTheme = exports.getTheme = (0, _createSelector2.default)(function (state, siteId, themeId) {
  var manager = state.themes.queries[siteId];
  if (!manager) {
    return null;
  }

  return manager.getItem(themeId);
}, function (state) {
  return state.themes.queries;
});

/**
 * Returns a theme object from what is considered the 'canonical' source, i.e.
 * the one with richest information. Checks WP.com (which has a long description
 * and multiple screenshots, and a preview URL) first, then WP.org (which has a
 * preview URL), then the given JP site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {Number}  siteId  Jetpack Site ID to fall back to
 * @param  {String}  themeId Theme ID
 * @return {?Object}         Theme object
 */
function getCanonicalTheme(state, siteId, themeId) {
  var source = (0, _find3.default)(['wpcom', 'wporg', siteId], function (s) {
    return getTheme(state, s, themeId);
  });
  return getTheme(state, source, themeId);
}

/**
 * When wpcom themes are installed on Jetpack sites, the
 * theme id is suffixed with -wpcom. Some operations require
 * the use of this suffixed ID. This util function adds the
 * suffix if the site is jetpack and the theme is not yet
 * installed on the site.
 *
 * @param {Object} state	Global state tree
 * @param {String} themeId	Theme ID
 * @param {Number} siteId	Site ID
 * @return {String} 		Potentially suffixed theme ID
 */
var getSuffixedThemeId = function getSuffixedThemeId(state, themeId, siteId) {
  var siteIsJetpack = siteId && (0, _selectors.isJetpackSite)(state, siteId);
  if (siteIsJetpack && !getTheme(state, siteId, themeId)) {
    return themeId + '-wpcom';
  }
  return themeId;
};

/**
 * Returns theme request error object
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {Number}  siteId  Site ID
 * @return {Object}          error object if present or null otherwise
 */
function getThemeRequestErrors(state, themeId, siteId) {
  return (0, _get3.default)(state.themes.themeRequestErrors, [siteId, themeId], null);
}

/**
 * Returns an array of normalized themes for the themes query, or null if no
 * themes have been received.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Object}  query  Theme query object
 * @return {?Array}         Themes for the theme query
 */
var getThemesForQuery = exports.getThemesForQuery = (0, _createSelector2.default)(function (state, siteId, query) {
  var manager = state.themes.queries[siteId];
  if (!manager) {
    return null;
  }

  var themes = manager.getItems(query);
  if (!themes) {
    return null;
  }

  // ThemeQueryManager will return an array including undefined entries if
  // it knows that a page of results exists for the query (via a previous
  // request's `found` value) but the items haven't been received. While
  // we could impose this on the developer to accommodate, instead we
  // simply return null when any `undefined` entries exist in the set.
  if ((0, _includes3.default)(themes, undefined)) {
    return null;
  }

  // FIXME: The themes endpoint weirdly sometimes returns duplicates (spread
  // over different pages) which we need to remove manually here for now.
  return (0, _uniq3.default)(themes);
}, function (state) {
  return state.themes.queries;
}, function (state, siteId, query) {
  return (0, _utils.getSerializedThemesQuery)(query, siteId);
});

/**
 * Returns last query used.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @return {Object}         Last query
 */
function getLastThemeQuery(state, siteId) {
  return (0, _get3.default)(state.themes.lastQuery, siteId, {});
}

/**
 * Returns true if currently requesting themes for the themes query, or false
 * otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Object}  query  Theme query object
 * @return {Boolean}        Whether themes are being requested
 */
function isRequestingThemesForQuery(state, siteId, query) {
  var serializedQuery = (0, _utils.getSerializedThemesQuery)(query, siteId);
  return !!state.themes.queryRequests[serializedQuery];
}

/**
 * Returns the total number of items reported to be found for the given query,
 * or null if the total number of queryable themes if unknown.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Object}  query  Theme query object
 * @return {?Number}        Total number of found items
 */
function getThemesFoundForQuery(state, siteId, query) {
  if (!state.themes.queries[siteId]) {
    return null;
  }

  return state.themes.queries[siteId].getFound(query);
}

/**
 * Returns the last queryable page of themes for the given query, or null if the
 * total number of queryable themes if unknown.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Object}  query  Theme query object
 * @return {?Number}        Last themes page
 */
function getThemesLastPageForQuery(state, siteId, query) {
  if (!state.themes.queries[siteId]) {
    return null;
  }

  var pages = state.themes.queries[siteId].getNumberOfPages(query);
  if (null === pages) {
    return null;
  }

  // No pagination on Jetpack sites -- everything is returned at once, i.e. on one page
  if ((0, _selectors.isJetpackSite)(state, siteId)) {
    return 1;
  }

  return Math.max(pages, 1);
}

/**
 * Returns true if the query has reached the last page of queryable pages, or
 * null if the total number of queryable themes if unknown.
 *
 * @param  {Object}   state  Global state tree
 * @param  {Number}   siteId Site ID
 * @param  {Object}   query  Theme query object
 * @return {?Boolean}        Whether last themes page has been reached
 */
function isThemesLastPageForQuery(state, siteId) {
  var query = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var lastPage = getThemesLastPageForQuery(state, siteId, query);
  if (null === lastPage) {
    return lastPage;
  }

  return lastPage === (query.page || _constants.DEFAULT_THEME_QUERY.page);
}

/**
 * Returns an array of normalized themes for the themes query, including all
 * known queried pages, or null if the themes for the query are not known.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Object}  query  Theme query object
 * @return {?Array}         Themes for the theme query
 */
var getThemesForQueryIgnoringPage = exports.getThemesForQueryIgnoringPage = (0, _createSelector2.default)(function (state, siteId, query) {
  var themes = state.themes.queries[siteId];
  if (!themes) {
    return null;
  }

  var themesForQueryIgnoringPage = themes.getItemsIgnoringPage(query);
  if (!themesForQueryIgnoringPage) {
    return null;
  }

  // FIXME: The themes endpoint weirdly sometimes returns duplicates (spread
  // over different pages) which we need to remove manually here for now.
  return (0, _uniq3.default)(themesForQueryIgnoringPage);
}, function (state) {
  return state.themes.queries;
}, function (state, siteId, query) {
  return (0, _utils.getSerializedThemesQueryWithoutPage)(query, siteId);
});

/**
 * Returns true if currently requesting themes for the themes query, regardless
 * of page, or false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Object}  query  Theme query object
 * @return {Boolean}        Whether themes are being requested
 */
var isRequestingThemesForQueryIgnoringPage = exports.isRequestingThemesForQueryIgnoringPage = (0, _createSelector2.default)(function (state, siteId, query) {
  var normalizedQueryWithoutPage = (0, _omit3.default)((0, _utils.getNormalizedThemesQuery)(query), 'page');
  return (0, _some3.default)(state.themes.queryRequests, function (isRequesting, serializedQuery) {
    if (!isRequesting) {
      return false;
    }

    var queryDetails = (0, _utils.getDeserializedThemesQueryDetails)(serializedQuery);
    if (queryDetails.siteId !== siteId) {
      return false;
    }

    return (0, _isEqual3.default)(normalizedQueryWithoutPage, (0, _omit3.default)(queryDetails.query, 'page'));
  });
}, function (state) {
  return state.themes.queryRequests;
}, function (state, siteId, query) {
  return (0, _utils.getSerializedThemesQuery)(query, siteId);
});

/**
 * Returns true if a request is in progress for the specified site theme, or
 * false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Number}  themeId Theme ID
 * @return {Boolean}        Whether request is in progress
 */
function isRequestingTheme(state, siteId, themeId) {
  if (!state.themes.themeRequests[siteId]) {
    return false;
  }

  return !!state.themes.themeRequests[siteId][themeId];
}

/**
 * Returns true if a request is in progress for the site active theme, or
 * false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @return {Boolean}        Whether request is in progress
 */
function isRequestingActiveTheme(state, siteId) {
  return (0, _get3.default)(state.themes.activeThemeRequests, siteId, false);
}

/**
 * Whether a theme is present in the WordPress.com Theme Directory
 *
 * @param  {Object}  state   Global state tree
 * @param  {Number}  themeId Theme ID
 * @return {Boolean}         Whether theme is in WP.com theme directory
 */
function isWpcomTheme(state, themeId) {
  return !!getTheme(state, 'wpcom', themeId);
}

/**
 * Whether a theme is present in the WordPress.org Theme Directory
 *
 * @param  {Object}  state   Global state tree
 * @param  {Number}  themeId Theme ID
 * @return {Boolean}         Whether theme is in WP.org theme directory
 */
function isWporgTheme(state, themeId) {
  return !!getTheme(state, 'wporg', themeId);
}

/**
 * Returns the URL for a given theme's details sheet.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {?Number} siteId  Site ID to optionally use as context
 * @return {?String}         Theme details sheet URL
 */
function getThemeDetailsUrl(state, themeId, siteId) {
  if (!themeId) {
    return null;
  }

  if ((0, _selectors.isJetpackSite)(state, siteId) && !(_config2.default.isEnabled('manage/themes/details/jetpack') && (0, _selectors.canJetpackSiteManage)(state, siteId) && (0, _selectors.hasJetpackSiteJetpackThemesExtendedFeatures)(state, siteId))) {
    return (0, _selectors.getSiteOption)(state, siteId, 'admin_url') + 'themes.php?theme=' + themeId;
  }

  var baseUrl = _utils.oldShowcaseUrl + themeId;
  if (_config2.default.isEnabled('manage/themes/details')) {
    baseUrl = '/theme/' + themeId;
  }

  return baseUrl + (siteId ? '/' + (0, _selectors.getSiteSlug)(state, siteId) : '');
}

/**
 * Returns the URL for a given theme's setup instructions
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {?Number} siteId  Site ID to optionally use as context
 * @return {?String}         Theme setup instructions URL
 */
function getThemeSupportUrl(state, themeId, siteId) {
  if (!themeId || !isThemePremium(state, themeId)) {
    return null;
  }

  var sitePart = siteId ? '/' + (0, _selectors.getSiteSlug)(state, siteId) : '';

  if (_config2.default.isEnabled('manage/themes/details')) {
    return '/theme/' + themeId + '/setup' + sitePart;
  }

  return '' + _utils.oldShowcaseUrl + sitePart + themeId + '/support';
}

/**
 * Returns the URL for a given theme's support page.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {?Number} siteId  Site ID to optionally use as context
 * @return {?String}         Theme support page URL
 */
function getThemeHelpUrl(state, themeId, siteId) {
  if (!themeId) {
    return null;
  }

  var baseUrl = _utils.oldShowcaseUrl + themeId;
  if (_config2.default.isEnabled('manage/themes/details')) {
    baseUrl = '/theme/' + themeId + '/support';
  }

  return baseUrl + (siteId ? '/' + (0, _selectors.getSiteSlug)(state, siteId) : '');
}

/**
 * Returns the URL for purchasing the given theme for the given site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {Number}  siteId  Site ID for which to buy the theme
 * @return {?String}         Theme purchase URL
 */
function getThemePurchaseUrl(state, themeId, siteId) {
  if ((0, _selectors.isJetpackSite)(state, siteId) || !isThemePremium(state, themeId)) {
    return null;
  }
  return '/checkout/' + (0, _selectors.getSiteSlug)(state, siteId) + '/theme:' + themeId;
}

/**
 * Returns the URL for opening the customizer with the given theme on the given site.
 *
 * @param  {Object}   state   Global state tree
 * @param  {String}   themeId Theme ID
 * @param  {?Number}  siteId  Site ID to open the customizer for
 * @return {?String}          Customizer URL
 */
function getThemeCustomizeUrl(state, themeId, siteId) {
  var customizerUrl = (0, _selectors.getCustomizerUrl)(state, siteId);

  if (!(siteId && themeId) || isThemeActive(state, themeId, siteId)) {
    return customizerUrl;
  }

  var separator = (0, _includes3.default)(customizerUrl, '?') ? '&' : '?';
  var identifier = void 0;

  if ((0, _selectors.isJetpackSite)(state, siteId)) {
    identifier = themeId;
  } else {
    var theme = getTheme(state, 'wpcom', themeId);
    if (!theme) {
      return customizerUrl;
    }
    identifier = theme.stylesheet;
  }

  return customizerUrl + separator + 'theme=' + identifier;
}

/**
 * Returns the URL for signing up for a new WordPress.com account with the given theme pre-selected.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @return {?String}         Signup URL
 */
function getThemeSignupUrl(state, themeId) {
  if (!themeId) {
    return null;
  }

  var url = '/start/with-theme?ref=calypshowcase&theme=' + themeId;

  if (isThemePremium(state, themeId)) {
    url += '&premium=true';
  }

  return url;
}

/**
 * Returns the URL for a theme's demo.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {String}  siteId  Site ID
 * @return {?String}         Theme forum URL
 */
function getThemeDemoUrl(state, themeId, siteId) {
  var theme = getCanonicalTheme(state, siteId, themeId);
  return (0, _get3.default)(theme, 'demo_uri');
}

/**
 * Returns the URL for a premium theme's dedicated forum, or for the general themes
 * forum for a free theme.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {String}  siteId  Site ID
 * @return {?String}         Theme forum URL
 */
function getThemeForumUrl(state, themeId) {
  if (isThemePremium(state, themeId)) {
    return '//premium-themes.forums.wordpress.com/forum/' + themeId;
  }
  if (isWpcomTheme(state, themeId)) {
    return '//en.forums.wordpress.com/forum/themes';
  }
  if (isWporgTheme(state, themeId)) {
    return '//wordpress.org/support/theme/' + themeId;
  }
  return null;
}

/**
 * Returns the currently active theme on a given site.
 *
 * This selector previously worked using data from sites subtree.
 * This information is now double, see following explanation: If you trigger my-sites' siteSelection
 * middleware during theme activation, it will fetch the current site fresh from the API even though that
 * theme_slug attr might not have been updated on the server yet -- and you'll end up with the old themeId!
 * This happens in particular after purchasing a premium theme in single-site mode since after a theme purchase,
 * the checkout-thank-you component always redirects to the theme showcase for the current site.
 * One possible fix would be to get rid of that redirect (related: https://github.com/Automattic/wp-calypso/issues/8262).
 *
 * @param  {Object}  state   Global state tree
 * @param  {Number}  siteId  Site ID
 * @return {?String}         Theme ID
 */
function getActiveTheme(state, siteId) {
  var activeTheme = (0, _get3.default)(state.themes.activeThemes, siteId, null);
  // If the theme ID is suffixed with -wpcom, remove that string. This is because
  // we want to treat WP.com themes identically, whether or not they're installed
  // on a given Jetpack site (where the -wpcom suffix would be appended).
  return activeTheme && activeTheme.replace('-wpcom', '');
}

/**
 * Returns whether the theme is currently active on the given site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {Number}  siteId  Site ID
 * @return {Boolean}         True if the theme is active on the site
 */
function isThemeActive(state, themeId, siteId) {
  return getActiveTheme(state, siteId) === themeId;
}

/**
 * Returns whether the theme activation action is currently ongoing on the site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {Number}  siteId  Site ID
 * @return {Boolean}         True if theme activation is ongoing
 */
function isActivatingTheme(state, siteId) {
  return (0, _get3.default)(state.themes.activationRequests, siteId, false);
}

/**
 * Returns whether the theme activation action has finished on the site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {Number}  siteId  Site ID
 * @return {Boolean}         True if the theme activation has finished
 */
function hasActivatedTheme(state, siteId) {
  return (0, _get3.default)(state.themes.completedActivationRequests, siteId, false);
}

/**
 * Whether the theme is currently being installed on the (Jetpack) site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID for which we check installing state
 * @param  {Number}  siteId  Site ID
 * @return {Boolean}         True if theme installation is ongoing
 */
function isInstallingTheme(state, themeId, siteId) {
  var suffixedThemeId = getSuffixedThemeId(state, themeId, siteId);
  return (0, _get3.default)(state.themes.themeInstalls, [siteId, suffixedThemeId], false);
}

/**
 * Whether a WPCOM theme given by its ID is premium.
 *
 * @param  {Object} state   Global state tree
 * @param  {Object} themeId Theme ID
 * @return {Boolean}        True if the theme is premium
 */
function isThemePremium(state, themeId) {
  var theme = getTheme(state, 'wpcom', themeId);
  return (0, _utils.isPremium)(theme);
}

/**
 * Whether a WPCOM premium theme can be activated on a site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID for which we check availability
 * @param  {Number}  siteId  Site ID
 * @return {Boolean}         True if the premium theme is available for the given site
 */
function isPremiumThemeAvailable(state, themeId, siteId) {
  return isThemePurchased(state, themeId, siteId) || (0, _selectors3.hasFeature)(state, siteId, _constants2.FEATURE_UNLIMITED_PREMIUM_THEMES);
}

/**
 * Whether a given theme is installed or can be installed on a Jetpack site.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID for which we check availability
 * @param  {Number}  siteId  Site ID
 * @return {Boolean}         True if siteId is a Jetpack site on which theme is installed or can be installed.
 */
function isThemeAvailableOnJetpackSite(state, themeId, siteId) {
  return !!getTheme(state, siteId, themeId) || // The theme is already available or...
  isWpcomTheme(state, themeId) && // ...it's a WP.com theme and...
  _config2.default.isEnabled('manage/themes/upload') && (0, _selectors.hasJetpackSiteJetpackThemesExtendedFeatures)(state, siteId) // ...the site supports theme installation from WP.com.
  ;
}

/**
 * Returns whether the theme has been purchased for the given site.
 *
 * Use this selector alongside with the <QuerySitePurchases /> component.
 *
 * @param  {Object}  state   Global state tree
 * @param  {String}  themeId Theme ID
 * @param  {Number}  siteId  Site ID
 * @return {Boolean}         True if the theme has been purchased for the site
 */
function isThemePurchased(state, themeId, siteId) {
  var sitePurchases = (0, _selectors2.getSitePurchases)(state, siteId);
  return (0, _some3.default)(sitePurchases, { productSlug: 'premium_theme', meta: themeId });
}

function getThemePreviewThemeOptions(state) {
  return (0, _get3.default)(state.themes, 'themePreviewOptions', {});
}

/**
 * Returns the ThemePreview state
 *
 * @param  {Object}  state Global state tree
 * @return {?String}  ThemePreview state
 */
function themePreviewVisibility(state) {
  return (0, _get3.default)(state.themes, 'themePreviewVisibility', null);
}

/**
 * Returns id of the parent theme, if any, for a wpcom theme.
 *
 * @param {Object} state Global state tree
 * @param {string} themeId Child theme ID
 *
 * @return {?string} Parent theme id if it exists
 */
function getWpcomParentThemeId(state, themeId) {
  return (0, _get3.default)(getTheme(state, 'wpcom', themeId), 'template', null);
}

/**
 * Determine whether a zip of a given theme is hosted on
 * wpcom for download.
 *
 * @param {Object} state Global state tree
 * @param {string} themeId Theme ID
 * @return {boolean} true if zip is available on wpcom
 */
function isDownloadableFromWpcom(state, themeId) {
  var downloadUri = (0, _get3.default)(getTheme(state, 'wpcom', themeId), 'download', '');
  return !!(0, _includes3.default)(downloadUri, 'wordpress.com');
}

/**
 * Determine whether wpcom themes should be removed from
 * a queried list of themes. For jetpack sites with the
 * required capabilities, we hide wpcom themes from the
 * list of locally installed themes.
 *
 * @param {Object} state Global state tree
 * @param {number} siteId The Site ID
 * @returns {boolean} true if wpcom themes should be removed
 */
function shouldFilterWpcomThemes(state, siteId) {
  return (0, _selectors.isJetpackSite)(state, siteId) && _config2.default.isEnabled('manage/themes/upload') && (0, _selectors.hasJetpackSiteJetpackThemesExtendedFeatures)(state, siteId) && !(0, _selectors.isJetpackSiteMultiSite)(state, siteId);
}

/**
 * Returns the URL for purchasing a Jetpack Professional plan if the theme is a premium theme and site doesn't have access to them.
 *
 * @param  {Object}  state   Global state tree
 * @param  {string}  themeId Theme to check whether it's premium.¡
 * @param  {Number}  siteId  Site ID for which to purchase the plan
 * @return {?String}         Plan purchase URL
 */
function getJetpackUpgradeUrlIfPremiumTheme(state, themeId, siteId) {
  if ((0, _selectors.isJetpackSite)(state, siteId) && isThemePremium(state, themeId) && !(0, _selectors3.hasFeature)(state, siteId, _constants2.FEATURE_UNLIMITED_PREMIUM_THEMES)) {
    return '/checkout/' + (0, _selectors.getSiteSlug)(state, siteId) + '/professional';
  }
  return null;
}

/**
 * Returns the price string to display for a given theme on a given site:
 * @TODO Add tests!
 *
 * @param  {Object}  state   Global state tree
 * @param  {string}  themeId Theme ID
 * @param  {Number}  siteId  Site ID
 * @return {String}          Price
 */
function getPremiumThemePrice(state, themeId, siteId) {
  if (!isThemePremium(state, themeId) || isPremiumThemeAvailable(state, themeId, siteId)) {
    return '';
  }

  if ((0, _selectors.isJetpackSite)(state, siteId)) {
    return _i18nCalypso2.default.translate('Upgrade', {
      comment: 'Used to indicate a premium theme is available to the user once they upgrade their plan'
    });
  }

  var theme = getTheme(state, 'wpcom', themeId);
  return (0, _get3.default)(theme, 'price');
}

/***/ }),

/***/ "./node_modules/escape-regexp-component/index.js":
/***/ (function(module, exports) {


/**
 * Escape regexp special characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

module.exports = function(str){
  return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
};

/***/ }),

/***/ "./node_modules/escape-regexp/index.js":
/***/ (function(module, exports) {


/**
 * Escape regexp special characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

module.exports = function(str){
  return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
};

/***/ }),

/***/ "./node_modules/title-case-minors/index.js":
/***/ (function(module, exports) {


module.exports = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'en',
  'for',
  'from',
  'how',
  'if',
  'in',
  'neither',
  'nor',
  'of',
  'on',
  'only',
  'onto',
  'out',
  'or',
  'per',
  'so',
  'than',
  'that',
  'the',
  'to',
  'until',
  'up',
  'upon',
  'v',
  'v.',
  'versus',
  'vs',
  'vs.',
  'via',
  'when',
  'with',
  'without',
  'yet'
];

/***/ }),

/***/ "./node_modules/to-capital-case/index.js":
/***/ (function(module, exports, __webpack_require__) {


var clean = __webpack_require__("./node_modules/to-capital-case/node_modules/to-no-case/index.js");


/**
 * Expose `toCapitalCase`.
 */

module.exports = toCapitalCase;


/**
 * Convert a `string` to capital case.
 *
 * @param {String} string
 * @return {String}
 */


function toCapitalCase (string) {
  return clean(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
    return previous + letter.toUpperCase();
  });
}

/***/ }),

/***/ "./node_modules/to-capital-case/node_modules/to-no-case/index.js":
/***/ (function(module, exports) {


/**
 * Expose `toNoCase`.
 */

module.exports = toNoCase;


/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasCamel = /[a-z][A-Z]/;
var hasSeparator = /[\W_]/;


/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase (string) {
  if (hasSpace.test(string)) return string.toLowerCase();

  if (hasSeparator.test(string)) string = unseparate(string);
  if (hasCamel.test(string)) string = uncamelize(string);
  return string.toLowerCase();
}


/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;


/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate (string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : '';
  });
}


/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;


/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize (string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ');
  });
}

/***/ }),

/***/ "./node_modules/to-title-case/index.js":
/***/ (function(module, exports, __webpack_require__) {


try {
  var escape = __webpack_require__("./node_modules/escape-regexp/index.js");
} catch (e) {
  var escape = __webpack_require__("./node_modules/escape-regexp-component/index.js");
}

var capital = __webpack_require__("./node_modules/to-capital-case/index.js");
var minors = __webpack_require__("./node_modules/title-case-minors/index.js");


/**
 * Expose `toTitleCase`.
 */

module.exports = toTitleCase;


/**
 * Minors.
 */

var escaped = minors.map(escape);
var minorMatcher = new RegExp('[^^]\\b(' + escaped.join('|') + ')\\b', 'ig');
var colonMatcher = /:\s*(\w)/g;


/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */


function toTitleCase (string) {
  return capital(string)
    .replace(minorMatcher, function (minor) {
      return minor.toLowerCase();
    })
    .replace(colonMatcher, function (letter) {
      return letter.toUpperCase();
    });
}

/***/ })

});