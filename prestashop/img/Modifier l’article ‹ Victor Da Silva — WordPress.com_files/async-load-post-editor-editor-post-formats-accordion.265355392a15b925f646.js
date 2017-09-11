webpackJsonp(["async-load-post-editor-editor-post-formats-accordion"],{

/***/ "./client/components/data/query-post-formats/index.jsx":
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

var _selectors = __webpack_require__("./client/state/post-formats/selectors.js");

var _actions = __webpack_require__("./client/state/post-formats/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryPostFormats = function (_Component) {
	(0, _inherits3.default)(QueryPostFormats, _Component);

	function QueryPostFormats() {
		(0, _classCallCheck3.default)(this, QueryPostFormats);
		return (0, _possibleConstructorReturn3.default)(this, (QueryPostFormats.__proto__ || (0, _getPrototypeOf2.default)(QueryPostFormats)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryPostFormats, [{
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
		value: function request(props) {
			if (props.requestingPostFormats) {
				return;
			}

			props.requestPostFormats(props.siteId);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryPostFormats;
}(_react.Component);

QueryPostFormats.propTypes = {
	siteId: _react.PropTypes.number.isRequired,
	requestingPostFormats: _react.PropTypes.bool,
	requestPostFormats: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	return {
		requestingPostFormats: (0, _selectors.isRequestingPostFormats)(state, ownProps.siteId)
	};
}, { requestPostFormats: _actions.requestPostFormats })(QueryPostFormats);
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-post-formats/accordion.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _has2 = __webpack_require__("./node_modules/lodash/has.js");

var _has3 = _interopRequireDefault(_has2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _accordion = __webpack_require__("./client/components/accordion/index.jsx");

var _accordion2 = _interopRequireDefault(_accordion);

var _queryPostFormats = __webpack_require__("./client/components/data/query-post-formats/index.jsx");

var _queryPostFormats2 = _interopRequireDefault(_queryPostFormats);

var _ = __webpack_require__("./client/post-editor/editor-post-formats/index.jsx");

var _2 = _interopRequireDefault(_);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/post-formats/selectors.js");

var _getSiteDefaultPostFormat = __webpack_require__("./client/state/selectors/get-site-default-post-format.js");

var _getSiteDefaultPostFormat2 = _interopRequireDefault(_getSiteDefaultPostFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var EditorPostFormatsAccordion = _react2.default.createClass({
	displayName: 'EditorPostFormatsAccordion',

	propTypes: {
		siteId: _react.PropTypes.number,
		site: _react.PropTypes.object,
		post: _react.PropTypes.object,
		postFormats: _react.PropTypes.object,
		defaultPostFormat: _react.PropTypes.string
	},

	getFormatValue: function getFormatValue() {
		var _props = this.props,
		    post = _props.post,
		    defaultPostFormat = _props.defaultPostFormat;

		if (!post) {
			return;
		}

		if (post.format) {
			return post.format;
		}

		return defaultPostFormat;
	},
	getSubtitle: function getSubtitle() {
		var formatValue = this.getFormatValue();
		var _props2 = this.props,
		    post = _props2.post,
		    postFormats = _props2.postFormats;


		if (!post || !postFormats) {
			return;
		}

		if ((0, _has3.default)(postFormats, formatValue)) {
			return postFormats[formatValue];
		}

		return this.translate('Standard', {
			context: 'Post format'
		});
	},
	render: function render() {
		var _props3 = this.props,
		    className = _props3.className,
		    post = _props3.post,
		    postFormats = _props3.postFormats;

		var classes = (0, _classnames2.default)('editor-post-formats__accordion', className, {
			'is-loading': !post || !postFormats
		});

		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(_queryPostFormats2.default, { siteId: this.props.siteId }),
			!(0, _isEmpty3.default)(postFormats) && _react2.default.createElement(
				_accordion2.default,
				{
					title: this.translate('Post Format'),
					subtitle: this.getSubtitle(),
					className: classes },
				_react2.default.createElement(_2.default, { value: this.getFormatValue() })
			)
		);
	}
}); /**
     * External dependencies
     */
exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);

	return {
		siteId: siteId,
		site: (0, _selectors.getSelectedSite)(state),
		postFormats: (0, _selectors2.getPostFormats)(state, siteId),
		defaultPostFormat: (0, _getSiteDefaultPostFormat2.default)(state, siteId)
	};
})(EditorPostFormatsAccordion);
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-post-formats/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _formRadio = __webpack_require__("./client/components/forms/form-radio/index.jsx");

var _formRadio2 = _interopRequireDefault(_formRadio);

var _queryPostFormats = __webpack_require__("./client/components/data/query-post-formats/index.jsx");

var _queryPostFormats2 = _interopRequireDefault(_queryPostFormats);

var _actions = __webpack_require__("./client/lib/posts/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _stats = __webpack_require__("./client/lib/posts/stats.js");

var _section = __webpack_require__("./client/components/accordion/section.jsx");

var _section2 = _interopRequireDefault(_section);

var _editorThemeHelp = __webpack_require__("./client/post-editor/editor-theme-help/index.jsx");

var _editorThemeHelp2 = _interopRequireDefault(_editorThemeHelp);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/post-formats/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var EditorPostFormats = _react2.default.createClass({
	displayName: 'EditorPostFormats',

	propTypes: {
		siteId: _react.PropTypes.number,
		value: _react.PropTypes.string,
		postFormats: _react.PropTypes.object
	},

	getDefaultProps: function getDefaultProps() {
		return {
			value: 'standard'
		};
	},
	getSelectedPostFormat: function getSelectedPostFormat() {
		var value = this.props.value;

		var isSupportedFormat = !!this.getPostFormats()[value];

		return isSupportedFormat ? value : 'standard';
	},
	getPostFormats: function getPostFormats() {
		var formats = {
			standard: this.translate('Standard', {
				context: 'Post format'
			})
		};

		if (this.props.postFormats) {
			formats = (0, _assign2.default)(formats, this.props.postFormats);
		}

		return formats;
	},
	getPostFormatIcon: function getPostFormatIcon(postFormatSlug) {
		var icons = {
			aside: 'aside',
			image: 'image',
			video: 'video-camera',
			quote: 'quote',
			link: 'link',
			gallery: 'image-multiple',
			status: 'pencil',
			audio: 'audio',
			chat: 'comment'
		};

		return icons[postFormatSlug] ? icons[postFormatSlug] : 'posts';
	},
	onChange: function onChange(event) {
		// TODO: REDUX - remove flux actions when whole post-editor is reduxified
		_actions2.default.edit({
			format: event.target.value
		});

		(0, _stats.recordStat)('post_format_changed');
		(0, _stats.recordEvent)('Changed Post Format', event.target.value);
	},
	renderPostFormats: function renderPostFormats() {
		var _this = this;

		var selectedFormat = this.getSelectedPostFormat();

		return (0, _map3.default)(this.getPostFormats(), function (postFormatLabel, postFormatSlug) {
			return _react2.default.createElement(
				'li',
				{ key: postFormatSlug, className: 'editor-post-formats__format' },
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement(_formRadio2.default, {
						name: 'format',
						value: postFormatSlug,
						checked: postFormatSlug === selectedFormat,
						onChange: _this.onChange
					}),
					_react2.default.createElement(
						'span',
						{ className: 'editor-post-formats__format-label' },
						_react2.default.createElement(
							'span',
							{ className: 'editor-post-formats__format-icon' },
							_react2.default.createElement(_gridicons2.default, { icon: _this.getPostFormatIcon(postFormatSlug), size: 18 })
						),
						postFormatLabel
					)
				)
			);
		});
	},
	render: function render() {
		return _react2.default.createElement(
			_section2.default,
			null,
			_react2.default.createElement(_editorThemeHelp2.default, { className: 'editor-post-formats__help-link' }),
			_react2.default.createElement(_queryPostFormats2.default, { siteId: this.props.siteId }),
			_react2.default.createElement(
				'ul',
				{ className: 'editor-post-formats' },
				this.renderPostFormats()
			)
		);
	}
}); /**
     * External dependencies
     */
exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);

	return {
		siteId: siteId,
		postFormats: (0, _selectors2.getPostFormats)(state, siteId)
	};
})(EditorPostFormats);
module.exports = exports['default'];

/***/ }),

