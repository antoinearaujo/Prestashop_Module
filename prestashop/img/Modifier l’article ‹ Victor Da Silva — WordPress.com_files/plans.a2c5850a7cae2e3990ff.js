webpackJsonp(["plans"],{

/***/ "./client/blocks/product-purchase-features/index.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductPurchaseFeatures = function (_Component) {
	(0, _inherits3.default)(ProductPurchaseFeatures, _Component);

	function ProductPurchaseFeatures() {
		(0, _classCallCheck3.default)(this, ProductPurchaseFeatures);
		return (0, _possibleConstructorReturn3.default)(this, (ProductPurchaseFeatures.__proto__ || (0, _getPrototypeOf2.default)(ProductPurchaseFeatures)).apply(this, arguments));
	}

	(0, _createClass3.default)(ProductPurchaseFeatures, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				{ className: "product-purchase-features" },
				this.props.children
			);
		}
	}]);
	return ProductPurchaseFeatures;
}(_react.Component); /**
                      * External dependencies
                      */


exports.default = ProductPurchaseFeatures;
module.exports = exports["default"];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/advertising-removed.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var isBusinessPlan = _ref.isBusinessPlan,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'speaker',
			title: translate('Advertising removed'),
			description: isBusinessPlan ? translate('With your plan, all WordPress.com advertising has been removed from your site.') : translate('With your plan, all WordPress.com advertising has been removed from your site.' + ' You can upgrade to a Business plan to also remove the WordPress.com footer credit.')
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/business-onboarding.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var translate = _ref.translate,
	    _ref$onClick = _ref.onClick,
	    onClick = _ref$onClick === undefined ? _noop3.default : _ref$onClick;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'help',
			title: translate('Get personalized help'),
			description: translate('Schedule a one-on-one orientation with a Happiness Engineer ' + 'to set up your site and learn more about WordPress.com.'),
			buttonText: translate('Schedule a session'),
			href: 'https://calendly.com/wordpressdotcom/wordpress-com-business-site-setup/',
			onClick: onClick
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/custom-domain.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _customDomainPurchaseDetail = __webpack_require__("./client/my-sites/checkout/checkout-thank-you/custom-domain-purchase-detail.jsx");

var _customDomainPurchaseDetail2 = _interopRequireDefault(_customDomainPurchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
exports.default = function (props) {
	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_customDomainPurchaseDetail2.default, (0, _pick3.default)(props, ['selectedSite', 'hasDomainCredit']))
	);
};

/**
 * Internal dependencies
 */


module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/customize-theme.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

var _config = __webpack_require__("./client/config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function isCustomizeEnabled() {
	return (0, _config.isEnabled)('manage/customize');
}

function getCustomizeLink(selectedSite) {
	var adminUrl = selectedSite.URL + '/wp-admin/',
	    customizerInAdmin = adminUrl + 'customize.php?return=' + encodeURIComponent(window.location.href);

	return isCustomizeEnabled() ? '/customize/' + selectedSite.slug : customizerInAdmin;
}

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'customize',
			title: translate('Customize your theme'),
			description: translate("You now have direct control over your site's fonts and colors in the customizer. " + "Change your site's entire look in a few clicks."),
			buttonText: translate('Start customizing'),
			href: getCustomizeLink(selectedSite),
			target: isCustomizeEnabled() ? undefined : '_blank'
		})
	);
});
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/find-new-theme.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'customize',
			title: translate('Try a New Theme'),
			description: translate('You\'ve now got access to every premium theme, at no extra cost - that\'s hundreds of new options. Give one a try!'),
			buttonText: translate('Browse premium themes'),
			href: '/themes/' + selectedSite.slug
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/google-analytics-stats.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'stats-alt',
			title: translate('Connect to Google Analytics'),
			description: translate('Complement WordPress.com\'s stats with Google\'s in-depth look at your visitors and traffic patterns.'),
			buttonText: translate('Connect Google Analytics'),
			href: '/settings/analytics/' + selectedSite.slug
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/google-vouchers.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _googleVoucher = __webpack_require__("./client/my-sites/checkout/checkout-thank-you/google-voucher/index.jsx");

var _googleVoucher2 = _interopRequireDefault(_googleVoucher);

var _querySiteVouchers = __webpack_require__("./client/components/data/query-site-vouchers/index.jsx");

var _querySiteVouchers2 = _interopRequireDefault(_querySiteVouchers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
exports.default = function (_ref) {
	var selectedSite = _ref.selectedSite;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_querySiteVouchers2.default, { siteId: selectedSite.ID }),
		_react2.default.createElement(_googleVoucher2.default, { selectedSite: selectedSite })
	);
}; /**
    * External dependencies
    */


module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/index.jsx":
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

var _partial2 = __webpack_require__("./node_modules/lodash/partial.js");

var _partial3 = _interopRequireDefault(_partial2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _findNewTheme = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/find-new-theme.jsx");

var _findNewTheme2 = _interopRequireDefault(_findNewTheme);

var _uploadPlugins = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/upload-plugins.jsx");

var _uploadPlugins2 = _interopRequireDefault(_uploadPlugins);

var _advertisingRemoved = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/advertising-removed.jsx");

var _advertisingRemoved2 = _interopRequireDefault(_advertisingRemoved);

var _googleVouchers = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/google-vouchers.jsx");

var _googleVouchers2 = _interopRequireDefault(_googleVouchers);

var _customizeTheme = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/customize-theme.jsx");

var _customizeTheme2 = _interopRequireDefault(_customizeTheme);

var _videoAudioPosts = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/video-audio-posts.jsx");

var _videoAudioPosts2 = _interopRequireDefault(_videoAudioPosts);

var _monetizeSite = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/monetize-site.jsx");

var _monetizeSite2 = _interopRequireDefault(_monetizeSite);

var _businessOnboarding = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/business-onboarding.jsx");

var _businessOnboarding2 = _interopRequireDefault(_businessOnboarding);

var _customDomain = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/custom-domain.jsx");

var _customDomain2 = _interopRequireDefault(_customDomain);

var _googleAnalyticsStats = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/google-analytics-stats.jsx");

var _googleAnalyticsStats2 = _interopRequireDefault(_googleAnalyticsStats);

var _jetpackAntiSpam = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-anti-spam.jsx");

var _jetpackAntiSpam2 = _interopRequireDefault(_jetpackAntiSpam);

var _jetpackPublicize = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-publicize.jsx");

var _jetpackPublicize2 = _interopRequireDefault(_jetpackPublicize);

var _jetpackVideo = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-video.jsx");

var _jetpackVideo2 = _interopRequireDefault(_jetpackVideo);

var _jetpackBackupSecurity = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-backup-security.jsx");

var _jetpackBackupSecurity2 = _interopRequireDefault(_jetpackBackupSecurity);

var _jetpackReturnToDashboard = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-return-to-dashboard.jsx");

var _jetpackReturnToDashboard2 = _interopRequireDefault(_jetpackReturnToDashboard);

var _jetpackWordpressCom = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-wordpress-com.jsx");

var _jetpackWordpressCom2 = _interopRequireDefault(_jetpackWordpressCom);

var _config = __webpack_require__("./client/config/index.js");

var _utils = __webpack_require__("./client/lib/ads/utils.js");

var _selectors = __webpack_require__("./client/state/sites/plans/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var ProductPurchaseFeaturesList = function (_Component) {
	(0, _inherits3.default)(ProductPurchaseFeaturesList, _Component);

	function ProductPurchaseFeaturesList() {
		(0, _classCallCheck3.default)(this, ProductPurchaseFeaturesList);
		return (0, _possibleConstructorReturn3.default)(this, (ProductPurchaseFeaturesList.__proto__ || (0, _getPrototypeOf2.default)(ProductPurchaseFeaturesList)).apply(this, arguments));
	}

	(0, _createClass3.default)(ProductPurchaseFeaturesList, [{
		key: 'getBusinessFeatures',
		value: function getBusinessFeatures() {
			var _props = this.props,
			    selectedSite = _props.selectedSite,
			    planHasDomainCredit = _props.planHasDomainCredit;


			return [_react2.default.createElement(_customDomain2.default, {
				selectedSite: selectedSite,
				hasDomainCredit: planHasDomainCredit,
				key: 'customDomainFeature'
			}), _react2.default.createElement(_advertisingRemoved2.default, {
				isBusinessPlan: true,
				key: 'advertisingRemovedFeature'
			}), _react2.default.createElement(_googleVouchers2.default, {
				selectedSite: selectedSite,
				key: 'googleVouchersFeature'
			}), _react2.default.createElement(_customizeTheme2.default, {
				selectedSite: selectedSite,
				key: 'customizeThemeFeature'
			}), _react2.default.createElement(_businessOnboarding2.default, {
				key: 'businessOnboarding',
				onClick: this.props.recordBusinessOnboardingClick
			}), _react2.default.createElement(_videoAudioPosts2.default, {
				selectedSite: selectedSite,
				key: 'videoAudioPostsFeature'
			}), _react2.default.createElement(_googleAnalyticsStats2.default, {
				selectedSite: selectedSite,
				key: 'googleAnalyticsStatsFeature'
			}), _react2.default.createElement(_findNewTheme2.default, {
				selectedSite: selectedSite,
				key: 'findNewThemeFeature'
			}), (0, _config.isEnabled)('manage/plugins/upload') ? _react2.default.createElement(_uploadPlugins2.default, {
				selectedSite: selectedSite,
				key: 'uploadPluginsFeature'
			}) : null, (0, _utils.isWordadsInstantActivationEligible)(selectedSite) ? _react2.default.createElement(_monetizeSite2.default, {
				selectedSite: selectedSite,
				key: 'monetizeSiteFeature'
			}) : null];
		}
	}, {
		key: 'getPremiumFeatures',
		value: function getPremiumFeatures() {
			var _props2 = this.props,
			    selectedSite = _props2.selectedSite,
			    planHasDomainCredit = _props2.planHasDomainCredit;


			return [_react2.default.createElement(_customDomain2.default, {
				selectedSite: selectedSite,
				hasDomainCredit: planHasDomainCredit,
				key: 'customDomainFeature'
			}), _react2.default.createElement(_advertisingRemoved2.default, {
				isBusinessPlan: false,
				key: 'advertisingRemovedFeature'
			}), _react2.default.createElement(_googleVouchers2.default, {
				selectedSite: selectedSite,
				key: 'googleVouchersFeature'
			}), _react2.default.createElement(_customizeTheme2.default, {
				selectedSite: selectedSite,
				key: 'customizeThemeFeature'
			}), _react2.default.createElement(_videoAudioPosts2.default, {
				selectedSite: selectedSite,
				key: 'videoAudioPostsFeature'
			}), (0, _utils.isWordadsInstantActivationEligible)(selectedSite) ? _react2.default.createElement(_monetizeSite2.default, {
				selectedSite: selectedSite,
				key: 'monetizeSiteFeature'
			}) : null];
		}
	}, {
		key: 'getPersonalFeatures',
		value: function getPersonalFeatures() {
			var _props3 = this.props,
			    selectedSite = _props3.selectedSite,
			    planHasDomainCredit = _props3.planHasDomainCredit;


			return [_react2.default.createElement(_customDomain2.default, {
				selectedSite: selectedSite,
				hasDomainCredit: planHasDomainCredit,
				key: 'customDomainFeature'
			}), _react2.default.createElement(_advertisingRemoved2.default, {
				isBusinessPlan: false,
				key: 'advertisingRemovedFeature'
			})];
		}
	}, {
		key: 'getJetpackFreeFeatures',
		value: function getJetpackFreeFeatures() {
			var selectedSite = this.props.selectedSite;


			return [_react2.default.createElement(_jetpackWordpressCom2.default, {
				selectedSite: selectedSite,
				key: 'jetpackWordPressCom'
			}), _react2.default.createElement(_jetpackReturnToDashboard2.default, {
				selectedSite: selectedSite,
				key: 'jetpackReturnToDashboard'
			})];
		}
	}, {
		key: 'getJetpackPremiumFeatures',
		value: function getJetpackPremiumFeatures() {
			var selectedSite = this.props.selectedSite;


			return [_react2.default.createElement(_monetizeSite2.default, {
				selectedSite: selectedSite,
				key: 'monetizeSiteFeature'
			}), _react2.default.createElement(_jetpackBackupSecurity2.default, {
				key: 'jetpackBackupSecurity'
			}), _react2.default.createElement(_jetpackAntiSpam2.default, {
				key: 'jetpackAntiSpam'
			}), _react2.default.createElement(_jetpackPublicize2.default, {
				key: 'jetpackPublicize'
			}), _react2.default.createElement(_jetpackVideo2.default, {
				key: 'jetpackVideo'
			}), _react2.default.createElement(_jetpackWordpressCom2.default, {
				selectedSite: selectedSite,
				key: 'jetpackWordPressCom'
			}), _react2.default.createElement(_jetpackReturnToDashboard2.default, {
				selectedSite: selectedSite,
				key: 'jetpackReturnToDashboard'
			})];
		}
	}, {
		key: 'getJetpackPersonalFeatures',
		value: function getJetpackPersonalFeatures() {
			var selectedSite = this.props.selectedSite;


			return [_react2.default.createElement(_jetpackBackupSecurity2.default, {
				key: 'jetpackBackupSecurity'
			}), _react2.default.createElement(_jetpackAntiSpam2.default, {
				key: 'jetpackAntiSpam'
			}), _react2.default.createElement(_jetpackWordpressCom2.default, {
				selectedSite: selectedSite,
				key: 'jetpackWordPressCom'
			}), _react2.default.createElement(_jetpackReturnToDashboard2.default, {
				selectedSite: selectedSite,
				key: 'jetpackReturnToDashboard'
			})];
		}
	}, {
		key: 'getJetpackBusinessFeatures',
		value: function getJetpackBusinessFeatures() {
			var selectedSite = this.props.selectedSite;


			return [_react2.default.createElement(_businessOnboarding2.default, {
				key: 'businessOnboarding',
				onClick: this.props.recordBusinessOnboardingClick
			}), _react2.default.createElement(_findNewTheme2.default, {
				selectedSite: selectedSite,
				key: 'findNewThemeFeature'
			}), _react2.default.createElement(_jetpackBackupSecurity2.default, {
				key: 'jetpackBackupSecurity'
			}), _react2.default.createElement(_monetizeSite2.default, {
				selectedSite: selectedSite,
				key: 'monetizeSiteFeature'
			}), _react2.default.createElement(_googleAnalyticsStats2.default, {
				selectedSite: selectedSite,
				key: 'googleAnalyticsStatsFeature'
			}), _react2.default.createElement(_jetpackAntiSpam2.default, {
				key: 'jetpackAntiSpam'
			}), _react2.default.createElement(_jetpackPublicize2.default, {
				key: 'jetpackPublicize'
			}), _react2.default.createElement(_jetpackVideo2.default, {
				key: 'jetpackVideo'
			}), _react2.default.createElement(_jetpackWordpressCom2.default, {
				selectedSite: selectedSite,
				key: 'jetpackWordPressCom'
			}), _react2.default.createElement(_jetpackReturnToDashboard2.default, {
				selectedSite: selectedSite,
				key: 'jetpackReturnToDashboard'
			})];
		}
	}, {
		key: 'getFeatures',
		value: function getFeatures() {
			var _props4 = this.props,
			    plan = _props4.plan,
			    isPlaceholder = _props4.isPlaceholder;


			if (isPlaceholder) {
				return null;
			}

			switch (plan) {
				case _constants.PLAN_BUSINESS:
					return this.getBusinessFeatures();
				case _constants.PLAN_PREMIUM:
					return this.getPremiumFeatures();
				case _constants.PLAN_PERSONAL:
					return this.getPersonalFeatures();
				case _constants.PLAN_JETPACK_FREE:
					return this.getJetpackFreeFeatures();
				case _constants.PLAN_JETPACK_PREMIUM:
				case _constants.PLAN_JETPACK_PREMIUM_MONTHLY:
					return this.getJetpackPremiumFeatures();
				case _constants.PLAN_JETPACK_PERSONAL:
				case _constants.PLAN_JETPACK_PERSONAL_MONTHLY:
					return this.getJetpackPersonalFeatures();
				case _constants.PLAN_JETPACK_BUSINESS:
				case _constants.PLAN_JETPACK_BUSINESS_MONTHLY:
					return this.getJetpackBusinessFeatures();
				default:
					return null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'product-purchase-features-list' },
				this.getFeatures()
			);
		}
	}]);
	return ProductPurchaseFeaturesList;
}(_react.Component);

ProductPurchaseFeaturesList.propTypes = {
	plan: _react.PropTypes.oneOf([_constants.PLAN_FREE, _constants.PLAN_PERSONAL, _constants.PLAN_PREMIUM, _constants.PLAN_BUSINESS, _constants.PLAN_JETPACK_FREE, _constants.PLAN_JETPACK_BUSINESS, _constants.PLAN_JETPACK_BUSINESS_MONTHLY, _constants.PLAN_JETPACK_PREMIUM, _constants.PLAN_JETPACK_PREMIUM_MONTHLY, _constants.PLAN_JETPACK_PERSONAL, _constants.PLAN_JETPACK_PERSONAL_MONTHLY]).isRequired,
	isPlaceholder: _react.PropTypes.bool
};
ProductPurchaseFeaturesList.defaultProps = {
	isPlaceholder: false
};
exports.default = (0, _reactRedux.connect)(function (state) {
	var selectedSite = (0, _selectors2.getSelectedSite)(state),
	    selectedSiteId = (0, _selectors2.getSelectedSiteId)(state);

	return {
		selectedSite: selectedSite,
		planHasDomainCredit: (0, _selectors.hasDomainCredit)(state, selectedSiteId)
	};
}, {
	recordBusinessOnboardingClick: (0, _partial3.default)(_actions.recordTracksEvent, 'calypso_plan_features_onboarding_click')
})(ProductPurchaseFeaturesList);
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-anti-spam.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'comment',
			title: translate('Spam Filtering'),
			description: translate('Spam is being automatically filtered.')
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-backup-security.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'flag',
			title: translate('Site Security'),
			description: translate('Your site is being securely backed up and scanned with real-time sync.'),
			buttonText: translate('Visit security dashboard'),
			href: 'https://dashboard.vaultpress.com/' })
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-publicize.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'comment',
			title: translate('Marketing Automation'),
			description: translate('Schedule tweets, Facebook posts, and other social posts in advance. ' + 'No limits.')
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-return-to-dashboard.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _route = __webpack_require__("./client/lib/route/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	var adminURL = (0, _get3.default)(selectedSite, 'options.admin_url', '');
	if (adminURL) {
		adminURL = (0, _route.untrailingslashit)(adminURL) + '/admin.php?page=jetpack';
	}

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'house',
			title: translate('Return to your dashboard'),
			buttonText: translate('Go back to %(site)s', { args: { site: selectedSite.name } }),
			href: adminURL
		})
	);
});

/**
 * Internal dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-video.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'image-multiple',
			title: translate('Video Hosting'),
			description: translate('High-speed video hosting that doesn\'t eat up your server space. ' + 'High-definition and no third-party ads.')
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/jetpack-wordpress-com.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'plugins',
			title: translate('Automatic Updates'),
			description: translate('Keep your plugins securely updated and manage your site from ' + '{{a}}mobile apps{{/a}}.', {
				components: {
					a: _react2.default.createElement('a', { href: 'https://apps.wordpress.com/' })
				}
			}),
			buttonText: translate('Configure auto updates'),
			href: '/plugins/' + selectedSite.slug
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/monetize-site.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'speaker',
			title: translate('Easily monetize your site'),
			description: translate('Take advantage of WordAds instant activation on your upgraded site. ' + 'WordAds lets you earn money by displaying promotional content.'),
			buttonText: translate('Start earning'),
			href: '/ads/settings/' + selectedSite.slug
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/upload-plugins.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'plugins',
			title: translate('Add a Plugin'),
			description: translate('Search and add plugins right from your dashboard, or upload a plugin ' + 'from your computer with a drag-and-drop interface.'),
			buttonText: translate('Upload a plugin now'),
			href: '/plugins/upload/' + selectedSite.slug
		})
	);
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/product-purchase-features/product-purchase-features-list/video-audio-posts.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

var _paths = __webpack_require__("./client/lib/paths/index.js");

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
exports.default = (0, _i18nCalypso.localize)(function (_ref) {
	var selectedSite = _ref.selectedSite,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: 'product-purchase-features-list__item' },
		_react2.default.createElement(_purchaseDetail2.default, {
			icon: 'image-multiple',
			title: translate('Video and audio posts'),
			description: translate('Enrich your posts with video and audio, uploaded directly on your site. ' + 'No ads or limits. The Premium plan also adds 10GB of file storage.'),
			buttonText: translate('Start a new post'),
			href: _paths2.default.newPost(selectedSite)
		})
	);
});
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/card/compact.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'CompactCard',

	render: function render() {
		var props = (0, _assign3.default)({}, this.props, { className: (0, _classnames2.default)(this.props.className, 'is-compact') });

		return _react2.default.createElement(
			_card2.default,
			props,
			this.props.children
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

/***/ "./client/components/data/checkout/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var StoreConnection = __webpack_require__("./client/components/data/store-connection/index.jsx"),
    CartStore = __webpack_require__("./client/lib/cart/store/index.js"),
    TransactionStore = __webpack_require__("./client/lib/transaction/store.js");

var stores = [TransactionStore, CartStore];

function getStateFromStores() {
	return {
		transaction: TransactionStore.get(),
		cart: CartStore.get()
	};
}

var CheckoutData = React.createClass({
	displayName: 'CheckoutData',

	render: function render() {
		return React.createElement(
			StoreConnection,
			{ stores: stores, getStateFromStores: getStateFromStores },
			this.props.children
		);
	}
});

module.exports = CheckoutData;

/***/ }),

/***/ "./client/components/data/query-contact-details-cache/index.jsx":
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

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _getContactDetailsCache = __webpack_require__("./client/state/selectors/get-contact-details-cache.js");

var _getContactDetailsCache2 = _interopRequireDefault(_getContactDetailsCache);

var _isRequestingContactDetailsCache = __webpack_require__("./client/state/selectors/is-requesting-contact-details-cache.js");

var _isRequestingContactDetailsCache2 = _interopRequireDefault(_isRequestingContactDetailsCache);

