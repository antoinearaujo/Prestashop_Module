webpackJsonp(["people"],{

/***/ "./client/blocks/author-selector/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _trim2 = __webpack_require__("./node_modules/lodash/trim.js");

var _trim3 = _interopRequireDefault(_trim2);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _popover = __webpack_require__("./client/components/popover/index.jsx");

var _popover2 = _interopRequireDefault(_popover);

var _menuItem = __webpack_require__("./client/components/popover/menu-item.jsx");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _siteUsersFetcher = __webpack_require__("./client/components/site-users-fetcher/index.jsx");

var _siteUsersFetcher2 = _interopRequireDefault(_siteUsersFetcher);

var _user = __webpack_require__("./client/components/user/index.jsx");

var _user2 = _interopRequireDefault(_user);

var _infiniteList = __webpack_require__("./client/components/infinite-list/index.jsx");

var _infiniteList2 = _interopRequireDefault(_infiniteList);

var _actions = __webpack_require__("./client/lib/users/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _search = __webpack_require__("./client/components/search/index.jsx");

var _search2 = _interopRequireDefault(_search);

var _touchDetect = __webpack_require__("./client/lib/touch-detect/index.js");

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
var debug = (0, _debug2.default)('calypso:author-selector');
var instance = 0;

var SwitcherShell = _react2.default.createClass({
	displayName: 'AuthorSwitcherShell',
	propTypes: {
		users: _react2.default.PropTypes.array,
		fetchingUsers: _react2.default.PropTypes.bool,
		numUsersFetched: _react2.default.PropTypes.number,
		totalUsers: _react2.default.PropTypes.number,
		usersCurrentOffset: _react2.default.PropTypes.number,
		allowSingleUser: _react2.default.PropTypes.bool,
		popoverPosition: _react2.default.PropTypes.string,
		ignoreContext: _react2.default.PropTypes.shape({ getDOMNode: _react2.default.PropTypes.func })
	},

	getInitialState: function getInitialState() {
		return {
			showAuthorMenu: false
		};
	},

	componentWillMount: function componentWillMount() {
		this.instance = instance;
		instance++;
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!nextProps.fetchOptions.siteId || nextProps.fetchOptions.siteId !== this.props.fetchOptions.siteId) {
			this.props.updateSearch(false);
		}
	},

	componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
		var _this = this;

		if (!this.state.showAuthorMenu) {
			return;
		}

		if (!prevState.showAuthorMenu && this.props.users.length > 10 && !(0, _touchDetect.hasTouch)()) {
			setTimeout(function () {
				return _this.refs.authorSelectorSearch.focus();
			}, 0);
		}
	},

	render: function render() {
		var _props = this.props,
		    users = _props.users,
		    fetchNameSpace = _props.fetchNameSpace;

		var infiniteListKey = fetchNameSpace + this.instance;

		if (!this._userCanSelectAuthor()) {
			return _react2.default.createElement(
				'span',
				null,
				this.props.children
			);
		}

		return _react2.default.createElement(
			'span',
			null,
			_react2.default.createElement(
				'span',
				{
					className: 'author-selector__author-toggle',
					onClick: this._toggleShowAuthor,
					tabIndex: -1,
					ref: 'author-selector-toggle'
				},
				this.props.children,
				_react2.default.createElement(_gridicons2.default, { ref: 'authorSelectorChevron', icon: 'chevron-down', size: 16 })
			),
			_react2.default.createElement(
				_popover2.default,
				{
					isVisible: this.state.showAuthorMenu,
					onClose: this._onClose,
					position: this.props.popoverPosition,
					context: this.refs && this.refs.authorSelectorChevron,
					onKeyDown: this._onKeyDown,
					className: 'author-selector__popover popover',
					ignoreContext: this.props.ignoreContext },
				(this.props.fetchOptions.search || users.length > 10) && _react2.default.createElement(_search2.default, {
					compact: true,
					onSearch: this._onSearch,
					placeholder: this.translate('Find Author…', { context: 'search label' }),
					delaySearch: true,
					ref: 'authorSelectorSearch'
				}),
				this.props.fetchInitialized && !users.length && this.props.fetchOptions.search && !this.props.fetchingUsers ? this._noUsersFound() : _react2.default.createElement(_infiniteList2.default, {
					items: users,
					key: infiniteListKey,
					className: 'author-selector__infinite-list',
					ref: this._setListContext,
					context: this.state.listContext,
					fetchingNextPage: this.props.fetchingUsers,
					guessedItemHeight: 42,
					lastPage: this._isLastPage(),
					fetchNextPage: this._fetchNextPage,
					getItemRef: this._getAuthorItemGUID,
					renderLoadingPlaceholders: this._renderLoadingAuthors,
					renderItem: this._renderAuthor })
			)
		);
	},

	_isLastPage: function _isLastPage() {
		var usersLength = this.props.users.length;
		if (this.props.exclude) {
			usersLength += this.props.excludedUsers.length;
		}

		return this.props.totalUsers <= usersLength;
	},

	_setListContext: function _setListContext(infiniteListInstance) {
		this.setState({
			listContext: _reactDom2.default.findDOMNode(infiniteListInstance)
		});
	},

	_userCanSelectAuthor: function _userCanSelectAuthor() {
		var users = this.props.users;


		if (this.props.fetchOptions.search) {
			return true;
		}

		// no user choice
		if (!users || !users.length || !this.props.allowSingleUser && users.length === 1) {
			return false;
		}

		return true;
	},

	_toggleShowAuthor: function _toggleShowAuthor() {
		this.setState({
			showAuthorMenu: !this.state.showAuthorMenu
		});
	},

	_onClose: function _onClose(event) {
		var toggleElement = _reactDom2.default.findDOMNode(this.refs['author-selector-toggle']);

		if (event && toggleElement.contains(event.target)) {
			// let _toggleShowAuthor() handle this case
			return;
		}
		this.setState({
			showAuthorMenu: false
		});
		this.props.updateSearch(false);
	},

	_renderAuthor: function _renderAuthor(author) {
		var authorGUID = this._getAuthorItemGUID(author);
		return _react2.default.createElement(
			_menuItem2.default,
			{
				className: 'author-selector__menu-item',
				onClick: this._selectAuthor.bind(this, author),
				focusOnHover: false,
				key: authorGUID,
				tabIndex: '-1' },
			_react2.default.createElement(_user2.default, { user: author })
		);
	},

	_noUsersFound: function _noUsersFound() {
		return _react2.default.createElement(
			'div',
			{ className: 'author-selector__no-users' },
			this.translate('No matching users found.')
		);
	},

	_selectAuthor: function _selectAuthor(author) {
		debug('assign author:', author);
		if (this.props.onSelect) {
			this.props.onSelect(author);
		}
		this.setState({
			showAuthorMenu: false
		});
		this.props.updateSearch(false);
	},

	_fetchNextPage: function _fetchNextPage() {
		var fetchOptions = (0, _assign2.default)({}, this.props.fetchOptions, { offset: this.props.users.length });
		debug('fetching next batch of authors');
		_actions2.default.fetchUsers(fetchOptions);
	},

	_getAuthorItemGUID: function _getAuthorItemGUID(author) {
		return 'author-item-' + author.ID;
	},

	_renderLoadingAuthors: function _renderLoadingAuthors() {
		return _react2.default.createElement(
			_menuItem2.default,
			{ disabled: true, key: 'author-item-placeholder' },
			_react2.default.createElement(_user2.default, null)
		);
	},

	_onSearch: function _onSearch(searchTerm) {
		this.props.updateSearch(searchTerm);
	}
});

module.exports = _react2.default.createClass({
	displayName: 'AuthorSelector',
	propTypes: {
		siteId: _react2.default.PropTypes.number.isRequired,
		onSelect: _react2.default.PropTypes.func,
		exclude: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.number),
		allowSingleUser: _react2.default.PropTypes.bool,
		popoverPosition: _react2.default.PropTypes.string
	},

	getInitialState: function getInitialState() {
		return {
			search: ''
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			showAuthorMenu: false,
			onClose: function onClose() {},
			allowSingleUser: false,
			popoverPosition: 'bottom left'
		};
	},

	componentDidMount: function componentDidMount() {
		debug('AuthorSelector mounted');
	},

	render: function render() {
		var searchString = this.state.search || '';
		searchString = (0, _trim3.default)(searchString);

		var fetchOptions = {
			siteId: this.props.siteId,
			order: 'ASC',
			order_by: 'display_name',
			number: 50
		};

		if (searchString) {
			fetchOptions.number = 20; // make search a little faster
			fetchOptions.search = searchString;
			fetchOptions.search_columns = ['user_login', 'display_name'];
		}

		(0, _freeze2.default)(fetchOptions);
		return _react2.default.createElement(
			_siteUsersFetcher2.default,
			{ fetchOptions: fetchOptions, exclude: this.props.exclude },
			_react2.default.createElement(SwitcherShell, (0, _extends3.default)({}, this.props, { updateSearch: this._updateSearch }))
		);
	},

	_updateSearch: function _updateSearch(searchTerm) {
		searchTerm = searchTerm ? '*' + searchTerm + '*' : '';
		this.setState({
			search: searchTerm
		});
	}
});

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

/***/ "./client/components/data/email-followers-data/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _store = __webpack_require__("./client/lib/email-followers/store.js");

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__("./client/lib/email-followers/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _reactPassToChildren = __webpack_require__("./client/lib/react-pass-to-children/index.js");

var _reactPassToChildren2 = _interopRequireDefault(_reactPassToChildren);

var _dataPoller = __webpack_require__("./client/lib/data-poller/index.js");

var _dataPoller2 = _interopRequireDefault(_dataPoller);

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
var debug = (0, _debug2.default)('calypso:email-followers-data');

exports.default = _react2.default.createClass({
	displayName: 'EmailFollowersData',

	propTypes: {
		fetchOptions: _react2.default.PropTypes.object.isRequired
	},

	getInitialState: function getInitialState() {
		return {
			followers: false,
			totalFollowers: false,
			currentPage: false,
			fetchInitialized: false
		};
	},
	componentDidMount: function componentDidMount() {
		_store2.default.on('change', this.refreshFollowers);
		this.fetchIfEmpty(this.props.fetchOptions);
		this._poller = _dataPoller2.default.add(_store2.default, _actions2.default.fetchFollowers.bind(_actions2.default, this.props.fetchOptions, true), { leading: false });
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!nextProps.fetchOptions) {
			return;
		}
		if (!(0, _isEqual3.default)(this.props.fetchOptions, nextProps.fetchOptions)) {
			this.setState(this.getInitialState());
			this.fetchIfEmpty(nextProps.fetchOptions);
			_dataPoller2.default.remove(this._poller);
			this._poller = _dataPoller2.default.add(_store2.default, _actions2.default.fetchFollowers.bind(_actions2.default, nextProps.fetchOptions, true), { leading: false });
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		_store2.default.removeListener('change', this.refreshFollowers);
		_dataPoller2.default.remove(this._poller);
	},
	fetchIfEmpty: function fetchIfEmpty(fetchOptions) {
		fetchOptions = fetchOptions || this.props.fetchOptions;
		if (!fetchOptions || !fetchOptions.siteId) {
			return;
		}
		if (_store2.default.getFollowers(fetchOptions).length) {
			this.refreshFollowers(fetchOptions);
			return;
		}

		// defer fetch requests to avoid dispatcher conflicts
		var defer = function () {
			var paginationData = _store2.default.getPaginationData(fetchOptions);
			if (paginationData.fetchingFollowers) {
				return;
			}
			_actions2.default.fetchFollowers(fetchOptions);
			this.setState({ fetchInitialized: true });
		}.bind(this);
		setTimeout(defer, 0);
	},


	isFetching: function isFetching() {
		var fetchOptions = this.props.fetchOptions;
		if (!fetchOptions.siteId) {
			debug('Is fetching because siteId is falsey');
			return true;
		}
		if (!this.state.followers) {
			debug('Is fetching because not followers');
			return true;
		}

		var followersPaginationData = _store2.default.getPaginationData(fetchOptions);
		debug('Followers pagination data: ' + (0, _stringify2.default)(followersPaginationData));

		if (followersPaginationData.fetchingFollowers) {
			return true;
		}
		return false;
	},

	refreshFollowers: function refreshFollowers(fetchOptions) {
		fetchOptions = fetchOptions || this.props.fetchOptions;
		debug('Refreshing followers: ' + (0, _stringify2.default)(fetchOptions));
		this.setState({
			followers: _store2.default.getFollowers(fetchOptions),
			totalFollowers: _store2.default.getPaginationData(fetchOptions).totalFollowers,
			currentPage: _store2.default.getPaginationData(fetchOptions).followersCurrentPage
		});
	},
	render: function render() {
		return (0, _reactPassToChildren2.default)(this, (0, _assign2.default)({}, this.state, { fetching: this.isFetching() }));
	}
});
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/followers-data/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _store = __webpack_require__("./client/lib/followers/store.js");

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__("./client/lib/followers/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _reactPassToChildren = __webpack_require__("./client/lib/react-pass-to-children/index.js");

var _reactPassToChildren2 = _interopRequireDefault(_reactPassToChildren);

var _dataPoller = __webpack_require__("./client/lib/data-poller/index.js");

var _dataPoller2 = _interopRequireDefault(_dataPoller);

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
var debug = (0, _debug2.default)('calypso:followers-data');

exports.default = _react2.default.createClass({
	displayName: 'FollowersData',

	propTypes: {
		fetchOptions: _react2.default.PropTypes.object.isRequired
	},

	getInitialState: function getInitialState() {
		return {
			followers: false,
			totalFollowers: false,
			currentPage: false,
			fetchInitialized: false
		};
	},
	componentDidMount: function componentDidMount() {
		_store2.default.on('change', this.refreshFollowers);
		this.fetchIfEmpty(this.props.fetchOptions);
		this._poller = _dataPoller2.default.add(_store2.default, _actions2.default.fetchFollowers.bind(_actions2.default, this.props.fetchOptions, true), { leading: false });
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!nextProps.fetchOptions) {
			return;
		}
		if (!(0, _isEqual3.default)(this.props.fetchOptions, nextProps.fetchOptions)) {
			this.setState(this.getInitialState());
			this.fetchIfEmpty(nextProps.fetchOptions);
			_dataPoller2.default.remove(this._poller);
			this._poller = _dataPoller2.default.add(_store2.default, _actions2.default.fetchFollowers.bind(_actions2.default, nextProps.fetchOptions, true), { leading: false });
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		_store2.default.removeListener('change', this.refreshFollowers);
		_dataPoller2.default.remove(this._poller);
	},
	fetchIfEmpty: function fetchIfEmpty(fetchOptions) {
		fetchOptions = fetchOptions || this.props.fetchOptions;
		if (!fetchOptions || !fetchOptions.siteId) {
			return;
		}
		if (_store2.default.getFollowers(fetchOptions).length) {
			this.refreshFollowers(fetchOptions);
			return;
		}
		// defer fetch requests to avoid dispatcher conflicts
		var defer = function () {
			var paginationData = _store2.default.getPaginationData(fetchOptions);
			if (paginationData.fetchingFollowers) {
				return;
			}
			_actions2.default.fetchFollowers(fetchOptions);
			this.setState({ fetchInitialized: true });
		}.bind(this);
		setTimeout(defer, 0);
	},


	isFetching: function isFetching() {
		var fetchOptions = this.props.fetchOptions;
		if (!fetchOptions.siteId) {
			debug('Is fetching because siteId is falsey');
			return true;
		}
		if (!this.state.followers) {
			debug('Is fetching because not followers');
			return true;
		}

		var followersPaginationData = _store2.default.getPaginationData(fetchOptions);
		debug('Followers pagination data: ' + (0, _stringify2.default)(followersPaginationData));

		if (followersPaginationData.fetchingFollowers) {
			return true;
		}
		return false;
	},

	refreshFollowers: function refreshFollowers(fetchOptions) {
		fetchOptions = fetchOptions || this.props.fetchOptions;
		debug('Refreshing followers: ' + (0, _stringify2.default)(fetchOptions));
		this.setState({
			followers: _store2.default.getFollowers(fetchOptions),
			totalFollowers: _store2.default.getPaginationData(fetchOptions).totalFollowers,
			currentPage: _store2.default.getPaginationData(fetchOptions).followersCurrentPage
		});
	},
	render: function render() {
		return (0, _reactPassToChildren2.default)(this, (0, _assign2.default)({}, this.state, { fetching: this.isFetching() }));
	}
});
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-site-roles/index.jsx":
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

var _selectors = __webpack_require__("./client/state/site-roles/selectors.js");

var _actions = __webpack_require__("./client/state/site-roles/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QuerySiteRoles = function (_Component) {
	(0, _inherits3.default)(QuerySiteRoles, _Component);

	function QuerySiteRoles() {
		(0, _classCallCheck3.default)(this, QuerySiteRoles);
		return (0, _possibleConstructorReturn3.default)(this, (QuerySiteRoles.__proto__ || (0, _getPrototypeOf2.default)(QuerySiteRoles)).apply(this, arguments));
	}

	(0, _createClass3.default)(QuerySiteRoles, [{
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
			if (props.requestingSiteRoles) {
				return;
			}

			props.requestSiteRoles(props.siteId);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QuerySiteRoles;
}(_react.Component);

QuerySiteRoles.propTypes = {
	siteId: _react.PropTypes.number.isRequired,
	requestingSiteRoles: _react.PropTypes.bool,
	requestSiteRoles: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	return {
		requestingSiteRoles: (0, _selectors.isRequestingSiteRoles)(state, ownProps.siteId)
	};
}, { requestSiteRoles: _actions.requestSiteRoles })(QuerySiteRoles);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/viewers-data/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__("./client/lib/viewers/store.js");

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__("./client/lib/viewers/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _reactPassToChildren = __webpack_require__("./client/lib/react-pass-to-children/index.js");

var _reactPassToChildren2 = _interopRequireDefault(_reactPassToChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
exports.default = _react2.default.createClass({
	displayName: 'ViewersData',

	propTypes: {
		siteId: _react2.default.PropTypes.number.isRequired
	},

	getInitialState: function getInitialState() {
		return {
			viewers: false,
			totalViewers: false,
			currentPage: false,
			fetchInitialized: false
		};
	},
	componentDidMount: function componentDidMount() {
		_store2.default.on('change', this.refreshViewers);
		this.fetchIfEmpty(this.props.siteId);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!nextProps.siteId) {
			return;
		}
		if (this.props.siteId !== nextProps.siteId) {
			this.setState(this.getInitialState());
			this.fetchIfEmpty(nextProps.siteId);
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		_store2.default.removeListener('change', this.refreshViewers);
	},
	fetchIfEmpty: function fetchIfEmpty(siteId) {
		siteId = siteId || this.props.siteId;
		if (!siteId) {
			return;
		}
		if (_store2.default.getViewers(siteId).length) {
			this.refreshViewers(siteId);
			return;
		}

		// defer fetch requests to avoid dispatcher conflicts
		var defer = function () {
			var paginationData = _store2.default.getPaginationData(siteId);
			if (paginationData.fetchingViewers) {
				return;
			}
			_actions2.default.fetch(siteId);
			this.setState({ fetchInitialized: true });
		}.bind(this);
		setTimeout(defer, 0);
	},


	isFetching: function isFetching() {
		var siteId = this.props.siteId;
		if (!siteId) {
			return true;
		}

		if (!this.state.viewers) {
			return true;
		}

		var paginationData = _store2.default.getPaginationData(siteId);

		if (paginationData.fetchingViewers) {
			return true;
		}
		return false;
	},

	refreshViewers: function refreshViewers(siteId) {
		siteId = siteId || this.props.siteId;
		this.setState({
			viewers: _store2.default.getViewers(siteId),
			totalViewers: _store2.default.getPaginationData(siteId).totalViewers,
			currentPage: _store2.default.getPaginationData(siteId).currentViewersPage
		});
	},
	render: function render() {
		return (0, _reactPassToChildren2.default)(this, (0, _assign2.default)({}, this.state, { fetching: this.isFetching() }));
	}
});

/**
 * Internal dependencies
 */

module.exports = exports['default'];

/***/ }),

/***/ "./client/components/email-verification/email-unverified-notice.jsx":
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

var React = _interopRequireWildcard(_react);

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _noticeAction = __webpack_require__("./client/components/notice/notice-action.jsx");

var _noticeAction2 = _interopRequireDefault(_noticeAction);

var _spinner = __webpack_require__("./client/components/spinner/index.jsx");

var _spinner2 = _interopRequireDefault(_spinner);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _user = __webpack_require__("./client/lib/user/index.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var userLib = (0, _user2.default)();

/**
 * Internal dependencies
 */

var EmailUnverifiedNotice = function (_React$Component) {
	(0, _inherits3.default)(EmailUnverifiedNotice, _React$Component);

	function EmailUnverifiedNotice() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, EmailUnverifiedNotice);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EmailUnverifiedNotice.__proto__ || (0, _getPrototypeOf2.default)(EmailUnverifiedNotice)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			pendingRequest: false,
			emailSent: false,
			error: null
		}, _this.handleDismiss = function () {
			_this.setState({ error: null, emailSent: false });
		}, _this.handleSendVerificationEmail = function (e) {
			e.preventDefault();

			if (_this.state.pendingRequest) {
				return;
			}

			_this.setState({
				pendingRequest: true
			});

			userLib.sendVerificationEmail(function (error, response) {
				_this.setState({
					emailSent: response && response.success,
					error: error,
					pendingRequest: false
				});
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(EmailUnverifiedNotice, [{
		key: 'renderEmailSendPending',
		value: function renderEmailSendPending() {
			return React.createElement(
				_notice2.default,
				{
					icon: 'mail',
					showDismiss: false,
					text: _i18nCalypso2.default.translate('Sending…') },
				React.createElement(
					_noticeAction2.default,
					null,
					React.createElement(_spinner2.default, null)
				)
			);
		}
	}, {
		key: 'renderEmailSendSuccess',
		value: function renderEmailSendSuccess() {
			var noticeText = _i18nCalypso2.default.translate('We sent another confirmation email to %(email)s.', { args: { email: this.props.userEmail } });

			return React.createElement(_notice2.default, {
				text: noticeText,
				status: 'is-success',
				onDismissClick: this.handleDismiss,
				className: 'email-verification-notice' });
		}
	}, {
		key: 'renderEmailSendError',
		value: function renderEmailSendError() {
			var noticeText = [React.createElement(
				'strong',
				{ key: 'email-send-error' },
				_i18nCalypso2.default.translate('The email could not be sent.')
			), ' ', this.state.error.message];

			return React.createElement(
				_notice2.default,
				{
					text: noticeText,
					icon: 'notice',
					onDismissClick: this.handleDismiss,
					status: 'is-warning',
					className: 'email-verification-notice' },
				React.createElement(
					_noticeAction2.default,
					{ onClick: this.handleSendVerificationEmail },
					_i18nCalypso2.default.translate('Try Again')
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.state.pendingRequest) {
				return this.renderEmailSendPending();
			}

			if (this.state.error) {
				return this.renderEmailSendError();
			}

			if (this.state.emailSent) {
				return this.renderEmailSendSuccess();
			}

			var noticeText = this.props.noticeText ? this.props.noticeText : React.createElement(
				'div',
				null,
				React.createElement(
					'p',
					null,
					React.createElement(
						'strong',
						null,
						_i18nCalypso2.default.translate('Please confirm your email address')
					)
				),
				React.createElement(
					'p',
					null,
					_i18nCalypso2.default.translate('To post and keep using WordPress.com you need to confirm your email address. ' + 'Please click the link in the email we sent at %(email)s.', {
						args: {
							email: this.props.userEmail
						}
					})
				),
				React.createElement(
					'p',
					null,
					_i18nCalypso2.default.translate('{{requestButton}}Re-send your confirmation email{{/requestButton}} ' + 'or {{changeButton}}change the email address on your account{{/changeButton}}.', {
						components: {
							requestButton: React.createElement('a', { href: '#', onClick: this.handleSendVerificationEmail }),
							changeButton: React.createElement('a', { href: '/me/account' })
						}
					})
				)
			);

			return React.createElement(
				_notice2.default,
				{
					text: noticeText,
					icon: 'info',
					showDismiss: false,
					status: this.props.noticeStatus,
					className: 'email-unverified-notice' },
				this.props.noticeText && React.createElement(
					_noticeAction2.default,
					{ onClick: this.handleSendVerificationEmail },
					_i18nCalypso2.default.translate('Resend Email')
				)
			);
		}
	}]);
	return EmailUnverifiedNotice;
}(React.Component);

EmailUnverifiedNotice.propTypes = {
	userEmail: React.PropTypes.string,
	noticeText: React.PropTypes.node,
	noticeStatus: React.PropTypes.string
};
EmailUnverifiedNotice.defaultProps = {
	noticeText: null,
	noticeStatus: ''
};
exports.default = EmailUnverifiedNotice;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/email-verification/email-verification-gate.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EmailVerificationGate = undefined;

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

var React = _interopRequireWildcard(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _emailUnverifiedNotice = __webpack_require__("./client/components/email-verification/email-unverified-notice.jsx");

var _emailUnverifiedNotice2 = _interopRequireDefault(_emailUnverifiedNotice);

var _selectors = __webpack_require__("./client/state/current-user/selectors.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailVerificationGate = exports.EmailVerificationGate = function (_React$Component) {
	(0, _inherits3.default)(EmailVerificationGate, _React$Component);

	function EmailVerificationGate() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, EmailVerificationGate);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EmailVerificationGate.__proto__ || (0, _getPrototypeOf2.default)(EmailVerificationGate)).call.apply(_ref, [this].concat(args))), _this), _this.handleFocus = function (e) {
			e.target.blur();
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(EmailVerificationGate, [{
		key: 'render',
		value: function render() {
			if (this.props.needsVerification) {
				return React.createElement(
					'div',
					{ tabIndex: '-1', className: 'email-verification-gate', onFocus: this.handleFocus },
					React.createElement(_emailUnverifiedNotice2.default, {
						userEmail: this.props.userEmail,
						noticeText: this.props.noticeText,
						noticeStatus: this.props.noticeStatus }),
					React.createElement(
						'div',
						{ className: 'email-verification-gate__content' },
						this.props.children
					)
				);
			}

			return React.createElement(
				'div',
				null,
				this.props.children
			);
		}
	}]);
	return EmailVerificationGate;
}(React.Component);

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */


EmailVerificationGate.propTypes = {
	noticeText: React.PropTypes.node,
	noticeStatus: React.PropTypes.string,
	//connected
	userEmail: React.PropTypes.string,
	needsVerification: React.PropTypes.bool
};
EmailVerificationGate.defaultProps = {
	noticeText: null,
	noticeStatus: ''
};
exports.default = (0, _reactRedux.connect)(function (state) {
	var user = (0, _selectors.getCurrentUser)(state);
	return {
		userEmail: user && user.email,
		needsVerification: !(0, _selectors.isCurrentUserEmailVerified)(state)
	};
})(EmailVerificationGate);

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

/***/ "./client/components/forms/form-radio/index.jsx":
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

/**
 * External dependencies
 */
var FormRadio = function FormRadio(_ref) {
	var className = _ref.className,
	    otherProps = (0, _objectWithoutProperties3.default)(_ref, ['className']);
	return _react2.default.createElement('input', (0, _extends3.default)({}, otherProps, {
		type: 'radio',
		className: (0, _classnames2.default)(className, 'form-radio')
	}));
};

exports.default = FormRadio;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/form-section-heading/index.jsx":
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

/**
 * External dependencies
 */
var FormSectionHeading = function FormSectionHeading(_ref) {
	var className = _ref.className,
	    children = _ref.children,
	    otherProps = (0, _objectWithoutProperties3.default)(_ref, ['className', 'children']);
	return _react2.default.createElement(
		'h3',
		(0, _extends3.default)({}, otherProps, {
			className: (0, _classnames2.default)(className, 'form-section-heading')
		}),
		children
	);
};

exports.default = FormSectionHeading;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/form-select/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var FormSelect = function (_React$Component) {
	(0, _inherits3.default)(FormSelect, _React$Component);

	function FormSelect() {
		(0, _classCallCheck3.default)(this, FormSelect);
		return (0, _possibleConstructorReturn3.default)(this, (FormSelect.__proto__ || (0, _getPrototypeOf2.default)(FormSelect)).apply(this, arguments));
	}

	(0, _createClass3.default)(FormSelect, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    inputRef = _props.inputRef,
			    className = _props.className,
			    isError = _props.isError,
			    props = (0, _objectWithoutProperties3.default)(_props, ['inputRef', 'className', 'isError']);

			var classes = (0, _classnames2.default)(className, 'form-select', {
				'is-error': isError
			});

			return _react2.default.createElement(
				'select',
				(0, _extends3.default)({}, props, { ref: inputRef, className: classes }),
				this.props.children
			);
		}
	}]);
	return FormSelect;
}(_react2.default.Component);

FormSelect.defaultProps = {
	isError: false
};
exports.default = FormSelect;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/form-setting-explanation/index.jsx":
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

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
	(0, _inherits3.default)(_class, _React$Component);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);
		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)(this.props.className, 'form-setting-explanation', {
				'no-validate': this.props.noValidate,
				'is-indented': this.props.isIndented
			});

			return _react2.default.createElement(
				'p',
				(0, _extends3.default)({}, (0, _omit3.default)(this.props, 'className', 'noValidate', 'isIndented'), { className: classes }),
				this.props.children
			);
		}
	}]);
	return _class;
}(_react2.default.Component); /**
                               * External dependencies
                               */


