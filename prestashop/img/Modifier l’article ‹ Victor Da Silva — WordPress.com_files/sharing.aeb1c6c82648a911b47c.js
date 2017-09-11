webpackJsonp(["sharing"],{

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

/***/ "./client/components/data/query-jetpack-modules/index.jsx":
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

var _isFetchingJetpackModules = __webpack_require__("./client/state/selectors/is-fetching-jetpack-modules.js");

var _isFetchingJetpackModules2 = _interopRequireDefault(_isFetchingJetpackModules);

var _actions = __webpack_require__("./client/state/jetpack/modules/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryJetpackModules = function (_Component) {
	(0, _inherits3.default)(QueryJetpackModules, _Component);

	function QueryJetpackModules() {
		(0, _classCallCheck3.default)(this, QueryJetpackModules);
		return (0, _possibleConstructorReturn3.default)(this, (QueryJetpackModules.__proto__ || (0, _getPrototypeOf2.default)(QueryJetpackModules)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryJetpackModules, [{
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
			if (props.requestingModules) {
				return;
			}

			props.fetchModuleList(props.siteId);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryJetpackModules;
}(_react.Component);

QueryJetpackModules.propTypes = {
	siteId: _react.PropTypes.number.isRequired,
	requestingModules: _react.PropTypes.bool,
	fetchModuleList: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	return {
		requestingModules: (0, _isFetchingJetpackModules2.default)(state, ownProps.siteId)
	};
}, { fetchModuleList: _actions.fetchModuleList })(QueryJetpackModules);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-keyring-connections/index.jsx":
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

var _selectors = __webpack_require__("./client/state/sharing/keyring/selectors.js");

var _actions = __webpack_require__("./client/state/sharing/keyring/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryKeyringConnections = function (_Component) {
	(0, _inherits3.default)(QueryKeyringConnections, _Component);

	function QueryKeyringConnections() {
		(0, _classCallCheck3.default)(this, QueryKeyringConnections);
		return (0, _possibleConstructorReturn3.default)(this, (QueryKeyringConnections.__proto__ || (0, _getPrototypeOf2.default)(QueryKeyringConnections)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryKeyringConnections, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (!this.props.isRequesting) {
				this.props.requestKeyringConnections();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryKeyringConnections;
}(_react.Component);

QueryKeyringConnections.propTypes = {
	isRequesting: _react.PropTypes.bool,
	requestKeyringConnections: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		isRequesting: (0, _selectors.isKeyringConnectionsFetching)(state)
	};
}, { requestKeyringConnections: _actions.requestKeyringConnections })(QueryKeyringConnections);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-keyring-services/index.jsx":
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

var _selectors = __webpack_require__("./client/state/sharing/services/selectors.js");

var _actions = __webpack_require__("./client/state/sharing/services/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var QueryKeyringServices = function (_Component) {
	(0, _inherits3.default)(QueryKeyringServices, _Component);

	function QueryKeyringServices() {
		(0, _classCallCheck3.default)(this, QueryKeyringServices);
		return (0, _possibleConstructorReturn3.default)(this, (QueryKeyringServices.__proto__ || (0, _getPrototypeOf2.default)(QueryKeyringServices)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryKeyringServices, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (!this.props.isRequesting) {
				this.props.requestKeyringServices();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryKeyringServices;
}(_react.Component);

QueryKeyringServices.propTypes = {
	isRequesting: _react.PropTypes.bool,
	requestKeyringServices: _react.PropTypes.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		isRequesting: (0, _selectors.isKeyringServicesFetching)(state)
	};
}, { requestKeyringServices: _actions.requestKeyringServices })(QueryKeyringServices);
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

/***/ "./client/components/data/query-sharing-buttons/index.js":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _isRequestingSharingButtons = __webpack_require__("./client/state/selectors/is-requesting-sharing-buttons.js");

var _isRequestingSharingButtons2 = _interopRequireDefault(_isRequestingSharingButtons);

var _actions = __webpack_require__("./client/state/sites/sharing-buttons/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var QuerySharingButtons = function (_Component) {
	(0, _inherits3.default)(QuerySharingButtons, _Component);

	function QuerySharingButtons() {
		(0, _classCallCheck3.default)(this, QuerySharingButtons);
		return (0, _possibleConstructorReturn3.default)(this, (QuerySharingButtons.__proto__ || (0, _getPrototypeOf2.default)(QuerySharingButtons)).apply(this, arguments));
	}

	(0, _createClass3.default)(QuerySharingButtons, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.requestSettings(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var siteId = this.props.siteId;

			if (!nextProps.siteId || siteId === nextProps.siteId) {
				return;
			}

			this.requestSettings(nextProps);
		}
	}, {
		key: 'requestSettings',
		value: function requestSettings(props) {
			var requestingSharingButtons = props.requestingSharingButtons,
			    siteId = props.siteId;

			if (!requestingSharingButtons && siteId) {
				props.requestSharingButtons(siteId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QuerySharingButtons;
}(_react.Component); /**
                      * External dependencies
                      */


QuerySharingButtons.propTypes = {
	siteId: _propTypes2.default.number,
	requestingSharingButtons: _propTypes2.default.bool,
	requestSharingButtons: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId;

	return {
		requestingSharingButtons: (0, _isRequestingSharingButtons2.default)(state, siteId)
	};
}, { requestSharingButtons: _actions.requestSharingButtons })(QuerySharingButtons);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/data/query-site-settings/index.js":
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

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _selectors = __webpack_require__("./client/state/site-settings/selectors.js");

var _actions = __webpack_require__("./client/state/site-settings/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var QuerySiteSettings = function (_Component) {
	(0, _inherits3.default)(QuerySiteSettings, _Component);

	function QuerySiteSettings() {
		(0, _classCallCheck3.default)(this, QuerySiteSettings);
		return (0, _possibleConstructorReturn3.default)(this, (QuerySiteSettings.__proto__ || (0, _getPrototypeOf2.default)(QuerySiteSettings)).apply(this, arguments));
	}

	(0, _createClass3.default)(QuerySiteSettings, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			this.requestSettings(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var siteId = this.props.siteId;

			if (!nextProps.siteId || siteId === nextProps.siteId) {
				return;
			}

			this.requestSettings(nextProps);
		}
	}, {
		key: 'requestSettings',
		value: function requestSettings(props) {
			var requestingSiteSettings = props.requestingSiteSettings,
			    siteId = props.siteId;

			if (!requestingSiteSettings && siteId) {
				props.requestSiteSettings(siteId);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QuerySiteSettings;
}(_react.Component); /**
                      * External dependencies
                      */


QuerySiteSettings.propTypes = {
	siteId: _propTypes2.default.number,
	requestingSiteSettings: _propTypes2.default.bool,
	requestSiteSettings: _propTypes2.default.func
};

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId;

	return {
		requestingSiteSettings: (0, _selectors.isRequestingSiteSettings)(state, siteId)
	};
}, { requestSiteSettings: _actions.requestSiteSettings })(QuerySiteSettings);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/foldable-card/index.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _compact = __webpack_require__("./client/components/card/compact.jsx");

var _compact2 = _interopRequireDefault(_compact);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _screenReaderText = __webpack_require__("./client/components/screen-reader-text/index.js");

var _screenReaderText2 = _interopRequireDefault(_screenReaderText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
var FoldableCard = function (_Component) {
	(0, _inherits3.default)(FoldableCard, _Component);

	function FoldableCard() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, FoldableCard);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FoldableCard.__proto__ || (0, _getPrototypeOf2.default)(FoldableCard)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			expanded: _this.props.expanded
		}, _this.onClick = function () {
			if (_this.props.children) {
				_this.setState({ expanded: !_this.state.expanded });
			}

			if (_this.props.onClick) {
				_this.props.onClick();
			}

			if (_this.state.expanded) {
				_this.props.onClose(_this.props.cardKey);
			} else {
				_this.props.onOpen(_this.props.cardKey);
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(FoldableCard, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.expanded !== this.props.expanded) {
				this.setState({ expanded: nextProps.expanded });
			}
		}
	}, {
		key: 'getClickAction',
		value: function getClickAction() {
			if (this.props.disabled) {
				return;
			}
			return this.onClick;
		}
	}, {
		key: 'getActionButton',
		value: function getActionButton() {
			if (this.state.expanded) {
				return this.props.actionButtonExpanded || this.props.actionButton;
			}
			return this.props.actionButton;
		}
	}, {
		key: 'renderActionButton',
		value: function renderActionButton() {
			var clickAction = !this.props.clickableHeader ? this.getClickAction() : null;
			if (this.props.actionButton) {
				return _react2.default.createElement(
					'div',
					{ className: 'foldable-card__action', onClick: clickAction },
					this.getActionButton()
				);
			}
			if (this.props.children) {
				var iconSize = 24;
				var screenReaderText = this.props.screenReaderText || this.props.translate('More');
				return _react2.default.createElement(
					'button',
					{
						disabled: this.props.disabled,
						type: 'button',
						className: 'foldable-card__action foldable-card__expand',
						onClick: clickAction },
					_react2.default.createElement(
						_screenReaderText2.default,
						null,
						screenReaderText
					),
					_react2.default.createElement(_gridicons2.default, { icon: this.props.icon, size: iconSize })
				);
			}
		}
	}, {
		key: 'renderContent',
		value: function renderContent() {
			return _react2.default.createElement(
				'div',
				{ className: 'foldable-card__content' },
				this.props.children
			);
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			var summary = this.props.summary ? _react2.default.createElement(
				'span',
				{ className: 'foldable-card__summary' },
				this.props.summary,
				' '
			) : null;
			var expandedSummary = this.props.expandedSummary ? _react2.default.createElement(
				'span',
				{ className: 'foldable-card__summary-expanded' },
				this.props.expandedSummary,
				' '
			) : null;
			var headerClickAction = this.props.clickableHeader ? this.getClickAction() : null;
			var headerClasses = (0, _classnames2.default)('foldable-card__header', {
				'is-clickable': !!this.props.clickableHeader,
				'has-border': !!this.props.summary
			});
			return _react2.default.createElement(
				'div',
				{ className: headerClasses, onClick: headerClickAction },
				_react2.default.createElement(
					'span',
					{ className: 'foldable-card__main' },
					this.props.header,
					' '
				),
				_react2.default.createElement(
					'span',
					{ className: 'foldable-card__secondary' },
					summary,
					expandedSummary,
					this.renderActionButton()
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var Container = this.props.compact ? _compact2.default : _card2.default;
			var itemSiteClasses = (0, _classnames2.default)('foldable-card', this.props.className, {
				'is-disabled': !!this.props.disabled,
				'is-expanded': !!this.state.expanded,
				'has-expanded-summary': !!this.props.expandedSummary
			});

			return _react2.default.createElement(
				Container,
				{ className: itemSiteClasses },
				this.renderHeader(),
				this.state.expanded && this.renderContent()
			);
		}
	}]);
	return FoldableCard;
}(_react.Component); /**
                      * External Dependencies
                      */


FoldableCard.propTypes = {
	actionButton: _react.PropTypes.element,
	actionButtonExpanded: _react.PropTypes.element,
	cardKey: _react.PropTypes.string,
	compact: _react.PropTypes.bool,
	disabled: _react.PropTypes.bool,
	expandedSummary: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
	expanded: _react.PropTypes.bool,
	icon: _react.PropTypes.string,
	onClick: _react.PropTypes.func,
	onClose: _react.PropTypes.func,
	onOpen: _react.PropTypes.func,
	screenReaderText: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool]),
	summary: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element])
};
FoldableCard.defaultProps = {
	onOpen: _noop3.default,
	onClose: _noop3.default,
	cardKey: '',
	icon: 'chevron-down',
	expanded: false,
	screenReaderText: false
};
exports.default = (0, _i18nCalypso.localize)(FoldableCard);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/multi-checkbox/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var MultiCheckbox = function (_Component) {
	(0, _inherits3.default)(MultiCheckbox, _Component);

	function MultiCheckbox() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, MultiCheckbox);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MultiCheckbox.__proto__ || (0, _getPrototypeOf2.default)(MultiCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			initialChecked: _this.props.defaultChecked
		}, _this.handleChange = function (event) {
			var target = event.target;
			var checked = _this.props.checked || _this.state.initialChecked;
			checked = checked.concat([target.value]).filter(function (currentValue) {
				return currentValue !== target.value || target.checked;
			});

			_this.props.onChange({
				value: checked
			});

			event.stopPropagation();
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(MultiCheckbox, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    disabled = _props.disabled,
			    name = _props.name,
			    options = _props.options;

			var checked = this.props.checked || this.state.initialChecked;
			return _react2.default.createElement(
				'div',
				(0, _extends3.default)({
					className: 'multi-checkbox'
				}, (0, _omit3.default)(this.props, (0, _keys2.default)(MultiCheckbox.propTypes))),
				options.map(function (option) {
					return _react2.default.createElement(
						'label',
						{ key: option.value },
						_react2.default.createElement('input', {
							name: name + '[]',
							type: 'checkbox',
							value: option.value,
							checked: (0, _includes3.default)(checked, option.value),
							onChange: _this2.handleChange,
							disabled: disabled
						}),
						_react2.default.createElement(
							'span',
							null,
							option.label
						)
					);
				})
			);
		}
	}]);
	return MultiCheckbox;
}(_react.Component);

MultiCheckbox.propTypes = {
	checked: _propTypes2.default.array,
	defaultChecked: _propTypes2.default.array,
	disabled: _propTypes2.default.bool,
	onChange: _propTypes2.default.func,
	options: _propTypes2.default.array.isRequired,
	name: _propTypes2.default.string
};
MultiCheckbox.defaultProps = {
	defaultChecked: (0, _freeze2.default)([]),
	disabled: false,
	onChange: function onChange() {},
	name: 'multiCheckbox'
};
exports.default = MultiCheckbox;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/forms/sortable-list/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _fromPairs2 = __webpack_require__("./node_modules/lodash/fromPairs.js");

var _fromPairs3 = _interopRequireDefault(_fromPairs2);

var _findIndex2 = __webpack_require__("./node_modules/lodash/findIndex.js");

var _findIndex3 = _interopRequireDefault(_findIndex2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

var _touchDetect = __webpack_require__("./client/lib/touch-detect/index.js");

var _touchDetect2 = _interopRequireDefault(_touchDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var debug = (0, _debug2.default)('calypso:forms:sortable-list');

/**
 * Internal dependencies
 */

var SortableList = function (_React$Component) {
	(0, _inherits3.default)(SortableList, _React$Component);

	function SortableList() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SortableList);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SortableList.__proto__ || (0, _getPrototypeOf2.default)(SortableList)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			activeIndex: null,
			activeOrder: null,
			position: null
		}, _this.getPositionForCursorElement = function (element, event) {
			return {
				top: event.clientY - element.clientHeight / 2,
				left: event.clientX - element.clientWidth / 2
			};
		}, _this.compareCursorVerticalToElement = function (element, event) {
			var rect = element.getBoundingClientRect();

			if (event.clientY < rect.top) {
				return -1;
			} else if (event.clientY > rect.bottom) {
				return 1;
			} else {
				return 0;
			}
		}, _this.isCursorBeyondElementThreshold = function (element, direction, permittedVertical, event) {
			var rect = element.getBoundingClientRect();

			// We check for Y bounds on right and left and not X bounds for top
			// and bottom because horizontal lists can have line breaks, so we
			// should be careful to consider vertical position in those cases
			switch (direction) {
				case 'top':
					return event.clientY <= rect.top + rect.height / 2;
				case 'right':
					return event.clientX >= rect.left + rect.width / 2 && ('top' === permittedVertical || event.clientY >= rect.top) && ('bottom' === permittedVertical || event.clientY <= rect.bottom);
				case 'bottom':
					return event.clientY >= rect.top + rect.height / 2;
				case 'left':
					return event.clientX <= rect.left + rect.width / 2 && ('top' === permittedVertical || event.clientY >= rect.top) && ('bottom' === permittedVertical || event.clientY <= rect.bottom);
				default:
					return false;
			}
		}, _this.getAdjustedElementIndex = function (index) {
			// The active order array is used as an array where each index matches
			// the original prop children indices, but the values correspond to
			// their visible position index
			if (_this.state.activeOrder) {
				return _this.state.activeOrder[index];
			} else {
				return index;
			}
		}, _this.getCursorElementIndex = function (event) {
			var cursorCompare = _this.compareCursorVerticalToElement(_this.refs.list, event),
			    adjustedActiveIndex = _this.getAdjustedElementIndex(_this.state.activeIndex),
			    shadowRect = _this.refs['wrap-shadow-' + _this.state.activeIndex].getBoundingClientRect(),
			    index;

			index = (0, _findIndex3.default)(_this.props.children, function (child, i) {
				var isBeyond, adjustedElementIndex, permittedVertical;

				// Avoid self-comparisons for the active item
				if (i === _this.state.activeIndex) {
					return false;
				}

				// Since elements are now shifted around, we want to find their
				// visible position to make accurate comparisons
				adjustedElementIndex = _this.getAdjustedElementIndex(i);

				// When rearranging on a horizontal plane, permit breaking of
				// vertical if the cursor is outside the list element on the
				// same vertical, and only if the element is on the same line as
				// the active item's shadow element
				if ('horizontal' === _this.props.direction) {
					if (1 === cursorCompare && _this.refs['wrap-' + i].getBoundingClientRect().top >= shadowRect.top) {
						permittedVertical = 'bottom';
					} else if (-1 === cursorCompare && _this.refs['wrap-' + i].getBoundingClientRect().bottom <= shadowRect.bottom) {
						permittedVertical = 'top';
					}
				}

				if (adjustedElementIndex < adjustedActiveIndex) {
					// If the item which is currently before the active item is
					// suddenly after, return this item's index
					isBeyond = _this.isCursorBeyondElementThreshold(_this.refs['wrap-' + i], 'horizontal' === _this.props.direction ? 'left' : 'top', permittedVertical, event);
				} else if (adjustedElementIndex > adjustedActiveIndex) {
					// If the item which is currently after the active item is
					// suddenly before, return this item's index
					isBeyond = isBeyond || _this.isCursorBeyondElementThreshold(_this.refs['wrap-' + i], 'horizontal' === _this.props.direction ? 'right' : 'bottom', permittedVertical, event);
				}

				return isBeyond;
			});

			return _this.getAdjustedElementIndex(index);
		}, _this.moveItem = function (direction) {
			var increment = 'previous' === direction ? -1 : 1,
			    activeOrder = (0, _keys2.default)(_this.props.children).map(Number);

			activeOrder[_this.state.activeIndex + increment] = _this.state.activeIndex;
			activeOrder[_this.state.activeIndex] = _this.state.activeIndex + increment;

			_this.props.onChange(activeOrder);

			_this.setState({
				activeIndex: activeOrder[_this.state.activeIndex]
			});
		}, _this.onMouseDown = function (index, event) {
			_this.setState({
				activeIndex: index,
				position: _this.getPositionForCursorElement(event.currentTarget.firstChild, event)
			});
		}, _this.onMouseMove = function (event) {
			var activeOrder, newIndex;
			if (null === _this.state.activeIndex || !_this.props.allowDrag || _touchDetect2.default.hasTouch()) {
				return;
			}

			activeOrder = _this.state.activeOrder;

			// Find the new cursor location
			newIndex = _this.getCursorElementIndex(event);
			if (newIndex >= 0) {
				if (_this.state.activeIndex === newIndex) {
					// If we're changing the index back to the active item's
					// original position, we can shortcut this by simply
					// setting the order back to default
					activeOrder = null;
				} else {
					// Create an ordered array of items using the index from
					// the child props array
					activeOrder = (0, _keys2.default)(_this.props.children).map(Number);

					for (var i = 0, il = activeOrder.length; i < il; i++) {
						if (i >= newIndex && i < _this.state.activeIndex) {
							// Bump up any item below the active index and
							// above the new index
							activeOrder[i] = i + 1;
						} else if (i <= newIndex && i > _this.state.activeIndex) {
							// Bump down any item above the active index
							// and below the new index
							activeOrder[i] = i - 1;
						}
					}

					// Set the new index for the active item
					activeOrder[_this.state.activeIndex] = newIndex;
				}
			}

			_this.setState({
				position: _this.getPositionForCursorElement(_this.refs['wrap-' + _this.state.activeIndex].firstChild, event),
				activeOrder: activeOrder
			});
		}, _this.onMouseUp = function () {
			if (_this.state.activeOrder) {
				_this.props.onChange(_this.state.activeOrder);
			}

			_this.setState({
				activeIndex: null,
				activeOrder: null,
				position: null
			});
		}, _this.onClick = function (index) {
			_this.setState({
				activeIndex: index
			});
		}, _this.getOrderedListItemElements = function () {
			return _react2.default.Children.map(_this.props.children, function (child, index) {
				var isActive = this.state.activeIndex === index,
				    isDraggable = this.props.allowDrag && !_touchDetect2.default.hasTouch(),
				    events = isDraggable ? ['onMouseDown', 'onMouseUp'] : ['onClick'],
				    style = { order: this.getAdjustedElementIndex(index) },
				    classes = (0, _classnames2.default)({
					'sortable-list__item': true,
					'is-active': isActive,
					'is-draggable': isDraggable
				}),
				    item;

				events = (0, _fromPairs3.default)(events.map(function (event) {
					return [event, this[event].bind(null, index)];
				}, this));

				if (isActive) {
					(0, _assign3.default)(style, this.state.position);
				}

				item = _react2.default.createElement(
					'li',
					(0, _extends3.default)({
						ref: 'wrap-' + index,
						key: 'wrap-' + index
					}, events, {
						className: classes,
						style: style
					}),
					child
				);

				if (isActive && isDraggable) {
					return [_react2.default.createElement(
						'li',
						{
							ref: 'wrap-shadow-' + index,
							key: 'wrap-shadow-' + index,
							className: 'sortable-list__item is-shadow',
							style: style
						},
						child
					), item];
				} else {
					return item;
				}
			}, _this);
		}, _this.getNavigationElement = function () {
			if (_this.props.allowDrag && !_touchDetect2.default.hasTouch()) {
				return;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'sortable-list__navigation' },
				_react2.default.createElement(
					'button',
					{
						type: 'button',
						onClick: _this.moveItem.bind(null, 'previous'),
						className: 'sortable-list__navigation-button is-previous',
						disabled: null === _this.state.activeIndex || _this.state.activeIndex === 0
					},
					_react2.default.createElement(
						'span',
						{ className: 'screen-reader-text' },
						_this.props.translate('Move previous')
					),
					_react2.default.createElement('span', { className: 'noticon noticon-expand' })
				),
				_react2.default.createElement(
					'button',
					{
						type: 'button',
						onClick: _this.moveItem.bind(null, 'next'),
						className: 'sortable-list__navigation-button is-next',
						disabled: null === _this.state.activeIndex || _this.state.activeIndex === _this.props.children.length - 1
					},
					_react2.default.createElement(
						'span',
						{ className: 'screen-reader-text' },
						_this.props.translate('Move next')
					),
					_react2.default.createElement('span', { className: 'noticon noticon-collapse' })
				)
			);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SortableList, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			debug('Mounting ' + this.constructor.displayName + ' React component.');
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			document.addEventListener('mousemove', this.onMouseMove);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.removeEventListener('mousemove', this.onMouseMove);
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)({
				'sortable-list': true,
				'is-horizontal': 'horizontal' === this.props.direction,
				'is-vertical': 'vertical' === this.props.direction
			});

			return _react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement(
					'ol',
					{ ref: 'list', className: 'sortable-list__list' },
					this.getOrderedListItemElements()
				),
				this.getNavigationElement()
			);
		}
	}]);
	return SortableList;
}(_react2.default.Component);

