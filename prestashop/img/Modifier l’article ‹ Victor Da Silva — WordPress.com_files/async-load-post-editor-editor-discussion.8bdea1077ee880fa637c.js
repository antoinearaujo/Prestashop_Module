webpackJsonp(["async-load-post-editor-editor-discussion"],{

/***/ "./client/post-editor/editor-discussion/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var EditorFieldset = __webpack_require__("./client/post-editor/editor-fieldset/index.jsx"),
    FormCheckbox = __webpack_require__("./client/components/forms/form-checkbox/index.jsx"),
    PostActions = __webpack_require__("./client/lib/posts/actions.js"),
    InfoPopover = __webpack_require__("./client/components/info-popover/index.jsx"),
    stats = __webpack_require__("./client/lib/posts/stats.js");

function booleanToStatus(bool) {
	return bool ? 'open' : 'closed';
}

function statusToBoolean(status) {
	return 'open' === status;
}

exports.default = React.createClass({
	displayName: 'EditorDiscussion',

	propTypes: {
		isNew: React.PropTypes.bool,
		post: React.PropTypes.object,
		site: React.PropTypes.object
	},

	getDefaultProps: function getDefaultProps() {
		return {
			isNew: false
		};
	},

	getDiscussionSetting: function getDiscussionSetting() {
		if (this.props.post && this.props.post.discussion) {
			return this.props.post.discussion;
		}

		if (this.props.site && this.props.isNew && this.props.post) {
			var site = this.props.site;

			var isPage = this.props.post.type === 'page';
			var defaultCommentStatus = (0, _get3.default)(site, 'options.default_comment_status', false);
			var defaultPingStatus = (0, _get3.default)(site, 'options.default_ping_status', false);

			return {
				comment_status: isPage ? 'closed' : booleanToStatus(defaultCommentStatus),
				ping_status: isPage ? 'closed' : booleanToStatus(defaultPingStatus)
			};
		}

		return {};
	},

	onChange: function onChange(event) {
		var discussion = (0, _pick3.default)(this.getDiscussionSetting(), 'comment_status', 'ping_status'),
		    newStatus = booleanToStatus(event.target.checked),
		    discussionType = event.target.name,
		    statName,
		    gaEvent;

		discussion[discussionType] = newStatus;

		// There are other ways to construct these strings, but keeping them exactly as they are displayed in mc/ga aids in discovery via grok
		if ('comment_status' === discussionType) {
			statName = event.target.checked ? 'advanced_comments_open_enabled' : 'advanced_comments_open_disabled';
			gaEvent = 'Comment status changed';
		} else {
			statName = event.target.checked ? 'advanced_pings_open_enabled' : 'advanced_pings_open_disabled';
			gaEvent = 'Trackback status changed';
		}

		stats.recordStat(statName);
		stats.recordEvent(gaEvent, newStatus);

		// TODO: REDUX - remove flux actions when whole post-editor is reduxified
		PostActions.edit({
			discussion: discussion
		});
	},

	render: function render() {
		var discussion = this.getDiscussionSetting();

		return React.createElement(
			EditorFieldset,
			{ legend: this.translate('Discussion') },
			React.createElement(
				'label',
				null,
				React.createElement(FormCheckbox, {
					name: 'comment_status',
					checked: statusToBoolean(discussion.comment_status),
					disabled: !this.props.post,
					onChange: this.onChange }),
				React.createElement(
					'span',
					null,
					this.translate('Allow comments'),
					React.createElement(
						InfoPopover,
						{ position: 'top right', className: 'editor-comment_status__info', gaEventCategory: 'Editor', popoverName: 'CommentStatus' },
						this.translate('Provide a comment section to give readers the ability to respond.')
					)
				)
			),
			React.createElement(
				'label',
				null,
				React.createElement(FormCheckbox, {
					name: 'ping_status',
					checked: statusToBoolean(discussion.ping_status),
					disabled: !this.props.post,
					onChange: this.onChange }),
				React.createElement(
					'span',
					null,
					this.translate('Allow Pingbacks & Trackbacks')
				)
			)
		);
	}
});
module.exports = exports['default'];

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

/***/ })

});