_class.displayName = 'FormSettingExplanation';
_class.propTypes = {
	noValidate: _propTypes2.default.bool,
	isIndented: _propTypes2.default.bool,
	className: _propTypes2.default.string
};
_class.defaultProps = {
	noValidate: false,
	isIndented: false
};
exports.default = _class;
module.exports = exports['default'];

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

/***/ "./client/components/site-users-fetcher/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _partition2 = __webpack_require__("./node_modules/lodash/partition.js");

var _partition3 = _interopRequireDefault(_partition2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:site-users-fetcher');

/**
 * Internal dependencies
 */
var UsersStore = __webpack_require__("./client/lib/users/store.js"),
    UsersActions = __webpack_require__("./client/lib/users/actions.js"),
    pollers = __webpack_require__("./client/lib/data-poller/index.js");

/**
 * Module variables
 */
var defaultOptions = {
	number: 100,
	offset: 0
};

module.exports = React.createClass({
	displayName: 'SiteUsersFetcher',

	propTypes: {
		fetchOptions: React.PropTypes.object.isRequired,
		exclude: React.PropTypes.oneOfType([React.PropTypes.arrayOf(React.PropTypes.number), React.PropTypes.func])
	},

	getInitialState: function getInitialState() {
		return this._getState();
	},

	componentWillMount: function componentWillMount() {
		debug('Mounting SiteUsersFetcher');
		UsersStore.on('change', this._updateSiteUsers);
		this._fetchIfEmpty();
		this._poller = pollers.add(UsersStore, UsersActions.fetchUpdated.bind(UsersActions, this.props.fetchOptions, true), { leading: false });
	},

	componentWillUnmount: function componentWillUnmount() {
		UsersStore.off('change', this._updateSiteUsers);
		pollers.remove(this._poller);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (!nextProps.fetchOptions) {
			return;
		}
		if (!(0, _isEqual3.default)(this.props.fetchOptions, nextProps.fetchOptions)) {
			this._updateSiteUsers(nextProps.fetchOptions);
			this._fetchIfEmpty(nextProps.fetchOptions);
			pollers.remove(this._poller);
			this._poller = pollers.add(UsersStore, UsersActions.fetchUpdated.bind(UsersActions, nextProps.fetchOptions, true), { leading: false });
		}
	},

	render: function render() {
		var childrenProps = (0, _assign2.default)((0, _omit3.default)(this.props, 'children'), this.state);
		// Clone the child element along and pass along state (containing data from the store)
		return React.cloneElement(this.props.children, childrenProps);
	},

	_updateSiteUsers: function _updateSiteUsers(fetchOptions) {
		fetchOptions = fetchOptions || this.props.fetchOptions;
		this.setState(this._getState(fetchOptions));
	},

	_getState: function _getState(fetchOptions) {
		var paginationData, users;
		fetchOptions = fetchOptions || this.props.fetchOptions;
		fetchOptions = (0, _assign2.default)({}, defaultOptions, fetchOptions);
		paginationData = UsersStore.getPaginationData(fetchOptions);
		users = UsersStore.getUsers(fetchOptions);

		if (this.props.exclude) {
			// Partition will return an array of two arrays.
			// users[0] will be a list of the users that were not excluded.
			// users[1] will be a list of the excluded users.
			users = (0, _partition3.default)(users, function (user) {
				if ('function' === typeof this.props.exclude) {
					return !this.props.exclude(user);
				}

				return !(0, _includes3.default)(this.props.exclude, user.ID);
			}.bind(this));
		}

		return (0, _assign2.default)({}, paginationData, {
			users: this.props.exclude ? users[0] : users,
			fetchOptions: fetchOptions,
			excludedUsers: this.props.exclude ? users[1] : []
		});
	},

	_fetchIfEmpty: function _fetchIfEmpty(fetchOptions) {
		fetchOptions = fetchOptions || this.props.fetchOptions;
		if (!fetchOptions || !fetchOptions.siteId) {
			return;
		}
		fetchOptions = (0, _assign2.default)({}, defaultOptions, fetchOptions);
		if (UsersStore.getUsers(fetchOptions).length) {
			debug('initial fetch not necessary');
			return;
		}
		// defer fetch requests to avoid dispatcher conflicts
		setTimeout(function () {
			var paginationData = UsersStore.getPaginationData(fetchOptions);
			if (paginationData.fetchingUsers) {
				return;
			}
			UsersActions.fetchUsers(fetchOptions);
		}, 0);
	}
});

/***/ }),

/***/ "./client/components/token-field/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _uniq2 = __webpack_require__("./node_modules/lodash/uniq.js");

var _uniq3 = _interopRequireDefault(_uniq2);

var _take2 = __webpack_require__("./node_modules/lodash/take.js");

var _take3 = _interopRequireDefault(_take2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _last2 = __webpack_require__("./node_modules/lodash/last.js");

var _last3 = _interopRequireDefault(_last2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _forEach2 = __webpack_require__("./node_modules/lodash/forEach.js");

var _forEach3 = _interopRequireDefault(_forEach2);

var _each2 = __webpack_require__("./node_modules/lodash/each.js");

var _each3 = _interopRequireDefault(_each2);

var _difference2 = __webpack_require__("./node_modules/lodash/difference.js");

var _difference3 = _interopRequireDefault(_difference2);

var _clone2 = __webpack_require__("./node_modules/lodash/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:token-field');

/**
 * Internal dependencies
 */
var SuggestionsList = __webpack_require__("./client/components/token-field/suggestions-list.jsx"),
    Token = __webpack_require__("./client/components/token-field/token.jsx"),
    TokenInput = __webpack_require__("./client/components/token-field/token-input.jsx");

var TokenField = React.createClass({
	displayName: 'TokenField',

	propTypes: {
		suggestions: React.PropTypes.array,
		maxSuggestions: React.PropTypes.number,
		displayTransform: React.PropTypes.func,
		saveTransform: React.PropTypes.func,
		onChange: React.PropTypes.func,
		isBorderless: React.PropTypes.bool,
		maxLength: React.PropTypes.number,
		onFocus: React.PropTypes.func,
		disabled: React.PropTypes.bool,
		tokenizeOnSpace: React.PropTypes.bool,
		placeholder: React.PropTypes.string,
		value: function value(props) {
			var value = props.value;
			if (!Array.isArray(value)) {
				return new Error('Value prop is expected to be an array.');
			}

			(0, _forEach3.default)(value, function (item) {
				if ('object' === (typeof item === 'undefined' ? 'undefined' : (0, _typeof3.default)(item))) {
					if (!('value' in item)) {
						return new Error("When using object for value prop, each object is expected to have a 'value' property.");
					}
				}
			});
		}
	},

	getDefaultProps: function getDefaultProps() {
		return {
			suggestions: (0, _freeze2.default)([]),
			maxSuggestions: 100,
			value: (0, _freeze2.default)([]),
			placeholder: '',
			displayTransform: _identity3.default,
			saveTransform: function saveTransform(token) {
				return token.trim();
			},
			onChange: function onChange() {},
			isBorderless: false,
			disabled: false,
			tokenizeOnSpace: false
		};
	},

	mixins: [PureRenderMixin],

	getInitialState: function getInitialState() {
		return {
			incompleteTokenValue: '',
			inputOffsetFromEnd: 0,
			isActive: false,
			selectedSuggestionIndex: -1,
			selectedSuggestionScroll: false
		};
	},

	componentDidUpdate: function componentDidUpdate() {
		if (this.state.isActive && !this.refs.input.hasFocus()) {
			debug('componentDidUpdate focusing input');
			this.refs.input.focus(); // make sure focus is on input
		}
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (nextProps.disabled && this.state.isActive) {
			this.setState({
				isActive: false,
				incompleteTokenValue: ''
			});
		}
	},


	render: function render() {
		var classes = classNames('token-field', {
			'is-active': this.state.isActive,
			'is-disabled': this.props.disabled
		});

		var tokenFieldProps = {
			ref: 'main',
			className: classes,
			tabIndex: '-1'
		};

		if (!this.props.disabled) {
			tokenFieldProps = (0, _assign2.default)({}, tokenFieldProps, {
				onKeyDown: this._onKeyDown,
				onKeyPress: this._onKeyPress,
				onFocus: this._onFocus
			});
		}

		return React.createElement(
			'div',
			tokenFieldProps,
			React.createElement(
				'div',
				{ ref: 'tokensAndInput',
					className: 'token-field__input-container',
					tabIndex: '-1',
					onMouseDown: this._onContainerTouched,
					onTouchStart: this._onContainerTouched
				},
				this._renderTokensAndInput()
			),
			React.createElement(SuggestionsList, {
				match: this.props.saveTransform(this.state.incompleteTokenValue),
				displayTransform: this.props.displayTransform,
				suggestions: this._getMatchingSuggestions(),
				selectedIndex: this.state.selectedSuggestionIndex,
				scrollIntoView: this.state.selectedSuggestionScroll,
				isExpanded: this.state.isActive,
				onHover: this._onSuggestionHovered,
				onSelect: this._onSuggestionSelected
			})
		);
	},

	_renderTokensAndInput: function _renderTokensAndInput() {
		var components = (0, _map3.default)(this.props.value, this._renderToken);

		components.splice(this._getIndexOfInput(), 0, this._renderInput());

		return components;
	},

	_renderToken: function _renderToken(token) {
		var value = this._getTokenValue(token);
		var status = token.status ? token.status : undefined;

		return React.createElement(Token, {
			key: 'token-' + value,
			value: value,
			status: status,
			tooltip: token.tooltip,
			displayTransform: this.props.displayTransform,
			onClickRemove: this._onTokenClickRemove,
			isBorderless: token.isBorderless || this.props.isBorderless,
			onMouseEnter: token.onMouseEnter,
			onMouseLeave: token.onMouseLeave,
			disabled: 'error' !== status && this.props.disabled });
	},

	_renderInput: function _renderInput() {
		var _props = this.props,
		    autoCapitalize = _props.autoCapitalize,
		    autoComplete = _props.autoComplete,
		    maxLength = _props.maxLength,
		    value = _props.value,
		    placeholder = _props.placeholder;


		var props = {
			autoCapitalize: autoCapitalize,
			autoComplete: autoComplete,
			ref: 'input',
			key: 'input',
			disabled: this.props.disabled,
			value: this.state.incompleteTokenValue,
			onBlur: this._onBlur
		};

		if (value.length === 0 && placeholder) {
			props.placeholder = placeholder;
		}

		if (!(maxLength && value.length >= maxLength)) {
			props = (0, _extends3.default)({}, props, { onChange: this._onInputChange });
		}

		return React.createElement(TokenInput, props);
	},

	_onFocus: function _onFocus(event) {
		this.setState({ isActive: true });
		if ('function' === typeof this.props.onFocus) {
			this.props.onFocus(event);
		}
	},

	_onBlur: function _onBlur(event) {
		// eslint-disable-line no-unused-vars
		if (this._inputHasValidValue()) {
			debug('_onBlur adding current token');
			this.setState({ isActive: false }, this._addCurrentToken);
		} else {
			debug('_onBlur not adding current token');
			this.setState(this.getInitialState());
		}
	},

	_onTokenClickRemove: function _onTokenClickRemove(event) {
		this._deleteToken(event.value);
	},

	_onSuggestionHovered: function _onSuggestionHovered(suggestion) {
		var index = this._getMatchingSuggestions().indexOf(suggestion);

		if (index >= 0) {
			this.setState({
				selectedSuggestionIndex: index,
				selectedSuggestionScroll: false
			});
		}
	},

	_onSuggestionSelected: function _onSuggestionSelected(suggestion) {
		debug('_onSuggestionSelected', suggestion);
		this._addNewToken(suggestion);
	},

	_onInputChange: function _onInputChange(event) {
		var text = event.value;
		var separator = this.props.tokenizeOnSpace ? /[ ,\t]+/ : /[,\t]+/;
		var items = text.split(separator);

		if (items.length > 1) {
			this._addNewTokens(items.slice(0, -1));
		}

		this.setState({
			incompleteTokenValue: (0, _last3.default)(items) || '',
			selectedSuggestionIndex: -1,
			selectedSuggestionScroll: false
		});
	},

	_onContainerTouched: function _onContainerTouched(event) {
		// Prevent clicking/touching the tokensAndInput container from blurring
		// the input and adding the current token.
		if (event.target === this.refs.tokensAndInput && this.state.isActive) {
			event.preventDefault();
		}
	},

	_onKeyDown: function _onKeyDown(event) {
		var preventDefault = false;

		switch (event.keyCode) {
			case 8:
				// backspace (delete to left)
				preventDefault = this._handleDeleteKey(this._deleteTokenBeforeInput);
				break;
			case 9:
				// tab
				preventDefault = this._addCurrentToken();
				break;
			case 13:
				// enter/return
				preventDefault = this._addCurrentToken();
				break;
			case 37:
				// left arrow
				preventDefault = this._handleLeftArrowKey();
				break;
			case 38:
				// up arrow
				preventDefault = this._handleUpArrowKey();
				break;
			case 39:
				// right arrow
				preventDefault = this._handleRightArrowKey();
				break;
			case 40:
				// down arrow
				preventDefault = this._handleDownArrowKey();
				break;
			case 46:
				// delete (to right)
				preventDefault = this._handleDeleteKey(this._deleteTokenAfterInput);
				break;
			case 32:
				// space
				if (this.props.tokenizeOnSpace) {
					preventDefault = this._addCurrentToken();
				}
				break;
			default:
				break;
		}

		if (preventDefault) {
			event.preventDefault();
		}
	},

	_onKeyPress: function _onKeyPress(event) {
		var preventDefault = false;

		switch (event.charCode) {
			case 44:
				// comma
				preventDefault = this._handleCommaKey();
				break;
			default:
				break;
		}

		if (preventDefault) {
			event.preventDefault();
		}
	},

	_handleDeleteKey: function _handleDeleteKey(deleteToken) {
		var preventDefault = false;

		if (this.refs.input.hasFocus() && this._isInputEmpty()) {
			deleteToken();
			preventDefault = true;
		}

		return preventDefault;
	},

	_getMatchingSuggestions: function _getMatchingSuggestions() {
		var suggestions = this.props.suggestions,
		    match = this.props.saveTransform(this.state.incompleteTokenValue),
		    startsWithMatch = [],
		    containsMatch = [];

		if (match.length === 0) {
			suggestions = (0, _difference3.default)(suggestions, this.props.value);
		} else {
			match = match.toLocaleLowerCase();

			(0, _each3.default)(suggestions, function (suggestion) {
				var index = suggestion.toLocaleLowerCase().indexOf(match);
				if (this.props.value.indexOf(suggestion) === -1) {
					if (index === 0) {
						startsWithMatch.push(suggestion);
					} else if (index > 0) {
						containsMatch.push(suggestion);
					}
				}
			}.bind(this));

			suggestions = startsWithMatch.concat(containsMatch);
		}

		return (0, _take3.default)(suggestions, this.props.maxSuggestions);
	},

	_getSelectedSuggestion: function _getSelectedSuggestion() {
		if (this.state.selectedSuggestionIndex !== -1) {
			return this._getMatchingSuggestions()[this.state.selectedSuggestionIndex];
		}
	},

	_addCurrentToken: function _addCurrentToken() {
		var preventDefault = false,
		    selectedSuggestion = this._getSelectedSuggestion();

		if (selectedSuggestion) {
			this._addNewToken(selectedSuggestion);
			preventDefault = true;
		} else if (this._inputHasValidValue()) {
			this._addNewToken(this.state.incompleteTokenValue);
			preventDefault = true;
		}

		return preventDefault;
	},

	_handleLeftArrowKey: function _handleLeftArrowKey() {
		var preventDefault = false;

		if (this._isInputEmpty()) {
			this._moveInputBeforePreviousToken();
			preventDefault = true;
		}

		return preventDefault;
	},

	_handleRightArrowKey: function _handleRightArrowKey() {
		var preventDefault = false;

		if (this._isInputEmpty()) {
			this._moveInputAfterNextToken();
			preventDefault = true;
		}

		return preventDefault;
	},

	_handleUpArrowKey: function _handleUpArrowKey() {
		this.setState({
			selectedSuggestionIndex: Math.max((this.state.selectedSuggestionIndex || 0) - 1, 0),
			selectedSuggestionScroll: true
		});

		return true; // preventDefault
	},

	_handleDownArrowKey: function _handleDownArrowKey() {
		this.setState({
			selectedSuggestionIndex: Math.min(this.state.selectedSuggestionIndex + 1 || 0, this._getMatchingSuggestions().length - 1),
			selectedSuggestionScroll: true
		});

		return true; // preventDefault
	},

	_handleCommaKey: function _handleCommaKey() {
		var preventDefault = true;

		if (this._inputHasValidValue()) {
			this._addNewToken(this.state.incompleteTokenValue);
		}

		return preventDefault;
	},

	_isInputEmpty: function _isInputEmpty() {
		return this.state.incompleteTokenValue.length === 0;
	},

	_inputHasValidValue: function _inputHasValidValue() {
		return this.props.saveTransform(this.state.incompleteTokenValue).length > 0;
	},

	_deleteTokenBeforeInput: function _deleteTokenBeforeInput() {
		var index = this._getIndexOfInput() - 1;

		if (index > -1) {
			this._deleteToken(this.props.value[index]);
		}
	},

	_deleteTokenAfterInput: function _deleteTokenAfterInput() {
		var index = this._getIndexOfInput();

		if (index < this.props.value.length) {
			this._deleteToken(this.props.value[index]);
			// update input offset since it's the offset from the last token
			this._moveInputToIndex(index);
		}
	},

	_deleteToken: function _deleteToken(token) {
		var _this = this;

		var newTokens = this.props.value.filter(function (item) {
			return _this._getTokenValue(item) !== _this._getTokenValue(token);
		});
		this.props.onChange(newTokens);
	},

	_moveInputToIndex: function _moveInputToIndex(index) {
		this.setState({
			inputOffsetFromEnd: this.props.value.length - Math.max(index, -1) - 1
		});
	},

	_moveInputBeforePreviousToken: function _moveInputBeforePreviousToken() {
		this.setState({
			inputOffsetFromEnd: Math.min(this.state.inputOffsetFromEnd + 1, this.props.value.length)
		});
	},

	_moveInputAfterNextToken: function _moveInputAfterNextToken() {
		this.setState({
			inputOffsetFromEnd: Math.max(this.state.inputOffsetFromEnd - 1, 0)
		});
	},

	_addNewTokens: function _addNewTokens(tokens) {
		var _this2 = this;

		var tokensToAdd = (0, _uniq3.default)(tokens.map(this.props.saveTransform).filter(Boolean).filter(function (token) {
			return !_this2._valueContainsToken(token);
		}));
		debug('_addNewTokens: tokensToAdd', tokensToAdd);

		if (tokensToAdd.length > 0) {
			var newValue = (0, _clone3.default)(this.props.value);
			newValue.splice.apply(newValue, [this._getIndexOfInput(), 0].concat(tokensToAdd));
			debug('_addNewTokens: onChange', newValue);
			this.props.onChange(newValue);
		}
	},

	_addNewToken: function _addNewToken(token) {
		this._addNewTokens([token]);

		this.setState({
			incompleteTokenValue: '',
			selectedSuggestionIndex: -1,
			selectedSuggestionScroll: false
		});

		if (this.state.isActive) {
			debug('_addNewToken focusing input');
			this.refs.input.focus();
		}
	},

	_valueContainsToken: function _valueContainsToken(token) {
		var _this3 = this;

		return (0, _some3.default)(this.props.value, function (item) {
			return _this3._getTokenValue(token) === _this3._getTokenValue(item);
		});
	},
	_getTokenValue: function _getTokenValue(token) {
		if ('object' === (typeof token === 'undefined' ? 'undefined' : (0, _typeof3.default)(token))) {
			return token.value;
		}

		return token;
	},


	_getIndexOfInput: function _getIndexOfInput() {
		return this.props.value.length - this.state.inputOffsetFromEnd;
	}
});

module.exports = TokenField;

/***/ }),

/***/ "./client/components/token-field/suggestions-list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js"),
    scrollIntoView = __webpack_require__("./node_modules/dom-scroll-into-view/index.js");

var SuggestionsList = React.createClass({
	displayName: 'SuggestionsList',

	propTypes: {
		isExpanded: React.PropTypes.bool,
		match: React.PropTypes.string,
		displayTransform: React.PropTypes.func.isRequired,
		onSelect: React.PropTypes.func,
		suggestions: React.PropTypes.array,
		selectedIndex: React.PropTypes.number
	},

	getDefaultProps: function getDefaultProps() {
		return {
			isExpanded: false,
			match: '',
			onHover: function onHover() {},
			onSelect: function onSelect() {},
			suggestions: (0, _freeze2.default)([])
		};
	},

	mixins: [PureRenderMixin],

	componentDidUpdate: function componentDidUpdate(prevProps) {
		var node;

		// only have to worry about scrolling selected suggestion into view
		// when already expanded
		if (prevProps.isExpanded && this.props.isExpanded && this.props.selectedIndex > -1 && this.props.scrollIntoView) {
			this._scrollingIntoView = true;
			node = this.refs.list;

			scrollIntoView(node.children[this.props.selectedIndex], node, {
				onlyScrollIfNeeded: true
			});

			setTimeout(function () {
				this._scrollingIntoView = false;
			}.bind(this), 100);
		}
	},

	_computeSuggestionMatch: function _computeSuggestionMatch(suggestion) {
		var match = this.props.displayTransform(this.props.match || '').toLocaleLowerCase(),
		    indexOfMatch;

		if (match.length === 0) {
			return null;
		}

		suggestion = this.props.displayTransform(suggestion);
		indexOfMatch = suggestion.toLocaleLowerCase().indexOf(match);

		return {
			suggestionBeforeMatch: suggestion.substring(0, indexOfMatch),
			suggestionMatch: suggestion.substring(indexOfMatch, indexOfMatch + match.length),
			suggestionAfterMatch: suggestion.substring(indexOfMatch + match.length)
		};
	},

	render: function render() {
		var classes = classNames('token-field__suggestions-list', {
			'is-expanded': this.props.isExpanded && this.props.suggestions.length > 0
		});

		// We set `tabIndex` here because otherwise Firefox sets focus on this
		// div when tabbing off of the input in `TokenField` -- not really sure
		// why, since usually a div isn't focusable by default
		// TODO does this still apply now that it's a <ul> and not a <div>?
		return React.createElement(
			'ul',
			{ ref: 'list', className: classes, tabIndex: '-1' },
			this._renderSuggestions()
		);
	},

	_renderSuggestions: function _renderSuggestions() {

		return (0, _map3.default)(this.props.suggestions, function (suggestion, index) {
			var match = this._computeSuggestionMatch(suggestion),
			    classes = classNames('token-field__suggestion', {
				'is-selected': index === this.props.selectedIndex
			});

			return React.createElement(
				'li',
				{
					className: classes,
					key: suggestion,
					onMouseDown: this._handleMouseDown,
					onClick: this._handleClick(suggestion),
					onMouseEnter: this._handleHover(suggestion) },
				match ? React.createElement(
					'span',
					null,
					match.suggestionBeforeMatch,
					React.createElement(
						'strong',
						{ className: 'token-field__suggestion-match' },
						match.suggestionMatch
					),
					match.suggestionAfterMatch
				) : this.props.displayTransform(suggestion)
			);
		}.bind(this));
	},

	_handleHover: function _handleHover(suggestion) {
		return function () {
			if (!this._scrollingIntoView) {
				this.props.onHover(suggestion);
			}
		}.bind(this);
	},

	_handleClick: function _handleClick(suggestion) {
		return function () {
			this.props.onSelect(suggestion);
		}.bind(this);
	},

	_handleMouseDown: function _handleMouseDown(e) {
		// By preventing default here, we will not lose focus of <input> when clicking a suggestion
		e.preventDefault();
	}
});

