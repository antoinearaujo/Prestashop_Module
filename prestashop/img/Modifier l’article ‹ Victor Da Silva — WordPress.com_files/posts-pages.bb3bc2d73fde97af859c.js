webpackJsonp(["posts-pages"],{

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

/***/ "./client/blocks/comments/comment-count.jsx":
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
var CommentCount = function CommentCount(_ref) {
	var count = _ref.count,
	    translate = _ref.translate;

	var countPhrase = void 0;
	if (count > 0) {
		countPhrase = translate('%(commentCount)d comment', '%(commentCount)d comments', {
			count: count,
			args: {
				commentCount: count
			}
		});
	} else {
		countPhrase = translate('No comments');
	}

	return _react2.default.createElement(
		'div',
		{ className: 'comments__comment-count' },
		_react2.default.createElement(
			'span',
			{ className: 'comments__comment-count-phrase' },
			countPhrase
		),
		count === 0 && translate(' - Add the first! ')
	);
};

/**
 * Internal dependencies
 */


CommentCount.propTypes = {
	count: _react2.default.PropTypes.number.isRequired
};

exports.default = (0, _i18nCalypso.localize)(CommentCount);
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/comments/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _postCommentList = __webpack_require__("./client/blocks/comments/post-comment-list.jsx");

var _postCommentList2 = _interopRequireDefault(_postCommentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _postCommentList2.default;
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/comments/post-comment-list.jsx":
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

var _delay2 = __webpack_require__("./node_modules/lodash/delay.js");

var _delay3 = _interopRequireDefault(_delay2);

var _takeRight2 = __webpack_require__("./node_modules/lodash/takeRight.js");

var _takeRight3 = _interopRequireDefault(_takeRight2);

var _size2 = __webpack_require__("./node_modules/lodash/size.js");

var _size3 = _interopRequireDefault(_size2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _selectors = __webpack_require__("./client/state/comments/selectors.js");

var _actions = __webpack_require__("./client/state/comments/actions.js");

var _constants = __webpack_require__("./client/state/comments/constants.js");

var _stats = __webpack_require__("./client/reader/stats.js");

var _postComment = __webpack_require__("./client/blocks/comments/post-comment.jsx");

var _postComment2 = _interopRequireDefault(_postComment);

var _form = __webpack_require__("./client/blocks/comments/form.jsx");

var _form2 = _interopRequireDefault(_form);

var _commentCount = __webpack_require__("./client/blocks/comments/comment-count.jsx");

var _commentCount2 = _interopRequireDefault(_commentCount);

var _segmentedControl = __webpack_require__("./client/components/segmented-control/index.jsx");

var _segmentedControl2 = _interopRequireDefault(_segmentedControl);

var _item = __webpack_require__("./client/components/segmented-control/item.jsx");

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * PostCommentList, as the name would suggest, displays a list of comments for a post.
 * It has the capability of either starting from the latest comment for a post,
 * or it may begin from any commentId within the post by specifying a commentId.
 *
 * Depending on where the list starts, there is slightly different behavior:
 * 1. from the last comments:
 *    this is the simplest case. Initially onMount we request the latest comments
 *    and only display a subset of them.  When the user clicks "Show More" we load more comments
 *
 * 2. from a specific commentId:
 *    this is activated by specifying the commentId prop. onMount we request the specific comment and then
 *    also a page before it / a page after it.  Then we scroll down to the specific comment.
 *    This also activates a "Show More" button at the end of the comment list instead of just at the top
 *
 */

/**
 * External dependencies
 */
var PostCommentList = function (_React$Component) {
	(0, _inherits3.default)(PostCommentList, _React$Component);

	function PostCommentList() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PostCommentList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PostCommentList.__proto__ || (0, _getPrototypeOf2.default)(PostCommentList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			activeReplyCommentId: null,
			amountOfCommentsToTake: _this.props.initialSize,
			commentsFilter: 'all',
			activeEditCommentId: null
		}, _this.shouldScrollToComment = function () {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

			return !!(props.startingCommentId && props.commentsTree[_this.props.startingCommentId] && props.commentsFetchingStatus.hasReceivedBefore && props.commentsFetchingStatus.hasReceivedAfter && !_this.hasScrolledToComment && window.document.getElementById('comment-' + props.startingCommentId));
		}, _this.shouldFetchInitialComment = function (_ref2) {
			var startingCommentId = _ref2.startingCommentId,
			    initialComment = _ref2.initialComment;

			return !!(startingCommentId && !initialComment);
		}, _this.shouldFetchInitialPages = function (_ref3) {
			var startingCommentId = _ref3.startingCommentId,
			    commentsTree = _ref3.commentsTree;
			return startingCommentId && commentsTree[startingCommentId] && _this.props.commentsTree[startingCommentId] && !_this.alreadyLoadedInitialSet;
		}, _this.shouldNormalFetchAfterPropsChange = function (nextProps) {
			var currentSiteId = (0, _get3.default)(_this.props, 'post.site_ID');
			var currentPostId = (0, _get3.default)(_this.props, 'post.ID');
			var currentCommentsFilter = _this.props.commentsFilter;
			var currentInitialComment = _this.props.initialComment;

			var nextSiteId = (0, _get3.default)(nextProps, 'post.site_ID');
			var nextPostId = (0, _get3.default)(nextProps, 'post.ID');
			var nextCommentsFilter = nextProps.commentsFilter;
			var nextInitialComment = nextProps.initialComment;

			var propsExist = nextSiteId && nextPostId && nextCommentsFilter;
			var propChanged = currentSiteId !== nextSiteId || currentPostId !== nextPostId || currentCommentsFilter !== nextCommentsFilter;

			/**
    * This covers two cases where fetching by commentId fails and we should fetch as if it werent specified:
    *  1. the comment specified (commentId) exists for the site but is for a different postId
    *  2. the commentId does not exist for the site
    */
			var commentIdBail = currentInitialComment !== nextInitialComment && nextInitialComment && (nextInitialComment.error || nextInitialComment.post && nextInitialComment.post.ID !== nextPostId);

			return propsExist && propChanged || commentIdBail;
		}, _this.renderComment = function (commentId) {
			if (!commentId) {
				return null;
			}

			// TODO Should not need to bind here
			var onEditCommentClick = _this.onEditCommentClick.bind(_this, commentId);

			return _react2.default.createElement(_postComment2.default, {
				post: _this.props.post,
				commentsTree: _this.props.commentsTree,
				commentId: commentId,
				key: commentId,
				showModerationTools: _this.props.showModerationTools,
				activeEditCommentId: _this.state.activeEditCommentId,
				activeReplyCommentId: _this.state.activeReplyCommentId,
				onEditCommentClick: onEditCommentClick,
				onEditCommentCancel: _this.onEditCommentCancel,
				onReplyClick: _this.onReplyClick,
				onReplyCancel: _this.onReplyCancel,
				commentText: _this.commentText,
				onUpdateCommentText: _this.onUpdateCommentText,
				onCommentSubmit: _this.resetActiveReplyComment,
				depth: 0,
				maxDepth: _this.props.maxDepth,
				showNestingReplyArrow: _this.props.showNestingReplyArrow
			});
		}, _this.onEditCommentClick = function (commentId) {
			_this.setState({ activeEditCommentId: commentId });
		}, _this.onEditCommentCancel = function () {
			return _this.setState({ activeEditCommentId: null });
		}, _this.onReplyClick = function (commentID) {
			_this.setState({ activeReplyCommentId: commentID });
			(0, _stats.recordAction)('comment_reply_click');
			(0, _stats.recordGaEvent)('Clicked Reply to Comment');
			(0, _stats.recordTrack)('calypso_reader_comment_reply_click', {
				blog_id: _this.props.post.site_ID,
				comment_id: commentID
			});
		}, _this.onReplyCancel = function () {
			(0, _stats.recordAction)('comment_reply_cancel_click');
			(0, _stats.recordGaEvent)('Clicked Cancel Reply to Comment');
			(0, _stats.recordTrack)('calypso_reader_comment_reply_cancel_click', {
				blog_id: _this.props.post.site_ID,
				comment_id: _this.state.activeReplyCommentId
			});
			_this.resetActiveReplyComment();
		}, _this.onUpdateCommentText = function (commentText) {
			_this.setState({ commentText: commentText });
		}, _this.resetActiveReplyComment = function () {
			_this.setState({ activeReplyCommentId: null });
		}, _this.renderCommentsList = function (commentIds) {
			return _react2.default.createElement(
				'ol',
				{ className: 'comments__list is-root' },
				commentIds.map(function (commentId) {
					return _this.renderComment(commentId);
				})
			);
		}, _this.renderCommentForm = function () {
			var post = _this.props.post;
			var commentText = _this.state.commentText;

			// Are we displaying the comment form at the top-level?
			if (_this.state.activeReplyCommentId && !_this.state.errors) {
				return null;
			}

			return _react2.default.createElement(_form2.default, {
				ref: 'postCommentForm',
				post: post,
				parentCommentId: null,
				commentText: commentText,
				onUpdateCommentText: _this.onUpdateCommentText
			});
		}, _this.scrollToComment = function () {
			var comment = window.document.getElementById(window.location.hash.substring(1));
			comment.scrollIntoView();
			window.scrollBy(0, -50);
			_this.hasScrolledToComment = true;
		}, _this.getCommentsCount = function (commentIds) {
			// we always count prevSum, children sum, and +1 for the current processed comment
			return commentIds.reduce(function (prevSum, commentId) {
				return prevSum + _this.getCommentsCount((0, _get3.default)(_this.props.commentsTree, [commentId, 'children'])) + 1;
			}, 0);
		}, _this.getDisplayedComments = function (commentIds, numberToTake) {
			if (!commentIds) {
				return null;
			}

			var displayedComments = (0, _takeRight3.default)(commentIds, numberToTake);

			return {
				displayedComments: displayedComments,
				displayedCommentsCount: _this.getCommentsCount(displayedComments)
			};
		}, _this.viewEarlierCommentsHandler = function () {
			var direction = _this.props.commentsFetchingStatus.haveEarlierCommentsToFetch ? 'before' : 'after';
			_this.loadMoreCommentsHandler(direction);
		}, _this.viewLaterCommentsHandler = function () {
			var direction = _this.props.commentsFetchingStatus.haveLaterCommentsToFetch ? 'after' : 'before';
			_this.loadMoreCommentsHandler(direction);
		}, _this.loadMoreCommentsHandler = function (direction) {
			var _this$props = _this.props,
			    _this$props$post = _this$props.post,
			    postId = _this$props$post.ID,
			    siteId = _this$props$post.site_ID,
			    status = _this$props.commentsFilter;

			var amountOfCommentsToTake = _this.state.amountOfCommentsToTake + _this.props.pageSize;

			_this.setState({ amountOfCommentsToTake: amountOfCommentsToTake });
			_this.props.requestPostComments({ siteId: siteId, postId: postId, status: status, direction: direction });
		}, _this.handleFilterClick = function (commentsFilter) {
			return function () {
				return _this.props.onFilterChange(commentsFilter);
			};
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	/**
  * Should we scroll down to a comment? Only if we have satisfied these conditions:
  * 1. there is a startingCommentId
  * 2. the comment has loaded and is on the DOM
  * 3. we haven't already scrolled to it yet
  * 4. we have loaded some comments above + below it already (or there is only 1 comment)
  *
  * @param {object} props - the propes to use when evaluating if window should be scrolled down to a comment.
  * @returns {boolean} - whether or not we should scroll to a comment
  */


	(0, _createClass3.default)(PostCommentList, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props = this.props,
			    _props$post = _props.post,
			    postId = _props$post.ID,
			    siteId = _props$post.site_ID,
			    status = _props.commentsFilter;


			if (this.shouldFetchInitialComment(this.props)) {
				this.props.requestComment({ siteId: siteId, commentId: this.props.startingCommentId });
			} else if (this.shouldFetchInitialPages(this.props)) {
				this.viewEarlierCommentsHandler();
				this.viewLaterCommentsHandler();
				this.alreadyLoadedInitialSet = true;
			} else {
				this.props.requestPostComments({ siteId: siteId, postId: postId, status: status });
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _this2 = this;

			var siteId = (0, _get3.default)(nextProps, 'post.site_ID');
			var postId = (0, _get3.default)(nextProps, 'post.ID');
			var status = (0, _get3.default)(nextProps, 'commentsFilter');

			if (this.shouldFetchInitialComment(nextProps)) {
				// there is an edgecase the initialComment can change while on the same post
				// in this case we can't just load the exact comment in question because
				// we could create a gap in the list.
				if (this.props.commentsTree) {
					this.viewEarlierCommentsHandler();
				} else {
					this.props.requestComment({ siteId: siteId, commentId: nextProps.startingCommentId });
				}
				this.hasScrolledToComment = false;
			} else if (this.shouldFetchInitialPages(nextProps)) {
				this.viewEarlierCommentsHandler();
				this.viewLaterCommentsHandler();
				this.alreadyLoadedInitialSet = true;
			} else if (this.shouldNormalFetchAfterPropsChange(nextProps)) {
				nextProps.requestPostComments({ siteId: siteId, postId: postId, status: status });
			}

			// first defer is to give the startingCommentId time to render to the dom
			// second defer is to give the above/below comments to render to the dom
			(0, _delay3.default)(function () {
				if (_this2.shouldScrollToComment(nextProps)) {
					(0, _delay3.default)(function () {
						return _this2.scrollToComment();
					}, 50);
				}
			}, 50);
		}

		/***
   * Gets comments for display
   * @param {Immutable.List<Number>} commentIds The top level commentIds to take from
   * @param {Number} numberToTake How many top level comments to take
   * @returns {Object} that has the displayed comments + total displayed count including children
   */

	}, {
		key: 'render',
		value: function render() {
			if (!this.props.commentsTree) {
				return null;
			}

			var _props2 = this.props,
			    commentsFilter = _props2.commentsFilter,
			    commentsTree = _props2.commentsTree,
			    showFilters = _props2.showFilters,
			    commentCount = _props2.commentCount;
			var _props$commentsFetchi = this.props.commentsFetchingStatus,
			    haveEarlierCommentsToFetch = _props$commentsFetchi.haveEarlierCommentsToFetch,
			    haveLaterCommentsToFetch = _props$commentsFetchi.haveLaterCommentsToFetch;


			var amountOfCommentsToTake = !!this.props.startingCommentId ? Infinity : this.state.amountOfCommentsToTake;

			var _getDisplayedComments = this.getDisplayedComments(commentsTree.children, amountOfCommentsToTake),
			    displayedComments = _getDisplayedComments.displayedComments,
			    displayedCommentsCount = _getDisplayedComments.displayedCommentsCount;

			// Note: we might show fewer comments than commentsCount because some comments might be
			// orphans (parent deleted/unapproved), that comment will become unreachable but still counted.


			var showViewMoreComments = (0, _size3.default)(commentsTree.children) > amountOfCommentsToTake || haveEarlierCommentsToFetch || haveLaterCommentsToFetch;

			// If we're not yet fetched all comments from server, we can only rely on server's count.
			// once we got all the comments tree, we can calculate the count of reachable comments
			var actualCommentsCount = haveEarlierCommentsToFetch || haveLaterCommentsToFetch ? commentCount : this.getCommentsCount(commentsTree.children);

			return _react2.default.createElement(
				'div',
				{ className: 'comments__comment-list' },
				(this.props.showCommentCount || showViewMoreComments) && _react2.default.createElement(
					'div',
					{ className: 'comments__info-bar' },
					this.props.showCommentCount && _react2.default.createElement(_commentCount2.default, { count: actualCommentsCount }),
					showViewMoreComments ? _react2.default.createElement(
						'span',
						{ className: 'comments__view-more', onClick: this.viewEarlierCommentsHandler },
						(0, _i18nCalypso.translate)('Load more comments (Showing %(shown)d of %(total)d)', {
							args: {
								shown: displayedCommentsCount,
								total: actualCommentsCount
							}
						})
					) : null
				),
				showFilters && _react2.default.createElement(
					_segmentedControl2.default,
					{ compact: true, primary: true },
					_react2.default.createElement(
						_item2.default,
						{
							selected: commentsFilter === 'all',
							onClick: this.handleFilterClick('all')
						},
						(0, _i18nCalypso.translate)('All')
					),
					_react2.default.createElement(
						_item2.default,
						{
							selected: commentsFilter === 'approved',
							onClick: this.handleFilterClick('approved')
						},
						(0, _i18nCalypso.translate)('Approved', { context: 'comment status' })
					),
					_react2.default.createElement(
						_item2.default,
						{
							selected: commentsFilter === 'unapproved',
							onClick: this.handleFilterClick('unapproved')
						},
						(0, _i18nCalypso.translate)('Pending', { context: 'comment status' })
					),
					_react2.default.createElement(
						_item2.default,
						{
							selected: commentsFilter === 'spam',
							onClick: this.handleFilterClick('spam')
						},
						(0, _i18nCalypso.translate)('Spam', { context: 'comment status' })
					),
					_react2.default.createElement(
						_item2.default,
						{
							selected: commentsFilter === 'trash',
							onClick: this.handleFilterClick('trash')
						},
						(0, _i18nCalypso.translate)('Trash', { context: 'comment status' })
					)
				),
				this.renderCommentsList(displayedComments),
				showViewMoreComments && this.props.startingCommentId && _react2.default.createElement(
					'span',
					{ className: 'comments__view-more', onClick: this.viewLaterCommentsHandler },
					(0, _i18nCalypso.translate)('Load more comments (Showing %(shown)d of %(total)d)', {
						args: {
							shown: displayedCommentsCount,
							total: actualCommentsCount
						}
					})
				),
				this.renderCommentForm()
			);
		}
	}]);
	return PostCommentList;
}(_react2.default.Component);

/**
 * Internal dependencies
 */


PostCommentList.propTypes = {
	post: _react2.default.PropTypes.shape({
		ID: _react2.default.PropTypes.number.isRequired,
		site_ID: _react2.default.PropTypes.number.isRequired
	}).isRequired,
	pageSize: _react2.default.PropTypes.number,
	initialSize: _react2.default.PropTypes.number,
	showCommentCount: _react2.default.PropTypes.bool,
	startingCommentId: _react2.default.PropTypes.number,
	commentCount: _react2.default.PropTypes.number,
	maxDepth: _react2.default.PropTypes.number,
	showNestingReplyArrow: _react2.default.PropTypes.bool,

	// connect()ed props:
	commentsTree: _react2.default.PropTypes.object,
	requestPostComments: _react2.default.PropTypes.func.isRequired,
	requestComment: _react2.default.PropTypes.func.isRequired
};
PostCommentList.defaultProps = {
	pageSize: _constants.NUMBER_OF_COMMENTS_PER_FETCH,
	initialSize: _constants.NUMBER_OF_COMMENTS_PER_FETCH,
	showCommentCount: true,
	maxDepth: Infinity,
	showNestingReplyArrow: false
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	return {
		commentsTree: (0, _selectors.getPostCommentsTree)(state, ownProps.post.site_ID, ownProps.post.ID, ownProps.commentsFilter),
		commentsFetchingStatus: (0, _selectors.commentsFetchingStatus)(state, ownProps.post.site_ID, ownProps.post.ID, ownProps.commentCount),
		initialComment: (0, _selectors.getCommentById)({
			state: state,
			siteId: ownProps.post.site_ID,
			commentId: ownProps.startingCommentId
		})
	};
}, { requestPostComments: _actions.requestPostComments, requestComment: _actions.requestComment })(PostCommentList);
module.exports = exports['default'];

/***/ }),

/***/ "./client/blocks/post-actions/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _partial2 = __webpack_require__("./node_modules/lodash/partial.js");

