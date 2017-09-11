webpackJsonp(["async-load-post-editor-editor-sharing-accordion"],{

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

/***/ "./client/post-editor/editor-fieldset/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

module.exports = React.createClass({
	displayName: 'EditorFieldset',

	propTypes: {
		legend: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]).isRequired
	},

	renderChildren: function renderChildren() {
		return React.Children.map(this.props.children, function (child) {
			return React.createElement(
				'div',
				{ className: 'editor-fieldset__option' },
				child
			);
		});
	},

	render: function render() {
		return React.createElement(
			'fieldset',
			{ className: classNames('editor-fieldset', this.props.className) },
			React.createElement(
				'legend',
				{ className: 'editor-fieldset__legend' },
				this.props.legend
			),
			this.renderChildren()
		);
	}
});

/***/ }),

/***/ "./client/post-editor/editor-sharing/accordion.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reduce2 = __webpack_require__("./node_modules/lodash/reduce.js");

var _reduce3 = _interopRequireDefault(_reduce2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _accordion = __webpack_require__("./client/components/accordion/index.jsx");

var _accordion2 = _interopRequireDefault(_accordion);

var _formTextInput = __webpack_require__("./client/components/forms/form-text-input/index.jsx");

var _formTextInput2 = _interopRequireDefault(_formTextInput);

var _postMetadata = __webpack_require__("./client/lib/post-metadata/index.js");

var _postMetadata2 = _interopRequireDefault(_postMetadata);

var _ = __webpack_require__("./client/post-editor/editor-sharing/index.jsx");

var _2 = _interopRequireDefault(_);

var _section = __webpack_require__("./client/components/accordion/section.jsx");

var _section2 = _interopRequireDefault(_section);

var _utils = __webpack_require__("./client/lib/posts/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _queryPublicizeConnections = __webpack_require__("./client/components/data/query-publicize-connections/index.jsx");

var _queryPublicizeConnections2 = _interopRequireDefault(_queryPublicizeConnections);

var _selectors = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/ui/editor/selectors.js");

var _selectors4 = __webpack_require__("./client/state/posts/selectors.js");

var _selectors5 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors6 = __webpack_require__("./client/state/sharing/publicize/selectors.js");

var _hasBrokenSiteUserConnection = __webpack_require__("./client/state/selectors/has-broken-site-user-connection.js");

var _hasBrokenSiteUserConnection2 = _interopRequireDefault(_hasBrokenSiteUserConnection);

var _isPublicizeEnabled = __webpack_require__("./client/state/selectors/is-publicize-enabled.js");

var _isPublicizeEnabled2 = _interopRequireDefault(_isPublicizeEnabled);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var EditorSharingAccordion = _react2.default.createClass({
	displayName: 'EditorSharingAccordion',

	propTypes: {
		site: _react.PropTypes.object,
		post: _react.PropTypes.object,
		isNew: _react.PropTypes.bool,
		connections: _react.PropTypes.array,
		hasBrokenConnection: _react.PropTypes.bool,
		isPublicizeEnabled: _react.PropTypes.bool,
		isSharingActive: _react.PropTypes.bool,
		isLikesActive: _react.PropTypes.bool
	},

	getSubtitle: function getSubtitle() {
		var _props = this.props,
		    isPublicizeEnabled = _props.isPublicizeEnabled,
		    post = _props.post,
		    connections = _props.connections;

		if (!isPublicizeEnabled || !post || !connections) {
			return;
		}

		var skipped = _postMetadata2.default.publicizeSkipped(post);

		return (0, _reduce3.default)(connections, function (memo, connection) {
			var id = connection.keyring_connection_ID,
			    label = connection.label;

			if (!(0, _includes3.default)(skipped, id) && !(0, _includes3.default)(memo, label)) {
				memo.push(label);
			}

			return memo;
		}, []).join(', ');
	},

	renderShortUrl: function renderShortUrl() {
		var classes = (0, _classnames2.default)('editor-sharing__shortlink', {
			'is-standalone': this.hideSharing()
		});

		if (!_utils2.default.isPublished(this.props.post)) {
			return null;
		}

		return _react2.default.createElement(
			'div',
			{ className: classes },
			_react2.default.createElement(
				'label',
				{
					className: 'editor-sharing__shortlink-label',
					htmlFor: 'shortlink-field'
				},
				this.translate('Shortlink')
			),
			_react2.default.createElement(_formTextInput2.default, {
				className: 'editor-sharing__shortlink-field',
				id: 'shortlink-field',
				value: this.props.post.short_URL,
				size: this.props.post.short_URL && this.props.post.short_URL.length,
				readOnly: true,
				selectOnFocus: true
			})
		);
	},

	hideSharing: function hideSharing() {
		var _props2 = this.props,
		    isSharingActive = _props2.isSharingActive,
		    isLikesActive = _props2.isLikesActive,
		    isPublicizeEnabled = _props2.isPublicizeEnabled;

		return !isSharingActive && !isLikesActive && !isPublicizeEnabled;
	},

	render: function render() {
		var hideSharing = this.hideSharing();
		var classes = (0, _classnames2.default)('editor-sharing__accordion', this.props.className, {
			'is-loading': !this.props.post || !this.props.connections
		});

		// if sharing is hidden, and post is not published (no short URL yet),
		// then do not render this accordion
		if (hideSharing && !_utils2.default.isPublished(this.props.post)) {
			return null;
		}

		var status = void 0;
		if (this.props.hasBrokenConnection) {
			status = {
				type: 'warning',
				text: this.translate('A broken connection requires repair', {
					comment: 'Publicize connection deauthorized, needs user action to fix'
				}),
				url: '/sharing/' + this.props.site.slug,
				position: (0, _viewport.isMobile)() ? 'top left' : 'top',
				onClick: this.props.onStatusClick
			};
		}

		return _react2.default.createElement(
			_accordion2.default,
			{
				title: this.translate('Sharing'),
				subtitle: this.getSubtitle(),
				status: status,
				className: classes },
			this.props.site && _react2.default.createElement(_queryPublicizeConnections2.default, { siteId: this.props.site.ID }),
			_react2.default.createElement(
				_section2.default,
				null,
				!hideSharing && _react2.default.createElement(_2.default, { site: this.props.site, post: this.props.post }),
				this.renderShortUrl()
			)
		);
	}
});

/**
 * Internal dependencies
 */
exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	var userId = (0, _selectors.getCurrentUserId)(state);
	var postId = (0, _selectors3.getEditorPostId)(state);
	var postType = (0, _selectors4.getEditedPostValue)(state, siteId, postId, 'type');
	var isSharingActive = false !== (0, _selectors5.isJetpackModuleActive)(state, siteId, 'sharedaddy');
	var isLikesActive = false !== (0, _selectors5.isJetpackModuleActive)(state, siteId, 'likes');

	return {
		connections: (0, _selectors6.getSiteUserConnections)(state, siteId, userId),
		hasBrokenConnection: (0, _hasBrokenSiteUserConnection2.default)(state, siteId, userId),
		isSharingActive: isSharingActive,
		isLikesActive: isLikesActive,
		isPublicizeEnabled: (0, _isPublicizeEnabled2.default)(state, siteId, postType)
	};
}, {
	onStatusClick: function onStatusClick() {
		return (0, _actions.recordGoogleEvent)('Editor', 'Clicked Accordion Broken Status');
	}
})(EditorSharingAccordion);
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-sharing/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = EditorSharing;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _publicizeOptions = __webpack_require__("./client/post-editor/editor-sharing/publicize-options.jsx");