var _actions = __webpack_require__("./client/state/domains/management/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryContactDetailsCache = function (_Component) {
	(0, _inherits3.default)(QueryContactDetailsCache, _Component);

	function QueryContactDetailsCache() {
		(0, _classCallCheck3.default)(this, QueryContactDetailsCache);
		return (0, _possibleConstructorReturn3.default)(this, (QueryContactDetailsCache.__proto__ || (0, _getPrototypeOf2.default)(QueryContactDetailsCache)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryContactDetailsCache, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (this.props.isRequesting || !(0, _isEmpty3.default)(this.props.contactDetailsCache)) {
				return;
			}
			this.props.requestContactDetailsCache();
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryContactDetailsCache;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


QueryContactDetailsCache.propTypes = {
	isRequesting: _react.PropTypes.bool.isRequired,
	requestContactDetailsCache: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		contactDetailsCache: (0, _getContactDetailsCache2.default)(state),
		isRequesting: (0, _isRequestingContactDetailsCache2.default)(state)
	};
}, { requestContactDetailsCache: _actions.requestContactDetailsCache })(QueryContactDetailsCache);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-site-domains/index.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/lib/index.js");

var _selectors = __webpack_require__("./client/state/sites/domains/selectors.js");

var _actions = __webpack_require__("./client/state/sites/domains/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var QuerySiteDomains = function (_Component) {
	(0, _inherits3.default)(QuerySiteDomains, _Component);

	function QuerySiteDomains(props) {
		(0, _classCallCheck3.default)(this, QuerySiteDomains);

		var _this = (0, _possibleConstructorReturn3.default)(this, (QuerySiteDomains.__proto__ || (0, _getPrototypeOf2.default)(QuerySiteDomains)).call(this, props));

		_this.requestSiteDomains = _this.requestSiteDomains.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(QuerySiteDomains, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.requestSiteDomains();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.requestingSiteDomains || !nextProps.siteId || this.props.siteId === nextProps.siteId) {
				return;
			}
			this.requestSiteDomains(nextProps);
		}
	}, {
		key: 'requestSiteDomains',
		value: function requestSiteDomains() {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

			if (!props.requestingSiteDomains && props.siteId) {
				props.fetchSiteDomains(props.siteId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QuerySiteDomains;
}(_react.Component); /**
                      * External dependencies
                      */


QuerySiteDomains.propTypes = {
	siteId: _react.PropTypes.number,
	requestingSiteDomains: _react.PropTypes.bool,
	fetchSiteDomains: _react.PropTypes.func
};

QuerySiteDomains.defaultProps = {
	fetchSiteDomains: function fetchSiteDomains() {}
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	return {
		requestingSiteDomains: (0, _selectors.isRequestingSiteDomains)(state, ownProps.siteId)
	};
}, function (dispatch) {
	return (0, _redux.bindActionCreators)({ fetchSiteDomains: _actions.fetchSiteDomains }, dispatch);
})(QuerySiteDomains);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-site-vouchers/index.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _selectors = __webpack_require__("./client/state/sites/vouchers/selectors.js");

var _actions = __webpack_require__("./client/state/sites/vouchers/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QuerySiteVouchers = function (_Component) {
	(0, _inherits3.default)(QuerySiteVouchers, _Component);

	function QuerySiteVouchers(props) {
		(0, _classCallCheck3.default)(this, QuerySiteVouchers);

		var _this = (0, _possibleConstructorReturn3.default)(this, (QuerySiteVouchers.__proto__ || (0, _getPrototypeOf2.default)(QuerySiteVouchers)).call(this, props));

		_this.requestVouchers = _this.requestVouchers.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(QuerySiteVouchers, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.requestVouchers();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.requestingSiteVouchers || !nextProps.siteId || this.props.siteId === nextProps.siteId) {
				return;
			}
			this.requestVouchers(nextProps);
		}
	}, {
		key: 'requestVouchers',
		value: function requestVouchers() {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

			if (!props.requestingSiteVouchers && props.siteId) {
				props.requestVouchers(props.siteId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QuerySiteVouchers;
}(_react.Component);

QuerySiteVouchers.propTypes = {
	siteId: _react.PropTypes.number,
	requestingVouchers: _react.PropTypes.bool,
	requestVouchers: _react.PropTypes.func
};

QuerySiteVouchers.defaultProps = {
	requestVouchers: function requestVouchers() {}
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	return {
		requestingSiteVouchers: (0, _selectors.isRequestingSiteVouchers)(state, ownProps.siteId)
	};
}, { requestVouchers: _actions.requestSiteVouchers })(QuerySiteVouchers);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/store-connection/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreConnection = _react2.default.createClass({
	displayName: 'StoreConnection',

	propTypes: {
		component: _react2.default.PropTypes.func,
		getStateFromStores: _react2.default.PropTypes.func.isRequired,
		isDataLoading: _react2.default.PropTypes.func,
		loadingPlaceholder: _react2.default.PropTypes.func,
		stores: _react2.default.PropTypes.array.isRequired
	},

	getInitialState: function getInitialState() {
		return this.props.getStateFromStores(this.props);
	},
	componentDidMount: function componentDidMount() {
		this.addStoreListeners(this.props.stores);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!(0, _isEqual3.default)(this.props, nextProps)) {
			this.removeStoreListeners(this.props.stores);
			this.addStoreListeners(nextProps.stores);
			this.setState(nextProps.getStateFromStores(nextProps));
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		this.removeStoreListeners(this.props.stores);
	},
	addStoreListeners: function addStoreListeners(stores) {
		stores.forEach(function (store) {
			store.on('change', this.handleStoresChanged);
		}, this);
	},
	removeStoreListeners: function removeStoreListeners(stores) {
		stores.forEach(function (store) {
			store.off('change', this.handleStoresChanged);
		}, this);
	},
	handleStoresChanged: function handleStoresChanged() {
		this.setState(this.props.getStateFromStores(this.props));
	},
	isDataLoading: function isDataLoading() {
		if (!this.props.loadingPlaceholder || !this.props.isDataLoading) {
			return false;
		}

		return this.props.isDataLoading(this.state);
	},
	render: function render() {
		if (this.isDataLoading()) {
			return _react2.default.createElement(this.props.loadingPlaceholder, this.state);
		}

		if (this.props.component) {
			return _react2.default.createElement(this.props.component, this.state);
		}

		var child = _react2.default.Children.only(this.props.children);

		return _react2.default.cloneElement(child, this.state);
	}
}); /**
     * External dependencies
     */
exports.default = StoreConnection;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/faq/faq-item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FAQItem = function FAQItem(_ref) {
	var question = _ref.question,
	    answer = _ref.answer;

	return _react2.default.createElement(
		"li",
		{ className: "faq__item" },
		_react2.default.createElement(
			"h4",
			{ className: "faq__question" },
			question
		),
		_react2.default.createElement(
			"p",
			{ className: "faq__answer" },
			answer
		)
	);
}; /**
    * External dependencies
    */


FAQItem.propTypes = {
	// Translations can include <a> links, that's why propType `node` is needed.
	question: _react.PropTypes.node.isRequired,
	answer: _react.PropTypes.node.isRequired
};

exports.default = FAQItem;
module.exports = exports["default"];

/***/ }),

/***/ "./client/components/faq/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
function FAQ(_ref) {
	var translate = _ref.translate,
	    _ref$heading = _ref.heading,
	    heading = _ref$heading === undefined ? translate('Frequently Asked Questions') : _ref$heading,
	    children = _ref.children;

	return _react2.default.createElement(
		'div',
		{ className: 'faq' },
		_react2.default.createElement(
			'h1',
			{ className: 'faq__heading' },
			heading
		),
		_react2.default.createElement(
			'ul',
			{ className: 'faq__list' },
			children
		)
	);
}

exports.default = (0, _i18nCalypso.localize)(FAQ);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/foldable-card/index.jsx":
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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _compact = __webpack_require__("./client/components/card/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _screenReaderText = __webpack_require__("./client/components/screen-reader-text/index.js");

var _screenReaderText2 = _interopRequireDefault(_screenReaderText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
var FoldableCard = function (_Component) {
	(0, _inherits3.default)(FoldableCard, _Component);

	function FoldableCard() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, FoldableCard);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FoldableCard.__proto__ || (0, _getPrototypeOf2.default)(FoldableCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			expanded: _this.props.expanded
		}, _this.onClick = function () {
			if (_this.props.children) {
				_this.setState({ expanded: !_this.state.expanded });
			}

			if (_this.props.onClick) {
				_this.props.onClick();
			}

			if (_this.state.expanded) {
				_this.props.onClose(_this.props.cardKey);
			} else {
				_this.props.onOpen(_this.props.cardKey);
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(FoldableCard, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.expanded !== this.props.expanded) {
				this.setState({ expanded: nextProps.expanded });
			}
		}
	}, {
		key: 'getClickAction',
		value: function getClickAction() {
			if (this.props.disabled) {
				return;
			}
			return this.onClick;
		}
	}, {
		key: 'getActionButton',
		value: function getActionButton() {
			if (this.state.expanded) {
				return this.props.actionButtonExpanded || this.props.actionButton;
			}
			return this.props.actionButton;
		}
	}, {
		key: 'renderActionButton',
		value: function renderActionButton() {
			var clickAction = !this.props.clickableHeader ? this.getClickAction() : null;
			if (this.props.actionButton) {
				return _react2.default.createElement(
					'div',
					{ className: 'foldable-card__action', onClick: clickAction },
					this.getActionButton()
				);
			}
			if (this.props.children) {
				var iconSize = 24;
				var screenReaderText = this.props.screenReaderText || this.props.translate('More');
				return _react2.default.createElement(
					'button',
					{
						disabled: this.props.disabled,
						type: 'button',
						className: 'foldable-card__action foldable-card__expand',
						onClick: clickAction },
					_react2.default.createElement(
						_screenReaderText2.default,
						null,
						screenReaderText
					),
					_react2.default.createElement(_gridicons2.default, { icon: this.props.icon, size: iconSize })
				);
			}
		}
	}, {
		key: 'renderContent',
		value: function renderContent() {
			return _react2.default.createElement(
				'div',
				{ className: 'foldable-card__content' },
				this.props.children
			);
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			var summary = this.props.summary ? _react2.default.createElement(
				'span',
				{ className: 'foldable-card__summary' },
				this.props.summary,
				' '
			) : null;
			var expandedSummary = this.props.expandedSummary ? _react2.default.createElement(
				'span',
				{ className: 'foldable-card__summary-expanded' },
				this.props.expandedSummary,
				' '
			) : null;
			var headerClickAction = this.props.clickableHeader ? this.getClickAction() : null;
			var headerClasses = (0, _classnames2.default)('foldable-card__header', {
				'is-clickable': !!this.props.clickableHeader,
				'has-border': !!this.props.summary
			});
			return _react2.default.createElement(
				'div',
				{ className: headerClasses, onClick: headerClickAction },
				_react2.default.createElement(
					'span',
					{ className: 'foldable-card__main' },
					this.props.header,
					' '
				),
				_react2.default.createElement(
					'span',
					{ className: 'foldable-card__secondary' },
					summary,
					expandedSummary,
					this.renderActionButton()
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var Container = this.props.compact ? _compact2.default : _card2.default;
			var itemSiteClasses = (0, _classnames2.default)('foldable-card', this.props.className, {
				'is-disabled': !!this.props.disabled,
				'is-expanded': !!this.state.expanded,
				'has-expanded-summary': !!this.props.expandedSummary
			});

			return _react2.default.createElement(
				Container,
				{ className: itemSiteClasses },
				this.renderHeader(),
				this.state.expanded && this.renderContent()
			);
		}
	}]);
	return FoldableCard;
}(_react.Component); /**
                      * External Dependencies
                      */


FoldableCard.propTypes = {
	actionButton: _react.PropTypes.element,
	actionButtonExpanded: _react.PropTypes.element,
	cardKey: _react.PropTypes.string,
	compact: _react.PropTypes.bool,
	disabled: _react.PropTypes.bool,
	expandedSummary: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	expanded: _react.PropTypes.bool,
	icon: _react.PropTypes.string,
	onClick: _react.PropTypes.func,
	onClose: _react.PropTypes.func,
	onOpen: _react.PropTypes.func,
	screenReaderText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
	summary: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
};
FoldableCard.defaultProps = {
	onOpen: _noop3.default,
	onClose: _noop3.default,
	cardKey: '',
	icon: 'chevron-down',
	expanded: false,
	screenReaderText: false
};
exports.default = (0, _i18nCalypso.localize)(FoldableCard);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/happiness-support/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HappinessSupport = undefined;

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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _selectors = __webpack_require__("./client/state/happychat/selectors.js");

var _support = __webpack_require__("./client/lib/url/support.js");

var _support2 = _interopRequireDefault(_support);

var _button3 = __webpack_require__("./client/components/happychat/button.jsx");

var _button4 = _interopRequireDefault(_button3);

var _connection = __webpack_require__("./client/components/happychat/connection.jsx");

var _connection2 = _interopRequireDefault(_connection);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var HappinessSupport = exports.HappinessSupport = function (_Component) {
	(0, _inherits3.default)(HappinessSupport, _Component);

	function HappinessSupport() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, HappinessSupport);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HappinessSupport.__proto__ || (0, _getPrototypeOf2.default)(HappinessSupport)).call.apply(_ref, [this].concat(args))), _this), _this.onLiveChatButtonClick = function () {
			if (_this.props.liveChatButtonEventName) {
				_this.props.recordTracksEvent(_this.props.liveChatButtonEventName);
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(HappinessSupport, [{
		key: 'renderContactButton',
		value: function renderContactButton() {
			var url = _support2.default.CALYPSO_CONTACT,
			    target = '';

			if (this.props.isJetpack) {
				url = _support2.default.JETPACK_CONTACT_SUPPORT;
				target = '_blank';
			}

			return _react2.default.createElement(
				_button2.default,
				{ href: url, target: target, className: 'happiness-support__contact-button' },
				this.props.translate('Ask a question')
			);
		}
	}, {
		key: 'renderLiveChatButton',
		value: function renderLiveChatButton() {
			return _react2.default.createElement(
				_button4.default,
				{ borderless: false, onClick: this.onLiveChatButtonClick, className: 'happiness-support__livechat-button' },
				this.props.translate('Ask a question')
			);
		}
	}, {
		key: 'renderIllustration',
		value: function renderIllustration() {
			return _react2.default.createElement(
				'div',
				{ className: 'happiness-support__illustration' },
				_react2.default.createElement('img', { src: '/calypso/images/illustrations/happiness-support.svg' })
			);
		}
	}, {
		key: 'renderSupportButton',
		value: function renderSupportButton() {
			var url = _support2.default.SUPPORT_ROOT;

			if (this.props.isJetpack) {
				url = _support2.default.JETPACK_SUPPORT;
			}

			return _react2.default.createElement(
				_button2.default,
				{ href: url, target: '_blank', rel: 'noopener noreferrer', className: 'happiness-support__support-button' },
				this.props.translate('Search our support site')
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = {
				'is-placeholder': this.props.isPlaceholder
			};
			var _props = this.props,
			    liveChatAvailable = _props.liveChatAvailable,
			    showLiveChatButton = _props.showLiveChatButton,
			    translate = _props.translate;


			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('happiness-support', classes) },
				this.renderIllustration(),
				_react2.default.createElement(
					'h3',
					{ className: 'happiness-support__heading' },
					translate('Enjoy priority support from our Happiness Engineers')
				),
				_react2.default.createElement(
					'p',
					{ className: 'happiness-support__text' },
					translate('{{strong}}Need help?{{/strong}} A Happiness Engineer can answer questions about your site, your account or how to do just about anything.', // eslint-disable-line max-len
					{
						components: {
							strong: _react2.default.createElement('strong', null)
						}
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'happiness-support__buttons' },
					showLiveChatButton && _react2.default.createElement(_connection2.default, null),
					showLiveChatButton && liveChatAvailable ? this.renderLiveChatButton() : this.renderContactButton(),
					this.renderSupportButton()
				)
			);
		}
	}]);
	return HappinessSupport;
}(_react.Component); /**
                      * External dependencies
                      */


HappinessSupport.propTypes = {
	isJetpack: _propTypes2.default.bool,
	isPlaceholder: _propTypes2.default.bool,
	liveChatButtonEventName: _propTypes2.default.string,
	showLiveChatButton: _propTypes2.default.bool
};
HappinessSupport.defaultProps = {
	showLiveChatButton: false
};
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		liveChatAvailable: (0, _selectors.isHappychatAvailable)(state)
	};
}, { recordTracksEvent: _actions.recordTracksEvent })((0, _i18nCalypso.localize)(HappinessSupport));

/***/ }),

/***/ "./client/components/happychat/connection.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _actions = __webpack_require__("./client/state/happychat/actions.js");

var _selectors = __webpack_require__("./client/state/happychat/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HappychatConnection = function (_Component) {
	(0, _inherits3.default)(HappychatConnection, _Component);

	function HappychatConnection() {
		(0, _classCallCheck3.default)(this, HappychatConnection);
		return (0, _possibleConstructorReturn3.default)(this, (HappychatConnection.__proto__ || (0, _getPrototypeOf2.default)(HappychatConnection)).apply(this, arguments));
	}

	(0, _createClass3.default)(HappychatConnection, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (_config2.default.isEnabled('happychat') && this.props.isUninitialized) {
				this.props.connectChat();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return HappychatConnection;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		isUninitialized: (0, _selectors.isHappychatConnectionUninitialized)(state)
	};
}, { connectChat: _actions.connectChat })(HappychatConnection);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/info-popover/index.jsx":
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

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _popover = __webpack_require__("./client/components/popover/index.jsx");

var _popover2 = _interopRequireDefault(_popover);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoPopover = function (_Component) {
	(0, _inherits3.default)(InfoPopover, _Component);

	function InfoPopover() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, InfoPopover);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = InfoPopover.__proto__ || (0, _getPrototypeOf2.default)(InfoPopover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showPopover: false }, _this.handleClick = function (event) {
			event.preventDefault();
			_this.setState({ showPopover: !_this.state.showPopover }, _this.recordStats);
		}, _this.handleClose = function () {
			return _this.setState({ showPopover: false }, _this.recordStats);
		}, _this.recordStats = function () {
			var _this$props = _this.props,
			    gaEventCategory = _this$props.gaEventCategory,
			    popoverName = _this$props.popoverName;


			if (gaEventCategory && popoverName) {
				var dialogState = _this.state.showPopover ? ' Opened' : ' Closed';
				_analytics2.default.ga.recordEvent(gaEventCategory, 'InfoPopover: ' + popoverName + dialogState);
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(InfoPopover, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'span',
				{
					onClick: this.handleClick,
					ref: 'infoPopover',
					className: (0, _classnames2.default)('info-popover', { is_active: this.state.showPopover }, this.props.className)
				},
				_react2.default.createElement(_gridicons2.default, { icon: 'info-outline', size: 18 }),
				_react2.default.createElement(
					_popover2.default,
					{
						autoRtl: this.props.autoRtl,
						id: this.props.id,
						isVisible: this.state.showPopover,
						context: this.refs && this.refs.infoPopover,
						ignoreContext: this.props.ignoreContext,
						position: this.props.position,
						onClose: this.handleClose,
						className: (0, _classnames2.default)('popover', 'info-popover__tooltip', this.props.className),
						rootClassName: this.props.rootClassName
					},
					this.props.children
				)
			);
		}
	}]);
	return InfoPopover;
}(_react.Component);

/**
* Internal dependencies
*/
/**
 * External dependencies
 */


InfoPopover.propTypes = {
	autoRtl: _react.PropTypes.bool,
	className: _react.PropTypes.string,
	gaEventCategory: _react.PropTypes.string,
	id: _react.PropTypes.string,
	ignoreContext: _react.PropTypes.shape({
		getDOMNode: _react.PropTypes.func
	}),
	popoverName: _react.PropTypes.string,
	position: _react.PropTypes.oneOf(['top', 'top right', 'right', 'bottom right', 'bottom', 'bottom left', 'left', 'top left']),
	rootClassName: _react.PropTypes.string
};
InfoPopover.defaultProps = {
	autoRtl: true,
	position: 'bottom'
};
exports.default = InfoPopover;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/purchase-detail/index.jsx":
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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _purchaseButton = __webpack_require__("./client/components/purchase-detail/purchase-button.jsx");

var _purchaseButton2 = _interopRequireDefault(_purchaseButton);

var _tipInfo = __webpack_require__("./client/components/purchase-detail/tip-info.jsx");

var _tipInfo2 = _interopRequireDefault(_tipInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var PurchaseDetail = function (_PureComponent) {
	(0, _inherits3.default)(PurchaseDetail, _PureComponent);

	function PurchaseDetail() {
		(0, _classCallCheck3.default)(this, PurchaseDetail);
		return (0, _possibleConstructorReturn3.default)(this, (PurchaseDetail.__proto__ || (0, _getPrototypeOf2.default)(PurchaseDetail)).apply(this, arguments));
	}

	(0, _createClass3.default)(PurchaseDetail, [{
		key: 'renderPurchaseButton',
		value: function renderPurchaseButton() {
			var _props = this.props,
			    buttonText = _props.buttonText,
			    isPlaceholder = _props.isPlaceholder,
			    isSubmitting = _props.isSubmitting,
			    href = _props.href,
			    onClick = _props.onClick,
			    target = _props.target,
			    rel = _props.rel;


			if (!buttonText && !isPlaceholder) {
				return null;
			}

			return _react2.default.createElement(_purchaseButton2.default, {
				disabled: isSubmitting,
				href: href,
				onClick: onClick,
				target: target,
				rel: rel,
				text: buttonText
			});
		}
	}, {
		key: 'renderBody',
		value: function renderBody() {
			if (this.props.body) {
				return _react2.default.createElement(
					'div',
					{ className: 'purchase-detail__body' },
					this.props.body
				);
			}

			return _react2.default.createElement(
				'div',
				{ className: 'purchase-detail__body' },
				this.renderPurchaseButton(),
				this.props.info && _react2.default.createElement(_tipInfo2.default, { info: this.props.info })
			);
		}
	}, {
		key: 'renderIcon',
		value: function renderIcon() {
			var _props2 = this.props,
			    icon = _props2.icon,
			    isRequired = _props2.isRequired;


			if (!icon) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'purchase-detail__icon' },
				_react2.default.createElement(_gridicons2.default, { icon: icon }),
				isRequired && _react2.default.createElement(_gridicons2.default, { className: 'purchase-detail__notice-icon', icon: 'notice' })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    id = _props3.id,
			    requiredText = _props3.requiredText,
			    title = _props3.title,
			    description = _props3.description;

			var classes = (0, _classnames2.default)('purchase-detail', {
				'is-placeholder': this.props.isPlaceholder
			});

			return _react2.default.createElement(
				'div',
				{ className: classes, id: id },
				requiredText && _react2.default.createElement(
					'div',
					{ className: 'purchase-detail__required-notice' },
					_react2.default.createElement(
						'em',
						null,
						requiredText
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'purchase-detail__content' },
					this.renderIcon(),
					_react2.default.createElement(
						'div',
						{ className: 'purchase-detail__text' },
						_react2.default.createElement(
							'h3',
							{ className: 'purchase-detail__title' },
							title
						),
						_react2.default.createElement(
							'div',
							{ className: 'purchase-detail__description' },
							description
						)
					),
					this.renderBody()
				)
			);
		}
	}]);
	return PurchaseDetail;
}(_react.PureComponent);

PurchaseDetail.propTypes = {
	buttonText: _propTypes2.default.string,
	description: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.string, _propTypes2.default.object]),
	href: _propTypes2.default.string,
	icon: _propTypes2.default.string,
	isPlaceholder: _propTypes2.default.bool,
	isRequired: _propTypes2.default.bool,
	isSubmitting: _propTypes2.default.bool,
	onClick: _propTypes2.default.func,
	requiredText: _propTypes2.default.string,
	target: _propTypes2.default.string,
	rel: _propTypes2.default.string,
	title: _propTypes2.default.string
};
PurchaseDetail.defaultProps = {
	onClick: _noop3.default
};
exports.default = PurchaseDetail;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/purchase-detail/purchase-button.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PurchaseButton = function PurchaseButton(_ref) {
	var _ref$className = _ref.className,
	    className = _ref$className === undefined ? false : _ref$className,
	    href = _ref.href,
	    disabled = _ref.disabled,
	    _ref$onClick = _ref.onClick,
	    onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
	    target = _ref.target,
	    rel = _ref.rel,
	    text = _ref.text,
	    _ref$primary = _ref.primary,
	    primary = _ref$primary === undefined ? true : _ref$primary;

	return _react2.default.createElement(
		_button2.default,
		{
			className: (className ? className + ' ' : '') + 'purchase-detail__button',
			disabled: disabled,
			href: href,
			onClick: onClick,
			target: target,
			rel: rel,
			primary: primary
		},
		text
	);
};

/**
 * Internal dependencies
 */


PurchaseButton.propTypes = {
	className: _react.PropTypes.string,
	href: _react.PropTypes.string,
	disabled: _react.PropTypes.bool,
	onClick: _react.PropTypes.func,
	target: _react.PropTypes.string,
	rel: _react.PropTypes.string,
	text: _react.PropTypes.string,
	primary: _react.PropTypes.bool
};

exports.default = PurchaseButton;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/purchase-detail/tip-info.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var TipInfo = function TipInfo(_ref) {
	var _ref$info = _ref.info,
	    info = _ref$info === undefined ? '' : _ref$info,
	    _ref$className = _ref.className,
	    className = _ref$className === undefined ? '' : _ref$className;

	className += ' purchase-detail__info form-setting-explanation';
	return _react2.default.createElement(
		'div',
		{ className: className },
		_react2.default.createElement(
			'span',
			{ className: 'purchase-detail__info-icon-container' },
			_react2.default.createElement(_gridicons2.default, { size: 12, icon: 'info-outline' })
		),
		info
	);
};

TipInfo.propTypes = {
	info: _react.PropTypes.string,
	className: _react.PropTypes.string
};

exports.default = TipInfo;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/ribbon/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
exports.default = function (props) {
	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)({
				ribbon: true,
				'is-green': props.color === 'green'
			}) },
		_react2.default.createElement(
			'span',
			{ className: 'ribbon__title' },
			props.children
		)
	);
};

module.exports = exports['default'];

/***/ }),

/***/ "./client/components/screen-reader-text/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ScreenReaderText;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ScreenReaderText(_ref) {
	var children = _ref.children;

	return _react2.default.createElement(
		"span",
		{ className: "screen-reader-text" },
		children
	);
} /**
   * External dependencies
   */
module.exports = exports["default"];

/***/ }),

/***/ "./client/components/section-nav/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _commentNavigationTab = __webpack_require__("./client/my-sites/comments/comment-navigation/comment-navigation-tab.jsx");

var _commentNavigationTab2 = _interopRequireDefault(_commentNavigationTab);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _search = __webpack_require__("./client/components/search/index.jsx");

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main
 */


/**
 * Internal Dependencies
 */
/**
 * External dependencies
 */
var SectionNav = _react2.default.createClass({
	displayName: 'SectionNav',


	propTypes: {
		children: _react2.default.PropTypes.node,
		selectedText: _react2.default.PropTypes.node,
		selectedCount: _react2.default.PropTypes.number,
		hasPinnedItems: _react2.default.PropTypes.bool,
		onMobileNavPanelOpen: _react2.default.PropTypes.func,
		className: _react2.default.PropTypes.string,
		allowDropdown: _react2.default.PropTypes.bool
	},

	getInitialState: function getInitialState() {
		return {
			mobileOpen: false
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onMobileNavPanelOpen: function onMobileNavPanelOpen() {},
			allowDropdown: true
		};
	},

	componentWillMount: function componentWillMount() {
		this.checkForSiblingControls(this.props.children);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if ((0, _isEqual3.default)(this.props, nextProps)) {
			return;
		}

		this.checkForSiblingControls(nextProps.children);

		if (!this.hasSiblingControls) {
			this.closeMobilePanel();
		}
	},

	renderDropdown: function renderDropdown() {
		if (!this.props.allowDropdown) {
			return _react2.default.createElement('div', null);
		}

		return _react2.default.createElement(
			'div',
			{
				className: 'section-nav__mobile-header',
				onClick: this.toggleMobileOpenState
			},
			_react2.default.createElement(
				'span',
				{ className: 'section-nav__mobile-header-text' },
				this.props.selectedText
			)
		);
	},


	render: function render() {
		var children = this.getChildren(),
		    className;

		if (!children) {
			className = (0, _classnames2.default)({
				'section-nav': true,
				'is-empty': true
			}, this.props.className);

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'div',
					{ className: 'section-nav__panel' },
					_react2.default.createElement(_item2.default, null)
				)
			);
		}

		className = (0, _classnames2.default)({
			'section-nav': true,
			'is-open': this.state.mobileOpen,
			'has-pinned-items': this.hasPinnedSearch || this.props.hasPinnedItems
		}, this.props.className);

		return _react2.default.createElement(
			'div',
			{ className: className },
			this.renderDropdown(),
			_react2.default.createElement(
				'div',
				{ className: 'section-nav__panel' },
				children
			)
		);
	},

	getChildren: function getChildren() {
		return _react2.default.Children.map(this.props.children, function (child) {
			var extraProps = {
				hasSiblingControls: this.hasSiblingControls,
				closeSectionNavMobilePanel: this.closeMobilePanel
			};

			if (!child) {
				return null;
			}

			// Propagate 'selectedText' to NavItem component
			if (child.type === _tabs2.default && !child.props.selectedText && typeof this.props.selectedText === 'string') {
				extraProps.selectedText = this.props.selectedText;
			}

			// Propagate 'selectedCount' to NavItem component
			if (child.type === _tabs2.default && this.props.selectedCount) {
				extraProps.selectedCount = this.props.selectedCount;
			}

			if (child.type === _search2.default) {
				if (child.props.pinned) {
					this.hasPinnedSearch = true;
				}

				extraProps.onSearch = this.generateOnSearch(child.props.onSearch);
			}

			return _react2.default.cloneElement(child, extraProps);
		}.bind(this));
	},

	closeMobilePanel: function closeMobilePanel() {
		if (window.innerWidth < 480 && this.state.mobileOpen) {
			this.setState({
				mobileOpen: false
			});
		}
	},

	toggleMobileOpenState: function toggleMobileOpenState() {
		var mobileOpen = !this.state.mobileOpen;

		this.setState({
			mobileOpen: mobileOpen
		});

		if (mobileOpen) {
			this.props.onMobileNavPanelOpen();
		}
	},

	generateOnSearch: function generateOnSearch(existingOnSearch) {
		return function () {
			existingOnSearch.apply(this, arguments);
			this.closeMobilePanel();
		}.bind(this);
	},

	checkForSiblingControls: function checkForSiblingControls(children) {
		this.hasSiblingControls = false;

		var ignoreSiblings = [_search2.default, _commentNavigationTab2.default];

		_react2.default.Children.forEach(children, function (child, index) {
			// Checking for at least 2 controls groups that are not null or ignored siblings
			if (index && child && !(0, _includes3.default)(ignoreSiblings, child.type)) {
				this.hasSiblingControls = true;
			}
		}.bind(this));
	}
});

module.exports = SectionNav;

/***/ }),

/***/ "./client/components/section-nav/item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _count = __webpack_require__("./client/components/count/index.jsx");

var _count2 = _interopRequireDefault(_count);

var _sectionsPreload = __webpack_require__("./client/sections-preload.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External Dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * Internal Dependencies
 */


/**
 * Main
 */
var NavItem = React.createClass({
	displayName: 'NavItem',


	mixins: [PureRenderMixin],

	propTypes: {
		itemType: React.PropTypes.string,
		path: React.PropTypes.string,
		selected: React.PropTypes.bool,
		tabIndex: React.PropTypes.number,
		onClick: React.PropTypes.func,
		isExternalLink: React.PropTypes.bool,
		disabled: React.PropTypes.bool,
		count: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool]),
		className: React.PropTypes.string,
		preloadSectionName: React.PropTypes.string
	},

	_preloaded: false,

	preload: function preload() {
		if (!this._preloaded && this.props.preloadSectionName) {
			this._preloaded = true;
			(0, _sectionsPreload.preload)(this.props.preloadSectionName);
		}
	},


	render: function render() {
		var itemClassPrefix = this.props.itemType ? this.props.itemType : 'tab',
		    itemClassName,
		    target,
		    onClick,
		    itemClasses = {
			'is-selected': this.props.selected,
			'is-external': this.props.isExternalLink
		};

		itemClasses['section-nav-' + itemClassPrefix] = true;
		itemClassName = classNames(this.props.className, itemClasses);

		if (this.props.isExternalLink) {
			target = '_blank';
		}

		if (!this.props.disabled) {
			onClick = this.props.onClick;
		}

		return React.createElement(
			'li',
			{ className: itemClassName },
			React.createElement(
				'a',
				{
					href: this.props.path,
					target: target,
					className: 'section-nav-' + itemClassPrefix + '__link',
					onClick: onClick,
					onMouseEnter: this.preload,
					tabIndex: this.props.tabIndex || 0,
					'aria-selected': this.props.selected,
					disabled: this.props.disabled,
					role: 'menuitem',
					rel: this.props.isExternalLink ? 'external' : null },
				React.createElement(
					'span',
					{ className: 'section-nav-' + itemClassPrefix + '__text' },
					this.props.children,
					'number' === typeof this.props.count && React.createElement(_count2.default, { count: this.props.count })
				)
			)
		);
	}
});

module.exports = NavItem;

/***/ }),

/***/ "./client/components/section-nav/tabs.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _debounce2 = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce3 = _interopRequireDefault(_debounce2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var ReactDom = __webpack_require__("./node_modules/react-dom/index.js"),
    React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * Internal Dependencies
 */
var SelectDropdown = __webpack_require__("./client/components/select-dropdown/index.jsx"),
    DropdownItem = __webpack_require__("./client/components/select-dropdown/item.jsx"),
    viewport = __webpack_require__("./client/lib/viewport/index.js");

