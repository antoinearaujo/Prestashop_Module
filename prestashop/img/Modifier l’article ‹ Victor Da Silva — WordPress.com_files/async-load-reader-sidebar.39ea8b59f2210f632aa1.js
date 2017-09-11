webpackJsonp(["async-load-reader-sidebar"],{

/***/ "./client/blocks/app-promo/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.AppPromo = exports.getPromoLink = undefined;

var _sample2 = __webpack_require__("./node_modules/lodash/sample.js");

var _sample3 = _interopRequireDefault(_sample2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _store = __webpack_require__("./node_modules/store/store.js");

var _store2 = _interopRequireDefault(_store);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var getRandomPromo = function getRandomPromo() {
	var promoOptions = [{
		promoCode: 'a0001',
		message: 'WordPress.com your way — desktop app now available for Mac, Windows, and Linux.',
		type: 'desktop'
	}, {
		promoCode: 'a0002',
		message: 'Get WordPress.com app for your desktop.',
		type: 'desktop'
	}, {
		promoCode: 'a0003',
		message: 'WordPress.com app now available for desktop.',
		type: 'desktop'
	}, {
		promoCode: 'a0005',
		message: 'WordPress.com at your fingertips — download app for desktop.',
		type: 'desktop'
	}, {
		promoCode: 'a0006',
		message: 'WordPress.com in the palm of your hands — download app for mobile.',
		type: 'mobile'
	}];

	return (0, _sample3.default)(promoOptions);
};

var getPromoLink = exports.getPromoLink = function getPromoLink(location, promoDetails) {
	var type = promoDetails.type,
	    promoCode = promoDetails.promoCode;


	return 'https://apps.wordpress.com/' + type + '/?ref=promo_' + location + '_' + promoCode;
};

var AppPromo = exports.AppPromo = _react2.default.createClass({

	displayName: 'AppPromo',

	propTypes: {
		location: _react2.default.PropTypes.string.isRequired
	},

	getInitialState: function getInitialState() {
		var promoItem = this.props.promoItem || getRandomPromo();
		return {
			promoItem: promoItem,
			showPromo: true
		};
	},

	componentDidMount: function componentDidMount() {
		this.props.recordTracksEvent('calypso_desktop_promo_view', {
			promo_location: this.props.location,
			promo_code: this.state.promoItem.promoCode
		});
	},

	recordClickEvent: function recordClickEvent() {
		this.props.recordTracksEvent('calypso_desktop_promo_click', {
			promo_location: this.props.location,
			promo_code: this.state.promoItem.promoCode
		});
	},

	dismiss: function dismiss() {
		this.setState({ showPromo: false });
		this.props.saveDismissal();
		this.props.recordTracksEvent('calypso_desktop_promo_dismiss', {
			promo_location: this.props.location,
			promo_code: this.state.promoItem.promoCode
		});
	},

	render: function render() {
		if (!this.state.showPromo) {
			return null;
		}

		var _props = this.props,
		    location = _props.location,
		    translate = _props.translate;
		var promoItem = this.state.promoItem;


		return _react2.default.createElement(
			'div',
			{ className: 'app-promo' },
			_react2.default.createElement(
				'span',
				{ tabIndex: '0', className: 'app-promo__dismiss', onClick: this.dismiss },
				_react2.default.createElement(_gridicons2.default, { icon: 'cross', size: 24 }),
				_react2.default.createElement(
					'span',
					{ className: 'app-promo__screen-reader-text' },
					translate('Dismiss')
				)
			),
			_react2.default.createElement(
				'a',
				{
					onClick: this.recordClickEvent,
					className: 'app-promo__link',
					title: 'Try the desktop app!',
					href: this.props.getPromoLink(location, promoItem),
					target: '_blank',
					rel: 'noopener noreferrer'
				},
				_react2.default.createElement('img', {
					className: 'app-promo__icon',
					src: '/calypso/images/reader/promo-app-icon.png',
					width: '32',
					height: '32',
					alt: 'WordPress Desktop Icon'
				}),
				promoItem.message
			)
		);
	}
});

AppPromo.defaultProps = {
	translate: _identity3.default,
	recordTracksEvent: _noop3.default,
	saveDismissal: function saveDismissal() {
		return _store2.default.set('desktop_promo_disabled', true);
	},
	getPromoLink: getPromoLink
};

exports.default = (0, _reactRedux.connect)(null, { recordTracksEvent: _actions.recordTracksEvent })((0, _i18nCalypso.localize)(AppPromo));

/***/ }),

/***/ "./client/components/data/query-reader-followed-tags/index.jsx":
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

var _actions = __webpack_require__("./client/state/reader/tags/items/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  QueryReaderFollowedTags takes no parameters and will add all of a
 *  users tags to the state tree.
 */
var QueryReaderFollowedTags = function (_Component) {
	(0, _inherits3.default)(QueryReaderFollowedTags, _Component);

	function QueryReaderFollowedTags() {
		(0, _classCallCheck3.default)(this, QueryReaderFollowedTags);
		return (0, _possibleConstructorReturn3.default)(this, (QueryReaderFollowedTags.__proto__ || (0, _getPrototypeOf2.default)(QueryReaderFollowedTags)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryReaderFollowedTags, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.props.requestFollowedTags();
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryReaderFollowedTags;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


QueryReaderFollowedTags.propTypes = {
	requestFollowedTags: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(null, { requestFollowedTags: _actions.requestTags })(QueryReaderFollowedTags);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-reader-lists/index.jsx":
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

var _selectors = __webpack_require__("./client/state/reader/lists/selectors.js");

var _actions = __webpack_require__("./client/state/reader/lists/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var QueryReaderLists = function (_Component) {
	(0, _inherits3.default)(QueryReaderLists, _Component);

	function QueryReaderLists() {
		(0, _classCallCheck3.default)(this, QueryReaderLists);
		return (0, _possibleConstructorReturn3.default)(this, (QueryReaderLists.__proto__ || (0, _getPrototypeOf2.default)(QueryReaderLists)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryReaderLists, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (this.props.isRequestingSubscribedLists) {
				return;
			}

			this.props.requestSubscribedLists();
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryReaderLists;
}(_react.Component); /**
                      * External dependencies
                      */


QueryReaderLists.propTypes = {
	isRequestingSubscribedLists: _react.PropTypes.bool,
	requestSubscribedLists: _react.PropTypes.func
};

QueryReaderLists.defaultProps = {
	requestSubscribedLists: function requestSubscribedLists() {}
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		isRequestingSubscribedLists: (0, _selectors.isRequestingSubscribedLists)(state)
	};
}, function (dispatch) {
	return (0, _redux.bindActionCreators)({
		requestSubscribedLists: _actions.requestSubscribedLists
	}, dispatch);
})(QueryReaderLists);
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/reader-lists/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _lists = __webpack_require__("./client/lib/reader-lists/lists.js");

var _lists2 = _interopRequireDefault(_lists);

var _subscriptions = __webpack_require__("./client/lib/reader-lists/subscriptions.js");

var _subscriptions2 = _interopRequireDefault(_subscriptions);

var _constants = __webpack_require__("./client/lib/reader-lists/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchingLists = {};

// Internal dependencies
// External dependencies


var ReaderListActions = {
	fetchSubscriptions: function fetchSubscriptions() {
		if (_subscriptions2.default.isFetching()) {
			return;
		}

		_subscriptions2.default.setIsFetching(true);

		_wp2.default.undocumented().readLists(function (error, data) {
			_subscriptions2.default.setIsFetching(false);

			_dispatcher2.default.handleServerAction({
				type: _constants.action.RECEIVE_READER_LISTS,
				data: data,
				error: error
			});
		});
	},

	follow: function follow(owner, slug) {
		var query = { owner: owner, slug: slug };

		_dispatcher2.default.handleViewAction({
			type: _constants.action.FOLLOW_LIST,
			data: query
		});

		_wp2.default.undocumented().followList(query, function (error, data) {
			if (error || !(data && data.following)) {
				_dispatcher2.default.handleServerAction({
					type: _constants.action.RECEIVE_FOLLOW_LIST_ERROR,
					data: {
						owner: query.owner,
						slug: query.slug,
						error: error,
						following: data && data.following
					}
				});
				return;
			}

			_dispatcher2.default.handleServerAction({
				type: _constants.action.RECEIVE_FOLLOW_LIST,
				data: {
					owner: query.owner,
					slug: query.slug,
					title: data.title
				},
				error: error
			});
		});
	},

	unfollow: function unfollow(owner, slug) {
		var query = { owner: owner, slug: slug };

		_dispatcher2.default.handleViewAction({
			type: _constants.action.UNFOLLOW_LIST,
			data: query
		});

		_wp2.default.undocumented().unfollowList(query, function (error, data) {
			if (error || data && data.following) {
				_dispatcher2.default.handleServerAction({
					type: _constants.action.RECEIVE_UNFOLLOW_LIST_ERROR,
					data: {
						owner: query.owner,
						slug: query.slug,
						error: error,
						following: data && data.following
					}
				});
				return;
			}

			_dispatcher2.default.handleServerAction({
				type: _constants.action.RECEIVE_UNFOLLOW_LIST,
				data: {
					owner: query.owner,
					slug: query.slug,
					title: data.title
				},
				error: error
			});
		});
	},

	fetchList: function fetchList(owner, slug) {
		var key = owner + '-' + slug;
		if (fetchingLists[key]) {
			return;
		}

		fetchingLists[key] = true;
		_lists2.default.setIsFetching(true);

		_wp2.default.undocumented().readList({
			owner: owner,
			slug: slug
		}, function (error, data) {
			delete fetchingLists[key];
			_lists2.default.setIsFetching(false);

			_dispatcher2.default.handleServerAction({
				type: _constants.action.RECEIVE_READER_LIST,
				data: data,
				error: error
			});
		});
	},

	create: function create(title) {
		if (!title) {
			throw new Error('List title is required');
		}

		_dispatcher2.default.handleViewAction({
			type: _constants.action.CREATE_READER_LIST,
			data: { title: title }
		});

		_wp2.default.undocumented().readListsNew(title, function (error, data) {
			_dispatcher2.default.handleServerAction({
				type: _constants.action.RECEIVE_CREATE_READER_LIST,
				data: data,
				error: error
			});
		});
	},

	update: function update(params) {
		if (!params.owner || !params.slug || !params.title) {
			throw new Error('List owner, slug and title are required');
		}

		_dispatcher2.default.handleViewAction({
			type: _constants.action.UPDATE_READER_LIST,
			data: params
		});

		_wp2.default.undocumented().readListsUpdate(params, function (error, data) {
			_dispatcher2.default.handleServerAction({
				type: _constants.action.RECEIVE_UPDATE_READER_LIST,
				data: data,
				error: error
			});
		});
	},

	dismissNotice: function dismissNotice(listId) {
		if (!listId) {
			throw new Error('List ID is required');
		}

		_dispatcher2.default.handleViewAction({
			type: _constants.action.DISMISS_READER_LIST_NOTICE,
			listId: listId
		});
	}
};

module.exports = ReaderListActions;

/***/ }),

/***/ "./client/lib/reader-lists/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.action = {
	UPDATE_READER_LIST: 'UPDATE_READER_LIST',
	RECEIVE_UPDATE_READER_LIST: 'RECEIVE_UPDATE_READER_LIST',
	DISMISS_READER_LIST_NOTICE: 'DISMISS_READER_LIST_NOTICE',
	RECEIVE_READER_LIST: 'RECEIVE_READER_LIST',
	RECEIVE_READER_LISTS: 'RECEIVE_READER_LISTS',
	FOLLOW_LIST: 'FOLLOW_LIST',
	RECEIVE_FOLLOW_LIST: 'RECEIVE_FOLLOW_LIST',
	RECEIVE_FOLLOW_LIST_ERROR: 'RECEIVE_FOLLOW_LIST_ERROR',
	UNFOLLOW_LIST: 'UNFOLLOW_LIST',
	RECEIVE_UNFOLLOW_LIST: 'RECEIVE_UNFOLLOW_LIST',
	RECEIVE_UNFOLLOW_LIST_ERROR: 'RECEIVE_UNFOLLOW_LIST_ERROR',
	CREATE_READER_LIST: 'CREATE_READER_LIST',
	RECEIVE_CREATE_READER_LIST: 'RECEIVE_CREATE_READER_LIST'
};

/***/ }),

/***/ "./client/lib/reader-lists/lists.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _last2 = __webpack_require__("./node_modules/lodash/last.js");

var _last3 = _interopRequireDefault(_last2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _formatting = __webpack_require__("./client/lib/formatting/index.js");

var _dispatcher = __webpack_require__("./client/dispatcher/index.js");

var _dispatcher2 = _interopRequireDefault(_dispatcher);

var _emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

var _emitter2 = _interopRequireDefault(_emitter);

var _constants = __webpack_require__("./client/lib/reader-lists/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// External dependencies
var lists = {},
    errors = [],
    updatedLists = {},
    _isFetching = false,
    ListStore;

// Internal dependencies


function keyForList(owner, slug) {
	return decodeURIComponent(owner) + '-' + decodeURIComponent(slug);
}

function getListURL(list) {
	return '/read/list/' + encodeURIComponent(list.owner) + '/' + encodeURIComponent(list.slug);
}

ListStore = {
	get: function get(owner, slug) {
		return lists[keyForList(owner, slug)];
	},
	getLastError: function getLastError() {
		return (0, _last3.default)(errors);
	},
	isUpdated: function isUpdated(listId) {
		return !!updatedLists[listId];
	},
	isFetching: function isFetching() {
		return _isFetching;
	},
	setIsFetching: function setIsFetching(val) {
		_isFetching = val;
	}
};

(0, _emitter2.default)(ListStore);

function receiveList(newList) {
	var existing = ListStore.get(newList.owner, newList.slug);

	newList.URL = getListURL(newList);
	newList.title = (0, _formatting.decodeEntities)(newList.title);

	if (!(0, _isEqual3.default)(existing, newList)) {
		lists[keyForList(newList.owner, newList.slug)] = newList;
		ListStore.emit('change');
	}
}

function markUpdatedList(newList) {
	updatedLists[newList.ID] = true;
	ListStore.emit('change');
}

function markPending(owner, slug) {
	var key = keyForList(owner, slug),
	    list = lists[key];

	if (!list) {
		list = {
			owner: owner,
			slug: slug,
			title: slug,
			ID: null,
			_state: 'pending'
		};
		lists[key] = list;
		ListStore.emit('change');
	}
}

function clearUpdatedLists() {
	updatedLists = {};
	ListStore.emit('change');
}

ListStore.dispatchToken = _dispatcher2.default.register(function (payload) {
	var action = payload.action;

	if (!action) {
		return;
	}

	if (action.error) {
		errors.push(action.error);
		return;
	}

	switch (action.type) {
		case _constants.action.RECEIVE_READER_LIST:
			if (action.data && action.data.list) {
				receiveList(action.data.list);
			}
			break;
		case _constants.action.RECEIVE_READER_LISTS:
			if (action.data && action.data.lists) {
				action.data.lists.forEach(receiveList);
			}
			break;
		case _constants.action.UPDATE_READER_LIST:
			receiveList(action.data);
			break;
		case _constants.action.RECEIVE_CREATE_READER_LIST:
		case _constants.action.RECEIVE_UPDATE_READER_LIST:
			receiveList(action.data);
			markUpdatedList(action.data);
			break;
		case _constants.action.FOLLOW_LIST:
			markPending(action.data.owner, action.data.slug);
			break;
		case _constants.action.RECEIVE_FOLLOW_LIST:
			receiveList(action.data);
			break;
		case _constants.action.DISMISS_READER_LIST_NOTICE:
			clearUpdatedLists();
			break;
	}
});

module.exports = ListStore;

/***/ }),

/***/ "./client/lib/reader-lists/subscriptions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reject2 = __webpack_require__("./node_modules/lodash/reject.js");

var _reject3 = _interopRequireDefault(_reject2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reader List Store

/**
 * External dependencies
 */
var Dispatcher = __webpack_require__("./client/dispatcher/index.js");

/**
 * Internal dependencies
 */
var emitter = __webpack_require__("./client/lib/mixins/emitter/index.js"),
    ListStore = __webpack_require__("./client/lib/reader-lists/lists.js");

var lists = null,
    errors = [],
    ReaderListStore,
    _isFetching = false;

function mapApiToId(list) {
	return {
		owner: list.owner,
		slug: list.slug
	};
}

function sortList() {
	lists.sort(function (a, b) {
		var aTitle = ListStore.get(a.owner, a.slug).title,
		    bTitle = ListStore.get(b.owner, b.slug).title;
		return aTitle.localeCompare(bTitle);
	});
}

ReaderListStore = {
	get: function get() {
		return lists && lists.map(function (list) {
			return ListStore.get(list.owner, list.slug);
		});
	},

	findByOwnerAndSlug: function findByOwnerAndSlug(owner, slug) {
		return (0, _find3.default)(lists, { owner: owner, slug: slug });
	},

	isSubscribed: function isSubscribed(owner, slug) {
		return !!this.findByOwnerAndSlug(owner, slug);
	},

	receiveLists: function receiveLists(newLists) {
		newLists = newLists.map(mapApiToId);
		if (!(0, _isEqual3.default)(newLists, lists)) {
			lists = newLists;
			ReaderListStore.emit('change');
		}
	},

	followList: function followList(newList) {
		newList = mapApiToId(newList);

		if ((0, _find3.default)(lists, newList)) {
			return newList;
		}

		lists.push(newList);
		sortList();
		ReaderListStore.emit('change');
		return newList;
	},

	unfollowList: function unfollowList(data) {
		var key = mapApiToId(data),
		    newList = (0, _reject3.default)(lists, key);

		if (newList.length !== lists.length) {
			lists = newList;
			sortList();
			ReaderListStore.emit('change');
		}
	},

	receiveCreateReaderList: function receiveCreateReaderList(newList) {
		newList = ReaderListStore.followList(newList);
		ReaderListStore.emit('create', newList);
	},

	isFetching: function isFetching() {
		return _isFetching;
	},

	setIsFetching: function setIsFetching(val) {
		_isFetching = val;
		ReaderListStore.emitChange();
	}
};

emitter(ReaderListStore);

ReaderListStore.dispatchToken = Dispatcher.register(function (payload) {
	var action = payload.action;

	if (!action) {
		return;
	}

	Dispatcher.waitFor([ListStore.dispatchToken]);

	if (action.error) {
		errors.push(action.error);
		return;
	}

	switch (action.type) {
		case 'RECEIVE_READER_LISTS':
			ReaderListStore.receiveLists(action.data.lists);
			break;

		case 'FOLLOW_LIST':
		case 'RECEIVE_FOLLOW_LIST':
			ReaderListStore.followList(action.data);
			break;

		case 'RECEIVE_FOLLOW_LIST_ERROR':
			ReaderListStore.unfollowList(action.data);
			break;

		case 'UNFOLLOW_LIST':
		case 'RECEIVE_UNFOLLOW_LIST':
			ReaderListStore.unfollowList(action.data);
			break;

		case 'RECEIVE_UNFOLLOW_LIST_ERROR':
			ReaderListStore.followList(action.data);
			break;

		case 'RECEIVE_CREATE_READER_LIST':
			ReaderListStore.receiveCreateReaderList(action.data);
			break;
	}
});

module.exports = ReaderListStore;

/***/ }),

/***/ "./client/reader/sidebar/expandable-add-form.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ExpandableSidebarAddForm = undefined;

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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandableSidebarAddForm = exports.ExpandableSidebarAddForm = function (_Component) {
	(0, _inherits3.default)(ExpandableSidebarAddForm, _Component);

	function ExpandableSidebarAddForm() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ExpandableSidebarAddForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ExpandableSidebarAddForm.__proto__ || (0, _getPrototypeOf2.default)(ExpandableSidebarAddForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			isAdding: false
		}, _this.toggleAdd = function () {
			if (!_this.state.isAdding) {
				_this.refs.menuAddInput.focus();
				_this.props.onAddClick();
			}
			_this.setState({ isAdding: !_this.state.isAdding });
		}, _this.handleAddKeyDown = function (event) {
			var inputValue = _this.refs.menuAddInput.value;
			if (event.keyCode === 13 && inputValue.length > 0) {
				event.preventDefault();
				_this.props.onAddSubmit(inputValue);
				_this.refs.menuAddInput.value = '';
				_this.toggleAdd();
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ExpandableSidebarAddForm, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    addLabel = _props.addLabel,
			    addPlaceholder = _props.addPlaceholder;

			var classes = (0, _classnames2.default)('sidebar__menu-add-item', {
				'is-add-open': this.state.isAdding
			});
			return _react2.default.createElement(
				'div',
				{ className: classes },
				this.props.hideAddButton ? null : _react2.default.createElement(
					_button2.default,
					{ compact: true, className: 'sidebar__menu-add-button', onClick: this.toggleAdd },
					translate('Add')
				),
				_react2.default.createElement(
					'div',
					{ className: 'sidebar__menu-add' },
					_react2.default.createElement('input', {
						'aria-label': addLabel,
						className: 'sidebar__menu-add-input',
						type: 'text',
						placeholder: addPlaceholder,
						ref: 'menuAddInput',
						onKeyDown: this.handleAddKeyDown
					}),
					_react2.default.createElement(_gridicons2.default, { icon: 'cross-small', onClick: this.toggleAdd })
				)
			);
		}
	}]);
	return ExpandableSidebarAddForm;
}(_react.Component);

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */


ExpandableSidebarAddForm.propTypes = {
	addLabel: _react.PropTypes.string,
	addPlaceholder: _react.PropTypes.string,
	onAddSubmit: _react.PropTypes.func,
	onAddClick: _react.PropTypes.func,
	hideAddButton: _react.PropTypes.bool,
	translate: _react.PropTypes.func
};
ExpandableSidebarAddForm.defaultProps = {
	onAddSubmit: _noop3.default,
	onAddClick: _noop3.default,
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(ExpandableSidebarAddForm);

/***/ }),