var _partial3 = _interopRequireDefault(_partial2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/lib/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _postRelativeTimeStatus = __webpack_require__("./client/my-sites/post-relative-time-status/index.jsx");

var _postRelativeTimeStatus2 = _interopRequireDefault(_postRelativeTimeStatus);

var _commentButton = __webpack_require__("./client/blocks/comment-button/index.jsx");

var _commentButton2 = _interopRequireDefault(_commentButton);

var _postLikeButton = __webpack_require__("./client/my-sites/post-like-button/index.jsx");

var _postLikeButton2 = _interopRequireDefault(_postLikeButton);

var _postTotalViews = __webpack_require__("./client/my-sites/posts/post-total-views.jsx");

var _postTotalViews2 = _interopRequireDefault(_postTotalViews);

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/editor/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var getContentLink = function getContentLink(state, siteId, post) {
	var contentLinkURL = post.URL;
	var contentLinkTarget = '_blank';

	if ((0, _canCurrentUser2.default)(state, siteId, 'edit_post') && post.status !== 'trash') {
		contentLinkURL = (0, _selectors2.getEditorPath)(state, siteId, post.ID);
		contentLinkTarget = null;
	} else if (post.status === 'trash') {
		contentLinkURL = null;
	}

	return { contentLinkURL: contentLinkURL, contentLinkTarget: contentLinkTarget };
}; /**
    * External dependencies
    */


var recordEvent = (0, _partial3.default)(_actions.recordGoogleEvent, 'Posts');

var PostActions = function PostActions(_ref) {
	var className = _ref.className,
	    contentLink = _ref.contentLink,
	    post = _ref.post,
	    showComments = _ref.showComments,
	    showLikes = _ref.showLikes,
	    showStats = _ref.showStats,
	    toggleComments = _ref.toggleComments,
	    trackRelativeTimeStatusOnClick = _ref.trackRelativeTimeStatusOnClick,
	    trackTotalViewsOnClick = _ref.trackTotalViewsOnClick;
	var contentLinkURL = contentLink.contentLinkURL,
	    contentLinkTarget = contentLink.contentLinkTarget;

	var isDraft = post.status === 'draft';

	return _react2.default.createElement(
		'ul',
		{ className: (0, _classnames2.default)('post-actions', className) },
		_react2.default.createElement(
			'li',
			{ className: 'post-actions__item post-actions__relative-time' },
			_react2.default.createElement(_postRelativeTimeStatus2.default, {
				post: post,
				link: contentLinkURL,
				target: contentLinkTarget,
				onClick: trackRelativeTimeStatusOnClick })
		),
		!isDraft && showComments && _react2.default.createElement(
			'li',
			{ className: 'post-actions__item' },
			_react2.default.createElement(_commentButton2.default, {
				key: 'comment-button',
				post: post,
				showLabel: false,
				commentCount: post.discussion.comment_count,
				onClick: toggleComments,
				tagName: 'div' })
		),
		!isDraft && showLikes && _react2.default.createElement(
			'li',
			{ className: 'post-actions__item' },
			_react2.default.createElement(_postLikeButton2.default, {
				key: 'like-button',
				siteId: +post.site_ID,
				postId: +post.ID,
				post: post })
		),
		!isDraft && showStats && _react2.default.createElement(
			'li',
			{ className: 'post-actions__item post-actions__total-views' },
			_react2.default.createElement(_postTotalViews2.default, {
				post: post,
				clickHandler: trackTotalViewsOnClick })
		)
	);
};

PostActions.propTypes = {
	className: _react2.default.PropTypes.string,
	post: _react2.default.PropTypes.object.isRequired,
	siteId: _react2.default.PropTypes.number.isRequired,
	toggleComments: _react2.default.PropTypes.func.isRequired,
	trackRelativeTimeStatusOnClick: _react2.default.PropTypes.func,
	trackTotalViewsOnClick: _react2.default.PropTypes.func
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
	var siteId = _ref2.siteId,
	    post = _ref2.post;

	var isJetpack = (0, _selectors.isJetpackSite)(state, siteId);

	// TODO: Maybe add dedicated selectors for the following.
	var showComments = (!isJetpack || (0, _selectors.isJetpackModuleActive)(state, siteId, 'comments')) && post.discussion && post.discussion.comments_open;
	var showLikes = !isJetpack || (0, _selectors.isJetpackModuleActive)(state, siteId, 'likes');
	var showStats = (0, _canCurrentUser2.default)(state, siteId, 'view_stats') && (!isJetpack || (0, _selectors.isJetpackModuleActive)(state, siteId, 'stats'));

	return {
		contentLink: getContentLink(state, siteId, post),
		showComments: showComments,
		showLikes: showLikes,
		showStats: showStats
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({
		trackRelativeTimeStatusOnClick: function trackRelativeTimeStatusOnClick() {
			return recordEvent('Clicked Post Date');
		},
		trackTotalViewsOnClick: function trackTotalViewsOnClick() {
			return recordEvent('Clicked View Post Stats');
		}
	}, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _i18nCalypso.localize)(PostActions));
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

/***/ "./client/components/data/query-post-stats/index.jsx":
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

var _isUndefined2 = __webpack_require__("./node_modules/lodash/isUndefined.js");

var _isUndefined3 = _interopRequireDefault(_isUndefined2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _selectors = __webpack_require__("./client/state/stats/posts/selectors.js");

var _actions = __webpack_require__("./client/state/stats/posts/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryPostStats = function (_Component) {
	(0, _inherits3.default)(QueryPostStats, _Component);

	function QueryPostStats() {
		(0, _classCallCheck3.default)(this, QueryPostStats);
		return (0, _possibleConstructorReturn3.default)(this, (QueryPostStats.__proto__ || (0, _getPrototypeOf2.default)(QueryPostStats)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryPostStats, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _props = this.props,
			    requestingPostStats = _props.requestingPostStats,
			    siteId = _props.siteId,
			    postId = _props.postId;

			if (!requestingPostStats && siteId && !(0, _isUndefined3.default)(postId)) {
				this.requestPostStats(this.props);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.clearInterval();
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var _props2 = this.props,
			    siteId = _props2.siteId,
			    postId = _props2.postId,
			    fields = _props2.fields,
			    heartbeat = _props2.heartbeat;

			if (!(siteId && !(0, _isUndefined3.default)(postId)) || siteId === nextProps.siteId && postId === nextProps.postId && (0, _isEqual3.default)(fields, nextProps.fields) && heartbeat === nextProps.heartbeat) {
				return;
			}

			this.requestPostStats(nextProps);
		}
	}, {
		key: 'requestPostStats',
		value: function requestPostStats(props) {
			var siteId = props.siteId,
			    postId = props.postId,
			    fields = props.fields,
			    heartbeat = props.heartbeat;

			props.requestPostStats(siteId, postId, fields);
			this.clearInterval();
			if (heartbeat) {
				this.interval = setInterval(function () {
					props.requestPostStats(siteId, postId, fields);
				}, heartbeat);
			}
		}
	}, {
		key: 'clearInterval',
		value: function (_clearInterval) {
			function clearInterval() {
				return _clearInterval.apply(this, arguments);
			}

			clearInterval.toString = function () {
				return _clearInterval.toString();
			};

			return clearInterval;
		}(function () {
			if (this.interval) {
				clearInterval(this.interval);
			}
		})
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryPostStats;
}(_react.Component);

QueryPostStats.defaultProps = {
	requestPostStats: function requestPostStats() {},
	heartbeat: 0
};
QueryPostStats.propTypes = {
	siteId: _react.PropTypes.number,
	postId: _react.PropTypes.number,
	fields: _react.PropTypes.array,
	requestingPostStats: _react.PropTypes.bool,
	requestPostStats: _react.PropTypes.func,
	heartbeat: _react.PropTypes.number
};
exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId,
	    postId = _ref.postId,
	    fields = _ref.fields;

	return {
		requestingPostStats: (0, _selectors.isRequestingPostStats)(state, siteId, postId, fields)
	};
}, { requestPostStats: _actions.requestPostStats })(QueryPostStats);
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

/***/ "./client/components/infinite-list/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _detectHistoryNavigation = __webpack_require__("./client/lib/detect-history-navigation/index.js");

var _detectHistoryNavigation2 = _interopRequireDefault(_detectHistoryNavigation);

var _actions = __webpack_require__("./client/lib/infinite-list/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _positionsStore = __webpack_require__("./client/lib/infinite-list/positions-store.js");

var _positionsStore2 = _interopRequireDefault(_positionsStore);

var _scrollStore = __webpack_require__("./client/lib/infinite-list/scroll-store.js");

var _scrollStore2 = _interopRequireDefault(_scrollStore);

var _scrollHelper = __webpack_require__("./client/components/infinite-list/scroll-helper.js");

var _scrollHelper2 = _interopRequireDefault(_scrollHelper);

var _scrollTo = __webpack_require__("./client/lib/scroll-to/index.js");

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _reactSmartSetState = __webpack_require__("./client/lib/react-smart-set-state/index.js");

var _reactSmartSetState2 = _interopRequireDefault(_reactSmartSetState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('calypso:infinite-list');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


module.exports = _react2.default.createClass({
	displayName: 'InfiniteList',

	lastScrollTop: -1,
	scrollRAFHandle: false,
	scrollHelper: null,
	isScrolling: false,

	propTypes: {
		items: _react2.default.PropTypes.array.isRequired,
		fetchingNextPage: _react2.default.PropTypes.bool.isRequired,
		lastPage: _react2.default.PropTypes.bool.isRequired,
		guessedItemHeight: _react2.default.PropTypes.number.isRequired,
		itemsPerRow: _react2.default.PropTypes.number,
		fetchNextPage: _react2.default.PropTypes.func.isRequired,
		getItemRef: _react2.default.PropTypes.func.isRequired,
		renderItem: _react2.default.PropTypes.func.isRequired,
		renderLoadingPlaceholders: _react2.default.PropTypes.func.isRequired,
		renderTrailingItems: _react2.default.PropTypes.func,
		context: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.bool])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			itemsPerRow: 1,
			renderTrailingItems: function renderTrailingItems() {}
		};
	},


	smartSetState: _reactSmartSetState2.default,

	componentWillMount: function componentWillMount() {
		var url = _page2.default.current;
		var newState = void 0,
		    scrollPosition = void 0;

		if (_detectHistoryNavigation2.default.loadedViaHistory()) {
			newState = _positionsStore2.default.get(url);
			scrollPosition = _scrollStore2.default.get(url);
		}

		if (newState && scrollPosition) {
			debug('overriding scrollTop:', scrollPosition);
			newState.scrollTop = scrollPosition;
		}

		this.scrollHelper = new _scrollHelper2.default(this.boundsForRef);
		this.scrollHelper.props = this.props;
		if (this._contextLoaded()) {
			this._scrollContainer = this.props.context || window;
			this.scrollHelper.updateContextHeight(this.getCurrentContextHeight());
		}

		this.isScrolling = false;

		if (newState) {
			debug('infinite-list positions loaded from store');
		} else {
			debug('infinite-list positions reset for new list');
			newState = {
				firstRenderedIndex: 0,
				topPlaceholderHeight: 0,
				lastRenderedIndex: this.scrollHelper.initialLastRenderedIndex(),
				bottomPlaceholderHeight: 0,
				scrollTop: 0
			};
		}
		debug('infinite list mounting', newState);
		this.setState(newState);
	},
	componentDidMount: function componentDidMount() {
		if (this._contextLoaded()) {
			this._setContainerY(this.state.scrollTop);
		}

		// only override browser history scroll if navigated via history
		if (_detectHistoryNavigation2.default.loadedViaHistory()) {
			this._overrideHistoryScroll();
		}
		debug('setting scrollTop:', this.state.scrollTop);
		this.updateScroll({
			triggeredByScroll: false
		});
		if (this._contextLoaded()) {
			this._scrollContainer.addEventListener('scroll', this.onScroll);
		}
	},
	componentWillReceiveProps: function componentWillReceiveProps(newProps) {
		this.scrollHelper.props = newProps;

		// New item may have arrived, should we change the rendered range?
		if (!this.isScrolling) {
			this.cancelAnimationFrame();
			this.updateScroll({
				triggeredByScroll: false
			});
		}

		// if the context changes, remove our scroll listener
		if (newProps.context === this.props.context) {
			return;
		}
		if (this._contextLoaded()) {
			this._scrollContainer.removeEventListener('scroll', this._resetScroll);
		}
	},
	componentDidUpdate: function componentDidUpdate(prevProps) {
		if (!this._contextLoaded()) {
			return;
		}

		if (this.props.context !== prevProps.context) {
			// remove old listener
			if (this._scrollContainer) {
				this._scrollContainer.removeEventListener('scroll', this.onScroll);
			}

			// add new listeners
			this._scrollContainer = this.props.context || window;
			this._scrollContainer.addEventListener('scroll', this.onScroll);

			// only override browser history scroll if navigated via history
			if (_detectHistoryNavigation2.default.loadedViaHistory()) {
				this._overrideHistoryScroll();
			}
		}

		// we may have guessed item heights wrong - now we have real heights
		if (!this.isScrolling) {
			this.cancelAnimationFrame();
			this.updateScroll({
				triggeredByScroll: false
			});
		}
	},
	reset: function reset() {
		this.cancelAnimationFrame();

		this.scrollHelper = new _scrollHelper2.default(this.boundsForRef);
		this.scrollHelper.props = this.props;
		if (this._contextLoaded()) {
			this._scrollContainer = this.props.context || window;
			this.scrollHelper.updateContextHeight(this.getCurrentContextHeight());
		}

		this.isScrolling = false;

		this.setState({
			firstRenderedIndex: 0,
			topPlaceholderHeight: 0,
			lastRenderedIndex: this.scrollHelper.initialLastRenderedIndex(),
			bottomPlaceholderHeight: 0,
			scrollTop: 0
		});
	},
	componentWillUnmount: function componentWillUnmount() {
		this._scrollContainer.removeEventListener('scroll', this.onScroll);
		this._scrollContainer.removeEventListener('scroll', this._resetScroll);
		this.cancelAnimationFrame();
	},
	cancelAnimationFrame: function cancelAnimationFrame() {
		if (this.scrollRAFHandle) {
			window.cancelAnimationFrame(this.scrollRAFHandle);
			this.scrollRAFHandle = null;
		}
		this.lastScrollTop = -1;
	},
	onScroll: function onScroll() {
		if (this.isScrolling) {
			return;
		}
		if (!this.scrollRAFHandle && this.getCurrentScrollTop() !== this.lastScrollTop) {
			this.scrollRAFHandle = window.requestAnimationFrame(this.scrollChecks);
		}
	},
	getCurrentContextHeight: function getCurrentContextHeight() {
		var context = this.props.context || window.document.documentElement;
		return context.clientHeight;
	},
	getCurrentScrollTop: function getCurrentScrollTop() {
		if (this.props.context) {
			debug('getting scrollTop from context');
			return this.props.context.scrollTop;
		}
		return window.pageYOffset;
	},
	scrollChecks: function scrollChecks() {
		// isMounted is necessary to prevent running this before it is mounted,
		// which could be triggered by data-observe mixin.
		if (!this.isMounted() || this.getCurrentScrollTop() === this.lastScrollTop) {
			this.scrollRAFHandle = null;
			return;
		}
		this.updateScroll({
			triggeredByScroll: true
		});
	},
	scrollToTop: function scrollToTop() {
		var _this = this;

		this.cancelAnimationFrame();
		this.isScrolling = true;
		if (this.props.context && this.props.context !== window) {
			this.props.context.scrollTop = 0;
			this.updateScroll({ triggeredByScroll: false });
			this.isScrolling = false;
		} else {
			(0, _scrollTo2.default)({
				x: 0,
				y: 0,
				duration: 250,
				onComplete: function onComplete() {
					if (_this.isMounted()) {
						_this.updateScroll({ triggeredByScroll: false });
					}
					_this.isScrolling = false;
				}
			});
		}
	},
	updateScroll: function updateScroll(options) {
		var url = _page2.default.current;
		var newState = void 0;

		if (!this._contextLoaded()) {
			return;
		}

		this.lastScrollTop = this.getCurrentScrollTop();
		_actions2.default.storeScroll(url, this.lastScrollTop);
		this.scrollHelper.updateContextHeight(this.getCurrentContextHeight());
		this.scrollHelper.scrollPosition = this.lastScrollTop;
		this.scrollHelper.triggeredByScroll = options.triggeredByScroll;
		this.scrollHelper.updatePlaceholderDimensions();

		this.scrollHelper.scrollChecks(this.state);

		if (this.scrollHelper.stateUpdated) {
			newState = {
				firstRenderedIndex: this.scrollHelper.firstRenderedIndex,
				topPlaceholderHeight: this.scrollHelper.topPlaceholderHeight,
				lastRenderedIndex: this.scrollHelper.lastRenderedIndex,
				bottomPlaceholderHeight: this.scrollHelper.bottomPlaceholderHeight,
				scrollTop: this.lastScrollTop
			};

			// Force one more check on next animation frame,
			// item heights may have been guessed wrong.
			this.lastScrollTop = -1;

			debug('new scroll positions', newState, this.state);
			this.smartSetState(newState);
			_actions2.default.storePositions(url, newState);
		}

		this.scrollRAFHandle = window.requestAnimationFrame(this.scrollChecks);
	},
	boundsForRef: function boundsForRef(ref) {
		if (ref in this.refs) {
			return _reactDom2.default.findDOMNode(this.refs[ref]).getBoundingClientRect();
		}
		return null;
	},


	/**
  * Returns a list of visible item indexes. This includes any items that are
  * partially visible in the viewport.
  * @param {Object} options - offset properties
  * @param {Integer} options.offsetTop - in pixels, 0 if unspecified
  * @param {Integer} options.offsetBottom - in pixels, 0 if unspecified
  * @returns {Array} This list of indexes
  */
	getVisibleItemIndexes: function getVisibleItemIndexes(options) {
		var container = _reactDom2.default.findDOMNode(this),
		    visibleItemIndexes = [],
		    firstIndex = this.state.firstRenderedIndex,
		    lastIndex = this.state.lastRenderedIndex,
		    offsetTop = options && options.offsetTop ? options.offsetTop : 0;
		var windowHeight = void 0,
		    rect = void 0,
		    children = void 0,
		    i = void 0,
		    offsetBottom = options && options.offsetBottom ? options.offsetBottom : 0;

		offsetBottom = offsetBottom || 0;
		if (lastIndex > -1) {
			// stored item heights are not reliable at all in scroll helper,
			// for this first pass, do bounds checks on children
			children = container.children;
			// skip over first and last child since these are spacers.
			for (i = 1; i < children.length - 1; i++) {
				rect = container.children[i].getBoundingClientRect();
				windowHeight = window.innerHeight || document.documentElement.clientHeight;
				if (rect.top < 0 && Math.abs(rect.top) < rect.height - offsetTop || rect.top > 0 && rect.top < windowHeight - offsetBottom) {
					visibleItemIndexes.push({
						index: firstIndex + i - 1,
						bounds: rect
					});
				}
			}
		}
		return visibleItemIndexes;
	},
	render: function render() {
		var propsToTransfer = (0, _omit3.default)(this.props, (0, _keys2.default)(this.constructor.propTypes)),
		    spacerClassName = 'infinite-list__spacer';
		var i = void 0,
		    lastRenderedIndex = this.state.lastRenderedIndex,
		    itemsToRender = [];

		if (lastRenderedIndex === -1 || lastRenderedIndex > this.props.items.length - 1) {
			debug('resetting lastRenderedIndex, currently at %s, %d items', lastRenderedIndex, this.props.items.length);
			lastRenderedIndex = Math.min(this.state.firstRenderedIndex + this.scrollHelper.initialLastRenderedIndex(), this.props.items.length - 1);
			debug('reset lastRenderedIndex to %s', lastRenderedIndex);
		}

		debug('rendering %d to %d', this.state.firstRenderedIndex, lastRenderedIndex);

		for (i = this.state.firstRenderedIndex; i <= lastRenderedIndex; i++) {
			itemsToRender.push(this.props.renderItem(this.props.items[i], i));
		}

		if (this.props.fetchingNextPage) {
			itemsToRender = itemsToRender.concat(this.props.renderLoadingPlaceholders());
		}

		return _react2.default.createElement(
			'div',
			propsToTransfer,
			_react2.default.createElement('div', { ref: 'topPlaceholder',
				className: spacerClassName,
				style: { height: this.state.topPlaceholderHeight } }),
			itemsToRender,
			this.props.renderTrailingItems(),
			_react2.default.createElement('div', { ref: 'bottomPlaceholder',
				className: spacerClassName,
				style: { height: this.state.bottomPlaceholderHeight } })
		);
	},
	_setContainerY: function _setContainerY(position) {
		if (this.props.context && this.props.context !== window) {
			this.props.context.scrollTop = position;
			return;
		}
		window.scrollTo(0, position);
	},


	/**
  * We are manually setting the scroll position to the last remembered one, so we
  * want to override the scroll position that would otherwise get applied from
  * HTML5 history.
  */
	_overrideHistoryScroll: function _overrideHistoryScroll() {
		if (!this._contextLoaded()) {
			return;
		}
		this._scrollContainer.addEventListener('scroll', this._resetScroll);
	},
	_resetScroll: function _resetScroll(event) {
		var position = this.state.scrollTop;
		if (!this._contextLoaded()) {
			return;
		}
		debug('history setting scroll position:', event);
		this._setContainerY(position);
		this._scrollContainer.removeEventListener('scroll', this._resetScroll);
		debug('override scroll position from HTML5 history popstate:', position);
	},


	/**
  * Determine whether context is available or still being rendered.
  * @return {bool} whether context is available
  */
	_contextLoaded: function _contextLoaded() {
		return this.props.context || this.props.context === false || !('context' in this.props);
	}
});

/***/ }),

/***/ "./client/components/infinite-list/scroll-helper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('calypso:infinite-list:helper');

// Scrolling algorithm extracted as separate object
// The purpose of extracting it is to make it testable and help the methods
// to be shorter and readable.
/**
 * External dependencies
 */

var ScrollHelper = function () {
	function ScrollHelper(boundsForRef) {
		(0, _classCallCheck3.default)(this, ScrollHelper);

		this.boundsForRef = boundsForRef;
		this.itemHeights = {};

		// Hide levels and context height
		this.contextHeight = null;
		this.topHideLevelHard = null;
		this.topHideLevelSoft = null;
		this.bottomHideLevelHard = null;
		this.bottomHideLevelSoft = null;
		this.bottomHideLevelUltraSoft = null;

		// set by component
		this.props = null;
		this.scrollPosition = null;

		// queried directly from placeholder rects
		this.containerTop = null;
		this.topPlaceholderHeight = null;
		this.bottomPlaceholderHeight = null;
		this.containerBottom = null;

		this.stateUpdated = null;
		this.firstRenderedIndex = null;
		this.lastRenderedIndex = null;
	}

	(0, _createClass3.default)(ScrollHelper, [{
		key: 'storedItemHeight',
		value: function storedItemHeight(itemKey) {
			var height = this.props.guessedItemHeight;

			if (itemKey in this.itemHeights) {
				height = this.itemHeights[itemKey];
			}

			return height;
		}
	}, {
		key: 'forEachInRow',
		value: function forEachInRow(index, callback, context) {
			if ('function' !== typeof callback) {
				return;
			}

			if (context) {
				callback = callback.bind(context);
			}

			var firstIndexInRow = index - index % this.props.itemsPerRow,
			    lastIndexInRow = Math.min(firstIndexInRow + this.props.itemsPerRow, this.props.items.length) - 1;
			for (var i = firstIndexInRow; i <= lastIndexInRow; i++) {
				callback(this.props.items[i], i);
			}
		}
	}, {
		key: 'storeRowItemHeights',
		value: function storeRowItemHeights(fromDirection, index) {
			this.forEachInRow(index, function (item) {
				var itemKey = this.props.getItemRef(item),
				    itemBounds = this.boundsForRef(itemKey);
				var height = void 0;

				if (itemBounds) {
					if ('bottom' === fromDirection) {
						height = this.containerBottom - this.bottomPlaceholderHeight - itemBounds.top;
					} else {
						height = itemBounds.bottom - (this.containerTop + this.topPlaceholderHeight);
					}
				} else {
					height = this.props.guessedItemHeight;
				}

				this.itemHeights[itemKey] = height;
			}, this);
		}
	}, {
		key: 'deleteRowItemHeights',
		value: function deleteRowItemHeights(index) {
			var _this = this;

			this.forEachInRow(index, function (item) {
				var itemKey = _this.props.getItemRef(item);
				delete _this.itemHeights[itemKey];
			}, this);
		}
	}, {
		key: 'getRowHeight',
		value: function getRowHeight(index) {
			var _this2 = this;

			var maxHeight = 0;

			this.forEachInRow(index, function (item) {
				var itemKey = _this2.props.getItemRef(item),
				    height = _this2.storedItemHeight(itemKey);

				maxHeight = Math.max(maxHeight, height);
			}, this);

			return maxHeight;
		}
	}, {
		key: 'updateContextHeight',
		value: function updateContextHeight(contextHeight) {
			if (this.contextHeight === contextHeight) {
				return;
			}

			this.contextHeight = contextHeight;

			this.topHideLevelHard = Math.min(-1 * contextHeight, -5 * this.props.guessedItemHeight);

			this.topHideLevelSoft = Math.min(-2 * contextHeight, -10 * this.props.guessedItemHeight);

			this.bottomHideLevelHard = contextHeight + Math.max(contextHeight, 5 * this.props.guessedItemHeight);

			this.bottomHideLevelSoft = contextHeight + Math.max(2 * contextHeight, 10 * this.props.guessedItemHeight);

			this.bottomHideLevelUltraSoft = contextHeight + Math.max(3 * contextHeight, 15 * this.props.guessedItemHeight);
		}
	}, {
		key: 'initialLastRenderedIndex',
		value: function initialLastRenderedIndex() {
			return Math.min(this.props.items.length - 1, Math.floor(this.bottomHideLevelSoft / this.props.guessedItemHeight) - 1);
		}
	}, {
		key: 'updatePlaceholderDimensions',
		value: function updatePlaceholderDimensions() {
			var topPlaceholderRect = this.boundsForRef('topPlaceholder'),
			    bottomPlaceholderRect = this.boundsForRef('bottomPlaceholder');

			this.topPlaceholderHeight = topPlaceholderRect.height;
			this.containerTop = topPlaceholderRect.top;

			this.bottomPlaceholderHeight = bottomPlaceholderRect.height;
			// It is important to use placeholder to get container bottom.
			// Container node is reported longer than it should be in mobile Safari 7.0
			this.containerBottom = bottomPlaceholderRect.bottom;
		}
	}, {
		key: 'scrollChecks',
		value: function scrollChecks(state) {
			this.reset(state);

			this.adjustLastRenderedIndex();

			if (this.shouldHideItemsAbove()) {
				this.hideItemsAbove();
			} else if (this.shouldShowItemsAbove()) {
				this.showItemsAbove();
			}

			if (this.shouldHideItemsBelow()) {
				this.hideItemsBelow();
			} else if (this.shouldShowItemsBelow()) {
				this.showItemsBelow();
			}

			if (this.shouldLoadNextPage()) {
				this.loadNextPage();
			}
		}
	}, {
		key: 'reset',
		value: function reset(state) {
			this.stateUpdated = false;
			this.firstRenderedIndex = state.firstRenderedIndex;
			this.lastRenderedIndex = state.lastRenderedIndex;
		}
	}, {
		key: 'adjustLastRenderedIndex',
		value: function adjustLastRenderedIndex() {
			// last index -1 means everything is rendered - it can happen when
			// item count is not known when component is mounted
			var offset = this.initialLastRenderedIndex(),
			    lastIndex = this.lastRenderedIndex || 0,
			    // fixes NaN
			firstIndex = this.firstRenderedIndex || 0,
			    // fixes NaN
			itemCount = this.props.items.length;
			var newIndex = lastIndex;

			if (itemCount === 0) {
				newIndex = -1;
			}

			if (lastIndex >= itemCount) {
				newIndex = Math.min(firstIndex + offset, itemCount - 1);
			}

			if (newIndex === -1 && itemCount > 0 && firstIndex === 0) {
				newIndex = offset;
			}

			if (newIndex !== this.lastRenderedIndex) {
				this.stateUpdated = true;
				this.lastRenderedIndex = newIndex;
			}
		}
	}, {
		key: 'shouldHideItemsAbove',
		value: function shouldHideItemsAbove() {
			//
			// Hiding Item Above Chart
			//
			//       +---- container top relative to context - value below zero
			//       |
			//       |  placeholder
			//       |
			//       +---- placeholder bottom edge (before) = container top + placeholder height
			//       |
			//       | item to be hidden
			//       |
			//       +----
			//       |
			//  -----|- soft hide limit = - 2 * context height
			//       |
			//       | item to be hidden
			//       |
			//       +----
			//       |
			//       | last item to be hidden
			//       |
			//       +---- new placeholder bottom edge
			//       |
			//  -----|- hard hide limit = -1 * context height
			//       |
			//       | this item will stay
			//       |
			//       +----
			//       |
			//       |
			//       |
			//       |
			//  -----|- context top = 0
			//       |
			//
			return this.containerTop + this.topPlaceholderHeight < this.topHideLevelSoft;
		}
	}, {
		key: 'hideItemsAbove',
		value: function hideItemsAbove() {
			var rowHeight = void 0,
			    rowBottom = void 0;

			while (this.firstRenderedIndex < this.props.items.length) {
				this.storeRowItemHeights('top', this.firstRenderedIndex);
				rowHeight = this.getRowHeight(this.firstRenderedIndex);
				rowBottom = this.containerTop + this.topPlaceholderHeight + rowHeight;

				if (rowBottom > this.topHideLevelHard) {
					this.deleteRowItemHeights(this.firstRenderedIndex);
					break;
				}

				this.topPlaceholderHeight += rowHeight;
				this.firstRenderedIndex += this.props.itemsPerRow;
				this.stateUpdated = true;
				debug('hiding top item', rowHeight, this.topPlaceholderHeight);
			}
		}
	}, {
		key: 'shouldShowItemsAbove',
		value: function shouldShowItemsAbove() {
			//
			// Showing Item Above Chart
			//
			//       +---- container top relative to context - value below zero
			//       |
			//       |
			//       |
			//       |
			//  -----|- soft hide limit = - 2 * context height
			//       |
			//       +---- new placeholder bottom
			//       |
			//       | Last item to be shown
			//       |
			//       +----
			//       |
			//  -----|- hard hide limit = -1 * context height
			//       |
			//       +----
			//       |
			//       | Item to be shown
			//       |
			//       +---- placeholder bottom when check started
			//       |
			//  -----|- context top = 0
			//       |
			//
			return this.containerTop + this.topPlaceholderHeight > this.topHideLevelHard;
		}
	}, {
		key: 'showItemsAbove',
		value: function showItemsAbove() {
			var rowHeight = void 0,
			    newPlaceholderBottom = void 0;

			while (this.firstRenderedIndex > 0) {
				rowHeight = this.getRowHeight(this.firstRenderedIndex - this.props.itemsPerRow);
				newPlaceholderBottom = this.containerTop + this.topPlaceholderHeight - rowHeight;

				if (newPlaceholderBottom < this.topHideLevelSoft) {
					break;
				}

				this.deleteRowItemHeights(this.firstRenderedIndex - this.props.itemsPerRow);
				this.firstRenderedIndex -= this.props.itemsPerRow;
				this.firstRenderedIndex = Math.max(0, this.firstRenderedIndex);
				if (this.firstRenderedIndex <= 0) {
					// never allow top placeholder when everything is shown
					this.topPlaceholderHeight = 0;
				} else {
					this.topPlaceholderHeight = Math.max(0, this.topPlaceholderHeight - rowHeight);
				}

				this.stateUpdated = true;
				debug('showing top item', rowHeight, this.topPlaceholderHeight);
			}
		}
	}, {
		key: 'shouldHideItemsBelow',
		value: function shouldHideItemsBelow() {
			//
			// Hiding Items Below Chart
			//
			//       |
			//  -----|- context bottom = 1 * context height, e.g. 1000
			//       |
			//       +----
			//       |
			//       | Item
			//       |
			//       +----
			//       |
			//  -----|- hard hide limit, e.g. 2000
			//       |
			//       +---- new placeholder top
			//       |
			//       | Last item to be hidden
			//       |
			//       +----
			//       |
			//  -----|- soft hide limit, e.g. 3000
			//       |
			//       +----
			//       |
			//       | Item to be hidden
			//       |
			//       +----
			//       |
			//  -----|- 3rd hide limit, e.g. 4000
			//       |
			//       | Item to be hidden
			//       |
			//       +---- placeholder top when check started
			//       |
			//       |
			//       | Bottom placeholder
			//       |
			//       +---- container bottom relative to context, e.g. 5000
			//
			var placeholderTop = this.containerBottom - this.bottomPlaceholderHeight;
			return placeholderTop > this.bottomHideLevelUltraSoft;
		}
	}, {
		key: 'hideItemsBelow',
		value: function hideItemsBelow() {
			var rowTop = void 0,
			    rowHeight = void 0;

			while (this.lastRenderedIndex >= 0) {
				this.storeRowItemHeights('bottom', this.lastRenderedIndex);
				rowHeight = this.getRowHeight(this.lastRenderedIndex);
				rowTop = this.containerBottom - this.bottomPlaceholderHeight - rowHeight;

				if (rowTop < this.bottomHideLevelHard) {
					this.deleteRowItemHeights(this.lastRenderedIndex);
					break;
				}

				this.bottomPlaceholderHeight += rowHeight;
				this.lastRenderedIndex -= this.props.itemsPerRow;
				this.stateUpdated = true;
				debug('hiding bottom item', rowHeight, this.bottomPlaceholderHeight);
			}
		}
	}, {
		key: 'shouldShowItemsBelow',
		value: function shouldShowItemsBelow() {
			var placeholderTop = this.containerBottom - this.bottomPlaceholderHeight;
			return placeholderTop < this.bottomHideLevelHard;
		}
	}, {
		key: 'showItemsBelow',
		value: function showItemsBelow() {
			var rowHeight = void 0,
			    itemTop = void 0,
			    placeholderTop = void 0;

			while (this.lastRenderedIndex < this.props.items.length - 1) {
				rowHeight = this.getRowHeight(this.lastRenderedIndex + this.props.itemsPerRow);
				placeholderTop = this.containerBottom - this.bottomPlaceholderHeight;
				itemTop = placeholderTop + rowHeight;

				if (itemTop > this.bottomHideLevelSoft &&
				// always show at least one item when placholder top is above hard limit
				placeholderTop > this.bottomHideLevelHard) {
					break;
				}

				this.deleteRowItemHeights(this.lastRenderedIndex + this.props.itemsPerRow);
				if (this.bottomPlaceholderHeight - rowHeight < 0) {
					this.containerBottom += rowHeight - this.bottomPlaceholderHeight;
					this.bottomPlaceholderHeight = 0;
				} else {
					this.bottomPlaceholderHeight -= rowHeight;
				}
				this.lastRenderedIndex += this.props.itemsPerRow;
				this.lastRenderedIndex = Math.min(this.lastRenderedIndex, this.props.items.length - 1);

				// if everything is shown, then there should be no placeholder
				if (this.lastRenderedIndex >= this.props.items.length - 1) {
					this.bottomPlaceholderHeight = 0;
				}

				this.stateUpdated = true;
				debug('showing bottom item', rowHeight, this.bottomPlaceholderHeight);
			}
		}
	}, {
		key: 'shouldLoadNextPage',
		value: function shouldLoadNextPage() {
			if (this.props.fetchingNextPage || this.props.lastPage) {
				return false;
			}

			return this.bottomPlaceholderHeight === 0 && this.containerBottom < this.bottomHideLevelHard;
		}
	}, {
		key: 'loadNextPage',
		value: function loadNextPage() {
			var _this3 = this;

			var triggeredByScroll = this.triggeredByScroll;

			debug('fetching next page', this.containerBottom, this.bottomPlaceholderHeight);

			// Consider all page fetches once user starts scrolling as triggered by scroll
			// Same condition check is in lib/mixins/infinite-scroll loadNextPage
			if (this.scrollPosition > this.contextHeight) {
				triggeredByScroll = true;
			}

			// scroll check may be triggered while dispatching an action,
			// we cannot create new action while dispatching old one
			setTimeout(function () {
				// checking these values again because we shifted the fetch to the next stack
				if (_this3.props.fetchingNextPage || _this3.props.lastPage) {
					return false;
				}
				_this3.props.fetchNextPage({
					triggeredByScroll: triggeredByScroll
				});
			}, 0);
		}
	}]);
	return ScrollHelper;
}();

module.exports = ScrollHelper;

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

/***/ "./client/components/list-end/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListEnd;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line wpcalypso/jsx-classname-namespace
var listEnd = _react2.default.createElement("div", { className: "list-end" }); /**
                                                                                * External dependencies
                                                                                */
function ListEnd() {
  return listEnd;
}
module.exports = exports["default"];

/***/ }),