SortableList.propTypes = {
	direction: _propTypes2.default.oneOf(['horizontal', 'vertical']),
	allowDrag: _propTypes2.default.bool,
	onChange: _propTypes2.default.func
};
SortableList.defaultProps = {
	direction: 'horizontal',
	allowDrag: true,
	onChange: _noop3.default
};
exports.default = (0, _i18nCalypso.localize)(SortableList);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/resizable-iframe/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _debug = __webpack_require__("./node_modules/debug/browser.js");

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Globals
 */
var debug = (0, _debug2.default)('calypso:resizable-iframe'),
    noop = function noop() {}; /**
                                * External dependencies
                                */
exports.default = _react2.default.createClass({
	displayName: 'ResizableIframe',

	propTypes: {
		src: _react2.default.PropTypes.string,
		width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
		height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
		onLoad: _react2.default.PropTypes.func,
		onResize: _react2.default.PropTypes.func
	},

	getInitialState: function getInitialState() {
		return { width: 0, height: 0 };
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onLoad: noop,
			onResize: noop
		};
	},

	componentWillMount: function componentWillMount() {
		debug('Mounting ' + this.constructor.displayName + ' React component.');
	},

	componentDidMount: function componentDidMount() {
		window.addEventListener('message', this.checkMessageForResize, false);
		this.maybeConnect();
	},

	componentDidUpdate: function componentDidUpdate() {
		this.maybeConnect();
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('message', this.checkMessageForResize);
	},

	getFrameBody: function getFrameBody() {
		return _reactDom2.default.findDOMNode(this.refs.iframe).contentDocument.body;
	},

	maybeConnect: function maybeConnect() {
		if (!this.isFrameAccessible()) {
			return;
		}

		var body = this.getFrameBody();
		if (null !== body.getAttribute('data-resizable-iframe-connected')) {
			return;
		}

		var script = document.createElement('script');
		script.innerHTML = '\n\t\t\t( function() {\n\t\t\t\tvar observer;\n\n\t\t\t\tif ( ! window.MutationObserver || ! document.body || ! window.top ) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tfunction sendResize() {\n\t\t\t\t\twindow.top.postMessage( {\n\t\t\t\t\t\taction: \'resize\',\n\t\t\t\t\t\twidth: document.body.offsetWidth,\n\t\t\t\t\t\theight: document.body.offsetHeight\n\t\t\t\t\t}, \'*\' );\n\t\t\t\t}\n\n\t\t\t\tobserver = new MutationObserver( sendResize );\n\t\t\t\tobserver.observe( document.body, {\n\t\t\t\t\tattributes: true,\n\t\t\t\t\tattributeOldValue: false,\n\t\t\t\t\tcharacterData: true,\n\t\t\t\t\tcharacterDataOldValue: false,\n\t\t\t\t\tchildList: true,\n\t\t\t\t\tsubtree: true\n\t\t\t\t} );\n\n\t\t\t\twindow.addEventListener( \'load\', sendResize, true );\n\n\t\t\t\t// Hack: Remove viewport unit styles, as these are relative\n\t\t\t\t// the iframe root and interfere with our mechanism for\n\t\t\t\t// determining the unconstrained page bounds.\n\t\t\t\tfunction removeViewportStyles( ruleOrNode ) {\n\t\t\t\t\t[ \'width\', \'height\', \'minHeight\', \'maxHeight\' ].forEach( function( style ) {\n\t\t\t\t\t\tif ( /^\\d+(vmin|vmax|vh|vw)$/.test( ruleOrNode.style[ style ] ) ) {\n\t\t\t\t\t\t\truleOrNode.style[ style ] = \'\';\n\t\t\t\t\t\t}\n\t\t\t\t\t} );\n\t\t\t\t}\n\n\t\t\t\tArray.prototype.forEach.call( document.querySelectorAll( \'[style]\' ), removeViewportStyles );\n\t\t\t\tArray.prototype.forEach.call( document.styleSheets, function( stylesheet ) {\n\t\t\t\t\tArray.prototype.forEach.call( stylesheet.cssRules || stylesheet.rules, removeViewportStyles );\n\t\t\t\t} );\n\n\t\t\t\tdocument.body.style.position = \'absolute\';\n\t\t\t\tdocument.body.setAttribute( \'data-resizable-iframe-connected\', \'\' );\n\n\t\t\t\tsendResize();\n\t\t\t} )();\n\t\t';
		body.appendChild(script);
	},

	isFrameAccessible: function isFrameAccessible() {
		try {
			return !!this.getFrameBody();
		} catch (e) {
			return false;
		}
	},

	checkMessageForResize: function checkMessageForResize(event) {
		var iframe = _reactDom2.default.findDOMNode(this.refs.iframe);

		// Attempt to parse the message data as JSON if passed as string
		var data = event.data || {};
		if ('string' === typeof data) {
			try {
				data = JSON.parse(data);
			} catch (e) {} // eslint-disable-line no-empty
		}

		// Verify that the mounted element is the source of the message
		if (!iframe || iframe.contentWindow !== event.source) {
			return;
		}

		debug('Received message: %o', data);

		// Update the state only if the message is formatted as we expect, i.e.
		// as an object with a 'resize' action, width, and height
		var _data = data,
		    action = _data.action,
		    width = _data.width,
		    height = _data.height;
		var _state = this.state,
		    oldWidth = _state.width,
		    oldHeight = _state.height;


		if ('resize' === action && (oldWidth !== width || oldHeight !== height)) {
			this.setState({ width: width, height: height });
			this.props.onResize();
		}
	},

	onLoad: function onLoad(event) {
		this.maybeConnect();
		this.props.onLoad(event);
	},

	render: function render() {
		var omitProps = ['onResize'];
		return _react2.default.createElement('iframe', (0, _extends3.default)({
			ref: 'iframe'
		}, (0, _omit3.default)(this.props, omitProps), {
			onLoad: this.onLoad,
			width: this.props.width || this.state.width,
			height: this.props.height || this.state.height }));
	}
});
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

/***/ "./client/lib/popup-monitor/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */
var Emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

/**
 * PopupMonitor component
 *
 * @public
 */
function PopupMonitor() {
  this.intervals = {};
  this.monitorInterval = null;
}

/**
 * Mixins
 */
Emitter(PopupMonitor.prototype);

/**
 * Opens a new popup and starts monitoring it for changes. This should only be
 * invoked on a user action to avoid the popup being blocked. Returns the
 * current instance of PopupMonitor to enable chainability
 *
 * @param (string) url The URL to be loaded in the newly opened window
 * @param (string) name A string name for the new window
 * @param (string) specs An optional parameter listing the features of the new window as a string
 * @public
 */
PopupMonitor.prototype.open = function (url, name, specs) {
  var windowInstance;
  name = name || Date.now();

  windowInstance = window.open(url, name, specs);
  this.startMonitoring(name, windowInstance);

  return this;
};

/**
 * Returns a popup window specification string fragment containing properties
 * to visually center the popup on the user's current screen.
 *
 * @param  {number} width The desired width of the popup
 * @param  {number} height The desired height of the popup
 * @return {string} Popup window specificatino string fragment
 * @public
 */
PopupMonitor.prototype.getScreenCenterSpecs = function (width, height) {
  var screenTop = typeof window.screenTop !== 'undefined' ? window.screenTop : window.screenY,
      screenLeft = typeof window.screenLeft !== 'undefined' ? window.screenLeft : window.screenX;

  return ['width=' + width, 'height=' + height, 'top=' + (screenTop + window.innerHeight / 2 - height / 2), 'left=' + (screenLeft + window.innerWidth / 2 - width / 2)].join();
};

/**
 * Returns true if the popup with the specified name is closed, or false
 * otherwise
 *
 * @param (string) name The name of the popup window to check
 * @public
 */
PopupMonitor.prototype.isOpen = function (name) {
  var isClosed = false;

  try {
    isClosed = this.intervals[name] && this.intervals[name].closed;
  } catch (e) {}

  return !isClosed;
};

/**
 * Detects if any popup windows have closed since the last interval run and
 * triggers a close event for any closed windows. If no popup windows remain
 * open, then the interval is stopped.
 */
PopupMonitor.prototype.checkStatus = function () {
  for (var name in this.intervals) {
    if (this.intervals.hasOwnProperty(name) && !this.isOpen(name)) {
      this.emit('close', name);
      delete this.intervals[name];
    }
  }

  if (0 === (0, _keys2.default)(this.intervals).length) {
    clearInterval(this.monitorInterval);
    delete this.monitorInterval;
  }
};

/**
 * Starts monitoring a popup window instance for changes on a recurring
 * interval.
 *
 * @param (string) name The name of hte popup window to monitor
 * @param (window) windowInstance The popup window instance
 */
PopupMonitor.prototype.startMonitoring = function (name, windowInstance) {
  if (!this.monitorInterval) {
    this.monitorInterval = setInterval(this.checkStatus.bind(this), 100);
  }

  this.intervals[name] = windowInstance;
};

/**
 * Expose `PopupMonitor`
 */
module.exports = PopupMonitor;

/***/ }),

/***/ "./client/lib/sharing/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _popupMonitor = __webpack_require__("./client/lib/popup-monitor/index.js");

var _popupMonitor2 = _interopRequireDefault(_popupMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestExternalAccess = function requestExternalAccess(url, cb) {
	var popupMonitor = new _popupMonitor2.default();

	popupMonitor.open(url, null, 'toolbar=0,location=0,status=0,menubar=0,' + popupMonitor.getScreenCenterSpecs(780, 500));

	popupMonitor.once('close', cb);
}; /**
    * Internal dependencies
    */

exports.default = requestExternalAccess;
module.exports = exports['default'];

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

/***/ "./client/my-sites/sharing/buttons/appearance.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

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

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _preview = __webpack_require__("./client/my-sites/sharing/buttons/preview.jsx");

var _preview2 = _interopRequireDefault(_preview);

var _previewPlaceholder = __webpack_require__("./client/my-sites/sharing/buttons/preview-placeholder.jsx");

var _previewPlaceholder2 = _interopRequireDefault(_previewPlaceholder);

var _style = __webpack_require__("./client/my-sites/sharing/buttons/style.jsx");

var _style2 = _interopRequireDefault(_style);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _isPrivateSite = __webpack_require__("./client/state/selectors/is-private-site.js");

var _isPrivateSite2 = _interopRequireDefault(_isPrivateSite);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var SharingButtonsAppearance = function (_Component) {
	(0, _inherits3.default)(SharingButtonsAppearance, _Component);

	function SharingButtonsAppearance() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SharingButtonsAppearance);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SharingButtonsAppearance.__proto__ || (0, _getPrototypeOf2.default)(SharingButtonsAppearance)).call.apply(_ref, [this].concat(args))), _this), _this.onReblogsLikesCheckboxClicked = function (event) {
			_this.props.onChange(event.target.name, !event.target.checked);
			if ('disabled_reblogs' === event.target.name) {
				_this.props.recordGoogleEvent('Sharing', 'Clicked Show Reblog Button Checkbox', 'checked', event.target.checked ? 1 : 0);
			} else if ('disabled_likes' === event.target.name) {
				_this.props.recordGoogleEvent('Sharing', 'Clicked Show Like Button Checkbox', 'checked', event.target.checked ? 1 : 0);
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SharingButtonsAppearance, [{
		key: 'isLikeButtonEnabled',
		value: function isLikeButtonEnabled() {
			return '' === this.props.values.disabled_likes || false === this.props.values.disabled_likes;
		}
	}, {
		key: 'isReblogButtonEnabled',
		value: function isReblogButtonEnabled() {
			return '' === this.props.values.disabled_reblogs || false === this.props.values.disabled_reblogs;
		}
	}, {
		key: 'getPreviewElement',
		value: function getPreviewElement() {
			if (this.props.initialized) {
				var changeLabel = (0, _partial3.default)(this.props.onChange, 'sharing_label');

				return _react2.default.createElement(_preview2.default, {
					isPrivateSite: this.props.isPrivate,
					style: this.props.values.sharing_button_style,
					label: this.props.values.sharing_label,
					buttons: this.props.buttons,
					showLike: this.isLikeButtonEnabled(),
					showReblog: !this.props.isJetpack && this.isReblogButtonEnabled(),
					onLabelChange: changeLabel,
					onButtonsChange: this.props.onButtonsChange });
			}

			return _react2.default.createElement(_previewPlaceholder2.default, null);
		}
	}, {
		key: 'getReblogOptionElement',
		value: function getReblogOptionElement() {
			if (!this.props.isJetpack) {
				return _react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', {
						name: 'disabled_reblogs',
						type: 'checkbox',
						checked: this.isReblogButtonEnabled(),
						onChange: this.onReblogsLikesCheckboxClicked,
						disabled: !this.props.initialized
					}),
					_react2.default.createElement(
						'span',
						null,
						this.props.translate('Show reblog button', { context: 'Sharing options: Checkbox label' })
					)
				);
			}
		}
	}, {
		key: 'getReblogLikeOptionsElement',
		value: function getReblogLikeOptionsElement() {
			var _props = this.props,
			    isJetpack = _props.isJetpack,
			    translate = _props.translate;


			return _react2.default.createElement(
				'fieldset',
				{ className: 'buttons__fieldset sharing-buttons__fieldset' },
				_react2.default.createElement(
					'legend',
					{ className: 'buttons__fieldset-heading sharing-buttons__fieldset-heading' },
					isJetpack ? translate('Like', { context: 'Sharing options: Header' }) : translate('Reblog & Like', { context: 'Sharing options: Header' })
				),
				this.getReblogOptionElement(),
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', {
						name: 'disabled_likes',
						type: 'checkbox',
						checked: this.isLikeButtonEnabled(),
						onChange: this.onReblogsLikesCheckboxClicked,
						disabled: !this.props.initialized
					}),
					_react2.default.createElement(
						'span',
						null,
						translate('Show like button', { context: 'Sharing options: Checkbox label' })
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var changeButtonStyle = (0, _partial3.default)(this.props.onChange, 'sharing_button_style');
			return _react2.default.createElement(
				'div',
				{ className: 'sharing-buttons__panel sharing-buttons-appearance' },
				_react2.default.createElement(
					'p',
					{ className: 'sharing-buttons-appearance__description' },
					this.props.translate('Allow readers to easily share your posts with others by adding sharing buttons throughout your site.')
				),
				this.getPreviewElement(),
				_react2.default.createElement(
					'div',
					{ className: 'sharing-buttons__fieldset-group' },
					_react2.default.createElement(_style2.default, {
						onChange: changeButtonStyle,
						value: this.props.values.sharing_button_style,
						disabled: !this.props.initialized
					}),
					this.getReblogLikeOptionsElement()
				),
				_react2.default.createElement(
					'button',
					{
						type: 'submit',
						className: 'button is-primary sharing-buttons__submit',
						disabled: this.props.saving || !this.props.initialized
					},
					this.props.saving ? this.props.translate('Saving…') : this.props.translate('Save Changes')
				)
			);
		}
	}]);
	return SharingButtonsAppearance;
}(_react.Component);

/**
 * Internal dependencies
 */


SharingButtonsAppearance.propTypes = {
	buttons: _react.PropTypes.array,
	initialized: _react.PropTypes.bool,
	isJetpack: _react.PropTypes.bool,
	isPrivate: _react.PropTypes.bool,
	onChange: _react.PropTypes.func,
	onButtonsChange: _react.PropTypes.func,
	onButtonsSave: _react.PropTypes.func,
	recordGoogleEvent: _react.PropTypes.func,
	saving: _react.PropTypes.bool,
	values: _react.PropTypes.object
};
SharingButtonsAppearance.defaultProps = {
	buttons: (0, _freeze2.default)([]),
	values: (0, _freeze2.default)({}),
	onChange: function onChange() {},
	onButtonsChange: function onButtonsChange() {},
	initialized: false,
	saving: false
};


var connectComponent = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var isJetpack = (0, _selectors2.isJetpackSite)(state, siteId);
	var isPrivate = (0, _isPrivateSite2.default)(state, siteId);

	return {
		isJetpack: isJetpack,
		isPrivate: isPrivate
	};
}, { recordGoogleEvent: _actions.recordGoogleEvent });

exports.default = (0, _flowRight3.default)(connectComponent, _i18nCalypso.localize)(SharingButtonsAppearance);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/buttons/buttons.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _appearance = __webpack_require__("./client/my-sites/sharing/buttons/appearance.jsx");

var _appearance2 = _interopRequireDefault(_appearance);

var _options = __webpack_require__("./client/my-sites/sharing/buttons/options.jsx");

var _options2 = _interopRequireDefault(_options);

var _queryJetpackModules = __webpack_require__("./client/components/data/query-jetpack-modules/index.jsx");

var _queryJetpackModules2 = _interopRequireDefault(_queryJetpackModules);

var _querySiteSettings = __webpack_require__("./client/components/data/query-site-settings/index.js");

var _querySiteSettings2 = _interopRequireDefault(_querySiteSettings);

var _querySharingButtons = __webpack_require__("./client/components/data/query-sharing-buttons/index.js");

var _querySharingButtons2 = _interopRequireDefault(_querySharingButtons);

var _actions = __webpack_require__("./client/state/site-settings/actions.js");

var _actions2 = __webpack_require__("./client/state/sites/sharing-buttons/actions.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/site-settings/selectors.js");

var _getSharingButtons = __webpack_require__("./client/state/selectors/get-sharing-buttons.js");

var _getSharingButtons2 = _interopRequireDefault(_getSharingButtons);

var _isSavingSharingButtons = __webpack_require__("./client/state/selectors/is-saving-sharing-buttons.js");

var _isSavingSharingButtons2 = _interopRequireDefault(_isSavingSharingButtons);

var _isSharingButtonsSaveSuccessful = __webpack_require__("./client/state/selectors/is-sharing-buttons-save-successful.js");

var _isSharingButtonsSaveSuccessful2 = _interopRequireDefault(_isSharingButtonsSaveSuccessful);

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

var _isJetpackModuleActive = __webpack_require__("./client/state/selectors/is-jetpack-module-active.js");

var _isJetpackModuleActive2 = _interopRequireDefault(_isJetpackModuleActive);

var _actions3 = __webpack_require__("./client/state/analytics/actions.js");

var _actions4 = __webpack_require__("./client/state/notices/actions.js");

var _actions5 = __webpack_require__("./client/state/jetpack/modules/actions.js");

var _protectForm = __webpack_require__("./client/lib/protect-form/index.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var SharingButtons = function (_Component) {
	(0, _inherits3.default)(SharingButtons, _Component);

	function SharingButtons() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SharingButtons);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SharingButtons.__proto__ || (0, _getPrototypeOf2.default)(SharingButtons)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			values: {},
			buttonsPendingSave: null
		}, _this.saveChanges = function (event) {
			var _this$props = _this.props,
			    isJetpack = _this$props.isJetpack,
			    isLikesModuleActive = _this$props.isLikesModuleActive,
			    siteId = _this$props.siteId;


			event.preventDefault();

			_this.props.saveSiteSettings(_this.props.siteId, _this.state.values);
			if (_this.state.buttonsPendingSave) {
				_this.props.saveSharingButtons(_this.props.siteId, _this.state.buttonsPendingSave);
			}
			_this.props.recordGoogleEvent('Sharing', 'Clicked Save Changes Button');

			if (!isJetpack || isLikesModuleActive !== false) {
				return;
			}

			var updatedSettings = _this.getUpdatedSettings();
			if (updatedSettings.disabled_likes) {
				return;
			}

			_this.props.activateModule(siteId, 'likes', true);
		}, _this.handleChange = function (option, value) {
			var pairs = undefined === value ? option : (0, _defineProperty3.default)({}, option, value);
			_this.props.markChanged();
			_this.setState({
				values: (0, _assign2.default)({}, _this.state.values, pairs)
			});
		}, _this.handleButtonsChange = function (buttons) {
			_this.props.markChanged();
			_this.setState({ buttonsPendingSave: buttons });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SharingButtons, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// Save request has been performed
			if (this.props.isSaving && !nextProps.isSaving) {
				if (nextProps.isSaveSettingsSuccessful && (nextProps.isSaveButtonsSuccessful || !this.state.buttonsPendingSave)) {
					nextProps.successNotice(nextProps.translate('Settings saved successfully!'));
					nextProps.markSaved();
					this.setState({
						values: {},
						buttonsPendingSave: null
					});
				} else {
					nextProps.errorNotice(nextProps.translate('There was a problem saving your changes. Please, try again.'));
				}
			}
		}
	}, {
		key: 'getUpdatedSettings',
		value: function getUpdatedSettings() {
			var _props = this.props,
			    isJetpack = _props.isJetpack,
			    isLikesModuleActive = _props.isLikesModuleActive,
			    settings = _props.settings;

			var disabledSettings = isJetpack && isLikesModuleActive === false ? {
				// Like button should be disabled if the Likes Jetpack module is deactivated.
				disabled_likes: true
			} : {};

			return (0, _assign2.default)({}, settings, disabledSettings, this.state.values);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    buttons = _props2.buttons,
			    isJetpack = _props2.isJetpack,
			    isSaving = _props2.isSaving,
			    settings = _props2.settings,
			    siteId = _props2.siteId;

			var updatedSettings = this.getUpdatedSettings();
			var updatedButtons = this.state.buttonsPendingSave || buttons;

			return _react2.default.createElement(
				'form',
				{ onSubmit: this.saveChanges, id: 'sharing-buttons', className: 'sharing-settings sharing-buttons' },
				_react2.default.createElement(_querySiteSettings2.default, { siteId: siteId }),
				_react2.default.createElement(_querySharingButtons2.default, { siteId: siteId }),
				isJetpack && _react2.default.createElement(_queryJetpackModules2.default, { siteId: siteId }),
				_react2.default.createElement(_appearance2.default, {
					buttons: updatedButtons,
					values: updatedSettings,
					onChange: this.handleChange,
					onButtonsChange: this.handleButtonsChange,
					initialized: !!buttons && !!settings,
					saving: isSaving }),
				_react2.default.createElement(_options2.default, {
					settings: updatedSettings,
					onChange: this.handleChange,
					saving: isSaving })
			);
		}
	}]);
	return SharingButtons;
}(_react.Component); /**
                      * External dependencies
                      */


SharingButtons.propTypes = {
	buttons: _react.PropTypes.array,
	isSaving: _react.PropTypes.bool,
	isSaveSettingsSuccessful: _react.PropTypes.bool,
	isSaveButtonsSuccessful: _react.PropTypes.bool,
	markSaved: _react.PropTypes.func,
	markChanged: _react.PropTypes.func,
	settings: _react.PropTypes.object,
	siteId: _react.PropTypes.number,
	translate: _react.PropTypes.func
};


var connectComponent = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var settings = (0, _selectors2.getSiteSettings)(state, siteId);
	var buttons = (0, _getSharingButtons2.default)(state, siteId);
	var isJetpack = (0, _selectors3.isJetpackSite)(state, siteId);
	var isLikesModuleActive = (0, _isJetpackModuleActive2.default)(state, siteId, 'likes');
	var isSavingSettings = (0, _selectors2.isSavingSiteSettings)(state, siteId);
	var isSavingButtons = (0, _isSavingSharingButtons2.default)(state, siteId);
	var isSaveSettingsSuccessful = (0, _selectors2.isSiteSettingsSaveSuccessful)(state, siteId);
	var isSaveButtonsSuccessful = (0, _isSharingButtonsSaveSuccessful2.default)(state, siteId);

	return {
		isJetpack: isJetpack,
		isLikesModuleActive: isLikesModuleActive,
		isSaving: isSavingSettings || isSavingButtons,
		isSaveSettingsSuccessful: isSaveSettingsSuccessful,
		isSaveButtonsSuccessful: isSaveButtonsSuccessful,
		settings: settings,
		buttons: buttons,
		siteId: siteId
	};
}, {
	activateModule: _actions5.activateModule,
	errorNotice: _actions4.errorNotice,
	recordGoogleEvent: _actions3.recordGoogleEvent,
	saveSharingButtons: _actions2.saveSharingButtons,
	saveSiteSettings: _actions.saveSiteSettings,
	successNotice: _actions4.successNotice
});

