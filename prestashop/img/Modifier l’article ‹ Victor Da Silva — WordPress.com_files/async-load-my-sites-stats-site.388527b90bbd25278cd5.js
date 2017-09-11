webpackJsonp(["async-load-my-sites-stats-site"],{

/***/ "./client/blocks/followers-count/index.jsx":
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

var _isNumber2 = __webpack_require__("./node_modules/lodash/isNumber.js");

var _isNumber3 = _interopRequireDefault(_isNumber2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _count = __webpack_require__("./client/components/count/index.jsx");

var _count2 = _interopRequireDefault(_count);

var _querySiteStats = __webpack_require__("./client/components/data/query-site-stats/index.jsx");

var _querySiteStats2 = _interopRequireDefault(_querySiteStats);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/stats/lists/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var FollowersCount = function (_Component) {
	(0, _inherits3.default)(FollowersCount, _Component);

	function FollowersCount() {
		(0, _classCallCheck3.default)(this, FollowersCount);
		return (0, _possibleConstructorReturn3.default)(this, (FollowersCount.__proto__ || (0, _getPrototypeOf2.default)(FollowersCount)).apply(this, arguments));
	}

	(0, _createClass3.default)(FollowersCount, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    slug = _props.slug,
			    followers = _props.followers,
			    translate = _props.translate,
			    siteId = _props.siteId;


			return _react2.default.createElement(
				'div',
				{ className: 'followers-count' },
				siteId && _react2.default.createElement(_querySiteStats2.default, { statType: 'stats', siteId: siteId }),
				(0, _isNumber3.default)(followers) && _react2.default.createElement(
					_button2.default,
					{
						borderless: true,
						href: '/people/followers/' + slug,
						title: translate('Total of WordPress and Email Followers')
					},
					translate('Followers'),
					' ',
					_react2.default.createElement(_count2.default, { count: followers })
				)
			);
		}
	}]);
	return FollowersCount;
}(_react.Component); /**
                      * External Dependencies
                      */


exports.default = (0, _reactRedux.connect)(function (state) {
	var site = (0, _selectors.getSelectedSite)(state);
	var siteId = (0, _get3.default)(site, 'ID');
	var data = (0, _selectors3.getSiteStatsNormalizedData)(state, siteId, 'stats');
	var siteFollowers = (0, _get3.default)(site, 'subscribers_count');

	return {
		slug: (0, _selectors2.getSiteSlug)(state, siteId),
		followers: (0, _get3.default)(data, 'followersBlog', siteFollowers),
		siteId: siteId
	};
})((0, _i18nCalypso.localize)(FollowersCount));
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

/***/ "./client/components/chart/bar-container.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _bar = __webpack_require__("./client/components/chart/bar.jsx");

var _bar2 = _interopRequireDefault(_bar);

var _xAxis = __webpack_require__("./client/components/chart/x-axis.jsx");

var _xAxis2 = _interopRequireDefault(_xAxis);

var _user = __webpack_require__("./client/lib/user/index.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
/**
 * External dependencies
 */
var user = (0, _user2.default)();

/**
 * Internal dependencies
 */


module.exports = _react2.default.createClass({
	displayName: 'ModuleChartBarContainer',

	propTypes: {
		isTouch: _react2.default.PropTypes.bool,
		data: _react2.default.PropTypes.array,
		yAxisMax: _react2.default.PropTypes.number,
		width: _react2.default.PropTypes.number,
		barClick: _react2.default.PropTypes.func
	},

	buildBars: function buildBars(max) {
		var numberBars = this.props.data.length,
		    width = this.props.chartWidth,
		    barWidth = width / numberBars;
		var tooltipPosition = user.isRTL() ? 'bottom left' : 'bottom right';

		var bars = this.props.data.map(function (item, index) {
			var barOffset = barWidth * (index + 1);

			if (barOffset + 230 > width && barOffset + barWidth - 230 > 0) {
				tooltipPosition = user.isRTL() ? 'bottom right' : 'bottom left';
			}

			return _react2.default.createElement(_bar2.default, { index: index,
				key: index,
				isTouch: this.props.isTouch,
				tooltipPosition: tooltipPosition,
				className: item.className,
				clickHandler: this.props.barClick,
				data: item,
				max: max,
				count: numberBars });
		}, this);

		return bars;
	},

	render: function render() {
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				{ className: 'chart__bars' },
				this.buildBars(this.props.yAxisMax)
			),
			_react2.default.createElement(_xAxis2.default, { data: this.props.data, labelWidth: 42 })
		);
	}
});

/***/ }),

/***/ "./client/components/chart/bar.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _tooltip = __webpack_require__("./client/components/tooltip/index.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
module.exports = _react2.default.createClass({
	displayName: 'ModuleChartBar',

	propTypes: {
		isTouch: _react2.default.PropTypes.bool,
		tooltipPosition: _react2.default.PropTypes.string,
		className: _react2.default.PropTypes.string,
		clickHandler: _react2.default.PropTypes.func,
		data: _react2.default.PropTypes.object.isRequired,
		max: _react2.default.PropTypes.number,
		count: _react2.default.PropTypes.number
	},

	getDefaultProps: function getDefaultProps() {
		return {
			max: Infinity
		};
	},

	getInitialState: function getInitialState() {
		return { showPopover: false };
	},

	buildSections: function buildSections() {
		var _props = this.props,
		    active = _props.active,
		    data = _props.data,
		    max = _props.max;
		var nestedValue = data.nestedValue,
		    value = data.value;


		var percentage = Math.ceil(value / max * 10000) / 100,
		    remain = 100 - percentage,
		    remainFloor = Math.max(1, Math.floor(remain)),
		    sections = [],
		    spacerClassOptions = {
			'chart__bar-section': true,
			'is-spacer': true,
			'is-ghost': 100 === remain && !active
		},
		    remainStyle = {
			height: remainFloor + '%'
		},
		    valueStyle = {
			top: remainFloor + '%'
		};
		var nestedBar = void 0,
		    nestedPercentage = void 0,
		    nestedStyle = void 0;

		sections.push(_react2.default.createElement('div', { key: 'spacer', className: (0, _classnames2.default)(spacerClassOptions), style: remainStyle }));

		if (nestedValue) {
			nestedPercentage = value ? Math.ceil(nestedValue / value * 10000) / 100 : 0;

			nestedStyle = { height: nestedPercentage + '%' };

			nestedBar = _react2.default.createElement('div', { key: 'nestedValue', className: 'chart__bar-section-inner', style: nestedStyle });
		}

		sections.push(_react2.default.createElement(
			'div',
			{ ref: 'valueBar', key: 'value', className: 'chart__bar-section is-bar', style: valueStyle },
			nestedBar
		));

		sections.push(_react2.default.createElement(
			'div',
			{ key: 'label', className: 'chart__bar-label' },
			this.props.label
		));

		return sections;
	},

	clickHandler: function clickHandler() {
		if ('function' === typeof this.props.clickHandler) {
			this.props.clickHandler(this.props.data);
		}
	},

	mouseEnter: function mouseEnter() {
		this.setState({ showPopover: true });
	},

	mouseLeave: function mouseLeave() {
		this.setState({ showPopover: false });
	},

	renderTooltip: function renderTooltip() {
		if (!this.props.data.tooltipData || !this.props.data.tooltipData.length || this.props.isTouch) {
			return null;
		}

		var tooltipData = this.props.data.tooltipData;


		var listItemElements = tooltipData.map(function (options, i) {
			var wrapperClasses = ['module-content-list-item'];
			var gridiconSpan = void 0;

			if (options.icon) {
				gridiconSpan = _react2.default.createElement(_gridicons2.default, { icon: options.icon, size: 18 });
			}

			wrapperClasses.push(options.className);

			return _react2.default.createElement(
				'li',
				{ key: i, className: wrapperClasses.join(' ') },
				_react2.default.createElement(
					'span',
					{ className: 'chart__tooltip-wrapper wrapper' },
					_react2.default.createElement(
						'span',
						{ className: 'chart__tooltip-value value' },
						options.value
					),
					_react2.default.createElement(
						'span',
						{ className: 'chart__tooltip-label label' },
						gridiconSpan,
						options.label
					)
				)
			);
		});

		return _react2.default.createElement(
			_tooltip2.default,
			{
				className: 'chart__tooltip',
				id: 'popover__chart-bar',
				showDelay: 200,
				context: this.refs && this.refs.valueBar,
				isVisible: this.state.showPopover,
				position: this.props.tooltipPosition
			},
			_react2.default.createElement(
				'ul',
				null,
				listItemElements
			)
		);
	},


	render: function render() {
		var barClass = (0, _classnames2.default)('chart__bar', this.props.className);
		var count = this.props.count || 1;
		var barStyle = {
			width: 1 / count * 100 + '%'
		};

		return _react2.default.createElement(
			'div',
			{ onClick: this.clickHandler,
				onMouseEnter: this.mouseEnter,
				onMouseLeave: this.mouseLeave,
				className: (0, _classnames2.default)(barClass),
				style: barStyle },
			this.buildSections(),
			_react2.default.createElement('div', { className: 'chart__bar-marker is-hundred' }),
			_react2.default.createElement('div', { className: 'chart__bar-marker is-fifty' }),
			_react2.default.createElement('div', { className: 'chart__bar-marker is-zero' }),
			this.renderTooltip()
		);
	}
});

/**
 * Internal dependencies
 */

/***/ }),

/***/ "./client/components/chart/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

var _noop2 = __webpack_require__("./node_modules/lodash/noop.js");

var _noop3 = _interopRequireDefault(_noop2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _barContainer = __webpack_require__("./client/components/chart/bar-container.jsx");

var _barContainer2 = _interopRequireDefault(_barContainer);

var _dataObserve = __webpack_require__("./client/lib/mixins/data-observe/index.js");

var _dataObserve2 = _interopRequireDefault(_dataObserve);

var _touchDetect = __webpack_require__("./client/lib/touch-detect/index.js");

var _touchDetect2 = _interopRequireDefault(_touchDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
module.exports = _react2.default.createClass({
	displayName: 'ModuleChart',

	mixins: [(0, _dataObserve2.default)('dataList')],

	propTypes: {
		loading: _react2.default.PropTypes.bool,
		data: _react2.default.PropTypes.array,
		minTouchBarWidth: _react2.default.PropTypes.number,
		minBarWidth: _react2.default.PropTypes.number,
		barClick: _react2.default.PropTypes.func
	},

	getInitialState: function getInitialState() {
		return {
			maxBars: 100, // arbitrarily high number. This will be calculated by resize method
			width: 650
		};
	},

	getDefaultProps: function getDefaultProps() {
		return {
			minTouchBarWidth: 42,
			minBarWidth: 15,
			barClick: _noop3.default
		};
	},

	// Add listener for window resize
	componentDidMount: function componentDidMount() {
		this.resize = (0, _throttle3.default)(this.resize, 400);
		window.addEventListener('resize', this.resize);
		this.resize();
	},

	// Remove listener
	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('resize', this.resize);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		if (this.props.loading && !nextProps.loading) {
			this.resize();
		}
	},

	resize: function resize() {
		var node = this.refs.chart;
		var width = node.clientWidth - 82,
		    maxBars = void 0;

		if (_touchDetect2.default.hasTouch()) {
			width = width <= 0 ? 350 : width; // mobile safari bug with zero width
			maxBars = Math.floor(width / this.props.minTouchBarWidth);
		} else {
			maxBars = Math.floor(width / this.props.minBarWidth);
		}

		this.setState({
			maxBars: maxBars,
			width: width
		});
	},

	getYAxisMax: function getYAxisMax(values) {
		var max = Math.max.apply(null, values),
		    operand = Math.pow(10, Math.floor(max).toString().length - 1);
		var rounded = Math.ceil((max + 1) / operand) * operand;

		if (rounded < 10) {
			rounded = 10;
		}

		return rounded;
	},

	getData: function getData() {
		var data = this.props.data;

		data = data.slice(0 - this.state.maxBars);

		return data;
	},

	getValues: function getValues() {
		var data = this.getData();

		data = data.map(function (item) {
			return item.value;
		}, this);

		return data;
	},

	isEmptyChart: function isEmptyChart(values) {
		return !(0, _some3.default)(values, function (value) {
			return value > 0;
		});
	},

	render: function render() {
		var values = this.getValues(),
		    yAxisMax = this.getYAxisMax(values),
		    data = this.getData();
		var emptyChart = void 0;

		// If we have an empty chart, show a message
		// @todo this message needs to either use a <Notice> or make a custom "chart__notice" class
		if (values.length && this.isEmptyChart(values)) {
			emptyChart = _react2.default.createElement(
				'div',
				{ className: 'chart__empty' },
				_react2.default.createElement(
					'span',
					{ className: 'chart__empty_notice' },
					this.translate('No activity this period', {
						context: 'Message on empty bar chart in Stats',
						comment: 'Should be limited to 32 characters to prevent wrapping'
					})
				)
			);
		}

		return _react2.default.createElement(
			'div',
			{ ref: 'chart', className: 'chart' },
			_react2.default.createElement(
				'div',
				{ className: 'chart__y-axis-markers' },
				_react2.default.createElement('div', { className: 'chart__y-axis-marker is-hundred' }),
				_react2.default.createElement('div', { className: 'chart__y-axis-marker is-fifty' }),
				_react2.default.createElement('div', { className: 'chart__y-axis-marker is-zero' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'chart__y-axis' },
				_react2.default.createElement(
					'div',
					{ className: 'chart__y-axis-width-fix' },
					this.numberFormat(100000)
				),
				_react2.default.createElement(
					'div',
					{ className: 'chart__y-axis-label is-hundred' },
					this.numberFormat(yAxisMax)
				),
				_react2.default.createElement(
					'div',
					{ className: 'chart__y-axis-label is-fifty' },
					this.numberFormat(yAxisMax / 2)
				),
				_react2.default.createElement(
					'div',
					{ className: 'chart__y-axis-label is-zero' },
					this.numberFormat(0)
				)
			),
			_react2.default.createElement(_barContainer2.default, {
				barClick: this.props.barClick,
				data: data,
				yAxisMax: yAxisMax,
				chartWidth: this.state.width,
				isTouch: _touchDetect2.default.hasTouch()
			}),
			emptyChart
		);
	}
});

/**
 * Internal dependencies
 */

/***/ }),

/***/ "./client/components/chart/label.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _user = __webpack_require__("./client/lib/user/index.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */
/**
 * External dependencies
 */
var user = (0, _user2.default)();

/**
 * Internal dependencies
 */


module.exports = _react2.default.createClass({
	displayName: 'ModuleChartLabel',

	propTypes: {
		width: _react2.default.PropTypes.number.isRequired,
		x: _react2.default.PropTypes.number.isRequired,
		label: _react2.default.PropTypes.string.isRequired
	},

	render: function render() {
		var dir = user.isRTL() ? 'right' : 'left';
		var labelStyle = void 0;

		labelStyle = {
			width: this.props.width + 'px'
		};

		labelStyle[dir] = this.props.x + 'px';

		return _react2.default.createElement(
			'div',
			{ className: 'chart__x-axis-label', style: labelStyle },
			this.props.label
		);
	}
});

/***/ }),

/***/ "./client/components/chart/legend.jsx":
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

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Module variables
 */

var LegendItem = function (_PureComponent) {
	(0, _inherits3.default)(LegendItem, _PureComponent);

	function LegendItem() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, LegendItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LegendItem.__proto__ || (0, _getPrototypeOf2.default)(LegendItem)).call.apply(_ref, [this].concat(args))), _this), _this.clickHandler = function () {
			_this.props.changeHandler(_this.props.attr);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(LegendItem, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'li',
				{ className: 'chart__legend-option' },
				_react2.default.createElement(
					'label',
					{ className: 'chart__legend-label is-selectable' },
					_react2.default.createElement('input', {
						checked: this.props.checked,
						className: 'chart__legend-checkbox',
						onChange: this.clickHandler,
						type: 'checkbox'
					}),
					_react2.default.createElement('span', { className: this.props.className }),
					this.props.label
				)
			);
		}
	}]);
	return LegendItem;
}(_react.PureComponent); /**
                          * External dependencies
                          */


LegendItem.propTypes = {
	attr: _react.PropTypes.string.isRequired,
	changeHandler: _react.PropTypes.func.isRequired,
	checked: _react.PropTypes.bool.isRequired,
	label: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string])
};

var Legend = function (_Component) {
	(0, _inherits3.default)(Legend, _Component);

	function Legend() {
		var _ref2;

		var _temp2, _this2, _ret2;

		(0, _classCallCheck3.default)(this, Legend);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Legend.__proto__ || (0, _getPrototypeOf2.default)(Legend)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onFilterChange = function (chartItem) {
			_this2.props.clickHandler(chartItem);
		}, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
	}

	(0, _createClass3.default)(Legend, [{
		key: 'render',
		value: function render() {
			var legendColors = ['chart__legend-color is-dark-blue'],
			    activeTab = this.props.activeTab;

			var legendItems = this.props.availableCharts.map(function (legendItem, index) {
				var colorClass = legendColors[index],
				    checked = -1 !== this.props.activeCharts.indexOf(legendItem),
				    tab = (0, _find3.default)(this.props.tabs, { attr: legendItem });

				return _react2.default.createElement(LegendItem, {
					key: index,
					className: colorClass,
					label: tab.label,
					attr: tab.attr,
					changeHandler: this.onFilterChange,
					checked: checked
				});
			}, this);

			return _react2.default.createElement(
				'div',
				{ className: 'chart__legend' },
				_react2.default.createElement(
					'ul',
					{ className: 'chart__legend-options' },
					_react2.default.createElement(
						'li',
						{ className: 'chart__legend-option', key: 'default-tab' },
						_react2.default.createElement(
							'span',
							{ className: 'chart__legend-label' },
							_react2.default.createElement('span', { className: 'chart__legend-color is-wordpress-blue' }),
							activeTab.label
						)
					),
					legendItems
				)
			);
		}
	}]);
	return Legend;
}(_react.Component);