module.exports = SuggestionsList;

/***/ }),

/***/ "./client/components/token-field/token-input.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var TokenInput = React.createClass({
	displayName: 'TokenInput',

	propTypes: {
		onChange: React.PropTypes.func,
		onBlur: React.PropTypes.func,
		value: React.PropTypes.string,
		placeholder: React.PropTypes.string,
		disabled: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onChange: function onChange() {},
			onBlur: function onBlur() {},
			value: '',
			disabled: false,
			placeholder: ''
		};
	},

	mixins: [PureRenderMixin],

	render: function render() {
		var props = (0, _extends3.default)({}, this.props, { onChange: this._onChange });
		var value = props.value,
		    placeholder = props.placeholder;

		var size = (value.length === 0 && placeholder && placeholder.length || value.length) + 1;

		return React.createElement('input', (0, _extends3.default)({
			ref: 'input',
			type: 'text'
		}, props, {
			size: size,
			className: 'token-field__input'
		}));
	},

	focus: function focus() {
		if (this.isMounted()) {
			this.refs.input.focus();
		}
	},

	hasFocus: function hasFocus() {
		return this.isMounted() && this.refs.input === document.activeElement;
	},

	_onChange: function _onChange(event) {
		this.props.onChange({
			value: event.target.value
		});
	}
});

module.exports = TokenInput;

/***/ }),

/***/ "./client/components/token-field/token.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _tooltip = __webpack_require__("./client/components/tooltip/index.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
exports.default = _react2.default.createClass({

	displayName: 'Token',

	propTypes: {
		value: _react2.default.PropTypes.string.isRequired,
		displayTransform: _react2.default.PropTypes.func.isRequired,
		onClickRemove: _react2.default.PropTypes.func,
		status: _react2.default.PropTypes.oneOf(['error', 'success', 'validating']),
		isBorderless: _react2.default.PropTypes.bool,
		tooltip: _react2.default.PropTypes.string,
		disabled: _react2.default.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onClickRemove: function onClickRemove() {},
			isBorderless: false,
			disabled: false
		};
	},


	mixins: [_mixin2.default],

	render: function render() {
		var _props = this.props,
		    value = _props.value,
		    status = _props.status,
		    isBorderless = _props.isBorderless,
		    tooltip = _props.tooltip,
		    displayTransform = _props.displayTransform;

		var tokenClasses = (0, _classnames2.default)('token-field__token', {
			'is-error': 'error' === status,
			'is-success': 'success' === status,
			'is-validating': 'validating' === status,
			'is-borderless': isBorderless,
			'is-disabled': this.props.disabled
		});

		return _react2.default.createElement(
			'span',
			{
				className: tokenClasses,
				tabIndex: '-1',
				onMouseEnter: this.props.onMouseEnter,
				onMouseLeave: this.props.onMouseLeave },
			_react2.default.createElement(
				'span',
				{ className: 'token-field__token-text' },
				displayTransform(value)
			),
			_react2.default.createElement('span', {
				className: 'token-field__remove-token noticon noticon-close-alt',
				onClick: !this.props.disabled && this._onClickRemove }),
			tooltip && _react2.default.createElement(
				_tooltip2.default,
				{ showOnMobile: true, context: this, status: status, isVisible: true, position: 'bottom' },
				tooltip
			)
		);
	},
	_onClickRemove: function _onClickRemove() {
		this.props.onClickRemove({
			value: this.props.value
		});
	}
});

/**
 * Internal dependencies
 */

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

/***/ "./client/components/user/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gravatar = __webpack_require__("./client/components/gravatar/index.jsx");

var _gravatar2 = _interopRequireDefault(_gravatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
module.exports = _react2.default.createClass({
	displayName: 'UserItem',
	propTypes: {
		user: _react2.default.PropTypes.object
	},

	render: function render() {
		var user = this.props.user || null,
		    name = user ? user.name : '';
		return _react2.default.createElement(
			'div',
			{ className: 'user', title: name },
			_react2.default.createElement(_gravatar2.default, { size: 26, user: user }),
			_react2.default.createElement(
				'span',
				{ className: 'user__name' },
				name
			)
		);
	}
});

/**
 * Internal dependencies
 */

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

/***/ "./client/lib/email-followers/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:email-followers-actions');

/**
 * Internal dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    wpcom = __webpack_require__("./client/lib/wp/browser.js"),
    EmailFollowersStore = __webpack_require__("./client/lib/email-followers/store.js");

var EmailFollowersActions = {
	fetchFollowers: function fetchFollowers(fetchOptions) {
		var silentUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		(0, _assign2.default)(fetchOptions, { type: 'email' });
		var paginationData = EmailFollowersStore.getPaginationData(fetchOptions);
		if (paginationData.fetchingUsers) {
			return;
		}
		debug('fetchFollowers', fetchOptions);
		if (!silentUpdate) {
			Dispatcher.handleViewAction({
				type: 'FETCHING_EMAIL_FOLLOWERS',
				fetchOptions: fetchOptions
			});
		}
		wpcom.undocumented().site(fetchOptions.siteId).fetchFollowers(fetchOptions, function (error, data) {
			Dispatcher.handleServerAction({
				type: 'RECEIVE_EMAIL_FOLLOWERS',
				fetchOptions: fetchOptions,
				data: data,
				error: error
			});
		});
	},

	removeFollower: function removeFollower(siteId, follower) {
		Dispatcher.handleViewAction({
			type: 'REMOVE_EMAIL_FOLLOWER',
			siteId: siteId,
			follower: follower
		});
		wpcom.undocumented().site(siteId).removeEmailFollower(follower.ID, function (error, data) {
			if (error) {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_REMOVE_EMAIL_FOLLOWER_ERROR',
					siteId: siteId,
					follower: follower,
					error: error
				});
			} else {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_REMOVE_EMAIL_FOLLOWER_SUCCESS',
					siteId: siteId,
					follower: follower,
					data: data
				});
			}
		});
	}
};

module.exports = EmailFollowersActions;

/***/ }),

/***/ "./client/lib/email-followers/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _jsonStableStringify = __webpack_require__("./node_modules/json-stable-stringify/index.js");

var _jsonStableStringify2 = _interopRequireDefault(_jsonStableStringify);

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:email-followers-store');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


var _fetchingFollowersByNamespace = {},
    // store fetching state (boolean)
_followersBySite = {},
    // store user objects
_totalFollowersByNamespace = {},
    // store total found for params
_followersFetchedByNamespace = {},
    // store fetch progress
_pageByNamespace = {},
    // store fetch progress
_followerIDsByNamespace = {},
    // store user order
_removingFromSite = {};

var EmailFollowersStore = {
	// This data may help with infinite scrolling
	getPaginationData: function getPaginationData(fetchOptions) {
		var namespace = getNamespace(fetchOptions);
		debug('getPaginationData:', namespace);
		return {
			fetchInitialized: _followersFetchedByNamespace.hasOwnProperty(namespace),
			totalFollowers: _totalFollowersByNamespace[namespace] || 0,
			fetchingFollowers: _fetchingFollowersByNamespace[namespace] || false,
			followersCurrentPage: _pageByNamespace[namespace],
			numFollowersFetched: _followersFetchedByNamespace[namespace],
			fetchNameSpace: namespace
		};
	},

	isRemoving: function isRemoving(siteId) {
		return _removingFromSite[siteId];
	},

	getFollowers: function getFollowers(fetchOptions) {
		var namespace = getNamespace(fetchOptions),
		    siteId = fetchOptions.siteId,
		    followers = [];

		debug('getFollowers:', namespace);

		if (!_followersBySite[siteId]) {
			_followersBySite[siteId] = {};
		}
		if (!_followerIDsByNamespace[namespace]) {
			return false;
		}
		_followerIDsByNamespace[namespace].forEach(function (followerId) {
			if (_followersBySite[siteId][followerId]) {
				followers.push(_followersBySite[siteId][followerId]);
			}
		});
		return followers;
	},

	emitChange: function emitChange() {
		this.emit('change');
	}
};

function updateFollower(siteId, id, follower) {
	if (!_followersBySite[siteId]) {
		_followersBySite[siteId] = {};
	}
	if (!_followersBySite[siteId][id]) {
		_followersBySite[siteId][id] = {};
	}

	// TODO: follower = FollowerUtils.normalizeFollower( follower );
	follower.avatar_URL = follower.avatar;
	_followersBySite[siteId][id] = (0, _assign2.default)({}, _followersBySite[siteId][id], follower);
}

function updateFollowers(fetchOptions, followers, total) {
	var namespace = getNamespace(fetchOptions),
	    page = fetchOptions.page;

	debug('updateFollowers:', namespace);

	// reset the order
	if (!page || page === 1) {
		_followerIDsByNamespace[namespace] = new _set2.default();
	}

	followers.forEach(function (follower) {
		_followerIDsByNamespace[namespace].add(follower.ID);
		updateFollower(fetchOptions.siteId, follower.ID, follower);
	});

	_totalFollowersByNamespace[namespace] = total;
	_pageByNamespace[namespace] = page;
	_followersFetchedByNamespace[namespace] = _followerIDsByNamespace[namespace].size;
}

function getNamespace(fetchOptions) {
	return (0, _jsonStableStringify2.default)((0, _omit3.default)(fetchOptions, ['page', 'max']));
}

function decrementPaginationData(siteId, followerId) {
	(0, _keys2.default)(_followerIDsByNamespace).forEach(function (namespace) {
		if (namespace.indexOf('siteId=' + siteId + '&') !== -1 && _followerIDsByNamespace[namespace].has(followerId)) {
			_totalFollowersByNamespace[namespace]--;
			_followersFetchedByNamespace[namespace]--;
			_pageByNamespace[namespace]--;
		}
	});
}

function incrementPaginationData(siteId, followerId) {
	(0, _keys2.default)(_followerIDsByNamespace).forEach(function (namespace) {
		if (namespace.indexOf('siteId=' + siteId + '&') !== -1 && _followerIDsByNamespace[namespace].has(followerId)) {
			_totalFollowersByNamespace[namespace]++;
			_followersFetchedByNamespace[namespace]++;
			_pageByNamespace[namespace]++;
		}
	});
}

function removeFollowerFromSite(siteId, followerId) {
	if (!_followersBySite[siteId] || !_followersBySite[siteId][followerId]) {
		return;
	}
	delete _followersBySite[siteId][followerId];
	decrementPaginationData(siteId, followerId);
}

function removeFollowerFromNamespaces(siteId, followerId) {
	(0, _keys2.default)(_followerIDsByNamespace).forEach(function (namespace) {
		if (namespace.indexOf('siteId=' + siteId + '&') !== -1 && _followerIDsByNamespace[namespace].has(followerId)) {
			delete _followerIDsByNamespace[namespace][followerId];
		}
	});
}

EmailFollowersStore.dispatchToken = _dispatcher2.default.register(function (payload) {
	var action = payload.action;
	var namespace = void 0;
	debug('register event Type', action.type, payload);

	switch (action.type) {
		case 'FETCHING_EMAIL_FOLLOWERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingFollowersByNamespace[namespace] = true;
			EmailFollowersStore.emitChange();
			break;
		case 'RECEIVE_EMAIL_FOLLOWERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingFollowersByNamespace[namespace] = false;
			if (!action.error) {
				updateFollowers(action.fetchOptions, action.data.subscribers, action.data.total_email);
				EmailFollowersStore.emitChange();
			}
			break;
		case 'REMOVE_EMAIL_FOLLOWER':
			_removingFromSite[action.siteId] = true;
			removeFollowerFromSite(action.siteId, action.follower.ID);
			EmailFollowersStore.emitChange();
			break;
		case 'RECEIVE_REMOVE_EMAIL_FOLLOWER_SUCCESS':
			_removingFromSite[action.siteId] = false;
			removeFollowerFromNamespaces(action.siteId, action.follower.ID);
			EmailFollowersStore.emitChange();
			break;
		case 'RECEIVE_REMOVE_EMAIL_FOLLOWER_ERROR':
			_removingFromSite[action.siteId] = false;
			updateFollower(action.siteId, action.follower.ID, action.follower);
			incrementPaginationData(action.siteId, action.follower.ID);
			EmailFollowersStore.emitChange();
			break;
	}
});

(0, _emitter2.default)(EmailFollowersStore);

module.exports = EmailFollowersStore;

/***/ }),

/***/ "./client/lib/followers/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:followers-actions');

/**
 * Internal dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    wpcom = __webpack_require__("./client/lib/wp/browser.js"),
    FollowersStore = __webpack_require__("./client/lib/followers/store.js");

var FollowersActions = {
	fetchFollowers: function fetchFollowers(fetchOptions) {
		var silentUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var paginationData = FollowersStore.getPaginationData(fetchOptions);
		if (paginationData.fetchingUsers) {
			return;
		}
		debug('fetchFollowers', fetchOptions);
		if (!silentUpdate) {
			Dispatcher.handleViewAction({
				type: 'FETCHING_FOLLOWERS',
				fetchOptions: fetchOptions
			});
		}
		wpcom.undocumented().site(fetchOptions.siteId).fetchFollowers(fetchOptions, function (error, data) {
			Dispatcher.handleServerAction({
				type: 'RECEIVE_FOLLOWERS',
				fetchOptions: fetchOptions,
				data: data,
				error: error
			});
		});
	},

	removeFollower: function removeFollower(siteId, follower) {
		Dispatcher.handleViewAction({
			type: 'REMOVE_FOLLOWER',
			siteId: siteId,
			follower: follower
		});
		wpcom.undocumented().site(siteId).removeFollower(follower.ID, function (error, data) {
			if (error) {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_REMOVE_FOLLOWER_ERROR',
					siteId: siteId,
					follower: follower,
					error: error
				});
			} else {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_REMOVE_FOLLOWER_SUCCESS',
					siteId: siteId,
					follower: follower,
					data: data
				});
			}
		});
	}
};

module.exports = FollowersActions;

/***/ }),

/***/ "./client/lib/followers/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _endsWith2 = __webpack_require__("./node_modules/lodash/endsWith.js");

var _endsWith3 = _interopRequireDefault(_endsWith2);

var _jsonStableStringify = __webpack_require__("./node_modules/json-stable-stringify/index.js");

var _jsonStableStringify2 = _interopRequireDefault(_jsonStableStringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:wpcom-followers-store');
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _fetchingFollowersByNamespace = {},
    // store fetching state (boolean)
_followersBySite = {},
    // store user objects
_totalFollowersByNamespace = {},
    // store total found for params
_followersFetchedByNamespace = {},
    // store fetch progress
_pageByNamespace = {},
    // store fetch progress
_followerIDsByNamespace = {},
    // store user order
_removingFromSite = {};

var FollowersStore = {
	// This data may help with infinite scrolling
	getPaginationData: function getPaginationData(fetchOptions) {
		var namespace = getNamespace(fetchOptions);
		debug('getPaginationData:', namespace);
		return {
			fetchInitialized: _followersFetchedByNamespace.hasOwnProperty(namespace),
			totalFollowers: _totalFollowersByNamespace[namespace] || 0,
			fetchingFollowers: _fetchingFollowersByNamespace[namespace] || false,
			followersCurrentPage: _pageByNamespace[namespace],
			numFollowersFetched: _followersFetchedByNamespace[namespace],
			fetchNameSpace: namespace
		};
	},

	isRemoving: function isRemoving(siteId) {
		return _removingFromSite[siteId];
	},

	getFollowers: function getFollowers(fetchOptions) {
		var namespace = getNamespace(fetchOptions),
		    siteId = fetchOptions.siteId;

		debug('getFollowers:', namespace);

		if (!_followersBySite[siteId]) {
			_followersBySite[siteId] = {};
		}
		if (!_followerIDsByNamespace[namespace]) {
			return false;
		}
		var followers = [];
		_followerIDsByNamespace[namespace].forEach(function (followerId) {
			if (_followersBySite[siteId][followerId]) {
				followers.push(_followersBySite[siteId][followerId]);
			}
		});
		return followers;
	},

	emitChange: function emitChange() {
		this.emit('change');
	}
};

function updateFollower(siteId, id, follower) {
	if (!_followersBySite[siteId]) {
		_followersBySite[siteId] = {};
	}
	if (!_followersBySite[siteId][id]) {
		_followersBySite[siteId][id] = {};
	}

	// TODO: follower = FollowerUtils.normalizeFollower( follower );
	follower.avatar_URL = follower.avatar;
	_followersBySite[siteId][id] = (0, _assign2.default)({}, _followersBySite[siteId][id], follower);
}

function updateFollowers(fetchOptions, followers, total) {
	var namespace = getNamespace(fetchOptions),
	    page = fetchOptions.page;

	debug('updateFollowers:', namespace);

	// reset the order
	if (!page || page === 1) {
		_followerIDsByNamespace[namespace] = new _set2.default();
	}

	followers.forEach(function (follower) {
		_followerIDsByNamespace[namespace].add(follower.ID);
		updateFollower(fetchOptions.siteId, follower.ID, follower);
	});

	_totalFollowersByNamespace[namespace] = total;
	_pageByNamespace[namespace] = page;
	_followersFetchedByNamespace[namespace] = _followerIDsByNamespace[namespace].size;
}

function getNamespace(fetchOptions) {
	return (0, _jsonStableStringify2.default)((0, _omit3.default)(fetchOptions, ['page', 'max']));
}

function decrementPaginationData(siteId, followerId) {
	(0, _keys2.default)(_followerIDsByNamespace).forEach(function (namespace) {
		if ((0, _endsWith3.default)(namespace, 'siteId=' + siteId) && _followerIDsByNamespace[namespace].has(followerId)) {
			_totalFollowersByNamespace[namespace]--;
			_followersFetchedByNamespace[namespace]--;
			_pageByNamespace[namespace]--;
		}
	});
}

function incrementPaginationData(siteId, followerId) {
	(0, _keys2.default)(_followerIDsByNamespace).forEach(function (namespace) {
		if ((0, _endsWith3.default)(namespace, 'siteId=' + siteId) && _followerIDsByNamespace[namespace].has(followerId)) {
			_totalFollowersByNamespace[namespace]++;
			_followersFetchedByNamespace[namespace]++;
			_pageByNamespace[namespace]++;
		}
	});
}

function removeFollowerFromSite(siteId, followerId) {
	if (!_followersBySite[siteId] || !_followersBySite[siteId][followerId]) {
		return;
	}
	delete _followersBySite[siteId][followerId];
	decrementPaginationData(siteId, followerId);
}

function removeFollowerFromNamespaces(siteId, followerId) {
	(0, _keys2.default)(_followerIDsByNamespace).forEach(function (namespace) {
		if ((0, _endsWith3.default)(namespace, 'siteId=' + siteId) && _followerIDsByNamespace[namespace].has(followerId)) {
			delete _followerIDsByNamespace[namespace][followerId];
		}
	});
}

FollowersStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action,
	    namespace;
	debug('register event Type', action.type, payload);

	switch (action.type) {
		case 'FETCHING_FOLLOWERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingFollowersByNamespace[namespace] = true;
			FollowersStore.emitChange();
			break;
		case 'RECEIVE_FOLLOWERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingFollowersByNamespace[namespace] = false;
			if (!action.error) {
				updateFollowers(action.fetchOptions, action.data.subscribers, action.data.total);
				FollowersStore.emitChange();
			}
			break;
		case 'REMOVE_FOLLOWER':
			_removingFromSite[action.siteId] = true;
			removeFollowerFromSite(action.siteId, action.follower.ID);
			FollowersStore.emitChange();
			break;
		case 'RECEIVE_REMOVE_FOLLOWER_SUCCESS':
			_removingFromSite[action.siteId] = false;
			removeFollowerFromNamespaces(action.siteId, action.follower.ID);
			FollowersStore.emitChange();
			break;
		case 'RECEIVE_REMOVE_FOLLOWER_ERROR':
			_removingFromSite[action.siteId] = false;
			updateFollower(action.siteId, action.follower.ID, action.follower);
			incrementPaginationData(action.siteId, action.follower.ID);
			FollowersStore.emitChange();
			break;
	}
});

emitter(FollowersStore);

module.exports = FollowersStore;

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

/***/ "./client/lib/invites/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

exports.fetchInvites = fetchInvites;
exports.fetchInvite = fetchInvite;
exports.createAccount = createAccount;
exports.acceptInvite = acceptInvite;
exports.sendInvites = sendInvites;
exports.createInviteValidation = createInviteValidation;

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _constants = __webpack_require__("./client/lib/invites/constants.js");

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _actions = __webpack_require__("./client/state/notices/actions.js");

var _utils = __webpack_require__("./client/my-sites/invites/utils.js");

var _actions2 = __webpack_require__("./client/state/sites/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
var debug = new _debug2.default('calypso:invites-actions');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function fetchInvites(siteId) {
	var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	debug('fetchInvites', siteId);

	_dispatcher2.default.handleViewAction({
		type: _constants.action.FETCH_INVITES,
		siteId: siteId,
		offset: offset
	});

	_wp2.default.undocumented().invitesList(siteId, number, offset, function (error, data) {
		_dispatcher2.default.handleServerAction({
			type: error ? _constants.action.RECEIVE_INVITES_ERROR : _constants.action.RECEIVE_INVITES,
			siteId: siteId, offset: offset, data: data, error: error
		});
	});
}

function fetchInvite(siteId, inviteKey) {
	debug('fetchInvite', siteId, inviteKey);

	_dispatcher2.default.handleViewAction({
		type: _constants.action.FETCH_INVITE,
		siteId: siteId,
		inviteKey: inviteKey
	});

	_wp2.default.undocumented().getInvite(siteId, inviteKey, function (error, data) {
		_dispatcher2.default.handleServerAction({
			type: error ? _constants.action.RECEIVE_INVITE_ERROR : _constants.action.RECEIVE_INVITE,
			siteId: siteId, inviteKey: inviteKey, data: data, error: error
		});

		if (error) {
			_analytics2.default.tracks.recordEvent('calypso_invite_validation_failure', {
				error: error.error
			});
		}
	});
}

function createAccount(userData, invite, callback) {
	var send_verification_email = userData.email !== invite.sentTo;

	return function (dispatch) {
		_wp2.default.undocumented().usersNew((0, _assign2.default)({}, userData, { validate: false, send_verification_email: send_verification_email }), function (error, response) {
			var bearerToken = response && response.bearer_token;
			if (error) {
				if (error.message) {
					dispatch((0, _actions.errorNotice)(error.message));
				}
				_analytics2.default.tracks.recordEvent('calypso_invite_account_creation_failed', {
					error: error.error
				});
			} else {
				_analytics2.default.tracks.recordEvent('calypso_invite_account_created');
			}
			callback(error, bearerToken);
		});
	};
}

function acceptInvite(invite, callback) {
	return function (dispatch) {
		_dispatcher2.default.handleViewAction({
			type: _constants.action.INVITE_ACCEPTED,
			invite: invite
		});
		_wp2.default.undocumented().acceptInvite(invite, function (error, data) {
			_dispatcher2.default.handleViewAction({
				type: error ? _constants.action.RECEIVE_INVITE_ACCEPTED_ERROR : _constants.action.RECEIVE_INVITE_ACCEPTED_SUCCESS,
				error: error,
				invite: invite,
				data: data
			});
			if (error) {
				if (error.message) {
					dispatch((0, _actions.errorNotice)(error.message, { displayOnNextPage: true }));
				}
				_analytics2.default.tracks.recordEvent('calypso_invite_accept_failed', {
					error: error.error
				});
			} else {
				if (!(0, _get3.default)(invite, 'site.is_vip')) {
					dispatch(_actions.successNotice.apply(undefined, (0, _toConsumableArray3.default)((0, _utils.acceptedNotice)(invite))));
				}
				_analytics2.default.tracks.recordEvent('calypso_invite_accepted');
			}
			dispatch((0, _actions2.requestSites)());
			if (typeof callback === 'function') {
				callback(error, data);
			}
		});
	};
}

function sendInvites(siteId, usernamesOrEmails, role, message, formId) {
	return function (dispatch) {
		_dispatcher2.default.handleViewAction({
			type: _constants.action.SENDING_INVITES,
			siteId: siteId, usernamesOrEmails: usernamesOrEmails, role: role, message: message
		});
		_wp2.default.undocumented().sendInvites(siteId, usernamesOrEmails, role, message, function (error, data) {
			var validationErrors = (0, _get3.default)(data, 'errors');
			var isErrored = !!error || !(0, _isEmpty3.default)(validationErrors);

			_dispatcher2.default.handleServerAction({
				type: isErrored ? _constants.action.RECEIVE_SENDING_INVITES_ERROR : _constants.action.RECEIVE_SENDING_INVITES_SUCCESS,
				error: error,
				siteId: siteId,
				usernamesOrEmails: usernamesOrEmails,
				role: role,
				message: message,
				formId: formId,
				data: data
			});

			if (isErrored) {
				// If there are no validation errors but the form errored, assume that all errored
				var countErrors = error || (0, _isEmpty3.default)(validationErrors) || 'object' !== (typeof validationErrors === 'undefined' ? 'undefined' : (0, _typeof3.default)(validationErrors)) ? usernamesOrEmails.length : (0, _keys2.default)(data.errors).length;

				if (countErrors === usernamesOrEmails.length) {
					message = _i18nCalypso2.default.translate('Invitation failed to send', 'Invitations failed to send', {
						count: countErrors,
						context: 'Displayed in a notice when all invitations failed to send.'
					});
				} else {
					message = _i18nCalypso2.default.translate('An invitation failed to send', 'Some invitations failed to send', {
						count: countErrors,
						context: 'Displayed in a notice when some invitations failed to send.'
					});
				}

				dispatch((0, _actions.errorNotice)(message));
				_analytics2.default.tracks.recordEvent('calypso_invite_send_failed');
			} else {
				dispatch((0, _actions.successNotice)(_i18nCalypso2.default.translate('Invitation sent successfully', 'Invitations sent successfully', {
					count: usernamesOrEmails.length
				})));
				_analytics2.default.tracks.recordEvent('calypso_invite_send_success');
			}
		});
	};
}

function createInviteValidation(siteId, usernamesOrEmails, role) {
	_dispatcher2.default.handleViewAction({
		type: _constants.action.CREATE_INVITE_VALIDATION,
		siteId: siteId, usernamesOrEmails: usernamesOrEmails, role: role
	});
	_wp2.default.undocumented().createInviteValidation(siteId, usernamesOrEmails, role, function (error, data) {
		_dispatcher2.default.handleServerAction({
			type: error ? _constants.action.RECEIVE_CREATE_INVITE_VALIDATION_ERROR : _constants.action.RECEIVE_CREATE_INVITE_VALIDATION_SUCCESS,
			error: error,
			siteId: siteId,
			usernamesOrEmails: usernamesOrEmails,
			role: role,
			data: data
		});
		if (error) {
			_analytics2.default.tracks.recordEvent('calypso_invite_create_validation_failed');
		} else {
			_analytics2.default.tracks.recordEvent('calypso_invite_create_validation_success');
		}
	});
}

/***/ }),