exports.default = (0, _flowRight3.default)(connectComponent, _protectForm.protectForm, _i18nCalypso.localize)(SharingButtons);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/buttons/label-editor.jsx":
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
var decodeEntities = __webpack_require__("./client/lib/formatting/index.js").decodeEntities;

var SharingButtonsLabelEditor = module.exports = React.createClass({
	displayName: 'SharingButtonsLabelEditor',

	propTypes: {
		active: React.PropTypes.bool,
		value: React.PropTypes.string,
		onChange: React.PropTypes.func,
		onClose: React.PropTypes.func,
		hasEnabledButtons: React.PropTypes.bool
	},

	statics: {
		closeKeyCodes: [13, // Return
		27 // Escape
		]
	},

	getDefaultProps: function getDefaultProps() {
		return {
			active: false,
			value: '',
			onChange: function onChange() {},
			onClose: function onClose() {},
			hasEnabledButtons: true
		};
	},

	onKeyDown: function onKeyDown(event) {
		if (-1 !== SharingButtonsLabelEditor.closeKeyCodes.indexOf(event.keyCode)) {
			event.target.blur();
			event.preventDefault();
			this.props.onClose();
		}
	},

	onInputChange: function onInputChange(event) {
		this.props.onChange(event.target.value);
	},

	getNoButtonsNoticeElement: function getNoButtonsNoticeElement() {
		if (!this.props.hasEnabledButtons) {
			return React.createElement(
				'em',
				{ className: 'sharing-buttons-preview__panel-notice' },
				this.translate('This text won\'t appear until you add at least one sharing button.', {
					context: 'Sharing: Buttons'
				})
			);
		}
	},

	render: function render() {
		var classes = classNames('sharing-buttons-preview__panel', 'is-top', 'sharing-buttons-label-editor', {
			'is-active': this.props.active
		});

		return React.createElement(
			'div',
			{ className: classes },
			React.createElement(
				'div',
				{ className: 'sharing-buttons-preview__panel-content' },
				React.createElement(
					'h3',
					{ className: 'sharing-buttons-preview__panel-heading' },
					this.translate('Edit label text', { context: 'Sharing: buttons' })
				),
				React.createElement(
					'p',
					{ className: 'sharing-buttons-preview__panel-instructions' },
					this.translate('Change the text of the sharing buttons label')
				),
				React.createElement('input', { type: 'text', value: decodeEntities(this.props.value), onKeyDown: this.onKeyDown, onChange: this.onInputChange, className: 'sharing-buttons-label-editor__input' }),
				this.getNoButtonsNoticeElement()
			),
			React.createElement(
				'footer',
				{ className: 'sharing-buttons-preview__panel-actions' },
				React.createElement(
					'button',
					{ type: 'button', className: 'button', onClick: this.props.onClose },
					this.translate('Close')
				)
			)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/sharing/buttons/options.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

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

var _xor2 = __webpack_require__("./node_modules/lodash/xor.js");

var _xor3 = _interopRequireDefault(_xor2);

var _values2 = __webpack_require__("./node_modules/lodash/values.js");

var _values3 = _interopRequireDefault(_values2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _partial2 = __webpack_require__("./node_modules/lodash/partial.js");

var _partial3 = _interopRequireDefault(_partial2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _multiCheckbox = __webpack_require__("./client/components/forms/multi-checkbox/index.jsx");

var _multiCheckbox2 = _interopRequireDefault(_multiCheckbox);

var _selectors = __webpack_require__("./client/state/post-types/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/site-settings/selectors.js");

var _getSharingButtons = __webpack_require__("./client/state/selectors/get-sharing-buttons.js");

var _getSharingButtons2 = _interopRequireDefault(_getSharingButtons);

var _selectors4 = __webpack_require__("./client/state/sites/selectors.js");

var _queryPostTypes = __webpack_require__("./client/components/data/query-post-types/index.jsx");

var _queryPostTypes2 = _interopRequireDefault(_queryPostTypes);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var SharingButtonsOptions = function (_Component) {
	(0, _inherits3.default)(SharingButtonsOptions, _Component);

	function SharingButtonsOptions() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SharingButtonsOptions);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SharingButtonsOptions.__proto__ || (0, _getPrototypeOf2.default)(SharingButtonsOptions)).call.apply(_ref, [this].concat(args))), _this), _this.trackTwitterViaAnalyticsEvent = function () {
			_this.props.recordGoogleEvent('Sharing', 'Focussed Twitter Username Field');
		}, _this.handleMultiCheckboxChange = function (name, event) {
			var delta = (0, _xor3.default)(_this.props.settings.sharing_show, event.value);
			_this.props.onChange(name, event.value.length ? event.value : null);
			if (delta.length) {
				var checked = -1 !== event.value.indexOf(delta[0]);
				_this.props.recordGoogleEvent('Sharing', 'Clicked Show Sharing Buttons On Page Checkbox', delta[0], checked ? 1 : 0);
			}
		}, _this.handleTwitterViaChange = function (event) {
			_this.props.onChange(event.target.name, _this.getSanitizedTwitterUsername(event.target.value));
		}, _this.handleChange = function (event) {
			var value = void 0;
			if ('checkbox' === event.target.type) {
				value = event.target.checked;
			} else {
				value = event.target.value;
			}

			if ('jetpack_comment_likes_enabled' === event.target.name) {
				_this.props.recordGoogleEvent('Sharing', 'Clicked Comment Likes On For All Posts Checkbox', 'checked', event.target.checked ? 1 : 0);
			}

			_this.props.onChange(event.target.name, value);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SharingButtonsOptions, [{
		key: 'getSanitizedTwitterUsername',
		value: function getSanitizedTwitterUsername(username) {
			return username ? '@' + username.replace(/\W/g, '').substr(0, 15) : '';
		}
	}, {
		key: 'getPostTypeLabel',
		value: function getPostTypeLabel(postType) {
			var label = void 0;

			switch (postType.name) {
				case 'index':
					label = this.props.translate('Front Page, Archive Pages, and Search Results', { context: 'jetpack' });
					break;
				case 'post':
					label = this.props.translate('Posts');
					break;
				case 'page':
					label = this.props.translate('Pages');
					break;
				case 'attachment':
					label = this.props.translate('Media');
					break;
				case 'portfolio':
					label = this.props.translate('Portfolio Items');
					break;
				default:
					label = postType.label;
			}

			return label;
		}
	}, {
		key: 'getDisplayOptions',
		value: function getDisplayOptions() {
			var _this2 = this;

			return [{ name: 'index' }].concat(this.props.postTypes).map(function (postType) {
				return {
					value: postType.name,
					label: _this2.getPostTypeLabel(postType)
				};
			});
		}
	}, {
		key: 'isTwitterButtonEnabled',
		value: function isTwitterButtonEnabled() {
			return (0, _some3.default)(this.props.buttons, { ID: 'twitter', enabled: true });
		}
	}, {
		key: 'getTwitterViaOptionElement',
		value: function getTwitterViaOptionElement() {
			var _props = this.props,
			    isJetpack = _props.isJetpack,
			    initialized = _props.initialized,
			    isTwitterButtonAllowed = _props.isTwitterButtonAllowed,
			    settings = _props.settings,
			    translate = _props.translate;

			if (!this.isTwitterButtonEnabled() || !isTwitterButtonAllowed) {
				return;
			}

			var option = isJetpack ? 'jetpack-twitter-cards-site-tag' : 'twitter_via';

			return _react2.default.createElement(
				'fieldset',
				{ className: 'sharing-buttons__fieldset' },
				_react2.default.createElement(
					'legend',
					{ className: 'sharing-buttons__fieldset-heading' },
					translate('Twitter username')
				),
				_react2.default.createElement('input', {
					name: option,
					type: 'text',
					placeholder: '@' + translate('username'),
					value: this.getSanitizedTwitterUsername(settings[option]),
					onChange: this.handleTwitterViaChange,
					onFocus: this.trackTwitterViaAnalyticsEvent,
					disabled: !initialized }),
				_react2.default.createElement(
					'p',
					{ className: 'sharing-buttons__fieldset-detail' },
					translate('This will be included in tweets when people share using the Twitter button.')
				)
			);
		}
	}, {
		key: 'getCommentLikesOptionElement',
		value: function getCommentLikesOptionElement() {
			var _props2 = this.props,
			    isJetpack = _props2.isJetpack,
			    initialized = _props2.initialized,
			    settings = _props2.settings,
			    translate = _props2.translate;


			if (isJetpack) {
				return;
			}

			var checked = (0, _get3.default)(settings, 'jetpack_comment_likes_enabled', false);

			return _react2.default.createElement(
				'fieldset',
				{ className: 'sharing-buttons__fieldset' },
				_react2.default.createElement(
					'legend',
					{ className: 'sharing-buttons__fieldset-heading' },
					translate('Comment Likes', { context: 'Sharing options: Header' })
				),
				_react2.default.createElement(
					'label',
					null,
					_react2.default.createElement('input', { name: 'jetpack_comment_likes_enabled',
						type: 'checkbox',
						checked: checked,
						onChange: this.handleChange,
						disabled: !initialized
					}),
					_react2.default.createElement(
						'span',
						null,
						translate('On for all posts', { context: 'Sharing options: Comment Likes' })
					)
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props3 = this.props,
			    initialized = _props3.initialized,
			    saving = _props3.saving,
			    settings = _props3.settings,
			    siteId = _props3.siteId,
			    translate = _props3.translate;

			var changeSharingPostTypes = (0, _partial3.default)(this.handleMultiCheckboxChange, 'sharing_show');

			return _react2.default.createElement(
				'div',
				{ className: 'sharing-buttons__panel' },
				siteId && _react2.default.createElement(_queryPostTypes2.default, { siteId: siteId }),
				_react2.default.createElement(
					'h4',
					null,
					translate('Options')
				),
				_react2.default.createElement(
					'div',
					{ className: 'sharing-buttons__fieldset-group' },
					_react2.default.createElement(
						'fieldset',
						{ className: 'sharing-buttons__fieldset' },
						_react2.default.createElement(
							'legend',
							{ className: 'sharing-buttons__fieldset-heading' },
							translate('Show sharing buttons on', {
								context: 'Sharing options: Header',
								comment: 'Possible values are: "Front page, Archive Pages, and Search Results", "Posts", "Pages", "Media"'
							})
						),
						_react2.default.createElement(_multiCheckbox2.default, {
							name: 'sharing_show',
							options: this.getDisplayOptions(),
							checked: settings.sharing_show,
							onChange: changeSharingPostTypes,
							disabled: !initialized
						})
					),
					this.getCommentLikesOptionElement(),
					this.getTwitterViaOptionElement()
				),
				_react2.default.createElement(
					'button',
					{
						type: 'submit',
						className: 'button is-primary sharing-buttons__submit',
						disabled: saving || !initialized
					},
					saving ? translate('Saving…') : translate('Save Changes')
				)
			);
		}
	}]);
	return SharingButtonsOptions;
}(_react.Component); /**
                      * External dependencies
                      */


SharingButtonsOptions.propTypes = {
	buttons: _react.PropTypes.array,
	initialized: _react.PropTypes.bool,
	isJetpack: _react.PropTypes.bool,
	isTwitterButtonAllowed: _react.PropTypes.bool,
	onChange: _react.PropTypes.func,
	postTypes: _react.PropTypes.array,
	recordGoogleEvent: _react.PropTypes.func,
	saving: _react.PropTypes.bool,
	siteId: _react.PropTypes.number,
	translate: _react.PropTypes.func,
	settings: _react.PropTypes.object
};
SharingButtonsOptions.defaultProps = {
	settings: (0, _freeze2.default)({}),
	onChange: function onChange() {},
	initialized: false,
	saving: false
};


var connectComponent = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	var isJetpack = (0, _selectors4.isJetpackSite)(state, siteId);
	var isTwitterButtonAllowed = !isJetpack || (0, _selectors4.isJetpackMinimumVersion)(state, siteId, '3.4-dev');
	var postTypes = (0, _values3.default)((0, _selectors.getPostTypes)(state, siteId));

	return {
		buttons: (0, _getSharingButtons2.default)(state, siteId),
		initialized: !!postTypes || !!(0, _selectors3.getSiteSettings)(state, siteId),
		isJetpack: isJetpack,
		isTwitterButtonAllowed: isTwitterButtonAllowed,
		postTypes: postTypes,
		siteId: siteId
	};
}, { recordGoogleEvent: _actions.recordGoogleEvent });

exports.default = (0, _flowRight3.default)(connectComponent, _i18nCalypso.localize)(SharingButtonsOptions);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/buttons/preview-action.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _endsWith2 = __webpack_require__("./node_modules/lodash/endsWith.js");

var _endsWith3 = _interopRequireDefault(_endsWith2);

var _startsWith2 = __webpack_require__("./node_modules/lodash/startsWith.js");

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _omit2 = __webpack_require__("./node_modules/lodash/omit.js");

var _omit3 = _interopRequireDefault(_omit2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharingButtonsPreviewAction = function SharingButtonsPreviewAction(props) {
	var active = props.active,
	    position = props.position,
	    icon = props.icon,
	    children = props.children;

	var classes = (0, _classnames2.default)('sharing-buttons-preview-action', {
		'is-active': active,
		'is-top': (0, _startsWith3.default)(position, 'top'),
		'is-right': (0, _endsWith3.default)(position, '-right'),
		'is-bottom': (0, _startsWith3.default)(position, 'bottom'),
		'is-left': (0, _endsWith3.default)(position, '-left')
	});

	return _react2.default.createElement(
		'button',
		(0, _extends3.default)({ type: 'button', className: classes }, (0, _omit3.default)(props, ['active', 'position', 'icon'])),
		icon && _react2.default.createElement(_gridicons2.default, { icon: icon, size: 18 }),
		children
	);
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


SharingButtonsPreviewAction.propTypes = {
	active: _react.PropTypes.bool,
	position: _react.PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
	icon: _react.PropTypes.string,
	onClick: _react.PropTypes.func
};

SharingButtonsPreviewAction.defaultProps = {
	active: true,
	position: 'top-left',
	onClick: function onClick() {}
};

exports.default = SharingButtonsPreviewAction;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/buttons/preview-button.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _photon = __webpack_require__("./node_modules/photon/index.js");

var _photon2 = _interopRequireDefault(_photon);

var _socialLogos = __webpack_require__("./node_modules/social-logos/build/index.js");

var _socialLogos2 = _interopRequireDefault(_socialLogos);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
	displayName: 'SharingButtonsPreviewButton',

	propsTypes: {
		button: _react2.default.PropTypes.object.isRequired,
		style: _react2.default.PropTypes.oneOf(['icon-text', 'icon', 'text', 'official']),
		enabled: _react2.default.PropTypes.bool,
		onMouseOver: _react2.default.PropTypes.func,
		onClick: _react2.default.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			style: 'icon',
			enabled: true,
			onClick: function onClick() {}
		};
	},

	getIcon: function getIcon() {
		var shortnameToSocialLogo = {
			email: 'mail',
			'google-plus-1': 'google-plus-alt',
			pinterest: 'pinterest-alt',
			tumblr: 'tumblr-alt',
			'jetpack-whatsapp': 'whatsapp',
			'press-this': 'wordpress',
			twitter: 'twitter-alt',
			more: 'share'
		};
		if (!this.props.button.custom) {
			var icon = shortnameToSocialLogo[this.props.button.ID] || this.props.button.shortname;

			return _react2.default.createElement(_socialLogos2.default, { icon: icon, size: 18 });
		} else if ('string' === typeof this.props.button.icon) {
			return _react2.default.createElement('span', { className: 'sharing-buttons-preview-button__custom-icon', style: { backgroundImage: 'url(' + (0, _photon2.default)(this.props.button.icon, { width: 16 }) + ')' } });
		}
	},

	onClick: function onClick() {
		_analytics2.default.ga.recordEvent('Sharing', 'Clicked Share Button', this.props.button.ID);
		this.props.onClick();
	},

	render: function render() {
		var classes = (0, _classnames2.default)('sharing-buttons-preview-button', 'style-' + this.props.style, 'share-' + this.props.button.ID, {
			'is-enabled': this.props.enabled,
			'is-custom': this.props.button.custom
		});

		return _react2.default.createElement(
			'div',
			{ className: classes, onClick: this.onClick, onMouseOver: this.props.onMouseOver },
			this.getIcon(),
			_react2.default.createElement(
				'span',
				{ className: 'sharing-buttons-preview-button__service' },
				this.props.button.name
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

/***/ }),

/***/ "./client/my-sites/sharing/buttons/preview-buttons.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

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
var ButtonsPreviewButton = __webpack_require__("./client/my-sites/sharing/buttons/preview-button.jsx"),
    ResizableIframe = __webpack_require__("./client/components/resizable-iframe/index.jsx"),
    previewWidget = __webpack_require__("./client/my-sites/sharing/buttons/preview-widget.js"),
    touchDetect = __webpack_require__("./client/lib/touch-detect/index.js");

var SharingButtonsPreviewButtons = module.exports = React.createClass({
	displayName: 'SharingButtonsPreviewButtons',

	propTypes: {
		buttons: React.PropTypes.array,
		visibility: React.PropTypes.oneOf(['hidden', 'visible']),
		style: React.PropTypes.oneOf(['icon', 'icon-text', 'text', 'official']),
		onButtonClick: React.PropTypes.func,
		showMore: React.PropTypes.bool,
		forceMorePreviewVisible: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			buttons: (0, _freeze2.default)([]),
			style: 'icon',
			onButtonClick: function onButtonClick() {},
			showMore: false,
			forceMorePreviewVisible: false
		};
	},

	getInitialState: function getInitialState() {
		return {
			morePreviewOffset: null,
			morePreviewVisible: false
		};
	},

	componentDidMount: function componentDidMount() {
		this.maybeListenForWidgetMorePreview();
		this.updateMorePreviewVisibility();
		document.addEventListener('click', this.hideMorePreview);
	},

	componentDidUpdate: function componentDidUpdate(prevProps) {
		this.maybeListenForWidgetMorePreview();

		if (prevProps.forceMorePreviewVisible !== this.props.forceMorePreviewVisible || !(0, _isEqual3.default)(prevProps.buttons, this.props.buttons)) {
			// We trigger an update to the preview visibility if buttons have
			// changed to account for a change in visibility from hidden to
			// visible, or vice-versa
			this.updateMorePreviewVisibility();
		}
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('message', this.detectWidgetPreviewChanges);
		document.removeEventListener('click', this.hideMorePreview);
	},

	maybeListenForWidgetMorePreview: function maybeListenForWidgetMorePreview() {
		if ('official' === this.props.style && this.props.showMore) {
			window.removeEventListener('message', this.detectWidgetPreviewChanges);
			window.addEventListener('message', this.detectWidgetPreviewChanges);
		}
	},

	detectWidgetPreviewChanges: function detectWidgetPreviewChanges(event) {
		var preview, offset;

		// Ensure this only triggers in the context of an official preview
		if (!this.refs.iframe) {
			return;
		}
		preview = ReactDom.findDOMNode(this.refs.iframe);

		// Parse the JSON message data
		var data = void 0;
		try {
			data = JSON.parse(event.data);
		} catch (error) {}

		if (data && event.source === preview.contentWindow) {
			if ('more-show' === data.action) {
				offset = { top: preview.offsetTop, left: preview.offsetLeft };
				offset.top += data.rect.top + data.height;
				offset.left += data.rect.left;
				this.setState({
					morePreviewOffset: offset,
					morePreviewVisible: true
				});
			} else if ('more-hide' === data.action) {
				this.hideMorePreview();
			} else if ('more-toggle' === data.action) {
				this.toggleMorePreview();
			} else if ('resize' === data.action) {
				// If the frame size changes, we want to be sure to update the
				// more preview position if it's currently visible
				this.updateMorePreviewVisibility();
			}
		}
	},

	updateMorePreviewVisibility: function updateMorePreviewVisibility() {
		if (!this.props.forceMorePreviewVisible) {
			this.hideMorePreview();
		} else {
			this.showMorePreview();
		}
	},

	showMorePreview: function showMorePreview(event) {
		var moreButton, offset;

		if (event && (event.currentTarget.contains(event.relatedTarget) || touchDetect.hasTouch())) {
			// Only allow the preview to be shown if cursor has moved from outside
			// the element to inside. This restriction should only apply to non-
			// touch devices
			return;
		}

		if ('official' === this.props.style) {
			// To show the more preview when rendering official style buttons,
			// we request that the frame emit a show message with the offset
			ReactDom.findDOMNode(this.refs.iframe).contentWindow.postMessage('more-show', '*');
		} else {
			// For custom styles, we can calculate the offset using the
			// position of the rendered button
			moreButton = ReactDom.findDOMNode(this.refs.moreButton);
			offset = {
				top: moreButton.offsetTop + moreButton.clientHeight,
				left: moreButton.offsetLeft
			};

			this.setState({
				morePreviewOffset: offset,
				morePreviewVisible: true
			});
		}
	},

	toggleMorePreview: function toggleMorePreview(event) {
		if (event) {
			// Prevent document click handler from doubling or counteracting this
			// toggle action
			event.nativeEvent.stopImmediatePropagation();
		}

		if (this.state.morePreviewVisible) {
			this.hideMorePreview();
		} else {
			this.showMorePreview();
		}
	},

	hideMorePreview: function hideMorePreview() {
		if (!this.props.forceMorePreviewVisible && this.state.morePreviewVisible) {
			this.setState({ morePreviewVisible: false });
		}
	},

	getOfficialPreviewElement: function getOfficialPreviewElement() {
		// We filter by visibility for official buttons since we'll never need
		// to include the non-enabled icons in a preview. Non-enabled icons are
		// only needed in the button selection tray, where official buttons are
		// rendered in the text-only style.
		var buttons = (0, _filter3.default)(this.props.buttons, { visibility: this.props.visibility }),
		    previewUrl = previewWidget.generatePreviewUrlFromButtons(buttons, this.props.showMore);

		return React.createElement(ResizableIframe, { ref: 'iframe', src: previewUrl, width: '100%', frameBorder: '0', className: 'official-preview' });
	},

	getCustomPreviewElement: function getCustomPreviewElement() {
		var buttons = this.props.buttons.map(function (button) {
			return React.createElement(ButtonsPreviewButton, { key: button.ID, button: button, enabled: button.visibility === this.props.visibility, style: this.props.style, onClick: this.props.onButtonClick.bind(null, button) });
		}, this);

		if (this.props.showMore) {
			buttons.push(React.createElement(ButtonsPreviewButton, {
				ref: 'moreButton',
				key: 'more',
				button: {
					ID: 'more',
					name: this.translate('More'),
					genericon: '\\f415'
				},
				style: 'icon' === this.props.style ? 'icon-text' : this.props.style,
				onMouseOver: this.showMorePreview,
				onClick: this.toggleMorePreview }));
		}

		return buttons;
	},

	getMorePreviewElement: function getMorePreviewElement() {
		var classes, hiddenButtons;
		if (!this.props.showMore) {
			return;
		}

		classes = classNames('sharing-buttons-preview-buttons__more', {
			'is-visible': this.state.morePreviewVisible
		});

		// The more preview is only ever used to show hidden buttons, so we
		// filter on the current set of buttons
		hiddenButtons = (0, _filter3.default)(this.props.buttons, { visibility: 'hidden' });

		return React.createElement(
			'div',
			{ ref: 'more', className: classes, style: this.state.morePreviewOffset },
			React.createElement(
				'div',
				{ className: 'sharing-buttons-preview-buttons__more-inner' },
				React.createElement(SharingButtonsPreviewButtons, { buttons: hiddenButtons, visibility: 'hidden', style: this.props.style, showMore: false })
			)
		);
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'sharing-buttons-preview-buttons' },
			'official' === this.props.style ? this.getOfficialPreviewElement() : this.getCustomPreviewElement(),
			this.getMorePreviewElement()
		);
	}
});

/***/ }),

