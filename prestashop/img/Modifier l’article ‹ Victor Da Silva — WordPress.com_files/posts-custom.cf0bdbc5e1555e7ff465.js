webpackJsonp(["posts-custom"],{

/***/ "./client/blocks/calendar-button/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _asyncLoad = __webpack_require__("./client/components/async-load/index.jsx");

var _asyncLoad2 = _interopRequireDefault(_asyncLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var _ref2 = function _ref2(callback) {
	__webpack_require__.e/* require.ensure */("async-load-blocks-calendar-popover").then((function (require) {
		callback(__webpack_require__("./client/blocks/calendar-popover/index.jsx").__esModule ? __webpack_require__("./client/blocks/calendar-popover/index.jsx").default : __webpack_require__("./client/blocks/calendar-popover/index.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}; /**
    * External dependencies
    */


var CalendarButton = function (_Component) {
	(0, _inherits3.default)(CalendarButton, _Component);

	function CalendarButton() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CalendarButton);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CalendarButton.__proto__ || (0, _getPrototypeOf2.default)(CalendarButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = { showPopover: false }, _this.setDate = function (date) {
			_this.setState({ date: date });
			_this.props.onDateChange(date);
		}, _this.closePopover = function () {
			_this.setState({ showPopover: false });
			_this.props.onClose();
		}, _this.togglePopover = function () {
			if (_this.props.disabled) {
				return null;
			}

			return _this.setState({ showPopover: !_this.state.showPopover });
		}, _this.setPopoverReference = function (calendarButtonRef) {
			return _this.reference = calendarButtonRef;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CalendarButton, [{
		key: 'renderCalendarPopover',
		value: function renderCalendarPopover() {
			var showPopover = this.state.showPopover;


			if (!showPopover) {
				return null;
			}

			var calendarProperties = (0, _assign2.default)({}, (0, _pick3.default)(this.props, ['autoPosition', 'closeOnEsc', 'disabledDays', 'events', 'enableOutsideDays', 'ignoreContext', 'isVisible', 'modifiers', 'rootClassName', 'selectedDay', 'showDelay', 'siteId', 'onDateChange', 'onMonthChange', 'onDayMouseEnter', 'onDayMouseLeave', 'onShow', 'onClose']));

			return _react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({}, calendarProperties, {
				require: _ref2,

				context: this.reference,
				isVisible: showPopover,
				position: this.props.popoverPosition,
				onClose: this.closePopover
			}));
		}
	}, {
		key: 'renderCalendarContent',
		value: function renderCalendarContent() {
			return this.props.children ? this.props.children : _react2.default.createElement(_gridicons2.default, { icon: this.props.icon });
		}
	}, {
		key: 'render',
		value: function render() {
			var buttonsProperties = (0, _assign2.default)({}, (0, _pick3.default)(this.props, ['compact', 'disabled', 'primary', 'scary', 'busy', 'href', 'borderless', 'target', 'rel']));

			return _react2.default.createElement(
				_button2.default,
				(0, _extends3.default)({}, buttonsProperties, {
					className: (0, _classnames2.default)('calendar-button', this.props.className),
					ref: this.setPopoverReference,
					onClick: this.togglePopover
				}),
				this.renderCalendarContent(),
				this.renderCalendarPopover()
			);
		}
	}]);
	return CalendarButton;
}(_react.Component);

CalendarButton.propTypes = {
	children: _react.PropTypes.element,
	icon: _react.PropTypes.string,
	popoverPosition: _react.PropTypes.string,
	type: _react.PropTypes.string,

	// calendar-popover properties
	autoPosition: _react.PropTypes.bool,
	closeOnEsc: _react.PropTypes.bool,
	disabledDays: _react.PropTypes.array,
	events: _react.PropTypes.array,
	ignoreContext: _react.PropTypes.shape({ getDOMNode: _react2.default.PropTypes.function }),
	isVisible: _react.PropTypes.bool,
	rootClassName: _react.PropTypes.string,
	selectedDay: _react.PropTypes.object,
	showDelay: _react.PropTypes.number,
	siteId: _react.PropTypes.number,

	onClose: _react.PropTypes.func,
	onDateChange: _react.PropTypes.func,
	onDayMouseEnter: _react.PropTypes.func,
	onDayMouseLeave: _react.PropTypes.func,
	onMonthChange: _react.PropTypes.func,
	onShow: _react.PropTypes.func
};
CalendarButton.defaultProps = {
	icon: 'calendar',
	type: 'button',
	popoverPosition: 'bottom',
	onDateChange: _noop3.default,
	onDayMouseEnter: _noop3.default,
	onDayMouseLeave: _noop3.default,
	onClose: _noop3.default
};
exports.default = CalendarButton;
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/post-item/index.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _config = __webpack_require__("./client/config/index.js");

var _selectors = __webpack_require__("./client/state/ui/editor/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/posts/selectors.js");

var _selectors4 = __webpack_require__("./client/state/sites/selectors.js");

var _areAllSitesSingleUser = __webpack_require__("./client/state/selectors/are-all-sites-single-user.js");

var _areAllSitesSingleUser2 = _interopRequireDefault(_areAllSitesSingleUser);

var _selectors5 = __webpack_require__("./client/state/ui/post-type-list/selectors.js");

var _actions = __webpack_require__("./client/state/ui/post-type-list/actions.js");

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _postTime = __webpack_require__("./client/blocks/post-time/index.jsx");

var _postTime2 = _interopRequireDefault(_postTime);

var _postStatus = __webpack_require__("./client/blocks/post-status/index.jsx");

var _postStatus2 = _interopRequireDefault(_postStatus);

var _postShare = __webpack_require__("./client/blocks/post-share/index.jsx");

var _postShare2 = _interopRequireDefault(_postShare);

var _postThumbnail = __webpack_require__("./client/my-sites/post-type-list/post-thumbnail.jsx");

var _postThumbnail2 = _interopRequireDefault(_postThumbnail);

var _postActionsEllipsisMenu = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/index.jsx");

var _postActionsEllipsisMenu2 = _interopRequireDefault(_postActionsEllipsisMenu);

var _postTypeSiteInfo = __webpack_require__("./client/my-sites/post-type-list/post-type-site-info/index.jsx");

var _postTypeSiteInfo2 = _interopRequireDefault(_postTypeSiteInfo);

var _postTypePostAuthor = __webpack_require__("./client/my-sites/post-type-list/post-type-post-author/index.jsx");

var _postTypePostAuthor2 = _interopRequireDefault(_postTypePostAuthor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var PostItem = function (_React$Component) {
	(0, _inherits3.default)(PostItem, _React$Component);

	function PostItem() {
		(0, _classCallCheck3.default)(this, PostItem);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostItem.__proto__ || (0, _getPrototypeOf2.default)(PostItem)).apply(this, arguments));

		_this.setDomNode = function (node) {
			_this.node = node;
		};

		_this.handleHeightChange = function () {
			if (!_this.node) {
				return;
			}

			var style = window.getComputedStyle(_this.node);
			var nodeHeight = _this.node.clientHeight + parseInt(style.marginTop, 10) + parseInt(style.marginBottom, 10);

			if (nodeHeight && nodeHeight !== _this.nodeHeight) {
				_this.nodeHeight = nodeHeight;
				_this.props.onHeightChange({ nodeHeight: nodeHeight, globalId: _this.props.globalId });
			}
		};

		_this.hideCurrentSharePanel = function () {
			_this.props.hideSharePanel(_this.props.globalId);
		};

		_this.node = null;
		_this.nodeHeight = 0;
		_this.hasVariableHeightContent = false;
		return _this;
	}

	(0, _createClass3.default)(PostItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.manageMutationObserver();
			if (this.props.wrapTitle) {
				// Wait for repaint, which may include wrapping the title onto
				// multiple lines, then update height if needed
				// `requestAnimationFrame` is not enough here...
				window.setTimeout(this.handleHeightChange);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			this.manageMutationObserver();
			if (this.props.windowWidth !== prevProps.windowWidth) {
				this.handleHeightChange();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.disconnectMutationObserver();
		}
	}, {
		key: 'manageMutationObserver',
		value: function manageMutationObserver() {
			if (this.hasVariableHeightContent && !this.observer) {
				// Post item has expanded content but didn't previously (or is
				// newly mounted with expanded content).  Watch for further height
				// changes and update current height.
				this.connectMutationObserver();
				this.handleHeightChange();
			} else if (!this.hasVariableHeightContent && this.observer) {
				// Post item had expanded content previously but not any more.
				// Stop watching for height changes and update current height.
				this.disconnectMutationObserver();
				this.handleHeightChange();
			}
		}
	}, {
		key: 'connectMutationObserver',
		value: function connectMutationObserver() {
			if (this.observer || !this.node) {
				return;
			}
			this.observer = new window.MutationObserver(this.handleHeightChange);
			this.observer.observe(this.node, {
				childList: true,
				subtree: true
			});
		}
	}, {
		key: 'disconnectMutationObserver',
		value: function disconnectMutationObserver() {
			if (!this.observer) {
				return;
			}
			this.observer.disconnect();
			delete this.observer;
		}
	}, {
		key: 'inAllSitesModeWithMultipleUsers',
		value: function inAllSitesModeWithMultipleUsers() {
			return this.props.isAllSitesModeSelected && !this.props.allSitesSingleUser && !this.props.singleUserQuery;
		}
	}, {
		key: 'inSingleSiteModeWithMultipleUsers',
		value: function inSingleSiteModeWithMultipleUsers() {
			return !this.props.isAllSitesModeSelected && !this.props.singleUserSite && !this.props.singleUserQuery;
		}
	}, {
		key: 'hasMultipleUsers',
		value: function hasMultipleUsers() {
			return this.inAllSitesModeWithMultipleUsers() || this.inSingleSiteModeWithMultipleUsers();
		}
	}, {
		key: 'renderVariableHeightContent',
		value: function renderVariableHeightContent() {
			var _props = this.props,
			    post = _props.post,
			    isCurrentSharePanelOpen = _props.isCurrentSharePanelOpen;


			if (!post || !isCurrentSharePanelOpen) {
				return null;
			}

			return _react2.default.createElement(_postShare2.default, {
				post: post,
				siteId: post.site_ID,
				showClose: true,
				onClose: this.hideCurrentSharePanel
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    className = _props2.className,
			    post = _props2.post,
			    globalId = _props2.globalId,
			    isAllSitesModeSelected = _props2.isAllSitesModeSelected,
			    compact = _props2.compact,
			    editUrl = _props2.editUrl,
			    translate = _props2.translate,
			    largeTitle = _props2.largeTitle,
			    wrapTitle = _props2.wrapTitle;


			var title = post ? post.title : null;

			var cardClasses = (0, _classnames2.default)('post-item__card', className, {
				'is-untitled': !title,
				'is-mini': compact,
				'is-placeholder': !globalId,
				'has-large-title': largeTitle,
				'has-wrapped-title': wrapTitle
			});

			var isSiteInfoVisible = (0, _config.isEnabled)('posts/post-type-list') && isAllSitesModeSelected;

			var isAuthorVisible = (0, _config.isEnabled)('posts/post-type-list') && this.hasMultipleUsers() && !compact && post && post.author;

			var variableHeightContent = this.renderVariableHeightContent();
			this.hasVariableHeightContent = !!variableHeightContent;

			var rootClasses = (0, _classnames2.default)('post-item', {
				'is-expanded': this.hasVariableHeightContent
			});

			return _react2.default.createElement(
				'div',
				{
					className: rootClasses,
					ref: this.setDomNode
				},
				_react2.default.createElement(
					_card2.default,
					{ compact: true, className: cardClasses },
					_react2.default.createElement(
						'div',
						{ className: 'post-item__detail' },
						_react2.default.createElement(
							'div',
							{ className: 'post-item__info' },
							isSiteInfoVisible && _react2.default.createElement(_postTypeSiteInfo2.default, { globalId: globalId }),
							isAuthorVisible && _react2.default.createElement(_postTypePostAuthor2.default, { globalId: globalId })
						),
						_react2.default.createElement(
							'h1',
							{ className: 'post-item__title' },
							_react2.default.createElement(
								'a',
								{ href: editUrl, className: 'post-item__title-link' },
								title || translate('Untitled')
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'post-item__meta' },
							_react2.default.createElement(_postTime2.default, { globalId: globalId }),
							_react2.default.createElement(_postStatus2.default, { globalId: globalId })
						)
					),
					_react2.default.createElement(_postThumbnail2.default, { globalId: globalId }),
					_react2.default.createElement(_postActionsEllipsisMenu2.default, { globalId: globalId })
				),
				variableHeightContent
			);
		}
	}]);
	return PostItem;
}(_react2.default.Component); /**
                               * External dependencies
                               */


PostItem.defaultProps = {
	onHeightChange: _noop3.default
};


PostItem.propTypes = {
	translate: _propTypes2.default.func,
	globalId: _propTypes2.default.string,
	editUrl: _propTypes2.default.string,
	post: _propTypes2.default.object,
	isAllSitesModeSelected: _propTypes2.default.bool,
	allSitesSingleUser: _propTypes2.default.bool,
	singleUserSite: _propTypes2.default.bool,
	singleUserQuery: _propTypes2.default.bool,
	className: _propTypes2.default.string,
	compact: _propTypes2.default.bool,
	onHeightChange: _propTypes2.default.func,
	isCurrentSharePanelOpen: _propTypes2.default.bool,
	hideSharePanel: _propTypes2.default.func,
	largeTitle: _propTypes2.default.bool,
	wrapTitle: _propTypes2.default.bool,
	windowWidth: _propTypes2.default.number
};

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var globalId = _ref.globalId;

	var post = (0, _selectors3.getNormalizedPost)(state, globalId);
	if (!post) {
		return {};
	}

	var siteId = post.site_ID;

	return {
		post: post,
		isAllSitesModeSelected: (0, _selectors2.getSelectedSiteId)(state) === null,
		allSitesSingleUser: (0, _areAllSitesSingleUser2.default)(state),
		singleUserSite: (0, _selectors4.isSingleUserSite)(state, siteId),
		editUrl: (0, _selectors.getEditorPath)(state, siteId, post.ID),
		isCurrentSharePanelOpen: (0, _selectors5.isSharePanelOpen)(state, globalId)
	};
}, {
	hideSharePanel: _actions.hideSharePanel
})((0, _i18nCalypso.localize)(PostItem));
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/post-share/connection.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _cssSafeUrl = __webpack_require__("./client/lib/css-safe-url/index.js");

var _cssSafeUrl2 = _interopRequireDefault(_cssSafeUrl);

var _compact = __webpack_require__("./client/components/forms/form-toggle/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _socialLogos = __webpack_require__("./node_modules/social-logos/build/index.js");

var _socialLogos2 = _interopRequireDefault(_socialLogos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostShareConnection = function PostShareConnection(_ref) {
	var _classNames;

	var connection = _ref.connection,
	    isActive = _ref.isActive,
	    onToggle = _ref.onToggle;
	var external_display = connection.external_display,
	    external_profile_picture = connection.external_profile_picture,
	    keyring_connection_ID = connection.keyring_connection_ID,
	    service = connection.service;


	var toggle = function toggle() {
		return onToggle(keyring_connection_ID);
	};

	var classes = (0, _classnames2.default)((_classNames = {
		'post-share__service': true
	}, (0, _defineProperty3.default)(_classNames, service, true), (0, _defineProperty3.default)(_classNames, 'is-active', isActive), (0, _defineProperty3.default)(_classNames, 'is-broken', status === 'broken'), _classNames));

	var accountImageStyle = {};
	if (external_profile_picture) {
		accountImageStyle.backgroundImage = 'url( ' + (0, _cssSafeUrl2.default)(external_profile_picture) + ' )';
	} else {
		// Display a solid color circle: lighten( $gray, 10% )
		accountImageStyle.backgroundColor = 'rgb( 168, 190, 206 )';
	}

	return _react2.default.createElement(
		'div',
		{ onClick: toggle, className: classes },
		_react2.default.createElement(
			'div',
			{
				className: 'post-share__service-account-image',
				style: accountImageStyle
			},
			'\xA0'
		),
		_react2.default.createElement(
			'div',
			{ className: 'post-share__service-account-social-logo' },
			_react2.default.createElement(_socialLogos2.default, { icon: service === 'google_plus' ? 'google-plus' : service })
		),
		_react2.default.createElement(
			'div',
			{ className: 'post-share__service-account-name' },
			_react2.default.createElement(
				'span',
				null,
				external_display
			)
		),
		_react2.default.createElement(_compact2.default, { checked: isActive })
	);
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
exports.default = PostShareConnection;
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/post-share/connections-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NoConnectionsNotice = undefined;

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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _connection = __webpack_require__("./client/blocks/post-share/connection.jsx");

var _connection2 = _interopRequireDefault(_connection);

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _noticeAction = __webpack_require__("./client/components/notice/notice-action.jsx");

var _noticeAction2 = _interopRequireDefault(_noticeAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectionsList = function (_PureComponent) {
	(0, _inherits3.default)(ConnectionsList, _PureComponent);

	function ConnectionsList() {
		(0, _classCallCheck3.default)(this, ConnectionsList);
		return (0, _possibleConstructorReturn3.default)(this, (ConnectionsList.__proto__ || (0, _getPrototypeOf2.default)(ConnectionsList)).apply(this, arguments));
	}

	(0, _createClass3.default)(ConnectionsList, [{
		key: 'renderEmptyPlaceholder',
		value: function renderEmptyPlaceholder() {
			return _react2.default.createElement(
				'div',
				{ className: 'post-share__main' },
				_react2.default.createElement('div', { className: 'post-share__form is-placeholder' }),
				_react2.default.createElement('div', { className: 'post-share__services is-placeholder' })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    connections = _props.connections,
			    onToggle = _props.onToggle,
			    siteId = _props.siteId;


			if (!siteId || !connections.length) {
				return null;
			}

			if (!this.props.hasFetchedConnections) {
				return this.renderEmptyPlaceholder();
			}

			return _react2.default.createElement(
				'div',
				{ className: 'post-share__connections' },
				connections.map(function (connection) {
					return _react2.default.createElement(_connection2.default, {
						connection: connection,
						onToggle: onToggle,
						isActive: connection.isActive,
						key: connection.keyring_connection_ID
					});
				})
			);
		}
	}]);
	return ConnectionsList;
}(_react.PureComponent);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


ConnectionsList.propTypes = {
	connections: _react.PropTypes.array,
	onToggle: _react.PropTypes.func,
	siteId: _react.PropTypes.number,
	siteSlug: _react.PropTypes.string,

	// connects and helpers
	moment: _react.PropTypes.func,
	numberFormat: _react.PropTypes.func,
	translater: _react.PropTypes.func
};
ConnectionsList.defaultProps = {
	connections: []
};
var NoConnectionsNotice = exports.NoConnectionsNotice = function NoConnectionsNotice(_ref) {
	var siteSlug = _ref.siteSlug,
	    translate = _ref.translate;
	return _react2.default.createElement(
		_notice2.default,
		{
			status: 'is-warning',
			showDismiss: false,
			text: translate('Connect an account to get started.')
		},
		_react2.default.createElement(
			_noticeAction2.default,
			{ href: '/sharing/' + siteSlug },
			translate('Settings')
		)
	);
};

exports.default = (0, _i18nCalypso.localize)(ConnectionsList);

/***/ }),

/***/ "./client/blocks/post-share/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SCHEDULED = exports.SCHEDULED = 'scheduled';
var PUBLISHED = exports.PUBLISHED = 'published';

/***/ }),

/***/ "./client/blocks/post-share/index.jsx":
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

var _concat2 = __webpack_require__("./node_modules/lodash/concat.js");

var _concat3 = _interopRequireDefault(_concat2);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _config = __webpack_require__("./client/config/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _queryPostTypes = __webpack_require__("./client/components/data/query-post-types/index.jsx");

var _queryPostTypes2 = _interopRequireDefault(_queryPostTypes);

var _queryPosts = __webpack_require__("./client/components/data/query-posts/index.jsx");

var _queryPosts2 = _interopRequireDefault(_queryPosts);

var _queryPublicizeConnections = __webpack_require__("./client/components/data/query-publicize-connections/index.jsx");

var _queryPublicizeConnections2 = _interopRequireDefault(_queryPublicizeConnections);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__("./client/components/button-group/index.jsx");

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _noticeAction = __webpack_require__("./client/components/notice/notice-action.jsx");

var _noticeAction2 = _interopRequireDefault(_noticeAction);

var _getPostShareScheduledActions = __webpack_require__("./client/state/selectors/get-post-share-scheduled-actions.js");

var _getPostShareScheduledActions2 = _interopRequireDefault(_getPostShareScheduledActions);

var _getPostSharePublishedActions = __webpack_require__("./client/state/selectors/get-post-share-published-actions.js");

var _getPostSharePublishedActions2 = _interopRequireDefault(_getPostSharePublishedActions);

var _isPublicizeEnabled = __webpack_require__("./client/state/selectors/is-publicize-enabled.js");

var _isPublicizeEnabled2 = _interopRequireDefault(_isPublicizeEnabled);

var _isSchedulingPublicizeShareAction = __webpack_require__("./client/state/selectors/is-scheduling-publicize-share-action.js");

var _isSchedulingPublicizeShareAction2 = _interopRequireDefault(_isSchedulingPublicizeShareAction);

var _getScheduledPublicizeShareActionTime = __webpack_require__("./client/state/selectors/get-scheduled-publicize-share-action-time.js");

var _getScheduledPublicizeShareActionTime2 = _interopRequireDefault(_getScheduledPublicizeShareActionTime);

var _isSchedulingPublicizeShareActionError = __webpack_require__("./client/state/selectors/is-scheduling-publicize-share-action-error.js");

var _isSchedulingPublicizeShareActionError2 = _interopRequireDefault(_isSchedulingPublicizeShareActionError);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sharing/publicize/selectors.js");

var _actions = __webpack_require__("./client/state/sharing/publicize/actions.js");

var _actions2 = __webpack_require__("./client/state/sharing/publicize/publicize-actions/actions.js");

var _postMetadata = __webpack_require__("./client/lib/post-metadata/index.js");

var _postMetadata2 = _interopRequireDefault(_postMetadata);

var _publicizeMessage = __webpack_require__("./client/post-editor/editor-sharing/publicize-message.jsx");

var _publicizeMessage2 = _interopRequireDefault(_publicizeMessage);

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _selectors4 = __webpack_require__("./client/state/sites/plans/selectors.js");

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _nudges = __webpack_require__("./client/blocks/post-share/nudges.jsx");

var _sharingPreviewModal = __webpack_require__("./client/blocks/post-share/sharing-preview-modal.jsx");

var _sharingPreviewModal2 = _interopRequireDefault(_sharingPreviewModal);

var _connectionsList = __webpack_require__("./client/blocks/post-share/connections-list.jsx");

var _connectionsList2 = _interopRequireDefault(_connectionsList);

var _publicizeActionsList = __webpack_require__("./client/blocks/post-share/publicize-actions-list.jsx");

var _publicizeActionsList2 = _interopRequireDefault(_publicizeActionsList);

var _calendarButton = __webpack_require__("./client/blocks/calendar-button/index.jsx");

var _calendarButton2 = _interopRequireDefault(_calendarButton);

var _eventsTooltip = __webpack_require__("./client/components/date-picker/events-tooltip.jsx");

var _eventsTooltip2 = _interopRequireDefault(_eventsTooltip);

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _tooltip = __webpack_require__("./client/components/tooltip/index.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _trackComponentView = __webpack_require__("./client/lib/analytics/track-component-view/index.jsx");

var _trackComponentView2 = _interopRequireDefault(_trackComponentView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostShare = function (_Component) {
	(0, _inherits3.default)(PostShare, _Component);

	function PostShare() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PostShare);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostShare.__proto__ || (0, _getPrototypeOf2.default)(PostShare)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			message: _postMetadata2.default.publicizeMessage(_this.props.post) || _this.props.post.title,
			skipped: _postMetadata2.default.publicizeSkipped(_this.props.post) || [],
			showSharingPreview: false,
			showAccountTooltip: false,
			scheduledDate: null,
			showTooltip: false,
			tooltipContext: null,
			eventsByDay: []
		}, _this.toggleConnection = function (id) {
			var skipped = _this.state.skipped.slice();
			var index = skipped.indexOf(id);
			if (index !== -1) {
				skipped.splice(index, 1);
			} else {
				skipped.push(id);
			}

			_this.setState({ skipped: skipped });
		}, _this.scheduleDate = function (date) {
			if (date.isBefore(Date.now())) {
				date = null;
			}
			_this.setState({ scheduledDate: date });
		}, _this.isConnectionActive = function (connection) {
			return connection.status !== 'broken' && _this.skipConnection(connection);
		}, _this.toggleSharingPreview = function () {
			var showSharingPreview = !_this.state.showSharingPreview;

			if (showSharingPreview) {
				document.documentElement.classList.add('no-scroll', 'is-previewing');
			} else {
				document.documentElement.classList.remove('no-scroll', 'is-previewing');
			}

			_analytics2.default.tracks.recordEvent('calypso_publicize_share_preview_toggle', { show: showSharingPreview });
			_this.setState({ showSharingPreview: showSharingPreview });
		}, _this.setMessage = function (message) {
			return _this.setState({ message: message });
		}, _this.dismiss = function () {
			_this.props.dismissShareConfirmation(_this.props.siteId, _this.props.postId);
		}, _this.sharePost = function () {
			var _this$props = _this.props,
			    postId = _this$props.postId,
			    siteId = _this$props.siteId,
			    connections = _this$props.connections;

			var servicesToPublish = connections.filter(function (connection) {
				return _this.state.skipped.indexOf(connection.keyring_connection_ID) === -1;
			});
			//Let's prepare array of service stats for tracks.
			var numberOfAccountsPerService = servicesToPublish.reduce(function (counts, service) {
				counts.service_all = counts.service_all + 1;
				if (!counts['service_' + service.service]) {
					counts['service_' + service.service] = 0;
				}
				counts['service_' + service.service] = counts['service_' + service.service] + 1;
				return counts;
			}, { service_all: 0 });

			if (_this.state.scheduledDate) {
				_analytics2.default.tracks.recordEvent('calypso_publicize_share_schedule', numberOfAccountsPerService);

				_this.props.schedulePostShareAction(siteId, postId, _this.state.message, _this.state.scheduledDate.format('X'), servicesToPublish.map(function (connection) {
					return connection.ID;
				}));
			} else {
				_analytics2.default.tracks.recordEvent('calypso_publicize_share_instantly', numberOfAccountsPerService);
				_this.props.sharePost(siteId, postId, _this.state.skipped, _this.state.message);
			}
		}, _this.previewSharingPost = function () {}, _this.showCalendarTooltip = function (date, modifiers, event, eventsByDay) {
			_this.setState({
				eventsByDay: eventsByDay,
				context: event.target,
				showTooltip: true
			});
		}, _this.hideEventsTooltip = function () {
			_this.setState({
				eventsByDay: [],
				context: null,
				showTooltip: false
			});
		}, _this.showAddTooltip = function () {
			return _this.setState({ showAccountTooltip: true });
		}, _this.hideAddTooltip = function () {
			return _this.setState({ showAccountTooltip: false });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PostShare, [{
		key: 'hasConnections',
		value: function hasConnections() {
			return !!(0, _get3.default)(this.props, 'connections.length');
		}
	}, {
		key: 'skipConnection',
		value: function skipConnection(_ref2) {
			var keyring_connection_ID = _ref2.keyring_connection_ID;

			return this.state.skipped.indexOf(keyring_connection_ID) === -1;
		}
	}, {
		key: 'activeConnections',
		value: function activeConnections() {
			return this.props.connections.filter(this.isConnectionActive);
		}
	}, {
		key: 'isDisabled',
		value: function isDisabled() {
			if (this.props.disabled || this.props.requesting || this.activeConnections().length < 1) {
				return true;
			}
		}
	}, {
		key: 'renderMessage',
		value: function renderMessage() {
			if (!this.hasConnections()) {
				return;
			}

			var targeted = this.hasConnections() ? this.props.connections.filter(this.isConnectionActive) : [];
			var requireCount = (0, _includes3.default)((0, _map3.default)(targeted, 'service'), 'twitter');
			var acceptableLength = requireCount ? 140 - 23 - 23 : null;

			return _react2.default.createElement(_publicizeMessage2.default, {
				disabled: this.isDisabled(),
				message: this.state.message,
				preview: this.props.post.title,
				requireCount: requireCount,
				onChange: this.setMessage,
				acceptableLength: acceptableLength });
		}
	}, {
		key: 'renderSharingButtons',
		value: function renderSharingButtons() {
			var _props = this.props,
			    siteId = _props.siteId,
			    translate = _props.translate,
			    publishedActions = _props.publishedActions,
			    scheduledActions = _props.scheduledActions;


			var shareButton = _react2.default.createElement(
				_button2.default,
				{
					className: 'post-share__share-button',
					busy: this.props.requesting,
					primary: true,
					onClick: this.sharePost,
					disabled: this.isDisabled()
				},
				this.state.scheduledDate ? translate('Schedule post') : translate('Share post')
			);

			var previewButton = (0, _config.isEnabled)('publicize-preview') && _react2.default.createElement(
				_button2.default,
				{
					disabled: this.isDisabled(),
					className: 'post-share__preview-button',
					onClick: this.toggleSharingPreview
				},
				translate('Preview')
			);

			var actionsEvents = (0, _map3.default)((0, _concat3.default)(publishedActions, scheduledActions), function (_ref3) {
				var ID = _ref3.ID,
				    message = _ref3.message,
				    date = _ref3.date,
				    service = _ref3.service;
				return {
					id: ID,
					type: 'published-action',
					title: message,
					date: date,
					socialIcon: service === 'google_plus' ? 'google-plus' : service
				};
			});

			// custom tooltip title
			var eventsByDay = this.state.eventsByDay;


			var tooltipTitle = this.props.translate('%d share', '%d shares', {
				count: eventsByDay.length,
				args: eventsByDay.length
			});

			var maxEvents = 8;
			var moreShares = eventsByDay.length - maxEvents;

			var tooltipMoreEventsLabel = this.props.translate('… and %d more share', '… and %d more shares', {
				count: moreShares,
				args: moreShares
			});

			return _react2.default.createElement(
				'div',
				{ className: 'post-share__button-actions' },
				previewButton,
				_react2.default.createElement(
					_buttonGroup2.default,
					{
						className: 'post-share__share-combo',
						primary: true,
						busy: this.props.requesting,
						disabled: this.isDisabled()
					},
					shareButton,
					_react2.default.createElement(_calendarButton2.default, {
						primary: true,
						events: actionsEvents,
						className: 'post-share__schedule-button',
						disabled: this.isDisabled(),
						disabledDays: [{ before: new Date() }],
						enableOutsideDays: false,
						title: translate('Set date and time'),
						selectedDay: this.state.scheduledDate,
						tabIndex: 3,
						siteId: siteId,
						onDateChange: this.scheduleDate,
						onDayMouseEnter: this.showCalendarTooltip,
						onDayMouseLeave: this.hideEventsTooltip,
						onClose: this.hideEventsTooltip,
						popoverPosition: 'bottom left'
					})
				),
				_react2.default.createElement(_eventsTooltip2.default, {
					events: eventsByDay,
					context: this.state.context,
					isVisible: this.state.showTooltip,
					title: tooltipTitle,
					moreEventsLabel: tooltipMoreEventsLabel,
					maxEvents: maxEvents
				})
			);
		}
	}, {
		key: 'renderConnectionsWarning',
		value: function renderConnectionsWarning() {
			var _props2 = this.props,
			    connections = _props2.connections,
			    hasFetchedConnections = _props2.hasFetchedConnections,
			    siteSlug = _props2.siteSlug,
			    translate = _props2.translate;


			if (!hasFetchedConnections || !connections.length) {
				return null;
			}

			var brokenConnections = connections.filter(function (connection) {
				return connection.status === 'broken';
			});

			if (!brokenConnections.length) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				null,
				brokenConnections.map(function (connection) {
					return _react2.default.createElement(
						_notice2.default,
						{
							key: connection.keyring_connection_ID,
							status: 'is-warning',
							showDismiss: false,
							text: translate('There is an issue connecting to %s.', { args: connection.label })
						},
						_react2.default.createElement(
							_noticeAction2.default,
							{ href: '/sharing/' + siteSlug },
							translate('Reconnect')
						)
					);
				})
			);
		}
	}, {
		key: 'renderRequestSharingNotice',
		value: function renderRequestSharingNotice() {
			var _props3 = this.props,
			    failure = _props3.failure,
			    requesting = _props3.requesting,
			    success = _props3.success,
			    translate = _props3.translate;


			if (this.props.scheduling) {
				return _react2.default.createElement(
					_notice2.default,
					{ status: 'is-warning', showDismiss: false },
					translate('We are writing your shares to the calendar…')
				);
			}
			if (this.props.scheduledAt) {
				return _react2.default.createElement(
					_notice2.default,
					{ status: 'is-success', onDismissClick: this.dismiss },
					translate('We\'ll share your post on %s.', {
						args: this.props.scheduledAt.format('ddd, MMMM Do YYYY, h:mm:ss a')
					})
				);
			}

			if (this.props.schedulingFailed) {
				return _react2.default.createElement(
					_notice2.default,
					{ status: 'is-error', onDismissClick: this.dismiss },
					translate('Scheduling share failed. Please don\'t be mad.')
				);
			}

			if (requesting) {
				return _react2.default.createElement(
					_notice2.default,
					{ status: 'is-warning', showDismiss: false },
					translate('Sharing…')
				);
			}

			if (success) {
				return _react2.default.createElement(
					_notice2.default,
					{ status: 'is-success', onDismissClick: this.dismiss },
					translate('Post shared. Please check your social media accounts.')
				);
			}

			if (failure) {
				return _react2.default.createElement(
					_notice2.default,
					{ status: 'is-error', onDismissClick: this.dismiss },
					translate('Something went wrong. Please don\'t be mad.')
				);
			}
		}
	}, {
		key: 'renderConnectionsSection',
		value: function renderConnectionsSection() {
			var _this2 = this;

			var _props4 = this.props,
			    hasFetchedConnections = _props4.hasFetchedConnections,
			    siteId = _props4.siteId,
			    siteSlug = _props4.siteSlug,
			    translate = _props4.translate;

			// enrich connections

			var connections = (0, _map3.default)(this.props.connections, function (connection) {
				return (0, _extends3.default)({}, connection, { isActive: _this2.isConnectionActive(connection) });
			});

			return _react2.default.createElement(
				'div',
				{ className: 'post-share__services' },
				_react2.default.createElement(
					_sectionHeader2.default,
					{ className: 'post-share__services-header', label: translate('Connected accounts') },
					_react2.default.createElement(
						_button2.default,
						{
							compact: true,
							href: '/sharing/' + siteId,
							className: 'post-share__add-button',
							onMouseEnter: this.showAddTooltip,
							onMouseLeave: this.hideAddTooltip,
							ref: 'addAccountButton',
							'aria-label': translate('Add account') },
						_react2.default.createElement(_gridicons2.default, { icon: 'plus-small', size: 18 }),
						_react2.default.createElement(_gridicons2.default, { icon: 'user', size: 18 }),
						_react2.default.createElement(
							_tooltip2.default,
							{
								isVisible: this.state.showAccountTooltip,
								context: this.refs && this.refs.addAccountButton,
								position: 'bottom' },
							translate('Add account')
						)
					)
				),
				_react2.default.createElement(_connectionsList2.default, (0, _extends3.default)({
					connections: connections,
					hasFetchedConnections: hasFetchedConnections,
					siteId: siteId,
					siteSlug: siteSlug
				}, {
					onToggle: this.toggleConnection
				}))
			);
		}
	}, {
		key: 'renderPrimarySection',
		value: function renderPrimarySection() {
			var _props5 = this.props,
			    hasFetchedConnections = _props5.hasFetchedConnections,
			    hasRepublicizeFeature = _props5.hasRepublicizeFeature,
			    siteSlug = _props5.siteSlug,
			    translate = _props5.translate;


			if (!hasFetchedConnections) {
				return null;
			}

			if (!this.hasConnections()) {
				return _react2.default.createElement(_connectionsList.NoConnectionsNotice, {
					siteSlug: siteSlug,
					translate: translate
				});
			}

			if (!hasRepublicizeFeature) {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_nudges.UpgradeToPremiumNudge, this.props),
					_react2.default.createElement(_publicizeActionsList2.default, this.props)
				);
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'div',
					{ className: 'post-share__main' },
					_react2.default.createElement(
						'div',
						{ className: 'post-share__form' },
						this.renderMessage(),
						this.renderSharingButtons()
					),
					this.renderConnectionsSection()
				),
				_react2.default.createElement(_publicizeActionsList2.default, this.props)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.isPublicizeEnabled) {
				return null;
			}

			var _props6 = this.props,
			    hasRepublicizeFeature = _props6.hasRepublicizeFeature,
			    hasFetchedConnections = _props6.hasFetchedConnections,
			    postId = _props6.postId,
			    siteId = _props6.siteId,
			    siteSlug = _props6.siteSlug,
			    translate = _props6.translate,
			    showClose = _props6.showClose,
			    onClose = _props6.onClose;


			if (!siteId || !postId) {
				return null;
			}

			var classes = (0, _classnames2.default)('post-share__wrapper', {
				'is-placeholder': !hasFetchedConnections,
				'has-connections': this.hasConnections(),
				'has-republicize-scheduling-feature': hasRepublicizeFeature
			});

			return _react2.default.createElement(
				'div',
				{ className: 'post-share' },
				_react2.default.createElement(_trackComponentView2.default, { eventName: 'calypso_publicize_post_share_view' }),
				_react2.default.createElement(_queryPostTypes2.default, { siteId: siteId }),
				_react2.default.createElement(_queryPublicizeConnections2.default, { siteId: siteId }),
				_react2.default.createElement(
					'div',
					{ className: classes },
					_react2.default.createElement(
						'div',
						{ className: 'post-share__head' },
						_react2.default.createElement(
							'h4',
							{ className: 'post-share__title' },
							translate('Share this post')
						),
						_react2.default.createElement(
							'div',
							{ className: 'post-share__subtitle' },
							translate('Share your post on all of your connected social media accounts using ' + '{{a}}Publicize{{/a}}.', {
								components: {
									a: _react2.default.createElement('a', { href: '/sharing/' + siteSlug })
								}
							})
						)
					),
					showClose && _react2.default.createElement(
						_button2.default,
						{
							borderless: true,
							'aria-label': translate('Close post sharing'),
							className: 'post-share__close',
							'data-tip-target': 'post-share__close',
							onClick: onClose
						},
						_react2.default.createElement(_gridicons2.default, { icon: 'cross' })
					),
					!hasFetchedConnections && _react2.default.createElement('div', { className: 'post-share__placeholder' }),
					this.renderRequestSharingNotice(),
					this.renderConnectionsWarning(),
					this.renderPrimarySection()
				),
				_react2.default.createElement(_queryPosts2.default, { siteId: siteId, postId: postId }),
				_react2.default.createElement(_sharingPreviewModal2.default, {
					siteId: siteId,
					postId: postId,
					message: this.state.message,
					isVisible: this.state.showSharingPreview,
					onClose: this.toggleSharingPreview
				})
			);
		}
	}]);
	return PostShare;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


PostShare.propTypes = {
	// parent prps
	post: _react.PropTypes.object,
	siteId: _react.PropTypes.number,
	disabled: _react.PropTypes.bool,
	showClose: _react.PropTypes.bool,
	onClose: _react.PropTypes.func,

	// connect prps
	connections: _react.PropTypes.array,
	failed: _react.PropTypes.bool,
	hasFetchedConnections: _react.PropTypes.bool,
	hasRepublicizeFeature: _react.PropTypes.bool,
	isPublicizeEnabled: _react.PropTypes.bool,
	planSlug: _react.PropTypes.string,
	postId: _react.PropTypes.number,
	requestConnections: _react.PropTypes.func,
	requesting: _react.PropTypes.bool,
	siteSlug: _react.PropTypes.string,
	success: _react.PropTypes.bool,
	userCurrency: _react.PropTypes.string
};
PostShare.defaultProps = {
	connections: [],
	disabled: false,
	post: {}
};


var getDiscountedOrRegularPrice = function getDiscountedOrRegularPrice(state, siteId, plan) {
	return (0, _selectors4.getPlanDiscountedRawPrice)(state, siteId, plan, { isMonthly: true }) || (0, _selectors4.getSitePlanRawPrice)(state, siteId, plan, { isMonthly: true });
};

exports.default = (0, _reactRedux.connect)(function (state, props) {
	var siteId = props.siteId;

	var postId = (0, _get3.default)(props, 'post.ID');
	var postType = (0, _get3.default)(props, 'post.type');
	var userId = (0, _selectors2.getCurrentUserId)(state);
	var planSlug = (0, _selectors.getSitePlanSlug)(state, siteId);

	return {
		siteId: siteId,
		postId: postId,
		planSlug: planSlug,
		isJetpack: (0, _selectors.isJetpackSite)(state, siteId),
		hasFetchedConnections: (0, _selectors3.hasFetchedConnections)(state, siteId),
		hasRepublicizeFeature: (0, _selectors4.hasFeature)(state, siteId, _constants.FEATURE_REPUBLICIZE),
		siteSlug: (0, _selectors.getSiteSlug)(state, siteId),
		isPublicizeEnabled: (0, _isPublicizeEnabled2.default)(state, siteId, postType),
		scheduling: (0, _isSchedulingPublicizeShareAction2.default)(state, siteId, postId),
		connections: (0, _selectors3.getSiteUserConnections)(state, siteId, userId),
		requesting: (0, _selectors3.isRequestingSharePost)(state, siteId, postId),
		schedulingFailed: (0, _isSchedulingPublicizeShareActionError2.default)(state, siteId, postId),
		failed: (0, _selectors3.sharePostFailure)(state, siteId, postId),
		success: (0, _selectors3.sharePostSuccessMessage)(state, siteId, postId),
		scheduledAt: (0, _getScheduledPublicizeShareActionTime2.default)(state, siteId, postId),
		premiumPrice: getDiscountedOrRegularPrice(state, siteId, _constants.PLAN_PREMIUM),
		jetpackPremiumPrice: getDiscountedOrRegularPrice(state, siteId, _constants.PLAN_JETPACK_PREMIUM),
		userCurrency: (0, _selectors2.getCurrentUserCurrencyCode)(state),
		scheduledActions: (0, _getPostShareScheduledActions2.default)(state, siteId, postId),
		publishedActions: (0, _getPostSharePublishedActions2.default)(state, siteId, postId)
	};
}, { requestConnections: _actions.fetchConnections, sharePost: _actions.sharePost, dismissShareConfirmation: _actions.dismissShareConfirmation, schedulePostShareAction: _actions2.schedulePostShareAction })((0, _i18nCalypso.localize)(PostShare));
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/post-share/nudges.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.UpgradeToPremiumNudge = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _banner = __webpack_require__("./client/components/banner/index.jsx");

var _banner2 = _interopRequireDefault(_banner);

var _constants = __webpack_require__("./client/lib/plans/constants.js");

var _formatCurrency = __webpack_require__("./client/lib/format-currency/index.js");

var _formatCurrency2 = _interopRequireDefault(_formatCurrency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var UpgradeToPremiumNudge = exports.UpgradeToPremiumNudge = function UpgradeToPremiumNudge(props) {
	var premiumPrice = props.premiumPrice,
	    jetpackPremiumPrice = props.jetpackPremiumPrice,
	    translate = props.translate,
	    userCurrency = props.userCurrency,
	    isJetpack = props.isJetpack;


	var price = void 0,
	    featureList = void 0,
	    proposedPlan = void 0;
	if (isJetpack) {
		price = jetpackPremiumPrice;
		featureList = [translate('Schedule your social messages in advance.'), translate('Easy monetization options'), translate('VideoPress support'), translate('Daily Malware Scanning')];
		proposedPlan = _constants.PLAN_JETPACK_PREMIUM;
	} else {
		price = premiumPrice;
		featureList = [translate('Schedule your social messages in advance.'), translate('Remove all advertising from your site.'), translate('Enjoy live chat support.'), translate('Easy monetization options'), translate('Unlimited premium themes.')];
		proposedPlan = _constants.PLAN_PREMIUM;
	}

	return _react2.default.createElement(_banner2.default, {
		className: 'post-share__actions-list-upgrade-nudge',
		callToAction: translate('Upgrade for %s', {
			args: (0, _formatCurrency2.default)(price, userCurrency),
			comment: '%s will be replaced by a formatted price, i.e $9.99'
		}),
		list: featureList,
		plan: proposedPlan,
		title: translate('Upgrade to a Premium Plan!') });
};

/**
 * Internal dependencies
 */

/***/ }),

/***/ "./client/blocks/post-share/publicize-actions-list.jsx":
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

var _getPostShareScheduledActions = __webpack_require__("./client/state/selectors/get-post-share-scheduled-actions.js");

var _getPostShareScheduledActions2 = _interopRequireDefault(_getPostShareScheduledActions);

var _getPostSharePublishedActions = __webpack_require__("./client/state/selectors/get-post-share-published-actions.js");

var _getPostSharePublishedActions2 = _interopRequireDefault(_getPostSharePublishedActions);

var _index = __webpack_require__("./client/components/data/query-share-post-actions/index.jsx");

var _index2 = _interopRequireDefault(_index);

var _compact = __webpack_require__("./client/components/card/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _socialLogos = __webpack_require__("./node_modules/social-logos/build/index.js");

var _socialLogos2 = _interopRequireDefault(_socialLogos);

var _ellipsisMenu = __webpack_require__("./client/components/ellipsis-menu/index.jsx");

var _ellipsisMenu2 = _interopRequireDefault(_ellipsisMenu);

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _constants = __webpack_require__("./client/blocks/post-share/constants.js");

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _config = __webpack_require__("./client/config/index.js");

var _dialog = __webpack_require__("./client/components/dialog/index.jsx");

var _dialog2 = _interopRequireDefault(_dialog);

var _actions = __webpack_require__("./client/state/sharing/publicize/publicize-actions/actions.js");

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _sharingPreviewModal = __webpack_require__("./client/blocks/post-share/sharing-preview-modal.jsx");

var _sharingPreviewModal2 = _interopRequireDefault(_sharingPreviewModal);

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PublicizeActionsList = function (_PureComponent) {
	(0, _inherits3.default)(PublicizeActionsList, _PureComponent);

	function PublicizeActionsList() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PublicizeActionsList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PublicizeActionsList.__proto__ || (0, _getPrototypeOf2.default)(PublicizeActionsList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			selectedShareTab: _constants.PUBLISHED,
			showDeleteDialog: false,
			selectedScheduledShareId: null,
			showPreviewModal: false,
			previewMessage: '',
			previewService: ''
		}, _this.setFooterSection = function (selectedShareTab) {
			return function () {
				_analytics2.default.tracks.recordEvent('calypso_publicize_action_tab_click', { tab: selectedShareTab });
				_this.setState({ selectedShareTab: selectedShareTab });
			};
		}, _this.togglePreviewModal = function () {
			var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var service = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
			return function () {
				if (_this.state.showPreviewModal) {
					return _this.setState({ showPreviewModal: false });
				}

				_this.setState({
					showPreviewModal: true,
					previewMessage: message,
					previewService: service
				});
			};
		}, _this.closeDeleteDialog = function (dialogAction) {
			if (dialogAction === 'delete') {
				var _this$props = _this.props,
				    siteId = _this$props.siteId,
				    postId = _this$props.postId;

				_analytics2.default.tracks.recordEvent('calypso_publicize_scheduled_delete');
				_this.props.deletePostShareAction(siteId, postId, _this.state.selectedScheduledShareId);
			}

			_this.setState({ showDeleteDialog: false });
		}, _this.renderActionsList = function () {
			var _this$props2 = _this.props,
			    publishedActions = _this$props2.publishedActions,
			    scheduledActions = _this$props2.scheduledActions,
			    translate = _this$props2.translate;


			if (_this.state.selectedShareTab === _constants.PUBLISHED) {
				return _react2.default.createElement(
					'div',
					{ className: 'post-share__published-list' },
					publishedActions.map(function (item, index) {
						return _this.renderActionItem(item, index);
					})
				);
			}

			if (scheduledActions.length === 0) {
				return _react2.default.createElement(_notice2.default, {
					status: 'is-info',
					showDismiss: false,
					text: translate('Did you know you can decide exactly when Publicize shares your post? You can! ' + 'Click the calendar icon next to "Share post" to schedule your social shares.')
				});
			}

			return _react2.default.createElement(
				'div',
				{ className: 'post-share__scheduled-list' },
				scheduledActions.map(function (item, index) {
					return _this.renderActionItem(item, index);
				})
			);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PublicizeActionsList, [{
		key: 'renderActionItem',
		value: function renderActionItem(item, index) {
			var service = item.service,
			    connectionName = item.connectionName,
			    shareDate = item.shareDate,
			    message = item.message;


			return _react2.default.createElement(
				_compact2.default,
				{ className: 'post-share__footer-items', key: index },
				_react2.default.createElement(
					'div',
					{ className: 'post-share__footer-item' },
					_react2.default.createElement(
						'div',
						{ className: 'post-share__handle' },
						_react2.default.createElement(_socialLogos2.default, { icon: service === 'google_plus' ? 'google-plus' : service }),
						_react2.default.createElement(
							'span',
							{ className: 'post-share__handle-value' },
							connectionName
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'post-share__timestamp' },
						_react2.default.createElement(_gridicons2.default, { icon: 'time', size: 18 }),
						_react2.default.createElement(
							'span',
							{ className: 'post-share__timestamp-value' },
							shareDate
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'post-share__message' },
						message
					)
				),
				this.renderFooterSectionItemActions(item)
			);
		}
	}, {
		key: 'renderFooterSectionItemActions',
		value: function renderFooterSectionItemActions(item) {
			var actionId = item.ID,
			    message = item.message,
			    service = item.service,
			    url = item.url;


			if (this.state.selectedShareTab === _constants.SCHEDULED) {
				return this.renderScheduledMenu(actionId, message, service);
			}

			// PUBLISHED tab
			return url && _react2.default.createElement(
				'a',
				{ className: 'post-share__external-url', href: url, target: '_blank', rel: 'noopener noreferrer' },
				_react2.default.createElement(_gridicons2.default, { icon: 'external', size: 24 })
			);
		}
	}, {
		key: 'renderScheduledMenu',
		value: function renderScheduledMenu(publicizeActionId, message, service) {
			var actions = [];
			var translate = this.props.translate;


			if ((0, _config.isEnabled)('publicize-preview')) {
				actions.push(_react2.default.createElement(
					_menuItem2.default,
					{
						onClick: this.togglePreviewModal(message, service),
						key: '1',
						icon: 'visible'
					},
					translate('Preview')
				));
			}

			actions.push(_react2.default.createElement(
				_menuItem2.default,
				{
					onClick: this.deleteScheduledAction(publicizeActionId),
					key: '2',
					icon: 'trash'
				},
				translate('Trash')
			));

			if (actions.length === 0) {
				return _react2.default.createElement('div', null);
			}
			return _react2.default.createElement(
				_ellipsisMenu2.default,
				null,
				actions
			);
		}
	}, {
		key: 'deleteScheduledAction',
		value: function deleteScheduledAction(actionId) {
			var _this2 = this;

			return function () {
				_this2.setState({
					showDeleteDialog: true,
					selectedScheduledShareId: actionId
				});
			};
		}
	}, {
		key: 'renderDeleteDialog',
		value: function renderDeleteDialog() {
			var translate = this.props.translate;


			var buttons = [{ action: 'cancel', label: translate('Cancel') }, { action: 'delete', label: translate('Delete scheduled share'), isPrimary: true }];

			return _react2.default.createElement(
				_dialog2.default,
				{
					isVisible: this.state.showDeleteDialog,
					buttons: buttons,
					onClose: this.closeDeleteDialog
				},
				_react2.default.createElement(
					'h1',
					null,
					translate('Confirmation')
				),
				_react2.default.createElement(
					'p',
					null,
					translate('Do you want to delete the scheduled share?')
				)
			);
		}
	}, {
		key: 'getShareTabLabel',
		value: function getShareTabLabel(shareTab) {
			var translate = this.props.translate;

			return shareTab === _constants.SCHEDULED ? translate('Scheduled') : translate('Published');
		}
	}, {
		key: 'getShareTabCount',
		value: function getShareTabCount(shareTab) {
			return shareTab === _constants.SCHEDULED ? this.props.scheduledActions.length : this.props.publishedActions.length;
		}
	}, {
		key: 'renderShareTab',
		value: function renderShareTab(shareTab) {
			return _react2.default.createElement(
				_item2.default,
				{
					key: shareTab,
					selected: this.state.selectedShareTab === shareTab,
					count: this.getShareTabCount(shareTab),
					onClick: this.setFooterSection(shareTab)
				},
				this.getShareTabLabel(shareTab)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    hasRepublicizeFeature = _props.hasRepublicizeFeature,
			    postId = _props.postId,
			    siteId = _props.siteId;


			var tabs = hasRepublicizeFeature ? [_constants.SCHEDULED, _constants.PUBLISHED] : [_constants.PUBLISHED];

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_sectionNav2.default,
					{
						className: 'post-share__footer-nav',
						selectedText: this.getShareTabLabel(this.state.selectedShareTab),
						selectedCount: this.getShareTabCount(this.state.selectedShareTab)
					},
					_react2.default.createElement(
						_tabs2.default,
						null,
						tabs.map(this.renderShareTab, this)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'post-share__actions-list' },
					_react2.default.createElement(_index2.default, { siteId: siteId, postId: postId, status: _constants.SCHEDULED }),
					_react2.default.createElement(_index2.default, { siteId: siteId, postId: postId, status: _constants.PUBLISHED }),
					this.renderActionsList()
				),
				this.renderDeleteDialog(),
				_react2.default.createElement(_sharingPreviewModal2.default, {
					siteId: siteId,
					postId: postId,
					message: this.state.previewMessage,
					selectedService: this.state.previewService,
					isVisible: this.state.showPreviewModal,
					onClose: this.togglePreviewModal()
				})
			);
		}
	}]);
	return PublicizeActionsList;
}(_react.PureComponent);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


PublicizeActionsList.propTypes = {
	siteId: _react.PropTypes.number,
	postId: _react.PropTypes.number,
	scheduledActions: _react.PropTypes.array,
	publishedActions: _react.PropTypes.array
};
exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var postId = _ref2.postId,
	    siteId = _ref2.siteId;

	return {
		scheduledActions: (0, _getPostShareScheduledActions2.default)(state, siteId, postId),
		publishedActions: (0, _getPostSharePublishedActions2.default)(state, siteId, postId)
	};
}, { deletePostShareAction: _actions.deletePostShareAction })((0, _i18nCalypso.localize)(PublicizeActionsList));
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/post-share/sharing-preview-modal.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _dialog = __webpack_require__("./client/components/dialog/index.jsx");

var _dialog2 = _interopRequireDefault(_dialog);

var _sharingPreviewPane = __webpack_require__("./client/blocks/sharing-preview-pane/index.jsx");

var _sharingPreviewPane2 = _interopRequireDefault(_sharingPreviewPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var SharingPreviewModal = function SharingPreviewModal(props) {
	var isVisible = props.isVisible,
	    onClose = props.onClose,
	    previewProps = (0, _objectWithoutProperties3.default)(props, ['isVisible', 'onClose']);


	return _react2.default.createElement(
		_dialog2.default,
		{ isVisible: isVisible, additionalClassNames: 'post-share__sharing-preview-modal' },
		_react2.default.createElement(
			'header',
			{ className: 'post-share__sharing-preview-modal-header' },
			_react2.default.createElement(
				'button',
				{ onClick: onClose, className: 'post-share__sharing-preview-modal-close' },
				_react2.default.createElement(_gridicons2.default, { icon: 'cross' })
			)
		),
		_react2.default.createElement(_sharingPreviewPane2.default, previewProps)
	);
};

SharingPreviewModal.propTypes = {
	isVisible: _react.PropTypes.bool.isRequired,
	onClose: _react.PropTypes.func.isRequired,

	// SharingPreviewPane props
	siteId: _react.PropTypes.number,
	postId: _react.PropTypes.number,
	message: _react.PropTypes.string,
	selectedService: _react.PropTypes.string
};

exports.default = SharingPreviewModal;
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/post-status/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PostStatus = PostStatus;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
function PostStatus(_ref) {
	var translate = _ref.translate,
	    post = _ref.post,
	    showAll = _ref.showAll,
	    _ref$showIcon = _ref.showIcon,
	    showIcon = _ref$showIcon === undefined ? true : _ref$showIcon;

	if (!post) {
		return null;
	}

	var sticky = post.sticky,
	    status = post.status;

	var text = void 0,
	    classModifier = void 0,
	    icon = void 0;
	if (sticky) {
		text = translate('Sticky');
		classModifier = 'is-sticky';
		icon = 'bookmark-outline';
	} else if ('pending' === status) {
		text = translate('Pending Review');
		classModifier = 'is-pending';
		icon = 'aside';
	} else if ('future' === status) {
		text = translate('Scheduled');
		classModifier = 'is-scheduled';
		icon = 'calendar';
	} else if ('trash' === status) {
		text = translate('Trashed');
		classModifier = 'is-trash';
		icon = 'trash';
	} else if (showAll && 'draft' === status) {
		text = translate('Draft');
		classModifier = 'is-draft';
		icon = 'aside';
	} else if (showAll && 'publish' === status) {
		text = translate('Published');
		classModifier = 'is-published';
		icon = 'aside';
	}

	if (!text) {
		return null;
	}

	var classes = (0, _classnames2.default)('post-status', classModifier);

	return _react2.default.createElement(
		'span',
		{ className: classes },
		showIcon && _react2.default.createElement(_gridicons2.default, {
			icon: icon,
			size: 18,
			className: 'post-status__icon' }),
		_react2.default.createElement(
			'span',
			{ className: 'post-status__text' },
			text
		)
	);
}

/**
 * Internal dependencies
 */


PostStatus.displayName = 'PostStatus';

PostStatus.propTypes = {
	globalId: _react.PropTypes.string,
	translate: _react.PropTypes.func,
	post: _react.PropTypes.object,
	showAll: _react.PropTypes.bool,
	showIcon: _react.PropTypes.bool
};

exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var globalId = _ref2.globalId;

	return {
		post: (0, _selectors.getNormalizedPost)(state, globalId)
	};
})((0, _i18nCalypso.localize)(PostStatus));

/***/ }),