/***/ "./client/reader/sidebar/expandable-heading.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _heading = __webpack_require__("./client/layout/sidebar/heading.jsx");

var _heading2 = _interopRequireDefault(_heading);

var _count = __webpack_require__("./client/components/count/index.jsx");

var _count2 = _interopRequireDefault(_count);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/** @format */
/**
 * External dependencies
 */
var ExpandableSidebarHeading = function ExpandableSidebarHeading(_ref) {
	var title = _ref.title,
	    count = _ref.count,
	    onClick = _ref.onClick;
	return _react2.default.createElement(
		_heading2.default,
		{ onClick: onClick },
		_react2.default.createElement(_gridicons2.default, { icon: 'chevron-down' }),
		_react2.default.createElement(
			'span',
			null,
			title
		),
		_react2.default.createElement(_count2.default, { count: count })
	);
};

ExpandableSidebarHeading.propTypes = {
	title: _react2.default.PropTypes.string.isRequired,
	count: _react2.default.PropTypes.number,
	onClick: _react2.default.PropTypes.func
};

ExpandableSidebarHeading.defaultProps = {
	onClick: _noop3.default
};

exports.default = ExpandableSidebarHeading;
module.exports = exports['default'];

/***/ }),

/***/ "./client/reader/sidebar/expandable.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ExpandableSidebarMenu = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _menu = __webpack_require__("./client/layout/sidebar/menu.jsx");