/***/ "./client/lib/invites/reducers/invites-create-validation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reducer = exports.initialState = undefined;

var _immutable = __webpack_require__("./node_modules/immutable/dist/immutable.js");

var _constants = __webpack_require__("./client/lib/invites/constants.js");

/**
 * External dependencies
 */
var initialState = (0, _immutable.fromJS)({
	success: {},
	errors: {}
});

/**
 * Internal dependencies
 */


var reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var payload = arguments[1];
	var action = payload.action;

	switch (action.type) {
		case _constants.action.RECEIVE_CREATE_INVITE_VALIDATION_SUCCESS:
			return state.setIn(['success', action.siteId, action.role], action.data.success).setIn(['errors', action.siteId, action.role], action.data.errors);
	}
	return state;
};

exports.initialState = initialState;
exports.reducer = reducer;

/***/ }),

/***/ "./client/lib/invites/reducers/invites-sent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reducer = exports.initialState = undefined;

var _immutable = __webpack_require__("./node_modules/immutable/dist/immutable.js");

var _constants = __webpack_require__("./client/lib/invites/constants.js");

/**
 * External dependencies
 */
var initialState = (0, _immutable.fromJS)({
	success: {},
	errors: {}
});

/**
 * Internal dependencies
 */


var reducer = function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var payload = arguments[1];
	var action = payload.action;

	switch (action.type) {
		case _constants.action.RECEIVE_SENDING_INVITES_SUCCESS:
			return state.setIn(['success', action.formId], action.data);
		case _constants.action.RECEIVE_SENDING_INVITES_ERROR:
			return state.setIn(['error', action.formId], action.data);
	}
	return state;
};

exports.initialState = initialState;
exports.reducer = reducer;

/***/ }),

/***/ "./client/lib/invites/stores/invites-create-validation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__("./client/lib/store/index.js");

var _invitesCreateValidation = __webpack_require__("./client/lib/invites/reducers/invites-create-validation.js");

/**
 * Internal dependencies
 */
var InvitesCreateValidationStore = (0, _store.createReducerStore)(_invitesCreateValidation.reducer, _invitesCreateValidation.initialState);

InvitesCreateValidationStore.getSuccess = function (siteId, role) {
  return InvitesCreateValidationStore.get().getIn(['success', siteId, role]);
};
InvitesCreateValidationStore.getErrors = function (siteId, role) {
  return InvitesCreateValidationStore.get().getIn(['errors', siteId, role]);
};

exports.default = InvitesCreateValidationStore;
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/invites/stores/invites-sent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__("./client/lib/store/index.js");

var _invitesSent = __webpack_require__("./client/lib/invites/reducers/invites-sent.js");

/**
 * Internal dependencies
 */
var InvitesSentStore = (0, _store.createReducerStore)(_invitesSent.reducer, _invitesSent.initialState);

InvitesSentStore.getSuccess = function (formId) {
  return InvitesSentStore.get().getIn(['success', formId]);
};
InvitesSentStore.getErrors = function (formId) {
  return InvitesSentStore.get().getIn(['error', formId]);
};

exports.default = InvitesSentStore;
module.exports = exports['default'];

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

/***/ "./client/lib/people/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Internal dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js");

var PeopleActions = {

	removePeopleNotices: function removePeopleNotices(logs) {
		Dispatcher.handleViewAction({
			type: 'REMOVE_PEOPLE_NOTICES',
			logs: logs
		});
	}

};

module.exports = PeopleActions;

/***/ }),

/***/ "./client/lib/people/log-store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reject2 = __webpack_require__("./node_modules/lodash/reject.js");

var _reject3 = _interopRequireDefault(_reject2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _clone2 = __webpack_require__("./node_modules/lodash/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:my-sites:people:log-store');

/**
 * Internal dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _errors = [],
    _inProgress = [],
    _completed = [],
    PeopleLogStore;

function removeLog(log) {
	debug('removing log:', log);
	switch (log.status) {
		case 'error':
			_errors = (0, _reject3.default)(_errors, log);
			debug('current errors:', _errors);
			break;

		case 'inProgress':
			_inProgress = (0, _reject3.default)(_inProgress, log);
			debug('current in progress:', _inProgress);
			break;

		case 'completed':
			_completed = (0, _reject3.default)(_completed, log);
			debug('current completed:', _completed);
			break;
	}
}

function addLog(status, action, siteId, user, error) {
	var log = {
		status: status,
		action: action,
		siteId: siteId,
		user: user,
		error: error
	};

	debug('Add in ' + status + ' data:', log);
	getList(status).push(log);
}

function getList(listName) {
	switch (listName) {
		case 'error':
			return _errors;
		case 'inProgress':
			return _inProgress;
		case 'completed':
			return _completed;
	}
}

function filterList(listName, filterBy) {
	var list = getList(listName);
	if (filterBy) {
		list = list.filter(filterBy);
	}
	return (0, _clone3.default)(list);
}

PeopleLogStore = {
	hasUnauthorizedError: function hasUnauthorizedError(siteId) {
		return Boolean((0, _find3.default)(_errors, function (log) {
			return log.siteId === siteId && log.error === 'unauthorized';
		}));
	},

	getErrors: filterList.bind(undefined, 'error'),

	getInProgress: filterList.bind(undefined, 'inProgress'),

	getCompleted: filterList.bind(undefined, 'completed'),

	clear: function clear() {
		_errors = [];
		_inProgress = [];
		_completed = [];
	},

	emitChange: function emitChange() {
		this.emit('change');
	}
};

PeopleLogStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;

	switch (action.type) {
		case 'REMOVE_PEOPLE_NOTICES':
			action.logs.forEach(removeLog);
			PeopleLogStore.emitChange();
			break;
		case 'RECEIVE_VIEWERS':
		case 'RECEIVE_USERS':
		case 'RECEIVE_FOLLOWERS':
		case 'RECEIVE_EMAIL_FOLLOWERS':
		case 'RECEIVE_ROLES':
			if (action.error) {
				addLog('error', action.type, action.siteId || action.fetchOptions.siteId, null, action.error.error);
				PeopleLogStore.emitChange();
			}
			break;
		case 'RECEIVE_USER_FAILED':
			addLog('error', action.type, action.fetchOptions.siteId, action.login, action.error.error);
			PeopleLogStore.emitChange();
			break;
		case 'UPDATE_SITE_USER':
		case 'DELETE_SITE_USER':
			addLog('inProgress', action.type, action.siteId, action.user);
			PeopleLogStore.emitChange();
			break;
		case 'RECEIVE_DELETE_SITE_USER_FAILURE':
		case 'RECEIVE_DELETE_SITE_USER_SUCCESS':
		case 'RECEIVE_UPDATE_SITE_USER_FAILURE':
		case 'RECEIVE_UPDATE_SITE_USER_SUCCESS':
			removeLog({
				status: 'inProgress',
				action: action.action,
				siteId: action.siteId,
				user: action.user
			});
			if (action.error) {
				addLog('error', action.type, action.siteId, action.user, action.error);
			} else {
				addLog('completed', action.type, action.siteId, action.user);
			}
			PeopleLogStore.emitChange();
			break;

	}
});

// Add the Store to the emitter so we can emit change events.
emitter(PeopleLogStore);

module.exports = PeopleLogStore;

/***/ }),

/***/ "./client/lib/react-pass-to-children/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

module.exports = function (element, additionalProps) {
	var props = (0, _assign3.default)({}, element.props, additionalProps),
	    childElements;

	delete props.children;

	if (React.Children.count(element.props.children) > 1) {
		childElements = React.Children.map(element.props.children, function (child) {
			if (!React.isValidElement(child)) {
				return child;
			}

			return React.cloneElement(child, props);
		});

		return React.DOM.div(null, childElements);
	}

	return React.cloneElement(element.props.children, props);
};

/***/ }),

/***/ "./client/lib/users/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:users:actions');

/**
 * Internal dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    wpcom = __webpack_require__("./client/lib/wp/browser.js"),
    UsersStore = __webpack_require__("./client/lib/users/store.js");

var UsersActions = {
	fetchUsers: function fetchUsers(fetchOptions) {
		var paginationData = UsersStore.getPaginationData(fetchOptions);
		if (paginationData.fetchingUsers) {
			return;
		}
		debug('fetchUsers', fetchOptions);
		Dispatcher.handleViewAction({
			type: 'FETCHING_USERS',
			fetchOptions: fetchOptions
		});

		wpcom.site(fetchOptions.siteId).usersList(fetchOptions, function (error, data) {
			Dispatcher.handleServerAction({
				type: 'RECEIVE_USERS',
				fetchOptions: fetchOptions,
				data: data,
				error: error
			});
		});
	},

	fetchUpdated: function fetchUpdated(fetchOptions) {
		var paginationData = UsersStore.getPaginationData(fetchOptions);
		if (paginationData.fetchingUsers) {
			return;
		}

		Dispatcher.handleViewAction({
			type: 'FETCHING_UPDATED_USERS',
			fetchOptions: fetchOptions
		});

		var updatedFetchOptions = UsersStore.getUpdatedParams(fetchOptions);
		debug('Updated fetchOptions: ' + (0, _stringify2.default)(updatedFetchOptions));

		wpcom.site(fetchOptions.siteId).usersList(updatedFetchOptions, function (error, data) {
			Dispatcher.handleServerAction({
				type: 'RECEIVE_UPDATED_USERS',
				fetchOptions: fetchOptions,
				data: data,
				error: error
			});
		});
	},

	deleteUser: function deleteUser(siteId, userId, reassignUserId) {
		debug('deleteUser', userId);
		var user = UsersStore.getUser(siteId, userId);
		if (!user) {
			return;
		}
		Dispatcher.handleViewAction({
			type: 'DELETE_SITE_USER',
			siteId: siteId,
			user: user
		});

		var attributes = void 0;
		if ('undefined' !== typeof reassignUserId) {
			attributes = {
				reassign: reassignUserId
			};
		}

		wpcom.undocumented().site(siteId).deleteUser(userId, attributes, function (error, data) {
			if (error || !data.success) {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_DELETE_SITE_USER_FAILURE',
					action: 'DELETE_SITE_USER',
					siteId: siteId,
					user: user,
					error: error
				});
			} else {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_DELETE_SITE_USER_SUCCESS',
					action: 'DELETE_SITE_USER',
					siteId: siteId,
					user: user,
					data: data
				});
			}
		});
	},

	updateUser: function updateUser(siteId, userId, attributes) {
		debug('updateUser', userId);
		var user = UsersStore.getUser(siteId, userId),
		    updatedUser = (0, _assign2.default)(user, attributes);

		if (!user) {
			return;
		}

		Dispatcher.handleViewAction({
			type: 'UPDATE_SITE_USER',
			siteId: siteId,
			user: updatedUser
		});
		wpcom.undocumented().site(siteId).updateUser(userId, attributes, function (error, data) {
			if (error) {
				debug('Update user error', error);
				Dispatcher.handleServerAction({
					type: 'RECEIVE_UPDATE_SITE_USER_FAILURE',
					action: 'UPDATE_SITE_USER',
					siteId: siteId,
					user: user,
					error: error
				});
			} else {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_UPDATE_SITE_USER_SUCCESS',
					action: 'UPDATE_SITE_USER',
					siteId: siteId,
					user: user,
					data: data
				});
			}
		});
	},

	fetchUser: function fetchUser(fetchOptions, login) {
		debug('fetchUser', fetchOptions);

		Dispatcher.handleViewAction({
			type: 'FETCHING_USERS',
			fetchOptions: fetchOptions
		});

		wpcom.undocumented().site(fetchOptions.siteId).getUser(login, function (error, data) {
			if (error) {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_USER_FAILED',
					fetchOptions: fetchOptions,
					siteId: fetchOptions.siteId,
					login: login,
					error: error
				});
			} else {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_SINGLE_USER',
					fetchOptions: fetchOptions,
					user: data
				});
			}
		});
	}

};

module.exports = UsersActions;

/***/ }),

/***/ "./client/lib/users/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _set = __webpack_require__("./node_modules/babel-runtime/core-js/set.js");

var _set2 = _interopRequireDefault(_set);

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _endsWith2 = __webpack_require__("./node_modules/lodash/endsWith.js");

var _endsWith3 = _interopRequireDefault(_endsWith2);

var _jsonStableStringify = __webpack_require__("./node_modules/json-stable-stringify/index.js");

var _jsonStableStringify2 = _interopRequireDefault(_jsonStableStringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:users:store');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _fetchingUsersByNamespace = {},
    // store fetching state (boolean)
_fetchingUpdatedUsersByNamespace = {},
    // store fetching state (boolean)
_usersBySite = {},
    // store user objects
_totalUsersByNamespace = {},
    // store total found for params
_usersFetchedByNamespace = {},
    // store fetch progress
_offsetByNamespace = {},
    // store fetch progress
_userIDsByNamespace = {}; // store user order

var UsersStore = {
	// This data can help manage infinite scroll
	getPaginationData: function getPaginationData(fetchOptions) {
		var namespace = getNamespace(fetchOptions);
		debug('getPaginationData:', namespace);
		return {
			fetchInitialized: _usersFetchedByNamespace.hasOwnProperty(namespace),
			totalUsers: _totalUsersByNamespace[namespace] || 0,
			fetchingUsers: _fetchingUsersByNamespace[namespace] || false,
			usersCurrentOffset: _offsetByNamespace[namespace],
			numUsersFetched: _usersFetchedByNamespace[namespace],
			fetchNameSpace: namespace
		};
	},
	// Get Users for a set of fetchOptions
	getUsers: function getUsers(fetchOptions) {
		var namespace = getNamespace(fetchOptions),
		    siteId = fetchOptions.siteId,
		    users = [];

		debug('getUsers:', namespace);

		if (!_usersBySite[siteId]) {
			_usersBySite[siteId] = {};
		}
		if (!_userIDsByNamespace[namespace]) {
			return users;
		}
		_userIDsByNamespace[namespace].forEach(function (userId) {
			if (_usersBySite[siteId][userId]) {
				users.push(_usersBySite[siteId][userId]);
			}
		});
		return users;
	},

	getUser: function getUser(siteId, userId) {
		if (!_usersBySite[siteId] || !_usersBySite[siteId][userId]) {
			return null;
		}
		return _usersBySite[siteId][userId];
	},

	getUserByLogin: function getUserByLogin(siteId, login) {
		return (0, _find3.default)(_usersBySite[siteId], function (user) {
			return user.login === login;
		});
	},

	getUpdatedParams: function getUpdatedParams(fetchOptions) {
		var namespace = getNamespace(fetchOptions);
		var requestNumber = _usersFetchedByNamespace[namespace] || fetchOptions.number;

		return (0, _assign2.default)({}, fetchOptions, {
			offset: 0,
			number: Math.min(requestNumber, 1000)
		});
	},


	emitChange: function emitChange() {
		this.emit('change');
	}
};

function updateUser(siteId, id, user) {
	if (!_usersBySite[siteId]) {
		_usersBySite[siteId] = {};
	}
	if (!_usersBySite[siteId][id]) {
		_usersBySite[siteId][id] = {};
	}

	// TODO: user = UserUtils.normalizeTeamMemberData( teamMember );
	_usersBySite[siteId][id] = (0, _assign2.default)({}, _usersBySite[siteId][id], user);
}

function decrementPaginationData(siteId, userId) {
	(0, _keys2.default)(_userIDsByNamespace).forEach(function (namespace) {
		if ((0, _endsWith3.default)(namespace, 'siteId=' + siteId) && _userIDsByNamespace[namespace].has(userId)) {
			_totalUsersByNamespace[namespace]--;
			_usersFetchedByNamespace[namespace]--;
		}
	});
}

function incrementPaginationData(siteId, userId) {
	(0, _keys2.default)(_userIDsByNamespace).forEach(function (namespace) {
		if ((0, _endsWith3.default)(namespace, 'siteId=' + siteId) && _userIDsByNamespace[namespace].has(userId)) {
			_totalUsersByNamespace[namespace]++;
			_usersFetchedByNamespace[namespace]++;
		}
	});
}

function deleteUserFromSite(siteId, userId) {
	if (!_usersBySite[siteId] || !_usersBySite[siteId][userId]) {
		return;
	}
	delete _usersBySite[siteId][userId];
	decrementPaginationData(siteId, userId);
}

function deleteUserFromNamespaces(siteId, userId) {
	(0, _keys2.default)(_userIDsByNamespace).forEach(function (namespace) {
		if ((0, _endsWith3.default)(namespace, 'siteId=' + siteId) && _userIDsByNamespace[namespace].has(userId)) {
			_userIDsByNamespace[namespace].delete(userId);
		}
	});
}

function addSingleUser(fetchOptions, user, namespace) {
	if (!_userIDsByNamespace[namespace]) {
		_userIDsByNamespace[namespace] = new _set2.default();
	}
	_userIDsByNamespace[namespace].add(user.ID);
	updateUser(fetchOptions.siteId, user.ID, user);
}

function updateUsers(fetchOptions, users, total) {
	var namespace = getNamespace(fetchOptions),
	    offset = fetchOptions.offset;

	debug('updateUsers:', namespace);

	// reset the order
	if (!offset) {
		_userIDsByNamespace[namespace] = new _set2.default();
	}

	users.forEach(function (user) {
		_userIDsByNamespace[namespace].add(user.ID);
		updateUser(fetchOptions.siteId, user.ID, user);
	});

	_totalUsersByNamespace[namespace] = total;
	_offsetByNamespace[namespace] = offset;
	_usersFetchedByNamespace[namespace] = _userIDsByNamespace[namespace].size;
}

function getNamespace(fetchOptions) {
	return (0, _jsonStableStringify2.default)((0, _omit3.default)(fetchOptions, ['number', 'offset']));
}

UsersStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action,
	    namespace;

	switch (action.type) {
		case 'RECEIVE_USERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingUsersByNamespace[namespace] = false;

			if (!action.error) {
				updateUsers(action.fetchOptions, action.data.users, action.data.found);
				UsersStore.emitChange();
			}

			break;
		case 'RECEIVE_UPDATED_USERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingUpdatedUsersByNamespace[namespace] = false;

			if (!action.error) {
				updateUsers(action.fetchOptions, action.data.users, action.data.found);
				UsersStore.emitChange();
			}
			break;
		case 'UPDATE_SITE_USER':
			updateUser(action.siteId, action.user.ID, action.user);
			UsersStore.emitChange();
			break;
		case 'RECEIVE_UPDATE_SITE_USER_FAILURE':
			updateUser(action.siteId, action.user.ID, action.user);
			UsersStore.emitChange();
			break;
		case 'DELETE_SITE_USER':
			deleteUserFromSite(action.siteId, action.user.ID);
			UsersStore.emitChange();
			break;
		case 'RECEIVE_DELETE_SITE_USER_SUCCESS':
			deleteUserFromNamespaces(action.siteId, action.user.ID);
			UsersStore.emitChange();
			break;
		case 'RECEIVE_DELETE_SITE_USER_FAILURE':
			updateUser(action.siteId, action.user.ID, action.user);
			incrementPaginationData(action.siteId, action.user.ID);
			UsersStore.emitChange();
			break;
		case 'FETCHING_USERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingUsersByNamespace[namespace] = true;
			UsersStore.emitChange();
			break;
		case 'FETCHING_UPDATED_USERS':
			namespace = getNamespace(action.fetchOptions);
			_fetchingUpdatedUsersByNamespace[namespace] = true;
			UsersStore.emitChange();
			break;
		case 'RECEIVE_SINGLE_USER':
			namespace = getNamespace(action.fetchOptions);
			_fetchingUsersByNamespace[namespace] = false;
			addSingleUser(action.fetchOptions, action.user, namespace);
			UsersStore.emitChange();
			break;
		case 'RECEIVE_USER_FAILED':
			namespace = getNamespace(action.fetchOptions);
			_fetchingUsersByNamespace[namespace] = false;
			UsersStore.emitChange();
			break;
	}
});

emitter(UsersStore);

module.exports = UsersStore;

/***/ }),

/***/ "./client/lib/viewers/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:viewers:actions');

/**
 * Internal dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    wpcom = __webpack_require__("./client/lib/wp/browser.js");

var ViewersActions = {
	fetch: function fetch(siteId) {
		var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

		var number = 100;
		debug('Fetch site viewers', siteId);

		Dispatcher.handleViewAction({
			type: 'FETCHING_VIEWERS',
			siteId: siteId
		});

		wpcom.undocumented().site(siteId).getViewers({ page: page, number: number }, function (error, data) {
			Dispatcher.handleServerAction({
				type: 'RECEIVE_VIEWERS',
				action: 'RECEIVE_VIEWERS',
				siteId: siteId,
				page: page,
				data: data,
				error: error
			});
		});
	},

	remove: function remove(siteId, viewer) {
		Dispatcher.handleViewAction({
			type: 'REMOVE_VIEWER',
			siteId: siteId,
			viewer: viewer
		});

		wpcom.undocumented().site(siteId).removeViewer(viewer.ID, function (error, data) {
			if (error) {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_REMOVE_VIEWER_ERROR',
					siteId: siteId,
					viewer: viewer,
					error: error
				});
			} else {
				Dispatcher.handleServerAction({
					type: 'RECEIVE_REMOVE_VIEWER_SUCCESS',
					siteId: siteId,
					viewer: viewer,
					data: data
				});
			}
		});
	}
};

module.exports = ViewersActions;

/***/ }),

/***/ "./client/lib/viewers/store.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _values2 = __webpack_require__("./node_modules/lodash/values.js");