/**
 * Internal Variables
 */
var MOBILE_PANEL_THRESHOLD = 480;

/**
 * Main
 */
var NavTabs = React.createClass({
	displayName: 'NavTabs',


	propTypes: {
		selectedText: React.PropTypes.string,
		selectedCount: React.PropTypes.number,
		label: React.PropTypes.string,
		hasSiblingControls: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			hasSiblingControls: false
		};
	},

	getInitialState: function getInitialState() {
		return {
			isDropdown: false
		};
	},

	componentDidMount: function componentDidMount() {
		this.setDropdown();
		this.debouncedAfterResize = (0, _debounce3.default)(this.setDropdown, 300);

		window.addEventListener('resize', this.debouncedAfterResize);
	},

	componentWillReceiveProps: function componentWillReceiveProps() {
		this.setDropdown();
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('resize', this.debouncedAfterResize);
	},

	render: function render() {
		var tabs = React.Children.map(this.props.children, function (child, index) {
			return child && React.cloneElement(child, { ref: 'tab-' + index });
		});

		var tabsClassName = classNames({
			'section-nav-tabs': true,
			'is-dropdown': this.state.isDropdown,
			'is-open': this.state.isDropdownOpen,
			'has-siblings': this.props.hasSiblingControls
		});

		var innerWidth = viewport.getWindowInnerWidth();

		return React.createElement(
			'div',
			{ className: 'section-nav-group', ref: 'navGroup' },
			React.createElement(
				'div',
				{ className: tabsClassName },
				this.props.label && React.createElement(
					'h6',
					{ className: 'section-nav-group__label' },
					this.props.label
				),
				React.createElement(
					'ul',
					{
						className: 'section-nav-tabs__list',
						role: 'menu',
						onKeyDown: this.keyHandler
					},
					tabs
				),
				this.state.isDropdown && innerWidth > MOBILE_PANEL_THRESHOLD && this.getDropdown()
			)
		);
	},

	getTabWidths: function getTabWidths() {
		var totalWidth = 0;

		React.Children.forEach(this.props.children, function (child, index) {
			if (!child) {
				return;
			}
			var tabWidth = ReactDom.findDOMNode(this.refs['tab-' + index]).offsetWidth;
			totalWidth += tabWidth;
		}.bind(this));

		this.tabsWidth = totalWidth;
	},

	getDropdown: function getDropdown() {
		var dropdownOptions = React.Children.map(this.props.children, function (child, index) {
			if (!child) {
				return null;
			}
			return React.createElement(
				DropdownItem,
				(0, _extends3.default)({}, child.props, { key: 'navTabsDropdown-' + index }),
				child.props.children
			);
		});

		return React.createElement(
			SelectDropdown,
			{
				className: 'section-nav-tabs__dropdown',
				selectedText: this.props.selectedText,
				selectedCount: this.props.selectedCount
			},
			dropdownOptions
		);
	},

	setDropdown: function setDropdown() {
		var navGroupWidth;

		if (window.innerWidth > MOBILE_PANEL_THRESHOLD) {
			if (!this.refs.navGroup) {
				return;
			}

			navGroupWidth = this.refs.navGroup.offsetWidth;

			if (!this.tabsWidth) {
				this.getTabWidths();
			}

			if (navGroupWidth <= this.tabsWidth && !this.state.isDropdown) {
				this.setState({
					isDropdown: true
				});
			} else if (navGroupWidth > this.tabsWidth && this.state.isDropdown) {
				this.setState({
					isDropdown: false
				});
			}
		} else if (window.innerWidth <= MOBILE_PANEL_THRESHOLD && this.state.isDropdown) {
			this.setState({
				isDropdown: false
			});
		}
	},

	keyHandler: function keyHandler(event) {
		switch (event.keyCode) {
			case 32: // space
			case 13:
				// enter
				event.preventDefault();
				document.activeElement.click();
				break;
		}
	}
});

module.exports = NavTabs;

/***/ }),

/***/ "./client/components/segmented-control/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var ReactDom = __webpack_require__("./node_modules/react-dom/index.js"),
    React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * Internal dependencies
 */
var ControlItem = __webpack_require__("./client/components/segmented-control/item.jsx");

/**
 * Internal variables
 */
var _instance = 1;

/**
 * SegmentedControl
 */
var SegmentedControl = React.createClass({
	displayName: 'SegmentedControl',

	propTypes: {
		initialSelected: React.PropTypes.string,
		compact: React.PropTypes.bool,
		className: React.PropTypes.string,
		style: React.PropTypes.object,
		onSelect: React.PropTypes.func,
		options: React.PropTypes.arrayOf(React.PropTypes.shape({
			value: React.PropTypes.string.isRequired,
			label: React.PropTypes.string.isRequired,
			path: React.PropTypes.string
		}))
	},

	getDefaultProps: function getDefaultProps() {
		return {
			compact: false
		};
	},

	getInitialState: function getInitialState() {
		var initialSelected;

		if (this.props.options) {
			initialSelected = this.props.initialSelected || this.props.options[0].value;
		}

		return {
			selected: initialSelected,
			keyboardNavigation: false
		};
	},

	componentWillMount: function componentWillMount() {
		this.id = _instance;
		_instance++;
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('keydown', this.navigateItem);
	},

	render: function render() {
		var segmentedClasses = {
			'segmented-control': true,
			'keyboard-navigation': this.state.keyboardNavigation,
			'is-compact': this.props.compact,
			'is-primary': this.props.primary
		};

		if (this.props.className) {
			this.props.className.split(' ').forEach(function (className) {
				segmentedClasses[className] = true;
			});
		}

		return React.createElement(
			'ul',
			{
				className: classNames(segmentedClasses),
				style: this.props.style,
				role: 'radiogroup',
				onKeyDown: this.navigateItem,
				onKeyUp: this.setKeyboardNavigation.bind(this, true)
			},
			this.getSegmentedItems()
		);
	},

	getSegmentedItems: function getSegmentedItems() {
		var refIndex = 0;
		if (this.props.children) {
			// add keys and refs to children
			return React.Children.map(this.props.children, function (child, index) {
				var newChild = React.cloneElement(child, {
					ref: child.type === ControlItem ? 'item-' + refIndex : null,
					key: 'item-' + index,
					onClick: function (event) {
						this.setKeyboardNavigation(false);

						if (typeof child.props.onClick === 'function') {
							child.props.onClick(event);
						}
					}.bind(this)
				});

				if (child.type === ControlItem) {
					refIndex++;
				}

				return newChild;
			}, this);
		}

		return this.props.options.map(function (item, index) {
			return React.createElement(
				ControlItem,
				{
					key: 'segmented-control-' + this.id + '-' + item.value,
					ref: 'item-' + index,
					selected: this.state.selected === item.value,
					onClick: this.selectItem.bind(this, item),
					path: item.path,
					index: index,
					value: item.value
				},
				item.label
			);
		}, this);
	},

	selectItem: function selectItem(option) {
		if (!option) {
			return;
		}

		if (this.props.onSelect) {
			this.props.onSelect(option);
		}

		this.setState({
			selected: option.value,
			keyboardNavigation: false
		});
	},

	setKeyboardNavigation: function setKeyboardNavigation(value) {
		this.setState({
			keyboardNavigation: value
		});
	},

	navigateItem: function navigateItem(event) {
		switch (event.keyCode) {
			case 9:
				// tab
				this.navigateItemByTabKey(event);
				break;
			case 32: // space
			case 13:
				// enter
				event.preventDefault();
				document.activeElement.click();
				break;
			case 37:
				// left arrow
				event.preventDefault();
				this.focusSibling('previous');
				break;
			case 39:
				// right arrow
				event.preventDefault();
				this.focusSibling('next');
				break;
		}
	},

	navigateItemByTabKey: function navigateItemByTabKey(event) {
		var direction = event.shiftKey ? 'previous' : 'next',
		    newIndex = this.focusSibling(direction);

		// allow tabbing out of control
		if (newIndex !== false) {
			event.preventDefault();
		}
	},

	/**
  * Allows for keyboard navigation
  * @param  {String} direction - `next` or `previous`
  * @return {Number|Boolean} - returns false if the newIndex is out of bounds
  */
	focusSibling: function focusSibling(direction) {
		var increment, items, newIndex;

		if (this.props.options) {
			items = (0, _filter3.default)((0, _map3.default)(this.props.options, 'value'), Boolean);
		} else {
			items = (0, _filter3.default)(this.props.children, function (item) {
				return item.type === ControlItem;
			});
		}

		if (typeof this.focused !== 'number') {
			this.focused = this.getCurrentFocusedIndex();
		}

		increment = direction === 'previous' ? -1 : 1;
		newIndex = this.focused + increment;
		if (newIndex >= items.length || newIndex < 0) {
			return false;
		}

		ReactDom.findDOMNode(this.refs['item-' + newIndex].refs.itemLink).focus();
		this.focused = newIndex;

		return newIndex;
	},

	getCurrentFocusedIndex: function getCurrentFocusedIndex() {
		// item is the <li> element containing the focused link
		var activeItem = document.activeElement.parentNode,
		    siblings = Array.prototype.slice(activeItem.parentNode.children),
		    index = siblings.indexOf(activeItem);

		return index > -1 ? index : 0;
	}
});

module.exports = SegmentedControl;

/***/ }),

/***/ "./client/components/segmented-control/item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External Dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * SegmentedControlItem
 */
var SegmentedControlItem = React.createClass({
	displayName: 'SegmentedControlItem',


	propTypes: {
		children: React.PropTypes.node.isRequired,
		path: React.PropTypes.string,
		selected: React.PropTypes.bool,
		title: React.PropTypes.string,
		value: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			selected: false
		};
	},

	render: function render() {
		var itemClassName = classNames({
			'segmented-control__item': true,
			'is-selected': this.props.selected
		});

		var linkClassName = classNames('segmented-control__link', (0, _defineProperty3.default)({}, 'item-index-' + this.props.index, this.props.index != null));

		return React.createElement(
			'li',
			{ className: itemClassName },
			React.createElement(
				'a',
				{
					href: this.props.path,
					className: linkClassName,
					ref: 'itemLink',
					onClick: this.props.onClick,
					title: this.props.title,
					'data-e2e-value': this.props.value,
					role: 'radio',
					tabIndex: 0,
					'aria-selected': this.props.selected },
				React.createElement(
					'span',
					{ className: 'segmented-control__text' },
					this.props.children
				)
			)
		);
	}
});

module.exports = SegmentedControlItem;

/***/ }),

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

/***/ "./client/lib/ads/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.canAccessWordads = canAccessWordads;
exports.isWordadsInstantActivationEligible = isWordadsInstantActivationEligible;

var _utils = __webpack_require__("./client/lib/site/utils.js");

var _productsValues = __webpack_require__("./client/lib/products-values/index.js");

/**
 * Returns true if the site has WordAds access
 * @param  {Site} site Site object
 * @return {boolean}      true if site has WordAds access
 */
/**
 * Internal dependencies
 */
function canAccessWordads(site) {
	if (site) {
		if (isWordadsInstantActivationEligible(site)) {
			return true;
		}

		var jetpackPremium = site.jetpack && ((0, _productsValues.isPremium)(site.plan) || (0, _productsValues.isBusiness)(site.plan));
		return site.options && (site.options.wordads || jetpackPremium) && (0, _utils.userCan)('manage_options', site);
	}

	return false;
}

function isWordadsInstantActivationEligible(site) {
	if (((0, _productsValues.isBusiness)(site.plan) || (0, _productsValues.isPremium)(site.plan)) && (0, _utils.userCan)('activate_wordads', site) && !site.jetpack) {
		return true;
	}

	return false;
}

/***/ }),

/***/ "./client/lib/analytics/page-view-tracker/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PageViewTracker = undefined;

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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
var debug = (0, _debug2.default)('calypso:analytics:PageViewTracker');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

var PageViewTracker = exports.PageViewTracker = function (_React$Component) {
	(0, _inherits3.default)(PageViewTracker, _React$Component);

	function PageViewTracker() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PageViewTracker);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PageViewTracker.__proto__ || (0, _getPrototypeOf2.default)(PageViewTracker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			timer: null
		}, _this.queuePageView = function () {
			var _this$props = _this.props,
			    _this$props$delay = _this$props.delay,
			    delay = _this$props$delay === undefined ? 0 : _this$props$delay,
			    path = _this$props.path,
			    _this$props$recorder = _this$props.recorder,
			    recorder = _this$props$recorder === undefined ? _noop3.default : _this$props$recorder,
			    title = _this$props.title;


			debug('Queuing Page View: "' + title + '" at "' + path + '" with ' + delay + 'ms delay');

			if (_this.state.timer) {
				return;
			}

			if (!delay) {
				return recorder(path, title);
			}

			_this.setState({
				timer: setTimeout(function () {
					return recorder(path, title);
				}, delay)
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PageViewTracker, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			debug('Component has mounted.');
			this.queuePageView();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			debug('Component has unmounted.');
			clearTimeout(this.state.timer);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return PageViewTracker;
}(_react2.default.Component);

PageViewTracker.displayName = 'PageViewTracker';
PageViewTracker.propTypes = {
	delay: _propTypes2.default.number,
	path: _propTypes2.default.string.isRequired,
	recorder: _propTypes2.default.func,
	title: _propTypes2.default.string.isRequired
};


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		recorder: (0, _flowRight3.default)(dispatch, _actions.recordPageView)
	};
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PageViewTracker);

/***/ }),

/***/ "./client/lib/mixins/analytics/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _snakeCase2 = __webpack_require__("./node_modules/lodash/snakeCase.js");

var _snakeCase3 = _interopRequireDefault(_snakeCase2);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _constants = __webpack_require__("./client/lib/domains/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var getDomainTypeText = function getDomainTypeText(domain) {
	switch (domain.type) {
		case _constants.type.MAPPED:
			return 'Mapped Domain';

		case _constants.type.REGISTERED:
			return 'Registered Domain';

		case _constants.type.SITE_REDIRECT:
			return 'Site Redirect';

		case _constants.type.WPCOM:
			return 'Wpcom Domain';
	}
};

var EVENTS = {
	popupCart: {
		checkoutButtonClick: function checkoutButtonClick() {
			_analytics2.default.ga.recordEvent('Domain Search', 'Click "Checkout" Button on Popup Cart');
		},
		keepSearchButtonClick: function keepSearchButtonClick() {
			_analytics2.default.ga.recordEvent('Domain Search', 'Click "Keep Searching" Button on Popup Cart');
		}
	},
	domainManagement: {
		addGoogleApps: {
			addAnotherEmailAddressClick: function addAnotherEmailAddressClick(domainName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Add another email address" link in Add Google Apps', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_add_google_apps_add_another_email_address_click', { domain_name: domainName });
			},
			cancelClick: function cancelClick(domainName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Cancel" Button in Add Google Apps', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_add_google_apps_cancel_click', { domain_name: domainName });
			},
			continueClick: function continueClick(domainName, success, numberOfLicenses) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Continue" Button in Add Google Apps', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_add_google_apps_continue_click', {
					domain_name: domainName,
					number_of_licenses: numberOfLicenses,
					success: success
				});
			},
			domainChange: function domainChange(value, userIndex) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Changed "Domain" Input for User #' + userIndex + ' in Add Google Apps', 'Domain Name');

				_analytics2.default.tracks.recordEvent('calypso_domain_management_add_google_apps_domain_change', {
					user_index: userIndex,
					value: value
				});
			},
			inputFocus: function inputFocus(domainName, fieldName, userIndex) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Focused On "' + fieldName + '" Input for User #' + userIndex + ' in Add Google Apps', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_add_google_apps_' + (0, _snakeCase3.default)(fieldName) + '_focus', {
					domain_name: domainName,
					user_index: userIndex
				});
			}
		},

		edit: {
			makePrimaryClick: function makePrimaryClick(domain) {
				var domainType = getDomainTypeText(domain);

				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Make Primary" link on a ' + domainType + ' in Edit', 'Domain Name', domain.name);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_edit_make_primary_click', { section: (0, _snakeCase3.default)(domainType) });
			},
			navigationClick: function navigationClick(action, domain) {
				var domainType = getDomainTypeText(domain);

				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "' + action + '" navigation link on a ' + domainType + ' in Edit', 'Domain Name', domain.name);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_edit_navigation_click', {
					action: (0, _snakeCase3.default)(action),
					section: (0, _snakeCase3.default)(domainType)
				});
			},
			noneClick: function noneClick(domain) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "None" privacy protection link on a Domain Registration in Edit', 'Domain Name', domain.name);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_edit_none_click');
			},
			paymentSettingsClick: function paymentSettingsClick(domain) {
				var domainType = getDomainTypeText(domain);

				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Payment Settings" Button on a ' + domainType + ' in Edit', 'Domain Name', domain.name);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_edit_payment_settings_click', { section: (0, _snakeCase3.default)(domainType) });
			}
		},

		email: {
			andMoreClick: function andMoreClick(domainName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "and More!" Google Apps link in Email', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_and_more_click', { domain_name: domainName });
			},
			learnMoreClick: function learnMoreClick(domainName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Learn more" Google Apps link in Email', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_learn_more_click', { domain_name: domainName });
			}
		},

		emailForwarding: {
			addNewEmailForwardClick: function addNewEmailForwardClick(domainName, mailbox, destination, success) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Add New Email Forward" Button in Email Forwarding', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_forwarding_add_new_email_forward_click', {
					destination: destination,
					domain_name: domainName,
					mailbox: mailbox,
					success: success
				});
			},
			cancelClick: function cancelClick(domainName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Cancel" Button in Email Forwarding', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_forwarding_cancel_click', { domain_name: domainName });
			},
			deleteClick: function deleteClick(domainName, mailbox, destination, success) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked delete Button in Email Forwarding', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_forwarding_delete_click', {
					destination: destination,
					domain_name: domainName,
					mailbox: mailbox,
					success: success
				});
			},
			resendVerificationClick: function resendVerificationClick(domainName, mailbox, destination, success) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked resend verification email Button in Email Forwarding', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_forwarding_resend_verification_email_click', {
					destination: destination,
					domain_name: domainName,
					mailbox: mailbox,
					success: success
				});
			},
			inputFocus: function inputFocus(domainName, fieldName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Focused On "' + fieldName + '" Input in Email Forwarding', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_forwarding_' + (0, _snakeCase3.default)(fieldName) + '_focus', { domain_name: domainName });
			},
			learnMoreClick: function learnMoreClick(domainName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Learn more" link in Email Forwarding', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_email_forwarding_learn_more_click', { domain_name: domainName });
			}
		},

		googleApps: {
			addGoogleAppsUserClick: function addGoogleAppsUserClick(domainName) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Add Google Apps User" Button in Google Apps', 'Domain Name', domainName);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_google_apps_add_google_apps_user_click', { domain_name: domainName });
			},
			manageClick: function manageClick(domainName, email) {
				_analytics2.default.ga.recordEvent('Domain Management', 'Clicked "Manage" link in Google Apps', 'User Email', email);

				_analytics2.default.tracks.recordEvent('calypso_domain_management_google_apps_manage_click', {
					domain_name: domainName,
					email: email
				});
			}
		}
	}
};

module.exports = function (categoryName, subCategoryName) {
	return {
		recordEvent: function recordEvent(eventName) {
			var category = EVENTS[categoryName];
			var categoryPath = categoryName;

			if (!category) {
				throw new Error('Unable to find \'' + categoryPath + '\' category in analytics mixin');
			}

			if (subCategoryName) {
				category = category[subCategoryName];
				categoryPath += '.' + subCategoryName;

				if (!category) {
					throw new Error('Unable to find \'' + categoryPath + '\' category in analytics mixin');
				}
			}

			if (!category[eventName]) {
				throw new Error('Unable to find \'' + eventName + '\' event for \'' + categoryPath + '\' category in analytics mixin');
			}

			for (var _len = arguments.length, eventArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				eventArguments[_key - 1] = arguments[_key];
			}

			category[eventName].apply(null, eventArguments);
		}
	};
};

/***/ }),

/***/ "./client/lib/transaction/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _merge2 = __webpack_require__("./node_modules/lodash/merge.js");

var _merge3 = _interopRequireDefault(_merge2);

var _cloneDeep2 = __webpack_require__("./node_modules/lodash/cloneDeep.js");

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var update = __webpack_require__("./node_modules/react-addons-update/index.js");

/**
 * Internal dependencies
 */
var UpgradesActionTypes = __webpack_require__("./client/lib/upgrades/constants.js").action,
    cartItems = __webpack_require__("./client/lib/cart-values/index.js").cartItems,
    CartStore = __webpack_require__("./client/lib/cart/store/index.js"),
    Emitter = __webpack_require__("./client/lib/mixins/emitter/index.js"),
    Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    transactionStepTypes = __webpack_require__("./client/lib/store-transactions/step-types.js"),
    hasDomainDetails = __webpack_require__("./client/lib/store-transactions/index.js").hasDomainDetails;

var _transaction = createInitialTransaction();

var TransactionStore = {
	get: function get() {
		return _transaction;
	}
};

Emitter(TransactionStore);

function replaceData(newData) {
	_transaction = (0, _cloneDeep3.default)(newData);
	TransactionStore.emit('change');
}

function createInitialTransaction() {
	return {
		errors: {},
		newCardFormFields: {},
		step: { name: transactionStepTypes.BEFORE_SUBMIT },
		domainDetails: null
	};
}

function reset() {
	replaceData(createInitialTransaction());
}

function setDomainDetails(domainDetails) {
	replaceData((0, _merge3.default)(_transaction, { domainDetails: domainDetails }));
}

function setPayment(payment) {
	replaceData((0, _assign3.default)({}, _transaction, { payment: payment }));
}

function setStep(step) {
	replaceData((0, _assign3.default)({}, _transaction, {
		step: step,
		errors: step.error ? step.error.message : {}
	}));
}

function setNewCreditCardDetails(options) {
	if (!_transaction.payment.newCardDetails) {
		return;
	}

	var newTransaction = update(_transaction, {
		payment: { newCardDetails: { $merge: options.rawDetails } },
		newCardFormFields: { $merge: options.maskedDetails }
	});

	replaceData(newTransaction);
}

TransactionStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.type) {
		case UpgradesActionTypes.TRANSACTION_DOMAIN_DETAILS_SET:
			setDomainDetails(action.domainDetails);
			break;

		case UpgradesActionTypes.TRANSACTION_PAYMENT_SET:
			setPayment(action.payment);
			break;

		case UpgradesActionTypes.TRANSACTION_NEW_CREDIT_CARD_DETAILS_SET:
			setNewCreditCardDetails({
				rawDetails: action.rawDetails,
				maskedDetails: action.maskedDetails
			});
			break;

		case UpgradesActionTypes.TRANSACTION_STEP_SET:
			setStep(action.step);
			break;

		case UpgradesActionTypes.TRANSACTION_RESET:
			reset();
			break;

		case UpgradesActionTypes.CART_ITEM_REMOVE:
			Dispatcher.waitFor([CartStore.dispatchToken]);

			if (!cartItems.hasDomainRegistration(CartStore.get()) && hasDomainDetails(TransactionStore.get())) {
				setDomainDetails(null);
			}
			break;
	}
});

module.exports = TransactionStore;

/***/ }),

/***/ "./client/lib/wp/handlers/http-envelope-normalizer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

exports.requestHandler = requestHandler;
exports.injectHandler = injectHandler;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Detect error looking in the reponse data object.
 *
 * @param {Function} handler - wpcom handler
 * @return {Function} handler wrapper
 */
function requestHandler(handler) {
	return function (params, fn) {
		return handler(params, function (err, response) {
			var _ref = response || {},
			    code = _ref.code,
			    message = _ref.message,
			    _ref$data = _ref.data,
			    data = _ref$data === undefined ? {} : _ref$data;

			var status = data.status;

			// Create Error object if the response
			// has `code`, `message` and `status` properties

			if (code && typeof code === 'string' && message && typeof message === 'string' && status && typeof status === 'number') {
				return fn(new Error(message));
			}

			return fn(err, response);
		});
	};
}

/**
 * Wraps the given wpcom request handler with httpEnvelopeHandler
 *
 * @param {WPCOM} wpcom - wpcom instance
 * @return {WPCOM} wpcom instance with the new request handler
 */

function injectHandler(wpcom) {
	var request = wpcom.request.bind(wpcom);

	return (0, _assign2.default)(wpcom, {
		request: requestHandler(request)
	});
}

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-ad.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CartAd = function CartAd(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { className: 'cart__cart-ad' },
    children
  );
}; /**
    * External dependencies
    */


CartAd.displayName = 'CartAd';

exports.default = CartAd;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-body/index.jsx":
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

var _cartItems = __webpack_require__("./client/my-sites/checkout/cart/cart-items.jsx");

var _cartItems2 = _interopRequireDefault(_cartItems);

var _cartCoupon = __webpack_require__("./client/my-sites/checkout/cart/cart-coupon.jsx");

var _cartCoupon2 = _interopRequireDefault(_cartCoupon);

var _cartTotal = __webpack_require__("./client/my-sites/checkout/cart/cart-total.jsx");

var _cartTotal2 = _interopRequireDefault(_cartTotal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var CartBody = function (_React$PureComponent) {
	(0, _inherits3.default)(CartBody, _React$PureComponent);

	function CartBody(props) {
		(0, _classCallCheck3.default)(this, CartBody);
		return (0, _possibleConstructorReturn3.default)(this, (CartBody.__proto__ || (0, _getPrototypeOf2.default)(CartBody)).call(this, props));
	}

	(0, _createClass3.default)(CartBody, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    cart = _props.cart,
			    collapse = _props.collapse,
			    selectedSite = _props.selectedSite,
			    showCoupon = _props.showCoupon;


			return _react2.default.createElement(
				'div',
				{ className: 'cart-body' },
				_react2.default.createElement(_cartItems2.default, {
					collapse: collapse,
					cart: cart,
					selectedSite: selectedSite }),
				_react2.default.createElement(_cartTotal2.default, { cart: cart }),
				showCoupon && _react2.default.createElement(_cartCoupon2.default, { cart: cart })
			);
		}
	}]);
	return CartBody;
}(_react2.default.PureComponent);

/**
 * Internal dependencies
 */


CartBody.propTypes = {
	collapse: _react.PropTypes.bool
};

CartBody.defaultProps = {
	collapse: false,
	showCoupon: false
};

exports.default = CartBody;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-body/loading-placeholder.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _loadingPlaceholder = __webpack_require__("./client/my-sites/checkout/cart/cart-item/loading-placeholder.jsx");

var _loadingPlaceholder2 = _interopRequireDefault(_loadingPlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var CartBodyLoadingPlaceholder = function CartBodyLoadingPlaceholder() {
	return _react2.default.createElement(
		'div',
		{ className: 'cart-body__loading-placeholder cart-body' },
		_react2.default.createElement(
			'ul',
			{ className: 'cart-items' },
			_react2.default.createElement(_loadingPlaceholder2.default, null),
			_react2.default.createElement(_loadingPlaceholder2.default, null)
		)
	);
};

/**
 * Internal dependencies
 */
exports.default = CartBodyLoadingPlaceholder;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-buttons.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CartButtons = undefined;

var _isFunction2 = __webpack_require__("./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _analytics = __webpack_require__("./client/lib/mixins/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var CartButtons = exports.CartButtons = _react2.default.createClass({
	displayName: 'CartButtons',

	mixins: [(0, _analytics2.default)('popupCart')],

	propTypes: {
		selectedSite: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.bool]).isRequired,
		translate: _react2.default.PropTypes.func.isRequired
	},

	getDefaultProps: function getDefaultProps() {
		return {
			showKeepSearching: false,
			translate: _identity3.default
		};
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'cart-buttons' },
			_react2.default.createElement(
				'button',
				{ className: 'cart-checkout-button button is-primary',
					onClick: this.goToCheckout },
				this.props.translate('Checkout', { context: 'Cart button' })
			),
			this.optionalKeepSearching()
		);
	},
	optionalKeepSearching: function optionalKeepSearching() {
		if (!this.props.showKeepSearching) {
			return;
		}

		return _react2.default.createElement(
			'button',
			{ className: 'cart-keep-searching-button button',
				onClick: this.onKeepSearchingClick },
			this.props.translate('Keep Searching')
		);
	},
	onKeepSearchingClick: function onKeepSearchingClick(event) {
		event.preventDefault();
		this.recordEvent('keepSearchButtonClick');
		if ((0, _isFunction3.default)(this.props.onKeepSearchingClick)) {
			this.props.onKeepSearchingClick(event);
		}
	},
	goToCheckout: function goToCheckout(event) {
		event.preventDefault();

		this.recordEvent('checkoutButtonClick');

		(0, _page2.default)('/checkout/' + this.props.selectedSite.slug);
	}
});