var _menu2 = _interopRequireDefault(_menu);

var _expandableHeading = __webpack_require__("./client/reader/sidebar/expandable-heading.jsx");

var _expandableHeading2 = _interopRequireDefault(_expandableHeading);

var _expandableAddForm = __webpack_require__("./client/reader/sidebar/expandable-add-form.jsx");

var _expandableAddForm2 = _interopRequireDefault(_expandableAddForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandableSidebarMenu = exports.ExpandableSidebarMenu = function ExpandableSidebarMenu(props) {
	var className = props.className,
	    expanded = props.expanded,
	    title = props.title,
	    count = props.count,
	    onClick = props.onClick,
	    hideAddButton = props.hideAddButton,
	    addLabel = props.addLabel,
	    addPlaceholder = props.addPlaceholder,
	    onAddClick = props.onAddClick,
	    onAddSubmit = props.onAddSubmit;

	var classes = (0, _classnames2.default)(className, {
		'is-toggle-open': !!expanded,
		'is-togglable': true
	});
	return _react2.default.createElement(
		_menu2.default,
		{ className: classes },
		_react2.default.createElement(_expandableHeading2.default, { title: title, count: count, onClick: onClick }),
		_react2.default.createElement(_expandableAddForm2.default, {
			hideAddButton: hideAddButton,
			addLabel: addLabel,
			addPlaceholder: addPlaceholder,
			onAddClick: onAddClick,
			onAddSubmit: onAddSubmit
		}),
		_react2.default.createElement(
			'ul',
			{ className: 'sidebar__menu-list' },
			props.children
		)
	);
};

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */


ExpandableSidebarMenu.propTypes = {
	title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]).isRequired,
	count: _react2.default.PropTypes.number,
	addLabel: _react2.default.PropTypes.string,
	addPlaceholder: _react2.default.PropTypes.string,
	onAddSubmit: _react2.default.PropTypes.func,
	onAddClick: _react2.default.PropTypes.func,
	onClick: _react2.default.PropTypes.func,
	hideAddButton: _react2.default.PropTypes.bool
};

ExpandableSidebarMenu.defaultProps = {
	expanded: false,
	hideAddButton: false
};

exports.default = ExpandableSidebarMenu;

/***/ }),

/***/ "./client/reader/sidebar/helper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pathStartsWithOneOf = exports.itemLinkClassStartsWithOneOf = exports.itemLinkClass = undefined;

var _startsWith2 = __webpack_require__("./node_modules/lodash/startsWith.js");

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exported = {
	itemLinkClass: function itemLinkClass(path, currentPath, additionalClasses) {
		var basePathLowerCase = decodeURIComponent(currentPath).split('?')[0].replace(/\/manage$/, '').toLowerCase(),
		    pathLowerCase = decodeURIComponent(path).replace(/\/manage$/, '').toLowerCase();

		var selected = basePathLowerCase === pathLowerCase,
		    isActionButtonSelected = false;

		// Following is a special case, because it can be at / or /following
		if (pathLowerCase === '/' && !selected) {
			selected = '/following' === basePathLowerCase;
		}

		// Are we on the manage page?
		var pathWithoutQueryString = currentPath.split('?')[0];
		if (selected && !!pathWithoutQueryString.match(/\/manage$/)) {
			isActionButtonSelected = true;
		}

		return (0, _classnames2.default)((0, _assign3.default)({ selected: selected, 'is-action-button-selected': isActionButtonSelected }, additionalClasses));
	},

	itemLinkClassStartsWithOneOf: function itemLinkClassStartsWithOneOf(paths, currentPath, additionalClasses) {
		var selected = this.pathStartsWithOneOf(paths, currentPath);
		return (0, _classnames2.default)((0, _assign3.default)({ selected: selected }, additionalClasses));
	},

	pathStartsWithOneOf: function pathStartsWithOneOf(paths, currentPath) {
		return (0, _some3.default)(paths, function (path) {
			return (0, _startsWith3.default)(currentPath.toLowerCase(), path.toLowerCase());
		});
	}
}; /** @format */
/**
 * External dependencies
 */
exports.default = exported;
var itemLinkClass = exported.itemLinkClass,
    itemLinkClassStartsWithOneOf = exported.itemLinkClassStartsWithOneOf,
    pathStartsWithOneOf = exported.pathStartsWithOneOf;
exports.itemLinkClass = itemLinkClass;
exports.itemLinkClassStartsWithOneOf = itemLinkClassStartsWithOneOf;
exports.pathStartsWithOneOf = pathStartsWithOneOf;

/***/ }),

/***/ "./client/reader/sidebar/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.shouldRenderAppPromo = exports.ReaderSidebar = undefined;

var _every2 = __webpack_require__("./node_modules/lodash/every.js");