/***/ "./client/components/post-excerpt/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _autoDirection = __webpack_require__("./client/components/auto-direction/index.jsx");

var _autoDirection2 = _interopRequireDefault(_autoDirection);

var _emojify = __webpack_require__("./client/components/emojify/index.jsx");

var _emojify2 = _interopRequireDefault(_emojify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PostExcerpt = _react2.default.createClass({
	displayName: 'PostExcerpt',


	propTypes: {
		content: _react2.default.PropTypes.string.isRequired,
		maxLength: _react2.default.PropTypes.number
	},

	defaultProps: {
		maxLength: 80
	},

	render: function render() {
		if (!this.props.content) {
			return null;
		}

		var classes = (0, _classnames2.default)({
			'post-excerpt': true,
			'is-long': this.props.content.length > this.props.maxLength
		});

		return _react2.default.createElement(
			_autoDirection2.default,
			null,
			_react2.default.createElement(
				_emojify2.default,
				null,
				_react2.default.createElement('div', {
					className: classes,
					dangerouslySetInnerHTML: { __html: this.props.content } // eslint-disable-line react/no-danger
				})
			)
		);
	}
});

exports.default = PostExcerpt;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/post-format/index.js":
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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
	aside: 'pages',
	image: 'image',
	video: 'video',
	quote: 'quote',
	link: 'link',
	gallery: 'image-multiple',
	audio: 'audio'
}; /**
    * External dependencies
    */

var PostFormat = function (_Component) {
	(0, _inherits3.default)(PostFormat, _Component);

	function PostFormat() {
		(0, _classCallCheck3.default)(this, PostFormat);
		return (0, _possibleConstructorReturn3.default)(this, (PostFormat.__proto__ || (0, _getPrototypeOf2.default)(PostFormat)).apply(this, arguments));
	}

	(0, _createClass3.default)(PostFormat, [{
		key: 'getIcon',
		value: function getIcon() {
			return icons[this.props.format];
		}
	}, {
		key: 'getLabel',
		value: function getLabel() {
			var _props = this.props,
			    format = _props.format,
			    translate = _props.translate;

			switch (format) {
				case 'aside':
					return translate('Aside');
				case 'image':
					return translate('Image');
				case 'video':
					return translate('Video');
				case 'quote':
					return translate('Quote');
				case 'link':
					return translate('Link');
				case 'gallery':
					return translate('Gallery');
				case 'audio':
					return translate('Audio');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var icon = this.getIcon();
			return icon ? _react2.default.createElement(
				'span',
				{ className: 'post-format__icon', title: this.getLabel() },
				_react2.default.createElement(_gridicons2.default, {
					icon: icon,
					size: this.props.size
				})
			) : null;
		}
	}]);
	return PostFormat;
}(_react.Component);

PostFormat.defaultProps = {
	format: 'standard',
	size: 24
};
exports.default = (0, _i18nCalypso.localize)(PostFormat);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/post-list-fetcher/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var postListStoreFactory = __webpack_require__("./client/lib/posts/post-list-store-factory.js"),
    PostContentImagesStore = __webpack_require__("./client/lib/posts/post-content-images-store.js"),
    Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    actions = __webpack_require__("./client/lib/posts/actions.js"),
    pollers = __webpack_require__("./client/lib/data-poller/index.js");

var PostListFetcher;

function dispatchQueryActions(postListStoreId, query) {
	var postListStore = postListStoreFactory(postListStoreId);
	actions.queryPosts(query, postListStoreId);

	if (postListStore.getPage() === 0) {
		actions.fetchNextPage(postListStoreId);
	}
}

function queryPosts(props) {
	var query = {
		type: props.type || 'post',
		siteId: props.siteId,
		status: props.status,
		author: props.author,
		search: props.search,
		category: props.category,
		tag: props.tag,
		exclude_tree: props.excludeTree,
		orderBy: props.orderBy,
		order: props.order,
		number: props.number,
		before: props.before,
		after: props.after
	};

	if (props.withCounts) {
		query.meta = 'counts';
	}

	// This is to avoid dispatching during a dispatch.
	// Not ideal nor a best practice
	if (Dispatcher.isDispatching()) {
		setTimeout(function () {
			dispatchQueryActions(props.postListStoreId, query);
		}, 0);
	} else {
		dispatchQueryActions(props.postListStoreId, query);
	}
}

function getPostsState(postListStoreId) {
	var postListStore = postListStoreFactory(postListStoreId);
	return {
		listId: postListStore.getID(),
		posts: postListStore.getAll(),
		postImages: PostContentImagesStore.getAll(),
		page: postListStore.getPage(),
		lastPage: postListStore.isLastPage(),
		loading: postListStore.isFetchingNextPage(),
		hasRecentError: postListStore.hasRecentError()
	};
}

function shouldQueryPosts(props, nextProps) {
	// evaluates props that are used to build the post-list query,
	// withImages is excluded because it is only used client-side

	return props.type !== nextProps.type || props.status !== nextProps.status || props.author !== nextProps.author || props.search !== nextProps.search || props.category !== nextProps.category || props.tag !== nextProps.tag || props.excludeTree !== nextProps.excludeTree || props.withCounts !== nextProps.withCounts || props.orderBy !== nextProps.orderBy || props.order !== nextProps.order || props.number !== nextProps.number || props.before !== nextProps.before || props.after !== nextProps.after || props.siteId !== nextProps.siteId || props.postListStoreId !== nextProps.postListStoreId;
}

PostListFetcher = React.createClass({
	displayName: 'PostListFetcher',


	propTypes: {
		children: React.PropTypes.element.isRequired,
		type: React.PropTypes.string,
		status: React.PropTypes.string,
		author: React.PropTypes.number,
		search: React.PropTypes.string,
		category: React.PropTypes.string,
		tag: React.PropTypes.string,
		siteId: React.PropTypes.number,
		withImages: React.PropTypes.bool,
		withCounts: React.PropTypes.bool,
		excludeTree: React.PropTypes.number,
		orderBy: React.PropTypes.oneOf(['title', 'date', 'modified', 'comment_count', 'ID']),
		order: React.PropTypes.oneOf(['ASC', 'DESC']),
		number: React.PropTypes.number,
		before: React.PropTypes.string,
		after: React.PropTypes.string,
		postListStoreId: React.PropTypes.string
	},

	getDefaultProps: function getDefaultProps() {
		return {
			orderBy: 'date',
			order: 'DESC',
			postListStoreId: 'default'
		};
	},

	componentWillMount: function componentWillMount() {
		var postListStore = postListStoreFactory(this.props.postListStoreId);
		postListStore.on('change', this.onPostsChange);
		if (this.props.withImages) {
			PostContentImagesStore.on('change', this.onPostsChange);
		}
		queryPosts(this.props);
	},

	componentDidMount: function componentDidMount() {
		var postListStore = postListStoreFactory(this.props.postListStoreId);
		this._poller = pollers.add(postListStore, actions.fetchUpdated, { interval: 60000 });
	},

	componentWillUnmount: function componentWillUnmount() {
		var postListStore = postListStoreFactory(this.props.postListStoreId);
		pollers.remove(this._poller);
		postListStore.off('change', this.onPostsChange);
		if (this.props.withImages) {
			PostContentImagesStore.off('change', this.onPostsChange);
		}
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		var listenerChange;

		if (shouldQueryPosts(this.props, nextProps)) {
			queryPosts(nextProps);
		}

		if (nextProps.withImages !== this.props.withImages) {
			listenerChange = nextProps.withImages ? 'on' : 'off';
			PostContentImagesStore[listenerChange]('change', this.onPostsChange);
		}
	},

	onPostsChange: function onPostsChange() {
		this.setState(getPostsState(this.props.postListStoreId));
	},

	render: function render() {
		// Clone the child element along and pass along state (containing data from the stores)
		return React.cloneElement(this.props.children, this.state);
	}

});

module.exports = PostListFetcher;

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

/***/ "./client/components/section-nav/segmented.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External Dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * Internal Dependencies
 */
var SegmentedControl = __webpack_require__("./client/components/segmented-control/index.jsx"),
    ControlItem = __webpack_require__("./client/components/segmented-control/item.jsx");

/**
 * Internal variables
 */
var _instance = 1;

/**
 * Main
 */
var NavSegmented = React.createClass({
	displayName: 'NavSegmented',


	propTypes: {
		label: React.PropTypes.string,
		hasSiblingControls: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			hasSiblingControls: false
		};
	},

	componentWillMount: function componentWillMount() {
		this.id = _instance;
		_instance++;
	},

	render: function render() {
		var segmentedClassName = classNames({
			'section-nav-group': true,
			'section-nav__segmented': true,
			'has-siblings': this.props.hasSiblingControls
		});

		return React.createElement(
			'div',
			{ className: segmentedClassName },
			this.props.label && React.createElement(
				'h6',
				{ className: 'section-nav-group__label' },
				this.props.label
			),
			React.createElement(
				SegmentedControl,
				null,
				this.getControlItems()
			)
		);
	},

	getControlItems: function getControlItems() {
		return React.Children.map(this.props.children, function (child, index) {
			return React.createElement(
				ControlItem,
				(0, _extends3.default)({}, child.props, {
					key: 'navSegmented-' + this.id + '-' + index
				}),
				child.props.children
			);
		}, this);
	}
});

module.exports = NavSegmented;

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

/***/ "./client/components/stat-update-indicator/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */

var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * Internal dependencies
 */
var StatUpdateIndicator = React.createClass({
	displayName: 'StatUpdateIndicator',


	propTypes: {
		children: React.PropTypes.node.isRequired,
		updateOn: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number, React.PropTypes.bool]).isRequired
	},

	getInitialState: function getInitialState() {
		return {
			updating: !this.props.updateOn
		};
	},

	componentDidMount: function componentDidMount() {
		this.clearTheUpdate();
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.updateOn !== nextProps.updateOn) {
			clearTimeout(this.clearingUpdateTimeout);

			this.setState({
				updating: true
			});
			this.clearTheUpdate();
		}
	},

	clearTheUpdate: function clearTheUpdate() {
		clearTimeout(this.clearingUpdateTimeout);

		this.clearingUpdateTimeout = setTimeout(function () {
			if (!this.isMounted()) {
				return;
			}

			this.setState({
				updating: false
			});
		}.bind(this), 800);
	},

	render: function render() {
		var className = classNames({
			'stat-update-indicator': true,
			'is-updating': this.state.updating
		});

		return React.createElement(
			'span',
			{ className: className },
			this.props.children
		);
	}
});

module.exports = StatUpdateIndicator;

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

/***/ "./client/lib/infinite-list/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    scrollStore = __webpack_require__("./client/lib/infinite-list/scroll-store.js"),
    positionsStore = __webpack_require__("./client/lib/infinite-list/positions-store.js");

/**
 * Module variables
 */
var _lastCalledPositions = null,
    _lastCalledScroll = null;

var THROTTLE_INTERVAL_MS = 1000;
var THROTTLE_OPTIONS = {
	leading: false
};

module.exports = {
	storePositions: (0, _throttle3.default)(function (url, positions) {
		if (!_lastCalledPositions) {
			setTimeout(function () {
				var storedPositions = positionsStore.get(_lastCalledPositions.url);
				if (!(0, _isEqual3.default)(_lastCalledPositions.positions, storedPositions)) {
					Dispatcher.handleViewAction({
						type: 'INFINITE_LIST_POSITION_CHANGED',
						url: _lastCalledPositions.url,
						positions: _lastCalledPositions.positions
					});
				}
				_lastCalledPositions = null;
			}, 0);
		}
		_lastCalledPositions = { url: url, positions: positions };
	}, THROTTLE_INTERVAL_MS, THROTTLE_OPTIONS),
	storeScroll: (0, _throttle3.default)(function (url, scrollPosition) {
		if (!_lastCalledScroll) {
			setTimeout(function () {
				var storedScroll = scrollStore.get(_lastCalledScroll.url);
				if (_lastCalledScroll.scrollPosition !== storedScroll) {
					Dispatcher.handleViewAction({
						type: 'SCROLL_CHANGED',
						url: _lastCalledScroll.url,
						scrollPosition: _lastCalledScroll.scrollPosition
					});
				}
				_lastCalledScroll = null;
			}, 0);
		}
		_lastCalledScroll = { url: url, scrollPosition: scrollPosition };
	}, THROTTLE_INTERVAL_MS, THROTTLE_OPTIONS)
};

/***/ }),

/***/ "./client/lib/infinite-list/positions-store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:infinite-list:positions-store'),
    Dispatcher = __webpack_require__("./client/dispatcher/index.js");

/**
 * Internal Dependencies
 */
var emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

/**
 * Module Variables
 */
var _infiniteListPositions = {},
    InfiniteListPositionsStore = {
	get: function get(url) {
		debug('positions-store:get(): ', url, _infiniteListPositions);
		return _infiniteListPositions[url];
	}
};

emitter(InfiniteListPositionsStore);

function storeInfiniteListPositions(url, positions) {
	var oldPositions = InfiniteListPositionsStore.get(url);
	debug('comparing positions:', url, oldPositions, positions);
	if ((0, _isEqual3.default)(oldPositions, positions)) {
		return;
	}

	debug('storing values:', url, positions);
	_infiniteListPositions[url] = positions;
	InfiniteListPositionsStore.emit('change');
}

InfiniteListPositionsStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.type) {
		case 'INFINITE_LIST_POSITION_CHANGED':
			storeInfiniteListPositions(action.url, action.positions);
			break;
	}
});

module.exports = InfiniteListPositionsStore;

/***/ }),

/***/ "./client/lib/infinite-list/scroll-store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External Dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js");

/**
 * Module Variables
 */
var _scrollStore = {},
    InfiniteListScrollStore = {
	get: function get(url) {
		return _scrollStore[url];
	}
};

function storeInfiniteListScrollPosition(url, scrollPosition) {
	var oldScrollPosition = InfiniteListScrollStore.get(url);
	if (oldScrollPosition === scrollPosition) {
		return;
	}
	_scrollStore[url] = scrollPosition;
}

InfiniteListScrollStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.type) {
		case 'SCROLL_CHANGED':
			storeInfiniteListScrollPosition(action.url, action.scrollPosition);
			break;

	}
});

module.exports = InfiniteListScrollStore;

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

/***/ "./client/lib/posts/post-content-images-store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var Emitter = __webpack_require__("./client/lib/mixins/emitter/index.js"),
    Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    utils = __webpack_require__("./client/lib/posts/utils.js"),
    PostsStore = __webpack_require__("./client/lib/posts/posts-store.js");

var _contentImages = {},
    PostContentImagesStore;

function scrapeAll(posts) {
	posts.forEach(scrapePost);
}
function scrapePost(post) {
	var imagesFromPost = (0, _pick3.default)(PostsStore.get(post.global_ID), 'content_images', 'canonical_image', 'featured_image', 'images', 'global_ID');
	utils.normalizeAsync(imagesFromPost, function (error, normalizedPostImages) {
		var cachedImages = PostContentImagesStore.get(normalizedPostImages.global_ID);
		if ((0, _isEqual3.default)(normalizedPostImages, cachedImages)) {
			return;
		}
		_contentImages[normalizedPostImages.global_ID] = normalizedPostImages;
		PostContentImagesStore.emit('change');
	});
}

PostContentImagesStore = {
	get: function get(postGlobalID) {
		return _contentImages[postGlobalID];
	},
	getAll: function getAll() {
		return _contentImages;
	}
};

Emitter(PostContentImagesStore);

PostContentImagesStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;

	Dispatcher.waitFor([PostsStore.dispatchToken]);

	switch (action.type) {
		case 'RECEIVE_POSTS_PAGE':
		case 'RECEIVE_UPDATED_POSTS':
			if (!action.error && action.data.posts) {
				scrapeAll(action.data.posts);
			}
			break;
		case 'RECEIVE_UPDATED_POST':
			if (!action.error) {
				scrapePost(action.post);
			}
			break;

	}
});

module.exports = PostContentImagesStore;

/***/ }),

/***/ "./client/lib/posts/post-counts-store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */

var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:posts:post-counts-store');

var sum = function sum(obj) {
	return (0, _keys2.default)(obj).reduce(function (_sum, key) {
		return _sum + parseFloat(obj[key]);
	}, 0);
};

/**
 * Internal dependencies
 */
var emitter = __webpack_require__("./client/lib/mixins/emitter/index.js"),
    PostListStore = __webpack_require__("./client/lib/posts/post-list-store-factory.js")(),
    PostsStore = __webpack_require__("./client/lib/posts/posts-store.js"),
    postUtils = __webpack_require__("./client/lib/posts/utils.js"),
    Dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _counts = {},
    PostCountsStore;

/**
 * Get siteId to use
 * @param {Integer} id - A site id (numeric site ID)
 * @return {Integer} - Same site passed as argument or if site id is null a site id returned from PostListStore
 */
function getSiteId(id) {
	return id || PostListStore.getSiteId();
}

/**
 * PostCountsStore
 */
PostCountsStore = {

	/**
  * Return statuses of current site
  *
  * @param {String|Number} [id] - site_ID
  * @param {Boolean} [scope] - `all` or `mine`
  * @return {Object} statuses
  */
	get: function get(id, scope) {
		var statuses, siteId;

		siteId = getSiteId(id);

		if (!siteId) {
			return null;
		}

		scope = scope || 'all';

		statuses = _counts[siteId] ? _counts[siteId][scope] : null;

		debug('[%s][%s] statuses: %o', siteId, scope, statuses);
		return statuses;
	},

	getTotalCount: function getTotalCount(id, scope) {
		var statuses, total, siteId;

		scope = scope || 'all';
		siteId = getSiteId(id);

		if (!siteId) {
			return null;
		}

		statuses = _counts[siteId] ? _counts[siteId][scope] : null;
		total = 0;

		if (statuses) {
			total = sum(statuses);
		}

		debug('[%s][%s] total: %o ', siteId, scope, total);

		return total;
	}
};

emitter(PostCountsStore);

PostCountsStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;
	var data = action.data;

	Dispatcher.waitFor([PostsStore.dispatchToken]);

	switch (action.type) {
		case 'RECEIVE_UPDATED_POSTS':
		case 'RECEIVE_POSTS_PAGE':
			if (data && data.meta && data.meta.data && data.meta.data.counts) {
				var responseSource = data.__sync && data.__sync.responseSource;
				setPostCounts(responseSource, data.meta.data.counts);
			}
			break;

		case 'RECEIVE_POST_COUNTS':
			if (data && data.counts && action.siteId) {
				var _responseSource = data.__sync && data.__sync.responseSource;
				setPostCounts(_responseSource, data, action.siteId);
			}
			break;

		case 'RECEIVE_UPDATED_POST':
			if (action.post && !postUtils.isPage(action.post)) {
				updateCountsWhenPostChanges(action.post, action.original);
			}
			break;
		case 'RECEIVE_POST_BEING_EDITED':
			if (action.post && !postUtils.isPage(action.post)) {
				if (action.original) {
					updateCountsWhenPostChanges(action.post, action.original);
				} else if (action.isNew) {
					updateCountsOnNewPost(action.post);
				}
			}
			break;
	}
});

/**
 * Store post counts
 *
 * @param {String} responseSource - source of response object; server|local
 * @param {Object} counts - post counts
 * @param {String|Number} siteID - identifier for the site
 * @return {void}
 */
function setPostCounts(responseSource, counts, siteID) {
	var siteId = getSiteId(siteID);

	if ((0, _isEqual3.default)(counts, _counts[siteId])) {
		return debug('No changes');
	}

	if (_counts[siteId] && responseSource === 'local') {
		debug('do not override post-counts with local response data');
		return;
	}

	_counts[siteId] = counts.counts;
	debug('[%s] update statuses: %o', siteId || 'All my sites', counts.counts);
	PostCountsStore.emit('change');
}

/**
 * Update post counts when a post is edited
 *
 * @param {Object} post - current post state
 * @param {Object} original - previous post state
 * @return {void}
 */
function updateCountsWhenPostChanges(post, original) {
	var siteId;

	if (!post || !original) {
		return debug('Post states are not defined');
	}

	siteId = post.site_ID;

	if (!siteId) {
		return debug('No site ID defined');
	}

	debug('comparing `%s` == `%s`', post.status, original.status);
	if (post.status === original.status) {
		debug('[%s] %o post has not changed its status', post.site_ID, post.ID);
		return;
	}

	changeCounts(post, original, PostCountsStore.get(siteId, 'all'));
	changeCounts(post, original, PostCountsStore.get(siteId, 'mine'));

	PostCountsStore.emit('change');
}

/*
 * Update post counts when a post is created
 *
 * @param {Object} post - current post state
 */
function updateCountsOnNewPost(post) {
	var siteId = post.site_ID;

	if (!siteId) {
		return debug('No site ID defined');
	}

	changeCounts(post, null, PostCountsStore.get(siteId, 'all'));
	changeCounts(post, null, PostCountsStore.get(siteId, 'mine'));

	PostCountsStore.emit('change');
}

/**
 * Modify statuses depending on the changes of the given post
 *
 * @param {Object} post - current post state
 * @param {Object} original - previous post state
 * @param {Object} counts - current counts
 * @return {void}
 */
function changeCounts(post, original, counts) {
	if (!post || !counts) {
		return;
	}

	if ('undefined' === typeof counts[post.status]) {
		debug('Add new post status `%s`', post.status);
		counts[post.status] = 0;
	}

	counts[post.status]++;
	debug('%s status incremented to %o', post.status, counts[post.status]);

	if (original) {
		counts[original.status]--;
		debug('%s status decremented to %o', original.status, counts[original.status]);
	}
}

/**
 * Expose module
 */
module.exports = PostCountsStore;

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

/***/ "./client/lib/url-search/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buildSearchUrl = undefined;

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

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _url = __webpack_require__("./node_modules/url/url.js");

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var debug = (0, _debug2.default)('calypso:url-search');

/**
 * Function for constructing the url to page to. Here are some examples:
 * 1. { uri: 'google.com', search:'hello' } --> 'google.com?s=hello'
 * 2. {
 *     uri: 'wordpress.com/read/search?q=reader+is+awesome',
 *     search: 'reader is super awesome'
 *     queryKey: 'q',
 *    } --> 'wordpress.com/read/search?q=reader+is+super+awesome'
 *
 * @param {Object} options the options object
 * @param {string} options.uri the base uri to modify and add a query to
 * @param {string} options.search the search term
 * @param {string} [options.queryKey = s] the key to place in the url.  defaults to s
 *
 * @returns {string} The built search url
 */
var buildSearchUrl = exports.buildSearchUrl = function buildSearchUrl(_ref) {
	var uri = _ref.uri,
	    search = _ref.search,
	    _ref$queryKey = _ref.queryKey,
	    queryKey = _ref$queryKey === undefined ? 's' : _ref$queryKey;

	var parsedUrl = (0, _pick3.default)(_url2.default.parse(uri, true), 'pathname', 'hash', 'query');

	if (search) {
		parsedUrl.query[queryKey] = search;
	} else {
		delete parsedUrl.query[queryKey];
	}

	return _url2.default.format(parsedUrl).replace(/\%20/g, '+');
};