/**
 * Internal dependencies
 */
exports.default = (0, _i18nCalypso.localize)(CartButtons);

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-coupon.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var analytics = __webpack_require__("./client/lib/analytics/index.js"),
    upgradesActions = __webpack_require__("./client/lib/upgrades/actions/index.js");

module.exports = React.createClass({
	displayName: 'CartCoupon',

	getInitialState: function getInitialState() {
		var coupon = this.props.cart.coupon,
		    cartHadCouponBeforeMount = Boolean(this.props.cart.coupon);

		return {
			isCouponFormShowing: cartHadCouponBeforeMount,
			hasSubmittedCoupon: cartHadCouponBeforeMount,
			couponInputValue: coupon,
			userChangedCoupon: false
		};
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!this.state.userChangedCoupon) {
			this.setState({ couponInputValue: nextProps.cart.coupon });
		}
	},

	toggleCouponDetails: function toggleCouponDetails(event) {
		event.preventDefault();

		this.setState({ isCouponFormShowing: !this.state.isCouponFormShowing });

		if (this.state.isCouponFormShowing) {
			analytics.ga.recordEvent('Upgrades', 'Clicked Hide Coupon Code Link');
		} else {
			analytics.ga.recordEvent('Upgrades', 'Clicked Show Coupon Code Link');
		}
	},

	applyCoupon: function applyCoupon(event) {
		event.preventDefault();

		analytics.tracks.recordEvent('calypso_checkout_coupon_submit', {
			coupon_code: this.state.couponInputValue
		});

		this.setState({
			userChangedCoupon: false,
			hasSubmittedCoupon: true
		});
		upgradesActions.applyCoupon(this.state.couponInputValue);
	},

	handleCouponInput: function handleCouponInput(event) {
		this.setState({
			userChangedCoupon: true,
			couponInputValue: event.target.value
		});
	},

	getToggleLink: function getToggleLink() {
		if (this.props.cart.total_cost === 0) {
			return;
		}

		if (this.state.hasSubmittedCoupon) {
			return;
		}

		return React.createElement(
			'a',
			{ href: '', onClick: this.toggleCouponDetails },
			this.translate('Have a coupon code?')
		);
	},

	getCouponForm: function getCouponForm() {
		if (!this.state.isCouponFormShowing) {
			return;
		}

		if (this.state.hasSubmittedCoupon) {
			return;
		}

		return React.createElement(
			'form',
			{ onSubmit: this.applyCoupon },
			React.createElement('input', { type: 'text', placeholder: this.translate('Enter Coupon Code', { textOnly: true }), onChange: this.handleCouponInput, value: this.state.couponInputValue }),
			React.createElement(
				'button',
				{ type: 'submit', className: 'button' },
				this.translate('Apply')
			)
		);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'cart-coupon' },
			this.getToggleLink(),
			this.getCouponForm()
		);
	}
});

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-empty.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _startsWith2 = __webpack_require__("./node_modules/lodash/startsWith.js");

var _startsWith3 = _interopRequireDefault(_startsWith2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    page = __webpack_require__("./node_modules/page/index.js");

var CartEmpty = React.createClass({
	displayName: 'CartEmpty',

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'cart-empty' },
				this.translate('There are no items in your cart.')
			),
			React.createElement(
				'div',
				{ className: 'cart-buttons' },
				React.createElement(
					'button',
					{ className: 'cart-checkout-button button is-primary',
						onClick: this.handleClick },
					this.shouldShowPlanButton() ? this.translate('Add a Plan') : this.translate('Add a Domain')
				)
			)
		);
	},

	shouldShowPlanButton: function shouldShowPlanButton() {
		if (this.props.selectedSite.jetpack) {
			return true; // always show the plan button for jetpack sites (not the domain button)
		}
		return (0, _startsWith3.default)(this.props.path, '/domains');
	},

	handleClick: function handleClick(event) {
		event.preventDefault();

		page((this.shouldShowPlanButton() ? '/plans/' : '/domains/add/') + this.props.selectedSite.slug);
	}
});

module.exports = CartEmpty;

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CartItem = undefined;

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

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _cartValues = __webpack_require__("./client/lib/cart-values/index.js");

var _productsValues = __webpack_require__("./client/lib/products-values/index.js");

var _selectors = __webpack_require__("./client/state/current-user/selectors.js");

var _constants = __webpack_require__("./client/state/current-user/constants.js");

var _actions = __webpack_require__("./client/lib/upgrades/actions/index.js");

var upgradesActions = _interopRequireWildcard(_actions);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getIncludedDomain = _cartValues.cartItems.getIncludedDomain;

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

var CartItem = exports.CartItem = function (_React$Component) {
	(0, _inherits3.default)(CartItem, _React$Component);

	function CartItem() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CartItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CartItem.__proto__ || (0, _getPrototypeOf2.default)(CartItem)).call.apply(_ref, [this].concat(args))), _this), _this.removeFromCart = function (event) {
			event.preventDefault();
			_analytics2.default.ga.recordEvent('Upgrades', 'Clicked Remove From Cart Icon', 'Product ID', _this.props.cartItem.product_id);
			upgradesActions.removeItem(_this.props.cartItem, _this.props.domainsWithPlansOnly);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CartItem, [{
		key: 'price',
		value: function price() {
			var _props = this.props,
			    cart = _props.cart,
			    cartItem = _props.cartItem,
			    translate = _props.translate;


			if (typeof cartItem.cost === 'undefined') {
				return translate('Loading price');
			}

			if (cartItem.free_trial) {
				return this.getFreeTrialPrice();
			}

			if (_cartValues.cartItems.hasDomainCredit(cart) && (0, _productsValues.isDomainProduct)(cartItem) && cartItem.cost === 0) {
				return this.getDomainPlanPrice(cartItem);
			}

			var cost = cartItem.cost * cartItem.volume;

			return translate('%(cost)s %(currency)s', {
				args: {
					cost: cost,
					currency: cartItem.currency
				}
			});
		}
	}, {
		key: 'monthlyPrice',
		value: function monthlyPrice() {
			var _props$cartItem = this.props.cartItem,
			    cost = _props$cartItem.cost,
			    currency = _props$cartItem.currency;


			if (typeof cost === 'undefined') {
				return null;
			}

			if (!(0, _productsValues.isPlan)(this.props.cartItem)) {
				return null;
			}

			if (cost <= 0) {
				return null;
			}

			if ((0, _productsValues.isMonthly)(this.props.cartItem)) {
				return null;
			}

			return this.props.translate('(%(monthlyPrice)f %(currency)s x 12 months)', {
				args: {
					monthlyPrice: +(cost / 12).toFixed(currency === 'JPY' ? 0 : 2),
					currency: currency
				}
			});
		}
	}, {
		key: 'getDomainPlanPrice',
		value: function getDomainPlanPrice(cartItem) {
			if (cartItem && cartItem.product_cost) {
				return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'span',
						{ className: 'cart__free-with-plan' },
						cartItem.product_cost,
						' ',
						cartItem.currency
					),
					_react2.default.createElement(
						'span',
						{ className: 'cart__free-text' },
						this.props.translate('Free with your plan')
					)
				);
			}

			return _react2.default.createElement(
				'em',
				null,
				this.props.translate('Free with your plan')
			);
		}
	}, {
		key: 'getFreeTrialPrice',
		value: function getFreeTrialPrice() {
			var freeTrialText = this.props.translate('Free %(days)s Day Trial', {
				args: { days: '14' }
			});

			return _react2.default.createElement(
				'span',
				null,
				freeTrialText
			);
		}
	}, {
		key: 'getProductInfo',
		value: function getProductInfo() {
			var domain = this.props.cartItem.meta || this.props.selectedSite && this.props.selectedSite.domain;
			var info = null;

			if ((0, _productsValues.isGoogleApps)(this.props.cartItem) && this.props.cartItem.extra.google_apps_users) {
				info = this.props.cartItem.extra.google_apps_users.map(function (user) {
					return _react2.default.createElement(
						'div',
						null,
						user.email
					);
				});
			} else if ((0, _productsValues.isCredits)(this.props.cartItem)) {
				info = null;
			} else if (getIncludedDomain(this.props.cartItem)) {
				info = getIncludedDomain(this.props.cartItem);
			} else if ((0, _productsValues.isTheme)(this.props.cartItem)) {
				info = this.props.selectedSite && this.props.selectedSite.domain;
			} else {
				info = domain;
			}
			return info;
		}
	}, {
		key: 'render',
		value: function render() {
			var name = this.getProductName();
			if (this.props.cartItem.bill_period && this.props.cartItem.bill_period !== -1) {
				if ((0, _productsValues.isMonthly)(this.props.cartItem)) {
					name += ' - ' + this.props.translate('monthly subscription');
				} else if ((0, _productsValues.isTheme)(this.props.cartItem)) {
					name += ' - ' + this.props.translate('never expires');
				} else {
					name += ' - ' + this.props.translate('annual subscription');
				}
			}

			/*eslint-disable wpcalypso/jsx-classname-namespace*/
			return _react2.default.createElement(
				'li',
				{ className: 'cart-item' },
				_react2.default.createElement(
					'div',
					{ className: 'primary-details' },
					_react2.default.createElement(
						'span',
						{ className: 'product-name' },
						name || this.props.translate('Loading…')
					),
					_react2.default.createElement(
						'span',
						{ className: 'product-domain' },
						this.getProductInfo()
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'secondary-details' },
					_react2.default.createElement(
						'span',
						{ className: 'product-price' },
						this.price()
					),
					_react2.default.createElement(
						'span',
						{ className: 'product-monthly-price' },
						this.monthlyPrice()
					),
					this.removeButton()
				)
			);
			/*eslint-enable wpcalypso/jsx-classname-namespace*/
		}
	}, {
		key: 'getProductName',
		value: function getProductName() {
			var cartItem = this.props.cartItem;
			var options = {
				count: cartItem.volume,
				args: {
					volume: cartItem.volume,
					productName: cartItem.product_name
				}
			};

			if (!cartItem.volume) {
				return cartItem.product_name;
			} else if (cartItem.volume === 1) {
				switch (cartItem.product_slug) {
					case 'gapps':
						return this.props.translate('%(productName)s (1 User)', {
							args: {
								productName: cartItem.product_name
							}
						});

					default:
						return cartItem.product_name;
				}
			} else {
				switch (cartItem.product_slug) {
					case 'gapps':
						return this.props.translate('%(productName)s (%(volume)s User)', '%(productName)s (%(volume)s Users)', options);

					default:
						return this.props.translate('%(productName)s (%(volume)s Item)', '%(productName)s (%(volume)s Items)', options);
				}
			}
		}
	}, {
		key: 'removeButton',
		value: function removeButton() {
			if ((0, _cartValues.canRemoveFromCart)(this.props.cart, this.props.cartItem)) {
				/* eslint-disable wpcalypso/jsx-classname-namespace */
				return _react2.default.createElement('button', { className: 'remove-item noticon noticon-close', onClick: this.removeFromCart });
				/* eslint-enable wpcalypso/jsx-classname-namespace */
			}
		}
	}]);
	return CartItem;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		domainsWithPlansOnly: (0, _selectors.currentUserHasFlag)(state, _constants.DOMAINS_WITH_PLANS_ONLY)
	};
})((0, _i18nCalypso.localize)(CartItem));

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-item/loading-placeholder.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var CartItemLoadingPlaceholder = function CartItemLoadingPlaceholder() {
	return _react2.default.createElement(
		'div',
		{ className: 'cart-item__loading-placeholder cart-item' },
		_react2.default.createElement(
			'div',
			{ className: 'primary-details' },
			_react2.default.createElement('span', { className: 'product-name' }),
			_react2.default.createElement('span', { className: 'product-domain' })
		),
		_react2.default.createElement(
			'div',
			{ className: 'secondary-details' },
			_react2.default.createElement('span', { className: 'product-price' }),
			_react2.default.createElement(_button2.default, { className: 'cart-item__loading-placeholder-remove-item remove-item' })
		)
	);
};

/**
 * Internal dependencies
 */
exports.default = CartItemLoadingPlaceholder;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-items.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CartItems = undefined;

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

var _cartItem = __webpack_require__("./client/my-sites/checkout/cart/cart-item.jsx");

var _cartItem2 = _interopRequireDefault(_cartItem);

var _cartValues = __webpack_require__("./client/lib/cart-values/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var COLLAPSED_ITEMS_COUNT = 2;

/**
 * Internal dependencies
 */

var CartItems = exports.CartItems = function (_React$Component) {
	(0, _inherits3.default)(CartItems, _React$Component);

	function CartItems(props) {
		(0, _classCallCheck3.default)(this, CartItems);

		var _this = (0, _possibleConstructorReturn3.default)(this, (CartItems.__proto__ || (0, _getPrototypeOf2.default)(CartItems)).call(this, props));

		_this.handleExpand = function (event) {
			event.preventDefault();

			// If we call setState here directly, it would remove the expander from DOM,
			// and then click-outside from Popover would consider it as an outside click,
			// and it would close the Popover cart.
			// event.stopPropagation() does not help.
			setTimeout(function () {
				_this.setState({ isCollapsed: false });
			});
		};

		_this.state = {
			isCollapsed: props.collapse
		};
		return _this;
	}

	(0, _createClass3.default)(CartItems, [{
		key: 'collapseItems',
		value: function collapseItems(items) {
			var collapsedItemsCount = items.length - COLLAPSED_ITEMS_COUNT,
			    collapsedItems = items.slice(0, COLLAPSED_ITEMS_COUNT);

			collapsedItems.push(_react2.default.createElement(
				'li',
				{ key: 'items-expander' },
				_react2.default.createElement(
					'a',
					{ className: 'cart-items__expander', href: '#', onClick: this.handleExpand },
					this.props.translate('+ %(count)d more item', '+ %(count)d more items', {
						count: collapsedItemsCount,
						args: { count: collapsedItemsCount }
					})
				)
			));

			return collapsedItems;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var cart = this.props.cart;


			if (!_cartValues.cartItems.getAll(cart)) {
				return;
			}

			var items = _cartValues.cartItems.getAllSorted(cart).map(function (cartItem) {
				return _react2.default.createElement(_cartItem2.default, {
					cart: cart,
					cartItem: cartItem,
					selectedSite: _this2.props.selectedSite,
					key: cartItem.product_id + '-' + cartItem.meta });
			});

			if (this.state.isCollapsed && items.length > COLLAPSED_ITEMS_COUNT + 1) {
				items = this.collapseItems(items);
			}

			return _react2.default.createElement(
				'ul',
				{ className: 'cart-items' },
				items
			);
		}
	}]);
	return CartItems;
}(_react2.default.Component);

CartItems.propTypes = {
	collapse: _react2.default.PropTypes.bool.isRequired
};
exports.default = (0, _i18nCalypso.localize)(CartItems);

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-messages-mixin.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _notices = __webpack_require__("./client/notices/index.js");

var _notices2 = _interopRequireDefault(_notices);

var _cartValues = __webpack_require__("./client/lib/cart-values/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
module.exports = {
	componentDidMount: function componentDidMount() {
		// Makes sure that we display any messages from the current cart
		// that might have been delivered when the cart was unmounted
		this.displayCartMessages(this.props.cart);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!nextProps.cart.hasLoadedFromServer) {
			return;
		}

		if (this.props.cart.messages !== nextProps.cart.messages) {
			this.displayCartMessages(nextProps.cart);
		}
	},
	getChargebackErrorMessage: function getChargebackErrorMessage() {
		return this.props.translate('{{strong}}Warning:{{/strong}} One or more transactions linked to this site were refunded due to a contested charge. ' + 'This may have happened because of a chargeback by the credit card holder or a PayPal investigation. Each contested ' + 'charge carries a fine. To resolve the issue and re-enable posting, please {{a}}pay for the chargeback fine{{/a}}.', {
			components: {
				strong: _react2.default.createElement('strong', null),
				a: _react2.default.createElement('a', { href: '/checkout/' + this.props.selectedSite.slug })
			}
		});
	},
	getBlockedPurchaseErrorMessage: function getBlockedPurchaseErrorMessage() {
		return this.props.translate('Purchases are currently disabled. Please {{a}}contact us{{/a}} to re-enable purchases.', {
			components: {
				a: _react2.default.createElement('a', {
					href: 'https://wordpress.com/error-report/?url=payment@' + this.props.selectedSite.slug,
					target: '_blank',
					rel: 'noopener noreferrer' })
			}
		});
	},
	getPrettyErrorMessages: function getPrettyErrorMessages(messages) {
		var _this = this;

		if (!messages) {
			return [];
		}

		return messages.map(function (error) {
			switch (error.code) {
				case 'chargeback':
					return (0, _assign2.default)(error, { message: _this.getChargebackErrorMessage() });

				case 'blocked':
					return (0, _assign2.default)(error, { message: _this.getBlockedPurchaseErrorMessage() });

				default:
					return error;
			}
		});
	},
	displayCartMessages: function displayCartMessages(newCart) {
		var previousCart = this.state ? this.state.previousCart : null,
		    messages = (0, _cartValues.getNewMessages)(previousCart, newCart);

		messages.errors = this.getPrettyErrorMessages(messages.errors);

		this.setState({ previousCart: newCart });

		if (!(0, _isEmpty3.default)(messages.errors)) {
			_notices2.default.error(messages.errors.map(function (error, index) {
				return _react2.default.createElement(
					'p',
					{ key: error.code + '-' + index },
					error.message
				);
			}), { persistent: true });
		} else if (!(0, _isEmpty3.default)(messages.success)) {
			_notices2.default.success(messages.success.map(function (success, index) {
				return _react2.default.createElement(
					'p',
					{ key: success.code + '-' + index },
					success.message
				);
			}));
		}
	}
}; /**
    * External dependencies
    */

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-plan-ad.jsx":
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

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _cartAd = __webpack_require__("./client/my-sites/checkout/cart/cart-ad.jsx");

var _cartAd2 = _interopRequireDefault(_cartAd);

var _cartValues = __webpack_require__("./client/lib/cart-values/index.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _isDomainOnlySite = __webpack_require__("./client/state/selectors/is-domain-only-site.js");

var _isDomainOnlySite2 = _interopRequireDefault(_isDomainOnlySite);

var _productsValues = __webpack_require__("./client/lib/products-values/index.js");

var _actions = __webpack_require__("./client/lib/upgrades/actions/index.js");

var upgradesActions = _interopRequireWildcard(_actions);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var CartPlanAd = function (_Component) {
	(0, _inherits3.default)(CartPlanAd, _Component);

	function CartPlanAd() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CartPlanAd);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CartPlanAd.__proto__ || (0, _getPrototypeOf2.default)(CartPlanAd)).call.apply(_ref, [this].concat(args))), _this), _this.addToCartAndRedirect = function (event) {
			event.preventDefault();
			upgradesActions.addItem(_cartValues.cartItems.premiumPlan(_constants.PLAN_PREMIUM, { isFreeTrial: false }));
			(0, _page2.default)('/checkout/' + _this.props.selectedSite.slug);
		}, _this.shouldDisplayAd = function () {
			var _this$props = _this.props,
			    cart = _this$props.cart,
			    isDomainOnly = _this$props.isDomainOnly,
			    selectedSite = _this$props.selectedSite;

			var domainRegistrations = _cartValues.cartItems.getDomainRegistrations(cart);
			var isDomainPremium = domainRegistrations.length === 1 && (0, _get3.default)(domainRegistrations[0], 'extra.premium', false);

			return !isDomainOnly && cart.hasLoadedFromServer && !cart.hasPendingServerUpdates && !_cartValues.cartItems.hasDomainCredit(cart) && domainRegistrations.length === 1 && !isDomainPremium && selectedSite && selectedSite.plan && !(0, _productsValues.isPlan)(selectedSite.plan);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CartPlanAd, [{
		key: 'render',
		value: function render() {
			if (!this.shouldDisplayAd()) {
				return null;
			}

			return _react2.default.createElement(
				_cartAd2.default,
				null,
				this.props.translate('Get this domain for free when you upgrade to {{strong}}WordPress.com Premium{{/strong}}!', {
					components: { strong: _react2.default.createElement('strong', null) }
				}),
				' ',
				_react2.default.createElement(
					'a',
					{ href: '', onClick: this.addToCartAndRedirect },
					this.props.translate('Upgrade Now')
				)
			);
		}
	}]);
	return CartPlanAd;
}(_react.Component);

/**
 * Internal dependencies
 */


CartPlanAd.propTypes = {
	cart: _propTypes2.default.object.isRequired,
	isDomainOnly: _propTypes2.default.bool,
	selectedSite: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.object])
};

exports.default = (0, _reactRedux.connect)(function (state) {
	var selectedSiteId = (0, _selectors.getSelectedSiteId)(state);

	return {
		isDomainOnly: (0, _isDomainOnlySite2.default)(state, selectedSiteId)
	};
})((0, _i18nCalypso.localize)(CartPlanAd));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/cart/cart-total.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var cartItems = __webpack_require__("./client/lib/cart-values/index.js").cartItems;

var CartTotal = React.createClass({
	displayName: 'CartTotal',

	render: function render() {
		var cart = this.props.cart;

		if (cart.hasPendingServerUpdates) {
			return React.createElement(
				'div',
				{ className: 'cart-total' },
				this.translate('Recalculating…', {
					context: 'Upgrades: Updating cart cost in checkout'
				})
			);
		}

		if (!cart.total_cost_display) {
			return React.createElement('div', { className: 'cart-total' });
		}

		return React.createElement(
			'div',
			{ className: 'cart-total' },
			React.createElement(
				'span',
				{ className: 'cart-total-label' },
				this.totalLabel()
			),
			React.createElement(
				'span',
				{ className: 'cart-total-amount' },
				cart.total_cost_display
			)
		);
	},

	totalLabel: function totalLabel() {
		var cart = this.props.cart;

		if (cartItems.hasOnlyFreeTrial(cart)) {
			return this.translate('Total Due Now:', {
				context: 'Upgrades: Total cart cost in checkout when buying a free trial'
			});
		} else {
			return this.translate('Total:', {
				context: 'Upgrades: Total cart cost in checkout when buying a full price upgrade'
			});
		}
	}
});

module.exports = CartTotal;

/***/ }),

/***/ "./client/my-sites/checkout/cart/popover-cart.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reject2 = __webpack_require__("./node_modules/lodash/reject.js");

var _reject3 = _interopRequireDefault(_reject2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _cartBody = __webpack_require__("./client/my-sites/checkout/cart/cart-body/index.jsx");

var _cartBody2 = _interopRequireDefault(_cartBody);

var _loadingPlaceholder = __webpack_require__("./client/my-sites/checkout/cart/cart-body/loading-placeholder.jsx");

var _loadingPlaceholder2 = _interopRequireDefault(_loadingPlaceholder);

var _cartMessagesMixin = __webpack_require__("./client/my-sites/checkout/cart/cart-messages-mixin.jsx");

var _cartMessagesMixin2 = _interopRequireDefault(_cartMessagesMixin);

var _cartButtons = __webpack_require__("./client/my-sites/checkout/cart/cart-buttons.jsx");

var _cartButtons2 = _interopRequireDefault(_cartButtons);

var _count = __webpack_require__("./client/components/count/index.jsx");

var _count2 = _interopRequireDefault(_count);

var _popover = __webpack_require__("./client/components/popover/index.jsx");

var _popover2 = _interopRequireDefault(_popover);

var _cartEmpty = __webpack_require__("./client/my-sites/checkout/cart/cart-empty.jsx");

var _cartEmpty2 = _interopRequireDefault(_cartEmpty);

var _cartPlanAd = __webpack_require__("./client/my-sites/checkout/cart/cart-plan-ad.jsx");

var _cartPlanAd2 = _interopRequireDefault(_cartPlanAd);

var _productsValues = __webpack_require__("./client/lib/products-values/index.js");

var _trackComponentView = __webpack_require__("./client/lib/analytics/track-component-view/index.jsx");

var _trackComponentView2 = _interopRequireDefault(_trackComponentView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var PopoverCart = _react2.default.createClass({
	displayName: 'PopoverCart',

	propTypes: {
		cart: _react2.default.PropTypes.object.isRequired,
		selectedSite: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.bool]).isRequired,
		onToggle: _react2.default.PropTypes.func.isRequired,
		closeSectionNavMobilePanel: _react2.default.PropTypes.func,
		visible: _react2.default.PropTypes.bool.isRequired,
		pinned: _react2.default.PropTypes.bool.isRequired,
		showKeepSearching: _react2.default.PropTypes.bool.isRequired,
		onKeepSearchingClick: _react2.default.PropTypes.func.isRequired
	},

	itemCount: function itemCount() {
		if (!this.props.cart.hasLoadedFromServer) {
			return;
		}

		return (0, _reject3.default)(this.props.cart.products, _productsValues.isCredits).length;
	},

	mixins: [_cartMessagesMixin2.default],

	render: function render() {
		var countBadge = void 0;
		var classes = (0, _classnames2.default)({
			'popover-cart': true,
			pinned: this.props.pinned
		});

		if (this.itemCount()) {
			countBadge = _react2.default.createElement(
				'div',
				{ className: 'cart__count-badge count-badge-pulsing' },
				_react2.default.createElement(_count2.default, { primary: true, count: this.itemCount() }),
				_react2.default.createElement(_trackComponentView2.default, { eventName: 'calypso_popover_cart_badge_impression' })
			);
		}

		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement(
					'button',
					{ className: 'cart-toggle-button',
						ref: 'toggleButton',
						onClick: this.onToggle },
					_react2.default.createElement(
						'div',
						{ className: 'popover-cart__label' },
						this.props.translate('Cart')
					),
					_react2.default.createElement(_gridicons2.default, { icon: 'cart', size: 24 }),
					countBadge
				)
			),
			this.cartContent()
		);
	},

	cartContent: function cartContent() {
		if (!this.props.pinned) {
			return _react2.default.createElement(
				_popover2.default,
				{ className: 'popover-cart__popover popover',
					isVisible: this.props.visible,
					position: 'bottom left',
					onClose: this.onClose,
					context: this.refs.toggleButton },
				this.cartBody(),
				_react2.default.createElement(_trackComponentView2.default, {
					eventName: 'calypso_popover_cart_content_impression',
					eventProperties: { style: 'popover' } })
			);
		}
		if (this.props.visible) {
			return _react2.default.createElement(
				'div',
				{ className: 'popover-cart__mobile-cart' },
				_react2.default.createElement('div', { className: 'top-arrow' }),
				this.cartBody(),
				_react2.default.createElement(_trackComponentView2.default, {
					eventName: 'calypso_popover_cart_content_impression',
					eventProperties: { style: 'mobile-cart' } })
			);
		}
	},

	onToggle: function onToggle(event) {
		this.props.closeSectionNavMobilePanel();
		this.props.onToggle(event);
	},

	cartBody: function cartBody() {
		if (!this.props.cart.hasLoadedFromServer) {
			return _react2.default.createElement(_loadingPlaceholder2.default, null);
		}

		if (!this.props.cart.products.length) {
			return _react2.default.createElement(_cartEmpty2.default, { selectedSite: this.props.selectedSite, path: this.props.path });
		}

		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_cartPlanAd2.default, {
				cart: this.props.cart,
				selectedSite: this.props.selectedSite }),
			_react2.default.createElement(_cartBody2.default, {
				collapse: true,
				cart: this.props.cart,
				selectedSite: this.props.selectedSite }),
			_react2.default.createElement(_cartButtons2.default, {
				selectedSite: this.props.selectedSite,
				showKeepSearching: this.props.showKeepSearching,
				onKeepSearchingClick: this.props.onKeepSearchingClick
			})
		);
	},

	onClose: function onClose() {
		// Since this callback can fire after the user navigates off the page, we
		// we need to check if it's mounted to prevent errors.
		if (!this.isMounted()) {
			return;
		}

		// if the cart became pinned, ignore close event from Popover
		if (this.props.pinned) {
			return;
		}

		this.onToggle();
	}
});