/***/ "./client/my-sites/sharing/buttons/preview-placeholder.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var ButtonsPreviewAction = __webpack_require__("./client/my-sites/sharing/buttons/preview-action.jsx");

module.exports = React.createClass({
	displayName: 'SharingButtonsPreviewPlaceholder',

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'sharing-buttons-preview is-placeholder' },
			React.createElement(
				ButtonsPreviewAction,
				{ icon: 'pencil', position: 'top-left', disabled: true },
				this.translate('Edit label text', { context: 'Sharing: Buttons edit label' })
			),
			React.createElement(
				'h2',
				{ className: 'sharing-buttons-preview__heading' },
				this.translate('Preview')
			),
			React.createElement(
				'div',
				{ className: 'sharing-buttons-preview__display' },
				React.createElement('span', { className: 'sharing-buttons-preview__label' }),
				React.createElement('div', { className: 'sharing-buttons-preview__buttons' }),
				React.createElement(
					'div',
					{ className: 'sharing-buttons-preview__reblog-like' },
					React.createElement(
						'a',
						{ className: 'sharing-buttons-preview-button is-enabled style-icon-text sharing-buttons-preview__like' },
						React.createElement('span', { className: 'noticon noticon-like' }),
						this.translate('Like')
					),
					React.createElement(
						'div',
						{ className: 'sharing-buttons-preview__fake-user' },
						React.createElement('img', { src: 'https://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60' })
					),
					React.createElement(
						'div',
						{ className: 'sharing-buttons-preview__fake-like' },
						this.translate('One blogger likes this')
					)
				)
			),
			React.createElement(
				'div',
				{ className: 'sharing-buttons-preview__button-tray-actions' },
				React.createElement(
					ButtonsPreviewAction,
					{ icon: 'pencil', position: 'bottom-left', disabled: true },
					this.translate('Edit visible buttons', { context: 'Sharing: Buttons edit label' })
				),
				React.createElement(
					ButtonsPreviewAction,
					{ icon: 'pencil', position: 'bottom-left', disabled: true },
					this.translate('Edit “More” buttons', { context: 'Sharing: Buttons edit label' })
				)
			)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/sharing/buttons/preview-widget.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var qs = __webpack_require__("./node_modules/querystring-es3/index.js"),
    i18n = __webpack_require__("./node_modules/i18n-calypso/index.js");

var baseUrl = '//widgets.wp.com/sharing-buttons-preview/';

module.exports = {
	generatePreviewUrlFromButtons: function generatePreviewUrlFromButtons(buttons, showMore) {
		var numberOfCustomButtons = 0,
		    query = {};

		// Build the query parameter array of services names to be rendered
		// by the official sharing buttons preview widget
		buttons.forEach(function (button) {
			var index;

			if (button.custom) {
				// Custom buttons previews are specified by index using the
				// name and a URL to the icon
				index = numberOfCustomButtons++;
				query['custom[' + index + '][name]'] = encodeURIComponent(button.name);
				query['custom[' + index + '][icon]'] = encodeURIComponent(button.icon);
			} else {
				query['service[]'] = query['service[]'] || [];
				query['service[]'].push(button.ID);
			}
		});

		if (showMore) {
			query.more = i18n.translate('More');
		}

		return baseUrl + '?' + qs.stringify(query);
	}
};

/***/ }),

/***/ "./client/my-sites/sharing/buttons/preview.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var ButtonsLabelEditor = __webpack_require__("./client/my-sites/sharing/buttons/label-editor.jsx"),
    ButtonsPreviewButtons = __webpack_require__("./client/my-sites/sharing/buttons/preview-buttons.jsx"),
    ButtonsPreviewAction = __webpack_require__("./client/my-sites/sharing/buttons/preview-action.jsx"),
    ButtonsTray = __webpack_require__("./client/my-sites/sharing/buttons/tray.jsx"),
    decodeEntities = __webpack_require__("./client/lib/formatting/index.js").decodeEntities,
    analytics = __webpack_require__("./client/lib/analytics/index.js");

module.exports = React.createClass({
	displayName: 'SharingButtonsPreview',

	propTypes: {
		isPrivateSite: React.PropTypes.bool,
		style: React.PropTypes.oneOf(['icon-text', 'icon', 'text', 'official']),
		label: React.PropTypes.string,
		buttons: React.PropTypes.array,
		showLike: React.PropTypes.bool,
		showReblog: React.PropTypes.bool,
		onLabelChange: React.PropTypes.func,
		onButtonsChange: React.PropTypes.func
	},

	getInitialState: function getInitialState() {
		return {
			isEditingLabel: false,
			buttonsTrayVisibility: null
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			style: 'icon',
			buttons: [],
			showLike: true,
			showReblog: true,
			onLabelChange: function onLabelChange() {},
			onButtonsChange: function onButtonsChange() {}
		};
	},

	toggleEditLabel: function toggleEditLabel() {
		var isEditingLabel = !this.state.isEditingLabel;
		this.setState({ isEditingLabel: isEditingLabel });

		if (isEditingLabel) {
			this.hideButtonsTray();
			analytics.ga.recordEvent('Sharing', 'Clicked Edit Text Link');
		} else {
			analytics.ga.recordEvent('Sharing', 'Clicked Edit Text Done Button');
		}
	},

	showButtonsTray: function showButtonsTray(visibility) {
		this.setState({
			isEditingLabel: false,
			buttonsTrayVisibility: visibility
		});

		analytics.ga.recordEvent('Sharing', 'Clicked Edit Buttons Links', visibility);
	},

	hideButtonsTray: function hideButtonsTray() {
		if (!this.state.buttonsTrayVisibility) {
			return;
		}

		// Hide button tray by resetting state to default
		this.setState({ buttonsTrayVisibility: null });

		analytics.ga.recordEvent('Sharing', 'Clicked Edit Buttons Done Button');
	},

	getButtonsTrayToggleButtonLabel: function getButtonsTrayToggleButtonLabel(visibility, enabledButtonsExist) {
		if ('visible' === visibility) {
			if (enabledButtonsExist) {
				return this.translate('Edit sharing buttons', { context: 'Sharing: Buttons edit label' });
			} else {
				return this.translate('Add sharing buttons', { context: 'Sharing: Buttons edit label' });
			}
		} else if (enabledButtonsExist) {
			return this.translate('Edit “More” buttons', { context: 'Sharing: Buttons edit label' });
		}

		return this.translate('Add “More” button', { context: 'Sharing: Buttons edit label' });
	},

	getButtonsTrayToggleButtonElement: function getButtonsTrayToggleButtonElement(visibility) {
		var enabledButtonsExist = (0, _some3.default)(this.props.buttons, {
			'visibility': visibility,
			enabled: true
		});

		return React.createElement(
			ButtonsPreviewAction,
			{
				active: null === this.state.buttonsTrayVisibility,
				onClick: this.showButtonsTray.bind(null, visibility),
				icon: enabledButtonsExist ? 'pencil' : 'plus',
				position: 'bottom-left' },
			this.getButtonsTrayToggleButtonLabel(visibility, enabledButtonsExist)
		);
	},

	getReblogButtonElement: function getReblogButtonElement() {
		if (this.props.showReblog) {
			return React.createElement(
				'a',
				{ className: 'sharing-buttons-preview-button is-enabled style-icon-text sharing-buttons-preview__reblog' },
				React.createElement('span', { className: 'noticon noticon-reblog' }),
				this.translate('Reblog')
			);
		}
	},

	getLikeButtonElement: function getLikeButtonElement() {
		if (this.props.showLike) {
			return React.createElement(
				'span',
				null,
				React.createElement(
					'a',
					{ className: 'sharing-buttons-preview-button is-enabled style-icon-text sharing-buttons-preview__like' },
					React.createElement('span', { className: 'noticon noticon-like' }),
					this.translate('Like')
				),
				React.createElement(
					'div',
					{ className: 'sharing-buttons-preview__fake-user' },
					React.createElement('img', { src: 'https://1.gravatar.com/avatar/767fc9c115a1b989744c755db47feb60' })
				),
				React.createElement(
					'div',
					{ className: 'sharing-buttons-preview__fake-like' },
					this.translate('One blogger likes this.')
				)
			);
		}
	},

	getPreviewButtonsElement: function getPreviewButtonsElement() {
		var enabledButtons = (0, _filter3.default)(this.props.buttons, { enabled: true });

		if (enabledButtons.length) {
			return React.createElement(ButtonsPreviewButtons, {
				buttons: enabledButtons,
				visibility: 'visible',
				style: this.props.style,
				showMore: 'hidden' === this.state.buttonsTrayVisibility || (0, _some3.default)(this.props.buttons, { visibility: 'hidden' }),
				forceMorePreviewVisible: 'hidden' === this.state.buttonsTrayVisibility });
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			{ className: 'sharing-buttons-preview' },
			React.createElement(
				ButtonsPreviewAction,
				{ active: !this.state.isEditingLabel, onClick: this.toggleEditLabel, icon: 'pencil', position: 'top-left' },
				this.translate('Edit label text', { context: 'Sharing: Buttons edit label' })
			),
			React.createElement(ButtonsLabelEditor, {
				active: this.state.isEditingLabel,
				value: this.props.label,
				onChange: this.props.onLabelChange,
				onClose: this.toggleEditLabel,
				hasEnabledButtons: (0, _some3.default)(this.props.buttons, { enabled: true }) }),
			React.createElement(
				'h2',
				{ className: 'sharing-buttons-preview__heading' },
				this.translate('Preview')
			),
			React.createElement(
				'div',
				{ className: 'sharing-buttons-preview__display' },
				React.createElement(
					'span',
					{ className: 'sharing-buttons-preview__label' },
					decodeEntities(this.props.label)
				),
				React.createElement(
					'div',
					{ className: 'sharing-buttons-preview__buttons' },
					this.getPreviewButtonsElement()
				),
				React.createElement(
					'div',
					{ className: 'sharing-buttons-preview__reblog-like' },
					this.getReblogButtonElement(),
					this.getLikeButtonElement()
				)
			),
			React.createElement(
				'div',
				{ className: 'sharing-buttons-preview__button-tray-actions' },
				this.getButtonsTrayToggleButtonElement('visible'),
				this.getButtonsTrayToggleButtonElement('hidden')
			),
			React.createElement(ButtonsTray, {
				buttons: this.props.buttons,
				style: 'official' === this.props.style ? 'text' : this.props.style,
				visibility: this.state.buttonsTrayVisibility,
				onButtonsChange: this.props.onButtonsChange,
				onClose: this.hideButtonsTray,
				active: null !== this.state.buttonsTrayVisibility,
				limited: this.props.isPrivateSite })
		);
	}
});

/***/ }),

/***/ "./client/my-sites/sharing/buttons/style.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js");

/**
 * Internal dependencies
 */
var analytics = __webpack_require__("./client/lib/analytics/index.js");

module.exports = React.createClass({
	displayName: 'SharingButtonsStyle',

	propTypes: {
		onChange: React.PropTypes.func,
		value: React.PropTypes.string,
		disabled: React.PropTypes.bool
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onChange: function onChange() {},
			disabled: false
		};
	},

	onChange: function onChange(value) {
		this.props.onChange(value);
		analytics.ga.recordEvent('Sharing', 'Clicked Button Style Radio Button', value);
	},

	getOptions: function getOptions() {
		return [{ value: 'icon-text', label: this.translate('Icon & Text', { context: 'Sharing: Sharing button option label' }) }, { value: 'icon', label: this.translate('Icon Only', { context: 'Sharing: Sharing button option label' }) }, { value: 'text', label: this.translate('Text Only', { context: 'Sharing: Sharing button option label' }) }, { value: 'official', label: this.translate('Official Buttons', { context: 'Sharing: Sharing button option label' }) }].map(function (option) {
			return React.createElement(
				'label',
				{ key: option.value },
				React.createElement('input', { name: 'sharing_button_style', type: 'radio', checked: option.value === this.props.value, onChange: this.onChange.bind(null, option.value), disabled: this.props.disabled }),
				option.label
			);
		}, this);
	},

	render: function render() {
		return React.createElement(
			'fieldset',
			{ className: 'sharing-buttons__fieldset' },
			React.createElement(
				'legend',
				{ className: 'sharing-buttons__fieldset-heading' },
				this.translate('Button style', { context: 'Sharing: Sharing button option heading' })
			),
			this.getOptions()
		);
	}
});

/***/ }),

/***/ "./client/my-sites/sharing/buttons/tray.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

var _assign2 = __webpack_require__("./node_modules/lodash/assign.js");

