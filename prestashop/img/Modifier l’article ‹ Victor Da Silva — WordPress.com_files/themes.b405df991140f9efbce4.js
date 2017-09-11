webpackJsonp(["themes","async-load-lib-olark"],{

/***/ "./client/blocks/eligibility-warnings/hold-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.HoldList = undefined;

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mapping eligibility holds to messages that will be shown to the user
// TODO: update supportUrls and maybe create similar mapping for warnings
/**
 * External dependencies
 */
function getHoldMessages(siteSlug, translate) {
	return {
		TRANSFER_ALREADY_EXISTS: {
			title: translate('Installation in progress'),
			description: translate('Please wait for the other installation to complete, then try again.'),
			supportUrl: 'https://wordpress.com/help'
		},
		NO_JETPACK_SITES: {
			title: translate('Jetpack site not supported'),
			description: translate('Try using a different site.')
		},
		NO_VIP_SITES: {
			title: translate('VIP site not supported'),
			description: translate('Try using a different site.')
		},
		SITE_PRIVATE: {
			title: translate('Private site not supported'),
			description: translate('Make your site public or hidden to resolve.'),
			supportUrl: '/settings/general/' + siteSlug
		},
		SITE_GRAYLISTED: {
			title: translate('Flagged site not supported'),
			description: translate("Contact us to review your site's standing to resolve."),
			supportUrl: 'https://support.wordpress.com/suspended-blogs/'
		},
		NON_ADMIN_USER: {
			title: translate('Site owner access required'),
			description: translate('Only site owners are allowed to use this feature.'),
			supportUrl: 'https://support.wordpress.com/user-roles/'
		},
		NOT_DOMAIN_OWNER: {
			title: translate('Not a custom domain owner'),
			description: translate('You must be the owner of the primary domain subscription to use this feature.'),
			supportUrl: 'https://support.wordpress.com/domains/'
		},
		NO_WPCOM_NAMESERVERS: {
			title: translate('Domain not using WordPress.com name servers'),
			description: translate('Your domain must use WordPress.com name servers to support custom code. ' + 'Ask your domain provider to update your DNS settings.'),
			supportUrl: 'https://en.support.wordpress.com/domains/map-existing-domain/' + '#2-ask-your-domain-provider-to-update-your-dns-settings'
		},
		NOT_RESOLVING_TO_WPCOM: {
			title: translate('Domain not pointing to WordPress.com servers'),
			description: translate('We cannot manage your site because your domain does not point to WordPress.com servers. ' + 'Follow the instructions to reset your domain\'s A records to resolve this.'),
			supportUrl: 'https://support.wordpress.com/move-domain/setting-custom-a-records/'
		},
		NO_SSL_CERTIFICATE: {
			title: translate('Security certificate required'),
			description: translate('We are setting up a security certificate for your domain now. Please try again in a few minutes.')
		},
		EMAIL_UNVERIFIED: {
			title: translate('Unconfirmed email'),
			description: translate('You must have verified your email address with WordPress.com to install custom code. ' + 'Please check your email to confirm your address.')
		},
		EXCESSIVE_DISK_SPACE: {
			title: translate('We can\'t proceed with this upload'),
			description: translate('This site is not currently eligible for installing themes and plugins. Please contact support to straighten things out.'),
			supportUrl: 'https://support.wordpress.com/help-support-options/'
		}
	};
}

/**
 * Internal dependencies
 */
var HoldList = exports.HoldList = function HoldList(_ref) {
	var holds = _ref.holds,
	    isPlaceholder = _ref.isPlaceholder,
	    siteSlug = _ref.siteSlug,
	    translate = _ref.translate;

	var holdMessages = getHoldMessages(siteSlug, translate);

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_sectionHeader2.default, { label: translate('Please resolve this issue:', 'Please resolve these issues:', { count: holds.length }) }),
		_react2.default.createElement(
			_card2.default,
			{ className: 'eligibility-warnings__hold-list' },
			isPlaceholder && _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'eligibility-warnings__hold' },
					_react2.default.createElement(_gridicons2.default, { icon: 'notice-outline', size: 24 }),
					_react2.default.createElement('div', { className: 'eligibility-warnings__message' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'eligibility-warnings__hold' },
					_react2.default.createElement(_gridicons2.default, { icon: 'notice-outline', size: 24 }),
					_react2.default.createElement('div', { className: 'eligibility-warnings__message' })
				)
			),
			!isPlaceholder && (0, _map3.default)(holds, function (hold) {
				return _react2.default.createElement(
					'div',
					{ className: 'eligibility-warnings__hold', key: hold },
					_react2.default.createElement(_gridicons2.default, { icon: 'notice-outline', size: 24 }),
					_react2.default.createElement(
						'div',
						{ className: 'eligibility-warnings__message' },
						_react2.default.createElement(
							'span',
							{ className: 'eligibility-warnings__message-title' },
							holdMessages[hold].title
						),
						':\xA0',
						_react2.default.createElement(
							'span',
							{ className: 'eligibility-warnings__message-description' },
							holdMessages[hold].description
						)
					),
					holdMessages[hold].supportUrl && _react2.default.createElement(
						'div',
						{ className: 'eligibility-warnings__action' },
						_react2.default.createElement(
							_button2.default,
							{
								compact: true,
								href: holdMessages[hold].supportUrl,
								rel: 'noopener noreferrer'
							},
							translate('Resolve')
						)
					)
				);
			})
		)
	);
};

exports.default = (0, _i18nCalypso.localize)(HoldList);

/***/ }),

/***/ "./client/blocks/eligibility-warnings/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EligibilityWarnings = undefined;

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _partition4 = __webpack_require__("./node_modules/lodash/partition.js");

var _partition5 = _interopRequireDefault(_partition4);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _trackComponentView = __webpack_require__("./client/lib/analytics/track-component-view/index.jsx");

var _trackComponentView2 = _interopRequireDefault(_trackComponentView);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _selectors = __webpack_require__("./client/state/automated-transfer/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/ui/selectors.js");

var _banner = __webpack_require__("./client/components/banner/index.jsx");

var _banner2 = _interopRequireDefault(_banner);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _queryAtatEligibility = __webpack_require__("./client/components/data/query-atat-eligibility/index.jsx");

var _queryAtatEligibility2 = _interopRequireDefault(_queryAtatEligibility);

var _holdList = __webpack_require__("./client/blocks/eligibility-warnings/hold-list.jsx");

var _holdList2 = _interopRequireDefault(_holdList);

var _warningList = __webpack_require__("./client/blocks/eligibility-warnings/warning-list.jsx");

var _warningList2 = _interopRequireDefault(_warningList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var EligibilityWarnings = exports.EligibilityWarnings = function EligibilityWarnings(_ref) {
	var backUrl = _ref.backUrl,
	    context = _ref.context,
	    eligibilityData = _ref.eligibilityData,
	    hasBusinessPlan = _ref.hasBusinessPlan,
	    isEligible = _ref.isEligible,
	    isJetpack = _ref.isJetpack,
	    isPlaceholder = _ref.isPlaceholder,
	    onProceed = _ref.onProceed,
	    onCancel = _ref.onCancel,
	    siteId = _ref.siteId,
	    siteSlug = _ref.siteSlug,
	    translate = _ref.translate;

	var warnings = (0, _get3.default)(eligibilityData, 'eligibilityWarnings', []);

	var _partition2 = (0, _partition5.default)((0, _get3.default)(eligibilityData, 'eligibilityHolds', []), function (hold) {
		return (0, _includes3.default)(['NO_BUSINESS_PLAN', 'NOT_USING_CUSTOM_DOMAIN'], hold);
	}),
	    _partition3 = (0, _slicedToArray3.default)(_partition2, 2),
	    bannerHolds = _partition3[0],
	    listHolds = _partition3[1];

	var classes = (0, _classnames2.default)('eligibility-warnings', { 'eligibility-warnings__placeholder': isPlaceholder });

	return _react2.default.createElement(
		'div',
		{ className: classes },
		_react2.default.createElement(_queryAtatEligibility2.default, { siteId: siteId }),
		_react2.default.createElement(_trackComponentView2.default, {
			eventName: 'calypso_automated_transfer_eligibility_show_warnings',
			eventProperties: { context: context }
		}),
		!hasBusinessPlan && !isJetpack && _react2.default.createElement(_banner2.default, {
			description: translate('Also get unlimited themes, advanced customization, no ads, live chat support, and more.'),
			feature: 'plugins' === context ? _constants.FEATURE_UPLOAD_PLUGINS : _constants.FEATURE_UPLOAD_THEMES,
			event: 'plugins' === context ? 'calypso-plugin-eligibility-upgrade-nudge' : 'calypso-theme-eligibility-upgrade-nudge',
			plan: _constants.PLAN_BUSINESS,
			title: translate('Business plan required')
		}),
		hasBusinessPlan && !isJetpack && (0, _includes3.default)(bannerHolds, 'NOT_USING_CUSTOM_DOMAIN') && _react2.default.createElement(_banner2.default, {
			className: 'eligibility-warnings__banner',
			description: 'plugins' === context ? translate('To install this plugin, add a free custom domain.') : translate('To upload themes, add a free custom domain.'),
			href: '/domains/manage/' + siteSlug,
			icon: 'domains',
			title: translate('Custom domain required')
		}),
		(isPlaceholder || listHolds.length > 0) && _react2.default.createElement(_holdList2.default, {
			holds: listHolds,
			isPlaceholder: isPlaceholder,
			siteSlug: siteSlug
		}),
		warnings.length > 0 && _react2.default.createElement(_warningList2.default, { warnings: warnings }),
		isEligible && 0 === listHolds.length && 0 === warnings.length && _react2.default.createElement(
			_card2.default,
			{ className: 'eligibility-warnings__no-conflicts' },
			_react2.default.createElement(_gridicons2.default, { icon: 'thumbs-up', size: 24 }),
			_react2.default.createElement(
				'span',
				null,
				translate('This site is eligible to install plugins and upload themes.')
			)
		),
		_react2.default.createElement(
			_card2.default,
			{ className: 'eligibility-warnings__confirm-box' },
			_react2.default.createElement(
				'div',
				{ className: 'eligibility-warnings__confirm-text' },
				!isEligible && translate('The errors above must be resolved before proceeding. '),
				isEligible && warnings.length > 0 && translate('If you proceed you will no longer be able to use these features. '),
				translate('Have questions? Please {{a}}contact support{{/a}}.', {
					components: {
						a: _react2.default.createElement('a', { href: 'https://wordpress.com/help/contact', target: '_blank', rel: 'noopener noreferrer' })
					}
				})
			),
			_react2.default.createElement(
				'div',
				{ className: 'eligibility-warnings__confirm-buttons' },
				_react2.default.createElement(
					_button2.default,
					{ href: backUrl, onClick: onCancel },
					translate('Cancel')
				),
				_react2.default.createElement(
					_button2.default,
					{ primary: true, disabled: !isEligible, onClick: onProceed },
					translate('Proceed')
				)
			)
		)
	);
}; /**
    * External dependencies
    */


EligibilityWarnings.propTypes = {
	onProceed: _react.PropTypes.func,
	backUrl: _react.PropTypes.string,
	translate: _react.PropTypes.func
};

EligibilityWarnings.defaultProps = {
	onProceed: _noop3.default
};

var mapStateToProps = function mapStateToProps(state) {
	var siteId = (0, _selectors3.getSelectedSiteId)(state);
	var siteSlug = (0, _selectors3.getSelectedSiteSlug)(state);
	var eligibilityData = (0, _selectors.getEligibility)(state, siteId);
	var isEligible = (0, _selectors.isEligibleForAutomatedTransfer)(state, siteId);
	var eligibilityHolds = (0, _get3.default)(eligibilityData, 'eligibilityHolds', []);
	var hasBusinessPlan = !(0, _includes3.default)(eligibilityHolds, 'NO_BUSINESS_PLAN');
	var isJetpack = (0, _selectors2.isJetpackSite)(state, siteId);
	var dataLoaded = !!eligibilityData.lastUpdate;

	return {
		eligibilityData: eligibilityData,
		hasBusinessPlan: hasBusinessPlan,
		isEligible: isEligible,
		isJetpack: isJetpack,
		isPlaceholder: !dataLoaded,
		siteId: siteId,
		siteSlug: siteSlug
	};
};

var mapDispatchToProps = {
	trackCancel: function trackCancel() {
		var eventProperties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		return (0, _actions.recordTracksEvent)('calypso_automated_transfer_eligibility_click_cancel', eventProperties);
	},
	trackProceed: function trackProceed() {
		var eventProperties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		return (0, _actions.recordTracksEvent)('calypso_automated_transfer_eligibilty_click_proceed', eventProperties);
	}
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
	var context = (0, _includes3.default)(ownProps.backUrl, 'plugins') ? 'plugins' : 'themes';
	var onCancel = function onCancel() {
		return dispatchProps.trackCancel({ context: context });
	};
	var onProceed = function onProceed() {
		ownProps.onProceed();
		dispatchProps.trackProceed({ context: context });
	};
	return (0, _assign2.default)({}, ownProps, stateProps, dispatchProps, { onCancel: onCancel, onProceed: onProceed, context: context });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)((0, _i18nCalypso.localize)(EligibilityWarnings));

/***/ }),

/***/ "./client/blocks/eligibility-warnings/warning-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.WarningList = undefined;

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _externalLink = __webpack_require__("./client/components/external-link/index.jsx");

var _externalLink2 = _interopRequireDefault(_externalLink);

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var WarningList = exports.WarningList = function WarningList(_ref) {
	var translate = _ref.translate,
	    warnings = _ref.warnings;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_sectionHeader2.default, { label: translate("By proceeding you'll lose %d feature:", "By proceeding you'll lose these %d features:", {
				count: warnings.length,
				args: warnings.length
			}) }),
		_react2.default.createElement(
			_card2.default,
			{ className: 'eligibility-warnings__warning-list' },
			(0, _map3.default)(warnings, function (_ref2, index) {
				var name = _ref2.name,
				    description = _ref2.description,
				    supportUrl = _ref2.supportUrl;
				return _react2.default.createElement(
					'div',
					{ className: 'eligibility-warnings__warning', key: index },
					_react2.default.createElement(_gridicons2.default, { icon: 'cross-small', size: 24 }),
					_react2.default.createElement(
						'div',
						{ className: 'eligibility-warnings__message' },
						_react2.default.createElement(
							'span',
							{ className: 'eligibility-warnings__message-title' },
							name
						),
						':\xA0',
						_react2.default.createElement(
							'span',
							{ className: 'eligibility-warnings__message-description' },
							description
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'eligibility-warnings__action' },
						_react2.default.createElement(
							_externalLink2.default,
							{ href: supportUrl, target: '_blank', rel: 'noopener noreferrer' },
							_react2.default.createElement(_gridicons2.default, { icon: 'help-outline', size: 24 })
						)
					)
				);
			})
		)
	);
};

/**
 * Internal dependencies
 */
exports.default = (0, _i18nCalypso.localize)(WarningList);

/***/ }),

/***/ "./client/blocks/upload-drop-zone/index.jsx":
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

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _filePicker = __webpack_require__("./client/components/file-picker/index.jsx");

var _filePicker2 = _interopRequireDefault(_filePicker);

var _dropZone = __webpack_require__("./client/components/drop-zone/index.jsx");

var _dropZone2 = _interopRequireDefault(_dropZone);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _notices = __webpack_require__("./client/notices/index.js");

var _notices2 = _interopRequireDefault(_notices);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _constants = __webpack_require__("./client/lib/automated-transfer/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var debug = (0, _debug2.default)('calypso:upload-drop-zone'); /**
                                                               * External dependencies
                                                               */

var UploadDropZone = function (_Component) {
	(0, _inherits3.default)(UploadDropZone, _Component);

	function UploadDropZone() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, UploadDropZone);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UploadDropZone.__proto__ || (0, _getPrototypeOf2.default)(UploadDropZone)).call.apply(_ref, [this].concat(args))), _this), _this.onFileSelect = function (files) {
			var _this$props = _this.props,
			    translate = _this$props.translate,
			    siteId = _this$props.siteId,
			    doUpload = _this$props.doUpload;


			if (files.length !== 1) {
				_notices2.default.error(translate('Please drop a single zip file'));
				return;
			}

			// DropZone supplies an array, FilePicker supplies a FileList
			var file = files[0] || files.item(0);
			debug('zip file:', file);

			if (file.size > _constants.MAX_UPLOAD_ZIP_SIZE) {
				_notices2.default.error(translate('Zip file is too large. Please upload a file under 50 MB.'));
				return;
			}

			doUpload(siteId, file);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(UploadDropZone, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    disabled = _props.disabled;

			var dropText = translate('Drop files or click here to upload');
			var uploadInstructionsText = translate('Only single .zip files are accepted.');

			var className = (0, _classnames2.default)('upload-drop-zone', {
				'is-disabled': disabled
			});

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'div',
					{ className: 'upload-drop-zone__dropzone' },
					_react2.default.createElement(_dropZone2.default, { onFilesDrop: this.onFileSelect }),
					_react2.default.createElement(
						_filePicker2.default,
						{ accept: 'application/zip', onPick: this.onFileSelect },
						_react2.default.createElement(_gridicons2.default, {
							className: 'upload-drop-zone__icon',
							icon: 'cloud-upload',
							size: 48 }),
						dropText,
						_react2.default.createElement(
							'span',
							{ className: 'upload-drop-zone__instructions' },
							uploadInstructionsText
						)
					)
				)
			);
		}
	}]);
	return UploadDropZone;
}(_react.Component);

UploadDropZone.propTypes = {
	doUpload: _react.PropTypes.func.isRequired,
	disabled: _react.PropTypes.bool,
	// Connected
	siteId: _react.PropTypes.number
};
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		siteId: (0, _selectors.getSelectedSiteId)(state)
	};
})((0, _i18nCalypso.localize)(UploadDropZone));
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

