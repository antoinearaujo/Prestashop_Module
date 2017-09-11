webpackJsonp(["stats"],{

/***/ "./client/lib/follow-list/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */
var FollowListSite = __webpack_require__("./client/lib/follow-list/site.js");

/**
 * FollowList component
 *
 * @api public
 */
function FollowList() {
	if (!(this instanceof FollowList)) {
		return new FollowList();
	}
	this.data = [];
}

/**
 * Adds a new follower object to the data store
 */
FollowList.prototype.add = function (object) {
	var site = this.siteExists(object.site_id);
	if (!site) {
		site = new FollowListSite(object);
		this.data.push(site);
	}
	return site;
};

FollowList.prototype.siteExists = function (site_id) {
	return (0, _find3.default)(this.data, { site_id: site_id }) || false;
};

module.exports = FollowList;

/***/ }),

/***/ "./client/lib/follow-list/site.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * External dependencies
 */
var debug = __webpack_require__("./node_modules/debug/browser.js")('calypso:follow-list:site');

/**
 * Internal dependencies
 */
var wpcom = __webpack_require__("./client/lib/wp/browser.js"),
    Emitter = __webpack_require__("./client/lib/mixins/emitter/index.js");

/**
 * FollowList component
 *
 * @api public
 */
function FollowListSite(args) {
	if (!(this instanceof FollowListSite)) {
		return new FollowListSite(args);
	}

	this.site_id = args.site_id;
	this.is_following = args.is_following;
	this.blog_domain = args.blog_domain;
}

/**
 * Mixins
 */
Emitter(FollowListSite.prototype);

/**
*	if is_following is false, calls the follow endpoint
*/

FollowListSite.prototype.follow = function () {
	if (!this.is_following) {
		debug('following site', this.site_id);
		this.is_following = true;
		this.emit('change');
		wpcom.site(this.site_id).follow().add(function (resp) {
			debug('follow success', resp);
		});
	}
};

/**
*	if is_following is true, calls the delete action on follow
*/

FollowListSite.prototype.unfollow = function () {
	if (this.is_following) {
		this.is_following = false;
		this.emit('change');
		wpcom.site(this.site_id).follow().del(function (resp) {
			debug('unfollow success', resp);
		});
	}
};

module.exports = FollowListSite;

/***/ }),

/***/ "./client/my-sites/stats/controller.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isFinite = __webpack_require__("./node_modules/babel-runtime/core-js/number/is-finite.js");

var _isFinite2 = _interopRequireDefault(_isFinite);

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _pick2 = __webpack_require__("./node_modules/lodash/pick.js");

var _pick3 = _interopRequireDefault(_pick2);

var _find2 = __webpack_require__("./node_modules/lodash/find.js");