Legend.propTypes = {
	activeCharts: _react.PropTypes.array,
	activeTab: _react.PropTypes.object.isRequired,
	availableCharts: _react.PropTypes.array,
	clickHandler: _react.PropTypes.func,
	tabs: _react.PropTypes.array
};
Legend.defaultProps = {
	activeCharts: [],
	availableCharts: [],
	clickHandler: _noop3.default,
	tabs: []
};
exports.default = Legend;
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/chart/x-axis.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _label = __webpack_require__("./client/components/chart/label.jsx");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
module.exports = _react2.default.createClass({
	displayName: 'ModuleChartXAxis',

	propTypes: {
		labelWidth: _react2.default.PropTypes.number.isRequired,
		data: _react2.default.PropTypes.array.isRequired
	},

	getInitialState: function getInitialState() {
		return {
			divisor: 1,
			spacing: this.props.labelWidth
		};
	},

	// Add listener for window resize
	componentDidMount: function componentDidMount() {
		this.resizeThrottled = (0, _throttle3.default)(this.resize, 400);
		window.addEventListener('resize', this.resizeThrottled);
		this.resize();
	},

	// Remove listener
	componentWillUnmount: function componentWillUnmount() {
		if (this.resizeThrottled.cancel) {
			this.resizeThrottled.cancel();
		}
		window.removeEventListener('resize', this.resizeThrottled);
	},

	componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
		this.resize(nextProps);
	},

	resize: function resize(nextProps) {
		var props = this.props;
		if (nextProps && !(nextProps instanceof Event)) {
			props = nextProps;
		}

		var node = this.refs.axis;

		/**
   * Overflow needs to be hidden to calculate the desired width,
   * but visible to display each labels' overflow :/
   */

		node.style.overflow = 'hidden';
		var width = node.clientWidth;
		node.style.overflow = 'visible';

		var dataCount = props.data.length || 1;
		var spacing = width / dataCount;
		var labelWidth = props.labelWidth;
		var divisor = Math.ceil(labelWidth / spacing);

		this.setState({
			divisor: divisor,
			spacing: spacing
		});
	},

	render: function render() {
		var data = this.props.data;

		var labels = data.map(function (item, index) {
			var x = index * this.state.spacing + (this.state.spacing - this.props.labelWidth) / 2,
			    rightIndex = data.length - index - 1;
			var label = void 0;

			if (rightIndex % this.state.divisor === 0) {
				label = _react2.default.createElement(_label2.default, { key: index, label: item.label, width: this.props.labelWidth, x: x });
			}

			return label;
		}, this);

		return _react2.default.createElement(
			'div',
			{ ref: 'axis', className: 'chart__x-axis' },
			labels
		);
	}
});

/**
 * Internal dependencies
 */

/***/ }),

/***/ "./client/components/data/query-jetpack-plugins/index.jsx":
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

var _isEqual2 = __webpack_require__("./node_modules/lodash/isEqual.js");

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _actions = __webpack_require__("./client/state/plugins/installed/actions.js");

var _selectors = __webpack_require__("./client/state/plugins/installed/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/** @format */
/**
 * External dependencies
 */
var QueryJetpackPlugins = function (_Component) {
	(0, _inherits3.default)(QueryJetpackPlugins, _Component);

	function QueryJetpackPlugins() {
		(0, _classCallCheck3.default)(this, QueryJetpackPlugins);
		return (0, _possibleConstructorReturn3.default)(this, (QueryJetpackPlugins.__proto__ || (0, _getPrototypeOf2.default)(QueryJetpackPlugins)).apply(this, arguments));
	}

	(0, _createClass3.default)(QueryJetpackPlugins, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (this.props.siteIds && !this.props.isRequestingForSites) {
				this.props.fetchPlugins(this.props.siteIds);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if ((0, _isEqual3.default)(nextProps.siteIds, this.props.siteIds)) {
				return;
			}
			this.refresh(nextProps.isRequestingForSites, nextProps.siteIds);
		}
	}, {
		key: 'refresh',
		value: function refresh(isRequesting, siteIds) {
			if (!isRequesting) {
				this.props.fetchPlugins(siteIds);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);
	return QueryJetpackPlugins;
}(_react.Component);

QueryJetpackPlugins.propTypes = {
	siteIds: _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]).isRequired).isRequired,
	isRequestingForSites: _react.PropTypes.bool,
	fetchPlugins: _react.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(function (state, props) {
	return {
		isRequestingForSites: (0, _selectors.isRequestingForSites)(state, props.siteIds)
	};
}, { fetchPlugins: _actions.fetchPlugins })(QueryJetpackPlugins);
module.exports = exports['default'];

/***/ }),

/***/ "./client/components/first-view/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

var _reactAddonsCssTransitionGroup = __webpack_require__("./node_modules/react-addons-css-transition-group/index.js");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _rootChild = __webpack_require__("./client/components/root-child/index.jsx");

var _rootChild2 = _interopRequireDefault(_rootChild);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/first-view/selectors.js");

var _actions = __webpack_require__("./client/state/ui/first-view/actions.js");

var _config = __webpack_require__("./client/config/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// component to avoid having a wrapper element for the transition
// see: https://facebook.github.io/react/docs/animation.html#rendering-a-single-child
/**
 * External dependencies
 */
var TransitionGroupComponent = function TransitionGroupComponent(props) {
	var children = _react2.default.Children.toArray(props.children);
	return children[0] || null;
};

/**
 * Internal dependencies
 */


var FirstView = _react2.default.createClass({
	displayName: 'FirstView',

	mixins: [_mixin2.default],

	getInitialState: function getInitialState() {
		return {
			isEnabled: false
		};
	},
	componentDidMount: function componentDidMount() {
		this.updateDocumentStyles();
	},
	componentDidUpdate: function componentDidUpdate() {
		this.updateDocumentStyles();
	},
	componentWillUnmount: function componentWillUnmount() {
		var _this = this;

		process.nextTick(function () {
			_this.updateDocumentStylesForHiddenFirstView();
		});
	},
	render: function render() {
		var classes = (0, _classnames2.default)('first-view', {
			'is-visible': this.props.isVisible
		});
		var firstViewContentClasses = (0, _classnames2.default)('first-view__content');
		var firstViewHidePreferenceClasses = (0, _classnames2.default)('first-view__hide-preference');

		return _react2.default.createElement(
			_rootChild2.default,
			{ className: classes },
			_react2.default.createElement(
				_reactAddonsCssTransitionGroup2.default,
				{ transitionName: 'first-view-transition',
					component: TransitionGroupComponent,
					transitionEnter: false, transitionEnterTimeout: 0,
					transitionLeaveTimeout: 250 },
				this.props.isVisible && _react2.default.createElement(
					_card2.default,
					{ key: 'content', className: firstViewContentClasses },
					this.props.children,
					_react2.default.createElement(
						_button2.default,
						{ primary: true, onClick: this.hide },
						this.translate('Got It!', { context: 'Button that dismisses the introduction overlay.' })
					),
					_react2.default.createElement(
						'div',
						{ className: firstViewHidePreferenceClasses },
						_react2.default.createElement(
							'label',
							null,
							_react2.default.createElement('input', { type: 'checkbox',
								checked: !this.state.isEnabled,
								onChange: this.enableOrDisableNextTime }),
							this.translate("Don't show this again")
						)
					)
				)
			)
		);
	},
	hide: function hide() {
		this.props.hideView({ enabled: this.state.isEnabled });
	},
	enableOrDisableNextTime: function enableOrDisableNextTime(event) {
		this.setState({
			isEnabled: !event.target.checked
		});
	},
	updateDocumentStyles: function updateDocumentStyles() {
		if (this.props.isVisible) {
			this.updateDocumentStylesForVisibleFirstView();
		} else {
			this.updateDocumentStylesForHiddenFirstView();
		}
	},
	updateDocumentStylesForVisibleFirstView: function updateDocumentStylesForVisibleFirstView() {
		var _this2 = this;

		document.documentElement.classList.add('no-scroll');
		document.documentElement.classList.add('is-first-view-active');
		process.nextTick(function () {
			if (_this2.props.isVisible) {
				document.documentElement.classList.add('is-first-view-visible');
			}
		});
	},
	updateDocumentStylesForHiddenFirstView: function updateDocumentStylesForHiddenFirstView() {
		var _this3 = this;

		document.documentElement.classList.remove('no-scroll');
		document.documentElement.classList.remove('is-first-view-visible');
		// wait a bit so that we trigger the CSS transition
		setTimeout(function () {
			if (!_this3.props.isVisible) {
				document.documentElement.classList.remove('is-first-view-active');
			}
		}, 600);
	}
});

exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		sectionName: (0, _selectors.getSectionName)(state),
		isVisible: (0, _config.isEnabled)('ui/first-view') && (0, _selectors2.shouldViewBeVisible)(state)
	};
}, {
	hideView: _actions.hideView
})(FirstView);
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./client/components/jetpack-colophon/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _jetpackLogo = __webpack_require__("./client/components/jetpack-logo/index.jsx");

var _jetpackLogo2 = _interopRequireDefault(_jetpackLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @format */
/**
 * External dependencies
 */
var JetpackColophon = function JetpackColophon(_ref) {
	var className = _ref.className,
	    translate = _ref.translate;

	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)('jetpack-colophon', className) },
		_react2.default.createElement(
			'span',
			{ className: 'jetpack-colophon__power' },
			translate('Powered by {{jetpackLogo /}}', {
				components: {
					jetpackLogo: _react2.default.createElement(_jetpackLogo2.default, { size: 24, full: true })
				}
			})
		)
	);
};

/**
 * Internal dependencies
 */
exports.default = (0, _i18nCalypso.localize)(JetpackColophon);
module.exports = exports['default'];

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

/***/ "./client/components/sticky-panel/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

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
var viewport = __webpack_require__("./client/lib/viewport/index.js");

module.exports = React.createClass({
	displayName: 'StickyPanel',

	propTypes: {
		minLimit: React.PropTypes.oneOfType([React.PropTypes.bool, React.PropTypes.number])
	},

	getDefaultProps: function getDefaultProps() {
		return {
			minLimit: false
		};
	},

	getInitialState: function getInitialState() {
		return {
			isSticky: false,
			spacerHeight: 0,
			blockWidth: 0
		};
	},

	componentDidMount: function componentDidMount() {
		// Determine and cache vertical threshold from rendered element's
		// offset relative the document
		this.threshold = ReactDom.findDOMNode(this).offsetTop;
		this.throttleOnResize = (0, _throttle3.default)(this.onWindowResize, 200);

		window.addEventListener('scroll', this.onWindowScroll);
		window.addEventListener('resize', this.throttleOnResize);
		this.updateIsSticky();
	},

	componentWillUnmount: function componentWillUnmount() {
		window.removeEventListener('scroll', this.onWindowScroll);
		window.removeEventListener('resize', this.throttleOnResize);
		window.cancelAnimationFrame(this.rafHandle);
	},

	onWindowScroll: function onWindowScroll() {
		this.rafHandle = window.requestAnimationFrame(this.updateIsSticky);
	},

	onWindowResize: function onWindowResize() {
		this.setState({
			spacerHeight: this.state.isSticky ? ReactDom.findDOMNode(this).clientHeight : 0,
			blockWidth: this.state.isSticky ? ReactDom.findDOMNode(this).clientWidth : 0
		});
	},

	updateIsSticky: function updateIsSticky() {
		var isSticky = window.pageYOffset > this.threshold;

		if (this.props.minLimit !== false && this.props.minLimit >= window.innerWidth || viewport.isMobile()) {
			return this.setState({ isSticky: false });
		}

		if (isSticky !== this.state.isSticky) {
			this.setState({
				isSticky: isSticky,
				spacerHeight: isSticky ? ReactDom.findDOMNode(this).clientHeight : 0,
				blockWidth: isSticky ? ReactDom.findDOMNode(this).clientWidth : 0
			});
		}
	},

	getBlockStyle: function getBlockStyle() {
		var offset;

		if (this.state.isSticky) {
			// Offset to account for Master Bar by finding body visual top
			// relative the current scroll position
			offset = document.getElementById('header').getBoundingClientRect().height;

			return {
				top: offset,
				width: this.state.blockWidth
			};
		}
	},

	render: function render() {
		var classes = classNames('sticky-panel', this.props.className, {
			'is-sticky': this.state.isSticky
		});

		return React.createElement(
			'div',
			{ className: classes },
			React.createElement(
				'div',
				{ className: 'sticky-panel__content', style: this.getBlockStyle() },
				this.props.children
			),
			React.createElement('div', { className: 'sticky-panel__spacer', style: { height: this.state.spacerHeight } })
		);
	}
});

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

/***/ "./client/my-sites/stats/geochart/index.jsx":
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

var _uniq2 = __webpack_require__("./node_modules/lodash/uniq.js");

var _uniq3 = _interopRequireDefault(_uniq2);

var _map2 = __webpack_require__("./node_modules/lodash/map.js");

var _map3 = _interopRequireDefault(_map2);

var _throttle2 = __webpack_require__("./node_modules/lodash/throttle.js");

var _throttle3 = _interopRequireDefault(_throttle2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _loadScript = __webpack_require__("./client/lib/load-script/index.js");

var _placeholder = __webpack_require__("./client/my-sites/stats/stats-module/placeholder.jsx");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _querySiteStats = __webpack_require__("./client/components/data/query-site-stats/index.jsx");

var _querySiteStats2 = _interopRequireDefault(_querySiteStats);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/stats/lists/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var StatsGeochart = function (_Component) {
	(0, _inherits3.default)(StatsGeochart, _Component);

	function StatsGeochart() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, StatsGeochart);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StatsGeochart.__proto__ || (0, _getPrototypeOf2.default)(StatsGeochart)).call.apply(_ref, [this].concat(args))), _this), _this.visualizationsLoaded = false, _this.visualization = null, _this.recordEvent = function () {
			_analytics2.default.ga.recordEvent('Stats', 'Clicked Country on Map');
		}, _this.drawRegionsMap = function () {
			if (_this.refs && _this.refs.chart) {
				_this.visualizationsLoaded = true;
				_this.visualization = new window.google.visualization.GeoChart(_this.refs.chart);
				window.google.visualization.events.addListener(_this.visualization, 'regionClick', _this.recordEvent);

				_this.drawData();
			}
		}, _this.resize = function () {
			if (_this.visualizationsLoaded) {
				_this.drawData();
			}
		}, _this.drawData = function () {
			var _this$props = _this.props,
			    data = _this$props.data,
			    translate = _this$props.translate;


			if (!data || !data.length) {
				return;
			}

			var mapData = (0, _map3.default)(data, function (country) {
				return [{
					v: country.countryCode,
					f: country.label
				}, country.value];
			});

			var chartData = new window.google.visualization.DataTable();
			chartData.addColumn('string', translate('Country').toString());
			chartData.addColumn('number', translate('Views').toString());
			chartData.addRows(mapData);
			var node = _this.refs.chart;
			var width = node.clientWidth;

			var options = {
				width: 100 + '%',
				height: width <= 480 ? '238' : '480',
				keepAspectRatio: true,
				enableRegionInteractivity: true,
				region: 'world',
				colorAxis: { colors: ['#FFF088', '#F34605'] }
			};

			var regions = (0, _uniq3.default)((0, _map3.default)(data, 'region'));

			if (1 === regions.length) {
				options.region = regions[0];
			}

			_this.visualization.draw(chartData, options);
		}, _this.loadVisualizations = function () {
			// If google is already in the DOM, don't load it again.
			if (window.google) {
				window.google.load('visualization', '1', { packages: ['geochart'], callback: _this.drawRegionsMap });
				clearTimeout(_this.timer);
			} else {
				_this.tick();
			}
		}, _this.tick = function () {
			_this.timer = setTimeout(_this.loadVisualizations, 1000);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(StatsGeochart, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!window.google) {
				(0, _loadScript.loadScript)('https://www.google.com/jsapi');
				this.tick();
			} else {
				// google jsapi is in the dom, load the visualizations again just in case
				this.loadVisualizations();
			}

			this.resize = (0, _throttle3.default)(this.resize, 1000);
			window.addEventListener('resize', this.resize);
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.visualizationsLoaded) {
				this.drawData();
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.visualization) {
				window.google.visualization.events.removeListener(this.visualization, 'regionClick', this.recordEvent);
				this.visualization.clearChart();
			}
			if (this.resize.cancel) {
				this.resize.cancel();
			}
			window.removeEventListener('resize', this.resize);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    siteId = _props.siteId,
			    statType = _props.statType,
			    query = _props.query,
			    data = _props.data;

			var isLoading = !data;
			var classes = (0, _classnames2.default)('stats-geochart', {
				'is-loading': isLoading,
				'has-no-data': data && !data.length
			});

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement('div', { ref: 'chart', className: classes }),
				siteId && _react2.default.createElement(_querySiteStats2.default, { statType: statType, siteId: siteId, query: query }),
				_react2.default.createElement(_placeholder2.default, { className: 'is-block', isLoading: isLoading })
			);
		}
	}]);
	return StatsGeochart;
}(_react.Component);

StatsGeochart.propTypes = {
	siteId: _react.PropTypes.number,
	statType: _react.PropTypes.string,
	query: _react.PropTypes.object,
	data: _react.PropTypes.array
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var statType = 'statsCountryViews';
	var query = ownProps.query;


	return {
		data: (0, _selectors2.getSiteStatsNormalizedData)(state, siteId, statType, query),
		siteId: siteId,
		statType: statType
	};
})((0, _i18nCalypso.localize)(StatsGeochart));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/site.jsx":
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

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _statsPeriodNavigation = __webpack_require__("./client/my-sites/stats/stats-period-navigation/index.jsx");

var _statsPeriodNavigation2 = _interopRequireDefault(_statsPeriodNavigation);

var _main = __webpack_require__("./client/components/main/index.jsx");

var _main2 = _interopRequireDefault(_main);

var _statsNavigation = __webpack_require__("./client/my-sites/stats/stats-navigation/index.jsx");

var _statsNavigation2 = _interopRequireDefault(_statsNavigation);

var _sidebarNavigation = __webpack_require__("./client/my-sites/sidebar-navigation/sidebar-navigation.jsx");

var _sidebarNavigation2 = _interopRequireDefault(_sidebarNavigation);

var _statsDatePicker = __webpack_require__("./client/my-sites/stats/stats-date-picker/index.jsx");