var UrlSearch = function UrlSearch(Component) {
	var _class, _temp2;

	return _temp2 = _class = function (_React$Component) {
		(0, _inherits3.default)(_class, _React$Component);

		function _class() {
			var _ref2;

			var _temp, _this, _ret;

			(0, _classCallCheck3.default)(this, _class);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
				searchOpen: false
			}, _this.doSearch = function (query) {
				_this.setState({
					searchOpen: false !== query
				});

				if (_this.onSearch) {
					_this.onSearch(query);
					return;
				}

				var searchURL = buildSearchUrl({
					uri: window.location.href,
					search: query,
					queryKey: _this.props.queryKey
				});

				debug('search for: %s', query);
				if (_this.props.search && query) {
					debug('replacing URL: %s', searchURL);
					_page2.default.replace(searchURL);
				} else {
					debug('setting URL: %s', searchURL);
					(0, _page2.default)(searchURL);
				}
			}, _this.getSearchOpen = function () {
				return _this.state.searchOpen !== false || _this.props.search;
			}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
		}

		(0, _createClass3.default)(_class, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(_ref3) {
				var search = _ref3.search;

				return !search && this.setState({ searchOpen: false });
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
					doSearch: this.doSearch,
					getSearchOpen: this.getSearchOpen
				}));
			}
		}]);
		return _class;
	}(_react2.default.Component), _class.displayName = 'UrlSearch(' + (Component.displayName || Component.name || '') + ')', _class.defaultProps = {
		search: '',
		queryKey: 's'
	}, _temp2;
};

exports.default = UrlSearch;

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

/***/ "./client/my-sites/no-results/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

var noResults = React.createClass({
	displayName: 'noResults',


	getDefaultProps: function getDefaultProps() {
		return {
			text: 'No results',
			image: false
		};
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'no-results' },
			this.props.image ? React.createElement('img', { className: 'no-results__img', src: this.props.image }) : null,
			React.createElement(
				'span',
				null,
				this.props.text
			)
		);
	}
});

module.exports = noResults;

/***/ }),

/***/ "./client/my-sites/pages/blog-posts-page/index.jsx":
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

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var BlogPostsPage = function (_React$Component) {
	(0, _inherits3.default)(BlogPostsPage, _React$Component);

	function BlogPostsPage() {
		(0, _classCallCheck3.default)(this, BlogPostsPage);
		return (0, _possibleConstructorReturn3.default)(this, (BlogPostsPage.__proto__ || (0, _getPrototypeOf2.default)(BlogPostsPage)).apply(this, arguments));
	}

	(0, _createClass3.default)(BlogPostsPage, [{
		key: 'getPageProperty',
		value: function getPageProperty(_ref) {
			var pageId = _ref.pageId,
			    property = _ref.property;

			return this.props.pages.filter(function (page) {
				return page.ID === pageId;
			}).map(function (page) {
				return page[property];
			}).shift();
		}
	}, {
		key: 'getPostsPageLink',
		value: function getPostsPageLink(_ref2) {
			var isStaticHomePageWithNoPostsPage = _ref2.isStaticHomePageWithNoPostsPage,
			    isCurrentlySetAsHomepage = _ref2.isCurrentlySetAsHomepage;

			if (isStaticHomePageWithNoPostsPage) {
				return null;
			}

			if (!isCurrentlySetAsHomepage) {
				return this.getPageProperty({ pageId: this.props.postsPage, property: 'URL' });
			}

			return this.props.site.URL;
		}
	}, {
		key: 'renderPostsPageInfo',
		value: function renderPostsPageInfo(_ref3) {
			var isStaticHomePageWithNoPostsPage = _ref3.isStaticHomePageWithNoPostsPage,
			    isCurrentlySetAsHomepage = _ref3.isCurrentlySetAsHomepage;
			var translate = this.props.translate;


			if (isStaticHomePageWithNoPostsPage) {
				return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(_gridicons2.default, { size: 12, icon: 'not-visible', className: 'blog-posts-page__not-used-icon' }),
					this.props.translate('Not in use.') + ' ',
					this.props.translate('"%(pageTitle)s" is the front page.', {
						args: {
							pageTitle: this.getPageProperty({ pageId: this.props.frontPage, property: 'title' })
						}
					})
				);
			}

			if (isCurrentlySetAsHomepage) {
				return _react2.default.createElement(
					'span',
					null,
					_react2.default.createElement(_gridicons2.default, { size: 12, icon: 'house', className: 'blog-posts-page__front-page-icon' }),
					translate('Front page is showing your latest posts.')
				);
			}

			return _react2.default.createElement(
				'span',
				null,
				translate('"%(pageTitle)s" page is showing your latest posts.', {
					args: {
						pageTitle: this.getPageProperty({ pageId: this.props.postsPage, property: 'title' })
					}
				})
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var translate = this.props.translate;

			var isStaticHomePageWithNoPostsPage = this.props.frontPageType === 'page' && !this.props.postsPage;
			var isCurrentlySetAsHomepage = this.props.frontPageType === 'posts';

			return _react2.default.createElement(
				_card2.default,
				{ href: this.getPostsPageLink({ isStaticHomePageWithNoPostsPage: isStaticHomePageWithNoPostsPage, isCurrentlySetAsHomepage: isCurrentlySetAsHomepage }),
					target: '_blank', rel: 'noopener noreferrer', className: 'blog-posts-page' },
				_react2.default.createElement(
					'div',
					{ className: 'blog-posts-page__details' },
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)({
								'blog-posts-page__title': true,
								'is-disabled': isStaticHomePageWithNoPostsPage
							}) },
						translate('Blog Posts')
					),
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)({
								'blog-posts-page__info': true,
								'is-disabled': isStaticHomePageWithNoPostsPage
							}) },
						this.renderPostsPageInfo({ isStaticHomePageWithNoPostsPage: isStaticHomePageWithNoPostsPage, isCurrentlySetAsHomepage: isCurrentlySetAsHomepage })
					)
				)
			);
		}
	}]);
	return BlogPostsPage;
}(_react2.default.Component); /**
                               * External dependencies
                               */


BlogPostsPage.propTypes = {
	site: _react2.default.PropTypes.object,
	pages: _react2.default.PropTypes.array
};
BlogPostsPage.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _reactRedux.connect)(function (state, props) {
	return {
		frontPageType: (0, _selectors.getSiteFrontPageType)(state, props.site.ID),
		isFrontPage: (0, _selectors.getSiteFrontPageType)(state, props.site.ID) === 'posts',
		postsPage: (0, _selectors.getSitePostsPage)(state, props.site.ID),
		frontPage: (0, _selectors.getSiteFrontPage)(state, props.site.ID)
	};
})((0, _i18nCalypso.localize)(BlogPostsPage));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/pages/controller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _route = __webpack_require__("./client/lib/route/index.js");

var _route2 = _interopRequireDefault(_route);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _toTitleCase = __webpack_require__("./node_modules/to-title-case/index.js");

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _trackScrollPage = __webpack_require__("./client/lib/track-scroll-page/index.js");

var _trackScrollPage2 = _interopRequireDefault(_trackScrollPage);

var _actions = __webpack_require__("./client/state/document-head/actions.js");

var _reactHelpers = __webpack_require__("./client/lib/react-helpers/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/**
 * External Dependencies
 */
var controller = {

	pages: function pages(context) {
		var Pages = __webpack_require__("./client/my-sites/pages/main.jsx"),
		    siteID = _route2.default.getSiteFragment(context.path),
		    status = context.params.status,
		    search = context.query.s,
		    basePath = _route2.default.sectionify(context.path),
		    analyticsPageTitle = 'Pages',
		    baseAnalyticsPath;

		status = !status || status === siteID ? '' : status;
		// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
		context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('Site Pages', { textOnly: true })));

		if (siteID) {
			baseAnalyticsPath = basePath + '/:site';
		} else {
			baseAnalyticsPath = basePath;
		}

		if (status.length) {
			analyticsPageTitle += ' > ' + (0, _toTitleCase2.default)(status);
		} else {
			analyticsPageTitle += ' > Published';
		}

		_analytics2.default.pageView.record(baseAnalyticsPath, analyticsPageTitle);

		(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(Pages, {
			siteID: siteID,
			status: status,
			search: search,
			trackScrollPage: _trackScrollPage2.default.bind(null, baseAnalyticsPath, analyticsPageTitle, 'Pages')
		}), document.getElementById('primary'), context.store);
	}
};

module.exports = controller;

/***/ }),

/***/ "./client/my-sites/pages/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _sortBy2 = __webpack_require__("./node_modules/lodash/sortBy.js");

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _reduce2 = __webpack_require__("./node_modules/lodash/reduce.js");

var _reduce3 = _interopRequireDefault(_reduce2);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _groupBy2 = __webpack_require__("./node_modules/lodash/groupBy.js");

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _forEach2 = __webpack_require__("./node_modules/lodash/forEach.js");

var _forEach3 = _interopRequireDefault(_forEach2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Helpers used by sortPagesHierarchically but not exposed externally
/**
 * External dependencies
 */

var sortByMenuOrder = function sortByMenuOrder(list) {
	return (0, _sortBy3.default)(list, 'menu_order');
};
var getParentId = function getParentId(page) {
	return page.parent && page.parent.ID;
};

module.exports = {
	editLinkForPage: function editLinkForPage(page, site) {
		if (!(page && page.ID) || !(site && site.ID)) {
			return null;
		}

		return '/page/' + site.slug + '/' + page.ID;
	},

	statsLinkForPage: function statsLinkForPage(page, site) {
		if (!(page && page.ID) || !(site && site.ID)) {
			return null;
		}

		return '/stats/post/' + page.ID + '/' + site.slug;
	},

	// TODO: switch all usage of this function to `isFrontPage` in `state/pages/selectors`
	isFrontPage: function isFrontPage(page, site) {
		if (!page || !page.ID || !site || !site.options) {
			return false;
		}
		return site.options.page_on_front === page.ID;
	},

	sortPagesHierarchically: function sortPagesHierarchically(pages) {
		var pageIds = (0, _map3.default)(pages, 'ID');

		var pagesByParent = (0, _reduce3.default)((0, _groupBy3.default)(pages, getParentId), function (result, list, parentId) {
			if (!parentId || parentId === 'false' || !(0, _includes3.default)(pageIds, parseInt(parentId, 10))) {
				// If we don't have the parent in our list, promote the page to "top level"
				result.false = sortByMenuOrder((result.false || []).concat(list));
				return result;
			}

			result[parentId] = sortByMenuOrder(list);
			return result;
		}, {});

		var sortedPages = [];

		var insertChildren = function insertChildren(pageId, indentLevel) {
			var children = pagesByParent[pageId] || [];

			(0, _forEach3.default)(children, function (child) {
				sortedPages.push((0, _assign3.default)({}, child, { indentLevel: indentLevel }));
				insertChildren(child.ID, indentLevel + 1);
			});
		};

		(0, _forEach3.default)(pagesByParent.false, function (topLevelPage) {
			sortedPages.push(topLevelPage);
			insertChildren(topLevelPage.ID, 1);
		});

		return sortedPages;
	}
};

/***/ }),

/***/ "./client/my-sites/pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var page = __webpack_require__("./node_modules/page/index.js");

/**
 * Internal dependencies
 */
var controller = __webpack_require__("./client/my-sites/controller.js"),
    pagesController = __webpack_require__("./client/my-sites/pages/controller.js"),
    config = __webpack_require__("./client/config/index.js");

module.exports = function () {
	if (config.isEnabled('manage/pages')) {
		page('/pages/:status?/:domain?', controller.siteSelection, controller.navigation, pagesController.pages);
	}
};

/***/ }),

/***/ "./client/my-sites/pages/main.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _notices = __webpack_require__("./client/notices/index.js");

var _notices2 = _interopRequireDefault(_notices);

var _urlSearch = __webpack_require__("./client/lib/url-search/index.js");

var _urlSearch2 = _interopRequireDefault(_urlSearch);

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _pageList = __webpack_require__("./client/my-sites/pages/page-list.jsx");

var _pageList2 = _interopRequireDefault(_pageList);

var _search = __webpack_require__("./client/components/search/index.jsx");

var _search2 = _interopRequireDefault(_search);

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('calypso:my-sites:pages:pages');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */

var statuses = ['published', 'drafts', 'scheduled', 'trashed'];

var PagesMain = function (_React$Component) {
	(0, _inherits3.default)(PagesMain, _React$Component);

	function PagesMain() {
		(0, _classCallCheck3.default)(this, PagesMain);
		return (0, _possibleConstructorReturn3.default)(this, (PagesMain.__proto__ || (0, _getPrototypeOf2.default)(PagesMain)).apply(this, arguments));
	}

	(0, _createClass3.default)(PagesMain, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this._setWarning(this.props.site);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			debug('Pages React component mounted.');
		}
	}, {
		key: 'componentWillUpdate',
		value: function componentWillUpdate() {
			this._setWarning(this.props.site);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    doSearch = _props.doSearch,
			    search = _props.search,
			    translate = _props.translate;

			var status = this.props.status || 'published';
			var filterStrings = {
				published: translate('Published', { context: 'Filter label for pages list' }),
				drafts: translate('Drafts', { context: 'Filter label for pages list' }),
				scheduled: translate('Scheduled', { context: 'Filter label for pages list' }),
				trashed: translate('Trashed', { context: 'Filter label for pages list' })
			};
			var searchStrings = {
				published: translate('Search Published…', { context: 'Search placeholder for pages list', textOnly: true }),
				drafts: translate('Search Drafts…', { context: 'Search placeholder for pages list', textOnly: true }),
				scheduled: translate('Search Scheduled…', { context: 'Search placeholder for pages list', textOnly: true }),
				trashed: translate('Search Trashed…', { context: 'Search placeholder for pages list', textOnly: true })
			};
			return _react2.default.createElement(
				_main2.default,
				{ classname: 'pages' },
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(
					_sectionNav2.default,
					{ selectedText: filterStrings[status] },
					_react2.default.createElement(
						_tabs2.default,
						{ label: translate('Status', { context: 'Filter page group label for tabs' }) },
						this.getNavItems(filterStrings, status)
					),
					_react2.default.createElement(_search2.default, {
						pinned: true,
						fitsContainer: true,
						onSearch: doSearch,
						initialValue: search,
						placeholder: searchStrings[status],
						analyticsGroup: 'Pages',
						delaySearch: true
					})
				),
				_react2.default.createElement(_pageList2.default, this.props)
			);
		}
	}, {
		key: 'getNavItems',
		value: function getNavItems(filterStrings, currentStatus) {
			var _props2 = this.props,
			    site = _props2.site,
			    siteId = _props2.siteId;

			var sitePart = site && site.slug || siteId;
			var siteFilter = sitePart ? '/' + sitePart : '';

			return statuses.map(function (status) {
				var path = '/pages' + siteFilter;
				if (status !== 'publish') {
					path = '/pages/' + status + siteFilter;
				}
				return _react2.default.createElement(
					_item2.default,
					{
						path: path,
						selected: currentStatus === status,
						key: 'page-filter-' + status },
					filterStrings[status]
				);
			});
		}
	}, {
		key: '_setWarning',
		value: function _setWarning(selectedSite) {
			var translate = this.props.translate;

			if (selectedSite && selectedSite.jetpack && !selectedSite.hasMinimumJetpackVersion) {
				_notices2.default.warning(translate('Jetpack %(version)s is required to take full advantage of all page editing features.', {
					args: { version: (0, _config2.default)('jetpack_min_version') }
				}), { button: translate('Update now'), href: selectedSite.options.admin_url + 'plugins.php?plugin_status=upgrade' });
			}
		}
	}]);
	return PagesMain;
}(_react2.default.Component);

PagesMain.displayName = 'Pages';
PagesMain.propTypes = {
	trackScrollPage: _react2.default.PropTypes.func.isRequired
};
PagesMain.defaultProps = {
	perPage: 20
};


var mapState = function mapState(state) {
	return {
		site: (0, _selectors.getSelectedSite)(state),
		siteId: (0, _selectors.getSelectedSiteId)(state)
	};
};

exports.default = (0, _reactRedux.connect)(mapState)((0, _i18nCalypso.localize)((0, _urlSearch2.default)(PagesMain)));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/pages/page-card-info/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _selectors = __webpack_require__("./client/state/pages/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PageCardInfo(_ref) {
	var translate = _ref.translate,
	    moment = _ref.moment,
	    page = _ref.page,
	    showTimestamp = _ref.showTimestamp,
	    isFront = _ref.isFront,
	    isPosts = _ref.isPosts,
	    siteUrl = _ref.siteUrl;

	var iconSize = 12;

	return _react2.default.createElement(
		'div',
		{ className: 'page-card-info' },
		siteUrl && _react2.default.createElement(
			'div',
			{ className: 'page-card-info__site-url' },
			siteUrl
		),
		_react2.default.createElement(
			'div',
			null,
			showTimestamp && _react2.default.createElement(
				'span',
				{ className: 'page-card-info__item' },
				_react2.default.createElement(_gridicons2.default, { icon: 'time', size: iconSize, className: 'page-card-info__item-icon' }),
				_react2.default.createElement(
					'span',
					{ className: 'page-card-info__item-text' },
					moment(page.modified).fromNow()
				)
			),
			isFront && _react2.default.createElement(
				'span',
				{ className: 'page-card-info__item' },
				_react2.default.createElement(_gridicons2.default, { icon: 'house', size: iconSize, className: 'page-card-info__item-icon' }),
				_react2.default.createElement(
					'span',
					{ className: 'page-card-info__item-text' },
					translate('Front page')
				)
			),
			isPosts && _react2.default.createElement(
				'span',
				{ className: 'page-card-info__item' },
				_react2.default.createElement(_gridicons2.default, { icon: 'posts', size: iconSize, className: 'page-card-info__item-icon' }),
				_react2.default.createElement(
					'span',
					{ className: 'page-card-info__item-text' },
					translate('Your latest posts')
				)
			)
		)
	);
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
exports.default = (0, _reactRedux.connect)(function (state, props) {
	return {
		isFront: (0, _selectors.isFrontPage)(state, props.page.site_ID, props.page.ID),
		isPosts: (0, _selectors.isPostsPage)(state, props.page.site_ID, props.page.ID)
	};
})((0, _i18nCalypso.localize)(PageCardInfo));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/pages/page-list.jsx":
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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _listEnd = __webpack_require__("./client/components/list-end/index.js");

var _listEnd2 = _interopRequireDefault(_listEnd);

var _queryPosts = __webpack_require__("./client/components/data/query-posts/index.jsx");

var _queryPosts2 = _interopRequireDefault(_queryPosts);

var _page = __webpack_require__("./client/my-sites/pages/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _infiniteScroll = __webpack_require__("./client/lib/mixins/infinite-scroll/index.js");

var _infiniteScroll2 = _interopRequireDefault(_infiniteScroll);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _noResults = __webpack_require__("./client/my-sites/no-results/index.jsx");

var _noResults2 = _interopRequireDefault(_noResults);

var _placeholder = __webpack_require__("./client/my-sites/pages/placeholder.jsx");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _route = __webpack_require__("./client/lib/route/index.js");

var _helpers = __webpack_require__("./client/my-sites/pages/helpers.js");

var _blogPostsPage = __webpack_require__("./client/my-sites/pages/blog-posts-page/index.jsx");

var _blogPostsPage2 = _interopRequireDefault(_blogPostsPage);

var _hasInitializedSites = __webpack_require__("./client/state/selectors/has-initialized-sites.js");

var _hasInitializedSites2 = _interopRequireDefault(_hasInitializedSites);

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageList = function (_Component) {
	(0, _inherits3.default)(PageList, _Component);

	function PageList() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, PageList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PageList.__proto__ || (0, _getPrototypeOf2.default)(PageList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			page: 1
		}, _this.incrementPage = function () {
			_this.setState({ page: _this.state.page + 1 });
		}, _this.resetPage = function () {
			_this.setState({ page: 1 });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(PageList, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.search !== this.props.search || nextProps.siteId !== this.props.siteId || nextProps.status !== this.props.status) {
				this.resetPage();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    search = _props.search,
			    siteId = _props.siteId,
			    status = _props.status;


			var query = {
				page: this.state.page,
				number: 20, // all-sites mode, i.e the /me/posts endpoint, only supports up to 20 results at a time
				search: search,
				status: (0, _route.mapPostStatus)(status),
				type: 'page'
			};

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_queryPosts2.default, { siteId: siteId,
					query: query }),
				_react2.default.createElement(ConnectedPages, {
					incrementPage: this.incrementPage,
					query: query,
					siteId: siteId })
			);
		}
	}]);
	return PageList;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


PageList.propTypes = {
	search: _react.PropTypes.string,
	siteId: _react.PropTypes.number,
	status: _react.PropTypes.string
};
exports.default = PageList;


var Pages = (0, _i18nCalypso.localize)(_react2.default.createClass({

	displayName: 'Pages',

	mixins: [(0, _infiniteScroll2.default)('fetchPages')],

	propTypes: {
		incrementPage: _react.PropTypes.func.isRequired,
		lastPage: _react.PropTypes.bool,
		loading: _react.PropTypes.bool.isRequired,
		page: _react.PropTypes.number.isRequired,
		pages: _react.PropTypes.array.isRequired,
		search: _react.PropTypes.string,
		site: _react.PropTypes.object,
		siteId: _react.PropTypes.any,
		hasSites: _react.PropTypes.bool.isRequired,
		trackScrollPage: _react.PropTypes.func.isRequired
	},

	getDefaultProps: function getDefaultProps() {
		return {
			perPage: 100,
			loading: false,
			lastPage: false,
			page: 0,
			pages: [],
			trackScrollPage: function trackScrollPage() {}
		};
	},
	fetchPages: function fetchPages(options) {
		if (this.props.loading || this.props.lastPage) {
			return;
		}
		if (options.triggeredByScroll) {
			this.props.trackScrollPage(this.props.page + 1);
		}
		this.props.incrementPage();
	},
	_insertTimeMarkers: function _insertTimeMarkers(pages) {
		var markedPages = [],
		    now = this.moment();
		var lastMarker = void 0;

		var buildMarker = function (pageDate) {
			pageDate = this.moment(pageDate);
			var days = now.diff(pageDate, 'days');
			if (days <= 0) {
				return this.props.translate('Today');
			}
			if (days === 1) {
				return this.props.translate('Yesterday');
			}
			return pageDate.from(now);
		}.bind(this);

		pages.forEach(function (page) {
			var date = this.moment(page.date),
			    marker = buildMarker(date);
			if (lastMarker !== marker) {
				markedPages.push(_react2.default.createElement(
					'div',
					{ key: 'marker-' + date.unix(), className: 'pages__page-list-header' },
					_react2.default.createElement(_gridicons2.default, { icon: 'time', size: 12 }),
					' ',
					marker
				));
			}
			lastMarker = marker;
			markedPages.push(page);
		}, this);

		return markedPages;
	},
	getNoContentMessage: function getNoContentMessage() {
		var _props2 = this.props,
		    search = _props2.search,
		    translate = _props2.translate;


		if (search) {
			return _react2.default.createElement(_noResults2.default, {
				image: '/calypso/images/pages/illustration-pages.svg',
				text: translate('No pages match your search for {{searchTerm/}}.', {
					components: {
						searchTerm: _react2.default.createElement(
							'em',
							null,
							search
						)
					}
				})
			});
		}

		var _props3 = this.props,
		    site = _props3.site,
		    siteId = _props3.siteId,
		    _props3$status = _props3.status,
		    status = _props3$status === undefined ? 'published' : _props3$status;

		var sitePart = site && site.slug || siteId;
		var newPageLink = this.props.siteId ? '/page/' + sitePart : '/page';
		var attributes = void 0;

		switch (status) {
			case 'drafts':
				attributes = {
					title: translate('You don\'t have any drafts.'),
					line: translate('Would you like to create one?'),
					action: translate('Start a Page'),
					actionURL: newPageLink
				};
				break;
			case 'scheduled':
				attributes = {
					title: translate('You don\'t have any scheduled pages yet.'),
					line: translate('Would you like to create one?'),
					action: translate('Start a Page'),
					actionURL: newPageLink
				};
				break;
			case 'trashed':
				attributes = {
					title: translate('You don\'t have any pages in your trash folder.'),
					line: translate('Everything you write is solid gold.')
				};
				break;
			default:
				attributes = {
					title: translate('You haven\'t published any pages yet.'),
					line: translate('Would you like to publish your first page?'),
					action: translate('Start a Page'),
					actionURL: newPageLink
				};
		}

		attributes.illustration = '/calypso/images/pages/illustration-pages.svg';
		attributes.illustrationWidth = 150;

		return _react2.default.createElement(_emptyContent2.default, {
			title: attributes.title,
			line: attributes.line,
			action: attributes.action,
			actionURL: attributes.actionURL,
			illustration: attributes.illustration,
			illustrationWidth: attributes.illustrationWidth
		});
	},
	addLoadingRows: function addLoadingRows(rows, count) {
		for (var i = 0; i < count; i++) {
			if (i % 4 === 0) {
				rows.push(_react2.default.createElement(_placeholder2.default.Marker, { key: 'placeholder-marker-' + i }));
			}
			rows.push(_react2.default.createElement(_placeholder2.default.Page, { key: 'placeholder-page-' + i, multisite: !this.props.site }));
		}
	},
	renderLoading: function renderLoading() {
		var rows = [];
		this.addLoadingRows(rows, 1);

		return _react2.default.createElement(
			'div',
			{ id: 'pages', className: 'pages__page-list' },
			rows
		);
	},
	renderPagesList: function renderPagesList(_ref2) {
		var pages = _ref2.pages;
		var site = this.props.site;

		var status = this.props.status || 'published';

		// Pages only display hierarchically for published pages on single-sites when
		// there are 100 or fewer pages and no more pages to load (last page).
		// Pages are not displayed hierarchically for search.
		if (site && status === 'published' && this.props.lastPage && pages.length <= 100 && !this.props.search) {
			return this.renderHierarchical({ pages: pages, site: site });
		}

		return this.renderChronological({ pages: pages, site: site });
	},
	renderHierarchical: function renderHierarchical(_ref3) {
		var pages = _ref3.pages,
		    site = _ref3.site;

		pages = (0, _helpers.sortPagesHierarchically)(pages);
		var rows = pages.map(function (page) {
			return _react2.default.createElement(_page2.default, { key: 'page-' + page.global_ID, page: page, site: site,
				multisite: false, hierarchical: true, hierarchyLevel: page.indentLevel || 0 });
		}, this);

		return _react2.default.createElement(
			'div',
			{ id: 'pages', className: 'pages__page-list' },
			_react2.default.createElement(_blogPostsPage2.default, { key: 'blog-posts-page', site: site, pages: pages }),
			rows
		);
	},
	renderChronological: function renderChronological(_ref4) {
		var pages = _ref4.pages,
		    site = _ref4.site;

		if (!this.props.search) {
			// we're listing in reverse chrono. use the markers.
			pages = this._insertTimeMarkers(pages);
		}
		var rows = pages.map(function (page) {
			if (!('site_ID' in page)) {
				return page;
			}

			// Render each page
			return _react2.default.createElement(_page2.default, { key: 'page-' + page.global_ID, page: page, multisite: this.props.siteId === null });
		}, this);

		if (this.props.loading) {
			this.addLoadingRows(rows, 1);
		}

		var blogPostsPage = site && status === 'published' && _react2.default.createElement(_blogPostsPage2.default, { key: 'blog-posts-page', site: site, pages: pages });

		return _react2.default.createElement(
			'div',
			{ id: 'pages', className: 'pages__page-list' },
			blogPostsPage,
			rows,
			this.props.lastPage && pages.length ? _react2.default.createElement(_listEnd2.default, null) : null
		);
	},
	renderNoContent: function renderNoContent() {
		return _react2.default.createElement(
			'div',
			{ id: 'pages', className: 'pages__page-list' },
			_react2.default.createElement(
				'div',
				{ key: 'page-list-no-results' },
				this.getNoContentMessage()
			)
		);
	},
	render: function render() {
		var _props4 = this.props,
		    hasSites = _props4.hasSites,
		    loading = _props4.loading,
		    pages = _props4.pages;


		if (pages.length && hasSites) {
			return this.renderPagesList({ pages: pages });
		}

		if (!loading && hasSites) {
			return this.renderNoContent();
		}

		return this.renderLoading();
	}
}));