var _publicizeOptions2 = _interopRequireDefault(_publicizeOptions);

var _sharingLikeOptions = __webpack_require__("./client/post-editor/editor-sharing/sharing-like-options.jsx");

var _sharingLikeOptions2 = _interopRequireDefault(_sharingLikeOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function EditorSharing(_ref) {
	var post = _ref.post,
	    site = _ref.site;

	return _react2.default.createElement(
		'div',
		{ className: 'editor-sharing' },
		_react2.default.createElement(_publicizeOptions2.default, { post: post, site: site }),
		_react2.default.createElement(_sharingLikeOptions2.default, { post: post, site: site })
	);
} /**
   * External dependencies
   */


EditorSharing.propTypes = {
	site: _react.PropTypes.object,
	post: _react.PropTypes.object
};
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-sharing/publicize-connection.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _formCheckbox = __webpack_require__("./client/components/forms/form-checkbox/index.jsx");

var _formCheckbox2 = _interopRequireDefault(_formCheckbox);

var _postMetadata = __webpack_require__("./client/lib/post-metadata/index.js");

var _postMetadata2 = _interopRequireDefault(_postMetadata);

var _actions = __webpack_require__("./client/lib/posts/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _stats = __webpack_require__("./client/lib/posts/stats.js");

var PostStats = _interopRequireWildcard(_stats);

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _noticeAction = __webpack_require__("./client/components/notice/notice-action.jsx");

var _noticeAction2 = _interopRequireDefault(_noticeAction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
exports.default = _react2.default.createClass({
	displayName: 'EditorSharingPublicizeConnection',

	propTypes: {
		post: _react.PropTypes.object,
		connection: _react.PropTypes.object,
		onRefresh: _react.PropTypes.func,
		label: _react.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onRefresh: function onRefresh() {}
		};
	},
	isConnectionSkipped: function isConnectionSkipped() {
		var _props = this.props,
		    post = _props.post,
		    connection = _props.connection;

		return post && connection && (0, _includes3.default)(_postMetadata2.default.publicizeSkipped(post), connection.keyring_connection_ID);
	},
	isConnectionDone: function isConnectionDone() {
		var _props2 = this.props,
		    post = _props2.post,
		    connection = _props2.connection;

		return post && connection && (0, _includes3.default)(_postMetadata2.default.publicizeDone(post), connection.keyring_connection_ID);
	},
	isDisabled: function isDisabled() {
		var connection = this.props.connection;

		return !connection || connection.read_only;
	},
	onChange: function onChange(event) {
		var connection = this.props.connection;

		if (!connection) {
			return;
		}

		if (event.target.checked) {
			// TODO: REDUX - remove flux actions when whole post-editor is reduxified
			_actions2.default.deleteMetadata('_wpas_skip_' + connection.keyring_connection_ID);
			PostStats.recordStat('sharing_enabled_' + connection.service);
			PostStats.recordEvent('Publicize Service', connection.service, 'enabled');
		} else {
			// TODO: REDUX - remove flux actions when whole post-editor is reduxified
			_actions2.default.updateMetadata('_wpas_skip_' + connection.keyring_connection_ID, 1);
			PostStats.recordStat('sharing_disabled_' + connection.service);
			PostStats.recordEvent('Publicize Service', connection.service, 'disabled');
		}
	},
	renderBrokenConnection: function renderBrokenConnection() {
		var connection = this.props.connection;

		if (!connection || connection.status !== 'broken') {
			return;
		}

		return _react2.default.createElement(
			_notice2.default,
			{ isCompact: true, className: 'editor-sharing__broken-publicize-connection', status: 'is-warning', showDismiss: false },
			this.translate('There is an issue connecting to %s.', { args: connection.label }),
			_react2.default.createElement(
				_noticeAction2.default,
				{ onClick: this.props.onRefresh },
				'Reconnect ',
				_react2.default.createElement(_gridicons2.default, { icon: 'external', size: 18 })
			)
		);
	},
	render: function render() {
		var _props3 = this.props,
		    connection = _props3.connection,
		    label = _props3.label;


		return _react2.default.createElement(
			'div',
			{ className: 'editor-sharing__publicize-connection' },
			_react2.default.createElement(
				'label',
				null,
				_react2.default.createElement(_formCheckbox2.default, {
					checked: !this.isConnectionSkipped(),
					disabled: this.isDisabled(),
					onChange: this.onChange }),
				_react2.default.createElement(
					'span',
					{ 'data-e2e-service': label },
					connection && connection.external_display
				)
			),
			this.renderBrokenConnection()
		);
	}
});
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

/***/ "./client/post-editor/editor-sharing/publicize-options.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _queryPostTypes = __webpack_require__("./client/components/data/query-post-types/index.jsx");

var _queryPostTypes2 = _interopRequireDefault(_queryPostTypes);

var _publicizeMessage = __webpack_require__("./client/post-editor/editor-sharing/publicize-message.jsx");

var _publicizeMessage2 = _interopRequireDefault(_publicizeMessage);

var _publicizeServices = __webpack_require__("./client/post-editor/editor-sharing/publicize-services.jsx");

var _publicizeServices2 = _interopRequireDefault(_publicizeServices);

var _paths = __webpack_require__("./client/lib/paths/index.js");

var paths = _interopRequireWildcard(_paths);

var _postMetadata = __webpack_require__("./client/lib/post-metadata/index.js");

var _postMetadata2 = _interopRequireDefault(_postMetadata);

var _popupMonitor = __webpack_require__("./client/lib/popup-monitor/index.js");

var _popupMonitor2 = _interopRequireDefault(_popupMonitor);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _utils = __webpack_require__("./client/lib/site/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _stats = __webpack_require__("./client/lib/posts/stats.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/editor/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors4 = __webpack_require__("./client/state/posts/selectors.js");

var _selectors5 = __webpack_require__("./client/state/post-types/selectors.js");

var _selectors6 = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors7 = __webpack_require__("./client/state/sharing/publicize/selectors.js");

var _actions = __webpack_require__("./client/state/sharing/publicize/actions.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorSharingPublicizeOptions = _react2.default.createClass({
	displayName: 'EditorSharingPublicizeOptions',

	connectionPopupMonitor: false,
	jetpackModulePopupMonitor: false,

	propTypes: {
		site: _react.PropTypes.object,
		post: _react.PropTypes.object,
		siteId: _react.PropTypes.number,
		isPublicizeEnabled: _react.PropTypes.bool,
		connections: _react.PropTypes.array,
		requestConnections: _react.PropTypes.func
	},

	hasConnections: function hasConnections() {
		return this.props.connections && this.props.connections.length;
	},

	componentWillUnmount: function componentWillUnmount() {
		if (this.connectionPopupMonitor) {
			this.connectionPopupMonitor.off('close', this.onNewConnectionPopupClosed);
		}

		if (this.jetpackModulePopupMonitor) {
			this.jetpackModulePopupMonitor.off('close', this.onModuleConnectionPopupClosed);
		}
	},


	newConnectionPopup: function newConnectionPopup() {
		var href = void 0;

		if (!this.props.site) {
			return;
		}

		href = paths.publicizeConnections(this.props.site);

		if (!this.connectionPopupMonitor) {
			this.connectionPopupMonitor = new _popupMonitor2.default();
		}

		this.connectionPopupMonitor.open(href);
		this.connectionPopupMonitor.once('close', this.onNewConnectionPopupClosed);
	},

	onNewConnectionPopupClosed: function onNewConnectionPopupClosed() {
		this.props.requestConnections(this.props.site.ID);
	},


	newConnection: function newConnection() {
		this.newConnectionPopup();
		(0, _stats.recordStat)('sharing_create_service');
		(0, _stats.recordEvent)('Opened Create New Sharing Service Dialog');
	},

	jetpackModulePopup: function jetpackModulePopup() {
		var href = void 0;

		if (!this.props.site || !this.props.site.jetpack) {
			return;
		}

		href = paths.jetpackModules(this.props.site, 'publicize');

		if (!this.jetpackModulePopupMonitor) {
			this.jetpackModulePopupMonitor = new _popupMonitor2.default();
		}

		this.jetpackModulePopupMonitor.open(href);
		this.jetpackModulePopupMonitor.once('close', this.onModuleConnectionPopupClosed);
	},

	onModuleConnectionPopupClosed: function onModuleConnectionPopupClosed() {
		var _this = this;

		if (!this.props.site || !this.props.site.jetpack) {
			return;
		}

		// Refresh the list of connections so that the user is given the latest
		// possible state.  Also prevents a possible infinite loading state due
		// to connections previously returning a 400 error
		this.props.site.once('change', function () {
			if (_this.props.isPublicizeEnabled) {
				_this.props.requestConnections(_this.props.site.ID);
			}
		});
	},

	renderServices: function renderServices() {
		if (!this.props.site || !this.hasConnections()) {
			return;
		}

		return _react2.default.createElement(_publicizeServices2.default, {
			post: this.props.post,
			newConnectionPopup: this.newConnectionPopup });
	},

	renderMessage: function renderMessage() {
		var preview = (0, _get3.default)(this.props.post, 'title'),
		    skipped = this.hasConnections() ? _postMetadata2.default.publicizeSkipped(this.props.post) : [],
		    targeted = this.hasConnections() ? this.props.connections.filter(function (connection) {
			return skipped && -1 === skipped.indexOf(connection.keyring_connection_ID);
		}) : [],
		    requireCount = (0, _includes3.default)((0, _map3.default)(targeted, 'service'), 'twitter'),
		    acceptableLength = requireCount ? 140 - 23 - 23 : null;

		if (!this.hasConnections()) {
			return;
		}

		return _react2.default.createElement(_publicizeMessage2.default, {
			message: _postMetadata2.default.publicizeMessage(this.props.post),
			preview: preview,
			requireCount: requireCount,
			acceptableLength: acceptableLength });
	},

	renderAddNewButton: function renderAddNewButton() {
		// contributors cannot create publicize connections
		if (!_utils2.default.userCan('publish_posts', this.props.site)) {
			return;
		}

		return _react2.default.createElement(
			_button2.default,
			{ borderless: true, compact: true, onClick: this.newConnection },
			_react2.default.createElement(_gridicons2.default, { icon: 'add' }),
			' ',
			this.translate('Connect new service'),
			_react2.default.createElement(
				'span',
				{ className: 'editor-sharing__external-link-indicator' },
				_react2.default.createElement(_gridicons2.default, { icon: 'external', size: 18 })
			)
		);
	},

	renderInfoNotice: function renderInfoNotice() {
		// don't show the message if the are no connections
		// and the user is not allowed to add any
		if (!this.hasConnections() && !_utils2.default.userCan('publish_posts', this.props.site)) {
			return;
		}

		return _react2.default.createElement(
			'p',
			{ className: 'editor-drawer__description' },
			this.translate('Connect and select social media services to automatically share this post.')
		);
	},

	dismissRepublicizeMessage: function dismissRepublicizeMessage() {
		this.props.dismissShareConfirmation(this.props.siteId, this.props.post.ID);
	},
	render: function render() {
		if (!this.props.isPublicizeEnabled) {
			return null;
		}

		if (this.props.site && this.props.site.options.publicize_permanently_disabled) {
			return _react2.default.createElement(
				'div',
				{ className: 'editor-sharing__publicize-disabled' },
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						this.translate('Publicize is disabled on this site.')
					)
				)
			);
		}

		if (this.props.site && this.props.site.jetpack && !this.props.isPublicizeEnabled) {
			return _react2.default.createElement(
				'div',
				{ className: 'editor-sharing__publicize-disabled' },
				_react2.default.createElement(
					'p',
					null,
					_react2.default.createElement(
						'span',
						null,
						this.translate('Enable the Publicize module to automatically share new posts to social networks.')
					)
				),
				_react2.default.createElement(
					'button',
					{
						className: 'editor-sharing__jetpack-modules-button button is-secondary',
						onClick: this.jetpackModulePopup },
					this.translate('View Module Settings')
				)
			);
		}

		var classes = (0, _classnames2.default)('editor-sharing__publicize-options', {
			'has-connections': this.hasConnections(),
			'has-add-option': _utils2.default.userCan('publish_posts', this.props.site)
		});

		return _react2.default.createElement(
			'div',
			{ className: classes },
			this.props.siteId && _react2.default.createElement(_queryPostTypes2.default, { siteId: this.props.siteId }),
			this.renderInfoNotice(),
			this.renderServices(),
			this.renderAddNewButton(),
			this.renderMessage()
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
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var userId = (0, _selectors6.getCurrentUserId)(state);
	var postId = (0, _selectors2.getEditorPostId)(state);
	var postType = (0, _selectors4.getEditedPostValue)(state, siteId, postId, 'type');
	var isPublicizeEnabled = false !== (0, _selectors3.isJetpackModuleActive)(state, siteId, 'publicize') && (0, _selectors5.postTypeSupports)(state, siteId, postType, 'publicize');

	return {
		siteId: siteId,
		isPublicizeEnabled: isPublicizeEnabled,
		connections: (0, _selectors7.getSiteUserConnections)(state, siteId, userId)
	};
}, { requestConnections: _actions.fetchConnections })(EditorSharingPublicizeOptions);
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-sharing/publicize-services.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditorSharingPublicizeServices = undefined;

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _groupBy2 = __webpack_require__("./node_modules/lodash/groupBy.js");

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _publicizeConnection = __webpack_require__("./client/post-editor/editor-sharing/publicize-connection.jsx");

var _publicizeConnection2 = _interopRequireDefault(_publicizeConnection);

var _selectors = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sharing/publicize/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var EditorSharingPublicizeServices = exports.EditorSharingPublicizeServices = function EditorSharingPublicizeServices(_ref) {
	var connections = _ref.connections,
	    post = _ref.post,
	    newConnectionPopup = _ref.newConnectionPopup;
	return _react2.default.createElement(
		'ul',
		{ className: 'editor-sharing__publicize-services' },
		(0, _map3.default)((0, _groupBy3.default)(connections, 'label'), function (groupedConnections, label) {
			return _react2.default.createElement(
				'li',
				{ key: label, className: 'editor-sharing__publicize-service' },
				_react2.default.createElement(
					'h5',
					{ className: 'editor-sharing__publicize-service-heading' },
					label
				),
				groupedConnections.map(function (connection) {
					return _react2.default.createElement(_publicizeConnection2.default, {
						key: connection.ID,
						post: post,
						connection: connection,
						onRefresh: newConnectionPopup,
						label: label });
				})
			);
		})
	);
};

EditorSharingPublicizeServices.propTypes = {
	connections: _react.PropTypes.array.isRequired,
	post: _react.PropTypes.object,
	newConnectionPopup: _react.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	var userId = (0, _selectors.getCurrentUserId)(state);

	return {
		connections: (0, _selectors3.getSiteUserConnections)(state, siteId, userId)
	};
})(EditorSharingPublicizeServices);

/***/ }),

