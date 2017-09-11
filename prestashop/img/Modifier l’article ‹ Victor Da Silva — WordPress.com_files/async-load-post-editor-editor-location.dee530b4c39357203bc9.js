webpackJsonp(["async-load-post-editor-editor-location"],{

/***/ "./client/components/search-card/index.jsx":
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

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _search = __webpack_require__("./client/components/search/index.jsx");

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var SearchCard = function (_React$Component) {
	(0, _inherits3.default)(SearchCard, _React$Component);

	function SearchCard() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, SearchCard);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchCard.__proto__ || (0, _getPrototypeOf2.default)(SearchCard)).call.apply(_ref, [this].concat(args))), _this), _this.focus = function () {
			_this.refs.search.focus();
		}, _this.clear = function () {
			_this.refs.search.clear();
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(SearchCard, [{
		key: 'render',
		value: function render() {
			var cardClasses = (0, _classnames2.default)('search-card', this.props.className);

			return _react2.default.createElement(
				_card2.default,
				{ className: cardClasses },
				_react2.default.createElement(_search2.default, (0, _extends3.default)({ ref: 'search' }, this.props))
			);
		}
	}]);
	return SearchCard;
}(_react2.default.Component);

SearchCard.propTypes = {
	additionalClasses: _react2.default.PropTypes.string,
	initialValue: _react2.default.PropTypes.string,
	placeholder: _react2.default.PropTypes.string,
	delaySearch: _react2.default.PropTypes.bool,
	onSearch: _react2.default.PropTypes.func.isRequired,
	onSearchChange: _react2.default.PropTypes.func,
	analyticsGroup: _react2.default.PropTypes.string,
	autoFocus: _react2.default.PropTypes.bool,
	disabled: _react2.default.PropTypes.bool,
	dir: _react2.default.PropTypes.string,
	maxLength: _react2.default.PropTypes.number,
	hideOpenIcon: _react2.default.PropTypes.bool,
	disableAutocorrect: _react2.default.PropTypes.bool
};
exports.default = SearchCard;
module.exports = exports['default'];

/***/ }),

/***/ "./client/lib/geocoding/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.geocode = geocode;

var _superagent = __webpack_require__("./node_modules/superagent/lib/client.js");

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
var GOOGLE_MAPS_API_BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json'; /**
                                                                                     * External dependencies
                                                                                     */
function geocode(address) {
	return new _promise2.default(function (resolve, reject) {
		_superagent2.default.get(GOOGLE_MAPS_API_BASE_URL).query({ address: address }).end(function (error, response) {
			if (error || !response.ok || 'OK' !== response.body.status) {
				return reject(error);
			}

			resolve(response.body.results);
		});
	});
}

/***/ }),

/***/ "./client/post-editor/editor-drawer-well/index.jsx":
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

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditorDrawerWell = function (_Component) {
	(0, _inherits3.default)(EditorDrawerWell, _Component);

	function EditorDrawerWell() {
		(0, _classCallCheck3.default)(this, EditorDrawerWell);
		return (0, _possibleConstructorReturn3.default)(this, (EditorDrawerWell.__proto__ || (0, _getPrototypeOf2.default)(EditorDrawerWell)).apply(this, arguments));
	}

	(0, _createClass3.default)(EditorDrawerWell, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    empty = _props.empty,
			    onRemove = _props.onRemove,
			    onClick = _props.onClick,
			    disabled = _props.disabled,
			    icon = _props.icon,
			    label = _props.label,
			    children = _props.children,
			    isHidden = _props.isHidden;

			var classes = (0, _classnames2.default)('editor-drawer-well', {
				'is-empty': empty,
				'is-hidden': isHidden
			});

			return _react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement(
					'div',
					{ className: 'editor-drawer-well__content' },
					children,
					onRemove && _react2.default.createElement(
						_button2.default,
						{
							onClick: onRemove,
							compact: true,
							className: 'editor-drawer-well__remove' },
						_react2.default.createElement(
							'span',
							{ className: 'screen-reader-text' },
							this.props.translate('Remove')
						),
						_react2.default.createElement(_gridicons2.default, {
							icon: 'cross',
							size: 24,
							className: 'editor-drawer-well__remove-icon'
						})
					)
				),
				empty && _react2.default.createElement(
					'button',
					{
						type: 'button',
						onClick: onClick,
						disabled: disabled,
						className: 'editor-drawer-well__placeholder' },
					icon && _react2.default.createElement(_gridicons2.default, {
						icon: icon,
						className: 'editor-drawer-well__icon'
					}),
					_react2.default.createElement(
						'span',
						{ className: 'editor-drawer-well__button button is-secondary is-compact' },
						label
					)
				),
				this.props.customDropZone
			);
		}
	}]);
	return EditorDrawerWell;
}(_react.Component);
/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