/***/ "./client/components/data/query-active-theme/index.jsx":
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

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryActiveTheme = function (_Component) {
	(0, _inherits3.default)(QueryActiveTheme, _Component);

	function QueryActiveTheme() {
		(0, _classCallCheck3.default)(this, QueryActiveTheme);
		return (0, _possibleConstructorReturn3.default)(this, (QueryActiveTheme.__proto__ || (0, _getPrototypeOf2.default)(QueryActiveTheme)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryActiveTheme, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.request(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.siteId === nextProps.siteId) {
				return;
			}
			this.request(nextProps);
		}
	}, {
		key: 'request',
		value: function request(props) {
			if (props.siteId && !props.isRequesting) {
				props.requestActiveTheme(props.siteId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryActiveTheme;
}(_react.Component);

QueryActiveTheme.propTypes = {
	siteId: _react.PropTypes.number,
	// Connected props
	isRequesting: _react.PropTypes.bool.isRequired,
	requestActiveTheme: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId;
	return {
		isRequesting: (0, _selectors.isRequestingActiveTheme)(state, siteId)
	};
}, { requestActiveTheme: _actions.requestActiveTheme })(QueryActiveTheme);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-atat-eligibility/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mapDispatchToProps = exports.QueryAutomatedTransferEligibility = undefined;

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

var _actions = __webpack_require__("./client/state/automated-transfer/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryAutomatedTransferEligibility = exports.QueryAutomatedTransferEligibility = function (_Component) {
	(0, _inherits3.default)(QueryAutomatedTransferEligibility, _Component);

	function QueryAutomatedTransferEligibility() {
		(0, _classCallCheck3.default)(this, QueryAutomatedTransferEligibility);
		return (0, _possibleConstructorReturn3.default)(this, (QueryAutomatedTransferEligibility.__proto__ || (0, _getPrototypeOf2.default)(QueryAutomatedTransferEligibility)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryAutomatedTransferEligibility, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.request(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.siteId !== nextProps.siteId) {
				this.request(nextProps);
			}
		}
	}, {
		key: 'request',
		value: function request(_ref) {
			var requestEligibility = _ref.requestEligibility,
			    siteId = _ref.siteId;

			siteId && requestEligibility(siteId);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryAutomatedTransferEligibility;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


QueryAutomatedTransferEligibility.propTypes = {
	requestEligibility: _react.PropTypes.func.isRequired,
	siteId: _react.PropTypes.number
};
var mapDispatchToProps = exports.mapDispatchToProps = {
	requestEligibility: _actions.requestEligibility
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(QueryAutomatedTransferEligibility);

/***/ }),

/***/ "./client/components/data/query-canonical-theme/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _queryTheme = __webpack_require__("./client/components/data/query-theme/index.jsx");

var _queryTheme2 = _interopRequireDefault(_queryTheme);

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryCanonicalTheme = function QueryCanonicalTheme(_ref) {
	var siteId = _ref.siteId,
	    themeId = _ref.themeId,
	    isWpcom = _ref.isWpcom,
	    isWporg = _ref.isWporg;
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_queryTheme2.default, { themeId: themeId, siteId: 'wpcom' }),
		!isWpcom && _react2.default.createElement(_queryTheme2.default, { themeId: themeId, siteId: 'wporg' }),
		!isWpcom && !isWporg && siteId && _react2.default.createElement(_queryTheme2.default, { themeId: themeId, siteId: siteId })
	);
};

QueryCanonicalTheme.propTypes = {
	siteId: _react.PropTypes.number,
	themeId: _react.PropTypes.string.isRequired,
	// Connected propTypes
	isWpcom: _react.PropTypes.bool.isRequired,
	isWporg: _react.PropTypes.bool.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var themeId = _ref2.themeId;
	return {
		isWpcom: (0, _selectors.isWpcomTheme)(state, themeId),
		isWporg: (0, _selectors.isWporgTheme)(state, themeId)
	};
})(QueryCanonicalTheme);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-site-purchases/index.jsx":
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

var _selectors = __webpack_require__("./client/state/purchases/selectors.js");

var _actions = __webpack_require__("./client/state/purchases/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QuerySitePurchases = function (_Component) {
	(0, _inherits3.default)(QuerySitePurchases, _Component);

	function QuerySitePurchases() {
		(0, _classCallCheck3.default)(this, QuerySitePurchases);
		return (0, _possibleConstructorReturn3.default)(this, (QuerySitePurchases.__proto__ || (0, _getPrototypeOf2.default)(QuerySitePurchases)).apply(this, arguments));
	}

	(0, _createClass3.default)(QuerySitePurchases, [{
		key: 'requestSitePurchases',
		value: function requestSitePurchases() {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

			if (props.siteId) {
				this.props.fetchSitePurchases(props.siteId);
			}
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.requestSitePurchases();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.requesting || !nextProps.siteId || this.props.siteId === nextProps.siteId) {
				return;
			}
			this.requestSitePurchases(nextProps);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QuerySitePurchases;
}(_react.Component);

QuerySitePurchases.propTypes = {
	siteId: _react.PropTypes.number,
	requesting: _react.PropTypes.bool,
	fetchSitePurchases: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		requesting: (0, _selectors.isFetchingSitePurchases)(state)
	};
}, { fetchSitePurchases: _actions.fetchSitePurchases })(QuerySitePurchases);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-theme-filters/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.QueryThemeFilters = undefined;

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

var _actions = __webpack_require__("./client/state/themes/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryThemeFilters = exports.QueryThemeFilters = function (_Component) {
	(0, _inherits3.default)(QueryThemeFilters, _Component);

	function QueryThemeFilters() {
		(0, _classCallCheck3.default)(this, QueryThemeFilters);
		return (0, _possibleConstructorReturn3.default)(this, (QueryThemeFilters.__proto__ || (0, _getPrototypeOf2.default)(QueryThemeFilters)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryThemeFilters, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.requestThemeFilters();
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryThemeFilters;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


QueryThemeFilters.propTypes = {
	requestThemeFilters: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(null, { requestThemeFilters: _actions.requestThemeFilters })(QueryThemeFilters);

/***/ }),

/***/ "./client/components/data/query-theme/index.jsx":
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

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryTheme = function (_Component) {
	(0, _inherits3.default)(QueryTheme, _Component);

	function QueryTheme() {
		(0, _classCallCheck3.default)(this, QueryTheme);
		return (0, _possibleConstructorReturn3.default)(this, (QueryTheme.__proto__ || (0, _getPrototypeOf2.default)(QueryTheme)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryTheme, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.request(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.siteId === nextProps.siteId && this.props.themeId === nextProps.themeId) {
				return;
			}
			this.request(nextProps);
		}
	}, {
		key: 'request',
		value: function request(props) {
			if (!props.isRequesting) {
				props.requestTheme(props.themeId, props.siteId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryTheme;
}(_react.Component);

QueryTheme.propTypes = {
	siteId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['wpcom', 'wporg'])]).isRequired,
	themeId: _react.PropTypes.string.isRequired,
	// Connected props
	isRequesting: _react.PropTypes.bool.isRequired,
	requestTheme: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId,
	    themeId = _ref.themeId;
	return {
		isRequesting: (0, _selectors.isRequestingTheme)(state, siteId, themeId)
	};
}, { requestTheme: _actions.requestTheme })(QueryTheme);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-themes/index.jsx":
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

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryThemes = function (_Component) {
	(0, _inherits3.default)(QueryThemes, _Component);

	function QueryThemes() {
		(0, _classCallCheck3.default)(this, QueryThemes);
		return (0, _possibleConstructorReturn3.default)(this, (QueryThemes.__proto__ || (0, _getPrototypeOf2.default)(QueryThemes)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryThemes, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.request();
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return this.props.siteId !== nextProps.siteId || !(0, _isEqual3.default)(this.props.query, nextProps.query);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.request();
		}
	}, {
		key: 'request',
		value: function request() {
			if (!this.props.isRequesting && !this.props.hasThemes) {
				this.props.requestThemes(this.props.siteId, this.props.query);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryThemes;
}(_react.Component);

QueryThemes.propTypes = {
	siteId: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['wpcom', 'wporg'])]).isRequired,
	// A theme query. Note that on Jetpack sites, only the `search` argument is supported.
	query: _react.PropTypes.shape({
		// The search string
		search: _react.PropTypes.string,
		// The tier to look for -- 'free', 'premium', or '' (for all themes)
		tier: _react.PropTypes.oneOf(['', 'free', 'premium']),
		// Comma-separated list of filters; see my-sites/themes/theme-filters
		filter: _react.PropTypes.string,
		// Which page of the results list to display
		page: _react.PropTypes.number,
		// How many results per page
		number: _react.PropTypes.number

	}),
	// Connected props
	hasThemes: _react.PropTypes.bool.isRequired,
	isRequesting: _react.PropTypes.bool.isRequired,
	requestThemes: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var query = _ref.query,
	    siteId = _ref.siteId;
	return {
		hasThemes: !(0, _isEmpty3.default)((0, _selectors.getThemesForQuery)(state, siteId, query)),
		isRequesting: (0, _selectors.isRequestingThemesForQuery)(state, siteId, query)
	};
}, { requestThemes: _actions.requestThemes })(QueryThemes);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/drop-zone/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DropZone = undefined;

var _from = __webpack_require__("./node_modules/babel-runtime/core-js/array/from.js");

var _from2 = _interopRequireDefault(_from);

var _without2 = __webpack_require__("./node_modules/lodash/without.js");

var _without3 = _interopRequireDefault(_without2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _rootChild = __webpack_require__("./client/components/root-child/index.jsx");

var _rootChild2 = _interopRequireDefault(_rootChild);

var _actions = __webpack_require__("./client/state/ui/drop-zone/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var DropZone = exports.DropZone = _react2.default.createClass({
	displayName: 'DropZone',

	propTypes: {
		className: _react.PropTypes.string,
		fullScreen: _react.PropTypes.bool,
		icon: _react.PropTypes.node,
		onDrop: _react.PropTypes.func,
		onVerifyValidTransfer: _react.PropTypes.func,
		onFilesDrop: _react.PropTypes.func,
		textLabel: _react.PropTypes.string,
		translate: _react.PropTypes.func,
		showDropZone: _react.PropTypes.func.isRequired,
		hideDropZone: _react.PropTypes.func.isRequired,
		dropZoneName: _react.PropTypes.string
	},

	getInitialState: function getInitialState() {
		return {
			isDraggingOverDocument: false,
			isDraggingOverElement: false,
			lastVisibleState: false
		};
	},
	getDefaultProps: function getDefaultProps() {
		return {
			className: null,
			onDrop: _noop3.default,
			onVerifyValidTransfer: function onVerifyValidTransfer() {
				return true;
			},
			onFilesDrop: _noop3.default,
			fullScreen: false,
			icon: _react2.default.createElement(_gridicons2.default, { icon: 'cloud-upload', size: 48 }),
			translate: _identity3.default,
			dropZoneName: null
		};
	},
	componentDidMount: function componentDidMount() {
		this.dragEnterNodes = [];
		window.addEventListener('dragover', this.preventDefault);
		window.addEventListener('drop', this.onDrop);
		window.addEventListener('dragenter', this.toggleDraggingOverDocument);
		window.addEventListener('dragleave', this.toggleDraggingOverDocument);
		window.addEventListener('mouseup', this.resetDragState);
	},
	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		if (prevState.isDraggingOverDocument !== this.state.isDraggingOverDocument) {
			this.toggleMutationObserver();
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('dragover', this.preventDefault);
		window.removeEventListener('drop', this.onDrop);
		window.removeEventListener('dragenter', this.toggleDraggingOverDocument);
		window.removeEventListener('dragleave', this.toggleDraggingOverDocument);
		window.removeEventListener('mouseup', this.resetDragState);
		this.disconnectMutationObserver();
	},
	resetDragState: function resetDragState() {
		if (!(this.state.isDraggingOverDocument || this.state.isDraggingOverElement)) {
			return;
		}

		this.setState({
			isDraggingOverDocument: false,
			isDraggingOverElement: false
		});

		this.toggleDropZoneReduxState(false);
	},
	toggleMutationObserver: function toggleMutationObserver() {
		this.disconnectMutationObserver();

		if (this.state.isDraggingOverDocument) {
			this.observer = new window.MutationObserver(this.detectNodeRemoval);
			this.observer.observe(document.body, {
				childList: true,
				subtree: true
			});
		}
	},
	disconnectMutationObserver: function disconnectMutationObserver() {
		if (!this.observer) {
			return;
		}

		this.observer.disconnect();
		delete this.observer;
	},
	detectNodeRemoval: function detectNodeRemoval(mutations) {
		var _this = this;

		mutations.forEach(function (mutation) {
			if (!mutation.removedNodes.length) {
				return;
			}

			_this.dragEnterNodes = (0, _without3.default)(_this.dragEnterNodes, (0, _from2.default)(mutation.removedNodes));
		});
	},
	toggleDraggingOverDocument: function toggleDraggingOverDocument(event) {
		var isDraggingOverDocument = void 0,
		    detail = void 0,
		    isValidDrag = void 0;

		// Track nodes that have received a drag event. So long as nodes exist
		// in the set, we can assume that an item is being dragged on the page.
		if ('dragenter' === event.type && !(0, _includes3.default)(this.dragEnterNodes, event.target)) {
			this.dragEnterNodes.push(event.target);
		} else if ('dragleave' === event.type) {
			this.dragEnterNodes = (0, _without3.default)(this.dragEnterNodes, event.target);
		}

		// In some contexts, it may be necessary to capture and redirect the
		// drag event (e.g. atop an `iframe`). To accommodate this, you can
		// create an instance of CustomEvent with the original event specified
		// as the `detail` property.
		//
		// See: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
		detail = window.CustomEvent && event instanceof window.CustomEvent ? event.detail : event;

		isValidDrag = this.props.onVerifyValidTransfer(detail.dataTransfer);
		isDraggingOverDocument = isValidDrag && this.dragEnterNodes.length;

		this.setState({
			isDraggingOverDocument: isDraggingOverDocument,
			isDraggingOverElement: isDraggingOverDocument && (this.props.fullScreen || this.isWithinZoneBounds(detail.clientX, detail.clientY))
		});

		if (window.CustomEvent && event instanceof window.CustomEvent) {
			// For redirected CustomEvent instances, immediately remove window
			// from tracked nodes since another "real" event will be triggered.
			this.dragEnterNodes = (0, _without3.default)(this.dragEnterNodes, window);
		}

		this.toggleDropZoneReduxState(!!(this.state.isDraggingOverDocument || this.state.isDraggingOverElement));
	},
	toggleDropZoneReduxState: function toggleDropZoneReduxState(isVisible) {
		if (this.state.lastVisibleState !== isVisible) {
			if (isVisible) {
				this.props.showDropZone(this.props.dropZoneName);
			} else {
				this.props.hideDropZone(this.props.dropZoneName);
			}

			this.setState({
				lastVisibleState: isVisible
			});
		}
	},
	preventDefault: function preventDefault(event) {
		event.preventDefault();
	},
	isWithinZoneBounds: function isWithinZoneBounds(x, y) {
		var rect = void 0;

		if (!this.refs.zone) {
			return false;
		}

		rect = this.refs.zone.getBoundingClientRect();

		/// make sure the rect is a valid rect
		if (rect.bottom === rect.top || rect.left === rect.right) {
			return false;
		}

		return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
	},
	onDrop: function onDrop(event) {
		// This seemingly useless line has been shown to resolve a Safari issue
		// where files dragged directly from the dock are not recognized
		event.dataTransfer && event.dataTransfer.files.length;

		this.resetDragState();

		if (!this.props.fullScreen && !_reactDom2.default.findDOMNode(this.refs.zone).contains(event.target)) {
			return;
		}

		this.props.onDrop(event);

		if (!this.props.onVerifyValidTransfer(event.dataTransfer)) {
			return;
		}

		if (event.dataTransfer) {
			this.props.onFilesDrop(Array.prototype.slice.call(event.dataTransfer.files));
		}

		event.stopPropagation();
		event.preventDefault();
	},
	renderContent: function renderContent() {
		var textLabel = this.props.textLabel ? this.props.textLabel : this.props.translate('Drop files to upload');

		return _react2.default.createElement(
			'div',
			{ className: 'drop-zone__content' },
			this.props.children ? this.props.children : _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'span',
					{ className: 'drop-zone__content-icon' },
					this.props.icon
				),
				_react2.default.createElement(
					'span',
					{ className: 'drop-zone__content-text' },
					textLabel
				)
			)
		);
	},
	render: function render() {
		var classes = (0, _classnames2.default)('drop-zone', this.props.className, {
			'is-active': this.state.isDraggingOverDocument || this.state.isDraggingOverElement,
			'is-dragging-over-document': this.state.isDraggingOverDocument,
			'is-dragging-over-element': this.state.isDraggingOverElement,
			'is-full-screen': this.props.fullScreen
		});

		var element = _react2.default.createElement(
			'div',
			{ ref: 'zone', className: classes },
			this.renderContent()
		);

		if (this.props.fullScreen) {
			return _react2.default.createElement(
				_rootChild2.default,
				null,
				element
			);
		}
		return element;
	}
});

var mapDispatch = {
	showDropZone: _actions.showDropZone,
	hideDropZone: _actions.hideDropZone
};

exports.default = (0, _reactRedux.connect)(null, mapDispatch)((0, _i18nCalypso.localize)(DropZone));

/***/ }),

/***/ "./client/components/file-picker/index.jsx":
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

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _componentFilePicker = __webpack_require__("./node_modules/component-file-picker/index.js");

var _componentFilePicker2 = _interopRequireDefault(_componentFilePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var FilePicker = function (_React$Component) {
	(0, _inherits3.default)(FilePicker, _React$Component);

	function FilePicker(props) {
		(0, _classCallCheck3.default)(this, FilePicker);

		var _this = (0, _possibleConstructorReturn3.default)(this, (FilePicker.__proto__ || (0, _getPrototypeOf2.default)(FilePicker)).call(this, props));

		_this.showPicker = _this.showPicker.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(FilePicker, [{
		key: 'showPicker',
		value: function showPicker() {
			this.props.onClick();
			(0, _componentFilePicker2.default)((0, _assign3.default)({}, this.props), this.props.onPick);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'span',
				{ className: 'file-picker', onClick: this.showPicker },
				this.props.children
			);
		}
	}]);
	return FilePicker;
}(_react2.default.Component);

exports.default = FilePicker;


FilePicker.displayName = 'FilePicker';

FilePicker.propTypes = {
	multiple: _react2.default.PropTypes.bool,
	directory: _react2.default.PropTypes.bool,
	accept: _react2.default.PropTypes.string,
	onClick: _react2.default.PropTypes.func,
	onPick: _react2.default.PropTypes.func
};

FilePicker.defaultProps = {
	multiple: false,
	directory: false,
	accept: null,
	onClick: _noop3.default,
	onPick: _noop3.default
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/header-cake/back.jsx":
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

var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */


/**
 * Internal dependencies
 */
var HIDE_BACK_CRITERIA = {
	windowWidth: 480,
	characterLength: 8
}; /**
    * External dependencies
    */

var HeaderCakeBack = function (_Component) {
	(0, _inherits3.default)(HeaderCakeBack, _Component);

	function HeaderCakeBack() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, HeaderCakeBack);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderCakeBack.__proto__ || (0, _getPrototypeOf2.default)(HeaderCakeBack)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			windowWidth: _viewport2.default.getWindowInnerWidth()
		}, _this.handleWindowResize = function () {
			_this.setState({
				windowWidth: _viewport2.default.getWindowInnerWidth()
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(HeaderCakeBack, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.resizeThrottled = (0, _throttle3.default)(this.handleWindowResize, 100);
			window.addEventListener('resize', this.resizeThrottled);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.resizeThrottled);
		}
	}, {
		key: 'hideText',
		value: function hideText(text) {
			if (this.state.windowWidth <= HIDE_BACK_CRITERIA.windowWidth && text.length >= HIDE_BACK_CRITERIA.characterLength || this.state.windowWidth <= 300) {
				return true;
			}

			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    href = _props.href,
			    icon = _props.icon,
			    onClick = _props.onClick,
			    spacer = _props.spacer,
			    text = _props.text,
			    translate = _props.translate;

			var backText = text === undefined ? translate('Back') : text;
			var linkClasses = (0, _classnames2.default)({
				'header-cake__back': true,
				'is-spacer': spacer,
				'is-action': !!icon
			});

			return _react2.default.createElement(
				_button2.default,
				{ compact: true, borderless: true, className: linkClasses, href: href, onClick: onClick, disabled: spacer },
				_react2.default.createElement(_gridicons2.default, { icon: icon || 'arrow-left', size: 18 }),
				!this.hideText(backText) && backText
			);
		}
	}]);
	return HeaderCakeBack;
}(_react.Component);

HeaderCakeBack.propTypes = {
	onClick: _propTypes2.default.func,
	href: _propTypes2.default.string,
	text: _propTypes2.default.string,
	spacer: _propTypes2.default.bool
};
HeaderCakeBack.defaultProps = {
	spacer: false,
	disabled: false
};
exports.default = (0, _i18nCalypso.localize)(HeaderCakeBack);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/header-cake/index.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _back = __webpack_require__("./client/components/header-cake/back.jsx");

var _back2 = _interopRequireDefault(_back);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var HeaderCake = function (_Component) {
	(0, _inherits3.default)(HeaderCake, _Component);

	function HeaderCake() {
		(0, _classCallCheck3.default)(this, HeaderCake);
		return (0, _possibleConstructorReturn3.default)(this, (HeaderCake.__proto__ || (0, _getPrototypeOf2.default)(HeaderCake)).apply(this, arguments));
	}

	(0, _createClass3.default)(HeaderCake, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    backText = _props.backText,
			    backHref = _props.backHref,
			    actionButton = _props.actionButton,
			    actionText = _props.actionText,
			    actionIcon = _props.actionIcon,
			    actionHref = _props.actionHref,
			    actionOnClick = _props.actionOnClick;

			var classes = (0, _classnames2.default)('header-cake', this.props.className, { 'is-compact': this.props.isCompact });

			return _react2.default.createElement(
				_card2.default,
				{ className: classes },
				_react2.default.createElement(_back2.default, {
					text: backText,
					href: backHref,
					onClick: this.props.onClick
				}),
				_react2.default.createElement(
					'div',
					{
						className: 'header-cake__title',
						onClick: this.props.onTitleClick
					},
					this.props.children
				),
				actionButton || _react2.default.createElement(_back2.default, {
					text: actionText || backText,
					href: actionHref || backHref,
					onClick: actionOnClick,
					icon: actionIcon,
					spacer: !actionOnClick })
			);
		}
	}]);
	return HeaderCake;
}(_react.Component);

exports.default = HeaderCake;


HeaderCake.displayName = 'HeaderCake';

HeaderCake.propTypes = {
	onClick: _react.PropTypes.func,
	onTitleClick: _react.PropTypes.func,
	backText: _react.PropTypes.string,
	backHref: _react.PropTypes.string,
	actionButton: _react.PropTypes.element,
	actionText: _react.PropTypes.string,
	actionHref: _react.PropTypes.string,
	actionIcon: _react.PropTypes.string,
	actionOnClick: _react.PropTypes.func
};

HeaderCake.defaultProps = {
	isCompact: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/keyed-suggestions/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _mapValues2 = __webpack_require__("./node_modules/lodash/mapValues.js");

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _partition2 = __webpack_require__("./node_modules/lodash/partition.js");

var _partition3 = _interopRequireDefault(_partition2);

var _sortBy2 = __webpack_require__("./node_modules/lodash/sortBy.js");

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _take2 = __webpack_require__("./node_modules/lodash/take.js");

var _take3 = _interopRequireDefault(_take2);

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _negate2 = __webpack_require__("./node_modules/lodash/negate.js");

var _negate3 = _interopRequireDefault(_negate2);

var _without2 = __webpack_require__("./node_modules/lodash/without.js");

var _without3 = _interopRequireDefault(_without2);

var _pickBy2 = __webpack_require__("./node_modules/lodash/pickBy.js");

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _has2 = __webpack_require__("./node_modules/lodash/has.js");

var _has3 = _interopRequireDefault(_has2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
function SuggestionsButtonAll(props) {
	function click() {
		return props.onClick(props.category);
	}

	return _react2.default.createElement(
		'span',
		{
			className: 'keyed-suggestions__category-show-all',
			onClick: click },
		props.label
	);
}

var KeyedSuggestions = function (_React$Component) {
	(0, _inherits3.default)(KeyedSuggestions, _React$Component);

	function KeyedSuggestions() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, KeyedSuggestions);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = KeyedSuggestions.__proto__ || (0, _getPrototypeOf2.default)(KeyedSuggestions)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			suggestionPosition: 0,
			currentSuggestion: null,
			suggestions: {},
			filterTerm: '',
			showAll: ''
		}, _this.setInitialState = function (input) {
			var suggestions = _this.narrowDownAndSort(input, _this.state.showAll);
			var taxonomySuggestionsArray = _this.createTaxonomySuggestionsArray(suggestions);
			_this.setState({
				suggestions: suggestions,
				taxonomySuggestionsArray: taxonomySuggestionsArray,
				suggestionPosition: 0,
				currentSuggestion: taxonomySuggestionsArray[0]
			});
		}, _this.countSuggestions = function () {
			return _this.state.taxonomySuggestionsArray.length;
		}, _this.getSuggestionForPosition = function (position) {
			return _this.state.taxonomySuggestionsArray[position];
		}, _this.getPositionForSuggestion = function (suggestion) {
			return _this.state.taxonomySuggestionsArray.indexOf(suggestion);
		}, _this.incPosition = function () {
			var position = (_this.state.suggestionPosition + 1) % _this.countSuggestions();
			_this.setState({
				suggestionPosition: position,
				currentSuggestion: _this.getSuggestionForPosition(position)
			});
		}, _this.decPosition = function () {
			var position = _this.state.suggestionPosition - 1;
			_this.setState({
				suggestionPosition: position < 0 ? _this.countSuggestions() - 1 : position,
				currentSuggestion: _this.getSuggestionForPosition(position)
			});
		}, _this.handleKeyEvent = function (event) {
			switch (event.key) {
				case 'ArrowDown':
					_this.incPosition();
					event.preventDefault();
					break;
				case 'ArrowUp':
					_this.decPosition();
					event.preventDefault();
					break;
				case 'Enter':
					if (!!_this.state.currentSuggestion) {
						_this.props.suggest(_this.state.currentSuggestion);
						return true;
					}
					break;
			}
			return false;
		}, _this.onMouseDown = function (event) {
			event.stopPropagation();
			event.preventDefault();
			var suggestion = event.target.textContent.split(' ')[0];
			_this.props.suggest(suggestion);
		}, _this.onMouseOver = function (event) {
			var suggestion = event.target.textContent.split(' ')[0];
			_this.setState({
				suggestionPosition: _this.getPositionForSuggestion(suggestion),
				currentSuggestion: suggestion
			});
		}, _this.removeEmptySuggestions = function (suggestions) {
			return (0, _pickBy3.default)(suggestions, (0, _negate3.default)(_isEmpty3.default));
		}, _this.narrowDownAndSort = function (input) {
			var showAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			var termsTable = (0, _mapValues3.default)(_this.props.terms, _keys2.default);

			var _input$toLowerCase$sp = input.toLowerCase().split(':'),
			    _input$toLowerCase$sp2 = (0, _slicedToArray3.default)(_input$toLowerCase$sp, 2),
			    taxonomy = _input$toLowerCase$sp2[0],
			    filter = _input$toLowerCase$sp2[1];

			if (taxonomy === '') {
				// empty string or just ":" or ":filter" -
				// TODO: just show welcome screen
				return {};
			}

			var limit = 3; //default limit, changed to 5 for single taxonomy
			var terms = void 0; //terms that we will use to create suggestions
			var filterTerm = void 0; // part of input that will be used for filtering

			if (filter !== undefined) {
				// this means that we have at least taxonomy:
				// so check if this is a correct taxonomy
				if ((0, _has3.default)(termsTable, taxonomy)) {
					//so we will only filter elements from this taxonomy
					terms = (0, _pick3.default)(termsTable, taxonomy);
					//limit to 5 suggestions
					limit = 5;
				} else {
					// not a valid taxonomy
					// TODO tell something to the user
					return {};
				}
				filterTerm = filter;
			} else {
				// we just have one word so treat is as a search terms
				filterTerm = taxonomy;
				terms = termsTable;
			}

			var filtered = {};

			//If this is valid full taxonomy:filter we want to show alternatives instead of suggestions
			if (filter !== undefined && (0, _includes3.default)(terms[taxonomy], filter)) {
				// remove what is already in input - so we can add it to the beggining of the list
				var otherSuggestions = (0, _without3.default)(terms[taxonomy], filter);
				// add back at the beggining of the list so it will showup first.
				otherSuggestions.unshift(filter);
				// limit or show all
				filtered[taxonomy] = showAll === taxonomy ? otherSuggestions : (0, _take3.default)(otherSuggestions, limit);
				return filtered;
			}

			// store filtering term for highlithing
			_this.setState({ filterTerm: filterTerm });

			for (var key in terms) {
				if (!(0, _has3.default)(_this.props.terms, key)) {
					continue;
				}

				//check if we have showAll key match. If we have then don't filter, use all and reorder.
				if (showAll === key) {
					// split to terms matching an non matching to the input
					var parts = (0, _partition3.default)(terms[key], function (term) {
						return term.indexOf(filterTerm) !== -1;
					});
					// sort matching so that the best hit is first
					var matchingSorted = (0, _sortBy3.default)(parts[0], function (term) {
						return term.indexOf(filterTerm);
					});
					// concatenate mathing and non matchin - this is full set of filters just reordered.
					filtered[key] = [].concat((0, _toConsumableArray3.default)(matchingSorted), (0, _toConsumableArray3.default)(parts[1]));
				} else {
					filtered[key] = (0, _take3.default)(terms[key].filter(function (term) {
						return term.indexOf(filterTerm) !== -1;
					}), limit);
				}
			}

			return _this.removeEmptySuggestions(filtered);
		}, _this.createTaxonomySuggestionsArray = function (suggestions) {
			var taxonomySuggestionsArray = [];

			var _loop = function _loop(key) {
				if (!(0, _has3.default)(suggestions, key)) {
					return 'continue';
				}
				taxonomySuggestionsArray.push.apply(taxonomySuggestionsArray, (0, _toConsumableArray3.default)(suggestions[key].map(function (value) {
					return key + ':' + value;
				})));
			};

			for (var key in suggestions) {
				var _ret2 = _loop(key);

				if (_ret2 === 'continue') continue;
			}

			return taxonomySuggestionsArray;
		}, _this.createTextWithHighlight = function (text, highlightedText) {
			var re = new RegExp('(' + highlightedText + ')', 'gi');
			var parts = text.split(re);
			var token = parts.map(function (part, i) {
				var key = text + i;
				var lowercasePart = part.toLowerCase();
				if (lowercasePart === highlightedText) {
					return _react2.default.createElement(
						'span',
						{ key: key, className: 'keyed-suggestions__value-emphasis' },
						part
					);
				}
				return _react2.default.createElement(
					'span',
					{ key: key, className: 'keyed-suggestions__value-normal' },
					part
				);
			});

			return token;
		}, _this.onShowAllClick = function (category) {
			var suggestions = _this.narrowDownAndSort(_this.props.input, category);
			_this.setState({
				showAll: category,
				suggestions: suggestions,
				taxonomySuggestionsArray: _this.createTaxonomySuggestionsArray(suggestions)
			});
		}, _this.createSuggestions = function (suggestions) {
			var noOfSuggestions = 0;
			var rendered = [];

			var _loop2 = function _loop2(key) {
				if (!(0, _has3.default)(suggestions, key)) {
					return 'continue';
				}

				var filtered = suggestions[key].length.toString();
				var total = (0, _keys2.default)(_this.props.terms[key]).length.toString();
				//Add header
				rendered.push(_react2.default.createElement(
					'div',
					{ className: 'keyed-suggestions__category', key: key },
					_react2.default.createElement(
						'span',
						{ className: 'keyed-suggestions__category-name' },
						key
					),
					_react2.default.createElement(
						'span',
						{ className: 'keyed-suggestions__category-counter' },
						_i18nCalypso2.default.translate('%(filtered)s of %(total)s', {
							args: { filtered: filtered, total: total }
						})
					),
					(0, _keys2.default)(_this.props.terms[key]).length > suggestions[key].length && _react2.default.createElement(SuggestionsButtonAll, {
						onClick: _this.onShowAllClick,
						category: key,
						label: _i18nCalypso2.default.translate('Show all') }),
					key === _this.state.showAll && _react2.default.createElement(SuggestionsButtonAll, {
						onClick: _this.onShowAllClick,
						category: '',
						label: _i18nCalypso2.default.translate('Show less') })
				));
				//Add values
				var terms = _this.props.terms;

				rendered.push(suggestions[key].map(function (value, i) {
					var taxonomyName = terms[key][value].name;
					var hasHighlight = noOfSuggestions + i === _this.state.suggestionPosition;
					var className = (0, _classnames2.default)('keyed-suggestions__value', { 'has-highlight': hasHighlight });
					return _react2.default.createElement(
						'span',
						{ className: className, onMouseDown: _this.onMouseDown, onMouseOver: _this.onMouseOver, key: key + '_' + i },
						_react2.default.createElement(
							'span',
							{ className: 'keyed-suggestions__value-category' },
							key + ':' + value + ' '
						),
						_react2.default.createElement(
							'span',
							{ className: 'keyed-suggestions__value-label-wigh-highlight' },
							_this.createTextWithHighlight(taxonomyName, _this.state.filterTerm)
						),
						terms[key][value].description !== '' && _react2.default.createElement(
							'span',
							{ className: 'keyed-suggestions__value-description' },
							terms[key][value].description
						)
					);
				}));

				noOfSuggestions += suggestions[key].length;
			};

			for (var key in suggestions) {
				var _ret3 = _loop2(key);

				if (_ret3 === 'continue') continue;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'keyed-suggestions__suggestions' },
				rendered
			);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(KeyedSuggestions, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.setInitialState(this.props.input);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.input !== this.props.input) {
				this.setInitialState(nextProps.input);
			}
		}

		/**
   * Provides keybord support for suggestings component by managing items highlith position
   * and calling suggestion callback when user hits Enter
   *
   * @param  {Object} event  Keybord event
   * @return {Bool}          true indicates suggestion was chosen and send to parent using suggest prop callback
   */


		/**
   * Returns an object containing lists of fliters keyed by taxnomies.
   * This function takes all available taxonomies and removes the ones that
   * do not match provided input param. At the end keys that have empty lists are removed.
   * showAll parameter if provided sidesteps the matching logic for the key value in showAll
   * and passes all filters for that key. For showAll also soome reordering happens - explained in code
   *
   * @param  {String}  input   text that will be matched against the taxonomies
   * @param  {String}  showAll taxonomy for which we want all filters
   * @return {Object}          filtered taxonomy:[ terms ] object
   */

	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'keyed-suggestions' },
				this.createSuggestions(this.state.suggestions)
			);
		}
	}]);
	return KeyedSuggestions;
}(_react2.default.Component);

KeyedSuggestions.propTypes = {
	suggest: _propTypes2.default.func,
	terms: _propTypes2.default.object,
	input: _propTypes2.default.string
};
KeyedSuggestions.defaultProps = {
	suggest: _noop3.default,
	terms: {},
	input: ''
};
exports.default = KeyedSuggestions;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/progress-bar/index.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _screenReaderText = __webpack_require__("./client/components/screen-reader-text/index.js");

var _screenReaderText2 = _interopRequireDefault(_screenReaderText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function (_PureComponent) {
	(0, _inherits3.default)(ProgressBar, _PureComponent);

	function ProgressBar() {
		(0, _classCallCheck3.default)(this, ProgressBar);
		return (0, _possibleConstructorReturn3.default)(this, (ProgressBar.__proto__ || (0, _getPrototypeOf2.default)(ProgressBar)).apply(this, arguments));
	}

	(0, _createClass3.default)(ProgressBar, [{
		key: 'getCompletionPercentage',
		value: function getCompletionPercentage() {
			var percentage = Math.ceil(this.props.value / this.props.total * 100);

			// The percentage should not be allowed to be more than 100
			return Math.min(percentage, 100);
		}
	}, {
		key: 'renderBar',
		value: function renderBar() {
			var title = this.props.title ? _react2.default.createElement(
				_screenReaderText2.default,
				null,
				this.props.title
			) : null;

			var styles = { width: this.getCompletionPercentage() + '%' };
			if (this.props.color) {
				styles.backgroundColor = this.props.color;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'progress-bar__progress', style: styles },
				title
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)(this.props.className, 'progress-bar', {
				'is-compact': this.props.compact,
				'is-pulsing': this.props.isPulsing
			});
			return _react2.default.createElement(
				'div',
				{ className: classes },
				this.renderBar()
			);
		}
	}]);
	return ProgressBar;
}(_react.PureComponent);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


ProgressBar.defaultProps = {
	total: 100,
	compact: false,
	isPulsing: false
};
ProgressBar.propTypes = {
	value: _react2.default.PropTypes.number.isRequired,
	total: _react2.default.PropTypes.number,
	color: _react2.default.PropTypes.string,
	title: _react2.default.PropTypes.string,
	compact: _react2.default.PropTypes.bool,
	className: _react2.default.PropTypes.string,
	isPulsing: _react2.default.PropTypes.bool
};
exports.default = ProgressBar;
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

/***/ "./client/components/section-header/index.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _compact = __webpack_require__("./client/components/card/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _count = __webpack_require__("./client/components/count/index.jsx");

var _count2 = _interopRequireDefault(_count);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var SectionHeader = function (_PureComponent) {
	(0, _inherits3.default)(SectionHeader, _PureComponent);

	function SectionHeader() {
		(0, _classCallCheck3.default)(this, SectionHeader);
		return (0, _possibleConstructorReturn3.default)(this, (SectionHeader.__proto__ || (0, _getPrototypeOf2.default)(SectionHeader)).apply(this, arguments));
	}

	(0, _createClass3.default)(SectionHeader, [{
		key: 'render',
		value: function render() {
			var hasCount = 'number' === typeof this.props.count;
			var isEmpty = !(this.props.label || hasCount || this.props.children);
			var classes = (0, _classnames2.default)(this.props.className, 'section-header', { 'is-empty': isEmpty });

			return _react2.default.createElement(
				_compact2.default,
				{ className: classes, href: this.props.href },
				_react2.default.createElement(
					'div',
					{ className: 'section-header__label' },
					_react2.default.createElement(
						'span',
						{ className: 'section-header__label-text' },
						this.props.label
					),
					hasCount && _react2.default.createElement(_count2.default, { count: this.props.count })
				),
				_react2.default.createElement(
					'div',
					{ className: 'section-header__actions' },
					this.props.children
				)
			);
		}
	}]);
	return SectionHeader;
}(_react.PureComponent);

SectionHeader.defaultProps = {
	label: '',
	href: null
};
exports.default = SectionHeader;
module.exports = exports['default'];

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

/***/ "./client/components/site-selector-modal/index.jsx":
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

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _dialog = __webpack_require__("./client/components/dialog/index.jsx");

var _dialog2 = _interopRequireDefault(_dialog);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _sitesDropdown = __webpack_require__("./client/components/sites-dropdown/index.jsx");

var _sitesDropdown2 = _interopRequireDefault(_sitesDropdown);

var _getPrimarySiteId = __webpack_require__("./client/state/selectors/get-primary-site-id.js");

var _getPrimarySiteId2 = _interopRequireDefault(_getPrimarySiteId);

var _getVisibleSites = __webpack_require__("./client/state/selectors/get-visible-sites.js");

var _getVisibleSites2 = _interopRequireDefault(_getVisibleSites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SiteSelectorModal = function (_Component) {
	(0, _inherits3.default)(SiteSelectorModal, _Component);

	function SiteSelectorModal() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SiteSelectorModal);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SiteSelectorModal.__proto__ || (0, _getPrototypeOf2.default)(SiteSelectorModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			siteId: _this.props.initialSiteId
		}, _this.setSite = function (siteId) {
			_this.setState({ siteId: siteId });
		}, _this.onClose = function (action) {
			if ('mainAction' === action) {
				_this.props.mainAction(_this.state.siteId);
			}

			_this.props.hide();
		}, _this.onButtonClick = function () {
			_this.props.mainAction(_this.state.siteId);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SiteSelectorModal, [{
		key: 'getMainLink',
		value: function getMainLink() {
			var url = this.props.getMainUrl && this.props.getMainUrl(this.state.siteId);

			return url ? _react2.default.createElement(
				_button2.default,
				{ primary: true, href: url, onClick: this.onButtonClick },
				this.props.mainActionLabel
			) : { action: 'mainAction', label: this.props.mainActionLabel, isPrimary: true };
		}
	}, {
		key: 'render',
		value: function render() {
			var mainLink = this.getMainLink();
			var buttons = [{ action: 'back', label: this.props.translate('Back') }, mainLink];
			var classNames = (0, _classnames2.default)('site-selector-modal', this.props.className);

			return _react2.default.createElement(
				_dialog2.default,
				{ className: classNames,
					isVisible: this.props.isVisible,
					buttons: buttons,
					onClose: this.onClose },
				_react2.default.createElement(
					'div',
					{ className: 'site-selector-modal__content' },
					this.props.children
				),
				_react2.default.createElement(_sitesDropdown2.default, {
					onSiteSelect: this.setSite,
					selectedSiteId: this.state.siteId,
					filter: this.props.filter })
			);
		}
	}]);
	return SiteSelectorModal;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


SiteSelectorModal.propTypes = {
	// children: Custom content. Will be displayed above the `SitesDropdown`.
	children: _react.PropTypes.node,
	// filter: Function to filter sites to display
	filter: _react.PropTypes.func,
	// hide: Will be called when clicking either button. Should toggle the `isVisible` prop.
	hide: _react.PropTypes.func.isRequired,
	// isVisible: Determines if `SiteSelectorModal` will be displayed.
	isVisible: _react.PropTypes.bool.isRequired,
	// mainAction: Will be run upon clicking the call-for-action button. Receives `site` as argument.
	mainAction: _react.PropTypes.func.isRequired,
	// getMainUrl: Use if the call-for-action button should be turned into an `<a>` link. Receives `site` as argument, returns a URL.
	getMainUrl: _react.PropTypes.func,
	// mainActionLabel: Label for the call-for-action button.
	mainActionLabel: _react.PropTypes.string.isRequired,
	// className: class name(s) to be added to the Dialog
	className: _react.PropTypes.string,
	// from localize()
	translate: _react.PropTypes.func.isRequired,
	// connected props
	initialSiteId: _react.PropTypes.number
};
exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var filter = _ref2.filter;

	var primarySiteId = (0, _getPrimarySiteId2.default)(state);
	var visibleSites = (0, _getVisibleSites2.default)(state);

	var filteredSiteIds = visibleSites.map(function (site) {
		return site.ID;
	});

	if (filter) {
		filteredSiteIds = filteredSiteIds.filter(filter);
	}

	return {
		initialSiteId: (0, _includes3.default)(filteredSiteIds, primarySiteId) ? primarySiteId : filteredSiteIds[0]
	};
})((0, _i18nCalypso.localize)(SiteSelectorModal));
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/sites-dropdown/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SitesDropdown = undefined;

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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _site = __webpack_require__("./client/blocks/site/index.jsx");