var _every3 = _interopRequireDefault(_every2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _startsWith2 = __webpack_require__("./node_modules/lodash/startsWith.js");

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _defer2 = __webpack_require__("./node_modules/lodash/defer.js");

var _defer3 = _interopRequireDefault(_defer2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__("./node_modules/create-react-class/index.js");

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _componentClosest = __webpack_require__("./node_modules/component-closest/index.js");

var _componentClosest2 = _interopRequireDefault(_componentClosest);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _url = __webpack_require__("./node_modules/url/url.js");

var _url2 = _interopRequireDefault(_url);

var _redux = __webpack_require__("./node_modules/redux/lib/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _store = __webpack_require__("./node_modules/store/store.js");

var _store2 = _interopRequireDefault(_store);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _lists = __webpack_require__("./client/lib/reader-lists/lists.js");

var _lists2 = _interopRequireDefault(_lists);

var _sidebar = __webpack_require__("./client/layout/sidebar/index.jsx");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _footer = __webpack_require__("./client/layout/sidebar/footer.jsx");

var _footer2 = _interopRequireDefault(_footer);

var _heading = __webpack_require__("./client/layout/sidebar/heading.jsx");

var _heading2 = _interopRequireDefault(_heading);

var _menu = __webpack_require__("./client/layout/sidebar/menu.jsx");

var _menu2 = _interopRequireDefault(_menu);

var _region = __webpack_require__("./client/layout/sidebar/region.jsx");

var _region2 = _interopRequireDefault(_region);

var _helper = __webpack_require__("./client/reader/discover/helper.js");

var _readerSidebarTags = __webpack_require__("./client/reader/sidebar/reader-sidebar-tags/index.jsx");

var _readerSidebarTags2 = _interopRequireDefault(_readerSidebarTags);

var _readerSidebarLists = __webpack_require__("./client/reader/sidebar/reader-sidebar-lists/index.jsx");

var _readerSidebarLists2 = _interopRequireDefault(_readerSidebarLists);

var _readerSidebarTeams = __webpack_require__("./client/reader/sidebar/reader-sidebar-teams/index.jsx");

var _readerSidebarTeams2 = _interopRequireDefault(_readerSidebarTeams);

var _helper2 = __webpack_require__("./client/reader/sidebar/helper.js");

var _helper3 = _interopRequireDefault(_helper2);

var _actions = __webpack_require__("./client/state/ui/reader/sidebar/actions.js");

var _selectors = __webpack_require__("./client/state/reader/lists/selectors.js");

var _getReaderTeams = __webpack_require__("./client/state/selectors/get-reader-teams.js");

var _getReaderTeams2 = _interopRequireDefault(_getReaderTeams);

var _queryReaderLists = __webpack_require__("./client/components/data/query-reader-lists/index.jsx");

var _queryReaderLists2 = _interopRequireDefault(_queryReaderLists);

var _queryReaderTeams = __webpack_require__("./client/components/data/query-reader-teams/index.jsx");

var _queryReaderTeams2 = _interopRequireDefault(_queryReaderTeams);

var _dataObserve = __webpack_require__("./client/lib/mixins/data-observe/index.js");

var _dataObserve2 = _interopRequireDefault(_dataObserve);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _userSettings = __webpack_require__("./client/lib/user-settings/index.js");

var _userSettings2 = _interopRequireDefault(_userSettings);

var _appPromo = __webpack_require__("./client/blocks/app-promo/index.jsx");

var _appPromo2 = _interopRequireDefault(_appPromo);

var _actions2 = __webpack_require__("./client/state/ui/layout-focus/actions.js");

var _utils = __webpack_require__("./client/lib/user/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _viewport = __webpack_require__("./client/lib/viewport/index.js");

var _viewport2 = _interopRequireDefault(_viewport);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _route = __webpack_require__("./client/reader/route/index.js");

var _teams = __webpack_require__("./client/reader/lib/teams/index.js");

var _stats = __webpack_require__("./client/reader/stats.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
/**
 * External dependencies
 */
var ReaderSidebar = exports.ReaderSidebar = (0, _createReactClass2.default)({
	displayName: 'ReaderSidebar',
	mixins: [(0, _dataObserve2.default)('userSettings')],

	getInitialState: function getInitialState() {
		return {};
	},
	componentDidMount: function componentDidMount() {
		// If we're browsing a tag or list, open the sidebar menu
		this.openExpandableMenuForCurrentTagOrList();
	},
	handleClick: function handleClick(event) {
		if (!event.isDefaultPrevented() && (0, _componentClosest2.default)(event.target, 'a,span', true)) {
			this.props.setNextLayoutFocus('content');
			window.scrollTo(0, 0);
		}
	},
	highlightNewList: function highlightNewList(list) {
		list = _lists2.default.get(list.owner, list.slug);
		window.location.href = _url2.default.resolve('https://wordpress.com', list.URL + '/edit');
	},
	highlightNewTag: function highlightNewTag(tagSlug) {
		var tagStreamUrl = (0, _route.getTagStreamUrl)(tagSlug);
		if (tagStreamUrl !== _page2.default.current) {
			(0, _defer3.default)(function () {
				(0, _page2.default)(tagStreamUrl);
				window.scrollTo(0, 0);
			});
		}
	},
	openExpandableMenuForCurrentTagOrList: function openExpandableMenuForCurrentTagOrList() {
		var pathParts = this.props.path.split('/');

		if ((0, _startsWith3.default)(this.props.path, '/tag/')) {
			var tagSlug = pathParts[2];
			if (tagSlug) {
				// Open the sidebar
				if (!this.props.isTagsOpen) {
					this.props.toggleTagsVisibility();
					this.setState({ currentTag: tagSlug });
				}
			}
		}

		if ((0, _startsWith3.default)(this.props.path, '/read/list/')) {
			var listOwner = pathParts[3];
			var listSlug = pathParts[4];
			if (listOwner && listSlug) {
				// Open the sidebar
				if (!this.props.isListsOpen) {
					this.props.toggleListsVisibility();
					this.setState({ currentListOwner: listOwner, currentListSlug: listSlug });
				}
			}
		}
	},
	handleReaderSidebarFollowedSitesClicked: function handleReaderSidebarFollowedSitesClicked() {
		(0, _stats.recordAction)('clicked_reader_sidebar_followed_sites');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar Followed Sites');
		(0, _stats.recordTrack)('calypso_reader_sidebar_followed_sites_clicked');
	},
	handleReaderSidebarFollowManageClicked: function handleReaderSidebarFollowManageClicked() {
		(0, _stats.recordAction)('clicked_reader_sidebar_follow_manage');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar Follow Manage');
		(0, _stats.recordTrack)('calypso_reader_sidebar_follow_manage_clicked');
	},
	handleReaderSidebarConversationsClicked: function handleReaderSidebarConversationsClicked() {
		(0, _stats.recordAction)('clicked_reader_sidebar_conversations');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar Conversations');
		(0, _stats.recordTrack)('calypso_reader_sidebar_conversations_clicked');
	},
	handleReaderSidebarA8cConversationsClicked: function handleReaderSidebarA8cConversationsClicked() {
		(0, _stats.recordAction)('clicked_reader_sidebar_a8c_conversations');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar A8C Conversations');
		(0, _stats.recordTrack)('calypso_reader_sidebar_a8c_conversations_clicked');
	},
	handleReaderSidebarDiscoverClicked: function handleReaderSidebarDiscoverClicked() {
		(0, _stats.recordAction)('clicked_reader_sidebar_discover');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar Discover');
		(0, _stats.recordTrack)('calypso_reader_sidebar_discover_clicked');
	},
	handleReaderSidebarSearchClicked: function handleReaderSidebarSearchClicked() {
		(0, _stats.recordAction)('clicked_reader_sidebar_search');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar Search');
		(0, _stats.recordTrack)('calypso_reader_sidebar_search_clicked');
	},
	handleReaderSidebarLikeActivityClicked: function handleReaderSidebarLikeActivityClicked() {
		(0, _stats.recordAction)('clicked_reader_sidebar_like_activity');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar Like Activity');
		(0, _stats.recordTrack)('calypso_reader_sidebar_like_activity_clicked');
	},
	render: function render() {
		/* eslint-disable wpcalypso/jsx-classname-namespace,max-len */
		return _react2.default.createElement(
			_sidebar2.default,
			{ onClick: this.handleClick },
			_react2.default.createElement(
				_region2.default,
				null,
				_react2.default.createElement(
					_menu2.default,
					null,
					_react2.default.createElement(
						_heading2.default,
						null,
						this.props.translate('Streams')
					),
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							{
								className: _helper3.default.itemLinkClass('/', this.props.path, {
									'sidebar-streams__following': true
								})
							},
							_react2.default.createElement(
								'a',
								{ href: '/', onClick: this.handleReaderSidebarFollowedSitesClicked },
								_react2.default.createElement(_gridicons2.default, { icon: 'checkmark-circle', size: 24 }),
								_react2.default.createElement(
									'span',
									{ className: 'menu-link-text' },
									this.props.translate('Followed Sites')
								)
							),
							_react2.default.createElement(
								'a',
								{
									href: '/following/manage',
									onClick: this.handleReaderSidebarFollowManageClicked,
									className: 'sidebar__button'
								},
								this.props.translate('Manage')
							)
						),
						_config2.default.isEnabled('reader/conversations') && _react2.default.createElement(
							'li',
							{
								className: _helper3.default.itemLinkClass('/read/conversations', this.props.path, {
									'sidebar-streams__conversations': true
								})
							},
							_react2.default.createElement(
								'a',
								{
									href: '/read/conversations',
									onClick: this.handleReaderSidebarConversationsClicked
								},
								_react2.default.createElement(_gridicons2.default, { icon: 'chat', size: 24 }),
								_react2.default.createElement(
									'span',
									{ className: 'menu-link-text' },
									this.props.translate('Conversations')
								)
							)
						),
						_react2.default.createElement(_readerSidebarTeams2.default, { teams: this.props.teams, path: this.props.path }),
						_config2.default.isEnabled('reader/conversations') && (0, _teams.isAutomatticTeamMember)(this.props.teams) && _react2.default.createElement(
							'li',
							{
								className: _helper3.default.itemLinkClass('/read/conversations/a8c', this.props.path, {
									'sidebar-streams__conversations': true
								})
							},
							_react2.default.createElement(
								'a',
								{
									href: '/read/conversations/a8c',
									onClick: this.handleReaderSidebarA8cConversationsClicked
								},
								_react2.default.createElement(
									'svg',
									{
										className: 'gridicon gridicon-automattic-conversations',
										width: '24',
										height: '24',
										xmlns: 'http://www.w3.org/2000/svg',
										viewBox: '0 0 24 24'
									},
									_react2.default.createElement('path', { d: 'M12.2 7.1c.5.3.6 1 .3 1.4L10 12.4c-.3.5-1 .7-1.4.3-.6-.3-.8-1-.4-1.5l2.5-3.9c.3-.4 1-.5 1.5-.2zM17.3 21.2h2.8c1 0 1.9-.8 1.9-1.9v-4.7c0-1-.8-1.9-1.9-1.9h-7.6c-1 .1-1.7.9-1.7 1.9v4.7c0 1 .8 1.8 1.7 1.9h2V24l2.8-2.8z' }),
									_react2.default.createElement('path', { d: 'M8.8 15.2c-2.7-.7-4.1-2.9-4.1-5.2 0-5.8 5.8-5.7 5.8-5.7 5.8 0 5.8 5.7 5.8 5.7 0 .3 0 .6-.1.8H19v-.7C19 1.6 10.4 2 10.4 2c-8.6 0-8.5 8.1-8.5 8.1 0 3.5 2.7 6.8 6.9 7.5v-2.4z' })
								),
								_react2.default.createElement(
									'span',
									{ className: 'menu-link-text' },
									'A8C Conversations'
								)
							)
						),
						(0, _helper.isDiscoverEnabled)() ? _react2.default.createElement(
							'li',
							{
								className: _helper3.default.itemLinkClass('/discover', this.props.path, {
									'sidebar-streams__discover': true
								})
							},
							_react2.default.createElement(
								'a',
								{ href: '/discover', onClick: this.handleReaderSidebarDiscoverClicked },
								_react2.default.createElement(_gridicons2.default, { icon: 'my-sites' }),
								_react2.default.createElement(
									'span',
									{ className: 'menu-link-text' },
									this.props.translate('Discover')
								)
							)
						) : null,
						_config2.default.isEnabled('reader/search') && _react2.default.createElement(
							'li',
							{
								className: _helper3.default.itemLinkClass('/read/search', this.props.path, {
									'sidebar-streams__search': true
								})
							},
							_react2.default.createElement(
								'a',
								{ href: '/read/search', onClick: this.handleReaderSidebarSearchClicked },
								_react2.default.createElement(_gridicons2.default, { icon: 'search', size: 24 }),
								_react2.default.createElement(
									'span',
									{ className: 'menu-link-text' },
									this.props.translate('Search')
								)
							)
						),
						_react2.default.createElement(
							'li',
							{
								className: _helper3.default.itemLinkClass('/activities/likes', this.props.path, { 'sidebar-activity__likes': true })
							},
							_react2.default.createElement(
								'a',
								{ href: '/activities/likes', onClick: this.handleReaderSidebarLikeActivityClicked },
								_react2.default.createElement(_gridicons2.default, { icon: 'star', size: 24 }),
								_react2.default.createElement(
									'span',
									{ className: 'menu-link-text' },
									this.props.translate('My Likes')
								)
							)
						)
					)
				),
				_react2.default.createElement(_queryReaderLists2.default, null),
				_react2.default.createElement(_queryReaderTeams2.default, null),
				this.props.subscribedLists && this.props.subscribedLists.length ? _react2.default.createElement(_readerSidebarLists2.default, {
					lists: this.props.subscribedLists,
					path: this.props.path,
					isOpen: this.props.isListsOpen,
					onClick: this.props.toggleListsVisibility,
					currentListOwner: this.state.currentListOwner,
					currentListSlug: this.state.currentListSlug
				}) : null,
				_react2.default.createElement(_readerSidebarTags2.default, {
					tags: this.props.followedTags,
					path: this.props.path,
					isOpen: this.props.isTagsOpen,
					onClick: this.props.toggleTagsVisibility,
					onFollowTag: this.highlightNewTag,
					currentTag: this.state.currentTag
				})
			),
			this.props.shouldRenderAppPromo && _react2.default.createElement(
				'div',
				{ className: 'sidebar__app-promo' },
				_react2.default.createElement(_appPromo2.default, { location: 'reader', locale: _utils2.default.getLocaleSlug() })
			),
			_react2.default.createElement(_footer2.default, null)
		);
		/* eslint-enable wpcalypso/jsx-classname-namespace,max-len */
	}
});

/**
 * Internal Dependencies
 */


ReaderSidebar.defaultProps = {
	translate: _identity3.default
};

var shouldRenderAppPromo = exports.shouldRenderAppPromo = function shouldRenderAppPromo() {
	var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	// Until the user settings have loaded we'll indicate the user is is a
	// desktop app user because until the user settings have loaded
	// userSettings.getSetting( 'is_desktop_app_user' ) will return false which
	// makes the app think the user isn't a desktop app user for a few seconds
	// resulting in the AppPromo potentially flashing in then out as soon as
	// the user settings does properly indicate that the user is one.
	var haveUserSettingsLoaded = _userSettings2.default.getSetting(' is_desktop_app_user') === null;
	var _options$isDesktopPro = options.isDesktopPromoDisabled,
	    isDesktopPromoDisabled = _options$isDesktopPro === undefined ? _store2.default.get('desktop_promo_disabled') : _options$isDesktopPro,
	    _options$isViewportMo = options.isViewportMobile,
	    isViewportMobile = _options$isViewportMo === undefined ? _viewport2.default.isMobile() : _options$isViewportMo,
	    _options$isUserLocale = options.isUserLocaleEnglish,
	    isUserLocaleEnglish = _options$isUserLocale === undefined ? 'en' === _utils2.default.getLocaleSlug() : _options$isUserLocale,
	    _options$isDesktopPro2 = options.isDesktopPromoConfiguredToRun,
	    isDesktopPromoConfiguredToRun = _options$isDesktopPro2 === undefined ? _config2.default.isEnabled('desktop-promo') : _options$isDesktopPro2,
	    _options$isUserDeskto = options.isUserDesktopAppUser,
	    isUserDesktopAppUser = _options$isUserDeskto === undefined ? haveUserSettingsLoaded || _userSettings2.default.getSetting('is_desktop_app_user') : _options$isUserDeskto,
	    _options$isUserOnChro = options.isUserOnChromeOs,
	    isUserOnChromeOs = _options$isUserOnChro === undefined ? /\bCrOS\b/.test(navigator.userAgent) : _options$isUserOnChro;


	return (0, _every3.default)([!isDesktopPromoDisabled, isUserLocaleEnglish, !isViewportMobile, !isUserOnChromeOs, isDesktopPromoConfiguredToRun, !isUserDesktopAppUser]);
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		isListsOpen: state.ui.reader.sidebar.isListsOpen,
		isTagsOpen: state.ui.reader.sidebar.isTagsOpen,
		subscribedLists: (0, _selectors.getSubscribedLists)(state),
		shouldRenderAppPromo: shouldRenderAppPromo(),
		teams: (0, _getReaderTeams2.default)(state)
	};
}, function (dispatch) {
	return (0, _redux.bindActionCreators)({
		toggleListsVisibility: _actions.toggleReaderSidebarLists,
		toggleTagsVisibility: _actions.toggleReaderSidebarTags,
		setNextLayoutFocus: _actions2.setNextLayoutFocus
	}, dispatch);
})((0, _i18nCalypso.localize)(ReaderSidebar));

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-lists/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarLists = undefined;

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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _expandable = __webpack_require__("./client/reader/sidebar/expandable.jsx");

var _expandable2 = _interopRequireDefault(_expandable);

var _list = __webpack_require__("./client/reader/sidebar/reader-sidebar-lists/list.jsx");

var _list2 = _interopRequireDefault(_list);

var _actions = __webpack_require__("./client/lib/reader-lists/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _stats = __webpack_require__("./client/reader/stats.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */
var ReaderSidebarLists = exports.ReaderSidebarLists = function (_Component) {
	(0, _inherits3.default)(ReaderSidebarLists, _Component);

	function ReaderSidebarLists() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ReaderSidebarLists);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReaderSidebarLists.__proto__ || (0, _getPrototypeOf2.default)(ReaderSidebarLists)).call.apply(_ref, [this].concat(args))), _this), _this.createList = function (list) {
			(0, _stats.recordAction)('add_list');
			(0, _stats.recordGaEvent)('Clicked Create List');
			(0, _stats.recordTrack)('calypso_reader_create_list_clicked');
			_actions2.default.create(list);
		}, _this.handleAddClick = function () {
			(0, _stats.recordAction)('add_list_open_input');
			(0, _stats.recordGaEvent)('Clicked Add List to Open Input');
			(0, _stats.recordTrack)('calypso_reader_add_list_clicked');
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ReaderSidebarLists, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    lists = _props.lists,
			    count = _props.count,
			    isOpen = _props.isOpen,
			    onClick = _props.onClick;

			var listCount = lists ? lists.length : 0;
			var shouldHideAddButton = !count;
			return _react2.default.createElement(
				_expandable2.default,
				{
					expanded: isOpen,
					title: translate('Lists'),
					count: listCount,
					addLabel: translate('New list name'),
					addPlaceholder: translate('Give your list a name'),
					onAddClick: this.handleAddClick,
					onAddSubmit: this.createList,
					onClick: onClick,
					hideAddButton: shouldHideAddButton
				},
				_react2.default.createElement(_list2.default, this.props)
			);
		}
	}]);
	return ReaderSidebarLists;
}(_react.Component);