var _find3 = _interopRequireDefault(_find2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _page = __webpack_require__("./node_modules/page/index.js");

var _page2 = _interopRequireDefault(_page);

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _i18nCalypso2 = _interopRequireDefault(_i18nCalypso);

var _route = __webpack_require__("./client/lib/route/index.js");

var _route2 = _interopRequireDefault(_route);

var _analytics = __webpack_require__("./client/lib/analytics/index.js");

var _analytics2 = _interopRequireDefault(_analytics);

var _toTitleCase = __webpack_require__("./node_modules/to-title-case/index.js");

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

var _actions = __webpack_require__("./client/state/document-head/actions.js");

var _reactHelpers = __webpack_require__("./client/lib/react-helpers/index.js");

var _actions2 = __webpack_require__("./client/state/preferences/actions.js");

var _selectors = __webpack_require__("./client/state/sites/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/layout-focus/selectors.js");

var _actions3 = __webpack_require__("./client/state/ui/layout-focus/actions.js");

var _selectors3 = __webpack_require__("./client/state/ui/selectors.js");

var _asyncLoad = __webpack_require__("./client/components/async-load/index.jsx");

var _asyncLoad2 = _interopRequireDefault(_asyncLoad);

var _statsPagePlaceholder = __webpack_require__("./client/my-sites/stats/stats-page-placeholder/index.jsx");

var _statsPagePlaceholder2 = _interopRequireDefault(_statsPagePlaceholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal Dependencies
 */
var analyticsPageTitle = 'Stats'; /**
                                   * External Dependencies
                                   */


function rangeOfPeriod(period, date) {
	var periodRange = {
		period: period,
		startOf: date.clone().startOf(period),
		endOf: date.clone().endOf(period)
	};

	if ('week' === period) {
		if ('0' === date.format('d')) {
			periodRange.startOf.subtract(6, 'd');
			periodRange.endOf.subtract(6, 'd');
		} else {
			periodRange.startOf.add(1, 'd');
			periodRange.endOf.add(1, 'd');
		}
	}

	periodRange.key = period + ':' + periodRange.endOf.format('YYYY-MM-DD');

	return periodRange;
}

function getNumPeriodAgo(momentSiteZone, date, period) {
	var endOfCurrentPeriod = momentSiteZone.endOf(period);
	var durationAgo = _i18nCalypso2.default.moment.duration(endOfCurrentPeriod.diff(date));
	var numPeriodAgo = void 0;

	switch (period) {
		case 'day':
			numPeriodAgo = durationAgo.asDays();
			break;
		case 'week':
			numPeriodAgo = durationAgo.asWeeks();
			break;
		case 'month':
			numPeriodAgo = durationAgo.asMonths();
			break;
		case 'year':
			numPeriodAgo = durationAgo.asYears();
			break;
	}
	return numPeriodAgo;
}

function getSiteFilters(siteId) {
	var filters = [{ title: _i18nCalypso2.default.translate('Insights'), path: '/stats/insights/' + siteId, id: 'stats-insights' }, { title: _i18nCalypso2.default.translate('Days'), path: '/stats/day/' + siteId, id: 'stats-day', period: 'day' }, { title: _i18nCalypso2.default.translate('Weeks'), path: '/stats/week/' + siteId, id: 'stats-week', period: 'week' }, { title: _i18nCalypso2.default.translate('Months'), path: '/stats/month/' + siteId, id: 'stats-month', period: 'month' }, { title: _i18nCalypso2.default.translate('Years'), path: '/stats/year/' + siteId, id: 'stats-year', period: 'year' }];

	return filters;
}

var _ref = function _ref(callback) {
	__webpack_require__.e/* require.ensure */("async-load-my-sites-stats-stats-insights").then((function (require) {
		callback(__webpack_require__("./client/my-sites/stats/stats-insights/index.jsx").__esModule ? __webpack_require__("./client/my-sites/stats/stats-insights/index.jsx").default : __webpack_require__("./client/my-sites/stats/stats-insights/index.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var _ref2 = function _ref2(callback) {
	__webpack_require__.e/* require.ensure */("async-load-my-sites-stats-overview").then((function (require) {
		callback(__webpack_require__("./client/my-sites/stats/overview.jsx").__esModule ? __webpack_require__("./client/my-sites/stats/overview.jsx").default : __webpack_require__("./client/my-sites/stats/overview.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var _ref3 = function _ref3(callback) {
	__webpack_require__.e/* require.ensure */("async-load-my-sites-stats-site").then((function (require) {
		callback(__webpack_require__("./client/my-sites/stats/site.jsx").__esModule ? __webpack_require__("./client/my-sites/stats/site.jsx").default : __webpack_require__("./client/my-sites/stats/site.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var _ref4 = function _ref4(callback) {
	__webpack_require__.e/* require.ensure */("async-load-my-sites-stats-summary").then((function (require) {
		callback(__webpack_require__("./client/my-sites/stats/summary/index.jsx").__esModule ? __webpack_require__("./client/my-sites/stats/summary/index.jsx").default : __webpack_require__("./client/my-sites/stats/summary/index.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var _ref5 = function _ref5(callback) {
	__webpack_require__.e/* require.ensure */("async-load-my-sites-stats-stats-post-detail").then((function (require) {
		callback(__webpack_require__("./client/my-sites/stats/stats-post-detail/index.jsx").__esModule ? __webpack_require__("./client/my-sites/stats/stats-post-detail/index.jsx").default : __webpack_require__("./client/my-sites/stats/stats-post-detail/index.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var _ref6 = function _ref6(callback) {
	__webpack_require__.e/* require.ensure */("async-load-my-sites-stats-comment-follows").then((function (require) {
		callback(__webpack_require__("./client/my-sites/stats/comment-follows/index.jsx").__esModule ? __webpack_require__("./client/my-sites/stats/comment-follows/index.jsx").default : __webpack_require__("./client/my-sites/stats/comment-follows/index.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var _ref7 = function _ref7(callback) {
	__webpack_require__.e/* require.ensure */("async-load-my-sites-stats-activity-log").then((function (require) {
		callback(__webpack_require__("./client/my-sites/stats/activity-log/index.jsx").__esModule ? __webpack_require__("./client/my-sites/stats/activity-log/index.jsx").default : __webpack_require__("./client/my-sites/stats/activity-log/index.jsx"));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

module.exports = {
	resetFirstView: function resetFirstView(context) {
		context.store.dispatch((0, _actions2.savePreference)('firstViewHistory', []));
	},


	redirectToDefaultSitePage: function redirectToDefaultSitePage(context, next) {
		var siteFragment = _route2.default.getSiteFragment(context.path);

		if (siteFragment) {
			// if we are redirecting we need to retain our intended layout-focus
			var currentLayoutFocus = (0, _selectors2.getCurrentLayoutFocus)(context.store.getState());
			context.store.dispatch((0, _actions3.setNextLayoutFocus)(currentLayoutFocus));
			_page2.default.redirect(_route2.default.getStatsDefaultSitePage(siteFragment));
		} else {
			next();
		}
	},

	insights: function insights(context) {
		var FollowList = __webpack_require__("./client/lib/follow-list/index.js");
		var siteId = context.params.site_id;
		var basePath = _route2.default.sectionify(context.path);
		var followList = new FollowList();

		// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
		context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('Stats', { textOnly: true })));

		var site = (0, _selectors.getSite)(context.store.getState(), siteId);
		siteId = site ? site.ID || 0 : 0;

		_analytics2.default.pageView.record(basePath, analyticsPageTitle + ' > Insights');

		var props = { followList: followList };
		(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({
			require: _ref,
			placeholder: _react2.default.createElement(_statsPagePlaceholder2.default, null) }, props)), document.getElementById('primary'), context.store);
	},

	overview: function overview(context, next) {
		var filters = function filters() {
			return [{ title: _i18nCalypso2.default.translate('Days'), path: '/stats/day', altPaths: ['/stats'], id: 'stats-day', period: 'day' }, { title: _i18nCalypso2.default.translate('Weeks'), path: '/stats/week', id: 'stats-week', period: 'week' }, { title: _i18nCalypso2.default.translate('Months'), path: '/stats/month', id: 'stats-month', period: 'month' }, { title: _i18nCalypso2.default.translate('Years'), path: '/stats/year', id: 'stats-year', period: 'year' }];
		};
		var basePath = _route2.default.sectionify(context.path);

		window.scrollTo(0, 0);

		// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
		context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('Stats', { textOnly: true })));

		var activeFilter = (0, _find3.default)(filters(), function (filter) {
			return context.pathname === filter.path || filter.altPaths && -1 !== filter.altPaths.indexOf(context.pathname);
		});

		// Validate that date filter is legit
		if (!activeFilter) {
			next();
		} else {
			_analytics2.default.mc.bumpStat('calypso_stats_overview_period', activeFilter.period);
			_analytics2.default.pageView.record(basePath, analyticsPageTitle + ' > ' + (0, _toTitleCase2.default)(activeFilter.period));

			var props = {
				period: activeFilter.period,
				path: context.pathname
			};
			(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({ placeholder: _react2.default.createElement(_statsPagePlaceholder2.default, null), require: _ref2
			}, props)), document.getElementById('primary'), context.store);
		}
	},

	site: function site(context, next) {
		var siteId = context.params.site_id;
		var filters = getSiteFilters(siteId);
		var queryOptions = context.query;
		var date = void 0;
		var chartTab = void 0;
		var period = void 0;
		var numPeriodAgo = 0;
		var basePath = _route2.default.sectionify(context.path);
		var baseAnalyticsPath = void 0;

		// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
		context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('Stats', { textOnly: true })));

		var currentSite = (0, _selectors.getSite)(context.store.getState(), siteId);
		siteId = currentSite ? currentSite.ID || 0 : 0;

		var activeFilter = (0, _find3.default)(filters, function (filter) {
			return context.pathname === filter.path || filter.altPaths && -1 !== filter.altPaths.indexOf(context.pathname);
		});

		if (!activeFilter) {
			next();
		} else {
			if (currentSite && currentSite.domain) {
				// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
				context.store.dispatch((0, _actions.setDocumentHeadTitle)(_i18nCalypso2.default.translate('Stats', { textOnly: true })));
			}

			var gmtOffset = (0, _selectors.getSiteOption)(context.store.getState(), siteId, 'gmt_offset');
			var momentSiteZone = _i18nCalypso2.default.moment().utcOffset((0, _isFinite2.default)(gmtOffset) ? gmtOffset : 0);
			if (queryOptions.startDate && _i18nCalypso2.default.moment(queryOptions.startDate).isValid()) {
				date = _i18nCalypso2.default.moment(queryOptions.startDate).locale('en');
				numPeriodAgo = getNumPeriodAgo(momentSiteZone, date, activeFilter.period);
			} else {
				date = rangeOfPeriod(activeFilter.period, momentSiteZone.locale('en')).startOf;
			}

			numPeriodAgo = parseInt(numPeriodAgo, 10);
			if (numPeriodAgo) {
				if (numPeriodAgo > 9) {
					numPeriodAgo = '10plus';
				}
				numPeriodAgo = '-' + numPeriodAgo;
			} else {
				numPeriodAgo = '';
			}

			baseAnalyticsPath = basePath + '/:site';

			_analytics2.default.mc.bumpStat('calypso_stats_site_period', activeFilter.period + numPeriodAgo);
			_analytics2.default.pageView.record(baseAnalyticsPath, analyticsPageTitle + ' > ' + (0, _toTitleCase2.default)(activeFilter.period));

			period = rangeOfPeriod(activeFilter.period, date);
			chartTab = queryOptions.tab || 'views';

			var siteComponentChildren = {
				path: context.pathname,
				date: date,
				chartTab: chartTab,
				context: context,
				period: period
			};

			(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({ placeholder: _react2.default.createElement(_statsPagePlaceholder2.default, null), require: _ref3
			}, siteComponentChildren)), document.getElementById('primary'), context.store);
		}
	},

	summary: function summary(context, next) {
		var siteId = context.params.site_id;
		var siteFragment = _route2.default.getSiteFragment(context.path);
		var queryOptions = context.query;
		var contextModule = context.params.module;
		var filters = [{ path: '/stats/' + contextModule + '/' + siteId,
			altPaths: ['/stats/day/' + contextModule + '/' + siteId], id: 'stats-day',
			period: 'day' }, { path: '/stats/week/' + contextModule + '/' + siteId, id: 'stats-week', period: 'week' }, { path: '/stats/month/' + contextModule + '/' + siteId, id: 'stats-month', period: 'month' }, { path: '/stats/year/' + contextModule + '/' + siteId, id: 'stats-year', period: 'year' }];
		var date = void 0;
		var period = void 0;

		var validModules = ['posts', 'referrers', 'clicks', 'countryviews', 'authors', 'videoplays', 'videodetails', 'podcastdownloads', 'searchterms'];
		var momentSiteZone = _i18nCalypso2.default.moment();
		var basePath = _route2.default.sectionify(context.path);

		var site = (0, _selectors.getSite)(context.store.getState(), siteId);
		siteId = site ? site.ID || 0 : 0;

		var activeFilter = (0, _find3.default)(filters, function (filter) {
			return context.pathname === filter.path || filter.altPaths && -1 !== filter.altPaths.indexOf(context.pathname);
		});

		if (siteFragment && 0 === siteId) {
			// site is not in the user's site list
			window.location = '/stats';
		} else if (!activeFilter || -1 === validModules.indexOf(context.params.module)) {
			next();
		} else {
			var gmtOffset = (0, _selectors.getSiteOption)(context.store.getState(), siteId, 'gmt_offset');
			if ((0, _isFinite2.default)(gmtOffset)) {
				momentSiteZone = _i18nCalypso2.default.moment().utcOffset(gmtOffset);
			}
			if (queryOptions.startDate && _i18nCalypso2.default.moment(queryOptions.startDate).isValid()) {
				date = _i18nCalypso2.default.moment(queryOptions.startDate);
			} else {
				date = momentSiteZone.endOf(activeFilter.period);
			}
			period = rangeOfPeriod(activeFilter.period, date);

			var extraProps = context.params.module === 'videodetails' ? { postId: parseInt(queryOptions.post, 10) } : {};

			var statsQueryOptions = {};

			// All Time Summary Support
			if (queryOptions.summarize && queryOptions.num) {
				statsQueryOptions = (0, _pick3.default)(queryOptions, ['num', 'summarize']);
				statsQueryOptions.period = 'day';
			}

			_analytics2.default.pageView.record(basePath, analyticsPageTitle + ' > ' + (0, _toTitleCase2.default)(activeFilter.period) + ' > ' + (0, _toTitleCase2.default)(context.params.module));

			var props = (0, _extends3.default)({
				path: context.pathname,
				statsQueryOptions: statsQueryOptions,
				date: date,
				context: context,
				period: period
			}, extraProps);
			(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({ placeholder: _react2.default.createElement(_statsPagePlaceholder2.default, null), require: _ref4
			}, props)), document.getElementById('primary'), context.store);
		}
	},

	post: function post(context) {
		var siteId = context.params.site_id;
		var postId = parseInt(context.params.post_id, 10);
		var pathParts = context.path.split('/');
		var postOrPage = pathParts[2] === 'post' ? 'post' : 'page';

		var site = (0, _selectors.getSite)(context.store.getState(), siteId);
		siteId = site ? site.ID || 0 : 0;

		if (0 === siteId) {
			window.location = '/stats';
		} else {
			_analytics2.default.pageView.record('/stats/' + postOrPage + '/:post_id/:site', analyticsPageTitle + ' > Single ' + (0, _toTitleCase2.default)(postOrPage));

			var props = {
				path: context.path,
				postId: postId,
				context: context
			};
			(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({ placeholder: _react2.default.createElement(_statsPagePlaceholder2.default, null), require: _ref5
			}, props)), document.getElementById('primary'), context.store);
		}
	},

	follows: function follows(context) {
		var siteId = context.params.site_id;
		var FollowList = __webpack_require__("./client/lib/follow-list/index.js");
		var pageNum = context.params.page_num;
		var followList = new FollowList();
		var basePath = _route2.default.sectionify(context.path);

		var site = (0, _selectors.getSite)(context.store.getState(), siteId);
		siteId = site ? site.ID || 0 : 0;

		var siteDomain = site && typeof site.slug !== 'undefined' ? site.slug : _route2.default.getSiteFragment(context.path);

		if (0 === siteId) {
			window.location = '/stats';
		} else {
			pageNum = parseInt(pageNum, 10);

			if (!pageNum || pageNum < 1) {
				pageNum = 1;
			}

			_analytics2.default.pageView.record(basePath.replace('/' + pageNum, ''), analyticsPageTitle + ' > Followers > Comment');

			var props = {
				path: context.path,
				page: pageNum,
				perPage: 20,
				total: 10,
				domain: siteDomain,
				siteId: siteId,
				followList: followList
			};
			(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({ placeholder: _react2.default.createElement(_statsPagePlaceholder2.default, null), require: _ref6
			}, props)), document.getElementById('primary'), context.store);
		}
	},

	activityLog: function activityLog(context) {
		var state = context.store.getState();
		var siteId = (0, _selectors3.getSelectedSiteId)(state);
		var isJetpack = (0, _selectors.isJetpackSite)(state, siteId);
		var startDate = _i18nCalypso2.default.moment(context.query.startDate, 'YYYY-MM-DD').isValid() ? context.query.startDate : undefined;

		if (siteId && !isJetpack) {
			_page2.default.redirect('/stats');
		} else {
			_analytics2.default.pageView.record('/stats/activity/:site', analyticsPageTitle + ' > Activity ');

			var props = {
				path: context.path,
				siteId: siteId,
				context: context,
				startDate: startDate
			};
			(0, _reactHelpers.renderWithReduxStore)(_react2.default.createElement(_asyncLoad2.default, (0, _extends3.default)({ placeholder: _react2.default.createElement(_statsPagePlaceholder2.default, null), require: _ref7
			}, props)), document.getElementById('primary'), context.store);
		}
	}
};

/***/ }),

/***/ "./client/my-sites/stats/index.js":
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
    statsController = __webpack_require__("./client/my-sites/stats/controller.jsx"),
    config = __webpack_require__("./client/config/index.js");

module.exports = function () {
	if (config.isEnabled('jetpack/activity-log')) {
		page('/stats/activity/:site_id', controller.siteSelection, controller.navigation, statsController.activityLog);
	}
	if (config.isEnabled('manage/stats')) {
		// Stat Overview Page
		page('/stats', controller.siteSelection, controller.navigation, statsController.overview);
		page('/stats/day', controller.siteSelection, controller.navigation, statsController.overview);
		page('/stats/week', controller.siteSelection, controller.navigation, statsController.overview);
		page('/stats/month', controller.siteSelection, controller.navigation, statsController.overview);
		page('/stats/year', controller.siteSelection, controller.navigation, statsController.overview);

		// Stat Insights Page
		page('/stats/insights/:site_id', controller.siteSelection, controller.navigation, statsController.insights);

		// Stat Site Pages
		page('/stats/day/:site_id', controller.siteSelection, controller.navigation, statsController.site);
		page('/stats/week/:site_id', controller.siteSelection, controller.navigation, statsController.site);
		page('/stats/month/:site_id', controller.siteSelection, controller.navigation, statsController.site);
		page('/stats/year/:site_id', controller.siteSelection, controller.navigation, statsController.site);

		// Stat Summary Pages
		page('/stats/:module/:site_id', controller.siteSelection, controller.navigation, statsController.summary);
		page('/stats/day/:module/:site_id', controller.siteSelection, controller.navigation, statsController.summary);
		page('/stats/week/:module/:site_id', controller.siteSelection, controller.navigation, statsController.summary);
		page('/stats/month/:module/:site_id', controller.siteSelection, controller.navigation, statsController.summary);
		page('/stats/year/:module/:site_id', controller.siteSelection, controller.navigation, statsController.summary);

		// Stat Single Post Page
		page('/stats/post/:post_id/:site_id', controller.siteSelection, controller.navigation, statsController.post);
		page('/stats/page/:post_id/:site_id', controller.siteSelection, controller.navigation, statsController.post);

		// Stat Follows Page
		page('/stats/follows/comment/:site_id', controller.siteSelection, controller.navigation, statsController.follows);
		page('/stats/follows/comment/:page_num/:site_id', controller.siteSelection, controller.navigation, statsController.follows);

		// Reset first view
		if (config.isEnabled('ui/first-view/reset-route')) {
			page('/stats/reset-first-view', statsController.resetFirstView);
		}

		// Anything else should require site-selection
		page('/stats/(.*)', controller.siteSelection, controller.navigation, statsController.redirectToDefaultSitePage, controller.sites);
	}
};

/***/ }),

/***/ "./client/my-sites/stats/stats-page-placeholder/index.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _card = __webpack_require__("./client/components/card/index.jsx");

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatsPagePlaceholder = function StatsPagePlaceholder(props) {
	return _react2.default.createElement(
		'div',
		{ className: (0, _classnames2.default)('main is-wide-layout', props.className) },
		_react2.default.createElement(
			_card2.default,
			{ className: 'stats-module stats-page-placeholder__header is-loading' },
			_react2.default.createElement(
				'div',
				{ className: 'module-header' },
				_react2.default.createElement('h3', { className: 'module-header-title' })
			)
		),
		_react2.default.createElement(
			_card2.default,
			{ className: 'stats-module stats-page-placeholder__content is-loading' },
			_react2.default.createElement(
				'div',
				{ className: 'module-header' },
				_react2.default.createElement('h3', { className: 'module-header-title' })
			)
		)
	);
};

/**
 * Internal dependencies
 */
/**
 * External dependencies
 */


StatsPagePlaceholder.propTypes = {
	className: _react.PropTypes.string
};

exports.default = StatsPagePlaceholder;
module.exports = exports['default'];

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