/***/ "./client/blocks/post-time/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

exports.PostTime = PostTime;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
function getDisplayedTimeFromPost(moment, post) {
	if (!post) {
		// Placeholder text: "a few seconds ago" in English locale
		return moment().fromNow();
	}

	var status = post.status,
	    modified = post.modified,
	    date = post.date;

	var time = moment((0, _includes3.default)(['draft', 'pending'], status) ? modified : date);
	if (time.isBefore(moment().subtract(7, 'days'))) {
		// Like "August 30, 2017 4:46 PM" in English locale
		return time.format('LLL');
	}

	// Like "3 days ago" in English locale
	return time.fromNow();
}

/**
 * Internal dependencies
 */
function PostTime(_ref) {
	var moment = _ref.moment,
	    post = _ref.post;

	var classes = (0, _classnames2.default)('post-time', {
		'is-placeholder': !post
	});

	return _react2.default.createElement(
		'span',
		{ className: classes },
		getDisplayedTimeFromPost(moment, post)
	);
}

PostTime.propTypes = {
	globalId: _propTypes2.default.string,
	moment: _propTypes2.default.func,
	post: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var globalId = _ref2.globalId;

	return {
		post: (0, _selectors.getNormalizedPost)(state, globalId)
	};
})((0, _i18nCalypso.localize)(PostTime));

/***/ }),

/***/ "./client/blocks/sharing-preview-pane/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

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

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _utils = __webpack_require__("./client/blocks/sharing-preview-pane/utils.js");

var _facebookSharePreview = __webpack_require__("./client/components/share/facebook-share-preview/index.jsx");

var _facebookSharePreview2 = _interopRequireDefault(_facebookSharePreview);

var _googlePlusSharePreview = __webpack_require__("./client/components/share/google-plus-share-preview/index.js");

var _googlePlusSharePreview2 = _interopRequireDefault(_googlePlusSharePreview);

var _linkedinSharePreview = __webpack_require__("./client/components/share/linkedin-share-preview/index.jsx");

var _linkedinSharePreview2 = _interopRequireDefault(_linkedinSharePreview);

var _twitterSharePreview = __webpack_require__("./client/components/share/twitter-share-preview/index.jsx");

var _twitterSharePreview2 = _interopRequireDefault(_twitterSharePreview);

var _tumblrSharePreview = __webpack_require__("./client/components/share/tumblr-share-preview/index.jsx");

var _tumblrSharePreview2 = _interopRequireDefault(_tumblrSharePreview);

var _verticalMenu = __webpack_require__("./client/components/vertical-menu/index.jsx");

var _verticalMenu2 = _interopRequireDefault(_verticalMenu);

var _items = __webpack_require__("./client/components/vertical-menu/items/index.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sharing/publicize/selectors.js");

var _selectors4 = __webpack_require__("./client/state/current-user/selectors.js");

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _noticeAction = __webpack_require__("./client/components/notice/notice-action.jsx");

var _noticeAction2 = _interopRequireDefault(_noticeAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var serviceNames = {
	facebook: 'Facebook',
	twitter: 'Twitter',
	google_plus: 'Google Plus',
	linkedin: 'LinkedIn',
	tumblr: 'Tumblr'
};

/**
 * Internal dependencies
 */

var SharingPreviewPane = function (_PureComponent) {
	(0, _inherits3.default)(SharingPreviewPane, _PureComponent);

	function SharingPreviewPane(props) {
		(0, _classCallCheck3.default)(this, SharingPreviewPane);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SharingPreviewPane.__proto__ || (0, _getPrototypeOf2.default)(SharingPreviewPane)).call(this, props));

		_this.selectPreview = function (selectedService) {
			_this.setState({ selectedService: selectedService });
		};

		_this.state = {
			selectedService: props.selectedService || props.services[0]
		};
		return _this;
	}

	(0, _createClass3.default)(SharingPreviewPane, [{
		key: 'renderPreview',
		value: function renderPreview() {
			var _props = this.props,
			    post = _props.post,
			    site = _props.site,
			    message = _props.message,
			    connections = _props.connections,
			    translate = _props.translate,
			    siteSlug = _props.siteSlug;
			var selectedService = this.state.selectedService;

			var connection = (0, _find3.default)(connections, { service: selectedService });
			if (!connection) {
				return _react2.default.createElement(
					_notice2.default,
					{
						text: translate('Connect to %s to see the preview', { args: serviceNames[selectedService] }),
						status: 'is-info',
						showDismiss: false
					},
					_react2.default.createElement(
						_noticeAction2.default,
						{ href: '/sharing/' + siteSlug },
						translate('Settings')
					)
				);
			}

			var articleUrl = (0, _get3.default)(post, 'URL', '');
			var articleTitle = (0, _get3.default)(post, 'title', '');
			var articleContent = (0, _utils.getExcerptForPost)(post);
			var siteDomain = (0, _get3.default)(site, 'domain', '');
			var imageUrl = (0, _utils.getPostImage)(post);
			var externalName = connection.external_name,
			    externalProfileURL = connection.external_profile_url,
			    externalProfilePicture = connection.external_profile_picture,
			    externalDisplay = connection.external_display;


			var previewProps = {
				articleUrl: articleUrl,
				articleTitle: articleTitle,
				articleContent: articleContent,
				externalDisplay: externalDisplay,
				externalName: externalName,
				externalProfileURL: externalProfileURL,
				externalProfilePicture: externalProfilePicture,
				message: message,
				imageUrl: imageUrl,
				siteDomain: siteDomain
			};

			switch (selectedService) {
				case 'facebook':
					return _react2.default.createElement(_facebookSharePreview2.default, previewProps);
				case 'google_plus':
					return _react2.default.createElement(_googlePlusSharePreview2.default, previewProps);
				case 'tumblr':
					return _react2.default.createElement(_tumblrSharePreview2.default, previewProps);
				case 'linkedin':
					return _react2.default.createElement(_linkedinSharePreview2.default, previewProps);
				case 'twitter':
					return _react2.default.createElement(_twitterSharePreview2.default, (0, _extends3.default)({}, previewProps, {
						externalDisplay: externalDisplay }));
				default:
					return null;
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    translate = _props2.translate,
			    services = _props2.services;

			var initialMenuItemIndex = services.indexOf(this.state.selectedService);

			return _react2.default.createElement(
				'div',
				{ className: 'sharing-preview-pane' },
				_react2.default.createElement(
					'div',
					{ className: 'sharing-preview-pane__sidebar' },
					_react2.default.createElement(
						'div',
						{ className: 'sharing-preview-pane__explanation' },
						_react2.default.createElement(
							'h1',
							{ className: 'sharing-preview-pane__title' },
							translate('Social Previews')
						),
						_react2.default.createElement(
							'p',
							{ className: 'sharing-preview-pane__description' },
							translate('This is how your post will appear ' + 'when people view or share it on any of ' + 'the networks below')
						)
					),
					_react2.default.createElement(
						_verticalMenu2.default,
						{ onClick: this.selectPreview, initialItemIndex: initialMenuItemIndex },
						services.map(function (service) {
							return _react2.default.createElement(_items.SocialItem, { key: service, service: service });
						})
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'sharing-preview-pane__preview-area' },
					_react2.default.createElement(
						'div',
						{ className: 'sharing-preview-pane__preview' },
						this.renderPreview()
					)
				)
			);
		}
	}]);
	return SharingPreviewPane;
}(_react.PureComponent);

SharingPreviewPane.propTypes = {
	siteId: _react.PropTypes.number,
	postId: _react.PropTypes.number,
	services: _react.PropTypes.array,
	message: _react.PropTypes.string,
	// connected properties
	site: _react.PropTypes.object,
	post: _react.PropTypes.object,
	seoTitle: _react.PropTypes.string,
	selectedService: _react.PropTypes.string
};
SharingPreviewPane.defaultProps = {
	services: (0, _keys2.default)(serviceNames)
};


var mapStateToProps = function mapStateToProps(state, ownProps) {
	var siteId = ownProps.siteId,
	    postId = ownProps.postId;

	var site = (0, _selectors2.getSite)(state, siteId);
	var post = (0, _selectors.getSitePost)(state, siteId, postId);
	var seoTitle = (0, _selectors2.getSeoTitle)(state, 'posts', { site: site, post: post });
	var currentUserId = (0, _selectors4.getCurrentUserId)(state);
	var connections = (0, _selectors3.getSiteUserConnections)(state, siteId, currentUserId);
	var siteSlug = (0, _selectors2.getSiteSlug)(state, siteId);

	return {
		site: site,
		post: post,
		seoTitle: seoTitle,
		connections: connections,
		siteSlug: siteSlug
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _i18nCalypso.localize)(SharingPreviewPane));
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/sharing-preview-pane/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getExcerptForPost = exports.getPostImage = undefined;

var _trim2 = __webpack_require__("./node_modules/lodash/trim.js");

var _trim3 = _interopRequireDefault(_trim2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _striptags = __webpack_require__("./node_modules/striptags/striptags.js");

var _striptags2 = _interopRequireDefault(_striptags);

var _ruleCreateBetterExcerpt = __webpack_require__("./client/lib/post-normalizer/rule-create-better-excerpt.js");

var _postMetadata = __webpack_require__("./client/lib/post-metadata/index.js");

var _postMetadata2 = _interopRequireDefault(_postMetadata);

var _formatting = __webpack_require__("./client/lib/formatting/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PREVIEW_IMAGE_WIDTH = 512;

/**
 * Internal dependencies
 */
var getPostImage = exports.getPostImage = function getPostImage(post) {
	if (!post) {
		return null;
	}

	// Use the featured image if one was set
	if (post.featured_image) {
		return post.featured_image;
	}

	// Otherwise we'll look for a large enough image in the post
	var content = post.content;
	if (!content) {
		return null;
	}

	var imgElements = (0, _formatting.parseHtml)(content).querySelectorAll('img');

	var imageUrl = (0, _get3.default)((0, _find3.default)(imgElements, function (_ref) {
		var width = _ref.width;
		return width >= PREVIEW_IMAGE_WIDTH;
	}), 'src', null);

	return imageUrl ? imageUrl + '?s=' + PREVIEW_IMAGE_WIDTH : null;
};

var getExcerptForPost = exports.getExcerptForPost = function getExcerptForPost(post) {
	if (!post) {
		return null;
	}

	return (0, _trim3.default)((0, _striptags2.default)((0, _ruleCreateBetterExcerpt.formatExcerpt)((0, _find3.default)([_postMetadata2.default.metaDescription(post), post.excerpt, post.content], _identity3.default))));
};

/***/ }),

/***/ "./client/components/button-group/index.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var ButtonGroup = function (_PureComponent) {
	(0, _inherits3.default)(ButtonGroup, _PureComponent);

	function ButtonGroup() {
		(0, _classCallCheck3.default)(this, ButtonGroup);
		return (0, _possibleConstructorReturn3.default)(this, (ButtonGroup.__proto__ || (0, _getPrototypeOf2.default)(ButtonGroup)).apply(this, arguments));
	}

	(0, _createClass3.default)(ButtonGroup, [{
		key: 'render',
		value: function render() {
			var buttonGroupClasses = (0, _classnames2.default)('button-group', this.props.className, {
				'is-busy': this.props.busy,
				'is-primary': this.props.primary
			});

			return _react2.default.createElement(
				'span',
				{ className: buttonGroupClasses },
				this.props.children
			);
		}
	}]);
	return ButtonGroup;
}(_react.PureComponent);

ButtonGroup.propTypes = {
	children: function children(props) {
		var error = null;
		_react2.default.Children.forEach(props.children, function (child) {
			if (child && (!child.props || child.props.type !== 'button')) {
				error = new Error('All children elements should be a Button.');
			}
		});
		return error;
	}
};
exports.default = ButtonGroup;
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

/***/ "./client/components/data/query-post-counts/index.jsx":
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

var _actions = __webpack_require__("./client/state/posts/counts/actions.js");

