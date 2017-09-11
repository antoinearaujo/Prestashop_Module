webpackJsonp(["async-load-layout-masterbar-drafts"],{

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

/***/ "./client/components/update-post-status/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _once2 = __webpack_require__("./node_modules/lodash/once.js");

var _once3 = _interopRequireDefault(_once2);

var _flow2 = __webpack_require__("./node_modules/lodash/flow.js");

var _flow3 = _interopRequireDefault(_flow2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _updateTemplate = __webpack_require__("./client/components/update-post-status/update-template.js");

var _updateTemplate2 = _interopRequireDefault(_updateTemplate);

var _actions = __webpack_require__("./client/lib/posts/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _actions3 = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESET_TIMEOUT_MS = 1200;

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


var getStrings = (0, _once3.default)(function (translate) {
	return {
		page: {
			deleteWarning: translate('Delete this page permanently?'),
			deleted: translate('Page Deleted'),
			deleting: translate('Deleting Page'),
			error: translate('Error'),
			restored: translate('Page Restored'),
			restoring: translate('Restoring Page'),
			trashed: translate('Moved to Trash'),
			trashing: translate('Trashing Page'),
			undo: translate('undo?'),
			updated: translate('Updated'),
			updating: translate('Updating Page')
		},
		post: {
			deleteWarning: translate('Delete this post permanently?'),
			deleted: translate('Post Deleted'),
			deleting: translate('Deleting Post'),
			error: translate('Error'),
			restored: translate('Restored'),
			restoring: translate('Restoring'),
			trashed: translate('Moved to Trash'),
			trashing: translate('Trashing Post'),
			undo: translate('undo?'),
			updated: translate('Updated'),
			updating: translate('Updating Post')
		}
	};
});

var enhance = (0, _flow3.default)(_i18nCalypso.localize, (0, _reactRedux.connect)(null, { recordGoogleEvent: _actions3.recordGoogleEvent }));

var updatePostStatus = function updatePostStatus(WrappedComponent) {
	var _class, _temp2;

	return enhance((_temp2 = _class = function (_Component) {
		(0, _inherits3.default)(UpdatePostStatus, _Component);

		function UpdatePostStatus() {
			var _ref;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, UpdatePostStatus);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UpdatePostStatus.__proto__ || (0, _getPrototypeOf2.default)(UpdatePostStatus)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
				updated: false,
				updatedStatus: null,
				previousStatus: null,
				showMoreOptions: false,
				showPageActions: false
			}, _this.buildUpdateTemplate = function () {
				if (!_this.state.updated) {
					return;
				}

				var strings = getStrings(_this.props.translate);

				return _react2.default.createElement(_updateTemplate2.default, {
					post: _this.props.post || _this.props.page,
					previousStatus: _this.state.previousStatus,
					resetToPreviousState: _this.resetToPreviousState,
					status: _this.state.updatedStatus,
					strings: strings[_this.getType()]
				});
			}, _this.updatePostStatus = function (status) {
				var post = _this.props.post || _this.props.page;
				var previousStatus = null;

				var setNewStatus = function setNewStatus(error, resultPost) {
					if (error) {
						_this.setErrorState();
						return false;
					}

					_this.setState({
						previousStatus: previousStatus,
						updatedStatus: resultPost.status,
						showMoreOptions: false
					});
					return true;
				};

				switch (status) {
					case 'delete':
						_this.setState({
							showPageActions: false,
							updatedStatus: 'deleting',
							updated: true
						});

						var strings = getStrings(_this.props.translate);
						var type = _this.props.post ? 'post' : 'page';

						if ((typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object' && window.confirm(strings[type].deleteWarning)) {
							// eslint-disable-line no-alert
							_actions2.default.trash(post, setNewStatus);
						} else {
							_this.resetState();
						}
						return;

					case 'trash':
						_this.setState({
							showPageActions: false,
							updatedStatus: 'trashing',
							updated: true
						});
						previousStatus = post.status;
						_actions2.default.trash(post, setNewStatus);
						return;

					case 'restore':
						_this.setState({
							showPageActions: false,
							updatedStatus: 'restoring',
							updated: true
						});
						previousStatus = 'trash';
						_actions2.default.restore(post, setNewStatus);
						return;

					default:
						_this.setState({
							showPageActions: false,
							updatedStatus: 'updating',
							updated: true
						});
						_actions2.default.update(post, { status: status }, function (error, resultPost) {
							if (!setNewStatus(error, resultPost)) {
								return;
							}
							setTimeout(_this.resetState, RESET_TIMEOUT_MS);
						});
				}
			}, _this.resetState = function () {
				_this.setState({
					updatedStatus: null,
					updated: false,
					showMoreOptions: false,
					showPageActions: false
				});
			}, _this.resetToPreviousState = function () {
				var _ref2 = _this.getType() === 'page' ? ['Pages', 'Clicked Undo Trashed Page'] : ['Posts', 'Clicked Undo Trashed Post'],
				    _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
				    group = _ref3[0],
				    eventName = _ref3[1];

				_this.props.recordGoogleEvent(group, eventName);
				if (_this.state.previousStatus) {
					_this.updatePostStatus(_this.state.previousStatus);
				}
			}, _this.togglePageActions = function () {
				_this.setState({ showPageActions: !_this.state.showPageActions });
			}, _this.showMoreControls = function () {
				_this.setState({ showMoreOptions: true });
			}, _this.hideMoreControls = function () {
				_this.setState({ showMoreOptions: false });
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(UpdatePostStatus, [{
			key: 'getType',
			value: function getType() {
				return this.props.page ? 'page' : 'post';
			}
		}, {
			key: 'setErrorState',
			value: function setErrorState() {
				this.setState({
					updated: true,
					updatedStatus: 'error'
				});
				setTimeout(this.resetState, RESET_TIMEOUT_MS);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, {
					buildUpdateTemplate: this.buildUpdateTemplate,
					togglePageActions: this.togglePageActions,
					showMoreControls: this.showMoreControls,
					hideMoreControls: this.hideMoreControls,
					updatePostStatus: this.updatePostStatus
				}, this.state));
			}
		}]);
		return UpdatePostStatus;
	}(_react.Component), _class.displayName = 'UpdatePostStatus(' + (WrappedComponent.displayName || WrappedComponent.name || '') + ')', _class.propTypes = {
		translate: _propTypes2.default.func.isRequired,
		recordGoogleEvent: _propTypes2.default.func.isRequired,
		post: _propTypes2.default.object,
		page: _propTypes2.default.object
	}, _temp2));
};

exports.default = updatePostStatus;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/update-post-status/update-template.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = UpdateTemplate;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ellipsis = function Ellipsis() {
	return _react2.default.createElement(
		"span",
		null,
		_react2.default.createElement(
			"span",
			{ className: "loading-dot" },
			"."
		),
		_react2.default.createElement(
			"span",
			{ className: "loading-dot" },
			"."
		),
		_react2.default.createElement(
			"span",
			{ className: "loading-dot" },
			"."
		)
	);
}; /**
    * External dependencies
    */
function UpdateTemplate(_ref) {
	var post = _ref.post,
	    previousStatus = _ref.previousStatus,
	    resetToPreviousState = _ref.resetToPreviousState,
	    status = _ref.status,
	    s = _ref.strings;

	var updateClass = 'conf-alert';
	var updateText = void 0,
	    undoTemplate = void 0,
	    undoClick = void 0,
	    trashText = void 0;

	switch (status) {
		case 'trashing':
		case 'deleting':
			trashText = status === 'deleting' ? s.deleting : s.trashing;
			updateText = _react2.default.createElement(
				"span",
				null,
				trashText,
				" ",
				_react2.default.createElement(Ellipsis, null)
			);
			updateClass += ' conf-alert--trashing';
			break;

		case 'trash':
			undoClick = resetToPreviousState;
			undoTemplate = _react2.default.createElement(
				"a",
				{ className: "undo", onClick: undoClick },
				_react2.default.createElement(
					"span",
					null,
					s.undo
				)
			);
			updateText = s.trashed;
			updateClass += ' conf-alert--trashed';
			break;

		case 'deleted':
			updateText = s.deleted;
			updateClass += ' conf-alert--deleted';
			break;

		case 'updating':
			updateText = _react2.default.createElement(
				"span",
				null,
				s.updating,
				" ",
				_react2.default.createElement(Ellipsis, null)
			);
			updateClass += ' conf-alert--updating';
			break;

		case 'error':
			updateText = s.error;
			updateClass += ' conf-alert--error';
			break;

		case 'restoring':
			updateText = _react2.default.createElement(
				"span",
				null,
				s.restoring,
				" ",
				_react2.default.createElement(Ellipsis, null)
			);
			updateClass += ' conf-alert--updating';
			break;

		default:
			updateText = previousStatus === 'trash' ? s.restored : s.updated;
	}

	return _react2.default.createElement(
		"div",
		{ key: post.global_ID + '-update', className: "updated-confirmation" },
		_react2.default.createElement(
			"div",
			{ className: updateClass },
			_react2.default.createElement(
				"div",
				{ className: "conf-alert_con" },
				_react2.default.createElement(
					"span",
					{ className: "conf-alert_title" },
					updateText
				),
				undoTemplate
			)
		)
	);
}
module.exports = exports["default"];

/***/ }),

/***/ "./client/layout/masterbar/drafts.jsx":
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

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _popover = __webpack_require__("./client/components/popover/index.jsx");

var _popover2 = _interopRequireDefault(_popover);

var _count = __webpack_require__("./client/components/count/index.jsx");

var _count2 = _interopRequireDefault(_count);

var _selectors2 = __webpack_require__("./client/state/posts/counts/selectors.js");

var _selectors3 = __webpack_require__("./client/state/posts/selectors.js");

var _draft = __webpack_require__("./client/my-sites/draft/index.jsx");

var _draft2 = _interopRequireDefault(_draft);

var _queryPosts = __webpack_require__("./client/components/data/query-posts/index.jsx");

var _queryPosts2 = _interopRequireDefault(_queryPosts);

var _queryPostCounts = __webpack_require__("./client/components/data/query-post-counts/index.jsx");

var _queryPostCounts2 = _interopRequireDefault(_queryPostCounts);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _site = __webpack_require__("./client/blocks/site/index.jsx");

var _site2 = _interopRequireDefault(_site);

var _selectors4 = __webpack_require__("./client/state/current-user/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var MasterbarDrafts = function (_Component) {
	(0, _inherits3.default)(MasterbarDrafts, _Component);

	function MasterbarDrafts() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, MasterbarDrafts);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MasterbarDrafts.__proto__ || (0, _getPrototypeOf2.default)(MasterbarDrafts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			showDrafts: false
		}, _this.toggleDrafts = function () {
			var showDrafts = _this.state.showDrafts;

			_this.setState({
				showDrafts: !showDrafts
			});
		}, _this.closeDrafts = function () {
			_this.setState({ showDrafts: false });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(MasterbarDrafts, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    selectedSite = _props.selectedSite,
			    draftCount = _props.draftCount,
			    loadingDrafts = _props.loadingDrafts,
			    translate = _props.translate;

			var isLoading = draftCount !== 0 && loadingDrafts;

			if (!selectedSite) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_queryPostCounts2.default, { siteId: selectedSite.ID, type: 'post' }),
				this.props.draftCount > 0 && _react2.default.createElement(
					_button2.default,
					{
						compact: true, borderless: true, className: 'masterbar__toggle-drafts',
						onClick: this.toggleDrafts,
						ref: 'drafts',
						title: translate('Latest Drafts')
					},
					_react2.default.createElement(_count2.default, { count: this.props.draftCount })
				),
				_react2.default.createElement(
					_popover2.default,
					{
						isVisible: this.state.showDrafts,
						onClose: this.closeDrafts,
						position: 'bottom left',
						context: this.refs && this.refs.drafts,
						className: 'masterbar__recent-drafts'
					},
					_react2.default.createElement(_queryPosts2.default, {
						siteId: selectedSite.ID,
						query: this.props.draftsQuery }),
					_react2.default.createElement(_site2.default, { compact: true, site: selectedSite }),
					this.props.drafts && this.props.drafts.map(this.renderDraft, this),
					isLoading && _react2.default.createElement(_draft2.default, { isPlaceholder: true }),
					this.props.draftCount > 6 && _react2.default.createElement(
						_button2.default,
						{
							compact: true,
							borderless: true,
							className: 'masterbar__see-all-drafts',
							href: '/posts/drafts/' + selectedSite.slug,
							onClick: this.closeDrafts
						},
						translate('See all drafts'),
						this.props.draftCount ? _react2.default.createElement(_count2.default, { count: this.props.draftCount }) : null
					)
				)
			);
		}
	}, {
		key: 'renderDraft',
		value: function renderDraft(draft) {
			if (!draft) {
				return null;
			}

			var site = this.props.selectedSite;

			return _react2.default.createElement(_draft2.default, {
				key: draft.global_ID,
				post: draft,
				siteId: site && site.ID,
				showAuthor: site && !site.single_user_site && !this.props.userId,
				onTitleClick: this.closeDrafts
			});
		}
	}]);
	return MasterbarDrafts;
}(_react.Component); /**
                      * External dependencies
                      */