var _assign3 = _interopRequireDefault(_assign2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js");

/**
 * Internal dependencies
 */
var SortableList = __webpack_require__("./client/components/forms/sortable-list/index.jsx"),
    ButtonsPreviewButtons = __webpack_require__("./client/my-sites/sharing/buttons/preview-buttons.jsx"),
    ButtonsPreviewButton = __webpack_require__("./client/my-sites/sharing/buttons/preview-button.jsx");

module.exports = React.createClass({
	displayName: 'SharingButtonsTray',

	propTypes: {
		buttons: React.PropTypes.array,
		style: React.PropTypes.oneOf(['icon-text', 'icon', 'text', 'official']),
		visibility: React.PropTypes.oneOf(['visible', 'hidden']),
		onButtonsChange: React.PropTypes.func,
		onButtonChange: React.PropTypes.func,
		onClose: React.PropTypes.func,
		active: React.PropTypes.bool,
		limited: React.PropTypes.bool
	},

	getInitialState: function getInitialState() {
		return {
			isReordering: false
		};
	},

	componentWillUpdate: function componentWillUpdate(nextProps) {
		if (this.props.visibility !== nextProps.visibility) {
			this.setState({ isReordering: false });
		}
	},

	getDefaultProps: function getDefaultProps() {
		return {
			buttons: [],
			style: 'icon',
			visibility: 'visible',
			onButtonsChange: function onButtonsChange() {},
			onButtonChange: function onButtonChange() {},
			onClose: function onClose() {},
			active: false,
			limited: false
		};
	},

	getHeadingText: function getHeadingText() {
		if ('visible' === this.props.visibility) {
			return this.translate('Edit visible buttons', { context: 'Sharing: Buttons editor heading' });
		} else {
			return this.translate('Edit “More” buttons', { context: 'Sharing: Buttons editor heading' });
		}
	},

	getInstructionText: function getInstructionText() {
		var labels = {
			touch: this.translate('Tap the buttons you would like to add or remove.', { textOnly: true, context: 'Sharing: Buttons editor instructions' }),
			notouch: this.translate('Click the buttons you would like to add or remove.', { textOnly: true, context: 'Sharing: Buttons editor instructions' }),
			'touch-reorder': this.translate('Tap the button you would like to move. Then tap the desired arrow.', { textOnly: true, context: 'Sharing: Buttons editor instructions' }),
			'notouch-reorder': this.translate('Drag and drop to reorder the buttons.', { textOnly: true, context: 'Sharing: Buttons editor instructions' })
		};

		return (0, _keys2.default)(labels).map(function (context) {
			var label = labels[context];

			if ('hidden' === this.props.visibility) {
				label += ' ' + this.translate('These will be shown in a dropdown under the “More” button.', { textOnly: true, context: 'Sharing: Buttons editor instructions' });
			}

			return React.createElement(
				'span',
				{ key: context, className: 'sharing-buttons-preview__panel-instruction-text is-' + context + '-context' },
				label
			);
		}, this);
	},

	getButtonsOfCurrentVisibility: function getButtonsOfCurrentVisibility() {
		return (0, _filter3.default)(this.props.buttons, { visibility: this.props.visibility });
	},

	onButtonsReordered: function onButtonsReordered(order) {
		var buttons = [];

		this.getButtonsOfCurrentVisibility().forEach(function (button, i) {
			buttons[order[i]] = button;
		}, this);

		buttons = buttons.concat(this.props.buttons.filter(function (button) {
			return button.visibility !== this.props.visibility;
		}, this));

		this.props.onButtonsChange(buttons);
	},

	onButtonClick: function onButtonClick(button) {
		var buttons = this.props.buttons.slice(0),
		    currentButton = (0, _find3.default)(buttons, { ID: button.ID }),
		    isEnabled;

		if (button.visibility === this.props.visibility) {
			// Assuming visibility hasn't changed, we can simply toggle the
			// current state
			isEnabled = !button.enabled;
		} else {
			// Otherwise, the user is changing the button's current visibility
			// and we should allow it to remain enabled
			isEnabled = true;
		}

		(0, _assign3.default)(currentButton, {
			enabled: isEnabled,
			visibility: this.props.visibility
		});

		if (!isEnabled) {
			// If toggling from enabled to disabled, we should also remove any
			// visibility property that may have been added so that we can
			// detect and remove unchanged buttons from the save process
			delete button.visibility;
		}

		this.props.onButtonsChange(buttons);
	},

	toggleReorder: function toggleReorder() {
		this.setState({ isReordering: !this.state.isReordering });
	},

	getLimitedButtonsNoticeElement: function getLimitedButtonsNoticeElement() {
		if (this.props.limited) {
			return React.createElement(
				'em',
				{ className: 'sharing-buttons-preview__panel-notice' },
				this.translate('Sharing options are limited on private sites.', {
					context: 'Sharing: Buttons'
				})
			);
		}
	},

	getButtonElements: function getButtonElements() {
		if (this.state.isReordering) {
			var buttons = this.getButtonsOfCurrentVisibility().map(function (button) {
				return React.createElement(ButtonsPreviewButton, { key: button.ID, button: button, enabled: true, style: this.props.style });
			}, this);

			return React.createElement(
				SortableList,
				{ onChange: this.onButtonsReordered },
				buttons
			);
		} else {
			return React.createElement(ButtonsPreviewButtons, { buttons: this.props.buttons, visibility: this.props.visibility, style: this.props.style, showMore: false, onButtonClick: this.onButtonClick });
		}
	},

	render: function render() {
		var classes = classNames('sharing-buttons-preview__panel', 'is-bottom', 'sharing-buttons-tray', 'buttons-' + this.props.visibility, {
			'is-active': this.props.active,
			'is-reordering': this.state.isReordering
		});

		return React.createElement(
			'div',
			{ className: classes },
			React.createElement(
				'div',
				{ className: 'sharing-buttons-preview__panel-content' },
				React.createElement(
					'h3',
					{ className: 'sharing-buttons-preview__panel-heading' },
					this.getHeadingText()
				),
				React.createElement(
					'p',
					{ className: 'sharing-buttons-preview__panel-instructions' },
					this.getInstructionText()
				),
				React.createElement(
					'div',
					{ className: 'sharing-buttons-tray__buttons' },
					this.getButtonElements()
				),
				this.getLimitedButtonsNoticeElement()
			),
			React.createElement(
				'footer',
				{ className: 'sharing-buttons-preview__panel-actions' },
				React.createElement(
					'button',
					{ type: 'button', className: 'button sharing-buttons-preview__panel-action is-left', onClick: this.toggleReorder, disabled: this.getButtonsOfCurrentVisibility().length <= 1 },
					this.state.isReordering ? this.translate('Add / Remove') : this.translate('Reorder')
				),
				React.createElement(
					'button',
					{ type: 'button', className: 'button sharing-buttons-preview__panel-action', onClick: this.props.onClose },
					this.translate('Close')
				)
			)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/sharing/connections/account-dialog-account.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccountDialogAccount = function AccountDialogAccount(_ref) {
	var account = _ref.account,
	    conflicting = _ref.conflicting,
	    onChange = _ref.onChange,
	    selected = _ref.selected;

	var classes = (0, _classnames2.default)('account-dialog-account', {
		'is-connected': account.isConnected,
		'is-conflict': conflicting
	});

	return _react2.default.createElement(
		'li',
		{ className: classes },
		_react2.default.createElement(
			'label',
			{ className: 'account-dialog-account__label' },
			conflicting && _react2.default.createElement(_gridicons2.default, { icon: 'notice' }),
			!account.isConnected && _react2.default.createElement('input', { type: 'radio', onChange: onChange, checked: selected, className: 'account-dialog-account__input' }),
			account.picture && _react2.default.createElement('img', { src: account.picture, alt: account.name, className: 'account-dialog-account__picture' }),
			_react2.default.createElement(
				'span',
				{ className: 'account-dialog-account__name' },
				account.name
			)
		)
	);
}; /**
    * External dependencies
    */


AccountDialogAccount.propTypes = {
	account: _react.PropTypes.shape({
		ID: _react.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]),
		name: _react.PropTypes.string,
		picture: _react.PropTypes.string,
		keyringConnectionId: _react.PropTypes.number,
		isConnected: _react.PropTypes.bool,
		isExternal: _react.PropTypes.bool
	}).isRequired,
	selected: _react.PropTypes.bool,
	conflicting: _react.PropTypes.bool,
	onChange: _react.PropTypes.func
};

AccountDialogAccount.defaultProps = {
	conflicting: false,
	connected: false,
	onChange: function onChange() {},
	selected: false
};

exports.default = AccountDialogAccount;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/account-dialog.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

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

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

var _accountDialogAccount = __webpack_require__("./client/my-sites/sharing/connections/account-dialog-account.jsx");

var _accountDialogAccount2 = _interopRequireDefault(_accountDialogAccount);

var _dialog = __webpack_require__("./client/components/dialog/index.jsx");

var _dialog2 = _interopRequireDefault(_dialog);

var _actions = __webpack_require__("./client/state/notices/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var AccountDialog = function (_Component) {
	(0, _inherits3.default)(AccountDialog, _Component);

	function AccountDialog(props) {
		(0, _classCallCheck3.default)(this, AccountDialog);

		var _this = (0, _possibleConstructorReturn3.default)(this, (AccountDialog.__proto__ || (0, _getPrototypeOf2.default)(AccountDialog)).call(this, props));

		_this.onClose = function (action) {
			var accountToConnect = _this.getAccountToConnect();

			if ('connect' === action && accountToConnect) {
				_this.props.onAccountSelected(_this.props.service, accountToConnect.keyringConnectionId, accountToConnect.ID);
			} else {
				_this.props.onAccountSelected();
			}
		};

		_this.onSelectedAccountChanged = function (account) {
			return _this.setState({ selectedAccount: account });
		};

		_this.state = {
			selectedAccount: null
		};
		return _this;
	}

	(0, _createClass3.default)(AccountDialog, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// When the account dialog is closed, reset the selected account so
			// that the state doesn't leak into a future dialog
			if (!nextProps.visible) {
				this.setState({ selectedAccount: null });
			}
		}
	}, {
		key: 'getSelectedAccount',
		value: function getSelectedAccount() {
			if (this.state.selectedAccount) {
				return this.state.selectedAccount;
			}

			// If no selection has been made, find the first unconnected account
			// from the set of available accounts
			return (0, _find3.default)(this.props.accounts, { isConnected: false });
		}
	}, {
		key: 'getAccountsByConnectedStatus',
		value: function getAccountsByConnectedStatus(isConnected) {
			return (0, _filter3.default)(this.props.accounts, { isConnected: isConnected });
		}
	}, {
		key: 'getAccountToConnect',
		value: function getAccountToConnect() {
			var selectedAccount = this.getSelectedAccount();

			if (selectedAccount && !selectedAccount.isConnected) {
				return selectedAccount;
			}
		}
	}, {
		key: 'areAccountsConflicting',
		value: function areAccountsConflicting(account, otherAccount) {
			return account.keyringConnectionId === otherAccount.keyringConnectionId && account.ID !== otherAccount.ID;
		}
	}, {
		key: 'isSelectedAccountConflicting',
		value: function isSelectedAccountConflicting() {
			var _this2 = this;

			var selectedAccount = this.getSelectedAccount();

			return selectedAccount && this.props.accounts.some(function (maybeConnectedAccount) {
				return maybeConnectedAccount.isConnected && _this2.areAccountsConflicting(maybeConnectedAccount, selectedAccount);
			});
		}
	}, {
		key: 'getAccountElements',
		value: function getAccountElements(accounts) {
			var _this3 = this;

			var selectedAccount = this.getSelectedAccount();

			return accounts.map(function (account) {
				return _react2.default.createElement(_accountDialogAccount2.default, {
					key: [account.keyringConnectionId, account.ID].join(),
					account: account,
					selected: (0, _isEqual3.default)(selectedAccount, account),
					conflicting: account.isConnected && selectedAccount && _this3.areAccountsConflicting(account, selectedAccount),
					onChange: _this3.onSelectedAccountChanged.bind(null, account) });
			});
		}
	}, {
		key: 'getConnectedAccountsContent',
		value: function getConnectedAccountsContent() {
			var connectedAccounts = this.getAccountsByConnectedStatus(true);

			if (connectedAccounts.length) {
				var hasConflictingAccounts = this.isSelectedAccountConflicting();

				return _react2.default.createElement(
					'div',
					{ className: 'account-dialog__connected-accounts' },
					_react2.default.createElement(
						'h3',
						{ className: 'account-dialog__connected-accounts-heading' },
						this.props.translate('Connected')
					),
					_react2.default.createElement(
						'ul',
						{ className: 'account-dialog__accounts' },
						this.getAccountElements(connectedAccounts)
					),
					hasConflictingAccounts && _react2.default.createElement(_notice2.default, {
						status: 'is-warning',
						icon: 'notice',
						text: this.props.translate('The marked connection will be replaced with your selection.'),
						isCompact: true })
				);
			}
		}
	}, {
		key: 'getDisclaimerText',
		value: function getDisclaimerText() {
			if (1 === this.props.accounts.length) {
				// If a single account is available, show a simple confirmation
				// prompt to ask the user to confirm their connection.
				return this.props.translate('Confirm this is the account you would like to authorize. Note that your posts will be automatically shared to this account.', {
					context: 'Sharing: Publicize connection confirmation'
				});
			}

			// Otherwise, we assume that multiple connections exist for a
			// single Keyring connection, and the user must choose which
			// account to connect.
			return this.props.translate('Select the account you wish to authorize. Note that your posts will be shared to the selected account automatically.', {
				context: 'Sharing: Publicize connection confirmation'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var classes = (0, _classnames2.default)('account-dialog', {
				'single-account': 1 === this.props.accounts.length
			}),
			    buttons = [{ action: 'cancel', label: this.props.translate('Cancel') }, { action: 'connect', label: this.props.translate('Connect'), isPrimary: true }];

			return _react2.default.createElement(
				_dialog2.default,
				{ isVisible: this.props.isVisible, buttons: buttons, additionalClassNames: classes, onClose: this.onClose },
				_react2.default.createElement(
					'h2',
					{ className: 'account-dialog__authorizing-service' },
					this.props.translate('Connecting %(service)s', {
						args: { service: this.props.service ? this.props.service.label : '' },
						context: 'Sharing: Publicize connection confirmation'
					})
				),
				_react2.default.createElement(
					'p',
					{ className: 'account-dialog__authorizing-disclaimer' },
					this.getDisclaimerText()
				),
				_react2.default.createElement(
					'ul',
					{ className: 'account-dialog__accounts' },
					this.getAccountElements(this.getAccountsByConnectedStatus(false))
				),
				this.getConnectedAccountsContent()
			);
		}
	}]);
	return AccountDialog;
}(_react.Component);

/**
 * Internal dependencies
 */


AccountDialog.propTypes = {
	accounts: _react.PropTypes.arrayOf(_react2.default.PropTypes.object),
	isVisible: _react.PropTypes.bool,
	onAccountSelected: _react.PropTypes.func,
	service: _react.PropTypes.object,
	translate: _react.PropTypes.func,
	warningNotice: _react.PropTypes.func
};
AccountDialog.defaultProps = {
	accounts: (0, _freeze2.default)([]),
	isVisible: true,
	onAccountSelected: function onAccountSelected() {},
	service: (0, _freeze2.default)({}),
	translate: _identity3.default,
	warningNotice: function warningNotice() {}
};
exports.default = (0, _reactRedux.connect)(null, { warningNotice: _actions.warningNotice })((0, _i18nCalypso.localize)(AccountDialog));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/connection.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _selectors = __webpack_require__("./client/state/current-user/selectors.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _store = __webpack_require__("./client/lib/users/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharingConnection = function (_Component) {
	(0, _inherits3.default)(SharingConnection, _Component);

	function SharingConnection(props) {
		(0, _classCallCheck3.default)(this, SharingConnection);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SharingConnection.__proto__ || (0, _getPrototypeOf2.default)(SharingConnection)).call(this, props));

		_this.disconnect = function () {
			if (!_this.props.isDisconnecting) {
				_this.props.onDisconnect([_this.props.connection]);
			}
		};

		_this.refresh = function () {
			if (!_this.props.isRefreshing) {
				_this.props.onRefresh(_this.props.connection);
			}
		};

		_this.toggleSitewideConnection = function (event) {
			if (!_this.state.isSavingSitewide) {
				var isNowSitewide = event.target.checked;

				_this.setState({ isSavingSitewide: true });
				_this.props.onToggleSitewideConnection(_this.props.connection, isNowSitewide);
				_this.props.recordGoogleEvent('Sharing', 'Clicked Connection Available to All Users Checkbox', _this.props.service.ID, isNowSitewide ? 1 : 0);
			}
		};

		_this.state = {
			isSavingSitewide: false
		};
		return _this;
	}

	(0, _createClass3.default)(SharingConnection, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			if (this.state.isSavingSitewide && this.props.connection.shared !== prevProps.connection.shared) {
				this.setState({ isSavingSitewide: false });
			}
		}
	}, {
		key: 'getProfileImage',
		value: function getProfileImage() {
			if (this.props.connection.external_profile_picture) {
				return _react2.default.createElement('img', {
					src: this.props.connection.external_profile_picture,
					alt: this.props.connection.label,
					className: 'sharing-connection__account-avatar' });
			}

			return _react2.default.createElement(
				'span',
				{ className: 'sharing-connection__account-avatar is-fallback ' + this.props.connection.service },
				_react2.default.createElement(
					'span',
					{ className: 'screen-reader-text' },
					this.props.connection.label
				)
			);
		}
	}, {
		key: 'getReconnectButton',
		value: function getReconnectButton() {
			if ('broken' === this.props.connection.status && this.props.userId === this.props.connection.keyring_connection_user_ID) {
				return _react2.default.createElement(
					'a',
					{ onClick: this.refresh, className: 'sharing-connection__account-action reconnect' },
					this.props.translate('Reconnect')
				);
			}
		}
	}, {
		key: 'getDisconnectButton',
		value: function getDisconnectButton() {
			var userCanDelete = this.props.userHasCaps || this.props.connection.user_ID === this.props.userId;

			if (this.props.showDisconnect && userCanDelete) {
				return _react2.default.createElement(
					'a',
					{ onClick: this.disconnect, className: 'sharing-connection__account-action disconnect' },
					this.props.translate('Disconnect')
				);
			}
		}
	}, {
		key: 'isConnectionShared',
		value: function isConnectionShared() {
			return this.state.isSavingSitewide ? !this.props.connection.shared : this.props.connection.shared;
		}
	}, {
		key: 'getConnectionKeyringUserLabel',
		value: function getConnectionKeyringUserLabel() {
			var _props = this.props,
			    translate = _props.translate,
			    keyringUser = _props.keyringUser,
			    userId = _props.userId;


			if (keyringUser && userId !== keyringUser.ID) {
				return _react2.default.createElement(
					'aside',
					{ className: 'sharing-connection__keyring-user' },
					translate('Connected by %(username)s', {
						args: { username: keyringUser.nice_name },
						context: 'Sharing: connections'
					})
				);
			}
		}
	}, {
		key: 'getConnectionSitewideElement',
		value: function getConnectionSitewideElement() {
			if ('publicize' !== this.props.service.type) {
				return;
			}

			var content = [];

			if (this.props.userHasCaps) {
				content.push(_react2.default.createElement('input', {
					key: 'checkbox',
					type: 'checkbox',
					checked: this.isConnectionShared(),
					onChange: this.toggleSitewideConnection,
					readOnly: this.state.isSavingSitewide }));
			}

			if (this.props.userHasCaps || this.props.connection.shared) {
				content.push(_react2.default.createElement(
					'span',
					{ key: 'label' },
					this.props.translate('Connection available to all administrators, editors, and authors', {
						context: 'Sharing: Publicize'
					})
				));
			}

			if (content.length) {
				return _react2.default.createElement(
					'label',
					{ className: 'sharing-connection__account-sitewide-connection' },
					content
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var connectionSitewideElement = this.getConnectionSitewideElement(),
			    connectionClasses = (0, _classnames2.default)('sharing-connection', {
				disabled: this.props.isDisconnecting || this.props.isRefreshing
			}),
			    statusClasses = (0, _classnames2.default)('sharing-connection__account-status', {
				'is-shareable': undefined !== connectionSitewideElement
			});

			return _react2.default.createElement(
				'li',
				{ className: connectionClasses },
				this.getProfileImage(),
				_react2.default.createElement(
					'div',
					{ className: statusClasses },
					_react2.default.createElement(
						'span',
						{ className: 'sharing-connection__account-name' },
						this.props.connection.external_display
					),
					this.getConnectionKeyringUserLabel(),
					connectionSitewideElement
				),
				_react2.default.createElement(
					'div',
					{ className: 'sharing-connection__account-actions' },
					this.getReconnectButton(),
					this.getDisconnectButton()
				)
			);
		}
	}]);
	return SharingConnection;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


SharingConnection.propTypes = {
	connection: _react.PropTypes.object.isRequired, // The single connection object
	isDisconnecting: _react.PropTypes.bool, // Is a service disconnection request pending?
	isRefreshing: _react.PropTypes.bool, // Is a service refresh request pending?
	onDisconnect: _react.PropTypes.func, // Handler to invoke when disconnecting
	onRefresh: _react.PropTypes.func, // Handler to invoke when refreshing
	onToggleSitewideConnection: _react.PropTypes.func, // Handler to invoke when toggling sitewide connection
	recordGoogleEvent: _react.PropTypes.func,
	service: _react.PropTypes.object.isRequired, // The service to which the connection is made
	showDisconnect: _react.PropTypes.bool, // Display an inline disconnect button
	siteId: _react.PropTypes.number, // The Id of the current site.
	translate: _react.PropTypes.func,
	userHasCaps: _react.PropTypes.bool, // Whether the current users has the caps to delete a connection.
	userId: _react.PropTypes.number // The Id of the current user.
};
SharingConnection.defaultProps = {
	isDisconnecting: false,
	isRefreshing: false,
	onDisconnect: function onDisconnect() {},
	onRefresh: function onRefresh() {},
	onToggleSitewideConnection: function onToggleSitewideConnection() {},
	recordGoogleEvent: function recordGoogleEvent() {},
	showDisconnect: false,
	siteId: 0,
	translate: _identity3.default,
	userHasCaps: false,
	userId: 0
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	var keyringUserId = ownProps.connection.keyring_connection_user_ID;
	var keyringUser = keyringUserId ? _store2.default.getUser(keyringUserId) : null;

	return {
		siteId: siteId,
		keyringUser: keyringUser,
		userHasCaps: (0, _canCurrentUser2.default)(state, siteId, 'edit_others_posts'),
		userId: (0, _selectors.getCurrentUserId)(state)
	};
}, { recordGoogleEvent: _actions.recordGoogleEvent })((0, _i18nCalypso.localize)(SharingConnection));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/connections.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _queryKeyringConnections = __webpack_require__("./client/components/data/query-keyring-connections/index.jsx");

var _queryKeyringConnections2 = _interopRequireDefault(_queryKeyringConnections);

var _queryKeyringServices = __webpack_require__("./client/components/data/query-keyring-services/index.jsx");

var _queryKeyringServices2 = _interopRequireDefault(_queryKeyringServices);

var _queryPublicizeConnections = __webpack_require__("./client/components/data/query-publicize-connections/index.jsx");

var _queryPublicizeConnections2 = _interopRequireDefault(_queryPublicizeConnections);

var _servicesGroup = __webpack_require__("./client/my-sites/sharing/connections/services-group.jsx");

var _servicesGroup2 = _interopRequireDefault(_servicesGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var SharingConnections = function SharingConnections(_ref) {
	var translate = _ref.translate;
	return _react2.default.createElement(
		'div',
		{ className: 'sharing-settings sharing-connections' },
		_react2.default.createElement(_queryKeyringConnections2.default, null),
		_react2.default.createElement(_queryKeyringServices2.default, null),
		_react2.default.createElement(_queryPublicizeConnections2.default, { selectedSite: true }),
		_react2.default.createElement(_servicesGroup2.default, { type: 'publicize', title: translate('Publicize Your Posts') }),
		_react2.default.createElement(_servicesGroup2.default, { type: 'other', title: translate('Other Connections') })
	);
};

SharingConnections.propTypes = {
	translate: _react.PropTypes.func
};

SharingConnections.defaultProps = {
	translate: _identity3.default
};

exports.default = (0, _i18nCalypso.localize)(SharingConnections);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service-action.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _selectors = __webpack_require__("./client/state/sharing/publicize/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var SharingServiceAction = function SharingServiceAction(_ref) {
	var isConnecting = _ref.isConnecting,
	    isDisconnecting = _ref.isDisconnecting,
	    isRefreshing = _ref.isRefreshing,
	    onAction = _ref.onAction,
	    removableConnections = _ref.removableConnections,
	    status = _ref.status,
	    translate = _ref.translate;

	var primary = false,
	    warning = false,
	    label = void 0;

	var isPending = 'unknown' === status || isDisconnecting || isRefreshing || isConnecting;
	var onClick = function onClick(event) {
		event.stopPropagation();
		onAction();
	};

	if ('unknown' === status) {
		label = translate('Loading…', { context: 'Sharing: Publicize status pending button label' });
	} else if (isDisconnecting) {
		label = translate('Disconnecting…', { context: 'Sharing: Publicize disconnect pending button label' });
	} else if (isRefreshing) {
		label = translate('Reconnecting…', { context: 'Sharing: Publicize reconnect pending button label' });
		warning = true;
	} else if (isConnecting) {
		label = translate('Connecting…', { context: 'Sharing: Publicize connect pending button label' });
	} else if ('connected' === status) {
		if (removableConnections.length > 1) {
			label = translate('Disconnect All', { context: 'Sharing: Publicize disconnect button label' });
		} else {
			label = translate('Disconnect', { context: 'Sharing: Publicize disconnect button label' });
		}
	} else if ('reconnect' === status) {
		label = translate('Reconnect', { context: 'Sharing: Publicize reconnect pending button label' });
		warning = true;
	} else {
		label = translate('Connect', { context: 'Sharing: Publicize connect pending button label' });
		primary = true;
	}

	return _react2.default.createElement(
		_button2.default,
		{
			primary: primary,
			scary: warning,
			compact: true,
			onClick: onClick,
			disabled: isPending },
		label
	);
}; /**
    * External dependencies
    */


SharingServiceAction.propTypes = {
	isConnecting: _react.PropTypes.bool,
	isDisconnecting: _react.PropTypes.bool,
	isRefreshing: _react.PropTypes.bool,
	onAction: _react.PropTypes.func,
	removableConnections: _react.PropTypes.arrayOf(_react.PropTypes.object),
	service: _react.PropTypes.object.isRequired,
	status: _react.PropTypes.string,
	translate: _react.PropTypes.func
};

SharingServiceAction.defaultProps = {
	isConnecting: false,
	isDisconnecting: false,
	isRefreshing: false,
	onAction: function onAction() {},
	removableConnections: [],
	status: 'unknown',
	translate: _identity3.default
};

exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var service = _ref2.service;
	return {
		removableConnections: (0, _selectors.getRemovableConnections)(state, service.ID)
	};
})((0, _i18nCalypso.localize)(SharingServiceAction));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service-connected-accounts.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SharingServiceConnectedAccounts = function SharingServiceConnectedAccounts(_ref) {
	var children = _ref.children,
	    connect = _ref.connect,
	    service = _ref.service,
	    translate = _ref.translate;
	return _react2.default.createElement(
		'div',
		{ className: 'sharing-service-accounts-detail' },
		_react2.default.createElement(
			'ul',
			{ className: 'sharing-service-connected-accounts' },
			children
		),
		'publicize' === service.type && _react2.default.createElement(
			_button2.default,
			{ onClick: connect },
			translate('Connect a different account', { comment: 'Sharing: Publicize connections' })
		)
	);
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


SharingServiceConnectedAccounts.propTypes = {
	connect: _react.PropTypes.func, // Handler to invoke when adding a new connection
	service: _react.PropTypes.object.isRequired, // The service object
	translate: _react.PropTypes.func
};

SharingServiceConnectedAccounts.defaultProps = {
	connect: function connect() {},
	translate: _identity3.default
};

exports.default = (0, _i18nCalypso.localize)(SharingServiceConnectedAccounts);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service-description.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var SharingServiceDescription = function (_Component) {
	(0, _inherits3.default)(SharingServiceDescription, _Component);

	function SharingServiceDescription() {
		(0, _classCallCheck3.default)(this, SharingServiceDescription);
		return (0, _possibleConstructorReturn3.default)(this, (SharingServiceDescription.__proto__ || (0, _getPrototypeOf2.default)(SharingServiceDescription)).apply(this, arguments));
	}

	(0, _createClass3.default)(SharingServiceDescription, [{
		key: 'render',
		value: function render() {
			var description = void 0;

			if ('reconnect' === this.props.status) {
				description = this.props.translate('There is an issue connecting to %(service)s.', {
					args: { service: this.props.service.label },
					context: 'Sharing: Publicize'
				});
			} else if ('function' === typeof this.props.descriptions[this.props.service.ID]) {
				description = this.props.descriptions[this.props.service.ID].call(this);
			}

			return _react2.default.createElement(
				'p',
				{ className: 'sharing-service__description' },
				description
			);
		}
	}]);
	return SharingServiceDescription;
}(_react.Component);

SharingServiceDescription.propTypes = {
	descriptions: _react.PropTypes.object,
	numberOfConnections: _react.PropTypes.number,
	translate: _react.PropTypes.func
};
SharingServiceDescription.defaultProps = {
	descriptions: (0, _freeze2.default)({
		facebook: function facebook() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Sharing posts to your news feed.', 'Sharing posts to your news feeds.', {
					count: this.props.numberOfConnections,
					comment: 'Description for Facebook Publicize when one or more accounts are connected'
				});
			}

			return this.props.translate('Share posts to your news feed.', {
				comment: 'Description for Facebook Publicize when no accounts are connected'
			});
		},
		twitter: function twitter() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Sharing posts to your Twitter feed.', 'Sharing posts to your Twitter feeds.', {
					count: this.props.numberOfConnections,
					comment: 'Description for Twitter Publicize when one or more accounts are connected'
				});
			}

			return this.props.translate('Share posts to your Twitter feed.', {
				comment: 'Description for Twitter Publicize when no accounts are connected'
			});
		},
		google_plus: function google_plus() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Commenting and sharing to your profile.', 'Commenting and sharing to your profiles.', {
					count: this.props.numberOfConnections,
					comment: 'Description for Google+ Publicize when one or more accounts are connected'
				});
			}

			return this.props.translate('Comment and share to your profile.', {
				comment: 'Description for Google+ Publicize when no accounts are connected'
			});
		},
		linkedin: function linkedin() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Sharing posts to your connections.', {
					comment: 'Description for LinkedIn Publicize when one or more accounts are connected'
				});
			}

			return this.props.translate('Share posts to your connections.', {
				comment: 'Description for LinkedIn Publicize when no accounts are connected'
			});
		},
		tumblr: function tumblr() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Sharing posts to your Tumblr blog.', 'Sharing posts to your Tumblr blogs.', {
					count: this.props.numberOfConnections,
					comment: 'Description for Tumblr Publicize when one or more accounts are connected'
				});
			}

			return this.props.translate('Share posts to your Tumblr blog.', {
				comment: 'Description for Tumblr Publicize when no accounts are connected'
			});
		},
		path: function path() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Sharing posts to your Path timeline.', 'Sharing posts to your Path timelines.', {
					count: this.props.numberOfConnections,
					comment: 'Description for Path Publicize when one or more accounts are connected'
				});
			}

			return this.props.translate('Share posts to your Path timeline.', {
				comment: 'Description for Path Publicize when no accounts are connected'
			});
		},
		eventbrite: function eventbrite() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Connected to your Eventbrite account.', {
					comment: 'Description for Eventbrite when one or more accounts are connected'
				});
			}

			return this.props.translate('Connect to your Eventbrite account.', {
				comment: 'Description for Eventbrite when no accounts are connected'
			});
		},
		instagram: function instagram() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Connected to your Instagram account.', {
					comment: 'Description for Instagram when one or more accounts are connected'
				});
			}

			return this.props.translate('Connect to use the Instagram widget.', {
				comment: 'Description for Instagram when no accounts are connected'
			});
		},
		google_photos: function google_photos() {
			if (this.props.numberOfConnections > 0) {
				return this.props.translate('Access photos stored in your connected Google account.', {
					comment: 'Description for Google Photos when one or more accounts are connected'
				});
			}

			return this.props.translate('Access photos stored in your Google account{{sup}}*{{/sup}}', {
				components: {
					sup: _react2.default.createElement('sup', null)
				},
				comment: 'Description for Google Photos when no accounts are connected'
			});
		}
	}),
	numberOfConnections: 0,
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(SharingServiceDescription);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service-example.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var SharingServiceExample = function SharingServiceExample(_ref) {
	var image = _ref.image,
	    label = _ref.label,
	    single = _ref.single;
	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)('sharing-service-example', { 'is-single': single }) },
		_react2.default.createElement(
			'div',
			{ className: 'sharing-service-example-screenshot' },
			_react2.default.createElement('img', { src: image.src, alt: image.alt })
		),
		_react2.default.createElement(
			'div',
			{ className: 'sharing-service-example-screenshot-label' },
			label
		)
	);
};

SharingServiceExample.propTypes = {
	image: _react.PropTypes.shape({
		src: _react.PropTypes.string,
		alt: _react.PropTypes.string
	}),
	label: _react.PropTypes.node,
	single: _react.PropTypes.bool
};

SharingServiceExample.defaultProps = {
	single: false
};

exports.default = SharingServiceExample;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service-examples.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _freeze = __webpack_require__("./node_modules/babel-runtime/core-js/object/freeze.js");

var _freeze2 = _interopRequireDefault(_freeze);

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

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _serviceExample = __webpack_require__("./client/my-sites/sharing/connections/service-example.jsx");