/***/ "./client/state/post-formats/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.requestPostFormats = requestPostFormats;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action thunk which, when invoked, triggers a network request to
 * retrieve post formats for a site.
 *
 * @param  {Number}   siteId Site ID
 * @return {Function}        Action thunk
 */
/**
 * Internal dependencies
 */
function requestPostFormats(siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.POST_FORMATS_REQUEST,
			siteId: siteId
		});

		return _wp2.default.undocumented().site(siteId).postFormatsList().then(function (_ref) {
			var formats = _ref.formats;

			dispatch({
				type: _actionTypes.POST_FORMATS_RECEIVE,
				siteId: siteId,
				formats: formats
			});

			dispatch({
				type: _actionTypes.POST_FORMATS_REQUEST_SUCCESS,
				siteId: siteId
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.POST_FORMATS_REQUEST_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

/***/ }),

/***/ "./client/state/post-formats/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRequestingPostFormats = isRequestingPostFormats;
exports.getPostFormats = getPostFormats;
/**
 * Returns true if currently requesting post formats for the specified site ID, or
 * false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @return {Boolean}        Whether post formats are being requested
 */
function isRequestingPostFormats(state, siteId) {
  return !!state.postFormats.requesting[siteId];
}

/**
 * Returns the supported post formats for a site.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @return {?Object}        Site post formats
 */
function getPostFormats(state, siteId) {
  return state.postFormats.items[siteId] || null;
}

/***/ })

});