var _site2 = _interopRequireDefault(_site);

var _placeholder = __webpack_require__("./client/blocks/site/placeholder.jsx");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _siteSelector = __webpack_require__("./client/components/site-selector/index.jsx");

var _siteSelector2 = _interopRequireDefault(_siteSelector);

var _getPrimarySiteId = __webpack_require__("./client/state/selectors/get-primary-site-id.js");

var _getPrimarySiteId2 = _interopRequireDefault(_getPrimarySiteId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var SitesDropdown = exports.SitesDropdown = function (_PureComponent) {
	(0, _inherits3.default)(SitesDropdown, _PureComponent);

	function SitesDropdown(props) {
		(0, _classCallCheck3.default)(this, SitesDropdown);

		// needed to be done in constructor b/c spy tests
		var _this = (0, _possibleConstructorReturn3.default)(this, (SitesDropdown.__proto__ || (0, _getPrototypeOf2.default)(SitesDropdown)).call(this, props));

		_this.selectSite = _this.selectSite.bind(_this);
		_this.siteFilter = _this.siteFilter.bind(_this);
		_this.toggleOpen = _this.toggleOpen.bind(_this);
		_this.onClose = _this.onClose.bind(_this);

		_this.state = {
			selectedSiteId: _this.props.selectedSiteId || _this.props.primarySiteId
		};
		return _this;
	}

	(0, _createClass3.default)(SitesDropdown, [{
		key: 'selectSite',
		value: function selectSite(siteId) {
			this.props.onSiteSelect(siteId);
			this.setState({
				selectedSiteId: siteId,
				open: false
			});
		}

		// Our filter prop handles siteIds, while SiteSelector's filter prop needs objects

	}, {
		key: 'siteFilter',
		value: function siteFilter(site) {
			return this.props.filter(site.ID);
		}
	}, {
		key: 'toggleOpen',
		value: function toggleOpen() {
			this.setState({ open: !this.state.open });
		}
	}, {
		key: 'onClose',
		value: function onClose(e) {
			this.setState({ open: false });
			this.props.onClose && this.props.onClose(e);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('sites-dropdown', { 'is-open': this.state.open }) },
				_react2.default.createElement(
					'div',
					{ className: 'sites-dropdown__wrapper' },
					_react2.default.createElement(
						'div',
						{
							className: 'sites-dropdown__selected',
							onClick: this.toggleOpen },
						this.props.isPlaceholder ? _react2.default.createElement(_placeholder2.default, null) : _react2.default.createElement(_site2.default, { siteId: this.state.selectedSiteId, indicator: false }),
						_react2.default.createElement(_gridicons2.default, { icon: 'chevron-down' })
					),
					this.state.open && _react2.default.createElement(_siteSelector2.default, {
						autoFocus: true,
						onClose: this.onClose,
						onSiteSelect: this.selectSite,
						selected: this.state.selectedSiteId,
						hideSelected: true,
						filter: this.props.filter && this.siteFilter
					})
				)
			);
		}
	}]);
	return SitesDropdown;
}(_react.PureComponent);

SitesDropdown.propTypes = {
	selectedSiteId: _react.PropTypes.number,
	showAllSites: _react.PropTypes.bool,
	onClose: _react.PropTypes.func,
	onSiteSelect: _react.PropTypes.func,
	filter: _react.PropTypes.func,
	isPlaceholder: _react.PropTypes.bool,

	// connected props
	selectedSite: _react.PropTypes.object
};
SitesDropdown.defaultProps = {
	showAllSites: false,
	onClose: _noop3.default,
	onSiteSelect: _noop3.default,
	isPlaceholder: false
};
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		primarySiteId: (0, _getPrimarySiteId2.default)(state)
	};
})(SitesDropdown);

/***/ }),

/***/ "./client/components/sticky-panel/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

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
var viewport = __webpack_require__("./client/lib/viewport/index.js");

module.exports = React.createClass({
	displayName: 'StickyPanel',

	propTypes: {
		minLimit: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			minLimit: false
		};
	},

	getInitialState: function getInitialState() {
		return {
			isSticky: false,
			spacerHeight: 0,
			blockWidth: 0
		};
	},

	componentDidMount: function componentDidMount() {
		// Determine and cache vertical threshold from rendered element's
		// offset relative the document
		this.threshold = ReactDom.findDOMNode(this).offsetTop;
		this.throttleOnResize = (0, _throttle3.default)(this.onWindowResize, 200);

		window.addEventListener('scroll', this.onWindowScroll);
		window.addEventListener('resize', this.throttleOnResize);
		this.updateIsSticky();
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('scroll', this.onWindowScroll);
		window.removeEventListener('resize', this.throttleOnResize);
		window.cancelAnimationFrame(this.rafHandle);
	},

	onWindowScroll: function onWindowScroll() {
		this.rafHandle = window.requestAnimationFrame(this.updateIsSticky);
	},

	onWindowResize: function onWindowResize() {
		this.setState({
			spacerHeight: this.state.isSticky ? ReactDom.findDOMNode(this).clientHeight : 0,
			blockWidth: this.state.isSticky ? ReactDom.findDOMNode(this).clientWidth : 0
		});
	},

	updateIsSticky: function updateIsSticky() {
		var isSticky = window.pageYOffset > this.threshold;

		if (this.props.minLimit !== false && this.props.minLimit >= window.innerWidth || viewport.isMobile()) {
			return this.setState({ isSticky: false });
		}

		if (isSticky !== this.state.isSticky) {
			this.setState({
				isSticky: isSticky,
				spacerHeight: isSticky ? ReactDom.findDOMNode(this).clientHeight : 0,
				blockWidth: isSticky ? ReactDom.findDOMNode(this).clientWidth : 0
			});
		}
	},

	getBlockStyle: function getBlockStyle() {
		var offset;

		if (this.state.isSticky) {
			// Offset to account for Master Bar by finding body visual top
			// relative the current scroll position
			offset = document.getElementById('header').getBoundingClientRect().height;

			return {
				top: offset,
				width: this.state.blockWidth
			};
		}
	},

	render: function render() {
		var classes = classNames('sticky-panel', this.props.className, {
			'is-sticky': this.state.isSticky
		});

		return React.createElement(
			'div',
			{ className: classes },
			React.createElement(
				'div',
				{ className: 'sticky-panel__content', style: this.getBlockStyle() },
				this.props.children
			),
			React.createElement('div', { className: 'sticky-panel__spacer', style: { height: this.state.spacerHeight } })
		);
	}
});

/***/ }),

/***/ "./client/components/sub-masterbar-nav/dropdown.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _item = __webpack_require__("./client/components/sub-masterbar-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var OptionShape = _react.PropTypes.shape({
	label: _react.PropTypes.string.isRequired,
	uri: _react.PropTypes.string.isRequired,
	icon: _react.PropTypes.string
});

var Dropdown = function (_Component) {
	(0, _inherits3.default)(Dropdown, _Component);

	function Dropdown() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Dropdown);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			collapsed: true
		}, _this.renderItem = function (item, index) {
			return _react2.default.createElement(_item2.default, {
				key: index,
				onClick: _this.collapse,
				label: item.label,
				icon: item.icon,
				href: item.uri
			});
		}, _this.toggle = function () {
			_this.setState(function (state) {
				return {
					collapsed: !state.collapsed
				};
			});
		}, _this.collapse = function () {
			_this.setState(function () {
				return {
					collapsed: true
				};
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Dropdown, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.addEventListener('scroll', this.collapse);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('scroll', this.collapse);
		}
	}, {
		key: 'render',
		value: function render() {
			var className = (0, _classnames2.default)('sub-masterbar-nav__dropdown', { 'is-collapsed': this.state.collapsed });

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'div',
					{ className: 'sub-masterbar-nav__select', onClick: this.toggle },
					_react2.default.createElement(_item2.default, {
						isSelected: true,
						label: this.props.selected.label,
						icon: this.props.selected.icon
					}),
					_react2.default.createElement(_gridicons2.default, { icon: 'chevron-down', className: 'sub-masterbar-nav__select-icon' })
				),
				_react2.default.createElement(
					'div',
					{ className: 'sub-masterbar-nav__wrapper' },
					_react2.default.createElement(
						'div',
						{ className: 'sub-masterbar-nav__items' },
						this.props.options.map(this.renderItem)
					)
				)
			);
		}
	}]);
	return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
	selected: OptionShape,
	options: _react.PropTypes.arrayOf(OptionShape)
};
exports.default = Dropdown;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/sub-masterbar-nav/index.jsx":
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

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _navbar = __webpack_require__("./client/components/sub-masterbar-nav/navbar.jsx");

var _navbar2 = _interopRequireDefault(_navbar);

var _dropdown = __webpack_require__("./client/components/sub-masterbar-nav/dropdown.jsx");

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var OptionShape = _react.PropTypes.shape({
	label: _react.PropTypes.string.isRequired,
	uri: _react.PropTypes.string.isRequired,
	icon: _react.PropTypes.string
}); /**
     * External dependencies
     */

var SubMasterbarNav = function (_Component) {
	(0, _inherits3.default)(SubMasterbarNav, _Component);

	function SubMasterbarNav() {
		(0, _classCallCheck3.default)(this, SubMasterbarNav);
		return (0, _possibleConstructorReturn3.default)(this, (SubMasterbarNav.__proto__ || (0, _getPrototypeOf2.default)(SubMasterbarNav)).apply(this, arguments));
	}

	(0, _createClass3.default)(SubMasterbarNav, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'sub-masterbar-nav' },
				_react2.default.createElement(_dropdown2.default, { selected: this.getSelected() || this.props.fallback, options: this.props.options }),
				_react2.default.createElement(_navbar2.default, { selected: this.getSelected(), options: this.props.options })
			);
		}
	}, {
		key: 'getSelected',
		value: function getSelected() {
			var _this2 = this;

			return (0, _find3.default)(this.props.options, function (option) {
				return option.uri === _this2.props.uri;
			});
		}
	}]);
	return SubMasterbarNav;
}(_react.Component);

SubMasterbarNav.propTypes = {
	fallback: OptionShape,
	options: _react.PropTypes.arrayOf(OptionShape),
	uri: _react.PropTypes.string.isRequired
};
SubMasterbarNav.defaultProps = {
	options: []
};
exports.default = SubMasterbarNav;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/sub-masterbar-nav/item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Item = undefined;

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = exports.Item = function Item(props) {
	var isSelected = props.isSelected,
	    onClick = props.onClick,
	    label = props.label,
	    icon = props.icon,
	    href = props.href;


	var classes = (0, _classnames2.default)('sub-masterbar-nav__item', { 'is-selected': isSelected });

	return _react2.default.createElement(
		'a',
		{
			href: href,
			className: classes,
			onClick: onClick,
			'aria-selected': isSelected,
			role: 'menuitem' },
		_react2.default.createElement(_gridicons2.default, { className: 'sub-masterbar-nav__icon', icon: icon, size: 24 }),
		_react2.default.createElement(
			'div',
			{ className: 'sub-masterbar-nav__label' },
			label
		)
	);
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


Item.propTypes = {
	isSelected: _react.PropTypes.bool,
	onClick: _react.PropTypes.func,
	label: _react.PropTypes.string.isRequired,
	icon: _react.PropTypes.string,
	href: _react.PropTypes.string
};

Item.defaultProps = {
	isSelected: false,
	onClick: _noop3.default,
	icon: 'star'
};

exports.default = Item;

/***/ }),

/***/ "./client/components/sub-masterbar-nav/navbar.jsx":
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

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _item = __webpack_require__("./client/components/sub-masterbar-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var SIDE_PADDING = 50; /**
                        * External dependencies
                        */

var ITEM_WIDTH = 110;

var OptionShape = _react.PropTypes.shape({
	label: _react.PropTypes.string.isRequired,
	uri: _react.PropTypes.string.isRequired,
	icon: _react.PropTypes.string
});

var Navbar = function (_Component) {
	(0, _inherits3.default)(Navbar, _Component);

	function Navbar() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Navbar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			collapsed: true,
			foldable: false
		}, _this.renderItem = function (item, index) {
			return _react2.default.createElement(_item2.default, {
				key: index,
				isSelected: item === _this.props.selected,
				label: item.label,
				icon: item.icon,
				href: item.uri
			});
		}, _this.toggleList = function () {
			_this.setState(function (state) {
				return {
					collapsed: !state.collapsed
				};
			});
		}, _this.onResize = function () {
			var width = (0, _reactDom.findDOMNode)(_this).offsetWidth;

			_this.setState(function (state, props) {
				return {
					foldable: width < props.options.length * ITEM_WIDTH + SIDE_PADDING
				};
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Navbar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.onResize();

			window.addEventListener('resize', this.onResize);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.onResize);
		}
	}, {
		key: 'render',
		value: function render() {
			var className = (0, _classnames2.default)('sub-masterbar-nav__navbar', { 'is-collapsed': this.state.collapsed });

			var ellipsisClass = (0, _classnames2.default)('sub-masterbar-nav__ellipsis', { 'is-open': !this.state.collapsed });

			return _react2.default.createElement(
				'div',
				{ className: className },
				_react2.default.createElement(
					'div',
					{ className: 'sub-masterbar-nav__wrapper' },
					_react2.default.createElement(
						'div',
						{ className: 'sub-masterbar-nav__items' },
						this.props.options.map(this.renderItem)
					)
				),
				this.state.foldable && _react2.default.createElement(
					'div',
					{ className: 'sub-masterbar-nav__switch' },
					_react2.default.createElement(_gridicons2.default, {
						icon: 'ellipsis',
						className: ellipsisClass,
						onClick: this.toggleList
					})
				)
			);
		}
	}]);
	return Navbar;
}(_react.Component);

Navbar.propTypes = {
	selected: OptionShape,
	options: _react.PropTypes.arrayOf(OptionShape)
};
exports.default = Navbar;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/theme/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Theme = undefined;

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _moreButton = __webpack_require__("./client/components/theme/more-button.jsx");

var _moreButton2 = _interopRequireDefault(_moreButton);

var _pulsingDot = __webpack_require__("./client/components/pulsing-dot/index.jsx");

var _pulsingDot2 = _interopRequireDefault(_pulsingDot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component
 */
var Theme = exports.Theme = _react2.default.createClass({
	displayName: 'Theme',


	propTypes: {
		theme: _react2.default.PropTypes.shape({
			// Theme ID (theme-slug)
			id: _react2.default.PropTypes.string.isRequired,
			// Theme name
			name: _react2.default.PropTypes.string.isRequired,
			// Theme screenshot URL
			screenshot: _react2.default.PropTypes.string,
			author: _react2.default.PropTypes.string,
			author_uri: _react2.default.PropTypes.string,
			demo_uri: _react2.default.PropTypes.string,
			stylesheet: _react2.default.PropTypes.string
		}),
		// If true, highlight this theme as active
		active: _react2.default.PropTypes.bool,
		// Theme price (pre-formatted string) -- empty string indicates free theme
		price: _react2.default.PropTypes.string,
		// If true, the theme is being installed
		installing: _react2.default.PropTypes.bool,
		// If true, render a placeholder
		isPlaceholder: _react2.default.PropTypes.bool,
		// URL the screenshot link points to
		screenshotClickUrl: _react2.default.PropTypes.string,
		// Called when theme screenshot is clicked
		onScreenshotClick: _react2.default.PropTypes.func,
		// Called when the more button is clicked
		onMoreButtonClick: _react2.default.PropTypes.func,
		// Options to populate the 'More' button popover menu with
		buttonContents: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.shape({
			label: _react2.default.PropTypes.string,
			header: _react2.default.PropTypes.string,
			action: _react2.default.PropTypes.func,
			getUrl: _react2.default.PropTypes.func
		})),
		// Index of theme in results list
		index: _react2.default.PropTypes.number,
		// Label to show on screenshot hover.
		actionLabel: _react2.default.PropTypes.string,
		// Translate function,
		translate: _react2.default.PropTypes.func
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
		return nextProps.theme.id !== this.props.theme.id || nextProps.active !== this.props.active || nextProps.price !== this.props.price || nextProps.installing !== this.props.installing || !(0, _isEqual3.default)((0, _keys2.default)(nextProps.buttonContents), (0, _keys2.default)(this.props.buttonContents)) || nextProps.screenshotClickUrl !== this.props.screenshotClickUrl || nextProps.onScreenshotClick !== this.props.onScreenshotClick || nextProps.onMoreButtonClick !== this.props.onMoreButtonClick;
	},
	getDefaultProps: function getDefaultProps() {
		return {
			isPlaceholder: false,
			buttonContents: {},
			onMoreButtonClick: _noop3.default,
			actionLabel: '',
			active: false
		};
	},
	onScreenshotClick: function onScreenshotClick() {
		this.props.onScreenshotClick(this.props.theme.id, this.props.index);
	},
	renderPlaceholder: function renderPlaceholder() {
		return _react2.default.createElement(
			_card2.default,
			{ className: 'theme is-placeholder' },
			_react2.default.createElement('div', { className: 'theme__content' })
		);
	},
	renderHover: function renderHover() {
		if (this.props.screenshotClickUrl || this.props.onScreenshotClick) {
			return _react2.default.createElement(
				'a',
				{ className: 'theme__active-focus',
					href: this.props.screenshotClickUrl,
					onClick: this.onScreenshotClick },
				_react2.default.createElement(
					'span',
					null,
					this.props.actionLabel
				)
			);
		}
	},
	renderInstalling: function renderInstalling() {
		if (this.props.installing) {
			return _react2.default.createElement(
				'div',
				{ className: 'theme__installing' },
				_react2.default.createElement(_pulsingDot2.default, { active: true })
			);
		}
	},
	render: function render() {
		var _props$theme = this.props.theme,
		    name = _props$theme.name,
		    screenshot = _props$theme.screenshot;
		var _props = this.props,
		    active = _props.active,
		    price = _props.price,
		    translate = _props.translate;

		var themeClass = (0, _classnames2.default)('theme', {
			'is-active': active,
			'is-actionable': !!(this.props.screenshotClickUrl || this.props.onScreenshotClick)
		});

		var priceClass = (0, _classnames2.default)('theme-badge__price', {
			'theme-badge__price-upgrade': !/\d/g.test(price)
		});

		// for performance testing
		var screenshotID = this.props.index === 0 ? 'theme__firstscreenshot' : null;

		if (this.props.isPlaceholder) {
			return this.renderPlaceholder();
		}

		return _react2.default.createElement(
			_card2.default,
			{ className: themeClass },
			_react2.default.createElement(
				'div',
				{ className: 'theme__content' },
				this.renderHover(),
				_react2.default.createElement(
					'a',
					{ href: this.props.screenshotClickUrl },
					this.renderInstalling(),
					screenshot ? _react2.default.createElement('img', { className: 'theme__img',
						src: screenshot + '?w=340',
						srcSet: screenshot + '?w=340 1x, ' + screenshot + '?w=680 2x',
						onClick: this.onScreenshotClick,
						id: screenshotID }) : _react2.default.createElement(
						'div',
						{ className: 'theme__no-screenshot' },
						_react2.default.createElement(_gridicons2.default, { icon: 'themes', size: 48 })
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'theme__info' },
					_react2.default.createElement(
						'h2',
						{ className: 'theme__info-title' },
						name
					),
					active && _react2.default.createElement(
						'span',
						{ className: 'theme-badge__active' },
						translate('Active', {
							context: 'singular noun, the currently active theme'
						})
					),
					_react2.default.createElement(
						'span',
						{ className: priceClass },
						price
					),
					!(0, _isEmpty3.default)(this.props.buttonContents) ? _react2.default.createElement(_moreButton2.default, {
						index: this.props.index,
						theme: this.props.theme,
						active: this.props.active,
						onMoreButtonClick: this.props.onMoreButtonClick,
						options: this.props.buttonContents }) : null
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
exports.default = (0, _i18nCalypso.localize)(Theme);

/***/ }),

/***/ "./client/components/theme/more-button.jsx":
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

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _isFunction2 = __webpack_require__("./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _menu = __webpack_require__("./client/components/popover/menu.jsx");

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _url = __webpack_require__("./client/lib/url/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component
 */
var ThemeMoreButton = function (_React$Component) {
	(0, _inherits3.default)(ThemeMoreButton, _React$Component);

	function ThemeMoreButton(props) {
		(0, _classCallCheck3.default)(this, ThemeMoreButton);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ThemeMoreButton.__proto__ || (0, _getPrototypeOf2.default)(ThemeMoreButton)).call(this, props));

		_this.state = { showPopover: false };
		_this.togglePopover = _this.togglePopover.bind(_this);
		_this.closePopover = _this.closePopover.bind(_this);
		_this.onClick = _this.onClick.bind(_this);
		_this.onPopoverActionClick = _this.onPopoverActionClick.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(ThemeMoreButton, [{
		key: 'togglePopover',
		value: function togglePopover() {
			this.setState({ showPopover: !this.state.showPopover });
			!this.state.showPopover && this.props.onMoreButtonClick(this.props.theme, this.props.index, 'popup_open');
		}
	}, {
		key: 'closePopover',
		value: function closePopover(action) {
			this.setState({ showPopover: false });
			if ((0, _isFunction3.default)(action)) {
				action();
			}
		}
	}, {
		key: 'popoverAction',
		value: function popoverAction(action, label) {
			action(this.props.theme.id);
			this.props.onMoreButtonClick(this.props.theme, this.props.index, 'popup_' + label);
		}
	}, {
		key: 'onPopoverActionClick',
		value: function onPopoverActionClick(action, label) {
			var _this2 = this;

			return function () {
				return _this2.popoverAction(action, label);
			};
		}
	}, {
		key: 'focus',
		value: function focus(event) {
			event.target.focus();
		}
	}, {
		key: 'onClick',
		value: function onClick(action, label) {
			return this.closePopover.bind(this, this.onPopoverActionClick(action, label));
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)('theme__more-button', { 'is-active': this.props.active }, { 'is-open': this.state.showPopover });

			return _react2.default.createElement(
				'span',
				{ className: classes },
				_react2.default.createElement(
					'button',
					{ ref: 'more', onClick: this.togglePopover },
					_react2.default.createElement('span', { className: 'noticon noticon-ellipsis' })
				),
				_react2.default.createElement(
					_menu2.default,
					{ context: this.refs && this.refs.more,
						isVisible: this.state.showPopover,
						onClose: this.closePopover,
						position: 'top left' },
					(0, _map3.default)(this.props.options, function (option, key) {
						if (option.separator) {
							return _react2.default.createElement('hr', { key: key, className: 'popover__hr' });
						}
						if (option.getUrl) {
							var url = option.getUrl(this.props.theme.id);
							return _react2.default.createElement(
								'a',
								{ className: 'theme__more-button-menu-item popover__menu-item',
									onMouseOver: this.focus,
									onClick: this.onClick(option.action, option.label),
									key: option.label,
									href: url,
									target: (0, _url.isOutsideCalypso)(url) ? '_blank' : null },
								option.label
							);
						}
						if (option.action) {
							return _react2.default.createElement(
								_menuItem2.default,
								{
									key: option.label,
									action: this.onPopoverActionClick(option.action, option.label) },
								option.label
							);
						}
						// If neither getUrl() nor action() are specified, filter this option.
						return null;
					}.bind(this))
				)
			);
		}
	}]);
	return ThemeMoreButton;
}(_react2.default.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


ThemeMoreButton.propTypes = {
	// See Theme component propTypes
	theme: _react2.default.PropTypes.object,
	// Index of theme in results list
	index: _react2.default.PropTypes.number,
	// More elaborate onClick action, used for tracking.
	// Made to not interfere with DOM onClick
	onMoreButtonClick: _react2.default.PropTypes.func,
	// Options to populate the popover menu with
	options: _react2.default.PropTypes.objectOf(_react2.default.PropTypes.shape({
		label: _react2.default.PropTypes.string,
		header: _react2.default.PropTypes.string,
		action: _react2.default.PropTypes.func,
		getUrl: _react2.default.PropTypes.func
	})).isRequired,
	active: _react2.default.PropTypes.bool
};

exports.default = ThemeMoreButton;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/themes-list/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ThemesList = undefined;

var _times2 = __webpack_require__("./node_modules/lodash/times.js");

var _times3 = _interopRequireDefault(_times2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _theme = __webpack_require__("./client/components/theme/index.jsx");

var _theme2 = _interopRequireDefault(_theme);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _infiniteScroll = __webpack_require__("./client/lib/mixins/infinite-scroll/index.js");

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

var _constants = __webpack_require__("./client/state/themes/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component
 */


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var ThemesList = exports.ThemesList = _react2.default.createClass({
	displayName: 'ThemesList',


	mixins: [(0, _infiniteScroll2.default)('fetchNextPage')],

	propTypes: {
		themes: _react2.default.PropTypes.array.isRequired,
		emptyContent: _react2.default.PropTypes.element,
		loading: _react2.default.PropTypes.bool.isRequired,
		fetchNextPage: _react2.default.PropTypes.func.isRequired,
		getButtonOptions: _react2.default.PropTypes.func,
		onScreenshotClick: _react2.default.PropTypes.func.isRequired,
		onMoreButtonClick: _react2.default.PropTypes.func,
		getActionLabel: _react2.default.PropTypes.func,
		isActive: _react2.default.PropTypes.func,
		getPrice: _react2.default.PropTypes.func,
		isInstalling: _react2.default.PropTypes.func,
		// i18n function provided by localize()
		translate: _react2.default.PropTypes.func,
		placeholderCount: _react2.default.PropTypes.number
	},

	fetchNextPage: function fetchNextPage(options) {
		this.props.fetchNextPage(options);
	},
	getDefaultProps: function getDefaultProps() {
		return {
			loading: false,
			themes: [],
			fetchNextPage: _noop3.default,
			placeholderCount: _constants.DEFAULT_THEME_QUERY.number,
			optionsGenerator: function optionsGenerator() {
				return [];
			},
			getActionLabel: function getActionLabel() {
				return '';
			},
			isActive: function isActive() {
				return false;
			},
			getPrice: function getPrice() {
				return '';
			},
			isInstalling: function isInstalling() {
				return false;
			}
		};
	},
	shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
		return nextProps.loading !== this.props.loading || !(0, _isEqual3.default)(nextProps.themes, this.props.themes) || nextProps.getButtonOptions !== this.props.getButtonOptions || nextProps.getScreenshotUrl !== this.props.getScreenshotUrl || nextProps.onScreenshotClick !== this.props.onScreenshotClick || nextProps.onMoreButtonClick !== this.props.onMoreButtonClick;
	},
	renderTheme: function renderTheme(theme, index) {
		return _react2.default.createElement(_theme2.default, {
			key: 'theme-' + theme.id,
			buttonContents: this.props.getButtonOptions(theme.id),
			screenshotClickUrl: this.props.getScreenshotUrl && this.props.getScreenshotUrl(theme.id),
			onScreenshotClick: this.props.onScreenshotClick,
			onMoreButtonClick: this.props.onMoreButtonClick,
			actionLabel: this.props.getActionLabel(theme.id),
			index: index,
			theme: theme,
			active: this.props.isActive(theme.id),
			price: this.props.getPrice(theme.id),
			installing: this.props.isInstalling(theme.id) });
	},
	renderLoadingPlaceholders: function renderLoadingPlaceholders() {
		return (0, _times3.default)(this.props.placeholderCount, function (i) {
			return _react2.default.createElement(_theme2.default, { key: 'placeholder-' + i, theme: { id: 'placeholder-' + i, name: 'Loading…' }, isPlaceholder: true });
		});
	},


	// Invisible trailing items keep all elements same width in flexbox grid.
	renderTrailingItems: function renderTrailingItems() {
		var NUM_SPACERS = 11; // gives enough spacers for a theoretical 12 column layout
		return (0, _times3.default)(NUM_SPACERS, function (i) {
			return _react2.default.createElement('div', { className: 'themes-list__spacer', key: 'themes-list__spacer-' + i });
		});
	},
	renderEmpty: function renderEmpty() {
		return this.props.emptyContent || _react2.default.createElement(_emptyContent2.default, {
			illustration: '/calypso/images/illustrations/no-themes-drake.svg',
			title: this.props.translate('Sorry, no themes found.'),
			line: this.props.translate('Try a different search or more filters?')
		});
	},
	render: function render() {
		if (!this.props.loading && this.props.themes.length === 0) {
			return this.renderEmpty();
		}

		return _react2.default.createElement(
			'div',
			{ className: 'themes-list' },
			this.props.themes.map(this.renderTheme),
			this.props.loading && this.renderLoadingPlaceholders(),
			this.renderTrailingItems()
		);
	}
});

exports.default = (0, _i18nCalypso.localize)(ThemesList);

/***/ }),

/***/ "./client/components/wpadmin-auto-login/index.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Try to preload image pixel via going through wp-admin login.
 * If SSO login pass-thru is enabled, you will be redirected to pixel
 */
function tryLogin(requestUrl, initalDelay, attempt) {
	var image = new Image();

	if (attempt < 9) {
		image.onerror = function () {
			setTimeout(tryLogin.bind(null, requestUrl, initalDelay, attempt + 1), initalDelay * attempt);
		};
	}
	image.src = requestUrl;
} /**
   * External Dependencies
   */

var WpadminAutoLogin = function (_Component) {
	(0, _inherits3.default)(WpadminAutoLogin, _Component);

	function WpadminAutoLogin() {
		(0, _classCallCheck3.default)(this, WpadminAutoLogin);
		return (0, _possibleConstructorReturn3.default)(this, (WpadminAutoLogin.__proto__ || (0, _getPrototypeOf2.default)(WpadminAutoLogin)).apply(this, arguments));
	}

	(0, _createClass3.default)(WpadminAutoLogin, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var siteUrl = (0, _get3.default)(this.props.site, 'URL');
			var requestUrl = this.getPixelUrl(siteUrl);

			setTimeout(tryLogin.bind(null, requestUrl, this.props.delay, 0), this.props.delay);
		}
	}, {
		key: 'getPixelUrl',
		value: function getPixelUrl(siteUrl) {
			var pixel = encodeURI(siteUrl + '/wp-includes/images/blank.gif');
			return siteUrl + '/wp-login.php?redirect_to=' + pixel;
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return WpadminAutoLogin;
}(_react.Component);

WpadminAutoLogin.propTypes = {
	site: _react.PropTypes.object,
	delay: _react.PropTypes.number
};
WpadminAutoLogin.defaultProps = {
	delay: 3000
};
exports.default = WpadminAutoLogin;
;
module.exports = exports['default'];

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

/***/ "./client/lib/automated-transfer/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

// Keep this value in sync with wpcom sandbox bin/transfers/at-get-theme-slug.sh MAX_FILE_SIZE.
var MAX_UPLOAD_ZIP_SIZE = exports.MAX_UPLOAD_ZIP_SIZE = 50 * 1000000; // 50MB

/***/ }),

/***/ "./client/lib/mixins/infinite-scroll/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var SCROLL_CHECK_RATE_IN_MS = 400;

module.exports = function (nextPageMethod) {

	return {

		componentDidMount: function componentDidMount() {
			this.checkScrollPositionHandler = (0, _throttle3.default)(this.checkScrollPosition.bind(this, {
				triggeredByScroll: true
			}), SCROLL_CHECK_RATE_IN_MS);
			window.addEventListener('scroll', this.checkScrollPositionHandler);
			this.checkScrollPosition({
				triggeredByScroll: false
			});
		},

		componentDidUpdate: function componentDidUpdate() {
			this.checkScrollPosition({
				triggeredByScroll: false
			});
		},

		componentWillUnmount: function componentWillUnmount() {
			window.removeEventListener('scroll', this.checkScrollPositionHandler);
		},

		checkScrollPosition: function checkScrollPosition(options) {
			var _this = this;

			var scrollPosition = window.pageYOffset,
			    documentHeight = document.body.scrollHeight,
			    viewportHeight = window.innerHeight,
			    scrollOffset = 2 * viewportHeight,
			    triggeredByScroll = options.triggeredByScroll;

			if (scrollPosition >= documentHeight - viewportHeight - scrollOffset) {

				// Consider all page fetches once user starts scrolling as triggered by scroll
				// Same condition check is in components/infinite-list/scroll-helper loadNextPage
				if (scrollPosition > viewportHeight) {
					triggeredByScroll = true;
				}

				// scroll check may be triggered while dispatching an action,
				// we cannot create new action while dispatching old one
				window.requestAnimationFrame(function () {
					_this[nextPageMethod]({
						triggeredByScroll: triggeredByScroll
					});
				});
			}
		}
	};
};

/***/ }),

/***/ "./client/lib/mixins/url-search/build-url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var url = __webpack_require__("./node_modules/url/url.js");

/**
 * Given a URL or path and search terms, returns a path including the search
 * query parameter and preserving existing parameters.
 *
 * @param  {string} uri    URL or path to modify
 * @param  {string} search Search terms
 * @return {string}        Path including search terms
 */
module.exports = function (uri, search) {
  var parsedUrl = url.parse(uri, true);

  if (search) {
    parsedUrl.query.s = search;
  } else {
    delete parsedUrl.query.s;
  }

  parsedUrl = (0, _pick3.default)(parsedUrl, 'pathname', 'hash', 'query');
  return url.format(parsedUrl).replace(/\%20/g, '+');
};

/***/ }),