var _statsDatePicker2 = _interopRequireDefault(_statsDatePicker);

var _statsCountries = __webpack_require__("./client/my-sites/stats/stats-countries/index.jsx");

var _statsCountries2 = _interopRequireDefault(_statsCountries);

var _statsChartTabs = __webpack_require__("./client/my-sites/stats/stats-chart-tabs/index.jsx");

var _statsChartTabs2 = _interopRequireDefault(_statsChartTabs);

var _statsModule = __webpack_require__("./client/my-sites/stats/stats-module/index.jsx");

var _statsModule2 = _interopRequireDefault(_statsModule);

var _statsStrings = __webpack_require__("./client/my-sites/stats/stats-strings.js");

var _statsStrings2 = _interopRequireDefault(_statsStrings);

var _toTitleCase = __webpack_require__("./node_modules/to-title-case/index.js");

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _statsFirstView = __webpack_require__("./client/my-sites/stats/stats-first-view/index.jsx");

var _statsFirstView2 = _interopRequireDefault(_statsFirstView);

var _stickyPanel = __webpack_require__("./client/components/sticky-panel/index.jsx");

var _stickyPanel2 = _interopRequireDefault(_stickyPanel);

var _jetpackColophon = __webpack_require__("./client/components/jetpack-colophon/index.jsx");

var _jetpackColophon2 = _interopRequireDefault(_jetpackColophon);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatsSite = function (_Component) {
	(0, _inherits3.default)(StatsSite, _Component);

	function StatsSite(props) {
		(0, _classCallCheck3.default)(this, StatsSite);

		var _this = (0, _possibleConstructorReturn3.default)(this, (StatsSite.__proto__ || (0, _getPrototypeOf2.default)(StatsSite)).call(this, props));

		_this.barClick = function (bar) {
			_this.props.recordGoogleEvent('Stats', 'Clicked Chart Bar');
			_page2.default.redirect(_this.props.path + '?startDate=' + bar.data.period);
		};

		_this.switchChart = function (tab) {
			if (!tab.loading && tab.attr !== _this.state.chartTab) {
				_this.props.recordGoogleEvent('Stats', 'Clicked ' + (0, _toTitleCase2.default)(tab.attr) + ' Tab');
				_this.setState({
					chartTab: tab.attr,
					tabSwitched: true
				});
			}
		};

		_this.state = {
			chartTab: _this.props.chartTab,
			tabSwitched: false
		};
		return _this;
	}

	(0, _createClass3.default)(StatsSite, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!this.state.tabSwitched && this.state.chartTab !== nextProps.chartTab) {
				this.setState({
					tabSwitched: true,
					chartTab: nextProps.chartTab
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    date = _props.date,
			    isJetpack = _props.isJetpack,
			    hasPodcasts = _props.hasPodcasts,
			    siteId = _props.siteId,
			    slug = _props.slug,
			    translate = _props.translate;

			var charts = [{ attr: 'views', legendOptions: ['visitors'], gridicon: 'visible',
				label: translate('Views', { context: 'noun' }) }, { attr: 'visitors', gridicon: 'user', label: translate('Visitors', { context: 'noun' }) }, { attr: 'likes', gridicon: 'star', label: translate('Likes', { context: 'noun' }) }, { attr: 'comments', gridicon: 'comment', label: translate('Comments', { context: 'noun' }) }];
			var queryDate = date.format('YYYY-MM-DD');
			var _props$period = this.props.period,
			    period = _props$period.period,
			    endOf = _props$period.endOf;

			var moduleStrings = (0, _statsStrings2.default)();
			var videoList = void 0;
			var podcastList = void 0;

			var query = {
				period: period,
				date: endOf.format('YYYY-MM-DD')
			};

			// Video plays, and tags and categories are not supported in JetPack Stats
			if (!isJetpack) {
				videoList = _react2.default.createElement(_statsModule2.default, {
					path: 'videoplays',
					moduleStrings: moduleStrings.videoplays,
					period: this.props.period,
					query: query,
					statType: 'statsVideoPlays',
					showSummaryLink: true
				});
			}
			if (_config2.default.isEnabled('manage/stats/podcasts') && hasPodcasts) {
				podcastList = _react2.default.createElement(_statsModule2.default, {
					path: 'podcastdownloads',
					moduleStrings: moduleStrings.podcastdownloads,
					period: this.props.period,
					query: query,
					statType: 'statsPodcastDownloads',
					showSummaryLink: true
				});
			}

			return _react2.default.createElement(
				_main2.default,
				{ wideLayout: true },
				_react2.default.createElement(_statsFirstView2.default, null),
				_react2.default.createElement(_sidebarNavigation2.default, null),
				_react2.default.createElement(_statsNavigation2.default, {
					section: period,
					siteId: siteId,
					slug: slug
				}),
				_react2.default.createElement(
					'div',
					{ id: 'my-stats-content' },
					_react2.default.createElement(_statsChartTabs2.default, {
						barClick: this.barClick,
						switchTab: this.switchChart,
						charts: charts,
						queryDate: queryDate,
						period: this.props.period,
						chartTab: this.state.chartTab }),
					_react2.default.createElement(
						_stickyPanel2.default,
						{ className: 'stats__sticky-navigation' },
						_react2.default.createElement(
							_statsPeriodNavigation2.default,
							{
								date: date,
								period: period,
								url: '/stats/' + period + '/' + slug
							},
							_react2.default.createElement(_statsDatePicker2.default, {
								period: period,
								date: date,
								query: query,
								statsType: 'statsTopPosts',
								showQueryDate: true
							})
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'stats__module-list is-events' },
						_react2.default.createElement(
							'div',
							{ className: 'stats__module-column' },
							_react2.default.createElement(_statsModule2.default, {
								path: 'posts',
								moduleStrings: moduleStrings.posts,
								period: this.props.period,
								query: query,
								statType: 'statsTopPosts',
								showSummaryLink: true }),
							_react2.default.createElement(_statsModule2.default, {
								path: 'searchterms',
								moduleStrings: moduleStrings.search,
								period: this.props.period,
								query: query,
								statType: 'statsSearchTerms',
								showSummaryLink: true }),
							videoList
						),
						_react2.default.createElement(
							'div',
							{ className: 'stats__module-column' },
							_react2.default.createElement(_statsCountries2.default, {
								path: 'countries',
								period: this.props.period,
								query: query,
								summary: false }),
							_react2.default.createElement(_statsModule2.default, {
								path: 'clicks',
								moduleStrings: moduleStrings.clicks,
								period: this.props.period,
								query: query,
								statType: 'statsClicks',
								showSummaryLink: true })
						),
						_react2.default.createElement(
							'div',
							{ className: 'stats__module-column' },
							_react2.default.createElement(_statsModule2.default, {
								path: 'referrers',
								moduleStrings: moduleStrings.referrers,
								period: this.props.period,
								query: query,
								statType: 'statsReferrers',
								showSummaryLink: true }),
							_react2.default.createElement(_statsModule2.default, {
								path: 'authors',
								moduleStrings: moduleStrings.authors,
								period: this.props.period,
								query: query,
								statType: 'statsTopAuthors',
								className: 'stats__author-views',
								showSummaryLink: true }),
							podcastList
						)
					)
				),
				_react2.default.createElement(_jetpackColophon2.default, null)
			);
		}
	}]);
	return StatsSite;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


exports.default = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var isJetpack = (0, _selectors2.isJetpackSite)(state, siteId);
	return {
		isJetpack: isJetpack,
		hasPodcasts: (0, _selectors2.getSiteOption)(state, siteId, 'podcasting_archive'),
		siteId: siteId,
		slug: (0, _selectors.getSelectedSiteSlug)(state)
	};
}, { recordGoogleEvent: _actions.recordGoogleEvent })((0, _i18nCalypso.localize)(StatsSite));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-chart-tabs/index.jsx":
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

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _chart = __webpack_require__("./client/components/chart/index.jsx");

var _chart2 = _interopRequireDefault(_chart);

var _legend = __webpack_require__("./client/components/chart/legend.jsx");

var _legend2 = _interopRequireDefault(_legend);

var _statsTabs = __webpack_require__("./client/my-sites/stats/stats-tabs/index.jsx");

var _statsTabs2 = _interopRequireDefault(_statsTabs);

var _placeholder = __webpack_require__("./client/my-sites/stats/stats-module/placeholder.jsx");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _querySiteStats = __webpack_require__("./client/components/data/query-site-stats/index.jsx");

var _querySiteStats2 = _interopRequireDefault(_querySiteStats);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/stats/lists/selectors.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _utils = __webpack_require__("./client/state/stats/lists/utils.js");

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatModuleChartTabs = function (_Component) {
	(0, _inherits3.default)(StatModuleChartTabs, _Component);

	function StatModuleChartTabs(props) {
		(0, _classCallCheck3.default)(this, StatModuleChartTabs);

		var _this = (0, _possibleConstructorReturn3.default)(this, (StatModuleChartTabs.__proto__ || (0, _getPrototypeOf2.default)(StatModuleChartTabs)).call(this, props));

		_this.onLegendClick = function (chartItem) {
			var activeLegendCharts = _this.state.activeLegendCharts;
			var chartIndex = activeLegendCharts.indexOf(chartItem);
			var gaEventAction = void 0;
			if (-1 === chartIndex) {
				activeLegendCharts.push(chartItem);
				gaEventAction = ' on';
			} else {
				activeLegendCharts.splice(chartIndex);
				gaEventAction = ' off';
			}
			_this.props.recordGoogleEvent('Stats', 'Toggled Nested Chart ' + chartItem + ' ' + gaEventAction);
			_this.setState({
				activeLegendCharts: activeLegendCharts
			});
		};

		var activeTab = _this.getActiveTab();
		var activeCharts = activeTab.legendOptions ? activeTab.legendOptions.slice() : [];
		_this.state = {
			activeLegendCharts: activeCharts,
			activeTab: activeTab
		};
		return _this;
	}

	(0, _createClass3.default)(StatModuleChartTabs, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			var activeTab = this.getActiveTab(nextProps);
			var activeCharts = activeTab.legendOptions ? activeTab.legendOptions.slice() : [];
			if (activeTab !== this.state.activeTab) {
				this.setState({
					activeLegendCharts: activeCharts,
					activeTab: activeTab
				});
			}
		}
	}, {
		key: 'buildTooltipData',
		value: function buildTooltipData(item) {
			var tooltipData = [];
			var date = this.props.moment(item.data.period);

			var dateLabel = void 0;
			switch (this.props.period.period) {
				case 'day':
					dateLabel = date.format('LL');
					break;
				case 'week':
					dateLabel = date.format('L') + ' - ' + date.add(6, 'days').format('L');
					break;
				case 'month':
					dateLabel = date.format('MMMM YYYY');
					break;
				case 'year':
					dateLabel = date.format('YYYY');
					break;
			}

			tooltipData.push({
				label: dateLabel,
				className: 'is-date-label',
				value: null
			});

			switch (this.props.chartTab) {
				case 'comments':
					tooltipData.push({
						label: this.props.translate('Comments'),
						value: this.props.numberFormat(item.value),
						className: 'is-comments',
						icon: 'comment'
					});
					break;

				case 'likes':
					tooltipData.push({
						label: this.props.translate('Likes'),
						value: this.props.numberFormat(item.value),
						className: 'is-likes',
						icon: 'star'
					});
					break;

				default:
					tooltipData.push({
						label: this.props.translate('Views'),
						value: this.props.numberFormat(item.data.views),
						className: 'is-views',
						icon: 'visible'
					});
					tooltipData.push({
						label: this.props.translate('Visitors'),
						value: this.props.numberFormat(item.data.visitors),
						className: 'is-visitors',
						icon: 'user'
					});
					tooltipData.push({
						label: this.props.translate('Views Per Visitor'),
						value: this.props.numberFormat(item.data.views / item.data.visitors, { decimals: 2 }),
						className: 'is-views-per-visitor',
						icon: 'chevron-right'
					});

					if (item.data.post_titles && item.data.post_titles.length) {
						// only show two post titles
						if (item.data.post_titles.length > 2) {
							tooltipData.push({
								label: this.props.translate('Posts Published'),
								value: this.props.numberFormat(item.data.post_titles.length),
								className: 'is-published-nolist',
								icon: 'posts'
							});
						} else {
							tooltipData.push({
								label: this.props.translate('Post Published', 'Posts Published', {
									textOnly: true, count: item.data.post_titles.length
								}) + ':',
								className: 'is-published',
								icon: 'posts',
								value: ''
							});
							item.data.post_titles.forEach(function (post_title) {
								tooltipData.push({
									className: 'is-published-item',
									label: post_title
								});
							});
						}
					}
					break;
			}

			return tooltipData;
		}
	}, {
		key: 'getActiveTab',
		value: function getActiveTab(nextProps) {
			var props = nextProps || this.props;
			return (0, _find3.default)(props.charts, { attr: props.chartTab }) || props.charts[0];
		}
	}, {
		key: 'getLoadedData',
		value: function getLoadedData() {
			var _props = this.props,
			    quickQueryData = _props.quickQueryData,
			    fullQueryData = _props.fullQueryData,
			    fullQueryRequesting = _props.fullQueryRequesting;

			return fullQueryRequesting ? quickQueryData : fullQueryData;
		}
	}, {
		key: 'buildChartData',
		value: function buildChartData() {
			var _this2 = this;

			var data = this.getLoadedData();
			if (!data) {
				return [];
			}

			var activeTab = this.props.chartTab;
			var labelKey = 'label' + this.props.period.period.charAt(0).toUpperCase() + this.props.period.period.slice(1);
			return data.map(function (record) {
				var recordClassName = void 0;
				if (record.classNames && record.classNames.length) {
					recordClassName = record.classNames.join(' ');
				}

				var nestedValue = void 0;
				if (_this2.state.activeLegendCharts.length) {
					nestedValue = record[_this2.state.activeLegendCharts[0]];
				}

				var className = (0, _classnames2.default)(recordClassName, {
					'is-selected': record.period === _this2.props.queryDate
				});

				var item = {
					label: record[labelKey],
					value: record[activeTab],
					data: record,
					nestedValue: nestedValue,
					className: className
				};
				item.tooltipData = _this2.buildTooltipData(item);

				return item;
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    fullQuery = _props2.fullQuery,
			    quickQuery = _props2.quickQuery,
			    quickQueryRequesting = _props2.quickQueryRequesting,
			    fullQueryRequesting = _props2.fullQueryRequesting,
			    siteId = _props2.siteId;

			var chartData = this.buildChartData();
			var activeTab = this.getActiveTab();
			var availableCharts = [];
			var data = this.getLoadedData();
			var activeTabLoading = quickQueryRequesting && fullQueryRequesting && !(data && data.length);
			var classes = ['stats-module', 'is-chart-tabs', {
				'is-loading': activeTabLoading
			}];
			if (activeTab.legendOptions) {
				availableCharts = activeTab.legendOptions;
			}

			return _react2.default.createElement(
				'div',
				null,
				siteId && _react2.default.createElement(_querySiteStats2.default, { statType: 'statsVisits', siteId: siteId, query: quickQuery }),
				siteId && _react2.default.createElement(_querySiteStats2.default, { statType: 'statsVisits', siteId: siteId, query: fullQuery }),
				_react2.default.createElement(
					_card2.default,
					{ className: _classnames2.default.apply(undefined, classes) },
					_react2.default.createElement(_legend2.default, {
						tabs: this.props.charts,
						activeTab: activeTab,
						availableCharts: availableCharts,
						activeCharts: this.state.activeLegendCharts,
						clickHandler: this.onLegendClick
					}),
					_react2.default.createElement(_placeholder2.default, { className: 'is-chart', isLoading: activeTabLoading }),
					_react2.default.createElement(_chart2.default, { loading: activeTabLoading, data: chartData, barClick: this.props.barClick }),
					_react2.default.createElement(_statsTabs2.default, {
						data: data,
						tabs: this.props.charts,
						switchTab: this.props.switchTab,
						selectedTab: this.props.chartTab,
						activeIndex: this.props.queryDate,
						activeKey: 'period'
					})
				)
			);
		}
	}]);
	return StatModuleChartTabs;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


var connectComponent = (0, _reactRedux.connect)(function (state, _ref) {
	var moment = _ref.moment,
	    periodObject = _ref.period,
	    chartTab = _ref.chartTab,
	    queryDate = _ref.queryDate;

	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var period = periodObject.period;

	var timezoneOffset = (0, _selectors3.getSiteOption)(state, siteId, 'gmt_offset') || 0;
	var momentSiteZone = moment().utcOffset(timezoneOffset);
	var date = (0, _utils.rangeOfPeriod)(period, momentSiteZone.locale('en')).endOf;

	var quantity = 30;
	switch (period) {
		case 'year':
			quantity = 10;
			break;
	}
	var periodDifference = moment(date).diff(moment(queryDate), period);
	if (periodDifference >= quantity) {
		date = moment(date).subtract(Math.floor(periodDifference / quantity) * quantity, period).format('YYYY-MM-DD');
	}

	var quickQueryFields = chartTab;
	// If we are on the default Tab, grab visitors too
	if ('views' === quickQueryFields) {
		quickQueryFields = 'views,visitors';
	}

	var query = {
		unit: period,
		date: date,
		quantity: quantity
	};
	var quickQuery = (0, _extends3.default)({}, query, {
		stat_fields: quickQueryFields
	});
	var fullQuery = (0, _extends3.default)({}, query, {
		stat_fields: 'views,visitors,likes,comments,post_titles'
	});

	return {
		quickQueryRequesting: (0, _selectors2.isRequestingSiteStatsForQuery)(state, siteId, 'statsVisits', quickQuery),
		quickQueryData: (0, _selectors2.getSiteStatsNormalizedData)(state, siteId, 'statsVisits', quickQuery),
		fullQueryRequesting: (0, _selectors2.isRequestingSiteStatsForQuery)(state, siteId, 'statsVisits', fullQuery),
		fullQueryData: (0, _selectors2.getSiteStatsNormalizedData)(state, siteId, 'statsVisits', fullQuery),
		quickQuery: quickQuery,
		fullQuery: fullQuery,
		siteId: siteId
	};
}, { recordGoogleEvent: _actions.recordGoogleEvent });