exports.default = (0, _i18nCalypso.localize)(PopoverCart);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/checkout-thank-you/custom-domain-purchase-detail.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

var _utils = __webpack_require__("./client/lib/site/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var CustomDomainPurchaseDetail = function CustomDomainPurchaseDetail(_ref) {
	var selectedSite = _ref.selectedSite,
	    hasDomainCredit = _ref.hasDomainCredit,
	    translate = _ref.translate;

	if (hasDomainCredit && selectedSite.plan.user_is_owner) {
		return _react2.default.createElement(_purchaseDetail2.default, {
			icon: 'globe',
			title: translate('Select your custom domain'),
			description: translate('Your plan includes a free custom domain. Replace {{em}}%(siteDomain)s{{/em}} ' + 'with a custom domain to personalize your site. Does not apply to premium domains.', {
				args: { siteDomain: selectedSite.domain },
				components: { em: _react2.default.createElement('em', null) }
			}),
			buttonText: translate('Claim your free domain'),
			href: '/domains/add/' + selectedSite.slug
		});
	} else if (!hasDomainCredit && (0, _utils.hasCustomDomain)(selectedSite)) {
		var actionButton = {};
		actionButton.buttonText = translate('Manage my domains');
		actionButton.href = '/domains/manage/' + selectedSite.slug;
		return _react2.default.createElement(_purchaseDetail2.default, (0, _extends3.default)({
			icon: 'globe',
			title: translate('Custom Domain'),
			description: translate('Your plan includes the custom domain {{em}}%(siteDomain)s{{/em}}, your own personal corner of the web.', {
				args: { siteDomain: selectedSite.domain },
				components: { em: _react2.default.createElement('em', null) }
			})
		}, actionButton));
	} else {
		return null;
	}
};

CustomDomainPurchaseDetail.propTypes = {
	selectedSite: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.bool, _react2.default.PropTypes.object]).isRequired,
	hasDomainCredit: _react2.default.PropTypes.bool
};

exports.default = (0, _i18nCalypso.localize)(CustomDomainPurchaseDetail);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/checkout-thank-you/google-voucher/index.jsx":
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

var _debounce2 = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce3 = _interopRequireDefault(_debounce2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _clipboardButtonInput = __webpack_require__("./client/components/clipboard-button-input/index.jsx");

var _clipboardButtonInput2 = _interopRequireDefault(_clipboardButtonInput);

var _purchaseDetail = __webpack_require__("./client/components/purchase-detail/index.jsx");

var _purchaseDetail2 = _interopRequireDefault(_purchaseDetail);

var _purchaseButton = __webpack_require__("./client/components/purchase-detail/purchase-button.jsx");

var _purchaseButton2 = _interopRequireDefault(_purchaseButton);

var _tipInfo = __webpack_require__("./client/components/purchase-detail/tip-info.jsx");

var _tipInfo2 = _interopRequireDefault(_tipInfo);

var _dialog = __webpack_require__("./client/components/dialog/index.jsx");

var _dialog2 = _interopRequireDefault(_dialog);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _termsAndConditions = __webpack_require__("./client/my-sites/checkout/checkout-thank-you/google-voucher/terms-and-conditions.jsx");

var _termsAndConditions2 = _interopRequireDefault(_termsAndConditions);

var _querySiteVouchers = __webpack_require__("./client/components/data/query-site-vouchers/index.jsx");

var _querySiteVouchers2 = _interopRequireDefault(_querySiteVouchers);

var _actions = __webpack_require__("./client/state/sites/vouchers/actions.js");

var _serviceTypes = __webpack_require__("./client/state/sites/vouchers/service-types.js");

var _selectors = __webpack_require__("./client/state/sites/vouchers/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var INITIAL_STEP = 'INITIAL_STEP',
    TERMS_AND_CONDITIONS = 'TERMS_AND_CONDITIONS',
    CODE_REDEEMED = 'CODE_REDEEMED'; /**
                                      * External dependencies
                                      */

var GoogleVoucherDetails = function (_Component) {
	(0, _inherits3.default)(GoogleVoucherDetails, _Component);

	function GoogleVoucherDetails() {
		(0, _classCallCheck3.default)(this, GoogleVoucherDetails);

		// bounds
		var _this = (0, _possibleConstructorReturn3.default)(this, (GoogleVoucherDetails.__proto__ || (0, _getPrototypeOf2.default)(GoogleVoucherDetails)).call(this));

		_this.onGenerateCode = _this.onGenerateCode.bind(_this);
		_this.onDialogCancel = _this.onDialogCancel.bind(_this);
		_this.onAcceptTermsAndConditions = _this.onAcceptTermsAndConditions.bind(_this);
		_this.onSetupGoogleAdWordsLink = _this.onSetupGoogleAdWordsLink.bind(_this);

		// debounced
		_this.changeStep = (0, _debounce3.default)(_this.changeStep, 300);

		_this.state = {
			step: INITIAL_STEP
		};
		return _this;
	}

	(0, _createClass3.default)(GoogleVoucherDetails, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var voucher = this.getVoucher();
			if (voucher && voucher.status === 'assigned') {
				this.setState({ step: CODE_REDEEMED });
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!nextProps.googleAdCredits) {
				return null;
			}

			if (this.props.googleAdCredits === nextProps.googleAdCredits) {
				return null;
			}

			if (nextProps.googleAdCredits.length > 0) {
				this.setState({ step: CODE_REDEEMED });
			}
		}
	}, {
		key: 'onGenerateCode',
		value: function onGenerateCode() {
			_analytics2.default.ga.recordEvent('calypso_plans_google_voucher_generate_click', 'Cliked Generate Code Button');

			this.changeStep();
		}
	}, {
		key: 'onDialogCancel',
		value: function onDialogCancel() {
			this.setState({ step: INITIAL_STEP });
		}
	}, {
		key: 'onAcceptTermsAndConditions',
		value: function onAcceptTermsAndConditions() {
			_analytics2.default.ga.recordEvent('calypso_plans_google_voucher_toc_accept_click', 'Cliked Agree Button');

			this.props.assignVoucher(this.props.selectedSite.ID, _serviceTypes.GOOGLE_CREDITS);
			this.setState({ step: CODE_REDEEMED });
		}
	}, {
		key: 'onSetupGoogleAdWordsLink',
		value: function onSetupGoogleAdWordsLink() {
			_analytics2.default.ga.recordEvent('calypso_plans_google_voucher_setup_click', 'Cliked Setup Goole AdWords Button');
		}
	}, {
		key: 'changeStep',
		value: function changeStep() {
			var newStep = this.state.step === INITIAL_STEP ? TERMS_AND_CONDITIONS : CODE_REDEEMED;
			this.setState({ step: newStep });
		}
	}, {
		key: 'getVoucher',
		value: function getVoucher() {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
			var googleAdCredits = props.googleAdCredits;

			return googleAdCredits.length > 0 ? googleAdCredits[0] : {};
		}
	}, {
		key: 'renderInitialStep',
		value: function renderInitialStep() {
			return _react2.default.createElement(
				'div',
				{ className: 'google-voucher__initial-step' },
				_react2.default.createElement(_purchaseButton2.default, {
					onClick: this.onGenerateCode,
					text: this.props.translate('Generate code') }),
				_react2.default.createElement(_tipInfo2.default, {
					info: this.props.translate('Offer valid in US after spending the first $25 on Google AdWords.') })
			);
		}
	}, {
		key: 'renderTermsAndConditions',
		value: function renderTermsAndConditions() {
			return _react2.default.createElement(
				_dialog2.default,
				{
					isVisible: true,
					onClose: this.onDialogCancel,
					additionalClassNames: 'google-voucher-dialog'
				},
				_react2.default.createElement(
					'div',
					{ className: 'google-voucher-dialog__header' },
					_react2.default.createElement('img', {
						src: '/calypso/images/google-vouchers/google-voucher.svg',
						className: 'google-voucher-dialog__header__image' }),
					_react2.default.createElement(
						'div',
						{ className: 'google-voucher-dialog__header__text' },
						_react2.default.createElement(
							'h1',
							null,
							this.props.translate('Terms of Service')
						),
						_react2.default.createElement(
							'p',
							null,
							this.props.translate('Google AdWords credit')
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'google-voucher-dialog__body' },
					_react2.default.createElement(_termsAndConditions2.default, null)
				),
				_react2.default.createElement(
					'div',
					{ className: 'google-voucher-dialog__footer' },
					_react2.default.createElement(
						_button2.default,
						{
							className: 'google-vouchers-dialog__cancel-button',
							onClick: this.onDialogCancel
						},
						this.props.translate('Cancel')
					),
					_react2.default.createElement(
						_button2.default,
						{
							className: 'google-vouchers-dialog__agree-button',
							onClick: this.onAcceptTermsAndConditions,
							primary: true
						},
						this.props.translate('Agree')
					)
				)
			);
		}
	}, {
		key: 'renderCodeRedeemed',
		value: function renderCodeRedeemed() {
			var _getVoucher = this.getVoucher(),
			    code = _getVoucher.code;

			return _react2.default.createElement(
				'div',
				{ className: 'google-voucher' },
				_react2.default.createElement(_clipboardButtonInput2.default, {
					value: code,
					disabled: !code }),
				_react2.default.createElement(
					'div',
					{ className: 'google-voucher-code' },
					_react2.default.createElement(
						'p',
						{ className: 'form-setting-explanation' },
						this.props.translate('Copy this unique, one-time use code to your clipboard and setup your Google AdWords account. {{a}}View help guide{{/a}}', {
							components: {
								a: _react2.default.createElement('a', {
									className: 'google-voucher-code__help-link',
									href: 'https://en.support.wordpress.com/google-adwords-credit/',
									target: '_blank',
									rel: 'noopener noreferrer' })
							}
						})
					),
					_react2.default.createElement(_purchaseButton2.default, {
						className: 'google-voucher-code__setup-google-adwords',
						href: 'https://www.google.com/adwords/',
						target: '_blank',
						rel: 'noopener noreferrer',
						onClick: this.onSetupGoogleAdWordsLink,
						text: this.props.translate('Setup Google AdWords') })
				),
				_react2.default.createElement(_tipInfo2.default, {
					className: 'google-voucher-advice',
					info: this.props.translate('Offer valid in US after spending the first $25 on Google AdWords.') })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    selectedSite = _props.selectedSite,
			    translate = _props.translate;
			var step = this.state.step;

			var body = void 0;

			switch (step) {
				case INITIAL_STEP:
					body = this.renderInitialStep();
					break;
				case TERMS_AND_CONDITIONS:
					body = this.renderTermsAndConditions();
					break;
				case CODE_REDEEMED:
					body = this.renderCodeRedeemed();
					break;
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_querySiteVouchers2.default, { siteId: selectedSite.ID }),
				_react2.default.createElement(_purchaseDetail2.default, {
					id: 'google-credits',
					icon: 'tag',
					title: translate('Google AdWords credit'),
					description: translate('Use your {{strong}}$100{{/strong}} in credit with Google to bring the right traffic to your most important Posts and Pages.', {
						components: {
							strong: _react2.default.createElement('strong', null)
						}
					}),
					body: body })
			);
		}
	}]);
	return GoogleVoucherDetails;
}(_react.Component);

GoogleVoucherDetails.propTypes = {
	selectedSite: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]).isRequired,
	googleAdCredits: _react.PropTypes.array
};

exports.default = (0, _reactRedux.connect)(function (state, props) {
	var site = props.selectedSite;
	return {
		vouchers: (0, _selectors.getVouchersBySite)(state, site),
		googleAdCredits: (0, _selectors.getGoogleAdCredits)(state, site)
	};
}, { assignVoucher: _actions.assignSiteVoucher })((0, _i18nCalypso.localize)(GoogleVoucherDetails));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/checkout/checkout-thank-you/google-voucher/terms-and-conditions.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _externalLink = __webpack_require__("./client/components/external-link/index.jsx");

var _externalLink2 = _interopRequireDefault(_externalLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Constants
 */
var expirationDate = '2017-10-31';

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


var googleTermsAndConditions = function googleTermsAndConditions(_ref) {
	var translate = _ref.translate;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h3',
			null,
			translate('Terms and conditions for this offer:')
		),
		_react2.default.createElement(
			'p',
			null,
			translate('In the below terms, “AdWords” may mean AdWords or AdWords Express, as appropriate.')
		),
		_react2.default.createElement(
			'ol',
			null,
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('Offer available to customers with a billing address in the United States only. ' + 'One promotional code per advertiser.')
			),
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('To activate this offer: Enter the promotional code in your account before %(expirationDate)s. ' + 'In order to participate in this offer, ' + 'you must enter the code within 14 days of your first ad impression being served from your first AdWords account.', {
					args: {
						expirationDate: (0, _i18nCalypso.moment)(expirationDate).format('LL')
					}
				})
			),
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('To earn the credit: After entering the code, your advertising campaigns must accrue costs of at least $25, ' + 'excluding any taxes, within 30 days. Making a payment of $25 is not sufficient. ' + 'The tracking of advertising costs towards $25 begins after you’ve entered the code.')
			),
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('Once 2 and 3 are completed, the credit will typically be applied within 5 days to the Billing Summary of your account.')
			),
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('Credits apply to future advertising costs only. ' + 'Credits cannot be applied to costs accrued before the code was entered.')
			),
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('You won’t receive a notification once your credit is used up and any additional advertising costs ' + 'will be charged to your form of payment. ' + 'If you don’t want to continue advertising, you can pause or delete your campaigns at any time.')
			),
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('Your account must be successfully billed by AdWords ' + 'and remain in good standing in order to qualify for the promotional credit.')
			),
			_react2.default.createElement(
				'li',
				{ className: 'google-voucher__terms-and-conditions' },
				translate('Full terms and conditions can be found here '),
				_react2.default.createElement(
					_externalLink2.default,
					{
						href: 'http://www.google.com/adwords/coupons/terms.html',
						target: '_blank',
						rel: 'noopener noreferrer'
					},
					'http://www.google.com/adwords/coupons/terms.html'
				),
				'.'
			)
		)
	);
};

exports.default = (0, _i18nCalypso.localize)(googleTermsAndConditions);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/comments/comment-navigation/comment-navigation-tab.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CommentNavigationTab = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var CommentNavigationTab = exports.CommentNavigationTab = function CommentNavigationTab(_ref) {
	var children = _ref.children,
	    className = _ref.className,
	    onClick = _ref.onClick;
	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)('comment-navigation__tab', className), onClick: onClick },
		children
	);
};

exports.default = CommentNavigationTab;

/***/ }),

/***/ "./client/my-sites/domains/navigation.jsx":
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

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _path = __webpack_require__("./client/lib/route/path.js");

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _viewport2 = _interopRequireDefault(_viewport);

var _constants = __webpack_require__("./client/lib/upgrades/constants.js");

var _popoverCart = __webpack_require__("./client/my-sites/checkout/cart/popover-cart.jsx");

var _popoverCart2 = _interopRequireDefault(_popoverCart);

var _automatedTransfer = __webpack_require__("./client/lib/automated-transfer/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PlansNavigation = function (_React$Component) {
	(0, _inherits3.default)(PlansNavigation, _React$Component);

	function PlansNavigation() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PlansNavigation);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PlansNavigation.__proto__ || (0, _getPrototypeOf2.default)(PlansNavigation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			cartVisible: false,
			cartShowKeepSearching: false
		}, _this.toggleCartVisibility = function (event) {
			if (event) {
				event.preventDefault();
			}

			_this.setState({ cartVisible: !_this.state.cartVisible });
		}, _this.onMobileNavPanelOpen = function () {
			_this.setState({ cartVisible: false });
		}, _this.onKeepSearchingClick = function () {
			_this.setState({ cartVisible: false });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PlansNavigation, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.dispatchToken = _dispatcher2.default.register(function (payload) {
				if (payload.action.type === _constants.action.CART_POPUP_OPEN) {
					this.setState({ cartVisible: true, cartShowKeepSearching: payload.action.options.showKeepSearching });
				} else if (payload.action.type === _constants.action.CART_POPUP_CLOSE) {
					this.setState({ cartVisible: false });
				}
			}.bind(this));
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_dispatcher2.default.unregister(this.dispatchToken);
		}
	}, {
		key: 'getSectionTitle',
		value: function getSectionTitle(path) {
			switch (path) {
				case '/plans/my-plan':
					return 'My Plan';

				case '/plans':
				case '/plans/monthly':
					return 'Plans';

				case '/domains/manage':
				case '/domains/add':
					return 'Domains';

				case '/domains/manage/email':
					return 'Email';

				default:
					return path.split('?')[0].replace(/\//g, ' ');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var translate = this.props.translate;

			var site = this.props.selectedSite;
			var path = (0, _path.sectionify)(this.props.path);
			var hasPlan = site && site.plan && site.plan.product_slug !== 'free_plan';
			var sectionTitle = this.getSectionTitle(path);
			var userCanManageOptions = (0, _get3.default)(site, 'capabilities.manage_options', false);
			var canManageDomain = userCanManageOptions && ((0, _automatedTransfer.isATEnabled)(site) || !site.jetpack);

			return _react2.default.createElement(
				_sectionNav2.default,
				{
					hasPinnedItems: _viewport2.default.isMobile(),
					selectedText: sectionTitle,
					onMobileNavPanelOpen: this.onMobileNavPanelOpen },
				_react2.default.createElement(
					_tabs2.default,
					{ label: 'Section', selectedText: sectionTitle },
					hasPlan && _react2.default.createElement(
						_item2.default,
						{ path: '/plans/my-plan/' + site.slug, key: 'myPlan', selected: path === '/plans/my-plan' },
						translate('My Plan')
					),
					_react2.default.createElement(
						_item2.default,
						{ path: '/plans/' + site.slug, key: 'plans', selected: path === '/plans' || path === '/plans/monthly' },
						translate('Plans')
					),
					canManageDomain && _react2.default.createElement(
						_item2.default,
						{ path: '/domains/manage/' + site.slug, key: 'domains',
							selected: path === '/domains/manage' || path === '/domains/add' },
						translate('Domains')
					),
					canManageDomain && _react2.default.createElement(
						_item2.default,
						{ path: '/domains/manage/email/' + site.slug, key: 'googleApps',
							selected: path === '/domains/manage/email' },
						translate('Email')
					)
				),
				this.cartToggleButton()
			);
		}
	}, {
		key: 'cartToggleButton',
		value: function cartToggleButton() {
			if (!_config2.default.isEnabled('upgrades/checkout') || !this.props.cart) {
				return null;
			}

			return _react2.default.createElement(_popoverCart2.default, {
				cart: this.props.cart,
				selectedSite: this.props.selectedSite,
				onToggle: this.toggleCartVisibility,
				pinned: _viewport2.default.isMobile(),
				visible: this.state.cartVisible,
				showKeepSearching: this.state.cartShowKeepSearching,
				onKeepSearchingClick: this.onKeepSearchingClick,
				path: this.props.path });
		}
	}]);
	return PlansNavigation;
}(_react2.default.Component);

/**
 * Internal dependencies
 */


PlansNavigation.propTypes = {
	cart: _react2.default.PropTypes.object,
	path: _react2.default.PropTypes.string.isRequired,
	selectedSite: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.bool]).isRequired
};
exports.default = (0, _i18nCalypso.localize)(PlansNavigation);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plan-features/actions.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _selectors = __webpack_require__("./client/state/sites/plans/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlanFeaturesActions = function PlanFeaturesActions(_ref) {
	var canPurchase = _ref.canPurchase,
	    className = _ref.className,
	    _ref$available = _ref.available,
	    available = _ref$available === undefined ? true : _ref$available,
	    _ref$current = _ref.current,
	    current = _ref$current === undefined ? false : _ref$current,
	    _ref$primaryUpgrade = _ref.primaryUpgrade,
	    primaryUpgrade = _ref$primaryUpgrade === undefined ? false : _ref$primaryUpgrade,
	    _ref$freePlan = _ref.freePlan,
	    freePlan = _ref$freePlan === undefined ? false : _ref$freePlan,
	    _ref$onUpgradeClick = _ref.onUpgradeClick,
	    onUpgradeClick = _ref$onUpgradeClick === undefined ? _noop3.default : _ref$onUpgradeClick,
	    _ref$isPlaceholder = _ref.isPlaceholder,
	    isPlaceholder = _ref$isPlaceholder === undefined ? false : _ref$isPlaceholder,
	    isPopular = _ref.isPopular,
	    isInSignup = _ref.isInSignup,
	    translate = _ref.translate,
	    manageHref = _ref.manageHref,
	    isLandingPage = _ref.isLandingPage,
	    planName = _ref.planName,
	    currentSitePlan = _ref.currentSitePlan,
	    planType = _ref.planType,
	    trackTracksEvent = _ref.recordTracksEvent;

	var upgradeButton = void 0;
	var classes = (0, _classnames2.default)('plan-features__actions-button', {
		'is-current': current,
		'is-primary': primaryUpgrade && !isPlaceholder || isPopular
	}, className);

	if (current && !isInSignup) {
		upgradeButton = _react2.default.createElement(
			_button2.default,
			{ className: classes, href: manageHref, disabled: !manageHref },
			canPurchase ? translate('Manage Plan') : translate('View Plan')
		);
	} else if (available || isPlaceholder) {
		var buttonText = freePlan ? translate('Select Free', { context: 'button' }) : translate('Upgrade', { context: 'verb' });
		if (isLandingPage) {
			buttonText = translate('Select', { context: 'button' });
		}
		if (isInSignup) {
			buttonText = translate('Start with %(plan)s', {
				args: {
					plan: planName
				}
			});
		}
		var isCurrentPlanMonthly = currentSitePlan && (0, _constants.isMonthly)(currentSitePlan.productSlug);
		if (isCurrentPlanMonthly && (0, _constants.getPlanClass)(planType) === (0, _constants.getPlanClass)(currentSitePlan.productSlug)) {
			buttonText = translate('Upgrade to Yearly');
		}

		var handleUpgradeButtonClick = function handleUpgradeButtonClick() {
			if (isPlaceholder) {
				return (0, _noop3.default)();
			}

			trackTracksEvent('calypso_plan_features_upgrade_click', {
				current_plan: currentSitePlan && currentSitePlan.productSlug,
				upgrading_to: planType
			});

			onUpgradeClick();
		};

		upgradeButton = _react2.default.createElement(
			_button2.default,
			{
				className: classes,
				onClick: handleUpgradeButtonClick,
				disabled: isPlaceholder
			},
			buttonText
		);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'plan-features__actions' },
		_react2.default.createElement(
			'div',
			{ className: 'plan-features__actions-buttons' },
			upgradeButton
		)
	);
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


PlanFeaturesActions.propTypes = {
	canPurchase: _react.PropTypes.bool.isRequired,
	className: _react.PropTypes.string,
	primaryUpgrade: _react.PropTypes.bool,
	current: _react.PropTypes.bool,
	available: _react.PropTypes.bool,
	onUpgradeClick: _react.PropTypes.func,
	freePlan: _react.PropTypes.bool,
	isPlaceholder: _react.PropTypes.bool,
	isLandingPage: _react.PropTypes.bool,
	planType: _react.PropTypes.string
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var isInSignup = ownProps.isInSignup;

	var selectedSiteId = isInSignup ? null : (0, _selectors2.getSelectedSiteId)(state);
	var currentSitePlan = (0, _selectors.getCurrentPlan)(state, selectedSiteId);
	return {
		currentSitePlan: currentSitePlan
	};
}, {
	recordTracksEvent: _actions.recordTracksEvent
})((0, _i18nCalypso.localize)(PlanFeaturesActions));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plan-features/header.jsx":
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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _infoPopover = __webpack_require__("./client/components/info-popover/index.jsx");

var _infoPopover2 = _interopRequireDefault(_infoPopover);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _ribbon = __webpack_require__("./client/components/ribbon/index.jsx");

var _ribbon2 = _interopRequireDefault(_ribbon);

var _planPrice = __webpack_require__("./client/my-sites/plan-price/index.jsx");

var _planPrice2 = _interopRequireDefault(_planPrice);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _planIcon = __webpack_require__("./client/components/plans/plan-icon/index.jsx");

var _planIcon2 = _interopRequireDefault(_planIcon);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/plans/selectors.js");

var _isSiteAutomatedTransfer = __webpack_require__("./client/state/selectors/is-site-automated-transfer.js");