var _serviceExample2 = _interopRequireDefault(_serviceExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module constants
 */
/**
 * Whitelist of services that we provide examples for.
 *
 * When adding examples for more services, please update the whitelist in addition to adding
 * a method with the example's content.
 *
 * @type {string[]}
 */


/**
 * Internal dependencies
 */
var SERVICES_WHITELIST = ['bandpage', 'eventbrite', 'facebook', 'google_plus', 'instagram', 'linkedin', 'path', 'tumblr', 'twitter', 'google_photos']; /**
                                                                                                                                                        * External dependencies
                                                                                                                                                        */

var SharingServiceExamples = function (_Component) {
	(0, _inherits3.default)(SharingServiceExamples, _Component);

	function SharingServiceExamples() {
		(0, _classCallCheck3.default)(this, SharingServiceExamples);
		return (0, _possibleConstructorReturn3.default)(this, (SharingServiceExamples.__proto__ || (0, _getPrototypeOf2.default)(SharingServiceExamples)).apply(this, arguments));
	}

	(0, _createClass3.default)(SharingServiceExamples, [{
		key: 'getSharingButtonsLink',
		value: function getSharingButtonsLink() {
			return this.props.site ? '/sharing/buttons/' + this.props.site.slug : 'https://support.wordpress.com/sharing/';
		}
	}, {
		key: 'bandpage',
		value: function bandpage() {
			return [{
				image: {
					src: '/calypso/images/sharing/bandpage-widget.png',
					alt: this.props.translate('Add a BandPage widget', { textOnly: true })
				},
				label: this.props.translate('Add a {{link}}BandPage widget{{/link}} to display your music, photos, videos bio, and event listings.', {
					components: {
						link: _react2.default.createElement('a', { href: 'https://support.wordpress.com/widgets/bandpage-widget/' })
					}
				})
			}];
		}
	}, {
		key: 'eventbrite',
		value: function eventbrite() {
			return [{
				image: {
					src: '/calypso/images/sharing/eventbrite-list.png',
					alt: this.props.translate('Connect Eventbrite to list your events', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} Eventbrite to {{link}}list all your events{{/link}} on a page.', {
					components: {
						strong: _react2.default.createElement('strong', null),
						link: _react2.default.createElement('a', { href: 'https://support.wordpress.com/eventbrite' })
					}
				})
			}, {
				image: {
					src: '/calypso/images/sharing/eventbrite-widget.png',
					alt: this.props.translate('Add an Eventbrite widget to your page', { textOnly: true })
				},
				label: this.props.translate('Add an {{link}}Eventbrite widget{{/link}} to display a list of your upcoming events.', {
					components: {
						link: _react2.default.createElement('a', { href: 'https://support.wordpress.com/widgets/eventbrite-event-calendarlisting-widget/' })
					}
				})
			}];
		}
	}, {
		key: 'google_photos',
		value: function google_photos() {
			return [{
				image: {
					src: '/calypso/images/sharing/google-photos.png',
					alt: this.props.translate('Connect to use photos stored in your Google account directly inside the editor', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} to use photos stored in your Google account directly inside the editor. ' + '{{sup}}*{{/sup}}Note that new photos may take a few minutes to appear', {
					components: {
						strong: _react2.default.createElement('strong', null),
						sup: _react2.default.createElement('sup', null)
					}
				})
			}];
		}
	}, {
		key: 'facebook',
		value: function facebook() {
			return [{
				image: {
					src: '/calypso/images/sharing/facebook-profile.png',
					alt: this.props.translate('Share posts to your Facebook page or profile', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} to automatically share posts on your Facebook page or profile.', {
					components: {
						strong: _react2.default.createElement('strong', null)
					}
				})
			}, {
				image: {
					src: '/calypso/images/sharing/facebook-sharing.png',
					alt: this.props.translate('Add a sharing button', { textOnly: true })
				},
				label: this.props.translate('Add a {{link}}sharing button{{/link}} to your posts so readers can share your story with their friends.', {
					components: {
						link: _react2.default.createElement('a', { href: this.getSharingButtonsLink() })
					}
				})
			}];
		}
	}, {
		key: 'google_plus',
		value: function google_plus() {
			return [{
				image: {
					src: '/calypso/images/sharing/google-publicize.png',
					alt: this.props.translate('Share posts to your Google+ page', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} to automatically share posts to your Google+ page.', {
					components: {
						strong: _react2.default.createElement('strong', null)
					}
				})
			}, {
				image: {
					src: '/calypso/images/sharing/google-sharing.png',
					alt: this.props.translate('Add a sharing button', { textOnly: true })
				},
				label: this.props.translate('Add a {{link}}sharing button{{/link}} to your posts so readers can share your story with their circles.', {
					components: {
						link: _react2.default.createElement('a', { href: this.getSharingButtonsLink() })
					}
				})
			}];
		}
	}, {
		key: 'instagram',
		value: function instagram() {
			return [{
				image: {
					src: '/calypso/images/sharing/instagram-widget.png',
					alt: this.props.translate('Add an Instagram widget', { textOnly: true })
				},
				label: this.props.translate('Add an {{link}}Instagram widget{{/link}} to display your latest photos.', {
					components: {
						link: _react2.default.createElement('a', { href: 'https://support.wordpress.com/instagram/instagram-widget/' })
					}
				})
			}];
		}
	}, {
		key: 'linkedin',
		value: function linkedin() {
			return [{
				image: {
					src: '/calypso/images/sharing/linkedin-publicize.png',
					alt: this.props.translate('Share posts with your LinkedIn connections', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} to automatically share posts with your LinkedIn connections.', {
					components: {
						strong: _react2.default.createElement('strong', null)
					}
				})
			}, {
				image: {
					src: '/calypso/images/sharing/linkedin-sharing.png',
					alt: this.props.translate('Add a sharing button', { textOnly: true })
				},
				label: this.props.translate('Add a {{link}}sharing button{{/link}} to your posts so readers can share your story with their connections.', {
					components: {
						link: _react2.default.createElement('a', { href: this.getSharingButtonsLink() })
					}
				})
			}];
		}
	}, {
		key: 'path',
		value: function path() {
			return [{
				image: {
					src: '/calypso/images/sharing/path-publicize.png',
					alt: this.props.translate('Share posts to your Path timeline', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} to automatically share posts to your Path timeline.', {
					components: {
						strong: _react2.default.createElement('strong', null)
					}
				})
			}];
		}
	}, {
		key: 'tumblr',
		value: function tumblr() {
			return [{
				image: {
					src: '/calypso/images/sharing/tumblr-publicize.png',
					alt: this.props.translate('Share posts to your Tumblr blog', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} to automatically share posts to your Tumblr blog.', {
					components: {
						strong: _react2.default.createElement('strong', null)
					}
				})
			}, {
				image: {
					src: '/calypso/images/sharing/tumblr-sharing.png',
					alt: this.props.translate('Add a sharing button', { textOnly: true })
				},
				label: this.props.translate('Add a {{link}}sharing button{{/link}} to your posts so readers can share your story with their followers.', {
					components: {
						link: _react2.default.createElement('a', { href: this.getSharingButtonsLink() })
					}
				})
			}];
		}
	}, {
		key: 'twitter',
		value: function twitter() {
			return [{
				image: {
					src: '/calypso/images/sharing/twitter-publicize.png',
					alt: this.props.translate('Share posts to your Twitter followers', { textOnly: true })
				},
				label: this.props.translate('{{strong}}Connect{{/strong}} to automatically share posts with your Twitter followers.', {
					components: {
						strong: _react2.default.createElement('strong', null)
					}
				})
			}, {
				image: {
					src: '/calypso/images/sharing/twitter-timeline.png',
					alt: this.props.translate('Add a Twitter Timeline Widget', { textOnly: true })
				},
				label: this.props.translate('Add a {{link}}Twitter Timeline Widget{{/link}} to display your latest tweets on your site.', {
					components: {
						link: _react2.default.createElement('a', { href: 'https://support.wordpress.com/widgets/twitter-timeline-widget/' })
					}
				})
			}];
		}
	}, {
		key: 'render',
		value: function render() {
			if (!(0, _includes3.default)(SERVICES_WHITELIST, this.props.service.ID)) {
				return _react2.default.createElement('div', { className: 'sharing-service-examples' });
			}

			var examples = this[this.props.service.ID]();

			return _react2.default.createElement(
				'div',
				{ className: 'sharing-service-examples' },
				examples.map(function (example, index) {
					return _react2.default.createElement(_serviceExample2.default, { key: index, image: example.image, label: example.label, single: 1 === examples.length });
				})
			);
		}
	}]);
	return SharingServiceExamples;
}(_react.Component);

SharingServiceExamples.propTypes = {
	service: _react.PropTypes.object.isRequired,
	site: _react.PropTypes.object,
	translate: _react.PropTypes.func
};
SharingServiceExamples.defaultProps = {
	site: (0, _freeze2.default)({}),
	translate: _identity3.default
};
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		site: (0, _selectors.getSelectedSite)(state)
	};
})((0, _i18nCalypso.localize)(SharingServiceExamples));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service-placeholder.jsx":
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

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _foldableCard = __webpack_require__("./client/components/foldable-card/index.jsx");

var _foldableCard2 = _interopRequireDefault(_foldableCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var SharingServicePlaceholder = function (_Component) {
	(0, _inherits3.default)(SharingServicePlaceholder, _Component);

	function SharingServicePlaceholder() {
		(0, _classCallCheck3.default)(this, SharingServicePlaceholder);
		return (0, _possibleConstructorReturn3.default)(this, (SharingServicePlaceholder.__proto__ || (0, _getPrototypeOf2.default)(SharingServicePlaceholder)).apply(this, arguments));
	}

	(0, _createClass3.default)(SharingServicePlaceholder, [{
		key: 'render',
		value: function render() {
			var header = _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_gridicons2.default, {
					icon: 'share',
					size: 48,
					className: 'sharing-service__logo' }),
				_react2.default.createElement(
					'div',
					{ className: 'sharing-service__name' },
					_react2.default.createElement('h2', null),
					_react2.default.createElement('p', { className: 'sharing-service__description' })
				)
			);

			var summary = _react2.default.createElement(
				_button2.default,
				{ compact: true, disabled: true },
				this.props.translate('Loading')
			);

			return _react2.default.createElement(
				'li',
				{ className: 'sharing-service is-placeholder' },
				_react2.default.createElement(
					_foldableCard2.default,
					{
						header: header,
						summary: summary,
						className: 'sharing-service',
						compact: true },
					_react2.default.createElement('div', null)
				)
			);
		}
	}]);
	return SharingServicePlaceholder;
}(_react.Component); /**
                      * External dependencies
                      */


SharingServicePlaceholder.propTypes = {
	translate: _react.PropTypes.func
};
SharingServicePlaceholder.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(SharingServicePlaceholder);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service-tip.jsx":
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

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module constants
 */
/**
 * Whitelist of services that we provide tips for.
 *
 * When adding tips for more services, please update the whitelist in addition to adding
 * a method with the tip's content.
 *
 * @type {string[]}
 */
var SERVICES_WHITELIST = ['facebook', 'twitter', 'instagram', 'google_plus', 'eventbrite']; /**
                                                                                             * External dependencies
                                                                                             */

var SharingServiceTip = function (_Component) {
	(0, _inherits3.default)(SharingServiceTip, _Component);

	function SharingServiceTip() {
		(0, _classCallCheck3.default)(this, SharingServiceTip);
		return (0, _possibleConstructorReturn3.default)(this, (SharingServiceTip.__proto__ || (0, _getPrototypeOf2.default)(SharingServiceTip)).apply(this, arguments));
	}

	(0, _createClass3.default)(SharingServiceTip, [{
		key: 'facebook',
		value: function facebook() {
			return this.props.translate('You can also add a {{likeBoxLink}}Like Box{{/likeBoxLink}}, a {{shareButtonLink}}share button{{/shareButtonLink}}, or {{embedLink}}embed{{/embedLink}} your page or profile on your site.', {
				components: {
					likeBoxLink: _react2.default.createElement('a', { href: 'https://support.wordpress.com/facebook-integration/#facebook-like-box' }),
					shareButtonLink: _react2.default.createElement('a', { href: 'https://support.wordpress.com/sharing/' }),
					embedLink: _react2.default.createElement('a', { href: 'https://support.wordpress.com/facebook-integration/facebook-embeds/' })
				},
				context: 'Sharing: Tip in settings'
			});
		}
	}, {
		key: 'twitter',
		value: function twitter() {
			return this.props.translate('You can also add a {{widgetLink}}Twitter Timeline Widget{{/widgetLink}} to display any public timeline on your site.', {
				components: {
					widgetLink: _react2.default.createElement('a', { href: 'https://support.wordpress.com/widgets/twitter-timeline-widget/' })
				},
				context: 'Sharing: Tip in settings'
			});
		}
	}, {
		key: 'instagram',
		value: function instagram() {
			return this.props.translate('You can also add an {{widgetLink}}Instagram Widget{{/widgetLink}} to display your latest Instagram photos on your site.', {
				components: {
					widgetLink: _react2.default.createElement('a', { href: 'https://support.wordpress.com/instagram/instagram-widget/' })
				},
				context: 'Sharing: Tip in settings'
			});
		}
	}, {
		key: 'google_plus',
		value: function google_plus() {
			return this.props.translate('You can also {{embedLink}}embed a Google+ post{{/embedLink}} onto a post or page.', {
				components: {
					embedLink: _react2.default.createElement('a', { href: 'https://support.wordpress.com/google-plus-embeds/' })
				},
				context: 'Sharing: Tip in settings'
			});
		}
	}, {
		key: 'eventbrite',
		value: function eventbrite() {
			return this.props.translate('You can also add the {{embedLink}}Eventbrite widget{{/embedLink}} to display events in a sidebar.', {
				components: {
					embedLink: _react2.default.createElement('a', { href: 'https://support.wordpress.com/widgets/eventbrite-event-calendarlisting-widget/' })
				},
				context: 'Sharing: Tip in settings'
			});
		}
	}, {
		key: 'render',
		value: function render() {
			if (!(0, _includes3.default)(SERVICES_WHITELIST, this.props.service.ID)) {
				return _react2.default.createElement('div', { className: 'sharing-service-tip' });
			}

			return _react2.default.createElement(
				'div',
				{ className: 'sharing-service-tip' },
				_react2.default.createElement(_gridicons2.default, { icon: 'info', size: 18 }),
				this[this.props.service.ID]()
			);
		}
	}]);
	return SharingServiceTip;
}(_react.Component);

SharingServiceTip.propTypes = {
	service: _react.PropTypes.object.isRequired,
	translate: _react.PropTypes.func
};
SharingServiceTip.defaultProps = {
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(SharingServiceTip);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/service.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SharingService = undefined;

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

var _isFunction2 = __webpack_require__("./node_modules/lodash/isFunction.js");

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _replace2 = __webpack_require__("./node_modules/lodash/replace.js");

var _replace3 = _interopRequireDefault(_replace2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _identity2 = __webpack_require__("./node_modules/lodash/identity.js");

var _identity3 = _interopRequireDefault(_identity2);

exports.connectFor = connectFor;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _socialLogos = __webpack_require__("./node_modules/social-logos/build/index.js");

var _socialLogos2 = _interopRequireDefault(_socialLogos);

var _accountDialog = __webpack_require__("./client/my-sites/sharing/connections/account-dialog.jsx");

var _accountDialog2 = _interopRequireDefault(_accountDialog);

var _actions = __webpack_require__("./client/state/sharing/publicize/actions.js");

var _actions2 = __webpack_require__("./client/state/notices/actions.js");

var _connection = __webpack_require__("./client/my-sites/sharing/connections/connection.jsx");

var _connection2 = _interopRequireDefault(_connection);

var _foldableCard = __webpack_require__("./client/components/foldable-card/index.jsx");

var _foldableCard2 = _interopRequireDefault(_foldableCard);

var _selectors = __webpack_require__("./client/state/sharing/selectors.js");

var _selectors2 = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sharing/keyring/selectors.js");

var _selectors4 = __webpack_require__("./client/state/sharing/publicize/selectors.js");

var _selectors5 = __webpack_require__("./client/state/ui/selectors.js");

var _actions3 = __webpack_require__("./client/state/analytics/actions.js");

var _actions4 = __webpack_require__("./client/state/sharing/keyring/actions.js");

var _serviceAction = __webpack_require__("./client/my-sites/sharing/connections/service-action.jsx");

var _serviceAction2 = _interopRequireDefault(_serviceAction);

var _serviceConnectedAccounts = __webpack_require__("./client/my-sites/sharing/connections/service-connected-accounts.jsx");

var _serviceConnectedAccounts2 = _interopRequireDefault(_serviceConnectedAccounts);

var _serviceDescription = __webpack_require__("./client/my-sites/sharing/connections/service-description.jsx");

var _serviceDescription2 = _interopRequireDefault(_serviceDescription);

var _serviceExamples = __webpack_require__("./client/my-sites/sharing/connections/service-examples.jsx");

var _serviceExamples2 = _interopRequireDefault(_serviceExamples);

var _serviceTip = __webpack_require__("./client/my-sites/sharing/connections/service-tip.jsx");

var _serviceTip2 = _interopRequireDefault(_serviceTip);

var _sharing = __webpack_require__("./client/lib/sharing/index.js");

var _sharing2 = _interopRequireDefault(_sharing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var SharingService = exports.SharingService = function (_Component) {
	(0, _inherits3.default)(SharingService, _Component);

	/**
  * Checks whether any connection can be removed.
  *
  * @return {boolean} true if there's any removable; otherwise, false.
  */


	/**
  * Lets users re-authenticate their Keyring connections if lost.
  *
  * @param {Array} connections Optional. Broken connections.
  *                            Default: All broken connections for this service.
  */


	/**
  * Establishes a new connection.
  *
  * @param {Object} service             Service to connect to.
  * @param {Number} keyringConnectionId Keyring conneciton ID.
  * @param {Number} externalUserId      Optional. User ID for the service. Default: 0.
  */
	function SharingService() {
		(0, _classCallCheck3.default)(this, SharingService);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SharingService.__proto__ || (0, _getPrototypeOf2.default)(SharingService)).apply(this, arguments));

		_this.performAction = function () {
			var connectionStatus = _this.getConnectionStatus(_this.props.service.ID);

			// Depending on current status, perform an action when user clicks the
			// service action button
			if ('connected' === connectionStatus && _this.canRemoveConnection()) {
				_this.removeConnection();
				_this.props.recordGoogleEvent('Sharing', 'Clicked Disconnect Button', _this.props.service.ID);
			} else if ('reconnect' === connectionStatus) {
				_this.refresh();
				_this.props.recordGoogleEvent('Sharing', 'Clicked Reconnect Button', _this.props.service.ID);
			} else {
				_this.addConnection(_this.props.service);
				_this.props.recordGoogleEvent('Sharing', 'Clicked Connect Button', _this.props.service.ID);
			}
		};

		_this.addConnection = function (service, keyringConnectionId) {
			var externalUserId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			_this.setState({ isConnecting: true });

			if (service) {
				if (keyringConnectionId) {
					// Since we have a Keyring connection to work with, we can immediately
					// create or update the connection
					_this.createOrUpdateConnection(keyringConnectionId, externalUserId);
					_this.props.recordGoogleEvent('Sharing', 'Clicked Connect Button in Modal', _this.props.service.ID);
				} else {
					// Attempt to create a new connection. If a Keyring connection ID
					// is not provided, the user will need to authorize the app
					(0, _sharing2.default)(service.connect_URL, function () {
						// When the user has finished authorizing the connection
						// (or otherwise closed the window), force a refresh
						_this.props.requestKeyringConnections();

						// In the case that a Keyring connection doesn't exist, wait for app
						// authorization to occur, then display with the available connections
						_this.setState({ isAwaitingConnections: true });
					});
				}
			} else {
				// If an account wasn't selected from the dialog or the user cancels
				// the connection, the dialog should simply close
				_this.props.warningNotice(_this.props.translate('The connection could not be made because no account was selected.', {
					comment: 'Warning notice when sharing connection dialog was closed without selection'
				}), { id: 'publicize' });
				_this.setState({ isConnecting: false });
				_this.props.recordGoogleEvent('Sharing', 'Clicked Cancel Button in Modal', _this.props.service.ID);
			}

			// Reset active account selection
			_this.setState({ isSelectingAccount: false });
		};

		_this.createOrUpdateConnection = function (keyringConnectionId) {
			var externalUserId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			var existingConnection = (0, _find3.default)(_this.props.siteUserConnections, { keyring_connection_ID: keyringConnectionId });

			if (_this.props.siteId && existingConnection) {
				// If a Keyring connection is already in use by another connection,
				// we should trigger an update. There should only be one connection,
				// so we're correct in using the connection ID from the first
				_this.props.updateSiteConnection(existingConnection, { external_user_ID: externalUserId });
			} else {
				_this.props.createSiteConnection(_this.props.siteId, keyringConnectionId, externalUserId);
			}
		};

		_this.connectAnother = function () {
			_this.props.recordGoogleEvent('Sharing', 'Clicked Connect Another Account Button', _this.props.service.ID);
			_this.addConnection(_this.props.service);
		};

		_this.toggleSitewideConnection = function (connection, shared) {
			return _this.props.updateSiteConnection(connection, { shared: shared });
		};

		_this.refresh = function () {
			var connections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.brokenConnections;

			_this.setState({ isRefreshing: true });

			_this.getConnections(connections).map(function (connection) {
				var keyringConnection = (0, _find3.default)(_this.props.keyringConnections, { ID: connection.keyring_connection_ID });

				if (keyringConnection) {
					// Attempt to create a new connection. If a Keyring connection ID
					// is not provided, the user will need to authorize the app
					(0, _sharing2.default)(connection.refresh_URL, function () {
						// When the user has finished authorizing the connection
						// (or otherwise closed the window), force a refresh
						_this.fetchConnection(connection);
					});
				} else {
					_this.props.errorNotice(_this.props.translate('The %(service)s account was unable to be reconnected.', {
						args: { service: _this.props.service.label },
						context: 'Sharing: Publicize reconnection confirmation'
					}), { id: 'publicize' });
				}
			});
		};

		_this.fetchConnection = function (connection) {
			_this.props.fetchConnection(_this.props.siteId, connection.ID);
		};

		_this.canRemoveConnection = function () {
			return _this.props.removableConnections.length > 0;
		};

		_this.removeConnection = function () {
			var connections = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.removableConnections;

			_this.setState({ isDisconnecting: true });
			connections.map(_this.props.deleteSiteConnection);
		};

		_this.state = {
			isOpen: false, // The service is visually opened
			isConnecting: false, // A pending connection is awaiting authorization
			isDisconnecting: false, // A pending disconnection is awaiting completion
			isRefreshing: false, // A pending refresh is awaiting completion
			isSelectingAccount: false, // The modal to select an account is open
			isAwaitingConnections: false // Waiting for Keyring Connections request to finish
		};
		return _this;
	}

	/**
  * Deletes the passed connections.
  *
  * @param {Array} connections Optional. Connections to be deleted.
  *                            Default: All connections for this service.
  */


	/**
  * Fetch connections
  *
  * @param {Object} connection Connection to update.
  */


	/**
  * Sets a connection to be site-wide or not.
  *
  * @param  {Object}   connection Connection to update.
  * @param  {Boolean}  shared     Whether the connection can be used by other users.
  * @return {Function}            Action thunk
  */


	/**
  * Create or update the connection
  *
  * @param {Number} keyringConnectionId Keyring conneciton ID.
  * @param {Number} externalUserId      Optional. User ID for the service. Default: 0.
  */


	/**
  * Triggers an action based on the current connection status.
  */


	(0, _createClass3.default)(SharingService, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!(0, _isEqual3.default)(this.props.siteUserConnections, nextProps.siteUserConnections)) {
				this.setState({
					isConnecting: false,
					isDisconnecting: false,
					isSelectingAccount: false
				});
			}

			if (!(0, _isEqual3.default)(this.props.brokenConnections, nextProps.brokenConnections)) {
				this.setState({ isRefreshing: false });
			}

			if (this.state.isAwaitingConnections) {
				this.setState({ isAwaitingConnections: false });

				if (this.didKeyringConnectionSucceed(nextProps.availableExternalAccounts)) {
					this.setState({ isSelectingAccount: true });
				}
			}
		}

		/**
   * Get current connections
   *
   * @param  {array} overrides Optional. If it is passed, just return the argument
   *                           instead of the default connections.
   * @return {array} connections
   */

	}, {
		key: 'getConnections',
		value: function getConnections(overrides) {
			return overrides || this.props.siteUserConnections;
		}

		/**
   * Given a service name and optional site ID, returns the current status of the
   * service's connection.
   *
   * @param {string} service The name of the service to check
   * @return {string} Connection status.
   */

	}, {
		key: 'getConnectionStatus',
		value: function getConnectionStatus(service) {
			var status = void 0;

			if (this.props.isFetching) {
				// When connections are still loading, we don't know the status
				status = 'unknown';
			} else if (!(0, _some3.default)(this.getConnections(), { service: service })) {
				// If no connections exist, the service isn't connected
				status = 'not-connected';
			} else if ((0, _some3.default)(this.getConnections(), { status: 'broken' })) {
				// A problematic connection exists
				status = 'reconnect';
			} else {
				// If all else passes, assume service is connected
				status = 'connected';
			}

			return status;
		}

		/**
   * Given a service name and optional site ID, returns whether the Keyring
   * authorization attempt succeeded in creating new Keyring account options.
   *
   * @param {Array} externalAccounts Props to check on if a keyring connection succeeded.
   * @return {Boolean} Whether the Keyring authorization attempt succeeded
   */

	}, {
		key: 'didKeyringConnectionSucceed',
		value: function didKeyringConnectionSucceed(externalAccounts) {
			var hasAnyConnectionOptions = (0, _some3.default)(externalAccounts, { isConnected: false });

			if (!externalAccounts.length) {
				// At this point, if there are no available accounts to
				// select, we must assume the user closed the popup
				// before completing the authorization step.
				this.props.failCreateConnection({
					message: this.props.translate('The %(service)s connection could not be made because no account was selected.', {
						args: { service: this.props.service.label },
						context: 'Sharing: Publicize connection confirmation'
					})
				});
				this.setState({ isConnecting: false });
			} else if (!hasAnyConnectionOptions) {
				// Similarly warn user if all options are connected
				this.props.failCreateConnection({
					message: this.props.translate('The %(service)s connection could not be made because all available accounts are already connected.', {
						args: { service: this.props.service.label },
						context: 'Sharing: Publicize connection confirmation'
					})
				});
				this.setState({ isConnecting: false });
			}

			return externalAccounts.length && hasAnyConnectionOptions;
		}
	}, {
		key: 'renderLogo',
		value: function renderLogo() {
			return (
				/* eslint-disable wpcalypso/jsx-classname-namespace */
				_react2.default.createElement(_socialLogos2.default, {
					icon: (0, _replace3.default)(this.props.service.ID, '_', '-'),
					size: 48,
					className: 'sharing-service__logo' })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var connections = this.getConnections();
			var connectionStatus = this.getConnectionStatus(this.props.service.ID);
			var classNames = (0, _classnames2.default)('sharing-service', this.props.service.ID, connectionStatus, {
				'is-open': this.state.isOpen
			});
			var accounts = this.state.isSelectingAccount ? this.props.availableExternalAccounts : [];

			var header = _react2.default.createElement(
				'div',
				null,
				this.renderLogo(),
				_react2.default.createElement(
					'div',
					{ className: 'sharing-service__name' },
					_react2.default.createElement(
						'h2',
						null,
						this.props.service.label
					),
					_react2.default.createElement(_serviceDescription2.default, {
						service: this.props.service,
						status: connectionStatus,
						numberOfConnections: this.getConnections().length })
				)
			);

			var action = _react2.default.createElement(_serviceAction2.default, {
				status: connectionStatus,
				service: this.props.service,
				onAction: this.performAction,
				isConnecting: this.state.isConnecting,
				isRefreshing: this.state.isRefreshing,
				isDisconnecting: this.state.isDisconnecting });

			return _react2.default.createElement(
				'li',
				null,
				_react2.default.createElement(_accountDialog2.default, {
					isVisible: this.state.isSelectingAccount,
					service: this.props.service,
					accounts: accounts,
					onAccountSelected: this.addConnection }),
				_react2.default.createElement(
					_foldableCard2.default,
					{
						className: classNames,
						header: header,
						clickableHeader: true,
						compact: true,
						summary: action,
						expandedSummary: action },
					_react2.default.createElement(
						'div',
						{ className: (0, _classnames2.default)('sharing-service__content', { 'is-placeholder': this.props.isFetching }) },
						_react2.default.createElement(_serviceExamples2.default, { service: this.props.service }),
						_react2.default.createElement(
							_serviceConnectedAccounts2.default,
							{ connect: this.connectAnother, service: this.props.service },
							connections.map(function (connection) {
								return _react2.default.createElement(_connection2.default, {
									key: connection.keyring_connection_ID,
									connection: connection,
									isDisconnecting: _this2.state.isDisconnecting,
									isRefreshing: _this2.state.isRefreshing,
									onDisconnect: _this2.removeConnection,
									onRefresh: _this2.refresh,
									onToggleSitewideConnection: _this2.toggleSitewideConnection,
									service: _this2.props.service,
									showDisconnect: connections.length > 1 || 'broken' === connection.status });
							})
						),
						_react2.default.createElement(_serviceTip2.default, { service: this.props.service })
					)
				)
			);
		}
	}]);
	return SharingService;
}(_react.Component);