exports.default = (0, _flowRight3.default)(_i18nCalypso.localize, connectComponent)(StatModuleChartTabs);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-countries/index.jsx":
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

var _statsStrings = __webpack_require__("./client/my-sites/stats/stats-strings.js");

var _statsStrings2 = _interopRequireDefault(_statsStrings);

var _geochart = __webpack_require__("./client/my-sites/stats/geochart/index.jsx");

var _geochart2 = _interopRequireDefault(_geochart);

var _statsModule = __webpack_require__("./client/my-sites/stats/stats-module/index.jsx");

var _statsModule2 = _interopRequireDefault(_statsModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatCountries = function (_Component) {
	(0, _inherits3.default)(StatCountries, _Component);

	function StatCountries() {
		(0, _classCallCheck3.default)(this, StatCountries);
		return (0, _possibleConstructorReturn3.default)(this, (StatCountries.__proto__ || (0, _getPrototypeOf2.default)(StatCountries)).apply(this, arguments));
	}

	(0, _createClass3.default)(StatCountries, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    summary = _props.summary,
			    query = _props.query,
			    period = _props.period;

			var moduleStrings = (0, _statsStrings2.default)();

			return _react2.default.createElement(
				_statsModule2.default,
				{
					query: query,
					path: 'countryviews',
					period: period,
					showSummaryLink: !summary,
					summary: summary,
					moduleStrings: moduleStrings.countries,
					statType: 'statsCountryViews'
				},
				_react2.default.createElement(_geochart2.default, { query: query })
			);
		}
	}]);
	return StatCountries;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


StatCountries.propTypes = {
	summary: _react.PropTypes.bool,
	path: _react.PropTypes.string,
	period: _react.PropTypes.object,
	date: _react.PropTypes.string
};
exports.default = (0, _i18nCalypso.localize)(StatCountries);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-date-picker/index.jsx":
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

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _tooltip = __webpack_require__("./client/components/tooltip/index.jsx");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _getSiteStatsQueryDate = __webpack_require__("./client/state/selectors/get-site-stats-query-date.js");

var _getSiteStatsQueryDate2 = _interopRequireDefault(_getSiteStatsQueryDate);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/stats/lists/selectors.js");

var _utils = __webpack_require__("./client/state/stats/lists/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatsDatePicker = function (_Component) {
	(0, _inherits3.default)(StatsDatePicker, _Component);

	function StatsDatePicker() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, StatsDatePicker);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StatsDatePicker.__proto__ || (0, _getPrototypeOf2.default)(StatsDatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			isTooltipVisible: false
		}, _this.showTooltip = function () {
			_this.setState({ isTooltipVisible: true });
		}, _this.hideTooltip = function () {
			_this.setState({ isTooltipVisible: false });
		}, _this.bindStatusIndicator = function (ref) {
			_this.statusIndicator = ref;
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(StatsDatePicker, [{
		key: 'dateForSummarize',
		value: function dateForSummarize() {
			var _props = this.props,
			    query = _props.query,
			    moment = _props.moment,
			    translate = _props.translate;

			var localizedDate = moment();

			switch (query.num) {
				case '-1':
					return translate('All Time');

				default:
					return translate('%(number)s days ending %(endDate)s (Summarized)', {
						context: 'Date range for which stats are being displayed',
						args: {
							// LL is a date localized by momentjs
							number: parseInt(query.num),
							endDate: localizedDate.format('LL')
						}
					});
			}
		}
	}, {
		key: 'dateForDisplay',
		value: function dateForDisplay() {
			var _props2 = this.props,
			    date = _props2.date,
			    moment = _props2.moment,
			    period = _props2.period,
			    translate = _props2.translate;

			// Ensure we have a moment instance here to work with.

			var momentDate = moment.isMoment(date) ? date : moment(date);
			var localizedDate = moment(momentDate.format('YYYY-MM-DD'));
			var formattedDate = void 0;

			switch (period) {
				case 'week':
					formattedDate = translate('%(startDate)s - %(endDate)s', {
						context: 'Date range for which stats are being displayed',
						args: {
							// LL is a date localized by momentjs
							startDate: localizedDate.startOf('week').add(1, 'd').format('LL'),
							endDate: localizedDate.endOf('week').add(1, 'd').format('LL')
						}
					});
					break;

				case 'month':
					formattedDate = localizedDate.format('MMMM YYYY');
					break;

				case 'year':
					formattedDate = localizedDate.format('YYYY');
					break;

				default:
					// LL is a date localized by momentjs
					formattedDate = localizedDate.format('LL');
			}

			return formattedDate;
		}
	}, {
		key: 'renderQueryDate',
		value: function renderQueryDate() {
			var _props3 = this.props,
			    queryDate = _props3.queryDate,
			    moment = _props3.moment,
			    translate = _props3.translate;

			if (!queryDate) {
				return null;
			}

			var today = moment();
			var date = moment(queryDate);
			var isToday = today.isSame(date, 'day');
			return _react2.default.createElement(
				'span',
				null,
				translate('Last update: %(time)s', {
					args: { time: isToday ? date.format('LT') : date.fromNow() }
				}),
				_react2.default.createElement(_gridicons2.default, { icon: 'info-outline', size: 18 })
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props4 = this.props,
			    summary = _props4.summary,
			    translate = _props4.translate,
			    query = _props4.query,
			    showQueryDate = _props4.showQueryDate,
			    isActivity = _props4.isActivity;

			var isSummarizeQuery = (0, _get3.default)(query, 'summarize');

			var sectionTitle = isActivity ? translate('Activity for {{period/}}', {
				components: {
					period: _react2.default.createElement(
						'span',
						{ className: 'period' },
						_react2.default.createElement(
							'span',
							{ className: 'date' },
							isSummarizeQuery ? this.dateForSummarize() : this.dateForDisplay()
						)
					)
				},
				comment: 'Example: "Activity for December 2017"'
			}) : translate('Stats for {{period/}}', {
				components: {
					period: _react2.default.createElement(
						'span',
						{ className: 'period' },
						_react2.default.createElement(
							'span',
							{ className: 'date' },
							isSummarizeQuery ? this.dateForSummarize() : this.dateForDisplay()
						)
					)
				},
				context: 'Stats: Main stats page heading',
				comment: 'Example: "Stats for December 7", "Stats for December 8 - December 14", "Stats for December", "Stats for 2014"'
			});

			return _react2.default.createElement(
				'div',
				null,
				summary ? _react2.default.createElement(
					'span',
					null,
					sectionTitle
				) : _react2.default.createElement(
					'div',
					{ className: 'stats-section-title' },
					_react2.default.createElement(
						'h3',
						null,
						sectionTitle
					),
					showQueryDate && (0, _utils.isAutoRefreshAllowedForQuery)(query) && _react2.default.createElement(
						'div',
						{
							className: 'stats-date-picker__refresh-status',
							ref: this.bindStatusIndicator,
							onMouseEnter: this.showTooltip,
							onMouseLeave: this.hideTooltip
						},
						_react2.default.createElement(
							'span',
							{ className: 'stats-date-picker__update-date' },
							this.renderQueryDate(),
							_react2.default.createElement(
								_tooltip2.default,
								{
									isVisible: this.state.isTooltipVisible,
									onClose: this.hideTooltip,
									position: 'bottom',
									context: this.statusIndicator
								},
								translate('Auto-refreshing every 3 minutes')
							)
						)
					)
				)
			);
		}
	}]);
	return StatsDatePicker;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


StatsDatePicker.propTypes = {
	date: _react.PropTypes.oneOfType([_react.PropTypes.object.isRequired, _react.PropTypes.string.isRequired]),
	period: _react.PropTypes.string.isRequired,
	summary: _react.PropTypes.bool,
	query: _react.PropTypes.object,
	statType: _react.PropTypes.string,
	isActivity: _react.PropTypes.bool,
	showQueryDate: _react.PropTypes.bool
};
StatsDatePicker.defaultProps = {
	showQueryDate: false,
	isActivity: false
};


var connectComponent = (0, _reactRedux.connect)(function (state, _ref2) {
	var query = _ref2.query,
	    statsType = _ref2.statsType,
	    showQueryDate = _ref2.showQueryDate;

	var siteId = (0, _selectors.getSelectedSiteId)(state);
	return {
		queryDate: showQueryDate ? (0, _getSiteStatsQueryDate2.default)(state, siteId, statsType, query) : null,
		requesting: showQueryDate ? (0, _selectors2.isRequestingSiteStatsForQuery)(state, siteId, statsType, query) : false
	};
});

exports.default = (0, _flowRight3.default)(connectComponent, _i18nCalypso.localize)(StatsDatePicker);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-download-csv/index.jsx":
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

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _browserFilesaver = __webpack_require__("./node_modules/browser-filesaver/FileSaver.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _toTitleCase = __webpack_require__("./node_modules/to-title-case/index.js");

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _button = __webpack_require__("./client/components/button/index.jsx");

var _button2 = _interopRequireDefault(_button);

var _selectors = __webpack_require__("./client/state/stats/lists/selectors.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _querySiteStats = __webpack_require__("./client/components/data/query-site-stats/index.jsx");

var _querySiteStats2 = _interopRequireDefault(_querySiteStats);

var _selectors2 = __webpack_require__("./client/state/ui/selectors.js");

var _selectors3 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var StatsDownloadCsv = function (_Component) {
	(0, _inherits3.default)(StatsDownloadCsv, _Component);

	function StatsDownloadCsv() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, StatsDownloadCsv);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StatsDownloadCsv.__proto__ || (0, _getPrototypeOf2.default)(StatsDownloadCsv)).call.apply(_ref, [this].concat(args))), _this), _this.downloadCsv = function (event) {
			event.preventDefault();
			var _this$props = _this.props,
			    siteSlug = _this$props.siteSlug,
			    path = _this$props.path,
			    period = _this$props.period,
			    data = _this$props.data;


			var fileName = [siteSlug, path, period.period, period.startOf.format('L'), period.endOf.format('L')].join('_') + '.csv';

			_this.props.recordGoogleEvent('Stats', 'CSV Download ' + (0, _toTitleCase2.default)(path));

			var csvData = data.map(function (row) {
				return row.join(',');
			}).join('\n');

			var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

			(0, _browserFilesaver.saveAs)(blob, fileName);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(StatsDownloadCsv, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    data = _props.data,
			    siteId = _props.siteId,
			    statType = _props.statType,
			    query = _props.query,
			    translate = _props.translate,
			    isLoading = _props.isLoading,
			    borderless = _props.borderless;

			try {
				var isFileSaverSupported = !!new Blob(); // eslint-disable-line no-unused-vars
			} catch (e) {
				return null;
			}
			var disabled = isLoading || !data.length;

			return _react2.default.createElement(
				_button2.default,
				{ compact: true, onClick: this.downloadCsv, disabled: disabled, borderless: borderless },
				siteId && statType && _react2.default.createElement(_querySiteStats2.default, { statType: statType, siteId: siteId, query: query }),
				_react2.default.createElement(_gridicons2.default, { icon: 'cloud-download' }),
				' ',
				translate('Download data as CSV', {
					context: 'Action shown in stats to download data as csv.'
				})
			);
		}
	}]);
	return StatsDownloadCsv;
}(_react.Component);

/**
 * Internal dependencies
 */


StatsDownloadCsv.propTypes = {
	siteSlug: _react.PropTypes.string,
	path: _react.PropTypes.string.isRequired,
	period: _react.PropTypes.object.isRequired,
	dataList: _react.PropTypes.object,
	data: _react.PropTypes.array,
	query: _react.PropTypes.object,
	statType: _react.PropTypes.string,
	siteId: _react.PropTypes.number,
	borderless: _react.PropTypes.bool
};


var connectComponent = (0, _reactRedux.connect)(function (state, ownProps) {
	var dataList = ownProps.dataList,
	    statType = ownProps.statType,
	    query = ownProps.query;

	var siteId = (0, _selectors2.getSelectedSiteId)(state);
	var siteSlug = (0, _selectors3.getSiteSlug)(state, siteId);
	var data = void 0;
	var isLoading = void 0;

	// TODO: When `stats-list` is no longer, this can be removed
	if (dataList) {
		data = dataList.csvData();
		isLoading = dataList.isLoading();
	} else {
		data = (0, _selectors.getSiteStatsCSVData)(state, siteId, statType, query);
		isLoading = (0, _selectors.isRequestingSiteStatsForQuery)(state, siteId, statType, query);
	}

	return { data: data, siteSlug: siteSlug, siteId: siteId, isLoading: isLoading };
}, { recordGoogleEvent: _actions.recordGoogleEvent }, null, { pure: false });

exports.default = (0, _flowRight3.default)(connectComponent, _i18nCalypso.localize)(StatsDownloadCsv);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-error/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'StatsError',

	mixins: [_mixin2.default],

	propTypes: {
		message: _react.PropTypes.string,
		className: _react.PropTypes.string
	},

	render: function render() {
		var message = this.props.message || this.translate("Some stats didn't load in time. Please try again later.");

		return _react2.default.createElement(
			'div',
			{ className: (0, _classnames2.default)('module-content-text', 'is-error', this.props.className) },
			_react2.default.createElement(
				'p',
				null,
				message
			)
		);
	}
}); /**
     * External dependencies
     */

module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-first-view/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

var _firstView = __webpack_require__("./client/components/first-view/index.jsx");

var _firstView2 = _interopRequireDefault(_firstView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'stats-first-view',

	mixins: [_mixin2.default],

	render: function render() {
		return _react2.default.createElement(
			_firstView2.default,
			null,
			_react2.default.createElement(
				'div',
				null,
				this.renderIcon(),
				_react2.default.createElement(
					'h1',
					null,
					this.translate('See How Your Site Is Performing')
				),
				_react2.default.createElement(
					'p',
					null,
					this.translate('The Stats page tells you everything you need to know about your site\'s traffic and visitors — which of your posts are taking off, where your audience is coming from, and who\'s now following you.')
				)
			)
		);
	},
	renderIcon: function renderIcon() {
		// embedded; original file: /public/images/stats/illustration-stats.svg
		/* eslint-disable max-len, wpcalypso/jsx-classname-namespace */
		return _react2.default.createElement(
			'div',
			{ className: 'first-view__icon' },
			_react2.default.createElement(
				'svg',
				{ x: '0px', y: '0px', viewBox: '0 0 792 612', enableBackground: 'new 0 0 792 612' },
				_react2.default.createElement(
					'g',
					null,
					_react2.default.createElement('circle', { fill: '#D2DCE4', cx: '395.8', cy: '305.5', r: '287.1' }),
					_react2.default.createElement('rect', { x: '219.8', y: '267.8', fill: '#8FACBF', width: '101', height: '219.4' }),
					_react2.default.createElement('rect', { x: '344.2', y: '153', fill: '#8FACBF', width: '101', height: '334.2' }),
					_react2.default.createElement('rect', { x: '394.7', y: '152.6', opacity: '8.000000e-02', fill: '#485566', width: '50.5', height: '334.6' }),
					_react2.default.createElement('rect', { x: '468.6', y: '210.6', fill: '#8FACBF', width: '101', height: '276.6' }),
					_react2.default.createElement('rect', { x: '271.1', y: '267.8', opacity: '8.000000e-02', fill: '#485566', width: '49.7', height: '219.4' }),
					_react2.default.createElement('rect', { x: '519.5', y: '210.2', opacity: '8.000000e-02', fill: '#485566', width: '50', height: '277' }),
					_react2.default.createElement('path', { opacity: '0.45', fill: '#647A88', d: 'M406.2,402.6' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { opacity: '0.4', fill: '#647A88', d: 'M398.5,377.5l-27.5,19.6l-17.1-14.7c-0.8,1.1-1.6,2.3-2.3,3.5l-7.4-4.7v20.2l3.5,2.3 c1.4,15.9,14.6,28.3,30.8,28.3c17.1,0,31-13.9,31-31c0-5.1-1.2-9.8-3.4-14l39-59.2v-31l-49.4,74.8L398.5,377.5z' }),
						_react2.default.createElement('path', { opacity: '0.4', fill: '#647A88', d: 'M548.2,317l-1.2-11.5c-1.4,1.5-2.6,3-3.7,4.7l-40.7-31.1c1.2-1.8,2.2-3.7,3.1-5.7 l-23.7-16.5h-13.5v34.1c2.8,0.8,5.7,1.3,8.7,1.3c4.1,0,8-0.8,11.6-2.3l49.7,38c0.8,16.3,14.1,29.3,30.6,29.5v-37L548.2,317z' }),
						_react2.default.createElement('path', { opacity: '0.4', fill: '#647A88', d: 'M292.5,335.7l-56,2l-3.4-1.8c0.9,3,2.2,5.7,3.8,8.2l-17.1,17.1v24.1l30.1-30 c3.9,1.8,8.2,2.8,12.8,2.8c4.5,0,8.8-1,12.7-2.8l45.3,28.9v-20.2l-31.9-20.3C290.4,341.2,291.6,338.5,292.5,335.7z' })
					),
					_react2.default.createElement('path', { opacity: '0.17', fill: '#FFFFFF', d: 'M569.2,335.7L474.8,264l-97.7,140.7l-121.2-81L139.4,434.6c47.3,93.7,144.3,158,256.4,158 c158.6,0,287.1-128.5,287.1-287.1c0-41.2-8.8-80.4-24.4-115.8L569.2,335.7z' }),
					_react2.default.createElement('path', { fill: '#647A88', d: 'M652.4,176.7l-85.2,137.6l-96.3-73.6l-94.9,143.8L257.5,309L136.8,429.3c2.6,5.4,5.4,10.7,8.3,15.8 l114.8-114.4l121.2,77.2l94-142.6l96.7,73.9l89.1-144C658.3,189,655.5,182.8,652.4,176.7z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { fill: '#FFFFFF', cx: '378.5', cy: '395.3', r: '25.2' })
					),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { fill: '#FFFFFF', cx: '262.7', cy: '323.7', r: '25.2' })
					),
					_react2.default.createElement('path', { fill: '#F0F3F4', d: 'M262.7,298.6v50.3c13.9,0,25.2-11.3,25.2-25.2C287.9,309.8,276.6,298.6,262.7,298.6z' }),
					_react2.default.createElement('path', { fill: '#F0F3F4', d: 'M378.5,370.1v50.3c13.9,0,25.2-11.3,25.2-25.2C403.7,381.4,392.4,370.1,378.5,370.1z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { fill: '#FFFFFF', cx: '477.3', cy: '258.5', r: '25.2' })
					),
					_react2.default.createElement('path', { fill: '#F0F3F4', d: 'M477.3,233.4v50.3c13.9,0,25.2-11.3,25.2-25.2C502.5,244.6,491.2,233.4,477.3,233.4z' }),
					_react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { fill: '#FFFFFF', cx: '569.5', cy: '323.7', r: '25.2' })
					),
					_react2.default.createElement('path', { fill: '#F0F3F4', d: 'M569.2,298.6v50.3c13.9,0,25.2-11.3,25.2-25.2C594.4,309.8,583.1,298.6,569.2,298.6z' })
				)
			)
		);
		/* eslint-enable max-len, wpcalypso/jsx-classname-namespace */
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