var _isSiteAutomatedTransfer2 = _interopRequireDefault(_isSiteAutomatedTransfer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 **/
var PlanFeaturesHeader = function (_Component) {
	(0, _inherits3.default)(PlanFeaturesHeader, _Component);

	function PlanFeaturesHeader() {
		(0, _classCallCheck3.default)(this, PlanFeaturesHeader);
		return (0, _possibleConstructorReturn3.default)(this, (PlanFeaturesHeader.__proto__ || (0, _getPrototypeOf2.default)(PlanFeaturesHeader)).apply(this, arguments));
	}

	(0, _createClass3.default)(PlanFeaturesHeader, [{
		key: 'render',
		value: function render() {
			var isInSignup = this.props.isInSignup;

			var content = this.renderPlansHeader();

			if (isInSignup) {
				content = this.renderSignupHeader();
			}

			return content;
		}
	}, {
		key: 'renderPlansHeader',
		value: function renderPlansHeader() {
			var _props = this.props,
			    planType = _props.planType,
			    popular = _props.popular,
			    newPlan = _props.newPlan,
			    title = _props.title,
			    translate = _props.translate;


			var headerClasses = (0, _classnames2.default)('plan-features__header', (0, _constants.getPlanClass)(planType));
			return _react2.default.createElement(
				'header',
				{ className: headerClasses, onClick: this.props.onClick },
				popular && _react2.default.createElement(
					_ribbon2.default,
					null,
					translate('Popular')
				),
				newPlan && _react2.default.createElement(
					_ribbon2.default,
					null,
					translate('New')
				),
				this.isPlanCurrent() && _react2.default.createElement(
					_ribbon2.default,
					null,
					translate('Your Plan')
				),
				_react2.default.createElement(
					'div',
					{ className: 'plan-features__header-figure' },
					_react2.default.createElement(_planIcon2.default, { plan: planType })
				),
				_react2.default.createElement(
					'div',
					{ className: 'plan-features__header-text' },
					_react2.default.createElement(
						'h4',
						{ className: 'plan-features__header-title' },
						title
					),
					this.getPlanFeaturesPrices(),
					this.getBillingTimeframe()
				)
			);
		}
	}, {
		key: 'renderSignupHeader',
		value: function renderSignupHeader() {
			var _props2 = this.props,
			    planType = _props2.planType,
			    popular = _props2.popular,
			    newPlan = _props2.newPlan,
			    title = _props2.title,
			    audience = _props2.audience,
			    translate = _props2.translate;


			var headerClasses = (0, _classnames2.default)('plan-features__header', (0, _constants.getPlanClass)(planType));
			return _react2.default.createElement(
				'div',
				{ className: 'plan-features__header-wrapper' },
				_react2.default.createElement(
					'header',
					{ className: headerClasses, onClick: this.props.onClick },
					popular && _react2.default.createElement(
						_ribbon2.default,
						null,
						translate('Popular')
					),
					newPlan && _react2.default.createElement(
						_ribbon2.default,
						null,
						translate('New')
					),
					_react2.default.createElement(
						'div',
						{ className: 'plan-features__header-text' },
						_react2.default.createElement(
							'h4',
							{ className: 'plan-features__header-title' },
							title
						),
						audience
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'plan-features__graphic' },
					_react2.default.createElement(_planIcon2.default, { plan: planType })
				),
				_react2.default.createElement(
					'div',
					{ className: 'plan-features__pricing' },
					this.getPlanFeaturesPrices(),
					' ',
					this.getBillingTimeframe()
				)
			);
		}
	}, {
		key: 'getBillingTimeframe',
		value: function getBillingTimeframe() {
			var _props3 = this.props,
			    billingTimeFrame = _props3.billingTimeFrame,
			    discountPrice = _props3.discountPrice,
			    isPlaceholder = _props3.isPlaceholder,
			    site = _props3.site,
			    translate = _props3.translate,
			    isSiteAT = _props3.isSiteAT,
			    hideMonthly = _props3.hideMonthly,
			    isInSignup = _props3.isInSignup;


			var isDiscounted = !!discountPrice;
			var timeframeClasses = (0, _classnames2.default)('plan-features__header-timeframe', {
				'is-discounted': isDiscounted,
				'is-placeholder': isPlaceholder
			});

			if (isInSignup) {
				return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(
						'span',
						null,
						billingTimeFrame
					)
				);
			}

			if (isSiteAT || !site.jetpack || this.props.planType === _constants.PLAN_JETPACK_FREE || hideMonthly) {
				return _react2.default.createElement(
					'p',
					{ className: timeframeClasses },
					!isPlaceholder ? billingTimeFrame : '',
					isDiscounted && !isPlaceholder && _react2.default.createElement(
						_infoPopover2.default,
						{
							className: 'plan-features__header-tip-info',
							position: (0, _viewport.isMobile)() ? 'top' : 'bottom left' },
						translate('Discount for first year')
					)
				);
			}

			return _react2.default.createElement(
				'p',
				{ className: timeframeClasses },
				billingTimeFrame
			);
		}
	}, {
		key: 'isPlanCurrent',
		value: function isPlanCurrent() {
			var _props4 = this.props,
			    planType = _props4.planType,
			    current = _props4.current,
			    currentSitePlan = _props4.currentSitePlan;


			if (!currentSitePlan) {
				return current;
			}

			return (0, _constants.getPlanClass)(planType) === (0, _constants.getPlanClass)(currentSitePlan.productSlug);
		}
	}, {
		key: 'getPlanFeaturesPrices',
		value: function getPlanFeaturesPrices() {
			var _props5 = this.props,
			    currencyCode = _props5.currencyCode,
			    discountPrice = _props5.discountPrice,
			    rawPrice = _props5.rawPrice,
			    isPlaceholder = _props5.isPlaceholder,
			    relatedMonthlyPlan = _props5.relatedMonthlyPlan,
			    site = _props5.site,
			    isInSignup = _props5.isInSignup;


			if (isPlaceholder && !isInSignup) {
				var isJetpackSite = !!site.jetpack;
				var classes = (0, _classnames2.default)('is-placeholder', {
					'plan-features__price': !isJetpackSite,
					'plan-features__price-jetpack': isJetpackSite
				});

				return _react2.default.createElement('div', { className: classes });
			}

			if (discountPrice) {
				return _react2.default.createElement(
					'span',
					{ className: 'plan-features__header-price-group' },
					_react2.default.createElement(_planPrice2.default, {
						currencyCode: currencyCode,
						rawPrice: rawPrice,
						isInSignup: isInSignup,
						original: true
					}),
					_react2.default.createElement(_planPrice2.default, {
						currencyCode: currencyCode,
						rawPrice: discountPrice,
						isInSignup: isInSignup,
						discounted: true
					})
				);
			}

			if (relatedMonthlyPlan) {
				var originalPrice = relatedMonthlyPlan.raw_price * 12;
				return _react2.default.createElement(
					'span',
					{ className: 'plan-features__header-price-group' },
					_react2.default.createElement(_planPrice2.default, {
						currencyCode: currencyCode,
						rawPrice: originalPrice,
						isInSignup: isInSignup,
						original: true
					}),
					_react2.default.createElement(_planPrice2.default, {
						currencyCode: currencyCode,
						rawPrice: rawPrice,
						isInSignup: isInSignup,
						discounted: true
					})
				);
			}

			return _react2.default.createElement(_planPrice2.default, {
				currencyCode: currencyCode,
				rawPrice: rawPrice,
				isInSignup: isInSignup
			});
		}
	}]);
	return PlanFeaturesHeader;
}(_react.Component); /**
                      * External dependencies
                      */


PlanFeaturesHeader.propTypes = {
	billingTimeFrame: _react.PropTypes.string.isRequired,
	current: _react.PropTypes.bool,
	onClick: _react.PropTypes.func,
	planType: _react2.default.PropTypes.oneOf([_constants.PLAN_FREE, _constants.PLAN_PREMIUM, _constants.PLAN_BUSINESS, _constants.PLAN_JETPACK_FREE, _constants.PLAN_JETPACK_BUSINESS, _constants.PLAN_JETPACK_BUSINESS_MONTHLY, _constants.PLAN_JETPACK_PREMIUM, _constants.PLAN_JETPACK_PREMIUM_MONTHLY, _constants.PLAN_JETPACK_PERSONAL, _constants.PLAN_JETPACK_PERSONAL_MONTHLY, _constants.PLAN_PERSONAL]).isRequired,
	popular: _react.PropTypes.bool,
	newPlan: _react.PropTypes.bool,
	rawPrice: _react.PropTypes.number,
	discountPrice: _react.PropTypes.number,
	currencyCode: _react.PropTypes.string,
	title: _react.PropTypes.string.isRequired,
	isPlaceholder: _react.PropTypes.bool,
	translate: _react.PropTypes.func,
	site: _react.PropTypes.object,
	isInJetpackConnect: _react.PropTypes.bool,
	currentSitePlan: _react.PropTypes.object,
	relatedMonthlyPlan: _react.PropTypes.object,
	isSiteAT: _react.PropTypes.bool
};

PlanFeaturesHeader.defaultProps = {
	current: false,
	onClick: _noop3.default,
	popular: false,
	newPlan: false,
	isPlaceholder: false,
	site: {},
	basePlansPath: null,
	currentSitePlan: {},
	isSiteAT: false
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var isInSignup = ownProps.isInSignup;

	var selectedSiteId = isInSignup ? null : (0, _selectors.getSelectedSiteId)(state);
	var currentSitePlan = (0, _selectors2.getCurrentPlan)(state, selectedSiteId);
	return (0, _assign2.default)({}, ownProps, {
		currentSitePlan: currentSitePlan,
		isSiteAT: (0, _isSiteAutomatedTransfer2.default)(state, selectedSiteId)
	});
})((0, _i18nCalypso.localize)(PlanFeaturesHeader));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plan-features/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

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

var _compact2 = __webpack_require__("./node_modules/lodash/compact.js");

var _compact3 = _interopRequireDefault(_compact2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _reduce2 = __webpack_require__("./node_modules/lodash/reduce.js");

var _reduce3 = _interopRequireDefault(_reduce2);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _header = __webpack_require__("./client/my-sites/plan-features/header.jsx");

var _header2 = _interopRequireDefault(_header);

var _item = __webpack_require__("./client/my-sites/plan-features/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _actions = __webpack_require__("./client/my-sites/plan-features/actions.jsx");

var _actions2 = _interopRequireDefault(_actions);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/signup/dependency-store/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/plans/selectors.js");

var _selectors4 = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors5 = __webpack_require__("./client/state/plans/selectors.js");

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _plans = __webpack_require__("./client/lib/plans/index.js");

var _cartItems = __webpack_require__("./client/lib/cart-values/cart-items.js");

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _spinnerLine = __webpack_require__("./client/components/spinner-line/index.jsx");

var _spinnerLine2 = _interopRequireDefault(_spinnerLine);

var _foldableCard = __webpack_require__("./client/components/foldable-card/index.jsx");

var _foldableCard2 = _interopRequireDefault(_foldableCard);

var _actions3 = __webpack_require__("./client/state/analytics/actions.js");

var _adTracking = __webpack_require__("./client/lib/analytics/ad-tracking.js");

var _abtest = __webpack_require__("./client/lib/abtest/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PlanFeatures = function (_Component) {
	(0, _inherits3.default)(PlanFeatures, _Component);

	function PlanFeatures() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PlanFeatures);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PlanFeatures.__proto__ || (0, _getPrototypeOf2.default)(PlanFeatures)).call.apply(_ref, [this].concat(args))), _this), _this.setScrollLeft = function (plansWrapper) {
			var _this$props = _this.props,
			    isInSignup = _this$props.isInSignup,
			    displayJetpackPlans = _this$props.displayJetpackPlans;

			// center plans

			if (isInSignup && plansWrapper) {
				displayJetpackPlans ? plansWrapper.scrollLeft = 190 : plansWrapper.scrollLeft = 495;
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PlanFeatures, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    planProperties = _props.planProperties,
			    isInSignup = _props.isInSignup;

			var tableClasses = (0, _classnames2.default)('plan-features__table', 'has-' + planProperties.length + '-cols');
			var planClasses = (0, _classnames2.default)('plan-features', { 'plan-features--signup': isInSignup });
			var planWrapperClasses = (0, _classnames2.default)({ 'plans-wrapper': isInSignup });
			var mobileView = void 0,
			    planDescriptions = void 0;
			var bottomButtons = null;

			if (!isInSignup) {
				mobileView = _react2.default.createElement(
					'div',
					{ className: 'plan-features__mobile' },
					this.renderMobileView()
				);

				planDescriptions = _react2.default.createElement(
					'tr',
					null,
					this.renderPlanDescriptions()
				);

				bottomButtons = _react2.default.createElement(
					'tr',
					null,
					this.renderBottomButtons()
				);
			}

			return _react2.default.createElement(
				'div',
				{ className: planWrapperClasses, ref: this.setScrollLeft },
				_react2.default.createElement(
					'div',
					{ className: planClasses },
					this.renderUpgradeDisabledNotice(),
					_react2.default.createElement(
						'div',
						{ className: 'plan-features__content' },
						mobileView,
						_react2.default.createElement(
							'table',
							{ className: tableClasses },
							_react2.default.createElement(
								'tbody',
								null,
								_react2.default.createElement(
									'tr',
									null,
									this.renderPlanHeaders()
								),
								planDescriptions,
								_react2.default.createElement(
									'tr',
									null,
									this.renderTopButtons()
								),
								this.renderPlanFeatureRows(),
								bottomButtons
							)
						)
					)
				)
			);
		}
	}, {
		key: 'renderUpgradeDisabledNotice',
		value: function renderUpgradeDisabledNotice() {
			var _props2 = this.props,
			    canPurchase = _props2.canPurchase,
			    hasPlaceholders = _props2.hasPlaceholders,
			    translate = _props2.translate;


			if (hasPlaceholders || canPurchase) {
				return null;
			}

			return _react2.default.createElement(
				_notice2.default,
				{
					className: 'plan-features__notice',
					showDismiss: false,
					status: 'is-info' },
				translate('You need to be the plan owner to manage this site.')
			);
		}
	}, {
		key: 'renderMobileView',
		value: function renderMobileView() {
			var _this2 = this;

			var _props3 = this.props,
			    canPurchase = _props3.canPurchase,
			    translate = _props3.translate,
			    planProperties = _props3.planProperties,
			    isInSignup = _props3.isInSignup,
			    isLandingPage = _props3.isLandingPage,
			    site = _props3.site,
			    basePlansPath = _props3.basePlansPath;

			// move any free plan to last place in mobile view

			var freePlanProperties = void 0;
			var reorderedPlans = planProperties.filter(function (properties) {
				if ((0, _plans.isFreePlan)(properties.planName)) {
					freePlanProperties = properties;
					return false;
				}
				return true;
			});

			if (freePlanProperties) {
				reorderedPlans.push(freePlanProperties);
			}

			return (0, _map3.default)(reorderedPlans, function (properties) {
				var available = properties.available,
				    currencyCode = properties.currencyCode,
				    current = properties.current,
				    features = properties.features,
				    onUpgradeClick = properties.onUpgradeClick,
				    planConstantObj = properties.planConstantObj,
				    planName = properties.planName,
				    popular = properties.popular,
				    newPlan = properties.newPlan,
				    relatedMonthlyPlan = properties.relatedMonthlyPlan,
				    primaryUpgrade = properties.primaryUpgrade,
				    isPlaceholder = properties.isPlaceholder,
				    hideMonthly = properties.hideMonthly;
				var rawPrice = properties.rawPrice,
				    discountPrice = properties.discountPrice;

				return _react2.default.createElement(
					'div',
					{ className: 'plan-features__mobile-plan', key: planName },
					_react2.default.createElement(_header2.default, {
						current: current,
						currencyCode: currencyCode,
						popular: popular,
						newPlan: newPlan,
						title: planConstantObj.getTitle(),
						planType: planName,
						rawPrice: rawPrice,
						discountPrice: discountPrice,
						billingTimeFrame: planConstantObj.getBillingTimeFrame(),
						hideMonthly: hideMonthly,
						isPlaceholder: isPlaceholder,
						site: site,
						basePlansPath: basePlansPath,
						relatedMonthlyPlan: relatedMonthlyPlan,
						isInSignup: isInSignup
					}),
					_react2.default.createElement(
						'p',
						{ className: 'plan-features__description' },
						planConstantObj.getDescription(_abtest.abtest)
					),
					_react2.default.createElement(_actions2.default, {
						canPurchase: canPurchase,
						className: (0, _constants.getPlanClass)(planName),
						current: current,
						primaryUpgrade: primaryUpgrade,
						available: available,
						onUpgradeClick: onUpgradeClick,
						freePlan: (0, _plans.isFreePlan)(planName),
						isPlaceholder: isPlaceholder,
						isInSignup: isInSignup,
						isLandingPage: isLandingPage,
						isPopular: popular,
						planName: planConstantObj.getTitle(),
						planType: planName
					}),
					_react2.default.createElement(
						_foldableCard2.default,
						{
							header: translate('Show features'),
							clickableHeader: true,
							compact: true },
						_this2.renderMobileFeatures(features)
					)
				);
			});
		}
	}, {
		key: 'renderMobileFeatures',
		value: function renderMobileFeatures(features) {
			var _this3 = this;

			return (0, _map3.default)(features, function (currentFeature, index) {
				return currentFeature ? _this3.renderFeatureItem(currentFeature, index) : null;
			});
		}
	}, {
		key: 'renderPlanHeaders',
		value: function renderPlanHeaders() {
			var _props4 = this.props,
			    planProperties = _props4.planProperties,
			    site = _props4.site,
			    basePlansPath = _props4.basePlansPath,
			    isInSignup = _props4.isInSignup,
			    siteType = _props4.siteType,
			    displayJetpackPlans = _props4.displayJetpackPlans;


			return (0, _map3.default)(planProperties, function (properties) {
				var currencyCode = properties.currencyCode,
				    current = properties.current,
				    planConstantObj = properties.planConstantObj,
				    planName = properties.planName,
				    popular = properties.popular,
				    newPlan = properties.newPlan,
				    relatedMonthlyPlan = properties.relatedMonthlyPlan,
				    isPlaceholder = properties.isPlaceholder,
				    hideMonthly = properties.hideMonthly;
				var rawPrice = properties.rawPrice,
				    discountPrice = properties.discountPrice;

				var classes = (0, _classnames2.default)('plan-features__table-item', 'has-border-top');
				var audience = planConstantObj.getAudience();
				var billingTimeFrame = planConstantObj.getBillingTimeFrame();

				if (isInSignup && !displayJetpackPlans) {
					switch (siteType) {
						case 'blog':
							audience = planConstantObj.getBlogAudience();
							break;
						case 'grid':
							audience = planConstantObj.getPortfolioAudience();
							break;
						default:
							audience = planConstantObj.getAudience();
					}
				}

				if (isInSignup && displayJetpackPlans) {
					billingTimeFrame = planConstantObj.getSignupBillingTimeFrame();
				}

				return _react2.default.createElement(
					'td',
					{ key: planName, className: classes },
					_react2.default.createElement(_header2.default, {
						current: current,
						currencyCode: currencyCode,
						popular: popular,
						newPlan: newPlan,
						title: planConstantObj.getTitle(),
						audience: audience,
						planType: planName,
						rawPrice: rawPrice,
						discountPrice: discountPrice,
						billingTimeFrame: billingTimeFrame,
						isPlaceholder: isPlaceholder,
						site: site,
						hideMonthly: hideMonthly,
						basePlansPath: basePlansPath,
						relatedMonthlyPlan: relatedMonthlyPlan,
						isInSignup: isInSignup
					})
				);
			});
		}
	}, {
		key: 'renderPlanDescriptions',
		value: function renderPlanDescriptions() {
			var planProperties = this.props.planProperties;


			return (0, _map3.default)(planProperties, function (properties) {
				var planName = properties.planName,
				    planConstantObj = properties.planConstantObj,
				    isPlaceholder = properties.isPlaceholder;


				var classes = (0, _classnames2.default)('plan-features__table-item', {
					'is-placeholder': isPlaceholder
				});

				return _react2.default.createElement(
					'td',
					{ key: planName, className: classes },
					isPlaceholder ? _react2.default.createElement(_spinnerLine2.default, null) : null,
					_react2.default.createElement(
						'p',
						{ className: 'plan-features__description' },
						planConstantObj.getDescription(_abtest.abtest)
					)
				);
			});
		}
	}, {
		key: 'renderTopButtons',
		value: function renderTopButtons() {
			var _props5 = this.props,
			    canPurchase = _props5.canPurchase,
			    isLandingPage = _props5.isLandingPage,
			    planProperties = _props5.planProperties,
			    isInSignup = _props5.isInSignup,
			    site = _props5.site;


			return (0, _map3.default)(planProperties, function (properties) {
				var available = properties.available,
				    current = properties.current,
				    onUpgradeClick = properties.onUpgradeClick,
				    planName = properties.planName,
				    primaryUpgrade = properties.primaryUpgrade,
				    isPlaceholder = properties.isPlaceholder,
				    planConstantObj = properties.planConstantObj,
				    popular = properties.popular;


				var classes = (0, _classnames2.default)('plan-features__table-item', 'has-border-bottom', 'is-top-buttons');

				return _react2.default.createElement(
					'td',
					{ key: planName, className: classes },
					_react2.default.createElement(_actions2.default, {
						canPurchase: canPurchase,
						className: (0, _constants.getPlanClass)(planName),
						current: current,
						available: available,
						primaryUpgrade: primaryUpgrade,
						planName: planConstantObj.getTitle(),
						onUpgradeClick: onUpgradeClick,
						freePlan: (0, _plans.isFreePlan)(planName),
						isPlaceholder: isPlaceholder,
						isPopular: popular,
						isInSignup: isInSignup,
						isLandingPage: isLandingPage,
						manageHref: '/plans/my-plan/' + site.slug,
						planType: planName
					})
				);
			});
		}
	}, {
		key: 'getLongestFeaturesList',
		value: function getLongestFeaturesList() {
			var planProperties = this.props.planProperties;


			return (0, _reduce3.default)(planProperties, function (longest, properties) {
				var currentFeatures = (0, _keys2.default)(properties.features);
				return currentFeatures.length > longest.length ? currentFeatures : longest;
			}, []);
		}
	}, {
		key: 'renderPlanFeatureRows',
		value: function renderPlanFeatureRows() {
			var _this4 = this;

			var longestFeatures = this.getLongestFeaturesList();
			return (0, _map3.default)(longestFeatures, function (featureKey, rowIndex) {
				return _react2.default.createElement(
					'tr',
					{ key: rowIndex, className: 'plan-features__row' },
					_this4.renderPlanFeatureColumns(rowIndex)
				);
			});
		}
	}, {
		key: 'renderFeatureItem',
		value: function renderFeatureItem(feature, index) {
			var description = feature.getDescription ? feature.getDescription(_abtest.abtest, this.props.domainName) : null;
			return _react2.default.createElement(
				_item2.default,
				{
					key: index,
					description: description,
					hideInfoPopover: false
				},
				_react2.default.createElement(
					'span',
					{ className: 'plan-features__item-info' },
					_react2.default.createElement(
						'span',
						{ className: 'plan-features__item-title' },
						feature.getTitle()
					)
				)
			);
		}
	}, {
		key: 'renderPlanFeatureColumns',
		value: function renderPlanFeatureColumns(rowIndex) {
			var _this5 = this;

			var _props6 = this.props,
			    planProperties = _props6.planProperties,
			    selectedFeature = _props6.selectedFeature;


			return (0, _map3.default)(planProperties, function (properties) {
				var features = properties.features,
				    planName = properties.planName;


				var featureKeys = (0, _keys2.default)(features),
				    key = featureKeys[rowIndex],
				    currentFeature = features[key];

				var classes = (0, _classnames2.default)('plan-features__table-item', (0, _constants.getPlanClass)(planName), {
					'has-partial-border': rowIndex + 1 < featureKeys.length,
					'is-highlighted': selectedFeature && currentFeature && selectedFeature === currentFeature.getSlug()
				});

				return currentFeature ? _react2.default.createElement(
					'td',
					{ key: planName + '-' + key, className: classes },
					_this5.renderFeatureItem(currentFeature)
				) : _react2.default.createElement('td', { key: planName + '-none', className: 'plan-features__table-item' });
			});
		}
	}, {
		key: 'renderBottomButtons',
		value: function renderBottomButtons() {
			var _props7 = this.props,
			    canPurchase = _props7.canPurchase,
			    planProperties = _props7.planProperties,
			    isInSignup = _props7.isInSignup,
			    isLandingPage = _props7.isLandingPage,
			    site = _props7.site;


			return (0, _map3.default)(planProperties, function (properties) {
				var available = properties.available,
				    current = properties.current,
				    onUpgradeClick = properties.onUpgradeClick,
				    planName = properties.planName,
				    primaryUpgrade = properties.primaryUpgrade,
				    isPlaceholder = properties.isPlaceholder,
				    planConstantObj = properties.planConstantObj,
				    popular = properties.popular;

				var classes = (0, _classnames2.default)('plan-features__table-item', 'has-border-bottom', 'is-bottom-buttons');
				return _react2.default.createElement(
					'td',
					{ key: planName, className: classes },
					_react2.default.createElement(_actions2.default, {
						canPurchase: canPurchase,
						className: (0, _constants.getPlanClass)(planName),
						current: current,
						available: available,
						primaryUpgrade: primaryUpgrade,
						planName: planConstantObj.getTitle(),
						onUpgradeClick: onUpgradeClick,
						freePlan: (0, _plans.isFreePlan)(planName),
						isPlaceholder: isPlaceholder,
						isInSignup: isInSignup,
						isLandingPage: isLandingPage,
						isPopular: popular,
						manageHref: '/plans/my-plan/' + site.slug,
						planType: planName
					})
				);
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.props.recordTracksEvent('calypso_wp_plans_test_view');
			(0, _adTracking.retargetViewPlans)();
		}
	}]);
	return PlanFeatures;
}(_react.Component);

/**
 * Internal dependencies
 */


PlanFeatures.propTypes = {
	canPurchase: _react.PropTypes.bool.isRequired,
	onUpgradeClick: _react.PropTypes.func,
	// either you specify the plans prop or isPlaceholder prop
	plans: _react.PropTypes.array,
	planProperties: _react.PropTypes.array,
	isInSignup: _react.PropTypes.bool,
	basePlansPath: _react.PropTypes.string,
	selectedFeature: _react.PropTypes.string,
	site: _react.PropTypes.object,
	displayJetpackPlans: _react.PropTypes.bool
};

PlanFeatures.defaultProps = {
	onUpgradeClick: _noop3.default,
	isInSignup: false,
	basePlansPath: null,
	site: {},
	displayJetpackPlans: false
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var isInSignup = ownProps.isInSignup,
	    placeholder = ownProps.placeholder,
	    plans = ownProps.plans,
	    onUpgradeClick = ownProps.onUpgradeClick,
	    isLandingPage = ownProps.isLandingPage,
	    site = ownProps.site,
	    displayJetpackPlans = ownProps.displayJetpackPlans;

	var selectedSiteId = site ? site.ID : null;
	var sitePlan = (0, _selectors.getSitePlan)(state, selectedSiteId);
	var sitePlans = (0, _selectors3.getPlansBySiteId)(state, selectedSiteId);
	var isPaid = (0, _selectors.isCurrentPlanPaid)(state, selectedSiteId);
	var signupDependencies = (0, _selectors2.getSignupDependencyStore)(state);
	var siteType = signupDependencies.designType;
	var canPurchase = !isPaid || (0, _selectors3.isCurrentUserCurrentPlanOwner)(state, selectedSiteId);
	var planProperties = (0, _compact3.default)((0, _map3.default)(plans, function (plan) {
		var isPlaceholder = false;
		var planConstantObj = (0, _plans.applyTestFiltersToPlansList)(plan, _abtest.abtest);
		var planProductId = planConstantObj.getProductId();
		var planObject = (0, _selectors5.getPlan)(state, planProductId);
		var isLoadingSitePlans = selectedSiteId && !sitePlans.hasLoadedFromServer;
		var showMonthly = !(0, _constants.isMonthly)(plan);
		var available = isInSignup ? true : (0, _plans.canUpgradeToPlan)(plan, site) && canPurchase;
		var relatedMonthlyPlan = showMonthly ? (0, _selectors5.getPlanBySlug)(state, (0, _plans.getMonthlyPlanByYearly)(plan)) : null;
		var popular = (0, _constants.isPopular)(plan) && !isPaid;
		var newPlan = (0, _constants.isNew)(plan) && !isPaid;
		var currentPlan = sitePlan && sitePlan.product_slug;
		var showMonthlyPrice = !relatedMonthlyPlan && showMonthly;
		var planFeatures = (0, _constants.getPlanFeaturesObject)(planConstantObj.getFeatures(_abtest.abtest));

		if (placeholder || !planObject || isLoadingSitePlans) {
			isPlaceholder = true;
		}

		if (isInSignup) {
			switch (siteType) {
				case 'blog':
					if (planConstantObj.getBlogSignupFeatures) {
						planFeatures = (0, _constants.getPlanFeaturesObject)(planConstantObj.getBlogSignupFeatures(_abtest.abtest));
					}

					break;
				case 'grid':
					if (planConstantObj.getPortfolioSignupFeatures) {
						planFeatures = (0, _constants.getPlanFeaturesObject)(planConstantObj.getPortfolioSignupFeatures(_abtest.abtest));
					}

					break;
				default:
					if (planConstantObj.getSignupFeatures) {
						planFeatures = (0, _constants.getPlanFeaturesObject)(planConstantObj.getSignupFeatures(_abtest.abtest));
					}
			}
		}

		if ((0, _abtest.abtest)('jetpackConnectPlansCopyChanges') === 'modified' && displayJetpackPlans) {
			planFeatures = (0, _constants.getPlanFeaturesObject)(planConstantObj.getNewSignupFeatures(_abtest.abtest));
		}

		return {
			isPlaceholder: isPlaceholder,
			isLandingPage: isLandingPage,
			available: available,
			currencyCode: (0, _selectors4.getCurrentUserCurrencyCode)(state),
			current: (0, _selectors.isCurrentSitePlan)(state, selectedSiteId, planProductId),
			discountPrice: (0, _selectors3.getPlanDiscountedRawPrice)(state, selectedSiteId, plan, {
				isMonthly: showMonthlyPrice
			}),
			features: planFeatures,
			onUpgradeClick: onUpgradeClick ? function () {
				var planSlug = (0, _selectors5.getPlanSlug)(state, planProductId);

				onUpgradeClick((0, _cartItems.planItem)(planSlug));
			} : function () {
				if (!available) {
					return;
				}

				var selectedSiteSlug = (0, _selectors.getSiteSlug)(state, selectedSiteId);
				(0, _page2.default)('/checkout/' + selectedSiteSlug + '/' + ((0, _plans.getPlanPath)(plan) || ''));
			},
			planConstantObj: planConstantObj,
			planName: plan,
			planObject: planObject,
			popular: popular,
			newPlan: newPlan,
			hideMonthly: false,
			primaryUpgrade: (currentPlan === _constants.PLAN_PERSONAL && plan === _constants.PLAN_PREMIUM || currentPlan === _constants.PLAN_PREMIUM && plan === _constants.PLAN_BUSINESS || popular, newPlan),
			rawPrice: (0, _selectors5.getPlanRawPrice)(state, planProductId, showMonthlyPrice),
			relatedMonthlyPlan: relatedMonthlyPlan
		};
	}));

	return {
		canPurchase: canPurchase,
		planProperties: planProperties,
		siteType: siteType
	};
}, {
	recordTracksEvent: _actions3.recordTracksEvent
})((0, _i18nCalypso.localize)(PlanFeatures));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plan-features/item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = PlanFeaturesItem;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _infoPopover = __webpack_require__("./client/components/info-popover/index.jsx");