var _selectors = __webpack_require__("./client/state/posts/counts/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryPostCounts = function (_Component) {
	(0, _inherits3.default)(QueryPostCounts, _Component);

	function QueryPostCounts() {
		(0, _classCallCheck3.default)(this, QueryPostCounts);
		return (0, _possibleConstructorReturn3.default)(this, (QueryPostCounts.__proto__ || (0, _getPrototypeOf2.default)(QueryPostCounts)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryPostCounts, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.request(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.props.siteId === nextProps.siteId && this.props.type === nextProps.type) {
				return;
			}

			this.request(nextProps);
		}
	}, {
		key: 'request',
		value: function request(props) {
			if (props.requesting) {
				return;
			}

			props.requestPostCounts(props.siteId, props.type);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryPostCounts;
}(_react.Component);

QueryPostCounts.propTypes = {
	siteId: _react.PropTypes.number.isRequired,
	type: _react.PropTypes.string.isRequired,
	requesting: _react.PropTypes.bool,
	requestPostCounts: _react.PropTypes.func
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = ownProps.siteId,
	    type = ownProps.type;

	return {
		requesting: (0, _selectors.isRequestingPostCounts)(state, siteId, type)
	};
}, { requestPostCounts: _actions.requestPostCounts })(QueryPostCounts);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-publicize-connections/index.jsx":
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

var _selectors = __webpack_require__("./client/state/sharing/publicize/selectors.js");

var _actions = __webpack_require__("./client/state/sharing/publicize/actions.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QueryPublicizeConnections = function (_Component) {
	(0, _inherits3.default)(QueryPublicizeConnections, _Component);

	function QueryPublicizeConnections() {
		(0, _classCallCheck3.default)(this, QueryPublicizeConnections);
		return (0, _possibleConstructorReturn3.default)(this, (QueryPublicizeConnections.__proto__ || (0, _getPrototypeOf2.default)(QueryPublicizeConnections)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryPublicizeConnections, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!this.props.requestingConnections && this.props.siteId) {
				this.props.requestConnections(this.props.siteId);
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(_ref) {
			var siteId = _ref.siteId;

			if (this.props.siteId && siteId !== this.props.siteId && !this.props.requestingConnections) {
				this.props.requestConnections(this.props.siteId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryPublicizeConnections;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


QueryPublicizeConnections.propTypes = {
	requestConnections: _react.PropTypes.func,
	requestingConnections: _react.PropTypes.bool,
	selectedSite: _react.PropTypes.bool,
	siteId: _react.PropTypes.number
};

QueryPublicizeConnections.defaultProps = {
	requestConnections: function requestConnections() {},
	requestingConnections: false,
	selectedSite: false,
	siteId: 0
};

exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var siteId = _ref2.siteId,
	    selectedSite = _ref2.selectedSite;

	siteId = siteId || selectedSite && (0, _selectors2.getSelectedSiteId)(state);

	return {
		requestingConnections: (0, _selectors.isFetchingConnections)(state, siteId),
		siteId: siteId
	};
}, {
	requestConnections: _actions.fetchConnections
})(QueryPublicizeConnections);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-share-post-actions/index.jsx":
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

var _isFetchingPublicizeShareActionsScheduled = __webpack_require__("./client/state/selectors/is-fetching-publicize-share-actions-scheduled.js");

var _isFetchingPublicizeShareActionsScheduled2 = _interopRequireDefault(_isFetchingPublicizeShareActionsScheduled);

var _isFetchingPublicizeShareActionsPublished = __webpack_require__("./client/state/selectors/is-fetching-publicize-share-actions-published.js");

var _isFetchingPublicizeShareActionsPublished2 = _interopRequireDefault(_isFetchingPublicizeShareActionsPublished);

var _actions = __webpack_require__("./client/state/sharing/publicize/publicize-actions/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuerySharePostActions = function (_Component) {
	(0, _inherits3.default)(QuerySharePostActions, _Component);

	function QuerySharePostActions() {
		(0, _classCallCheck3.default)(this, QuerySharePostActions);
		return (0, _possibleConstructorReturn3.default)(this, (QuerySharePostActions.__proto__ || (0, _getPrototypeOf2.default)(QuerySharePostActions)).apply(this, arguments));
	}

	(0, _createClass3.default)(QuerySharePostActions, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.request(this.props);
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			if (this.props.siteId === nextProps.siteId && this.props.postId === nextProps.postId && this.props.status === nextProps.status) {
				return false;
			}
			return true;
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.request(this.props);
		}
	}, {
		key: 'request',
		value: function request(props) {
			if (props.status === 'scheduled' && !props.isRequestingScheduled) {
				props.fetchPostShareActionsScheduled(props.siteId, props.postId);
			}

			if (props.status === 'published' && !props.isRequestingPublished) {
				props.fetchPostShareActionsPublished(props.siteId, props.postId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QuerySharePostActions;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


QuerySharePostActions.propTypes = {
	siteId: _react.PropTypes.number,
	postId: _react.PropTypes.number,
	status: _react.PropTypes.string,
	// Connected props
	isRequestingScheduled: _react.PropTypes.bool.isRequired,
	isRequestingPublished: _react.PropTypes.bool.isRequired,
	fetchPostShareActionsScheduled: _react.PropTypes.func.isRequired,
	fetchPostShareActionsPublished: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId,
	    postId = _ref.postId;
	return {
		isRequestingScheduled: (0, _isFetchingPublicizeShareActionsScheduled2.default)(state, siteId, postId),
		isRequestingPublished: (0, _isFetchingPublicizeShareActionsPublished2.default)(state, siteId, postId)
	};
}, { fetchPostShareActionsScheduled: _actions.fetchPostShareActionsScheduled, fetchPostShareActionsPublished: _actions.fetchPostShareActionsPublished })(QuerySharePostActions);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/date-picker/event.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CalendarEvent = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _socialLogos = __webpack_require__("./node_modules/social-logos/build/index.js");

var _socialLogos2 = _interopRequireDefault(_socialLogos);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External Dependencies
 */
var renderIcon = function renderIcon(icon) {
	return icon && _react2.default.createElement(
		'span',
		{ className: 'date-picker__icon-wrapper date-picker__icon-wrapper-' + icon },
		_react2.default.createElement(_gridicons2.default, { icon: icon, size: 18 })
	);
};

var renderSocialIcon = function renderSocialIcon(icon, color) {
	if (!icon) {
		return null;
	}

	var socialIconClasses = (0, _classnames2.default)('date-picker__social-icon-wrapper', 'date-picker__social-icon-wrapper-' + icon, { 'date-picker__social-icon-wrapper-color': color });

	return _react2.default.createElement(
		'span',
		{ className: socialIconClasses },
		_react2.default.createElement(_socialLogos2.default, { icon: icon, size: 18 })
	);
};

var CalendarEvent = exports.CalendarEvent = function CalendarEvent(_ref) {
	var icon = _ref.icon,
	    socialIcon = _ref.socialIcon,
	    _ref$socialIconColor = _ref.socialIconColor,
	    socialIconColor = _ref$socialIconColor === undefined ? true : _ref$socialIconColor,
	    title = _ref.title;

	return _react2.default.createElement(
		'div',
		{ className: 'date-picker__calendar-event' },
		renderIcon(icon),
		renderSocialIcon(socialIcon, socialIconColor),
		_react2.default.createElement(
			'span',
			{ className: 'date-picker__event-title' },
			title
		)
	);
};

/***/ }),

/***/ "./client/components/date-picker/events-tooltip.jsx":
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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _tooltip = __webpack_require__("./client/components/tooltip/index.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _event = __webpack_require__("./client/components/date-picker/event.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External Dependencies
 */
var EventsTooltip = function (_Component) {
	(0, _inherits3.default)(EventsTooltip, _Component);

	function EventsTooltip() {
		(0, _classCallCheck3.default)(this, EventsTooltip);
		return (0, _possibleConstructorReturn3.default)(this, (EventsTooltip.__proto__ || (0, _getPrototypeOf2.default)(EventsTooltip)).apply(this, arguments));
	}

	(0, _createClass3.default)(EventsTooltip, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    events = _props.events,
			    isVisible = _props.isVisible,
			    maxEvents = _props.maxEvents;


			var title = this.props.title;
			if (!title) {
				title = this.props.translate('%d post', '%d posts', {
					count: events.length,
					args: events.length
				});
			}

			var show = !!(events && events.length && isVisible);
			var moreEvents = events.length - maxEvents;

			var moreEventsLabel = this.props.moreEventsLabel;

			if (!moreEventsLabel) {
				moreEventsLabel = this.props.translate('… and %(moreEvents)d more post', '… and %(moreEvents)d more posts', {
					count: moreEvents,
					args: {
						moreEvents: moreEvents
					}
				});
			}

			return _react2.default.createElement(
				_tooltip2.default,
				{
					className: 'date-picker__events-tooltip',
					context: this.props.context,
					isVisible: show,
					onClose: _noop3.default
				},
				_react2.default.createElement(
					'span',
					null,
					title
				),
				_react2.default.createElement('hr', { className: 'date-picker__division' }),
				_react2.default.createElement(
					'ul',
					null,
					(0, _map3.default)(events, function (event, i) {
						return i < maxEvents && _react2.default.createElement(
							'li',
							{ key: event.id },
							_react2.default.createElement(_event.CalendarEvent, {
								icon: event.icon,
								socialIcon: event.socialIcon,
								socialIconColor: event.socialIconColor,
								title: event.title })
						);
					}),
					moreEvents > 0 && _react2.default.createElement(
						'li',
						null,
						moreEventsLabel
					)
				)
			);
		}
	}]);
	return EventsTooltip;
}(_react.Component);

EventsTooltip.propTypes = {
	title: _react.PropTypes.string,
	events: _react.PropTypes.array,
	moment: _react.PropTypes.func.isRequired,
	maxEvents: _react.PropTypes.number,
	moreEvents: _react.PropTypes.string
};
EventsTooltip.defaultProps = {
	events: [],
	maxEvents: 8
};
exports.default = (0, _i18nCalypso.localize)(EventsTooltip);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/counted-textarea/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CountedTextarea = undefined;

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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _formTextarea = __webpack_require__("./client/components/forms/form-textarea/index.jsx");

var _formTextarea2 = _interopRequireDefault(_formTextarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CountedTextarea = exports.CountedTextarea = function (_React$Component) {
	(0, _inherits3.default)(CountedTextarea, _React$Component);

	function CountedTextarea() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CountedTextarea);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CountedTextarea.__proto__ || (0, _getPrototypeOf2.default)(CountedTextarea)).call.apply(_ref, [this].concat(args))), _this), _this.renderCountPanel = function () {
			var length = _this.props.value.length;
			if (!length && _this.props.countPlaceholderLength) {
				length = _this.props.placeholder.length;
			}

			var panelText = void 0;
			if (_this.props.showRemainingCharacters && _this.props.acceptableLength) {
				panelText = _this.props.translate('%d character remaining', '%d characters remaining', {
					context: 'Input length',
					args: [_this.props.acceptableLength - length],
					count: _this.props.acceptableLength - length
				});
			} else {
				panelText = _this.props.translate('%d character', '%d characters', {
					context: 'Input length',
					args: [length],
					count: length
				});
			}

			return _react2.default.createElement(
				'div',
				{ className: 'counted-textarea__count-panel' },
				panelText,
				_this.props.children
			);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CountedTextarea, [{
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)('counted-textarea', this.props.className, {
				'is-exceeding-acceptable-length': this.props.acceptableLength && this.props.value.length > this.props.acceptableLength
			});

			return _react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement(_formTextarea2.default, (0, _extends3.default)({}, (0, _omit3.default)(this.props, 'className', 'acceptableLength', 'showRemainingCharacters', 'children', 'countPlaceholderLength', 'moment', 'numberFormat', 'translate'), {
					className: 'counted-textarea__input'
				})),
				this.renderCountPanel()
			);
		}
	}]);
	return CountedTextarea;
}(_react2.default.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


CountedTextarea.propTypes = {
	value: _propTypes2.default.string,
	placeholder: _propTypes2.default.string,
	countPlaceholderLength: _propTypes2.default.bool,
	onChange: _propTypes2.default.func,
	acceptableLength: _propTypes2.default.number,
	showRemainingCharacters: _propTypes2.default.bool,
	translate: _propTypes2.default.func
};
CountedTextarea.defaultProps = {
	value: '',
	placeholder: '',
	countPlaceholderLength: false,
	onChange: _noop3.default,
	showRemainingCharacters: false,
	translate: _i18nCalypso.translate
};
exports.default = (0, _i18nCalypso.localize)(CountedTextarea);

/***/ }),

/***/ "./client/components/forms/form-textarea/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
/**
 * External dependencies
 */
var FormTextarea = function FormTextarea(_ref) {
	var className = _ref.className,
	    isError = _ref.isError,
	    isValid = _ref.isValid,
	    children = _ref.children,
	    otherProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'isError', 'isValid', 'children']);
	return _react2.default.createElement(
		'textarea',
		(0, _extends3.default)({}, otherProps, {
			className: (0, _classnames2.default)(className, 'form-textarea', {
				'is-error': isError,
				'is-valid': isValid
			})
		}),
		children
	);
};

exports.default = FormTextarea;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/form-toggle/compact.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _formToggle = __webpack_require__("./client/components/forms/form-toggle/index.jsx");

var _formToggle2 = _interopRequireDefault(_formToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactFormToggle = function CompactFormToggle(_ref) {
	var className = _ref.className,
	    children = _ref.children,
	    otherProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children']);
	return _react2.default.createElement(
		_formToggle2.default,
		(0, _extends3.default)({}, otherProps, {
			className: (0, _classnames2.default)(className, 'is-compact')
		}),
		children
	);
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
exports.default = CompactFormToggle;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/form-toggle/index.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormToggle = function (_PureComponent) {
	(0, _inherits3.default)(FormToggle, _PureComponent);

	function FormToggle() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, FormToggle);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FormToggle.__proto__ || (0, _getPrototypeOf2.default)(FormToggle)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (event) {
			if (_this.props.disabled) {
				return;
			}

			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				_this.props.onChange(!_this.props.checked);
			}

			_this.props.onKeyDown(event);
		}, _this.onClick = function () {
			if (!_this.props.disabled) {
				_this.props.onChange(!_this.props.checked);
			}
		}, _this.onLabelClick = function (event) {
			if (_this.props.disabled) {
				return;
			}

			var nodeName = event.target.nodeName.toLowerCase();
			if (nodeName !== 'a' && nodeName !== 'input' && nodeName !== 'select') {
				event.preventDefault();
				_this.props.onChange(!_this.props.checked);
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(FormToggle, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.id = this.constructor.idNum++;
		}
	}, {
		key: 'render',
		value: function render() {
			var id = this.props.id || 'toggle-' + this.id;
			var wrapperClasses = (0, _classnames2.default)('form-toggle__wrapper', {
				'is-disabled': this.props.disabled
			});
			var toggleClasses = (0, _classnames2.default)('form-toggle', this.props.className, {
				'is-toggling': this.props.toggling
			});

			return _react2.default.createElement(
				'span',
				{ className: wrapperClasses },
				_react2.default.createElement('input', {
					id: id,
					className: toggleClasses,
					type: 'checkbox',
					checked: this.props.checked,
					readOnly: true,
					disabled: this.props.disabled
				}),
				_react2.default.createElement(
					'label',
					{ className: 'form-toggle__label', htmlFor: id },
					_react2.default.createElement('span', {
						className: 'form-toggle__switch',
						onClick: this.onClick,
						onKeyDown: this.onKeyDown,
						role: 'checkbox',
						'aria-checked': this.props.checked,
						'aria-label': this.props['aria-label'],
						tabIndex: this.props.disabled ? -1 : 0
					}),
					_react2.default.createElement(
						'span',
						{ className: 'form-toggle__label-content', onClick: this.onLabelClick },
						this.props.children
					)
				)
			);
		}
	}]);
	return FormToggle;
}(_react.PureComponent); /**
                          * External dependencies
                          */


FormToggle.propTypes = {
	onChange: _propTypes2.default.func,
	onKeyDown: _propTypes2.default.func,
	checked: _propTypes2.default.bool,
	disabled: _propTypes2.default.bool,
	id: _propTypes2.default.string,
	className: _propTypes2.default.string,
	toggling: _propTypes2.default.bool,
	'aria-label': _propTypes2.default.string,
	children: _propTypes2.default.node
};
FormToggle.defaultProps = {
	checked: false,
	disabled: false,
	onKeyDown: _noop3.default,
	onChange: _noop3.default
};
FormToggle.idNum = 0;
exports.default = FormToggle;
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

/***/ "./client/components/share/facebook-share-preview/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FacebookSharePreview = undefined;

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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var FacebookSharePreview = exports.FacebookSharePreview = function (_PureComponent) {
	(0, _inherits3.default)(FacebookSharePreview, _PureComponent);

	function FacebookSharePreview() {
		(0, _classCallCheck3.default)(this, FacebookSharePreview);
		return (0, _possibleConstructorReturn3.default)(this, (FacebookSharePreview.__proto__ || (0, _getPrototypeOf2.default)(FacebookSharePreview)).apply(this, arguments));
	}

	(0, _createClass3.default)(FacebookSharePreview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    articleUrl = _props.articleUrl,
			    externalProfilePicture = _props.externalProfilePicture,
			    externalProfileUrl = _props.externalProfileUrl,
			    externalDisplay = _props.externalDisplay,
			    imageUrl = _props.imageUrl,
			    message = _props.message,
			    translate = _props.translate;

			return _react2.default.createElement(
				'div',
				{ className: 'facebook-share-preview' },
				_react2.default.createElement(
					'div',
					{ className: 'facebook-share-preview__content' },
					_react2.default.createElement(
						'div',
						{ className: 'facebook-share-preview__header' },
						_react2.default.createElement(
							'div',
							{ className: 'facebook-share-preview__profile-picture-part' },
							_react2.default.createElement('img', {
								className: 'facebook-share-preview__profile-picture',
								src: externalProfilePicture
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'facebook-share-preview__profile-line-part' },
							_react2.default.createElement(
								'div',
								{ className: 'facebook-share-preview__profile-line' },
								_react2.default.createElement(
									'a',
									{ className: 'facebook-share-preview__profile-name', href: externalProfileUrl },
									externalDisplay
								),
								_react2.default.createElement(
									'span',
									null,
									translate('published an article on {{a}}WordPress{{/a}}', {
										components: {
											a: _react2.default.createElement('a', { href: '#' })
										}
									})
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'facebook-share-preview__meta-line' },
								_react2.default.createElement(
									'a',
									{ href: 'https://wordpress.com' },
									translate('WordPress')
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'facebook-share-preview__body' },
						_react2.default.createElement(
							'div',
							{ className: 'facebook-share-preview__message' },
							message
						),
						_react2.default.createElement(
							'div',
							{ className: 'facebook-share-preview__article-url-line' },
							_react2.default.createElement(
								'a',
								{ className: 'facebook-share-preview__article-url',
									href: articleUrl },
								articleUrl
							)
						),
						imageUrl && _react2.default.createElement(
							'div',
							{ className: 'facebook-share-preview__image-wrapper' },
							_react2.default.createElement('img', {
								className: 'facebook-share-preview__image',
								src: imageUrl
							})
						)
					)
				)
			);
		}
	}]);
	return FacebookSharePreview;
}(_react.PureComponent);

FacebookSharePreview.PropTypes = {
	articleUrl: _react.PropTypes.string,
	externalProfilePicture: _react.PropTypes.string,
	externalProfileUrl: _react.PropTypes.string,
	externalName: _react.PropTypes.string,
	imageUrl: _react.PropTypes.string,
	message: _react.PropTypes.string
};
exports.default = (0, _i18nCalypso.localize)(FacebookSharePreview);

/***/ }),

/***/ "./client/components/share/google-plus-share-preview/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GooglePlusSharePreview = undefined;

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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _helpers = __webpack_require__("./client/components/share/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var GooglePlusSharePreview = exports.GooglePlusSharePreview = function (_PureComponent) {
	(0, _inherits3.default)(GooglePlusSharePreview, _PureComponent);

	function GooglePlusSharePreview() {
		(0, _classCallCheck3.default)(this, GooglePlusSharePreview);
		return (0, _possibleConstructorReturn3.default)(this, (GooglePlusSharePreview.__proto__ || (0, _getPrototypeOf2.default)(GooglePlusSharePreview)).apply(this, arguments));
	}

	(0, _createClass3.default)(GooglePlusSharePreview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    articleUrl = _props.articleUrl,
			    articleTitle = _props.articleTitle,
			    articleContent = _props.articleContent,
			    externalProfilePicture = _props.externalProfilePicture,
			    externalProfileUrl = _props.externalProfileUrl,
			    externalName = _props.externalName,
			    imageUrl = _props.imageUrl,
			    message = _props.message;


			var summary = (0, _helpers.truncateArticleContent)(255, articleContent);

			return _react2.default.createElement(
				'div',
				{ className: 'google-plus-share-preview' },
				_react2.default.createElement(
					'div',
					{ className: 'google-plus-share-preview__content' },
					_react2.default.createElement(
						'div',
						{ className: 'google-plus-share-preview__header' },
						_react2.default.createElement(
							'div',
							{ className: 'google-plus-share-preview__profile-picture-part' },
							_react2.default.createElement('img', {
								className: 'google-plus-share-preview__profile-picture',
								src: externalProfilePicture
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'google-plus-share-preview__profile-line-part' },
							_react2.default.createElement(
								'div',
								{ className: 'google-plus-share-preview__profile-line' },
								_react2.default.createElement(
									'a',
									{ className: 'google-plus-share-preview__profile-name', href: externalProfileUrl },
									externalName
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'google-plus-share-preview__body' },
						_react2.default.createElement(
							'div',
							{ className: 'google-plus-share-preview__message' },
							message
						),
						_react2.default.createElement(
							'div',
							{ className: 'google-plus-share-preview__article-summary' },
							summary
						),
						_react2.default.createElement(
							'div',
							{ className: 'google-plus-share-preview__article-title' },
							_react2.default.createElement(
								'a',
								{ className: 'google-plus-share-preview__article-url', href: articleUrl },
								articleTitle
							)
						),
						imageUrl && _react2.default.createElement(
							'div',
							{ className: 'google-plus-share-preview__image-wrapper' },
							_react2.default.createElement(
								'a',
								{ href: articleUrl },
								_react2.default.createElement('img', {
									className: 'google-plus-share-preview__image',
									src: imageUrl
								})
							)
						)
					)
				)
			);
		}
	}]);
	return GooglePlusSharePreview;
}(_react.PureComponent);

GooglePlusSharePreview.propTypes = {
	articleUrl: _propTypes2.default.string,
	externalProfilePicture: _propTypes2.default.string,
	externalProfileUrl: _propTypes2.default.string,
	externalName: _propTypes2.default.string,
	imageUrl: _propTypes2.default.string,
	message: _propTypes2.default.string
};
exports.default = (0, _i18nCalypso.localize)(GooglePlusSharePreview);

/***/ }),

/***/ "./client/components/share/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.truncateArticleContent = exports.firstValid = exports.hardTruncation = exports.truncatedAtSpace = exports.shortEnough = undefined;

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Mostly copied from Seo Preview

/**
 * External dependencies
 */
var shortEnough = exports.shortEnough = function shortEnough(limit) {
	return function (title) {
		return title.length <= limit ? title : false;
	};
};

var truncatedAtSpace = exports.truncatedAtSpace = function truncatedAtSpace(lower, upper) {
	return function (fullTitle) {
		var title = fullTitle.slice(0, upper);
		var lastSpace = title.lastIndexOf(' ');

		return lastSpace > lower && lastSpace < upper ? title.slice(0, lastSpace).concat('…') : false;
	};
};

var hardTruncation = exports.hardTruncation = function hardTruncation(limit) {
	return function (title) {
		return title.slice(0, limit).concat('…');
	};
};

var firstValid = exports.firstValid = function firstValid() {
	for (var _len = arguments.length, predicates = Array(_len), _key = 0; _key < _len; _key++) {
		predicates[_key] = arguments[_key];
	}

	return function (a) {
		return (0, _find3.default)(predicates, function (p) {
			return false !== p(a);
		})(a);
	};
};

var truncateArticleContent = exports.truncateArticleContent = function truncateArticleContent(maxCharacters, content) {
	if (content.length <= maxCharacters) {
		return content;
	}

	var truncated = content.slice(0, maxCharacters);

	// don't trim off the last word if we truncated at
	// the end of the word
	if (content[maxCharacters + 1] === ' ') {
		return content + '\u2026';
	}

	var lastSpace = truncated.lastIndexOf(' ');
	return truncated.slice(0, lastSpace).concat('…');
};

/***/ }),

/***/ "./client/components/share/linkedin-share-preview/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LinkedinSharePreview = undefined;

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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var LinkedinSharePreview = exports.LinkedinSharePreview = function (_PureComponent) {
	(0, _inherits3.default)(LinkedinSharePreview, _PureComponent);

	function LinkedinSharePreview() {
		(0, _classCallCheck3.default)(this, LinkedinSharePreview);
		return (0, _possibleConstructorReturn3.default)(this, (LinkedinSharePreview.__proto__ || (0, _getPrototypeOf2.default)(LinkedinSharePreview)).apply(this, arguments));
	}

	(0, _createClass3.default)(LinkedinSharePreview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    articleUrl = _props.articleUrl,
			    externalDisplay = _props.externalDisplay,
			    externalProfilePicture = _props.externalProfilePicture,
			    externalProfileUrl = _props.externalProfileUrl,
			    imageUrl = _props.imageUrl,
			    message = _props.message,
			    siteDomain = _props.siteDomain;

			return _react2.default.createElement(
				'div',
				{ className: 'linkedin-share-preview' },
				_react2.default.createElement(
					'div',
					{ className: 'linkedin-share-preview__content' },
					_react2.default.createElement(
						'div',
						{ className: 'linkedin-share-preview__header' },
						_react2.default.createElement(
							'div',
							{ className: 'linkedin-share-preview__profile-picture-part' },
							_react2.default.createElement('img', {
								className: 'linkedin-share-preview__profile-picture',
								src: externalProfilePicture
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'linkedin-share-preview__profile-line-part' },
							_react2.default.createElement(
								'div',
								{ className: 'linkedin-share-preview__profile-line' },
								_react2.default.createElement(
									'a',
									{ className: 'linkedin-share-preview__profile-name', href: externalProfileUrl },
									externalDisplay
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'linkedin-share-preview__body' },
						imageUrl && _react2.default.createElement(
							'div',
							{ className: 'linkedin-share-preview__image-wrapper' },
							_react2.default.createElement(
								'a',
								{ href: articleUrl },
								_react2.default.createElement('img', {
									className: 'linkedin-share-preview__image',
									src: imageUrl
								})
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'linkedin-share-preview__message-part' },
							_react2.default.createElement(
								'a',
								{ className: 'linkedin-share-preview__message-link', href: articleUrl },
								_react2.default.createElement(
									'div',
									{ className: 'linkedin-share-preview__message' },
									message
								),
								_react2.default.createElement(
									'div',
									{ className: 'linkedin-share-preview__site-url' },
									siteDomain
								)
							)
						)
					)
				)
			);
		}
	}]);
	return LinkedinSharePreview;
}(_react.PureComponent);

LinkedinSharePreview.PropTypes = {
	articleUrl: _react.PropTypes.string,
	externalProfilePicture: _react.PropTypes.string,
	externalProfileUrl: _react.PropTypes.string,
	imageUrl: _react.PropTypes.string,
	message: _react.PropTypes.string,
	name: _react.PropTypes.string,
	siteDomain: _react.PropTypes.string
};
exports.default = (0, _i18nCalypso.localize)(LinkedinSharePreview);

/***/ }),

/***/ "./client/components/share/tumblr-share-preview/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TumblrSharePreview = undefined;

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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _helpers = __webpack_require__("./client/components/share/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Internal dependecies */
var TumblrSharePreview = exports.TumblrSharePreview = function (_PureComponent) {
	(0, _inherits3.default)(TumblrSharePreview, _PureComponent);

	function TumblrSharePreview() {
		(0, _classCallCheck3.default)(this, TumblrSharePreview);
		return (0, _possibleConstructorReturn3.default)(this, (TumblrSharePreview.__proto__ || (0, _getPrototypeOf2.default)(TumblrSharePreview)).apply(this, arguments));
	}

	(0, _createClass3.default)(TumblrSharePreview, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    externalProfilePicture = _props.externalProfilePicture,
			    externalProfileUrl = _props.externalProfileUrl,
			    externalName = _props.externalName,
			    message = _props.message,
			    articleUrl = _props.articleUrl,
			    articleTitle = _props.articleTitle,
			    articleContent = _props.articleContent,
			    imageUrl = _props.imageUrl,
			    translate = _props.translate;


			var summary = (0, _helpers.truncateArticleContent)(396, articleContent);
			return _react2.default.createElement(
				'div',
				{ className: 'tumblr-share-preview' },
				_react2.default.createElement(
					'div',
					{ className: 'tumblr-share-preview__content' },
					_react2.default.createElement(
						'div',
						{ className: 'tumblr-share-preview__profile-picture-part' },
						_react2.default.createElement('img', {
							className: 'tumblr-share-preview__profile-picture',
							src: externalProfilePicture
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'tumblr-share-preview__content-part' },
						_react2.default.createElement(
							'div',
							{ className: 'tumblr-share-preview__profile-line' },
							_react2.default.createElement(
								'a',
								{
									className: 'tumblr-share-preview__profile-name',
									href: externalProfileUrl
								},
								externalName
							),
							_react2.default.createElement(
								'span',
								{ className: 'tumblr-share-preview__profile-wp' },
								translate('WordPress')
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'tumblr-share-preview__post-title-part' },
							_react2.default.createElement(
								'div',
								{ className: 'tumblr-share-preview__post-title' },
								articleTitle
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'tumblr-share-preview__message' },
							_react2.default.createElement(
								'a',
								{ className: 'tumblr-share-preview__message-link',
									href: articleUrl },
								message
							)
						),
						imageUrl && _react2.default.createElement(
							'div',
							{ className: 'tumblr-share-preview__image-wrapper' },
							_react2.default.createElement('img', {
								className: 'tumblr-share-preview__image',
								src: imageUrl
							})
						),
						_react2.default.createElement(
							'div',
							{ className: 'tumblr-share-preview__summery-part' },
							_react2.default.createElement(
								'blockquote',
								{ className: 'tumblr-share-preview__summery' },
								summary
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'tumblr-share-preview__article-link-line' },
							_react2.default.createElement(
								'a',
								{ className: 'tumblr-share-preview__article-link',
									href: articleUrl },
								translate('View On WordPress')
							)
						)
					)
				)
			);
		}
	}]);
	return TumblrSharePreview;
}(_react.PureComponent); /**
                          * External dependencies
                          */


exports.default = (0, _i18nCalypso.localize)(TumblrSharePreview);

/***/ }),

/***/ "./client/components/share/twitter-share-preview/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TwitterSharePreview = undefined;

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

var TwitterSharePreview = exports.TwitterSharePreview = function (_PureComponent) {
	(0, _inherits3.default)(TwitterSharePreview, _PureComponent);

	function TwitterSharePreview() {
		(0, _classCallCheck3.default)(this, TwitterSharePreview);
		return (0, _possibleConstructorReturn3.default)(this, (TwitterSharePreview.__proto__ || (0, _getPrototypeOf2.default)(TwitterSharePreview)).apply(this, arguments));
	}

	(0, _createClass3.default)(TwitterSharePreview, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    articleUrl = _props.articleUrl,
			    externalDisplay = _props.externalDisplay,
			    externalName = _props.externalName,
			    externalProfileURL = _props.externalProfileURL,
			    externalProfilePicture = _props.externalProfilePicture,
			    message = _props.message,
			    imageUrl = _props.imageUrl;


			return _react2.default.createElement(
				"div",
				{ className: "twitter-share-preview" },
				_react2.default.createElement(
					"div",
					{ className: "twitter-share-preview__content" },
					_react2.default.createElement(
						"div",
						{ className: "twitter-share-preview__profile-picture-part" },
						_react2.default.createElement("img", {
							className: "twitter-share-preview__profile-picture",
							src: externalProfilePicture
						})
					),
					_react2.default.createElement(
						"div",
						{ className: "twitter-share-preview__content-part" },
						_react2.default.createElement(
							"div",
							{ className: "twitter-share-preview__profile-line" },
							_react2.default.createElement(
								"a",
								{
									className: "twitter-share-preview__profile-name",
									href: externalProfileURL
								},
								externalName
							),
							_react2.default.createElement(
								"a",
								{
									className: "twitter-share-preview__profile-handle",
									href: externalProfileURL
								},
								externalDisplay
							)
						),
						_react2.default.createElement(
							"div",
							{ className: "twitter-share-preview__message" },
							message
						),
						_react2.default.createElement(
							"div",
							{ className: "twitter-share-preview__article-url-line" },
							_react2.default.createElement(
								"a",
								{ className: "twitter-share-preview__article-url",
									href: articleUrl },
								articleUrl
							)
						),
						imageUrl && _react2.default.createElement(
							"div",
							{ className: "twitter-share-preview__image-wrapper" },
							_react2.default.createElement("img", {
								className: "twitter-share-preview__image",
								src: imageUrl
							})
						)
					)
				)
			);
		}
	}]);
	return TwitterSharePreview;
}(_react.PureComponent); /**
                          * External dependencies
                          */


exports.default = TwitterSharePreview;

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

/***/ "./client/components/tooltip/index.jsx":
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

var _popover = __webpack_require__("./client/components/popover/index.jsx");

var _popover2 = _interopRequireDefault(_popover);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var noop = function noop() {};

var Tooltip = function (_Component) {
	(0, _inherits3.default)(Tooltip, _Component);

	function Tooltip() {
		(0, _classCallCheck3.default)(this, Tooltip);
		return (0, _possibleConstructorReturn3.default)(this, (Tooltip.__proto__ || (0, _getPrototypeOf2.default)(Tooltip)).apply(this, arguments));
	}

	(0, _createClass3.default)(Tooltip, [{
		key: 'render',
		value: function render() {
			if (!this.props.showOnMobile && _viewport2.default.isMobile()) {
				return null;
			}

			var classes = (0, _classnames2.default)('popover', 'tooltip', 'is-' + this.props.status, 'is-' + this.props.position, this.props.className);

			return _react2.default.createElement(
				_popover2.default,
				{
					autoPosition: this.props.autoPosition,
					className: classes,
					rootClassName: this.props.rootClassName,
					context: this.props.context,
					id: this.props.id,
					isVisible: this.props.isVisible,
					onClose: noop,
					position: this.props.position,
					showDelay: this.props.showDelay
				},
				this.props.children
			);
		}
	}]);
	return Tooltip;
}(_react.Component);

Tooltip.propTypes = {
	autoPosition: _react.PropTypes.bool,
	className: _react.PropTypes.string,
	id: _react.PropTypes.string,
	isVisible: _react.PropTypes.bool,
	position: _react.PropTypes.string,
	rootClassName: _react.PropTypes.string,
	status: _react.PropTypes.string,
	showDelay: _react.PropTypes.number,
	showOnMobile: _react.PropTypes.bool
};
Tooltip.defaultProps = {
	showDelay: 100,
	position: 'top',
	showOnMobile: false
};
exports.default = Tooltip;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/track-input-changes/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'TrackInputChanges',

	propTypes: {
		onNewValue: _react2.default.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onNewValue: _noop3.default
		};
	},
	componentWillMount: function componentWillMount() {
		this.inputEdited = false;
	},
	onInputChange: function onInputChange() /*event*/{
		this.inputEdited = true;
	},
	onInputBlur: function onInputBlur(event) {
		if (this.inputEdited) {
			this.props.onNewValue(event);
			this.inputEdited = false;
		}
	},
	render: function render() {
		var _this = this;

		// Multiple children not supported
		var child = _react2.default.Children.only(this.props.children);

		var props = (0, _assign3.default)({}, child.props, {
			onChange: function onChange(event) {
				if (typeof child.props.onChange === 'function') {
					child.props.onChange.call(child, event);
				}
				_this.onInputChange(event);
			},
			onBlur: function onBlur(event) {
				if (typeof child.props.onBlur === 'function') {
					child.props.onBlur.call(child, event);
				}
				_this.onInputBlur(event);
			}
		});

		return _react2.default.cloneElement(child, props);
	}
}); /**
     * External dependencies
     */

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

/***/ "./client/lib/mixins/url-search/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:url-search'),
    page = __webpack_require__("./node_modules/page/index.js");

/**
 * Internal dependencies
 */
var buildUrl = __webpack_require__("./client/lib/mixins/url-search/build-url.js");

module.exports = {

	getInitialState: function getInitialState() {
		return {
			searchOpen: false
		};
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!nextProps.search) {
			this.setState({
				searchOpen: false
			});
		}
	},

	doSearch: function doSearch(keywords) {
		var searchURL;

		this.setState({
			searchOpen: false !== keywords
		});

		if (this.onSearch) {
			this.onSearch(keywords);
			return;
		}

		searchURL = buildUrl(window.location.href, keywords);

		debug('search posts for:', keywords);
		if (this.props.search && keywords) {
			debug('replacing URL: ' + searchURL);
			page.replace(searchURL);
		} else {
			debug('setting URL: ' + searchURL);
			page(searchURL);
		}
	},

	getSearchOpen: function getSearchOpen() {
		return this.state.searchOpen !== false || this.props.search;
	}

};

/***/ }),

/***/ "./client/lib/posts/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _fromPairs2 = __webpack_require__("./node_modules/lodash/fromPairs.js");

var _fromPairs3 = _interopRequireDefault(_fromPairs2);

var _defer2 = __webpack_require__("./node_modules/lodash/defer.js");

var _defer3 = _interopRequireDefault(_defer2);