MasterbarDrafts.propTypes = {
	user: _react.PropTypes.object,
	isActive: _react.PropTypes.bool,
	className: _react.PropTypes.string,
	tooltip: _react.PropTypes.string,
	selectedSite: _react.PropTypes.object
};
exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var userId = (0, _selectors4.getCurrentUserId)(state);
	var site = (0, _selectors.getSelectedSite)(state);
	var draftsQuery = {
		type: 'post',
		status: 'draft',
		number: 10,
		order_by: 'modified',
		author: site && !site.jetpack && !site.single_user_site ? userId : null
	};

	var myPostCounts = (0, _selectors2.getMyPostCounts)(state, siteId, 'post');

	return {
		drafts: (0, _selectors3.getSitePostsForQueryIgnoringPage)(state, siteId, draftsQuery),
		loadingDrafts: (0, _selectors3.isRequestingSitePostsForQuery)(state, siteId, draftsQuery),
		draftsQuery: draftsQuery,
		draftCount: myPostCounts && myPostCounts.draft,
		selectedSite: site
	};
})((0, _i18nCalypso.localize)(MasterbarDrafts));
module.exports = exports['default'];

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

/***/ "./client/my-sites/draft/index.jsx":
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

var _flow2 = __webpack_require__("./node_modules/lodash/flow.js");