var _infoPopover2 = _interopRequireDefault(_infoPopover);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function PlanFeaturesItem(_ref) {
	var children = _ref.children,
	    description = _ref.description,
	    hideInfoPopover = _ref.hideInfoPopover;

	return _react2.default.createElement(
		'div',
		{ className: 'plan-features__item' },
		_react2.default.createElement(_gridicons2.default, {
			className: 'plan-features__item-checkmark',
			size: 18, icon: 'checkmark' }),
		children,
		hideInfoPopover ? null : _react2.default.createElement(
			_infoPopover2.default,
			{
				className: 'plan-features__item-tip-info',
				position: _viewport2.default.isMobile() ? 'top' : 'right' },
			description
		)
	);
}
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plans-features-main/index.jsx":
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

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _planFeatures = __webpack_require__("./client/my-sites/plan-features/index.jsx");

var _planFeatures2 = _interopRequireDefault(_planFeatures);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _queryPlans = __webpack_require__("./client/components/data/query-plans/index.jsx");

var _queryPlans2 = _interopRequireDefault(_queryPlans);

var _querySitePlans = __webpack_require__("./client/components/data/query-site-plans/index.jsx");

var _querySitePlans2 = _interopRequireDefault(_querySitePlans);

var _faq = __webpack_require__("./client/components/faq/index.jsx");

var _faq2 = _interopRequireDefault(_faq);

var _faqItem = __webpack_require__("./client/components/faq/faq-item.jsx");

var _faqItem2 = _interopRequireDefault(_faqItem);

var _config = __webpack_require__("./client/config/index.js");

var _paths = __webpack_require__("./client/me/purchases/paths.js");

var _paths2 = _interopRequireDefault(_paths);

var _plans = __webpack_require__("./client/lib/plans/index.js");

var _segmentedControl = __webpack_require__("./client/components/segmented-control/index.jsx");

var _segmentedControl2 = _interopRequireDefault(_segmentedControl);

var _item = __webpack_require__("./client/components/segmented-control/item.jsx");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PlansFeaturesMain = function (_Component) {
	(0, _inherits3.default)(PlansFeaturesMain, _Component);

	function PlansFeaturesMain() {
		(0, _classCallCheck3.default)(this, PlansFeaturesMain);
		return (0, _possibleConstructorReturn3.default)(this, (PlansFeaturesMain.__proto__ || (0, _getPrototypeOf2.default)(PlansFeaturesMain)).apply(this, arguments));
	}

	(0, _createClass3.default)(PlansFeaturesMain, [{
		key: 'getPlanFeatures',
		value: function getPlanFeatures() {
			var _props = this.props,
			    site = _props.site,
			    intervalType = _props.intervalType,
			    onUpgradeClick = _props.onUpgradeClick,
			    hideFreePlan = _props.hideFreePlan,
			    isInSignup = _props.isInSignup,
			    isLandingPage = _props.isLandingPage,
			    basePlansPath = _props.basePlansPath,
			    selectedFeature = _props.selectedFeature,
			    displayJetpackPlans = _props.displayJetpackPlans,
			    domainName = _props.domainName;


			var isPersonalPlanEnabled = (0, _config.isEnabled)('plans/personal-plan');
			if (displayJetpackPlans && intervalType === 'monthly') {
				var jetpackPlans = [_constants.PLAN_JETPACK_FREE, _constants.PLAN_JETPACK_PERSONAL_MONTHLY, _constants.PLAN_JETPACK_PREMIUM_MONTHLY, _constants.PLAN_JETPACK_BUSINESS_MONTHLY];
				if (hideFreePlan) {
					jetpackPlans.shift();
				}
				return _react2.default.createElement(
					'div',
					{ className: 'plans-features-main__group', 'data-e2e-plans': 'jetpack' },
					_react2.default.createElement(_planFeatures2.default, {
						plans: jetpackPlans,
						selectedFeature: selectedFeature,
						onUpgradeClick: onUpgradeClick,
						isInSignup: isInSignup,
						isLandingPage: isLandingPage,
						basePlansPath: basePlansPath,
						site: site,
						domainName: domainName,
						displayJetpackPlans: displayJetpackPlans
					})
				);
			}

			if (displayJetpackPlans) {
				var _jetpackPlans = [_constants.PLAN_JETPACK_FREE, _constants.PLAN_JETPACK_PERSONAL, _constants.PLAN_JETPACK_PREMIUM, _constants.PLAN_JETPACK_BUSINESS];
				if (hideFreePlan) {
					_jetpackPlans.shift();
				}
				return _react2.default.createElement(
					'div',
					{ className: 'plans-features-main__group', 'data-e2e-plans': 'jetpack' },
					_react2.default.createElement(_planFeatures2.default, {
						plans: _jetpackPlans,
						selectedFeature: selectedFeature,
						onUpgradeClick: onUpgradeClick,
						isInSignup: isInSignup,
						isLandingPage: isLandingPage,
						basePlansPath: basePlansPath,
						site: site,
						domainName: domainName,
						displayJetpackPlans: displayJetpackPlans
					})
				);
			}

			var plans = (0, _filter3.default)([hideFreePlan ? null : _constants.PLAN_FREE, isPersonalPlanEnabled ? _constants.PLAN_PERSONAL : null, _constants.PLAN_PREMIUM, _constants.PLAN_BUSINESS], function (value) {
				return !!value;
			});

			return _react2.default.createElement(
				'div',
				{ className: 'plans-features-main__group', 'data-e2e-plans': 'wpcom' },
				_react2.default.createElement(_planFeatures2.default, {
					plans: plans,
					onUpgradeClick: onUpgradeClick,
					isInSignup: isInSignup,
					isLandingPage: isLandingPage,
					basePlansPath: basePlansPath,
					selectedFeature: selectedFeature,
					site: site,
					domainName: domainName,
					displayJetpackPlans: displayJetpackPlans
				})
			);
		}
	}, {
		key: 'getJetpackFAQ',
		value: function getJetpackFAQ() {
			var translate = this.props.translate;


			return _react2.default.createElement(
				_faq2.default,
				null,
				_react2.default.createElement(_faqItem2.default, {
					question: translate('I signed up and paid. What’s next?'),
					answer: translate('Our premium features are powered by a few of our other plugins. After purchasing you will' + ' need to install the Akismet and VaultPress plugins. Just follow the guide' + ' after you complete your purchase.')
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('What are the hosting requirements?'),
					answer: translate('You should be running the latest version of WordPress and be using a web host that runs' + ' PHP 5 or higher. You will also need a WordPress.com account (you can register' + ' during the connection process) and a publicly-accessible site with XML-RPC enabled.')
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Does this work with a multisite network?'),
					answer: translate('Yes, Jetpack and all of its premium features are compatible with WordPress Multisite' + ' networks. If you manage a Multisite network you will need to make sure you have a' + ' subscription for each site you wish to cover with premium features.')
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Why do I need a WordPress.com account?'),
					answer: translate("Many of Jetpack's core features make use of the WordPress.com cloud. In order to make sure" + ' everything works correctly, Jetpack requires you to connect a (free) WordPress.com' + " account. If you don't already have an account you can easily create one during the" + ' connection process.')
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('What is the cancellation policy?'),
					answer: translate('You can request a cancellation within 30 days of purchase and receive a full refund.')
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Have more questions?'),
					answer: translate('No problem! Feel free to {{a}}get in touch{{/a}} with our Happiness Engineers.', {
						components: { a: _react2.default.createElement('a', { href: 'https://jetpack.com/contact-support/', target: '_blank', rel: 'noopener noreferrer' }) }
					})
				})
			);
		}
	}, {
		key: 'getFAQ',
		value: function getFAQ() {
			var _props2 = this.props,
			    site = _props2.site,
			    translate = _props2.translate;


			return _react2.default.createElement(
				_faq2.default,
				null,
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Do you sell domains?'),
					answer: translate('Yes! The Personal, Premium, and Business plans include a free custom domain. That includes new' + ' domains purchased through WordPress.com or your own existing domain that you can map' + ' to your WordPress.com site. Does not apply to premium domains. {{a}}Find out more about domains.{{/a}}', {
						components: {
							a: _react2.default.createElement('a', {
								href: 'https://en.support.wordpress.com/all-about-domains/',
								target: '_blank',
								rel: 'noopener noreferrer'
							})
						}
					})
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Can I install plugins?'),
					answer: translate('Yes! With the WordPress.com Business plan you can search for and install external plugins.' + ' All plans already come with a custom set of plugins tailored just for them.' + ' {{a}}Check out all included plugins{{/a}}.', {
						components: { a: _react2.default.createElement('a', { href: '/plugins/' + site.slug }) }
					})
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Can I upload my own theme?'),
					answer: translate('Yes! With the WordPress.com Business plan you can upload any theme you\'d like.' + ' All plans give you access to our {{a}}directory of free and premium themes{{/a}}.' + ' These are among the highest-quality WordPress themes, hand-picked and reviewed by our team.', {
						components: { a: _react2.default.createElement('a', { href: '/themes/' + site.slug }) }
					})
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Do I need another web host?'),
					answer: translate('No. All WordPress.com sites include our specially tailored WordPress hosting to ensure' + ' your site stays available and secure at all times. You can even use your own domain' + ' when you upgrade to the Personal, Premium, or Business plan.')
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Do you offer email accounts?'),
					answer: translate('Yes. If you register a new domain with our Personal, Premium, or Business plans, you can' + ' add Google-powered G Suite. You can also set up email forwarding for any custom domain' + ' registered through WordPress.com. {{a}}Find out more about email{{/a}}.', {
						components: {
							a: _react2.default.createElement('a', {
								href: 'https://en.support.wordpress.com/add-email/',
								target: '_blank',
								rel: 'noopener noreferrer'
							})
						}
					})
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('What’s included with advanced custom design?'),
					answer: translate('Custom design is a toolset you can use to personalize your blog’s look and feel with' + ' custom colors & backgrounds, custom fonts, and even a CSS editor that you can use for' + ' more precise control of your site’s' + ' design. {{a}}Find out more about custom design{{/a}}.', {
						components: {
							a: _react2.default.createElement('a', {
								href: 'https://en.support.wordpress.com/custom-design/',
								target: '_blank',
								rel: 'noopener noreferrer'
							})
						}
					})
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Will upgrading affect my content?'),
					answer: translate('Plans add extra features to your site, but they do not affect the content of your site' + " or your site's followers.")
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Can I cancel my subscription?'),
					answer: translate('Yes. We want you to love everything you do at WordPress.com, so we provide a 30-day' + ' refund on all of our plans. {{a}}Manage purchases{{/a}}.', {
						components: { a: _react2.default.createElement('a', { href: _paths2.default.purchasesRoot() }) }
					})
				}),
				_react2.default.createElement(_faqItem2.default, {
					question: translate('Have more questions?'),
					answer: translate('Need help deciding which plan works for you? Our happiness engineers are available for' + ' any questions you may have. {{a}}Get help{{/a}}.', {
						components: { a: _react2.default.createElement('a', { href: 'https://wordpress.com/help', target: '_blank', rel: 'noopener noreferrer' }) }
					})
				})
			);
		}
	}, {
		key: 'getIntervalTypeToggle',
		value: function getIntervalTypeToggle() {
			var _props3 = this.props,
			    translate = _props3.translate,
			    intervalType = _props3.intervalType,
			    site = _props3.site,
			    basePlansPath = _props3.basePlansPath;

			var segmentClasses = (0, _classnames2.default)('plan-features__interval-type', 'price-toggle');

			var plansUrl = '/plans';
			if (basePlansPath) {
				plansUrl = basePlansPath;
			}

			return _react2.default.createElement(
				_segmentedControl2.default,
				{ compact: true, className: segmentClasses, primary: true },
				_react2.default.createElement(
					_item2.default,
					{
						selected: intervalType === 'monthly',
						path: (0, _plans.plansLink)(plansUrl, site, 'monthly')
					},
					translate('Monthly billing')
				),
				_react2.default.createElement(
					_item2.default,
					{
						selected: intervalType === 'yearly',
						path: (0, _plans.plansLink)(plansUrl, site, 'yearly')
					},
					translate('Yearly billing')
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    site = _props4.site,
			    displayJetpackPlans = _props4.displayJetpackPlans,
			    isInSignup = _props4.isInSignup;


			var renderFAQ = function renderFAQ() {
				return displayJetpackPlans ? _this2.getJetpackFAQ() : _this2.getFAQ(site);
			};
			var faqs = null;

			if (!isInSignup) {
				faqs = renderFAQ();
			}

			return _react2.default.createElement(
				'div',
				{ className: 'plans-features-main' },
				displayJetpackPlans ? this.getIntervalTypeToggle() : null,
				_react2.default.createElement(_queryPlans2.default, null),
				_react2.default.createElement(_querySitePlans2.default, { siteId: (0, _get3.default)(site, 'ID') }),
				this.getPlanFeatures(),
				faqs
			);
		}
	}]);
	return PlansFeaturesMain;
}(_react.Component);

/**
 * Internal dependencies
 */


PlansFeaturesMain.propTypes = {
	site: _react.PropTypes.object,
	isInSignup: _react.PropTypes.bool,
	isLandingPage: _react.PropTypes.bool,
	basePlansPath: _react.PropTypes.string,
	intervalType: _react.PropTypes.string,
	onUpgradeClick: _react.PropTypes.func,
	hideFreePlan: _react.PropTypes.bool,
	showFAQ: _react.PropTypes.bool,
	selectedFeature: _react.PropTypes.string,
	displayJetpackPlans: _react.PropTypes.bool.isRequired
};

PlansFeaturesMain.defaultProps = {
	basePlansPath: null,
	intervalType: 'yearly',
	hideFreePlan: false,
	site: {},
	showFAQ: true
};

exports.default = (0, _i18nCalypso.localize)(PlansFeaturesMain);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plans/controller.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactHelpers = __webpack_require__("./client/lib/react-helpers/index.js");

var _plans = __webpack_require__("./client/lib/plans/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/**
 * External Dependencies
 */
exports.default = {
	plans: function plans(context) {
		var Plans = __webpack_require__("./client/my-sites/plans/main.jsx"),
		    CheckoutData = __webpack_require__("./client/components/data/checkout/index.jsx");

		(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(
			CheckoutData,
			null,
			_react2.default.createElement(Plans, {
				context: context,
				intervalType: context.params.intervalType,
				destinationType: context.params.destinationType,
				selectedFeature: context.query.feature
			})
		), document.getElementById('primary'), context.store);
	},
	features: function features(context) {
		var domain = context.params.domain;
		var feature = (0, _get3.default)(context, 'params.feature');
		var comparePath = domain ? '/plans/' + domain : '/plans/';

		if ((0, _plans.isValidFeatureKey)(feature)) {
			comparePath += '?feature=' + feature;
		}

		// otherwise redirect to the compare page if not found
		_page2.default.redirect(comparePath);
	},
	redirectToCheckout: function redirectToCheckout(context) {
		// this route is deprecated, use `/checkout/:site/:plan` to link to plan checkout
		_page2.default.redirect('/checkout/' + context.params.domain + '/' + context.params.plan);
	},
	redirectToPlans: function redirectToPlans(context) {
		var siteDomain = context.params.domain;

		if (siteDomain) {
			return _page2.default.redirect('/plans/' + siteDomain);
		}

		return _page2.default.redirect('/plans');
	}
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plans/current-plan/controller.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _reactHelpers = __webpack_require__("./client/lib/react-helpers/index.js");

var _ = __webpack_require__("./client/my-sites/plans/current-plan/index.jsx");

var _2 = _interopRequireDefault(_);

var _productsValues = __webpack_require__("./client/lib/products-values/index.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/**
 * External Dependencies
 */
exports.default = {
	currentPlan: function currentPlan(context) {
		var state = context.store.getState();

		var selectedSite = (0, _selectors.getSelectedSite)(state);

		if (!selectedSite) {
			_page2.default.redirect('/plans/');

			return null;
		}

		if ((0, _productsValues.isFreePlan)(selectedSite.plan)) {
			_page2.default.redirect('/plans/' + selectedSite.slug);

			return null;
		}

		(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_2.default, { context: context }), document.getElementById('primary'), context.store);
	}
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plans/current-plan/header.jsx":
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

var _invoke2 = __webpack_require__("./node_modules/lodash/invoke.js");

var _invoke3 = _interopRequireDefault(_invoke2);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _happinessSupport = __webpack_require__("./client/components/happiness-support/index.jsx");

var _happinessSupport2 = _interopRequireDefault(_happinessSupport);

var _planIcon = __webpack_require__("./client/components/plans/plan-icon/index.jsx");

var _planIcon2 = _interopRequireDefault(_planIcon);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _paths = __webpack_require__("./client/me/purchases/paths.js");

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var CurrentPlanHeader = function (_Component) {
	(0, _inherits3.default)(CurrentPlanHeader, _Component);

	function CurrentPlanHeader() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CurrentPlanHeader);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CurrentPlanHeader.__proto__ || (0, _getPrototypeOf2.default)(CurrentPlanHeader)).call.apply(_ref, [this].concat(args))), _this), _this.isEligibleForLiveChat = function () {
			var planSlug = _this.props.currentPlanSlug;

			return planSlug === _constants.PLAN_JETPACK_BUSINESS || planSlug === _constants.PLAN_JETPACK_BUSINESS_MONTHLY;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CurrentPlanHeader, [{
		key: 'renderPurchaseInfo',
		value: function renderPurchaseInfo() {
			var _props = this.props,
			    currentPlan = _props.currentPlan,
			    currentPlanSlug = _props.currentPlanSlug,
			    selectedSite = _props.selectedSite,
			    isExpiring = _props.isExpiring,
			    translate = _props.translate;


			if (!currentPlan || currentPlanSlug === _constants.PLAN_JETPACK_FREE) {
				return null;
			}

			var hasAutoRenew = currentPlan.autoRenew;
			var classes = (0, _classnames2.default)('current-plan__header-purchase-info', {
				'is-expiring': isExpiring
			});

			return _react2.default.createElement(
				_card2.default,
				{ className: 'current-plan__header-purchase-info-wrapper', compact: true },
				_react2.default.createElement(
					'div',
					{ className: classes },
					_react2.default.createElement(
						'span',
						{ className: 'current-plan__header-expires-in' },
						hasAutoRenew && currentPlan.autoRenewDateMoment ? translate('Set to Auto Renew on %s.', { args: (0, _invoke3.default)(currentPlan, 'autoRenewDateMoment.format', 'LL') }) : translate('Expires on %s.', { args: (0, _invoke3.default)(currentPlan, 'userFacingExpiryMoment.format', 'LL') })
					),
					currentPlan.userIsOwner && _react2.default.createElement(
						_button2.default,
						{ compact: true, href: _paths2.default.managePurchase(selectedSite.slug, currentPlan.id) },
						hasAutoRenew ? translate('Manage Payment') : translate('Renew Now')
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    currentPlanSlug = _props2.currentPlanSlug,
			    isAutomatedTransfer = _props2.isAutomatedTransfer,
			    isPlaceholder = _props2.isPlaceholder,
			    title = _props2.title,
			    tagLine = _props2.tagLine,
			    selectedSite = _props2.selectedSite;


			return _react2.default.createElement(
				'div',
				{ className: 'current-plan__header' },
				_react2.default.createElement(
					'div',
					{ className: 'current-plan__header-item' },
					_react2.default.createElement(
						'div',
						{ className: 'current-plan__header-item-content' },
						_react2.default.createElement(
							'div',
							{ className: 'current-plan__header-icon' },
							currentPlanSlug && _react2.default.createElement(_planIcon2.default, { plan: currentPlanSlug })
						),
						_react2.default.createElement(
							'div',
							{ className: 'current-plan__header-copy' },
							_react2.default.createElement(
								'h1',
								{ className: (0, _classnames2.default)('current-plan__header-heading', {
										'is-placeholder': isPlaceholder
									}) },
								title
							),
							_react2.default.createElement(
								'h2',
								{ className: (0, _classnames2.default)('current-plan__header-text', {
										'is-placeholder': isPlaceholder
									}) },
								tagLine
							)
						),
						this.renderPurchaseInfo()
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'current-plan__header-item' },
					_react2.default.createElement(
						'div',
						{ className: 'current-plan__header-item-content' },
						_react2.default.createElement(_happinessSupport2.default, {
							isJetpack: !!selectedSite.jetpack && !isAutomatedTransfer,
							isPlaceholder: isPlaceholder,
							showLiveChatButton: this.isEligibleForLiveChat(),
							liveChatButtonEventName: 'calypso_plans_current_plan_chat_initiated'
						})
					)
				)
			);
		}
	}]);
	return CurrentPlanHeader;
}(_react.Component); /**
                      * External dependencies
                      */


CurrentPlanHeader.propTypes = {
	selectedSite: _react.PropTypes.object,
	title: _react.PropTypes.string,
	tagLine: _react.PropTypes.string,
	isPlaceholder: _react.PropTypes.bool,
	currentPlanSlug: _react2.default.PropTypes.oneOf([_constants.PLAN_PREMIUM, _constants.PLAN_BUSINESS, _constants.PLAN_JETPACK_FREE, _constants.PLAN_JETPACK_BUSINESS, _constants.PLAN_JETPACK_BUSINESS_MONTHLY, _constants.PLAN_JETPACK_PREMIUM, _constants.PLAN_JETPACK_PREMIUM_MONTHLY, _constants.PLAN_JETPACK_PERSONAL, _constants.PLAN_JETPACK_PERSONAL_MONTHLY, _constants.PLAN_PERSONAL]).isRequired,
	currentPlan: _react.PropTypes.object,
	isExpiring: _react.PropTypes.bool,
	translate: _react.PropTypes.func,
	isAutomatedTransfer: _react.PropTypes.bool
};
exports.default = (0, _i18nCalypso.localize)(CurrentPlanHeader);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plans/current-plan/index.jsx":
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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _selectors = __webpack_require__("./client/state/sites/plans/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

var _documentHead = __webpack_require__("./client/components/data/document-head/index.jsx");

var _documentHead2 = _interopRequireDefault(_documentHead);

var _trackComponentView = __webpack_require__("./client/lib/analytics/track-component-view/index.jsx");

var _trackComponentView2 = _interopRequireDefault(_trackComponentView);

var _navigation = __webpack_require__("./client/my-sites/domains/navigation.jsx");

var _navigation2 = _interopRequireDefault(_navigation);

var _productPurchaseFeatures = __webpack_require__("./client/blocks/product-purchase-features/index.jsx");

var _productPurchaseFeatures2 = _interopRequireDefault(_productPurchaseFeatures);

var _productPurchaseFeaturesList = __webpack_require__("./client/blocks/product-purchase-features/product-purchase-features-list/index.jsx");

var _productPurchaseFeaturesList2 = _interopRequireDefault(_productPurchaseFeaturesList);

var _header = __webpack_require__("./client/my-sites/plans/current-plan/header.jsx");

var _header2 = _interopRequireDefault(_header);

var _querySites = __webpack_require__("./client/components/data/query-sites/index.jsx");

var _querySites2 = _interopRequireDefault(_querySites);

var _querySitePlans = __webpack_require__("./client/components/data/query-site-plans/index.jsx");

var _querySitePlans2 = _interopRequireDefault(_querySitePlans);

var _plans = __webpack_require__("./client/lib/plans/index.js");

var _querySiteDomains = __webpack_require__("./client/components/data/query-site-domains/index.jsx");

var _querySiteDomains2 = _interopRequireDefault(_querySiteDomains);

var _selectors4 = __webpack_require__("./client/state/sites/domains/selectors.js");

var _domainWarnings = __webpack_require__("./client/my-sites/domains/components/domain-warnings/index.jsx");

var _domainWarnings2 = _interopRequireDefault(_domainWarnings);

var _isSiteAutomatedTransfer = __webpack_require__("./client/state/selectors/is-site-automated-transfer.js");

var _isSiteAutomatedTransfer2 = _interopRequireDefault(_isSiteAutomatedTransfer);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
var CurrentPlan = function (_Component) {
	(0, _inherits3.default)(CurrentPlan, _Component);

	function CurrentPlan() {
		(0, _classCallCheck3.default)(this, CurrentPlan);
		return (0, _possibleConstructorReturn3.default)(this, (CurrentPlan.__proto__ || (0, _getPrototypeOf2.default)(CurrentPlan)).apply(this, arguments));
	}

	(0, _createClass3.default)(CurrentPlan, [{
		key: 'isLoading',
		value: function isLoading() {
			var _props = this.props,
			    selectedSite = _props.selectedSite,
			    isRequestingPlans = _props.isRequestingSitePlans;


			return !selectedSite || isRequestingPlans;
		}
	}, {
		key: 'getHeaderWording',
		value: function getHeaderWording(plan) {
			var translate = this.props.translate;


			var planConstObj = (0, _plans.getPlan)(plan),
			    title = translate('Your site is on a %(planName)s plan', {
				args: {
					planName: planConstObj.getTitle()
				}
			});

			var tagLine = planConstObj.getTagline ? planConstObj.getTagline() : translate('Unlock the full potential of your site with all the features included in your plan.');

			return {
				title: title,
				tagLine: tagLine
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    selectedSite = _props2.selectedSite,
			    selectedSiteId = _props2.selectedSiteId,
			    domains = _props2.domains,
			    context = _props2.context,
			    currentPlan = _props2.currentPlan,
			    isExpiring = _props2.isExpiring,
			    shouldShowDomainWarnings = _props2.shouldShowDomainWarnings,
			    hasDomainsLoaded = _props2.hasDomainsLoaded,
			    translate = _props2.translate,
			    isAutomatedTransfer = _props2.isAutomatedTransfer;


			var currentPlanSlug = selectedSite.plan.product_slug,
			    isLoading = this.isLoading();

			var _getHeaderWording = this.getHeaderWording(currentPlanSlug),
			    title = _getHeaderWording.title,
			    tagLine = _getHeaderWording.tagLine;

			var shouldQuerySiteDomains = selectedSiteId && shouldShowDomainWarnings;
			var showDomainWarnings = hasDomainsLoaded && shouldShowDomainWarnings;

			return _react2.default.createElement(
				_main2.default,
				{ className: 'current-plan', wideLayout: true },
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(_documentHead2.default, { title: translate('Plans', { textOnly: true }) }),
				_react2.default.createElement(_querySites2.default, { siteId: selectedSiteId }),
				_react2.default.createElement(_querySitePlans2.default, { siteId: selectedSiteId }),
				shouldQuerySiteDomains && _react2.default.createElement(_querySiteDomains2.default, { siteId: selectedSiteId }),
				_react2.default.createElement(_navigation2.default, {
					path: context.path,
					selectedSite: selectedSite
				}),
				showDomainWarnings && _react2.default.createElement(_domainWarnings2.default, {
					domains: domains,
					position: 'current-plan',
					selectedSite: selectedSite,
					ruleWhiteList: ['newDomainsWithPrimary', 'newDomains', 'unverifiedDomainsCanManage', 'pendingGappsTosAcceptanceDomains', 'unverifiedDomainsCannotManage', 'wrongNSMappedDomains'] }),
				_react2.default.createElement(
					_productPurchaseFeatures2.default,
					null,
					_react2.default.createElement(_header2.default, {
						selectedSite: selectedSite,
						isPlaceholder: isLoading,
						title: title,
						tagLine: tagLine,
						currentPlanSlug: currentPlanSlug,
						currentPlan: currentPlan,
						isExpiring: isExpiring,
						isAutomatedTransfer: isAutomatedTransfer
					}),
					_react2.default.createElement(_productPurchaseFeaturesList2.default, {
						plan: currentPlanSlug,
						isPlaceholder: isLoading
					})
				),
				_react2.default.createElement(_trackComponentView2.default, { eventName: 'calypso_plans_my_plan_view' })
			);
		}
	}]);
	return CurrentPlan;
}(_react.Component); /**
                      * External Dependencies
                      */


CurrentPlan.propTypes = {
	selectedSiteId: _react.PropTypes.number,
	selectedSite: _react.PropTypes.object,
	isRequestingSitePlans: _react.PropTypes.bool,
	context: _react.PropTypes.object,
	domains: _react.PropTypes.array,
	currentPlan: _react.PropTypes.object,
	isExpiring: _react.PropTypes.bool,
	shouldShowDomainWarnings: _react.PropTypes.bool,
	hasDomainsLoaded: _react.PropTypes.bool,
	isAutomatedTransfer: _react.PropTypes.bool
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var selectedSite = (0, _selectors2.getSelectedSite)(state);
	var selectedSiteId = (0, _selectors2.getSelectedSiteId)(state);
	var domains = (0, _selectors4.getDecoratedSiteDomains)(state, selectedSiteId);

	var isWpcom = !(0, _selectors3.isJetpackSite)(state, selectedSiteId);
	var isAutomatedTransfer = (0, _isSiteAutomatedTransfer2.default)(state, selectedSiteId);

	return {
		selectedSite: selectedSite,
		selectedSiteId: selectedSiteId,
		domains: domains,
		isAutomatedTransfer: isAutomatedTransfer,
		context: ownProps.context,
		currentPlan: (0, _selectors.getCurrentPlan)(state, selectedSiteId),
		isExpiring: (0, _selectors.isCurrentPlanExpiring)(state, selectedSiteId),
		shouldShowDomainWarnings: isWpcom || isAutomatedTransfer,
		hasDomainsLoaded: !!domains,
		isRequestingSitePlans: (0, _selectors.isRequestingSitePlans)(state, selectedSiteId)
	};
})((0, _i18nCalypso.localize)(CurrentPlan));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/plans/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	(0, _page2.default)('/plans', _controller2.default.siteSelection, _controller2.default.sites);

	(0, _page2.default)('/plans/compare', _controller2.default.siteSelection, _controller2.default.navigation, _controller4.default.redirectToPlans);

	(0, _page2.default)('/plans/compare/:domain', _controller2.default.siteSelection, _controller2.default.navigation, _controller4.default.redirectToPlans);

	(0, _page2.default)('/plans/features', _controller2.default.siteSelection, _controller2.default.navigation, _controller4.default.redirectToPlans);

	(0, _page2.default)('/plans/features/:domain', _controller2.default.siteSelection, _controller2.default.navigation, _controller4.default.redirectToPlans);

	(0, _page2.default)('/plans/features/:feature/:domain', _controller4.default.features);

	(0, _page2.default)('/plans/my-plan', _controller2.default.siteSelection, _controller2.default.sites, _controller2.default.navigation, _controller6.default.currentPlan);

	(0, _page2.default)('/plans/my-plan/:site', _controller2.default.siteSelection, _controller2.default.navigation, _controller6.default.currentPlan);

	(0, _page2.default)('/plans/select/:plan/:domain', _controller2.default.siteSelection, _controller4.default.redirectToCheckout);

	// This route renders the plans page for both WPcom and Jetpack sites.
	(0, _page2.default)('/plans/:intervalType?/:site', _controller2.default.siteSelection, _controller2.default.navigation, _controller4.default.plans);
};

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _controller = __webpack_require__("./client/my-sites/controller.js");

var _controller2 = _interopRequireDefault(_controller);

var _controller3 = __webpack_require__("./client/my-sites/plans/controller.jsx");

var _controller4 = _interopRequireDefault(_controller3);

var _controller5 = __webpack_require__("./client/my-sites/plans/current-plan/controller.jsx");

var _controller6 = _interopRequireDefault(_controller5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
module.exports = exports['default']; /**
                                      * External dependencies
                                      */

/***/ }),

/***/ "./client/my-sites/plans/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _documentHead = __webpack_require__("./client/components/data/document-head/index.jsx");

var _documentHead2 = _interopRequireDefault(_documentHead);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _pageViewTracker = __webpack_require__("./client/lib/analytics/page-view-tracker/index.jsx");

var _pageViewTracker2 = _interopRequireDefault(_pageViewTracker);

var _plansFeaturesMain = __webpack_require__("./client/my-sites/plans-features-main/index.jsx");

var _plansFeaturesMain2 = _interopRequireDefault(_plansFeaturesMain);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _trackComponentView = __webpack_require__("./client/lib/analytics/track-component-view/index.jsx");

var _trackComponentView2 = _interopRequireDefault(_trackComponentView);

var _navigation = __webpack_require__("./client/my-sites/domains/navigation.jsx");

var _navigation2 = _interopRequireDefault(_navigation);

var _isSiteAutomatedTransfer = __webpack_require__("./client/state/selectors/is-site-automated-transfer.js");

var _isSiteAutomatedTransfer2 = _interopRequireDefault(_isSiteAutomatedTransfer);

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _queryContactDetailsCache = __webpack_require__("./client/components/data/query-contact-details-cache/index.jsx");

var _queryContactDetailsCache2 = _interopRequireDefault(_queryContactDetailsCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plans = _react2.default.createClass({
	displayName: 'Plans',

	propTypes: {
		cart: _react2.default.PropTypes.object.isRequired,
		context: _react2.default.PropTypes.object.isRequired,
		intervalType: _react2.default.PropTypes.string,
		selectedSite: _react2.default.PropTypes.object,
		displayJetpackPlans: _react2.default.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			intervalType: 'yearly',
			displayJetpackPlans: false
		};
	},
	componentDidMount: function componentDidMount() {
		this.redirectIfNonJetpackMonthly();

		// Scroll to the top
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	},
	componentDidUpdate: function componentDidUpdate() {
		this.redirectIfNonJetpackMonthly();
	},
	redirectIfNonJetpackMonthly: function redirectIfNonJetpackMonthly() {
		var _props = this.props,
		    displayJetpackPlans = _props.displayJetpackPlans,
		    intervalType = _props.intervalType,
		    selectedSite = _props.selectedSite;


		if (selectedSite && !displayJetpackPlans && intervalType === 'monthly') {
			_page2.default.redirect('/plans/' + selectedSite.slug);
		}
	},
	renderPlaceholder: function renderPlaceholder() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_documentHead2.default, { title: this.props.translate('Plans', { textOnly: true }) }),
			_react2.default.createElement(
				_main2.default,
				{ wideLayout: true },
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement('div', { id: 'plans', className: 'plans has-sidebar' })
			)
		);
	},
	render: function render() {
		var _props2 = this.props,
		    selectedSite = _props2.selectedSite,
		    translate = _props2.translate,
		    displayJetpackPlans = _props2.displayJetpackPlans;


		if (!selectedSite) {
			return this.renderPlaceholder();
		}

		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_documentHead2.default, { title: translate('Plans', { textOnly: true }) }),
			_react2.default.createElement(_pageViewTracker2.default, { path: '/plans/:site', title: 'Plans' }),
			_react2.default.createElement(_queryContactDetailsCache2.default, null),
			_react2.default.createElement(_trackComponentView2.default, { eventName: 'calypso_plans_view' }),
			_react2.default.createElement(
				_main2.default,
				{ wideLayout: true },
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(
					'div',
					{ id: 'plans', className: 'plans has-sidebar' },
					_react2.default.createElement(_navigation2.default, {
						path: this.props.context.path,
						cart: this.props.cart,
						selectedSite: selectedSite }),
					_react2.default.createElement(_plansFeaturesMain2.default, {
						site: selectedSite,
						intervalType: this.props.intervalType,
						hideFreePlan: true,
						selectedFeature: this.props.selectedFeature,
						displayJetpackPlans: displayJetpackPlans
					})
				)
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
exports.default = (0, _reactRedux.connect)(function (state) {
	var selectedSiteId = (0, _selectors.getSelectedSiteId)(state);

	var jetpackSite = (0, _selectors2.isJetpackSite)(state, selectedSiteId);
	var isSiteAutomatedTransfer = (0, _isSiteAutomatedTransfer2.default)(state, selectedSiteId);

	return {
		selectedSite: (0, _selectors.getSelectedSite)(state),
		displayJetpackPlans: !isSiteAutomatedTransfer && jetpackSite
	};
})((0, _i18nCalypso.localize)(Plans));
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

/***/ "./client/state/current-user/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	DOMAINS_WITH_PLANS_ONLY: 'calypso_domains_with_plans_only'
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/state/domains/management/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.receiveContactDetailsCache = receiveContactDetailsCache;
exports.requestContactDetailsCache = requestContactDetailsCache;
exports.updateContactDetailsCache = updateContactDetailsCache;
exports.receiveWhois = receiveWhois;
exports.requestWhois = requestWhois;
exports.saveWhois = saveWhois;
exports.updateWhois = updateWhois;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action object to be used in signalling that a cached domains
 * contact details object has been received.
 *
 * @param   {Object}   data   cached contact details object
 * @returns {Object}   Action object
 */
/**
 * Internal dependencies
 */
function receiveContactDetailsCache(data) {
	return {
		type: _actionTypes.DOMAIN_MANAGEMENT_CONTACT_DETAILS_CACHE_RECEIVE,
		data: data
	};
}

/**
 * Triggers a network request to query domain contact details
 * cached data (originated from last domain purchase)
 * @returns {Function}          Action thunk
 */
function requestContactDetailsCache() {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.DOMAIN_MANAGEMENT_CONTACT_DETAILS_CACHE_REQUEST
		});

		_wp2.default.undocumented().getDomainContactInformation(function (error, data) {
			if (error) {
				dispatch({
					type: _actionTypes.DOMAIN_MANAGEMENT_CONTACT_DETAILS_CACHE_REQUEST_FAILURE,
					error: error
				});
				return;
			}

			dispatch(receiveContactDetailsCache(data));
			dispatch({
				type: _actionTypes.DOMAIN_MANAGEMENT_CONTACT_DETAILS_CACHE_REQUEST_SUCCESS
			});
		});
	};
}