var _clone2 = __webpack_require__("./node_modules/lodash/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _utils = __webpack_require__("./client/state/posts/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:posts'),
    store = __webpack_require__("./node_modules/store/store.js");


/**
 * Internal dependencies
 */
var wpcom = __webpack_require__("./client/lib/wp/browser.js"),
    PostsStore = __webpack_require__("./client/lib/posts/posts-store.js"),
    PostEditStore = __webpack_require__("./client/lib/posts/post-edit-store.js"),
    postListStoreFactory = __webpack_require__("./client/lib/posts/post-list-store-factory.js"),
    PreferencesStore = __webpack_require__("./client/lib/preferences/store.js"),
    sites = __webpack_require__("./client/lib/sites-list/index.js")(),
    utils = __webpack_require__("./client/lib/posts/utils.js"),
    versionCompare = __webpack_require__("./client/lib/version-compare/index.js"),
    Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    stats = __webpack_require__("./client/lib/posts/stats.js");


var PostActions;

/**
 * Helper for performing a metadata operation on the currently edited post.
 * Accepts a key, value, and operation, where key may be a string or array
 * of string keys. Alternatively, specify an object of key value pairs as the
 * first parameter. Dispatches an `EDIT_POST` action.
 *
 * @param  {(String|String[]|Object)} key       The metadata key(s) or object
 *                                              of metadata key-value pairs
 * @param  {*}                        value     The metadata value
 * @param  {String}                   operation The metadata operation to
 *                                              perform (`add`, `update`,
 *                                              or `delete`)
 */
function handleMetadataOperation(key, value, operation) {
	var post = PostEditStore.get(),
	    metadata;

	if ('string' === typeof key || Array.isArray(key)) {
		// Normalize a string or array of string keys to an object of key value
		// pairs. To accomodate both, we coerce the key into an array before
		// mapping to pull the object pairs.
		key = (0, _fromPairs3.default)([].concat(key).map(function (meta) {
			return [meta, value];
		}));
	}

	// Overwrite duplicates based on key
	metadata = (post.metadata || []).filter(function (meta) {
		return !key.hasOwnProperty(meta.key);
	});

	(0, _keys2.default)(key).forEach(function (objectKey) {
		// `update` is a sufficient operation for new metadata, as it will add
		// the metadata if it does not already exist. Similarly, we're not
		// concerned with deleting a key which was added during previous edits,
		// since this will effectively noop.
		var meta = {
			key: objectKey,
			operation: operation
		};

		if ('delete' !== operation) {
			meta.value = key[objectKey];
		}

		metadata.push(meta);
	});

	Dispatcher.handleViewAction({
		type: 'EDIT_POST',
		post: {
			metadata: metadata
		}
	});
}

/**
 * Normalizes attributes to API expectations
 * @param  {object} attributes - changed attributes
 * @return {object} - normalized attributes
 */
function normalizeApiAttributes(attributes) {
	attributes = (0, _clone3.default)(attributes);
	attributes = (0, _utils.normalizeTermsForApi)(attributes);

	if (attributes.author) {
		attributes.author = attributes.author.ID;
	}

	return attributes;
}

PostActions = {
	/**
  * Start keeping track of edits to a new post
  *
  * @param {Number} siteId  Site ID
  * @param {Object} options Edit options
  */
	startEditingNew: function startEditingNew(siteId, options) {
		var args;
		options = options || {};

		args = {
			type: 'DRAFT_NEW_POST',
			siteId: siteId,
			postType: options.type || 'post',
			title: options.title,
			content: options.content
		};

		Dispatcher.handleViewAction(args);
	},

	/**
  * Load an existing post and keep track of edits to it
  *
  * @param {Number} siteId Site ID to load post from
  * @param {Number} postId Post ID to load
  */
	startEditingExisting: function startEditingExisting(siteId, postId) {
		var currentPost = PostEditStore.get(),
		    postHandle;

		if (!siteId) {
			return;
		}

		if (currentPost && currentPost.site_ID === siteId && currentPost.ID === postId) {
			return; // already editing same post
		}

		Dispatcher.handleViewAction({
			type: 'START_EDITING_POST',
			siteId: siteId,
			postId: postId
		});

		postHandle = wpcom.site(siteId).post(postId);

		postHandle.get({ context: 'edit', meta: 'autosave' }, function (error, data) {
			Dispatcher.handleServerAction({
				type: 'RECEIVE_POST_TO_EDIT',
				error: error,
				post: data
			});
		});
	},

	/**
  * Stop keeping track of edits to a post
  */
	stopEditing: function stopEditing() {
		Dispatcher.handleViewAction({
			type: 'STOP_EDITING_POST'
		});
	},

	autosave: function autosave(callback) {
		var post = PostEditStore.get(),
		    savedPost = PostEditStore.getSavedPost(),
		    siteHandle = wpcom.undocumented().site(post.site_ID),
		    site;

		callback = callback || function () {};

		if (!PostEditStore.isDirty()) {
			return callback(new Error('NOT_DIRTY'));
		}

		store.set('wpcom-autosave:' + post.site_ID + ':' + post.ID, post);

		// TODO: incorporate post locking
		if (utils.isPublished(savedPost) || utils.isPublished(post)) {
			site = sites.getSite(post.site_ID);

			if (!post.ID || !site || site.jetpack && versionCompare(site.options.jetpack_version, '3.7.0-dev', '<')) {
				return callback(new Error('NO_AUTOSAVE'));
			}

			Dispatcher.handleViewAction({
				type: 'POST_AUTOSAVE',
				post: post
			});

			siteHandle.postAutosave(post.ID, {
				content: post.content,
				title: post.title,
				excerpt: post.excerpt
			}, function (error, data) {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_POST_AUTOSAVE',
					error: error,
					autosave: data
				});

				callback(error, data);
			});
		} else {
			PostActions.saveEdited(null, null, callback, { recordSaveEvent: false });
		}
	},

	/**
  * Prevents the post from being saved
  *
  * @param {String} key Unique identifier to sandbox block condition
  */
	blockSave: function blockSave(key) {
		Dispatcher.handleViewAction({
			type: 'BLOCK_EDIT_POST_SAVE',
			key: key
		});
	},

	/**
  * Allows a post to be saved after having been blocked
  *
  * @param {String} key Unique identifier to sandbox block condition
  */
	unblockSave: function unblockSave(key) {
		Dispatcher.handleViewAction({
			type: 'UNBLOCK_EDIT_POST_SAVE',
			key: key
		});
	},

	/**
  * Edits attributes on a post
  *
  * @param {object} attributes to change
  */
	edit: function edit(attributes) {
		Dispatcher.handleViewAction({
			type: 'EDIT_POST',
			post: attributes
		});
	},

	/**
  * Edits the raw TinyMCE content of a post
  *
  * @param {string} content Raw content
  */
	editRawContent: function editRawContent(content) {
		Dispatcher.handleViewAction({
			type: 'EDIT_POST_RAW_CONTENT',
			content: content
		});
	},

	/**
  * Unsets the raw TinyMCE content value
  */
	resetRawContent: function resetRawContent() {
		Dispatcher.handleViewAction({
			type: 'RESET_POST_RAW_CONTENT'
		});
	},

	/**
  * Edits metadata attributes on a post
  *
  * @param {(string|object)} key The metadata key, or an object of key-value pairs
  * @param {*} value The metadata value
  */
	updateMetadata: function updateMetadata(key, value) {
		handleMetadataOperation(key, value, 'update');
	},

	/**
  * Deletes a metadata attribute from a post
  *
  * @param {string} key The metadata key
  */
	deleteMetadata: function deleteMetadata(key) {
		handleMetadataOperation(key, null, 'delete');
	},

	/**
  * Calls out to API to save a Post object
  *
  * @param {object} attributes post attributes to change before saving
  * @param {object} context additional properties for recording the save event
  * @param {function} callback receives ( err, post ) arguments
  * @param {object} options object with optional recordSaveEvent property. True if you want to record the save event.
  */
	saveEdited: function saveEdited(attributes, context, callback, options) {
		var post, postHandle, query, changedAttributes, rawContent, mode, isNew;

		Dispatcher.handleViewAction({
			type: 'EDIT_POST',
			post: attributes
		});

		post = PostEditStore.get();

		// Don't send a request to the API if the post has no content (title,
		// content, or excerpt). A post without content is invalid.
		if (!PostEditStore.hasContent()) {
			(0, _defer3.default)(callback, new Error('NO_CONTENT'), post);
			return;
		}

		// Prevent saving post if another module has blocked saving.
		if (PostEditStore.isSaveBlocked()) {
			(0, _defer3.default)(callback, new Error('SAVE_BLOCKED'), post);
			return;
		}

		changedAttributes = PostEditStore.getChangedAttributes();

		// Don't send a request to the API if the post is unchanged. An empty
		// post request is invalid.
		if (!(0, _keys2.default)(changedAttributes).length) {
			(0, _defer3.default)(callback, new Error('NO_CHANGE'), post);
			return;
		}

		changedAttributes = normalizeApiAttributes(changedAttributes);
		rawContent = PostEditStore.getRawContent();
		mode = PreferencesStore.get('editor-mode');
		isNew = !post.ID;

		// There is a separate action dispatched here because we need to queue changes
		// that occur while the subsequent AJAX request is in-flight
		Dispatcher.handleViewAction({
			type: 'EDIT_POST_SAVE'
		});

		postHandle = wpcom.site(post.site_ID).post(post.ID);
		query = {
			context: 'edit',
			apiVersion: '1.2'
		};

		if (!options || options.recordSaveEvent !== false) {
			stats.recordSaveEvent(context); // do this before changing status from 'future'
		}

		if (changedAttributes && changedAttributes.status === 'future' && utils.isFutureDated(post) || changedAttributes && changedAttributes.status === 'publish' && utils.isBackDated(post)) {
			// HACK: This is necessary because for some reason v1.1 and v1.2 of the update post endpoints
			// don't accept a status of 'future' under any conditions.
			// We also need to make sure that we send the date so that the post isn't published.

			// HACK^2: If a post is back-dated, we must also pass in the date, otherwise the API resets the date
			// here /public.api/rest/json-endpoints/class.wpcom-json-api-update-post-v1-2-endpoint.php#L102
			changedAttributes = (0, _assign3.default)({}, changedAttributes, {
				status: 'publish',
				date: post.date
			});
		}

		postHandle[isNew ? 'add' : 'update'](query, changedAttributes, function (error, data) {
			var original, currentMode;

			currentMode = PreferencesStore.get('editor-mode');

			if (!error) {
				original = PostsStore.get(data.global_ID);
			}

			Dispatcher.handleServerAction({
				type: 'RECEIVE_POST_BEING_EDITED',
				error: error,
				// Only pass the rawContent if the mode hasn't changed since the request
				// was initiated. Changing the mode re-initializes the rawContent, so we don't want to stomp on
				// it
				rawContent: mode === currentMode ? rawContent : null,
				isNew: isNew,
				original: original,
				post: data
			});

			callback(error, data);
		});
	},

	/**
  * Calls out to API to update Post object with any changed attributes
  *
  * @param {object} post to be changed
  * @param {object} attributes only send the attributes to be changed
  * @param {function} callback callback receives ( err, post ) arguments
  */
	update: function update(post, attributes, callback) {
		var postHandle = wpcom.site(post.site_ID).post(post.ID);

		postHandle.update(attributes, PostActions.receiveUpdate.bind(null, callback));
	},

	/**
  * Sends `delete` request to the API. The first request
  * updates status to `trash`, the second request deletes the post.
  *
  * @param {object} post to be trashed
  * @param {function} callback that receives ( err, post ) arguments
  */
	trash: function trash(post, callback) {
		var postHandle = wpcom.site(post.site_ID).post(post.ID);

		postHandle.delete(PostActions.receiveUpdate.bind(null, callback));
	},

	/**
  * Restores post/page from trash
  *
  * @param {object} post to be trashed
  * @param {function} callback that receives ( err, post ) arguments
  */
	restore: function restore(post, callback) {
		var postHandle = wpcom.site(post.site_ID).post(post.ID);

		postHandle.restore(PostActions.receiveUpdate.bind(null, callback));
	},

	queryPosts: function queryPosts(options) {
		var postListStoreId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

		Dispatcher.handleViewAction({
			type: 'QUERY_POSTS',
			options: options,
			postListStoreId: postListStoreId
		});
	},

	/**
 * Fetch next page of posts from the user's sites via the WordPress.com REST API.
 *
 * @api public
 */
	fetchNextPage: function fetchNextPage() {
		var postListStoreId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

		var postListStore = postListStoreFactory(postListStoreId);

		if (postListStore.isLastPage() || postListStore.isFetchingNextPage()) {
			return;
		}

		Dispatcher.handleViewAction({
			type: 'FETCH_NEXT_POSTS_PAGE',
			postListStoreId: postListStoreId
		});

		var id = postListStore.getID();
		var params = postListStore.getNextPageParams();
		var siteId = postListStore.getSiteId();

		if (siteId) {
			wpcom.site(siteId).postsList(params, PostActions.receivePage.bind(null, id, postListStoreId));
		} else {
			wpcom.me().postsList(params, PostActions.receivePage.bind(null, id, postListStoreId));
		}
	},

	receivePage: function receivePage(id, postListStoreId, error, data) {
		Dispatcher.handleServerAction({
			type: 'RECEIVE_POSTS_PAGE',
			id: id,
			postListStoreId: postListStoreId,
			error: error,
			data: data
		});
	},

	fetchUpdated: function fetchUpdated() {
		var postListStoreId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

		var postListStore = postListStoreFactory(postListStoreId);

		if (postListStore.isFetchingNextPage()) {
			return;
		}

		Dispatcher.handleViewAction({
			type: 'FETCH_UPDATED_POSTS',
			postListStoreId: postListStoreId
		});

		var id = postListStore.getID();
		var params = postListStore.getUpdatesParams();
		var siteId = postListStore.getSiteId();

		if (siteId) {
			debug('Fetching posts that have been updated for %s since %s %o', siteId, params.modified_after, params);
			wpcom.site(siteId).postsList(params, PostActions.receiveUpdated.bind(null, id, postListStoreId));
		} else {
			debug('Fetching posts that have been updated since %s %o', params.modified_after, params);
			wpcom.me().postsList(params, PostActions.receiveUpdated.bind(null, id, postListStoreId));
		}
	},

	receiveUpdated: function receiveUpdated(id, postListStoreId, error, data) {
		Dispatcher.handleServerAction({
			type: 'RECEIVE_UPDATED_POSTS',
			id: id,
			postListStoreId: postListStoreId,
			error: error,
			data: data
		});
	},

	receiveUpdate: function receiveUpdate(callback, error, data) {
		var original;

		if (!error) {
			original = PostsStore.get(data.global_ID);
		}

		Dispatcher.handleServerAction({
			type: 'RECEIVE_UPDATED_POST',
			error: error,
			original: original,
			post: data
		});
		callback(error, data);
	},

	fetchCounts: function fetchCounts(siteId, options) {
		Dispatcher.handleViewAction({
			type: 'FETCH_POST_COUNTS',
			siteId: siteId
		});

		wpcom.undocumented().site(siteId).postCounts(options, function (error, data) {
			Dispatcher.handleServerAction({
				type: 'RECEIVE_POST_COUNTS',
				error: error,
				data: data,
				siteId: siteId
			});
		});
	}
};

module.exports = PostActions;

/***/ }),

/***/ "./client/lib/posts/post-list-cache-store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _intersection2 = __webpack_require__("./node_modules/lodash/intersection.js");

var _intersection3 = _interopRequireDefault(_intersection2);

exports.getCacheKey = getCacheKey;
exports.setCanonicalList = setCanonicalList;
exports.getCanonicalList = getCanonicalList;
exports.deleteCanonicalList = deleteCanonicalList;

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _sitesList = __webpack_require__("./client/lib/sites-list/index.js");

var _sitesList2 = _interopRequireDefault(_sitesList);

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _cacheIndex = __webpack_require__("./client/lib/wp/sync-handler/cache-index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var cache = {};

/**
 * Internal dependencies
 */

var _canonicalCache = {};
var TTL_IN_MS = 5 * 60 * 1000; // five minutes
var sites = (0, _sitesList2.default)();
var PostsListCache = {
	get: get,
	_reset: function _reset() {
		cache = {};
	}
};
var debug = (0, _debug2.default)('calypso:posts-list:cache');

function isStale(list) {
	var now = new Date().getTime();
	var timeSaved = list.timeSaved;

	return now - timeSaved > TTL_IN_MS;
}

function get(listKey) {
	if (isListKeyFresh(listKey)) {
		return cache[listKey].list;
	}

	// Delete the dirty cache to force a request for new data
	if (cache[listKey] && cache[listKey].dirty) {
		debug('delete cached list %o', listKey);
		delete cache[listKey];
		delete _canonicalCache[listKey];
	}
}

function set(list) {
	var listKey = getCacheKey(list.query);

	// To make sure that a list marked dirty is reset the next time
	// it is retrieved we skip updating entries that are dirty
	if (!cache[listKey] || !cache[listKey].dirty) {
		cache[listKey] = {
			timeStored: new Date().getTime(),
			dirty: false,
			list: list,
			listKey: listKey
		};
	}
}

function markDirty(post, oldStatus) {
	var site = sites.getSite(post.site_ID);
	var affectedSites = [site.slug, site.ID, false];
	var affectedStatuses = [post.status, oldStatus];
	var listStatuses = void 0,
	    key = void 0,
	    entry = void 0,
	    list = void 0;

	for (key in cache) {
		if (!cache.hasOwnProperty(key)) {
			continue;
		}
		entry = cache[key];

		list = entry.list;

		if (list.query.type !== post.type) {
			continue;
		}

		if (-1 === affectedSites.indexOf(list.query.siteId)) {
			continue;
		}

		listStatuses = list.query.status.split(','); // some statuses are grouped

		if ((0, _intersection3.default)(listStatuses, affectedStatuses).length === 0) {
			continue;
		}

		entry.dirty = true;
	}

	// clear api cache for records with matching site/status
	_cacheIndex.cacheIndex.clearRecordsByParamFilter(function (reqParams) {
		var siteIdentifiers = affectedSites.slice(0, -1); // remove the `false` value from above
		var affectedPaths = ['/me/posts'].concat((0, _toConsumableArray3.default)(siteIdentifiers.map(function (status) {
			return '/sites/' + status + '/posts';
		}))); // construct matching api routes
		var recordStatuses = reqParams.query && reqParams.query.status ? reqParams.query.status.split(',') : [];
		var intersectingStatuses = (0, _intersection3.default)(recordStatuses, affectedStatuses);
		if (affectedPaths.indexOf(reqParams.path) === -1) {
			return false;
		}
		if (!intersectingStatuses.length) {
			return false;
		}
		return true;
	});
}

function isListKeyFresh(listKey) {
	return cache[listKey] && !isStale(cache[listKey]) && !cache[listKey].dirty;
}

PostsListCache.dispatchToken = _dispatcher2.default.register(function (payload) {
	var action = payload.action,
	    PostListStore = __webpack_require__("./client/lib/posts/post-list-store-factory.js")();

	_dispatcher2.default.waitFor([PostListStore.dispatchToken]);

	switch (action.type) {
		case 'FETCH_NEXT_POSTS_PAGE':
			set(PostListStore.get());
			break;
		case 'RECEIVE_POSTS_PAGE':
			set(PostListStore.get());
			break;

		case 'RECEIVE_UPDATED_POSTS':
			set(PostListStore.get());
			break;

		case 'RECEIVE_UPDATED_POST':
		case 'RECEIVE_POST_BEING_EDITED':
			if (action.post) {
				markDirty(action.post, action.original ? action.original.status : null);
				set(PostListStore.get());
			}
			break;
	}
});

function getCacheKey(options) {
	var cacheKey = [];
	var keys = (0, _keys2.default)(options).sort();
	keys.forEach(function (key) {
		cacheKey.push(key + '-' + options[key]);
	});
	return cacheKey.join(':');
}

function setCanonicalList(listKey, requestKey, list) {
	debug('setCanonicalList %o %o (%o)', listKey, requestKey, list);
	_canonicalCache[listKey] = _canonicalCache[listKey] || {};
	_canonicalCache[listKey][requestKey] = list;
}

function getCanonicalList(listKey, requestKey) {
	debug('getCanonicalList %o %o', listKey, requestKey);
	var stream = _canonicalCache[listKey];
	if (!stream || (typeof stream === 'undefined' ? 'undefined' : (0, _typeof3.default)(stream)) !== 'object') {
		return false;
	}
	var keys = (0, _keys2.default)(stream);
	if (keys[0] !== requestKey) {
		// requests processing out of order, clear cache
		delete cache[listKey];
		delete _canonicalCache[listKey];
		return false;
	}
	return stream[requestKey];
}

function deleteCanonicalList(listKey, requestKey) {
	debug('deleteCanonicalList %o %o', listKey, requestKey);
	var stream = _canonicalCache[listKey];
	if (stream && stream[requestKey]) {
		delete stream[requestKey];
	}
}

exports.default = PostsListCache;

/***/ }),

/***/ "./client/lib/posts/post-list-store-factory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getStore;

var _postListStore = __webpack_require__("./client/lib/posts/post-list-store.js");

var _postListStore2 = _interopRequireDefault(_postListStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 **/
var _postListStores = {}; /**
                           * Internal Dependencies
                           **/
function getStore(storeId) {
	var postStoreId = storeId || 'default';

	if (!_postListStores[postStoreId]) {
		_postListStores[postStoreId] = new _postListStore2.default(postStoreId);
	}

	return _postListStores[postStoreId];
}

getStore._reset = function () {
	_postListStores = {};
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/posts/post-list-store.js":
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

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _transform2 = __webpack_require__("./node_modules/lodash/transform.js");

var _transform3 = _interopRequireDefault(_transform2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _maxBy2 = __webpack_require__("./node_modules/lodash/maxBy.js");

var _maxBy3 = _interopRequireDefault(_maxBy2);

var _last2 = __webpack_require__("./node_modules/lodash/last.js");

var _last3 = _interopRequireDefault(_last2);

var _difference2 = __webpack_require__("./node_modules/lodash/difference.js");

var _difference3 = _interopRequireDefault(_difference2);

var _clone2 = __webpack_require__("./node_modules/lodash/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

exports.getRemovedPosts = getRemovedPosts;

exports.default = function (id) {
	if (!id) {
		throw new Error('must supply a post-list-store id');
	}

	var _activeList = {
		postIds: [],
		errors: [],
		query: (0, _clone3.default)(_defaultQuery),
		page: 0,
		nextPageHandle: false,
		isLastPage: false,
		isFetchingNextPage: false,
		isFetchingUpdated: false
	};

	function queryPosts(options) {
		var query = (0, _assign3.default)({}, _defaultQuery, options);

		if (query.status === 'draft,pending') {
			query.orderBy = 'modified';
		}

		var listKey = (0, _postListCacheStore.getCacheKey)(query);
		var list = _postListCacheStore2.default.get(listKey);

		if (list) {
			_activeList = list;
		} else {
			_activeList = {
				id: _nextId,
				postIds: [],
				errors: [],
				page: 0,
				isLastPage: false,
				isFetchingNextPage: false,
				isFetchingUpdated: false,
				query: query,
				listKey: listKey
			};
			_nextId++;
		}
	}

	/**
  * Remove any keys from the params that are null or undefined
  *
  * We do this to avoid sending empty values along.
  * Returns a new object representing the clean params.
  * The original params is unmodified.
  *
  * @param  {string} params The params to clean
  * @return {object} The cleaned params object.
  */
	function cleanParams(params) {
		return (0, _transform3.default)(params, function (result, value, key) {
			if (value != null) {
				result[key] = value;
			}
		}, {});
	}

	/**
  * Sort the active list
  */
	function sort() {
		var key = _activeList.query.orderBy;

		_activeList.postIds.sort(function (a, b) {
			var postA = _postsStore2.default.get(a),
			    postB = _postsStore2.default.get(b),
			    timeA = postA[key],
			    timeB = postB[key];

			if (timeA === timeB) {
				if (postA.title === postB.title) {
					return 0;
				}

				return postA.title > postB.title ? 1 : -1;
			}
			// reverse-chronological
			return timeA > timeB ? -1 : 1;
		});
	}

	// Process a new page of data and concatenate to the end of the list
	function receivePage(listId, error, data) {
		if (error || !data || (typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) !== 'object') {
			error = error || { message: 'Error fetching PostsList: empty data response' };
			debug('Error fetching PostsList from api:', error);
			error.timestamp = Date.now();
			_activeList.errors.push(error);
			return;
		}
		var found = data.found,
		    meta = data.meta,
		    posts = data.posts,
		    __sync = data.__sync;

		var _ref = __sync || {},
		    responseSource = _ref.responseSource,
		    requestKey = _ref.requestKey;

		if (listId !== _activeList.id) {
			return;
		}

		_activeList.isFetchingNextPage = false;

		// if we got a next page handle, cache it for the next page
		_activeList.nextPageHandle = meta && meta.next_page;

		if (!_activeList.nextPageHandle || !found) {
			_activeList.isLastPage = true;
		}

		var responsePostIDs = posts.map(function (post) {
			return post.global_ID;
		});

		var priorList = _activeList.postIds.slice(0);

		if (responseSource === 'local' && requestKey) {
			// store canonicalList before applying localResponse
			// so we can apply the serverResponse to the original
			// canonicalList
			(0, _postListCacheStore.setCanonicalList)(_activeList.listKey, requestKey, priorList);
		} else {
			// use canonicalList to process server response
			var canonicalList = (0, _postListCacheStore.getCanonicalList)(_activeList.listKey, requestKey);
			if (canonicalList) {
				debug('canonicalList found (%o)', canonicalList);
				priorList = canonicalList;
				(0, _postListCacheStore.deleteCanonicalList)(_activeList.listKey, requestKey);
			}
		}

		// were some posts missing from the response?
		var removedPosts = getRemovedPosts(priorList, responsePostIDs);
		if (removedPosts.length) {
			debug('removePosts (%o)', removedPosts);
			priorList = (0, _difference3.default)(priorList, removedPosts);
		}

		// did we find any new posts?
		var newPosts = (0, _difference3.default)(responsePostIDs, priorList);
		if (newPosts.length) {
			debug('newPosts (%o)', newPosts);
			priorList = priorList.concat(newPosts);
			_activeList.page++;
		}
		_activeList.postIds = priorList;
		sort();
	}

	// Merge updated posts
	function receiveUpdates(listId, error, data) {
		var posts = void 0;
		var postIds = void 0;
		var newPostIds = void 0;

		if (error) {
			debug('An error occurred while fetching updated posts %o', error);
			return;
		}

		if (listId !== _activeList.id) {
			return;
		}

		if (!data.posts.length) {
			return;
		}

		posts = data.posts;

		debug('Fetched updated posts:', posts);

		postIds = posts.map(function (post) {
			return post.global_ID;
		});

		newPostIds = (0, _difference3.default)(postIds, _activeList.postIds);

		if (newPostIds.length) {
			_activeList.postIds = _activeList.postIds.concat(newPostIds);
			sort();
		}
	}

	return new (function (_EventEmitter) {
		(0, _inherits3.default)(_class, _EventEmitter);

		function _class() {
			(0, _classCallCheck3.default)(this, _class);

			var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this));

			_this.id = id;
			_this.dispatchToken = _dispatcher2.default.register(_this.handlePayload.bind(_this));
			return _this;
		}

		(0, _createClass3.default)(_class, [{
			key: 'get',
			value: function get() {
				return _activeList;
			}
		}, {
			key: 'getID',
			value: function getID() {
				return _activeList.id;
			}
		}, {
			key: 'getSiteId',
			value: function getSiteId() {
				return _activeList.query.siteId;
			}

			// Get list of posts from current object

		}, {
			key: 'getAll',
			value: function getAll() {
				return _activeList.postIds.map(function (globalID) {
					return _postsStore2.default.get(globalID);
				});
			}
		}, {
			key: 'getTree',
			value: function getTree() {
				var sortedPosts = [];

				// clone objects to prevent mutating store data, set parent to number
				_activeList.postIds.forEach(function (globalID) {
					var post = (0, _clone3.default)(_postsStore2.default.get(globalID));
					post.parent = post.parent ? post.parent.ID : 0;
					sortedPosts.push(post);
				});

				return (0, _treeConvert2.default)('ID').treeify(sortedPosts);
			}
		}, {
			key: 'getPost',
			value: function getPost(globalID) {
				if (_activeList.postIds.indexOf(globalID) > -1) {
					return _postsStore2.default.get(globalID);
				}
			}
		}, {
			key: 'getPage',
			value: function getPage() {
				return _activeList.page;
			}
		}, {
			key: 'off',
			value: function off(event, method) {
				this.removeListener(event, method);
			}
		}, {
			key: 'isLastPage',
			value: function isLastPage() {
				return _activeList.isLastPage;
			}
		}, {
			key: 'isFetchingNextPage',
			value: function isFetchingNextPage() {
				return _activeList.isFetchingNextPage;
			}

			// Have we received an error recently?

		}, {
			key: 'hasRecentError',
			value: function hasRecentError() {
				var recentTimeIntervalSeconds = 30;
				var dateNow = Date.now();

				return (0, _some3.default)(_activeList.errors, function (error) {
					return dateNow - error.timestamp < recentTimeIntervalSeconds * 1000;
				});
			}
		}, {
			key: 'getNextPageParams',
			value: function getNextPageParams() {
				var params = {};
				var query = _activeList.query;

				params.status = query.status;
				params.order_by = query.orderBy;
				params.order = query.order;
				params.author = query.author;
				params.number = query.perPage;
				params.type = query.type;
				params.page_handle = _activeList.nextPageHandle;
				params.exclude_tree = query.exclude_tree;
				params.number = query.number;
				params.before = query.before;
				params.after = query.after;

				if (query.search) {
					params.search = query.search;
				}

				if (query.category) {
					params.category = query.category;
				}

				if (query.tag) {
					params.tag = query.tag;
				}

				if (!params.siteId) {
					// Only query from visible sites
					params.site_visibility = 'visible';
				}

				if (query.meta) {
					params.meta = query.meta;
				}

				return cleanParams(params);
			}
		}, {
			key: 'getUpdatesParams',
			value: function getUpdatesParams() {
				var params = {};
				var query = _activeList.query;

				params.status = query.status;
				params.author = query.author;
				params.type = query.type;

				if (query.search) {
					params.search = query.search;
				}

				if (query.category) {
					params.category = query.category;
				}

				if (query.tag) {
					params.tag = query.tag;
				}

				if (!params.siteId) {
					// Only query from visible sites
					params.site_visibility = 'visible';
				}

				if (query.meta) {
					params.meta = query.meta;
				}

				if (_activeList.postIds.length) {
					params.modified_after = (0, _maxBy3.default)(this.getAll(), function (post) {
						return new Date(post.modified).getTime();
					}).modified;

					// For situations where the list ordered by publish date, we want to
					// only get updates that should show up in the list to avoid creating
					// a gap in our paging
					if (query.orderBy !== 'modified' && !_activeList.isLastPage) {
						params.after = this.getPost((0, _last3.default)(_activeList.postIds)).date;
					}
				}

				return cleanParams(params);
			}
		}, {
			key: 'handlePayload',
			value: function handlePayload(payload) {
				var action = payload.action;

				// If this action does not match this post-list-store.id return, but always evaluate RECEIVE_UPDATED_POST regardless
				if (action.postListStoreId && action.postListStoreId !== this.id && 'RECEIVE_UPDATED_POST' !== action.type) {
					return;
				}

				_dispatcher2.default.waitFor([_postsStore2.default.dispatchToken]);

				switch (action.type) {
					case 'QUERY_POSTS':
						debug('QUERY_POSTS', action);
						queryPosts(action.options);
						this.emit('change');
						break;
					case 'FETCH_NEXT_POSTS_PAGE':
						debug('FETCH_NEXT_POSTS_PAGE', action);
						_activeList.isFetchingNextPage = true;
						this.emit('change');
						break;
					case 'RECEIVE_POSTS_PAGE':
						debug('receivePage', action);
						receivePage(action.id, action.error, action.data);
						this.emit('change');
						break;

					case 'RECEIVE_UPDATED_POSTS':
						receiveUpdates(action.id, action.error, action.data);
						this.emit('change');
						break;

					case 'RECEIVE_UPDATED_POST':
						if (action.post) {
							if (_activeList.postIds.indexOf(action.post.global_ID) > -1) {
								this.emit('change');
							}
						}
						break;
				}
			}
		}]);
		return _class;
	}(_events.EventEmitter))();
};

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _events = __webpack_require__("./node_modules/events/events.js");

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _treeConvert = __webpack_require__("./client/lib/tree-convert/index.js");

var _treeConvert2 = _interopRequireDefault(_treeConvert);

var _postsStore = __webpack_require__("./client/lib/posts/posts-store.js");

var _postsStore2 = _interopRequireDefault(_postsStore);

var _postListCacheStore = __webpack_require__("./client/lib/posts/post-list-cache-store.js");

var _postListCacheStore2 = _interopRequireDefault(_postListCacheStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module Variables
 */


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var _defaultQuery = {
	siteId: false,
	type: 'post',
	status: 'publish',
	orderBy: 'date',
	order: 'DESC',
	author: false,
	search: false,
	category: false,
	tag: false,
	perPage: 20
};

var debug = (0, _debug2.default)('calypso:posts-list');

var _nextId = 0;

/**
 * Find deleted posts based on ommissions in a new page of results.
 * In some cases the new list may overlap with our stored list. And when
 * this happens we can find elements that should be removed if they don't
 * appear in the new post-list.
 *
 * @param  {array} currentList - stored list of PostIDs
 * @param  {array} newPosts    - new page of postIDs
 * @return {array}             - postIDs in currentList that should be deleted
 */
function getRemovedPosts(currentList, newPosts) {
	if (currentList.length < 3 || newPosts.length < 2) {
		return [];
	}

	var overlapBegin = currentList.indexOf(newPosts[0]);
	if (overlapBegin === -1) {
		return getRemovedPosts(currentList, newPosts.slice(1));
	}

	var overlapEnd = currentList.indexOf(newPosts.slice(-1)[0]);
	if (overlapEnd === -1) {
		return getRemovedPosts(currentList, newPosts.slice(0, -1));
	}

	var overlapList = currentList.slice(overlapBegin, overlapEnd + 1);
	return (0, _difference3.default)(overlapList, newPosts);
}

/***/ }),

/***/ "./client/lib/posts/posts-store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:posts');

/**
 * Internal dependencies
 */
var utils = __webpack_require__("./client/lib/posts/utils.js"),
    Dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _posts = {},
    PostsStore;

function setPost(post) {
	var cachedPost = PostsStore.get(post.global_ID);

	if (cachedPost && (0, _isEqual3.default)(post, cachedPost)) {
		return;
	}

	_posts[post.global_ID] = post;
}

function normalizePost(responseSource, attributes) {
	var _ref = attributes || {},
	    global_ID = _ref.global_ID;

	if (!global_ID) {
		debug('global_ID is required for a post', attributes);
		return;
	}

	// do not overwrite existing records with localResponse data
	var cachedPost = PostsStore.get(global_ID);
	if (cachedPost && responseSource === 'local') {
		debug('existing record (%o), do not overwrite with local response', cachedPost);
		return;
	}

	utils.normalizeSync(attributes, function (error, post) {
		setPost(post);
	});
}

function setAll(posts, responseSource) {
	var boundNormalizePost = normalizePost.bind(null, responseSource);
	posts.forEach(boundNormalizePost);
}

PostsStore = {
	get: function get(globalID) {
		return _posts[globalID];
	}
};

PostsStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.type) {
		case 'RECEIVE_POSTS_PAGE':
		case 'RECEIVE_UPDATED_POSTS':
			if (!action.error && action.data.posts) {
				var responseSource = action.data.__sync && action.data.__sync.responseSource;
				setAll(action.data.posts, responseSource);
			}
			break;

		case 'RECEIVE_UPDATED_POST':
			if (!action.error) {
				normalizePost('server', action.post);
			}
			break;
	}
});

module.exports = PostsStore;

/***/ }),

/***/ "./client/lib/posts/stats.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

exports.recordStat = recordStat;
exports.recordEvent = recordEvent;
exports.recordSaveEvent = recordSaveEvent;
exports.recordTinyMCEButtonClick = recordTinyMCEButtonClick;
exports.recordTinyMCEHTMLButtonClick = recordTinyMCEHTMLButtonClick;

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _postEditStore = __webpack_require__("./client/lib/posts/post-edit-store.js");

var _postEditStore2 = _interopRequireDefault(_postEditStore);

var _utils = __webpack_require__("./client/lib/posts/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _sitesList = __webpack_require__("./client/lib/sites-list/index.js");

var _sitesList2 = _interopRequireDefault(_sitesList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Module variables
 */
/*
 * External dependencies
 */
var debug = (0, _debug2.default)('calypso:posts:stats');

/*
 * Internal dependencies
 */

var sites = new _sitesList2.default();

function recordUsageStats(action, postType) {
	var source = void 0;
	var site = sites.getSelectedSite();

	_analytics2.default.mc.bumpStat('editor_usage', action);

	if (site) {
		source = site.jetpack ? 'jetpack' : 'wpcom';
		_analytics2.default.mc.bumpStat('editor_usage_' + source, action);

		if (postType) {
			_analytics2.default.mc.bumpStat('editor_cpt_usage_' + source, postType + '_' + action);
		}
	}
}

function recordStat(action) {
	_analytics2.default.mc.bumpStat('editor_actions', action);
}

function recordEvent(action, label, value) {
	_analytics2.default.ga.recordEvent('Editor', action, label, value);
}

function recordSaveEvent(context) {
	var post = _postEditStore2.default.get();
	var savedPost = _postEditStore2.default.getSavedPost();

	if (!post || !savedPost) {
		return;
	}

	var currentStatus = savedPost.status;
	var nextStatus = post.status;
	var tracksEventName = 'calypso_editor_' + post.type + '_';
	var statName = false;
	var statEvent = false;
	var usageAction = false;
	var eventContext = null;

	if (!post.ID && !_utils2.default.isPublished(post)) {
		tracksEventName += 'savedraft';
	} else if ('draft' === nextStatus) {
		tracksEventName += 'savedraft';
	} else if (currentStatus === nextStatus) {
		usageAction = 'edit';
		tracksEventName += 'update';
	} else if ('publish' === nextStatus || 'private' === nextStatus) {
		tracksEventName += 'publish';
		usageAction = 'new';
		if (context && context.isConfirmationSidebarEnabled) {
			eventContext = 'confirmation_sidebar';
		}
	} else if ('pending' === nextStatus) {
		tracksEventName += 'pending';
	} else if ('future' === nextStatus) {
		tracksEventName += 'schedule';
		statName = 'status-schedule';
		statEvent = 'Scheduled Post';
		if (context && context.isConfirmationSidebarEnabled) {
			eventContext = 'confirmation_sidebar';
		}
	}

	if (usageAction) {
		recordUsageStats(usageAction, post.type);
	}

	// if this action has an mc stat name, record it
	if (statName) {
		recordStat(statName);
	}

	// if this action has a GA event, record it
	if (statEvent) {
		recordEvent(statEvent);
	}

	debug('recordSaveEvent %s currentStatus=%s nextStatus=%s', tracksEventName, currentStatus, nextStatus);

	_analytics2.default.tracks.recordEvent(tracksEventName, {
		post_id: post.ID,
		post_type: post.type,
		visibility: _utils2.default.getVisibility(post),
		current_status: currentStatus,
		next_status: nextStatus,
		context: eventContext
	});
}

var shouldBumpStat = Math.random() <= 0.01 || (0, _config2.default)('env') === 'development';
var maybeBumpStat = shouldBumpStat ? _analytics2.default.mc.bumpStat : _noop3.default;

function recordTinyMCEButtonClick(buttonName) {
	maybeBumpStat('editor-button', 'calypso_' + buttonName);
	_analytics2.default.ga.recordEvent('Editor', 'Clicked TinyMCE Button', buttonName);
	debug('TinyMCE button click', buttonName, 'mc=', shouldBumpStat);
}

function recordTinyMCEHTMLButtonClick(buttonName) {
	maybeBumpStat('html-editor-button', 'calypso_' + buttonName);
	_analytics2.default.ga.recordEvent('Editor', 'Clicked TinyMCE HTML Button', buttonName);
	debug('TinyMCE HTML button click', buttonName, 'mc=', shouldBumpStat);
}

/***/ }),