EditorDrawerWell.propTypes = {
	children: _react.PropTypes.node,
	disabled: _react.PropTypes.bool,
	empty: _react.PropTypes.bool,
	icon: _react.PropTypes.string,
	isHidden: _react.PropTypes.bool,
	label: _react.PropTypes.node,
	onClick: _react.PropTypes.func,
	customDropZone: _react.PropTypes.node,
	onRemove: _react.PropTypes.func,
	translate: _react.PropTypes.func
};
EditorDrawerWell.defaultProps = {
	disabled: false,
	isHidden: false,
	onClick: _noop3.default,
	onRemove: _noop3.default,
	translate: _identity3.default
};
exports.default = (0, _i18nCalypso.localize)(EditorDrawerWell);
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-location/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _notice = __webpack_require__("./client/components/notice/index.jsx");

var _notice2 = _interopRequireDefault(_notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    qs = __webpack_require__("./node_modules/querystring-es3/index.js");

/**
 * Internal dependencies
 */
var PostActions = __webpack_require__("./client/lib/posts/actions.js"),
    EditorDrawerWell = __webpack_require__("./client/post-editor/editor-drawer-well/index.jsx"),
    stats = __webpack_require__("./client/lib/posts/stats.js"),
    EditorLocationSearch = __webpack_require__("./client/post-editor/editor-location/search.jsx");

/**
 * Module variables
 */
var GOOGLE_MAPS_BASE_URL = 'https://maps.google.com/maps/api/staticmap?';

exports.default = React.createClass({
	displayName: 'EditorLocation',

	propTypes: {
		label: React.PropTypes.string,
		coordinates: function coordinates(props, propName) {
			var prop = props[propName];
			if (prop && (!Array.isArray(prop) || 2 !== prop.length || 2 !== prop.filter(Number).length)) {
				return new Error('Expected array pair of coordinates for prop `' + propName + '`.');
			}
		}
	},

	getInitialState: function getInitialState() {
		return {
			error: null
		};
	},

	onGeolocateSuccess: function onGeolocateSuccess(position) {
		this.setState({
			locating: false
		});

		// TODO: REDUX - remove flux actions when whole post-editor is reduxified
		PostActions.updateMetadata({
			geo_latitude: position.coords.latitude,
			geo_longitude: position.coords.longitude
		});

		stats.recordStat('location_geolocate_success');
	},

	onGeolocateFailure: function onGeolocateFailure(error) {
		this.setState({
			error: error,
			locating: false
		});

		stats.recordStat('location_geolocate_failed');
	},

	resetError: function resetError() {
		this.setState({
			error: null
		});
	},

	geolocate: function geolocate() {
		this.resetError();
		this.setState({
			locating: true
		});

		navigator.geolocation.getCurrentPosition(this.onGeolocateSuccess, this.onGeolocateFailure, { enableHighAccuracy: true });

		stats.recordStat('location_geolocate');
		stats.recordEvent('Location Geolocated');
	},

	clear: function clear() {
		// TODO: REDUX - remove flux actions when whole post-editor is reduxified
		PostActions.deleteMetadata(['geo_latitude', 'geo_longitude']);
	},

	onSearchSelect: function onSearchSelect(result) {
		PostActions.updateMetadata({
			geo_latitude: result.geometry.location.lat,
			geo_longitude: result.geometry.location.lng
		});
	},

	renderCurrentLocation: function renderCurrentLocation() {
		if (!this.props.coordinates) {
			return;
		}

		var src = GOOGLE_MAPS_BASE_URL + qs.stringify({
			markers: this.props.coordinates.join(','),
			zoom: 8,
			size: '400x300'
		});

		return React.createElement('img', { src: src, className: 'editor-location__map' });
	},

	render: function render() {
		var error, buttonText;

		if (this.state.error) {
			error = React.createElement(
				_notice2.default,
				{ status: 'is-error', onDismissClick: this.resetError, isCompact: true },
				this.translate('We couldn\'t find your current location.', { context: 'Post editor geolocation' })
			);
		}

		if (this.state.locating) {
			buttonText = this.translate('Locating…', { context: 'Post editor geolocation' });
		} else {
			buttonText = this.translate('Get current location', { context: 'Post editor geolocation' });
		}

		return React.createElement(
			'div',
			{ className: 'editor-location' },
			error,
			React.createElement(
				EditorDrawerWell,
				{
					icon: 'location',
					label: buttonText,
					empty: !this.props.coordinates,
					onClick: this.geolocate,
					onRemove: this.clear,
					disabled: this.state.locating },
				this.renderCurrentLocation()
			),
			React.createElement(EditorLocationSearch, {
				onError: this.onGeolocateFailure,
				onSelect: this.onSearchSelect })
		);
	}
});
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-location/search-result.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'EditorLocationSearchResult',

	propTypes: {
		result: _react.PropTypes.object.isRequired,
		onClick: _react.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onClick: function onClick() {}
		};
	},
	render: function render() {
		var _props = this.props,
		    result = _props.result,
		    onClick = _props.onClick;


		return _react2.default.createElement(
			'div',
			{ onClick: onClick, className: 'editor-location__search-result' },
			result.formatted_address
		);
	}
}); /**
     * External dependencies
     */