var mapState = function mapState(state, _ref5) {
	var query = _ref5.query,
	    siteId = _ref5.siteId;
	return {
		hasSites: (0, _hasInitializedSites2.default)(state),
		loading: (0, _selectors.isRequestingSitePostsForQuery)(state, siteId, query),
		lastPage: (0, _selectors.isSitePostsLastPageForQuery)(state, siteId, query),
		pages: (0, _selectors.getSitePostsForQueryIgnoringPage)(state, siteId, query) || [],
		site: (0, _selectors2.getSite)(state, siteId)
	};
};

var ConnectedPages = (0, _reactRedux.connect)(mapState)(Pages);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/pages/page/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _partial2 = __webpack_require__("./node_modules/lodash/partial.js");

var _partial3 = _interopRequireDefault(_partial2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _flow2 = __webpack_require__("./node_modules/lodash/flow.js");

var _flow3 = _interopRequireDefault(_flow2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsCssTransitionGroup = __webpack_require__("./node_modules/react-addons-css-transition-group/index.js");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactAddonsCreateFragment = __webpack_require__("./node_modules/react-addons-create-fragment/index.js");

var _reactAddonsCreateFragment2 = _interopRequireDefault(_reactAddonsCreateFragment);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _updatePostStatus = __webpack_require__("./client/components/update-post-status/index.js");

var _updatePostStatus2 = _interopRequireDefault(_updatePostStatus);

var _compact = __webpack_require__("./client/components/card/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _menu = __webpack_require__("./client/components/popover/menu.jsx");

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _siteIcon = __webpack_require__("./client/blocks/site-icon/index.jsx");

var _siteIcon2 = _interopRequireDefault(_siteIcon);

var _helpers = __webpack_require__("./client/my-sites/pages/helpers.js");

var _helpers2 = _interopRequireDefault(_helpers);

var _utils = __webpack_require__("./client/lib/posts/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _menuSeparator = __webpack_require__("./client/components/popover/menu-separator.jsx");

var _menuSeparator2 = _interopRequireDefault(_menuSeparator);

var _pageCardInfo = __webpack_require__("./client/my-sites/pages/page-card-info/index.jsx");

var _pageCardInfo2 = _interopRequireDefault(_pageCardInfo);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/pages/selectors.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _actions2 = __webpack_require__("./client/state/ui/preview/actions.js");

var _actions3 = __webpack_require__("./client/state/ui/layout-focus/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var recordEvent = (0, _partial3.default)(_actions.recordGoogleEvent, 'Pages'); /**
                                                                                * External dependencies
                                                                                */

var Page = function (_Component) {
	(0, _inherits3.default)(Page, _Component);

	function Page() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Page);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call.apply(_ref, [this].concat(args))), _this), _this.togglePageActions = function () {
			_this.props.togglePageActions();
			// TODO check previous impl for race conditions
			if (_this.props.showPageActions) {
				_this.props.recordMoreOptions();
			}
		}, _this.viewPage = function (event) {
			event.preventDefault();
			var _this$props = _this.props,
			    isPreviewable = _this$props.isPreviewable,
			    page = _this$props.page,
			    previewURL = _this$props.previewURL;


			if (page.status && page.status === 'publish') {
				_this.props.recordViewPage();
			}

			if (!isPreviewable && (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
				return window.open(previewURL);
			}

			_this.props.setPreviewUrl(previewURL);
			_this.props.setLayoutFocus('preview');
		}, _this.statsPage = function () {
			_this.props.recordStatsPage();
			(0, _page2.default)(_helpers2.default.statsLinkForPage(_this.props.page, _this.props.site));
		}, _this.editPage = function () {
			_this.props.recordEditPage();
			(0, _page2.default)(_helpers2.default.editLinkForPage(_this.props.page, _this.props.site));
		}, _this.updateStatusPublish = function () {
			_this.props.updatePostStatus('publish');
			_this.props.recordEvent('Clicked Publish Page');
		}, _this.updateStatusTrash = function () {
			_this.props.updatePostStatus('trash');
			_this.props.recordEvent('Clicked Move to Trash');
		}, _this.updateStatusRestore = function () {
			_this.props.updatePostStatus('restore');
			_this.props.recordEvent('Clicked Restore');
		}, _this.updateStatusDelete = function () {
			_this.props.updatePostStatus('delete');
			_this.props.recordEvent('Clicked Delete Page');
		}, _this.copyPage = function () {
			_this.props.recordEvent('Clicked Copy Page');
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Page, [{
		key: 'getSiteDomain',


		// Construct a link to the Site the page belongs too
		value: function getSiteDomain() {
			return this.props.site && this.props.site.domain || '...';
		}
	}, {
		key: 'getViewItem',
		value: function getViewItem() {
			var isPreviewable = this.props.isPreviewable;

			if (this.props.page.status === 'trash') {
				return null;
			}

			if (this.props.hasStaticFrontPage && this.props.isPostsPage) {
				return null;
			}

			if (this.props.page.status !== 'publish') {
				return _react2.default.createElement(
					_menuItem2.default,
					{ onClick: this.viewPage },
					_react2.default.createElement(_gridicons2.default, { icon: isPreviewable ? 'visible' : 'external', size: 18 }),
					this.props.translate('Preview')
				);
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.viewPage },
				_react2.default.createElement(_gridicons2.default, { icon: isPreviewable ? 'visible' : 'external', size: 18 }),
				this.props.translate('View Page')
			);
		}
	}, {
		key: 'childPageInfo',
		value: function childPageInfo() {
			var _props = this.props,
			    page = _props.page,
			    site = _props.site,
			    translate = _props.translate;

			// If we're in hierarchical view, we don't show child info in the context menu, as it's redudant.

			if (this.props.hierarchical || !page.parent) {
				return null;
			}

			var parentTitle = page.parent.title || translate('( Untitled )');

			// This is technically if you can edit the current page, not the parent.
			// Capabilities are not exposed on the parent page.
			var parentHref = _utils2.default.userCan('edit_post', this.props.page) ? _helpers2.default.editLinkForPage(page.parent, site) : page.parent.URL;
			var parentLink = _react2.default.createElement(
				'a',
				{ href: parentHref },
				parentTitle
			);

			return _react2.default.createElement(
				'div',
				{ className: 'page__popover-more-info' },
				translate('Child of {{PageTitle/}}', {
					components: {
						PageTitle: parentLink
					}
				})
			);
		}
	}, {
		key: 'frontPageInfo',
		value: function frontPageInfo() {
			if (!this.props.isFrontPage) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'page__popover-more-info' },
				this.props.translate('This page is set as your site\'s homepage')
			);
		}
	}, {
		key: 'getPublishItem',
		value: function getPublishItem() {
			if (this.props.page.status === 'publish' || !_utils2.default.userCan('publish_post', this.props.page) || this.props.page.status === 'trash') {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.updateStatusPublish },
				_react2.default.createElement(_gridicons2.default, { icon: 'checkmark', size: 18 }),
				this.props.translate('Publish')
			);
		}
	}, {
		key: 'getEditItem',
		value: function getEditItem() {
			if (this.props.hasStaticFrontPage && this.props.isPostsPage) {
				return null;
			}

			if (!_utils2.default.userCan('edit_post', this.props.page)) {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.editPage },
				_react2.default.createElement(_gridicons2.default, { icon: 'pencil', size: 18 }),
				this.props.translate('Edit')
			);
		}
	}, {
		key: 'getSendToTrashItem',
		value: function getSendToTrashItem() {
			if (this.props.hasStaticFrontPage && this.props.isPostsPage || this.props.isFrontPage) {
				return null;
			}

			if (!_utils2.default.userCan('delete_post', this.props.page)) {
				return null;
			}

			if (this.props.page.status !== 'trash') {
				return (0, _reactAddonsCreateFragment2.default)({
					separator: _react2.default.createElement(_menuSeparator2.default, null),
					item: _react2.default.createElement(
						_menuItem2.default,
						{ className: 'page__trash-item', onClick: this.updateStatusTrash },
						_react2.default.createElement(_gridicons2.default, { icon: 'trash', size: 18 }),
						this.props.translate('Trash')
					)
				});
			}

			return (0, _reactAddonsCreateFragment2.default)({
				separator: _react2.default.createElement(_menuSeparator2.default, null),
				item: _react2.default.createElement(
					_menuItem2.default,
					{ className: 'page__delete-item', onClick: this.updateStatusDelete },
					_react2.default.createElement(_gridicons2.default, { icon: 'trash', size: 18 }),
					this.props.translate('Delete')
				)
			});
		}
	}, {
		key: 'getCopyItem',
		value: function getCopyItem() {
			var _props2 = this.props,
			    post = _props2.page,
			    siteSlugOrId = _props2.siteSlugOrId;

			if (!(0, _includes3.default)(['draft', 'future', 'pending', 'private', 'publish'], post.status) || !_utils2.default.userCan('edit_post', post)) {
				return null;
			}
			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.copyPage, href: '/page/' + siteSlugOrId + '?copy=' + post.ID },
				_react2.default.createElement(_gridicons2.default, { icon: 'clipboard', size: 18 }),
				this.props.translate('Copy')
			);
		}
	}, {
		key: 'getRestoreItem',
		value: function getRestoreItem() {
			if (this.props.page.status !== 'trash' || !_utils2.default.userCan('delete_post', this.props.page)) {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.updateStatusRestore },
				_react2.default.createElement(_gridicons2.default, { icon: 'undo', size: 18 }),
				this.props.translate('Restore')
			);
		}
	}, {
		key: 'getStatsItem',
		value: function getStatsItem() {
			if (this.props.page.status !== 'publish') {
				return null;
			}

			return _react2.default.createElement(
				_menuItem2.default,
				{ onClick: this.statsPage },
				_react2.default.createElement(_gridicons2.default, { icon: 'stats', size: 18 }),
				this.props.translate('Stats')
			);
		}
	}, {
		key: 'getPageStatusInfo',
		value: function getPageStatusInfo() {
			if (this.props.page.status === 'publish') {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'page__popover-more-info' },
				this.getReadableStatus(this.props.page.status)
			);
		}
	}, {
		key: 'getReadableStatus',
		value: function getReadableStatus(status) {
			var translate = this.props.translate;

			if (!this.humanReadableStatus) {
				this.humanReadableStatus = {
					publish: translate('Published'),
					draft: translate('Draft'),
					pending: translate('Pending'),
					future: translate('Future'),
					'private': translate('Private'),
					trash: translate('Trashed')
				};
			}

			return this.humanReadableStatus[status] || status;
		}
	}, {
		key: 'popoverMoreInfo',
		value: function popoverMoreInfo() {
			var status = this.getPageStatusInfo();
			var childPageInfo = this.childPageInfo();
			var frontPageInfo = this.frontPageInfo();

			if (!status && !childPageInfo && !frontPageInfo) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_menuSeparator2.default, null),
				status,
				childPageInfo,
				frontPageInfo
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    page = _props3.page,
			    _props3$site = _props3.site,
			    site = _props3$site === undefined ? {} : _props3$site,
			    translate = _props3.translate;

			var title = page.title || translate('(no title)');
			var canEdit = _utils2.default.userCan('edit_post', page);
			var depthIndicator = !this.props.hierarchical && page.parent && '— ';

			var viewItem = this.getViewItem();
			var publishItem = this.getPublishItem();
			var editItem = this.getEditItem();
			var restoreItem = this.getRestoreItem();
			var sendToTrashItem = this.getSendToTrashItem();
			var copyItem = this.getCopyItem();
			var statsItem = this.getStatsItem();
			var moreInfoItem = this.popoverMoreInfo();
			var hasMenuItems = viewItem || publishItem || editItem || statsItem || restoreItem || sendToTrashItem || moreInfoItem;

			var popoverMenu = hasMenuItems && _react2.default.createElement(
				_menu2.default,
				{
					isVisible: this.props.showPageActions,
					onClose: this.togglePageActions,
					position: 'bottom left',
					context: this.refs && this.refs.popoverMenuButton
				},
				editItem,
				publishItem,
				viewItem,
				statsItem,
				copyItem,
				restoreItem,
				sendToTrashItem,
				moreInfoItem
			);

			var ellipsisGridicon = hasMenuItems && _react2.default.createElement(_gridicons2.default, {
				icon: 'ellipsis',
				className: (0, _classnames2.default)({
					'page__actions-toggle': true,
					'is-active': this.props.showPageActions
				}),
				onClick: this.togglePageActions,
				ref: 'popoverMenuButton' });

			var cardClasses = {
				page: true,
				'is-indented': this.props.hierarchical && this.props.hierarchyLevel > 0
			};

			var hierarchyIndentClasses = {
				'page__hierarchy-indent': true,
				'is-indented': cardClasses['is-indented']
			};

			if (cardClasses['is-indented']) {
				cardClasses['is-indented-level-' + this.props.hierarchyLevel] = true;
				hierarchyIndentClasses['is-indented-level-' + this.props.hierarchyLevel] = true;
			}

			var hierarchyIndent = cardClasses['is-indented'] && _react2.default.createElement('div', { className: (0, _classnames2.default)(hierarchyIndentClasses) });

			return _react2.default.createElement(
				_compact2.default,
				{ className: (0, _classnames2.default)(cardClasses) },
				hierarchyIndent,
				this.props.multisite ? _react2.default.createElement(_siteIcon2.default, { siteId: page.site_ID, size: 34 }) : null,
				_react2.default.createElement(
					'div',
					{ className: 'page__main' },
					_react2.default.createElement(
						'a',
						{ className: 'page__title',
							href: canEdit ? _helpers2.default.editLinkForPage(page, site) : page.URL,
							title: canEdit ? translate('Edit %(title)s', { textOnly: true, args: { title: page.title } }) : translate('View %(title)s', { textOnly: true, args: { title: page.title } }),
							onClick: this.props.recordPageTitle
						},
						depthIndicator,
						title
					),
					_react2.default.createElement(_pageCardInfo2.default, {
						page: page,
						showTimestamp: this.props.hierarchical,
						siteUrl: this.props.multisite && this.getSiteDomain()
					})
				),
				ellipsisGridicon,
				popoverMenu,
				_react2.default.createElement(
					_reactAddonsCssTransitionGroup2.default,
					{
						transitionName: 'updated-trans',
						transitionEnterTimeout: 300,
						transitionLeaveTimeout: 300 },
					this.props.buildUpdateTemplate()
				)
			);
		}
	}]);
	return Page;
}(_react.Component);

Page.propTypes = {
	// connected
	setPreviewUrl: _propTypes2.default.func.isRequired,
	setLayoutFocus: _propTypes2.default.func.isRequired,
	recordEvent: _propTypes2.default.func.isRequired,
	recordMoreOptions: _propTypes2.default.func.isRequired,
	recordPageTitle: _propTypes2.default.func.isRequired,
	recordEditPage: _propTypes2.default.func.isRequired,
	recordViewPage: _propTypes2.default.func.isRequired,
	recordStatsPage: _propTypes2.default.func.isRequired,

	// connected via updatePostStatus
	buildUpdateTemplate: _propTypes2.default.func.isRequired,
	togglePageActions: _propTypes2.default.func.isRequired,
	updatePostStatus: _propTypes2.default.func.isRequired,
	updated: _propTypes2.default.bool.isRequired,
	updatedStatus: _propTypes2.default.string,
	previousStatus: _propTypes2.default.string,
	showMoreOptions: _propTypes2.default.bool.isRequired,
	showPageActions: _propTypes2.default.bool.isRequired
};


var mapState = function mapState(state, props) {
	var pageSiteId = (0, _get3.default)(props, 'page.site_ID');
	var site = (0, _selectors.getSite)(state, pageSiteId);
	var siteSlugOrId = (0, _get3.default)(site, 'slug') || (0, _get3.default)(site, 'ID', null);
	var selectedSiteId = (0, _selectors2.getSelectedSiteId)(state);
	var isPreviewable = false !== (0, _selectors.isSitePreviewable)(state, pageSiteId) && site && site.ID === selectedSiteId;

	return {
		hasStaticFrontPage: (0, _selectors.hasStaticFrontPage)(state, pageSiteId),
		isFrontPage: (0, _selectors3.isFrontPage)(state, pageSiteId, props.page.ID),
		isPostsPage: (0, _selectors3.isPostsPage)(state, pageSiteId, props.page.ID),
		isPreviewable: isPreviewable,
		previewURL: (0, _utils.getPreviewURL)(props.page),
		site: site,
		siteSlugOrId: siteSlugOrId
	};
};

var mapDispatch = {
	setPreviewUrl: _actions2.setPreviewUrl,
	setLayoutFocus: _actions3.setLayoutFocus,
	recordEvent: recordEvent,
	recordMoreOptions: (0, _partial3.default)(recordEvent, 'Clicked More Options Menu'),
	recordPageTitle: (0, _partial3.default)(recordEvent, 'Clicked Page Title'),
	recordEditPage: (0, _partial3.default)(recordEvent, 'Clicked Edit Page'),
	recordViewPage: (0, _partial3.default)(recordEvent, 'Clicked View Page'),
	recordStatsPage: (0, _partial3.default)(recordEvent, 'Clicked Stats Page')
};

exports.default = (0, _flow3.default)(_i18nCalypso.localize, _updatePostStatus2.default, (0, _reactRedux.connect)(mapState, mapDispatch))(Page);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/pages/placeholder.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External Dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var CompactCard = __webpack_require__("./client/components/card/compact.jsx"),
    SiteIcon = __webpack_require__("./client/blocks/site-icon/index.jsx");

module.exports = {
	Page: React.createClass({
		displayName: 'PagePlaceholder',

		render: function render() {
			return React.createElement(
				CompactCard,
				{ className: 'page is-placeholder' },
				this.props.multisite ? React.createElement(SiteIcon, { size: 34 }) : null,
				React.createElement(
					'a',
					{ className: 'page__title' },
					React.createElement(
						'span',
						{ className: 'placeholder-text' },
						this.translate('Loading a page of Pages…')
					)
				),
				this.props.multisite ? React.createElement(
					'span',
					{ className: 'page__site-url ' },
					React.createElement(
						'span',
						{ className: 'placeholder-text' },
						this.translate('A domain, quite soon…')
					)
				) : null
			);
		}
	}),
	Marker: React.createClass({
		displayName: 'MarkerPlaceholder',

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'pages__page-list-header is-placeholder' },
				React.createElement(
					'span',
					null,
					'\xA0'
				)
			);
		}
	})
};

/***/ }),

/***/ "./client/my-sites/post-like-button/index.jsx":
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

var _likeButton = __webpack_require__("./client/blocks/like-button/index.jsx");

var _likeButton2 = _interopRequireDefault(_likeButton);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var PostLikeButton = function PostLikeButton(props) {
	return _react2.default.createElement(_likeButton2.default, (0, _extends3.default)({}, props, {
		tagName: 'a',
		animateLike: false,
		forceCounter: true,
		showLabel: false,
		showZeroCount: false }));
};

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var post = _ref.post;
	return { slug: (0, _selectors.getSiteSlug)(state, post.site_ID) };
})(PostLikeButton);
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

/***/ "./client/my-sites/post/post-image/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js"),
    classnames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * Main
 */
var PostImage = React.createClass({
	displayName: 'PostImage',


	mixins: [PureRenderMixin],

	propTypes: {
		postImages: React.PropTypes.shape({
			featured_image: React.PropTypes.string,
			canonical_image: React.PropTypes.shape({
				uri: React.PropTypes.string.isRequired,
				width: React.PropTypes.number,
				height: React.PropTypes.number
			}),
			content_images: React.PropTypes.arrayOf(React.PropTypes.shape({
				src: React.PropTypes.string.isRequired,
				width: React.PropTypes.number,
				height: React.PropTypes.number
			})),
			images: React.PropTypes.arrayOf(React.PropTypes.shape({
				src: React.PropTypes.string.isRequired,
				width: React.PropTypes.number,
				height: React.PropTypes.number
			}))
		})
	},

	getInitialState: function getInitialState() {
		return {
			collapsed: true
		};
	},

	render: function render() {
		var imageURL = this._getImageURL(),
		    containerClasses,
		    containerStyles;

		if (!imageURL) {
			return null;
		}

		if (this.state.collapsed) {
			containerStyles = {
				backgroundImage: 'url(' + imageURL + ')'
			};
		}

		containerClasses = classnames({
			'post-image': true,
			'is-collapsed': this.state.collapsed
		});

		return React.createElement(
			'div',
			{ className: containerClasses, style: containerStyles, onClick: this._handleClick },
			!this.state.collapsed ? React.createElement('img', { src: imageURL, className: 'post-image__image' }) : null
		);
	},

	_getImageURL: function _getImageURL() {
		var postImages = this.props.postImages;

		if (postImages.featured_image !== '') {
			return postImages.featured_image;
		}

		if (postImages.canonical_image && postImages.canonical_image.uri) {
			return postImages.canonical_image.uri;
		}

		if (postImages.content_images && postImages.content_images.length && postImages.content_images[0].src) {
			return postImages.content_images[0].src;
		}

		if (postImages.images && postImages.images.length) {
			return postImages.images[0].src;
		}
	},

	_handleClick: function _handleClick() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

});

module.exports = PostImage;

/***/ }),

/***/ "./client/my-sites/posts/controller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHelpers = __webpack_require__("./client/lib/react-helpers/index.js");

var _areAllSitesSingleUser = __webpack_require__("./client/state/selectors/are-all-sites-single-user.js");

var _areAllSitesSingleUser2 = _interopRequireDefault(_areAllSitesSingleUser);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/current-user/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External Dependencies
 */
var page = __webpack_require__("./node_modules/page/index.js"),
    React = __webpack_require__("./node_modules/react/react.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:my-sites:posts'),
    i18n = __webpack_require__("./node_modules/i18n-calypso/index.js");

/**
 * Internal Dependencies
 */
var route = __webpack_require__("./client/lib/route/index.js"),
    analytics = __webpack_require__("./client/lib/analytics/index.js"),
    titlecase = __webpack_require__("./node_modules/to-title-case/index.js"),
    trackScrollPage = __webpack_require__("./client/lib/track-scroll-page/index.js"),
    setTitle = __webpack_require__("./client/state/document-head/actions.js").setDocumentHeadTitle;

module.exports = {

	posts: function posts(context) {
		var state = context.store.getState();
		var siteId = (0, _selectors.getSelectedSiteId)(state);

		var Posts = __webpack_require__("./client/my-sites/posts/main.jsx"),
		    siteID = route.getSiteFragment(context.path),
		    author = context.params.author === 'my' ? (0, _selectors3.getCurrentUserId)(state) : null,
		    statusSlug = author ? context.params.status : context.params.author,
		    search = context.query.s,
		    category = context.query.category,
		    tag = context.query.tag,
		    basePath = route.sectionify(context.path),
		    analyticsPageTitle = 'Blog Posts',
		    baseAnalyticsPath;

		function shouldRedirectMyPosts() {
			if (!author) {
				return false;
			}
			if ((0, _areAllSitesSingleUser2.default)(state)) {
				return true;
			}
			if ((0, _selectors2.isSingleUserSite)(state, siteId) || (0, _selectors2.isJetpackSite)(state, siteId)) {
				return true;
			}
		}

		debug('siteID: `%s`', siteID);
		debug('author: `%s`', author);

		statusSlug = !statusSlug || statusSlug === 'my' || statusSlug === siteID ? '' : statusSlug;
		debug('statusSlug: `%s`', statusSlug);

		search = 'undefined' !== typeof search ? search : '';
		debug('search: `%s`', search);

		if (shouldRedirectMyPosts()) {
			page.redirect(context.path.replace(/\/my\b/, ''));
			return;
		}

		// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
		context.store.dispatch(setTitle(i18n.translate('Blog Posts', { textOnly: true })));

		if (siteID) {
			baseAnalyticsPath = basePath + '/:site';
		} else {
			baseAnalyticsPath = basePath;
		}

		if (statusSlug.length) {
			analyticsPageTitle += ' > ' + titlecase(statusSlug);
		} else {
			analyticsPageTitle += ' > Published';
		}

		analytics.pageView.record(baseAnalyticsPath, analyticsPageTitle);

		(0, _reactHelpers.renderWithReduxStore)(React.createElement(Posts, {
			context: context,
			author: author,
			statusSlug: statusSlug,
			search: search,
			category: category,
			tag: tag,
			trackScrollPage: trackScrollPage.bind(null, baseAnalyticsPath, analyticsPageTitle, 'Posts')
		}), 'primary', context.store);
	}
};

/***/ }),

/***/ "./client/my-sites/posts/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	(0, _page2.default)('/posts/:author?/:status?/:domain?', _controller2.default.siteSelection, _controller2.default.navigation, _controller4.default.posts);
};

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _controller = __webpack_require__("./client/my-sites/controller.js");

var _controller2 = _interopRequireDefault(_controller);

var _controller3 = __webpack_require__("./client/my-sites/posts/controller.js");