/***/ "./client/my-sites/stats/stats-list/action-follow.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:stats:action-follow');

/**
 * Internal dependencies
 */
var observe = __webpack_require__("./client/lib/mixins/data-observe/index.js"),
    analytics = __webpack_require__("./client/lib/analytics/index.js"),
    Gridicon = __webpack_require__("./node_modules/gridicons/build/index.js");

module.exports = React.createClass({
	displayName: 'StatsActionFollow',

	mixins: [observe('followSite')],

	clickHandler: function clickHandler(event) {
		var site = this.props.followSite,
		    gaEvent;

		event.stopPropagation();
		event.preventDefault();
		debug('handling follower click', this.props.data);

		if (!site.is_following) {
			gaEvent = 'Follow';
			site.follow();
		} else {
			gaEvent = 'Unfollow';
			site.unfollow();
		}

		analytics.ga.recordEvent('Stats', 'Clicked ' + gaEvent + ' in ' + this.props.moduleName + ' List');
	},

	render: function render() {
		var site = this.props.followSite,
		    following = site.is_following,
		    wrapperClass = classNames('module-content-list-item-action-wrapper', {
			follow: !following,
			following: following
		}),
		    label = following ? this.translate('Following', {
			context: 'Stats: Follow action / Following status'
		}) : this.translate('Follow', {
			context: 'Stats: Follow action / Following status'
		}),
		    gridiconType = following ? 'reader-following' : 'reader-follow',
		    wrapperClassSet;

		wrapperClassSet = classNames(wrapperClass);

		return React.createElement(
			'li',
			{ className: 'module-content-list-item-action' },
			React.createElement(
				'a',
				{ href: '#', onClick: this.clickHandler, className: wrapperClassSet, title: site.blog_domain, 'aria-label': this.translate('Follow or unfollow user', { textOnly: true, context: 'Stats ARIA label: Follow/Unfollow action' }) },
				React.createElement(
					'span',
					{ className: 'module-content-list-item-action-label' },
					React.createElement(Gridicon, { icon: gridiconType, size: 18 }),
					label
				),
				React.createElement(
					'span',
					{ className: 'module-content-list-item-action-label unfollow' },
					React.createElement(Gridicon, { icon: 'cross', size: 18 }),
					this.translate('Unfollow', { context: 'Stats ARIA label: Unfollow action' })
				)
			)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/stats/stats-list/action-link.jsx":
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

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var StatsActionLink = function (_PureComponent) {
	(0, _inherits3.default)(StatsActionLink, _PureComponent);

	function StatsActionLink(props) {
		(0, _classCallCheck3.default)(this, StatsActionLink);

		var _this = (0, _possibleConstructorReturn3.default)(this, (StatsActionLink.__proto__ || (0, _getPrototypeOf2.default)(StatsActionLink)).call(this, props));

		_this.onClick = _this.onClick.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(StatsActionLink, [{
		key: 'onClick',
		value: function onClick(event) {
			event.stopPropagation();
			_analytics2.default.ga.recordEvent('Stats', 'Clicked on External Link in ' + this.props.moduleName + ' List Action Menu');
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    href = _props.href,
			    translate = _props.translate;

			return _react2.default.createElement(
				'li',
				{ className: 'module-content-list-item-action' },
				_react2.default.createElement(
					'a',
					{ href: href,
						onClick: this.onClick,
						target: '_blank',
						rel: 'noopener noreferrer',
						className: 'module-content-list-item-action-wrapper',
						title: translate('View content in a new window', {
							textOnly: true, context: 'Stats action tooltip: View content in a new window'
						}),
						'aria-label': translate('View content in a new window', {
							textOnly: true, context: 'Stats ARIA label: View content in new window action'
						}) },
					_react2.default.createElement(_gridicons2.default, { icon: 'external', size: 18 }),
					_react2.default.createElement(
						'span',
						{ className: 'module-content-list-item-action-label module-content-list-item-action-label-view' },
						translate('View', { context: 'Stats: List item action to view content' })
					)
				)
			);
		}
	}]);
	return StatsActionLink;
}(_react.PureComponent);

/**
 * Internal dependencies
 */


StatsActionLink.propTypes = {
	href: _react.PropTypes.string,
	moduleName: _react.PropTypes.string,
	translate: _react.PropTypes.func
};
exports.default = (0, _i18nCalypso.localize)(StatsActionLink);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-list/action-page.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    page = __webpack_require__("./node_modules/page/index.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:stats:action-page');

/**
 * Internal dependencies
 */
var analytics = __webpack_require__("./client/lib/analytics/index.js"),
    Gridicon = __webpack_require__("./node_modules/gridicons/build/index.js");

module.exports = React.createClass({
	displayName: 'StatsActionPage',

	clickHandler: function clickHandler(event) {
		event.stopPropagation();
		event.preventDefault();
		debug('handling page click', this.props);
		analytics.ga.recordEvent('Stats', 'Clicked on Summary Link in ' + this.props.moduleName + ' List Action Menu');

		page(this.props.page);
	},

	render: function render() {
		return React.createElement(
			'li',
			{ className: 'module-content-list-item-action' },
			React.createElement(
				'a',
				{ href: '#', onClick: this.clickHandler, className: 'module-content-list-item-action-wrapper', title: this.translate('View in a new window', { textOnly: true, context: 'Stats action tooltip: View content in a new window' }), 'aria-label': this.translate('View in a new window', { textOnly: true, context: 'Stats ARIA label: View content in a new window' }) },
				React.createElement(Gridicon, { icon: 'stats', size: 18 }),
				React.createElement(
					'span',
					{ className: 'module-content-list-item-action-label' },
					this.translate('View', { context: 'Stats: List item action to view content' })
				)
			)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/stats/stats-list/action-spam.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:stats:action-spam');

/**
 * Internal dependencies
 */
var wpcom = __webpack_require__("./client/lib/wp/browser.js"),
    analytics = __webpack_require__("./client/lib/analytics/index.js"),
    Gridicon = __webpack_require__("./node_modules/gridicons/build/index.js");

module.exports = React.createClass({
	displayName: 'StatsActionSpam',

	getInitialState: function getInitialState() {
		return {
			spammed: false
		};
	},

	clickHandler: function clickHandler(event) {
		var spamType = this.state.spammed ? 'statsReferrersSpamDelete' : 'statsReferrersSpamNew',
		    gaEvent = this.state.spammed ? 'Undid Referrer Spam' : 'Marked Referrer as Spam',
		    wpcomSite;
		event.stopPropagation();
		event.preventDefault();
		debug(this.state);
		this.setState({
			spammed: !this.state.spammed
		});

		if (this.props.afterChange) {
			this.props.afterChange(!this.state.spammed);
		}

		wpcomSite = wpcom.site(this.props.data.siteID);
		wpcomSite[spamType].call(wpcomSite, this.props.data.domain, function () {});
		analytics.ga.recordEvent('Stats', gaEvent + ' in ' + this.props.moduleName + ' List');
	},

	render: function render() {
		var label = this.state.spammed ? this.translate('Not Spam') : this.translate('Spam', {
			context: 'Stats: Action to mark an item as spam',
			comment: 'Default label (changes into "Not Spam").'
		}),
		    title = this.state.spammed ? this.translate('Not Spam', {
			textOnly: true,
			context: 'Stats: Action to undo marking an item as spam',
			comment: 'Secondary label (default label is "Spam"). Recommended to use a very short label.'
		}) : this.translate('Spam', {
			textOnly: true,
			context: 'Stats: Action to mark an item as spam',
			comment: 'Default label (changes into "Not Spam").'
		}),
		    wrapperClass = classNames('module-content-list-item-action-wrapper', {
			spam: !this.state.spammed,
			unspam: this.state.spammed
		});

		return React.createElement(
			'li',
			{ className: 'module-content-list-item-action' },
			React.createElement(
				'a',
				{ href: '#', onClick: this.clickHandler, className: wrapperClass, title: title, 'aria-label': title },
				React.createElement(Gridicon, { icon: 'spam', size: 18 }),
				React.createElement(
					'span',
					{ className: 'module-content-list-item-action-label' },
					label
				)
			)
		);
	}
});

/***/ }),

/***/ "./client/my-sites/stats/stats-list/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:stats:list');

/**
 * Internal dependencies
 */
var StatsListItem = __webpack_require__("./client/my-sites/stats/stats-list/stats-list-item.jsx");

module.exports = React.createClass({
	displayName: 'StatsList',

	getInitialState: function getInitialState() {
		return {
			activeGroups: []
		};
	},

	isGroupActive: function isGroupActive(groupName) {
		return this.state.activeGroups.indexOf(groupName) >= 0;
	},

	clickHandler: function clickHandler(event, data) {
		debug('clickHandler');
		if ('function' === typeof this.props.clickHandler) {
			this.props.clickHandler(event, data);
		}
	},

	buildLists: function buildLists(groups, parentKey) {
		var results,
		    listClass = classNames('module-content-list', {
			'module-content-list-sublist': parentKey,
			'is-expanded': this.isGroupActive(parentKey)
		});

		if (groups) {
			results = groups.map(function (group, groupIndex) {
				var childResults,
				    active,
				    groupTree = parentKey ? [parentKey] : [],
				    groupKey,
				    clickHandler = this.props.clickHandler ? this.props.clickHandler : false;

				// Build a unique key for this group
				groupTree.push(groupIndex);
				groupKey = groupTree.join(':');

				// Determine if child data exists and setup css classes accoridingly
				active = this.isGroupActive(groupKey);

				// If this group has results, build up the nested child ul/li elements
				if (group.children) {
					childResults = this.buildLists(group.children, groupKey);
				}
				return React.createElement(StatsListItem, { moduleName: this.props.moduleName, data: group, active: active, children: childResults, key: groupKey, itemClickHandler: clickHandler, followList: this.props.followList });
			}, this);
		}

		return React.createElement(
			'ul',
			{ className: listClass },
			results
		);
	},

	render: function render() {
		var list = this.buildLists(this.props.data);
		return list;
	}
});

/***/ }),

/***/ "./client/my-sites/stats/stats-list/legend.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _mixin = __webpack_require__("./node_modules/react-pure-render/mixin.js");

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */

/**
 * External dependencies
 */
exports.default = _react2.default.createClass({
	displayName: 'StatsListLegend',

	mixins: [_mixin2.default],

	propTypes: {
		value: _react.PropTypes.string,
		label: _react.PropTypes.string
	},

	render: function render() {
		var _props = this.props,
		    value = _props.value,
		    label = _props.label;


		var valueSpan = void 0;

		if (value) {
			valueSpan = _react2.default.createElement(
				'span',
				{ className: 'module-content-list-item-right' },
				_react2.default.createElement(
					'span',
					{ className: 'module-content-list-item-value' },
					value
				)
			);
		}

		return _react2.default.createElement(
			'ul',
			{ className: 'module-content-list module-content-list-legend' },
			_react2.default.createElement(
				'li',
				{ className: 'module-content-list-item' },
				_react2.default.createElement(
					'span',
					{ className: 'module-content-list-item-wrapper' },
					valueSpan,
					_react2.default.createElement(
						'span',
						{ className: 'module-content-list-item-label' },
						label
					)
				)
			)
		);
	}
});
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-list/stats-list-item.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var React = __webpack_require__("./node_modules/react/react.js"),
    classNames = __webpack_require__("./node_modules/classnames/index.js"),
    debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:stats:list-item'),
    page = __webpack_require__("./node_modules/page/index.js");

/**
 * Internal dependencies
 */
var Follow = __webpack_require__("./client/my-sites/stats/stats-list/action-follow.jsx"),
    Page = __webpack_require__("./client/my-sites/stats/stats-list/action-page.jsx"),
    OpenLink = __webpack_require__("./client/my-sites/stats/stats-list/action-link.jsx"),
    Spam = __webpack_require__("./client/my-sites/stats/stats-list/action-spam.jsx"),
    Emojify = __webpack_require__("./client/components/emojify/index.jsx"),
    titlecase = __webpack_require__("./node_modules/to-title-case/index.js"),
    analytics = __webpack_require__("./client/lib/analytics/index.js"),
    Gridicon = __webpack_require__("./node_modules/gridicons/build/index.js");

module.exports = React.createClass({
	displayName: 'StatsListItem',

	getInitialState: function getInitialState() {
		return {
			active: this.props.active,
			actionMenuOpen: false,
			disabled: false
		};
	},

	addMenuListener: function addMenuListener() {
		document.addEventListener('click', this.closeMenu);
	},

	removeMenuListener: function removeMenuListener() {
		document.removeEventListener('click', this.closeMenu);
	},

	componentWillUnmount: function componentWillUnmount() {
		if (this.props.data.actionMenu) {
			this.removeMenuListener();
		}
	},

	closeMenu: function closeMenu() {
		this.removeMenuListener();
		this.setState({
			actionMenuOpen: false
		});
	},

	actionMenuClick: function actionMenuClick(event) {
		event.stopPropagation();
		event.preventDefault();

		if (!this.state.actionMenuOpen) {
			this.addMenuListener();
			this.setState({
				actionMenuOpen: true
			});
		} else {
			this.closeMenu();
		}
	},

	preventDefaultOnClick: function preventDefaultOnClick(event) {
		event.preventDefault();
	},

	onClick: function onClick(event) {
		var gaEvent,
		    moduleName = titlecase(this.props.moduleName);

		debug('props', this.props);
		if (!this.state.disabled) {
			if (this.props.children) {
				var moduleState = this.state.active ? 'Collapsed ' : 'Expanded ';
				gaEvent = moduleState + moduleName;

				this.setState({
					active: !this.state.active
				});
			}

			if ('function' === typeof this.props.itemClickHandler) {
				event.stopPropagation();
				this.props.itemClickHandler(event, this.props.data);
			} else if (this.props.data.page && !this.props.children) {
				gaEvent = ['Clicked', moduleName, 'Summary Link'].join(' ');
				page(this.props.data.page);
			} else if (this.props.data.link && !this.props.children) {
				gaEvent = ['Clicked', moduleName, 'External Link'].join(' ');

				window.open(this.props.data.link);
			} else if (!this.props.children) {
				gaEvent = 'Clicked on ' + moduleName;
			}

			if (gaEvent) {
				analytics.ga.recordEvent('Stats', gaEvent + ' in List');
			}
		}
	},

	spamHandler: function spamHandler(isSpammed) {
		this.setState({
			disabled: isSpammed
		});
	},

	buildActions: function buildActions() {
		var data = this.props.data,
		    moduleName = titlecase(this.props.moduleName),
		    actionMenu = data.actionMenu,
		    actionClassSet = classNames('module-content-list-item-actions', { collapsed: actionMenu && !this.state.disabled }),
		    actionList;

		// If we have more than a default action build out actions ul
		if (data.actions) {
			var actionItems = [];

			data.actions.forEach(function (action) {
				var actionItem;

				switch (action.type) {
					case 'follow':
						if (action.data && this.props.followList) {
							var followSite = this.props.followList.add(action.data);
							actionItem = React.createElement(Follow, { followSite: followSite, key: action.type, moduleName: moduleName });
						}
						break;
					case 'page':
						actionItem = React.createElement(Page, { page: action.page, key: action.type, moduleName: moduleName });
						break;
					case 'spam':
						actionItem = React.createElement(Spam, { data: action.data, key: action.type, afterChange: this.spamHandler, moduleName: moduleName });
						break;
					case 'link':
						actionItem = React.createElement(OpenLink, { href: action.data, key: action.type, moduleName: moduleName });
						break;
				}

				if (actionItem) {
					actionItems.push(actionItem);
				}
			}, this);

			if (actionItems.length > 0) {
				actionList = React.createElement(
					'ul',
					{ className: actionClassSet },
					actionItems
				);
			}
		}

		return actionList;
	},

	buildLabel: function buildLabel() {
		var data = this.props.data,
		    labelData = data.label,
		    wrapperClassSet,
		    label;

		if (false === labelData instanceof Array) {
			labelData = [data];
		}

		wrapperClassSet = classNames({ 'module-content-list-item-label-section': labelData.length > 1 });

		label = labelData.map(function (labelItem, i) {
			var iconClassSetOptions = { avatar: true },
			    icon,
			    gridiconSpan,
			    itemLabel;

			if (labelItem.labelIcon) {
				gridiconSpan = React.createElement(Gridicon, { icon: labelItem.labelIcon });
			}

			if (labelItem.icon) {
				if (labelItem.iconClassName) {
					iconClassSetOptions[labelItem.iconClassName] = true;
				}

				icon = React.createElement(
					'span',
					{ className: 'icon' },
					React.createElement('img', { alt: '', src: labelItem.icon, className: classNames(iconClassSetOptions) })
				);
			}

			if (labelItem.backgroundImage) {
				var style = { backgroundImage: 'url( ' + labelItem.backgroundImage + ' )' };
				icon = React.createElement('span', { className: 'stats-list__flag-icon', style: style });
			}

			if (data.link) {
				itemLabel = React.createElement(
					'a',
					{ onClick: this.preventDefaultOnClick, href: data.link },
					labelItem.label
				);
			} else {
				itemLabel = React.createElement(
					Emojify,
					null,
					labelItem.label
				);
			}

			return React.createElement(
				'span',
				{ className: wrapperClassSet, key: i },
				gridiconSpan,
				icon,
				itemLabel,
				' '
			);
		}, this);

		return label;
	},

	buildValue: function buildValue() {
		var data = this.props.data,
		    valueData = data.value,
		    value;

		if ('object' !== (typeof valueData === 'undefined' ? 'undefined' : (0, _typeof3.default)(valueData)) || !valueData.type) {
			valueData = {
				type: 'number',
				value: valueData
			};
		}

		switch (valueData.type) {
			case 'relative-date':
				value = this.moment(valueData.value).fromNow(true);
				break;
			default:
			case 'number':
				value = this.numberFormat(valueData.value);
				break;
		}

		return value;
	},

	render: function render() {
		var data = this.props.data,
		    rightClassOptions = {
			'module-content-list-item-right': true
		},
		    toggleOptions = {
			'module-content-list-item-actions-toggle': true,
			show: data.actionMenu && !this.state.disabled
		},
		    actions = this.buildActions(),
		    toggleGridicon = React.createElement(Gridicon, { icon: 'chevron-down' }),
		    toggleIcon = this.props.children ? toggleGridicon : null,
		    mobileActionToggle,
		    groupClassOptions,
		    groupClassName;

		groupClassOptions = {
			'module-content-list-item': true,
			disabled: this.state.disabled,
			'module-content-list-item-link': this.props.children || data.link || data.page,
			'module-content-list-item-toggle': this.props.children,
			'is-expanded': this.state.active
		};

		if (data.className) {
			groupClassOptions[data.className] = true;
		}

		if (actions) {
			mobileActionToggle = React.createElement(
				'a',
				{
					href: '#',
					onClick: this.actionMenuClick,
					className: classNames(toggleOptions),
					title: this.translate('Show Actions', { context: 'Label for hidden menu in a list on the Stats page.' })
				},
				React.createElement(Gridicon, { icon: 'ellipsis' })
			);
			rightClassOptions['is-expanded'] = this.state.actionMenuOpen;
		}

		groupClassName = classNames(groupClassOptions);

		return React.createElement(
			'li',
			{ key: this.key, 'data-group': this.key, className: groupClassName },
			React.createElement(
				'span',
				{ className: 'module-content-list-item-wrapper', onClick: this.onClick, tabIndex: '0' },
				React.createElement(
					'span',
					{ className: classNames(rightClassOptions) },
					mobileActionToggle,
					actions,
					React.createElement(
						'span',
						{ className: 'module-content-list-item-value' },
						data.value ? this.buildValue() : null
					)
				),
				React.createElement(
					'span',
					{ className: 'module-content-list-item-label' },
					toggleIcon,
					this.buildLabel()
				)
			),
			this.props.children
		);
	}
});

/***/ }),

/***/ "./client/my-sites/stats/stats-module/all-time-nav.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.StatsModuleSummaryLinks = undefined;

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _statsDatePicker = __webpack_require__("./client/my-sites/stats/stats-date-picker/index.jsx");

var _statsDatePicker2 = _interopRequireDefault(_statsDatePicker);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 **/
var StatsModuleSummaryLinks = exports.StatsModuleSummaryLinks = function StatsModuleSummaryLinks(props) {
	var translate = props.translate,
	    path = props.path,
	    siteSlug = props.siteSlug,
	    query = props.query,
	    period = props.period,
	    children = props.children;


	var getSummaryPeriodLabel = function getSummaryPeriodLabel() {
		switch (period.period) {
			case 'day':
				return translate('Day Summary');
			case 'week':
				return translate('Week Summary');
			case 'month':
				return translate('Month Summary');
			case 'year':
				return translate('Year Summary');
		}
	};

	var recordStats = function recordStats(item) {
		props.recordGoogleEvent('Stats', 'Clicked Summary Link: ' + path + ' ' + item.stat);
	};

	var summaryPath = '/stats/day/' + path + '/' + siteSlug + '?startDate=' + (0, _i18nCalypso.moment)().format('YYYY-MM-DD') + '&summarize=1&num=';
	var summaryPeriodPath = '/stats/' + period.period + '/' + path + '/' + siteSlug + '?startDate=' + period.endOf.format('YYYY-MM-DD');
	var options = [{ value: '0', label: getSummaryPeriodLabel(), path: summaryPeriodPath, stat: 'Period Summary' }, { value: '7', label: translate('7 days'), path: summaryPath + '7', stat: '7 Days' }, { value: '30', label: translate('30 days'), path: summaryPath + '30', stat: '30 Days' }, { value: '90', label: translate('Quarter'), path: summaryPath + '90', stat: 'Quarter' }, { value: '365', label: translate('Year'), path: summaryPath + '365', stat: 'Year' }, { value: '-1', label: translate('All Time'), path: summaryPath + '-1', stat: 'All Time' }];

	var numberDays = (0, _get3.default)(query, 'num', '0');
	var selected = (0, _find3.default)(options, { value: numberDays });

	return _react2.default.createElement(
		'div',
		{ className: 'stats-module__all-time-nav' },
		_react2.default.createElement(
			_sectionNav2.default,
			{ selectedText: selected.label },
			_react2.default.createElement(
				_tabs2.default,
				{ label: translate('Summary') },
				options.map(function (item) {
					var onClick = function onClick() {
						recordStats(item);
					};
					return _react2.default.createElement(
						_item2.default,
						{
							path: item.path,
							selected: item.value === selected.value,
							key: item.value,
							onClick: onClick
						},
						item.label
					);
				})
			),
			children
		),
		_react2.default.createElement(_statsDatePicker2.default, {
			period: period.period,
			date: period.startOf,
			path: path,
			query: query,
			summary: false })
	);
};

/**
 * Internal dependencies
 */


var connectComponent = (0, _reactRedux.connect)(function (state) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var siteSlug = (0, _selectors2.getSiteSlug)(state, siteId);

	return { siteSlug: siteSlug };
}, { recordGoogleEvent: _actions.recordGoogleEvent });

exports.default = (0, _flowRight3.default)(connectComponent, _i18nCalypso.localize)(StatsModuleSummaryLinks);

/***/ }),

/***/ "./client/my-sites/stats/stats-module/expand.jsx":
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var StatsModuleExpand = function (_PureComponent) {
	(0, _inherits3.default)(StatsModuleExpand, _PureComponent);

	function StatsModuleExpand() {
		(0, _classCallCheck3.default)(this, StatsModuleExpand);
		return (0, _possibleConstructorReturn3.default)(this, (StatsModuleExpand.__proto__ || (0, _getPrototypeOf2.default)(StatsModuleExpand)).apply(this, arguments));
	}

	(0, _createClass3.default)(StatsModuleExpand, [{
		key: 'render',
		value: function render() {
			if (!this.props.href) {
				return null;
			}

			return _react2.default.createElement(
				'div',
				{ className: 'stats-module__expand' },
				_react2.default.createElement(
					'a',
					{ href: this.props.href },
					this.props.translate('View All', { context: 'Stats: Button label to expand a panel' }),
					_react2.default.createElement('span', { className: 'stats-module__expand-right' })
				)
			);
		}
	}]);
	return StatsModuleExpand;
}(_react.PureComponent);

StatsModuleExpand.propTypes = {
	href: _react2.default.PropTypes.string
};
exports.default = (0, _i18nCalypso.localize)(StatsModuleExpand);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-module/index.jsx":
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

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _statsError = __webpack_require__("./client/my-sites/stats/stats-error/index.jsx");

var _statsError2 = _interopRequireDefault(_statsError);

var _expand = __webpack_require__("./client/my-sites/stats/stats-module/expand.jsx");

var _expand2 = _interopRequireDefault(_expand);

var _statsList = __webpack_require__("./client/my-sites/stats/stats-list/index.jsx");

var _statsList2 = _interopRequireDefault(_statsList);

var _legend = __webpack_require__("./client/my-sites/stats/stats-list/legend.jsx");

var _legend2 = _interopRequireDefault(_legend);

var _statsDatePicker = __webpack_require__("./client/my-sites/stats/stats-date-picker/index.jsx");

var _statsDatePicker2 = _interopRequireDefault(_statsDatePicker);

var _statsDownloadCsv = __webpack_require__("./client/my-sites/stats/stats-download-csv/index.jsx");

var _statsDownloadCsv2 = _interopRequireDefault(_statsDownloadCsv);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

var _placeholder = __webpack_require__("./client/my-sites/stats/stats-module/placeholder.jsx");

var _placeholder2 = _interopRequireDefault(_placeholder);

var _sectionHeader = __webpack_require__("./client/components/section-header/index.jsx");

var _sectionHeader2 = _interopRequireDefault(_sectionHeader);

var _querySiteStats = __webpack_require__("./client/components/data/query-site-stats/index.jsx");

var _querySiteStats2 = _interopRequireDefault(_querySiteStats);

var _upgradeNudge = __webpack_require__("./client/my-sites/upgrade-nudge/index.jsx");

var _upgradeNudge2 = _interopRequireDefault(_upgradeNudge);

var _allTimeNav = __webpack_require__("./client/my-sites/stats/stats-module/all-time-nav.jsx");

var _allTimeNav2 = _interopRequireDefault(_allTimeNav);

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/sites/selectors.js");

var _selectors3 = __webpack_require__("./client/state/stats/lists/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatsModule = function (_Component) {
	(0, _inherits3.default)(StatsModule, _Component);

	function StatsModule() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, StatsModule);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StatsModule.__proto__ || (0, _getPrototypeOf2.default)(StatsModule)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loaded: false
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(StatsModule, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!nextProps.requesting && this.props.requesting) {
				this.setState({ loaded: true });
			}

			if (nextProps.query !== this.props.query && this.state.loaded) {
				this.setState({ loaded: false });
			}
		}
	}, {
		key: 'getModuleLabel',
		value: function getModuleLabel() {
			if (!this.props.summary) {
				return this.props.moduleStrings.title;
			}
			var _props$period = this.props.period,
			    period = _props$period.period,
			    startOf = _props$period.startOf;
			var _props = this.props,
			    path = _props.path,
			    query = _props.query;


			return _react2.default.createElement(_statsDatePicker2.default, {
				period: period,
				date: startOf,
				path: path,
				query: query,
				summary: true });
		}
	}, {
		key: 'getHref',
		value: function getHref() {
			var _props2 = this.props,
			    summary = _props2.summary,
			    period = _props2.period,
			    path = _props2.path,
			    siteSlug = _props2.siteSlug;

			// Some modules do not have view all abilities

			if (!summary && period && path && siteSlug) {
				return '/stats/' + period.period + '/' + path + '/' + siteSlug + '?startDate=' + period.startOf.format('YYYY-MM-DD');
			}
		}
	}, {
		key: 'isAllTimeList',
		value: function isAllTimeList() {
			var _props3 = this.props,
			    summary = _props3.summary,
			    statType = _props3.statType;

			var summarizedTypes = ['statsCountryViews', 'statsTopPosts', 'statsSearchTerms', 'statsClicks', 'statsReferrers'];
			return summary && (0, _includes3.default)(summarizedTypes, statType);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props4 = this.props,
			    className = _props4.className,
			    summary = _props4.summary,
			    siteId = _props4.siteId,
			    path = _props4.path,
			    data = _props4.data,
			    moduleStrings = _props4.moduleStrings,
			    requesting = _props4.requesting,
			    statType = _props4.statType,
			    query = _props4.query,
			    period = _props4.period,
			    translate = _props4.translate;


			var noData = data && this.state.loaded && !data.length;

			// Only show loading indicators when nothing is in state tree, and request in-flight
			var isLoading = !this.state.loaded && !(data && data.length);

			// TODO: Support error state in redux store
			var hasError = false;

			var cardClasses = (0, _classnames2.default)('stats-module', {
				'is-loading': isLoading,
				'has-no-data': noData,
				'is-showing-error': noData
			}, className);

			var summaryLink = this.getHref();
			var displaySummaryLink = data && data.length >= 10;
			var isAllTime = this.isAllTimeList();
			var headerClass = (0, _classnames2.default)('stats-module__header', { 'is-refreshing': requesting && !isLoading });

			return _react2.default.createElement(
				'div',
				null,
				siteId && statType && _react2.default.createElement(_querySiteStats2.default, { statType: statType, siteId: siteId, query: query }),
				!isAllTime && _react2.default.createElement(
					_sectionHeader2.default,
					{ className: headerClass, label: this.getModuleLabel(), href: !summary ? summaryLink : null },
					summary && _react2.default.createElement(_statsDownloadCsv2.default, { statType: statType, query: query, path: path, period: period })
				),
				_react2.default.createElement(
					_card2.default,
					{ compact: true, className: cardClasses },
					isAllTime && _react2.default.createElement(_allTimeNav2.default, { path: path, query: query, period: period }),
					noData && _react2.default.createElement(_statsError2.default, { message: moduleStrings.empty }),
					hasError && _react2.default.createElement(_statsError2.default, null),
					this.props.children,
					_react2.default.createElement(_legend2.default, { value: moduleStrings.value, label: moduleStrings.item }),
					_react2.default.createElement(_placeholder2.default, { isLoading: isLoading }),
					_react2.default.createElement(_statsList2.default, { moduleName: path, data: data }),
					this.props.showSummaryLink && displaySummaryLink && _react2.default.createElement(_expand2.default, { href: summaryLink }),
					summary && 'countryviews' === path && _react2.default.createElement(_upgradeNudge2.default, {
						title: translate('Add Google Analytics'),
						message: translate('Upgrade to a Business Plan for Google Analytics integration.'),
						event: 'googleAnalytics-stats-countries',
						feature: 'google-analytics'
					})
				),
				isAllTime && _react2.default.createElement(
					'div',
					{ className: 'stats-module__footer-actions' },
					_react2.default.createElement(_statsDownloadCsv2.default, {
						statType: statType,
						query: query,
						path: path,
						borderless: true,
						period: period })
				)
			);
		}
	}]);
	return StatsModule;
}(_react.Component);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