/***/ "./client/lib/tree-convert/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies
 */
var Traverser = __webpack_require__("./client/lib/tree-convert/tree-traverser.js");

/**
 * TreeConvert provides methods to convert a linearly structured set of "items"
 * into a tree-based one that reflects the parent-child relationship of said
 * items, and vice-versa.
 *
 * Currently, this relationship is stated in the `parent` property of items,
 * which indicates a parent key.
 *
 * @param {string} [optional] key - the item property to be used as its
 *     identifying key
 */
function TreeConvert(key) {
	if (!(this instanceof TreeConvert)) {
		return new TreeConvert(key);
	}

	this.key = key || 'id';
}

TreeConvert.prototype.treeify = function (items) {
	var tree = [],
	    indexedNodes = {};

	items.forEach(function (item, i) {
		indexedNodes[items[i][this.key]] = item;
	}, this);

	items.forEach(function (item) {
		var parentNode;

		if (item.parent > 0 && indexedNodes[item.parent]) {
			parentNode = indexedNodes[item.parent];
			parentNode.items = parentNode.items || [];
			parentNode.items.push(item);
		} else {
			// reset parent in case it was not zero
			item.parent = 0;
			tree.push(item);
		}
	});

	this.sortItems(tree);
	this.removeOrderProperty(tree);

	return tree;
};

TreeConvert.prototype.untreeify = function (tree, list) {
	list = list || [];
	tree.forEach(function (item, index) {
		if (item.items) {
			TreeConvert.prototype.untreeify(item.items, list);
		}
		item.order = index + 1;
		list.push(item);
	});
	return list;
};

TreeConvert.prototype.sortItems = function (itemTrees) {
	var root = {};

	root.items = itemTrees;

	Traverser.traverse(root, [function (node) {
		node.items && node.items.sort(function (a, b) {
			return a.order - b.order;
		});
		return node;
	}]);
};

TreeConvert.prototype.removeOrderProperty = function (itemTrees) {
	var root = {};

	root.items = itemTrees;

	Traverser.traverse(root, [function (node) {
		node.items && node.items.forEach(function (item) {
			delete item.order;
		});
		return node;
	}]);
};

module.exports = TreeConvert;

/***/ }),

/***/ "./client/lib/tree-convert/tree-traverser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _findIndex2 = __webpack_require__("./node_modules/lodash/findIndex.js");

var _findIndex3 = _interopRequireDefault(_findIndex2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a node within a tree, return the node's parent or the tree
 * itself if the node is not found within the tree.
 */
/**
 * External dependencies
 */

function parent(node, tree) {
	return find(tree, function (it) {
		return (0, _some3.default)(it.items, { id: node.id });
	}) || tree;
}

function _traverse(node, filters, root) {
	filters.forEach(function (filter) {
		node = filter(node, root);
	}, this);

	if (node.items) {
		node.items = node.items.map(function (item) {
			return _traverse(item, filters, root);
		});
	}

	return node;
}

/**
 * Depth-first search
 */
function find(node, predicate) {
	if (predicate(node)) {
		return node;
	}

	if (node.items) {
		return mapFindAny(node.items, function (node) {
			return find(node, predicate);
		});
	}
}

/**
 * Depth-first search based replacement
 */
function replaceItem(node, newNode, predicate) {
	var i;

	if (!node.items) {
		return;
	}

	for (i = 0; i < node.items.length; i++) {
		if (predicate(node.items[i])) {
			node.items[i] = newNode;
			return;
		}
		replaceItem(node.items[i], newNode, predicate);
	}
}

/**
 * Returns the first non-null element resulting from the mapping of a function
 * over an array.
 */
function mapFindAny(array, fn) {
	var i,
	    result,
	    length = array.length;
	for (i = 0; i < length; i++) {
		if (result = fn(array[i])) {
			// eslint-disable-line no-cond-assign
			return result;
		}
	}
}

function childInserter(srcNode, dstId) {
	return function (node) {
		if (node.id === dstId) {
			node.items = node.items || [];
			node.items.push(srcNode);
		}
		return node;
	};
}

function siblingInserter(srcNode, dstId, position) {
	return function (node) {
		var index,
		    offset = position === 'before' ? 0 : 1;

		if (~(index = (0, _findIndex3.default)(node.items, { id: dstId }))) {
			node.items.splice(index + offset, 0, srcNode);
		}
		return node;
	};
}

module.exports = {

	/**
  * Traverses a tree of menu items and calls a set of filters on each item
  * node it enters. Warning: no data is ever cloned internally.
  *
  * @param {object} root of a tree of menu items
  * @param {array} filters
  * @return {object} the original tree, which might have mutated
  */
	traverse: function traverse(root, filters) {
		return _traverse(root, filters, root);
	},

	/**
  * Given a node within a tree, return the node's parent or the tree
  * itself if the node is not found within the tree.
  *
  * @param {object} tree node
  * @param {object} root of a tree
  * @return {object} node
  */
	parent: parent,

	/**
  * Returns the first item that satisfies a given predicate.
  *
  * @param {object} root of a tree of menu items
  * @param {function} predicate
  * @return {object} node
  */
	find: find,

	/**
  * Find the first item that satisfies a given predicate, and
  * replace it with a new item.
  *
  * @param {object} root of a tree of menu items
  * @param {object} the new item
  * @param {function} predicate
  * @return {object} node
  */
	replaceItem: replaceItem,

	/**
  * Returns a filter function that aims to remove from the tree any item whose
  * 'id' property has the value 'id'.
  *
  * @param {int} id
  * @return {function} a filter to be fed to 'traverse'
  */
	remover: function remover(id) {
		return function (node) {
			var index;
			if (~(index = (0, _findIndex3.default)(node.items, { id: id }))) {
				node.items.splice(index, 1);
			}
			return node;
		};
	},

	/**
  * Returns a filter function that aims to insert item 'srcItem' next to any
  * item whose 'id' property has the value 'dstId', according to 'position'.
  *
  * @param {object} srcItem
  * @param {int} dstId
  * @param {string} position ('before', 'after', or 'child')
  * @return {function} a filter to be fed to 'traverse'
  */
	inserter: function inserter(srcItem, dstId, position) {
		var func = 'child' === position ? childInserter : siblingInserter;
		return func(srcItem, dstId, position);
	}

};

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

/***/ "./client/my-sites/post-type-filter/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _reduce2 = __webpack_require__("./node_modules/lodash/reduce.js");

var _reduce3 = _interopRequireDefault(_reduce2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/posts/counts/selectors.js");

var _path = __webpack_require__("./client/lib/route/path.js");

var _urlSearch = __webpack_require__("./client/lib/mixins/url-search/index.js");

var _urlSearch2 = _interopRequireDefault(_urlSearch);

var _queryPostCounts = __webpack_require__("./client/components/data/query-post-counts/index.jsx");

var _queryPostCounts2 = _interopRequireDefault(_queryPostCounts);

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _search = __webpack_require__("./client/components/search/index.jsx");

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var PostTypeFilter = _react2.default.createClass({
	displayName: 'PostTypeFilter',

	mixins: [_urlSearch2.default],

	propTypes: {
		siteId: _react.PropTypes.number,
		query: _react.PropTypes.object,
		jetpack: _react.PropTypes.bool,
		siteSlug: _react.PropTypes.string,
		counts: _react.PropTypes.object
	},

	getDefaultProps: function getDefaultProps() {
		return {
			query: {}
		};
	},
	getNavItems: function getNavItems() {
		var _this = this;

		var _props = this.props,
		    query = _props.query,
		    siteSlug = _props.siteSlug,
		    jetpack = _props.jetpack,
		    counts = _props.counts;


		return (0, _reduce3.default)(counts, function (memo, count, status) {
			if (!jetpack && !count && !(0, _includes3.default)(['publish', 'draft'], status)) {
				return memo;
			}

			var label = void 0,
			    pathStatus = void 0;
			switch (status) {
				case 'publish':
					label = _this.translate('Published', {
						context: 'Filter label for posts list'
					});
					break;

				case 'draft':
					label = _this.translate('Drafts', {
						context: 'Filter label for posts list'
					});
					pathStatus = 'drafts';
					break;

				case 'future':
					label = _this.translate('Scheduled', {
						context: 'Filter label for posts list'
					});
					pathStatus = 'scheduled';
					break;

				case 'trash':
					label = _this.translate('Trashed', {
						context: 'Filter label for posts list'
					});
					pathStatus = 'trashed';
					break;
			}

			return memo.concat({
				count: jetpack ? null : count,
				key: 'filter-' + status,
				path: ['/types', query.type, pathStatus, siteSlug].filter(Boolean).join('/'),
				selected: (0, _path.mapPostStatus)(pathStatus) === query.status,
				children: label
			});
		}, []);
	},
	render: function render() {
		var _props2 = this.props,
		    siteId = _props2.siteId,
		    query = _props2.query,
		    jetpack = _props2.jetpack;

		var navItems = this.getNavItems();
		var selectedItem = (0, _find3.default)(navItems, 'selected') || {};

		return _react2.default.createElement(
			'div',
			null,
			query && siteId && false === jetpack && _react2.default.createElement(_queryPostCounts2.default, {
				siteId: siteId,
				type: query.type }),
			_react2.default.createElement(
				_sectionNav2.default,
				{
					selectedText: selectedItem.children,
					selectedCount: selectedItem.count },
				query && [_react2.default.createElement(
					_tabs2.default,
					{
						key: 'tabs',
						label: this.translate('Status', { context: 'Filter group label for tabs' }),
						selectedText: selectedItem.children,
						selectedCount: selectedItem.count },
					navItems.map(function (props) {
						return _react2.default.createElement(_item2.default, props);
					})
				), _react2.default.createElement(_search2.default, {
					key: 'search',
					pinned: true,
					fitsContainer: true,
					onSearch: this.doSearch,
					placeholder: this.translate('Search…'),
					delaySearch: true })]
			)
		);
	}
});

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var props = {
		siteId: siteId,
		jetpack: (0, _selectors2.isJetpackSite)(state, siteId),
		siteSlug: (0, _selectors2.getSiteSlug)(state, siteId)
	};

	if (!ownProps.query) {
		return props;
	}

	return (0, _assign2.default)(props, {
		counts: (0, _selectors3.getNormalizedPostCounts)(state, siteId, ownProps.query.type)
	});
})(PostTypeFilter);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/empty-content.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _selectors = __webpack_require__("./client/state/post-types/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/ui/editor/selectors.js");

var _queryPostTypes = __webpack_require__("./client/components/data/query-post-types/index.jsx");

var _queryPostTypes2 = _interopRequireDefault(_queryPostTypes);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
function PostTypeListEmptyContent(_ref) {
	var siteId = _ref.siteId,
	    translate = _ref.translate,
	    status = _ref.status,
	    typeObject = _ref.typeObject,
	    editPath = _ref.editPath;

	var title = void 0,
	    action = void 0;

	if ('draft' === status) {
		title = translate('You don\'t have any drafts.');
	} else if (typeObject) {
		title = typeObject.labels.not_found;
	}

	if (typeObject) {
		action = typeObject.labels.add_new_item;
	}

	return _react2.default.createElement(
		'div',
		null,
		siteId && _react2.default.createElement(_queryPostTypes2.default, { siteId: siteId }),
		_react2.default.createElement(_emptyContent2.default, {
			title: title,
			action: action,
			actionURL: editPath,
			illustration: '/calypso/images/pages/illustration-pages.svg',
			illustrationWidth: 150 })
	);
}

/**
 * Internal dependencies
 */


PostTypeListEmptyContent.propTypes = {
	siteId: _react.PropTypes.number,
	translate: _react.PropTypes.func,
	type: _react.PropTypes.string,
	status: _react.PropTypes.string,
	typeObject: _react.PropTypes.object,
	editPath: _react.PropTypes.string
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors2.getSelectedSiteId)(state);

	return {
		siteId: siteId,
		typeObject: (0, _selectors.getPostType)(state, siteId, ownProps.type),
		editPath: (0, _selectors3.getEditorPath)(state, siteId, null, ownProps.type)
	};
})((0, _i18nCalypso.localize)(PostTypeListEmptyContent));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _size2 = __webpack_require__("./node_modules/lodash/size.js");

var _size3 = _interopRequireDefault(_size2);

var _range2 = __webpack_require__("./node_modules/lodash/range.js");

var _range3 = _interopRequireDefault(_range2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _difference2 = __webpack_require__("./node_modules/lodash/difference.js");

var _difference3 = _interopRequireDefault(_difference2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _AutoSizer = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/AutoSizer/index.js");

var _AutoSizer2 = _interopRequireDefault(_AutoSizer);

var _WindowScroller = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/WindowScroller/index.js");

var _WindowScroller2 = _interopRequireDefault(_WindowScroller);

var _List = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/List/index.js");

var _List2 = _interopRequireDefault(_List);

var _queryPosts = __webpack_require__("./client/components/data/query-posts/index.jsx");

var _queryPosts2 = _interopRequireDefault(_queryPosts);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/posts/selectors.js");

var _postItem = __webpack_require__("./client/blocks/post-item/index.jsx");

var _postItem2 = _interopRequireDefault(_postItem);

var _emptyContent = __webpack_require__("./client/my-sites/post-type-list/empty-content.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constants
 */
var DEFAULT_POST_ROW_HEIGHT_NORMAL = 84;

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

var DEFAULT_POST_ROW_HEIGHT_LARGE = 89;
var DEFAULT_POSTS_PER_PAGE = 20;
var LOAD_OFFSET = 10;

var PostTypeList = function (_Component) {
	(0, _inherits3.default)(PostTypeList, _Component);

	function PostTypeList() {
		(0, _classCallCheck3.default)(this, PostTypeList);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostTypeList.__proto__ || (0, _getPrototypeOf2.default)(PostTypeList)).apply(this, arguments));

		_this.handleWindowResize = function () {
			_this.setState({
				windowWidth: window.innerWidth
			});
		};

		_this.renderPostRow = _this.renderPostRow.bind(_this);
		_this.cellRendererWrapper = _this.cellRendererWrapper.bind(_this);
		_this.renderPlaceholder = _this.renderPlaceholder.bind(_this);
		_this.setRequestedPages = _this.setRequestedPages.bind(_this);
		_this.setListRef = _this.setListRef.bind(_this);
		_this.handleHeightChange = _this.handleHeightChange.bind(_this);
		_this.getPostRowHeight = _this.getPostRowHeight.bind(_this);

		_this.rowHeights = {};

		_this.state = {
			requestedPages: _this.getInitialRequestedPages(_this.props)
		};
		return _this;
	}

	(0, _createClass3.default)(PostTypeList, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			// NOTE: Assumes that this property does not change for a given
			// instance of this component
			this.defaultPostRowHeight = this.props.largeTitles ? DEFAULT_POST_ROW_HEIGHT_LARGE : DEFAULT_POST_ROW_HEIGHT_NORMAL;
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.wrapTitles) {
				// Note: Assumes that this property does not change
				this.resizeListener = (0, _throttle3.default)(this.handleWindowResize, 50);
				window.addEventListener('resize', this.resizeListener);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!(0, _isEqual3.default)(this.props.query, nextProps.query)) {
				this.setState({
					requestedPages: this.getInitialRequestedPages(nextProps)
				});
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.resizeListener) {
				window.removeEventListener('resize', this.resizeListener);
				delete this.resizeListener;
			}
		}
	}, {
		key: 'getInitialRequestedPages',
		value: function getInitialRequestedPages(props) {
			// If we have no posts or we're otherwise not expecting any posts to be
			// rendered, request the first page, since setRequestedPages won't be
			// called if row count is 0.
			if (0 === (0, _size3.default)(props.posts)) {
				return [1];
			}

			return [];
		}
	}, {
		key: 'getPageForIndex',
		value: function getPageForIndex(index) {
			var _props = this.props,
			    query = _props.query,
			    lastPage = _props.lastPage;

			var perPage = query.number || DEFAULT_POSTS_PER_PAGE;
			var page = Math.ceil(index / perPage);

			return Math.max(Math.min(page, lastPage || Infinity), 1);
		}
	}, {
		key: 'setRequestedPages',
		value: function setRequestedPages(_ref) {
			var startIndex = _ref.startIndex,
			    stopIndex = _ref.stopIndex;

			if (!this.props.query) {
				return;
			}

			var requestedPages = this.state.requestedPages;

			var pagesToRequest = (0, _difference3.default)((0, _range3.default)(this.getPageForIndex(startIndex - LOAD_OFFSET), this.getPageForIndex(stopIndex + LOAD_OFFSET) + 1), requestedPages);

			if (!pagesToRequest.length) {
				return;
			}

			this.setState({
				requestedPages: requestedPages.concat(pagesToRequest)
			});
		}
	}, {
		key: 'isLastPage',
		value: function isLastPage() {
			var _props2 = this.props,
			    lastPage = _props2.lastPage,
			    requestingLastPage = _props2.requestingLastPage;
			var requestedPages = this.state.requestedPages;


			return (0, _includes3.default)(requestedPages, lastPage) && !requestingLastPage;
		}
	}, {
		key: 'renderPlaceholder',
		value: function renderPlaceholder() {
			return _react2.default.createElement(_postItem2.default, {
				key: 'placeholder',
				largeTitle: this.props.largeTitles
			});
		}
	}, {
		key: 'renderPostRow',
		value: function renderPostRow(_ref2) {
			var index = _ref2.index;
			var globalId = this.props.posts[index].global_ID;
			var query = this.props.query;


			return _react2.default.createElement(_postItem2.default, {
				key: globalId,
				globalId: globalId,
				onHeightChange: this.handleHeightChange,
				largeTitle: this.props.largeTitles,
				wrapTitle: this.props.wrapTitles,
				windowWidth: this.state.windowWidth,
				singleUserQuery: query && !!query.author
			});
		}
	}, {
		key: 'cellRendererWrapper',
		value: function cellRendererWrapper(_ref3) {
			var key = _ref3.key,
			    style = _ref3.style,
			    rest = (0, _objectWithoutProperties3.default)(_ref3, ['key', 'style']);

			return _react2.default.createElement(
				'div',
				{ key: key, style: style },
				this.renderPostRow(rest)
			);
		}
	}, {
		key: 'setListRef',
		value: function setListRef(list) {
			this.listRef = list;
		}
	}, {
		key: 'handleHeightChange',
		value: function handleHeightChange(_ref4) {
			var _this2 = this;

			var globalId = _ref4.globalId,
			    nodeHeight = _ref4.nodeHeight;

			this.rowHeights[globalId] = nodeHeight;

			setTimeout(function () {
				_this2.listRef.recomputeRowHeights(0);
			}, 1);
		}
	}, {
		key: 'getPostRowHeight',
		value: function getPostRowHeight(_ref5) {
			var index = _ref5.index;
			var posts = this.props.posts;


			if (!posts || !posts[index] || !posts[index].global_ID) {
				return this.defaultPostRowHeight;
			}

			var globalId = posts[index].global_ID;

			return (0, _get3.default)(this.rowHeights, globalId) || this.defaultPostRowHeight;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props3 = this.props,
			    query = _props3.query,
			    siteId = _props3.siteId,
			    posts = _props3.posts;

			var isEmpty = query && posts && !posts.length && this.isLastPage();
			var classes = (0, _classnames2.default)('post-type-list', {
				'is-empty': isEmpty
			});

			return _react2.default.createElement(
				'div',
				{ className: classes },
				query && this.state.requestedPages.map(function (page) {
					return _react2.default.createElement(_queryPosts2.default, {
						key: 'query-' + page,
						siteId: siteId,
						query: (0, _extends3.default)({}, query, { page: page }) });
				}),
				isEmpty && _react2.default.createElement(_emptyContent2.default, {
					type: query.type,
					status: query.status }),
				!isEmpty && _react2.default.createElement(
					_WindowScroller2.default,
					{ key: (0, _stringify2.default)(query) },
					function (_ref6) {
						var height = _ref6.height,
						    scrollTop = _ref6.scrollTop;
						return _react2.default.createElement(
							_AutoSizer2.default,
							{ disableHeight: true },
							function (_ref7) {
								var width = _ref7.width;
								return _react2.default.createElement(_List2.default, {
									autoHeight: true,
									scrollTop: scrollTop,
									height: height,
									width: width,
									onRowsRendered: _this3.setRequestedPages,
									ref: _this3.setListRef,
									rowRenderer: _this3.cellRendererWrapper,
									rowHeight: _this3.getPostRowHeight,
									rowCount: (0, _size3.default)(_this3.props.posts) });
							}
						);
					}
				),
				!this.isLastPage() && this.renderPlaceholder()
			);
		}
	}]);
	return PostTypeList;
}(_react.Component);

PostTypeList.propTypes = {
	// Props
	query: _react.PropTypes.object,
	largeTitles: _react.PropTypes.bool,
	wrapTitles: _react.PropTypes.bool,

	// Connected props
	siteId: _react.PropTypes.number,
	lastPage: _react.PropTypes.number,
	posts: _react.PropTypes.array,
	requestingLastPage: _react.PropTypes.bool
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var lastPage = (0, _selectors2.getSitePostsLastPageForQuery)(state, siteId, ownProps.query);

	return {
		siteId: siteId,
		lastPage: lastPage,
		posts: (0, _selectors2.getSitePostsForQueryIgnoringPage)(state, siteId, ownProps.query),
		requestingLastPage: (0, _selectors2.isRequestingSitePostsForQuery)(state, siteId, (0, _extends3.default)({}, ownProps.query, { page: lastPage }))
	};
})(PostTypeList);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/duplicate.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _queryPostTypes = __webpack_require__("./client/components/data/query-post-types/index.jsx");

var _queryPostTypes2 = _interopRequireDefault(_queryPostTypes);

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/post-types/selectors.js");

var _selectors3 = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors4 = __webpack_require__("./client/state/ui/editor/selectors.js");

var _config = __webpack_require__("./client/config/index.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bumpDuplicateStat = function bumpDuplicateStat() {
	return (0, _actions.bumpStat)('calypso_cpt_actions', 'duplicate');
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


function PostActionsEllipsisMenuDuplicate(_ref) {
	var translate = _ref.translate,
	    siteId = _ref.siteId,
	    canEdit = _ref.canEdit,
	    duplicateUrl = _ref.duplicateUrl,
	    isKnownType = _ref.isKnownType,
	    handleStatBump = _ref.bumpDuplicateStat,
	    status = _ref.status;

	var validStatus = (0, _includes3.default)(['draft', 'future', 'pending', 'private', 'publish'], status);

	if (!(0, _config.isEnabled)('posts/post-type-list') || !canEdit || !validStatus) {
		return null;
	}

	return _react2.default.createElement(
		_menuItem2.default,
		{ href: duplicateUrl, onClick: handleStatBump, icon: 'pages' },
		siteId && !isKnownType && _react2.default.createElement(_queryPostTypes2.default, { siteId: siteId }),
		translate('Duplicate', { context: 'verb' })
	);
}

PostActionsEllipsisMenuDuplicate.propTypes = {
	globalId: _propTypes2.default.string,
	translate: _propTypes2.default.func.isRequired,
	siteId: _propTypes2.default.number,
	canEdit: _propTypes2.default.bool,
	status: _propTypes2.default.string,
	duplicateUrl: _propTypes2.default.string,
	isKnownType: _propTypes2.default.bool,
	bumpDuplicateStat: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var globalId = _ref2.globalId;

	var post = (0, _selectors.getPost)(state, globalId);
	if (!post) {
		return {};
	}

	var type = (0, _selectors2.getPostType)(state, post.site_ID, post.type);
	var userId = (0, _selectors3.getCurrentUserId)(state);
	var isAuthor = (0, _get3.default)(post.author, 'ID') === userId;

	var capability = isAuthor ? 'edit_posts' : 'edit_others_posts';
	var typeCapability = (0, _get3.default)(type, ['capabilities', capability]);
	if ((0, _selectors3.isValidCapability)(state, post.site_ID, typeCapability)) {
		capability = typeCapability;
	}

	return {
		status: post.status,
		siteId: post.site_ID,
		canEdit: (0, _canCurrentUser2.default)(state, post.site_ID, capability),
		duplicateUrl: (0, _selectors4.getEditorDuplicatePostPath)(state, post.site_ID, post.ID),
		isKnownType: !!type
	};
}, { bumpDuplicateStat: bumpDuplicateStat })((0, _i18nCalypso.localize)(PostActionsEllipsisMenuDuplicate));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/edit.jsx":
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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _queryPostTypes = __webpack_require__("./client/components/data/query-post-types/index.jsx");

var _queryPostTypes2 = _interopRequireDefault(_queryPostTypes);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/post-types/selectors.js");

var _selectors3 = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors4 = __webpack_require__("./client/state/ui/editor/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function PostActionsEllipsisMenuEdit(_ref) {
	var translate = _ref.translate,
	    siteId = _ref.siteId,
	    canEdit = _ref.canEdit,
	    status = _ref.status,
	    editUrl = _ref.editUrl,
	    isKnownType = _ref.isKnownType;

	if ('trash' === status || !canEdit) {
		return null;
	}

	function bumpStat() {
		_analytics.mc.bumpStat('calypso_cpt_actions', 'edit');
	}

	return _react2.default.createElement(
		_menuItem2.default,
		{ href: editUrl, onClick: bumpStat, icon: 'pencil' },
		siteId && !isKnownType && _react2.default.createElement(_queryPostTypes2.default, { siteId: siteId }),
		translate('Edit', { context: 'verb' })
	);
} /**
   * External dependencies
   */


PostActionsEllipsisMenuEdit.propTypes = {
	globalId: _react.PropTypes.string,
	translate: _react.PropTypes.func.isRequired,
	siteId: _react.PropTypes.number,
	canEdit: _react.PropTypes.bool,
	status: _react.PropTypes.string,
	editUrl: _react.PropTypes.string,
	isKnownType: _react.PropTypes.bool
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getPost)(state, ownProps.globalId);
	if (!post) {
		return {};
	}

	var type = (0, _selectors2.getPostType)(state, post.site_ID, post.type);
	var userId = (0, _selectors3.getCurrentUserId)(state);
	var isAuthor = (0, _get3.default)(post.author, 'ID') === userId;

	var capability = isAuthor ? 'edit_posts' : 'edit_others_posts';
	var typeCapability = (0, _get3.default)(type, ['capabilities', capability]);
	if ((0, _selectors3.isValidCapability)(state, post.site_ID, typeCapability)) {
		capability = typeCapability;
	}

	return {
		siteId: post.site_ID,
		canEdit: (0, _canCurrentUser2.default)(state, post.site_ID, capability),
		status: post.status,
		editUrl: (0, _selectors4.getEditorPath)(state, post.site_ID, post.ID),
		isKnownType: !!type
	};
})((0, _i18nCalypso.localize)(PostActionsEllipsisMenuEdit));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = PostActionsEllipsisMenu;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _ellipsisMenu = __webpack_require__("./client/components/ellipsis-menu/index.jsx");

var _ellipsisMenu2 = _interopRequireDefault(_ellipsisMenu);

var _menuSeparator = __webpack_require__("./client/components/popover/menu-separator.jsx");

var _menuSeparator2 = _interopRequireDefault(_menuSeparator);

var _edit = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/edit.jsx");

var _edit2 = _interopRequireDefault(_edit);

var _stats = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/stats.jsx");

var _stats2 = _interopRequireDefault(_stats);

var _publish = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/publish.jsx");

var _publish2 = _interopRequireDefault(_publish);

var _share = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/share.jsx");

var _share2 = _interopRequireDefault(_share);

var _trash = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/trash.jsx");

var _trash2 = _interopRequireDefault(_trash);

var _view = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/view.jsx");

var _view2 = _interopRequireDefault(_view);

var _restore = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/restore.jsx");

var _restore2 = _interopRequireDefault(_restore);

var _duplicate = __webpack_require__("./client/my-sites/post-type-list/post-actions-ellipsis-menu/duplicate.jsx");

var _duplicate2 = _interopRequireDefault(_duplicate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function PostActionsEllipsisMenu(_ref) {
	var globalId = _ref.globalId,
	    includeDefaultActions = _ref.includeDefaultActions,
	    children = _ref.children;

	var actions = [];

	if (includeDefaultActions) {
		actions.push(_react2.default.createElement(_edit2.default, { key: 'edit' }), _react2.default.createElement(_view2.default, { key: 'view' }), _react2.default.createElement(_stats2.default, { key: 'stats' }), _react2.default.createElement(_publish2.default, { key: 'publish' }), _react2.default.createElement(_share2.default, { key: 'share' }), _react2.default.createElement(_restore2.default, { key: 'restore' }), _react2.default.createElement(_duplicate2.default, { key: 'duplicate' }), _react2.default.createElement(_trash2.default, { key: 'trash' }));
	}

	children = _react.Children.toArray(children);
	if (children.length) {
		if (actions.length) {
			actions.push(_react2.default.createElement(_menuSeparator2.default, { key: 'separator' }));
		}

		actions = actions.concat(children);
	}

	return _react2.default.createElement(
		'div',
		{ className: 'post-actions-ellipsis-menu' },
		_react2.default.createElement(
			_ellipsisMenu2.default,
			{ position: 'bottom left', disabled: !globalId },
			actions.map(function (action) {
				return (0, _react.cloneElement)(action, { globalId: globalId });
			})
		)
	);
} /**
   * External dependencies
   */


PostActionsEllipsisMenu.propTypes = {
	globalId: _react.PropTypes.string,
	includeDefaultActions: _react.PropTypes.bool,
	children: _react.PropTypes.node
};

PostActionsEllipsisMenu.defaultProps = {
	includeDefaultActions: true
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/publish.jsx":
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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _actions = __webpack_require__("./client/state/posts/actions.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PostActionsEllipsisMenuPublish = function (_Component) {
	(0, _inherits3.default)(PostActionsEllipsisMenuPublish, _Component);

	function PostActionsEllipsisMenuPublish() {
		(0, _classCallCheck3.default)(this, PostActionsEllipsisMenuPublish);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostActionsEllipsisMenuPublish.__proto__ || (0, _getPrototypeOf2.default)(PostActionsEllipsisMenuPublish)).apply(this, arguments));

		_this.publishPost = _this.publishPost.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(PostActionsEllipsisMenuPublish, [{
		key: 'publishPost',
		value: function publishPost() {
			var _props = this.props,
			    siteId = _props.siteId,
			    postId = _props.postId;

			if (!siteId || !postId) {
				return;
			}

			_analytics.mc.bumpStat('calypso_cpt_actions', 'publish');
			this.props.savePost(siteId, postId, { status: 'publish' });
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    translate = _props2.translate,
			    status = _props2.status,
			    canPublish = _props2.canPublish;

			if (!canPublish || !(0, _includes3.default)(['pending', 'draft'], status)) {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.publishPost, icon: 'reader' },
				translate('Publish')
			);
		}
	}]);
	return PostActionsEllipsisMenuPublish;
}(_react.Component);

/**
 * Internal dependencies
 */


PostActionsEllipsisMenuPublish.propTypes = {
	globalId: _react.PropTypes.string,
	translate: _react.PropTypes.func.isRequired,
	status: _react.PropTypes.string,
	siteId: _react.PropTypes.number,
	postId: _react.PropTypes.number,
	canPublish: _react.PropTypes.bool,
	savePost: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getPost)(state, ownProps.globalId);
	if (!post) {
		return {};
	}

	return {
		status: post.status,
		siteId: post.site_ID,
		postId: post.ID,
		canPublish: (0, _canCurrentUser2.default)(state, post.site_ID, 'publish_posts')
	};
}, { savePost: _actions.savePost })((0, _i18nCalypso.localize)(PostActionsEllipsisMenuPublish));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/restore.jsx":
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

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _actions = __webpack_require__("./client/state/posts/actions.js");

var _selectors2 = __webpack_require__("./client/state/current-user/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var PostActionsEllipsisMenuRestore = function (_Component) {
	(0, _inherits3.default)(PostActionsEllipsisMenuRestore, _Component);

	function PostActionsEllipsisMenuRestore() {
		(0, _classCallCheck3.default)(this, PostActionsEllipsisMenuRestore);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostActionsEllipsisMenuRestore.__proto__ || (0, _getPrototypeOf2.default)(PostActionsEllipsisMenuRestore)).apply(this, arguments));

		_this.restorePost = _this.restorePost.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(PostActionsEllipsisMenuRestore, [{
		key: 'restorePost',
		value: function restorePost() {
			var _props = this.props,
			    siteId = _props.siteId,
			    postId = _props.postId;

			if (!siteId || !postId) {
				return;
			}

			_analytics.mc.bumpStat('calypso_cpt_actions', 'restore');
			this.props.restorePost(siteId, postId);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    translate = _props2.translate,
			    canRestore = _props2.canRestore,
			    status = _props2.status;

			if ('trash' !== status || !canRestore) {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.restorePost, icon: 'undo' },
				translate('Restore')
			);
		}
	}]);
	return PostActionsEllipsisMenuRestore;
}(_react.Component); /**
                      * External dependencies
                      */


PostActionsEllipsisMenuRestore.propTypes = {
	globalId: _react.PropTypes.string,
	translate: _react.PropTypes.func.isRequired,
	siteId: _react.PropTypes.number,
	postId: _react.PropTypes.number,
	canRestore: _react.PropTypes.bool,
	status: _react.PropTypes.string,
	restorePost: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getPost)(state, ownProps.globalId);
	if (!post) {
		return {};
	}

	var userId = (0, _selectors2.getCurrentUserId)(state);
	var isAuthor = post.author && post.author.ID === userId;

	return {
		siteId: post.site_ID,
		postId: post.ID,
		status: post.status,
		canRestore: (0, _canCurrentUser2.default)(state, post.site_ID, isAuthor ? 'delete_posts' : 'delete_others_posts')
	};
}, { restorePost: _actions.restorePost })((0, _i18nCalypso.localize)(PostActionsEllipsisMenuRestore));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/share.jsx":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _actions = __webpack_require__("./client/state/ui/post-type-list/actions.js");

var _isPublicizeEnabled = __webpack_require__("./client/state/selectors/is-publicize-enabled.js");

var _isPublicizeEnabled2 = _interopRequireDefault(_isPublicizeEnabled);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var PostActionsEllipsisMenuShare = function (_Component) {
	(0, _inherits3.default)(PostActionsEllipsisMenuShare, _Component);

	function PostActionsEllipsisMenuShare() {
		(0, _classCallCheck3.default)(this, PostActionsEllipsisMenuShare);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostActionsEllipsisMenuShare.__proto__ || (0, _getPrototypeOf2.default)(PostActionsEllipsisMenuShare)).apply(this, arguments));

		_this.sharePost = _this.sharePost.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(PostActionsEllipsisMenuShare, [{
		key: 'sharePost',
		value: function sharePost() {
			_analytics.mc.bumpStat('calypso_cpt_actions', 'share');
			this.props.toggleSharePanel(this.props.globalId);
			this.props.onClick(); // hide ellipsis menu
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    status = _props.status,
			    isPublicizeEnabledForSite = _props.isPublicizeEnabled;

			if (!_config2.default.isEnabled('posts/post-type-list') || !(0, _includes3.default)(['publish'], status) || !isPublicizeEnabledForSite) {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.sharePost, icon: 'share' },
				translate('Share')
			);
		}
	}]);
	return PostActionsEllipsisMenuShare;
}(_react.Component);

PostActionsEllipsisMenuShare.propTypes = {
	globalId: _propTypes2.default.string,
	translate: _propTypes2.default.func.isRequired,
	status: _propTypes2.default.string,
	onClick: _propTypes2.default.func
};
exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var globalId = _ref.globalId;

	var post = (0, _selectors.getPost)(state, globalId);
	if (!post) {
		return {};
	}

	return {
		status: post.status,
		isPublicizeEnabled: (0, _isPublicizeEnabled2.default)(state, post.site_ID, post.type)
	};
}, {
	toggleSharePanel: _actions.toggleSharePanel
})((0, _i18nCalypso.localize)(PostActionsEllipsisMenuShare));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/stats.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/posts/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function bumpStat() {
	_analytics.mc.bumpStat('calypso_cpt_actions', 'stats');
} /**
   * External dependencies
   */


function PostActionsEllipsisMenuStats(_ref) {
	var translate = _ref.translate,
	    siteSlug = _ref.siteSlug,
	    postId = _ref.postId,
	    status = _ref.status,
	    isStatsActive = _ref.isStatsActive;

	if (!isStatsActive || 'publish' !== status) {
		return null;
	}

	return _react2.default.createElement(
		_menuItem2.default,
		{
			href: '/stats/post/' + postId + '/' + siteSlug,
			onClick: bumpStat,
			icon: 'stats-alt' },
		translate('Stats')
	);
}