var _values3 = _interopRequireDefault(_values2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:viewers:store');

/**
 * Internal dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js"),
    emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _fetchingViewers = {},
    _viewersBySite = {},
    _totalViewers = {},
    _numViewersFetched = {},
    _viewersCurrentPage = {},
    _removingFromSite = {};

var ViewersStore = {
	// This data may help with infinite scrolling
	getPaginationData: function getPaginationData(siteId) {
		return {
			totalViewers: _totalViewers[siteId] || 0,
			fetchingViewers: _fetchingViewers[siteId],
			currentViewersPage: _viewersCurrentPage[siteId],
			numViewersFetched: _numViewersFetched[siteId]
		};
	},

	getViewers: function getViewers(siteId) {
		if (!_viewersBySite[siteId]) {
			return false;
		}

		return (0, _values3.default)(_viewersBySite[siteId]);
	},

	isRemoving: function isRemoving(siteId) {
		return _removingFromSite[siteId];
	},

	emitChange: function emitChange() {
		this.emit('change');
	}
};

function updateViewer(siteId, id, viewer) {
	if (!_viewersBySite[siteId]) {
		_viewersBySite[siteId] = {};
	}
	if (!_viewersBySite[siteId][id]) {
		_viewersBySite[siteId][id] = {};
	}

	_viewersBySite[siteId][id] = (0, _assign3.default)({}, _viewersBySite[siteId][id], viewer);

	debug('Updating viewer:', _viewersBySite[siteId][id]);
}

function updateViewers(siteId, viewers, page, total) {
	_fetchingViewers[siteId] = false;
	_totalViewers[siteId] = total;
	_viewersCurrentPage[siteId] = page;

	if (page === 1) {
		_viewersBySite[siteId] = {};
		_numViewersFetched[siteId] = 0;
	}

	viewers.forEach(function (viewer) {
		_numViewersFetched[siteId]++;
		updateViewer(siteId, viewer.ID, viewer);
	});
}

function incrementPaginationData(siteId) {
	_totalViewers[siteId]++;
	_numViewersFetched[siteId]++;
	_viewersCurrentPage[siteId]++;
}

function decrementPaginationData(siteId) {
	_totalViewers[siteId]--;
	_numViewersFetched[siteId]--;
	_viewersCurrentPage[siteId]--;
}

function removeViewerFromSite(siteId, viewerId) {
	if (!_viewersBySite[siteId] || !_viewersBySite[siteId][viewerId]) {
		return;
	}
	delete _viewersBySite[siteId][viewerId];
	decrementPaginationData(siteId);
}

ViewersStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;
	debug('register event Type', action.type, payload);

	switch (action.type) {
		case 'FETCHING_VIEWERS':
			_fetchingViewers[action.siteId] = true;
			ViewersStore.emitChange();
			break;
		case 'RECEIVE_VIEWERS':
			_fetchingViewers[action.siteId] = false;
			// Only update users if there was not an error
			if (!action.error) {
				updateViewers(action.siteId, action.data.viewers, action.page, action.data.found);
			}
			ViewersStore.emitChange();
			break;
		case 'REMOVE_VIEWER':
			_removingFromSite[action.siteId] = true;
			removeViewerFromSite(action.siteId, action.viewer.ID);
			ViewersStore.emitChange();
			break;
		case 'RECEIVE_REMOVE_VIEWER_SUCCESS':
			_removingFromSite[action.siteId] = false;
			ViewersStore.emitChange();
			break;
		case 'RECEIVE_REMOVE_VIEWER_ERROR':
			_removingFromSite[action.siteId] = false;
			updateViewer(action.siteId, action.viewer.ID, action.viewer);
			incrementPaginationData(action.siteId);
			ViewersStore.emitChange();
			break;
	}
});

emitter(ViewersStore);

module.exports = ViewersStore;

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

/***/ "./client/my-sites/invites/utils.js":
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

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
exports.default = {
	acceptedNotice: function acceptedNotice(invite) {
		var displayOnNextPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

		var site = _react2.default.createElement(
			'a',
			{ href: (0, _get3.default)(invite, 'site.URL'), className: 'invite-accept__notice-site-link' },
			(0, _get3.default)(invite, 'site.title')
		);

		switch ((0, _get3.default)(invite, 'role')) {
			case 'follower':
				return [_i18nCalypso2.default.translate('You are now following {{site/}}', {
					components: { site: site }
				}), {
					button: _i18nCalypso2.default.translate('Visit Site'),
					href: (0, _get3.default)(invite, 'site.URL'),
					displayOnNextPage: displayOnNextPage
				}];

			case 'viewer':
				return [_i18nCalypso2.default.translate('You are now a viewer of: {{site/}}', {
					components: { site: site }
				}), {
					button: _i18nCalypso2.default.translate('Visit Site'),
					href: (0, _get3.default)(invite, 'site.URL'),
					displayOnNextPage: displayOnNextPage
				}];

			case 'administrator':
				return [_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						{ className: 'invite-message__title' },
						_i18nCalypso2.default.translate('You\'re now an Administrator of: {{site/}}', {
							components: { site: site }
						})
					),
					_react2.default.createElement(
						'p',
						{ className: 'invite-message__intro' },
						_i18nCalypso2.default.translate('This is your site dashboard where you will be able to manage all aspects of %(site)s', {
							args: { site: (0, _get3.default)(invite, 'site.title') }
						})
					)
				), { displayOnNextPage: displayOnNextPage }];

			case 'editor':
				return [_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						{ className: 'invite-message__title' },
						_i18nCalypso2.default.translate('You\'re now an Editor of: {{site/}}', {
							components: { site: site }
						})
					),
					_react2.default.createElement(
						'p',
						{ className: 'invite-message__intro' },
						_i18nCalypso2.default.translate('This is your site dashboard where you can publish and manage your own posts and the posts of others, as well as upload media.')
					)
				), { displayOnNextPage: displayOnNextPage }];

			case 'author':
				return [_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						{ className: 'invite-message__title' },
						_i18nCalypso2.default.translate('You\'re now an Author of: {{site/}}', {
							components: { site: site }
						})
					),
					_react2.default.createElement(
						'p',
						{ className: 'invite-message__intro' },
						_i18nCalypso2.default.translate('This is your site dashboard where you can publish and edit your own posts as well as upload media.')
					)
				), { displayOnNextPage: displayOnNextPage }];

			case 'contributor':
				return [_react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h3',
						{ className: 'invite-message__title' },
						_i18nCalypso2.default.translate('You\'re now a Contributor of: {{site/}}', {
							components: { site: site }
						})
					),
					_react2.default.createElement(
						'p',
						{ className: 'invite-message__intro' },
						_i18nCalypso2.default.translate('This is your site dashboard where you can write and manage your own posts.')
					)
				), { displayOnNextPage: displayOnNextPage }];

			case 'subscriber':
				return [_i18nCalypso2.default.translate('You\'re now a Subscriber of: {{site/}}', {
					components: { site: site }
				}), { displayOnNextPage: displayOnNextPage }];
		}
	},
	getRedirectAfterAccept: function getRedirectAfterAccept(invite) {
		var readerPath = '/';
		var postsListPath = '/posts/' + invite.site.ID;

		if ((0, _get3.default)(invite, 'site.is_vip')) {
			switch (invite.role) {
				case 'viewer':
				case 'follower':
					return (0, _get3.default)(invite, 'site.URL') || readerPath;

				default:
					return (0, _get3.default)(invite, 'site.admin_url') || postsListPath;
			}
		}

		switch (invite.role) {
			case 'viewer':
			case 'follower':
				return readerPath;

			default:
				return postsListPath;
		}
	}
};
module.exports = exports['default'];

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

/***/ "./client/my-sites/people/controller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _route = __webpack_require__("./client/lib/route/index.js");

var _route2 = _interopRequireDefault(_route);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _main = __webpack_require__("./client/my-sites/people/main.jsx");

var _main2 = _interopRequireDefault(_main);

var _editTeamMemberForm = __webpack_require__("./client/my-sites/people/edit-team-member-form/index.jsx");

var _editTeamMemberForm2 = _interopRequireDefault(_editTeamMemberForm);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _toTitleCase = __webpack_require__("./node_modules/to-title-case/index.js");

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _logStore = __webpack_require__("./client/lib/people/log-store.js");

var _logStore2 = _interopRequireDefault(_logStore);

var _actions = __webpack_require__("./client/state/document-head/actions.js");

var _invitePeople = __webpack_require__("./client/my-sites/people/invite-people/index.jsx");

var _invitePeople2 = _interopRequireDefault(_invitePeople);

var _reactHelpers = __webpack_require__("./client/lib/react-helpers/index.js");

var _selectors = __webpack_require__("./client/state/ui/layout-focus/selectors.js");

var _actions2 = __webpack_require__("./client/state/ui/layout-focus/actions.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	redirectToTeam: redirectToTeam,

	enforceSiteEnding: function enforceSiteEnding(context, next) {
		var siteId = _route2.default.getSiteFragment(context.path);

		if (!siteId) {
			redirectToTeam(context);
		}

		next();
	},
	people: function people(filter, context) {
		renderPeopleList(filter, context);
	},
	invitePeople: function invitePeople(context) {
		renderInvitePeople(context);
	},
	person: function person(context) {
		renderSingleTeamMember(context);
	}
};

/**
 * Internal Dependencies
 */
/**
 * External Dependencies
 */

function redirectToTeam(context) {
	if (context) {
		// if we are redirecting we need to retain our intended layout-focus
		var currentLayoutFocus = (0, _selectors.getCurrentLayoutFocus)(context.store.getState());
		context.store.dispatch((0, _actions2.setNextLayoutFocus)(currentLayoutFocus));
	}
	_page2.default.redirect('/people/team');
}

function renderPeopleList(filter, context) {
	context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('People', { textOnly: true }))); // FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.

	(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_main2.default, {
		peopleLog: _logStore2.default,
		filter: filter,
		search: context.query.s
	}), document.getElementById('primary'), context.store);
	_analytics2.default.pageView.record('people/' + filter + '/:site', 'People > ' + (0, _toTitleCase2.default)(filter));
}

function renderInvitePeople(context) {
	var state = context.store.getState();
	var site = (0, _selectors2.getSelectedSite)(state);

	context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('Invite People', { textOnly: true }))); // FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.

	(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_invitePeople2.default, {
		site: site
	}), document.getElementById('primary'), context.store);
}

function renderSingleTeamMember(context) {
	context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('View Team Member', { textOnly: true }))); // FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.

	(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_editTeamMemberForm2.default, {
		userLogin: context.params.user_login,
		prevPath: context.prevPath
	}), document.getElementById('primary'), context.store);
}
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/delete-user/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

var _gravatar = __webpack_require__("./client/components/gravatar/index.jsx");

var _gravatar2 = _interopRequireDefault(_gravatar);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var Card = __webpack_require__("./client/components/card/index.jsx"),
    CompactCard = __webpack_require__("./client/components/card/compact.jsx"),
    Gridicon = __webpack_require__("./node_modules/gridicons/build/index.js"),
    FormSectionHeading = __webpack_require__("./client/components/forms/form-section-heading/index.jsx"),
    FormFieldset = __webpack_require__("./client/components/forms/form-fieldset/index.jsx"),
    FormLabel = __webpack_require__("./client/components/forms/form-label/index.jsx"),
    FormRadio = __webpack_require__("./client/components/forms/form-radio/index.jsx"),
    FormButton = __webpack_require__("./client/components/forms/form-button/index.jsx"),
    FormButtonsBar = __webpack_require__("./client/components/forms/form-buttons-bar/index.jsx"),
    AuthorSelector = __webpack_require__("./client/blocks/author-selector/index.jsx"),
    UsersActions = __webpack_require__("./client/lib/users/actions.js"),
    accept = __webpack_require__("./client/lib/accept/index.js"),
    analytics = __webpack_require__("./client/lib/analytics/index.js");


var DeleteUser = _react2.default.createClass({
	displayName: 'DeleteUser',

	mixins: [_mixin2.default],

	propTypes: {
		isMultisite: _react2.default.PropTypes.bool,
		isJetpack: _react2.default.PropTypes.bool,
		siteId: _react2.default.PropTypes.number,
		user: _react2.default.PropTypes.object,
		currentUser: _react2.default.PropTypes.object
	},

	getInitialState: function getInitialState() {
		return {
			showDialog: false,
			radioOption: false,
			reassignUser: false
		};
	},

	getRemoveText: function getRemoveText() {
		var translate = this.props.translate;

		if (!this.props.user || !this.props.user.name) {
			return translate('Remove User');
		}

		return translate('Remove %(username)s', {
			args: {
				username: this.props.user.name
			}
		});
	},

	getDeleteText: function getDeleteText() {
		var translate = this.props.translate;

		if (!this.props.user || !this.props.user.name) {
			return translate('Delete User');
		}

		return translate('Delete %(username)s', {
			args: {
				username: this.props.user.name
			}
		});
	},

	handleRadioChange: function handleRadioChange(event) {
		var name = event.currentTarget.name,
		    value = event.currentTarget.value,
		    updateObj = {};

		updateObj[name] = value;

		this.setState(updateObj);
		analytics.ga.recordEvent('People', 'Selected Delete User Assignment', 'Assign', value);
	},

	setReassignLabel: function setReassignLabel(label) {
		this.reassignLabel = label;
	},


	onSelectAuthor: function onSelectAuthor(author) {
		this.setState({
			reassignUser: author
		});
	},

	removeUser: function removeUser() {
		var _this = this;

		var translate = this.props.translate;

		accept(_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'p',
				null,
				this.props.user && this.props.user.name ? translate('If you remove %(username)s, that user will no longer be able to access this site, ' + 'but any content that was created by %(username)s will remain on the site.', {
					args: {
						username: this.props.user.name
					}
				}) : translate('If you remove this user, he or she will no longer be able to access this site, ' + 'but any content that was created by this user will remain on the site.')
			),
			_react2.default.createElement(
				'p',
				null,
				translate('Would you still like to remove this user?')
			)
		), function (accepted) {
			if (accepted) {
				analytics.ga.recordEvent('People', 'Clicked Confirm Remove User on Edit User Network Site');
				UsersActions.deleteUser(_this.props.siteId, _this.props.user.ID);
			} else {
				analytics.ga.recordEvent('People', 'Clicked Cancel Remove User on Edit User Network Site');
			}
		}, translate('Remove'));
		analytics.ga.recordEvent('People', 'Clicked Remove User on Edit User Network Site');
	},

	deleteUser: function deleteUser(event) {
		event.preventDefault();
		if (!this.props.user.ID) {
			return;
		}

		var reassignUserId = void 0;
		if (this.state.reassignUser && 'reassign' === this.state.radioOption) {
			reassignUserId = this.state.reassignUser.ID;
		}

		UsersActions.deleteUser(this.props.siteId, this.props.user.ID, reassignUserId);
		analytics.ga.recordEvent('People', 'Clicked Remove User on Edit User Single Site');
	},

	getAuthorSelectPlaceholder: function getAuthorSelectPlaceholder() {
		var translate = this.props.translate;

		return _react2.default.createElement(
			'span',
			{ className: 'delete-user__select-placeholder' },
			translate('select a user')
		);
	},

	getTranslatedAssignLabel: function getTranslatedAssignLabel() {
		var translate = this.props.translate;

		return translate('Attribute all content to {{AuthorSelector/}}', {
			components: {
				AuthorSelector: _react2.default.createElement(
					AuthorSelector,
					{
						allowSingleUser: true,
						siteId: this.props.siteId,
						onSelect: this.onSelectAuthor,
						exclude: [this.props.user.ID],
						ignoreContext: this.reassignLabel
					},
					this.state.reassignUser ? _react2.default.createElement(
						'span',
						null,
						_react2.default.createElement(_gravatar2.default, { size: 26, user: this.state.reassignUser }),
						_react2.default.createElement(
							'span',
							{ className: 'delete-user__reassign-user-name' },
							this.state.reassignUser.name
						)
					) : this.getAuthorSelectPlaceholder()
				)
			}
		});
	},

	isDeleteButtonDisabled: function isDeleteButtonDisabled() {
		if ('reassign' === this.state.radioOption) {
			return false === this.state.reassignUser || this.state.reassignUser.ID === this.props.user.ID;
		}

		return false === this.state.radioOption;
	},

	renderSingleSite: function renderSingleSite() {
		var translate = this.props.translate;

		return _react2.default.createElement(
			Card,
			{ className: 'delete-user__single-site' },
			_react2.default.createElement(
				'form',
				{ onSubmit: this.deleteUser },
				_react2.default.createElement(
					FormSectionHeading,
					null,
					this.getDeleteText()
				),
				_react2.default.createElement(
					'p',
					{ className: 'delete-user__explanation' },
					this.props.user.name ? translate('You have the option of reassigning all content created by ' + '%(username)s, or deleting the content entirely.', {
						args: {
							username: this.props.user.name
						}
					}) : translate('You have the option of reassigning all content created by ' + 'this user, or deleting the content entirely.')
				),
				_react2.default.createElement(
					FormFieldset,
					null,
					_react2.default.createElement(
						FormLabel,
						{ ref: this.setReassignLabel },
						_react2.default.createElement(FormRadio, {
							name: 'radioOption',
							onChange: this.handleRadioChange,
							value: 'reassign',
							checked: 'reassign' === this.state.radioOption
						}),
						_react2.default.createElement(
							'span',
							null,
							this.getTranslatedAssignLabel()
						)
					),
					_react2.default.createElement(
						FormLabel,
						null,
						_react2.default.createElement(FormRadio, {
							name: 'radioOption',
							onChange: this.handleRadioChange,
							value: 'delete',
							checked: 'delete' === this.state.radioOption
						}),
						_react2.default.createElement(
							'span',
							null,
							this.props.user.name ? translate('Delete all content created by %(username)s', {
								args: {
									username: this.props.user.name ? this.props.user.name : ''
								}
							}) : translate('Delete all content created by this user')
						)
					)
				),
				_react2.default.createElement(
					FormButtonsBar,
					null,
					_react2.default.createElement(
						FormButton,
						{ disabled: this.isDeleteButtonDisabled() },
						translate('Delete user', { context: 'Button label' })
					)
				)
			)
		);
	},

	renderMultisite: function renderMultisite() {
		return _react2.default.createElement(
			CompactCard,
			{ className: 'delete-user__multisite' },
			_react2.default.createElement(
				'a',
				{
					className: 'delete-user__remove-user',
					onClick: this.removeUser },
				_react2.default.createElement(Gridicon, { icon: 'trash' }),
				this.getRemoveText()
			)
		);
	},

	render: function render() {
		// A user should not be able to remove themself.
		if (!this.props.isJetpack && this.props.user.ID === this.props.currentUser.ID) {
			return null;
		}
		if (this.props.isJetpack && this.props.user.linked_user_ID === this.props.currentUser.ID) {
			return null;
		}

		return this.props.isMultisite ? this.renderMultisite() : this.renderSingleSite();
	}
});

exports.default = (0, _i18nCalypso.localize)(DeleteUser);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/edit-team-member-form/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.EditTeamMemberForm = undefined;

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

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign2 = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

var _assign4 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign5 = _interopRequireDefault(_assign4);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _headerCake = __webpack_require__("./client/components/header-cake/index.jsx");

var _headerCake2 = _interopRequireDefault(_headerCake);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _formLabel = __webpack_require__("./client/components/forms/form-label/index.jsx");

var _formLabel2 = _interopRequireDefault(_formLabel);

var _formFieldset = __webpack_require__("./client/components/forms/form-fieldset/index.jsx");

var _formFieldset2 = _interopRequireDefault(_formFieldset);

var _formTextInput = __webpack_require__("./client/components/forms/form-text-input/index.jsx");

var _formTextInput2 = _interopRequireDefault(_formTextInput);

var _formButton = __webpack_require__("./client/components/forms/form-button/index.jsx");

var _formButton2 = _interopRequireDefault(_formButton);

var _formButtonsBar = __webpack_require__("./client/components/forms/form-buttons-bar/index.jsx");

var _formButtonsBar2 = _interopRequireDefault(_formButtonsBar);

var _peopleProfile = __webpack_require__("./client/my-sites/people/people-profile/index.jsx");

var _peopleProfile2 = _interopRequireDefault(_peopleProfile);

var _store = __webpack_require__("./client/lib/users/store.js");

var _store2 = _interopRequireDefault(_store);

var _actions = __webpack_require__("./client/lib/users/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _user = __webpack_require__("./client/lib/user/index.js");

var _user2 = _interopRequireDefault(_user);

var _protectForm = __webpack_require__("./client/lib/protect-form/index.jsx");

var _deleteUser = __webpack_require__("./client/my-sites/people/delete-user/index.jsx");

var _deleteUser2 = _interopRequireDefault(_deleteUser);

var _peopleNotices = __webpack_require__("./client/my-sites/people/people-notices/index.jsx");

var _peopleNotices2 = _interopRequireDefault(_peopleNotices);

var _logStore = __webpack_require__("./client/lib/people/log-store.js");

var _logStore2 = _interopRequireDefault(_logStore);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _roleSelect = __webpack_require__("./client/my-sites/people/role-select/index.jsx");

var _roleSelect2 = _interopRequireDefault(_roleSelect);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _pageViewTracker = __webpack_require__("./client/lib/analytics/page-view-tracker/index.jsx");

var _pageViewTracker2 = _interopRequireDefault(_pageViewTracker);

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module Variables
 */


/**
 * Internal dependencies
 */
var debug = (0, _debug2.default)('calypso:my-sites:people:edit-team-member-form'); /**
                                                                                    * External dependencies
                                                                                    */

var user = (0, _user2.default)();

var EditUserForm = _react2.default.createClass({
	displayName: 'EditUserForm',

	mixins: [_mixin2.default],

	getInitialState: function getInitialState() {
		return this.getStateObject(this.props);
	},
	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.replaceState(this.getStateObject(nextProps));
	},
	getRole: function getRole(roles) {
		return roles && roles[0] ? roles[0] : null;
	},
	getStateObject: function getStateObject(props) {
		props = 'undefined' !== typeof props ? props : this.props;
		var role = this.getRole(props.roles);
		return (0, _assign5.default)((0, _omit3.default)(props, 'site'), { roles: role });
	},
	getChangedSettings: function getChangedSettings() {
		var _this = this;

		var originalUser = this.getStateObject(this.props.user);
		var changedKeys = (0, _filter3.default)(this.getAllowedSettingsToChange(), function (setting) {
			return 'undefined' !== typeof originalUser[setting] && 'undefined' !== typeof _this.state[setting] && originalUser[setting] !== _this.state[setting];
		});

		return (0, _pick3.default)(this.state, changedKeys);
	},
	getAllowedSettingsToChange: function getAllowedSettingsToChange() {
		var currentUser = user.get();
		var allowedSettings = []; // eslint-disable-line

		if (!this.state.ID) {
			return allowedSettings;
		}

		// On WP.com sites, a user should only be able to update role.
		// A user should not be able to update own role.
		if (this.props.isJetpack) {
			if (!this.state.linked_user_ID || this.state.linked_user_ID !== currentUser.ID) {
				allowedSettings.push('roles');
			}
			allowedSettings.push('first_name');
			allowedSettings.push('last_name');
			allowedSettings.push('name');
		} else if (this.state.ID !== currentUser.ID) {
			allowedSettings.push('roles');
		}

		return allowedSettings;
	},
	hasUnsavedSettings: function hasUnsavedSettings() {
		return (0, _keys2.default)(this.getChangedSettings()).length;
	},
	updateUser: function updateUser(event) {
		event.preventDefault();

		var changedSettings = this.getChangedSettings();
		debug('Changed settings: ' + (0, _stringify2.default)(changedSettings));

		this.props.markSaved();

		// Since we store 'roles' in state as a string, but user objects expect
		// roles to be an array, if we've updated the user's role, we need to
		// place the role in an array before updating the user.
		_actions2.default.updateUser(this.props.siteId, this.state.ID, changedSettings.roles ? (0, _assign3.default)(changedSettings, { roles: [changedSettings.roles] }) : changedSettings);
		_analytics2.default.ga.recordEvent('People', 'Clicked Save Changes Button on User Edit');
	},
	recordFieldFocus: function recordFieldFocus(fieldId) {
		_analytics2.default.ga.recordEvent('People', 'Focused on field on User Edit', 'Field', fieldId);
	},
	handleChange: function handleChange(event) {
		this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
	},
	renderField: function renderField(fieldId) {
		var returnField = null;
		switch (fieldId) {
			case 'roles':
				returnField = _react2.default.createElement(_roleSelect2.default, {
					id: 'roles',
					name: 'roles',
					key: 'roles',
					siteId: this.props.siteId,
					value: this.state.roles,
					onChange: this.handleChange,
					onFocus: this.recordFieldFocus('roles')
				});
				break;
			case 'first_name':
				returnField = _react2.default.createElement(
					_formFieldset2.default,
					{ key: 'first_name' },
					_react2.default.createElement(
						_formLabel2.default,
						{ htmlFor: 'first_name' },
						this.translate('First Name', { context: 'Text that is displayed in a label of a form.' })
					),
					_react2.default.createElement(_formTextInput2.default, {
						id: 'first_name',
						name: 'first_name',
						defaultValue: this.state.first_name,
						onChange: this.handleChange,
						onFocus: this.recordFieldFocus('first_name')
					})
				);
				break;
			case 'last_name':
				returnField = _react2.default.createElement(
					_formFieldset2.default,
					{ key: 'last_name' },
					_react2.default.createElement(
						_formLabel2.default,
						{ htmlFor: 'last_name' },
						this.translate('Last Name', { context: 'Text that is displayed in a label of a form.' })
					),
					_react2.default.createElement(_formTextInput2.default, {
						id: 'last_name',
						name: 'last_name',
						defaultValue: this.state.last_name,
						onChange: this.handleChange,
						onFocus: this.recordFieldFocus('last_name')
					})
				);
				break;
			case 'name':
				returnField = _react2.default.createElement(
					_formFieldset2.default,
					{ key: 'name' },
					_react2.default.createElement(
						_formLabel2.default,
						{ htmlFor: 'name' },
						this.translate('Public Display Name', { context: 'Text that is displayed in a label of a form.' })
					),
					_react2.default.createElement(_formTextInput2.default, {
						id: 'name',
						name: 'name',
						defaultValue: this.state.name,
						onChange: this.handleChange,
						onFocus: this.recordFieldFocus('name')
					})
				);
				break;
		}

		return returnField;
	},
	render: function render() {
		var _this2 = this;

		var editableFields = void 0;
		if (!this.state.ID) {
			return null;
		}

		editableFields = this.getAllowedSettingsToChange();

		if (!editableFields.length) {
			return null;
		}

		editableFields = editableFields.map(function (fieldId) {
			return _this2.renderField(fieldId);
		});

		return _react2.default.createElement(
			'form',
			{
				className: 'edit-team-member-form__form' // eslint-disable-line
				, disabled: this.props.disabled,
				onSubmit: this.updateUser,
				onChange: this.props.markChanged
			},
			editableFields,
			_react2.default.createElement(
				_formButtonsBar2.default,
				null,
				_react2.default.createElement(
					_formButton2.default,
					{ disabled: !this.hasUnsavedSettings() },
					this.translate('Save changes', { context: 'Button label that prompts user to save form' })
				)
			)
		);
	}
});