ReaderSidebarLists.propTypes = {
	lists: _react.PropTypes.array,
	path: _react.PropTypes.string.isRequired,
	isOpen: _react.PropTypes.bool,
	onClick: _react.PropTypes.func,
	currentListOwner: _react.PropTypes.string,
	currentListSlug: _react.PropTypes.string,
	translate: _react.PropTypes.func
};
ReaderSidebarLists.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(ReaderSidebarLists);

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-lists/list-item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarListsListItem = undefined;

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

var _last2 = __webpack_require__("./node_modules/lodash/last.js");

var _last3 = _interopRequireDefault(_last2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _helper = __webpack_require__("./client/reader/sidebar/helper.js");

var _helper2 = _interopRequireDefault(_helper);

var _stats = __webpack_require__("./client/reader/stats.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */
var ReaderSidebarListsListItem = exports.ReaderSidebarListsListItem = function (_Component) {
	(0, _inherits3.default)(ReaderSidebarListsListItem, _Component);

	function ReaderSidebarListsListItem() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ReaderSidebarListsListItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReaderSidebarListsListItem.__proto__ || (0, _getPrototypeOf2.default)(ReaderSidebarListsListItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleListSidebarClick = function () {
			(0, _stats.recordAction)('clicked_reader_sidebar_list_item');
			(0, _stats.recordGaEvent)('Clicked Reader Sidebar List Item');
			(0, _stats.recordTrack)('calypso_reader_sidebar_list_item_clicked', {
				list: decodeURIComponent(_this.props.list.slug)
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ReaderSidebarListsListItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// Scroll to the current list
			if (this.props.list.slug === this.props.currentListSlug && this.props.list.owner === this.props.currentListOwner) {
				var node = _reactDom2.default.findDOMNode(this);
				node.scrollIntoView();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    list = _props.list,
			    translate = _props.translate;

			var listRelativeUrl = '/read/list/' + list.owner + '/' + list.slug;
			var listManagementUrls = [listRelativeUrl + '/tags', listRelativeUrl + '/edit', listRelativeUrl + '/sites'];

			var lastPathSegment = (0, _last3.default)(this.props.path.split('/'));
			var isCurrentList = lastPathSegment && lastPathSegment.toLowerCase() === list.slug.toLowerCase() && _helper2.default.pathStartsWithOneOf([listRelativeUrl], this.props.path);
			var isActionButtonSelected = _helper2.default.pathStartsWithOneOf(listManagementUrls, this.props.path);

			var classes = (0, _classnames2.default)({
				selected: isCurrentList || isActionButtonSelected
			});

			/* eslint-disable wpcalypso/jsx-classname-namespace */
			return _react2.default.createElement(
				'li',
				{ className: classes, key: list.ID },
				_react2.default.createElement(
					'a',
					{
						className: 'sidebar__menu-item-label',
						href: listRelativeUrl,
						onClick: this.handleListSidebarClick,
						title: translate("View list '%(currentListName)s'", {
							args: {
								currentListName: list.title
							}
						})
					},
					_react2.default.createElement(
						'div',
						{ className: 'sidebar__menu-item-listname' },
						list.title
					)
				)
			);
			/* eslint-enable wpcalypso/jsx-classname-namespace */
		}
	}]);
	return ReaderSidebarListsListItem;
}(_react.Component);

ReaderSidebarListsListItem.propTypes = {
	list: _react2.default.PropTypes.object.isRequired,
	path: _react2.default.PropTypes.string.isRequired,
	currentListOwner: _react2.default.PropTypes.string,
	currentListSlug: _react2.default.PropTypes.string
};
exports.default = (0, _i18nCalypso.localize)(ReaderSidebarListsListItem);

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-lists/list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarListsList = undefined;

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

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _listItem = __webpack_require__("./client/reader/sidebar/reader-sidebar-lists/list-item.jsx");

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReaderSidebarListsList = exports.ReaderSidebarListsList = function (_React$Component) {
	(0, _inherits3.default)(ReaderSidebarListsList, _React$Component);

	function ReaderSidebarListsList() {
		(0, _classCallCheck3.default)(this, ReaderSidebarListsList);
		return (0, _possibleConstructorReturn3.default)(this, (ReaderSidebarListsList.__proto__ || (0, _getPrototypeOf2.default)(ReaderSidebarListsList)).apply(this, arguments));
	}

	(0, _createClass3.default)(ReaderSidebarListsList, [{
		key: 'renderItems',
		value: function renderItems() {
			var _props = this.props,
			    currentListOwner = _props.currentListOwner,
			    currentListSlug = _props.currentListSlug,
			    path = _props.path;

			return (0, _map3.default)(this.props.lists, function (list) {
				return _react2.default.createElement(_listItem2.default, {
					key: list.ID,
					list: list,
					path: path,
					currentListOwner: currentListOwner,
					currentListSlug: currentListSlug
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    translate = _props2.translate,
			    lists = _props2.lists;

			if (!lists || lists.length === 0) {
				return _react2.default.createElement(
					'li',
					{ key: 'empty', className: 'sidebar__menu-empty' },
					translate('Collect sites together by adding a list.')
				);
			}

			return _react2.default.createElement(
				'div',
				null,
				this.renderItems()
			);
		}
	}]);
	return ReaderSidebarListsList;
}(_react2.default.Component);

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */


ReaderSidebarListsList.propTypes = {
	lists: _react2.default.PropTypes.array,
	path: _react2.default.PropTypes.string.isRequired,
	currentListOwner: _react2.default.PropTypes.string,
	currentListSlug: _react2.default.PropTypes.string,
	translate: _react2.default.PropTypes.func
};
ReaderSidebarListsList.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(ReaderSidebarListsList);

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-tags/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarTags = undefined;

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

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _componentClosest = __webpack_require__("./node_modules/component-closest/index.js");

var _componentClosest2 = _interopRequireDefault(_componentClosest);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _expandable = __webpack_require__("./client/reader/sidebar/expandable.jsx");

var _expandable2 = _interopRequireDefault(_expandable);

var _list = __webpack_require__("./client/reader/sidebar/reader-sidebar-tags/list.jsx");

var _list2 = _interopRequireDefault(_list);

var _queryReaderFollowedTags = __webpack_require__("./client/components/data/query-reader-followed-tags/index.jsx");

var _queryReaderFollowedTags2 = _interopRequireDefault(_queryReaderFollowedTags);

var _getReaderFollowedTags = __webpack_require__("./client/state/selectors/get-reader-followed-tags.js");

var _getReaderFollowedTags2 = _interopRequireDefault(_getReaderFollowedTags);

var _actions = __webpack_require__("./client/state/reader/tags/items/actions.js");

var _stats = __webpack_require__("./client/reader/stats.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */
var ReaderSidebarTags = exports.ReaderSidebarTags = function (_Component) {
	(0, _inherits3.default)(ReaderSidebarTags, _Component);

	function ReaderSidebarTags() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ReaderSidebarTags);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReaderSidebarTags.__proto__ || (0, _getPrototypeOf2.default)(ReaderSidebarTags)).call.apply(_ref, [this].concat(args))), _this), _this.followTag = function (tag) {
			_this.props.followTag(decodeURIComponent(tag));
			(0, _stats.recordAction)('followed_topic');
			(0, _stats.recordGaEvent)('Clicked Follow Topic', tag);
			(0, _stats.recordTrack)('calypso_reader_reader_tag_followed', {
				tag: tag
			});
			_this.props.onFollowTag(tag);
		}, _this.unfollowTag = function (event) {
			var node = (0, _componentClosest2.default)(event.target, '[data-tag-slug]', true);
			event.preventDefault();
			var slug = node && node.dataset && node.dataset.tagSlug;
			if (slug) {
				(0, _stats.recordAction)('unfollowed_topic');
				(0, _stats.recordGaEvent)('Clicked Unfollow Topic', slug);
				(0, _stats.recordTrack)('calypso_reader_reader_tag_unfollowed', {
					tag: slug
				});
				_this.props.unfollowTag(decodeURIComponent(slug));
			}
		}, _this.handleAddClick = function () {
			(0, _stats.recordAction)('follow_topic_open_input');
			(0, _stats.recordGaEvent)('Clicked Add Topic to Open Input');
			(0, _stats.recordTrack)('calypso_reader_add_tag_clicked');
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ReaderSidebarTags, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    tags = _props.tags,
			    isOpen = _props.isOpen,
			    translate = _props.translate,
			    onClick = _props.onClick;

			var tagCount = tags ? tags.length : 0;
			return _react2.default.createElement(
				'div',
				null,
				!this.props.tags && _react2.default.createElement(_queryReaderFollowedTags2.default, null),
				_react2.default.createElement(
					_expandable2.default,
					{
						expanded: isOpen,
						title: translate('Tags'),
						count: tagCount,
						addLabel: translate('New tag name'),
						addPlaceholder: translate('Add any tag'),
						onAddSubmit: this.followTag,
						onAddClick: this.handleAddClick,
						onClick: onClick
					},
					_react2.default.createElement(_list2.default, (0, _extends3.default)({}, this.props, { onUnfollow: this.unfollowTag }))
				)
			);
		}
	}]);
	return ReaderSidebarTags;
}(_react.Component);

ReaderSidebarTags.propTypes = {
	tags: _react.PropTypes.array,
	path: _react.PropTypes.string.isRequired,
	isOpen: _react.PropTypes.bool,
	onClick: _react.PropTypes.func,
	currentTag: _react.PropTypes.string,
	onFollowTag: _react.PropTypes.func,
	translate: _react.PropTypes.func
};
ReaderSidebarTags.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		tags: (0, _getReaderFollowedTags2.default)(state)
	};
}, {
	followTag: _actions.requestFollowTag,
	unfollowTag: _actions.requestUnfollowTag
})((0, _i18nCalypso.localize)(ReaderSidebarTags));

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-tags/list-item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarTagsListItem = undefined;

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

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _helper = __webpack_require__("./client/reader/sidebar/helper.js");