StatsModule.propTypes = {
	summary: _react.PropTypes.bool,
	moduleStrings: _react.PropTypes.object,
	period: _react.PropTypes.object,
	path: _react.PropTypes.string,
	siteSlug: _react.PropTypes.string,
	siteId: _react.PropTypes.number,
	data: _react.PropTypes.array,
	query: _react.PropTypes.object,
	statType: _react.PropTypes.string,
	showSummaryLink: _react.PropTypes.bool,
	translate: _react.PropTypes.func,
	moment: _react.PropTypes.func
};
StatsModule.defaultProps = {
	showSummaryLink: false,
	query: {}
};
exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	var siteId = (0, _selectors.getSelectedSiteId)(state);
	var siteSlug = (0, _selectors2.getSiteSlug)(state, siteId);
	var statType = ownProps.statType,
	    query = ownProps.query;


	return {
		requesting: (0, _selectors3.isRequestingSiteStatsForQuery)(state, siteId, statType, query),
		data: (0, _selectors3.getSiteStatsNormalizedData)(state, siteId, statType, query),
		siteId: siteId,
		siteSlug: siteSlug
	};
})((0, _i18nCalypso.localize)(StatsModule));
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-module/placeholder.jsx":
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

var _spinner = __webpack_require__("./client/components/spinner/index.jsx");

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatsModulePlaceholder = function (_PureComponent) {
	(0, _inherits3.default)(StatsModulePlaceholder, _PureComponent);

	function StatsModulePlaceholder() {
		(0, _classCallCheck3.default)(this, StatsModulePlaceholder);
		return (0, _possibleConstructorReturn3.default)(this, (StatsModulePlaceholder.__proto__ || (0, _getPrototypeOf2.default)(StatsModulePlaceholder)).apply(this, arguments));
	}

	(0, _createClass3.default)(StatsModulePlaceholder, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    isLoading = _props.isLoading;


			if (!isLoading) {
				return null;
			}

			var classes = (0, _classnames2.default)('stats-module__placeholder', 'is-void', className);

			return _react2.default.createElement(
				'div',
				{ className: classes },
				_react2.default.createElement(_spinner2.default, null)
			);
		}
	}]);
	return StatsModulePlaceholder;
}(_react.PureComponent);

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


StatsModulePlaceholder.propTypes = {
	className: _react.PropTypes.string,
	isLoading: _react.PropTypes.bool
};
exports.default = StatsModulePlaceholder;
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-navigation/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _includes2 = __webpack_require__("./node_modules/lodash/includes.js");

