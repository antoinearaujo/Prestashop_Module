webpackJsonp(["preview"],{

/***/ "./client/my-sites/preview/controller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _main = __webpack_require__("./client/my-sites/preview/main.jsx");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
exports.default = {
	preview: function preview(context, next) {
		context.primary = _react2.default.createElement(_main2.default, {
			site: context.params.site
		});
		next();
	}
};

/**
 * Internal dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/preview/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (router) {
  router('/view', _controller2.siteSelection, _controller2.sites);
  router('/view/:site', _controller2.siteSelection, _controller2.makeNavigation, _controller3.preview, _controller.makeLayout);
};

var _controller = __webpack_require__("./client/controller/index.web.js");

var _controller2 = __webpack_require__("./client/my-sites/controller.js");

var _controller3 = __webpack_require__("./client/my-sites/preview/controller.js");

/**
 * Internal dependencies
 */
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/preview/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

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

var _debounce2 = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce3 = _interopRequireDefault(_debounce2);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _addQueryArgs = __webpack_require__("./client/lib/route/add-query-args.js");

var _addQueryArgs2 = _interopRequireDefault(_addQueryArgs);

var _actions = __webpack_require__("./client/state/ui/layout-focus/actions.js");

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _documentHead = __webpack_require__("./client/components/data/document-head/index.jsx");

var _documentHead2 = _interopRequireDefault(_documentHead);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _content = __webpack_require__("./client/components/web-preview/content.jsx");

var _content2 = _interopRequireDefault(_content);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('calypso:my-sites:preview');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

var PreviewMain = function (_React$Component) {
	(0, _inherits3.default)(PreviewMain, _React$Component);

	function PreviewMain() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PreviewMain);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PreviewMain.__proto__ || (0, _getPrototypeOf2.default)(PreviewMain)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			previewUrl: null,
			externalUrl: null,
			showingClose: false
		}, _this.updateLayout = function () {
			_this.setState({
				showingClose: (0, _viewport.isWithinBreakpoint)('<660px')
			});
		}, _this.debouncedUpdateLayout = (0, _debounce3.default)(_this.updateLayout, 50), _this.updateSiteLocation = function (pathname) {
			_this.setState({
				externalUrl: _this.props.site.URL + (pathname === '/' ? '' : pathname)
			});
		}, _this.focusSidebar = function () {
			_this.props.setLayoutFocus('sidebar');
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PreviewMain, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.updateUrl();
			this.updateLayout();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			global.window && global.window.addEventListener('resize', this.debouncedUpdateLayout);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			global.window && global.window.removeEventListener('resize', this.debouncedUpdateLayout);
		}
	}, {
		key: 'updateUrl',
		value: function updateUrl() {
			if (!this.props.site) {
				if (this.state.previewUrl !== null) {
					debug('unloaded page');
					this.setState({
						previewUrl: null,
						externalUrl: null
					});
				}
				return;
			}

			var baseUrl = this.getBasePreviewUrl();
			var newUrl = (0, _addQueryArgs2.default)({
				theme_preview: true,
				iframe: true,
				'frame-nonce': this.props.site.options.frame_nonce
			}, baseUrl);

			if (this.iframeUrl !== newUrl) {
				debug('loading', newUrl);
				this.setState({
					previewUrl: newUrl,
					externalUrl: this.props.site.URL
				});
			}
		}
	}, {
		key: 'getBasePreviewUrl',
		value: function getBasePreviewUrl() {
			return this.props.site.options.unmapped_url;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			if (this.props.siteId !== prevProps.siteId) {
				debug('site change detected');
				this.updateUrl();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    isPreviewable = _props.isPreviewable,
			    site = _props.site;


			if (!site) {
				// todo: some loading state?
				return null;
			}

			if (!isPreviewable) {
				var action = _react2.default.createElement(
					_button2.default,
					{ primary: true, icon: true, href: site.URL, target: '_blank' },
					translate('Open'),
					' ',
					_react2.default.createElement(_gridicons2.default, { icon: 'external' })
				);

				return _react2.default.createElement(_emptyContent2.default, {
					title: translate('Unable to show your site here'),
					line: translate('To view your site, click the button below'),
					action: action,
					illustration: '/calypso/images/illustrations/illustration-404.svg',
					illustrationWidth: 350
				});
			}

			return _react2.default.createElement(
				_main2.default,
				{ className: 'preview' },
				_react2.default.createElement(_documentHead2.default, { title: translate('Your Site') }),
				_react2.default.createElement(_content2.default, {
					onLocationUpdate: this.updateSiteLocation,
					showUrl: !!this.state.externalUrl,
					showClose: this.state.showingClose,
					onClose: this.focusSidebar,
					previewUrl: this.state.previewUrl,
					externalUrl: this.state.externalUrl,
					loadingMessage: this.props.translate('{{strong}}One moment, please…{{/strong}} loading your site.', { components: { strong: _react2.default.createElement('strong', null) } })
				})
			);
		}
	}]);
	return PreviewMain;
}(_react2.default.Component);

PreviewMain.displayName = 'Preview';


var mapState = function mapState(state) {
	var selectedSiteId = (0, _selectors.getSelectedSiteId)(state);
	return {
		isPreviewable: (0, _selectors2.isSitePreviewable)(state, selectedSiteId),
		site: (0, _selectors.getSelectedSite)(state),
		siteId: selectedSiteId
	};
};

exports.default = (0, _reactRedux.connect)(mapState, { setLayoutFocus: _actions.setLayoutFocus })((0, _i18nCalypso.localize)(PreviewMain));
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ })

});