/***/ "./client/lib/olark-events/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 **/
/**
 * External dependencies
 */
var olarkEvents = ['api.box.onShow', 'api.box.onHide', 'api.box.onExpand', 'api.box.onShrink', 'api.chat.onReady', 'api.chat.onOperatorsAvailable', 'api.chat.onOperatorsAway', 'api.chat.onBeginConversation', 'api.chat.onMessageToOperator', 'api.chat.onMessageToVisitor', 'api.chat.onCommandFromOperator', 'api.chat.onOfflineMessageToOperator'],
    debug = (0, _debug2.default)('calypso:olark:events'),
    boundEvents = {},
    initialized = false,
    olarkReady = false;

/**
 * OlarkEventEmitter An eventemitter that listens for events from the olark api and emits them.
 * @type {Object}
 */


/**
 * Internal dependencies
 */
var OlarkEventEmitter = {
	/**
  * Initialize the OlarkEventEmitter object. This should only be called when the olark api object becomes available
  */
	initialize: function initialize() {
		var _this = this;

		if (initialized) {
			debug('Already initalized');
			return;
		}

		initialized = true;

		// add a listener for each of the events we care about
		olarkEvents.forEach(function (event) {
			return _this.addOlarkEventListener(event);
		});

		debug('Initalized');
	},

	/**
  * Add an olark api event listener so that we can proxy it. This should only be called once per event
  * @param {string} event The olark api event to listen for
  */
	addOlarkEventListener: function addOlarkEventListener(event) {
		debug('Adding olark event listener: %s', event);

		if (boundEvents[event]) {
			// We only want to add one listener per event
			return;
		}

		// Keep track of what olark events we're listening to
		boundEvents[event] = true;
	},

	/**
  * Our generic callback that proxies the event fired by olark to our listeners. This method should not be called directly
  * @param  {string} event The olark api event
  */
	olarkEventListener: function olarkEventListener(event) {
		debug('Olark event: %s', event);

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		this.emit.apply(this, [event].concat(args));
	}
};

// Inherit from EventEmitter
(0, _emitter2.default)(OlarkEventEmitter);

// Be the first to bind to the api.chat.onReady event so that we can make sure that the olarkReady flag is set as early as possible
OlarkEventEmitter.once('api.chat.onReady', function () {
	// Set the ready flag so that we can re-emit api.chat.onReady for a listener if they missed it
	olarkReady = true;
});

OlarkEventEmitter.on('newListener', function (event, callback) {
	// listen for newListeners that are listening for the onReady event so that we can execute their callback if the ready event has already fired.
	// This is done because that is the way the olark api handles this event and we want to replicate that.
	if (olarkReady && event === 'api.chat.onReady') {
		callback();
	}
});

exports.default = OlarkEventEmitter;
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/olark-store/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _constants = __webpack_require__("./client/lib/olark-store/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
/**
 * External dependencies
 */
var olarkActions = {
	setUserEligibility: function setUserEligibility(isUserEligible) {
		_dispatcher2.default.handleServerAction({
			isUserEligible: isUserEligible,
			type: _constants.action.OLARK_USER_ELIGIBILITY
		});
	},
	setLocale: function setLocale(locale) {
		_dispatcher2.default.handleServerAction({
			locale: locale,
			type: _constants.action.OLARK_LOCALE
		});
	},
	setReady: function setReady() {
		_dispatcher2.default.handleServerAction({
			type: _constants.action.OLARK_READY
		});
	},
	setOperatorsAvailable: function setOperatorsAvailable() {
		_dispatcher2.default.handleServerAction({
			type: _constants.action.OLARK_OPERATORS_AVAILABLE
		});
	},
	setOperatorsAway: function setOperatorsAway() {
		_dispatcher2.default.handleServerAction({
			type: _constants.action.OLARK_OPERATORS_AWAY
		});
	},
	setClosed: function setClosed(isSupportClosed) {
		_dispatcher2.default.handleServerAction({
			isSupportClosed: isSupportClosed,
			type: _constants.action.OLARK_SET_CLOSED
		});
	},
	setExpanded: function setExpanded(isOlarkExpanded) {
		_dispatcher2.default.handleServerAction({
			isOlarkExpanded: isOlarkExpanded,
			type: _constants.action.OLARK_SET_EXPANDED
		});
	},
	updateDetails: function updateDetails() {
		// Do nothing since olark is deprecated
	},
	sendNotificationToVisitor: function sendNotificationToVisitor() {
		// Do nothing since olark is deprecated
	},
	sendNotificationToOperator: function sendNotificationToOperator() {
		// Do nothing since olark is deprecated
	},
	expandBox: function expandBox() {
		// Do nothing since olark is deprecated
	},
	shrinkBox: function shrinkBox() {
		// Do nothing since olark is deprecated
	},
	hideBox: function hideBox() {
		// Do nothing since olark is deprecated
	},
	focusBox: function focusBox() {
		// Do nothing since olark is deprecated
	}
};

/**
 * Internal dependencies
 */
exports.default = olarkActions;
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/olark-store/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.action = undefined;

var _keyMirror = __webpack_require__("./node_modules/key-mirror/index.js");

var _keyMirror2 = _interopRequireDefault(_keyMirror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
var action = exports.action = (0, _keyMirror2.default)({
	OLARK_READY: null,
	OLARK_OPERATORS_AWAY: null,
	OLARK_OPERATORS_AVAILABLE: null,
	OLARK_DETAILS: null,
	OLARK_LOCALE: null,
	OLARK_USER_ELIGIBILITY: null,
	OLARK_SET_CLOSED: null,
	OLARK_SET_EXPANDED: null
}); /**
     * External dependencies
     */

/***/ }),

/***/ "./client/lib/olark-store/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _store = __webpack_require__("./client/lib/store/index.js");

var _constants = __webpack_require__("./client/lib/olark-store/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
/**
 * Internal dependencies
 */
var initialState = {
	isOperatorAvailable: false,
	isOlarkReady: false,
	isUserEligible: false,
	isOlarkExpanded: false,
	isSupportClosed: false,
	locale: 'en',
	details: {}
};

var olarkStore = (0, _store.createReducerStore)(function (state, payload) {
	var stateChanges = void 0;
	var action = payload.action;


	switch (action.type) {
		case _constants.action.OLARK_USER_ELIGIBILITY:
			stateChanges = { isUserEligible: action.isUserEligible };
			break;
		case _constants.action.OLARK_LOCALE:
			stateChanges = { locale: action.locale };
			break;
		case _constants.action.OLARK_READY:
			stateChanges = { isOlarkReady: true };
			break;
		case _constants.action.OLARK_OPERATORS_AWAY:
			stateChanges = { isOperatorAvailable: false };
			break;
		case _constants.action.OLARK_OPERATORS_AVAILABLE:
			stateChanges = { isOperatorAvailable: true };
			break;
		case _constants.action.OLARK_SET_EXPANDED:
			stateChanges = { isOlarkExpanded: action.isOlarkExpanded };
			break;
		case _constants.action.OLARK_DETAILS:
			stateChanges = { details: action.details };
			break;
		case _constants.action.OLARK_SET_CLOSED:
			stateChanges = { isSupportClosed: action.isSupportClosed };
			break;
	}

	if (stateChanges) {
		return (0, _assign2.default)({}, state, stateChanges);
	}

	return state;
}, initialState);

exports.default = olarkStore;
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/olark/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _emitter2 = _interopRequireDefault(_emitter);

var _user = __webpack_require__("./client/lib/user/index.js");

var _user2 = _interopRequireDefault(_user);

var _notices = __webpack_require__("./client/notices/index.js");

var _notices2 = _interopRequireDefault(_notices);

var _olarkEvents = __webpack_require__("./client/lib/olark-events/index.js");

var _olarkEvents2 = _interopRequireDefault(_olarkEvents);

var _olarkStore = __webpack_require__("./client/lib/olark-store/index.js");

var _olarkStore2 = _interopRequireDefault(_olarkStore);

var _actions = __webpack_require__("./client/lib/olark-store/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _actions3 = __webpack_require__("./client/state/ui/olark/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */


/**
 * Internal dependencies
 */
var debug = (0, _debug2.default)('calypso:olark'); /**
                                                    * External dependencies
                                                    */

var user = (0, _user2.default)();
var wpcomUndocumented = _wp2.default.undocumented();

/**
 * Loads the Olark store so that it can start receiving actions
 * This is necessary here to capture events that occur in the Olark
 * module before the React tree gets drawn.
 */
__webpack_require__("./client/lib/olark-store/index.js");

var olark = {

	apiId: 1,

	eligibilityKey: 'SupportChat',

	operatorsAvailableKey: 'OlarkOperatorsAvailable',

	conversationStarted: false,

	operatorAvailable: false,

	userType: 'Unknown',

	initialize: function initialize(dispatch) {
		var _this = this;

		debug('Initializing Olark Live Chat');

		this.getOlarkConfiguration().then(function (configuration) {
			return _this.configureOlark(configuration, dispatch);
		}).catch(function (error) {
			return _this.handleError(error);
		});
	},


	handleError: function handleError(error) {
		// Hides notices for authorization errors as they should be legitimate (e.g. we use this error code to check
		// whether the user is logged in when fetching the user profile)
		if (error && error.message && error.error !== 'authorization_required') {
			_notices2.default.error(error.message);
		}
	},

	getOlarkConfiguration: function getOlarkConfiguration() {
		return new _promise2.default(function (resolve, reject) {
			// TODO: Maybe store this configuration in local storage? The problem is that the configuration for a user could
			// change if they purchase upgrades or if their upgrades expire. There's also throttling that happens for unpaid users.
			// There is lots to consider before storing this configuration
			debug('Using rest api to get olark configuration');
			var clientSlug = (0, _config2.default)('client_slug');

			wpcomUndocumented.getOlarkConfiguration(clientSlug, function (error, configuration) {
				if (error) {
					reject(error);
					return;
				}
				resolve(configuration);
			});
		});
	},

	configureOlark: function configureOlark() {
		var _this2 = this;

		var wpcomOlarkConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var dispatch = arguments[1];

		var userData = user.get(),
		    updateDetailsEvents = ['api.chat.onReady', 'api.chat.onOperatorsAway', 'api.chat.onOperatorsAvailable', 'api.chat.onBeginConversation', 'api.chat.onMessageToVisitor', 'api.chat.onMessageToOperator', 'api.chat.onCommandFromOperator'],
		    olarkExpandedEvents = ['api.box.onShow', 'api.box.onExpand', 'api.box.onHide', 'api.box.onShrink', 'api.chat.onMessageToVisitor'],
		    updateFormattingEvents = ['api.chat.onReady', 'api.chat.onBeginConversation', 'api.chat.onMessageToVisitor', 'api.chat.onMessageToOperator', 'api.chat.onCommandFromOperator', 'api.chat.onOfflineMessageToOperator'];

		_olarkEvents2.default.initialize();

		_olarkEvents2.default.once('api.chat.onReady', _actions2.default.setReady);
		_olarkEvents2.default.once('api.chat.onReady', function () {
			return dispatch((0, _actions3.olarkReady)());
		});
		_olarkEvents2.default.on('api.chat.onOperatorsAway', _actions2.default.setOperatorsAway);
		_olarkEvents2.default.on('api.chat.onOperatorsAway', function () {
			return dispatch((0, _actions3.operatorsAway)());
		});
		_olarkEvents2.default.on('api.chat.onOperatorsAvailable', _actions2.default.setOperatorsAvailable);
		_olarkEvents2.default.on('api.chat.onOperatorsAvailable', function () {
			return dispatch((0, _actions3.operatorsAvailable)());
		});

		olarkExpandedEvents.forEach(this.hookExpansionEventToStoreSync.bind(this));

		updateDetailsEvents.forEach(function (eventName) {
			return _olarkEvents2.default.on(eventName, _actions2.default.updateDetails);
		});

		updateFormattingEvents.forEach(function (eventName) {
			return _olarkEvents2.default.on(eventName, function () {
				// Using setTimeout here so that we can call updateOlarkFormatting on the next tick, after the event has fired and all event handlers are processed.
				setTimeout(function () {
					return _this2.updateOlarkFormatting(userData.display_name, userData.avatar_URL);
				}, 0);
			});
		});

		debug('Olark code loaded, beginning configuration');

		_olarkEvents2.default.on('api.chat.onCommandFromOperator', function (event) {
			if (event.command.name === 'end') {
				_actions2.default.sendNotificationToVisitor(_i18nCalypso2.default.translate("Your live chat has ended. We'll send a transcript to %(email)s.", { args: { email: userData.email } }));
			}
		});

		this.setOlarkOptions(userData, wpcomOlarkConfig);

		dispatch((0, _actions3.setChatAvailability)(wpcomOlarkConfig.availability));
	},

	updateOlarkGroupAndEligibility: function updateOlarkGroupAndEligibility() {
		var _this3 = this;

		this.getOlarkConfiguration().then(function (configuration) {
			var isUserEligible = 'undefined' === typeof configuration.isUserEligible ? true : configuration.isUserEligible;
			_actions2.default.setUserEligibility(isUserEligible);
		}).catch(function (error) {
			return _this3.handleError(error);
		});
	},
	syncStoreWithExpandedState: function syncStoreWithExpandedState() {
		// We query the dom here because there is no other 100% accurate way to figure this out. Olark does not
		// provide initial events for api.box.onExpand when the api.box.show event is fired.
		var isOlarkExpanded = !!document.querySelector('.olrk-state-expanded');
		if (isOlarkExpanded !== _olarkStore2.default.get().isOlarkExpanded) {
			_actions2.default.setExpanded(isOlarkExpanded);
		}
	},
	hookExpansionEventToStoreSync: function hookExpansionEventToStoreSync(eventName) {
		_olarkEvents2.default.on(eventName, this.syncStoreWithExpandedState);
	},
	setOlarkOptions: function setOlarkOptions(userData) {
		var wpcomOlarkConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		var group = wpcomOlarkConfig.group || (0, _config2.default)('olark').business_group_id;
		var isUserEligible = 'undefined' === typeof wpcomOlarkConfig.isUserEligible ? true : wpcomOlarkConfig.isUserEligible;
		var visitorNickname = wpcomOlarkConfig.nickname || userData.username + ' | ' + this.userType;

		debug('Nickname: ' + visitorNickname);
		debug('Group: ' + group);

		_actions2.default.setUserEligibility(isUserEligible);
		_actions2.default.setClosed(wpcomOlarkConfig.isClosed);

		if (wpcomOlarkConfig.locale) {
			_actions2.default.setLocale(wpcomOlarkConfig.locale);
		}
	},
	updateOlarkFormatting: function updateOlarkFormatting(username, avatarURL) {
		var allNameNodes = document.querySelectorAll('.hbl_pal_local_fg, .hbl_pal_remote_fg:not(.habla_conversation_notification_nickname)'),
		    olarkAvatars = document.querySelectorAll('.olrk_avatar'),
		    olarkAvatarMap = {},
		    defaultAvatarURL = '//gravatar.com/avatar?s=32&d=identicon&r=PG',
		    translatedStaffLabel = _i18nCalypso2.default.translate('staff'),
		    personClassName,
		    previousPersonClassName,
		    gravatar,
		    staffLabel,
		    avatarNodeIndex,
		    avatarNode,
		    staffNameNode,
		    nameNodeContent,
		    nameNodeIndex,
		    nameNode,
		    isUserResponse;

		// Generate a mapping for avatar to staff members
		for (avatarNodeIndex = 0; avatarNodeIndex < olarkAvatars.length; avatarNodeIndex++) {
			avatarNode = olarkAvatars.item(avatarNodeIndex);
			staffNameNode = avatarNode.parentElement.querySelector('.hbl_pal_remote_fg');

			if (!staffNameNode) {
				continue;
			}

			olarkAvatarMap[staffNameNode.originalTextContent || staffNameNode.textContent] = avatarNode.getAttribute('src');
		}

		for (nameNodeIndex = 0; nameNodeIndex < allNameNodes.length; nameNodeIndex++) {
			nameNode = allNameNodes.item(nameNodeIndex);
			personClassName = nameNode.className.replace(/.*(habla_conversation_person\d+).*/, '$1');
			isUserResponse = !!nameNode.className.match(/hbl_pal_local_fg/);
			nameNodeContent = nameNode.textContent;

			if (previousPersonClassName === personClassName) {
				// Remove successive name labels so that they dont repeat
				nameNode.parentElement.removeChild(nameNode);
				continue;
			}

			if (isUserResponse) {
				// Clear out the arrow and put the users name
				nameNode.textContent = username;
			} else if (!nameNode.querySelector('.staff-label')) {
				// Keep a reference to the old text content before we change it
				// because we use it to match up the avatars
				nameNode.originalTextContent = nameNode.textContent;

				// Add the staff label
				nameNode.textContent = nameNode.textContent.replace(':', '');
				staffLabel = document.createElement('span');
				staffLabel.setAttribute('class', 'staff-label');
				staffLabel.appendChild(document.createTextNode(translatedStaffLabel));

				nameNode.appendChild(staffLabel);
			}

			if (!nameNode.querySelector('.gravatar')) {
				// Inject the gravatar
				gravatar = document.createElement('img');
				gravatar.setAttribute('class', 'gravatar');

				if (isUserResponse) {
					gravatar.setAttribute('src', avatarURL);
				} else {
					gravatar.setAttribute('src', olarkAvatarMap[nameNodeContent] || defaultAvatarURL);
				}

				nameNode.insertBefore(gravatar, nameNode.firstChild);
			}

			previousPersonClassName = personClassName;
		};
	}
};

(0, _emitter2.default)(olark);

module.exports = olark;

/***/ }),

/***/ "./client/lib/track-scroll-page/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal Dependencies
 */
var analytics = __webpack_require__("./client/lib/analytics/index.js");

module.exports = function (path, title, category, page) {
	analytics.ga.recordEvent(category, 'Loaded Next Page', 'page', page);
	analytics.pageView.record(path, title);
	analytics.mc.bumpStat('newdash_pageviews', 'scroll');
};

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

/***/ "./client/my-sites/themes/controller.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _startsWith2 = __webpack_require__("./node_modules/lodash/startsWith.js");

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _compact2 = __webpack_require__("./node_modules/lodash/compact.js");

var _compact3 = _interopRequireDefault(_compact2);

exports.upload = upload;
exports.loggedIn = loggedIn;
exports.loggedOut = loggedOut;
exports.fetchThemeData = fetchThemeData;
exports.fetchThemeFilters = fetchThemeFilters;
exports.redirectSearchAndType = redirectSearchAndType;
exports.redirectFilterAndType = redirectFilterAndType;
exports.redirectToThemeDetails = redirectToThemeDetails;

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _singleSite = __webpack_require__("./client/my-sites/themes/single-site.jsx");

var _singleSite2 = _interopRequireDefault(_singleSite);

var _multiSite = __webpack_require__("./client/my-sites/themes/multi-site.jsx");

var _multiSite2 = _interopRequireDefault(_multiSite);

var _loggedOut = __webpack_require__("./client/my-sites/themes/logged-out.jsx");

var _loggedOut2 = _interopRequireDefault(_loggedOut);

var _themeUpload = __webpack_require__("./client/my-sites/themes/theme-upload/index.jsx");

var _themeUpload2 = _interopRequireDefault(_themeUpload);

var _trackScrollPage = __webpack_require__("./client/lib/track-scroll-page/index.js");

var _trackScrollPage2 = _interopRequireDefault(_trackScrollPage);

var _constants = __webpack_require__("./client/state/themes/constants.js");

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _getThemeFilters = __webpack_require__("./client/state/selectors/get-theme-filters.js");

var _getThemeFilters2 = _interopRequireDefault(_getThemeFilters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/**
 * External Dependencies
 */
var debug = (0, _debug2.default)('calypso:themes');

function getProps(context) {
	var _context$params = context.params,
	    tier = _context$params.tier,
	    filter = _context$params.filter,
	    vertical = _context$params.vertical,
	    siteId = _context$params.site_id;

	var _getAnalyticsData = (0, _helpers.getAnalyticsData)(context.path, tier, siteId),
	    basePath = _getAnalyticsData.basePath,
	    analyticsPageTitle = _getAnalyticsData.analyticsPageTitle;

	var boundTrackScrollPage = function boundTrackScrollPage() {
		(0, _trackScrollPage2.default)(basePath, analyticsPageTitle, 'Themes');
	};

	return {
		tier: tier,
		filter: filter,
		vertical: vertical,
		analyticsPageTitle: analyticsPageTitle,
		analyticsPath: basePath,
		search: context.query.s,
		pathName: context.pathname,
		trackScrollPage: boundTrackScrollPage
	};
}

function upload(context, next) {
	// Store previous path to return to only if it was main showcase page
	if ((0, _startsWith3.default)(context.prevPath, '/themes') && !(0, _startsWith3.default)(context.prevPath, '/themes/upload')) {
		context.store.dispatch((0, _actions.setBackPath)(context.prevPath));
	}

	context.primary = _react2.default.createElement(_themeUpload2.default, null);
	next();
}

function loggedIn(context, next) {
	// Scroll to the top
	if (typeof window !== 'undefined') {
		window.scrollTo(0, 0);
	}

	var Component = context.params.site_id ? _singleSite2.default : _multiSite2.default;
	context.primary = _react2.default.createElement(Component, getProps(context));

	next();
}

function loggedOut(context, next) {
	if (context.isServerSide && !(0, _isEmpty3.default)(context.query)) {
		// Don't server-render URLs with query params
		return next();
	}

	var props = getProps(context);

	context.primary = _react2.default.createElement(_loggedOut2.default, props);
	next();
}

function fetchThemeData(context, next) {
	if (!context.isServerSide) {
		return next();
	}

	var siteId = 'wpcom';
	var query = {
		search: context.query.s,
		tier: context.params.tier,
		filter: (0, _compact3.default)([context.params.filter, context.params.vertical]).join(','),
		page: 1,
		number: _constants.DEFAULT_THEME_QUERY.number
	};

	var themes = (0, _selectors.getThemesForQuery)(context.store.getState(), siteId, query);
	if (themes) {
		debug('found theme data in cache');
		return next();
	}

	context.store.dispatch((0, _actions.requestThemes)(siteId, query)).then(next).catch(next);
}

function fetchThemeFilters(context, next) {
	var store = context.store;


	if (!(0, _isEmpty3.default)((0, _getThemeFilters2.default)(store.getState()))) {
		debug('found theme filters in cache');
		return next();
	}

	var unsubscribe = store.subscribe(function () {
		if (!(0, _isEmpty3.default)((0, _getThemeFilters2.default)(store.getState()))) {
			unsubscribe();
			return next();
		}
	});
	store.dispatch((0, _actions.requestThemeFilters)());
}

// Legacy (Atlas-based Theme Showcase v4) route redirects

function redirectSearchAndType(_ref) {
	var res = _ref.res,
	    _ref$params = _ref.params,
	    site = _ref$params.site,
	    search = _ref$params.search,
	    tier = _ref$params.tier;

	var target = '/themes/' + (0, _compact3.default)([tier, site]).join('/'); // tier before site!
	if (search) {
		res.redirect(target + '?s=' + search);
	} else {
		res.redirect(target);
	}
}

function redirectFilterAndType(_ref2) {
	var res = _ref2.res,
	    _ref2$params = _ref2.params,
	    site = _ref2$params.site,
	    filter = _ref2$params.filter,
	    tier = _ref2$params.tier;

	var parts = void 0;
	if (filter) {
		parts = [tier, 'filter', filter, site];
	} else {
		parts = [tier, site];
	}
	res.redirect('/themes/' + (0, _compact3.default)(parts).join('/'));
}

function redirectToThemeDetails(_ref3, next) {
	var res = _ref3.res,
	    _ref3$params = _ref3.params,
	    site = _ref3$params.site,
	    theme = _ref3$params.theme,
	    section = _ref3$params.section;

	// Make sure we aren't matching a site -- e.g. /themes/example.wordpress.com or /themes/1234567
	if ((0, _includes3.default)(theme, '.') || isFinite(theme)) {
		return next();
	}
	var redirectedSection = void 0;
	if (section === 'support') {
		redirectedSection = 'setup';
	}
	res.redirect('/theme/' + (0, _compact3.default)([theme, redirectedSection, site]).join('/'));
}

/***/ }),

/***/ "./client/my-sites/themes/current-theme/button.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _url = __webpack_require__("./client/lib/url/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
exports.default = _react2.default.createClass({
	displayName: 'CurrentThemeButton',

	propTypes: {
		name: _react.PropTypes.string.isRequired,
		label: _react.PropTypes.string.isRequired,
		icon: _react.PropTypes.string.isRequired,
		href: _react.PropTypes.string,
		onClick: _react.PropTypes.func
	},

	render: function render() {
		return _react2.default.createElement(
			'a',
			{ role: 'button',
				className: (0, _classnames2.default)('current-theme__button', 'current-theme__' + this.props.name, { disabled: !this.props.href }),
				onClick: this.props.onClick.bind(null, this.props.name),
				href: this.props.href,
				target: (0, _url.isOutsideCalypso)(this.props.href) ? '_blank' : null },
			_react2.default.createElement(_gridicons2.default, { icon: this.props.icon, size: 18 }),
			_react2.default.createElement(
				'span',
				{ className: 'current-theme__button-label' },
				this.props.label
			)
		);
	}
});

/**
 * Internal dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/current-theme/index.jsx":
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

var _pickBy2 = __webpack_require__("./node_modules/lodash/pickBy.js");

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _button = __webpack_require__("./client/my-sites/themes/current-theme/button.jsx");

var _button2 = _interopRequireDefault(_button);

var _themeOptions = __webpack_require__("./client/my-sites/themes/theme-options.js");

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

var _queryActiveTheme = __webpack_require__("./client/components/data/query-active-theme/index.jsx");

var _queryActiveTheme2 = _interopRequireDefault(_queryActiveTheme);

var _queryCanonicalTheme = __webpack_require__("./client/components/data/query-canonical-theme/index.jsx");

var _queryCanonicalTheme2 = _interopRequireDefault(_queryCanonicalTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Show current active theme for a site, with
 * related actions.
 */