var EditTeamMemberForm = exports.EditTeamMemberForm = function (_Component) {
	(0, _inherits3.default)(EditTeamMemberForm, _Component);

	function EditTeamMemberForm(props) {
		(0, _classCallCheck3.default)(this, EditTeamMemberForm);

		var _this3 = (0, _possibleConstructorReturn3.default)(this, (EditTeamMemberForm.__proto__ || (0, _getPrototypeOf2.default)(EditTeamMemberForm)).call(this, props));

		_initialiseProps.call(_this3);

		_this3.state = {
			user: _store2.default.getUserByLogin(props.siteId, props.userLogin),
			removingUser: false
		};
		return _this3;
	}

	(0, _createClass3.default)(EditTeamMemberForm, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_store2.default.on('change', this.refreshUser);
			_logStore2.default.on('change', this.checkRemoveUser);
			_logStore2.default.on('change', this.redirectIfError);
			this.requestUser();
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			_store2.default.removeListener('change', this.refreshUser);
			_logStore2.default.removeListener('change', this.checkRemoveUser);
			_logStore2.default.removeListener('change', this.redirectIfError);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate(lastProps) {
			if (lastProps.siteId !== this.props.siteId || lastProps.userLogin !== this.props.userLogin) {
				this.requestUser();
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.siteId !== this.props.siteId || nextProps.userLogin !== this.props.userLogin) {
				this.refreshUser(nextProps);
			}
		}
	}, {
		key: 'renderNotices',
		value: function renderNotices() {
			if (!this.state.user) {
				return;
			}
			return _react2.default.createElement(_peopleNotices2.default, { user: this.state.user });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				_main2.default,
				{ className: 'edit-team-member-form' },
				_react2.default.createElement(_pageViewTracker2.default, { path: 'people/edit/:user_login/:site', title: 'View Team Member' }),
				_react2.default.createElement(_headerCake2.default, { onClick: this.goBack, isCompact: true }),
				this.renderNotices(),
				_react2.default.createElement(
					_card2.default,
					{ className: 'edit-team-member-form__user-profile' },
					_react2.default.createElement(_peopleProfile2.default, { user: this.state.user }),
					_react2.default.createElement(EditUserForm, (0, _extends3.default)({}, this.state.user, {
						disabled: this.state.removingUser,
						siteId: this.props.siteId,
						isJetpack: this.props.isJetpack,
						markChanged: this.props.markChanged,
						markSaved: this.props.markSaved
					}))
				),
				this.state.user && _react2.default.createElement(_deleteUser2.default, (0, _extends3.default)({}, (0, _pick3.default)(this.props, ['siteId', 'isJetpack', 'isMultisite']), {
					currentUser: user.get(),
					user: this.state.user
				}))
			);
		}
	}]);
	return EditTeamMemberForm;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
	var _this4 = this;

	this.requestUser = function () {
		if (_this4.props.siteId) {
			_actions2.default.fetchUser({ siteId: _this4.props.siteId }, _this4.props.userLogin);
		}
	};

	this.refreshUser = function () {
		var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this4.props;

		var peopleUser = _store2.default.getUserByLogin(props.siteId, props.userLogin);

		_this4.setState({
			user: peopleUser
		});
	};

	this.redirectIfError = function () {
		if (_this4.props.siteId) {
			var fetchUserError = _logStore2.default.getErrors(function (log) {
				return _this4.props.siteId === log.siteId && 'RECEIVE_USER_FAILED' === log.action && _this4.props.userLogin === log.user;
			});
			if (fetchUserError.length) {
				_page2.default.redirect('/people/team/' + _this4.props.siteSlug);
			}
		}
	};

	this.checkRemoveUser = function () {
		if (!_this4.props.siteId) {
			return;
		}

		var removeUserSuccessful = _logStore2.default.getCompleted(function (log) {
			return 'RECEIVE_DELETE_SITE_USER_SUCCESS' === log.action && _this4.props.siteId === log.siteId && _this4.props.userLogin === log.user.login;
		});

		if (removeUserSuccessful.length) {
			_this4.props.markSaved();
			var redirect = _this4.props.siteSlug ? '/people/team/' + _this4.props.siteSlug : '/people/team';
			_page2.default.redirect(redirect);
		}

		var removeUserInProgress = _logStore2.default.getInProgress(function (log) {
			return 'DELETE_SITE_USER' === log.action && this.props.siteId === log.siteId && this.props.userLogin === log.user.login;
		}.bind(_this4));

		if (!!removeUserInProgress.length !== _this4.state.removingUser) {
			_this4.setState({
				removingUser: !_this4.state.removingUser
			});
		}
	};

	this.goBack = function () {
		_analytics2.default.ga.recordEvent('People', 'Clicked Back Button on User Edit');
		if (_this4.props.siteSlug) {
			var teamBack = '/people/team/' + _this4.props.siteSlug,
			    readersBack = '/people/readers/' + _this4.props.siteSlug;
			if (_this4.props.prevPath === teamBack) {
				_page2.default.back(teamBack);
			} else if (_this4.props.prevPath === readersBack) {
				_page2.default.back(readersBack);
			} else {
				(0, _page2.default)(teamBack);
			}
			return;
		}
		(0, _page2.default)('/people/team');
	};
};

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);

	return {
		siteId: siteId,
		siteSlug: (0, _selectors.getSelectedSiteSlug)(state),
		isJetpack: (0, _selectors2.isJetpackSite)(state, siteId),
		isMultisite: (0, _selectors2.isJetpackSiteMultiSite)(state, siteId)
	};
})((0, _protectForm.protectForm)(EditTeamMemberForm));

/***/ }),

/***/ "./client/my-sites/people/followers-list/index.jsx":
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

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _jsonStableStringify = __webpack_require__("./node_modules/json-stable-stringify/index.js");

var _jsonStableStringify2 = _interopRequireDefault(_jsonStableStringify);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _listEnd = __webpack_require__("./client/components/list-end/index.js");

var _listEnd2 = _interopRequireDefault(_listEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var PeopleListItem = __webpack_require__("./client/my-sites/people/people-list-item/index.jsx"),
    Card = __webpack_require__("./client/components/card/index.jsx"),
    PeopleListSectionHeader = __webpack_require__("./client/my-sites/people/people-list-section-header/index.jsx"),
    FollowersActions = __webpack_require__("./client/lib/followers/actions.js"),
    EmailFollowersActions = __webpack_require__("./client/lib/email-followers/actions.js"),
    InfiniteList = __webpack_require__("./client/components/infinite-list/index.jsx"),
    FollowersData = __webpack_require__("./client/components/data/followers-data/index.jsx"),
    EmailFollowersData = __webpack_require__("./client/components/data/email-followers-data/index.jsx"),
    NoResults = __webpack_require__("./client/my-sites/no-results/index.jsx"),
    EmptyContent = __webpack_require__("./client/components/empty-content/index.jsx"),
    FollowersStore = __webpack_require__("./client/lib/followers/store.js"),
    EmailFollowersStore = __webpack_require__("./client/lib/email-followers/store.js"),
    accept = __webpack_require__("./client/lib/accept/index.js"),
    analytics = __webpack_require__("./client/lib/analytics/index.js"); /**
                                           * External dependencies
                                           */


var maxFollowers = 1000;

var Followers = (0, _i18nCalypso.localize)(function (_Component) {
	(0, _inherits3.default)(FollowersComponent, _Component);

	function FollowersComponent() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, FollowersComponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FollowersComponent.__proto__ || (0, _getPrototypeOf2.default)(FollowersComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			bulkEditing: false
		}, _this.fetchNextPage = function () {
			var actions = 'email' === _this.props.type ? EmailFollowersActions : FollowersActions,
			    store = 'email' === _this.props.type ? EmailFollowersStore : FollowersStore,
			    paginationData = store.getPaginationData(_this.props.fetchOptions),
			    analyticsAction = 'email' === _this.props.type ? 'Fetched more email followers with infinite list' : 'Fetched more followers with infinite list';

			var page = _this.props.currentPage + 1;
			if (paginationData && paginationData.followersCurrentPage) {
				page = paginationData.followersCurrentPage + 1;
			}

			actions.fetchFollowers((0, _assign2.default)(_this.props.fetchOptions, { page: page }));
			analytics.ga.recordEvent('People', analyticsAction, 'page', page);
		}, _this.renderFollower = function (follower) {
			var removeFollower = function removeFollower() {
				_this.removeFollower(follower);
			};

			return _react2.default.createElement(PeopleListItem, {
				key: follower.ID,
				user: follower,
				type: 'follower',
				site: _this.props.site,
				isSelectable: _this.state.bulkEditing,
				onRemove: removeFollower
			});
		}, _this.getFollowerRef = function (follower) {
			return 'follower-' + follower.ID;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(FollowersComponent, [{
		key: 'renderPlaceholders',
		value: function renderPlaceholders() {
			return _react2.default.createElement(PeopleListItem, { key: 'people-list-item-placeholder' });
		}
	}, {
		key: 'removeFollower',
		value: function removeFollower(follower) {
			var _this2 = this;

			var listType = 'email' === this.props.type ? 'Email Follower' : 'Follower';
			analytics.ga.recordEvent('People', 'Clicked Remove Follower Button On' + listType + ' list');
			accept(_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'p',
					null,
					this.props.translate('If removed, this follower will stop receiving notifications about this site, unless they re-follow.')
				),
				_react2.default.createElement(
					'p',
					null,
					this.props.translate('Would you still like to remove this follower?')
				)
			), function (accepted) {
				if (accepted) {
					analytics.ga.recordEvent('People', 'Clicked Remove Button In Remove ' + listType + ' Confirmation');
					('email' === _this2.props.type ? EmailFollowersActions : FollowersActions).removeFollower(_this2.props.site.ID, follower);
				} else {
					analytics.ga.recordEvent('People', 'Clicked Cancel Button In Remove ' + listType + ' Confirmation');
				}
			}, this.props.translate('Remove', { context: 'Confirm Remove follower button text.' }));
		}
	}, {
		key: 'noFollowerSearchResults',
		value: function noFollowerSearchResults() {
			return this.props.fetchInitialized && this.props.fetchOptions.search && !this.props.followers.length && !this.props.fetching;
		}
	}, {
		key: 'siteHasNoFollowers',
		value: function siteHasNoFollowers() {
			return !this.props.followers.length && !this.props.fetching;
		}
	}, {
		key: 'isLastPage',
		value: function isLastPage() {
			return this.props.totalFollowers <= this.props.followers.length || maxFollowers <= this.props.followers.length;
		}
	}, {
		key: 'render',
		value: function render() {
			var key = (0, _jsonStableStringify2.default)((0, _omit3.default)(this.props.fetchOptions, ['max', 'page'])),
			    listClass = this.state.bulkEditing ? 'bulk-editing' : null;

			if (this.noFollowerSearchResults()) {
				return _react2.default.createElement(NoResults, {
					image: '/calypso/images/people/mystery-person.svg',
					text: this.props.translate('No results found for {{em}}%(searchTerm)s{{/em}}', {
						args: { searchTerm: this.props.fetchOptions.search },
						components: { em: _react2.default.createElement('em', null) }
					}) });
			}

			var emptyTitle = void 0;
			if (this.siteHasNoFollowers()) {
				if (this.props.fetchOptions && 'email' === this.props.fetchOptions.type) {
					emptyTitle = this.props.translate("You don't have any email followers yet.");
				} else {
					emptyTitle = this.props.translate("You don't have any followers yet.");
				}
				return _react2.default.createElement(EmptyContent, { title: emptyTitle });
			}

			var headerText = this.props.label;
			var followers = void 0;
			if (this.props.followers.length) {
				if (this.props.fetchOptions.search && this.props.totalFollowers) {
					headerText = this.props.translate('%(numberPeople)d Follower Matching {{em}}"%(searchTerm)s"{{/em}}', '%(numberPeople)d Followers Matching {{em}}"%(searchTerm)s"{{/em}}', {
						count: this.props.followers.length,
						args: {
							numberPeople: this.props.totalFollowers,
							searchTerm: this.props.fetchOptions.search
						},
						components: {
							em: _react2.default.createElement('em', null)
						}
					});
				}

				var infiniteListConditionals = {
					fetchingNextPage: this.props.fetching,
					lastPage: this.isLastPage()
				};

				followers = _react2.default.createElement(InfiniteList, (0, _extends3.default)({}, infiniteListConditionals, {
					key: key,
					items: this.props.followers,
					className: 'people-selector__infinite-list',
					ref: 'infiniteList',
					fetchNextPage: this.fetchNextPage,
					getItemRef: this.getFollowerRef,
					renderLoadingPlaceholders: this.renderPlaceholders,
					renderItem: this.renderFollower,
					guessedItemHeight: 126
				}));
			} else {
				followers = this.renderPlaceholders();
			}

			var downloadListLink = this.props.fetchOptions.type === 'email' && !!this.props.site ? 'https://dashboard.wordpress.com/wp-admin/index.php?page=stats&blog=' + this.props.site.ID + '&blog_subscribers=csv&type=email' : null;

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					PeopleListSectionHeader,
					{
						isFollower: true,
						label: headerText,
						site: this.props.site,
						count: this.props.fetching || this.props.fetchOptions.search ? null : this.props.totalFollowers },
					downloadListLink && _react2.default.createElement(
						_button2.default,
						{ href: downloadListLink, compact: true },
						this.props.translate('Download Data as CSV')
					)
				),
				_react2.default.createElement(
					Card,
					{ className: listClass },
					followers
				),
				this.isLastPage() && _react2.default.createElement(_listEnd2.default, null)
			);
		}
	}]);
	return FollowersComponent;
}(_react.Component));

var FollowersList = function FollowersList(props) {
	var DataComponent = void 0;
	var fetchOptions = {
		max: 100,
		page: 1,
		search: props.search && props.search,
		siteId: props.site.ID
	};

	if ('email' === props.type) {
		DataComponent = EmailFollowersData;
		fetchOptions.type = 'email';
	} else {
		DataComponent = FollowersData;
	}

	return _react2.default.createElement(
		DataComponent,
		{
			fetchOptions: fetchOptions,
			site: props.site,
			label: props.label,
			type: props.type
		},
		_react2.default.createElement(Followers, null)
	);
};

exports.default = FollowersList;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/index.js":
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
    config = __webpack_require__("./client/config/index.js"),
    peopleController = __webpack_require__("./client/my-sites/people/controller.js");

module.exports = function () {
	if (config.isEnabled('manage/people')) {
		['team', 'followers', 'email-followers', 'viewers'].forEach(function (filter) {
			page('/people/' + filter, controller.siteSelection, controller.sites);
			page('/people/' + filter + '/:site_id', peopleController.enforceSiteEnding, controller.siteSelection, controller.navigation, peopleController.people.bind(null, filter));
		});

		page('/people/new/:site_id', peopleController.enforceSiteEnding, controller.siteSelection, controller.navigation, peopleController.invitePeople);

		page('/people/edit/:site_id/:user_login', peopleController.enforceSiteEnding, controller.siteSelection, controller.navigation, peopleController.person);

		// Anything else is unexpected and should be redirected to the default people management URL: /people/team
		page('/people/(.*)?', controller.siteSelection, peopleController.redirectToTeam);
	}
};

/***/ }),

/***/ "./client/my-sites/people/invite-people/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__("./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _uniqueId2 = __webpack_require__("./node_modules/lodash/uniqueId.js");

var _uniqueId3 = _interopRequireDefault(_uniqueId2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _pickBy2 = __webpack_require__("./node_modules/lodash/pickBy.js");

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _isEmpty2 = __webpack_require__("./node_modules/lodash/isEmpty.js");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _groupBy2 = __webpack_require__("./node_modules/lodash/groupBy.js");

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__("./node_modules/redux/lib/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _roleSelect = __webpack_require__("./client/my-sites/people/role-select/index.jsx");

var _roleSelect2 = _interopRequireDefault(_roleSelect);

var _tokenField = __webpack_require__("./client/components/token-field/index.jsx");

var _tokenField2 = _interopRequireDefault(_tokenField);

var _formButton = __webpack_require__("./client/components/forms/form-button/index.jsx");

var _formButton2 = _interopRequireDefault(_formButton);

var _formFieldset = __webpack_require__("./client/components/forms/form-fieldset/index.jsx");

var _formFieldset2 = _interopRequireDefault(_formFieldset);

var _formLabel = __webpack_require__("./client/components/forms/form-label/index.jsx");

var _formLabel2 = _interopRequireDefault(_formLabel);

var _formSettingExplanation = __webpack_require__("./client/components/forms/form-setting-explanation/index.jsx");

var _formSettingExplanation2 = _interopRequireDefault(_formSettingExplanation);

var _actions = __webpack_require__("./client/lib/invites/actions.js");

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _headerCake = __webpack_require__("./client/components/header-cake/index.jsx");

var _headerCake2 = _interopRequireDefault(_headerCake);

var _countedTextarea = __webpack_require__("./client/components/forms/counted-textarea/index.jsx");

var _countedTextarea2 = _interopRequireDefault(_countedTextarea);

var _invitesCreateValidation = __webpack_require__("./client/lib/invites/stores/invites-create-validation.js");

var _invitesCreateValidation2 = _interopRequireDefault(_invitesCreateValidation);

var _invitesSent = __webpack_require__("./client/lib/invites/stores/invites-sent.js");

var _invitesSent2 = _interopRequireDefault(_invitesSent);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _utils = __webpack_require__("./client/lib/site/utils.js");

var _emailVerificationGate = __webpack_require__("./client/components/email-verification/email-verification-gate.jsx");

var _emailVerificationGate2 = _interopRequireDefault(_emailVerificationGate);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _featureExample = __webpack_require__("./client/components/feature-example/index.jsx");

var _featureExample2 = _interopRequireDefault(_featureExample);

var _versionCompare = __webpack_require__("./client/lib/version-compare/index.js");

var _versionCompare2 = _interopRequireDefault(_versionCompare);

var _selectors2 = __webpack_require__("./client/state/current-user/selectors.js");

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _noticeAction = __webpack_require__("./client/components/notice/notice-action.jsx");

var _noticeAction2 = _interopRequireDefault(_noticeAction);

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

var _actions2 = __webpack_require__("./client/state/jetpack/modules/actions.js");

var _isActivatingJetpackModule = __webpack_require__("./client/state/selectors/is-activating-jetpack-module.js");

var _isActivatingJetpackModule2 = _interopRequireDefault(_isActivatingJetpackModule);

var _isJetpackModuleActive = __webpack_require__("./client/state/selectors/is-jetpack-module-active.js");

var _isJetpackModuleActive2 = _interopRequireDefault(_isJetpackModuleActive);

var _isSiteAutomatedTransfer = __webpack_require__("./client/state/selectors/is-site-automated-transfer.js");

var _isSiteAutomatedTransfer2 = _interopRequireDefault(_isSiteAutomatedTransfer);

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
var debug = (0, _debug2.default)('calypso:my-sites:people:invite');

var InvitePeople = _react2.default.createClass({
	displayName: 'InvitePeople',

	componentDidMount: function componentDidMount() {
		_invitesCreateValidation2.default.on('change', this.refreshValidation);
		_invitesSent2.default.on('change', this.refreshFormState);
	},
	componentWillUnmount: function componentWillUnmount() {
		_invitesCreateValidation2.default.off('change', this.refreshValidation);
		_invitesSent2.default.off('change', this.refreshFormState);
	},
	componentWillReceiveProps: function componentWillReceiveProps() {
		this.setState(this.resetState());
	},
	getInitialState: function getInitialState() {
		return this.resetState();
	},
	resetState: function resetState() {
		return {
			usernamesOrEmails: [],
			role: 'follower',
			message: '',
			sendingInvites: false,
			getTokenStatus: function getTokenStatus() {},
			errorToDisplay: false,
			errors: {},
			success: []
		};
	},
	refreshFormState: function refreshFormState() {
		var sendInvitesSuccess = _invitesSent2.default.getSuccess(this.state.formId);

		if (sendInvitesSuccess) {
			this.setState(this.resetState());
			_analytics2.default.tracks.recordEvent('calypso_invite_people_form_refresh_initial');
			debug('Submit successful. Resetting form.');
		} else {
			var sendInvitesErrored = _invitesSent2.default.getErrors(this.state.formId),
			    errors = (0, _get3.default)(sendInvitesErrored, 'errors', {}),
			    updatedState = { sendingInvites: false };
			if (!(0, _isEmpty3.default)(errors) && 'object' === (typeof errors === 'undefined' ? 'undefined' : (0, _typeof3.default)(errors))) {
				var errorKeys = (0, _keys2.default)(errors);
				(0, _assign2.default)(updatedState, {
					usernamesOrEmails: errorKeys,
					errorToDisplay: errorKeys[0],
					errors: errors
				});
			}

			debug('Submit errored. Updating state to:  ' + (0, _stringify2.default)(updatedState));

			this.setState(updatedState);
			_analytics2.default.tracks.recordEvent('calypso_invite_people_form_refresh_retry');
		}
	},
	onTokensChange: function onTokensChange(tokens) {
		var _state = this.state,
		    role = _state.role,
		    errorToDisplay = _state.errorToDisplay,
		    usernamesOrEmails = _state.usernamesOrEmails,
		    errors = _state.errors,
		    success = _state.success;

		var filteredTokens = tokens.map(function (value) {
			if ('object' === (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value))) {
				return value.value;
			}
			return value;
		});

		var filteredErrors = (0, _pickBy3.default)(errors, function (error, key) {
			return (0, _includes3.default)(filteredTokens, key);
		});

		var filteredSuccess = (0, _filter3.default)(success, function (successfulValidation) {
			return (0, _includes3.default)(filteredTokens, successfulValidation);
		});

		this.setState({
			usernamesOrEmails: filteredTokens,
			errors: filteredErrors,
			success: filteredSuccess,
			errorToDisplay: (0, _includes3.default)(filteredTokens, errorToDisplay) && errorToDisplay
		});
		(0, _actions.createInviteValidation)(this.props.siteId, filteredTokens, role);

		if (filteredTokens.length > usernamesOrEmails.length) {
			_analytics2.default.tracks.recordEvent('calypso_invite_people_token_added');
		} else {
			_analytics2.default.tracks.recordEvent('calypso_invite_people_token_removed');
		}
	},
	onMessageChange: function onMessageChange(event) {
		this.setState({ message: event.target.value });
	},
	onRoleChange: function onRoleChange(event) {
		var role = event.target.value;
		this.setState({ role: role });
		(0, _actions.createInviteValidation)(this.props.siteId, this.state.usernamesOrEmails, role);
	},
	onFocusTokenField: function onFocusTokenField() {
		_analytics2.default.tracks.recordEvent('calypso_invite_people_token_field_focus');
	},
	onFocusRoleSelect: function onFocusRoleSelect() {
		_analytics2.default.tracks.recordEvent('calypso_invite_people_role_select_focus');
	},
	onFocusCustomMessage: function onFocusCustomMessage() {
		_analytics2.default.tracks.recordEvent('calypso_invite_people_custom_message_focus');
	},
	onClickSendInvites: function onClickSendInvites() {
		_analytics2.default.tracks.recordEvent('calypso_invite_people_send_invite_button_click');
	},
	onClickRoleExplanation: function onClickRoleExplanation() {
		_analytics2.default.tracks.recordEvent('calypso_invite_people_role_explanation_link_click');
	},
	refreshValidation: function refreshValidation() {
		var errors = _invitesCreateValidation2.default.getErrors(this.props.siteId, this.state.role) || {},
		    success = _invitesCreateValidation2.default.getSuccess(this.props.siteId, this.state.role) || [],
		    errorsKeys = (0, _keys2.default)(errors),
		    errorToDisplay = this.state.errorToDisplay || errorsKeys.length > 0 && errorsKeys[0];

		this.setState({
			errorToDisplay: errorToDisplay,
			errors: errors,
			success: success
		});

		if (errorsKeys.length) {
			_analytics2.default.tracks.recordEvent('calypso_invite_people_validation_refreshed_with_error');
		}
	},
	getTooltip: function getTooltip(value) {
		var _state2 = this.state,
		    errors = _state2.errors,
		    errorToDisplay = _state2.errorToDisplay;

		if (errorToDisplay && value !== errorToDisplay) {
			return null;
		}
		return (0, _get3.default)(errors, [value, 'message']);
	},
	getTokensWithStatus: function getTokensWithStatus() {
		var _this = this;

		var _state3 = this.state,
		    success = _state3.success,
		    errors = _state3.errors;


		var tokens = this.state.usernamesOrEmails.map(function (value) {
			if (errors && errors[value]) {
				return {
					status: 'error',
					value: value,
					tooltip: _this.getTooltip(value),
					onMouseEnter: function onMouseEnter() {
						return _this.setState({ errorToDisplay: value });
					}
				};
			}
			if (!(0, _includes3.default)(success, value)) {
				return {
					value: value,
					status: 'validating'
				};
			}
			return value;
		});

		debug('Generated tokens: ' + (0, _stringify2.default)(tokens));
		return tokens;
	},
	submitForm: function submitForm(event) {
		event.preventDefault();
		debug('Submitting invite form. State: ' + (0, _stringify2.default)(this.state));

		if (this.isSubmitDisabled()) {
			return false;
		}

		var formId = (0, _uniqueId3.default)();
		var _state4 = this.state,
		    usernamesOrEmails = _state4.usernamesOrEmails,
		    message = _state4.message,
		    role = _state4.role;


		this.setState({ sendingInvites: true, formId: formId });
		this.props.sendInvites(this.props.siteId, usernamesOrEmails, role, message, formId);

		var groupedInvitees = (0, _groupBy3.default)(usernamesOrEmails, function (invitee) {
			return (0, _includes3.default)(invitee, '@') ? 'email' : 'username';
		});

		_analytics2.default.tracks.recordEvent('calypso_invite_people_form_submit', {
			role: role,
			number_invitees: usernamesOrEmails.length,
			number_username_invitees: groupedInvitees.username ? groupedInvitees.username.length : 0,
			number_email_invitees: groupedInvitees.email ? groupedInvitees.email.length : 0,
			has_custom_message: 'string' === typeof message && !!message.length
		});
	},
	isSubmitDisabled: function isSubmitDisabled() {
		var _state5 = this.state,
		    success = _state5.success,
		    usernamesOrEmails = _state5.usernamesOrEmails;

		var invitees = Array.isArray(usernamesOrEmails) ? usernamesOrEmails : [];

		// If there are no invitees, then don't allow submitting the form
		if (this.state.sendingInvites || !invitees.length) {
			return true;
		}

		if (this.hasValidationErrors()) {
			return true;
		}

		// If there are invitees, and there are no errors, let's check
		// if there are any pending validations.
		return (0, _some3.default)(usernamesOrEmails, function (value) {
			return !(0, _includes3.default)(success, value);
		});
	},
	hasValidationErrors: function hasValidationErrors() {
		var errors = this.state.errors;

		var errorKeys = errors && (0, _keys2.default)(errors);

		return !!errorKeys.length;
	},
	goBack: function goBack() {
		var siteSlug = (0, _get3.default)(this.props, 'site.slug');
		var fallback = siteSlug ? '/people/team/' + siteSlug : '/people/team';

		// Go back to last route with /people/team/$site as the fallback
		_page2.default.back(fallback);
	},
	renderRoleExplanation: function renderRoleExplanation() {
		var translate = this.props.translate;

		return _react2.default.createElement(
			'a',
			{
				target: '_blank',
				rel: 'noopener noreferrer',
				href: 'http://en.support.wordpress.com/user-roles/',
				onClick: this.onClickRoleExplanation
			},
			translate('Learn more about roles')
		);
	},
	enableSSO: function enableSSO() {
		this.props.activateModule(this.props.siteId, 'sso');
	},
	renderInviteForm: function renderInviteForm() {
		var _props = this.props,
		    site = _props.site,
		    translate = _props.translate,
		    needsVerification = _props.needsVerification,
		    isJetpack = _props.isJetpack,
		    showSSONotice = _props.showSSONotice;


		var inviteForm = _react2.default.createElement(
			_card2.default,
			null,
			_react2.default.createElement(
				_emailVerificationGate2.default,
				null,
				_react2.default.createElement(
					'form',
					{ onSubmit: this.submitForm },
					_react2.default.createElement(
						'div',
						{ role: 'group', className: 'invite-people__token-field-wrapper' },
						_react2.default.createElement(
							_formLabel2.default,
							null,
							translate('Usernames or Emails')
						),
						_react2.default.createElement(_tokenField2.default, {
							isBorderless: true,
							tokenizeOnSpace: true,
							autoCapitalize: 'none',
							autoComplete: 'off',
							maxLength: 10,
							value: this.getTokensWithStatus(),
							onChange: this.onTokensChange,
							onFocus: this.onFocusTokenField,
							disabled: this.state.sendingInvites }),
						_react2.default.createElement(
							_formSettingExplanation2.default,
							null,
							translate('Invite up to 10 email addresses and/or WordPress.com usernames. ' + 'Those needing a username will be sent instructions on how to create one.')
						)
					),
					_react2.default.createElement(_roleSelect2.default, {
						id: 'role',
						name: 'role',
						includeFollower: true,
						siteId: this.props.siteId,
						onChange: this.onRoleChange,
						onFocus: this.onFocusRoleSelect,
						value: this.state.role,
						disabled: this.state.sendingInvites,
						explanation: this.renderRoleExplanation()
					}),
					_react2.default.createElement(
						_formFieldset2.default,
						null,
						_react2.default.createElement(
							_formLabel2.default,
							{ htmlFor: 'message' },
							translate('Custom Message')
						),
						_react2.default.createElement(_countedTextarea2.default, {
							name: 'message',
							id: 'message',
							showRemainingCharacters: true,
							maxLength: 500,
							acceptableLength: 500,
							onChange: this.onMessageChange,
							onFocus: this.onFocusCustomMessage,
							value: this.state.message,
							disabled: this.state.sendingInvites }),
						_react2.default.createElement(
							_formSettingExplanation2.default,
							null,
							translate('(Optional) You can enter a custom message of up to 500 characters ' + 'that will be included in the invitation to the user(s).')
						)
					),
					_react2.default.createElement(
						_formButton2.default,
						{ disabled: this.isSubmitDisabled(), onClick: this.onClickSendInvites },
						translate('Send Invitation', 'Send Invitations', {
							count: this.state.usernamesOrEmails.length || 1,
							context: 'Button label'
						})
					)
				)
			)
		);

		// Return early for WPCOM or needs verification
		if (!site || !isJetpack || needsVerification) {
			return inviteForm;
		}

		var jetpackVersion = (0, _get3.default)(site, 'options.jetpack_version', 0);
		if (!this.props.isSiteAutomatedTransfer && (0, _versionCompare2.default)(jetpackVersion, '5.0', '<')) {
			return _react2.default.createElement(
				'div',
				{ className: 'invite-people__action-required' },
				_react2.default.createElement(
					_notice2.default,
					{
						status: 'is-warning',
						showDismiss: false,
						text: translate('Inviting users requires Jetpack 5.0 or higher') },
					_react2.default.createElement(
						_noticeAction2.default,
						{ href: '/plugins/jetpack/' + site.slug },
						translate('Update')
					)
				),
				_react2.default.createElement(
					_featureExample2.default,
					null,
					inviteForm
				)
			);
		} else if (showSSONotice) {
			return _react2.default.createElement(
				'div',
				{ className: 'invite-people__action-required' },
				_react2.default.createElement(
					_notice2.default,
					{
						status: 'is-warning',
						showDismiss: false,
						text: translate('Inviting users requires WordPress.com sign in') },
					_react2.default.createElement(
						_noticeAction2.default,
						{ onClick: this.enableSSO },
						translate('Enable')
					)
				),
				_react2.default.createElement(
					_featureExample2.default,
					null,
					inviteForm
				)
			);
		}

		return inviteForm;
	},
	render: function render() {
		var _props2 = this.props,
		    site = _props2.site,
		    translate = _props2.translate;

		if (site && !(0, _utils.userCan)('promote_users', site)) {
			return _react2.default.createElement(
				_main2.default,
				null,
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(_emptyContent2.default, {
					title: translate('Oops, only administrators can invite other people'),
					illustration: '/calypso/images/illustrations/illustration-empty-results.svg'
				})
			);
		}

		return _react2.default.createElement(
			_main2.default,
			{ className: 'invite-people' },
			_react2.default.createElement(_sidebarNavigation2.default, null),
			_react2.default.createElement(
				_headerCake2.default,
				{ isCompact: true, onClick: this.goBack },
				translate('Invite People')
			),
			this.renderInviteForm()
		);
	}
});

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var activating = (0, _isActivatingJetpackModule2.default)(state, siteId, 'sso');
	var active = (0, _isJetpackModuleActive2.default)(state, siteId, 'sso');

	return {
		siteId: siteId,
		needsVerification: !(0, _selectors2.isCurrentUserEmailVerified)(state),
		showSSONotice: !!(activating || active),
		isJetpack: (0, _selectors3.isJetpackSite)(state, siteId),
		isSiteAutomatedTransfer: (0, _isSiteAutomatedTransfer2.default)(state, siteId)
	};
}, function (dispatch) {
	return (0, _redux.bindActionCreators)({ sendInvites: _actions.sendInvites, activateModule: _actions2.activateModule }, dispatch);
})((0, _i18nCalypso.localize)(InvitePeople));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.People = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _followersList = __webpack_require__("./client/my-sites/people/followers-list/index.jsx");