PostActionsEllipsisMenuStats.propTypes = {
	globalId: _react.PropTypes.string,
	translate: _react.PropTypes.func.isRequired,
	siteSlug: _react.PropTypes.string,
	postId: _react.PropTypes.number,
	status: _react.PropTypes.string,
	isStatsActive: _react.PropTypes.bool
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors2.getPost)(state, ownProps.globalId);
	if (!post) {
		return {};
	}

	return {
		siteSlug: (0, _selectors.getSiteSlug)(state, post.site_ID),
		postId: post.ID,
		status: post.status,
		isStatsActive: false !== (0, _selectors.isJetpackModuleActive)(state, post.site_ID, 'stats')
	};
})((0, _i18nCalypso.localize)(PostActionsEllipsisMenuStats));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/trash.jsx":
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

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _actions = __webpack_require__("./client/state/posts/actions.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/current-user/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var PostActionsEllipsisMenuTrash = function (_Component) {
	(0, _inherits3.default)(PostActionsEllipsisMenuTrash, _Component);

	function PostActionsEllipsisMenuTrash() {
		(0, _classCallCheck3.default)(this, PostActionsEllipsisMenuTrash);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PostActionsEllipsisMenuTrash.__proto__ || (0, _getPrototypeOf2.default)(PostActionsEllipsisMenuTrash)).apply(this, arguments));

		_this.trashPost = _this.trashPost.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(PostActionsEllipsisMenuTrash, [{
		key: 'trashPost',
		value: function trashPost() {
			var _props = this.props,
			    translate = _props.translate,
			    siteId = _props.siteId,
			    postId = _props.postId,
			    status = _props.status;

			if (!postId) {
				return;
			}

			if ('trash' !== status) {
				_analytics.mc.bumpStat('calypso_cpt_actions', 'trash');
				this.props.trashPost(siteId, postId);
			} else if (confirm(translate('Are you sure you want to permanently delete this post?'))) {
				_analytics.mc.bumpStat('calypso_cpt_actions', 'delete');
				this.props.deletePost(siteId, postId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    translate = _props2.translate,
			    status = _props2.status,
			    canDelete = _props2.canDelete;

			if (!canDelete) {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.trashPost, icon: 'trash' },
				'trash' === status ? translate('Delete Permanently') : translate('Trash', { context: 'verb' })
			);
		}
	}]);
	return PostActionsEllipsisMenuTrash;
}(_react.Component); /**
                      * External dependencies
                      */


PostActionsEllipsisMenuTrash.propTypes = {
	globalId: _react.PropTypes.string,
	translate: _react.PropTypes.func.isRequired,
	postId: _react.PropTypes.number,
	siteId: _react.PropTypes.number,
	status: _react.PropTypes.string,
	canDelete: _react.PropTypes.bool,
	trashPost: _react.PropTypes.func,
	deletePost: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getPost)(state, ownProps.globalId);
	if (!post) {
		return {};
	}

	var userId = (0, _selectors2.getCurrentUserId)(state);
	var isAuthor = post.author && post.author.ID === userId;

	return {
		postId: post.ID,
		siteId: post.site_ID,
		status: post.status,
		canDelete: (0, _canCurrentUser2.default)(state, post.site_ID, isAuthor ? 'delete_posts' : 'delete_others_posts')
	};
}, { trashPost: _actions.trashPost, deletePost: _actions.deletePost })((0, _i18nCalypso.localize)(PostActionsEllipsisMenuTrash));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-actions-ellipsis-menu/view.jsx":
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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _actions = __webpack_require__("./client/state/ui/preview/actions.js");

var _actions2 = __webpack_require__("./client/state/ui/layout-focus/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var PostActionsEllipsisMenuView = function (_Component) {
	(0, _inherits3.default)(PostActionsEllipsisMenuView, _Component);

	function PostActionsEllipsisMenuView() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PostActionsEllipsisMenuView);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostActionsEllipsisMenuView.__proto__ || (0, _getPrototypeOf2.default)(PostActionsEllipsisMenuView)).call.apply(_ref, [this].concat(args))), _this), _this.previewPost = function (event) {
			var _this$props = _this.props,
			    isPreviewable = _this$props.isPreviewable,
			    previewUrl = _this$props.previewUrl;

			_analytics.mc.bumpStat('calypso_cpt_actions', 'view');
			if (!isPreviewable) {
				return;
			}

			_this.props.setPreviewUrl(previewUrl);
			_this.props.setLayoutFocus('preview');
			_this.props.onClick();
			event.preventDefault();
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PostActionsEllipsisMenuView, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    status = _props.status,
			    previewUrl = _props.previewUrl;

			if (!previewUrl) {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{
					href: previewUrl,
					onClick: this.previewPost,
					icon: 'visible',
					target: '_blank',
					rel: 'noopener noreferrer' },
				(0, _includes3.default)(['publish', 'private'], status) ? translate('View', { context: 'verb' }) : translate('Preview', { context: 'verb' })
			);
		}
	}]);
	return PostActionsEllipsisMenuView;
}(_react.Component); /**
                      * External dependencies
                      */


PostActionsEllipsisMenuView.propTypes = {
	globalId: _react.PropTypes.string,
	translate: _react.PropTypes.func.isRequired,
	status: _react.PropTypes.string,
	isPreviewable: _react.PropTypes.bool,
	onClick: _react.PropTypes.func,
	previewUrl: _react.PropTypes.string,
	setPreviewUrl: _react.PropTypes.func.isRequired,
	setLayoutFocus: _react.PropTypes.func.isRequired
};
PostActionsEllipsisMenuView.defaultProps = {
	globalId: '',
	status: 'draft',
	isPreviewable: false,
	onClick: function onClick() {},
	previewUrl: ''
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getPost)(state, ownProps.globalId);
	if (!post) {
		return {};
	}

	return {
		status: post.status,
		isPreviewable: false !== (0, _selectors2.isSitePreviewable)(state, post.site_ID),
		previewUrl: (0, _selectors.getPostPreviewUrl)(state, post.site_ID, post.ID)
	};
}, { setPreviewUrl: _actions.setPreviewUrl, setLayoutFocus: _actions2.setLayoutFocus })((0, _i18nCalypso.localize)(PostActionsEllipsisMenuView));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-thumbnail.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _resizeImageUrl = __webpack_require__("./client/lib/resize-image-url/index.js");

var _resizeImageUrl2 = _interopRequireDefault(_resizeImageUrl);

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function PostTypeListPostThumbnail(_ref) {
	var thumbnail = _ref.thumbnail;

	var classes = (0, _classnames2.default)('post-type-list__post-thumbnail-wrapper', {
		'has-image': !!thumbnail
	});

	return _react2.default.createElement(
		'div',
		{ className: classes },
		thumbnail && _react2.default.createElement('img', {
			src: (0, _resizeImageUrl2.default)(thumbnail, { h: 80 }),
			className: 'post-type-list__post-thumbnail' })
	);
} /**
   * External dependencies
   */


PostTypeListPostThumbnail.propTypes = {
	globalId: _react.PropTypes.string,
	thumbnail: _react.PropTypes.string
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getNormalizedPost)(state, ownProps.globalId);
	var thumbnail = (0, _get3.default)(post, 'canonical_image.uri');

	return { thumbnail: thumbnail };
})(PostTypeListPostThumbnail);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-type-post-author/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostTypePostAuthor(_ref) {
	var name = _ref.name;

	if (!name) {
		return null;
	}

	return _react2.default.createElement(
		'div',
		{ className: 'post-type-post-author' },
		_react2.default.createElement(
			'div',
			{ className: 'post-type-post-author__name' },
			name
		)
	);
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


PostTypePostAuthor.propTypes = {
	globalId: _propTypes2.default.string,
	name: _propTypes2.default.string
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getPost)(state, ownProps.globalId);

	return {
		name: (0, _get3.default)(post, ['author', 'name'])
	};
})((0, _i18nCalypso.localize)(PostTypePostAuthor));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-type-list/post-type-site-info/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _siteIcon = __webpack_require__("./client/blocks/site-icon/index.jsx");

var _siteIcon2 = _interopRequireDefault(_siteIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostTypeSiteInfo(_ref) {
	var site = _ref.site,
	    siteTitle = _ref.siteTitle;

	if (!site) {
		return null;
	}

	return _react2.default.createElement(
		'div',
		{ className: 'post-type-site-info' },
		_react2.default.createElement(_siteIcon2.default, { size: 16, site: site }),
		_react2.default.createElement(
			'div',
			{ className: 'post-type-site-info__title' },
			siteTitle
		)
	);
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


PostTypeSiteInfo.propTypes = {
	globalId: _propTypes2.default.string,
	site: _propTypes2.default.object,
	siteTitle: _propTypes2.default.string
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = (0, _selectors.getPost)(state, ownProps.globalId);
	var siteId = post ? post.site_ID : null;

	return {
		site: siteId ? (0, _selectors2.getSite)(state, siteId) : null,
		siteTitle: siteId ? (0, _selectors2.getSiteTitle)(state, siteId) : null
	};
})((0, _i18nCalypso.localize)(PostTypeSiteInfo));
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

/***/ "./client/my-sites/types/controller.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.redirect = redirect;
exports.list = list;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _main = __webpack_require__("./client/my-sites/types/main.jsx");

var _main2 = _interopRequireDefault(_main);

var _path = __webpack_require__("./client/lib/route/path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/**
 * External Dependencies
 */
function redirect() {
	_page2.default.redirect('/posts');
}

function list(context, next) {
	context.primary = _react2.default.createElement(_main2.default, { query: {
			type: context.params.type,
			status: (0, _path.mapPostStatus)(context.params.status),
			search: context.query.s
		} });

	next();
}

/***/ }),

/***/ "./client/my-sites/types/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (router) {
	if (!_config2.default.isEnabled('manage/custom-post-types')) {
		return;
	}

	router('/types/:type/:status?/:site', _controller2.siteSelection, _controller2.makeNavigation, _controller3.list, _controller.makeLayout);
	router('/types/:type', _controller2.siteSelection, _controller2.sites, _controller.makeLayout);
	router('/types', _controller3.redirect);
};

var _controller = __webpack_require__("./client/controller/index.web.js");

var _controller2 = __webpack_require__("./client/my-sites/controller.js");

var _controller3 = __webpack_require__("./client/my-sites/types/controller.jsx");

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default']; /**
                                      * Internal dependencies
                                      */

/***/ }),

/***/ "./client/my-sites/types/main.jsx":
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

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _documentHead = __webpack_require__("./client/components/data/document-head/index.jsx");

var _documentHead2 = _interopRequireDefault(_documentHead);

var _pageViewTracker = __webpack_require__("./client/lib/analytics/page-view-tracker/index.jsx");

var _pageViewTracker2 = _interopRequireDefault(_pageViewTracker);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _postTypeFilter = __webpack_require__("./client/my-sites/post-type-filter/index.jsx");

var _postTypeFilter2 = _interopRequireDefault(_postTypeFilter);

var _postTypeList = __webpack_require__("./client/my-sites/post-type-list/index.jsx");

var _postTypeList2 = _interopRequireDefault(_postTypeList);

var _postTypeUnsupported = __webpack_require__("./client/my-sites/types/post-type-unsupported/index.jsx");

var _postTypeUnsupported2 = _interopRequireDefault(_postTypeUnsupported);

var _postTypeForbidden = __webpack_require__("./client/my-sites/types/post-type-forbidden/index.jsx");

var _postTypeForbidden2 = _interopRequireDefault(_postTypeForbidden);

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/post-types/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Types(_ref) {
	var siteId = _ref.siteId,
	    query = _ref.query,
	    postType = _ref.postType,
	    postTypeSupported = _ref.postTypeSupported,
	    userCanEdit = _ref.userCanEdit;

	return _react2.default.createElement(
		_main2.default,
		null,
		_react2.default.createElement(_documentHead2.default, { title: (0, _get3.default)(postType, 'label') }),
		_react2.default.createElement(_pageViewTracker2.default, {
			path: siteId ? '/types/:site' : '/types',
			title: 'Custom Post Type'
		}),
		_react2.default.createElement(_sidebarNavigation2.default, null),
		false !== userCanEdit && false !== postTypeSupported && [_react2.default.createElement(_postTypeFilter2.default, {
			key: 'filter',
			query: userCanEdit ? query : null
		}), _react2.default.createElement(_postTypeList2.default, {
			key: 'list',
			query: userCanEdit ? query : null,
			largeTitles: true,
			wrapTitles: true
		})],
		false === postTypeSupported && _react2.default.createElement(_postTypeUnsupported2.default, { type: query.type }),
		false === userCanEdit && _react2.default.createElement(_postTypeForbidden2.default, null)
	);
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


Types.propTypes = {
	siteId: _react.PropTypes.number,
	query: _react.PropTypes.object,
	postType: _react.PropTypes.object,
	postTypeSupported: _react.PropTypes.bool,
	userCanEdit: _react.PropTypes.bool
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var postType = (0, _selectors2.getPostType)(state, siteId, ownProps.query.type);
	var capability = (0, _get3.default)(postType, ['capabilities', 'edit_posts'], null);

	return {
		siteId: siteId,
		postType: postType,
		postTypeSupported: (0, _selectors2.isPostTypeSupported)(state, siteId, ownProps.query.type),
		userCanEdit: (0, _canCurrentUser2.default)(state, siteId, capability)
	};
})(Types);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/types/post-type-forbidden/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PostTypeForbidden(_ref) {
	var translate = _ref.translate;

	return _react2.default.createElement(_emptyContent2.default, {
		illustration: '/calypso/images/illustrations/whoops.svg',
		title: translate('You need permission to manage this post type'),
		line: translate('Ask your site administrator to grant you access') });
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


PostTypeForbidden.propTypes = {
	translate: _react.PropTypes.func
};

exports.default = (0, _i18nCalypso.localize)(PostTypeForbidden);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/types/post-type-unsupported/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constants
 */

/**
 * Post types which can be configured in the Writing Site Settings for a site,
 * regardless of whether the current theme supports it.
 *
 * @type {Array}
 */


/**
 * Internal dependencies
 */
var CONFIGURABLE_TYPES = ['jetpack-portfolio', 'jetpack-testimonial']; /**
                                                                        * External dependencies
                                                                        */


function PostTypeUnsupported(_ref) {
	var translate = _ref.translate,
	    canManage = _ref.canManage,
	    siteSlug = _ref.siteSlug,
	    type = _ref.type;

	var isConfigurableType = (0, _includes3.default)(CONFIGURABLE_TYPES, type);

	var title = void 0,
	    line = void 0,
	    action = void 0,
	    actionUrl = void 0;
	if (isConfigurableType && canManage) {
		switch (type) {
			case 'jetpack-portfolio':
				title = translate('Portfolios are not enabled');
				break;

			case 'jetpack-testimonial':
				title = translate('Testimonials are not enabled');
				break;
		}

		line = translate('Activate custom content types in your site settings');
		action = translate('Manage Settings');
		actionUrl = '/settings/writing/' + siteSlug;
	} else {
		line = translate('Your site does not support this content type');
	}

	if (!title) {
		title = translate('Content type unsupported');
	}

	return _react2.default.createElement(_emptyContent2.default, { title: title, line: line, action: action, actionURL: actionUrl });
}

PostTypeUnsupported.propTypes = {
	translate: _react.PropTypes.func,
	canManage: _react.PropTypes.bool,
	siteSlug: _react.PropTypes.string,
	type: _react.PropTypes.string
};

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);

	return {
		canManage: (0, _canCurrentUser2.default)(state, siteId, 'manage_options'),
		siteSlug: (0, _selectors2.getSiteSlug)(state, siteId)
	};
})((0, _i18nCalypso.localize)(PostTypeUnsupported));
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-sharing/publicize-message.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _countedTextarea = __webpack_require__("./client/components/forms/counted-textarea/index.jsx");

var _countedTextarea2 = _interopRequireDefault(_countedTextarea);

var _formTextarea = __webpack_require__("./client/components/forms/form-textarea/index.jsx");

var _formTextarea2 = _interopRequireDefault(_formTextarea);

var _infoPopover = __webpack_require__("./client/components/info-popover/index.jsx");

var _infoPopover2 = _interopRequireDefault(_infoPopover);

var _trackInputChanges = __webpack_require__("./client/components/track-input-changes/index.jsx");

var _trackInputChanges2 = _interopRequireDefault(_trackInputChanges);

var _actions = __webpack_require__("./client/lib/posts/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _stats = __webpack_require__("./client/lib/posts/stats.js");

var _stats2 = _interopRequireDefault(_stats);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
exports.default = _react2.default.createClass({
	displayName: 'PublicizeMessage',

	propTypes: {
		disabled: _react2.default.PropTypes.bool,
		message: _react2.default.PropTypes.string,
		preview: _react2.default.PropTypes.string,
		acceptableLength: _react2.default.PropTypes.number,
		requireCount: _react2.default.PropTypes.bool,
		onChange: _react2.default.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			disabled: false,
			message: '',
			acceptableLength: 140,
			requireCount: false
		};
	},

	onChange: function onChange(event) {
		// TODO: REDUX - remove flux actions when whole post-editor is reduxified
		if (this.props.onChange) {
			this.props.onChange(event.target.value);
		} else {
			_actions2.default.updateMetadata('_wpas_mess', event.target.value);
		}
	},

	recordStats: function recordStats() {
		_stats2.default.recordStat('sharing_message_changed');
		_stats2.default.recordEvent('Publicize Sharing Message Changed');
	},

	renderInfoPopover: function renderInfoPopover() {
		return _react2.default.createElement(
			_infoPopover2.default,
			{
				className: 'publicize-message-counter-info',
				position: 'bottom left',
				gaEventCategory: 'Editor',
				popoverName: 'SharingMessage'
			},
			this.translate('The length includes space for the link to your post and an attached image.', { context: 'Post editor sharing message counter explanation' })
		);
	},

	renderTextarea: function renderTextarea() {
		if (this.props.requireCount) {
			return _react2.default.createElement(
				_countedTextarea2.default,
				{
					disabled: this.props.disabled,
					value: this.props.message,
					placeholder: this.props.preview,
					countPlaceholderLength: true,
					onChange: this.onChange,
					showRemainingCharacters: true,
					acceptableLength: this.props.acceptableLength,
					className: 'editor-sharing__message-input'
				},
				this.renderInfoPopover()
			);
		} else {
			return _react2.default.createElement(_formTextarea2.default, {
				disabled: this.props.disabled,
				value: this.props.message,
				placeholder: this.props.preview,
				onChange: this.onChange,
				className: 'editor-sharing__message-input' });
		}
	},

	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'editor-sharing__publicize-message' },
			_react2.default.createElement(
				'h5',
				{ className: 'editor-sharing__message-heading' },
				this.translate('Customize the message', { context: 'Post editor sharing message heading' })
			),
			_react2.default.createElement(
				_trackInputChanges2.default,
				{ onNewValue: this.recordStats },
				this.renderTextarea()
			)
		);
	}
}); /**
     * External dependencies
     */

module.exports = exports['default'];

/***/ }),

/***/ "./client/state/posts/counts/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.receivePostCounts = receivePostCounts;
exports.requestPostCounts = requestPostCounts;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action object signalling that post counts have been received for
 * the site and post type.
 *
 * @param  {Number} siteId   Site ID
 * @param  {String} postType Post type
 * @param  {Object} counts   Mapping of post status to count
 * @return {Object}          Action object
 */
/**
 * Internal dependencies
 */
function receivePostCounts(siteId, postType, counts) {
	return {
		type: _actionTypes.POST_COUNTS_RECEIVE,
		siteId: siteId,
		postType: postType,
		counts: counts
	};
}

/**
 * Returns an action thunk, dispatching progress of a request to retrieve post
 * counts for a site and post type.
 *
 * @param  {Number}   siteId   Site ID
 * @param  {String}   postType Post type
 * @return {Function}          Action thunk
 */
function requestPostCounts(siteId, postType) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.POST_COUNTS_REQUEST,
			postType: postType,
			siteId: siteId
		});

		return _wp2.default.undocumented().site(siteId).postCounts({
			type: postType
		}).then(function (data) {
			dispatch(receivePostCounts(siteId, postType, data.counts));
			dispatch({
				type: _actionTypes.POST_COUNTS_REQUEST_SUCCESS,
				siteId: siteId,
				postType: postType
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.POST_COUNTS_REQUEST_FAILURE,
				siteId: siteId,
				postType: postType,
				error: error
			});
		});
	};
}

/***/ }),

/***/ "./client/state/posts/counts/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends4 = _interopRequireDefault(_extends3);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

exports.isRequestingPostCounts = isRequestingPostCounts;
exports.getAllPostCounts = getAllPostCounts;
exports.getAllPostCount = getAllPostCount;
exports.getMyPostCounts = getMyPostCounts;
exports.getMyPostCount = getMyPostCount;
exports.getNormalizedPostCounts = getNormalizedPostCounts;
exports.getNormalizedMyPostCounts = getNormalizedMyPostCounts;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constants
 */
/**
 * External dependencies
 */
var POST_STATUSES = ['publish', 'draft', 'pending', 'private', 'future', 'trash'];

/**
 * Returns true if post counts request is in progress, or false otherwise.
 *
 * @param  {Object}  state    Global state tree
 * @param  {Number}  siteId   Site ID
 * @param  {String}  postType Post type
 * @return {Boolean}          Whether request is in progress
 */
function isRequestingPostCounts(state, siteId, postType) {
  return (0, _get3.default)(state.posts.counts.requesting, [siteId, postType], false);
}

/**
 * Returns post counts for all users on a site, filtered by post type.
 *
 * @param  {Object} state    Global state tree
 * @param  {Number} siteId   Site ID
 * @param  {String} postType Post type
 * @return {Object}          Post counts, keyed by status
 */
function getAllPostCounts(state, siteId, postType) {
  return (0, _get3.default)(state.posts.counts.counts, [siteId, postType, 'all'], null);
}

/**
 * Returns post count for all users on a site, filtered by post type and
 * status.
 *
 * @param  {Object} state    Global state tree
 * @param  {Number} siteId   Site ID
 * @param  {String} postType Post type
 * @param  {String} status   Post status
 * @return {Number}          Post count
 */
function getAllPostCount(state, siteId, postType, status) {
  var counts = getAllPostCounts(state, siteId, postType);
  if (!counts) {
    return null;
  }

  return counts[status] || 0;
}

/**
 * Returns post counts for current user on a site, filtered by post type.
 *
 * @param  {Object} state    Global state tree
 * @param  {Number} siteId   Site ID
 * @param  {String} postType Post type
 * @return {Object}          Post counts, keyed by status
 */
function getMyPostCounts(state, siteId, postType) {
  return (0, _get3.default)(state.posts.counts.counts, [siteId, postType, 'mine'], null);
}

/**
 * Returns post count for current user on a site, filtered by post type and
 * status.
 *
 * @param  {Object} state    Global state tree
 * @param  {Number} siteId   Site ID
 * @param  {String} postType Post type
 * @param  {String} status   Post status
 * @return {Number}          Post count
 */
function getMyPostCount(state, siteId, postType, status) {
  var counts = getMyPostCounts(state, siteId, postType);
  if (!counts) {
    return null;
  }

  return counts[status] || 0;
}

/**
 * Returns an object of normalized post counts, summing publish/private and
 * pending/draft counts.
 *
 * @param  {Object}   state         Global state tree
 * @param  {Number}   siteId        Site ID
 * @param  {String}   postType      Post type
 * @param  {Function} countSelector Selector from which to retrieve raw counts
 * @return {Number}                 Normalized post counts
 */
function getNormalizedPostCounts(state, siteId, postType) {
  var countSelector = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : getAllPostCounts;

  var counts = countSelector(state, siteId, postType);

  return POST_STATUSES.reduce(function (memo, status) {
    var count = (0, _get3.default)(counts, status, 0);

    var key = void 0;
    switch (status) {
      case 'publish':
      case 'private':
        key = 'publish';
        break;

      case 'draft':
      case 'pending':
        key = 'draft';
        break;

      default:
        key = status;
    }

    return (0, _extends4.default)({}, memo, (0, _defineProperty3.default)({}, key, (memo[key] || 0) + count));
  }, {});
}

/**
 * Returns an object of normalized post counts for current user, summing
 * publish/private and pending/draft counts.
 *
 * @param  {Object} state    Global state tree
 * @param  {Number} siteId   Site ID
 * @param  {String} postType Post type
 * @return {Number}          Normalized post counts
 */
function getNormalizedMyPostCounts(state, siteId, postType) {
  return getNormalizedPostCounts(state, siteId, postType, getMyPostCounts);
}

/***/ }),

/***/ "./client/state/sharing/publicize/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.dismissShareConfirmation = dismissShareConfirmation;
exports.sharePost = sharePost;
exports.fetchConnections = fetchConnections;
exports.fetchConnection = fetchConnection;
exports.createSiteConnection = createSiteConnection;
exports.updateSiteConnection = updateSiteConnection;
exports.deleteSiteConnection = deleteSiteConnection;
exports.failCreateConnection = failCreateConnection;
exports.deleteConnection = deleteConnection;
exports.receiveConnections = receiveConnections;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function dismissShareConfirmation(siteId, postId) {
	return {
		type: _actionTypes.PUBLICIZE_SHARE_DISMISS,
		siteId: siteId,
		postId: postId
	};
}

function sharePost(siteId, postId, skippedConnections, message) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_SHARE,
			siteId: siteId,
			postId: postId,
			skippedConnections: skippedConnections,
			message: message
		});

		return new _promise2.default(function (resolve) {
			_wp2.default.undocumented().publicizePost(siteId, postId, message, skippedConnections, function (error, data) {
				// Note: successes are recorded in data.results, errors are recorded in data.errors. There could be
				// several errors and several successes.
				if (error || !data.results) {
					dispatch({ type: _actionTypes.PUBLICIZE_SHARE_FAILURE, siteId: siteId, postId: postId, error: error });
				} else {
					dispatch({ type: _actionTypes.PUBLICIZE_SHARE_SUCCESS, siteId: siteId, postId: postId });
				}

				resolve();
			});
		});
	};
}

/**
 * Triggers a network request to fetch Publicize connections for the specified
 * site ID.
 *
 * @param  {Number}   siteId Site ID
 * @return {Function}        Action thunk
 */
function fetchConnections(siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_CONNECTIONS_REQUEST,
			siteId: siteId
		});

		return _wp2.default.undocumented().siteConnections(siteId).then(function (connections) {
			dispatch(receiveConnections(siteId, connections));
			dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTIONS_REQUEST_SUCCESS,
				siteId: siteId
			});
		}).catch(function (error) {
			return dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTIONS_REQUEST_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

/**
 * Triggers a network request to request a Publicize connection for the
 * specified site ID.
 *
 * @param  {Number} siteId       Site ID
 * @param  {Number} connectionId ID of the connection to be fetched.
 * @return {Function}            Action thunk
 */
function fetchConnection(siteId, connectionId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_CONNECTION_REQUEST,
			connectionId: connectionId,
			siteId: siteId
		});

		return _wp2.default.undocumented().site(siteId).getConnection(connectionId).then(function (connection) {
			dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTION_RECEIVE,
				connection: connection,
				siteId: siteId
			});
			dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTION_REQUEST_SUCCESS,
				connectionId: connectionId,
				siteId: siteId
			});
		}).catch(function (error) {
			return dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTION_REQUEST_FAILURE,
				connectionId: connectionId,
				error: error,
				siteId: siteId
			});
		});
	};
}

/**
 * Given a service and optional site, establishes a new connection to the
 * service for the current user.
 *
 * @param {Number} siteId              Site ID
 * @param {Number} keyringConnectionId Keyring connection ID
 * @param {Number} externalUserId      An optional external user ID to create a connection to an external user account.
 * @return {Function}                  Action thunk
 */
function createSiteConnection(siteId, keyringConnectionId, externalUserId) {
	return function (dispatch) {
		return _wp2.default.undocumented().createConnection(keyringConnectionId, siteId, externalUserId, { shared: false }).then(function (connection) {
			return dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTION_CREATE,
				connection: connection
			});
		}).catch(function (error) {
			return dispatch(failCreateConnection(error));
		});
	};
}

/**
 * Triggers a network request to update a Publicize connection for a specific site.
 *
 * @param  {Object} connection         Connection to be updated.
 * @param  {Number} connection.site_ID Site ID for which the connection is updated.
 * @param  {Number} connection.ID      ID of the connection to be updated.
 * @param  {String} connection.label   Name of the connected service.
 * @param  {Object} attributes         The update request body.
 * @return {Function}                  Action thunk
 */
function updateSiteConnection(connection, attributes) {
	return function (dispatch) {
		return _wp2.default.undocumented().updateConnection(connection.site_ID, connection.ID, attributes).then(function (response) {
			return dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTION_UPDATE,
				connection: response
			});
		}).catch(function (error) {
			return dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTION_UPDATE_FAILURE,
				error: (0, _extends3.default)({}, error, { label: connection.label })
			});
		});
	};
}

/**
 * Triggers a network request to delete a Publicize connection for a specific site.
 *
 * @param  {Object} connection         Connection to be deleted.
 * @param  {Number} connection.site_ID Site ID for which the connection is deleted.
 * @param  {Number} connection.ID      ID of the connection to be deleted.
 * @param  {String} connection.label   Name of the service that was connected.
 * @return {Function}                  Action thunk
 */
function deleteSiteConnection(connection) {
	return function (dispatch) {
		return _wp2.default.undocumented().deleteSiteConnection(connection.site_ID, connection.ID).then(function () {
			return dispatch(deleteConnection(connection));
		}).catch(function (error) {
			if (error && 404 === error.statusCode) {
				// If the connection cannot be found, we infer that it must have been deleted since the original
				// connections were retrieved, so pass along the cached connection.
				dispatch(deleteConnection(connection));
			}

			dispatch({
				type: _actionTypes.PUBLICIZE_CONNECTION_DELETE_FAILURE,
				error: (0, _extends3.default)({}, error, { label: connection.label })
			});
		});
	};
}

/**
 * Returns an action object to be used in signalling that creating a Publicize
 * connection has failed.
 *
 * @param  {Object} error Error object
 * @return {Object}       Action object
 */
function failCreateConnection(error) {
	return {
		type: _actionTypes.PUBLICIZE_CONNECTION_CREATE_FAILURE,
		error: error
	};
}

/**
 * Returns an action object to be used in signalling that a network request for
 * removing a Publicize connection has been received.
 *
 * @param  {Object} connection Connection to be deleted.
 * @return {Object}            Action object
 */
function deleteConnection(connection) {
	return {
		type: _actionTypes.PUBLICIZE_CONNECTION_DELETE,
		connection: connection
	};
}

/**
 * Returns an action object to be used in signalling that a network request for
 * Publicize connections has been received.
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} data   API response
 * @return {Object}        Action object
 */
function receiveConnections(siteId, data) {
	return {
		type: _actionTypes.PUBLICIZE_CONNECTIONS_RECEIVE,
		siteId: siteId,
		data: data
	};
}

/***/ }),

/***/ "./client/state/sharing/publicize/publicize-actions/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.fetchPostShareActionsScheduled = fetchPostShareActionsScheduled;
exports.fetchPostShareActionsPublished = fetchPostShareActionsPublished;
exports.deletePostShareAction = deletePostShareAction;
exports.editPostShareAction = editPostShareAction;
exports.schedulePostShareAction = schedulePostShareAction;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function fetchPostShareActionsScheduled(siteId, postId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_SHARE_ACTIONS_SCHEDULED_REQUEST,
			siteId: siteId,
			postId: postId
		});

		var getScheduledPath = '/sites/' + siteId + '/posts/' + postId + '/publicize/scheduled-actions';
		return _wp2.default.req.get({
			path: getScheduledPath,
			apiNamespace: 'wpcom/v2'
		}, function (error, data) {
			if (error || !data.items) {
				return dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTIONS_SCHEDULED_REQUEST_FAILURE, siteId: siteId, postId: postId, error: error });
			}

			var actions = {};
			data.items.forEach(function (action) {
				return actions[action.ID] = action;
			});
			dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTIONS_SCHEDULED_REQUEST_SUCCESS, siteId: siteId, postId: postId, actions: actions });
		});
	};
}

function fetchPostShareActionsPublished(siteId, postId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_SHARE_ACTIONS_PUBLISHED_REQUEST,
			siteId: siteId,
			postId: postId
		});

		var getPublishedPath = '/sites/' + siteId + '/posts/' + postId + '/publicize/published-actions';
		return _wp2.default.req.get({
			path: getPublishedPath,
			apiNamespace: 'wpcom/v2',
			method: 'GET'
		}, function (error, data) {
			if (error || !data.items) {
				return dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTIONS_PUBLISHED_REQUEST_FAILURE, siteId: siteId, postId: postId, error: error });
			}

			var actions = {};
			data.items.forEach(function (action) {
				return actions[action.ID] = action;
			});
			dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTIONS_PUBLISHED_REQUEST_SUCCESS, siteId: siteId, postId: postId, actions: actions });
		});
	};
}

function deletePostShareAction(siteId, postId, actionId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_SHARE_ACTION_DELETE,
			siteId: siteId,
			postId: postId,
			actionId: actionId
		});

		var deleteActionPath = '/sites/' + siteId + '/posts/' + postId + '/publicize/scheduled-actions/' + actionId;
		return _wp2.default.req.get({
			path: deleteActionPath,
			apiNamespace: 'wpcom/v2',
			method: 'DELETE'
		}, function (error, data) {
			if (error || !data) {
				return dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTION_DELETE_FAILURE, siteId: siteId, postId: postId, actionId: actionId, error: error });
			}

			dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTION_DELETE_SUCCESS, siteId: siteId, postId: postId, actionId: actionId });
		});
	};
}

function editPostShareAction(siteId, postId, actionId, message, share_date) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_SHARE_ACTION_EDIT,
			siteId: siteId,
			postId: postId,
			actionId: actionId
		});

		var editActionPath = '/sites/' + siteId + '/posts/' + postId + '/publicize/scheduled-actions/' + actionId;
		return _wp2.default.req.put({
			path: editActionPath,
			body: { message: message, share_date: share_date },
			apiNamespace: 'wpcom/v2'
		}, function (error, data) {
			if (error || !data.item) {
				// TODO: consider return an WP_Error instance istead of `! data.item`
				return dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTION_EDIT_FAILURE, siteId: siteId, postId: postId, actionId: actionId, error: error });
			}

			// TODO: until we have proper data coming
			data.item.ID = actionId;
			dispatch({ type: _actionTypes.PUBLICIZE_SHARE_ACTION_EDIT_SUCCESS, siteId: siteId, postId: postId, actionId: actionId, item: data.item });
		});
	};
}

function schedulePostShareAction(siteId, postId, message, share_date, connections) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.PUBLICIZE_SHARE_ACTION_SCHEDULE,
			siteId: siteId,
			postId: postId,
			connections: connections
		});

		return _promise2.default.all(connections.map(function (connection_id) {
			return _wp2.default.req.post({
				path: '/sites/' + siteId + '/posts/' + postId + '/publicize/scheduled-actions/',
				body: { message: message, share_date: share_date, connection_id: connection_id },
				apiNamespace: 'wpcom/v2'
			});
		})).catch(function (error) {
			return dispatch({
				type: _actionTypes.PUBLICIZE_SHARE_ACTION_SCHEDULE_FAILURE,
				siteId: siteId,
				postId: postId,
				error: error,
				connections: connections
			});
		}).then(function (items) {
			return dispatch({
				type: _actionTypes.PUBLICIZE_SHARE_ACTION_SCHEDULE_SUCCESS,
				siteId: siteId,
				postId: postId,
				share_date: share_date,
				items: items,
				connections: connections
			});
		});
	};
}

/***/ }),

/***/ "./client/state/ui/post-type-list/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.hideSharePanel = hideSharePanel;
exports.toggleSharePanel = toggleSharePanel;

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function hideSharePanel(postGlobalId) {
	return {
		type: _actionTypes.POST_TYPE_LIST_SHARE_PANEL_HIDE,
		postGlobalId: postGlobalId
	};
} /**
   * Internal dependencies
   */
function toggleSharePanel(postGlobalId) {
	return {
		type: _actionTypes.POST_TYPE_LIST_SHARE_PANEL_TOGGLE,
		postGlobalId: postGlobalId
	};
}

/***/ }),