var CurrentTheme = function (_Component) {
	(0, _inherits3.default)(CurrentTheme, _Component);

	function CurrentTheme() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CurrentTheme);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CurrentTheme.__proto__ || (0, _getPrototypeOf2.default)(CurrentTheme)).call.apply(_ref, [this].concat(args))), _this), _this.trackClick = function (event) {
			return (0, _helpers.trackClick)('current theme', event);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CurrentTheme, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    currentTheme = _props.currentTheme,
			    currentThemeId = _props.currentThemeId,
			    siteId = _props.siteId,
			    translate = _props.translate,
			    placeholderText = _react2.default.createElement(
				'span',
				{ className: 'current-theme__placeholder' },
				'loading...'
			),
			    text = currentTheme && currentTheme.name ? currentTheme.name : placeholderText;

			var options = (0, _pickBy3.default)(this.props.options, function (option) {
				return option.icon && !(option.hideForTheme && option.hideForTheme(currentThemeId, siteId));
			});

			var showScreenshot = currentTheme && currentTheme.screenshot;
			// Some themes have no screenshot, so only show placeholder until details loaded
			var showScreenshotPlaceholder = !currentTheme;

			return _react2.default.createElement(
				_card2.default,
				{ className: 'current-theme' },
				_react2.default.createElement(_queryActiveTheme2.default, { siteId: siteId }),
				currentThemeId && _react2.default.createElement(_queryCanonicalTheme2.default, { themeId: currentThemeId, siteId: siteId }),
				_react2.default.createElement(
					'div',
					{ className: 'current-theme__current' },
					showScreenshotPlaceholder && _react2.default.createElement('div', { className: 'current-theme__img-placeholder' }),
					showScreenshot && _react2.default.createElement('img', {
						src: currentTheme.screenshot + '?w=150',
						className: 'current-theme__img' }),
					_react2.default.createElement(
						'span',
						{ className: 'current-theme__label' },
						translate('Current Theme')
					),
					_react2.default.createElement(
						'span',
						{ className: 'current-theme__name' },
						text
					)
				),
				_react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)('current-theme__actions', { 'two-buttons': (0, _keys2.default)(options).length === 2 }) },
					(0, _map3.default)(options, function (option, name) {
						return _react2.default.createElement(_button2.default, { name: name,
							key: name,
							label: option.label,
							icon: option.icon,
							href: currentThemeId && option.getUrl(currentThemeId),
							onClick: _this2.trackClick });
					})
				)
			);
		}
	}]);
	return CurrentTheme;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


CurrentTheme.propTypes = {
	options: _react.PropTypes.objectOf(_react.PropTypes.shape({
		label: _react.PropTypes.string,
		icon: _react.PropTypes.string,
		getUrl: _react.PropTypes.func
	})),
	siteId: _react.PropTypes.number.isRequired,
	// connected props
	currentTheme: _react.PropTypes.object
};


var ConnectedCurrentTheme = (0, _themeOptions.connectOptions)((0, _i18nCalypso.localize)(CurrentTheme));

var CurrentThemeWithOptions = function CurrentThemeWithOptions(_ref2) {
	var siteId = _ref2.siteId,
	    currentTheme = _ref2.currentTheme,
	    currentThemeId = _ref2.currentThemeId;
	return _react2.default.createElement(ConnectedCurrentTheme, { currentTheme: currentTheme,
		currentThemeId: currentThemeId,
		siteId: siteId,
		source: 'current theme' });
};

exports.default = (0, _reactRedux.connect)(function (state, _ref3) {
	var siteId = _ref3.siteId;

	var currentThemeId = (0, _selectors.getActiveTheme)(state, siteId);
	return {
		currentThemeId: currentThemeId,
		currentTheme: (0, _selectors.getCanonicalTheme)(state, siteId, currentThemeId)
	};
})(CurrentThemeWithOptions);
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

/***/ "./client/my-sites/themes/index.web.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (router) {
	var user = (0, _user2.default)();
	var isLoggedIn = !!user.get();
	var siteId = '\\d+' + // numeric site id
	'|' + // or
	'[^\\\\/.]+\\.[^\\\\/]+'; // one-or-more non-slash-or-dot chars, then a dot, then one-or-more non-slashes

	if (_config2.default.isEnabled('manage/themes')) {
		if (isLoggedIn) {
			if (_config2.default.isEnabled('manage/themes/upload')) {
				router('/themes/upload', _controller2.makeSites, _controller.makeLayout);
				router('/themes/upload/:site_id?', _controller2.siteSelection, _controller3.upload, _controller2.makeNavigation, _controller.makeLayout);
			}
			var loggedInRoutes = ['/themes/:tier(free|premium)?/:site_id(' + siteId + ')?', '/themes/:tier(free|premium)?/filter/:filter/:site_id(' + siteId + ')?', '/themes/:vertical?/:tier(free|premium)?/:site_id(' + siteId + ')?', '/themes/:vertical?/:tier(free|premium)?/filter/:filter/:site_id(' + siteId + ')?'];
			router(loggedInRoutes, _controller3.fetchThemeFilters, _validateFilters.validateVertical, _validateFilters.validateFilters, _controller2.siteSelection, _controller3.loggedIn, _controller2.makeNavigation, _controller.makeLayout);
		} else {
			// No uploads when logged-out, so redirect to main showcase page
			router('/themes/upload', '/themes');
			router('/themes/upload/*', '/themes');

			var loggedOutRoutes = ['/themes/:tier(free|premium)?', '/themes/:tier(free|premium)?/filter/:filter', '/themes/:vertical?/:tier(free|premium)?', '/themes/:vertical?/:tier(free|premium)?/filter/:filter'];
			router(loggedOutRoutes, _controller3.fetchThemeFilters, _validateFilters.validateVertical, _validateFilters.validateFilters, _controller3.loggedOut, _controller.makeLayout);
		}
	}
};

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _user = __webpack_require__("./client/lib/user/index.js");

var _user2 = _interopRequireDefault(_user);

var _controller = __webpack_require__("./client/controller/index.web.js");

var _controller2 = __webpack_require__("./client/my-sites/controller.js");

var _controller3 = __webpack_require__("./client/my-sites/themes/controller.jsx");

var _validateFilters = __webpack_require__("./client/my-sites/themes/validate-filters.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default']; /**
                                      * Internal dependencies
                                      */

/***/ }),

/***/ "./client/my-sites/themes/jetpack-manage-disabled-message.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _jetpackManageErrorPage = __webpack_require__("./client/my-sites/jetpack-manage-error-page/index.jsx");

var _jetpackManageErrorPage2 = _interopRequireDefault(_jetpackManageErrorPage);

var _themesList = __webpack_require__("./client/components/themes-list/index.jsx");

var _themesList2 = _interopRequireDefault(_themesList);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var JetpackManageDisabledMessage = function (_Component) {
	(0, _inherits3.default)(JetpackManageDisabledMessage, _Component);

	function JetpackManageDisabledMessage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, JetpackManageDisabledMessage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = JetpackManageDisabledMessage.__proto__ || (0, _getPrototypeOf2.default)(JetpackManageDisabledMessage)).call.apply(_ref, [this].concat(args))), _this), _this.clickOnActivate = function () {
			_analytics2.default.ga.recordEvent('Jetpack', 'Activate manage', 'Site', _this.props.siteId);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(JetpackManageDisabledMessage, [{
		key: 'renderMockThemes',
		value: function renderMockThemes() {
			var exampleThemesData = [{ name: 'Dyad', slug: 'dyad' }, { name: 'Independent Publisher', slug: 'independent-publisher' }, { name: 'Sela', slug: 'sela' }, { name: 'Hemingway Rewritten', slug: 'hemingway-rewritten' }, { name: 'Twenty Sixteen', slug: 'twentysixteen' }, { name: 'Penscratch', slug: 'penscratch' }, { name: 'Edin', slug: 'edin' }, { name: 'Publication', slug: 'publication' }, { name: 'Harmonic', slug: 'harmonic' }];
			var themes = exampleThemesData.map(function (_ref2) {
				var name = _ref2.name,
				    id = _ref2.slug;
				return {
					id: id,
					name: name,
					screenshot: 'https://i1.wp.com/s0.wp.com/wp-content/themes/pub/' + id + '/screenshot.png?w=660'
				};
			});
			return _react2.default.createElement(_themesList2.default, { themes: themes,
				getButtonOptions: _noop3.default,
				onScreenshotClick: _noop3.default,
				onMoreButtonClick: _noop3.default });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_main2.default,
				{ className: 'themes' },
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(_jetpackManageErrorPage2.default, {
					template: 'optInManage',
					title: this.props.translate('Looking to manage this site\'s themes?'),
					siteId: this.props.siteId,
					section: 'themes',
					secondaryAction: this.props.translate('Open Site Theme Browser'),
					secondaryActionURL: this.props.adminUrl,
					secondaryActionTarget: '_blank',
					actionCallback: this.clickOnActivate,
					featureExample: this.renderMockThemes() })
			);
		}
	}]);
	return JetpackManageDisabledMessage;
}(_react.Component); /**
                      * External dependencies
                      */


exports.default = (0, _reactRedux.connect)(function (state, _ref3) {
	var siteId = _ref3.siteId;
	return {
		adminUrl: (0, _selectors.getSiteAdminUrl)(state, siteId, 'themes.php')
	};
})((0, _i18nCalypso.localize)(JetpackManageDisabledMessage));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/jetpack-referrer-message.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _currentTheme = __webpack_require__("./client/my-sites/themes/current-theme/index.jsx");

var _currentTheme2 = _interopRequireDefault(_currentTheme);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _pageViewTracker = __webpack_require__("./client/lib/analytics/page-view-tracker/index.jsx");

var _pageViewTracker2 = _interopRequireDefault(_pageViewTracker);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var JetpackReferrerMessage = function JetpackReferrerMessage(_ref) {
	var siteId = _ref.siteId,
	    translate = _ref.translate,
	    adminUrl = _ref.adminUrl,
	    analyticsPath = _ref.analyticsPath,
	    analyticsPageTitle = _ref.analyticsPageTitle;
	return _react2.default.createElement(
		_main2.default,
		{ className: 'themes' },
		_react2.default.createElement(_pageViewTracker2.default, { path: analyticsPath, title: analyticsPageTitle }),
		_react2.default.createElement(_sidebarNavigation2.default, null),
		_react2.default.createElement(_currentTheme2.default, { siteId: siteId }),
		_react2.default.createElement(_emptyContent2.default, { title: translate('Changing Themes?'),
			line: translate('Use your site theme browser to manage themes.'),
			action: translate('Open Site Theme Browser'),
			actionURL: adminUrl,
			actionTarget: '_blank',
			illustration: '/calypso/images/illustrations/illustration-jetpack.svg' })
	);
}; /**
    * External dependencies
    */
exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var siteId = _ref2.siteId;
	return {
		adminUrl: (0, _selectors.getSiteAdminUrl)(state, siteId, 'themes.php')
	};
})((0, _i18nCalypso.localize)(JetpackReferrerMessage));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/jetpack-upgrade-message.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _jetpackManageErrorPage = __webpack_require__("./client/my-sites/jetpack-manage-error-page/index.jsx");

var _jetpackManageErrorPage2 = _interopRequireDefault(_jetpackManageErrorPage);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var JetpackUpgradeMessage = function JetpackUpgradeMessage(_ref) {
	var siteId = _ref.siteId,
	    translate = _ref.translate,
	    adminUrl = _ref.adminUrl;
	return _react2.default.createElement(
		_main2.default,
		{ className: 'themes' },
		_react2.default.createElement(_sidebarNavigation2.default, null),
		_react2.default.createElement(_jetpackManageErrorPage2.default, {
			template: 'updateJetpack',
			siteId: siteId,
			version: '3.7',
			secondaryAction: translate('Open Site Theme Browser'),
			secondaryActionURL: adminUrl,
			secondaryActionTarget: '_blank'
		})
	);
}; /**
    * External dependencies
    */
exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var siteId = _ref2.siteId;
	return {
		adminUrl: (0, _selectors.getSiteAdminUrl)(state, siteId, 'themes.php')
	};
})((0, _i18nCalypso.localize)(JetpackUpgradeMessage));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/logged-out.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _themeShowcase = __webpack_require__("./client/my-sites/themes/theme-showcase.jsx");

var _themeShowcase2 = _interopRequireDefault(_themeShowcase);

var _themeOptions = __webpack_require__("./client/my-sites/themes/theme-options.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var ConnectedThemeShowcase = (0, _themeOptions.connectOptions)(_themeShowcase2.default); /**
                                                                                          * External dependencies
                                                                                          */

exports.default = function (props) {
	return _react2.default.createElement(ConnectedThemeShowcase, (0, _extends3.default)({}, props, {
		origin: 'wpcom',
		defaultOption: 'signup',
		getScreenshotOption: function getScreenshotOption() {
			return 'info';
		},
		source: 'showcase',
		showUploadButton: false
	}));
};

module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/multi-site.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _themesSiteSelectorModal = __webpack_require__("./client/my-sites/themes/themes-site-selector-modal.jsx");

var _themesSiteSelectorModal2 = _interopRequireDefault(_themesSiteSelectorModal);

var _themeOptions = __webpack_require__("./client/my-sites/themes/theme-options.js");

var _themeShowcase = __webpack_require__("./client/my-sites/themes/theme-showcase.jsx");

var _themeShowcase2 = _interopRequireDefault(_themeShowcase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var MultiSiteThemeShowcase = (0, _themeOptions.connectOptions)(function (props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_sidebarNavigation2.default, null),
		_react2.default.createElement(
			_themesSiteSelectorModal2.default,
			props,
			_react2.default.createElement(_themeShowcase2.default, {
				source: 'showcase',
				showUploadButton: false })
		)
	);
}); /**
     * External dependencies
     */

exports.default = function (props) {
	return _react2.default.createElement(MultiSiteThemeShowcase, (0, _extends3.default)({}, props, {
		origin: 'wpcom',
		defaultOption: 'activate',
		secondaryOption: 'tryandcustomize',
		getScreenshotOption: function getScreenshotOption() {
			return 'info';
		} }));
};

module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/single-site-jetpack.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _pickBy2 = __webpack_require__("./node_modules/lodash/pickBy.js");

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _currentTheme = __webpack_require__("./client/my-sites/themes/current-theme/index.jsx");

var _currentTheme2 = _interopRequireDefault(_currentTheme);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _thanksModal = __webpack_require__("./client/my-sites/themes/thanks-modal.jsx");

var _thanksModal2 = _interopRequireDefault(_thanksModal);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _jetpackReferrerMessage = __webpack_require__("./client/my-sites/themes/jetpack-referrer-message.jsx");

var _jetpackReferrerMessage2 = _interopRequireDefault(_jetpackReferrerMessage);

var _jetpackUpgradeMessage = __webpack_require__("./client/my-sites/themes/jetpack-upgrade-message.jsx");

var _jetpackUpgradeMessage2 = _interopRequireDefault(_jetpackUpgradeMessage);

var _jetpackManageDisabledMessage = __webpack_require__("./client/my-sites/themes/jetpack-manage-disabled-message.jsx");

var _jetpackManageDisabledMessage2 = _interopRequireDefault(_jetpackManageDisabledMessage);

var _themeOptions = __webpack_require__("./client/my-sites/themes/theme-options.js");

var _banner = __webpack_require__("./client/components/banner/index.jsx");

var _banner2 = _interopRequireDefault(_banner);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _querySitePlans = __webpack_require__("./client/components/data/query-site-plans/index.jsx");

var _querySitePlans2 = _interopRequireDefault(_querySitePlans);

var _querySitePurchases = __webpack_require__("./client/components/data/query-site-purchases/index.jsx");

var _querySitePurchases2 = _interopRequireDefault(_querySitePurchases);

var _themeShowcase = __webpack_require__("./client/my-sites/themes/theme-showcase.jsx");

var _themeShowcase2 = _interopRequireDefault(_themeShowcase);

var _themesSelection = __webpack_require__("./client/my-sites/themes/themes-selection.jsx");

var _themesSelection2 = _interopRequireDefault(_themesSelection);

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _selectors = __webpack_require__("./client/state/sites/plans/selectors.js");

var _selectors2 = __webpack_require__("./client/state/themes/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedThemesSelection = (0, _themeOptions.connectOptions)(function (props) {
	return _react2.default.createElement(_themesSelection2.default, (0, _extends3.default)({}, props, {
		getOptions: function getOptions(theme) {
			return (0, _pickBy3.default)((0, _helpers.addTracking)(props.options), function (option) {
				return !(option.hideForTheme && option.hideForTheme(theme, props.siteId));
			});
		}
	}));
});

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


var ConnectedSingleSiteJetpack = (0, _themeOptions.connectOptions)(function (props) {
	var analyticsPath = props.analyticsPath,
	    analyticsPageTitle = props.analyticsPageTitle,
	    canManage = props.canManage,
	    emptyContent = props.emptyContent,
	    filter = props.filter,
	    getScreenshotOption = props.getScreenshotOption,
	    hasJetpackThemes = props.hasJetpackThemes,
	    showWpcomThemesList = props.showWpcomThemesList,
	    search = props.search,
	    siteId = props.siteId,
	    vertical = props.vertical,
	    tier = props.tier,
	    translate = props.translate,
	    hasUnlimitedPremiumThemes = props.hasUnlimitedPremiumThemes,
	    requestingSitePlans = props.requestingSitePlans;

	var jetpackEnabled = _config2.default.isEnabled('manage/themes-jetpack');

	if (!jetpackEnabled) {
		return _react2.default.createElement(_jetpackReferrerMessage2.default, {
			siteId: siteId,
			analyticsPath: analyticsPath,
			analyticsPageTitle: analyticsPageTitle });
	}
	if (!hasJetpackThemes) {
		return _react2.default.createElement(_jetpackUpgradeMessage2.default, { siteId: siteId });
	}
	if (!canManage) {
		return _react2.default.createElement(_jetpackManageDisabledMessage2.default, { siteId: siteId });
	}

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_sidebarNavigation2.default, null),
		_react2.default.createElement(_currentTheme2.default, { siteId: siteId }),
		!requestingSitePlans && !hasUnlimitedPremiumThemes && _react2.default.createElement(_banner2.default, {
			plan: _constants.PLAN_JETPACK_PREMIUM,
			title: translate('Access all our premium themes with our Professional plan!'),
			description: translate('Get advanced customization, more storage space, and video support along with all your new themes.'),
			event: 'themes_plans_free_personal_premium'
		}),
		_react2.default.createElement(
			_themeShowcase2.default,
			(0, _extends3.default)({}, props, {
				siteId: siteId,
				emptyContent: showWpcomThemesList ? _react2.default.createElement('div', null) : null }),
			siteId && _react2.default.createElement(_querySitePlans2.default, { siteId: siteId }),
			siteId && _react2.default.createElement(_querySitePurchases2.default, { siteId: siteId }),
			_react2.default.createElement(_thanksModal2.default, { source: 'list' }),
			showWpcomThemesList && _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(ConnectedThemesSelection, {
					origin: 'wpcom',
					defaultOption: 'activate',
					secondaryOption: 'tryandcustomize',
					search: search,
					tier: tier,
					filter: filter,
					vertical: vertical,
					siteId: siteId /* This is for the options in the '...' menu only */,
					getScreenshotUrl: function getScreenshotUrl(theme) {
						if (!getScreenshotOption(theme).getUrl) {
							return null;
						}
						return getScreenshotOption(theme).getUrl(theme);
					},
					onScreenshotClick: function onScreenshotClick(theme) {
						if (!getScreenshotOption(theme).action) {
							return;
						}
						getScreenshotOption(theme).action(theme);
					},
					getActionLabel: function getActionLabel(theme) {
						return getScreenshotOption(theme).label;
					},
					trackScrollPage: props.trackScrollPage,
					source: 'wpcom',
					emptyContent: emptyContent
				})
			)
		)
	);
});

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId,
	    tier = _ref.tier;

	var isMultisite = (0, _selectors3.isJetpackSiteMultiSite)(state, siteId);
	var showWpcomThemesList = _config2.default.isEnabled('manage/themes/upload') && (0, _selectors3.hasJetpackSiteJetpackThemesExtendedFeatures)(state, siteId) && !isMultisite;
	var emptyContent = null;
	if (showWpcomThemesList) {
		var siteQuery = (0, _selectors2.getLastThemeQuery)(state, siteId);
		var wpcomQuery = (0, _selectors2.getLastThemeQuery)(state, 'wpcom');
		var siteThemesCount = (0, _selectors2.getThemesFoundForQuery)(state, siteId, siteQuery);
		var wpcomThemesCount = (0, _selectors2.getThemesFoundForQuery)(state, 'wpcom', wpcomQuery);
		emptyContent = !siteThemesCount && !wpcomThemesCount ? null : _react2.default.createElement('div', null);
	}
	return {
		canManage: (0, _selectors3.canJetpackSiteManage)(state, siteId),
		hasJetpackThemes: (0, _selectors3.hasJetpackSiteJetpackThemes)(state, siteId),
		tier: tier,
		showWpcomThemesList: showWpcomThemesList,
		emptyContent: emptyContent,
		isMultisite: isMultisite,
		hasUnlimitedPremiumThemes: (0, _selectors.hasFeature)(state, siteId, _constants.FEATURE_UNLIMITED_PREMIUM_THEMES),
		requestingSitePlans: (0, _selectors.isRequestingSitePlans)(state, siteId)
	};
})(ConnectedSingleSiteJetpack);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/single-site-wpcom.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _currentTheme = __webpack_require__("./client/my-sites/themes/current-theme/index.jsx");

var _currentTheme2 = _interopRequireDefault(_currentTheme);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _thanksModal = __webpack_require__("./client/my-sites/themes/thanks-modal.jsx");

var _thanksModal2 = _interopRequireDefault(_thanksModal);

var _themeOptions = __webpack_require__("./client/my-sites/themes/theme-options.js");

var _banner = __webpack_require__("./client/components/banner/index.jsx");

var _banner2 = _interopRequireDefault(_banner);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _selectors = __webpack_require__("./client/state/sites/plans/selectors.js");

var _querySitePlans = __webpack_require__("./client/components/data/query-site-plans/index.jsx");

var _querySitePlans2 = _interopRequireDefault(_querySitePlans);

var _querySitePurchases = __webpack_require__("./client/components/data/query-site-purchases/index.jsx");

var _querySitePurchases2 = _interopRequireDefault(_querySitePurchases);

var _themeShowcase = __webpack_require__("./client/my-sites/themes/theme-showcase.jsx");

var _themeShowcase2 = _interopRequireDefault(_themeShowcase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var ConnectedSingleSiteWpcom = (0, _themeOptions.connectOptions)(function (props) {
	var siteId = props.siteId,
	    currentPlanSlug = props.currentPlanSlug,
	    translate = props.translate;


	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_sidebarNavigation2.default, null),
		_react2.default.createElement(_currentTheme2.default, { siteId: siteId }),
		(currentPlanSlug === _constants.PLAN_FREE || currentPlanSlug === _constants.PLAN_PERSONAL) && _react2.default.createElement(_banner2.default, {
			plan: _constants.PLAN_PREMIUM,
			title: translate('Access all our premium themes with our Premium and Business plans!'),
			description: translate('Get advanced customization, more storage space, and video support along with all your new themes.'),
			event: 'themes_plans_free_personal'
		}),
		_react2.default.createElement(
			_themeShowcase2.default,
			(0, _extends3.default)({}, props, { siteId: siteId }),
			siteId && _react2.default.createElement(_querySitePlans2.default, { siteId: siteId }),
			siteId && _react2.default.createElement(_querySitePurchases2.default, { siteId: siteId }),
			_react2.default.createElement(_thanksModal2.default, { source: 'list' })
		)
	);
});

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId;

	var currentPlan = (0, _selectors.getCurrentPlan)(state, siteId);
	return {
		currentPlanSlug: (0, _get3.default)(currentPlan, 'productSlug', null)
	};
})(ConnectedSingleSiteWpcom);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/single-site.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _singleSiteWpcom = __webpack_require__("./client/my-sites/themes/single-site-wpcom.jsx");

var _singleSiteWpcom2 = _interopRequireDefault(_singleSiteWpcom);

var _singleSiteJetpack = __webpack_require__("./client/my-sites/themes/single-site-jetpack.jsx");

var _singleSiteJetpack2 = _interopRequireDefault(_singleSiteJetpack);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/themes/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var SingleSiteThemeShowcaseWithOptions = function SingleSiteThemeShowcaseWithOptions(props) {
	var isJetpack = props.isJetpack,
	    siteId = props.siteId,
	    translate = props.translate;

	// If we've only just switched from single to multi-site, there's a chance
	// this component is still being rendered with site unset, so we need to guard
	// against that case.

	if (!siteId) {
		return _react2.default.createElement(_main2.default, { className: 'themes' });
	}

	if (isJetpack) {
		return _react2.default.createElement(_singleSiteJetpack2.default, (0, _extends3.default)({}, props, {
			siteId: siteId,
			defaultOption: 'activate',
			secondaryOption: 'tryandcustomize',
			source: 'showcase',
			listLabel: translate('Uploaded themes'),
			placeholderCount: 5
		}));
	}

	return _react2.default.createElement(_singleSiteWpcom2.default, (0, _extends3.default)({}, props, {
		origin: 'wpcom',
		siteId: siteId,
		defaultOption: 'activate',
		secondaryOption: 'tryandcustomize',
		source: 'showcase'
	}));
}; /**
    * External dependencies
    */
exports.default = (0, _reactRedux.connect)(function (state) {
	var selectedSiteId = (0, _selectors.getSelectedSiteId)(state);
	return {
		siteId: selectedSiteId,
		isJetpack: (0, _selectors2.isJetpackSite)(state, selectedSiteId),
		getScreenshotOption: function getScreenshotOption(themeId) {
			return (0, _selectors3.isThemeActive)(state, themeId, selectedSiteId) ? 'customize' : 'info';
		}
	};
})((0, _i18nCalypso.localize)(SingleSiteThemeShowcaseWithOptions));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/thanks-modal.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _dialog = __webpack_require__("./client/components/dialog/index.jsx");

var _dialog2 = _interopRequireDefault(_dialog);

var _pulsingDot = __webpack_require__("./client/components/pulsing-dot/index.jsx");

var _pulsingDot2 = _interopRequireDefault(_pulsingDot);

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThanksModal = _react2.default.createClass({
	displayName: 'ThanksModal',

	trackClick: _helpers.trackClick.bind(null, 'current theme'),

	propTypes: {
		// Where is the modal being used?
		source: _react.PropTypes.oneOf(['details', 'list', 'upload']).isRequired,
		// Connected props
		clearActivated: _react.PropTypes.func.isRequired,
		currentTheme: _react.PropTypes.shape({
			author: _react.PropTypes.string,
			author_uri: _react.PropTypes.string,
			id: _react.PropTypes.string,
			name: _react.PropTypes.string
		}),
		customizeUrl: _react.PropTypes.string,
		detailsUrl: _react.PropTypes.string,
		forumUrl: _react.PropTypes.string,
		hasActivated: _react.PropTypes.bool.isRequired,
		isActivating: _react.PropTypes.bool.isRequired,
		isThemeWpcom: _react.PropTypes.bool.isRequired,
		siteId: _react.PropTypes.number,
		visitSiteUrl: _react.PropTypes.string
	},

	onCloseModal: function onCloseModal() {
		this.props.clearActivated(this.props.siteId);
		this.setState({ show: false });
	},
	visitSite: function visitSite() {
		this.trackClick('visit site');
		(0, _page2.default)(this.props.visitSiteUrl);
	},
	goBack: function goBack() {
		this.trackClick('go back');
		this.onCloseModal();
	},
	onLinkClick: function onLinkClick(link) {
		var _this = this;

		return function () {
			_this.onCloseModal();
			_this.trackClick(link, 'click');
		};
	},
	renderBody: function renderBody() {
		return _react2.default.createElement(
			'ul',
			null,
			_react2.default.createElement(
				'li',
				null,
				this.props.source === 'list' ? this.renderThemeInfo() : this.renderCustomizeInfo()
			),
			_react2.default.createElement(
				'li',
				null,
				this.renderSupportInfo()
			)
		);
	},
	renderThemeInfo: function renderThemeInfo() {
		return (0, _i18nCalypso.translate)('{{a}}Learn more about{{/a}} this theme.', {
			components: {
				a: _react2.default.createElement('a', { href: this.props.detailsUrl,
					onClick: this.onLinkClick('theme info') })
			}
		});
	},
	renderCustomizeInfo: function renderCustomizeInfo() {
		return (0, _i18nCalypso.translate)('{{a}}Customize{{/a}} this design.', {
			components: {
				a: _react2.default.createElement('a', { href: this.props.customizeUrl,
					onClick: this.onLinkClick('customize') })
			}
		});
	},
	renderSupportInfo: function renderSupportInfo() {
		var authorUri = this.props.currentTheme.author_uri;


		if (this.props.forumUrl) {
			return (0, _i18nCalypso.translate)('Have questions? Stop by our {{a}}support forums{{/a}}.', {
				components: {
					a: _react2.default.createElement('a', { href: this.props.forumUrl,
						onClick: this.onLinkClick('support') })
				}
			});
		}

		if (authorUri) {
			return (0, _i18nCalypso.translate)('Have questions? {{a}}Contact the theme author.{{/a}}', {
				components: {
					a: _react2.default.createElement('a', { href: authorUri,
						onClick: this.onLinkClick('org author') })
				}
			});
		}

		return null;
	},
	renderContent: function renderContent() {
		var _props$currentTheme = this.props.currentTheme,
		    themeName = _props$currentTheme.name,
		    themeAuthor = _props$currentTheme.author;


		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'h1',
				null,
				(0, _i18nCalypso.translate)('Thanks for choosing {{br/}} %(themeName)s {{br/}} by %(themeAuthor)s', {
					args: { themeName: themeName, themeAuthor: themeAuthor },
					components: {
						br: _react2.default.createElement('br', null)
					}
				})
			),
			this.renderBody()
		);
	},
	renderLoading: function renderLoading() {
		return _react2.default.createElement(
			'div',
			{ className: 'themes__thanks-modal-loading' },
			_react2.default.createElement(_pulsingDot2.default, { active: true })
		);
	},
	render: function render() {
		var _props = this.props,
		    currentTheme = _props.currentTheme,
		    hasActivated = _props.hasActivated,
		    isActivating = _props.isActivating;

		var visitSiteText = hasActivated ? (0, _i18nCalypso.translate)('Visit site') : (0, _i18nCalypso.translate)('Activating theme…');
		var buttons = [{ action: 'back', label: (0, _i18nCalypso.translate)('Back to themes'), onClick: this.goBack }, { action: 'visitSite', label: visitSiteText, isPrimary: true, disabled: !hasActivated, onClick: this.visitSite }];

		return _react2.default.createElement(
			_dialog2.default,
			{ className: 'themes__thanks-modal',
				isVisible: isActivating || hasActivated,
				buttons: buttons,
				onClose: this.onCloseModal },
			hasActivated && currentTheme ? this.renderContent() : this.renderLoading()
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
	var siteId = (0, _selectors3.getSelectedSiteId)(state);
	var siteUrl = (0, _get3.default)((0, _selectors2.getSite)(state, siteId), 'URL');
	var currentThemeId = (0, _selectors.getActiveTheme)(state, siteId);
	var currentTheme = currentThemeId && (0, _selectors.getCanonicalTheme)(state, siteId, currentThemeId);

	return {
		siteId: siteId,
		currentTheme: currentTheme,
		detailsUrl: (0, _selectors.getThemeDetailsUrl)(state, currentThemeId, siteId),
		customizeUrl: (0, _selectors.getThemeCustomizeUrl)(state, currentThemeId, siteId),
		forumUrl: (0, _selectors.getThemeForumUrl)(state, currentThemeId, siteId),
		visitSiteUrl: siteUrl + ((0, _selectors2.isJetpackSite)(state, siteId) ? '' : '?next=customize'),
		isActivating: !!(0, _selectors.isActivatingTheme)(state, siteId),
		hasActivated: !!(0, _selectors.hasActivatedTheme)(state, siteId),
		isThemeWpcom: (0, _selectors.isWpcomTheme)(state, currentThemeId)
	};
}, { clearActivated: _actions.clearActivated })(ThanksModal);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/theme-options.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.connectOptions = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _pickBy2 = __webpack_require__("./node_modules/lodash/pickBy.js");

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _mapValues2 = __webpack_require__("./node_modules/lodash/mapValues.js");

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _has2 = __webpack_require__("./node_modules/lodash/has.js");