var _includes3 = _interopRequireDefault(_includes2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _sectionNav = __webpack_require__("./client/components/section-nav/index.jsx");

var _sectionNav2 = _interopRequireDefault(_sectionNav);

var _tabs = __webpack_require__("./client/components/section-nav/tabs.jsx");

var _tabs2 = _interopRequireDefault(_tabs);

var _item = __webpack_require__("./client/components/section-nav/item.jsx");

var _item2 = _interopRequireDefault(_item);

var _followersCount = __webpack_require__("./client/blocks/followers-count/index.jsx");

var _followersCount2 = _interopRequireDefault(_followersCount);

var _segmentedControl = __webpack_require__("./client/components/segmented-control/index.jsx");

var _segmentedControl2 = _interopRequireDefault(_segmentedControl);

var _queryJetpackPlugins = __webpack_require__("./client/components/data/query-jetpack-plugins/index.jsx");

var _queryJetpackPlugins2 = _interopRequireDefault(_queryJetpackPlugins);

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _isPluginActive = __webpack_require__("./client/state/selectors/is-plugin-active.js");

var _isPluginActive2 = _interopRequireDefault(_isPluginActive);

var _isSiteOnPaidPlan = __webpack_require__("./client/state/selectors/is-site-on-paid-plan.js");

var _isSiteOnPaidPlan2 = _interopRequireDefault(_isSiteOnPaidPlan);

var _config = __webpack_require__("./client/config/index.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/** @format */
/**
 * External Dependencies
 */
var StatsNavigation = function StatsNavigation(props) {
	var translate = props.translate,
	    section = props.section,
	    slug = props.slug,
	    siteId = props.siteId,
	    isJetpack = props.isJetpack,
	    isStore = props.isStore,
	    hasPaidPlan = props.hasPaidPlan;

	var siteFragment = slug ? '/' + slug : '';
	var sectionTitles = {
		insights: translate('Insights'),
		day: translate('Days'),
		week: translate('Weeks'),
		month: translate('Months'),
		year: translate('Years'),
		activity: translate('Activity')
	};

	var statsControl = void 0;

	if (isStore) {
		var validSection = (0, _includes3.default)(['day', 'week', 'month', 'year'], section) ? section : 'day';
		statsControl = _react2.default.createElement(_segmentedControl2.default, {
			primary: true,
			className: 'stats-navigation__control is-store',
			initialSelected: 'site',
			options: [{
				value: 'site',
				label: translate('Site')
			}, {
				value: 'store',
				label: translate('Store'),
				path: '/store/stats/orders/' + validSection + '/' + slug
			}]
		});
	}

	var ActivityTab = _config2.default.isEnabled('jetpack/activity-log') && isJetpack && hasPaidPlan ? _react2.default.createElement(
		_item2.default,
		{ path: '/stats/activity' + siteFragment, selected: section === 'activity' },
		sectionTitles.activity
	) : null;

	return _react2.default.createElement(
		_sectionNav2.default,
		{ selectedText: sectionTitles[section] },
		isJetpack && siteId && _react2.default.createElement(_queryJetpackPlugins2.default, { siteIds: [siteId] }),
		_react2.default.createElement(
			_tabs2.default,
			{ label: translate('Stats') },
			_react2.default.createElement(
				_item2.default,
				{ path: '/stats/insights' + siteFragment, selected: section === 'insights' },
				sectionTitles.insights
			),
			_react2.default.createElement(
				_item2.default,
				{ path: '/stats/day' + siteFragment, selected: section === 'day' },
				sectionTitles.day
			),
			_react2.default.createElement(
				_item2.default,
				{ path: '/stats/week' + siteFragment, selected: section === 'week' },
				sectionTitles.week
			),
			_react2.default.createElement(
				_item2.default,
				{ path: '/stats/month' + siteFragment, selected: section === 'month' },
				sectionTitles.month
			),
			_react2.default.createElement(
				_item2.default,
				{ path: '/stats/year' + siteFragment, selected: section === 'year' },
				sectionTitles.year
			),
			ActivityTab
		),
		statsControl,
		_react2.default.createElement(_followersCount2.default, null)
	);
};

StatsNavigation.propTypes = {
	isJetpack: _propTypes2.default.bool,
	isStore: _propTypes2.default.bool,
	section: _propTypes2.default.string.isRequired,
	slug: _propTypes2.default.string,
	siteId: _propTypes2.default.number
};

var localized = (0, _i18nCalypso.localize)(StatsNavigation);

exports.default = (0, _reactRedux.connect)(function (state, _ref) {
	var siteId = _ref.siteId;

	var isJetpack = (0, _selectors.isJetpackSite)(state, siteId);
	return {
		hasPaidPlan: (0, _isSiteOnPaidPlan2.default)(state, siteId),
		isJetpack: isJetpack,
		isStore: isJetpack && (0, _isPluginActive2.default)(state, siteId, 'woocommerce'),
		siteId: siteId
	};
})(localized);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-period-navigation/index.jsx":
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

var _flowRight2 = __webpack_require__("./node_modules/lodash/flowRight.js");

var _flowRight3 = _interopRequireDefault(_flowRight2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _gridicons = __webpack_require__("./node_modules/gridicons/build/index.js");

var _gridicons2 = _interopRequireDefault(_gridicons);

var _actions = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var StatsPeriodNavigation = function (_PureComponent) {
	(0, _inherits3.default)(StatsPeriodNavigation, _PureComponent);

	function StatsPeriodNavigation() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, StatsPeriodNavigation);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StatsPeriodNavigation.__proto__ || (0, _getPrototypeOf2.default)(StatsPeriodNavigation)).call.apply(_ref, [this].concat(args))), _this), _this.handleClickNext = function () {
			_this.handleClickArrow('next');
		}, _this.handleClickPrevious = function () {
			_this.handleClickArrow('previous');
		}, _this.handleClickArrow = function (arrow) {
			var _this$props = _this.props,
			    date = _this$props.date,
			    onPeriodChange = _this$props.onPeriodChange,
			    period = _this$props.period,
			    recordGoogleEvent = _this$props.recordGoogleEvent;

			recordGoogleEvent('Stats Period Navigation', 'Clicked ' + arrow + ' ' + period);

			if (onPeriodChange) {
				onPeriodChange({
					date: date,
					direction: arrow,
					period: period
				});
			}
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(StatsPeriodNavigation, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    date = _props.date,
			    moment = _props.moment,
			    period = _props.period,
			    url = _props.url;


			var isToday = moment(date).isSame(moment(), period);
			var previousDay = moment(date).subtract(1, period).format('YYYY-MM-DD');
			var nextDay = moment(date).add(1, period).format('YYYY-MM-DD');

			return _react2.default.createElement(
				'div',
				{ className: 'stats-period-navigation' },
				_react2.default.createElement(
					'a',
					{ className: 'stats-period-navigation__previous',
						href: url + '?startDate=' + previousDay,
						onClick: this.handleClickPrevious },
					_react2.default.createElement(_gridicons2.default, { icon: 'arrow-left', size: 18 })
				),
				_react2.default.createElement(
					'div',
					{ className: 'stats-period-navigation__children' },
					children
				),
				!isToday && _react2.default.createElement(
					'a',
					{ className: 'stats-period-navigation__next',
						href: url + '?startDate=' + nextDay,
						onClick: this.handleClickNext },
					_react2.default.createElement(_gridicons2.default, { icon: 'arrow-right', size: 18 })
				),
				isToday && _react2.default.createElement(
					'span',
					{ className: 'stats-period-navigation__next is-disabled' },
					_react2.default.createElement(_gridicons2.default, { icon: 'arrow-right', size: 18 })
				)
			);
		}
	}]);
	return StatsPeriodNavigation;
}(_react.PureComponent);

/**
 * Internal dependencies
 */


StatsPeriodNavigation.propTypes = {
	onPeriodChange: _propTypes2.default.func
};


var connectComponent = (0, _reactRedux.connect)(null, { recordGoogleEvent: _actions.recordGoogleEvent });

exports.default = (0, _flowRight3.default)(connectComponent, _i18nCalypso.localize)(StatsPeriodNavigation);
module.exports = exports['default'];

/***/ }),

/***/ "./client/my-sites/stats/stats-strings.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

module.exports = function () {
	var statsStrings = {};

	statsStrings.posts = {
		title: (0, _i18nCalypso.translate)('Posts & Pages', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Title', { context: 'Stats: module row header for post title.' }),
		value: (0, _i18nCalypso.translate)('Views', { context: 'Stats: module row header for number of post views.' }),
		empty: (0, _i18nCalypso.translate)('No posts or pages viewed', { context: 'Stats: Info box label when the Posts & Pages module is empty' })
	};

	statsStrings.referrers = {
		title: (0, _i18nCalypso.translate)('Referrers', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Referrer', { context: 'Stats: module row header for post referrer.' }),
		value: (0, _i18nCalypso.translate)('Views', { context: 'Stats: module row header for number of post views by referrer.' }),
		empty: (0, _i18nCalypso.translate)('No referrers recorded', { context: 'Stats: Info box label when the Referrers module is empty' })
	};

	statsStrings.clicks = {
		title: (0, _i18nCalypso.translate)('Clicks', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Link', { context: 'Stats: module row header for links in posts.' }),
		value: (0, _i18nCalypso.translate)('Clicks', { context: 'Stats: module row header for number of clicks on a given link in a post.' }),
		empty: (0, _i18nCalypso.translate)('No clicks recorded', { context: 'Stats: Info box label when the Clicks module is empty' })
	};

	statsStrings.countries = {
		title: (0, _i18nCalypso.translate)('Countries', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Country', { context: 'Stats: module row header for views by country.' }),
		value: (0, _i18nCalypso.translate)('Views', { context: 'Stats: module row header for number of views from a country.' }),
		empty: (0, _i18nCalypso.translate)('No countries recorded', { context: 'Stats: Info box label when the Countries module is empty' })
	};

	statsStrings.search = {
		title: (0, _i18nCalypso.translate)('Search Terms', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Search Term', { context: 'Stats: module row header for search in search terms.' }),
		value: (0, _i18nCalypso.translate)('Views', { context: 'Stats: module row header for views of a given search in search terms.' }),
		empty: (0, _i18nCalypso.translate)('No search terms recorded', { context: 'Stats: Info box label when the Search Terms module is empty' })
	};

	statsStrings.authors = {
		title: (0, _i18nCalypso.translate)('Authors', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Author', { context: 'Stats: module row header for authors.' }),
		value: (0, _i18nCalypso.translate)('Views', { context: 'Stats: module row header for number of views per author.' }),
		empty: (0, _i18nCalypso.translate)('No posts or pages viewed', { context: 'Stats: Info box label when the Authors module is empty' })
	};

	statsStrings.videoplays = {
		title: (0, _i18nCalypso.translate)('Videos', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Video', { context: 'Stats: module row header for videos.' }),
		value: (0, _i18nCalypso.translate)('Plays', { context: 'Stats: module row header for number of plays per video.' }),
		empty: (0, _i18nCalypso.translate)('No videos played', { context: 'Stats: Info box label when the Videos module is empty' })
	};

	statsStrings.podcastdownloads = {
		title: (0, _i18nCalypso.translate)('Podcasts', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Episodes', { context: 'Stats: module row header for podcast.' }),
		value: (0, _i18nCalypso.translate)('Downloads', { context: 'Stats: module row header for number of downloads per podcast episode.' }),
		empty: (0, _i18nCalypso.translate)('No episodes downloaded', { context: 'Stats: Info box label when the Podcasts module is empty' })
	};

	statsStrings.tags = {
		title: (0, _i18nCalypso.translate)('Tags & Categories', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Topic', { context: 'Stats: module row header for tags and categories.' }),
		value: (0, _i18nCalypso.translate)('Views', { context: 'Stats: module row header for number of views per tag or category.' }),
		empty: (0, _i18nCalypso.translate)('No tagged posts or pages viewed', { context: 'Stats: Info box label when the Tags module is empty' })
	};

	statsStrings.publicize = {
		title: (0, _i18nCalypso.translate)('Publicize', { context: 'Stats: title of module' }),
		item: (0, _i18nCalypso.translate)('Service', { context: 'Stats: module row header for publicize service.' }),
		value: (0, _i18nCalypso.translate)('Followers', { context: 'Stats: module row header for number of followers on the service.' }),
		empty: (0, _i18nCalypso.translate)('No publicize followers recorded', { context: 'Stats: Info box label when the publicize module is empty' })
	};

	return statsStrings;
}; /**
    * External dependencies
    */

/***/ }),

/***/ "./client/my-sites/stats/stats-tabs/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _find3 = __webpack_require__("./node_modules/lodash/find.js");

var _find4 = _interopRequireDefault(_find3);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _tab = __webpack_require__("./client/my-sites/stats/stats-tabs/tab.jsx");

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
	displayName: 'StatsTabs',

	propTypes: {
		activeKey: _react.PropTypes.string,
		activeIndex: _react.PropTypes.string,
		dataList: _react.PropTypes.object,
		selectedTab: _react.PropTypes.string,
		switchTab: _react.PropTypes.func,
		tabs: _react.PropTypes.array,
		borderless: _react.PropTypes.bool
	},

	render: function render() {
		var _props = this.props,
		    children = _props.children,
		    data = _props.data,
		    activeIndex = _props.activeIndex,
		    activeKey = _props.activeKey,
		    tabs = _props.tabs,
		    switchTab = _props.switchTab,
		    selectedTab = _props.selectedTab,
		    borderless = _props.borderless;

		var statsTabs = void 0;

		if (data && !children) {
			var activeData = (0, _find4.default)(data, (0, _defineProperty3.default)({}, activeKey, activeIndex));

			statsTabs = tabs.map(function (tab) {
				var hasData = activeData && activeData[tab.attr] >= 0 && activeData[tab.attr] !== null;

				var tabOptions = {
					attr: tab.attr,
					gridicon: tab.gridicon,
					className: tab.className,
					label: tab.label,
					loading: !hasData,
					selected: selectedTab === tab.attr,
					tabClick: switchTab,
					value: hasData ? activeData[tab.attr] : null
				};

				return _react2.default.createElement(_tab2.default, (0, _extends3.default)({ key: tabOptions.attr }, tabOptions));
			});
		}

		return _react2.default.createElement(
			'ul',
			{ className: (0, _classnames2.default)('stats-tabs', { 'is-enabled': !!data }, { 'is-borderless': borderless }) },
			statsTabs || children
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

/***/ "./client/my-sites/stats/stats-tabs/tab.jsx":
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

exports.default = _react2.default.createClass({
	displayName: 'StatsTabsTab',

	propTypes: {
		className: _react.PropTypes.string,
		gridicon: _react.PropTypes.string,
		href: _react.PropTypes.string,
		label: _react.PropTypes.string,
		loading: _react.PropTypes.bool,
		selected: _react.PropTypes.bool,
		tabClick: _react.PropTypes.func,
		compact: _react.PropTypes.bool,
		value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	},

	clickHandler: function clickHandler(event) {
		if (this.props.tabClick) {
			event.preventDefault();
			this.props.tabClick(this.props);
		}
	},
	ensureValue: function ensureValue(value) {
		var _props = this.props,
		    loading = _props.loading,
		    children = _props.children;

		if (children) {
			return null;
		}

		if (!loading && (value || value === 0)) {
			return this.numberFormat(value);
		}

		return String.fromCharCode(8211);
	},
	render: function render() {
		var _props2 = this.props,
		    className = _props2.className,
		    compact = _props2.compact,
		    children = _props2.children,
		    gridicon = _props2.gridicon,
		    href = _props2.href,
		    label = _props2.label,
		    loading = _props2.loading,
		    selected = _props2.selected,
		    tabClick = _props2.tabClick,
		    value = _props2.value;


		var tabClass = (0, _classnames2.default)('stats-tab', className, {
			'is-selected': selected,
			'is-loading': loading,
			'is-low': !value,
			'is-compact': compact
		});

		var tabIcon = gridicon ? _react2.default.createElement(_gridicons2.default, { icon: gridicon, size: 18 }) : null;
		var tabLabel = _react2.default.createElement(
			'span',
			{ className: 'label' },
			label
		);
		var tabValue = _react2.default.createElement(
			'span',
			{ className: 'value' },
			this.ensureValue(value)
		);
		var hasClickAction = href || tabClick;

		return _react2.default.createElement(
			'li',
			{ className: tabClass, onClick: this.clickHandler },
			hasClickAction ? _react2.default.createElement(
				'a',
				{ href: href },
				tabIcon,
				tabLabel,
				tabValue,
				children
			) : _react2.default.createElement(
				'span',
				{ className: 'no-link' },
				tabIcon,
				tabLabel,
				tabValue,
				children
			)
		);
	}
}); /**
     * External dependencies
     */

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

/***/ "./client/state/plugins/installed/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__("./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.activatePlugin = activatePlugin;
exports.deactivatePlugin = deactivatePlugin;
exports.updatePlugin = updatePlugin;
exports.enableAutoupdatePlugin = enableAutoupdatePlugin;
exports.disableAutoupdatePlugin = disableAutoupdatePlugin;
exports.installPlugin = installPlugin;
exports.installPluginOnMultisite = installPluginOnMultisite;
exports.removePlugin = removePlugin;
exports.fetchPlugins = fetchPlugins;

var _wp = __webpack_require__("./client/lib/wp/browser.js");

var _wp2 = _interopRequireDefault(_wp);

var _actionTypes = __webpack_require__("./client/state/action-types.js");

var _constants = __webpack_require__("./client/state/plugins/installed/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return a SitePlugin instance used to handle the plugin
 *
 * @param {Object} siteId - site ID
 * @param {String} pluginId - plugin identifier
 * @return {SitePlugin} SitePlugin instance
 */


/**
 * Internal dependencies
 */
var getPluginHandler = function getPluginHandler(siteId, pluginId) {
	var siteHandler = _wp2.default.site(siteId);
	return siteHandler.plugin(pluginId);
}; /**
    * External dependencies
    */
function activatePlugin(siteId, plugin) {
	return function (dispatch) {
		var pluginId = plugin.id;
		var defaultAction = {
			action: _constants.ACTIVATE_PLUGIN,
			siteId: siteId,
			pluginId: pluginId
		};
		dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_ACTIVATE_REQUEST }));

		var successCallback = function successCallback(data) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_ACTIVATE_REQUEST_SUCCESS, data: data }));
		};

		var errorCallback = function errorCallback(error) {
			// This error means it's already active.
			if (error && error.error === 'activation_error') {
				successCallback(plugin);
			}
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_ACTIVATE_REQUEST_FAILURE, error: error }));
		};

		return getPluginHandler(siteId, pluginId).activate().then(successCallback).catch(errorCallback);
	};
}

function deactivatePlugin(siteId, plugin) {
	return function (dispatch) {
		var pluginId = plugin.id;
		var defaultAction = {
			action: _constants.DEACTIVATE_PLUGIN,
			siteId: siteId,
			pluginId: pluginId
		};
		dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_DEACTIVATE_REQUEST }));

		var successCallback = function successCallback(data) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_DEACTIVATE_REQUEST_SUCCESS, data: data }));
		};

		var errorCallback = function errorCallback(error) {
			// This error means it's already inactive.
			if (error && error.error === 'deactivation_error') {
				successCallback(plugin);
			}
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_DEACTIVATE_REQUEST_FAILURE, error: error }));
		};

		return getPluginHandler(siteId, pluginId).deactivate().then(successCallback).catch(errorCallback);
	};
}

function updatePlugin(siteId, plugin) {
	return function (dispatch) {
		if (!plugin.update) {
			return _promise2.default.reject('Error: Plugin already up-to-date.');
		}

		var pluginId = plugin.id;
		var defaultAction = {
			action: _constants.UPDATE_PLUGIN,
			siteId: siteId,
			pluginId: pluginId
		};
		dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_UPDATE_REQUEST }));

		var successCallback = function successCallback(data) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_UPDATE_REQUEST_SUCCESS, data: data }));
		};

		var errorCallback = function errorCallback(error) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_UPDATE_REQUEST_FAILURE, error: error }));
		};

		return getPluginHandler(siteId, pluginId).updateVersion().then(successCallback).catch(errorCallback);
	};
}