var _controller4 = _interopRequireDefault(_controller3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External Dependencies
 */
;

/**
 * Internal Dependencies
 */
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/posts/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _postsNavigation = __webpack_require__("./client/my-sites/posts/posts-navigation.jsx");

var _postsNavigation2 = _interopRequireDefault(_postsNavigation);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _postListWrapper = __webpack_require__("./client/my-sites/posts/post-list-wrapper.jsx");

var _postListWrapper2 = _interopRequireDefault(_postListWrapper);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _queryPosts = __webpack_require__("./client/components/data/query-posts/index.jsx");

var _queryPosts2 = _interopRequireDefault(_queryPosts);

var _queryPostCounts = __webpack_require__("./client/components/data/query-post-counts/index.jsx");

var _queryPostCounts2 = _interopRequireDefault(_queryPostCounts);

var _postItem = __webpack_require__("./client/blocks/post-item/index.jsx");

var _postItem2 = _interopRequireDefault(_postItem);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/posts/selectors.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _count = __webpack_require__("./client/components/count/index.jsx");

var _count2 = _interopRequireDefault(_count);

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _path = __webpack_require__("./client/lib/route/path.js");

var _selectors3 = __webpack_require__("./client/state/posts/counts/selectors.js");

var _selectors4 = __webpack_require__("./client/state/ui/editor/selectors.js");

var _actions = __webpack_require__("./client/state/notices/actions.js");

var _selectors5 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var PostsMain = _react2.default.createClass({
	displayName: 'PostsMain',
	componentWillMount: function componentWillMount() {
		this.setWarning(this.props);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.siteId !== this.props.siteId || nextProps.hasMinimumJetpackVersion !== this.props.hasMinimumJetpackVersion) {
			this.setWarning(nextProps);
		}
	},
	showDrafts: function showDrafts() {
		var isJetpack = this.props.isJetpack;

		// Jetpack sites can have malformed counts

		if (isJetpack && !this.props.loadingDrafts && this.props.drafts && this.props.drafts.length === 0) {
			return false;
		}

		if (!isJetpack && this.props.draftCount === 0) {
			return false;
		}

		if (!isJetpack && this.props.author && this.props.myDraftCount === 0) {
			return false;
		}

		return true;
	},
	mostRecentDrafts: function mostRecentDrafts() {
		var _props = this.props,
		    siteId = _props.siteId,
		    siteSlug = _props.siteSlug;


		if (!siteId || !this.showDrafts()) {
			return null;
		}

		var _props2 = this.props,
		    draftCount = _props2.draftCount,
		    translate = _props2.translate;

		var isLoading = draftCount !== 0 && this.props.loadingDrafts;

		return _react2.default.createElement(
			'div',
			{ className: 'posts__recent-drafts' },
			_react2.default.createElement(_queryPosts2.default, {
				siteId: siteId,
				query: this.props.draftsQuery }),
			_react2.default.createElement(_queryPostCounts2.default, { siteId: siteId, type: 'post' }),
			_react2.default.createElement(
				_sectionHeader2.default,
				{ className: 'posts__drafts-header', label: translate('Latest Drafts') },
				_react2.default.createElement(
					_button2.default,
					{ compact: true, href: this.props.newPostPath },
					translate('New Post')
				)
			),
			(0, _map3.default)(this.props.drafts, function (_ref) {
				var globalId = _ref.global_ID;
				return _react2.default.createElement(_postItem2.default, { compact: true, key: globalId, globalId: globalId });
			}),
			isLoading && _react2.default.createElement(_postItem2.default, { compact: true }),
			draftCount > 6 && _react2.default.createElement(
				_button2.default,
				{ compact: true, borderless: true, className: 'posts__see-all-drafts', href: '/posts/drafts/' + siteSlug },
				translate('See all drafts'),
				draftCount ? _react2.default.createElement(_count2.default, { count: draftCount }) : null
			)
		);
	},
	render: function render() {
		var path = (0, _path.sectionify)(this.props.context.path);
		var classes = (0, _classnames2.default)('posts', {
			'is-multisite': !this.props.siteId,
			'is-single-site': this.props.siteId
		});

		return _react2.default.createElement(
			_main2.default,
			{ className: classes },
			_react2.default.createElement(_sidebarNavigation2.default, null),
			_react2.default.createElement(
				'div',
				{ className: 'posts__primary' },
				_react2.default.createElement(_postsNavigation2.default, this.props),
				_react2.default.createElement(_postListWrapper2.default, this.props)
			),
			path !== '/posts/drafts' && this.mostRecentDrafts()
		);
	},
	setWarning: function setWarning(_ref2) {
		var adminUrl = _ref2.adminUrl,
		    hasMinimumJetpackVersion = _ref2.hasMinimumJetpackVersion,
		    isJetpack = _ref2.isJetpack,
		    siteId = _ref2.siteId;

		if (siteId && isJetpack && false === hasMinimumJetpackVersion) {
			this.props.warningNotice(this.props.translate('Jetpack %(version)s is required to take full advantage of all post editing features.', {
				args: { version: (0, _config2.default)('jetpack_min_version') }
			}), {
				button: this.props.translate('Update now'),
				href: adminUrl
			});
		}
	}
});

function mapStateToProps(state, _ref3) {
	var author = _ref3.author;

	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var draftsQuery = {
		author: author,
		number: 6,
		order_by: 'modified',
		status: 'draft',
		type: 'post'
	};

	return {
		adminUrl: (0, _selectors5.getSiteAdminUrl)(state, siteId, 'plugins.php?plugin_status=upgrade'),
		drafts: (0, _selectors2.getSitePostsForQueryIgnoringPage)(state, siteId, draftsQuery),
		draftCount: (0, _selectors3.getAllPostCount)(state, siteId, 'post', 'draft'),
		draftsQuery: draftsQuery,
		hasMinimumJetpackVersion: (0, _selectors5.siteHasMinimumJetpackVersion)(state, siteId),
		isJetpack: (0, _selectors5.isJetpackSite)(state, siteId),
		loadingDrafts: (0, _selectors2.isRequestingSitePostsForQuery)(state, siteId, draftsQuery),
		myDraftCount: (0, _selectors3.getMyPostCount)(state, siteId, 'post', 'draft'),
		newPostPath: (0, _selectors4.getEditorNewPostPath)(state, siteId),
		siteId: siteId,
		siteSlug: (0, _selectors5.getSiteSlug)(state, siteId)
	};
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
	warningNotice: _actions.warningNotice
})((0, _i18nCalypso.localize)(PostsMain));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/posts/post-controls.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.PostControls = undefined;

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _config = __webpack_require__("./client/config/index.js");

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _utils = __webpack_require__("./client/lib/posts/utils.js");

var _isPublicizeEnabled = __webpack_require__("./client/state/selectors/is-publicize-enabled.js");

var _isPublicizeEnabled2 = _interopRequireDefault(_isPublicizeEnabled);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var edit = function edit() {
	return _analytics.ga.recordEvent('Posts', 'Clicked Edit Post');
};

/**
 * Internal dependencies
 */

var copy = function copy() {
	return _analytics.ga.recordEvent('Posts', 'Clicked Copy Post');
};
var viewStats = function viewStats() {
	return _analytics.ga.recordEvent('Posts', 'Clicked View Post Stats');
};

var getAvailableControls = function getAvailableControls(props) {
	var current = props.current,
	    editURL = props.editURL,
	    fullWidth = props.fullWidth,
	    onDelete = props.onDelete,
	    onHideMore = props.onHideMore,
	    onPublish = props.onPublish,
	    onRestore = props.onRestore,
	    onShowMore = props.onShowMore,
	    onToggleShare = props.onToggleShare,
	    onTrash = props.onTrash,
	    post = props.post,
	    siteSlug = props.siteSlug,
	    translate = props.translate,
	    onViewPost = props.onViewPost;

	var controls = { main: [], more: [] };

	// NOTE: Currently Jetpack site posts are not returning `post.capabilities`
	// and those posts will not have access to post management type controls

	// Main Controls (not behind ... more link)
	if ((0, _utils.userCan)('edit_post', post)) {
		controls.main.push({
			className: 'edit' + (current === 'edit' ? ' is-active' : ''),
			href: editURL,
			icon: 'pencil',
			onClick: edit,
			text: translate('Edit')
		});
	}

	if ('publish' === post.status) {
		controls.main.push({
			className: 'view' + (current === 'view' ? ' is-active' : ''),
			href: post.URL,
			icon: props.isPreviewable ? 'visible' : 'external',
			onClick: onViewPost,
			text: translate('View')
		});

		controls.main.push({
			className: 'stats' + (current === 'stats' ? ' is-active' : ''),
			href: '/stats/post/' + post.ID + '/' + siteSlug,
			icon: 'stats-alt',
			onClick: viewStats,
			text: translate('Stats')
		});

		if ((0, _config.isEnabled)('republicize')) {
			controls.main.push({
				className: 'share' + (current === 'share' ? ' is-active' : ''),
				disabled: !props.isPublicizeEnabled,
				icon: 'share',
				onClick: onToggleShare,
				text: translate('Share')
			});
		}
	} else if ('trash' !== post.status) {
		controls.main.push({
			className: 'view' + (current === 'preview' ? ' is-active' : ''),
			icon: props.isPreviewable ? 'visible' : 'external',
			onClick: onViewPost,
			text: translate('Preview')
		});

		if ((0, _utils.userCan)('publish_post', post)) {
			controls.main.push({
				className: 'publish' + (current === 'publish' ? ' is-active' : ''),
				icon: 'reader',
				onClick: onPublish,
				text: translate('Publish')
			});
		}
	} else if ((0, _utils.userCan)('delete_post', post)) {
		controls.main.push({
			className: 'restore' + (current === 'restore' ? ' is-active' : ''),
			icon: 'undo',
			onClick: onRestore,
			text: translate('Restore')
		});
	}

	if ((0, _utils.userCan)('delete_post', post)) {
		if ('trash' === post.status) {
			controls.main.push({
				className: 'trash is-scary' + (current === 'delete-permanently' ? ' is-active' : ''),
				icon: 'trash',
				onClick: onDelete,
				text: translate('Delete Permanently')
			});
		} else {
			controls.main.push({
				className: 'trash' + (current === 'trash' ? ' is-active' : ''),
				icon: 'trash',
				onClick: onTrash,
				text: translate('Trash')
			});
		}
	}

	if ((0, _includes3.default)(['draft', 'future', 'pending', 'private', 'publish'], post.status) && (0, _utils.userCan)('edit_post', post)) {
		controls.main.push({
			className: 'copy' + (current === 'copy' ? ' is-active' : ''),
			href: '/post/' + siteSlug + '?copy=' + post.ID,
			icon: 'clipboard',
			onClick: copy,
			text: translate('Copy')
		});
	}

	// More Controls (behind ... more link)
	if (controls.main.length > 4 && fullWidth) {
		controls.more = controls.main.splice(4);
	} else if (controls.main.length > 2 && !fullWidth) {
		controls.more = controls.main.splice(2);
	}

	if (controls.more.length) {
		controls.main.push({
			className: 'more' + (current === 'more' ? ' is-active' : ''),
			icon: 'ellipsis',
			onClick: onShowMore,
			text: translate('More')
		});

		controls.more.push({
			className: 'back' + (current === 'back' ? ' is-active' : ''),
			icon: 'chevron-left',
			onClick: onHideMore,
			text: translate('Back')
		});
	}

	return controls;
};

var getControlElements = function getControlElements(controls) {
	return controls.map(function (control, index) {
		return _react2.default.createElement(
			'li',
			{
				className: (0, _classnames2.default)({ 'post-controls__disabled': control.disabled }),
				key: index
			},
			_react2.default.createElement(
				'a',
				{
					className: 'post-controls__' + control.className,
					href: control.href,
					onClick: control.disabled ? _noop3.default : control.onClick,
					target: control.target ? control.target : null
				},
				_react2.default.createElement(_gridicons2.default, { icon: control.icon, size: 18 }),
				_react2.default.createElement(
					'span',
					null,
					control.text
				)
			)
		);
	});
};

var PostControls = exports.PostControls = function PostControls(props) {
	var _getAvailableControls = getAvailableControls(props),
	    main = _getAvailableControls.main,
	    more = _getAvailableControls.more;

	var classes = (0, _classnames2.default)('post-controls', { 'post-controls--desk-nomore': more <= 2 });

	return _react2.default.createElement(
		'div',
		{ className: classes },
		more.length > 0 && _react2.default.createElement(
			'ul',
			{ className: 'posts__post-controls post-controls__pane post-controls__more-options' },
			getControlElements(more)
		),
		_react2.default.createElement(
			'ul',
			{ className: 'posts__post-controls post-controls__pane post-controls__main-options' },
			getControlElements(main)
		)
	);
};

PostControls.propTypes = {
	current: _react.PropTypes.string,
	editURL: _react.PropTypes.string.isRequired,
	fullWidth: _react.PropTypes.bool,
	isPublicizeEnabled: _react.PropTypes.bool,
	isPreviewable: _react.PropTypes.bool,
	onDelete: _react.PropTypes.func,
	onHideMore: _react.PropTypes.func.isRequired,
	onPublish: _react.PropTypes.func,
	onRestore: _react.PropTypes.func,
	onShowMore: _react.PropTypes.func.isRequired,
	onToggleShare: _react.PropTypes.func,
	onTrash: _react.PropTypes.func,
	onViewPost: _react.PropTypes.func,
	post: _react.PropTypes.object.isRequired,
	siteId: _react.PropTypes.number,
	translate: _react.PropTypes.func
};

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId,
	    post = _ref.post;
	return {
		isPreviewable: false !== (0, _selectors.isSitePreviewable)(state, siteId),
		isPublicizeEnabled: (0, _isPublicizeEnabled2.default)(state, siteId, post.type),
		siteSlug: (0, _selectors.getSiteSlug)(state, siteId)
	};
})((0, _i18nCalypso.localize)(PostControls));

/***/ }),

/***/ "./client/my-sites/posts/post-header.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _siteIcon = __webpack_require__("./client/blocks/site-icon/index.jsx");

var _siteIcon2 = _interopRequireDefault(_siteIcon);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var PostHeader = function (_PureComponent) {
	(0, _inherits3.default)(PostHeader, _PureComponent);

	function PostHeader() {
		(0, _classCallCheck3.default)(this, PostHeader);
		return (0, _possibleConstructorReturn3.default)(this, (PostHeader.__proto__ || (0, _getPrototypeOf2.default)(PostHeader)).apply(this, arguments));
	}

	(0, _createClass3.default)(PostHeader, [{
		key: 'getAuthor',
		value: function getAuthor() {
			return this.props.translate('By %(author)s', { args: { author: this.props.author } });
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)({
				post__header: true,
				'has-author': this.props.showAuthor
			});

			return _react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement(_siteIcon2.default, { site: this.props.site, size: 32 }),
				_react2.default.createElement(
					'h4',
					{ className: 'post__site-title' },
					_react2.default.createElement(
						'a',
						{ href: this.props.path + '/' + this.props.siteSlug },
						this.props.siteTitle
					)
				),
				this.props.showAuthor ? _react2.default.createElement(
					'span',
					{ className: 'post__author' },
					this.getAuthor()
				) : null
			);
		}
	}]);
	return PostHeader;
}(_react.PureComponent);

PostHeader.defaultProps = {
	showAuthor: false
};
exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId;
	return {
		siteSlug: (0, _selectors.getSiteSlug)(state, siteId),
		siteTitle: (0, _selectors.getSiteTitle)(state, siteId)
	};
})((0, _i18nCalypso.localize)(PostHeader));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/posts/post-list-wrapper.jsx":
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

var _postList = __webpack_require__("./client/my-sites/posts/post-list.jsx");

var _postList2 = _interopRequireDefault(_postList);

var _postListFetcher = __webpack_require__("./client/components/post-list-fetcher/index.jsx");

var _postListFetcher2 = _interopRequireDefault(_postListFetcher);

var _postTypeList = __webpack_require__("./client/my-sites/post-type-list/index.jsx");

var _postTypeList2 = _interopRequireDefault(_postTypeList);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _path = __webpack_require__("./client/lib/route/path.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var PostListWrapper = function (_React$Component) {
	(0, _inherits3.default)(PostListWrapper, _React$Component);

	function PostListWrapper(props) {
		(0, _classCallCheck3.default)(this, PostListWrapper);
		return (0, _possibleConstructorReturn3.default)(this, (PostListWrapper.__proto__ || (0, _getPrototypeOf2.default)(PostListWrapper)).call(this, props));
	}

	(0, _createClass3.default)(PostListWrapper, [{
		key: 'renderPostList',
		value: function renderPostList() {
			return _react2.default.createElement(_postList2.default, this.props);
		}
	}, {
		key: 'renderPostTypeList',
		value: function renderPostTypeList() {
			var query = {
				status: (0, _path.mapPostStatus)(this.props.statusSlug),
				author: this.props.author,
				search: this.props.search,
				category: this.props.category,
				tag: this.props.tag
			};

			if (this.props.withCounts) {
				query.meta = 'counts';
			}

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_postListFetcher2.default,
					{
						siteId: this.props.siteId,
						status: (0, _path.mapPostStatus)(this.props.statusSlug),
						author: this.props.author,
						withImages: true,
						withCounts: true,
						search: this.props.search,
						category: this.props.category,
						tag: this.props.tag
					},
					_react2.default.createElement(_postTypeList2.default, {
						query: query,
						largeTitles: true,
						wrapTitles: true
					})
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_config2.default.isEnabled('posts/post-type-list') ? this.renderPostTypeList() : this.renderPostList()
			);
		}
	}]);
	return PostListWrapper;
}(_react2.default.Component);

/**
 * Internal dependencies
 */


exports.default = PostListWrapper;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/posts/post-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _debounce2 = __webpack_require__("./node_modules/lodash/debounce.js");

var _debounce3 = _interopRequireDefault(_debounce2);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _listEnd = __webpack_require__("./client/components/list-end/index.js");

var _listEnd2 = _interopRequireDefault(_listEnd);

var _upgradeNudge = __webpack_require__("./client/my-sites/upgrade-nudge/index.jsx");

var _upgradeNudge2 = _interopRequireDefault(_upgradeNudge);

var _hasInitializedSites = __webpack_require__("./client/state/selectors/has-initialized-sites.js");

var _hasInitializedSites2 = _interopRequireDefault(_hasInitializedSites);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:my-sites:posts');

/**
 * Internal dependencies
 */
var PostListFetcher = __webpack_require__("./client/components/post-list-fetcher/index.jsx"),
    Post = __webpack_require__("./client/my-sites/posts/post.jsx"),
    PostPlaceholder = __webpack_require__("./client/my-sites/posts/post-placeholder.jsx"),
    actions = __webpack_require__("./client/lib/posts/actions.js"),
    EmptyContent = __webpack_require__("./client/components/empty-content/index.jsx"),
    InfiniteList = __webpack_require__("./client/components/infinite-list/index.jsx"),
    NoResults = __webpack_require__("./client/my-sites/no-results/index.jsx"),
    route = __webpack_require__("./client/lib/route/index.js"),
    mapStatus = route.mapPostStatus;

var GUESSED_POST_HEIGHT = 250;

var PostList = React.createClass({
	displayName: 'PostList',


	mixins: [PureRenderMixin],

	propTypes: {
		context: React.PropTypes.object,
		search: React.PropTypes.string,
		category: React.PropTypes.string,
		tag: React.PropTypes.string,
		hasSites: React.PropTypes.bool,
		statusSlug: React.PropTypes.string,
		siteId: React.PropTypes.number,
		author: React.PropTypes.number
	},

	render: function render() {
		return React.createElement(
			PostListFetcher,
			{
				siteId: this.props.siteId,
				status: mapStatus(this.props.statusSlug),
				author: this.props.author,
				withImages: true,
				withCounts: true,
				search: this.props.search,
				category: this.props.category,
				tag: this.props.tag
			},
			React.createElement(Posts, (0, _omit3.default)(this.props, 'children'))
		);
	}
});

var Posts = React.createClass({
	displayName: 'Posts',


	propTypes: {
		author: React.PropTypes.number,
		context: React.PropTypes.object.isRequired,
		hasRecentError: React.PropTypes.bool.isRequired,
		lastPage: React.PropTypes.bool.isRequired,
		loading: React.PropTypes.bool.isRequired,
		page: React.PropTypes.number.isRequired,
		postImages: React.PropTypes.object.isRequired,
		posts: React.PropTypes.array.isRequired,
		search: React.PropTypes.string,
		siteId: React.PropTypes.number,
		hasSites: React.PropTypes.bool.isRequired,
		statusSlug: React.PropTypes.string,
		trackScrollPage: React.PropTypes.func.isRequired
	},

	getDefaultProps: function getDefaultProps() {
		return {
			hasRecentError: false,
			loading: false,
			lastPage: false,
			page: 0,
			postImages: {},
			posts: [],
			trackScrollPage: function trackScrollPage() {}
		};
	},

	getInitialState: function getInitialState() {
		return {
			postsAtFullWidth: window.innerWidth >= 960
		};
	},

	componentDidMount: function componentDidMount() {
		debug('Posts React component mounted.');
		this.debouncedAfterResize = (0, _debounce3.default)(this.afterResize, 300);
		window.addEventListener('resize', this.debouncedAfterResize);
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('resize', this.debouncedAfterResize);
	},

	shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
		if (nextProps.loading !== this.props.loading) {
			return true;
		}
		if (nextProps.hasRecentError !== this.props.hasRecentError) {
			return true;
		}
		if (nextProps.lastPage !== this.props.lastPage) {
			return true;
		}
		if (nextProps.statusSlug !== this.props.statusSlug) {
			return true;
		}
		if (!(0, _isEqual3.default)(nextProps.posts.map(function (post) {
			return post.ID;
		}), this.props.posts.map(function (post) {
			return post.ID;
		}))) {
			return true;
		}
		return false;
	},

	afterResize: function afterResize() {
		var arePostsAtFullWidth = window.innerWidth >= 960;

		if (this.state.postsAtFullWidth !== arePostsAtFullWidth) {
			this.setState({
				postsAtFullWidth: arePostsAtFullWidth
			});
		}
	},

	fetchPosts: function fetchPosts(options) {
		if (this.props.loading || this.props.lastPage || this.props.hasRecentError) {
			return;
		}
		if (options.triggeredByScroll) {
			this.props.trackScrollPage(this.props.page + 1);
		}
		actions.fetchNextPage();
	},

	getNoContentMessage: function getNoContentMessage() {
		var attributes, newPostLink;

		if (this.props.search) {
			return React.createElement(NoResults, {
				image: '/calypso/images/posts/illustration-posts.svg',
				text: this.translate('No posts match your search for {{searchTerm/}}.', {
					components: {
						searchTerm: React.createElement(
							'em',
							null,
							this.props.search
						)
					}
				})
			});
		} else {
			newPostLink = this.props.siteId ? '/post/' + this.props.siteId : '/post';

			if (this.props.hasRecentError) {
				attributes = {
					title: this.translate('Oh, no! We couldn\'t fetch your posts.'),
					line: this.translate('Please check your internet connection.')
				};
			} else {
				switch (this.props.statusSlug) {
					case 'drafts':
						attributes = {
							title: this.translate('You don\'t have any drafts.'),
							line: this.translate('Would you like to create one?'),
							action: this.translate('Start a Post'),
							actionURL: newPostLink
						};
						break;
					case 'scheduled':
						attributes = {
							title: this.translate('You don\'t have any scheduled posts.'),
							line: this.translate('Would you like to schedule a draft to publish?'),
							action: this.translate('Edit Drafts'),
							actionURL: this.props.siteId ? '/posts/drafts/' + this.props.siteId : '/posts/drafts'
						};
						break;
					case 'trashed':
						attributes = {
							title: this.translate('You don\'t have any posts in your trash folder.'),
							line: this.translate('Everything you write is solid gold.')
						};
						break;
					default:
						attributes = {
							title: this.translate('You haven\'t published any posts yet.'),
							line: this.translate('Would you like to publish your first post?'),
							action: this.translate('Start a Post'),
							actionURL: newPostLink
						};
				}
			}
		}

		attributes.illustration = '/calypso/images/posts/illustration-posts.svg';
		attributes.illustrationWidth = 150;

		return React.createElement(EmptyContent, {
			title: attributes.title,
			line: attributes.line,
			action: attributes.action,
			actionURL: attributes.actionURL,
			illustration: attributes.illustration,
			illustrationWidth: attributes.illustrationWidth
		});
	},

	getPostRef: function getPostRef(post) {
		return post.global_ID;
	},

	renderLoadingPlaceholders: function renderLoadingPlaceholders() {
		return React.createElement(PostPlaceholder, { key: 'placeholder-scroll-' + this.props.page });
	},

	renderPost: function renderPost(post, index) {
		var postImages = this.props.postImages[post.global_ID];
		var renderedPost = React.createElement(Post, {
			ref: post.global_ID,
			key: post.global_ID,
			post: post,
			postImages: postImages,
			fullWidthPost: this.state.postsAtFullWidth,
			path: route.sectionify(this.props.context.pathname)
		});

		if (index === 2 && this.props.selectedSiteId && !this.props.statusSlug) {
			return React.createElement(
				'div',
				{ key: post.global_ID },
				React.createElement(_upgradeNudge2.default, {
					title: this.translate('No Ads with WordPress.com Premium'),
					message: this.translate('Prevent ads from showing on your site.'),
					feature: 'no-adverts',
					event: 'published_posts_no_ads'
				}),
				renderedPost
			);
		} else {
			return renderedPost;
		}
	},

	render: function render() {
		var posts = this.props.posts,
		    placeholderCount = 1,
		    placeholders = [],
		    postList,
		    i;

		// posts have loaded, sites have loaded, and we have a site instance or are viewing all-sites
		if (posts.length && this.props.hasSites) {
			postList = React.createElement(InfiniteList, {
				key: 'list-' + this.props.listId // to reset scroll for new list
				, className: 'posts__list',
				items: posts,
				lastPage: this.props.lastPage,
				fetchingNextPage: this.props.loading,
				guessedItemHeight: GUESSED_POST_HEIGHT,
				fetchNextPage: this.fetchPosts,
				getItemRef: this.getPostRef,
				renderItem: this.renderPost,
				renderLoadingPlaceholders: this.renderLoadingPlaceholders
			});
		} else {
			if (this.props.loading || !this.props.hasSites) {
				for (i = 0; i < placeholderCount; i++) {
					placeholders.push(React.createElement(PostPlaceholder, { key: 'placeholder-' + i }));
				}
			} else {
				placeholders = this.getNoContentMessage();
			}

			postList = React.createElement(
				'div',
				{ className: 'posts__list' },
				placeholders
			);
		}

		return React.createElement(
			'div',
			null,
			postList,
			this.props.lastPage && posts.length ? React.createElement(_listEnd2.default, null) : null
		);
	}
});

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		selectedSiteId: (0, _selectors.getSelectedSiteId)(state),
		hasSites: (0, _hasInitializedSites2.default)(state)
	};
})(PostList);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/posts/post-placeholder.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var Card = __webpack_require__("./client/components/card/index.jsx");