var _has3 = _interopRequireDefault(_has2);

var _redux = __webpack_require__("./node_modules/redux/lib/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors3 = __webpack_require__("./client/state/current-user/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var purchase = _config2.default.isEnabled('upgrades/checkout') ? {
	label: _i18nCalypso2.default.translate('Purchase', {
		context: 'verb'
	}),
	extendedLabel: _i18nCalypso2.default.translate('Purchase this design'),
	header: _i18nCalypso2.default.translate('Purchase on:', {
		context: 'verb',
		comment: 'label for selecting a site for which to purchase a theme'
	}),
	getUrl: _selectors.getThemePurchaseUrl,
	hideForTheme: function hideForTheme(state, themeId, siteId) {
		return (0, _selectors2.isJetpackSite)(state, siteId) || // No individual theme purchase on a JP site
		!(0, _selectors3.getCurrentUser)(state) || // Not logged in
		!(0, _selectors.isThemePremium)(state, themeId) || // Not a premium theme
		(0, _selectors.isPremiumThemeAvailable)(state, themeId, siteId) || // Already purchased individually, or thru a plan
		(0, _selectors.isThemeActive)(state, themeId, siteId) // Already active
		;
	}
} : {}; /**
         * External dependencies
         */


var upgradePlan = _config2.default.isEnabled('upgrades/checkout') ? {
	label: _i18nCalypso2.default.translate('Upgrade to activate', {
		comment: 'label prompting user to upgrade the Jetpack plan to activate a certain theme'
	}),
	extendedLabel: _i18nCalypso2.default.translate('Upgrade to activate', {
		comment: 'label prompting user to upgrade the Jetpack plan to activate a certain theme'
	}),
	header: _i18nCalypso2.default.translate('Upgrade on:', {
		context: 'verb',
		comment: 'label for selecting a site for which to upgrade a plan'
	}),
	getUrl: function getUrl(state, themeId, siteId) {
		return (0, _selectors.getJetpackUpgradeUrlIfPremiumTheme)(state, themeId, siteId);
	},
	hideForTheme: function hideForTheme(state, themeId, siteId) {
		return !(0, _selectors2.isJetpackSite)(state, siteId) || !(0, _selectors3.getCurrentUser)(state) || !(0, _selectors.isThemePremium)(state, themeId) || (0, _selectors.isThemeActive)(state, themeId, siteId) || (0, _selectors.isPremiumThemeAvailable)(state, themeId, siteId);
	}
} : {};

var activate = {
	label: _i18nCalypso2.default.translate('Activate'),
	extendedLabel: _i18nCalypso2.default.translate('Activate this design'),
	header: _i18nCalypso2.default.translate('Activate on:', { comment: 'label for selecting a site on which to activate a theme' }),
	action: _actions.activate,
	hideForTheme: function hideForTheme(state, themeId, siteId) {
		return !(0, _selectors3.getCurrentUser)(state) || (0, _selectors2.isJetpackSiteMultiSite)(state, siteId) || (0, _selectors.isThemeActive)(state, themeId, siteId) || (0, _selectors.isThemePremium)(state, themeId) && !(0, _selectors.isPremiumThemeAvailable)(state, themeId, siteId) || (0, _selectors2.isJetpackSite)(state, siteId) && !(0, _selectors.isThemeAvailableOnJetpackSite)(state, themeId, siteId);
	}
};

var deleteTheme = {
	label: _i18nCalypso2.default.translate('Delete'),
	action: _actions.confirmDelete,
	hideForTheme: function hideForTheme(state, themeId, siteId, origin) {
		return !(0, _selectors2.isJetpackSite)(state, siteId) || !_config2.default.isEnabled('manage/themes/upload') || origin === 'wpcom' || (0, _selectors.isThemeActive)(state, themeId, siteId);
	}
};

var customize = {
	label: _i18nCalypso2.default.translate('Customize'),
	extendedLabel: _i18nCalypso2.default.translate('Customize this design'),
	header: _i18nCalypso2.default.translate('Customize on:', { comment: 'label in the dialog for selecting a site for which to customize a theme' }),
	icon: 'customize',
	getUrl: _selectors.getThemeCustomizeUrl,
	hideForTheme: function hideForTheme(state, themeId, siteId) {
		return !(0, _canCurrentUser2.default)(state, siteId, 'edit_theme_options') || !(0, _selectors.isThemeActive)(state, themeId, siteId);
	}
};

var tryandcustomize = {
	label: _i18nCalypso2.default.translate('Try & Customize'),
	extendedLabel: _i18nCalypso2.default.translate('Try & Customize'),
	header: _i18nCalypso2.default.translate('Try & Customize on:', {
		comment: 'label in the dialog for opening the Customizer with the theme in preview'
	}),
	action: _actions.tryAndCustomize,
	hideForTheme: function hideForTheme(state, themeId, siteId) {
		return !(0, _selectors3.getCurrentUser)(state) || siteId && (!(0, _canCurrentUser2.default)(state, siteId, 'edit_theme_options') || (0, _selectors2.isJetpackSite)(state, siteId) && (0, _selectors2.isJetpackSiteMultiSite)(state, siteId)) || (0, _selectors.isThemeActive)(state, themeId, siteId) || (0, _selectors.isThemePremium)(state, themeId) && (0, _selectors2.isJetpackSite)(state, siteId) && !(0, _selectors.isPremiumThemeAvailable)(state, themeId, siteId) || (0, _selectors2.isJetpackSite)(state, siteId) && !(0, _selectors.isThemeAvailableOnJetpackSite)(state, themeId, siteId);
	}
};

var preview = {
	label: _i18nCalypso2.default.translate('Live demo', {
		comment: 'label for previewing the theme demo website'
	}),
	action: _actions.showThemePreview
};

var signupLabel = _i18nCalypso2.default.translate('Pick this design', {
	comment: 'when signing up for a WordPress.com account with a selected theme'
});

var signup = {
	label: signupLabel,
	extendedLabel: signupLabel,
	getUrl: _selectors.getThemeSignupUrl,
	hideForTheme: function hideForTheme(state) {
		return (0, _selectors3.getCurrentUser)(state);
	}
};

var separator = {
	separator: true
};

var info = {
	label: _i18nCalypso2.default.translate('Info', {
		comment: 'label for displaying the theme info sheet'
	}),
	icon: 'info',
	getUrl: _selectors.getThemeDetailsUrl
};

var support = {
	label: _i18nCalypso2.default.translate('Setup'),
	icon: 'help',
	getUrl: _selectors.getThemeSupportUrl,
	hideForTheme: function hideForTheme(state, themeId) {
		return !(0, _selectors.isThemePremium)(state, themeId);
	}
};

var help = {
	label: _i18nCalypso2.default.translate('Support'),
	getUrl: _selectors.getThemeHelpUrl
};

var ALL_THEME_OPTIONS = {
	customize: customize,
	preview: preview,
	purchase: purchase,
	upgradePlan: upgradePlan,
	activate: activate,
	tryandcustomize: tryandcustomize,
	deleteTheme: deleteTheme,
	signup: signup,
	separator: separator,
	info: info,
	support: support,
	help: help
};

var connectOptions = exports.connectOptions = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId,
	    _ref$origin = _ref.origin,
	    origin = _ref$origin === undefined ? siteId : _ref$origin;

	var mapGetUrl = _identity3.default,
	    mapHideForTheme = _identity3.default;

	if (siteId) {
		mapGetUrl = function mapGetUrl(getUrl) {
			return function (t) {
				return getUrl(state, t, siteId);
			};
		};
		mapHideForTheme = function mapHideForTheme(hideForTheme) {
			return function (t) {
				return hideForTheme(state, t, siteId, origin);
			};
		};
	} else {
		mapGetUrl = function mapGetUrl(getUrl) {
			return function (t, s) {
				return getUrl(state, t, s);
			};
		};
		mapHideForTheme = function mapHideForTheme(hideForTheme) {
			return function (t, s) {
				return hideForTheme(state, t, s, origin);
			};
		};
	}

	return (0, _mapValues3.default)(ALL_THEME_OPTIONS, function (option) {
		return (0, _assign2.default)({}, option, option.getUrl ? { getUrl: mapGetUrl(option.getUrl) } : {}, option.hideForTheme ? { hideForTheme: mapHideForTheme(option.hideForTheme) } : {});
	});
}, function (dispatch, _ref2) {
	var siteId = _ref2.siteId,
	    _ref2$source = _ref2.source,
	    source = _ref2$source === undefined ? 'unknown' : _ref2$source;

	var options = (0, _pickBy3.default)(ALL_THEME_OPTIONS, 'action');
	var mapAction = void 0;

	if (siteId) {
		mapAction = function mapAction(action) {
			return function (t) {
				return action(t, siteId, source);
			};
		};
	} else {
		// Bind only source.
		mapAction = function mapAction(action) {
			return function (t, s) {
				return action(t, s, source);
			};
		};
	}

	return (0, _redux.bindActionCreators)((0, _mapValues3.default)(options, function (_ref3) {
		var action = _ref3.action;
		return mapAction(action);
	}), dispatch);
}, function (options, actions, ownProps) {
	var defaultOption = ownProps.defaultOption,
	    secondaryOption = ownProps.secondaryOption,
	    _getScreenshotOption = ownProps.getScreenshotOption;

	options = (0, _mapValues3.default)(options, function (option, name) {
		if ((0, _has3.default)(option, 'action')) {
			return (0, _extends3.default)({}, option, { action: actions[name] });
		}
		return option;
	});

	return (0, _extends3.default)({}, ownProps, {
		options: options,
		defaultOption: options[defaultOption],
		secondaryOption: secondaryOption ? options[secondaryOption] : null,
		getScreenshotOption: function getScreenshotOption(theme) {
			return options[_getScreenshotOption(theme)];
		}
	});
});

/***/ }),

/***/ "./client/my-sites/themes/theme-preview.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _pulsingDot = __webpack_require__("./client/components/pulsing-dot/index.jsx");

var _pulsingDot2 = _interopRequireDefault(_pulsingDot);

var _queryTheme = __webpack_require__("./client/components/data/query-theme/index.jsx");

var _queryTheme2 = _interopRequireDefault(_queryTheme);

var _themeOptions = __webpack_require__("./client/my-sites/themes/theme-options.js");

var _selectors = __webpack_require__("./client/state/themes/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _webPreview = __webpack_require__("./client/components/web-preview/index.jsx");

var _webPreview2 = _interopRequireDefault(_webPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var ThemePreview = _react2.default.createClass({
	displayName: 'ThemePreview',

	propTypes: {
		// connected props
		demoUrl: _react.PropTypes.string,
		isActivating: _react.PropTypes.bool,
		isActive: _react.PropTypes.bool,
		isInstalling: _react.PropTypes.bool,
		isJetpack: _react.PropTypes.bool,
		themeId: _react.PropTypes.string,
		themeOptions: _react.PropTypes.object
	},

	getInitialState: function getInitialState() {
		return {
			showActionIndicator: false
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.isActivating && !nextProps.isActivating) {
			this.setState({ showActionIndicator: false });
			this.props.hideThemePreview();
		}
		if (!this.props.isInstalling && nextProps.isInstalling) {
			this.setState({ showActionIndicator: true });
		}
	},
	onPrimaryButtonClick: function onPrimaryButtonClick() {
		var option = this.getPrimaryOption();
		option.action && option.action(this.props.themeId);
		!this.props.isJetpack && this.props.hideThemePreview();
	},
	onSecondaryButtonClick: function onSecondaryButtonClick() {
		var secondary = this.getSecondaryOption();
		secondary.action && secondary.action(this.props.themeId);
		!this.props.isJetpack && this.props.hideThemePreview();
	},
	getPrimaryOption: function getPrimaryOption() {
		return this.props.themeOptions.primary;
	},
	getSecondaryOption: function getSecondaryOption() {
		var isActive = this.props.isActive;

		return isActive ? null : this.props.themeOptions.secondary;
	},
	renderPrimaryButton: function renderPrimaryButton() {
		var primaryOption = this.getPrimaryOption();
		var buttonHref = primaryOption.getUrl ? primaryOption.getUrl(this.props.themeId) : null;

		return _react2.default.createElement(
			_button2.default,
			{ primary: true, onClick: this.onPrimaryButtonClick, href: buttonHref },
			primaryOption.extendedLabel
		);
	},
	renderSecondaryButton: function renderSecondaryButton() {
		var secondaryButton = this.getSecondaryOption();
		if (!secondaryButton) {
			return;
		}
		var buttonHref = secondaryButton.getUrl ? secondaryButton.getUrl(this.props.themeId) : null;
		return _react2.default.createElement(
			_button2.default,
			{ onClick: this.onSecondaryButtonClick, href: buttonHref },
			secondaryButton.extendedLabel
		);
	},
	render: function render() {
		var themeId = this.props.themeId;
		var showActionIndicator = this.state.showActionIndicator;

		if (!themeId) {
			return null;
		}

		return _react2.default.createElement(
			'div',
			null,
			this.props.isJetpack && _react2.default.createElement(_queryTheme2.default, { themeId: themeId, siteId: 'wporg' }),
			this.props.demoUrl && _react2.default.createElement(
				_webPreview2.default,
				{
					showPreview: true,
					showExternal: true,
					showSEO: false,
					onClose: this.props.hideThemePreview,
					previewUrl: this.props.demoUrl + '?demo=true&iframe=true&theme_preview=true',
					externalUrl: this.props.demoUrl },
				showActionIndicator && _react2.default.createElement(_pulsingDot2.default, { active: true }),
				!showActionIndicator && this.renderSecondaryButton(),
				!showActionIndicator && this.renderPrimaryButton()
			)
		);
	}
});

// make all actions available to preview.


/**
 * Internal dependencies
 */
var ConnectedThemePreview = (0, _themeOptions.connectOptions)(ThemePreview);

exports.default = (0, _reactRedux.connect)(function (state) {
	var themeId = (0, _selectors.themePreviewVisibility)(state);
	if (!themeId) {
		return { themeId: themeId };
	}

	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	var isJetpack = (0, _selectors3.isJetpackSite)(state, siteId);
	var themeOptions = (0, _selectors.getThemePreviewThemeOptions)(state);
	return {
		themeId: themeId,
		isJetpack: isJetpack,
		themeOptions: themeOptions,
		isInstalling: (0, _selectors.isInstallingTheme)(state, themeId, siteId),
		isActive: (0, _selectors.isThemeActive)(state, themeId, siteId),
		isActivating: (0, _selectors.isActivatingTheme)(state, siteId),
		demoUrl: (0, _selectors.getThemeDemoUrl)(state, themeId, siteId),
		options: ['activate', 'preview', 'purchase', 'upgradePlan', 'tryandcustomize', 'customize', 'separator', 'info', 'signup', 'support', 'help']
	};
}, { hideThemePreview: _actions.hideThemePreview })((0, _i18nCalypso.localize)(ConnectedThemePreview));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/theme-showcase.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _pickBy2 = __webpack_require__("./node_modules/lodash/pickBy.js");

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _compact2 = __webpack_require__("./node_modules/lodash/compact.js");

var _compact3 = _interopRequireDefault(_compact2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _themesSelection = __webpack_require__("./client/my-sites/themes/themes-selection.jsx");

var _themesSelection2 = _interopRequireDefault(_themesSelection);

var _subMasterbarNav = __webpack_require__("./client/components/sub-masterbar-nav/index.jsx");

var _subMasterbarNav2 = _interopRequireDefault(_subMasterbarNav);

var _pageViewTracker = __webpack_require__("./client/lib/analytics/page-view-tracker/index.jsx");

var _pageViewTracker2 = _interopRequireDefault(_pageViewTracker);

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _documentHead = __webpack_require__("./client/components/data/document-head/index.jsx");

var _documentHead2 = _interopRequireDefault(_documentHead);

var _buildUrl = __webpack_require__("./client/lib/mixins/url-search/build-url.js");

var _buildUrl2 = _interopRequireDefault(_buildUrl);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/current-user/selectors.js");

var _themePreview = __webpack_require__("./client/my-sites/themes/theme-preview.jsx");

var _themePreview2 = _interopRequireDefault(_themePreview);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _getThemeFilterTerms = __webpack_require__("./client/state/selectors/get-theme-filter-terms.js");

var _getThemeFilterTerms2 = _interopRequireDefault(_getThemeFilterTerms);

var _getThemeFilterToTermTable = __webpack_require__("./client/state/selectors/get-theme-filter-to-term-table.js");

var _getThemeFilterToTermTable2 = _interopRequireDefault(_getThemeFilterToTermTable);

var _getThemeShowcaseDescription = __webpack_require__("./client/state/selectors/get-theme-showcase-description.js");

var _getThemeShowcaseDescription2 = _interopRequireDefault(_getThemeShowcaseDescription);

var _getThemeShowcaseTitle = __webpack_require__("./client/state/selectors/get-theme-showcase-title.js");

var _getThemeShowcaseTitle2 = _interopRequireDefault(_getThemeShowcaseTitle);

var _prependThemeFilterKeys = __webpack_require__("./client/state/selectors/prepend-theme-filter-keys.js");

var _prependThemeFilterKeys2 = _interopRequireDefault(_prependThemeFilterKeys);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _themesMagicSearchCard = __webpack_require__("./client/my-sites/themes/themes-magic-search-card/index.jsx");

var _themesMagicSearchCard2 = _interopRequireDefault(_themesMagicSearchCard);

var _queryThemeFilters = __webpack_require__("./client/components/data/query-theme-filters/index.jsx");

var _queryThemeFilters2 = _interopRequireDefault(_queryThemeFilters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var subjectsMeta = {
	photo: { icon: 'camera', order: 1 },
	portfolio: { icon: 'custom-post-type', order: 2 },
	magazine: { icon: 'reader', order: 3 },
	blog: { icon: 'posts', order: 4 },
	business: { icon: 'cart', order: 5 },
	wedding: { icon: 'heart', order: 6 },
	minimal: { icon: 'minus-small', order: 7 },
	travel: { icon: 'globe', order: 8 },
	food: { icon: 'flip-horizontal', order: 9 },
	music: { icon: 'audio', order: 10 }
}; /**
    * External dependencies
    */


var optionShape = _react.PropTypes.shape({
	label: _react.PropTypes.string,
	header: _react.PropTypes.string,
	getUrl: _react.PropTypes.func,
	action: _react.PropTypes.func
});

var ThemeShowcase = _react2.default.createClass({
	displayName: 'ThemeShowcase',

	propTypes: {
		emptyContent: _react.PropTypes.element,
		tier: _react.PropTypes.oneOf(['', 'free', 'premium']),
		search: _react.PropTypes.string,
		pathName: _react.PropTypes.string,
		// Connected props
		options: _react.PropTypes.objectOf(optionShape),
		defaultOption: optionShape,
		secondaryOption: optionShape,
		getScreenshotOption: _react.PropTypes.func,
		siteSlug: _react.PropTypes.string,
		trackATUploadClick: _react.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			tier: '',
			search: '',
			emptyContent: null,
			showUploadButton: true
		};
	},
	getInitialState: function getInitialState() {
		return {
			page: 1,
			showPreview: false
		};
	},
	doSearch: function doSearch(searchBoxContent) {
		var filterRegex = /(\w+)\:([\w-]*)/g;
		var filterToTermTable = this.props.filterToTermTable;


		var filters = searchBoxContent.match(filterRegex) || [];
		var validFilters = filters.map(function (filter) {
			return filterToTermTable[filter];
		});

		var url = this.constructUrl({
			filter: (0, _compact3.default)(validFilters).join('+'),
			// Strip filters and excess whitespace
			searchString: searchBoxContent.replace(filterRegex, '').replace(/\s+/g, ' ').trim()
		});
		(0, _page2.default)(url);
	},


	/**
  * Returns a full showcase url from current props.
  *
  * @param {Object} sections fields from this object will override current props.
  * @param {String} sections.vertical override vertical prop
  * @param {String} sections.tier override tier prop
  * @param {String} sections.filter override filter prop
  * @param {String} sections.siteSlug override siteSlug prop
  * @param {String} sections.searchString override searchString prop
  *
  * @returns {String} Theme showcase url
  */
	constructUrl: function constructUrl(sections) {
		var _props$sections = (0, _extends3.default)({}, this.props, sections),
		    vertical = _props$sections.vertical,
		    tier = _props$sections.tier,
		    filter = _props$sections.filter,
		    siteSlug = _props$sections.siteSlug,
		    searchString = _props$sections.searchString;

		var siteIdSection = siteSlug ? '/' + siteSlug : '';
		var verticalSection = vertical ? '/' + vertical : '';
		var tierSection = tier && tier !== 'all' ? '/' + tier : '';

		var filterSection = filter ? '/filter/' + filter : '';
		filterSection = filterSection.replace(/\s/g, '+');

		var url = '/themes' + verticalSection + tierSection + filterSection + siteIdSection;
		return (0, _buildUrl2.default)(url, searchString);
	},
	onTierSelect: function onTierSelect(_ref) {
		var tier = _ref.value;

		(0, _helpers.trackClick)('search bar filter', tier);
		var url = this.constructUrl({ tier: tier });
		(0, _page2.default)(url);
	},
	onUploadClick: function onUploadClick() {
		(0, _helpers.trackClick)('upload theme');
		if (this.props.atEnabled) {
			this.props.trackATUploadClick();
		}
	},
	showUploadButton: function showUploadButton() {
		var _props = this.props,
		    isMultisite = _props.isMultisite,
		    isLoggedIn = _props.isLoggedIn;


		return _config2.default.isEnabled('manage/themes/upload') && isLoggedIn && !isMultisite;
	},
	render: function render() {
		var _this = this;

		var _props2 = this.props,
		    siteId = _props2.siteId,
		    options = _props2.options,
		    getScreenshotOption = _props2.getScreenshotOption,
		    search = _props2.search,
		    filter = _props2.filter,
		    translate = _props2.translate,
		    siteSlug = _props2.siteSlug,
		    isLoggedIn = _props2.isLoggedIn,
		    pathName = _props2.pathName,
		    title = _props2.title,
		    filterString = _props2.filterString,
		    isMultisite = _props2.isMultisite;

		var tier = _config2.default.isEnabled('upgrades/premium-themes') ? this.props.tier : 'free';

		var canonicalUrl = 'https://wordpress.com' + pathName;

		var metas = [{ name: 'description', property: 'og:description', content: this.props.description }, { property: 'og:title', content: title }, { property: 'og:url', content: canonicalUrl }, { property: 'og:type', content: 'website' }, { property: 'og:site_name', content: 'WordPress.com' }];

		var links = [{ rel: 'canonical', href: canonicalUrl }];

		var headerIcons = [{
			label: 'new',
			uri: this.constructUrl({ vertical: '' }),
			icon: 'star'
		}].concat((0, _keys2.default)(this.props.subjects).map(function (subject) {
			return subjectsMeta[subject] && {
				label: subject,
				uri: _this.constructUrl({ vertical: subject }),
				icon: subjectsMeta[subject].icon,
				order: subjectsMeta[subject].order
			};
		}).filter(function (icon) {
			return !!icon;
		}).sort(function (a, b) {
			return a.order - b.order;
		}));

		// FIXME: Logged-in title should only be 'Themes'
		return _react2.default.createElement(
			_main2.default,
			{ className: 'themes' },
			_react2.default.createElement(_documentHead2.default, { title: title, meta: metas, link: links }),
			_react2.default.createElement(_pageViewTracker2.default, { path: this.props.analyticsPath, title: this.props.analyticsPageTitle }),
			!isLoggedIn && _react2.default.createElement(_subMasterbarNav2.default, {
				options: headerIcons,
				fallback: headerIcons[0],
				uri: this.constructUrl() }),
			_react2.default.createElement(
				'div',
				{ className: 'themes__content' },
				_react2.default.createElement(_queryThemeFilters2.default, null),
				_react2.default.createElement(_themesMagicSearchCard2.default, {
					onSearch: this.doSearch,
					search: filterString + search,
					tier: tier,
					showTierThemesControl: !isMultisite,
					select: this.onTierSelect }),
				this.showUploadButton() && _react2.default.createElement(
					_button2.default,
					{ className: 'themes__upload-button', compact: true, icon: true,
						onClick: this.onUploadClick,
						href: siteSlug ? '/themes/upload/' + siteSlug : '/themes/upload' },
					_react2.default.createElement(_gridicons2.default, { icon: 'cloud-upload' }),
					translate('Upload Theme')
				),
				_react2.default.createElement(_themesSelection2.default, {
					search: search,
					tier: this.props.tier,
					filter: filter,
					vertical: this.props.vertical,
					siteId: this.props.siteId,
					listLabel: this.props.listLabel,
					defaultOption: this.props.defaultOption,
					secondaryOption: this.props.secondaryOption,
					placeholderCount: this.props.placeholderCount,
					getScreenshotUrl: function getScreenshotUrl(theme) {
						if (!getScreenshotOption(theme).getUrl) {
							return null;
						}
						return getScreenshotOption(theme).getUrl(theme);
					},
					onScreenshotClick: function onScreenshotClick(theme) {
						if (!getScreenshotOption(theme).action) {
							return;
						}
						getScreenshotOption(theme).action(theme);
					},
					getActionLabel: function getActionLabel(theme) {
						return getScreenshotOption(theme).label;
					},
					getOptions: function getOptions(theme) {
						return (0, _pickBy3.default)((0, _helpers.addTracking)(options), function (option) {
							return !(option.hideForTheme && option.hideForTheme(theme, siteId));
						});
					},
					trackScrollPage: this.props.trackScrollPage,
					emptyContent: this.props.emptyContent
				}),
				_react2.default.createElement(_themePreview2.default, null),
				this.props.children
			)
		);
	}
});

var mapStateToProps = function mapStateToProps(state, _ref2) {
	var siteId = _ref2.siteId,
	    filter = _ref2.filter,
	    tier = _ref2.tier,
	    vertical = _ref2.vertical;
	return {
		isLoggedIn: !!(0, _selectors2.getCurrentUserId)(state),
		siteSlug: (0, _selectors.getSiteSlug)(state, siteId),
		description: (0, _getThemeShowcaseDescription2.default)(state, { filter: filter, tier: tier, vertical: vertical }),
		title: (0, _getThemeShowcaseTitle2.default)(state, { filter: filter, tier: tier, vertical: vertical }),
		subjects: (0, _getThemeFilterTerms2.default)(state, 'subject') || {},
		filterString: (0, _prependThemeFilterKeys2.default)(state, filter),
		filterToTermTable: (0, _getThemeFilterToTermTable2.default)(state)
	};
};

var mapDispatchToProps = {
	trackATUploadClick: function trackATUploadClick() {
		return (0, _actions.recordTracksEvent)('calypso_automated_transfer_click_theme_upload');
	}
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _i18nCalypso.localize)(ThemeShowcase));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/theme-upload/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

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

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _headerCake = __webpack_require__("./client/components/header-cake/index.jsx");

var _headerCake2 = _interopRequireDefault(_headerCake);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _uploadDropZone = __webpack_require__("./client/blocks/upload-drop-zone/index.jsx");

var _uploadDropZone2 = _interopRequireDefault(_uploadDropZone);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _progressBar = __webpack_require__("./client/components/progress-bar/index.jsx");

var _progressBar2 = _interopRequireDefault(_progressBar);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _thanksModal = __webpack_require__("./client/my-sites/themes/thanks-modal.jsx");

var _thanksModal2 = _interopRequireDefault(_thanksModal);

var _queryCanonicalTheme = __webpack_require__("./client/components/data/query-canonical-theme/index.jsx");

var _queryCanonicalTheme2 = _interopRequireDefault(_queryCanonicalTheme);

var _queryActiveTheme = __webpack_require__("./client/components/data/query-active-theme/index.jsx");

var _queryActiveTheme2 = _interopRequireDefault(_queryActiveTheme);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _notices = __webpack_require__("./client/notices/index.js");

var _notices2 = _interopRequireDefault(_notices);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _actions = __webpack_require__("./client/state/themes/actions.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/themes/upload-theme/selectors.js");

var _selectors4 = __webpack_require__("./client/state/themes/selectors.js");

var _themeOptions = __webpack_require__("./client/my-sites/themes/theme-options.js");

var _eligibilityWarnings = __webpack_require__("./client/blocks/eligibility-warnings/index.jsx");

var _eligibilityWarnings2 = _interopRequireDefault(_eligibilityWarnings);

var _jetpackManageErrorPage = __webpack_require__("./client/my-sites/jetpack-manage-error-page/index.jsx");

var _jetpackManageErrorPage2 = _interopRequireDefault(_jetpackManageErrorPage);

var _selectors5 = __webpack_require__("./client/state/themes/themes-ui/selectors.js");

var _selectors6 = __webpack_require__("./client/state/sites/plans/selectors.js");

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _queryAtatEligibility = __webpack_require__("./client/components/data/query-atat-eligibility/index.jsx");

var _queryAtatEligibility2 = _interopRequireDefault(_queryAtatEligibility);

var _selectors7 = __webpack_require__("./client/state/automated-transfer/selectors.js");

var _isSiteAutomatedTransfer = __webpack_require__("./client/state/selectors/is-site-automated-transfer.js");

var _isSiteAutomatedTransfer2 = _interopRequireDefault(_isSiteAutomatedTransfer);

var _wpadminAutoLogin = __webpack_require__("./client/components/wpadmin-auto-login/index.jsx");

var _wpadminAutoLogin2 = _interopRequireDefault(_wpadminAutoLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var debug = (0, _debug2.default)('calypso:themes:theme-upload');
// Necessary for ThanksModal

var Upload = function (_React$Component) {
	(0, _inherits3.default)(Upload, _React$Component);

	function Upload() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Upload);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Upload.__proto__ || (0, _getPrototypeOf2.default)(Upload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			showEligibility: _this.props.showEligibility
		}, _this.onProceedClick = function () {
			_this.setState({ showEligibility: false });
		}, _this.onActivateClick = function () {
			var activate = _this.props.options.activate;

			activate.action(_this.props.themeId);
		}, _this.onTryAndCustomizeClick = function () {
			var tryandcustomize = _this.props.options.tryandcustomize;

			tryandcustomize.action(_this.props.themeId);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Upload, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props,
			    siteId = _props.siteId,
			    inProgress = _props.inProgress;

			!inProgress && this.props.clearThemeUpload(siteId);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.siteId !== this.props.siteId) {
				var siteId = nextProps.siteId,
				    inProgress = nextProps.inProgress;

				!inProgress && this.props.clearThemeUpload(siteId);
			}

			if (nextProps.showEligibility !== this.props.showEligibility) {
				this.setState({ showEligibility: nextProps.showEligibility });
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			if (this.props.complete && !prevProps.complete) {
				this.successMessage();
			} else if (this.props.failed && !prevProps.failed) {
				this.failureMessage();
			}
		}
	}, {
		key: 'successMessage',
		value: function successMessage() {
			var _props2 = this.props,
			    translate = _props2.translate,
			    uploadedTheme = _props2.uploadedTheme,
			    themeId = _props2.themeId;

			_notices2.default.success(translate('Successfully uploaded theme %(name)s', {
				args: {
					// using themeId lets us show a message before theme data arrives
					name: uploadedTheme ? uploadedTheme.name : themeId
				}
			}), { duration: 5000 });
		}
	}, {
		key: 'failureMessage',
		value: function failureMessage() {
			var _props3 = this.props,
			    translate = _props3.translate,
			    error = _props3.error;


			debug('Error', { error: error });

			var errorCauses = {
				exists: translate('Upload problem: Theme already installed on site.'),
				already_installed: translate('Upload problem: Theme already installed on site.'),
				'too large': translate('Upload problem: Theme zip must be under 10MB.'),
				incompatible: translate('Upload problem: Incompatible theme.'),
				unsupported_mime_type: translate('Upload problem: Not a valid zip file'),
				initiate_failure: translate('Upload problem: Theme may not be valid. Check that your zip file contains only the theme ' + 'you are trying to upload.')
			};

			var errorString = (0, _stringify2.default)(error).toLowerCase();
			var cause = (0, _find3.default)(errorCauses, function (v, key) {
				return (0, _includes3.default)(errorString, key);
			});

			var unknownCause = error.error ? ': ' + error.error : '';
			_notices2.default.error(cause || translate('Problem uploading theme') + unknownCause);
		}
	}, {
		key: 'renderProgressBar',
		value: function renderProgressBar() {
			var _props4 = this.props,
			    translate = _props4.translate,
			    progressTotal = _props4.progressTotal,
			    progressLoaded = _props4.progressLoaded,
			    installing = _props4.installing;


			var uploadingMessage = translate('Uploading your theme…');
			var installingMessage = this.props.isJetpack ? translate('Installing your theme…') : translate('Configuring your site…');

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'span',
					{ className: 'theme-upload__title' },
					installing ? installingMessage : uploadingMessage
				),
				_react2.default.createElement(_progressBar2.default, {
					value: progressLoaded || 0,
					total: progressTotal || 100,
					title: translate('Uploading progress'),
					isPulsing: installing
				})
			);
		}
	}, {
		key: 'renderTheme',
		value: function renderTheme() {
			var _props5 = this.props,
			    theme = _props5.uploadedTheme,
			    translate = _props5.translate,
			    options = _props5.options;
			var tryandcustomize = options.tryandcustomize,
			    activate = options.activate;


			return _react2.default.createElement(
				'div',
				{ className: 'theme-upload__theme-sheet' },
				_react2.default.createElement('img', { className: 'theme-upload__screenshot', src: theme.screenshot }),
				_react2.default.createElement(
					'h2',
					{ className: 'theme-upload__theme-name' },
					theme.name
				),
				_react2.default.createElement(
					'div',
					{ className: 'theme-upload__author' },
					translate('by '),
					_react2.default.createElement(
						'a',
						{ href: theme.author_uri },
						theme.author
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'theme-upload__description' },
					theme.description
				),
				_react2.default.createElement(
					'div',
					{ className: 'theme-upload__action-buttons' },
					_react2.default.createElement(
						_button2.default,
						{ onClick: this.onTryAndCustomizeClick },
						tryandcustomize.label
					),
					_react2.default.createElement(
						_button2.default,
						{ primary: true, onClick: this.onActivateClick },
						activate.label
					)
				)
			);
		}
	}, {
		key: 'renderUploadCard',
		value: function renderUploadCard() {
			var _props6 = this.props,
			    inProgress = _props6.inProgress,
			    failed = _props6.failed,
			    uploadedTheme = _props6.uploadedTheme,
			    complete = _props6.complete,
			    isJetpack = _props6.isJetpack,
			    isBusiness = _props6.isBusiness;


			var uploadAction = isJetpack ? this.props.uploadTheme : this.props.initiateThemeTransfer;
			var disabled = !isBusiness && !isJetpack;

			return _react2.default.createElement(
				_card2.default,
				null,
				!inProgress && !complete && _react2.default.createElement(_uploadDropZone2.default, { doUpload: uploadAction, disabled: disabled }),
				inProgress && this.renderProgressBar(),
				complete && !failed && uploadedTheme && this.renderTheme(),
				complete && this.props.isSiteAutomatedTransfer && _react2.default.createElement(_wpadminAutoLogin2.default, { site: this.props.selectedSite })
			);
		}
	}, {
		key: 'renderNotAvailableForMultisite',
		value: function renderNotAvailableForMultisite() {
			return _react2.default.createElement(_emptyContent2.default, {
				title: this.props.translate('Not available for multi site'),
				line: this.props.translate('Use the WP Admin interface instead'),
				action: this.props.translate('Open WP Admin'),
				actionURL: this.props.siteAdminUrl,
				illustration: '/calypso/images/illustrations/illustration-jetpack.svg'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props7 = this.props,
			    translate = _props7.translate,
			    complete = _props7.complete,
			    siteId = _props7.siteId,
			    themeId = _props7.themeId,
			    upgradeJetpack = _props7.upgradeJetpack,
			    backPath = _props7.backPath,
			    isMultisite = _props7.isMultisite;
			var showEligibility = this.state.showEligibility;


			if (isMultisite) {
				return this.renderNotAvailableForMultisite();
			}

			return _react2.default.createElement(
				_main2.default,
				null,
				_react2.default.createElement(_queryAtatEligibility2.default, { siteId: siteId }),
				_react2.default.createElement(_queryActiveTheme2.default, { siteId: siteId }),
				themeId && complete && _react2.default.createElement(_queryCanonicalTheme2.default, { siteId: siteId, themeId: themeId }),
				_react2.default.createElement(_thanksModal2.default, { source: 'upload' }),
				_react2.default.createElement(
					_headerCake2.default,
					{ backHref: backPath },
					translate('Upload theme')
				),
				upgradeJetpack && _react2.default.createElement(_jetpackManageErrorPage2.default, {
					template: 'updateJetpack',
					siteId: siteId,
					featureExample: this.renderUploadCard(),
					version: '4.7' }),
				showEligibility && _react2.default.createElement(_eligibilityWarnings2.default, {
					backUrl: backPath,
					onProceed: this.onProceedClick }),
				!upgradeJetpack && !showEligibility && this.renderUploadCard()
			);
		}
	}]);
	return Upload;
}(_react2.default.Component);