function enableAutoupdatePlugin(siteId, plugin) {
	return function (dispatch) {
		var pluginId = plugin.id;
		var defaultAction = {
			action: _constants.ENABLE_AUTOUPDATE_PLUGIN,
			siteId: siteId,
			pluginId: pluginId
		};
		dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_AUTOUPDATE_ENABLE_REQUEST }));

		var successCallback = function successCallback(data) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_AUTOUPDATE_ENABLE_REQUEST_SUCCESS, data: data }));
			if (data.update) {
				updatePlugin(siteId, data)(dispatch);
			}
		};

		var errorCallback = function errorCallback(error) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_AUTOUPDATE_ENABLE_REQUEST_FAILURE, error: error }));
		};

		return getPluginHandler(siteId, pluginId).enableAutoupdate().then(successCallback).catch(errorCallback);
	};
}

function disableAutoupdatePlugin(siteId, plugin) {
	return function (dispatch) {
		var pluginId = plugin.id;
		var defaultAction = {
			action: _constants.DISABLE_AUTOUPDATE_PLUGIN,
			siteId: siteId,
			pluginId: pluginId
		};
		dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_AUTOUPDATE_DISABLE_REQUEST }));

		var successCallback = function successCallback(data) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_AUTOUPDATE_DISABLE_REQUEST_SUCCESS, data: data }));
		};

		var errorCallback = function errorCallback(error) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_AUTOUPDATE_DISABLE_REQUEST_FAILURE, error: error }));
		};

		return getPluginHandler(siteId, pluginId).disableAutoupdate().then(successCallback).catch(errorCallback);
	};
}

function installPluginHelper(siteId, plugin) {
	var isMainNetworkSite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	return function (dispatch) {
		var pluginId = plugin.id;
		var defaultAction = {
			action: _constants.INSTALL_PLUGIN,
			siteId: siteId,
			pluginId: pluginId
		};
		dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_INSTALL_REQUEST }));

		var doInstall = function doInstall(pluginData) {
			return getPluginHandler(siteId, pluginData.slug).install();
		};

		var doActivate = function doActivate(pluginData) {
			return getPluginHandler(siteId, pluginData.id).activate();
		};

		var doUpdate = function doUpdate(pluginData) {
			return getPluginHandler(siteId, pluginData.id).updateVersion();
		};

		var doAutoupdates = function doAutoupdates(pluginData) {
			return getPluginHandler(siteId, pluginData.id).enableAutoupdate();
		};

		var successCallback = function successCallback(data) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_INSTALL_REQUEST_SUCCESS, data: data }));
		};

		var errorCallback = function errorCallback(error) {
			if (error.name === 'PluginAlreadyInstalledError') {
				if (isMainNetworkSite) {
					return doUpdate(plugin).then(doAutoupdates).then(successCallback).catch(errorCallback);
				}
				return doUpdate(plugin).then(doActivate).then(doAutoupdates).then(successCallback).catch(errorCallback);
			}
			if (error.name === 'ActivationErrorError') {
				return doUpdate(plugin).then(doAutoupdates).then(successCallback).catch(errorCallback);
			}
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_INSTALL_REQUEST_FAILURE, error: error }));
			return _promise2.default.reject(error);
		};

		if (isMainNetworkSite) {
			return doInstall(plugin).then(doAutoupdates).then(successCallback).catch(errorCallback);
		}

		return doInstall(plugin).then(doActivate).then(doAutoupdates).then(successCallback).catch(errorCallback);
	};
}

function installPlugin(siteId, plugin) {
	return installPluginHelper(siteId, plugin);
}

function installPluginOnMultisite(siteId, plugin) {
	return installPluginHelper(siteId, plugin, true);
}

function removePlugin(siteId, plugin) {
	return function (dispatch) {
		var pluginId = plugin.id;
		var defaultAction = {
			action: _constants.REMOVE_PLUGIN,
			siteId: siteId,
			pluginId: pluginId
		};
		dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_REMOVE_REQUEST }));

		var doDeactivate = function doDeactivate(pluginData) {
			if (pluginData.active) {
				return getPluginHandler(siteId, pluginData.id).deactivate();
			}
			return _promise2.default.resolve(pluginData);
		};

		var doDisableAutoupdate = function doDisableAutoupdate(pluginData) {
			if (pluginData.autoupdate) {
				return getPluginHandler(siteId, pluginData.id).disableAutoupdate();
			}
			return _promise2.default.resolve(pluginData);
		};

		var doRemove = function doRemove(pluginData) {
			return getPluginHandler(siteId, pluginData.id).delete();
		};

		var successCallback = function successCallback() {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_REMOVE_REQUEST_SUCCESS }));
		};

		var errorCallback = function errorCallback(error) {
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGIN_REMOVE_REQUEST_FAILURE, error: error }));
			return _promise2.default.reject(error);
		};

		return doDeactivate(plugin).then(doDisableAutoupdate).then(doRemove).then(successCallback).catch(errorCallback);
	};
}

function fetchPlugins(siteIds) {
	return function (dispatch) {
		return siteIds.map(function (siteId) {
			var defaultAction = {
				siteId: siteId
			};
			dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGINS_REQUEST }));

			var receivePluginsDispatchSuccess = function receivePluginsDispatchSuccess(data) {
				dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGINS_RECEIVE, data: data.plugins }));
				dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGINS_REQUEST_SUCCESS }));

				data.plugins.map(function (plugin) {
					if (plugin.update && plugin.autoupdate) {
						updatePlugin(siteId, plugin)(dispatch);
					}
				});
			};

			var receivePluginsDispatchFail = function receivePluginsDispatchFail(error) {
				dispatch((0, _extends3.default)({}, defaultAction, { type: _actionTypes.PLUGINS_REQUEST_FAILURE, error: error }));
			};

			return _wp2.default.site(siteId).pluginsList().then(receivePluginsDispatchSuccess).catch(receivePluginsDispatchFail);
		});
	};
}

/***/ }),

/***/ "./client/state/plugins/installed/constants.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* Notices use different action constants */
var INSTALL_PLUGIN = exports.INSTALL_PLUGIN = 'INSTALL_PLUGIN';
var REMOVE_PLUGIN = exports.REMOVE_PLUGIN = 'REMOVE_PLUGIN';
var UPDATE_PLUGIN = exports.UPDATE_PLUGIN = 'UPDATE_PLUGIN';
var ACTIVATE_PLUGIN = exports.ACTIVATE_PLUGIN = 'ACTIVATE_PLUGIN';
var DEACTIVATE_PLUGIN = exports.DEACTIVATE_PLUGIN = 'DEACTIVATE_PLUGIN';
var ENABLE_AUTOUPDATE_PLUGIN = exports.ENABLE_AUTOUPDATE_PLUGIN = 'ENABLE_AUTOUPDATE_PLUGIN';
var DISABLE_AUTOUPDATE_PLUGIN = exports.DISABLE_AUTOUPDATE_PLUGIN = 'DISABLE_AUTOUPDATE_PLUGIN';

/***/ }),

/***/ "./client/state/plugins/installed/selectors.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assign = __webpack_require__("./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends4 = _interopRequireDefault(_extends3);

var _values2 = __webpack_require__("./node_modules/lodash/values.js");

var _values3 = _interopRequireDefault(_values2);

var _sortBy2 = __webpack_require__("./node_modules/lodash/sortBy.js");

var _sortBy3 = _interopRequireDefault(_sortBy2);

var _some2 = __webpack_require__("./node_modules/lodash/some.js");

var _some3 = _interopRequireDefault(_some2);

var _reduce2 = __webpack_require__("./node_modules/lodash/reduce.js");

var _reduce3 = _interopRequireDefault(_reduce2);

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _get2 = __webpack_require__("./node_modules/lodash/get.js");

var _get3 = _interopRequireDefault(_get2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

var _every2 = __webpack_require__("./node_modules/lodash/every.js");

var _every3 = _interopRequireDefault(_every2);

exports.isRequesting = isRequesting;
exports.isRequestingForSites = isRequestingForSites;
exports.getPlugins = getPlugins;
exports.getPluginsWithUpdates = getPluginsWithUpdates;
exports.getPluginOnSite = getPluginOnSite;
exports.getSitesWithPlugin = getSitesWithPlugin;
exports.getSitesWithoutPlugin = getSitesWithoutPlugin;
exports.getStatusForPlugin = getStatusForPlugin;
exports.isPluginDoingAction = isPluginDoingAction;

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _filters = {
	none: function none() {
		return false;
	},
	all: function all() {
		return true;
	},
	active: function active(plugin) {
		return (0, _some3.default)(plugin.sites, function (site) {
			return site.active;
		});
	},
	inactive: function inactive(plugin) {
		return (0, _some3.default)(plugin.sites, function (site) {
			return !site.active;
		});
	},
	updates: function updates(plugin) {
		return (0, _some3.default)(plugin.sites, function (site) {
			return site.update;
		});
	},
	isEqual: function isEqual(pluginSlug, plugin) {
		return plugin.slug === pluginSlug;
	}
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
function isRequesting(state, siteId) {
	if (typeof state.plugins.installed.isRequesting[siteId] === 'undefined') {
		return false;
	}
	return state.plugins.installed.isRequesting[siteId];
}

function isRequestingForSites(state, sites) {
	// As long as any sites have isRequesting true, we consider this group requesting
	return (0, _some3.default)(sites, function (siteId) {
		return isRequesting(state, siteId);
	});
}

function getPlugins(state, siteIds, pluginFilter) {
	var pluginList = (0, _reduce3.default)(siteIds, function (memo, siteId) {
		var list = state.plugins.installed.plugins[siteId] || [];
		list.forEach(function (item) {
			var sitePluginInfo = (0, _pick3.default)(item, ['active', 'autoupdate', 'update']);
			if (memo[item.slug]) {
				memo[item.slug].sites = (0, _extends4.default)({}, memo[item.slug].sites, (0, _defineProperty3.default)({}, siteId, sitePluginInfo));
			} else {
				memo[item.slug] = (0, _extends4.default)({}, item, { sites: (0, _defineProperty3.default)({}, siteId, sitePluginInfo) });
			}
		});
		return memo;
	}, {});

	if (pluginFilter && _filters[pluginFilter]) {
		pluginList = (0, _filter3.default)(pluginList, _filters[pluginFilter]);
	}
	return (0, _values3.default)((0, _sortBy3.default)(pluginList, function (item) {
		return item.slug.toLowerCase();
	}));
}

function getPluginsWithUpdates(state, siteIds) {
	return (0, _filter3.default)(getPlugins(state, siteIds), _filters.updates);
}

function getPluginOnSite(state, siteId, pluginSlug) {
	var pluginList = getPlugins(state, [siteId]);
	return (0, _find3.default)(pluginList, { slug: pluginSlug });
}

function getSitesWithPlugin(state, siteIds, pluginSlug) {
	var pluginList = getPlugins(state, siteIds);
	var plugin = (0, _find3.default)(pluginList, { slug: pluginSlug });
	if (!plugin) {
		return [];
	}

	// Filter the requested sites list by the list of sites for this plugin
	var pluginSites = (0, _filter3.default)(siteIds, function (siteId) {
		return plugin.sites.hasOwnProperty(siteId);
	});

	return (0, _sortBy3.default)(pluginSites, function (siteId) {
		return (0, _selectors.getSiteTitle)(state, siteId).toLowerCase();
	});
}

function getSitesWithoutPlugin(state, siteIds, pluginSlug) {
	var installedOnSiteIds = getSitesWithPlugin(state, siteIds, pluginSlug) || [];
	return (0, _filter3.default)(siteIds, function (siteId) {
		if (!(0, _get3.default)((0, _selectors.getSite)(state, siteId), 'visible') || !(0, _selectors.isJetpackSite)(state, siteId)) {
			return false;
		}

		if ((0, _selectors.isJetpackSiteSecondaryNetworkSite)(state, siteId)) {
			return false;
		}

		return (0, _every3.default)(installedOnSiteIds, function (installedOnSiteId) {
			return installedOnSiteId !== siteId;
		});
	});
}

function getStatusForPlugin(state, siteId, pluginId) {
	if (typeof state.plugins.installed.status[siteId] === 'undefined') {
		return false;
	}
	if (typeof state.plugins.installed.status[siteId][pluginId] === 'undefined') {
		return false;
	}
	var status = state.plugins.installed.status[siteId][pluginId];
	return (0, _assign2.default)({}, status, { siteId: siteId, pluginId: pluginId });
}

function isPluginDoingAction(state, siteId, pluginId) {
	var status = getStatusForPlugin(state, siteId, pluginId);
	return !!status && 'inProgress' === status.status;
}

/***/ }),

/***/ "./client/state/ui/first-view/actions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _filter2 = __webpack_require__("./node_modules/lodash/filter.js");

var _filter3 = _interopRequireDefault(_filter2);

exports.hideView = hideView;

var _actionTypes = __webpack_require__("./client/state/action-types.js");

var _actions = __webpack_require__("./client/state/analytics/actions.js");

var _actions2 = __webpack_require__("./client/state/preferences/actions.js");

var _selectors = __webpack_require__("./client/state/preferences/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/first-view/selectors.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hideView(_ref) {
	var enabled = _ref.enabled;

	return function (dispatch, getState) {
		var timeBucket = (0, _selectors2.bucketedTimeSpentOnCurrentView)(getState());
		var config = (0, _selectors2.getConfigForCurrentView)(getState());

		if (!config || !config.name) {
			return false;
		}

		var hideAction = {
			type: _actionTypes.FIRST_VIEW_HIDE,
			view: config.name
		};

		var tracksEvent = (0, _actions.recordTracksEvent)('calypso_first_view_dismissed', {
			view: config.name,
			show_again: enabled,
			time_spent: timeBucket
		});

		dispatch((0, _actions.bumpStat)('calypso_first_view_dismissed', enabled ? 'show_again' : 'dont_show'));
		dispatch((0, _actions.bumpStat)('calypso_first_view_duration', timeBucket));
		dispatch(tracksEvent);
		dispatch(hideAction);
		dispatch(persistToPreferences({ getState: getState, view: config.name, disabled: !enabled }));
	};
}

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


function persistToPreferences(_ref2) {
	var getState = _ref2.getState,
	    view = _ref2.view,
	    disabled = _ref2.disabled;

	return (0, _actions2.savePreference)('firstViewHistory', [].concat((0, _toConsumableArray3.default)((0, _filter3.default)((0, _selectors.getPreference)(getState(), 'firstViewHistory'), function (item) {
		return item.view !== view;
	})), [{
		view: view,
		timestamp: Date.now(),
		disabled: disabled
	}]));
}

/***/ }),

/***/ "./node_modules/browser-filesaver/FileSaver.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.1.20150716
 *
 * By Eli Grey, http://eligrey.com
 * License: X11/MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, webkit_req_fs = view.webkitRequestFileSystem
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		, fs_min_size = 0
		// See https://code.google.com/p/chromium/issues/detail?id=375297#c7 and
		// https://github.com/eligrey/FileSaver.js/commit/485930a#commitcomment-8768047
		// for the reasoning behind the timeout and revocation flow
		, arbitrary_revoke_timeout = 500 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			if (view.chrome) {
				revoker();
			} else {
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob(["\ufeff", blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, blob_changed = false
				, object_url
				, target_view
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					// don't create more object URLs than needed
					if (blob_changed || !object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (target_view) {
						target_view.location.href = object_url;
					} else {
						var new_tab = view.open(object_url, "_blank");
						if (new_tab == undefined && typeof safari !== "undefined") {
							//Apple do not allow window.open, see http://bit.ly/1kZffRI
							view.location.href = object_url
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
				, abortable = function(func) {
					return function() {
						if (filesaver.readyState !== filesaver.DONE) {
							return func.apply(this, arguments);
						}
					};
				}
				, create_if_not_found = {create: true, exclusive: false}
				, slice
			;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				save_link.href = object_url;
				save_link.download = name;
				setTimeout(function() {
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}
			// Object and web filesystem URLs have a problem saving in Google Chrome when
			// viewed in a tab, so I force save with application/octet-stream
			// http://code.google.com/p/chromium/issues/detail?id=91158
			// Update: Google errantly closed 91158, I submitted it again:
			// https://code.google.com/p/chromium/issues/detail?id=389642
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			// Since I can't be sure that the guessed media type will trigger a download
			// in WebKit, I append .download to the filename.
			// https://bugs.webkit.org/show_bug.cgi?id=65440
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {
					var save = function() {
						dir.getFile(name, create_if_not_found, abortable(function(file) {
							file.createWriter(abortable(function(writer) {
								writer.onwriteend = function(event) {
									target_view.location.href = file.toURL();
									filesaver.readyState = filesaver.DONE;
									dispatch(filesaver, "writeend", event);
									revoke(file);
								};
								writer.onerror = function() {
									var error = writer.error;
									if (error.code !== error.ABORT_ERR) {
										fs_error();
									}
								};
								"writestart progress write abort".split(" ").forEach(function(event) {
									writer["on" + event] = filesaver["on" + event];
								});
								writer.write(blob);
								filesaver.abort = function() {
									writer.abort();
									filesaver.readyState = filesaver.DONE;
								};
								filesaver.readyState = filesaver.WRITING;
							}), fs_error);
						}), fs_error);
					};
					dir.getFile(name, {create: false}, abortable(function(file) {
						// delete file if it already exists
						file.remove();
						save();
					}), abortable(function(ex) {
						if (ex.code === ex.NOT_FOUND_ERR) {
							save();
						} else {
							fs_error();
						}
					}));
				}), fs_error);
			}), fs_error);
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name, no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name || "download");
		};
	}

	FS_proto.abort = function() {
		var filesaver = this;
		filesaver.readyState = filesaver.DONE;
		dispatch(filesaver, "abort");
	};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__("./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__("./node_modules/webpack/buildin/amd-options.js") != null)) {
  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


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

/***/ "./node_modules/react-addons-css-transition-group/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/react/lib/ReactCSSTransitionGroup.js");

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

/***/ "./node_modules/webpack/buildin/amd-define.js":
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ })

});