var _helper2 = _interopRequireDefault(_helper);

var _stats = __webpack_require__("./client/reader/stats.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */
var ReaderSidebarTagsListItem = exports.ReaderSidebarTagsListItem = function (_Component) {
	(0, _inherits3.default)(ReaderSidebarTagsListItem, _Component);

	function ReaderSidebarTagsListItem() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ReaderSidebarTagsListItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReaderSidebarTagsListItem.__proto__ || (0, _getPrototypeOf2.default)(ReaderSidebarTagsListItem)).call.apply(_ref, [this].concat(args))), _this), _this.handleTagSidebarClick = function () {
			(0, _stats.recordAction)('clicked_reader_sidebar_tag_item');
			(0, _stats.recordGaEvent)('Clicked Reader Sidebar Tag Item');
			(0, _stats.recordTrack)('calypso_reader_sidebar_tag_item_clicked', {
				tag: decodeURIComponent(_this.props.tag.slug)
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ReaderSidebarTagsListItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// Scroll to the current tag
			if (this.props.currentTag && this.props.tag.slug === this.props.currentTag) {
				var node = _reactDom2.default.findDOMNode(this);
				node.scrollIntoView();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    tag = _props.tag,
			    path = _props.path,
			    onUnfollow = _props.onUnfollow,
			    translate = _props.translate;

			var tagName = tag.displayName || tag.slug;

			/* eslint-disable wpcalypso/jsx-classname-namespace */
			return _react2.default.createElement(
				'li',
				{
					key: tag.id,
					className: _helper2.default.itemLinkClass('/tag/' + tag.slug, path, {
						'sidebar-dynamic-menu__tag': true
					})
				},
				_react2.default.createElement(
					'a',
					{
						className: 'sidebar__menu-item-label',
						href: tag.url,
						onClick: this.handleTagSidebarClick,
						title: translate("View tag '%(currentTagName)s'", {
							args: {
								currentTagName: tagName
							}
						})
					},
					_react2.default.createElement(
						'div',
						{ className: 'sidebar__menu-item-tagname' },
						tagName
					)
				),
				tag.id !== 'pending' && _react2.default.createElement(
					'button',
					{
						className: 'sidebar__menu-action',
						'data-tag-slug': tag.slug,
						onClick: onUnfollow,
						title: translate("Unfollow tag '%(currentTagName)s'", {
							args: {
								currentTagName: tagName
							}
						})
					},
					_react2.default.createElement(_gridicons2.default, { icon: 'cross-small' }),
					_react2.default.createElement(
						'span',
						{ className: 'sidebar__menu-action-label' },
						translate('Unfollow')
					)
				)
			);
			/* eslint-enable wpcalypso/jsx-classname-namespace */
		}
	}]);
	return ReaderSidebarTagsListItem;
}(_react.Component);