/***/ "./client/post-editor/editor-sharing/sharing-like-options.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _editorFieldset = __webpack_require__("./client/post-editor/editor-fieldset/index.jsx");

var _editorFieldset2 = _interopRequireDefault(_editorFieldset);

var _formCheckbox = __webpack_require__("./client/components/forms/form-checkbox/index.jsx");

var _formCheckbox2 = _interopRequireDefault(_formCheckbox);

var _actions = __webpack_require__("./client/lib/posts/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _stats = __webpack_require__("./client/lib/posts/stats.js");

var _selectors = __webpack_require__("./client/state/ui/editor/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharingLikeOptions = _react2.default.createClass({
	displayName: 'SharingLikeOptions',

	propTypes: {
		site: _react2.default.PropTypes.object,
		post: _react2.default.PropTypes.object,
		isSharingButtonsEnabled: _react2.default.PropTypes.bool,
		isLikesEnabled: _react2.default.PropTypes.bool,
		isNew: _react2.default.PropTypes.bool
	},

	isShowingSharingButtons: function isShowingSharingButtons() {
		if (this.props.post && 'sharing_enabled' in this.props.post) {
			return this.props.post.sharing_enabled;
		}

		if (this.props.site && this.props.isNew) {
			return this.props.site.options.default_sharing_status;
		}

		return true;
	},

	isShowingLikeButton: function isShowingLikeButton() {
		if (this.props.post && 'likes_enabled' in this.props.post) {
			return this.props.post.likes_enabled;
		}

		if (this.props.site && this.props.isNew) {
			return this.props.site.options.default_likes_enabled;
		}

		return true;
	},

	renderSharingButtonField: function renderSharingButtonField() {
		if (!this.props.isSharingButtonsEnabled) {
			return;
		}

		return _react2.default.createElement(
			'label',
			null,
			_react2.default.createElement(_formCheckbox2.default, {
				name: 'sharing_enabled',
				checked: this.isShowingSharingButtons(),
				onChange: this.onChange }),
			_react2.default.createElement(
				'span',
				null,
				this.translate('Show Sharing Buttons', { context: 'Post Editor' })
			)
		);
	},
	renderLikesButtonField: function renderLikesButtonField() {
		if (!this.props.isLikesEnabled) {
			return;
		}

		return _react2.default.createElement(
			'label',
			null,
			_react2.default.createElement(_formCheckbox2.default, {
				name: 'likes_enabled',
				checked: this.isShowingLikeButton(),
				onChange: this.onChange }),
			_react2.default.createElement(
				'span',
				null,
				this.translate('Show Like Button', { context: 'Post Editor' })
			)
		);
	},


	onChange: function onChange(event) {
		// TODO: REDUX - remove flux actions when whole post-editor is reduxified
		_actions2.default.edit((0, _defineProperty3.default)({}, event.target.name, event.target.checked));

		this.recordStats(event);
	},

	recordStats: function recordStats(event) {
		var mcStat = event.target.name,
		    eventStat = 'sharing_enabled' === event.target.name ? 'Sharing Buttons' : 'Like Button';

		mcStat += event.target.checked ? '_enabled' : '_disabled';
		eventStat += event.target.checked ? ' Enabled' : ' Disabled';

		(0, _stats.recordStat)(mcStat);
		(0, _stats.recordEvent)(eventStat);
	},

	render: function render() {
		if (!this.props.isSharingButtonsEnabled && !this.props.isLikesEnabled) {
			return null;
		}

		return _react2.default.createElement(
			_editorFieldset2.default,
			{
				className: 'editor-sharing__sharing-like-options',
				legend: this.translate('Sharing Buttons & Likes')
			},
			this.renderSharingButtonField(),
			this.renderLikesButtonField()
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
	var siteId = (0, _selectors2.getSelectedSiteId)(state);

	return {
		isSharingButtonsEnabled: false !== (0, _selectors3.isJetpackModuleActive)(state, siteId, 'sharedaddy'),
		isLikesEnabled: false !== (0, _selectors3.isJetpackModuleActive)(state, siteId, 'likes'),
		isNew: (0, _selectors.isEditorNewPost)(state)
	};
})(SharingLikeOptions);
module.exports = exports['default'];

/***/ })

});