/***/ "./client/state/ui/post-type-list/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isSharePanelOpen = isSharePanelOpen;
function isSharePanelOpen(state, postGlobalId) {
	return state.ui.postTypeList.activeSharePanels.indexOf(postGlobalId) > -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canUseDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var size;

module.exports = function (recalc) {
  if (!size || recalc) {
    if (canUseDOM) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

/***/ }),

/***/ "./node_modules/lodash/transform.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__("./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__("./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__("./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__("./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__("./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__("./node_modules/lodash/isArray.js"),
    isFunction = __webpack_require__("./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__("./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__("./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object) || isTypedArray(object);
  iteratee = baseIteratee(iteratee, 4);

  if (accumulator == null) {
    if (isArr || isObject(object)) {
      var Ctor = object.constructor;
      if (isArr) {
        accumulator = isArray(object) ? new Ctor : [];
      } else {
        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
      }
    } else {
      accumulator = {};
    }
  }
  (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/AutoSizer/AutoSizer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _detectElementResize = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/vendor/detectElementResize.js");

var _detectElementResize2 = _interopRequireDefault(_detectElementResize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Decorator component that automatically adjusts the width and height of a single child.
 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
 * All other properties will be passed through to the child component.
 */
var AutoSizer = function (_PureComponent) {
  _inherits(AutoSizer, _PureComponent);

  function AutoSizer(props) {
    _classCallCheck(this, AutoSizer);

    var _this = _possibleConstructorReturn(this, (AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call(this, props));

    _this.state = {
      height: 0,
      width: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  _createClass(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Delay access of parentNode until mount.
      // This handles edge-cases where the component has already been unmounted before its ref has been set,
      // As well as libraries like react-lite which have a slightly different lifecycle.
      this._parentNode = this._autoSizer.parentNode;

      // Defer requiring resize handler in order to support server-side rendering.
      // See issue #41
      this._detectElementResize = (0, _detectElementResize2.default)();
      this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

      this._onResize();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };

      if (!disableHeight) {
        outerStyle.height = 0;
      }

      if (!disableWidth) {
        outerStyle.width = 0;
      }

      /**
       * TODO: Avoid rendering children before the initial measurements have been collected.
       * At best this would just be wasting cycles.
       * Add this check into version 10 though as it could break too many ref callbacks in version 9.
      if (
        height !== 0 &&
        width !== 0
      ) {
        child = children({ height, width })
      }
      */

      return _react2.default.createElement(
        'div',
        {
          ref: this._setRef,
          style: outerStyle
        },
        children({ height: height, width: width })
      );
    }
  }, {
    key: '_onResize',
    value: function _onResize() {
      var _props2 = this.props,
          disableHeight = _props2.disableHeight,
          disableWidth = _props2.disableWidth,
          onResize = _props2.onResize;

      // Guard against AutoSizer component being removed from the DOM immediately after being added.
      // This can result in invalid style values which can result in NaN values if we don't handle them.
      // See issue #150 for more context.

      var height = this._parentNode.offsetHeight || 0;
      var width = this._parentNode.offsetWidth || 0;

      var style = window.getComputedStyle(this._parentNode) || {};
      var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
      var paddingRight = parseInt(style.paddingRight, 10) || 0;
      var paddingTop = parseInt(style.paddingTop, 10) || 0;
      var paddingBottom = parseInt(style.paddingBottom, 10) || 0;

      var newHeight = height - paddingTop - paddingBottom;
      var newWidth = width - paddingLeft - paddingRight;

      if (!disableHeight && this.state.height !== newHeight || !disableWidth && this.state.width !== newWidth) {
        this.setState({
          height: height - paddingTop - paddingBottom,
          width: width - paddingLeft - paddingRight
        });

        onResize({ height: height, width: width });
      }
    }
  }, {
    key: '_setRef',
    value: function _setRef(autoSizer) {
      this._autoSizer = autoSizer;
    }
  }]);

  return AutoSizer;
}(_react.PureComponent);

AutoSizer.defaultProps = {
  onResize: function onResize() {}
};
exports.default = AutoSizer;
 false ? AutoSizer.propTypes = {
  /**
  * Function responsible for rendering children.
  * This function should implement the following signature:
  * ({ height, width }) => PropTypes.element
  */
  children: _react.PropTypes.func.isRequired,

  /** Disable dynamic :height property */
  disableHeight: _react.PropTypes.bool,

  /** Disable dynamic :width property */
  disableWidth: _react.PropTypes.bool,

  /** Callback to be invoked on-resize: ({ height, width }) */
  onResize: _react.PropTypes.func.isRequired
} : void 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/AutoSizer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoSizer = exports.default = undefined;

var _AutoSizer2 = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/AutoSizer/AutoSizer.js");

var _AutoSizer3 = _interopRequireDefault(_AutoSizer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _AutoSizer3.default;
exports.AutoSizer = _AutoSizer3.default;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/Grid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-virtualized/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js");

var _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);

var _ScalingCellSizeAndPositionManager = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/utils/ScalingCellSizeAndPositionManager.js");

var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

var _createCallbackMemoizer = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/utils/createCallbackMemoizer.js");

var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

var _defaultOverscanIndicesGetter = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/utils/defaultOverscanIndicesGetter.js");

var _defaultOverscanIndicesGetter2 = _interopRequireDefault(_defaultOverscanIndicesGetter);

var _updateScrollIndexHelper = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/utils/updateScrollIndexHelper.js");

var _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper);

var _defaultCellRangeRenderer = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/defaultCellRangeRenderer.js");

var _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer);

var _scrollbarSize = __webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js");

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var DEFAULT_SCROLLING_RESET_TIME_INTERVAL = exports.DEFAULT_SCROLLING_RESET_TIME_INTERVAL = 150;

/**
 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
 */
var SCROLL_POSITION_CHANGE_REASONS = {
  OBSERVED: 'observed',
  REQUESTED: 'requested'
};

/**
 * Renders tabular data with virtualization along the vertical and horizontal axes.
 * Row heights and column widths must be known ahead of time and specified as properties.
 */

var Grid = function (_PureComponent) {
  _inherits(Grid, _PureComponent);

  function Grid(props, context) {
    _classCallCheck(this, Grid);

    var _this = _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props, context));

    _this.state = {
      isScrolling: false,
      scrollDirectionHorizontal: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollDirectionVertical: _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD,
      scrollLeft: 0,
      scrollTop: 0
    };

    // Invokes onSectionRendered callback only when start/stop row or column indices change
    _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);

    // Bind functions to instance so they don't lose context when passed around
    _this._debounceScrollEndedCallback = _this._debounceScrollEndedCallback.bind(_this);
    _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._setScrollingContainerRef = _this._setScrollingContainerRef.bind(_this);
    _this._updateScrollLeftForScrollToColumn = _this._updateScrollLeftForScrollToColumn.bind(_this);
    _this._updateScrollTopForScrollToRow = _this._updateScrollTopForScrollToRow.bind(_this);

    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);

    _this._deferredInvalidateColumnIndex = null;
    _this._deferredInvalidateRowIndex = null;
    _this._recomputeScrollLeftFlag = false;
    _this._recomputeScrollTopFlag = false;

    var deferredMeasurementCache = props.deferredMeasurementCache;
    var deferredMode = typeof deferredMeasurementCache !== 'undefined';

    _this._columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
      batchAllCells: deferredMode && !deferredMeasurementCache.hasFixedHeight(),
      cellCount: props.columnCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._columnWidthGetter(params);
      },
      estimatedCellSize: _this._getEstimatedColumnSize(props)
    });
    _this._rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
      batchAllCells: deferredMode && !deferredMeasurementCache.hasFixedWidth(),
      cellCount: props.rowCount,
      cellSizeGetter: function cellSizeGetter(params) {
        return _this._rowHeightGetter(params);
      },
      estimatedCellSize: _this._getEstimatedRowSize(props)
    });

    // See defaultCellRangeRenderer() for more information on the usage of these caches
    _this._cellCache = {};
    _this._styleCache = {};
    return _this;
  }

  /**
   * Invalidate Grid size and recompute visible cells.
   * This is a deferred wrapper for recomputeGridSize().
   * It sets a flag to be evaluated on cDM/cDU to avoid unnecessary renders.
   * This method is intended for advanced use-cases like CellMeasurer.
   */
  // @TODO (bvaughn) Add automated test coverage for this.


  _createClass(Grid, [{
    key: 'invalidateCellSizeAfterRender',
    value: function invalidateCellSizeAfterRender(_ref) {
      var columnIndex = _ref.columnIndex,
          rowIndex = _ref.rowIndex;

      this._deferredInvalidateColumnIndex = typeof this._deferredInvalidateColumnIndex === 'number' ? Math.min(this._deferredInvalidateColumnIndex, columnIndex) : columnIndex;
      this._deferredInvalidateRowIndex = typeof this._deferredInvalidateRowIndex === 'number' ? Math.min(this._deferredInvalidateRowIndex, rowIndex) : rowIndex;
    }

    /**
     * Pre-measure all columns and rows in a Grid.
     * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
     * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
     */

  }, {
    key: 'measureAllCells',
    value: function measureAllCells() {
      var _props = this.props,
          columnCount = _props.columnCount,
          rowCount = _props.rowCount;


      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
    }

    /**
     * Forced recompute of row heights and column widths.
     * This function should be called if dynamic column or row sizes have changed but nothing else has.
     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
     */

  }, {
    key: 'recomputeGridSize',
    value: function recomputeGridSize() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$columnIndex = _ref2.columnIndex,
          columnIndex = _ref2$columnIndex === undefined ? 0 : _ref2$columnIndex,
          _ref2$rowIndex = _ref2.rowIndex,
          rowIndex = _ref2$rowIndex === undefined ? 0 : _ref2$rowIndex;

      var _props2 = this.props,
          scrollToColumn = _props2.scrollToColumn,
          scrollToRow = _props2.scrollToRow;


      this._columnSizeAndPositionManager.resetCell(columnIndex);
      this._rowSizeAndPositionManager.resetCell(rowIndex);

      // Cell sizes may be determined by a function property.
      // In this case the cDU handler can't know if they changed.
      // Store this flag to let the next cDU pass know it needs to recompute the scroll offset.
      this._recomputeScrollLeftFlag = scrollToColumn >= 0 && columnIndex <= scrollToColumn;
      this._recomputeScrollTopFlag = scrollToRow >= 0 && rowIndex <= scrollToRow;

      // Clear cell cache in case we are scrolling;
      // Invalid row heights likely mean invalid cached content as well.
      this._cellCache = {};
      this._styleCache = {};

      this.forceUpdate();
    }

    /**
     * Ensure column and row are visible.
     */

  }, {
    key: 'scrollToCell',
    value: function scrollToCell(_ref3) {
      var columnIndex = _ref3.columnIndex,
          rowIndex = _ref3.rowIndex;
      var columnCount = this.props.columnCount;


      var props = this.props;

      // Don't adjust scroll offset for single-column grids (eg List, Table).
      // This can cause a funky scroll offset because of the vertical scrollbar width.
      if (columnCount > 1) {
        this._updateScrollLeftForScrollToColumn(_extends({}, props, {
          scrollToColumn: columnIndex
        }));
      }

      this._updateScrollTopForScrollToRow(_extends({}, props, {
        scrollToRow: rowIndex
      }));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props3 = this.props,
          getScrollbarSize = _props3.getScrollbarSize,
          scrollLeft = _props3.scrollLeft,
          scrollToColumn = _props3.scrollToColumn,
          scrollTop = _props3.scrollTop,
          scrollToRow = _props3.scrollToRow;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // If this component was first rendered server-side, scrollbar size will be undefined.
      // In that event we need to remeasure.
      if (!this._scrollbarSizeMeasured) {
        this._scrollbarSize = getScrollbarSize();
        this._scrollbarSizeMeasured = true;
        this.setState({});
      }

      if (scrollLeft >= 0 || scrollTop >= 0) {
        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
      }

      if (scrollToColumn >= 0 || scrollToRow >= 0) {
        this._updateScrollLeftForScrollToColumn();
        this._updateScrollTopForScrollToRow();
      }

      // Update onRowsRendered callback
      this._invokeOnGridRenderedHelper();

      // Initialize onScroll callback
      this._invokeOnScrollMemoizer({
        scrollLeft: scrollLeft || 0,
        scrollTop: scrollTop || 0,
        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
      });
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) New scroll-to-cell props have been set
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props4 = this.props,
          autoHeight = _props4.autoHeight,
          columnCount = _props4.columnCount,
          height = _props4.height,
          rowCount = _props4.rowCount,
          scrollToAlignment = _props4.scrollToAlignment,
          scrollToColumn = _props4.scrollToColumn,
          scrollToRow = _props4.scrollToRow,
          width = _props4.width;
      var _state = this.state,
          scrollLeft = _state.scrollLeft,
          scrollPositionChangeReason = _state.scrollPositionChangeReason,
          scrollTop = _state.scrollTop;

      // If cell sizes have been invalidated (eg we are using CellMeasurer) then reset cached positions.
      // We must do this at the start of the method as we may calculate and update scroll position below.

      this._handleInvalidatedGridSize();

      // Handle edge case where column or row count has only just increased over 0.
      // In this case we may have to restore a previously-specified scroll offset.
      // For more info see bvaughn/react-virtualized/issues/218
      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
      // So we only set these when we require an adjustment of the scroll position.
      // See issue #2 for more information.
      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
        if (scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollLeft = scrollLeft;
        }

        // @TRICKY :autoHeight property instructs Grid to leave :scrollTop management to an external HOC (eg WindowScroller).
        // In this case we should avoid checking scrollingContainer.scrollTop since it forces layout/flow.
        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
          this._scrollingContainer.scrollTop = scrollTop;
        }
      }

      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
      if (this._recomputeScrollLeftFlag) {
        this._recomputeScrollLeftFlag = false;
        this._updateScrollLeftForScrollToColumn(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: this._columnSizeAndPositionManager,
          previousCellsCount: prevProps.columnCount,
          previousCellSize: prevProps.columnWidth,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToColumn,
          previousSize: prevProps.width,
          scrollOffset: scrollLeft,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToColumn,
          size: width,
          updateScrollIndexCallback: function updateScrollIndexCallback(scrollToColumn) {
            return _this2._updateScrollLeftForScrollToColumn(_this2.props);
          }
        });
      }

      if (this._recomputeScrollTopFlag) {
        this._recomputeScrollTopFlag = false;
        this._updateScrollTopForScrollToRow(this.props);
      } else {
        (0, _updateScrollIndexHelper2.default)({
          cellSizeAndPositionManager: this._rowSizeAndPositionManager,
          previousCellsCount: prevProps.rowCount,
          previousCellSize: prevProps.rowHeight,
          previousScrollToAlignment: prevProps.scrollToAlignment,
          previousScrollToIndex: prevProps.scrollToRow,
          previousSize: prevProps.height,
          scrollOffset: scrollTop,
          scrollToAlignment: scrollToAlignment,
          scrollToIndex: scrollToRow,
          size: height,
          updateScrollIndexCallback: function updateScrollIndexCallback(scrollToRow) {
            return _this2._updateScrollTopForScrollToRow(_this2.props);
          }
        });
      }

      // Update onRowsRendered callback if start/stop indices have changed
      this._invokeOnGridRenderedHelper();

      // Changes to :scrollLeft or :scrollTop should also notify :onScroll listeners
      if (scrollLeft !== prevState.scrollLeft || scrollTop !== prevState.scrollTop) {
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();

        this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var getScrollbarSize = this.props.getScrollbarSize;

      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
      // We handle this case in componentDidMount()

      this._scrollbarSize = getScrollbarSize();
      if (this._scrollbarSize === undefined) {
        this._scrollbarSizeMeasured = false;
        this._scrollbarSize = 0;
      } else {
        this._scrollbarSizeMeasured = true;
      }

      this._calculateChildrenToRender();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }
    }

    /**
     * @private
     * This method updates scrollLeft/scrollTop in state for the following conditions:
     * 1) Empty content (0 rows or columns)
     * 2) New scroll props overriding the current state
     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      var _state2 = this.state,
          scrollLeft = _state2.scrollLeft,
          scrollTop = _state2.scrollTop;


      if (nextProps.columnCount === 0 && scrollLeft !== 0 || nextProps.rowCount === 0 && scrollTop !== 0) {
        this._setScrollPosition({
          scrollLeft: 0,
          scrollTop: 0
        });
      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
        var newState = {};

        if (nextProps.scrollLeft != null) {
          newState.scrollLeft = nextProps.scrollLeft;
        }
        if (nextProps.scrollTop != null) {
          newState.scrollTop = nextProps.scrollTop;
        }

        this._setScrollPosition(newState);
      }

      if (nextProps.columnWidth !== this.props.columnWidth || nextProps.rowHeight !== this.props.rowHeight) {
        this._styleCache = {};
      }

      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);

      this._columnSizeAndPositionManager.configure({
        cellCount: nextProps.columnCount,
        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
      });
      this._rowSizeAndPositionManager.configure({
        cellCount: nextProps.rowCount,
        estimatedCellSize: this._getEstimatedRowSize(nextProps)
      });

      var _props5 = this.props,
          columnCount = _props5.columnCount,
          rowCount = _props5.rowCount;

      // Special case when either cols or rows were 0
      // This would prevent any cells from rendering
      // So we need to reset row scroll if cols changed from 0 (and vice versa)

      if (columnCount === 0 || rowCount === 0) {
        columnCount = 0;
        rowCount = 0;
      }

      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: columnCount,
        cellSize: this.props.columnWidth,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._columnSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.columnCount,
        nextCellSize: nextProps.columnWidth,
        nextScrollToIndex: nextProps.scrollToColumn,
        scrollToIndex: this.props.scrollToColumn,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollLeftForScrollToColumn(nextProps, _this3.state);
        }
      });
      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
        cellCount: rowCount,
        cellSize: this.props.rowHeight,
        computeMetadataCallback: function computeMetadataCallback() {
          return _this3._rowSizeAndPositionManager.resetCell(0);
        },
        computeMetadataCallbackProps: nextProps,
        nextCellsCount: nextProps.rowCount,
        nextCellSize: nextProps.rowHeight,
        nextScrollToIndex: nextProps.scrollToRow,
        scrollToIndex: this.props.scrollToRow,
        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
          return _this3._updateScrollTopForScrollToRow(nextProps, _this3.state);
        }
      });
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this._calculateChildrenToRender(nextProps, nextState);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props,
          autoContainerWidth = _props6.autoContainerWidth,
          autoHeight = _props6.autoHeight,
          className = _props6.className,
          containerStyle = _props6.containerStyle,
          height = _props6.height,
          id = _props6.id,
          noContentRenderer = _props6.noContentRenderer,
          role = _props6.role,
          style = _props6.style,
          tabIndex = _props6.tabIndex,
          width = _props6.width;
      var isScrolling = this.state.isScrolling;


      var gridStyle = {
        boxSizing: 'border-box',
        direction: 'ltr',
        height: autoHeight ? 'auto' : height,
        position: 'relative',
        width: width,
        WebkitOverflowScrolling: 'touch',
        willChange: 'transform'
      };

      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();

      // Force browser to hide scrollbars when we know they aren't necessary.
      // Otherwise once scrollbars appear they may not disappear again.
      // For more info see issue #116
      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

      // Also explicitly init styles to 'auto' if scrollbars are required.
      // This works around an obscure edge case where external CSS styles have not yet been loaded,
      // But an initial scroll index of offset is set as an external prop.
      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
      // This was originally reported via clauderic/react-infinite-calendar/issues/23
      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

      var childrenToDisplay = this._childrenToDisplay;

      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

      return _react2.default.createElement(
        'div',
        {
          ref: this._setScrollingContainerRef,
          'aria-label': this.props['aria-label'],
          className: (0, _classnames2.default)('ReactVirtualized__Grid', className),
          id: id,
          onScroll: this._onScroll,
          role: role,
          style: _extends({}, gridStyle, style),
          tabIndex: tabIndex
        },
        childrenToDisplay.length > 0 && _react2.default.createElement(
          'div',
          {
            className: 'ReactVirtualized__Grid__innerScrollContainer',
            style: _extends({
              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
              height: totalRowsHeight,
              maxWidth: totalColumnsWidth,
              maxHeight: totalRowsHeight,
              overflow: 'hidden',
              pointerEvents: isScrolling ? 'none' : '',
              position: 'relative'
            }, containerStyle)
          },
          childrenToDisplay
        ),
        showNoContentRenderer && noContentRenderer()
      );
    }

    /* ---------------------------- Helper methods ---------------------------- */

  }, {
    key: '_calculateChildrenToRender',
    value: function _calculateChildrenToRender() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var cellRenderer = props.cellRenderer,
          cellRangeRenderer = props.cellRangeRenderer,
          columnCount = props.columnCount,
          deferredMeasurementCache = props.deferredMeasurementCache,
          height = props.height,
          overscanColumnCount = props.overscanColumnCount,
          overscanIndicesGetter = props.overscanIndicesGetter,
          overscanRowCount = props.overscanRowCount,
          rowCount = props.rowCount,
          width = props.width;
      var isScrolling = state.isScrolling,
          scrollDirectionHorizontal = state.scrollDirectionHorizontal,
          scrollDirectionVertical = state.scrollDirectionVertical,
          scrollLeft = state.scrollLeft,
          scrollTop = state.scrollTop;


      this._childrenToDisplay = [];

      // Render only enough columns and rows to cover the visible area of the grid.
      if (height > 0 && width > 0) {
        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
          containerSize: width,
          offset: scrollLeft
        });
        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
          containerSize: height,
          offset: scrollTop
        });

        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
          containerSize: width,
          offset: scrollLeft
        });
        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
          containerSize: height,
          offset: scrollTop
        });

        // Store for _invokeOnGridRenderedHelper()
        this._renderedColumnStartIndex = visibleColumnIndices.start;
        this._renderedColumnStopIndex = visibleColumnIndices.stop;
        this._renderedRowStartIndex = visibleRowIndices.start;
        this._renderedRowStopIndex = visibleRowIndices.stop;

        var overscanColumnIndices = overscanIndicesGetter({
          direction: 'horizontal',
          cellCount: columnCount,
          overscanCellsCount: overscanColumnCount,
          scrollDirection: scrollDirectionHorizontal,
          startIndex: this._renderedColumnStartIndex,
          stopIndex: this._renderedColumnStopIndex
        });

        var overscanRowIndices = overscanIndicesGetter({
          direction: 'vertical',
          cellCount: rowCount,
          overscanCellsCount: overscanRowCount,
          scrollDirection: scrollDirectionVertical,
          startIndex: this._renderedRowStartIndex,
          stopIndex: this._renderedRowStopIndex
        });

        // Store for _invokeOnGridRenderedHelper()
        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
        this._rowStopIndex = overscanRowIndices.overscanStopIndex;

        this._childrenToDisplay = cellRangeRenderer({
          cellCache: this._cellCache,
          cellRenderer: cellRenderer,
          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
          columnStartIndex: this._columnStartIndex,
          columnStopIndex: this._columnStopIndex,
          deferredMeasurementCache: deferredMeasurementCache,
          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
          isScrolling: isScrolling,
          parent: this,
          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
          rowStartIndex: this._rowStartIndex,
          rowStopIndex: this._rowStopIndex,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          styleCache: this._styleCache,
          verticalOffsetAdjustment: verticalOffsetAdjustment,
          visibleColumnIndices: visibleColumnIndices,
          visibleRowIndices: visibleRowIndices
        });
      }
    }

    /**
     * Sets an :isScrolling flag for a small window of time.
     * This flag is used to disable pointer events on the scrollable portion of the Grid.
     * This prevents jerky/stuttery mouse-wheel scrolling.
     */

  }, {
    key: '_debounceScrollEnded',
    value: function _debounceScrollEnded() {
      var scrollingResetTimeInterval = this.props.scrollingResetTimeInterval;


      if (this._disablePointerEventsTimeoutId) {
        clearTimeout(this._disablePointerEventsTimeoutId);
      }

      this._disablePointerEventsTimeoutId = setTimeout(this._debounceScrollEndedCallback, scrollingResetTimeInterval);
    }
  }, {
    key: '_debounceScrollEndedCallback',
    value: function _debounceScrollEndedCallback() {
      this._disablePointerEventsTimeoutId = null;

      var styleCache = this._styleCache;

      // Reset cell and style caches once scrolling stops.
      // This makes Grid simpler to use (since cells commonly change).
      // And it keeps the caches from growing too large.
      // Performance is most sensitive when a user is scrolling.
      this._cellCache = {};
      this._styleCache = {};

      // Copy over the visible cell styles so avoid unnecessary re-render.
      for (var rowIndex = this._rowStartIndex; rowIndex <= this._rowStopIndex; rowIndex++) {
        for (var columnIndex = this._columnStartIndex; columnIndex <= this._columnStopIndex; columnIndex++) {
          var key = rowIndex + '-' + columnIndex;
          this._styleCache[key] = styleCache[key];
        }
      }

      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: '_getEstimatedColumnSize',
    value: function _getEstimatedColumnSize(props) {
      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
    }
  }, {
    key: '_getEstimatedRowSize',
    value: function _getEstimatedRowSize(props) {
      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
    }

    /**
     * Check for batched CellMeasurer size invalidations.
     * This will occur the first time one or more previously unmeasured cells are rendered.
     */

  }, {
    key: '_handleInvalidatedGridSize',
    value: function _handleInvalidatedGridSize() {
      if (typeof this._deferredInvalidateColumnIndex === 'number') {
        var columnIndex = this._deferredInvalidateColumnIndex;
        var rowIndex = this._deferredInvalidateRowIndex;

        this._deferredInvalidateColumnIndex = null;
        this._deferredInvalidateRowIndex = null;

        this.recomputeGridSize({ columnIndex: columnIndex, rowIndex: rowIndex });
      }
    }
  }, {
    key: '_invokeOnGridRenderedHelper',
    value: function _invokeOnGridRenderedHelper() {
      var onSectionRendered = this.props.onSectionRendered;


      this._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: this._columnStartIndex,
          columnOverscanStopIndex: this._columnStopIndex,
          columnStartIndex: this._renderedColumnStartIndex,
          columnStopIndex: this._renderedColumnStopIndex,
          rowOverscanStartIndex: this._rowStartIndex,
          rowOverscanStopIndex: this._rowStopIndex,
          rowStartIndex: this._renderedRowStartIndex,
          rowStopIndex: this._renderedRowStopIndex
        }
      });
    }
  }, {
    key: '_invokeOnScrollMemoizer',
    value: function _invokeOnScrollMemoizer(_ref4) {
      var _this4 = this;

      var scrollLeft = _ref4.scrollLeft,
          scrollTop = _ref4.scrollTop,
          totalColumnsWidth = _ref4.totalColumnsWidth,
          totalRowsHeight = _ref4.totalRowsHeight;

      this._onScrollMemoizer({
        callback: function callback(_ref5) {
          var scrollLeft = _ref5.scrollLeft,
              scrollTop = _ref5.scrollTop;
          var _props7 = _this4.props,
              height = _props7.height,
              onScroll = _props7.onScroll,
              width = _props7.width;


          onScroll({
            clientHeight: height,
            clientWidth: width,
            scrollHeight: totalRowsHeight,
            scrollLeft: scrollLeft,
            scrollTop: scrollTop,
            scrollWidth: totalColumnsWidth
          });
        },
        indices: {
          scrollLeft: scrollLeft,
          scrollTop: scrollTop
        }
      });
    }
  }, {
    key: '_setScrollingContainerRef',
    value: function _setScrollingContainerRef(ref) {
      this._scrollingContainer = ref;
    }
  }, {
    key: '_setScrollPosition',
    value: function _setScrollPosition(_ref6) {
      var scrollLeft = _ref6.scrollLeft,
          scrollTop = _ref6.scrollTop;

      var newState = {
        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
      };

      if (scrollLeft >= 0) {
        newState.scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollLeft = scrollLeft;
      }

      if (scrollTop >= 0) {
        newState.scrollDirectionVertical = scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        newState.scrollTop = scrollTop;
      }

      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
        this.setState(newState);
      }
    }
  }, {
    key: '_wrapPropertyGetter',
    value: function _wrapPropertyGetter(value) {
      return typeof value === 'function' ? value : function () {
        return value;
      };
    }
  }, {
    key: '_wrapSizeGetter',
    value: function _wrapSizeGetter(size) {
      return this._wrapPropertyGetter(size);
    }
  }, {
    key: '_updateScrollLeftForScrollToColumn',
    value: function _updateScrollLeftForScrollToColumn() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var columnCount = props.columnCount,
          height = props.height,
          scrollToAlignment = props.scrollToAlignment,
          scrollToColumn = props.scrollToColumn,
          width = props.width;
      var scrollLeft = state.scrollLeft;


      if (scrollToColumn >= 0 && columnCount > 0) {
        var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn));
        var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;

        var calculatedScrollLeft = this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: width - scrollBarSize,
          currentOffset: scrollLeft,
          targetIndex: targetIndex
        });

        if (scrollLeft !== calculatedScrollLeft) {
          this._setScrollPosition({
            scrollLeft: calculatedScrollLeft
          });
        }
      }
    }
  }, {
    key: '_updateScrollTopForScrollToRow',
    value: function _updateScrollTopForScrollToRow() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state;
      var height = props.height,
          rowCount = props.rowCount,
          scrollToAlignment = props.scrollToAlignment,
          scrollToRow = props.scrollToRow,
          width = props.width;
      var scrollTop = state.scrollTop;


      if (scrollToRow >= 0 && rowCount > 0) {
        var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow));
        var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
        var scrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

        var calculatedScrollTop = this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
          align: scrollToAlignment,
          containerSize: height - scrollBarSize,
          currentOffset: scrollTop,
          targetIndex: targetIndex
        });

        if (scrollTop !== calculatedScrollTop) {
          this._setScrollPosition({
            scrollTop: calculatedScrollTop
          });
        }
      }
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(event) {
      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
      // See issue #404 for more information.
      if (event.target !== this._scrollingContainer) {
        return;
      }

      var _props8 = this.props,
          autoHeight = _props8.autoHeight,
          height = _props8.height,
          width = _props8.width;
      var _event$target = event.target,
          eventScrollLeft = _event$target.scrollLeft,
          eventScrollTop = _event$target.scrollTop;

      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
      // This causes a series of rapid renders that is slow for long lists.
      // We can avoid that by doing some simple bounds checking to ensure that scroll offsets never exceed their bounds.

      var scrollbarSize = this._scrollbarSize;
      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), eventScrollLeft);
      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), eventScrollTop);

      // On iOS, we can arrive at negative offsets by swiping past the start or end.
      // Avoid re-rendering in this case as it can cause problems; see #532 for more.
      if (eventScrollLeft !== scrollLeft || eventScrollTop !== scrollTop) {
        return;
      }

      // Prevent pointer events from interrupting a smooth scroll
      this._debounceScrollEnded();

      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
      // Don't force a re-render if this is the case.
      // The mouse may move faster then the animation frame does.
      // Use requestAnimationFrame to avoid over-updating.
      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
        // Track scrolling direction so we can more efficiently overscan rows to reduce empty space around the edges while scrolling.
        var scrollDirectionHorizontal = scrollLeft > this.state.scrollLeft ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;
        var scrollDirectionVertical = scrollTop > this.state.scrollTop ? _defaultOverscanIndicesGetter.SCROLL_DIRECTION_FORWARD : _defaultOverscanIndicesGetter.SCROLL_DIRECTION_BACKWARD;

        var newState = {
          isScrolling: true,
          scrollDirectionHorizontal: scrollDirectionHorizontal,
          scrollDirectionVertical: scrollDirectionVertical,
          scrollLeft: scrollLeft,
          scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.OBSERVED
        };

        if (!autoHeight) {
          newState.scrollTop = scrollTop;
        }

        this.setState(newState);
      }

      this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
    }
  }]);

  return Grid;
}(_react.PureComponent);

Grid.defaultProps = {
  'aria-label': 'grid',
  cellRangeRenderer: _defaultCellRangeRenderer2.default,
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize: _scrollbarSize2.default,
  noContentRenderer: function noContentRenderer() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  onSectionRendered: function onSectionRendered() {
    return null;
  },
  overscanColumnCount: 0,
  overscanIndicesGetter: _defaultOverscanIndicesGetter2.default,
  overscanRowCount: 10,
  role: 'grid',
  scrollingResetTimeInterval: DEFAULT_SCROLLING_RESET_TIME_INTERVAL,
  scrollToAlignment: 'auto',
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0
};
exports.default = Grid;
 false ? Grid.propTypes = {
  'aria-label': _react.PropTypes.string,

  /**
   * Set the width of the inner scrollable container to 'auto'.
   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
   */
  autoContainerWidth: _react.PropTypes.bool,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: _react.PropTypes.bool,

  /**
   * Responsible for rendering a cell given an row and column index.
   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
   */
  cellRenderer: _react.PropTypes.func.isRequired,

  /**
   * Responsible for rendering a group of cells given their index ranges.
   * Should implement the following interface: ({
   *   cellCache: Map,
   *   cellRenderer: Function,
   *   columnSizeAndPositionManager: CellSizeAndPositionManager,
   *   columnStartIndex: number,
   *   columnStopIndex: number,
   *   isScrolling: boolean,
   *   rowSizeAndPositionManager: CellSizeAndPositionManager,
   *   rowStartIndex: number,
   *   rowStopIndex: number,
   *   scrollLeft: number,
   *   scrollTop: number
   * }): Array<PropTypes.node>
   */
  cellRangeRenderer: _react.PropTypes.func.isRequired,

  /**
   * Optional custom CSS class name to attach to root Grid element.
   */
  className: _react.PropTypes.string,

  /**
   * Number of columns in grid.
   */
  columnCount: _react.PropTypes.number.isRequired,

  /**
   * Either a fixed column width (number) or a function that returns the width of a column given its index.
   * Should implement the following interface: (index: number): number
   */
  columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,

  /** Optional inline style applied to inner cell-container */
  containerStyle: _react.PropTypes.object,

  /**
   * If CellMeasurer is used to measure this Grid's children, this should be a pointer to its CellMeasurerCache.
   * A shared CellMeasurerCache reference enables Grid and CellMeasurer to share measurement data.
   */
  deferredMeasurementCache: _react.PropTypes.object,

  /**
   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
   * The estimated total width is adjusted as columns are rendered.
   */
  estimatedColumnSize: _react.PropTypes.number.isRequired,

  /**
   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: _react.PropTypes.number.isRequired,

  /**
   * Exposed for testing purposes only.
   */
  getScrollbarSize: _react.PropTypes.func.isRequired,

  /**
   * Height of Grid; this property determines the number of visible (vs virtualized) rows.
   */
  height: _react.PropTypes.number.isRequired,

  /**
   * Optional custom id to attach to root Grid element.
   */
  id: _react.PropTypes.string,

  /**
   * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
   */
  noContentRenderer: _react.PropTypes.func.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
   */
  onScroll: _react.PropTypes.func.isRequired,

  /**
   * Callback invoked with information about the section of the Grid that was just rendered.
   * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
   */
  onSectionRendered: _react.PropTypes.func.isRequired,

  /**
   * Number of columns to render before/after the visible section of the grid.
   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanColumnCount: _react.PropTypes.number.isRequired,

  /**
   * Calculates the number of cells to overscan before and after a specified range.
   * This function ensures that overscanning doesn't exceed the available cells.
   * Should implement the following interface: ({
   *   cellCount: number,
   *   overscanCellsCount: number,
   *   scrollDirection: number,
   *   startIndex: number,
   *   stopIndex: number
   * }): {overscanStartIndex: number, overscanStopIndex: number}
   */
  overscanIndicesGetter: _react.PropTypes.func.isRequired,

  /**
   * Number of rows to render above/below the visible section of the grid.
   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
   */
  overscanRowCount: _react.PropTypes.number.isRequired,

  /**
   * ARIA role for the grid element.
   */
  role: _react.PropTypes.string,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * Should implement the following interface: ({ index: number }): number
   */
  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,

  /**
   * Number of rows in grid.
   */
  rowCount: _react.PropTypes.number.isRequired,

  /** Wait this amount of time after the last scroll event before resetting Grid `pointer-events`. */
  scrollingResetTimeInterval: _react.PropTypes.number,

  /** Horizontal offset. */
  scrollLeft: _react.PropTypes.number,

  /**
   * Controls scroll-to-cell behavior of the Grid.
   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
   */
  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /**
   * Column index to ensure visible (by forcefully scrolling if necessary)
   */
  scrollToColumn: _react.PropTypes.number.isRequired,

  /** Vertical offset. */
  scrollTop: _react.PropTypes.number,

  /**
   * Row index to ensure visible (by forcefully scrolling if necessary)
   */
  scrollToRow: _react.PropTypes.number.isRequired,

  /** Optional inline style */
  style: _react.PropTypes.object,

  /** Tab index for focus */
  tabIndex: _react.PropTypes.number,

  /**
   * Width of Grid; this property determines the number of visible (vs virtualized) columns.
   */
  width: _react.PropTypes.number.isRequired
} : void 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/defaultCellRangeRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultCellRangeRenderer;

/**
 * Default implementation of cellRangeRenderer used by Grid.
 * This renderer supports cell-caching while the user is scrolling.
 */