module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-location/search.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _geocoding = __webpack_require__("./client/lib/geocoding/index.js");

var _stats = __webpack_require__("./client/lib/posts/stats.js");

var stats = _interopRequireWildcard(_stats);

var _searchCard = __webpack_require__("./client/components/search-card/index.jsx");

var _searchCard2 = _interopRequireDefault(_searchCard);

var _searchResult = __webpack_require__("./client/post-editor/editor-location/search-result.jsx");

var _searchResult2 = _interopRequireDefault(_searchResult);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
exports.default = _react2.default.createClass({
	displayName: 'EditorLocationSearch',

	propTypes: {
		onError: _react.PropTypes.func,
		onSelect: _react.PropTypes.func
	},

	getDefaultProps: function getDefaultProps() {
		return {
			onError: function onError() {},
			onSelect: function onSelect() {}
		};
	},
	getInitialState: function getInitialState() {
		return {
			results: [],
			isSearching: false
		};
	},
	componentDidMount: function componentDidMount() {
		this.mounted = true;
		this.hasTrackedStats = false;
	},
	componentWillUnmount: function componentWillUnmount() {
		this.mounted = false;
	},
	geocode: function geocode(address) {
		var _this = this;

		var onError = this.props.onError;


		if (!this.hasTrackedStats) {
			stats.recordStat('location_search');
			stats.recordEvent('Location Searched');
			this.hasTrackedStats = true;
		}

		if (!address) {
			this.setState({
				results: []
			});

			return;
		}

		(0, _geocoding.geocode)(address).then(function (results) {
			if (!_this.mounted) {
				return;
			}

			_this.setState({ results: results });
		}).catch(onError).then(function () {
			if (!_this.mounted) {
				return;
			}

			_this.setState({
				isSearching: false
			});
		});

		this.setState({
			isSearching: true
		});
	},
	onSelect: function onSelect(result) {
		this.refs.search.clear();
		this.props.onSelect(result);
	},
	render: function render() {
		var _this2 = this;

		var _state = this.state,
		    results = _state.results,
		    isSearching = _state.isSearching;


		return _react2.default.createElement(
			'div',
			{ className: 'editor-location__search' },
			_react2.default.createElement(_searchCard2.default, {
				ref: 'search',
				onSearch: this.geocode,
				searching: isSearching,
				delaySearch: true,
				compact: true
			}),
			_react2.default.createElement(
				'ul',
				{ className: 'editor-location__search-results' },
				results.map(function (result) {
					return _react2.default.createElement(
						'li',
						{ key: result.formatted_address },
						_react2.default.createElement(_searchResult2.default, {
							result: result,
							onClick: _this2.onSelect.bind(null, result) })
					);
				})
			)
		);
	}
}); /**
     * External dependencies
     */

module.exports = exports['default'];

/***/ })

});