ReaderSidebarTagsListItem.propTypes = {
	tag: _react2.default.PropTypes.object.isRequired,
	onUnfollow: _react2.default.PropTypes.func.isRequired,
	path: _react2.default.PropTypes.string.isRequired,
	currentTag: _react2.default.PropTypes.string,
	translate: _react2.default.PropTypes.func
};
ReaderSidebarTagsListItem.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(ReaderSidebarTagsListItem);

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-tags/list.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarTagsList = undefined;

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

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _listItem = __webpack_require__("./client/reader/sidebar/reader-sidebar-tags/list-item.jsx");

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReaderSidebarTagsList = exports.ReaderSidebarTagsList = function (_Component) {
	(0, _inherits3.default)(ReaderSidebarTagsList, _Component);

	function ReaderSidebarTagsList() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ReaderSidebarTagsList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ReaderSidebarTagsList.__proto__ || (0, _getPrototypeOf2.default)(ReaderSidebarTagsList)).call.apply(_ref, [this].concat(args))), _this), _this.renderItems = function () {
			var _this$props = _this.props,
			    path = _this$props.path,
			    onUnfollow = _this$props.onUnfollow,
			    currentTag = _this$props.currentTag,
			    tags = _this$props.tags;

			return (0, _map3.default)(tags, function (tag) {
				return _react2.default.createElement(_listItem2.default, {
					key: tag.id,
					tag: tag,
					path: path,
					onUnfollow: onUnfollow,
					currentTag: currentTag
				});
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ReaderSidebarTagsList, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    tags = _props.tags,
			    translate = _props.translate;

			if (!tags || tags.length === 0) {
				return _react2.default.createElement(
					'li',
					{ key: 'empty', className: 'sidebar__menu-empty' },
					translate('Find relevant posts by adding a tag.')
				);
			}

			return _react2.default.createElement(
				'div',
				null,
				this.renderItems()
			);
		}
	}]);
	return ReaderSidebarTagsList;
}(_react.Component);

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */


ReaderSidebarTagsList.propTypes = {
	tags: _react2.default.PropTypes.array,
	onUnfollow: _react2.default.PropTypes.func.isRequired,
	path: _react2.default.PropTypes.string.isRequired,
	currentTag: _react2.default.PropTypes.string,
	translate: _react2.default.PropTypes.func
};
ReaderSidebarTagsList.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(ReaderSidebarTagsList);

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-teams/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarTeams = undefined;

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

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _listItem = __webpack_require__("./client/reader/sidebar/reader-sidebar-teams/list-item.jsx");

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
/**
 * External Dependencies
 */
var renderItems = function renderItems(teams, path) {
	return (0, _map3.default)(teams, function (team) {
		return _react2.default.createElement(_listItem2.default, { key: team.slug, team: team, path: path });
	});
};

/**
 * Internal Dependencies
 */

var ReaderSidebarTeams = exports.ReaderSidebarTeams = function (_Component) {
	(0, _inherits3.default)(ReaderSidebarTeams, _Component);

	function ReaderSidebarTeams() {
		(0, _classCallCheck3.default)(this, ReaderSidebarTeams);
		return (0, _possibleConstructorReturn3.default)(this, (ReaderSidebarTeams.__proto__ || (0, _getPrototypeOf2.default)(ReaderSidebarTeams)).apply(this, arguments));
	}

	(0, _createClass3.default)(ReaderSidebarTeams, [{
		key: 'render',
		value: function render() {
			if (!this.props.teams) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				null,
				renderItems(this.props.teams, this.props.path)
			);
		}
	}]);
	return ReaderSidebarTeams;
}(_react.Component);

ReaderSidebarTeams.propTypes = {
	teams: _react2.default.PropTypes.array,
	path: _react2.default.PropTypes.string.isRequired
};
exports.default = ReaderSidebarTeams;

/***/ }),

/***/ "./client/reader/sidebar/reader-sidebar-teams/list-item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ReaderSidebarTeamsListItem = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _helper = __webpack_require__("./client/reader/sidebar/helper.js");

var _helper2 = _interopRequireDefault(_helper);

var _stats = __webpack_require__("./client/reader/stats.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
/** @format */
/**
 * External Dependencies
 */
var handleReaderSidebarTeamsListItemClicked = function handleReaderSidebarTeamsListItemClicked(team) {
	return function () {
		(0, _stats.recordAction)('clicked_reader_sidebar_teams_list_item');
		(0, _stats.recordGaEvent)('Clicked Reader Sidebar Teams List Item');
		(0, _stats.recordTrack)('calypso_reader_sidebar_teams_list_item_clicked', {
			team: decodeURIComponent(team.slug)
		});
	};
};

var ReaderSidebarTeamsListItem = exports.ReaderSidebarTeamsListItem = function ReaderSidebarTeamsListItem(_ref) {
	var path = _ref.path,
	    team = _ref.team,
	    translate = _ref.translate;

	var teamUri = '/read/' + encodeURIComponent(team.slug);
	/* eslint-disable wpcalypso/jsx-classname-namespace */
	return _react2.default.createElement(
		'li',
		{
			key: team.slug,
			className: _helper2.default.itemLinkClass(teamUri, path, {
				'sidebar-streams__team': true
			})
		},
		_react2.default.createElement(
			'a',
			{
				href: teamUri,
				onClick: handleReaderSidebarTeamsListItemClicked(team),
				title: translate("View team '%(currentTeamName)s'", {
					args: {
						currentTeamName: team.title
					}
				})
			},
			_react2.default.createElement(
				'svg',
				{
					className: 'gridicon gridicon-' + team.slug,
					width: '24',
					height: '24',
					xmlns: 'http://www.w3.org/2000/svg',
					viewBox: '0 0 24 24'
				},
				_react2.default.createElement('path', { d: 'M12 21.5c-6.1 0-10-4.4-10-9V12c0-4.6 4-9 10-9 6.1 0 10.1 4.3 10.1 9v.6c0 4.5-3.9 8.9-10.1 8.9zm6.9-9.5c0-3.3-2.4-6.3-6.8-6.3s-6.8 3-6.8 6.3v.4c0 3.3 2.4 6.4 6.8 6.4s6.8-3 6.8-6.4V12z' }),
				_react2.default.createElement('path', { d: 'M14.1 8.5c.6.4.7 1.2.4 1.7l-2.9 4.6c-.4.6-1.2.8-1.7.4-.7-.4-.9-1.2-.5-1.8l2.9-4.6c.4-.5 1.2-.7 1.8-.3z' })
			),
			_react2.default.createElement(
				'span',
				{ className: 'menu-link-text' },
				team.title
			)
		)
	);
	/* eslint-enable wpcalypso/jsx-classname-namespace */
};

ReaderSidebarTeamsListItem.propTypes = {
	team: _react2.default.PropTypes.object.isRequired,
	path: _react2.default.PropTypes.string.isRequired
};

exports.default = (0, _i18nCalypso.localize)(ReaderSidebarTeamsListItem);

/***/ }),

/***/ "./client/state/reader/lists/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.receiveLists = receiveLists;
exports.requestSubscribedLists = requestSubscribedLists;
exports.requestList = requestList;
exports.followList = followList;
exports.unfollowList = unfollowList;
exports.updateListDetails = updateListDetails;
exports.dismissListNotice = dismissListNotice;
exports.updateTitle = updateTitle;
exports.updateDescription = updateDescription;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action object to signal that list objects have been received.
 *
 * @param  {Array}  lists Lists received
 * @return {Object}       Action object
 */
/** @format */
/**
 * Internal dependencies
 */
function receiveLists(lists) {
	return {
		type: _actionTypes.READER_LISTS_RECEIVE,
		lists: lists
	};
}

/**
 * Triggers a network request to fetch the current user's lists.
 *
 * @return {Function}        Action thunk
 */
function requestSubscribedLists() {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LISTS_REQUEST
		});

		return new _promise2.default(function (resolve, reject) {
			_wp2.default.undocumented().readLists(function (error, data) {
				error ? reject(error) : resolve(data);
			});
		}).then(function (data) {
			dispatch(receiveLists(data.lists));
			dispatch({
				type: _actionTypes.READER_LISTS_REQUEST_SUCCESS,
				data: data
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.READER_LISTS_REQUEST_FAILURE,
				error: error
			});
		});
	};
}

/**
 * Triggers a network request to fetch a single Reader list.
 *
 * @param  {String}  owner List owner
 * @param  {String}  slug List slug
 * @return {Function}        Action thunk
 */
function requestList(owner, slug) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LIST_REQUEST
		});

		var query = createQuery(owner, slug);

		return new _promise2.default(function (resolve, reject) {
			_wp2.default.undocumented().readList(query, function (error, data) {
				if (error) {
					var errorInfo = {
						error: error,
						owner: owner,
						slug: slug
					};
					reject(errorInfo);
				} else {
					resolve(data);
				}
			});
		}).then(function (data) {
			dispatch({
				type: _actionTypes.READER_LIST_REQUEST_SUCCESS,
				data: data
			});
		}).catch(function (errorInfo) {
			dispatch({
				type: _actionTypes.READER_LIST_REQUEST_FAILURE,
				error: errorInfo.error,
				owner: errorInfo.owner,
				slug: errorInfo.slug
			});
		});
	};
}

/**
 * Triggers a network request to follow a list.
 *
 * @param  {String}  owner List owner
 * @param  {String}  slug List slug
 * @return {Function} Action promise
 */