function defaultCellRangeRenderer(_ref) {
  var cellCache = _ref.cellCache,
      cellRenderer = _ref.cellRenderer,
      columnSizeAndPositionManager = _ref.columnSizeAndPositionManager,
      columnStartIndex = _ref.columnStartIndex,
      columnStopIndex = _ref.columnStopIndex,
      deferredMeasurementCache = _ref.deferredMeasurementCache,
      horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment,
      isScrolling = _ref.isScrolling,
      parent = _ref.parent,
      rowSizeAndPositionManager = _ref.rowSizeAndPositionManager,
      rowStartIndex = _ref.rowStartIndex,
      rowStopIndex = _ref.rowStopIndex,
      scrollLeft = _ref.scrollLeft,
      scrollTop = _ref.scrollTop,
      styleCache = _ref.styleCache,
      verticalOffsetAdjustment = _ref.verticalOffsetAdjustment,
      visibleColumnIndices = _ref.visibleColumnIndices,
      visibleRowIndices = _ref.visibleRowIndices;

  var deferredMode = typeof deferredMeasurementCache !== 'undefined';

  var renderedCells = [];

  // Browsers have native size limits for elements (eg Chrome 33M pixels, IE 1.5M pixes).
  // User cannot scroll beyond these size limitations.
  // In order to work around this, ScalingCellSizeAndPositionManager compresses offsets.
  // We should never cache styles for compressed offsets though as this can lead to bugs.
  // See issue #576 for more.
  var areOffsetsAdjusted = columnSizeAndPositionManager.areOffsetsAdjusted() || rowSizeAndPositionManager.areOffsetsAdjusted();

  var canCacheStyle = !isScrolling || !areOffsetsAdjusted;

  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
      var isVisible = columnIndex >= visibleColumnIndices.start && columnIndex <= visibleColumnIndices.stop && rowIndex >= visibleRowIndices.start && rowIndex <= visibleRowIndices.stop;
      var key = rowIndex + '-' + columnIndex;
      var style = void 0;

      // Cache style objects so shallow-compare doesn't re-render unnecessarily.
      if (canCacheStyle && styleCache[key]) {
        style = styleCache[key];
      } else {
        // In deferred mode, cells will be initially rendered before we know their size.
        // Don't interfere with CellMeasurer's measurements by setting an invalid size.
        if (deferredMode && !deferredMeasurementCache.has(rowIndex, columnIndex)) {
          // Position not-yet-measured cells at top/left 0,0,
          // And give them width/height of 'auto' so they can grow larger than the parent Grid if necessary.
          // Positioning them further to the right/bottom influences their measured size.
          style = {
            height: 'auto',
            left: 0,
            position: 'absolute',
            top: 0,
            width: 'auto'
          };
        } else {
          style = {
            height: rowDatum.size,
            left: columnDatum.offset + horizontalOffsetAdjustment,
            position: 'absolute',
            top: rowDatum.offset + verticalOffsetAdjustment,
            width: columnDatum.size
          };

          styleCache[key] = style;
        }
      }

      var cellRendererParams = {
        columnIndex: columnIndex,
        isScrolling: isScrolling,
        isVisible: isVisible,
        key: key,
        parent: parent,
        rowIndex: rowIndex,
        style: style
      };

      var renderedCell = void 0;

      // Avoid re-creating cells while scrolling.
      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
      // If a scroll is in progress- cache and reuse cells.
      // This cache will be thrown away once scrolling completes.
      // However if we are scaling scroll positions and sizes, we should also avoid caching.
      // This is because the offset changes slightly as scroll position changes and caching leads to stale values.
      // For more info refer to issue #395
      if (isScrolling && !horizontalOffsetAdjustment && !verticalOffsetAdjustment) {
        if (!cellCache[key]) {
          cellCache[key] = cellRenderer(cellRendererParams);
        }

        renderedCell = cellCache[key];

        // If the user is no longer scrolling, don't cache cells.
        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
      } else {
        renderedCell = cellRenderer(cellRendererParams);
      }

      if (renderedCell == null || renderedCell === false) {
        continue;
      }

      if (false) {
        warnAboutMissingStyle(parent, renderedCell);
      }

      renderedCells.push(renderedCell);
    }
  }

  return renderedCells;
}

function warnAboutMissingStyle(parent, renderedCell) {
  if (false) {
    if (renderedCell) {
      // If the direct child is a CellMeasurer, then we should check its child
      // See issue #611
      if (renderedCell.type && renderedCell.type.__internalCellMeasurerFlag) {
        renderedCell = renderedCell.props.children;
      }

      if (renderedCell && renderedCell.props && renderedCell.props.style === undefined && parent.__warnedAboutMissingStyle !== true) {
        parent.__warnedAboutMissingStyle = true;

        console.warn('Rendered cell should include style property for positioning.');
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultCellRangeRenderer = exports.Grid = exports.default = undefined;

var _Grid2 = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/Grid.js");

var _Grid3 = _interopRequireDefault(_Grid2);

var _defaultCellRangeRenderer2 = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/defaultCellRangeRenderer.js");

var _defaultCellRangeRenderer3 = _interopRequireDefault(_defaultCellRangeRenderer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Grid3.default;
exports.Grid = _Grid3.default;
exports.defaultCellRangeRenderer = _defaultCellRangeRenderer3.default;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/utils/CellSizeAndPositionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Just-in-time calculates and caches size and position information for a collection of cells.
 */
var CellSizeAndPositionManager = function () {
  function CellSizeAndPositionManager(_ref) {
    var _ref$batchAllCells = _ref.batchAllCells,
        batchAllCells = _ref$batchAllCells === undefined ? false : _ref$batchAllCells,
        cellCount = _ref.cellCount,
        cellSizeGetter = _ref.cellSizeGetter,
        estimatedCellSize = _ref.estimatedCellSize;

    _classCallCheck(this, CellSizeAndPositionManager);

    this._batchAllCells = batchAllCells;
    this._cellSizeGetter = cellSizeGetter;
    this._cellCount = cellCount;
    this._estimatedCellSize = estimatedCellSize;

    // Cache of size and position data for cells, mapped by cell index.
    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
    this._cellSizeAndPositionData = {};

    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
    this._lastMeasuredIndex = -1;

    // Used in deferred mode to track which cells have been queued for measurement.
    this._lastBatchedIndex = -1;
  }

  _createClass(CellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return false;
    }
  }, {
    key: 'configure',
    value: function configure(_ref2) {
      var cellCount = _ref2.cellCount,
          estimatedCellSize = _ref2.estimatedCellSize;

      this._cellCount = cellCount;
      this._estimatedCellSize = estimatedCellSize;
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellCount;
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._estimatedCellSize;
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._lastMeasuredIndex;
    }
  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref3) {
      var containerSize = _ref3.containerSize,
          offset = _ref3.offset;

      return 0;
    }

    /**
     * This method returns the size and position for the cell at the specified index.
     * It just-in-time calculates (or used cached values) for cells leading up to the index.
     */

  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      if (index < 0 || index >= this._cellCount) {
        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
      }

      if (index > this._lastMeasuredIndex) {
        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
          var _size = this._cellSizeGetter({ index: i });

          // undefined or NaN probably means a logic error in the size getter.
          // null means we're using CellMeasurer and haven't yet measured a given index.
          if (_size === undefined || isNaN(_size)) {
            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
          } else if (_size === null) {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: 0
            };

            this._lastBatchedIndex = index;
          } else {
            this._cellSizeAndPositionData[i] = {
              offset: _offset,
              size: _size
            };

            _offset += _size;

            this._lastMeasuredIndex = index;
          }
        }
      }

      return this._cellSizeAndPositionData[index];
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
        offset: 0,
        size: 0
      };
    }

    /**
     * Total size of all cells being measured.
     * This value will be completedly estimated initially.
     * As cells as measured the estimate will be updated.
     */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();

      return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
    }

    /**
     * Determines a new offset that ensures a certain cell is visible, given the current offset.
     * If the cell is already visible then the current offset will be returned.
     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
     *
     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @param currentOffset Container's current (x or y) offset
     * @param totalSize Total size (width or height) of all cells
     * @return Offset to use to ensure the specified cell is visible
     */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === undefined ? 'auto' : _ref4$align,
          containerSize = _ref4.containerSize,
          currentOffset = _ref4.currentOffset,
          targetIndex = _ref4.targetIndex;

      if (containerSize <= 0) {
        return 0;
      }

      var datum = this.getSizeAndPositionOfCell(targetIndex);
      var maxOffset = datum.offset;
      var minOffset = maxOffset - containerSize + datum.size;

      var idealOffset = void 0;

      switch (align) {
        case 'start':
          idealOffset = maxOffset;
          break;
        case 'end':
          idealOffset = minOffset;
          break;
        case 'center':
          idealOffset = maxOffset - (containerSize - datum.size) / 2;
          break;
        default:
          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
          break;
      }

      var totalSize = this.getTotalSize();

      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    }
  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(params) {
      // Advanced use-cases (eg CellMeasurer) require batched measurements to determine accurate sizes.
      // eg we can't know a row's height without measuring the height of all columns within that row.
      if (this._batchAllCells) {
        return {
          start: 0,
          stop: this._cellCount - 1
        };
      }

      var containerSize = params.containerSize,
          offset = params.offset;


      var totalSize = this.getTotalSize();

      if (totalSize === 0) {
        return {};
      }

      var maxOffset = offset + containerSize;
      var start = this._findNearestCell(offset);

      var datum = this.getSizeAndPositionOfCell(start);
      offset = datum.offset + datum.size;

      var stop = start;

      while (offset < maxOffset && stop < this._cellCount - 1) {
        stop++;

        offset += this.getSizeAndPositionOfCell(stop).size;
      }

      return {
        start: start,
        stop: stop
      };
    }

    /**
     * Clear all cached values for cells after the specified index.
     * This method should be called for any cell that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
     */

  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
    }
  }, {
    key: '_binarySearch',
    value: function _binarySearch(_ref5) {
      var high = _ref5.high,
          low = _ref5.low,
          offset = _ref5.offset;

      var middle = void 0;
      var currentOffset = void 0;

      while (low <= high) {
        middle = low + Math.floor((high - low) / 2);
        currentOffset = this.getSizeAndPositionOfCell(middle).offset;

        if (currentOffset === offset) {
          return middle;
        } else if (currentOffset < offset) {
          low = middle + 1;
        } else if (currentOffset > offset) {
          high = middle - 1;
        }
      }

      if (low > 0) {
        return low - 1;
      }
    }
  }, {
    key: '_exponentialSearch',
    value: function _exponentialSearch(_ref6) {
      var index = _ref6.index,
          offset = _ref6.offset;

      var interval = 1;

      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
        index += interval;
        interval *= 2;
      }

      return this._binarySearch({
        high: Math.min(index, this._cellCount - 1),
        low: Math.floor(index / 2),
        offset: offset
      });
    }

    /**
     * Searches for the cell (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest cell index will be returned.
     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
     */

  }, {
    key: '_findNearestCell',
    value: function _findNearestCell(offset) {
      if (isNaN(offset)) {
        throw Error('Invalid offset ' + offset + ' specified');
      }

      // Our search algorithms find the nearest match at or below the specified offset.
      // So make sure the offset is at least 0 or no match will be found.
      offset = Math.max(0, offset);

      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
        // If we've already measured cells within this range just use a binary search as it's faster.
        return this._binarySearch({
          high: lastMeasuredIndex,
          low: 0,
          offset: offset
        });
      } else {
        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
        // The overall complexity for this approach is O(log n).
        return this._exponentialSearch({
          index: lastMeasuredIndex,
          offset: offset
        });
      }
    }
  }]);

  return CellSizeAndPositionManager;
}();

exports.default = CellSizeAndPositionManager;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/utils/ScalingCellSizeAndPositionManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_MAX_SCROLL_SIZE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CellSizeAndPositionManager = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/utils/CellSizeAndPositionManager.js");

var _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels where as Edge tops out at ~1.5M pixels).
 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
 */
var DEFAULT_MAX_SCROLL_SIZE = exports.DEFAULT_MAX_SCROLL_SIZE = 1500000;

/**
 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
 */

var ScalingCellSizeAndPositionManager = function () {
  function ScalingCellSizeAndPositionManager(_ref) {
    var _ref$maxScrollSize = _ref.maxScrollSize,
        maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize,
        params = _objectWithoutProperties(_ref, ['maxScrollSize']);

    _classCallCheck(this, ScalingCellSizeAndPositionManager);

    // Favor composition over inheritance to simplify IE10 support
    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2.default(params);
    this._maxScrollSize = maxScrollSize;
  }

  _createClass(ScalingCellSizeAndPositionManager, [{
    key: 'areOffsetsAdjusted',
    value: function areOffsetsAdjusted() {
      return this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize;
    }
  }, {
    key: 'configure',
    value: function configure(params) {
      this._cellSizeAndPositionManager.configure(params);
    }
  }, {
    key: 'getCellCount',
    value: function getCellCount() {
      return this._cellSizeAndPositionManager.getCellCount();
    }
  }, {
    key: 'getEstimatedCellSize',
    value: function getEstimatedCellSize() {
      return this._cellSizeAndPositionManager.getEstimatedCellSize();
    }
  }, {
    key: 'getLastMeasuredIndex',
    value: function getLastMeasuredIndex() {
      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
    }

    /**
     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
     * The offset passed to this function is scalled (safe) as well.
     */

  }, {
    key: 'getOffsetAdjustment',
    value: function getOffsetAdjustment(_ref2) {
      var containerSize = _ref2.containerSize,
          offset = _ref2.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();
      var offsetPercentage = this._getOffsetPercentage({
        containerSize: containerSize,
        offset: offset,
        totalSize: safeTotalSize
      });

      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
    }
  }, {
    key: 'getSizeAndPositionOfCell',
    value: function getSizeAndPositionOfCell(index) {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
    }
  }, {
    key: 'getSizeAndPositionOfLastMeasuredCell',
    value: function getSizeAndPositionOfLastMeasuredCell() {
      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
    }

    /** See CellSizeAndPositionManager#getTotalSize */

  }, {
    key: 'getTotalSize',
    value: function getTotalSize() {
      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
    }

    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

  }, {
    key: 'getUpdatedOffsetForIndex',
    value: function getUpdatedOffsetForIndex(_ref3) {
      var _ref3$align = _ref3.align,
          align = _ref3$align === undefined ? 'auto' : _ref3$align,
          containerSize = _ref3.containerSize,
          currentOffset = _ref3.currentOffset,
          targetIndex = _ref3.targetIndex,
          totalSize = _ref3.totalSize;

      currentOffset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: currentOffset
      });

      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
        align: align,
        containerSize: containerSize,
        currentOffset: currentOffset,
        targetIndex: targetIndex,
        totalSize: totalSize
      });

      return this._offsetToSafeOffset({
        containerSize: containerSize,
        offset: offset
      });
    }

    /** See CellSizeAndPositionManager#getVisibleCellRange */

  }, {
    key: 'getVisibleCellRange',
    value: function getVisibleCellRange(_ref4) {
      var containerSize = _ref4.containerSize,
          offset = _ref4.offset;

      offset = this._safeOffsetToOffset({
        containerSize: containerSize,
        offset: offset
      });

      return this._cellSizeAndPositionManager.getVisibleCellRange({
        containerSize: containerSize,
        offset: offset
      });
    }
  }, {
    key: 'resetCell',
    value: function resetCell(index) {
      this._cellSizeAndPositionManager.resetCell(index);
    }
  }, {
    key: '_getOffsetPercentage',
    value: function _getOffsetPercentage(_ref5) {
      var containerSize = _ref5.containerSize,
          offset = _ref5.offset,
          totalSize = _ref5.totalSize;

      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
    }
  }, {
    key: '_offsetToSafeOffset',
    value: function _offsetToSafeOffset(_ref6) {
      var containerSize = _ref6.containerSize,
          offset = _ref6.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: totalSize
        });

        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
      }
    }
  }, {
    key: '_safeOffsetToOffset',
    value: function _safeOffsetToOffset(_ref7) {
      var containerSize = _ref7.containerSize,
          offset = _ref7.offset;

      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
      var safeTotalSize = this.getTotalSize();

      if (totalSize === safeTotalSize) {
        return offset;
      } else {
        var offsetPercentage = this._getOffsetPercentage({
          containerSize: containerSize,
          offset: offset,
          totalSize: safeTotalSize
        });

        return Math.round(offsetPercentage * (totalSize - containerSize));
      }
    }
  }]);

  return ScalingCellSizeAndPositionManager;
}();

exports.default = ScalingCellSizeAndPositionManager;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/utils/calculateSizeAndPositionDataAndUpdateScrollOffset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;
/**
 * Helper method that determines when to recalculate row or column metadata.
 *
 * @param cellCount Number of rows or columns in the current axis
 * @param cellsSize Width or height of cells for the current axis
 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
 * @param nextCellsCount Newly updated number of rows or columns in the current axis
 * @param nextCellsSize Newly updated width or height of cells for the current axis
 * @param nextScrollToIndex Newly updated scroll-to-index
 * @param scrollToIndex Scroll-to-index
 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
 */
function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
  var cellCount = _ref.cellCount,
      cellSize = _ref.cellSize,
      computeMetadataCallback = _ref.computeMetadataCallback,
      computeMetadataCallbackProps = _ref.computeMetadataCallbackProps,
      nextCellsCount = _ref.nextCellsCount,
      nextCellSize = _ref.nextCellSize,
      nextScrollToIndex = _ref.nextScrollToIndex,
      scrollToIndex = _ref.scrollToIndex,
      updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
  // In that event users should use the manual recompute methods to inform of changes.
  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
    computeMetadataCallback(computeMetadataCallbackProps);

    // Updated cell metadata may have hidden the previous scrolled-to item.
    // In this case we should also update the scrollTop to ensure it stays visible.
    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
      updateScrollOffsetForScrollToIndex();
    }
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/utils/defaultOverscanIndicesGetter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultOverscanIndicesGetter;
var SCROLL_DIRECTION_BACKWARD = exports.SCROLL_DIRECTION_BACKWARD = -1;
var SCROLL_DIRECTION_FORWARD = exports.SCROLL_DIRECTION_FORWARD = 1;

var SCROLL_DIRECTION_HORIZONTAL = exports.SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
var SCROLL_DIRECTION_VERTICAL = exports.SCROLL_DIRECTION_VERTICAL = 'vertical';
/**
 * Calculates the number of cells to overscan before and after a specified range.
 * This function ensures that overscanning doesn't exceed the available cells.
 *
 * @param direction One of SCROLL_DIRECTION_HORIZONTAL or SCROLL_DIRECTION_VERTICAL
 * @param cellCount Number of rows or columns in the current axis
 * @param scrollDirection One of SCROLL_DIRECTION_BACKWARD or SCROLL_DIRECTION_FORWARD
 * @param overscanCellsCount Maximum number of cells to over-render in either direction
 * @param startIndex Begin of range of visible cells
 * @param stopIndex End of range of visible cells
 */
function defaultOverscanIndicesGetter(_ref) {
  var direction = _ref.direction,
      cellCount = _ref.cellCount,
      overscanCellsCount = _ref.overscanCellsCount,
      scrollDirection = _ref.scrollDirection,
      startIndex = _ref.startIndex,
      stopIndex = _ref.stopIndex;

  var overscanStartIndex = void 0;
  var overscanStopIndex = void 0;

  switch (scrollDirection) {
    case SCROLL_DIRECTION_FORWARD:
      overscanStartIndex = startIndex;
      overscanStopIndex = stopIndex + overscanCellsCount;
      break;
    case SCROLL_DIRECTION_BACKWARD:
      overscanStartIndex = startIndex - overscanCellsCount;
      overscanStopIndex = stopIndex;
      break;
  }

  return {
    overscanStartIndex: Math.max(0, overscanStartIndex),
    overscanStopIndex: Math.min(cellCount - 1, overscanStopIndex)
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/Grid/utils/updateScrollIndexHelper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateScrollIndexHelper;
/**
 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
 *
 * @param cellsSize Width or height of cells for the current axis
 * @param cellSizeAndPositionManager Manages size and position metadata of cells
 * @param previousCellsCount Previous number of rows or columns
 * @param previousCellsSize Previous width or height of cells
 * @param previousScrollToIndex Previous scroll-to-index
 * @param previousSize Previous width or height of the virtualized container
 * @param scrollOffset Current scrollLeft or scrollTop
 * @param scrollToIndex Scroll-to-index
 * @param size Width or height of the virtualized container
 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
 */
function updateScrollIndexHelper(_ref) {
  var cellSize = _ref.cellSize,
      cellSizeAndPositionManager = _ref.cellSizeAndPositionManager,
      previousCellsCount = _ref.previousCellsCount,
      previousCellSize = _ref.previousCellSize,
      previousScrollToAlignment = _ref.previousScrollToAlignment,
      previousScrollToIndex = _ref.previousScrollToIndex,
      previousSize = _ref.previousSize,
      scrollOffset = _ref.scrollOffset,
      scrollToAlignment = _ref.scrollToAlignment,
      scrollToIndex = _ref.scrollToIndex,
      size = _ref.size,
      updateScrollIndexCallback = _ref.updateScrollIndexCallback;

  var cellCount = cellSizeAndPositionManager.getCellCount();
  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
  var sizeHasChanged = size !== previousSize || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

  // If we have a new scroll target OR if height/row-height has changed,
  // We should ensure that the scroll target is visible.
  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
    updateScrollIndexCallback(scrollToIndex);

    // If we don't have a selected item but list size or number of children have decreased,
    // Make sure we aren't scrolled too far past the current content.
  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
    // We need to ensure that the current scroll offset is still within the collection's range.
    // To do this, we don't need to measure everything; CellMeasurer would perform poorly.
    // Just check to make sure we're still okay.
    // Only adjust the scroll position if we've scrolled below the last set of rows.
    if (scrollOffset > cellSizeAndPositionManager.getTotalSize() - size) {
      updateScrollIndexCallback(cellCount - 1);
    }
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/List/List.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Grid = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/react-virtualized/node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
 * if only a few of those elements are visible. The primary purpose of this component is to improve
 * performance by only rendering the DOM nodes that a user is able to see based on their current
 * scroll position.
 *
 * This component renders a virtualized list of elements with either fixed or dynamic heights.
 */
var List = function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List(props, context) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props, context));

    _this._cellRenderer = _this._cellRenderer.bind(_this);
    _this._onScroll = _this._onScroll.bind(_this);
    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
    _this._setRef = _this._setRef.bind(_this);
    return _this;
  }

  _createClass(List, [{
    key: 'forceUpdateGrid',
    value: function forceUpdateGrid() {
      this.Grid.forceUpdate();
    }

    /** See Grid#measureAllCells */

  }, {
    key: 'measureAllRows',
    value: function measureAllRows() {
      this.Grid.measureAllCells();
    }

    /** See Grid#recomputeGridSize */

  }, {
    key: 'recomputeRowHeights',
    value: function recomputeRowHeights() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.recomputeGridSize({
        rowIndex: index
      });
    }

    /** See Grid#scrollToCell */

  }, {
    key: 'scrollToRow',
    value: function scrollToRow() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.Grid.scrollToCell({
        columnIndex: 0,
        rowIndex: index
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          noRowsRenderer = _props.noRowsRenderer,
          scrollToIndex = _props.scrollToIndex,
          width = _props.width;


      var classNames = (0, _classnames2.default)('ReactVirtualized__List', className);

      return _react2.default.createElement(_Grid2.default, _extends({}, this.props, {
        autoContainerWidth: true,
        cellRenderer: this._cellRenderer,
        className: classNames,
        columnWidth: width,
        columnCount: 1,
        noContentRenderer: noRowsRenderer,
        onScroll: this._onScroll,
        onSectionRendered: this._onSectionRendered,
        ref: this._setRef,
        scrollToRow: scrollToIndex
      }));
    }
  }, {
    key: '_cellRenderer',
    value: function _cellRenderer(_ref) {
      var rowIndex = _ref.rowIndex,
          style = _ref.style,
          rest = _objectWithoutProperties(_ref, ['rowIndex', 'style']);

      var rowRenderer = this.props.rowRenderer;

      // TRICKY The style object is sometimes cached by Grid.
      // This prevents new style objects from bypassing shallowCompare().
      // However as of React 16, style props are auto-frozen (at least in dev mode)
      // Check to make sure we can still modify the style before proceeding.
      // https://github.com/facebook/react/commit/977357765b44af8ff0cfea327866861073095c12#commitcomment-20648713

      var _Object$getOwnPropert = Object.getOwnPropertyDescriptor(style, 'width'),
          writable = _Object$getOwnPropert.writable;

      if (writable) {
        // By default, List cells should be 100% width.
        // This prevents them from flowing under a scrollbar (if present).
        style.width = '100%';
      }

      return rowRenderer(_extends({
        index: rowIndex,
        style: style
      }, rest));
    }
  }, {
    key: '_setRef',
    value: function _setRef(ref) {
      this.Grid = ref;
    }
  }, {
    key: '_onScroll',
    value: function _onScroll(_ref2) {
      var clientHeight = _ref2.clientHeight,
          scrollHeight = _ref2.scrollHeight,
          scrollTop = _ref2.scrollTop;
      var onScroll = this.props.onScroll;


      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
    }
  }, {
    key: '_onSectionRendered',
    value: function _onSectionRendered(_ref3) {
      var rowOverscanStartIndex = _ref3.rowOverscanStartIndex,
          rowOverscanStopIndex = _ref3.rowOverscanStopIndex,
          rowStartIndex = _ref3.rowStartIndex,
          rowStopIndex = _ref3.rowStopIndex;
      var onRowsRendered = this.props.onRowsRendered;


      onRowsRendered({
        overscanStartIndex: rowOverscanStartIndex,
        overscanStopIndex: rowOverscanStopIndex,
        startIndex: rowStartIndex,
        stopIndex: rowStopIndex
      });
    }
  }]);

  return List;
}(_react.PureComponent);

List.defaultProps = {
  estimatedRowSize: 30,
  noRowsRenderer: function noRowsRenderer() {
    return null;
  },
  onRowsRendered: function onRowsRendered() {
    return null;
  },
  onScroll: function onScroll() {
    return null;
  },
  overscanRowCount: 10,
  scrollToAlignment: 'auto',
  scrollToIndex: -1,
  style: {}
};
exports.default = List;
 false ? List.propTypes = {
  'aria-label': _react.PropTypes.string,

  /**
   * Removes fixed height from the scrollingContainer so that the total height
   * of rows can stretch the window. Intended for use with WindowScroller
   */
  autoHeight: _react.PropTypes.bool,

  /** Optional CSS class name */
  className: _react.PropTypes.string,

  /**
   * Used to estimate the total height of a List before all of its rows have actually been measured.
   * The estimated total height is adjusted as rows are rendered.
   */
  estimatedRowSize: _react.PropTypes.number.isRequired,

  /** Height constraint for list (determines how many actual rows are rendered) */
  height: _react.PropTypes.number.isRequired,

  /** Optional renderer to be used in place of rows when rowCount is 0 */
  noRowsRenderer: _react.PropTypes.func.isRequired,

  /**
   * Callback invoked with information about the slice of rows that were just rendered.
   * ({ startIndex, stopIndex }): void
   */
  onRowsRendered: _react.PropTypes.func.isRequired,

  /**
   * Number of rows to render above/below the visible bounds of the list.
   * These rows can help for smoother scrolling on touch devices.
   */
  overscanRowCount: _react.PropTypes.number.isRequired,

  /**
   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
   * This callback can be used to sync scrolling between lists, tables, or grids.
   * ({ clientHeight, scrollHeight, scrollTop }): void
   */
  onScroll: _react.PropTypes.func.isRequired,

  /**
   * Either a fixed row height (number) or a function that returns the height of a row given its index.
   * ({ index: number }): number
   */
  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,

  /** Responsible for rendering a row given an index; ({ index: number }): node */
  rowRenderer: _react.PropTypes.func.isRequired,

  /** Number of rows in list. */
  rowCount: _react.PropTypes.number.isRequired,

  /** See Grid#scrollToAlignment */
  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

  /** Row index to ensure visible (by forcefully scrolling if necessary) */
  scrollToIndex: _react.PropTypes.number.isRequired,

  /** Vertical offset. */
  scrollTop: _react.PropTypes.number,

  /** Optional inline style */
  style: _react.PropTypes.object,

  /** Tab index for focus */
  tabIndex: _react.PropTypes.number,

  /** Width of list */
  width: _react.PropTypes.number.isRequired
} : void 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/List/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.default = undefined;

var _List2 = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/List/List.js");

var _List3 = _interopRequireDefault(_List2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _List3.default;
exports.List = _List3.default;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/WindowScroller/WindowScroller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _onScroll = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/WindowScroller/utils/onScroll.js");

var _dimensions = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/WindowScroller/utils/dimensions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WindowScroller = function (_PureComponent) {
  _inherits(WindowScroller, _PureComponent);

  function WindowScroller(props) {
    _classCallCheck(this, WindowScroller);

    // Handle server-side rendering case
    var _this = _possibleConstructorReturn(this, (WindowScroller.__proto__ || Object.getPrototypeOf(WindowScroller)).call(this, props));

    var height = typeof window !== 'undefined' ? (0, _dimensions.getHeight)(props.scrollElement || window) : 0;

    _this.state = {
      height: height,
      isScrolling: false,
      scrollTop: 0
    };

    _this._onResize = _this._onResize.bind(_this);
    _this.__handleWindowScrollEvent = _this.__handleWindowScrollEvent.bind(_this);
    _this.__resetIsScrolling = _this.__resetIsScrolling.bind(_this);
    return _this;
  }

  // Can’t use defaultProps for scrollElement without breaking server-side rendering


  _createClass(WindowScroller, [{
    key: 'updatePosition',
    value: function updatePosition(scrollElement) {
      var onResize = this.props.onResize;
      var height = this.state.height;


      scrollElement = scrollElement || this.props.scrollElement || window;
      this._positionFromTop = (0, _dimensions.getPositionFromTop)(_reactDom2.default.findDOMNode(this), scrollElement);

      var newHeight = (0, _dimensions.getHeight)(scrollElement);
      if (height !== newHeight) {
        this.setState({
          height: newHeight
        });
        onResize({
          height: newHeight
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var scrollElement = this.props.scrollElement || window;

      this.updatePosition(scrollElement);

      (0, _onScroll.registerScrollListener)(this, scrollElement);

      window.addEventListener('resize', this._onResize, false);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var scrollElement = this.props.scrollElement || window;
      var nextScrollElement = nextProps.scrollElement || window;

      if (scrollElement !== nextScrollElement) {
        this.updatePosition(nextScrollElement);

        (0, _onScroll.unregisterScrollListener)(this, scrollElement);
        (0, _onScroll.registerScrollListener)(this, nextScrollElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      (0, _onScroll.unregisterScrollListener)(this, this.props.scrollElement || window);

      window.removeEventListener('resize', this._onResize, false);
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          isScrolling = _state.isScrolling,
          scrollTop = _state.scrollTop,
          height = _state.height;


      return children({
        height: height,
        isScrolling: isScrolling,
        scrollTop: scrollTop
      });
    }
  }, {
    key: '_onResize',
    value: function _onResize(event) {
      this.updatePosition();
    }

    // Referenced by utils/onScroll

  }, {
    key: '__handleWindowScrollEvent',
    value: function __handleWindowScrollEvent(event) {
      var onScroll = this.props.onScroll;


      var scrollElement = this.props.scrollElement || window;
      var scrollTop = Math.max(0, (0, _dimensions.getScrollTop)(scrollElement) - this._positionFromTop);

      this.setState({
        isScrolling: true,
        scrollTop: scrollTop
      });

      onScroll({
        scrollTop: scrollTop
      });
    }

    // Referenced by utils/onScroll

  }, {
    key: '__resetIsScrolling',
    value: function __resetIsScrolling() {
      this.setState({
        isScrolling: false
      });
    }
  }, {
    key: 'scrollElement',
    get: function get() {
      return this.props.scrollElement || window;
    }
  }]);

  return WindowScroller;
}(_react.PureComponent);

WindowScroller.defaultProps = {
  onResize: function onResize() {},
  onScroll: function onScroll() {}
};
exports.default = WindowScroller;
 false ? WindowScroller.propTypes = {
  /**
   * Function responsible for rendering children.
   * This function should implement the following signature:
   * ({ height, isScrolling, scrollTop }) => PropTypes.element
   */
  children: _react.PropTypes.func.isRequired,

  /** Callback to be invoked on-resize: ({ height }) */
  onResize: _react.PropTypes.func.isRequired,

  /** Callback to be invoked on-scroll: ({ scrollTop }) */
  onScroll: _react.PropTypes.func.isRequired,

  /** Element to attach scroll event listeners. Defaults to window. */
  scrollElement: _react.PropTypes.any
} : void 0;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/WindowScroller/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IS_SCROLLING_TIMEOUT = exports.WindowScroller = exports.default = undefined;

var _onScroll = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/WindowScroller/utils/onScroll.js");

Object.defineProperty(exports, 'IS_SCROLLING_TIMEOUT', {
  enumerable: true,
  get: function get() {
    return _onScroll.IS_SCROLLING_TIMEOUT;
  }
});

var _WindowScroller2 = __webpack_require__("./node_modules/react-virtualized/dist/commonjs/WindowScroller/WindowScroller.js");

var _WindowScroller3 = _interopRequireDefault(_WindowScroller2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _WindowScroller3.default;
exports.WindowScroller = _WindowScroller3.default;

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/WindowScroller/utils/dimensions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeight = getHeight;
exports.getPositionFromTop = getPositionFromTop;
exports.getScrollTop = getScrollTop;
/**
 * Gets the height of the element, accounting for API differences between
 * `window` and other DOM elements.
 */
function getHeight(element) {
  if (element === window) {
    return typeof window.innerHeight === 'number' ? window.innerHeight : 0;
  }

  return element.getBoundingClientRect().height;
}

/**
 * Gets the vertical position of an element within its scroll container.
 * Elements that have been “scrolled past” return negative values.
 * Handles edge-case where a user is navigating back (history) from an already-scrolled page.
 * In this case the body’s top position will be a negative number and this element’s top will be increased (by that amount).
 */
function getPositionFromTop(element, container) {
  var offset = container === window ? 0 : getScrollTop(container);
  var containerElement = container === window ? document.documentElement : container;
  return element.getBoundingClientRect().top + offset - containerElement.getBoundingClientRect().top;
}

/**
 * Gets the vertical scroll amount of the element, accounting for IE compatibility
 * and API differences between `window` and other DOM elements.
 */
function getScrollTop(element) {
  if (element === window) {
    return 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;
  } else {
    return element.scrollTop;
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/WindowScroller/utils/onScroll.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerScrollListener = registerScrollListener;
exports.unregisterScrollListener = unregisterScrollListener;
var mountedInstances = [];
var originalBodyPointerEvents = null;
var disablePointerEventsTimeoutId = null;

/**
 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
 * This improves performance and makes scrolling smoother.
 */
var IS_SCROLLING_TIMEOUT = exports.IS_SCROLLING_TIMEOUT = 150;

function enablePointerEventsIfDisabled() {
  if (disablePointerEventsTimeoutId) {
    disablePointerEventsTimeoutId = null;

    document.body.style.pointerEvents = originalBodyPointerEvents;

    originalBodyPointerEvents = null;
  }
}

function enablePointerEventsAfterDelayCallback() {
  enablePointerEventsIfDisabled();
  mountedInstances.forEach(function (instance) {
    return instance.__resetIsScrolling();
  });
}

function enablePointerEventsAfterDelay() {
  if (disablePointerEventsTimeoutId) {
    clearTimeout(disablePointerEventsTimeoutId);
  }

  disablePointerEventsTimeoutId = setTimeout(enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
}

function onScrollWindow(event) {
  if (event.currentTarget === window && originalBodyPointerEvents == null) {
    originalBodyPointerEvents = document.body.style.pointerEvents;

    document.body.style.pointerEvents = 'none';
  }
  enablePointerEventsAfterDelay();
  mountedInstances.forEach(function (instance) {
    if (instance.scrollElement === event.currentTarget) {
      instance.__handleWindowScrollEvent(event);
    }
  });
}

function registerScrollListener(component, element) {
  if (!mountedInstances.some(function (instance) {
    return instance.scrollElement === element;
  })) {
    element.addEventListener('scroll', onScrollWindow);
  }
  mountedInstances.push(component);
}

function unregisterScrollListener(component, element) {
  mountedInstances = mountedInstances.filter(function (instance) {
    return instance !== component;
  });
  if (!mountedInstances.length) {
    element.removeEventListener('scroll', onScrollWindow);
    if (disablePointerEventsTimeoutId) {
      clearTimeout(disablePointerEventsTimeoutId);
      enablePointerEventsIfDisabled();
    }
  }
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/utils/createCallbackMemoizer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCallbackMemoizer;
/**
 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
 */
function createCallbackMemoizer() {
  var requireAllKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  var cachedIndices = {};

  return function (_ref) {
    var callback = _ref.callback,
        indices = _ref.indices;

    var keys = Object.keys(indices);
    var allInitialized = !requireAllKeys || keys.every(function (key) {
      var value = indices[key];
      return Array.isArray(value) ? value.length > 0 : value >= 0;
    });
    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
      var cachedValue = cachedIndices[key];
      var value = indices[key];

      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
    });

    cachedIndices = indices;

    if (allInitialized && indexChanged) {
      callback(indices);
    }
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/dist/commonjs/vendor/detectElementResize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createDetectElementResize;
/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 **/

function createDetectElementResize() {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = this;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        animationstring = 'animation',
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            animationstring = pfx + 'Animation';
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles() {
    if (!document.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = document.head || document.getElementsByTagName('head')[0],
          style = document.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) element.attachEvent('onresize', fn);else {
      if (!element.__resizeTriggers__) {
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles();
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
        element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) resetTriggers(element);
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) element.detachEvent('onresize', fn);else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

/***/ }),

/***/ "./node_modules/react-virtualized/node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })

});