var _followersList2 = _interopRequireDefault(_followersList);

var _viewersList = __webpack_require__("./client/my-sites/people/viewers-list/index.jsx");

var _viewersList2 = _interopRequireDefault(_viewersList);

var _teamList = __webpack_require__("./client/my-sites/people/team-list/index.jsx");

var _teamList2 = _interopRequireDefault(_teamList);

var _emptyContent = __webpack_require__("./client/components/empty-content/index.jsx");

var _emptyContent2 = _interopRequireDefault(_emptyContent);

var _dataObserve = __webpack_require__("./client/lib/mixins/data-observe/index.js");

var _dataObserve2 = _interopRequireDefault(_dataObserve);

var _peopleNotices = __webpack_require__("./client/my-sites/people/people-notices/index.jsx");

var _peopleNotices2 = _interopRequireDefault(_peopleNotices);

var _jetpackManageErrorPage = __webpack_require__("./client/my-sites/jetpack-manage-error-page/index.jsx");

var _jetpackManageErrorPage2 = _interopRequireDefault(_jetpackManageErrorPage);

var _peopleSectionNav = __webpack_require__("./client/my-sites/people/people-section-nav/index.jsx");

var _peopleSectionNav2 = _interopRequireDefault(_peopleSectionNav);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _isPrivateSite = __webpack_require__("./client/state/selectors/is-private-site.js");

var _isPrivateSite2 = _interopRequireDefault(_isPrivateSite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */


/**
 * Internal dependencies
 */
var debug = (0, _debug2.default)('calypso:my-sites:people:main');

// TODO: port to es6 once we remove the last observe
/**
 * External dependencies
 */
var People = exports.People = _react2.default.createClass({ // eslint-disable-line react/prefer-es6-class

	displayName: 'People',

	mixins: [(0, _dataObserve2.default)('peopleLog')],

	componentDidMount: function componentDidMount() {
		debug('PeopleList React component mounted.');
	},

	renderPeopleList: function renderPeopleList(site) {
		switch (this.props.filter) {
			case 'team':
				return _react2.default.createElement(_teamList2.default, { site: site, search: this.props.search });
			case 'followers':
				return _react2.default.createElement(_followersList2.default, { site: site, label: this.translate('Followers') });
			case 'email-followers':
				return _react2.default.createElement(_followersList2.default, {
					site: site,
					search: this.props.search,
					label: this.translate('Email Followers'),
					type: 'email' });
			case 'viewers':
				return _react2.default.createElement(_viewersList2.default, { site: site, label: this.translate('Viewers') });
			default:
				return null;
		}
	},

	render: function render() {
		var _props = this.props,
		    isJetpack = _props.isJetpack,
		    jetpackPeopleSupported = _props.jetpackPeopleSupported,
		    canViewPeople = _props.canViewPeople,
		    siteId = _props.siteId,
		    site = _props.site,
		    search = _props.search,
		    filter = _props.filter,
		    isPrivate = _props.isPrivate;

		// Jetpack 3.7 is necessary to manage people

		if (isJetpack && !jetpackPeopleSupported) {
			return _react2.default.createElement(
				_main2.default,
				null,
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(_jetpackManageErrorPage2.default, {
					template: 'updateJetpack',
					siteId: siteId,
					version: '3.7'
				})
			);
		}
		if (siteId && !canViewPeople) {
			return _react2.default.createElement(
				_main2.default,
				null,
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(_emptyContent2.default, {
					title: this.translate('You are not authorized to view this page'),
					illustration: '/calypso/images/illustrations/illustration-empty-results.svg'
				})
			);
		}
		return _react2.default.createElement(
			_main2.default,
			null,
			_react2.default.createElement(_sidebarNavigation2.default, null),
			_react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_peopleSectionNav2.default, {
					isJetpack: isJetpack,
					isPrivate: isPrivate,
					jetpackPeopleSupported: jetpackPeopleSupported,
					canViewPeople: canViewPeople,
					search: search,
					filter: filter,
					site: site }),
				_react2.default.createElement(_peopleNotices2.default, null),
				this.renderPeopleList(site)
			)
		);
	}
});

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	return {
		siteId: siteId,
		site: (0, _selectors.getSelectedSite)(state),
		isJetpack: (0, _selectors2.isJetpackSite)(state, siteId),
		isPrivate: (0, _isPrivateSite2.default)(state, siteId),
		canViewPeople: (0, _canCurrentUser2.default)(state, siteId, 'list_users'),
		jetpackPeopleSupported: (0, _selectors2.isJetpackMinimumVersion)(state, siteId, '3.7.0-beta')
	};
})(People);

/***/ }),

/***/ "./client/my-sites/people/people-list-item/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _compact = __webpack_require__("./client/components/card/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _peopleProfile = __webpack_require__("./client/my-sites/people/people-profile/index.jsx");

var _peopleProfile2 = _interopRequireDefault(_peopleProfile);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
exports.default = _react2.default.createClass({

	displayName: 'PeopleListItem',

	mixins: [_mixin2.default],

	navigateToUser: function navigateToUser() {
		window.scrollTo(0, 0);
		_analytics2.default.ga.recordEvent('People', 'Clicked User Profile From Team List');
	},
	userHasPromoteCapability: function userHasPromoteCapability() {
		var site = this.props.site;
		return site && site.capabilities && site.capabilities.promote_users;
	},
	canLinkToProfile: function canLinkToProfile() {
		var site = this.props.site,
		    user = this.props.user;
		return _config2.default.isEnabled('manage/edit-user') && user && user.roles && site && site.slug && this.userHasPromoteCapability() && !this.props.isSelectable;
	},
	render: function render() {
		var canLinkToProfile = this.canLinkToProfile();
		return _react2.default.createElement(
			_compact2.default,
			(0, _extends3.default)({}, (0, _omit3.default)(this.props, 'className', 'user', 'site', 'isSelectable', 'onRemove'), {
				className: (0, _classnames2.default)('people-list-item', this.props.className),
				tagName: 'a',
				href: canLinkToProfile && '/people/edit/' + this.props.site.slug + '/' + this.props.user.login,
				onClick: canLinkToProfile && this.navigateToUser }),
			_react2.default.createElement(
				'div',
				{ className: 'people-list-item__profile-container' },
				_react2.default.createElement(_peopleProfile2.default, { user: this.props.user })
			),
			this.props.onRemove && _react2.default.createElement(
				'div',
				{ className: 'people-list-item__actions' },
				_react2.default.createElement(
					'button',
					{ className: 'button is-link people-list-item__remove-button', onClick: this.props.onRemove },
					this.translate('Remove', { context: 'Verb: Remove a user or follower from the blog.' })
				)
			)
		);
	}
}); /**
     * External dependencies
     */

module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/people-list-section-header/index.jsx":
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

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__("./client/components/button-group/index.jsx");

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _tooltip = __webpack_require__("./client/components/tooltip/index.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _isSiteAutomatedTransfer = __webpack_require__("./client/state/selectors/is-site-automated-transfer.js");

var _isSiteAutomatedTransfer2 = _interopRequireDefault(_isSiteAutomatedTransfer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var PeopleListSectionHeader = function (_Component) {
	(0, _inherits3.default)(PeopleListSectionHeader, _Component);

	function PeopleListSectionHeader(props) {
		(0, _classCallCheck3.default)(this, PeopleListSectionHeader);

		var _this = (0, _possibleConstructorReturn3.default)(this, (PeopleListSectionHeader.__proto__ || (0, _getPrototypeOf2.default)(PeopleListSectionHeader)).call(this, props));

		_this.showAddTooltip = function () {
			return _this.setState({ addPeopleTooltip: true });
		};

		_this.hideAddTooltip = function () {
			return _this.setState({ addPeopleTooltip: false });
		};

		_this.state = {
			addPeopleTooltip: false
		};
		return _this;
	}

	(0, _createClass3.default)(PeopleListSectionHeader, [{
		key: 'getAddLink',
		value: function getAddLink() {
			var siteSlug = (0, _get3.default)(this.props, 'site.slug');
			var isJetpack = (0, _get3.default)(this.props, 'site.jetpack');

			if (!siteSlug || isJetpack && this.props.isFollower) {
				return false;
			}

			return '/people/new/' + siteSlug;
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    label = _props.label,
			    count = _props.count,
			    children = _props.children,
			    translate = _props.translate;

			var siteLink = this.getAddLink();
			var classes = (0, _classnames2.default)(this.props.className, 'people-list-section-header');

			return _react2.default.createElement(
				_sectionHeader2.default,
				{
					className: classes,
					count: count,
					label: label },
				children,
				siteLink && _react2.default.createElement(
					_buttonGroup2.default,
					null,
					_react2.default.createElement(
						_button2.default,
						{
							compact: true,
							href: siteLink,
							className: 'people-list-section-header__add-button',
							onMouseEnter: this.showAddTooltip,
							onMouseLeave: this.hideAddTooltip,
							ref: 'addPeopleButton',
							'aria-label': translate('Invite user', { context: 'button label' }) },
						_react2.default.createElement(_gridicons2.default, { icon: 'plus-small', size: 18 }),
						_react2.default.createElement(_gridicons2.default, { icon: 'user', size: 18 }),
						_react2.default.createElement(
							_tooltip2.default,
							{
								isVisible: this.state.addPeopleTooltip,
								context: this.refs && this.refs.addPeopleButton,
								position: 'bottom' },
							translate('Invite user', { context: 'button tooltip' })
						)
					)
				)
			);
		}
	}]);
	return PeopleListSectionHeader;
}(_react.Component); /**
                      * External dependencies
                      */


PeopleListSectionHeader.propTypes = {
	label: _react.PropTypes.string.isRequired,
	count: _react.PropTypes.number,
	isFollower: _react.PropTypes.bool,
	site: _react.PropTypes.object,
	isSiteAutomatedTransfer: _react.PropTypes.bool
};
PeopleListSectionHeader.defaultProps = {
	isFollower: false
};


var mapStateToProps = function mapStateToProps(state) {
	var selectedSiteId = (0, _selectors.getSelectedSiteId)(state);
	return {
		isSiteAutomatedTransfer: !!(0, _isSiteAutomatedTransfer2.default)(state, selectedSiteId)
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _i18nCalypso.localize)(PeopleListSectionHeader));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/people-notices/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _logStore = __webpack_require__("./client/lib/people/log-store.js");

var _logStore2 = _interopRequireDefault(_logStore);

var _actions = __webpack_require__("./client/lib/people/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var isSameSite = function isSameSite(siteId, log) {
	return siteId && log.siteId && log.siteId === siteId;
}; /**
    * External dependencies
    */


var isSameUser = function isSameUser(userId, log) {
	return userId && log.user && log.user.ID === userId;
};

var translateArg = function translateArg(log) {
	return { user: 'string' === typeof log.user ? log.user : log.user.login };
};

var filterBy = function filterBy(siteId, userId, log) {
	if (!siteId && !userId) {
		return true;
	}
	if (isSameSite(siteId, log) && isSameUser(userId, log)) {
		return true;
	} else if (!userId && isSameSite(siteId, log)) {
		return true;
	} else if (!siteId && isSameUser(userId, log)) {
		return true;
	}
	return false;
};

var isMultisite = function isMultisite(site) {
	return site && site.is_multisite;
};

var PeopleNotices = _react2.default.createClass({

	displayName: 'PeopleNotices',

	getInitialState: function getInitialState() {
		return this.getState();
	},
	componentDidMount: function componentDidMount() {
		_logStore2.default.on('change', this.refreshNotices);
	},
	componentWillUnmount: function componentWillUnmount() {
		_logStore2.default.removeListener('change', this.refreshNotices);
	},
	getState: function getState() {
		var siteId = this.props.site ? this.props.site.ID : null;
		var userId = this.props.user ? this.props.user.ID : null;

		return {
			errors: _logStore2.default.getErrors(filterBy.bind(this, siteId, userId)),
			inProgress: _logStore2.default.getInProgress(filterBy.bind(this, siteId, userId)),
			completed: _logStore2.default.getCompleted(filterBy.bind(this, siteId, userId))
		};
	},
	refreshNotices: function refreshNotices() {
		this.setState(this.getState());
	},
	inProgressMessage: function inProgressMessage() {
		var log = this.state.inProgress[0];
		switch (log.action) {
			case 'UPDATE_SITE_USER':
				return _i18nCalypso2.default.translate('Updating @%(user)s', {
					args: translateArg(log),
					context: 'In progress message while a site is performing actions on users.'
				});
			case 'DELETE_SITE_USER':
				if (isMultisite(this.props.site)) {
					return _i18nCalypso2.default.translate('Removing @%(user)s', {
						args: translateArg(log),
						context: 'In progress message while a site is performing actions on users.'
					});
				}

				return _i18nCalypso2.default.translate('Deleting @%(user)s', {
					args: translateArg(log),
					context: 'In progress message while a site is performing actions on users.'
				});
		}
	},
	errorMessage: function errorMessage() {
		var log = this.state.errors[this.state.errors.length - 1];
		switch (log.action) {
			case 'RECEIVE_UPDATE_SITE_USER_FAILURE':
				// Generic update error. Use `localStorage.setItem( 'debug', 'calypso:users:actions' ) for a more detailed error.
				return _i18nCalypso2.default.translate('There was an error updating @%(user)s', {
					args: translateArg(log),
					context: 'Error message after A site has failed to perform actions on a user.'
				});
			case 'RECEIVE_DELETE_SITE_USER_FAILURE':
				if (isMultisite(this.props.site)) {
					return _i18nCalypso2.default.translate('There was an error removing @%(user)s', {
						args: translateArg(log),
						context: 'Error message after A site has failed to perform actions on a user.'
					});
				}
				return _i18nCalypso2.default.translate('There was an error deleting @%(user)s', {
					args: translateArg(log),
					context: 'Error message after A site has failed to perform actions on a user.'
				});
			case 'RECEIVE_USERS':
				return _i18nCalypso2.default.translate('There was an error retrieving users');
			case 'RECEIVE_FOLLOWERS':
				return _i18nCalypso2.default.translate('There was an error retrieving followers');
			case 'RECEIVE_EMAIL_FOLLOWERS':
				return _i18nCalypso2.default.translate('There was an error retrieving email followers');
			case 'RECEIVE_VIEWERS':
				return _i18nCalypso2.default.translate('There was an error retrieving viewers');
		}
	},
	successMessage: function successMessage() {
		var log = this.state.completed[this.state.completed.length - 1];
		switch (log.action) {
			case 'RECEIVE_UPDATE_SITE_USER_SUCCESS':
				return _i18nCalypso2.default.translate('Successfully updated @%(user)s', {
					args: translateArg(log),
					context: 'Success message after a user has been modified.'
				});
			case 'RECEIVE_DELETE_SITE_USER_SUCCESS':
				if (isMultisite(this.props.site)) {
					return _i18nCalypso2.default.translate('Successfully removed @%(user)s', {
						args: translateArg(log),
						context: 'Success message after a user has been modified.'
					});
				}
				return _i18nCalypso2.default.translate('Successfully deleted @%(user)s', {
					args: translateArg(log),
					context: 'Success message after a user has been modified.'
				});
		}
	},
	render: function render() {
		var logNotices = this.state,
		    onDismissErrorNotice = function onDismissErrorNotice() {
			_actions2.default.removePeopleNotices(logNotices.errors);
		},
		    onDismissSuccessNotice = function onDismissSuccessNotice() {
			_actions2.default.removePeopleNotices(logNotices.completed);
		};

		var notice = null,
		    message = void 0;

		if (logNotices.inProgress.length > 0) {
			message = this.inProgressMessage();
			if (message) {
				notice = _react2.default.createElement(
					_notice2.default,
					{ showDismiss: false, className: 'people-notices__notice' },
					message
				);
			}
		}
		if (logNotices.errors.length > 0) {
			message = this.errorMessage();
			if (message) {
				notice = _react2.default.createElement(
					_notice2.default,
					{
						status: 'is-error',
						className: 'people-notices__notice',
						onDismissClick: onDismissErrorNotice },
					message
				);
			}
		} else if (logNotices.completed.length > 0) {
			message = this.successMessage();
			if (message) {
				notice = _react2.default.createElement(
					_notice2.default,
					{
						status: 'is-success',
						className: 'people-notices__notice',
						onDismissClick: onDismissSuccessNotice },
					message
				);
			}
		}

		return notice;
	}
});

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		site: (0, _selectors.getSelectedSite)(state)
	};
})(PeopleNotices);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/people-profile/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gravatar = __webpack_require__("./client/components/gravatar/index.jsx");