module.exports = React.createClass({

	displayName: 'PostPlaceholder',

	render: function render() {

		return React.createElement(
			Card,
			{ tagName: 'article', className: 'post is-placeholder' },
			React.createElement(
				'div',
				{ className: 'post__body' },
				React.createElement(
					'header',
					{ className: 'post-attribution' },
					React.createElement(
						'span',
						null,
						React.createElement('span', { className: 'post-attribution-avatar is-rounded' }),
						React.createElement(
							'span',
							{ className: 'placeholder-text' },
							this.translate('A Great Author on a Fantastic Site')
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'post__content' },
					React.createElement(
						'h4',
						{ className: 'post__title post__title-link' },
						React.createElement(
							'span',
							{ className: 'placeholder-text' },
							this.translate('Loading Posts…')
						)
					),
					React.createElement(
						'div',
						{ className: 'post__excerpt' },
						React.createElement(
							'p',
							null,
							React.createElement(
								'span',
								{ className: 'placeholder-text' },
								this.translate('Currently fetching the latest and greatest posts from your site(s). Looking good.')
							)
						)
					)
				),
				React.createElement(
					'footer',
					{ className: 'post__info' },
					React.createElement(
						'div',
						{ className: 'post__time' },
						React.createElement(
							'span',
							{ className: 'placeholder-text' },
							this.translate('Near future')
						)
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'post-controls' },
				React.createElement(
					'ul',
					{ className: 'post-controls__pane post-controls__main-options' },
					React.createElement(
						'li',
						null,
						React.createElement('a', null)
					),
					React.createElement(
						'li',
						null,
						React.createElement('a', null)
					),
					React.createElement(
						'li',
						null,
						React.createElement('a', null)
					),
					React.createElement(
						'li',
						null,
						React.createElement('a', null)
					)
				)
			)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/posts/post-total-views.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _statUpdateIndicator = __webpack_require__("./client/components/stat-update-indicator/index.jsx");

var _statUpdateIndicator2 = _interopRequireDefault(_statUpdateIndicator);

var _queryPostStats = __webpack_require__("./client/components/data/query-post-stats/index.jsx");

var _queryPostStats2 = _interopRequireDefault(_queryPostStats);

var _querySites = __webpack_require__("./client/components/data/query-sites/index.jsx");

var _querySites2 = _interopRequireDefault(_querySites);

var _selectors = __webpack_require__("./client/state/stats/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
function PostTotalViews(_ref) {
	var clickHandler = _ref.clickHandler,
	    numberFormat = _ref.numberFormat,
	    post = _ref.post,
	    slug = _ref.slug,
	    translate = _ref.translate,
	    viewCount = _ref.viewCount;
	var postId = post.ID,
	    siteId = post.site_ID;

	var viewsCountDisplay = '',
	    viewsTitle = void 0;

	if (viewCount) {
		viewsCountDisplay = numberFormat(viewCount);
		viewsTitle = translate('%(count)s Total View', '%(count)s Total Views', {
			count: viewCount,
			args: {
				count: viewCount
			}
		});
	} else {
		viewsTitle = translate('Total Views');
	}

	if (!slug) {
		return _react2.default.createElement(_querySites2.default, { siteId: siteId });
	}

	return _react2.default.createElement(
		'a',
		{ href: '/stats/post/' + postId + '/' + slug,
			className: (0, _classnames2.default)({
				'post__total-views': true,
				'is-empty': !viewsCountDisplay
			}),
			title: viewsTitle,
			onClick: clickHandler },
		_react2.default.createElement(_queryPostStats2.default, { siteId: siteId, postId: postId, fields: ['views'] }),
		_react2.default.createElement(_gridicons2.default, { icon: 'visible', size: 24 }),
		_react2.default.createElement(
			_statUpdateIndicator2.default,
			{ updateOn: viewsCountDisplay },
			viewsCountDisplay
		)
	);
}

/**
 * Internal dependencies
 */


PostTotalViews.propTypes = {
	clickHandler: _react.PropTypes.func,
	numberFormat: _react.PropTypes.func,
	post: _react.PropTypes.object.isRequired,
	slug: _react.PropTypes.string,
	translate: _react.PropTypes.func,
	viewCount: _react.PropTypes.number
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var post = ownProps.post;

	var viewCount = (0, _selectors.getPostStat)(state, post.site_ID, post.ID, 'views');

	return {
		slug: (0, _selectors2.getSiteSlug)(state, post.site_ID),
		viewCount: viewCount
	};
})((0, _i18nCalypso.localize)(PostTotalViews));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/posts/post.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _partial2 = __webpack_require__("./node_modules/lodash/partial.js");

var _partial3 = _interopRequireDefault(_partial2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__("./node_modules/react-addons-css-transition-group/index.js");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _shallowEqual = __webpack_require__("./node_modules/react-pure-render/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _postControls = __webpack_require__("./client/my-sites/posts/post-controls.jsx");

var _postControls2 = _interopRequireDefault(_postControls);

var _postFormat = __webpack_require__("./client/components/post-format/index.js");

var _postFormat2 = _interopRequireDefault(_postFormat);

var _postHeader = __webpack_require__("./client/my-sites/posts/post-header.jsx");

var _postHeader2 = _interopRequireDefault(_postHeader);

var _postImage = __webpack_require__("./client/my-sites/post/post-image/index.jsx");

var _postImage2 = _interopRequireDefault(_postImage);

var _postExcerpt = __webpack_require__("./client/components/post-excerpt/index.jsx");

var _postExcerpt2 = _interopRequireDefault(_postExcerpt);

var _updatePostStatus = __webpack_require__("./client/components/update-post-status/index.js");

var _updatePostStatus2 = _interopRequireDefault(_updatePostStatus);

var _utils = __webpack_require__("./client/lib/posts/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _actions2 = __webpack_require__("./client/state/ui/preview/actions.js");

var _actions3 = __webpack_require__("./client/state/ui/layout-focus/actions.js");

var _selectors = __webpack_require__("./client/state/posts/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors4 = __webpack_require__("./client/state/ui/editor/selectors.js");

var _comments = __webpack_require__("./client/blocks/comments/index.jsx");

var _comments2 = _interopRequireDefault(_comments);

var _postShare = __webpack_require__("./client/blocks/post-share/index.jsx");

var _postShare2 = _interopRequireDefault(_postShare);

var _postActions = __webpack_require__("./client/blocks/post-actions/index.jsx");

var _postActions2 = _interopRequireDefault(_postActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var recordEvent = (0, _partial3.default)(_actions.recordGoogleEvent, 'Posts');

function checkPropsChange(currentProps, nextProps, propArr) {
	for (var i = 0; i < propArr.length; i++) {
		var prop = propArr[i];
		if (nextProps[prop] !== currentProps[prop]) {
			return true;
		}
	}
	return false;
}

var Post = function (_Component) {
	(0, _inherits3.default)(Post, _Component);

	function Post() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Post);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			showComments: false,
			showShare: false,
			commentsFilter: 'all'
		}, _this.publishPost = function () {
			_this.props.updatePostStatus('publish');
			_this.props.recordPublishPost();
		}, _this.restorePost = function () {
			_this.props.updatePostStatus('restore');
			_this.props.recordRestorePost();
		}, _this.deletePost = function () {
			_this.props.updatePostStatus('delete');
			_this.props.recordDeletePost();
		}, _this.trashPost = function () {
			_this.props.updatePostStatus('trash');
			_this.props.recordTrashPost();
		}, _this.toggleComments = function () {
			_this.setState({
				showComments: !_this.state.showComments
			});
			_this.props.recordCommentIconClick();
		}, _this.toggleShare = function () {
			_this.setState({ showShare: !_this.state.showShare });
		}, _this.setCommentsFilter = function (commentsFilter) {
			_this.setState({ commentsFilter: commentsFilter });
		}, _this.viewPost = function (event) {
			event.preventDefault();
			var _this$props = _this.props,
			    isPreviewable = _this$props.isPreviewable,
			    previewUrl = _this$props.previewUrl,
			    selectedSiteId = _this$props.selectedSiteId;


			if (_this.props.post.status && _this.props.post.status === 'future') {
				_this.props.recordPreviewPost();
			} else {
				_this.props.recordViewPost();
			}

			if ((!isPreviewable || !selectedSiteId) && (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) === 'object') {
				return window.open(previewUrl);
			}

			_this.props.setPreviewUrl(previewUrl);
			_this.props.setLayoutFocus('preview');
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Post, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps, nextState) {
			if (!(0, _shallowEqual2.default)(this.state, nextState)) {
				return true;
			}

			var propsToCheck = ['post', 'postImages', 'fullWidthPost', 'path',

			// via updatePostStatus
			'previousStatus', 'showMoreOptions', 'updated', 'updatedStatus'];
			return checkPropsChange(this.props, nextProps, propsToCheck);
		}
	}, {
		key: 'getPostClass',
		value: function getPostClass() {
			return (0, _classnames2.default)('post', {
				'is-protected': !!this.props.post.password,
				'show-more-options': this.props.showMoreOptions
			});
		}
	}, {
		key: 'getTitle',
		value: function getTitle() {
			if (this.props.post.title) {
				return _react2.default.createElement(
					'a',
					{
						href: this.getContentLinkURL(),
						className: 'post__title-link post__content-link',
						target: this.getContentLinkTarget(),
						onClick: this.props.recordPostTitleClick },
					_react2.default.createElement(_postFormat2.default, { format: this.props.post.format }),
					_react2.default.createElement(
						'h4',
						{ className: 'post__title' },
						this.props.post.title
					)
				);
			}
		}
	}, {
		key: 'getPostImage',
		value: function getPostImage() {
			if (!this.props.postImages) {
				if (this.props.post.canonical_image) {
					return _react2.default.createElement('div', { className: 'post-image is-placeholder' });
				}

				return null;
			}

			return _react2.default.createElement(_postImage2.default, { postImages: this.props.postImages });
		}
	}, {
		key: 'getTrimmedExcerpt',
		value: function getTrimmedExcerpt() {
			var excerpt = this.props.post.excerpt;
			return excerpt.length <= 220 ? excerpt : excerpt.substring(0, 220) + '\u2026';
		}
	}, {
		key: 'getExcerpt',
		value: function getExcerpt() {
			var excerptElement = void 0;

			if (!this.props.post.excerpt) {
				return null;
			}

			if (this.props.post.format === 'quote') {
				excerptElement = _react2.default.createElement(_postExcerpt2.default, { content: this.getTrimmedExcerpt(), className: 'post__quote' });
			} else {
				excerptElement = _react2.default.createElement(_postExcerpt2.default, { content: this.getTrimmedExcerpt() });
			}

			return _react2.default.createElement(
				'a',
				{
					href: this.getContentLinkURL(),
					className: 'post__excerpt post__content-link',
					target: this.getContentLinkTarget(),
					onClick: this.props.recordPostExcerptClick
				},
				excerptElement
			);
		}
	}, {
		key: 'getHeader',
		value: function getHeader() {
			if (this.props.selectedSiteId && this.props.isPostFromSingleUserSite) {
				return null;
			}

			return _react2.default.createElement(_postHeader2.default, { siteId: this.props.post.site_ID,
				author: this.props.post.author ? this.props.post.author.name : '',
				path: this.props.path,
				showAuthor: !this.props.isPostFromSingleUserSite });
		}
	}, {
		key: 'getContent',
		value: function getContent() {
			var post = this.props.post;

			if (post.title || post.excerpt) {
				return _react2.default.createElement(
					'div',
					{ className: 'post__content' },
					this.getTitle(),
					this.getExcerpt()
				);
			}
		}
	}, {
		key: 'getContentLinkURL',
		value: function getContentLinkURL() {
			var post = this.props.post;

			if (_utils2.default.userCan('edit_post', post)) {
				return this.props.editUrl;
			} else if (post.status === 'trash') {
				return null;
			}
			return post.URL;
		}
	}, {
		key: 'getContentLinkTarget',
		value: function getContentLinkTarget() {
			if (_utils2.default.userCan('edit_post', this.props.post)) {
				return null;
			}

			return '_blank';
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_card2.default,
				{ tagName: 'article', className: this.getPostClass() },
				_react2.default.createElement(
					'div',
					{ className: 'post__body' },
					this.getHeader(),
					this.getPostImage(),
					this.getContent(),
					_react2.default.createElement(_postActions2.default, { siteId: this.props.post.site_ID,
						post: this.props.post,
						toggleComments: this.toggleComments })
				),
				_react2.default.createElement(_postControls2.default, {
					post: this.props.post,
					editURL: this.props.editUrl,
					fullWidth: this.props.fullWidthPost,
					onShowMore: this.props.showMoreControls,
					onHideMore: this.props.hideMoreControls,
					onPublish: this.publishPost,
					onTrash: this.trashPost,
					onDelete: this.deletePost,
					onRestore: this.restorePost,
					onToggleShare: this.toggleShare,
					onViewPost: this.viewPost,
					siteId: this.props.post.site_ID,
					current: this.state.showShare ? 'share' : null
				}),
				_react2.default.createElement(
					_reactAddonsCssTransitionGroup2.default,
					{
						transitionName: 'updated-trans',
						transitionEnterTimeout: 300,
						transitionLeaveTimeout: 300 },
					this.props.buildUpdateTemplate()
				),
				this.state.showComments && _react2.default.createElement(_comments2.default, {
					showCommentCount: false,
					commentCount: this.props.post.discussion.comment_count,
					post: this.props.post,
					showFilters: (0, _config.isEnabled)('comments/filters-in-posts'),
					showModerationTools: (0, _config.isEnabled)('comments/moderation-tools-in-posts'),
					commentsFilter: _config2.default.isEnabled('comments/filters-in-posts') ? this.state.commentsFilter : 'approved',
					onFilterChange: this.setCommentsFilter,
					onCommentsUpdate: _noop3.default
				}),
				this.state.showShare && _config2.default.isEnabled('republicize') && _react2.default.createElement(_postShare2.default, {
					post: this.props.post,
					siteId: this.props.post.site_ID
				})
			);
		}
	}]);
	return Post;
}(_react.Component);

Post.propTypes = {
	// connected via Redux
	setPreviewUrl: _react.PropTypes.func.isRequired,
	setLayoutFocus: _react.PropTypes.func.isRequired,
	recordViewPost: _react.PropTypes.func.isRequired,
	recordPreviewPost: _react.PropTypes.func.isRequired,
	recordCommentIconClick: _react.PropTypes.func.isRequired,
	recordPostTitleClick: _react.PropTypes.func.isRequired,
	recordPostExcerptClick: _react.PropTypes.func.isRequired,
	recordPublishPost: _react.PropTypes.func.isRequired,
	recordRestorePost: _react.PropTypes.func.isRequired,
	recordDeletePost: _react.PropTypes.func.isRequired,
	recordTrashPost: _react.PropTypes.func.isRequired,

	// connected via updatePostStatus
	buildUpdateTemplate: _react.PropTypes.func.isRequired,
	togglePageActions: _react.PropTypes.func.isRequired,
	updatePostStatus: _react.PropTypes.func.isRequired,
	updated: _react.PropTypes.bool.isRequired,
	updatedStatus: _react.PropTypes.string,
	previousStatus: _react.PropTypes.string,
	showMoreOptions: _react.PropTypes.bool.isRequired,
	showPageActions: _react.PropTypes.bool.isRequired
};


var analyticsEvents = [['recordViewPost', 'Clicked View Post'], ['recordPreviewPost', 'Clicked Preview Post'], ['recordCommentIconClick', 'Clicked Post Comment Icon/Number'], ['recordPostTitleClick', 'Clicked Post Title'], ['recordPostExcerptClick', 'Clicked Post Excerpt'], ['recordPublishPost', 'Clicked Publish Post'], ['recordRestorePost', 'Clicked Restore Post'], ['recordDeletePost', 'Clicked Delete Post'], ['recordTrashPost', 'Clicked Trash Post']];

var mapDispatch = (0, _extends3.default)({
	setPreviewUrl: _actions2.setPreviewUrl,
	setLayoutFocus: _actions3.setLayoutFocus
}, analyticsEvents.reduce(function (actions, _ref2) {
	var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
	    key = _ref3[0],
	    event = _ref3[1];

	actions[key] = (0, _partial3.default)(recordEvent, event);
	return actions;
}, {}));

exports.default = (0, _reactRedux.connect)(function (state, _ref4) {
	var post = _ref4.post;

	var selectedSiteId = (0, _selectors3.getSelectedSiteId)(state);
	return {
		editUrl: (0, _selectors4.getEditorPath)(state, post.site_ID, post.ID, 'post'),
		isPostFromSingleUserSite: (0, _selectors2.isSingleUserSite)(state, post.site_ID),
		isPreviewable: false !== (0, _selectors2.isSitePreviewable)(state, post.site_ID),
		selectedSiteId: selectedSiteId,

		/*
   * getPostPreviewUrl() relies on the post to be in Redux.
   *
   * There is an out of sync issue, because the posts list is fetched
   * through Flux and the Redux store is not filled with the proper
   * Posts data.
   *
   * This is a hack to work around that issue for the moment. It must
   * be removed when the posts list is updated to fetch the posts
   * through the newer QueryPosts component.
   *
   * FIXME(biskobe,mcsf): undo hack
   * //previewUrl: getPostPreviewUrl( state, post.site_ID, post.ID ),
   */
		previewUrl: (0, _selectors.getPostPreviewUrl)(state, post.site_ID, post.ID, { __forceUseRawPost: post })
	};
}, mapDispatch)((0, _updatePostStatus2.default)((0, _i18nCalypso.localize)(Post)));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/posts/posts-navigation.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _segmented = __webpack_require__("./client/components/section-nav/segmented.jsx");

var _segmented2 = _interopRequireDefault(_segmented);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _search = __webpack_require__("./client/components/search/index.jsx");

var _search2 = _interopRequireDefault(_search);

var _urlSearch = __webpack_require__("./client/lib/mixins/url-search/index.js");

var _urlSearch2 = _interopRequireDefault(_urlSearch);

var _postCountsStore = __webpack_require__("./client/lib/posts/post-counts-store.js");

var _postCountsStore2 = _interopRequireDefault(_postCountsStore);

var _gravatar = __webpack_require__("./client/components/gravatar/index.jsx");

var _gravatar2 = _interopRequireDefault(_gravatar);

var _user = __webpack_require__("./client/lib/user/index.js");

var _user2 = _interopRequireDefault(_user);

var _areAllSitesSingleUser = __webpack_require__("./client/state/selectors/are-all-sites-single-user.js");

var _areAllSitesSingleUser2 = _interopRequireDefault(_areAllSitesSingleUser);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var debug = new _debug2.default('calypso:posts-navigation'); /**
                                                              * External Dependencies
                                                              */

var user = (0, _user2.default)();

// Path converter
var statusToDescription = {
	publish: 'published',
	draft: 'drafts',
	future: 'scheduled',
	trash: 'trashed'
};

var PostsNavigation = _react2.default.createClass({
	displayName: 'PostsNavigation',

	propTypes: {
		context: _react2.default.PropTypes.object.isRequired,
		author: _react2.default.PropTypes.number,
		statusSlug: _react2.default.PropTypes.string,
		search: _react2.default.PropTypes.string
	},

	mixins: [_urlSearch2.default],

	getInitialState: function getInitialState() {
		var counts = this._getCounts(),
		    state = {
			show: true,
			loading: true,
			counts: !this.props.siteId ? this._defaultCounts() : this._getCounts()
		};

		if (!this.props.siteId || (0, _keys2.default)(counts).length) {
			state.loading = false;
		}

		return state;
	},
	componentWillMount: function componentWillMount() {
		_postCountsStore2.default.on('change', this._updatePostCounts);
	},
	componentWillUnmount: function componentWillUnmount() {
		_postCountsStore2.default.off('change', this._updatePostCounts);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.siteId !== nextProps.siteId || this.props.author !== nextProps.author || this.props.statusSlug !== nextProps.statusSlug) {
			this._setPostCounts(nextProps.siteId, nextProps.author ? 'mine' : 'all');
		}
	},
	render: function render() {
		if (!this.state.show) {
			return null;
		}

		if (this.state.loading) {
			return _react2.default.createElement(_sectionNav2.default, null);
		}

		var author = this.props.author ? '/my' : '',
		    statusSlug = this.props.statusSlug ? '/' + this.props.statusSlug : '',
		    siteFilter = this.props.siteSlug ? '/' + this.props.siteSlug : '';

		var showMyFilter = true;

		this.filterStatuses = {
			publish: this.translate('Published', { context: 'Filter label for posts list' }),
			draft: this.translate('Drafts', { context: 'Filter label for posts list' }),
			future: this.translate('Scheduled', { context: 'Filter label for posts list' }),
			trash: this.translate('Trashed', { context: 'Filter label for posts list' })
		};

		this.filterScope = {
			me: this.translate('Me', { context: 'Filter label for posts list' }),
			everyone: this.translate('Everyone', { context: 'Filter label for posts list' })
		};

		this.strings = {
			status: this.translate('Status', { context: 'Filter group label for tabs' }),
			author: this.translate('Author', { context: 'Filter group label for segmented' })
		};

		var statusTabs = this._getStatusTabs(author, siteFilter);
		var authorSegmented = this._getAuthorSegmented(statusSlug, siteFilter);

		if (this.props.siteId) {
			if (this.props.isSingleUser || this.props.isJetpack) {
				showMyFilter = false;
			}
		} else if (this.props.allSingleSites) {
			showMyFilter = false;
		}

		var mobileHeaderText = this._getMobileHeaderText(showMyFilter, statusTabs.selectedText, authorSegmented.selectedText);

		return _react2.default.createElement(
			_sectionNav2.default,
			{ selectedText: mobileHeaderText },
			statusTabs.element,
			showMyFilter ? authorSegmented.element : null,
			_react2.default.createElement(_search2.default, {
				pinned: true,
				fitsContainer: true,
				onSearch: this.doSearch,
				initialValue: this.props.search,
				placeholder: 'Search ' + statusTabs.selectedText + '...',
				analyticsGroup: 'Posts',
				delaySearch: true })
		);
	},
	_getStatusTabs: function _getStatusTabs(author, siteFilter) {
		var statusItems = [],
		    status,
		    selectedText,
		    selectedCount;

		for (status in this.filterStatuses) {
			if ('undefined' === typeof this.state.counts[status] && 'publish' !== status) {
				continue;
			}

			var path = '/posts' + author + ('publish' === status ? '' : '/' + statusToDescription[status]) + siteFilter;

			var textItem = this.filterStatuses[status];

			var count = this.state.counts[status];

			if (path === this.props.context.pathname) {
				selectedText = textItem;

				selectedCount = count;
			}

			if ('publish' === status && !count) {
				count = 0;
			}

			if (null === count || false === count) {
				count = 0;
			}

			statusItems.push(_react2.default.createElement(
				_item2.default,
				{
					className: 'is-' + status,
					key: 'statusTabs' + path,
					path: path,
					count: this.props.siteId && count,
					value: textItem,
					selected: path === this.props.context.pathname },
				textItem
			));
		}

		// set selectedText as `published` as default
		selectedText = selectedText || 'published';
		selectedCount = selectedCount || this.getCountByStatus('publish');

		var tabs = _react2.default.createElement(
			_tabs2.default,
			{
				label: this.strings.status,
				selectedText: selectedText,
				selectedCount: selectedCount
			},
			statusItems
		);

		return {
			element: tabs,
			selectedText: selectedText
		};
	},
	_getAuthorSegmented: function _getAuthorSegmented(statusSlug, siteFilter) {
		var scopeItems = [],
		    selectedText,
		    scope;

		for (scope in this.filterScope) {
			var textItem = this.filterScope[scope];
			var isMe = 'me' === scope;
			var path = (isMe ? '/posts/my' : '/posts') + statusSlug + siteFilter;

			if (path === this.props.context.pathname) {
				selectedText = textItem;
			}

			scopeItems.push(_react2.default.createElement(
				_item2.default,
				{
					key: 'authorSegmented' + path,
					path: path,
					selected: path === this.props.context.pathname
				},
				textItem,
				isMe && _react2.default.createElement(_gravatar2.default, { size: 16, user: user.get() })
			));
		}

		return {
			element: _react2.default.createElement(
				_segmented2.default,
				{ label: this.strings.author },
				scopeItems
			),
			selectedText: selectedText
		};
	},
	_getMobileHeaderText: function _getMobileHeaderText(showMyFilter, statusSelectedText, authorSelectedText) {
		if (!showMyFilter) {
			return statusSelectedText;
		}

		return _react2.default.createElement(
			'span',
			null,
			_react2.default.createElement(
				'span',
				null,
				statusSelectedText
			),
			_react2.default.createElement(
				'small',
				null,
				authorSelectedText
			)
		);
	},
	_defaultCounts: function _defaultCounts() {
		var default_options = {},
		    status;

		for (status in statusToDescription) {
			default_options[status] = false;
		}

		return default_options;
	},
	_defaultStateOptions: function _defaultStateOptions() {
		this.setState({
			show: true,
			loading: false,
			counts: this._defaultCounts()
		});
	},


	/**
  * Set immediately post filters state
  *
  * @param {String} siteId - site ID
  * @param {String} scope - scope `all` or `mine`
  * @return {void}
  */
	_setPostCounts: function _setPostCounts(siteId, scope) {
		// print default filters for `All my Sites`
		if (!siteId || null === this.props.siteId) {
			return this._defaultStateOptions();
		}

		if (!_postCountsStore2.default.getTotalCount(siteId, 'all')) {
			return this.setState({
				show: true,
				loading: true
			});
		}

		this.setState({
			show: true,
			loading: false,
			counts: this._getCounts(siteId, scope)
		});
	},
	_updatePostCounts: function _updatePostCounts() {
		var siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.siteId;
		var scope = arguments[1];

		scope = scope || (this.props.author ? 'mine' : 'all');

		// is `All my sites` selected`
		if (!this.props.siteId) {
			return this._defaultStateOptions();
		}

		var state = {
			show: true,
			loading: false,
			counts: {}
		};

		if (_postCountsStore2.default.getTotalCount(siteId, 'all')) {
			state.counts = this._getCounts(siteId, scope);
		} else {
			debug('[%s] clean counts', siteId || 'All my sites');
			state.show = false;
			state.counts = {};
		}

		this.setState(state);
	},


	/**
  * Return a counts object depending on current
  * counts for `all` scope, filling with zeros for
  * `me` scope.
  * Also calc and remove unallowed statuses.
  *
  * @param {String} siteId - Site identifier
  * @param {String} [scope] - Optional scope (mine or all)
  * @return {Object} counts
  */
	_getCounts: function _getCounts() {
		var siteId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.siteId;
		var scope = arguments[1];

		var counts = {},
		    status;

		scope = scope || (this.props.author ? 'mine' : 'all');
		var all = _postCountsStore2.default.get(siteId, 'all');
		var mine = _postCountsStore2.default.get(siteId, 'mine');

		// make a copy of counts object
		for (status in all) {
			counts[status] = 'all' === scope ? all[status] : mine[status] || 0;
		}

		// join 'draft' and 'pending' statuses in 'draft'
		if (counts.draft || counts.pending) {
			counts.draft = (counts.draft || 0) + (counts.pending || 0);
			delete counts.pending;
		}

		// join 'public' and 'private' statuses in 'publish'
		if (counts.publish || counts.private) {
			counts.publish = (counts.publish || 0) + (counts.private || 0);
			delete counts.private;
		}

		return counts;
	},


	/**
  * Return count of the given status
  *
  * @param {String} status - status type
  * @return {Number|Null} return count of the given status
  */
	getCountByStatus: function getCountByStatus(status) {
		var count = this.state.counts[status];
		return count !== false ? count : null;
	}
});

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	return {
		allSingleSites: (0, _areAllSitesSingleUser2.default)(state),
		isJetpack: (0, _selectors2.isJetpackSite)(state, siteId),
		isSingleUser: (0, _selectors2.isSingleUserSite)(state, siteId),
		siteId: siteId
	};
})(PostsNavigation);
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

/***/ "./client/my-sites/upgrade-nudge/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _selectors = __webpack_require__("./client/state/sites/plans/selectors.js");

var _plans = __webpack_require__("./client/lib/plans/index.js");

var _productsValues = __webpack_require__("./client/lib/products-values/index.js");

var _trackComponentView = __webpack_require__("./client/lib/analytics/track-component-view/index.jsx");

var _trackComponentView2 = _interopRequireDefault(_trackComponentView);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var UpgradeNudge = function (_React$Component) {
	(0, _inherits3.default)(UpgradeNudge, _React$Component);

	function UpgradeNudge() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, UpgradeNudge);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UpgradeNudge.__proto__ || (0, _getPrototypeOf2.default)(UpgradeNudge)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
			var _this$props = _this.props,
			    event = _this$props.event,
			    feature = _this$props.feature,
			    onClick = _this$props.onClick,
			    recordTracks = _this$props.recordTracksEvent;


			if (event || feature) {
				recordTracks('calypso_upgrade_nudge_cta_click', {
					cta_name: event,
					cta_feature: feature,
					cta_size: 'regular'
				});
			}

			onClick();
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(UpgradeNudge, [{
		key: 'shouldDisplay',
		value: function shouldDisplay() {
			var _props = this.props,
			    feature = _props.feature,
			    jetpack = _props.jetpack,
			    planHasFeature = _props.planHasFeature,
			    shouldDisplay = _props.shouldDisplay,
			    site = _props.site;


			if (shouldDisplay) {
				return shouldDisplay();
			}

			if (!site || (typeof site === 'undefined' ? 'undefined' : (0, _typeof3.default)(site)) !== 'object' || typeof site.jetpack !== 'boolean') {
				return false;
			}

			if (feature && planHasFeature) {
				return false;
			}

			if (!feature && !(0, _productsValues.isFreePlan)(site.plan)) {
				return false;
			}

			if (feature === 'no-adverts' && site.options.wordads) {
				return false;
			}

			if (!jetpack && site.jetpack || jetpack && !site.jetpack) {
				return false;
			}

			return true;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    className = _props2.className,
			    compact = _props2.compact,
			    event = _props2.event,
			    feature = _props2.feature,
			    icon = _props2.icon,
			    message = _props2.message,
			    site = _props2.site,
			    title = _props2.title,
			    translate = _props2.translate;

			var classes = (0, _classnames2.default)(className, 'upgrade-nudge');
			var href = this.props.href;


			if (!this.shouldDisplay()) {
				return null;
			}

			if (!href && site) {
				if (feature) {
					href = '/plans/' + site.slug + '?feature=' + feature;
				} else {
					href = '/plans/' + site.slug;
				}
			}

			if (compact) {
				return _react2.default.createElement(
					_button2.default,
					{ className: classes, onClick: this.handleClick, href: href },
					_react2.default.createElement(_gridicons2.default, { className: 'upgrade-nudge__icon', icon: icon }),
					_react2.default.createElement(
						'div',
						{ className: 'upgrade-nudge__info' },
						_react2.default.createElement(
							'span',
							{ className: 'upgrade-nudge__title' },
							title || translate('Upgrade to Premium')
						),
						_react2.default.createElement(
							'span',
							{ className: 'upgrade-nudge__message' },
							message
						)
					)
				);
			}

			return _react2.default.createElement(
				_card2.default,
				{ compact: true, className: classes, onClick: this.handleClick, href: href },
				_react2.default.createElement(_gridicons2.default, { className: 'upgrade-nudge__icon', icon: icon, size: 18 }),
				_react2.default.createElement(
					'div',
					{ className: 'upgrade-nudge__info' },
					_react2.default.createElement(
						'span',
						{ className: 'upgrade-nudge__title' },
						title || translate('Upgrade to Premium')
					),
					_react2.default.createElement(
						'span',
						{ className: 'upgrade-nudge__message' },
						message
					)
				),
				(event || feature) && _react2.default.createElement(_trackComponentView2.default, {
					eventName: 'calypso_upgrade_nudge_impression',
					eventProperties: {
						cta_name: event,
						cta_feature: feature,
						cta_size: 'regular'
					}
				})
			);
		}
	}]);
	return UpgradeNudge;
}(_react2.default.Component);

UpgradeNudge.propTypes = {
	onClick: _propTypes2.default.func,
	className: _propTypes2.default.string,
	message: _propTypes2.default.string,
	icon: _propTypes2.default.string,
	event: _propTypes2.default.string,
	href: _propTypes2.default.string,
	jetpack: _propTypes2.default.bool,
	compact: _propTypes2.default.bool,
	feature: _propTypes2.default.oneOf([false].concat((0, _toConsumableArray3.default)((0, _plans.getValidFeatureKeys)()))),
	shouldDisplay: _propTypes2.default.func,
	site: _propTypes2.default.object,
	translate: _propTypes2.default.func
};
UpgradeNudge.defaultProps = {
	onClick: _noop3.default,
	message: 'And get your own domain address.',
	icon: 'star',
	event: null,
	jetpack: false,
	feature: false,
	compact: false,
	shouldDisplay: null,
	site: null,
	translate: _identity3.default
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	return {
		site: (0, _selectors2.getSelectedSite)(state),
		planHasFeature: (0, _selectors.hasFeature)(state, siteId, ownProps.feature)
	};
}, { recordTracksEvent: _actions.recordTracksEvent })((0, _i18nCalypso.localize)(UpgradeNudge));
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