/**
 * Connect a SharingService component to a Redux store.
 *
 * @param  {component} sharingService     A SharingService component
 * @param  {function}  mapStateToProps    Optional. A function to pick props from the state.
 *                                        It should return a plain object, which will be merged into the component's props.
 * @param  {object}    mapDispatchToProps Optional. An object that contains additional action creators. Default: {}
 * @return {component} A highter-order service component
 */
/**
 * External dependencies
 */


SharingService.propTypes = {
	availableExternalAccounts: _react.PropTypes.arrayOf(_react.PropTypes.object),
	brokenConnections: _react.PropTypes.arrayOf(_react.PropTypes.object),
	createSiteConnection: _react.PropTypes.func,
	deleteSiteConnection: _react.PropTypes.func,
	errorNotice: _react.PropTypes.func,
	failCreateConnection: _react.PropTypes.func,
	fetchConnection: _react.PropTypes.func,
	isFetching: _react.PropTypes.bool,
	keyringConnections: _react.PropTypes.arrayOf(_react.PropTypes.object),
	recordGoogleEvent: _react.PropTypes.func,
	removableConnections: _react.PropTypes.arrayOf(_react.PropTypes.object),
	service: _react.PropTypes.object.isRequired, // The single service object
	siteId: _react.PropTypes.number, // The site ID for which connections are created
	siteUserConnections: _react.PropTypes.arrayOf(_react.PropTypes.object),
	translate: _react.PropTypes.func,
	updateSiteConnection: _react.PropTypes.func,
	warningNotice: _react.PropTypes.func
};
SharingService.defaultProps = {
	availableExternalAccounts: [],
	brokenConnections: [],
	createSiteConnection: function createSiteConnection() {},
	deleteSiteConnection: function deleteSiteConnection() {},
	errorNotice: function errorNotice() {},
	failCreateConnection: function failCreateConnection() {},
	fetchConnection: function fetchConnection() {},
	isFetching: false,
	keyringConnections: [],
	recordGoogleEvent: function recordGoogleEvent() {},
	requestKeyringConnections: function requestKeyringConnections() {},
	removableConnections: [],
	siteId: 0,
	siteUserConnections: [],
	translate: _identity3.default,
	updateSiteConnection: function updateSiteConnection() {},
	warningNotice: function warningNotice() {}
};
function connectFor(sharingService, mapStateToProps) {
	var mapDispatchToProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	return (0, _reactRedux.connect)(function (state, _ref) {
		var service = _ref.service;

		var siteId = (0, _selectors5.getSelectedSiteId)(state);
		var userId = (0, _selectors2.getCurrentUserId)(state);
		var props = {
			availableExternalAccounts: (0, _selectors.getAvailableExternalAccounts)(state, service.ID),
			brokenConnections: (0, _selectors4.getBrokenSiteUserConnectionsForService)(state, siteId, userId, service.ID),
			isFetching: (0, _selectors4.isFetchingConnections)(state, siteId),
			keyringConnections: (0, _selectors3.getKeyringConnectionsByName)(state, service.ID),
			removableConnections: (0, _selectors4.getRemovableConnections)(state, service.ID),
			siteId: siteId,
			siteUserConnections: (0, _selectors4.getSiteUserConnectionsForService)(state, siteId, userId, service.ID)
		};

		return (0, _isFunction3.default)(mapStateToProps) ? mapStateToProps(state, props) : props;
	}, (0, _extends3.default)({
		createSiteConnection: _actions.createSiteConnection,
		deleteSiteConnection: _actions.deleteSiteConnection,
		successNotice: _actions2.successNotice,
		errorNotice: _actions2.errorNotice,
		failCreateConnection: _actions.failCreateConnection,
		fetchConnection: _actions.fetchConnection,
		recordGoogleEvent: _actions3.recordGoogleEvent,
		requestKeyringConnections: _actions4.requestKeyringConnections,
		updateSiteConnection: _actions.updateSiteConnection,
		warningNotice: _actions2.warningNotice
	}, mapDispatchToProps))((0, _i18nCalypso.localize)(sharingService));
}

exports.default = connectFor(SharingService);

/***/ }),

/***/ "./client/my-sites/sharing/connections/services-group.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _times2 = __webpack_require__("./node_modules/lodash/times.js");

var _times3 = _interopRequireDefault(_times2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _selectors = __webpack_require__("./client/state/sharing/services/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _service = __webpack_require__("./client/my-sites/sharing/connections/service.jsx");

var _service2 = _interopRequireDefault(_service);

var _services = __webpack_require__("./client/my-sites/sharing/connections/services/index.js");

var Components = _interopRequireWildcard(_services);

var _servicePlaceholder = __webpack_require__("./client/my-sites/sharing/connections/service-placeholder.jsx");

var _servicePlaceholder2 = _interopRequireDefault(_servicePlaceholder);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module constants
 */


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var NUMBER_OF_PLACEHOLDERS = 4;

var SharingServicesGroup = function SharingServicesGroup(_ref) {
	var isFetching = _ref.isFetching,
	    services = _ref.services,
	    title = _ref.title;

	if (!services.length && !isFetching) {
		return null;
	}

	return _react2.default.createElement(
		'div',
		{ className: 'sharing-services-group' },
		_react2.default.createElement(_sectionHeader2.default, { label: title }),
		_react2.default.createElement(
			'ul',
			{ className: 'sharing-services-group__services' },
			services.length ? services.map(function (service) {
				var Component = Components.hasOwnProperty(service.ID) ? Components[service.ID] : _service2.default;

				return _react2.default.createElement(Component, { key: service.ID, service: service });
			}) : (0, _times3.default)(NUMBER_OF_PLACEHOLDERS, function (index) {
				return _react2.default.createElement(_servicePlaceholder2.default, { key: 'service-placeholder-' + index });
			})
		)
	);
};

SharingServicesGroup.propTypes = {
	isFetching: _react.PropTypes.bool,
	services: _react.PropTypes.array,
	title: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string.isRequired
};

SharingServicesGroup.defaultProps = {
	isFetching: false,
	services: []
};

exports.default = (0, _reactRedux.connect)(function (state, _ref2) {
	var type = _ref2.type;
	return {
		isFetching: (0, _selectors.isKeyringServicesFetching)(state),
		services: (0, _selectors.getEligibleKeyringServices)(state, (0, _selectors2.getSelectedSiteId)(state), type)
	};
})(SharingServicesGroup);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/sharing/connections/services/eventbrite.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Eventbrite = undefined;

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

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _last2 = __webpack_require__("./node_modules/lodash/last.js");

var _last3 = _interopRequireDefault(_last2);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _service = __webpack_require__("./client/my-sites/sharing/connections/service.jsx");

var _actions = __webpack_require__("./client/state/sharing/keyring/actions.js");

var _actions2 = __webpack_require__("./client/state/site-settings/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var Eventbrite = exports.Eventbrite = function (_SharingService) {
	(0, _inherits3.default)(Eventbrite, _SharingService);

	function Eventbrite() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Eventbrite);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Eventbrite.__proto__ || (0, _getPrototypeOf2.default)(Eventbrite)).call.apply(_ref, [this].concat(args))), _this), _this.createOrUpdateConnection = function () {}, _this.removeConnection = function () {
			_this.setState({ isDisconnecting: true });
			_this.props.saveSiteSettings(_this.props.siteId, { eventbrite_api_token: null });
			_this.props.deleteKeyringConnection((0, _last3.default)(_this.props.keyringConnections));
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	/**
  * Deletes the passed connections.
  *
  * @param {Array} connections Optional. Connections to be deleted.
  *                            Default: All connections for this service.
  */


	(0, _createClass3.default)(Eventbrite, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref2) {
			var availableExternalAccounts = _ref2.availableExternalAccounts,
			    saveRequests = _ref2.saveRequests;

			if (!(0, _isEqual3.default)(this.props.availableExternalAccounts, availableExternalAccounts)) {
				this.setState({
					isConnecting: false,
					isDisconnecting: false
				});
			}

			if (!this.state.isAwaitingConnections) {
				return;
			}

			this.setState({
				isAwaitingConnections: false,
				isRefreshing: false
			});

			if (this.didKeyringConnectionSucceed(availableExternalAccounts)) {
				var savingSiteSettings = saveRequests[this.props.siteId] && saveRequests[this.props.siteId].saving;

				if (!savingSiteSettings) {
					this.props.saveSiteSettings(this.props.siteId, { eventbrite_api_token: (0, _last3.default)(availableExternalAccounts).keyringConnectionId });
				}

				this.setState({ isConnecting: false });
				this.props.successNotice(this.props.translate('The %(service)s account was successfully connected.', {
					args: { service: this.props.service.label },
					context: 'Sharing: Publicize connection confirmation'
				}), { id: 'publicize' });
			}
		}
	}]);
	return Eventbrite;
}(_service.SharingService);

/**
 * Internal dependencies
 */


Eventbrite.propTypes = (0, _extends3.default)({}, _service.SharingService.propTypes, {
	saveRequests: _propTypes2.default.object,
	saveSiteSettings: _propTypes2.default.func,
	deleteKeyringConnection: _propTypes2.default.func
});
Eventbrite.defaultProps = (0, _extends3.default)({}, _service.SharingService.defaultProps, {
	saveRequests: {},
	saveSiteSettings: function saveSiteSettings() {},
	deleteKeyringConnection: function deleteKeyringConnection() {}
});
exports.default = (0, _service.connectFor)(Eventbrite, function (state, props) {
	return (0, _extends3.default)({}, props, {
		saveRequests: state.siteSettings.saveRequests,
		removableConnections: props.keyringConnections,
		fetchConnection: props.requestKeyringConnections,
		siteUserConnections: props.keyringConnections.map(function (conn) {
			return (0, _extends3.default)({}, conn, { keyring_connection_ID: conn.ID });
		})
	});
}, {
	saveSiteSettings: _actions2.saveSiteSettings,
	deleteKeyringConnection: _actions.deleteKeyringConnection
});

/***/ }),

/***/ "./client/my-sites/sharing/connections/services/google-photos.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GooglePhotos = undefined;

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

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _last2 = __webpack_require__("./node_modules/lodash/last.js");

var _last3 = _interopRequireDefault(_last2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__("./client/state/sharing/keyring/actions.js");

var _service = __webpack_require__("./client/my-sites/sharing/connections/service.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var GooglePhotos = exports.GooglePhotos = function (_SharingService) {
	(0, _inherits3.default)(GooglePhotos, _SharingService);

	function GooglePhotos() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, GooglePhotos);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GooglePhotos.__proto__ || (0, _getPrototypeOf2.default)(GooglePhotos)).call.apply(_ref, [this].concat(args))), _this), _this.createOrUpdateConnection = function () {}, _this.removeConnection = function () {
			_this.setState({ isDisconnecting: true });
			_this.props.deleteStoredKeyringConnection((0, _last3.default)(_this.props.keyringConnections));
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	/**
  * Deletes the passed connections.
  *
  * @param {Array} connections Optional. Connections to be deleted.
  *                            Default: All connections for this service.
  */


	(0, _createClass3.default)(GooglePhotos, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref2) {
			var availableExternalAccounts = _ref2.availableExternalAccounts;

			if (!(0, _isEqual3.default)(this.props.availableExternalAccounts, availableExternalAccounts)) {
				this.setState({
					isConnecting: false,
					isDisconnecting: false
				});
			}

			if (!this.state.isAwaitingConnections) {
				return;
			}

			this.setState({
				isAwaitingConnections: false,
				isRefreshing: false
			});

			if (this.didKeyringConnectionSucceed(availableExternalAccounts)) {
				this.setState({ isConnecting: false });
				this.props.successNotice(this.props.translate('The %(service)s account was successfully connected.', {
					args: { service: this.props.service.label },
					context: 'Sharing: Publicize connection confirmation'
				}), { id: 'publicize' });
			}
		}

		/*
   * We render a custom logo here instead of using SocialLogos as we need a full colour logo and SocialLogos currently strips all colour
   * When SocialLogos supports colour logos then we can remove this and use the default renderLogo() in SharingService
   */

	}, {
		key: 'renderLogo',
		value: function renderLogo() {
			return (
				/* eslint-disable wpcalypso/jsx-classname-namespace */
				_react2.default.createElement('img', { className: 'sharing-service__logo', src: '/calypso/images/sharing/google-photos-logo.svg', width: '48', height: '48' })
			);
		}
	}]);
	return GooglePhotos;
}(_service.SharingService);

GooglePhotos.propTypes = (0, _extends3.default)({}, _service.SharingService.propTypes, {
	deleteStoredKeyringConnection: _propTypes2.default.func
});
GooglePhotos.defaultProps = (0, _extends3.default)({}, _service.SharingService.defaultProps, {
	deleteStoredKeyringConnection: function deleteStoredKeyringConnection() {}
});
exports.default = (0, _service.connectFor)(GooglePhotos, function (state, props) {
	return (0, _extends3.default)({}, props, {
		removableConnections: props.keyringConnections,
		fetchConnection: props.requestKeyringConnections,
		siteUserConnections: props.keyringConnections.map(function (connection) {
			return (0, _extends3.default)({}, connection, { keyring_connection_ID: connection.ID });
		})
	});
}, {
	deleteStoredKeyringConnection: _actions.deleteStoredKeyringConnection
});

/***/ }),

/***/ "./client/my-sites/sharing/connections/services/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.google_photos = exports.instagram = exports.eventbrite = undefined;

var _eventbrite2 = __webpack_require__("./client/my-sites/sharing/connections/services/eventbrite.js");

var _eventbrite3 = _interopRequireDefault(_eventbrite2);

var _instagram2 = __webpack_require__("./client/my-sites/sharing/connections/services/instagram.js");

var _instagram3 = _interopRequireDefault(_instagram2);

var _googlePhotos = __webpack_require__("./client/my-sites/sharing/connections/services/google-photos.js");

var _googlePhotos2 = _interopRequireDefault(_googlePhotos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.eventbrite = _eventbrite3.default;
exports.instagram = _instagram3.default;
exports.google_photos = _googlePhotos2.default;

/***/ }),

/***/ "./client/my-sites/sharing/connections/services/instagram.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Instagram = undefined;

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

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _last2 = __webpack_require__("./node_modules/lodash/last.js");

var _last3 = _interopRequireDefault(_last2);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__("./client/state/sharing/keyring/actions.js");

var _service = __webpack_require__("./client/my-sites/sharing/connections/service.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var Instagram = exports.Instagram = function (_SharingService) {
	(0, _inherits3.default)(Instagram, _SharingService);

	function Instagram() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Instagram);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Instagram.__proto__ || (0, _getPrototypeOf2.default)(Instagram)).call.apply(_ref, [this].concat(args))), _this), _this.createOrUpdateConnection = function () {}, _this.removeConnection = function () {
			_this.setState({ isDisconnecting: true });
			_this.props.deleteStoredKeyringConnection((0, _last3.default)(_this.props.keyringConnections));
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	/**
  * Deletes the passed connections.
  *
  * @param {Array} connections Optional. Connections to be deleted.
  *                            Default: All connections for this service.
  */


	(0, _createClass3.default)(Instagram, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref2) {
			var availableExternalAccounts = _ref2.availableExternalAccounts;

			if (!(0, _isEqual3.default)(this.props.availableExternalAccounts, availableExternalAccounts)) {
				this.setState({
					isConnecting: false,
					isDisconnecting: false
				});
			}

			if (!this.state.isAwaitingConnections) {
				return;
			}

			this.setState({
				isAwaitingConnections: false,
				isRefreshing: false
			});

			if (this.didKeyringConnectionSucceed(availableExternalAccounts)) {
				this.setState({ isConnecting: false });
				this.props.successNotice(this.props.translate('The %(service)s account was successfully connected.', {
					args: { service: this.props.service.label },
					context: 'Sharing: Publicize connection confirmation'
				}), { id: 'publicize' });
			}
		}
	}]);
	return Instagram;
}(_service.SharingService); /**
                             * External dependencies
                             */


Instagram.propTypes = (0, _extends3.default)({}, _service.SharingService.propTypes, {
	deleteStoredKeyringConnection: _propTypes2.default.func
});
Instagram.defaultProps = (0, _extends3.default)({}, _service.SharingService.defaultProps, {
	deleteStoredKeyringConnection: function deleteStoredKeyringConnection() {}
});
exports.default = (0, _service.connectFor)(Instagram, function (state, props) {
	return (0, _extends3.default)({}, props, {
		removableConnections: props.keyringConnections,
		fetchConnection: props.requestKeyringConnections,
		siteUserConnections: props.keyringConnections.map(function (conn) {
			return (0, _extends3.default)({}, conn, { keyring_connection_ID: conn.ID });
		})
	});
}, {
	deleteStoredKeyringConnection: _actions.deleteStoredKeyringConnection
});

/***/ }),

/***/ "./client/my-sites/sharing/controller.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.buttons = exports.connections = exports.layout = undefined;

var _react = __webpack_require__("./node_modules/react/react.js");

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _notices = __webpack_require__("./client/notices/index.js");

var _notices2 = _interopRequireDefault(_notices);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _reactHelpers = __webpack_require__("./client/lib/react-helpers/index.js");

var _route = __webpack_require__("./client/lib/route/index.js");

var _main = __webpack_require__("./client/my-sites/sharing/main.jsx");

var _main2 = _interopRequireDefault(_main);

var _buttons = __webpack_require__("./client/my-sites/sharing/buttons/buttons.jsx");

var _buttons2 = _interopRequireDefault(_buttons);

var _connections = __webpack_require__("./client/my-sites/sharing/connections/connections.jsx");

var _connections2 = _interopRequireDefault(_connections);

var _sitesList = __webpack_require__("./client/lib/sites-list/index.js");

var _sitesList2 = _interopRequireDefault(_sitesList);