Upload.propTypes = {
	siteId: _react2.default.PropTypes.number,
	selectedSite: _react2.default.PropTypes.object,
	inProgress: _react2.default.PropTypes.bool,
	complete: _react2.default.PropTypes.bool,
	failed: _react2.default.PropTypes.bool,
	uploadedTheme: _react2.default.PropTypes.object,
	error: _react2.default.PropTypes.object,
	progressTotal: _react2.default.PropTypes.number,
	progressLoaded: _react2.default.PropTypes.number,
	installing: _react2.default.PropTypes.bool,
	isJetpack: _react2.default.PropTypes.bool,
	upgradeJetpack: _react2.default.PropTypes.bool,
	backPath: _react2.default.PropTypes.string,
	showEligibility: _react2.default.PropTypes.bool
};


var ConnectedUpload = (0, _themeOptions.connectOptions)(Upload);

var UploadWithOptions = function UploadWithOptions(props) {
	var siteId = props.siteId,
	    uploadedTheme = props.uploadedTheme;

	return _react2.default.createElement(ConnectedUpload, (0, _extends3.default)({}, props, {
		siteId: siteId,
		theme: uploadedTheme }));
};

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var site = (0, _selectors.getSelectedSite)(state);
	var themeId = (0, _selectors3.getUploadedThemeId)(state, siteId);
	var isJetpack = (0, _selectors2.isJetpackSite)(state, siteId);

	var _getEligibility = (0, _selectors7.getEligibility)(state, siteId),
	    eligibilityHolds = _getEligibility.eligibilityHolds,
	    eligibilityWarnings = _getEligibility.eligibilityWarnings;
	// Use this selector to take advantage of eligibility card placeholders
	// before data has loaded.


	var isEligible = (0, _selectors7.isEligibleForAutomatedTransfer)(state, siteId);
	var hasEligibilityMessages = !((0, _isEmpty3.default)(eligibilityHolds) && (0, _isEmpty3.default)(eligibilityWarnings));
	return {
		siteId: siteId,
		isBusiness: (0, _selectors6.hasFeature)(state, siteId, _constants.FEATURE_UNLIMITED_PREMIUM_THEMES),
		selectedSite: site,
		isJetpack: isJetpack,
		inProgress: (0, _selectors3.isUploadInProgress)(state, siteId),
		complete: (0, _selectors3.isUploadComplete)(state, siteId),
		failed: (0, _selectors3.hasUploadFailed)(state, siteId),
		themeId: themeId,
		isMultisite: (0, _selectors2.isJetpackSiteMultiSite)(state, siteId),
		uploadedTheme: (0, _selectors4.getCanonicalTheme)(state, siteId, themeId),
		error: (0, _selectors3.getUploadError)(state, siteId),
		progressTotal: (0, _selectors3.getUploadProgressTotal)(state, siteId),
		progressLoaded: (0, _selectors3.getUploadProgressLoaded)(state, siteId),
		installing: (0, _selectors3.isInstallInProgress)(state, siteId),
		upgradeJetpack: isJetpack && !(0, _selectors2.hasJetpackSiteJetpackThemesExtendedFeatures)(state, siteId),
		backPath: (0, _selectors5.getBackPath)(state),
		showEligibility: !isJetpack && (hasEligibilityMessages || !isEligible),
		isSiteAutomatedTransfer: (0, _isSiteAutomatedTransfer2.default)(state, siteId),
		siteAdminUrl: (0, _selectors2.getSiteAdminUrl)(state, siteId)
	};
}, { uploadTheme: _actions.uploadTheme, clearThemeUpload: _actions.clearThemeUpload, initiateThemeTransfer: _actions.initiateThemeTransfer })((0, _i18nCalypso.localize)(UploadWithOptions));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/themes-magic-search-card/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _difference2 = __webpack_require__("./node_modules/lodash/difference.js");

var _difference3 = _interopRequireDefault(_difference2);

var _intersection2 = __webpack_require__("./node_modules/lodash/intersection.js");

var _intersection3 = _interopRequireDefault(_intersection2);

var _debounce2 = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce3 = _interopRequireDefault(_debounce2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactClickOutside = __webpack_require__("./node_modules/react-click-outside/dist/index.js");

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _search = __webpack_require__("./client/components/search/index.jsx");

var _search2 = _interopRequireDefault(_search);

var _segmentedControl = __webpack_require__("./client/components/segmented-control/index.jsx");

var _segmentedControl2 = _interopRequireDefault(_segmentedControl);

var _keyedSuggestions = __webpack_require__("./client/components/keyed-suggestions/index.jsx");

var _keyedSuggestions2 = _interopRequireDefault(_keyedSuggestions);

var _stickyPanel = __webpack_require__("./client/components/sticky-panel/index.jsx");

var _stickyPanel2 = _interopRequireDefault(_stickyPanel);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _welcome = __webpack_require__("./client/my-sites/themes/themes-magic-search-card/welcome.jsx");

var _welcome2 = _interopRequireDefault(_welcome);

var _getThemeFilters = __webpack_require__("./client/state/selectors/get-theme-filters.js");

var _getThemeFilters2 = _interopRequireDefault(_getThemeFilters);

var _getThemeFilterToTermTable = __webpack_require__("./client/state/selectors/get-theme-filter-to-term-table.js");

var _getThemeFilterToTermTable2 = _interopRequireDefault(_getThemeFilterToTermTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//We want those taxonomies if they are used to be presented in this order


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var preferredOrderOfTaxonomies = ['feature', 'layout', 'column', 'subject', 'style'];

var ThemesMagicSearchCard = function (_React$Component) {
	(0, _inherits3.default)(ThemesMagicSearchCard, _React$Component);

	function ThemesMagicSearchCard(props) {
		(0, _classCallCheck3.default)(this, ThemesMagicSearchCard);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ThemesMagicSearchCard.__proto__ || (0, _getPrototypeOf2.default)(ThemesMagicSearchCard)).call(this, props));

		_this.onSearchOpen = function () {
			_this.setState({ searchIsOpen: true });
		};

		_this.onSearchClose = function () {
			_this.setState({ searchIsOpen: false });
		};

		_this.onKeyDown = function (event) {
			var txt = event.target.value;
			_this.findTextForSuggestions(txt);

			var inputUpdated = false;
			//We need this logic because we are working togheter with different modules.
			//that provide suggestions to the input depending on what is currently in input
			var target = _this.state.editedSearchElement !== '' ? 'suggestions' : 'welcome';
			if (_this.refs[target]) {
				// handleKeyEvent functions return bool that infroms if suggestion was picked
				// We need that because we cannot rely on input state because it is updated
				// asynchronously and we are not able to observe what was changed during handleKeyEvent
				inputUpdated = _this.refs[target].handleKeyEvent(event);
			}

			if (event.key === 'Enter' && !inputUpdated && _this.isPreviousCharWhitespace()) {
				_this.refs['url-search'].blur();
				_this.setState({ searchIsOpen: false });
			}
		};

		_this.onClick = function (event) {
			_this.findTextForSuggestions(event.target.value);
		};

		_this.isPreviousCharWhitespace = function () {
			var _this$refs$urlSearch = _this.refs['url-search'].refs.searchInput,
			    value = _this$refs$urlSearch.value,
			    selectionStart = _this$refs$urlSearch.selectionStart;

			var cursorPosition = value.slice(0, selectionStart).length;
			return value[cursorPosition - 1] === ' ';
		};

		_this.findEditedTokenIndex = function (tokens, cursorPosition) {
			var tokenEnd = 0;
			for (var i = 0; i < tokens.length; i++) {
				tokenEnd += tokens[i].length;

				var cursorIsInsideTheToken = cursorPosition < tokenEnd;
				if (cursorIsInsideTheToken) {
					// "" indicates full suggestion request
					return i;
				}

				var cursorAtEndOfTheToken = cursorPosition === tokenEnd;
				if (cursorAtEndOfTheToken) {
					//If token is whitespace only and we are at its end
					//maybe we are at the start of next token
					var tokenIsWhiteSpace = tokens[i].trim() === '';
					//if this one is white space only next
					//next one must be text
					var moreTokensExist = i < tokens.length - 1;
					if (tokenIsWhiteSpace && moreTokensExist) {
						return i + 1;
					}
					// "" indicates full suggestion request
					return i;
				}
				continue; // to the next token
			}

			return '';
		};

		_this.findTextForSuggestions = function (input) {
			var val = input;
			window.requestAnimationFrame(function () {
				_this.setState({ cursorPosition: val.slice(0, _this.refs['url-search'].refs.searchInput.selectionStart).length });
				var tokens = input.split(/(\s+)/);

				// Get rid of empty match at end
				tokens[tokens.length - 1] === '' && tokens.splice(tokens.length - 1, 1);
				if (tokens.length === 0) {
					_this.setState({ editedSearchElement: '' });
					return;
				}
				var tokenIndex = _this.findEditedTokenIndex(tokens, _this.state.cursorPosition);
				var text = tokens[tokenIndex].trim();
				_this.setState({ editedSearchElement: text });
			});
		};

		_this.insertSuggestion = function (suggestion) {
			var tokens = _this.state.searchInput.split(/(\s+)/);
			// Get rid of empty match at end
			tokens[tokens.length - 1] === '' && tokens.splice(tokens.length - 1, 1);
			var tokenIndex = _this.findEditedTokenIndex(tokens, _this.state.cursorPosition);
			// Check if we want to add additional sapce after suggestion so next suggestions card can be opened immediately
			var hasNextTokenFirstSpace = tokens[tokenIndex + 1] && tokens[tokenIndex + 1][0] === ' ';
			tokens[tokenIndex] = hasNextTokenFirstSpace ? suggestion : suggestion + ' ';
			return tokens.join('');
		};

		_this.insertTextAtCursor = function (text) {
			var input = _this.state.searchInput;
			var position = _this.state.cursorPosition;
			return input.slice(0, position) + text + input.slice(position);
		};

		_this.onSearchChange = function (input) {
			_this.findTextForSuggestions(input);
			_this.setState({ searchInput: input });
		};

		_this.searchTokens = function (input) {
			//We are not able to scroll overlay on Edge so just create empty div
			if (global.window && /(Edge)/.test(global.window.navigator.userAgent)) {
				return _react2.default.createElement('div', null);
			}

			var tokens = input.split(/(\s+)/);

			return tokens.map(function (token, i) {
				if (token.trim() === '') {
					return _react2.default.createElement(
						'span',
						{ className: 'themes-magic-search-card__search-white-space', key: i },
						token
					); // use shortid for key
				} else if ((0, _includes3.default)(_this.props.allValidFilters, token)) {
					var separator = ':';

					var _token$split = token.split(separator),
					    _token$split2 = (0, _slicedToArray3.default)(_token$split, 2),
					    taxonomy = _token$split2[0],
					    filter = _token$split2[1];

					var themesTokenTypeClass = (0, _classnames2.default)('themes-magic-search-card__token', 'themes-magic-search-card__token-type-' + taxonomy);
					return _react2.default.createElement(
						'span',
						{ className: themesTokenTypeClass, key: i },
						_react2.default.createElement(
							'span',
							{ className: 'themes-magic-search-card__token-taxonomy' },
							taxonomy
						),
						_react2.default.createElement(
							'span',
							{ className: 'themes-magic-search-card__token-separator' },
							separator
						),
						_react2.default.createElement(
							'span',
							{ className: 'themes-magic-search-card__token-filter' },
							filter
						)
					);
				}
				return _react2.default.createElement(
					'span',
					{ className: 'themes-magic-search-card__search-text', key: i },
					token
				); // use shortid for key
			});
		};

		_this.updateInput = function (updatedInput) {
			_this.setState({ searchInput: updatedInput });
			_this.refs['url-search'].clear();
		};

		_this.suggest = function (suggestion) {
			var updatedInput = _this.insertSuggestion(suggestion);
			_this.updateInput(updatedInput);
		};

		_this.insertTextInInput = function (text) {
			var updatedInput = _this.insertTextAtCursor(text);
			_this.updateInput(updatedInput);
		};

		_this.focusOnInput = function () {
			_this.refs['url-search'].focus();
		};

		_this.clearSearch = function () {
			_this.updateInput('');
			_this.focusOnInput();
		};

		_this.handleClickInside = function () {
			_this.focusOnInput();
		};

		_this.state = {
			isMobile: (0, _viewport.isMobile)(),
			searchIsOpen: false,
			editedSearchElement: '',
			cursorPosition: 0,
			searchInput: _this.props.search
		};
		return _this;
	}

	(0, _createClass3.default)(ThemesMagicSearchCard, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			this.onResize = (0, _debounce3.default)(function () {
				_this2.setState({ isMobile: (0, _viewport.isMobile)() });
			}, 250);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.findTextForSuggestions(this.props.search);
			window.addEventListener('resize', this.onResize);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.onResize);
		}

		// Check if char before cursor in input is a space.

	}, {
		key: 'handleClickOutside',
		value: function handleClickOutside() {
			this.setState({ searchIsOpen: false });
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    filters = _props.filters,
			    showTierThemesControl = _props.showTierThemesControl;

			var isPremiumThemesEnabled = _config2.default.isEnabled('upgrades/premium-themes');

			var tiers = [{ value: 'all', label: translate('All') }, { value: 'free', label: translate('Free') }, { value: 'premium', label: translate('Premium') }];

			var filtersKeys = [].concat((0, _toConsumableArray3.default)((0, _intersection3.default)(preferredOrderOfTaxonomies, (0, _keys2.default)(filters))), (0, _toConsumableArray3.default)((0, _difference3.default)((0, _keys2.default)(filters), preferredOrderOfTaxonomies)));

			var searchField = _react2.default.createElement(_search2.default, {
				onSearch: this.props.onSearch,
				initialValue: this.state.searchInput,
				value: this.state.searchInput,
				ref: 'url-search',
				placeholder: translate('What kind of theme are you looking for?'),
				analyticsGroup: 'Themes',
				delaySearch: true,
				onSearchOpen: this.onSearchOpen,
				onSearchClose: this.onSearchClose,
				onSearchChange: this.onSearchChange,
				onKeyDown: this.onKeyDown,
				onClick: this.onClick,
				overlayStyling: this.searchTokens,
				fitsContainer: this.state.isMobile && this.state.searchIsOpen,
				hideClose: true
			});

			var magicSearchClass = (0, _classnames2.default)('themes-magic-search', {
				'has-keyed-suggestions': this.state.searchIsOpen
			});

			var themesSearchCardClass = (0, _classnames2.default)('themes-magic-search-card', {
				'has-highlight': this.state.searchIsOpen
			});

			// Check if we want to render suggestions or welcome banner
			var renderSuggestions = this.state.editedSearchElement !== '';

			return _react2.default.createElement(
				'div',
				{ className: magicSearchClass },
				_react2.default.createElement(
					_stickyPanel2.default,
					null,
					_react2.default.createElement(
						'div',
						{
							className: themesSearchCardClass,
							'data-tip-target': 'themes-search-card',
							onClick: this.handleClickInside },
						searchField,
						!(0, _viewport.isMobile)() && this.state.searchInput !== '' && _react2.default.createElement(
							'div',
							{ className: 'themes-magic-search-card__icon' },
							_react2.default.createElement(_gridicons2.default, {
								icon: 'cross',
								className: 'themes-magic-search-card__icon-close',
								tabIndex: '0',
								onClick: this.clearSearch,
								'aria-controls': 'search-component-magic-search',
								'aria-label': translate('Clear Search')
							})
						),
						isPremiumThemesEnabled && showTierThemesControl && _react2.default.createElement(_segmentedControl2.default, {
							initialSelected: this.props.tier,
							options: tiers,
							onSelect: this.props.select
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ onClick: this.handleClickInside },
					renderSuggestions && _react2.default.createElement(_keyedSuggestions2.default, {
						ref: 'suggestions',
						terms: this.props.filters,
						input: this.state.editedSearchElement,
						suggest: this.suggest
					}),
					!renderSuggestions && _react2.default.createElement(_welcome2.default, {
						ref: 'welcome',
						taxonomies: filtersKeys,
						topSearches: [],
						suggestionsCallback: this.insertTextInInput
					})
				)
			);
		}
	}]);
	return ThemesMagicSearchCard;
}(_react2.default.Component);

ThemesMagicSearchCard.propTypes = {
	showTierThemesControl: _propTypes2.default.bool
};
ThemesMagicSearchCard.defaultProps = {
	showTierThemesControl: true
};


ThemesMagicSearchCard.propTypes = {
	tier: _propTypes2.default.string,
	select: _propTypes2.default.func.isRequired,
	siteId: _propTypes2.default.number,
	onSearch: _propTypes2.default.func.isRequired,
	search: _propTypes2.default.string,
	translate: _propTypes2.default.func.isRequired
};

ThemesMagicSearchCard.defaultProps = {
	tier: 'all'
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		filters: (0, _getThemeFilters2.default)(state),
		allValidFilters: (0, _keys2.default)((0, _getThemeFilterToTermTable2.default)(state))
	};
})((0, _i18nCalypso.localize)((0, _reactClickOutside2.default)(ThemesMagicSearchCard)));
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./client/my-sites/themes/themes-magic-search-card/taxonomies-config.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.taxonomiesWelcomeWhitelist = undefined;

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

exports.taxonomyToGridicon = taxonomyToGridicon;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Taxonomies allowed in the search welcome suggestion card.
 */
/**
 * External dependencies
 */
var taxonomiesWelcomeWhitelist = exports.taxonomiesWelcomeWhitelist = ['column', 'feature', 'layout', 'subject', 'style'];

/**
 * Associates an icon to each taxonomy.
 */
var taxonomyToGridiconMap = {
	color: 'ink',
	column: 'align-justify',
	feature: 'customize',
	layout: 'layout',
	subject: 'info-outline',
	style: 'themes'
};

function taxonomyToGridicon(taxonomy) {
	return (0, _get3.default)(taxonomyToGridiconMap, taxonomy, 'tag');
}

/***/ }),

/***/ "./client/my-sites/themes/themes-magic-search-card/welcome.jsx":
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

var _intersection2 = __webpack_require__("./node_modules/lodash/intersection.js");

var _intersection3 = _interopRequireDefault(_intersection2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _taxonomiesConfig = __webpack_require__("./client/my-sites/themes/themes-magic-search-card/taxonomies-config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var MagicSearchWelcome = function (_React$Component) {
	(0, _inherits3.default)(MagicSearchWelcome, _React$Component);

	function MagicSearchWelcome(props) {
		(0, _classCallCheck3.default)(this, MagicSearchWelcome);

		var _this = (0, _possibleConstructorReturn3.default)(this, (MagicSearchWelcome.__proto__ || (0, _getPrototypeOf2.default)(MagicSearchWelcome)).call(this, props));

		_this.state = { suggestionPosition: -1 };

		_this.onMouseDown = function (event) {
			_this.props.suggestionsCallback(event.target.textContent + ':');
			event.stopPropagation();
			event.preventDefault();
		};

		_this.movePositionBy = function (moveDirection) {
			var newPosition = _this.state.suggestionPosition + moveDirection;

			// Loop around
			if (newPosition < 0) {
				newPosition = _this.visibleTaxonomies.length - 1;
			} else if (newPosition > _this.visibleTaxonomies.length - 1) {
				newPosition = 0;
			}

			_this.setState({
				suggestionPosition: newPosition
			});
		};

		_this.handleKeyEvent = function (event) {
			switch (event.key) {
				case 'ArrowDown':
					_this.movePositionBy(+1);
					event.preventDefault();
					break;
				case 'ArrowUp':
					_this.movePositionBy(-1);
					event.preventDefault();
					break;
				case 'Enter':
					var position = _this.state.suggestionPosition;
					if (position !== -1) {
						_this.props.suggestionsCallback(_this.visibleTaxonomies[position] + ':');
						event.stopPropagation();
						event.preventDefault();
						return true;
					}
					break;
			}
			return false;
		};

		_this.renderToken = function (taxonomy) {
			var themesTokenTypeClass = (0, _classnames2.default)('themes-magic-search-card__welcome-taxonomy', 'themes-magic-search-card__welcome-taxonomy-type-' + taxonomy, { 'themes-magic-search-card__welcome-taxonomy-highlight': _this.visibleTaxonomies[_this.state.suggestionPosition] === taxonomy });

			return _react2.default.createElement(
				'div',
				{
					className: themesTokenTypeClass,
					onMouseDownCapture: _this.onMouseDown,
					key: taxonomy
				},
				_react2.default.createElement(_gridicons2.default, { icon: (0, _taxonomiesConfig.taxonomyToGridicon)(taxonomy), className: 'themes-magic-search-card__welcome-taxonomy-icon', size: 18 }),
				taxonomy
			);
		};

		_this.renderTaxonomies = function () {
			var taxonomies = _this.props.taxonomies;

			_this.visibleTaxonomies = (0, _intersection3.default)(taxonomies, _taxonomiesConfig.taxonomiesWelcomeWhitelist);
			return _this.visibleTaxonomies.map(function (taxonomy) {
				return _this.renderToken(taxonomy);
			});
		};

		_this.visibleTaxonomies = [];
		return _this;
	}

	/**
  * Provides keybord support for component by managing items highlith position
  * and calling suggestion callback when user hits Enter
  *
  * @param  {Object} event  Keybord event
  * @return {Bool}          true indicates suggestion was chosen and send to parent using suggestionsCallback prop callback
  */


	(0, _createClass3.default)(MagicSearchWelcome, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'themes-magic-search-card__welcome' },
				_react2.default.createElement(
					'div',
					{ className: 'themes-magic-search-card__welcome-header' },
					_i18nCalypso2.default.translate('Search by')
				),
				_react2.default.createElement(
					'div',
					{ className: 'themes-magic-search-card__welcome-taxonomies' },
					this.renderTaxonomies()
				)
			);
		}
	}]);
	return MagicSearchWelcome;
}(_react2.default.Component); /**
                               * External dependencies
                               */


MagicSearchWelcome.propTypes = {
	taxonomies: _react.PropTypes.array,
	topSearches: _react.PropTypes.array,
	suggestionsCallback: _react.PropTypes.func
};

MagicSearchWelcome.defaultProps = {
	taxonomies: [],
	topSearches: [],
	suggestionsCallback: _noop3.default
};

exports.default = MagicSearchWelcome;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/themes-selection-header/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var ThemesSelectionHeader = function ThemesSelectionHeader(_ref) {
	var label = _ref.label,
	    count = _ref.count,
	    translate = _ref.translate;

	var selectionHeaderClassName = (0, _classnames2.default)('themes-selection-header', {
		'is-placeholder': count === null
	});

	return _react2.default.createElement(
		'div',
		{ className: selectionHeaderClassName },
		_react2.default.createElement(_sectionHeader2.default, {
			label: label || translate('WordPress.com themes'),
			count: count })
	);
};