var _gravatar2 = _interopRequireDefault(_gravatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
module.exports = _react2.default.createClass({
	displayName: 'PeopleProfile',

	mixins: [_mixin2.default],

	getRole: function getRole() {
		var user = this.props.user;
		if (!user) {
			return 'subscriber';
		}

		if (user && user.roles && user.roles[0]) {
			return this.props.user.roles[0];
		}

		return;
	},
	getRoleBadgeText: function getRoleBadgeText(role) {
		var text = void 0;
		role = 'undefined' === typeof role ? this.getRole() : role;

		switch (role) {
			case 'super admin':
				text = this.translate('Super Admin', { context: 'Noun: A user role displayed in a badge' });
				break;
			case 'administrator':
				text = this.translate('Admin', { context: 'Noun: A user role displayed in a badge' });
				break;
			case 'editor':
				text = this.translate('Editor', { context: 'Noun: A user role displayed in a badge' });
				break;
			case 'author':
				text = this.translate('Author', { context: 'Noun: A user role displayed in a badge' });
				break;
			case 'contributor':
				text = this.translate('Contributor', { context: 'Noun: A user role displayed in a badge' });
				break;
			case 'subscriber':
				text = this.translate('Subscriber', { context: 'Noun: A user role displayed in a badge' });
				break;
			default:
				text = role;
		}

		return text;
	},
	getRoleBadgeClass: function getRoleBadgeClass(role) {
		role = 'undefined' === typeof role ? this.getRole() : role;
		return 'role-' + role;
	},
	renderName: function renderName() {
		var user = this.props.user;
		var name = void 0;
		if (!user) {
			name = this.translate('Loading Users', { context: 'Placeholder text while fetching users.' });
		} else if (user.name) {
			name = user.name;
		} else if (user.label) {
			name = user.label;
		}

		if (name) {
			name = _react2.default.createElement(
				'div',
				{ className: 'people-profile__username' },
				name
			);
		}

		return name;
	},
	renderLogin: function renderLogin() {
		var login = void 0;
		if (!this.props.user) {
			login = this.translate('Loading Users', { context: 'Placeholder text while fetching users.' });
		} else if (this.props.user.login) {
			login = this.props.user.login;
		}

		if (login) {
			login = _react2.default.createElement(
				'div',
				{ className: 'people-profile__login' },
				_react2.default.createElement(
					'span',
					null,
					'@',
					login
				)
			);
		}

		return login;
	},
	renderRole: function renderRole() {
		var superAdminBadge = void 0,
		    roleBadge = void 0;

		if (this.props.user && this.props.user.is_super_admin) {
			superAdminBadge = _react2.default.createElement(
				'div',
				{ className: 'people-profile__role-badge role-super-admin' },
				this.getRoleBadgeText('super admin')
			);
		}

		if (this.getRole()) {
			roleBadge = _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)('people-profile__role-badge', this.getRoleBadgeClass()) },
				this.getRoleBadgeText()
			);
		}

		if (!roleBadge && !superAdminBadge) {
			return;
		}

		return _react2.default.createElement(
			'div',
			{ className: 'people-profile__badges' },
			superAdminBadge,
			roleBadge
		);
	},
	renderSubscribedDate: function renderSubscribedDate() {
		if (!this.props.user || !this.props.user.date_subscribed) {
			return;
		}

		return _react2.default.createElement(
			'div',
			{ className: 'people-profile__subscribed' },
			this.translate('Since %(formattedDate)s', {
				context: 'How long a user has been subscribed to a blog. Example: "Since Sep 16, 2015"',
				args: {
					formattedDate: this.moment(this.props.user.date_subscribed).format('ll')
				}
			})
		);
	},
	isFollowerType: function isFollowerType() {
		return this.props.user && !this.props.user.roles && this.props.user.date_subscribed;
	},


	render: function render() {
		var user = this.props.user,
		    classes = (0, _classnames2.default)('people-profile', {
			'is-placeholder': !user
		});

		return _react2.default.createElement(
			'div',
			(0, _extends3.default)({}, (0, _omit3.default)(this.props, 'className', 'user'), { className: classes }),
			_react2.default.createElement(
				'div',
				{ className: 'people-profile__gravatar' },
				_react2.default.createElement(_gravatar2.default, { user: user, size: 72 })
			),
			_react2.default.createElement(
				'div',
				{ className: 'people-profile__detail' },
				this.renderName(),
				this.renderLogin(),
				this.isFollowerType() ? this.renderSubscribedDate() : this.renderRole()
			)
		);
	}
});

/**
 * Internal dependencies
 */

/***/ }),

/***/ "./client/my-sites/people/people-section-nav/index.jsx":
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

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var Search = __webpack_require__("./client/components/search/index.jsx"),
    UrlSearch = __webpack_require__("./client/lib/mixins/url-search/index.js"),
    SectionNav = __webpack_require__("./client/components/section-nav/index.jsx"),
    NavTabs = __webpack_require__("./client/components/section-nav/tabs.jsx"),
    NavItem = __webpack_require__("./client/components/section-nav/item.jsx"); /**
                                                       * External dependencies
                                                       */


var PeopleSearch = _react2.default.createClass({
	displayName: 'PeopleSearch',
	mixins: [UrlSearch],

	render: function render() {
		return _react2.default.createElement(Search, {
			pinned: true,
			fitsContainer: true,
			onSearch: this.doSearch,
			initialValue: this.props.search,
			ref: 'url-search',
			delaySearch: true,
			analyticsGroup: 'People' });
	}
});

var PeopleNavTabs = _react2.default.createClass({
	displayName: 'PeopleNavTabs',
	render: function render() {
		return _react2.default.createElement(
			NavTabs,
			{ selectedText: this.props.selectedText },
			this.props.filters.map(function (filterItem) {
				return _react2.default.createElement(
					NavItem,
					{
						key: filterItem.id,
						path: filterItem.path,
						selected: filterItem.id === this.props.filter },
					filterItem.title
				);
			}, this)
		);
	}
});

var PeopleSectionNav = function (_Component) {
	(0, _inherits3.default)(PeopleSectionNav, _Component);

	function PeopleSectionNav() {
		(0, _classCallCheck3.default)(this, PeopleSectionNav);
		return (0, _possibleConstructorReturn3.default)(this, (PeopleSectionNav.__proto__ || (0, _getPrototypeOf2.default)(PeopleSectionNav)).apply(this, arguments));
	}

	(0, _createClass3.default)(PeopleSectionNav, [{
		key: 'canSearch',
		value: function canSearch() {
			var _props = this.props,
			    isJetpack = _props.isJetpack,
			    jetpackPeopleSupported = _props.jetpackPeopleSupported,
			    filter = _props.filter;

			if (!this.props.site) {
				return false;
			}

			// Disable search for wpcom followers and viewers
			if (filter) {
				if ('followers' === filter || 'viewers' === filter) {
					return false;
				}
			}

			if (!isJetpack) {
				// wpcom sites will always support search
				return true;
			}

			if ('team' === filter && !jetpackPeopleSupported) {
				// Jetpack sites can only search team on versions of 3.7.0-beta or later
				return false;
			}

			return true;
		}
	}, {
		key: 'getFilters',
		value: function getFilters() {
			var siteFilter = (0, _get3.default)(this.props.site, 'slug', '');
			var translate = this.props.translate;

			var filters = [{
				title: translate('Team', { context: 'Filter label for people list' }),
				path: '/people/team/' + siteFilter,
				id: 'team'
			}, {
				title: translate('Followers', { context: 'Filter label for people list' }),
				path: '/people/followers/' + siteFilter,
				id: 'followers'
			}, {
				title: translate('Email Followers', { context: 'Filter label for people list' }),
				path: '/people/email-followers/' + siteFilter,
				id: 'email-followers'
			}, {
				title: translate('Viewers', { context: 'Filter label for people list' }),
				path: '/people/viewers/' + siteFilter,
				id: 'viewers'
			}];

			return filters;
		}
	}, {
		key: 'getNavigableFilters',
		value: function getNavigableFilters() {
			var _this2 = this;

			var allowedFilterIds = ['team'];
			if (_config2.default.isEnabled('manage/people/readers')) {
				allowedFilterIds.push('followers');
				allowedFilterIds.push('email-followers');

				if (this.shouldDisplayViewers()) {
					allowedFilterIds.push('viewers');
				}
			}

			return this.getFilters().filter(function (filter) {
				return _this2.props.filter === filter.id || (0, _includes3.default)(allowedFilterIds, filter.id);
			});
		}
	}, {
		key: 'shouldDisplayViewers',
		value: function shouldDisplayViewers() {
			if (!this.props.site) {
				return false;
			}

			if ('viewers' === this.props.filter || !this.props.isJetpack && this.props.isPrivate) {
				return true;
			}
			return false;
		}
	}, {
		key: 'render',
		value: function render() {
			var selectedText,
			    hasPinnedItems = false,
			    search = null;

			if (this.canSearch()) {
				hasPinnedItems = true;
				search = _react2.default.createElement(PeopleSearch, this.props);
			}

			selectedText = (0, _find3.default)(this.getFilters(), { id: this.props.filter }).title;
			return _react2.default.createElement(
				SectionNav,
				{ selectedText: selectedText, hasPinnedItems: hasPinnedItems },
				_react2.default.createElement(PeopleNavTabs, (0, _extends3.default)({}, this.props, { selectedText: selectedText, filters: this.getNavigableFilters() })),
				search
			);
		}
	}]);
	return PeopleSectionNav;
}(_react.Component);

exports.default = (0, _i18nCalypso.localize)(PeopleSectionNav);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/role-select/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _formFieldset = __webpack_require__("./client/components/forms/form-fieldset/index.jsx");

var _formFieldset2 = _interopRequireDefault(_formFieldset);

var _formLabel = __webpack_require__("./client/components/forms/form-label/index.jsx");

var _formLabel2 = _interopRequireDefault(_formLabel);

var _formSelect = __webpack_require__("./client/components/forms/form-select/index.jsx");

var _formSelect2 = _interopRequireDefault(_formSelect);

var _formSettingExplanation = __webpack_require__("./client/components/forms/form-setting-explanation/index.jsx");

var _formSettingExplanation2 = _interopRequireDefault(_formSettingExplanation);

var _querySites = __webpack_require__("./client/components/data/query-sites/index.jsx");

var _querySites2 = _interopRequireDefault(_querySites);

var _querySiteRoles = __webpack_require__("./client/components/data/query-site-roles/index.jsx");

var _querySiteRoles2 = _interopRequireDefault(_querySiteRoles);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/site-roles/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var getWpcomFollowerRole = function getWpcomFollowerRole(_ref) {
	var site = _ref.site,
	    translate = _ref.translate;

	var displayName = site.is_private ? translate('Viewer', { context: 'Role that is displayed in a select' }) : translate('Follower', { context: 'Role that is displayed in a select' });

	return {
		display_name: displayName,
		name: 'follower'
	};
}; /**
    * External dependencies
    */


var RoleSelect = function RoleSelect(props) {
	var siteRoles = props.siteRoles;
	var site = props.site,
	    includeFollower = props.includeFollower,
	    siteId = props.siteId,
	    id = props.id,
	    explanation = props.explanation,
	    translate = props.translate;

	var omitProps = ['site', 'key', 'siteId', 'includeFollower', 'explanation', 'siteRoles', 'dispatch', 'moment', 'numberFormat', 'translate'];

	if (site && siteRoles && includeFollower) {
		siteRoles = siteRoles.concat(getWpcomFollowerRole(props));
	}

	return _react2.default.createElement(
		_formFieldset2.default,
		{ key: siteId, disabled: !siteRoles },
		siteId && _react2.default.createElement(_querySites2.default, { siteId: siteId }),
		siteId && _react2.default.createElement(_querySiteRoles2.default, { siteId: siteId }),
		_react2.default.createElement(
			_formLabel2.default,
			{ htmlFor: id },
			translate('Role')
		),
		_react2.default.createElement(
			_formSelect2.default,
			(0, _omit3.default)(props, omitProps),
			siteRoles && (0, _map3.default)(siteRoles, function (role) {
				return _react2.default.createElement(
					'option',
					{ value: role.name, key: role.name },
					role.display_name
				);
			})
		),
		explanation && _react2.default.createElement(
			_formSettingExplanation2.default,
			null,
			explanation
		)
	);
};

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	return {
		site: (0, _selectors.getSite)(state, ownProps.siteId),
		siteRoles: (0, _selectors2.getSiteRoles)(state, ownProps.siteId)
	};
})((0, _i18nCalypso.localize)(RoleSelect));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/people/team-list/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _jsonStableStringify = __webpack_require__("./node_modules/json-stable-stringify/index.js");

var _jsonStableStringify2 = _interopRequireDefault(_jsonStableStringify);

var _listEnd = __webpack_require__("./client/components/list-end/index.js");

var _listEnd2 = _interopRequireDefault(_listEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__("./node_modules/react/react.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:my-sites:people:team-list');

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var Card = __webpack_require__("./client/components/card/index.jsx"),
    PeopleListItem = __webpack_require__("./client/my-sites/people/people-list-item/index.jsx"),
    SiteUsersFetcher = __webpack_require__("./client/components/site-users-fetcher/index.jsx"),
    UsersActions = __webpack_require__("./client/lib/users/actions.js"),
    InfiniteList = __webpack_require__("./client/components/infinite-list/index.jsx"),
    NoResults = __webpack_require__("./client/my-sites/no-results/index.jsx"),
    analytics = __webpack_require__("./client/lib/analytics/index.js"),
    PeopleListSectionHeader = __webpack_require__("./client/my-sites/people/people-list-section-header/index.jsx");


/**
 * Module Variables
 */
var Team = React.createClass({
	displayName: 'Team',

	getInitialState: function getInitialState() {
		return {
			bulkEditing: false
		};
	},

	isLastPage: function isLastPage() {
		return this.props.totalUsers <= this.props.users.length + this.props.excludedUsers.length;
	},


	render: function render() {
		var key = (0, _jsonStableStringify2.default)((0, _omit3.default)(this.props.fetchOptions, ['number', 'offset'])),
		    headerText = this.translate('Team', { context: 'A navigation label.' }),
		    listClass = this.state.bulkEditing ? 'bulk-editing' : null,
		    people;

		if (this.props.fetchInitialized && !this.props.users.length && this.props.fetchOptions.search && !this.props.fetchingUsers) {
			return React.createElement(NoResults, {
				image: '/calypso/images/people/mystery-person.svg',
				text: this.translate('No results found for {{em}}%(searchTerm)s{{/em}}', {
					args: { searchTerm: this.props.search },
					components: { em: React.createElement('em', null) }
				}) });
		}

		if (this.props.site && this.props.users.length) {
			if (this.props.search && this.props.totalUsers) {
				headerText = this.translate('%(numberPeople)d Person Matching {{em}}"%(searchTerm)s"{{/em}}', '%(numberPeople)d People Matching {{em}}"%(searchTerm)s"{{/em}}', {
					count: this.props.users.length,
					args: {
						numberPeople: this.props.totalUsers,
						searchTerm: this.props.search
					},
					components: {
						em: React.createElement('em', null)
					}
				});
			}

			people = React.createElement(InfiniteList, {
				key: key,
				items: this.props.users,
				className: 'people-selector__infinite-list',
				ref: 'infiniteList',
				fetchingNextPage: this.props.fetchingUsers,
				lastPage: this.isLastPage(),
				fetchNextPage: this._fetchNextPage,
				getItemRef: this._getPersonRef,
				renderLoadingPlaceholders: this._renderLoadingPeople,
				renderItem: this._renderPerson,
				guessedItemHeight: 126 });
		} else {
			people = this._renderLoadingPeople();
		}

		return React.createElement(
			'div',
			null,
			React.createElement(PeopleListSectionHeader, {
				label: headerText,
				site: this.props.site,
				count: this.props.fetchingUsers || this.props.fetchOptions.search ? null : this.props.totalUsers }),
			React.createElement(
				Card,
				{ className: listClass },
				people
			),
			this.isLastPage() && React.createElement(_listEnd2.default, null)
		);
	},

	_renderPerson: function _renderPerson(user) {
		return React.createElement(PeopleListItem, {
			key: user.ID,
			user: user,
			type: 'user',
			site: this.props.site,
			isSelectable: this.state.bulkEditing });
	},

	_fetchNextPage: function _fetchNextPage() {
		var offset = this.props.users.length;
		var fetchOptions = (0, _assign2.default)({}, this.props.fetchOptions, { offset: offset });
		analytics.ga.recordEvent('People', 'Fetched more users with infinite list', 'offset', offset);
		debug('fetching next batch of users');
		UsersActions.fetchUsers(fetchOptions);
	},

	_getPersonRef: function _getPersonRef(user) {
		return 'user-' + user.ID;
	},

	_renderLoadingPeople: function _renderLoadingPeople() {
		return React.createElement(PeopleListItem, { key: 'people-list-item-placeholder' });
	}

});

module.exports = React.createClass({
	displayName: 'TeamList',

	render: function render() {
		var fetchOptions = {
			siteId: this.props.site && this.props.site.ID,
			order: 'ASC',
			order_by: 'display_name',
			search: this.props.search ? '*' + this.props.search + '*' : null,
			search_columns: ['display_name', 'user_login']
		};

		(0, _freeze2.default)(fetchOptions);

		return React.createElement(
			SiteUsersFetcher,
			{ fetchOptions: fetchOptions },
			React.createElement(Team, this.props)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/people/viewers-list/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _listEnd = __webpack_require__("./client/components/list-end/index.js");

var _listEnd2 = _interopRequireDefault(_listEnd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    PureRenderMixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

/**
 * Internal dependencies
 */
var PeopleListItem = __webpack_require__("./client/my-sites/people/people-list-item/index.jsx"),
    Card = __webpack_require__("./client/components/card/index.jsx"),
    PeopleListSectionHeader = __webpack_require__("./client/my-sites/people/people-list-section-header/index.jsx"),
    ViewersActions = __webpack_require__("./client/lib/viewers/actions.js"),
    ViewersStore = __webpack_require__("./client/lib/viewers/store.js"),
    InfiniteList = __webpack_require__("./client/components/infinite-list/index.jsx"),
    ViewersData = __webpack_require__("./client/components/data/viewers-data/index.jsx"),
    EmptyContent = __webpack_require__("./client/components/empty-content/index.jsx"),
    analytics = __webpack_require__("./client/lib/analytics/index.js"),
    accept = __webpack_require__("./client/lib/accept/index.js");


var Viewers = React.createClass({

	displayName: 'Viewers',

	getInitialState: function getInitialState() {
		return {
			bulkEditing: false
		};
	},

	mixins: [PureRenderMixin],

	renderPlaceholders: function renderPlaceholders() {
		return React.createElement(PeopleListItem, { key: 'people-list-item-placeholder' });
	},
	fetchNextPage: function fetchNextPage() {
		var paginationData = ViewersStore.getPaginationData(this.props.siteId),
		    currentPage = paginationData.currentViewersPage ? paginationData.currentViewersPage : 0,
		    page = currentPage + 1;

		analytics.ga.recordEvent('People', 'Fetched more viewers with infinite list', 'page', page);
		ViewersActions.fetch(this.props.siteId, page);
	},


	removeViewer: function removeViewer(viewer) {
		var _this = this;

		analytics.ga.recordEvent('People', 'Clicked Remove Viewer Button On Viewers List');
		accept(React.createElement(
			'div',
			null,
			React.createElement(
				'p',
				null,
				this.translate('If you remove this viewer, he or she will not be able to visit this site.')
			),
			React.createElement(
				'p',
				null,
				this.translate('Would you still like to remove this viewer?')
			)
		), function (accepted) {
			if (accepted) {
				analytics.ga.recordEvent('People', 'Clicked Remove Button In Remove Viewer Confirmation');
				ViewersActions.remove(_this.props.site.ID, viewer);
			} else {
				analytics.ga.recordEvent('People', 'Clicked Cancel Button In Remove Viewer Confirmation');
			}
		}, this.translate('Remove', { context: 'Confirm Remove viewer button text.' }));
	},

	renderViewer: function renderViewer(viewer) {
		var _this2 = this;

		var removeThisViewer = function removeThisViewer() {
			_this2.removeViewer(viewer);
		};

		return React.createElement(PeopleListItem, {
			key: viewer.ID,
			user: viewer,
			type: 'viewer',
			site: this.props.site,
			isSelectable: this.state.bulkEditing,
			onRemove: removeThisViewer
		});
	},
	getViewerRef: function getViewerRef(viewer) {
		return 'viewer-' + viewer.ID;
	},
	onClickSiteSettings: function onClickSiteSettings() {
		analytics.ga.recordEvent('People', 'Clicked Site Settings Link On Empty Viewers');
	},
	isLastPage: function isLastPage() {
		return this.props.totalViewers <= this.props.viewers.length;
	},
	render: function render() {
		var viewers,
		    emptyContentArgs = {
			title: this.props.site && this.props.site.jetpack ? this.translate("Oops, Jetpack sites don't support viewers.") : this.translate("You don't have any viewers yet.")
		},
		    listClass = this.state.bulkEditing ? 'bulk-editing' : null;

		if (!this.props.viewers.length && !this.props.fetching) {
			if (this.props.site && !this.props.site.jetpack && !this.props.site.is_private) {
				emptyContentArgs = (0, _assign2.default)(emptyContentArgs, {
					line: this.translate('Only private sites can have viewers. You can make your site private by ' + 'changing its visibility settings.'),
					action: this.translate('Visit Site Settings'),
					actionURL: '/settings/general/' + this.props.site.slug
				});
			}

			return React.createElement(EmptyContent, emptyContentArgs);
		}

		if (this.props.viewers.length) {
			viewers = React.createElement(InfiniteList, {
				key: this.props.siteId,
				items: this.props.viewers,
				className: 'people-selector__infinite-list',
				ref: 'infiniteList',
				fetchingNextPage: this.props.fetching,
				lastPage: this.isLastPage(),
				fetchNextPage: this.fetchNextPage,
				getItemRef: this.getViewerRef,
				renderLoadingPlaceholders: this.renderPlaceholders,
				renderItem: this.renderViewer,
				guessedItemHeight: 126 });
		} else {
			viewers = this.renderPlaceholders();
		}

		return React.createElement(
			'div',
			null,
			React.createElement(PeopleListSectionHeader, {
				label: this.props.label,
				site: this.props.site,
				count: this.props.fetching ? null : this.props.totalViewers }),
			React.createElement(
				Card,
				{ className: listClass },
				viewers
			),
			this.isLastPage() && React.createElement(_listEnd2.default, null)
		);
	}
});

module.exports = React.createClass({
	displayName: 'ViewersList',

	mixins: [PureRenderMixin],

	render: function render() {
		return React.createElement(
			ViewersData,
			{ site: this.props.site, siteId: this.props.site.ID, label: this.props.label },
			React.createElement(Viewers, null)
		);
	}
});

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

/***/ "./client/state/jetpack/modules/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetchModuleList = exports.deactivateModule = exports.activateModule = undefined;

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _mapValues2 = __webpack_require__("./node_modules/lodash/mapValues.js");

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

exports.receiveJetpackModules = receiveJetpackModules;

var _actionTypes = __webpack_require__("./client/state/action-types.js");

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var activateModule = exports.activateModule = function activateModule(siteId, moduleSlug) {
	var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	return function (dispatch) {
		dispatch({
			type: _actionTypes.JETPACK_MODULE_ACTIVATE,
			siteId: siteId,
			moduleSlug: moduleSlug,
			silent: silent
		});

		return _wp2.default.undocumented().jetpackModuleActivate(siteId, moduleSlug).then(function () {
			dispatch({
				type: _actionTypes.JETPACK_MODULE_ACTIVATE_SUCCESS,
				siteId: siteId,
				moduleSlug: moduleSlug,
				silent: silent
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.JETPACK_MODULE_ACTIVATE_FAILURE,
				siteId: siteId,
				moduleSlug: moduleSlug,
				silent: silent,
				error: error.message
			});
		});
	};
};

var deactivateModule = exports.deactivateModule = function deactivateModule(siteId, moduleSlug) {
	var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	return function (dispatch) {
		dispatch({
			type: _actionTypes.JETPACK_MODULE_DEACTIVATE,
			siteId: siteId,
			moduleSlug: moduleSlug,
			silent: silent
		});

		return _wp2.default.undocumented().jetpackModuleDeactivate(siteId, moduleSlug).then(function () {
			dispatch({
				type: _actionTypes.JETPACK_MODULE_DEACTIVATE_SUCCESS,
				siteId: siteId,
				moduleSlug: moduleSlug,
				silent: silent
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.JETPACK_MODULE_DEACTIVATE_FAILURE,
				siteId: siteId,
				moduleSlug: moduleSlug,
				silent: silent,
				error: error.message
			});
		});
	};
};

/**
 * Returns an action object used in signalling that the available modules
 * in a Jetpack site were received.
 *
 * @param  {Number}   siteId    Site ID
 * @param  {Object[]} modules Object of modules indexed by slug
 * @return {Object}             Action object
 */
function receiveJetpackModules(siteId, modules) {
	return {
		type: _actionTypes.JETPACK_MODULES_RECEIVE,
		siteId: siteId,
		modules: modules
	};
}

var fetchModuleList = exports.fetchModuleList = function fetchModuleList(siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.JETPACK_MODULES_REQUEST,
			siteId: siteId
		});

		return _wp2.default.undocumented().getJetpackModules(siteId).then(function (_ref) {
			var data = _ref.data;

			var modules = (0, _mapValues3.default)(data, function (module) {
				return (0, _extends3.default)({
					active: module.activated
				}, (0, _omit3.default)(module, 'activated'));
			});

			dispatch(receiveJetpackModules(siteId, modules));
			dispatch({
				type: _actionTypes.JETPACK_MODULES_REQUEST_SUCCESS,
				siteId: siteId
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.JETPACK_MODULES_REQUEST_FAILURE,
				siteId: siteId,
				error: error.message
			});
		});
	};
};

/***/ }),

/***/ "./client/state/site-roles/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.requestSiteRoles = requestSiteRoles;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
function requestSiteRoles(siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.SITE_ROLES_REQUEST,
			siteId: siteId
		});

		return _wp2.default.undocumented().site(siteId).getRoles().then(function (_ref) {
			var roles = _ref.roles;

			dispatch({
				type: _actionTypes.SITE_ROLES_REQUEST_SUCCESS,
				siteId: siteId
			});

			dispatch({
				type: _actionTypes.SITE_ROLES_RECEIVE,
				siteId: siteId,
				roles: roles
			});
		}).catch(function () {
			dispatch({
				type: _actionTypes.SITE_ROLES_REQUEST_FAILURE,
				siteId: siteId
			});
		});
	};
}

/***/ }),

/***/ "./client/state/site-roles/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSiteRoles = exports.isRequestingSiteRoles = undefined;

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if currently requesting roles for the specified site ID, or
 * false otherwise.
 *
 * @param  {Object}  state     Global state tree
 * @param  {Number}  siteId    Site ID
 * @return {Boolean}           Whether that shortcode is being requested
 */
/**
 * External dependencies
 */
var isRequestingSiteRoles = exports.isRequestingSiteRoles = function isRequestingSiteRoles(state, siteId) {
  return (0, _get3.default)(state.siteRoles.requesting, [siteId], false);
};

/**
 * Retrieve the site roles, supported in a particular site
 * @param  {Object} state    Global state tree
 * @param  {Number} siteId   Site ID
 * @return {Array}           Site roles
 */
var getSiteRoles = exports.getSiteRoles = function getSiteRoles(state, siteId) {
  return (0, _get3.default)(state.siteRoles.items, [siteId]);
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