/***/ "./client/state/pages/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFrontPage = isFrontPage;
exports.isPostsPage = isPostsPage;

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function isFrontPage(state, siteId, pageId) {
  return pageId === (0, _selectors.getSiteFrontPage)(state, siteId);
} /**
   * External dependencies
   */

/**
 * Internal dependencies
 */
function isPostsPage(state, siteId, pageId) {
  return pageId === (0, _selectors.getSitePostsPage)(state, siteId);
}

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

/***/ "./client/state/stats/posts/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.receivePostStats = receivePostStats;
exports.requestPostStats = requestPostStats;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action object to be used in signalling that post stat for a site,
 * post and stat have been received.
 *
 * @param  {Number} siteId Site ID
 * @param  {Number} postId Post Id
 * @param  {Array}  stats  The received stats
 * @return {Object}        Action object
 */
/**
 * Internal dependencies
 */
function receivePostStats(siteId, postId, stats) {
	return {
		type: _actionTypes.POST_STATS_RECEIVE,
		siteId: siteId,
		postId: postId,
		stats: stats
	};
}

/**
 * Returns an action thunk which, when invoked, triggers a network request to
 * retrieve post stat for a site and a post.
 *
 * @param  {Number} siteId Site ID
 * @param  {Number} postId Post Id
 * @param  {String} fields Stat Fields to fetch
 * @return {Function}      Action thunk
 */
function requestPostStats(siteId, postId) {
	var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	return function (dispatch) {
		dispatch({
			type: _actionTypes.POST_STATS_REQUEST,
			postId: postId,
			siteId: siteId,
			fields: fields
		});

		return _wp2.default.site(siteId).statsPostViews(postId, { fields: fields.join() }).then(function (stats) {
			dispatch(receivePostStats(siteId, postId, stats));
			dispatch({
				type: _actionTypes.POST_STATS_REQUEST_SUCCESS,
				siteId: siteId,
				postId: postId,
				fields: fields
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.POST_STATS_REQUEST_FAILURE,
				siteId: siteId,
				postId: postId,
				fields: fields,
				error: error
			});
		});
	};
}

/***/ }),

/***/ "./client/state/stats/posts/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

exports.isRequestingPostStats = isRequestingPostStats;
exports.getPostStat = getPostStat;
exports.getPostStats = getPostStats;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if current requesting post stat for the specified site ID,
 * post ID and stat key, or * false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Number}  postId Post Id
 * @param  {Object}  fields Stat fields
 * @return {Boolean}        Whether post stat is being requested
 */
/**
 * External dependencies
 */
function isRequestingPostStats(state, siteId, postId) {
  var fields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  return (0, _get3.default)(state.stats.posts.requesting, [siteId, postId, fields.join()], false);
}

/**
 * Returns the stat value for the specified site ID,
 * post ID and stat key
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Number}  postId Post Id
 * @param  {String}  stat   Stat Key
 * @return {*}              Stat value
 */
function getPostStat(state, siteId, postId, stat) {
  return (0, _get3.default)(state.stats.posts.items, [siteId, postId, stat], null);
}

/**
 * Returns the stats for the for the specified site ID, postId
 *
 * @param  {Object}  state  Global state tree
 * @param  {Number}  siteId Site ID
 * @param  {Number}  postId Post Id
 * @return {Object}         Stats
 */
function getPostStats(state, siteId, postId) {
  return (0, _get3.default)(state.stats.posts.items, [siteId, postId], null);
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

/***/ "./node_modules/fbjs/lib/CSSCore.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

/**
 * The CSSCore module specifies the API (and implements most of the methods)
 * that should be used when dealing with the display of elements (via their
 * CSS classes and visibility on screen. It is an API focused on mutating the
 * display and not reading it as no logical state should be encoded in the
 * display of elements.
 */

/* Slow implementation for browsers that don't natively support .matches() */
function matchesSelector_SLOW(element, selector) {
  var root = element;
  while (root.parentNode) {
    root = root.parentNode;
  }

  var all = root.querySelectorAll(selector);
  return Array.prototype.indexOf.call(all, element) !== -1;
}

var CSSCore = {

  /**
   * Adds the class passed in to the element if it doesn't already have it.
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   */
  addClass: function addClass(element, className) {
    !!/\s/.test(className) ?  false ? invariant(false, 'CSSCore.addClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

    if (className) {
      if (element.classList) {
        element.classList.add(className);
      } else if (!CSSCore.hasClass(element, className)) {
        element.className = element.className + ' ' + className;
      }
    }
    return element;
  },

  /**
   * Removes the class passed in from the element
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @return {DOMElement} the element passed in
   */
  removeClass: function removeClass(element, className) {
    !!/\s/.test(className) ?  false ? invariant(false, 'CSSCore.removeClass takes only a single class name. "%s" contains ' + 'multiple classes.', className) : invariant(false) : void 0;

    if (className) {
      if (element.classList) {
        element.classList.remove(className);
      } else if (CSSCore.hasClass(element, className)) {
        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
        .replace(/^\s*|\s*$/g, ''); // trim the ends
      }
    }
    return element;
  },

  /**
   * Helper to add or remove a class from an element based on a condition.
   *
   * @param {DOMElement} element the element to set the class on
   * @param {string} className the CSS className
   * @param {*} bool condition to whether to add or remove the class
   * @return {DOMElement} the element passed in
   */
  conditionClass: function conditionClass(element, className, bool) {
    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
  },

  /**
   * Tests whether the element has the class specified.
   *
   * @param {DOMNode|DOMWindow} element the element to check the class on
   * @param {string} className the CSS className
   * @return {boolean} true if the element has the class, false if not
   */
  hasClass: function hasClass(element, className) {
    !!/\s/.test(className) ?  false ? invariant(false, 'CSS.hasClass takes only a single class name.') : invariant(false) : void 0;
    if (element.classList) {
      return !!className && element.classList.contains(className);
    }
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
  },

  /**
   * Tests whether the element matches the selector specified
   *
   * @param {DOMNode|DOMWindow} element the element that we are querying
   * @param {string} selector the CSS selector
   * @return {boolean} true if the element matches the selector, false if not
   */
  matchesSelector: function matchesSelector(element, selector) {
    var matchesImpl = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector || function (s) {
      return matchesSelector_SLOW(element, s);
    };
    return matchesImpl.call(element, selector);
  }

};

module.exports = CSSCore;

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

/***/ "./node_modules/react-addons-css-transition-group/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/react/lib/ReactCSSTransitionGroup.js");

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


/***/ }),

/***/ "./node_modules/react/lib/ReactAddonsDOMDependencies.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactDOM = __webpack_require__("./node_modules/react-dom/lib/ReactDOM.js");
var ReactInstanceMap = __webpack_require__("./node_modules/react-dom/lib/ReactInstanceMap.js");

exports.getReactDOM = function () {
  return ReactDOM;
};

exports.getReactInstanceMap = function () {
  return ReactInstanceMap;
};

if (false) {
  var ReactPerf = require('react-dom/lib/ReactPerf');
  var ReactTestUtils = require('react-dom/lib/ReactTestUtils');

  exports.getReactPerf = function () {
    return ReactPerf;
  };

  exports.getReactTestUtils = function () {
    return ReactTestUtils;
  };
}

/***/ }),

/***/ "./node_modules/react/lib/ReactCSSTransitionGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__("./node_modules/object-assign/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("./node_modules/react/lib/React.js");

var ReactTransitionGroup = __webpack_require__("./node_modules/react/lib/ReactTransitionGroup.js");
var ReactCSSTransitionGroupChild = __webpack_require__("./node_modules/react/lib/ReactCSSTransitionGroupChild.js");

function createTransitionTimeoutPropValidator(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to ReactCSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }
  };
}

/**
 * An easy way to perform CSS transitions and animations when a React component
 * enters or leaves the DOM.
 * See https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup
 */

var ReactCSSTransitionGroup = function (_React$Component) {
  _inherits(ReactCSSTransitionGroup, _React$Component);

  function ReactCSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReactCSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      // We need to provide this childFactory so that
      // ReactCSSTransitionGroupChild can receive updates to name, enter, and
      // leave while it is leaving.
      return React.createElement(ReactCSSTransitionGroupChild, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReactCSSTransitionGroup.prototype.render = function render() {
    return React.createElement(ReactTransitionGroup, _assign({}, this.props, { childFactory: this._wrapChild }));
  };

  return ReactCSSTransitionGroup;
}(React.Component);

ReactCSSTransitionGroup.displayName = 'ReactCSSTransitionGroup';
ReactCSSTransitionGroup.propTypes = {
  transitionName: ReactCSSTransitionGroupChild.propTypes.name,

  transitionAppear: React.PropTypes.bool,
  transitionEnter: React.PropTypes.bool,
  transitionLeave: React.PropTypes.bool,
  transitionAppearTimeout: createTransitionTimeoutPropValidator('Appear'),
  transitionEnterTimeout: createTransitionTimeoutPropValidator('Enter'),
  transitionLeaveTimeout: createTransitionTimeoutPropValidator('Leave')
};
ReactCSSTransitionGroup.defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};


module.exports = ReactCSSTransitionGroup;

/***/ }),

/***/ "./node_modules/react/lib/ReactCSSTransitionGroupChild.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var React = __webpack_require__("./node_modules/react/lib/React.js");
var ReactAddonsDOMDependencies = __webpack_require__("./node_modules/react/lib/ReactAddonsDOMDependencies.js");

var CSSCore = __webpack_require__("./node_modules/fbjs/lib/CSSCore.js");
var ReactTransitionEvents = __webpack_require__("./node_modules/react/lib/ReactTransitionEvents.js");

var onlyChild = __webpack_require__("./node_modules/react/lib/onlyChild.js");

var TICK = 17;

var ReactCSSTransitionGroupChild = React.createClass({
  displayName: 'ReactCSSTransitionGroupChild',

  propTypes: {
    name: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.shape({
      enter: React.PropTypes.string,
      leave: React.PropTypes.string,
      active: React.PropTypes.string
    }), React.PropTypes.shape({
      enter: React.PropTypes.string,
      enterActive: React.PropTypes.string,
      leave: React.PropTypes.string,
      leaveActive: React.PropTypes.string,
      appear: React.PropTypes.string,
      appearActive: React.PropTypes.string
    })]).isRequired,

    // Once we require timeouts to be specified, we can remove the
    // boolean flags (appear etc.) and just accept a number
    // or a bool for the timeout flags (appearTimeout etc.)
    appear: React.PropTypes.bool,
    enter: React.PropTypes.bool,
    leave: React.PropTypes.bool,
    appearTimeout: React.PropTypes.number,
    enterTimeout: React.PropTypes.number,
    leaveTimeout: React.PropTypes.number
  },

  transition: function (animationType, finishCallback, userSpecifiedDelay) {
    var node = ReactAddonsDOMDependencies.getReactDOM().findDOMNode(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timeout = null;

    var endListener = function (e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timeout);

      CSSCore.removeClass(node, className);
      CSSCore.removeClass(node, activeClassName);

      ReactTransitionEvents.removeEndEventListener(node, endListener);

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    CSSCore.addClass(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // If the user specified a timeout delay.
    if (userSpecifiedDelay) {
      // Clean-up the animation after the specified delay
      timeout = setTimeout(endListener, userSpecifiedDelay);
      this.transitionTimeouts.push(timeout);
    } else {
      // DEPRECATED: this listener will be removed in a future version of react
      ReactTransitionEvents.addEndEventListener(node, endListener);
    }
  },

  queueClassAndNode: function (className, node) {
    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.timeout) {
      this.timeout = setTimeout(this.flushClassNameAndNodeQueue, TICK);
    }
  },

  flushClassNameAndNodeQueue: function () {
    if (this.isMounted()) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        CSSCore.addClass(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.timeout = null;
  },

  componentWillMount: function () {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  },

  componentWillUnmount: function () {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  },

  componentWillAppear: function (done) {
    if (this.props.appear) {
      this.transition('appear', done, this.props.appearTimeout);
    } else {
      done();
    }
  },

  componentWillEnter: function (done) {
    if (this.props.enter) {
      this.transition('enter', done, this.props.enterTimeout);
    } else {
      done();
    }
  },

  componentWillLeave: function (done) {
    if (this.props.leave) {
      this.transition('leave', done, this.props.leaveTimeout);
    } else {
      done();
    }
  },

  render: function () {
    return onlyChild(this.props.children);
  }
});

module.exports = ReactCSSTransitionGroupChild;

/***/ }),

/***/ "./node_modules/react/lib/ReactTransitionChildMapping.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var flattenChildren = __webpack_require__("./node_modules/react/lib/flattenChildren.js");

var ReactTransitionChildMapping = {
  /**
   * Given `this.props.children`, return an object mapping key to child. Just
   * simple syntactic sugar around flattenChildren().
   *
   * @param {*} children `this.props.children`
   * @param {number=} selfDebugID Optional debugID of the current internal instance.
   * @return {object} Mapping of key to child
   */
  getChildMapping: function (children, selfDebugID) {
    if (!children) {
      return children;
    }

    if (false) {
      return flattenChildren(children, selfDebugID);
    }

    return flattenChildren(children);
  },

  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */
  mergeChildMappings: function (prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      if (next.hasOwnProperty(key)) {
        return next[key];
      } else {
        return prev[key];
      }
    }

    // For each key of `next`, the list of keys to insert before that key in
    // the combined list
    var nextKeysPending = {};

    var pendingKeys = [];
    for (var prevKey in prev) {
      if (next.hasOwnProperty(prevKey)) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending.hasOwnProperty(nextKey)) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    }

    // Finally, add the keys which didn't appear before any key in `next`
    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }
};

module.exports = ReactTransitionChildMapping;

/***/ }),

/***/ "./node_modules/react/lib/ReactTransitionEvents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ExecutionEnvironment = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js");

var getVendorPrefixedEventName = __webpack_require__("./node_modules/react-dom/lib/getVendorPrefixedEventName.js");

var endEvents = [];

function detectEvents() {
  var animEnd = getVendorPrefixedEventName('animationend');
  var transEnd = getVendorPrefixedEventName('transitionend');

  if (animEnd) {
    endEvents.push(animEnd);
  }

  if (transEnd) {
    endEvents.push(transEnd);
  }
}

if (ExecutionEnvironment.canUseDOM) {
  detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
  addEndEventListener: function (node, eventListener) {
    if (endEvents.length === 0) {
      // If CSS transitions are not supported, trigger an "end animation"
      // event immediately.
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },

  removeEndEventListener: function (node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

module.exports = ReactTransitionEvents;

/***/ }),

/***/ "./node_modules/react/lib/ReactTransitionGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__("./node_modules/object-assign/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__("./node_modules/react/lib/React.js");
var ReactAddonsDOMDependencies = __webpack_require__("./node_modules/react/lib/ReactAddonsDOMDependencies.js");
var ReactTransitionChildMapping = __webpack_require__("./node_modules/react/lib/ReactTransitionChildMapping.js");

var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");

/**
 * A basis for animations. When children are declaratively added or removed,
 * special lifecycle hooks are called.
 * See https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
 */

var ReactTransitionGroup = function (_React$Component) {
  _inherits(ReactTransitionGroup, _React$Component);

  function ReactTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReactTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      // TODO: can we get useful debug information to show at this point?
      children: ReactTransitionChildMapping.getChildMapping(_this.props.children)
    }, _this.performAppear = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
      } else {
        _this._handleDoneAppearing(key);
      }
    }, _this._handleDoneAppearing = function (key) {
      var component = _this.refs[key];
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping;
      if (false) {
        currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children, ReactAddonsDOMDependencies.getReactInstanceMap().get(_this)._debugID);
      } else {
        currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
      }

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key);
      }
    }, _this.performEnter = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
      } else {
        _this._handleDoneEntering(key);
      }
    }, _this._handleDoneEntering = function (key) {
      var component = _this.refs[key];
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping;
      if (false) {
        currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children, ReactAddonsDOMDependencies.getReactInstanceMap().get(_this)._debugID);
      } else {
        currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
      }

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key);
      }
    }, _this.performLeave = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.refs[key];
      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key);
      }
    }, _this._handleDoneLeaving = function (key) {
      var component = _this.refs[key];

      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping;
      if (false) {
        currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children, ReactAddonsDOMDependencies.getReactInstanceMap().get(_this)._debugID);
      } else {
        currentChildMapping = ReactTransitionChildMapping.getChildMapping(_this.props.children);
      }

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.performEnter(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _assign({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ReactTransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  ReactTransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key);
      }
    }
  };

  ReactTransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping;
    if (false) {
      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children, ReactAddonsDOMDependencies.getReactInstanceMap().get(this)._debugID);
    } else {
      nextChildMapping = ReactTransitionChildMapping.getChildMapping(nextProps.children);
    }
    var prevChildMapping = this.state.children;

    this.setState({
      children: ReactTransitionChildMapping.mergeChildMappings(prevChildMapping, nextChildMapping)
    });

    var key;

    for (key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(key);
      if (prevChildMapping[key] && !hasNext && !this.currentlyTransitioningKeys[key]) {
        this.keysToLeave.push(key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  ReactTransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  };

  ReactTransitionGroup.prototype.render = function render() {
    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];
    for (var key in this.state.children) {
      var child = this.state.children[key];
      if (child) {
        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(React.cloneElement(this.props.childFactory(child), { ref: key, key: key }));
      }
    }

    // Do not forward ReactTransitionGroup props to primitive DOM nodes
    var props = _assign({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return React.createElement(this.props.component, props, childrenToRender);
  };

  return ReactTransitionGroup;
}(React.Component);

ReactTransitionGroup.displayName = 'ReactTransitionGroup';
ReactTransitionGroup.propTypes = {
  component: React.PropTypes.any,
  childFactory: React.PropTypes.func
};
ReactTransitionGroup.defaultProps = {
  component: 'span',
  childFactory: emptyFunction.thatReturnsArgument
};


module.exports = ReactTransitionGroup;

/***/ }),

/***/ "./node_modules/react/lib/flattenChildren.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var KeyEscapeUtils = __webpack_require__("./node_modules/react/lib/KeyEscapeUtils.js");
var traverseAllChildren = __webpack_require__("./node_modules/react/lib/traverseAllChildren.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && Object({"NODE_ENV":"production"}) && "production" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__("./node_modules/react/lib/ReactComponentTreeHook.js");
}

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 * @param {number=} selfDebugID Optional debugID of the current internal instance.
 */
function flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID) {
  // We found a component instance.
  if (traverseContext && typeof traverseContext === 'object') {
    var result = traverseContext;
    var keyUnique = result[name] === undefined;
    if (false) {
      if (!ReactComponentTreeHook) {
        ReactComponentTreeHook = require('./ReactComponentTreeHook');
      }
      if (!keyUnique) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.%s', KeyEscapeUtils.unescape(name), ReactComponentTreeHook.getStackAddendumByID(selfDebugID)) : void 0;
      }
    }
    if (keyUnique && child != null) {
      result[name] = child;
    }
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children, selfDebugID) {
  if (children == null) {
    return children;
  }
  var result = {};

  if (false) {
    traverseAllChildren(children, function (traverseContext, child, name) {
      return flattenSingleChildIntoContext(traverseContext, child, name, selfDebugID);
    }, result);
  } else {
    traverseAllChildren(children, flattenSingleChildIntoContext, result);
  }
  return result;
}

module.exports = flattenChildren;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

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