var _flow3 = _interopRequireDefault(_flow2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _url = __webpack_require__("./node_modules/url/url.js");

var _url2 = _interopRequireDefault(_url);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _compact = __webpack_require__("./client/components/card/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _gravatar = __webpack_require__("./client/components/gravatar/index.jsx");

var _gravatar2 = _interopRequireDefault(_gravatar);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _noticeAction = __webpack_require__("./client/components/notice/notice-action.jsx");

var _noticeAction2 = _interopRequireDefault(_noticeAction);

var _menu = __webpack_require__("./client/components/popover/menu.jsx");

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _postRelativeTimeStatus = __webpack_require__("./client/my-sites/post-relative-time-status/index.jsx");

var _postRelativeTimeStatus2 = _interopRequireDefault(_postRelativeTimeStatus);

var _siteIcon = __webpack_require__("./client/blocks/site-icon/index.jsx");

var _siteIcon2 = _interopRequireDefault(_siteIcon);

var _actions = __webpack_require__("./client/lib/posts/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _photon = __webpack_require__("./node_modules/photon/index.js");

var _photon2 = _interopRequireDefault(_photon);

var _touchDetect = __webpack_require__("./client/lib/touch-detect/index.js");

var _touchDetect2 = _interopRequireDefault(_touchDetect);

var _updatePostStatus = __webpack_require__("./client/components/update-post-status/index.js");

var _updatePostStatus2 = _interopRequireDefault(_updatePostStatus);

var _utils = __webpack_require__("./client/lib/posts/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var Draft = function (_Component) {
	(0, _inherits3.default)(Draft, _Component);

	function Draft() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Draft);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Draft.__proto__ || (0, _getPrototypeOf2.default)(Draft)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			fullImage: false,
			showPopoverMenu: false,
			isRestoring: false,
			hasError: false
		}, _this.toggleImageState = function () {
			_this.setState({ fullImage: !_this.state.fullImage });
		}, _this.trashPost = function () {
			_this.setState({
				showPopoverMenu: false,
				isTrashing: true
			});

			var updateStatus = function (error) {
				if (!this.isMounted()) {
					return;
				}

				if (error) {
					return this.setState({
						isTrashing: false,
						hasError: true
					});
				}

				return this.setState({ isTrashing: false });
			}.bind(_this);

			if (_utils2.default.userCan('delete_post', _this.props.post)) {
				_actions2.default.trash(_this.props.post, updateStatus);
			}
		}, _this.restorePost = function () {
			_this.setState({
				showPopoverMenu: false,
				isRestoring: true
			});

			var updateStatus = function (error) {
				if (!this.isMounted()) {
					return;
				}

				if (error) {
					return this.setState({
						isRestoring: false,
						hasError: true
					});
				}

				return this.setState({ isRestoring: false });
			}.bind(_this);

			if (_utils2.default.userCan('delete_post', _this.props.post)) {
				_actions2.default.restore(_this.props.post, updateStatus);
			}
		}, _this.previewPost = function () {
			window.open(_utils2.default.getPreviewURL(_this.props.post));
		}, _this.publishPost = function () {
			_this.setState({ showPopoverMenu: false });
			if (_utils2.default.userCan('publish_post', _this.props.post)) {
				_this.props.updatePostStatus('publish');
			}
		}, _this.togglePopoverMenu = function () {
			_this.setState({
				showPopoverMenu: !_this.state.showPopoverMenu
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Draft, [{
		key: 'render',
		value: function render() {
			var post = this.props.post;

			var image = null;
			var imageUrl = void 0,
			    editPostURL = void 0;

			if (this.props.isPlaceholder) {
				return this.postPlaceholder();
			}

			var site = this.props.site;

			if (_utils2.default.userCan('edit_post', post)) {
				editPostURL = _utils2.default.getEditURL(post, site);
			}

			if (this.props.postImages && this.props.postImages.canonical_image) {
				image = _url2.default.parse(this.props.postImages.canonical_image.uri, true);
				imageUrl = '//' + image.hostname + image.pathname + '?w=680px';
			}

			if (post && post.canonical_image) {
				image = _url2.default.parse(post.canonical_image.uri, true);

				if (image.hostname.indexOf('files.wordpress.com') > 0) {
					imageUrl = '//' + image.hostname + image.pathname + '?w=680px';
				} else {
					imageUrl = (0, _photon2.default)(post.canonical_image.uri, { width: 680 });
				}
			}

			var classes = (0, _classnames2.default)('draft', 'is-' + post.format, {
				'has-all-actions': this.props.showAllActions,
				'has-image': !!image,
				'is-image-expanded': this.state.fullImage,
				'is-trashed': this.props.post.status === 'trash' || this.state.isTrashing,
				'is-placeholder': this.props.isPlaceholder,
				'is-restoring': this.state.isRestoring,
				'is-touch': _touchDetect2.default.hasTouch(),
				'is-selected': this.props.selected
			});

			var title = post.title || _react2.default.createElement(
				'span',
				{ className: 'draft__untitled' },
				this.props.translate('Untitled')
			);

			// Render each Post
			return _react2.default.createElement(
				_compact2.default,
				{ className: classes, key: 'draft-' + post.ID },
				this.showStatusChange(),
				_react2.default.createElement(
					'h3',
					{ className: 'draft__title' },
					post.status === 'pending' && _react2.default.createElement(
						'span',
						{ className: 'draft__pending-label' },
						this.props.translate('Pending')
					),
					this.props.showAuthor && _react2.default.createElement(_gravatar2.default, { user: post.author, size: 22 }),
					_react2.default.createElement(
						'a',
						{ href: editPostURL, onClick: this.props.onTitleClick },
						title
					)
				),
				post.excerpt && _react2.default.createElement(
					'span',
					{ className: 'draft__excerpt' },
					_react2.default.createElement(
						'a',
						{ href: editPostURL, onClick: this.props.onTitleClick },
						post.excerpt
					)
				),
				this.props.selectedSiteId ? this.draftActions() : _react2.default.createElement(_siteIcon2.default, { site: site, size: 32 }),
				image ? this.renderImage(imageUrl) : null,
				this.props.post.status === 'trash' ? this.restoreButton() : null
			);
		}
	}, {
		key: 'renderImage',
		value: function renderImage(image) {
			var style = void 0;

			if (!this.state.fullImage) {
				style = { backgroundImage: 'url(' + image + ')' };
			}

			return _react2.default.createElement(
				'div',
				{ className: 'draft__featured-image', style: style, onClick: this.toggleImageState },
				this.state.fullImage && _react2.default.createElement('img', { className: 'draft__image', src: image })
			);
		}
	}, {
		key: 'restoreButton',
		value: function restoreButton() {
			if (this.state.isRestoring) {
				return null;
			}

			return _react2.default.createElement(
				'button',
				{ className: 'draft__restore', onClick: this.restorePost },
				_react2.default.createElement(_gridicons2.default, { icon: 'undo', size: 18 }),
				this.props.translate('Restore')
			);
		}
	}, {
		key: 'showStatusChange',
		value: function showStatusChange() {
			if (this.props.post.status === 'publish') {
				return _react2.default.createElement(
					_notice2.default,
					{ isCompact: true,
						status: 'is-success',
						text: 'Post successfully published.',
						button: 'View',
						showDismiss: false },
					_react2.default.createElement(
						_noticeAction2.default,
						{ href: this.props.post.URL },
						'View'
					)
				);
			} else if (this.state.hasError) {
				return _react2.default.createElement(_notice2.default, { isCompact: true,
					status: 'is-error',
					text: 'There was a problem.',
					showDismiss: false });
			}
		}
	}, {
		key: 'postPlaceholder',
		value: function postPlaceholder() {
			return _react2.default.createElement(
				_compact2.default,
				{ className: 'draft is-placeholder' },
				_react2.default.createElement('h3', { className: 'draft__title' }),
				_react2.default.createElement(
					'div',
					{ className: 'draft__actions' },
					_react2.default.createElement(
						'p',
						{ className: 'post-relative-time-status' },
						_react2.default.createElement(
							'span',
							{ className: 'time' },
							_react2.default.createElement('span', { className: 'noticon noticon-time' }),
							_react2.default.createElement('span', { className: 'time-text' })
						)
					)
				)
			);
		}
	}, {
		key: 'renderTrashAction',
		value: function renderTrashAction() {
			if (!_utils2.default.userCan('delete_post', this.props.post)) {
				return null;
			}

			if (this.props.post.status === 'trash' || this.state.isRestoring) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'draft__actions' },
				_react2.default.createElement(_gridicons2.default, { icon: 'trash', onClick: this.trashPost, size: 18 })
			);
		}
	}, {
		key: 'renderAllActions',
		value: function renderAllActions() {
			return _react2.default.createElement(
				'div',
				{ className: 'draft__all-actions' },
				_react2.default.createElement(_postRelativeTimeStatus2.default, { post: this.props.post, includeEditLink: true }),
				_react2.default.createElement('span', {
					className: 'draft__actions-toggle noticon noticon-ellipsis',
					onClick: this.togglePopoverMenu,
					ref: 'popoverMenuButton'
				}),
				_react2.default.createElement(
					_menu2.default,
					{
						isVisible: this.state.showPopoverMenu,
						onClose: this.togglePopoverMenu,
						position: 'bottom left',
						context: this.refs && this.refs.popoverMenuButton
					},
					_react2.default.createElement(
						_menuItem2.default,
						{ onClick: this.previewPost },
						this.props.translate('Preview')
					),
					_react2.default.createElement(
						_menuItem2.default,
						{ onClick: this.publishPost },
						this.props.translate('Publish')
					),
					_react2.default.createElement(
						_menuItem2.default,
						{ className: 'draft__trash-item', onClick: this.trashPost },
						this.props.translate('Send to Trash')
					)
				)
			);
		}
	}, {
		key: 'draftActions',
		value: function draftActions() {
			return this.props.showAllActions ? this.renderAllActions() : this.renderTrashAction();
		}
	}]);
	return Draft;
}(_react.Component); /**
                      * External dependencies
                      */


Draft.propTypes = {
	showAllActions: _react.PropTypes.bool,
	post: _react.PropTypes.object,
	isPlaceholder: _react.PropTypes.bool,
	onTitleClick: _react.PropTypes.func,
	postImages: _react.PropTypes.object,
	selected: _react.PropTypes.bool,
	showAuthor: _react.PropTypes.bool,

	// via `localize`
	translate: _react.PropTypes.func.isRequired,

	// via `updatePostStatus`
	updatePostStatus: _react.PropTypes.func.isRequired
};
Draft.defaultProps = {
	showAllActions: false,
	onTitleClick: _noop3.default,
	selected: false,
	showAuthor: false
};


var mapState = function mapState(state, _ref2) {
	var siteId = _ref2.siteId;
	return {
		site: (0, _selectors2.getSite)(state, siteId),
		selectedSiteId: (0, _selectors.getSelectedSiteId)(state)
	};
};

exports.default = (0, _flow3.default)(_i18nCalypso.localize, _updatePostStatus2.default, (0, _reactRedux.connect)(mapState))(Draft);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/post-relative-time-status/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

/**
 * Internal dependencies
 */
var Gridicon = __webpack_require__("./node_modules/gridicons/build/index.js");

module.exports = React.createClass({

	displayName: 'PostRelativeTime',

	mixins: [PureRenderMixin],

	propTypes: {
		post: React.PropTypes.object.isRequired,
		includeNonDraftStatuses: React.PropTypes.bool,
		link: React.PropTypes.string,
		target: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			includeNonDraftStatuses: false,
			link: null,
			target: null
		};
	},

	getTimestamp: function getTimestamp() {
		var status = this.props.post.status;

		var time = void 0;
		if (status === 'draft' || status === 'pending') {
			time = this.props.post.modified;
		} else if (status !== 'new') {
			time = this.props.post.date;
		}

		return time;
	},

	getRelativeTimeText: function getRelativeTimeText() {
		var time = this.getTimestamp();
		if (!time) {
			return;
		}

		return React.createElement(
			'span',
			{ className: 'post-relative-time-status__time' },
			React.createElement(Gridicon, { icon: 'time', size: 18 }),
			React.createElement(
				'time',
				{ className: 'post-relative-time-status__time-text', dateTime: time },
				this.moment(time).fromNow()
			)
		);
	},

	getStatusText: function getStatusText() {
		var status = this.props.post.status,
		    statusClassName = 'post-relative-time-status__status',
		    statusIcon = 'aside',
		    statusText;

		if (this.props.post.sticky) {
			statusText = this.translate('sticky');
			statusClassName += ' is-sticky';
			statusIcon = 'bookmark-outline';
		} else if (status === 'pending') {
			statusText = this.translate('pending review');
			statusClassName += ' is-pending';
		} else if (status === 'future') {
			statusText = this.translate('scheduled');
			statusClassName += ' is-scheduled';
			statusIcon = 'calendar';
		} else if (status === 'trash') {
			statusText = this.translate('trashed');
			statusClassName += ' is-trash';
			statusIcon = 'trash';
		} else if (this.props.includeBasicStatus) {
			if (status === 'draft') {
				statusText = this.translate('draft');
			} else if (status === 'publish') {
				statusText = this.translate('published');
			} else if (status === 'new') {
				statusText = this.translate('Publish immediately');
			}
		}

		if (statusText) {
			return React.createElement(
				'span',
				{ className: statusClassName },
				React.createElement(Gridicon, { icon: statusIcon, size: 18 }),
				React.createElement(
					'span',
					{ className: 'post-relative-time-status__status-text' },
					statusText
				)
			);
		}
	},

	render: function render() {
		var timeText = this.getRelativeTimeText(),
		    statusText = this.getStatusText(),
		    relativeTimeClass = timeText ? 'post-relative-time-status' : null,
		    innerText = React.createElement(
			'span',
			null,
			timeText,
			statusText
		),
		    time = this.getTimestamp();

		if (this.props.link) {
			var rel = this.props.target === '_blank' ? 'noopener noreferrer' : null;
			innerText = React.createElement(
				'a',
				{ href: this.props.link, target: this.props.target, rel: rel, onClick: this.props.onClick },
				innerText
			);
		}

		return React.createElement(
			'p',
			{ className: relativeTimeClass, title: time },
			innerText
		);
	}
});

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


/***/ })

});