ThemesSelectionHeader.propTypes = {
	label: _react.PropTypes.string,
	count: _react.PropTypes.number
};

exports.default = (0, _i18nCalypso.localize)(ThemesSelectionHeader);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/themes-selection.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _snakeCase2 = __webpack_require__("./node_modules/lodash/snakeCase.js");

var _snakeCase3 = _interopRequireDefault(_snakeCase2);

var _property2 = __webpack_require__("./node_modules/lodash/property.js");

var _property3 = _interopRequireDefault(_property2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _compact2 = __webpack_require__("./node_modules/lodash/compact.js");

var _compact3 = _interopRequireDefault(_compact2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _queryThemes = __webpack_require__("./client/components/data/query-themes/index.jsx");

var _queryThemes2 = _interopRequireDefault(_queryThemes);

var _themesList = __webpack_require__("./client/components/themes-list/index.jsx");

var _themesList2 = _interopRequireDefault(_themesList);

var _themesSelectionHeader = __webpack_require__("./client/my-sites/themes/themes-selection-header/index.jsx");

var _themesSelectionHeader2 = _interopRequireDefault(_themesSelectionHeader);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors3 = __webpack_require__("./client/state/themes/selectors.js");

var _actions2 = __webpack_require__("./client/state/themes/actions.js");

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _prependThemeFilterKeys = __webpack_require__("./client/state/selectors/prepend-theme-filter-keys.js");

var _prependThemeFilterKeys2 = _interopRequireDefault(_prependThemeFilterKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var ThemesSelection = function (_Component) {
	(0, _inherits3.default)(ThemesSelection, _Component);

	function ThemesSelection() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ThemesSelection);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ThemesSelection.__proto__ || (0, _getPrototypeOf2.default)(ThemesSelection)).call.apply(_ref, [this].concat(args))), _this), _this.recordSearchResultsClick = function (theme, resultsRank, action) {
			var _this$props = _this.props,
			    query = _this$props.query,
			    themes = _this$props.themes,
			    filterString = _this$props.filterString;

			var search_taxonomies = filterString;
			var search_term = search_taxonomies + (query.search || '');
			_this.props.recordTracksEvent('calypso_themeshowcase_theme_click', {
				search_term: search_term || null,
				search_taxonomies: search_taxonomies,
				theme: theme.id,
				results_rank: resultsRank + 1,
				results: themes.map((0, _property3.default)('id')).join(),
				page_number: query.page,
				theme_on_page: parseInt((resultsRank + 1) / query.number),
				action: (0, _snakeCase3.default)(action)
			});
		}, _this.onScreenshotClick = function (theme, resultsRank) {
			(0, _helpers.trackClick)('theme', 'screenshot');
			if (!_this.props.isThemeActive(theme)) {
				_this.recordSearchResultsClick(theme, resultsRank, 'screenshot_info');
			}
			_this.props.onScreenshotClick && _this.props.onScreenshotClick(theme);
		}, _this.fetchNextPage = function (options) {
			if (_this.props.isRequesting || _this.props.isLastPage) {
				return;
			}

			if (options.triggeredByScroll) {
				_this.trackScrollPage();
			}

			_this.props.incrementPage();
		}, _this.getOptions = function (themeId) {
			var options = _this.props.getOptions(themeId);
			var wrappedPreviewAction = function wrappedPreviewAction(action) {
				var defaultOption = void 0;
				var secondaryOption = _this.props.secondaryOption;
				return function (t) {
					if (!_this.props.isLoggedIn) {
						defaultOption = options.signup;
						secondaryOption = null;
					} else if (_this.props.isThemeActive(themeId)) {
						defaultOption = options.customize;
					} else if (options.purchase) {
						defaultOption = options.purchase;
					} else if (options.upgradePlan) {
						defaultOption = options.upgradePlan;
						secondaryOption = null;
					} else {
						defaultOption = options.activate;
					}
					_this.props.setThemePreviewOptions(defaultOption, secondaryOption);
					return action(t);
				};
			};

			if (options && options.preview) {
				options.preview.action = wrappedPreviewAction(options.preview.action);
			}

			return options;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ThemesSelection, [{
		key: 'trackScrollPage',
		value: function trackScrollPage() {
			this.props.recordTracksEvent('calypso_themeshowcase_scroll');
			this.props.trackScrollPage();
		}
	}, {
		key: 'trackLastPage',
		value: function trackLastPage() {
			this.props.recordGoogleEvent('Themes', 'Reached Last Page');
			this.props.recordTracksEvent('calypso_themeshowcase_last_page_scroll');
		}

		//intercept preview and add primary and secondary

	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    source = _props.source,
			    query = _props.query,
			    listLabel = _props.listLabel,
			    themesCount = _props.themesCount;


			return _react2.default.createElement(
				'div',
				{ className: 'themes__selection' },
				_react2.default.createElement(_queryThemes2.default, {
					query: query,
					siteId: source }),
				_react2.default.createElement(_themesSelectionHeader2.default, {
					label: listLabel,
					count: themesCount
				}),
				_react2.default.createElement(_themesList2.default, {
					themes: this.props.themes,
					fetchNextPage: this.fetchNextPage,
					onMoreButtonClick: this.recordSearchResultsClick,
					getButtonOptions: this.getOptions,
					onScreenshotClick: this.onScreenshotClick,
					getScreenshotUrl: this.props.getScreenshotUrl,
					getActionLabel: this.props.getActionLabel,
					isActive: this.props.isThemeActive,
					getPrice: this.props.getPremiumThemePrice,
					isInstalling: this.props.isInstallingTheme,
					loading: this.props.isRequesting,
					emptyContent: this.props.emptyContent,
					placeholderCount: this.props.placeholderCount })
			);
		}
	}]);
	return ThemesSelection;
}(_react.Component);

ThemesSelection.propTypes = {
	emptyContent: _react.PropTypes.element,
	query: _react.PropTypes.object.isRequired,
	siteId: _react.PropTypes.number,
	onScreenshotClick: _react.PropTypes.func,
	getOptions: _react.PropTypes.func,
	getActionLabel: _react.PropTypes.func,
	incrementPage: _react.PropTypes.func,
	// connected props
	source: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['wpcom', 'wporg'])]),
	themes: _react.PropTypes.array,
	themesCount: _react.PropTypes.number,
	isRequesting: _react.PropTypes.bool,
	isLastPage: _react.PropTypes.bool,
	isThemeActive: _react.PropTypes.func,
	getPremiumThemePrice: _react.PropTypes.func,
	isInstallingTheme: _react.PropTypes.func,
	placeholderCount: _react.PropTypes.number
};
ThemesSelection.defaultProps = {
	emptyContent: null,
	showUploadButton: true
};


var ConnectedThemesSelection = (0, _reactRedux.connect)(function (state, _ref2) {
	var filter = _ref2.filter,
	    page = _ref2.page,
	    search = _ref2.search,
	    tier = _ref2.tier,
	    vertical = _ref2.vertical,
	    siteId = _ref2.siteId,
	    source = _ref2.source;

	var isJetpack = (0, _selectors.isJetpackSite)(state, siteId);
	var sourceSiteId = void 0;
	if (source === 'wpcom' || source === 'wporg') {
		sourceSiteId = source;
	} else {
		sourceSiteId = siteId && isJetpack ? siteId : 'wpcom';
	}

	// number calculation is just a hack for Jetpack sites. Jetpack themes endpoint does not paginate the
	// results and sends all of the themes at once. QueryManager is not expecting such behaviour
	// and we ended up loosing all of the themes above number 20. Real solution will be pagination on
	// Jetpack themes endpoint.
	var number = !(0, _includes3.default)(['wpcom', 'wporg'], sourceSiteId) ? 2000 : 20;
	var query = {
		search: search,
		page: page,
		tier: _config2.default.isEnabled('upgrades/premium-themes') ? tier : 'free',
		filter: (0, _compact3.default)([filter, vertical]).join(','),
		number: number
	};

	return {
		query: query,
		source: sourceSiteId,
		siteSlug: (0, _selectors.getSiteSlug)(state, siteId),
		themes: (0, _selectors3.getThemesForQueryIgnoringPage)(state, sourceSiteId, query) || [],
		themesCount: (0, _selectors3.getThemesFoundForQuery)(state, sourceSiteId, query),
		isRequesting: (0, _selectors3.isRequestingThemesForQuery)(state, sourceSiteId, query),
		isLastPage: (0, _selectors3.isThemesLastPageForQuery)(state, sourceSiteId, query),
		isLoggedIn: !!(0, _selectors2.getCurrentUserId)(state),
		isThemeActive: function isThemeActive(themeId) {
			return (0, _selectors3.isThemeActive)(state, themeId, siteId);
		},
		isInstallingTheme: function isInstallingTheme(themeId) {
			return (0, _selectors3.isInstallingTheme)(state, themeId, siteId);
		},
		// Note: This component assumes that purchase and plans data is already present in the state tree
		// (used by the `isPremiumThemeAvailable` selector). That data is provided by the `<QuerySitePurchases />`
		// and `<QuerySitePlans />` components, respectively. At the time of implementation, neither of them
		// provides caching, and both are already being rendered by a parent component. So to avoid
		// redundant AJAX requests, we're not rendering these query components locally.
		getPremiumThemePrice: function getPremiumThemePrice(themeId) {
			return (0, _selectors3.getPremiumThemePrice)(state, themeId, siteId);
		},
		filterString: (0, _prependThemeFilterKeys2.default)(state, query.filter)
	};
}, { setThemePreviewOptions: _actions2.setThemePreviewOptions, recordGoogleEvent: _actions.recordGoogleEvent, recordTracksEvent: _actions.recordTracksEvent })(ThemesSelection);

/**
 * Provide page state management needed for `ThemesSelection`. We cannot store the
 * current state inside `ThemesSelection` since it is also needed in its `connect`
 * call for selectors that require the entire query object, including the page.
 */

var ThemesSelectionWithPage = function (_React$Component) {
	(0, _inherits3.default)(ThemesSelectionWithPage, _React$Component);

	function ThemesSelectionWithPage() {
		var _ref3;

		var _temp2, _this2, _ret2;

		(0, _classCallCheck3.default)(this, ThemesSelectionWithPage);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref3 = ThemesSelectionWithPage.__proto__ || (0, _getPrototypeOf2.default)(ThemesSelectionWithPage)).call.apply(_ref3, [this].concat(args))), _this2), _this2.state = {
			page: 1
		}, _this2.incrementPage = function () {
			_this2.setState({ page: _this2.state.page + 1 });
		}, _this2.resetPage = function () {
			_this2.setState({ page: 1 });
		}, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
	}

	(0, _createClass3.default)(ThemesSelectionWithPage, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.search !== this.props.search || nextProps.tier !== this.props.tier || !(0, _isEqual3.default)(nextProps.filter, this.props.filter) || !(0, _isEqual3.default)(nextProps.vertical, this.props.vertical)) {
				this.resetPage();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(ConnectedThemesSelection, (0, _extends3.default)({}, this.props, {
				page: this.state.page,
				incrementPage: this.incrementPage
			}));
		}
	}]);
	return ThemesSelectionWithPage;
}(_react2.default.Component);

exports.default = ThemesSelectionWithPage;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/themes-site-selector-modal.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _mapValues2 = __webpack_require__("./node_modules/lodash/mapValues.js");

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _defer2 = __webpack_require__("./node_modules/lodash/defer.js");

var _defer3 = _interopRequireDefault(_defer2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _theme = __webpack_require__("./client/components/theme/index.jsx");

var _theme2 = _interopRequireDefault(_theme);

var _siteSelectorModal = __webpack_require__("./client/components/site-selector-modal/index.jsx");

var _siteSelectorModal2 = _interopRequireDefault(_siteSelectorModal);

var _helpers = __webpack_require__("./client/my-sites/themes/helpers.js");

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/themes/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var OPTION_SHAPE = _react.PropTypes.shape({
	label: _react.PropTypes.string,
	header: _react.PropTypes.string,
	getUrl: _react.PropTypes.func,
	action: _react.PropTypes.func
});

/**
 * Internal dependencies
 */


var ThemesSiteSelectorModal = _react2.default.createClass({
	displayName: 'ThemesSiteSelectorModal',

	propTypes: {
		children: _react.PropTypes.element,
		options: _react.PropTypes.objectOf(OPTION_SHAPE),
		defaultOption: OPTION_SHAPE,
		secondaryOption: OPTION_SHAPE,
		// Will be prepended to site slug for a redirect on selection
		pathName: _react.PropTypes.string.isRequired,
		// connected props
		getSiteSlug: _react.PropTypes.func,
		getWpcomTheme: _react.PropTypes.func
	},

	getInitialState: function getInitialState() {
		return {
			selectedThemeId: null,
			selectedOption: null
		};
	},
	trackAndCallAction: function trackAndCallAction(siteId) {
		var action = this.state.selectedOption.action;
		var themeId = this.state.selectedThemeId;
		var search = this.props.search;

		var siteSlug = this.props.getSiteSlug(siteId);

		var redirectTarget = this.props.pathName + '/' + siteSlug;
		if (search) {
			redirectTarget += '?s=' + search;
		}

		(0, _helpers.trackClick)('site selector', this.props.name);
		(0, _page2.default)(redirectTarget);

		/**
   * Since this implies a route change, defer it in case other state
   * changes are enqueued, e.g. setselectedThemeId.
   */
		if (action) {
			(0, _defer3.default)(function () {
				action(themeId, siteId);
			});
		}
	},
	showSiteSelectorModal: function showSiteSelectorModal(option, themeId) {
		this.setState({ selectedThemeId: themeId, selectedOption: option });
	},
	hideSiteSelectorModal: function hideSiteSelectorModal() {
		this.showSiteSelectorModal(null, null);
	},


	/*
  * Wrap an option's action with a SiteSelectorModal.
  * Also, if the option has a getUrl() prop, wrap that with a SiteSelectorModal
  * but only if it also has a header, because the latter indicates it really needs
  * a site to be selected and doesn't work otherwise.
  */
	wrapOption: function wrapOption(option) {
		var _this = this;

		return (0, _assign2.default)({}, option, option.header ? { action: function action(themeId) {
				return _this.showSiteSelectorModal(option, themeId);
			} } : {}, option.getUrl && option.header ? { getUrl: null } : {});
	},
	render: function render() {
		var children = _react2.default.cloneElement(this.props.children, (0, _assign2.default)({}, (0, _omit3.default)(this.props, ['children', 'options', 'defaultOption']), {
			options: (0, _mapValues3.default)(this.props.options, this.wrapOption),
			defaultOption: this.wrapOption(this.props.defaultOption),
			secondaryOption: this.props.secondaryOption ? this.wrapOption(this.props.secondaryOption) : null
		}));

		var _state = this.state,
		    selectedOption = _state.selectedOption,
		    selectedThemeId = _state.selectedThemeId;

		var theme = this.props.getWpcomTheme(selectedThemeId);

		return _react2.default.createElement(
			'div',
			null,
			children,
			selectedOption && _react2.default.createElement(
				_siteSelectorModal2.default,
				{ className: 'themes__site-selector-modal',
					isVisible: true,
					filter: function filter(siteId) {
						return !(selectedOption.hideForTheme && selectedOption.hideForTheme(selectedThemeId, siteId));
					},
					hide: this.hideSiteSelectorModal,
					mainAction: this.trackAndCallAction,
					mainActionLabel: selectedOption.label,
					getMainUrl: selectedOption.getUrl ? function (siteId) {
						return selectedOption.getUrl(selectedThemeId, siteId);
					} : null },
				_react2.default.createElement(_theme2.default, { isActionable: false, theme: theme }),
				_react2.default.createElement(
					'h1',
					null,
					selectedOption.header
				)
			)
		);
	}
});

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		// We don't need a <QueryTheme /> component to fetch data for the theme since the
		// ThemesSiteSelectorModal will always be called from a context where those data are available.
		// FIXME: Since the siteId and themeId are part of the component's internal state, we can't use them
		// here. Instead, we have to return helper functions.
		getSiteSlug: function getSiteSlug(siteId) {
			return (0, _selectors.getSiteSlug)(state, siteId);
		},
		getWpcomTheme: function getWpcomTheme(themeId) {
			return (0, _selectors2.getTheme)(state, 'wpcom', themeId);
		}
	};
})(ThemesSiteSelectorModal);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/themes/validate-filters.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.validateFilters = validateFilters;
exports.validateVertical = validateVertical;
exports.sortFilterTerms = sortFilterTerms;

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _getThemeFilterTerm = __webpack_require__("./client/state/selectors/get-theme-filter-term.js");

var _getThemeFilterTerm2 = _interopRequireDefault(_getThemeFilterTerm);

var _isValidThemeFilterTerm = __webpack_require__("./client/state/selectors/is-valid-theme-filter-term.js");

var _isValidThemeFilterTerm2 = _interopRequireDefault(_isValidThemeFilterTerm);

var _getThemeFilterStringFromTerm = __webpack_require__("./client/state/selectors/get-theme-filter-string-from-term.js");

var _getThemeFilterStringFromTerm2 = _interopRequireDefault(_getThemeFilterStringFromTerm);

var _getThemeFilterTermFromString = __webpack_require__("./client/state/selectors/get-theme-filter-term-from-string.js");

var _getThemeFilterTermFromString2 = _interopRequireDefault(_getThemeFilterTermFromString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reorder and remove invalid filters to redirect to canonical URL


/**
 * Internal dependencies
 */
function validateFilters(context, next) {
	if (!context.params.filter) {
		return next();
	}

	// Page.js replaces + with \s
	var filterParam = context.params.filter.replace(/\s/g, '+');

	// Accept commas, which were previously used as canonical filter separators
	var validFilters = filterParam.split(/[,+]/).filter(function (term) {
		return (0, _isValidThemeFilterTerm2.default)(context.store.getState(), term);
	});
	var sortedValidFilters = sortFilterTerms(context, validFilters).join('+');

	if (sortedValidFilters !== filterParam) {
		var path = context.path;
		var newPath = path.replace('/filter/' + filterParam, sortedValidFilters ? '/filter/' + sortedValidFilters : '');
		if (context.isServerSide) {
			return context.res.redirect(newPath);
		}
		return _page2.default.redirect(newPath);
	}

	next();
} /**
   * External dependencies
   */
function validateVertical(context, next) {
	var vertical = context.params.vertical;
	var store = context.store;


	if (!vertical) {
		return next();
	}

	if (!(0, _getThemeFilterTerm2.default)(store.getState(), 'subject', vertical)) {
		if (context.isServerSide) {
			return next('route');
		}
		// Client-side: Terminate routing, rely on server-side rendered markup.
		return;
	}

	next();
}

/**
 * Return a sorted array of filter terms.
 *
 * Sort is alphabetical on the complete "taxonomy:term" string.
 *
 * Supplied terms that belong to more than one taxonomy must be
 * prefixed taxonomy:term. Returned terms will
 * keep this prefix.
 *
 * @param {Object} context Routing context
 * @param {array} terms Array of term strings
 * @return {array} Sorted array
 */
function sortFilterTerms(context, terms) {
	return terms.map(function (term) {
		return (0, _getThemeFilterStringFromTerm2.default)(context.store.getState(), term);
	}).sort().map(function (filter) {
		return (0, _getThemeFilterTermFromString2.default)(context.store.getState(), filter);
	});
}

/***/ }),

/***/ "./client/state/purchases/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.removePurchase = exports.fetchUserPurchases = exports.fetchSitePurchases = exports.clearPurchases = exports.cancelPrivacyProtection = undefined;

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _olark = __webpack_require__("./client/lib/olark/index.js");

var _olark2 = _interopRequireDefault(_olark);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// External dependencies
var wpcom = _wp2.default.undocumented();

// Internal dependencies


var PURCHASES_FETCH_ERROR_MESSAGE = _i18nCalypso2.default.translate('There was an error retrieving purchases.');
var PURCHASE_REMOVE_ERROR_MESSAGE = _i18nCalypso2.default.translate('There was an error removing the purchase.');

var cancelPrivacyProtection = exports.cancelPrivacyProtection = function cancelPrivacyProtection(purchaseId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PRIVACY_PROTECTION_CANCEL,
			purchaseId: purchaseId
		});

		return new _promise2.default(function (resolve, reject) {
			wpcom.cancelPrivacyProtection(purchaseId, function (error, data) {
				error ? reject(error) : resolve(data);
			});
		}).then(function (data) {
			dispatch({
				type: _actionTypes.PRIVACY_PROTECTION_CANCEL_COMPLETED,
				purchase: data.upgrade
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.PRIVACY_PROTECTION_CANCEL_FAILED,
				purchaseId: purchaseId,
				error: error.message || _i18nCalypso2.default.translate('There was a problem canceling this privacy protection. ' + 'Please try again later or contact support.')
			});
		});
	};
};

var clearPurchases = exports.clearPurchases = function clearPurchases() {
	// TODO: we should call this olark method elsewhere, so that this
	// action creator doesn't have side effects.
	_olark2.default.updateOlarkGroupAndEligibility();

	return {
		type: _actionTypes.PURCHASES_REMOVE
	};
};

var fetchSitePurchases = exports.fetchSitePurchases = function fetchSitePurchases(siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PURCHASES_SITE_FETCH,
			siteId: siteId
		});

		return new _promise2.default(function (resolve, reject) {
			wpcom.sitePurchases(siteId, function (error, data) {
				error ? reject(error) : resolve(data);
			});
		}).then(function (data) {
			dispatch({
				type: _actionTypes.PURCHASES_SITE_FETCH_COMPLETED,
				siteId: siteId,
				purchases: data
			});
		}).catch(function () {
			dispatch({
				type: _actionTypes.PURCHASES_SITE_FETCH_FAILED,
				error: PURCHASES_FETCH_ERROR_MESSAGE
			});
		});
	};
};

var fetchUserPurchases = exports.fetchUserPurchases = function fetchUserPurchases(userId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PURCHASES_USER_FETCH
		});

		return new _promise2.default(function (resolve, reject) {
			wpcom.me().purchases(function (error, data) {
				error ? reject(error) : resolve(data);
			});
		}).then(function (data) {
			dispatch({
				type: _actionTypes.PURCHASES_USER_FETCH_COMPLETED,
				purchases: data,
				userId: userId
			});
		}).catch(function () {
			dispatch({
				type: _actionTypes.PURCHASES_USER_FETCH_FAILED,
				error: PURCHASES_FETCH_ERROR_MESSAGE
			});
		});
	};
};

var removePurchase = exports.removePurchase = function removePurchase(purchaseId, userId) {
	return function (dispatch) {
		return new _promise2.default(function (resolve, reject) {
			wpcom.me().deletePurchase(purchaseId, function (error, data) {
				error ? reject(error) : resolve(data);
			});
		}).then(function (data) {
			dispatch({
				type: _actionTypes.PURCHASE_REMOVE_COMPLETED,
				purchases: data.purchases,
				userId: userId
			});

			_olark2.default.updateOlarkGroupAndEligibility();
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.PURCHASE_REMOVE_FAILED,
				error: error.message || PURCHASE_REMOVE_ERROR_MESSAGE
			});
		});
	};
};

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

/***/ "./client/state/themes/themes-ui/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

exports.getBackPath = getBackPath;

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns destination for theme sheet 'back' button
function getBackPath(state) {
	var backPath = state.themes.themesUI.backPath;
	var siteSlug = (0, _selectors.getSelectedSiteSlug)(state);

	if (!siteSlug || (0, _includes3.default)(backPath, siteSlug)) {
		return backPath;
	}
	return '/themes/' + siteSlug;
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

/***/ }),

/***/ "./client/state/themes/upload-theme/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

exports.isUploadInProgress = isUploadInProgress;
exports.isUploadComplete = isUploadComplete;
exports.hasUploadFailed = hasUploadFailed;
exports.getUploadedThemeId = getUploadedThemeId;
exports.getUploadError = getUploadError;
exports.getUploadProgressTotal = getUploadProgressTotal;
exports.getUploadProgressLoaded = getUploadProgressLoaded;
exports.isInstallInProgress = isInstallInProgress;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if a theme upload is in progress.
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {Boolean} -- True if upload is in progress
 */
/**
 * External dependencies
 */
function isUploadInProgress(state, siteId) {
  return (0, _get3.default)(state.themes.uploadTheme.inProgress, siteId, false);
}

/**
 * Returns true if a theme upload has finished successfully.
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {Boolean} -- True if upload has completed
 */
function isUploadComplete(state, siteId) {
  return !!(!isUploadInProgress(state, siteId) && getUploadedThemeId(state, siteId));
}

/**
 * Returns true if a theme upload has failed
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {Boolean} -- True if upload has failed
 */
function hasUploadFailed(state, siteId) {
  return !!(0, _get3.default)(state.themes.uploadTheme.uploadError, siteId, false);
}

/**
 * Returns the ID of a successfully uploaded theme.
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {?string} -- Uploaded theme ID
 */
function getUploadedThemeId(state, siteId) {
  var themeId = (0, _get3.default)(state.themes.uploadTheme.uploadedThemeId, siteId);
  // When wpcom themes are uploaded, we will not be able to retrieve details
  // from the site, since we filter out all wpcom themes. Remove the suffix
  // so we can use details from wpcom.
  if (themeId) {
    return themeId.replace(/-wpcom$/, '');
  }
  return null;
}

/**
 * Returns the error for a failed theme upload.
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {?Object} -- Error details
 */
function getUploadError(state, siteId) {
  return (0, _get3.default)(state.themes.uploadTheme.uploadError, siteId);
}

/**
 * Returns the total size of a theme to be uploaded.
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {?Number} -- Total
 */
function getUploadProgressTotal(state, siteId) {
  return (0, _get3.default)(state.themes.uploadTheme.progressTotal, siteId);
}

/**
 * Returns the amount of theme currently uploaded. Compare
 * with the total.
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {?Number} -- Loaded
 */
function getUploadProgressLoaded(state, siteId) {
  return (0, _get3.default)(state.themes.uploadTheme.progressLoaded, siteId);
}

/**
 * Returns true if the upload of a theme has completed but the
 * theme installation on the target site has not yet finished.
 *
 * @param {Object} state -- Global state tree
 * @param {Number} siteId -- Site ID
 * @return {Boolean} -- True install is in progress
 */
function isInstallInProgress(state, siteId) {
  return getUploadProgressTotal(state, siteId) === getUploadProgressLoaded(state, siteId);
}

/***/ }),

/***/ "./client/state/ui/drop-zone/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showDropZone = showDropZone;
exports.hideDropZone = hideDropZone;

var _actionTypes = __webpack_require__("./client/state/action-types.js");

/**
 * Fired when a DropZone gets shown
 *
 * @param {String} dropZoneName The Drop Zone being shown
 *
 * @returns {Object} Redux action
 */
function showDropZone() {
  var dropZoneName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  return {
    type: _actionTypes.DROPZONE_SHOW,
    dropZoneName: dropZoneName
  };
}

/**
 * Fired when a DropZone gets hidden
 *
 * @param {String} dropZoneName The Drop Zone being hidden
 *
 * @returns {Object} Redux action
 */
/**
 * Internal dependencies
 */
function hideDropZone(dropZoneName) {
  return {
    type: _actionTypes.DROPZONE_HIDE,
    dropZoneName: dropZoneName
  };
}

/***/ }),

/***/ "./client/state/ui/olark/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.olarkTimeout = olarkTimeout;
exports.olarkReady = olarkReady;
exports.operatorsAvailable = operatorsAvailable;
exports.operatorsAway = operatorsAway;
exports.setChatAvailability = setChatAvailability;
exports.requestOlark = requestOlark;

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action object to be used in signalling that olark did not load
 * iin a timely manner
 *
 * @return {Object}              Action object
 */
function olarkTimeout() {
	return {
		type: _actionTypes.OLARK_TIMEOUT
	};
}

/**
 * Returns an action object to be used in signalling that olark is ready
 *
 * @return {Object}              Action object
 */
/**
 * Internal dependencies
 */
function olarkReady() {
	return {
		type: _actionTypes.OLARK_READY
	};
}

/**
 * Returns an action object to be used in signalling that olark operators are available
 *
 * @return {Object}              Action object
 */
function operatorsAvailable() {
	return {
		type: _actionTypes.OLARK_OPERATORS_AVAILABLE
	};
}

/**
 * Returns an action object to be used in signalling that olark operators are away
 *
 * @return {Object}              Action object
 */
function operatorsAway() {
	return {
		type: _actionTypes.OLARK_OPERATORS_AWAY
	};
}

/**
 * Returns an action object to be used in setting general chat availability
 * @param {object} availability  An object containing the availibility of different areas for chat
 * @return {Object}              Action object
 */
function setChatAvailability(availability) {
	return {
		type: _actionTypes.OLARK_SET_AVAILABILITY,
		availability: availability
	};
}

/**
 * Sets up a timeout to see if olark has loaded properly
 * @returns {Function}        Action thunk
 */
function requestOlark() {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.OLARK_REQUEST
		});
		return new _promise2.default(function (resolve) {
			dispatch(olarkTimeout());
			resolve();
		});
	};
}

/***/ }),

/***/ "./node_modules/component-file-picker/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module Dependencies
 */

var event = __webpack_require__("./node_modules/component-event/index.js");

/**
 * Expose `FilePicker`
 */

module.exports = FilePicker;

/**
 * Input template
 */

var form = document.createElement('form');
form.innerHTML = '<input type="file" style="top: -1000px; position: absolute" aria-hidden="true">';
document.body.appendChild(form);
var input = form.childNodes[0];

/**
 * Already bound
 */

var bound = false;

/**
 * Opens a file picker dialog.
 *
 * @param {Object} options (optional)
 * @param {Function} fn callback function
 * @api public
 */

function FilePicker(opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  opts = opts || {};

  // multiple files support
  input.multiple = !!opts.multiple;

  // directory support
  input.webkitdirectory = input.mozdirectory = input.directory = !!opts.directory;

  // accepted file types support
  if (null == opts.accept) {
    delete input.accept;
  } else if (opts.accept.join) {
    // got an array
    input.accept = opts.accept.join(',');
  } else if (opts.accept) {
    // got a regular string
    input.accept = opts.accept;
  }

  // listen to change event (unbind old one if already listening)
  if (bound) event.unbind(input, 'change', bound);
  event.bind(input, 'change', onchange);
  bound = onchange;

  function onchange(e) {
    fn(input.files, e, input);
    event.unbind(input, 'change', onchange);
    bound = false;
  }

  // reset the form
  form.reset();

  // trigger input dialog
  input.click();
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