var _utils = __webpack_require__("./client/lib/site/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External Dependencies
 */
var analyticsPageTitle = 'Sharing';

/**
 * Internal Dependencies
 */
var layout = exports.layout = function layout(_ref) {
	var contentComponent = _ref.contentComponent,
	    path = _ref.path,
	    store = _ref.store;

	var site = (0, _sitesList2.default)().getSelectedSite();

	if (site && !site.settings && _utils2.default.userCan('manage_options', site)) {
		site.fetchSettings();
	}

	(0, _reactHelpers.renderWithReduxStore)((0, _react.createElement)(_main2.default, { contentComponent: contentComponent, path: path }), document.getElementById('primary'), store);
};

var connections = exports.connections = function connections(context, next) {
	var site = (0, _sitesList2.default)().getSelectedSite();
	var basePath = (0, _route.sectionify)(context.path);
	var baseAnalyticsPath = site ? basePath + '/:site' : basePath;

	if (site && !_utils2.default.userCan('publish_posts', site)) {
		_notices2.default.error((0, _i18nCalypso.translate)('You are not authorized to manage sharing settings for this site.'));
	}

	if (site && site.jetpack && !site.isModuleActive('publicize')) {
		// Redirect to sharing buttons if Jetpack Publicize module is not
		// active, but ShareDaddy is active
		_page2.default.redirect(site.isModuleActive('sharedaddy') ? '/sharing/buttons/' + _sitesList2.default.selected : '/stats');
	} else {
		_analytics.pageView.record(baseAnalyticsPath, analyticsPageTitle + ' > Connections');

		context.contentComponent = (0, _react.createElement)(_connections2.default);
	}

	next();
};

var buttons = exports.buttons = function buttons(context, next) {
	var site = (0, _sitesList2.default)().getSelectedSite();
	var basePath = (0, _route.sectionify)(context.path);
	var baseAnalyticsPath = site ? basePath + '/:site' : basePath;

	_analytics.pageView.record(baseAnalyticsPath, analyticsPageTitle + ' > Sharing Buttons');

	if (site && !_utils2.default.userCan('manage_options', site)) {
		_notices2.default.error((0, _i18nCalypso.translate)('You are not authorized to manage sharing settings for this site.'));
	}

	if (site && site.jetpack && (!site.isModuleActive('sharedaddy') || site.versionCompare('3.4-dev', '<'))) {
		_notices2.default.error((0, _i18nCalypso.translate)('This page is only available to Jetpack sites running version 3.4 or higher with the Sharing module activated.'));
	}

	context.contentComponent = (0, _react.createElement)(_buttons2.default);

	next();
};

/***/ }),

/***/ "./client/my-sites/sharing/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  (0, _page2.default)(/^\/sharing(\/buttons)?$/, _controller.siteSelection, _controller.sites);
  (0, _page2.default)('/sharing/:domain', _controller.siteSelection, _controller.navigation, (0, _controller.jetpackModuleActive)('publicize', false), _controller2.connections, _controller2.layout);
  (0, _page2.default)('/sharing/buttons/:domain', _controller.siteSelection, _controller.navigation, (0, _controller.jetpackModuleActive)('sharedaddy'), _controller2.buttons, _controller2.layout);
};

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _controller = __webpack_require__("./client/my-sites/controller.js");

var _controller2 = __webpack_require__("./client/my-sites/sharing/controller.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
module.exports = exports['default'];

/**
 * Internal dependencies
 */

/***/ }),

/***/ "./client/my-sites/sharing/main.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Sharing = undefined;

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _isJetpackModuleActive = __webpack_require__("./client/state/selectors/is-jetpack-module-active.js");

var _isJetpackModuleActive2 = _interopRequireDefault(_isJetpackModuleActive);

var _documentHead = __webpack_require__("./client/components/data/document-head/index.jsx");

var _documentHead2 = _interopRequireDefault(_documentHead);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _queryJetpackModules = __webpack_require__("./client/components/data/query-jetpack-modules/index.jsx");

var _queryJetpackModules2 = _interopRequireDefault(_queryJetpackModules);

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _upgradeNudge = __webpack_require__("./client/my-sites/upgrade-nudge/index.jsx");

var _upgradeNudge2 = _interopRequireDefault(_upgradeNudge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var Sharing = exports.Sharing = function Sharing(_ref) {
	var contentComponent = _ref.contentComponent,
	    path = _ref.path,
	    showButtons = _ref.showButtons,
	    showConnections = _ref.showConnections,
	    siteId = _ref.siteId,
	    siteSlug = _ref.siteSlug,
	    translate = _ref.translate;

	var pathSuffix = siteSlug ? '/' + siteSlug : '';
	var filters = [];

	// Include Connections link if all sites are selected. Otherwise,
	// verify that the required Jetpack module is active
	if (showConnections) {
		filters.push({
			id: 'sharing-connections',
			route: '/sharing' + pathSuffix,
			title: translate('Connections')
		});
	}

	// Include Sharing Buttons link if a site is selected and the
	// required Jetpack module is active
	if (showButtons) {
		filters.push({
			id: 'sharing-buttons',
			route: '/sharing/buttons' + pathSuffix,
			title: translate('Sharing Buttons')
		});
	}

	var selected = (0, _find3.default)(filters, { route: path });

	return _react2.default.createElement(
		_main2.default,
		{ className: 'sharing' },
		_react2.default.createElement(_documentHead2.default, { title: translate('Sharing') }),
		siteId && _react2.default.createElement(_queryJetpackModules2.default, { siteId: siteId }),
		_react2.default.createElement(_sidebarNavigation2.default, null),
		filters.length > 0 && _react2.default.createElement(
			_sectionNav2.default,
			{ selectedText: (0, _get3.default)(selected, 'title', '') },
			_react2.default.createElement(
				_tabs2.default,
				null,
				filters.map(function (_ref2) {
					var id = _ref2.id,
					    route = _ref2.route,
					    title = _ref2.title;
					return _react2.default.createElement(
						_item2.default,
						{ key: id, path: route, selected: path === route },
						title
					);
				})
			)
		),
		_react2.default.createElement(_upgradeNudge2.default, {
			event: 'sharing_no_ads',
			feature: 'no-adverts',
			message: translate('Prevent ads from showing on your site.'),
			title: translate('No Ads with WordPress.com Premium')
		}),
		contentComponent
	);
}; /**
    * External dependencies
    */


Sharing.propTypes = {
	canManageOptions: _react.PropTypes.bool,
	contentComponent: _react.PropTypes.node,
	path: _react.PropTypes.string,
	showButtons: _react.PropTypes.bool,
	showConnections: _react.PropTypes.bool,
	siteId: _react.PropTypes.number,
	siteSlug: _react.PropTypes.string,
	translate: _react.PropTypes.func
};

exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	var isJetpack = (0, _selectors.isJetpackSite)(state, siteId);
	var canManageOptions = (0, _canCurrentUser2.default)(state, siteId, 'manage_options');
	var hasSharedaddy = (0, _isJetpackModuleActive2.default)(state, siteId, 'sharedaddy') && (0, _selectors.isJetpackMinimumVersion)(state, siteId, '3.4-dev');

	return {
		showButtons: siteId && canManageOptions && (!isJetpack || hasSharedaddy),
		showConnections: !siteId || !isJetpack || (0, _isJetpackModuleActive2.default)(state, siteId, 'publicize'),
		siteId: siteId,
		siteSlug: (0, _selectors.getSiteSlug)(state, siteId)
	};
})((0, _i18nCalypso.localize)(Sharing));

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

/***/ "./client/state/sharing/keyring/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.requestKeyringConnections = requestKeyringConnections;
exports.deleteKeyringConnection = deleteKeyringConnection;
exports.deleteStoredKeyringConnection = deleteStoredKeyringConnection;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Triggers a network request for a user's connected services.
 *
 * @return {Function} Action thunk
 */
/**
 * Internal dependencies
 */
function requestKeyringConnections() {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.KEYRING_CONNECTIONS_REQUEST
		});

		return _wp2.default.undocumented().mekeyringConnections().then(function (_ref) {
			var connections = _ref.connections;

			dispatch({
				type: _actionTypes.KEYRING_CONNECTIONS_RECEIVE,
				connections: connections
			});
			dispatch({
				type: _actionTypes.KEYRING_CONNECTIONS_REQUEST_SUCCESS
			});
		}).catch(function (error) {
			return dispatch({
				type: _actionTypes.KEYRING_CONNECTIONS_REQUEST_FAILURE,
				error: error
			});
		});
	};
}

/**
 * Triggers an action to delete a Keyring connection.
 *
 * @param  {Object}   connection Keyring connection to be removed.
 * @return {Function}            Action thunk
 */
function deleteKeyringConnection(connection) {
	return {
		type: _actionTypes.KEYRING_CONNECTION_DELETE,
		connection: connection
	};
}

/**
 * Triggers a network request to delete a Keyring connection from the server-side.
 *
 * @param  {Object} connection         Connection to be deleted.
 * @param  {Number} connection.ID      ID of the connection to be deleted.
 * @param  {String} connection.label   Name of the service that was connected.
 * @return {Function}                  Action thunk
 */
function deleteStoredKeyringConnection(connection) {
	return function (dispatch) {
		return _wp2.default.undocumented().deletekeyringConnection(connection.ID).then(function () {
			return dispatch(deleteKeyringConnection(connection));
		}).catch(function (error) {
			if (error && 404 === error.statusCode) {
				// If the connection cannot be found, we infer that it must have been deleted since the original
				// connections were retrieved, so pass along the cached connection.
				dispatch(deleteKeyringConnection(connection));
			}

			dispatch({
				type: _actionTypes.KEYRING_CONNECTION_DELETE_FAILURE,
				error: (0, _extends3.default)({}, error, { label: connection.label })
			});
		});
	};
}

/***/ }),

/***/ "./client/state/sharing/keyring/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values2 = __webpack_require__("./node_modules/lodash/values.js");

var _values3 = _interopRequireDefault(_values2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

exports.getKeyringConnections = getKeyringConnections;
exports.getKeyringConnectionById = getKeyringConnectionById;
exports.getKeyringConnectionsByName = getKeyringConnectionsByName;
exports.getUserConnections = getUserConnections;
exports.isKeyringConnectionsFetching = isKeyringConnectionsFetching;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an array of keyring connection objects.
 *
 * @param  {Object} state Global state tree
 * @return {Array}        Keyring connections, if known.
 */
/**
 * External dependencies
 */
function getKeyringConnections(state) {
  return (0, _values3.default)(state.sharing.keyring.items);
}

/**
 * Returns a keyring connection object with a specified ID.
 *
 * @param  {Object} state               Global state tree
 * @param  {Number} keyringConnectionId Keyring connection ID.
 * @return {?Object}                    Keyring connections, if known.
 */
function getKeyringConnectionById(state, keyringConnectionId) {
  return state.sharing.keyring.items[keyringConnectionId] || null;
}

/**
 * Returns an array of keyring connection objects for a specified service.
 *
 * @param  {Object} state   Global state tree
 * @param  {String} service Service slug.
 * @return {Array}         Keyring connections, if known.
 */
function getKeyringConnectionsByName(state, service) {
  return (0, _filter3.default)(getKeyringConnections(state), { service: service });
}

/**
 * Returns an array of keyring connection objects for a specific user.
 *
 * @param  {Object} state  Global state tree
 * @param  {Number} userId User ID.
 * @return {Array}         Site connections, if known.
 */
function getUserConnections(state, userId) {
  return (0, _filter3.default)(state.sharing.keyring.items, function (connection) {
    return connection.shared || connection.keyring_connection_user_ID === userId;
  });
}

/**
 * Returns true if a request is in progress to retrieve keyring services,
 * or false otherwise.
 *
 * @param  {Object}  state Global state tree
 * @return {Boolean}       Whether a request is in progress
 */
function isKeyringConnectionsFetching(state) {
  return state.sharing.keyring.isFetching;
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

/***/ "./client/state/sharing/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

exports.getAvailableExternalAccounts = getAvailableExternalAccounts;

var _selectors = __webpack_require__("./client/state/current-user/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sharing/keyring/selectors.js");

var _selectors4 = __webpack_require__("./client/state/sharing/publicize/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Given a service, returns a flattened array of all possible accounts for the
 * service for which a connection can be created.
 *
 * @param  {Object} state   Global state tree
 * @param  {String} service The name of the service to check
 * @return {Array}          Flattened array of all possible accounts for the service
 */


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function getAvailableExternalAccounts(state, service) {
	var isConnected = function isConnected(keyring_connection_ID, external_ID) {
		var siteUserConnectionsForService = (0, _selectors4.getSiteUserConnectionsForService)(state, (0, _selectors2.getSelectedSiteId)(state), (0, _selectors.getCurrentUserId)(state), service);

		return (0, _some3.default)(siteUserConnectionsForService, { keyring_connection_ID: keyring_connection_ID, external_ID: external_ID });
	};

	// Iterate over Keyring connections for this service and generate a
	// flattened array of all accounts, including external users
	return (0, _selectors3.getKeyringConnectionsByName)(state, service).reduce(function (memo, keyringConnection) {
		return memo.concat([{
			name: keyringConnection.external_display || keyringConnection.external_name,
			picture: keyringConnection.external_profile_picture,
			keyringConnectionId: keyringConnection.ID,
			isConnected: isConnected(keyringConnection.ID, keyringConnection.external_ID)
		}]).concat(keyringConnection.additional_external_users.map(function (externalUser) {
			return {
				ID: externalUser.external_ID,
				name: externalUser.external_name,
				picture: externalUser.external_profile_picture,
				keyringConnectionId: keyringConnection.ID,
				isConnected: isConnected(keyringConnection.ID, externalUser.external_ID),
				isExternal: true
			};
		}));
	}, []);
}

/***/ }),

/***/ "./client/state/sharing/services/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.requestKeyringServices = requestKeyringServices;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Triggers a network request for Keyring services.
 *
 * @return {Function} Action thunk
 */
/**
 * Internal dependencies
 */
function requestKeyringServices() {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.KEYRING_SERVICES_REQUEST
		});

		return _wp2.default.undocumented().metaKeyring().then(function (response) {
			dispatch({
				type: _actionTypes.KEYRING_SERVICES_RECEIVE,
				services: response.services
			});
			dispatch({
				type: _actionTypes.KEYRING_SERVICES_REQUEST_SUCCESS
			});
		}).catch(function (error) {
			return dispatch({
				type: _actionTypes.KEYRING_SERVICES_REQUEST_FAILURE,
				error: error
			});
		});
	};
}

/***/ }),

/***/ "./client/state/sharing/services/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

exports.getKeyringServices = getKeyringServices;
exports.getKeyringServicesByType = getKeyringServicesByType;
exports.getKeyringServiceByName = getKeyringServiceByName;
exports.getEligibleKeyringServices = getEligibleKeyringServices;
exports.isKeyringServicesFetching = isKeyringServicesFetching;

var _canCurrentUser = __webpack_require__("./client/state/selectors/can-current-user.js");

var _canCurrentUser2 = _interopRequireDefault(_canCurrentUser);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an object of service objects.
 *
 * @param  {Object} state Global state tree
 * @return {Object}       Keyring services, if known.
 */


/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function getKeyringServices(state) {
  return state.sharing.services.items;
}

/**
 * Returns an object of service objects with the specified type.
 *
 * @param  {Object} state Global state tree
 * @param  {String} type  Type of service. 'publicize' or 'other'.
 * @return {Array}        Keyring services, if known.
 */
function getKeyringServicesByType(state, type) {
  return (0, _filter3.default)(getKeyringServices(state), { type: type });
}

/**
 * Returns an object for the specified service name
 *
 * @param  {Object} state Global state tree
 * @param  {String} name  Service name
 * @return {Object}        Keyring service, if known, or false.
 */
function getKeyringServiceByName(state, name) {
  var services = getKeyringServices(state);

  return services[name] ? services[name] : false;
}

/**
 * Returns an array of eligible service objects with the specified type.
 *
 * A service is eligible for a given site if
 *  1. it's a Jetpack site and the service supports Jetpack,
 *  2. the service requires an active Jetpack module and that module is active on that site,
 *  3. the current user can manage options in case of the eventbrite service,
 *  4. the current user can publish posts in case of all publicize services.
 *
 * @param  {Object} state  Global state tree
 * @param  {Number} siteId Site ID.
 * @param  {String} type   Type of service. 'publicize' or 'other'.
 * @return {Array}         Keyring services, if known.
 */
function getEligibleKeyringServices(state, siteId, type) {
  var services = getKeyringServicesByType(state, type);

  if (!siteId) {
    return services;
  }

  return services.filter(function (service) {
    // Omit if the site is Jetpack and service doesn't support Jetpack
    if ((0, _selectors.isJetpackSite)(state, siteId) && !service.jetpack_support) {
      return false;
    }

    // Omit if Jetpack module not activated
    if ((0, _selectors.isJetpackSite)(state, siteId) && service.jetpack_module_required && !(0, _selectors.isJetpackModuleActive)(state, siteId, service.jetpack_module_required)) {
      return false;
    }

    // Omit if service is settings-oriented and user cannot manage
    if ('eventbrite' === service.ID && !(0, _canCurrentUser2.default)(state, siteId, 'manage_options')) {
      return false;
    }

    // Omit if Publicize service and user cannot publish
    if ('publicize' === service.type && !(0, _canCurrentUser2.default)(state, siteId, 'publish_posts')) {
      return false;
    }

    return true;
  });
}

/**
 * Returns true if a request is in progress to retrieve keyring services,
 * or false otherwise.
 *
 * @param  {Object}  state Global state tree
 * @return {Boolean}       Whether a request is in progress
 */
function isKeyringServicesFetching(state) {
  return state.sharing.services.isFetching;
}

/***/ }),

/***/ "./client/state/site-settings/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.receiveSiteSettings = receiveSiteSettings;
exports.updateSiteSettings = updateSiteSettings;
exports.requestSiteSettings = requestSiteSettings;
exports.saveSiteSettings = saveSiteSettings;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

var _utils = __webpack_require__("./client/state/site-settings/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action object to be used in signalling that site settings have been received.
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} settings The site settings object
 * @return {Object}        Action object
 */
function receiveSiteSettings(siteId, settings) {
	return {
		type: _actionTypes.SITE_SETTINGS_RECEIVE,
		siteId: siteId,
		settings: settings
	};
}

/**
 * Returns an action object to be used in signalling that some site settings have been update.
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} settings The updated site settings
 * @return {Object}        Action object
 */
/**
 * Internal dependencies
 */
function updateSiteSettings(siteId, settings) {
	return {
		type: _actionTypes.SITE_SETTINGS_UPDATE,
		siteId: siteId,
		settings: settings
	};
}

/**
 * Returns an action thunk which, when invoked, triggers a network request to
 * retrieve site settings
 *
 * @param  {Number} siteId Site ID
 * @return {Function}      Action thunk
 */
function requestSiteSettings(siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.SITE_SETTINGS_REQUEST,
			siteId: siteId
		});

		return _wp2.default.undocumented().settings(siteId).then(function (_ref) {
			var name = _ref.name,
			    description = _ref.description,
			    settings = _ref.settings;

			var savedSettings = (0, _extends3.default)({}, (0, _utils.normalizeSettings)(settings), {
				blogname: name,
				blogdescription: description
			});

			dispatch(receiveSiteSettings(siteId, savedSettings));
			dispatch({
				type: _actionTypes.SITE_SETTINGS_REQUEST_SUCCESS,
				siteId: siteId
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.SITE_SETTINGS_REQUEST_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

function saveSiteSettings(siteId, settings) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.SITE_SETTINGS_SAVE,
			siteId: siteId
		});

		return _wp2.default.undocumented().settings(siteId, 'post', settings).then(function (_ref2) {
			var updated = _ref2.updated;

			dispatch(updateSiteSettings(siteId, (0, _utils.normalizeSettings)(updated)));
			dispatch({
				type: _actionTypes.SITE_SETTINGS_SAVE_SUCCESS,
				siteId: siteId
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.SITE_SETTINGS_SAVE_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

/***/ }),

/***/ "./client/state/site-settings/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

exports.normalizeSettings = normalizeSettings;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Normalize API Settings
 * @param  {Object} settings Raw API settings
 * @return {Object}          Normalized settings
 */
function normalizeSettings(settings) {
	return (0, _keys2.default)(settings).reduce(function (memo, key) {
		switch (key) {
			case 'default_category':
				memo[key] = parseInt(settings[key]);
				break;
			default:
				memo[key] = settings[key];
		}

		return memo;
	}, {});
}

/***/ }),

/***/ "./client/state/sites/sharing-buttons/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.receiveSharingButtons = receiveSharingButtons;
exports.updateSharingButtons = updateSharingButtons;
exports.requestSharingButtons = requestSharingButtons;
exports.saveSharingButtons = saveSharingButtons;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an action object to be used in signalling that sharing buttons have been received.
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} settings The sharing buttons object
 * @return {Object}        Action object
 */
/**
 * Internal dependencies
 */
function receiveSharingButtons(siteId, settings) {
	return {
		type: _actionTypes.SHARING_BUTTONS_RECEIVE,
		siteId: siteId,
		settings: settings
	};
}

/**
 * Returns an action object to be used in signalling that some sharing buttons have been updated.
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} settings The updated sharing buttons
 * @return {Object}        Action object
 */
function updateSharingButtons(siteId, settings) {
	return {
		type: _actionTypes.SHARING_BUTTONS_UPDATE,
		siteId: siteId,
		settings: settings
	};
}

/**
 * Returns an action thunk which, when invoked, triggers a network request to
 * retrieve sharing buttons
 *
 * @param  {Number} siteId Site ID
 * @return {Function}      Action thunk
 */
function requestSharingButtons(siteId) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.SHARING_BUTTONS_REQUEST,
			siteId: siteId
		});

		return _wp2.default.undocumented().sharingButtons(siteId).then(function (_ref) {
			var settings = _ref.sharing_buttons;

			dispatch(receiveSharingButtons(siteId, settings));
			dispatch({
				type: _actionTypes.SHARING_BUTTONS_REQUEST_SUCCESS,
				siteId: siteId
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.SHARING_BUTTONS_REQUEST_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

/**
 * Returns an action thunk which, when invoked, triggers a network request to
 * update the sharing buttons
 *
 * @param  {Number} siteId Site ID
 * @param  {Object} settings The sharing buttons to save
 * @return {Function}      Action thunk
 */
function saveSharingButtons(siteId, settings) {
	return function (dispatch) {
		dispatch({
			type: _actionTypes.SHARING_BUTTONS_SAVE,
			siteId: siteId
		});
		// Optimistic update
		dispatch(updateSharingButtons(siteId, settings));
		return _wp2.default.undocumented().saveSharingButtons(siteId, settings).then(function (_ref2) {
			var updated = _ref2.updated;

			dispatch(updateSharingButtons(siteId, updated));
			dispatch({
				type: _actionTypes.SHARING_BUTTONS_SAVE_SUCCESS,
				siteId: siteId
			});
		}).catch(function (error) {
			dispatch({
				type: _actionTypes.SHARING_BUTTONS_SAVE_FAILURE,
				siteId: siteId,
				error: error
			});
		});
	};
}

/***/ }),

/***/ "./node_modules/lodash/replace.js":
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__("./node_modules/lodash/toString.js");

/**
 * Replaces matches for `pattern` in `string` with `replacement`.
 *
 * **Note:** This method is based on
 * [`String#replace`](https://mdn.io/String/replace).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to modify.
 * @param {RegExp|string} pattern The pattern to replace.
 * @param {Function|string} replacement The match replacement.
 * @returns {string} Returns the modified string.
 * @example
 *
 * _.replace('Hi Fred', 'Fred', 'Barney');
 * // => 'Hi Barney'
 */
function replace() {
  var args = arguments,
      string = toString(args[0]);

  return args.length < 3 ? string : string.replace(args[1], args[2]);
}

module.exports = replace;


/***/ })

});