function updateContactDetailsCache(data) {
	return {
		type: _actionTypes.DOMAIN_MANAGEMENT_CONTACT_DETAILS_CACHE_UPDATE,
		data: data
	};
}

/**
 * Returns an action object to be used in signalling that a WHOIS details
 * object has been received.
 *
 * @param	{String}   domain		domain queried
 * @param   {Object}   whoisData	contact details object
 * @returns {Object}   Action object
 */
function receiveWhois(domain, whoisData) {
	return {
		type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_RECEIVE,
		domain: domain,
		whoisData: whoisData
	};
}

/**
 * Triggers a network request to query WHOIS details
 *
 * @param   {String}   domain	domain to query
 * @returns {Function}          Action thunk
 */
function requestWhois(domain) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_REQUEST,
			domain: domain
		});

		return _wp2.default.undocumented().fetchWhois(domain).then(function (whoisData) {
			dispatch(receiveWhois(domain, whoisData));
			dispatch({
				type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_REQUEST_SUCCESS,
				domain: domain
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_REQUEST_FAILURE,
				domain: domain,
				error: error
			});
		});
	};
}

/**
 * Sends a network request to the server to save updated WHOIS details
 * at the domain's registrar.
 *
 * @param   {String}   domain		domain to query
 * @param   {Object}   whoisData	whois details object
 * @returns {Function}				Action thunk
 */
function saveWhois(domain, whoisData) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_SAVE,
			domain: domain
		});

		return _wp2.default.undocumented().updateWhois(domain, whoisData).then(function (_ref) {
			var updated = _ref.updated;

			dispatch(updateWhois(domain, updated));
			dispatch({
				type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_SAVE_SUCCESS,
				domain: domain
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_SAVE_FAILURE,
				domain: domain,
				error: error
			});
		});
	};
}

function updateWhois(domain, whoisData) {
	return {
		type: _actionTypes.DOMAIN_MANAGEMENT_WHOIS_UPDATE,
		domain: domain,
		whoisData: whoisData
	};
}

/***/ }),

/***/ "./client/state/signup/dependency-store/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

exports.getSignupDependencyStore = getSignupDependencyStore;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
function getSignupDependencyStore(state) {
  return (0, _get3.default)(state, 'signup.dependencyStore', {});
}

/***/ }),

/***/ "./client/state/sites/domains/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.domainsRequestFailureAction = exports.domainsRequestSuccessAction = exports.domainsRequestAction = exports.domainsReceiveAction = undefined;

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

exports.fetchSiteDomains = fetchSiteDomains;

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _assembler = __webpack_require__("./client/state/sites/domains/assembler.js");

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module vars
 */
/**
 * External dependencies
 */
var debug = (0, _debug2.default)('calypso:state:sites:domains:actions');

/**
 * Internal dependencies
 */

var errorMessage = 'There was a problem fetching site domains. Please try again later or contact support.';

/**
 * Action creator function
 *
 * Returns an action object to be used in signalling that
 * an object containing the domains for
 * a given site have been received.
 *
 * @param {Number} siteId - identifier of the site
 * @param {Object} domains - domains array gotten from WP REST-API response
 * @returns {Object} the action object
 */
var domainsReceiveAction = exports.domainsReceiveAction = function domainsReceiveAction(siteId, domains) {
	var action = {
		type: _actionTypes.SITE_DOMAINS_RECEIVE,
		siteId: siteId,
		domains: (0, _map3.default)(domains, _assembler.createSiteDomainObject)
	};

	debug('returning action: %o', action);
	return action;
};

/**
 * Action creator function
 *
 * Return SITE_DOMAINS_REQUEST action object
 *
 * @param {Number} siteId - side identifier
 * @return {Object} siteId - action object
 */
var domainsRequestAction = exports.domainsRequestAction = function domainsRequestAction(siteId) {
	var action = {
		type: _actionTypes.SITE_DOMAINS_REQUEST,
		siteId: siteId
	};

	debug('returning action: %o', action);
	return action;
};

/**
 * Action creator function
 *
 * Return SITE_DOMAINS_REQUEST_SUCCESS action object
 *
 * @param {Number} siteId - side identifier
 * @return {Object} siteId - action object
 */
var domainsRequestSuccessAction = exports.domainsRequestSuccessAction = function domainsRequestSuccessAction(siteId) {
	var action = {
		type: _actionTypes.SITE_DOMAINS_REQUEST_SUCCESS,
		siteId: siteId
	};

	debug('returning action: %o', action);
	return action;
};

/**
 * Action creator function
 *
 * Return SITE_DOMAINS_REQUEST_FAILURE action object
 *
 * @param {Number} siteId - site identifier
 * @param {Object} error - error message according to REST-API error response
 * @return {Object} action object
 */
var domainsRequestFailureAction = exports.domainsRequestFailureAction = function domainsRequestFailureAction(siteId, error) {
	var action = {
		type: _actionTypes.SITE_DOMAINS_REQUEST_FAILURE,
		siteId: siteId,
		error: error
	};

	debug('returning action: %o', action);
	return action;
};

/**
 * Fetches domains for the given site.
 *
 * @param {Number} siteId - identifier of the site
 * @returns {Function} a promise that will resolve once fetching is completed
 */
function fetchSiteDomains(siteId) {
	return function (dispatch) {
		dispatch(domainsRequestAction(siteId));

		return _wp2.default.site(siteId).domainsList().then(function (data) {
			var _data$domains = data.domains,
			    domains = _data$domains === undefined ? [] : _data$domains;

			dispatch(domainsRequestSuccessAction(siteId));
			dispatch(domainsReceiveAction(siteId, domains));
		}).catch(function () {
			var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : errorMessage;

			var message = error instanceof Error ? error.message : error;

			dispatch(domainsRequestFailureAction(siteId, message));
		});
	};
}

/***/ }),

/***/ "./client/state/sites/domains/assembler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createSiteDomainObject = undefined;

var _utils = __webpack_require__("./client/lib/domains/utils.js");

var createSiteDomainObject = exports.createSiteDomainObject = function createSiteDomainObject(domain) {
	return {
		autoRenewalDate: String(domain.auto_renewal_date),
		autoRenewing: Boolean(domain.auto_renewing),
		blogId: Number(domain.blog_id),
		canSetAsPrimary: Boolean(domain.can_set_as_primary),
		currentUserCanManage: Boolean(domain.current_user_can_manage),
		domain: String(domain.domain),
		domainLockingAvailable: Boolean(domain.domain_locking_available),
		expired: Boolean(domain.expired),
		expiry: !domain.expiry ? null : String(domain.expiry),
		expirySoon: Boolean(domain.expiry_soon),
		googleAppsSubscription: Object(domain.google_apps_subscription),
		hasPrivacyProtection: Boolean(domain.has_private_registration),
		privacyAvailable: Boolean(domain.privacy_available),
		hasRegistration: Boolean(domain.has_registration),
		hasZone: Boolean(domain.has_zone),
		isPendingIcannVerification: Boolean(domain.is_pending_icann_verification),
		isPrimary: Boolean(domain.primary_domain),
		isPendingWhoisUpdate: Boolean(domain.pending_whois_update),
		isPrivate: Boolean(domain.private_domain),
		isWPCOMDomain: Boolean(domain.wpcom_domain),
		manualTransferRequired: Boolean(domain.manual_transfer_required),
		newRegistration: Boolean(domain.new_registration),
		name: String(domain.domain),
		owner: String(domain.owner),
		partnerDomain: Boolean(domain.partner_domain),
		pendingRegistration: Boolean(domain.pending_registration),
		pendingRegistrationTime: String(domain.pending_registration_time),
		pointsToWpcom: Boolean(domain.points_to_wpcom),
		registrar: String(domain.registrar),
		registrationDate: String(domain.registration_date),
		subscriptionId: domain.subscription_id,
		transferLockOnWhoisUpdateOptional: Boolean(domain.transfer_lock_on_whois_update_optional),
		type: (0, _utils.getDomainType)(domain),
		whoisUpdateUnmodifiableFields: domain.whois_update_unmodifiable_fields
	};
}; /**
    * Internal dependencies
    */

/***/ }),

/***/ "./client/state/sites/domains/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isRequestingSiteDomains = exports.getDomainsBySite = exports.getDomainsBySiteId = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.getDecoratedSiteDomains = getDecoratedSiteDomains;

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return site domains getting from state object and
 * the given siteId
 *
 * @param {Object} state - current state object
 * @param {Number} siteId - site identificator
 * @return {Array} site domains
 */
var getDomainsBySiteId = exports.getDomainsBySiteId = function getDomainsBySiteId(state, siteId) {
	if (!siteId) {
		return [];
	}

	var items = state.sites.domains.items;

	return items[siteId] || [];
};

/**
 * Return site domains getting from state object and
 * the given site object
 *
 * @param {Object} state - current state object
 * @param {Object} site - site object
 * @return {Array} site domains
 */
/**
 * External dependencies
 */
var getDomainsBySite = exports.getDomainsBySite = function getDomainsBySite(state, site) {
	if (!site) {
		return [];
	}
	return getDomainsBySiteId(state, site.ID);
};

/**
 * Return requesting state for the given site
 *
 * @param {Object} state - current state object
 * @param {Number} siteId - site identifier
 * @return {Boolean} is site-domains requesting?
 */
var isRequestingSiteDomains = exports.isRequestingSiteDomains = function isRequestingSiteDomains(state, siteId) {
	var requesting = state.sites.domains.requesting;

	return requesting[siteId] || false;
};

/**
 * Returns decorated site domains with objects we don't want to store in Redux state tree.
 *
 * @param  {Object}  state  global state
 * @param  {Number}  siteId the site id
 * @return {?Object}        decorated site domains
 */
function getDecoratedSiteDomains(state, siteId) {
	var domains = getDomainsBySiteId(state, siteId);

	if (!domains) {
		return null;
	}

	return domains.map(function (domain) {
		return (0, _extends3.default)({}, domain, {

			autoRenewalMoment: domain.autoRenewalDate ? (0, _i18nCalypso.moment)(domain.autoRenewalDate) : null,

			registrationMoment: domain.registrationDate ? (0, _i18nCalypso.moment)(domain.registrationDate) : null,

			expirationMoment: domain.expiry ? (0, _i18nCalypso.moment)(domain.expiry) : null
		});
	});
}

/***/ }),

/***/ "./client/state/sites/vouchers/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.vouchersAssignRequestFailureAction = exports.vouchersAssignRequestSuccessAction = exports.vouchersAssignRequestAction = exports.vouchersAssignReceiveAction = exports.vouchersRequestFailureAction = exports.vouchersRequestSuccessAction = exports.vouchersRequestAction = exports.vouchersReceiveAction = undefined;
exports.requestSiteVouchers = requestSiteVouchers;
exports.assignSiteVoucher = assignSiteVoucher;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _httpEnvelopeNormalizer = __webpack_require__("./client/lib/wp/handlers/http-envelope-normalizer.js");

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inject httpEnvelopeNormalizer handler to wpcom
var wpcom = (0, _httpEnvelopeNormalizer.injectHandler)(_wp2.default);

/**
 * Action creator function
 *
 * Returns an action object to be used in signalling that
 * an object containing the vouchers for
 * a given site have been received.
 *
 * @param {Number} siteId - identifier of the site
 * @param {Object} vouchers - vouchers array gotten from WP REST-API response
 * @returns {Object} the action object
 */
/**
 * Internal dependencies
 */
var vouchersReceiveAction = exports.vouchersReceiveAction = function vouchersReceiveAction(siteId, vouchers) {
	return {
		type: _actionTypes.SITE_VOUCHERS_RECEIVE,
		siteId: siteId,
		vouchers: vouchers
	};
};

/**
 * Action creator function
 *
 * Return SITE_VOUCHERS_REQUEST action object
 *
 * @param {Number} siteId - side identifier
 * @return {Object} siteId - action object
 */
var vouchersRequestAction = exports.vouchersRequestAction = function vouchersRequestAction(siteId) {
	return {
		type: _actionTypes.SITE_VOUCHERS_REQUEST,
		siteId: siteId
	};
};

var vouchersRequestSuccessAction = exports.vouchersRequestSuccessAction = function vouchersRequestSuccessAction(siteId) {
	return {
		type: _actionTypes.SITE_VOUCHERS_REQUEST_SUCCESS,
		siteId: siteId
	};
};

var vouchersRequestFailureAction = exports.vouchersRequestFailureAction = function vouchersRequestFailureAction(siteId, error) {
	return {
		type: _actionTypes.SITE_VOUCHERS_REQUEST_FAILURE,
		siteId: siteId,
		error: error
	};
};

var vouchersAssignReceiveAction = exports.vouchersAssignReceiveAction = function vouchersAssignReceiveAction(siteId, serviceType, voucher) {
	return {
		type: _actionTypes.SITE_VOUCHERS_ASSIGN_RECEIVE,
		siteId: siteId,
		serviceType: serviceType,
		voucher: voucher
	};
};

var vouchersAssignRequestAction = exports.vouchersAssignRequestAction = function vouchersAssignRequestAction(siteId, serviceType) {
	return {
		type: _actionTypes.SITE_VOUCHERS_ASSIGN_REQUEST,
		siteId: siteId,
		serviceType: serviceType
	};
};

var vouchersAssignRequestSuccessAction = exports.vouchersAssignRequestSuccessAction = function vouchersAssignRequestSuccessAction(siteId, serviceType) {
	return {
		type: _actionTypes.SITE_VOUCHERS_ASSIGN_REQUEST_SUCCESS,
		siteId: siteId,
		serviceType: serviceType
	};
};

var vouchersAssignRequestFailureAction = exports.vouchersAssignRequestFailureAction = function vouchersAssignRequestFailureAction(siteId, serviceType, error) {
	return {
		type: _actionTypes.SITE_VOUCHERS_ASSIGN_REQUEST_FAILURE,
		siteId: siteId,
		serviceType: serviceType,
		error: error
	};
};

/**
 * Fetches vouchers for the given site.
 *
 * @param {Number} siteId - identifier of the site
 * @returns {Function} a promise that will resolve once fetching is completed
 */
function requestSiteVouchers(siteId) {
	return function (dispatch) {
		dispatch(vouchersRequestAction(siteId));

		return wpcom.site(siteId).creditVouchers().list().then(function (data) {
			var _data$vouchers = data.vouchers,
			    vouchers = _data$vouchers === undefined ? [] : _data$vouchers;

			dispatch(vouchersRequestSuccessAction(siteId));
			dispatch(vouchersReceiveAction(siteId, vouchers));
		}).catch(function (error) {
			var message = error instanceof Error ? error.message : error;

			dispatch(vouchersRequestFailureAction(siteId, message));
		});
	};
}

/**
 * Assign a voucher to the given site.
 *
 * @param {Number} siteId - identifier of the site
 * @param {String} serviceType - service type supported: 'google-credits', etc.
 * @returns {Function} a promise that will resolve once fetching is completed
 */
function assignSiteVoucher(siteId, serviceType) {
	return function (dispatch) {
		dispatch(vouchersAssignRequestAction(siteId, serviceType));

		return wpcom.site(siteId).creditVouchers().assign(serviceType).then(function (data) {
			var _data$voucher = data.voucher,
			    voucher = _data$voucher === undefined ? {} : _data$voucher;

			dispatch(vouchersAssignRequestSuccessAction(siteId, serviceType));
			dispatch(vouchersAssignReceiveAction(siteId, serviceType, voucher));
		}).catch(function (error) {
			var message = error instanceof Error ? error.message : error;

			dispatch(vouchersAssignRequestFailureAction(siteId, serviceType, message));
		});
	};
}

/***/ }),

/***/ "./client/state/sites/vouchers/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAssigningSiteVoucher = exports.isRequestingSiteVouchers = exports.getGoogleAdCredits = exports.getVouchersBySiteIdAndServiceType = exports.getVouchersBySite = exports.getVouchersBySiteId = undefined;

var _serviceTypes = __webpack_require__("./client/state/sites/vouchers/service-types.js");

/**
 * Return site vouchers getting from state object and
 * the given siteId
 *
 * @param {Object} state - current state object
 * @param {Number} siteId - site identificator
 * @return {Array} site vouchers
 */
var getVouchersBySiteId = exports.getVouchersBySiteId = function getVouchersBySiteId(state, siteId) {
  if (!siteId) {
    return [];
  }

  return state.sites.vouchers.items[siteId] || [];
};

/**
 * Return site vouchers getting from state object and
 * the given site object
 *
 * @param {Object} state - current state object
 * @param {Object} site - site object
 * @return {Array} site vouchers
 */
/**
 * Internal dependencies
 */

var getVouchersBySite = exports.getVouchersBySite = function getVouchersBySite(state, site) {
  if (!site) {
    return [];
  }
  return getVouchersBySiteId(state, site.ID);
};

var getVouchersBySiteIdAndServiceType = exports.getVouchersBySiteIdAndServiceType = function getVouchersBySiteIdAndServiceType(state, siteId, serviceType) {
  return getVouchersBySiteId(state, siteId)[serviceType] || [];
};

/**
 * Return google-credits vouchers
 *
 * @param {Object} state - current state object
 * @param {Object} site - site object
 * @return {Array} site vouchers
 */

var getGoogleAdCredits = exports.getGoogleAdCredits = function getGoogleAdCredits(state, site) {
  var vouchers = getVouchersBySite(state, site);
  return vouchers[_serviceTypes.GOOGLE_CREDITS] || [];
};

/**
 * Return requesting state for the given site
 *
 * @param {Object} state - current state object
 * @param {Number} siteId - site identifier
 * @return {Boolean} is site-vouchers requesting?
 */
var isRequestingSiteVouchers = exports.isRequestingSiteVouchers = function isRequestingSiteVouchers(state, siteId) {
  return state.sites.vouchers.requesting[siteId] || false;
};

/**
 * Return assign requesting state for the given site
 * and serviceType
 *
 * @param {Object} state - current state object
 * @param {Number} siteId - site identifier
 * @param {String} serviceType - service type
 * @return {Boolean} true if a voucher is being assigned
 */
var isAssigningSiteVoucher = exports.isAssigningSiteVoucher = function isAssigningSiteVoucher(state, siteId, serviceType) {
  var requesting = state.sites.vouchers.requesting[siteId];
  return requesting ? requesting[serviceType] : false;
};

/***/ }),

/***/ "./client/state/sites/vouchers/service-types.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GOOGLE_CREDITS = exports.GOOGLE_CREDITS = 'google-credits';

/***/ })

});