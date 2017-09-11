webpackJsonp(["async-load-lib-olark"],{

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

/***/ })

});