function followList(owner, slug) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LISTS_FOLLOW,
			owner: owner,
			slug: slug
		});

		var query = createQuery(owner, slug);

		return new _promise2.default(function (resolve, reject) {
			_wp2.default.undocumented().followList(query, function (error, data) {
				error ? reject(error) : resolve(data);
			});
		}).then(function (data) {
			dispatch(receiveLists([data.list]));
			dispatch({
				type: _actionTypes.READER_LISTS_FOLLOW_SUCCESS,
				data: data
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.READER_LISTS_FOLLOW_FAILURE,
				error: error
			});
		});
	};
}

/**
 * Triggers a network request to unfollow a list.
 *
 * @param  {String}  owner List owner
 * @param  {String}  slug List slug
 * @return {Function} Action promise
 */
function unfollowList(owner, slug) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LISTS_UNFOLLOW,
			owner: owner,
			slug: slug
		});

		var query = createQuery(owner, slug);

		return new _promise2.default(function (resolve, reject) {
			_wp2.default.undocumented().unfollowList(query, function (error, data) {
				error ? reject(error) : resolve(data);
			});
		}).then(function (data) {
			dispatch({
				type: _actionTypes.READER_LISTS_UNFOLLOW_SUCCESS,
				data: data
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.READER_LISTS_UNFOLLOW_FAILURE,
				error: error
			});
		});
	};
}

/**
 * Triggers a network request to update a list's details.
 *
 * @param  {Object}  list List details to save
 * @return {Function} Action promise
 */
function updateListDetails(list) {
	if (!list || !list.owner || !list.slug || !list.title) {
		throw new Error('List owner, slug and title are required');
	}

	var preparedOwner = decodeURIComponent(list.owner);
	var preparedSlug = decodeURIComponent(list.slug);
	var preparedList = (0, _assign2.default)({}, list, { owner: preparedOwner, slug: preparedSlug });

	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LIST_UPDATE,
			list: list
		});

		return new _promise2.default(function (resolve, reject) {
			_wp2.default.undocumented().readListsUpdate(preparedList, function (error, data) {
				if (error) {
					dispatch({
						type: _actionTypes.READER_LIST_UPDATE_FAILURE,
						list: list,
						error: error
					});
					reject(error);
				} else {
					dispatch({
						type: _actionTypes.READER_LIST_UPDATE_SUCCESS,
						list: list,
						data: data
					});
					resolve();
				}
			});
		});
	};
}

/**
 * Trigger an action to dismiss a list update notice.
 *
 * @param  {Integer}  listId List ID
 * @return {Function} Action thunk
 */
function dismissListNotice(listId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LIST_DISMISS_NOTICE,
			listId: listId
		});
	};
}

/**
 * Trigger an action to update a list title.
 *
 * @param  {Integer}  listId List ID
 * @param  {String}  newTitle List title
 * @return {Function} Action thunk
 */
function updateTitle(listId, newTitle) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LIST_UPDATE_TITLE,
			listId: listId,
			title: newTitle
		});
	};
}

/**
 * Trigger an action to update a list description.
 *
 * @param  {Integer}  listId List ID
 * @param  {String}  newDescription List description
 * @return {Function} Action thunk
 */
function updateDescription(listId, newDescription) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.READER_LIST_UPDATE_DESCRIPTION,
			listId: listId,
			description: newDescription
		});
	};
}

function createQuery(owner, slug) {
	var preparedOwner = decodeURIComponent(owner);
	var preparedSlug = decodeURIComponent(slug);
	return { owner: preparedOwner, slug: preparedSlug };
}

/***/ }),

/***/ "./client/state/reader/lists/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubscribedLists = undefined;

var _sortBy2 = __webpack_require__("./node_modules/lodash/sortBy.js");

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _has2 = __webpack_require__("./node_modules/lodash/has.js");

var _has3 = _interopRequireDefault(_has2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

exports.isRequestingList = isRequestingList;
exports.isRequestingSubscribedLists = isRequestingSubscribedLists;
exports.isUpdatedList = isUpdatedList;
exports.hasError = hasError;
exports.getListByOwnerAndSlug = getListByOwnerAndSlug;
exports.isSubscribedByOwnerAndSlug = isSubscribedByOwnerAndSlug;
exports.isMissingByOwnerAndSlug = isMissingByOwnerAndSlug;

var _createSelector = __webpack_require__("./client/lib/create-selector/index.js");

var _createSelector2 = _interopRequireDefault(_createSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if currently requesting Reader lists, or
 * false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @return {Boolean}        Whether lists are being requested
 */
function isRequestingList(state) {
  return !!state.reader.lists.isRequestingList;
}

/**
 * Returns true if currently requesting Reader lists, or
 * false otherwise.
 *
 * @param  {Object}  state  Global state tree
 * @return {Boolean}        Whether lists are being requested
 */


/**
 * Internal dependencies
 */
/** @format */
/**
 * External dependencies
 */
function isRequestingSubscribedLists(state) {
  return !!state.reader.lists.isRequestingLists;
}

/**
 * Returns the user's subscribed Reader lists.
 *
 * @param  {Object}  state  Global state tree
 * @return {?Object}        Reader lists
 */
var getSubscribedLists = exports.getSubscribedLists = (0, _createSelector2.default)(function (state) {
  return (0, _sortBy3.default)((0, _filter3.default)(state.reader.lists.items, function (item) {
    // Is the user subscribed to this list?
    return (0, _includes3.default)(state.reader.lists.subscribedLists, item.ID);
  }), 'slug');
}, function (state) {
  return [state.reader.lists.items, state.reader.lists.subscribedLists];
});

/**
 * Returns true if the specified list has been marked as updated.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Integer}  listId  List ID
 * @return {Boolean}        Whether lists are being requested
 */
function isUpdatedList(state, listId) {
  if (!(0, _has3.default)(state, 'reader.lists.updatedLists')) {
    return false;
  }
  return (0, _includes3.default)(state.reader.lists.updatedLists, listId);
}

/**
 * Returns true if the specified list has an error recorded.
 *
 * @param  {Object}  state  Global state tree
 * @param  {Integer}  listId  List ID
 * @return {Boolean}        Whether list has an error
 */
function hasError(state, listId) {
  if (!(0, _has3.default)(state, 'reader.lists.errors')) {
    return false;
  }

  return listId in state.reader.lists.errors;
}

/**
 * Returns information about a single Reader list.
 *
 * @param  {Object}  state  Global state tree
 * @param  {String}  owner  List owner
 * @param  {String}  slug  List slug
 * @return {?Object}        Reader list
 */
function getListByOwnerAndSlug(state, owner, slug) {
  if (!(0, _has3.default)(state, 'reader.lists.items') || !owner || !slug) {
    return;
  }

  var preparedOwner = owner.toLowerCase();
  var preparedSlug = slug.toLowerCase();

  return (0, _find3.default)(state.reader.lists.items, function (list) {
    return list.owner === preparedOwner && list.slug === preparedSlug;
  });
}

/**
 * Check if the user is subscribed to the specified list
 *
 * @param  {Object}  state  Global state tree
 * @param  {String}  owner  List owner
 * @param  {String}  slug  List slug
 * @return {Boolean} Is the user subscribed?
 */
function isSubscribedByOwnerAndSlug(state, owner, slug) {
  var list = getListByOwnerAndSlug(state, owner, slug);
  if (!list) {
    return false;
  }
  return (0, _includes3.default)(state.reader.lists.subscribedLists, list.ID);
}

/**
 * Check if the requested list is missing (i.e. API 404ed when requesting it)
 *
 * @param  {Object}  state  Global state tree
 * @param  {String}  owner  List owner
 * @param  {String}  slug  List slug
 * @return {Boolean} Is the list missing?
 */
function isMissingByOwnerAndSlug(state, owner, slug) {
  var preparedOwner = owner.toLowerCase();
  var preparedSlug = slug.toLowerCase();

  return !!(0, _find3.default)(state.reader.lists.missingLists, function (list) {
    return list.owner === preparedOwner && list.slug === preparedSlug;
  });
}

/***/ }),

/***/ "./client/state/ui/reader/sidebar/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toggleReaderSidebarLists = toggleReaderSidebarLists;
exports.toggleReaderSidebarTags = toggleReaderSidebarTags;

var _actionTypes = __webpack_require__("./client/state/action-types.js");

var stats = __webpack_require__("./client/reader/stats.js"); /**
                                      * Internal dependencies
                                      */
function toggleReaderSidebarLists() {
	stats.recordAction('sidebar_toggle_lists_menu');
	stats.recordGaEvent('Toggle Lists Menu');
	stats.recordTrack('calypso_reader_sidebar_list_toggle');
	return {
		type: _actionTypes.READER_SIDEBAR_LISTS_TOGGLE
	};
}

function toggleReaderSidebarTags() {
	stats.recordAction('sidebar_toggle_tags_menu');
	stats.recordGaEvent('Toggle Tags Menu');
	stats.recordTrack('calypso_reader_sidebar_tags_toggle');
	return {
		type: _actionTypes.READER_SIDEBAR_TAGS_TOGGLE
	};
}

/***/ }),

/***/ "./node_modules/create-react-class/factory.js":
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

var emptyObject = __webpack_require__("./node_modules/fbjs/lib/emptyObject.js");
var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

if (false) {
  var warning = require('fbjs/lib/warning');
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      _invariant(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ "./node_modules/create-react-class/index.js":
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



var React = __webpack_require__("./node_modules/react/react.js");
var factory = __webpack_require__("./node_modules/create-react-class/factory.js");

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),

/***/ "./node_modules/lodash/sample.js":
/***/ (function(module, exports, __webpack_require__) {

var baseRandom = __webpack_require__("./node_modules/lodash/_baseRandom.js"),
    isArrayLike = __webpack_require__("./node_modules/lodash/isArrayLike.js"),
    values = __webpack_require__("./node_modules/lodash/values.js");

/**
 * Gets a random element from `collection`.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to sample.
 * @returns {*} Returns the random element.
 * @example
 *
 * _.sample([1, 2, 3, 4]);
 * // => 2
 */
function sample(collection) {
  var array = isArrayLike(collection) ? collection : values(collection),
      length = array.length;

  return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
}

module.exports = sample;


/***/ })

});