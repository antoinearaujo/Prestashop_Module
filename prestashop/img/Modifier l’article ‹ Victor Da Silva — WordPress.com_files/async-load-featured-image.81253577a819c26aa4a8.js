webpackJsonp(["async-load-featured-image"],{

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

/***/ "./client/post-editor/editor-drawer/featured-image.jsx":
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

var _actions = __webpack_require__("./client/lib/posts/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _stats = __webpack_require__("./client/lib/posts/stats.js");

var stats = _interopRequireWildcard(_stats);

var _utils = __webpack_require__("./client/lib/posts/utils.js");

var _accordion = __webpack_require__("./client/components/accordion/index.jsx");

var _accordion2 = _interopRequireDefault(_accordion);

var _editorDrawerWell = __webpack_require__("./client/post-editor/editor-drawer-well/index.jsx");

var _editorDrawerWell2 = _interopRequireDefault(_editorDrawerWell);

var _editorFeaturedImage = __webpack_require__("./client/post-editor/editor-featured-image/index.jsx");

var _editorFeaturedImage2 = _interopRequireDefault(_editorFeaturedImage);

var _dropzone = __webpack_require__("./client/post-editor/editor-featured-image/dropzone.jsx");

var _dropzone2 = _interopRequireDefault(_dropzone);

var _isDropZoneVisible = __webpack_require__("./client/state/selectors/is-drop-zone-visible.js");

var _isDropZoneVisible2 = _interopRequireDefault(_isDropZoneVisible);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Internal dependencies
 */
var EditorDrawerFeaturedImage = function (_Component) {
	(0, _inherits3.default)(EditorDrawerFeaturedImage, _Component);

	function EditorDrawerFeaturedImage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, EditorDrawerFeaturedImage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EditorDrawerFeaturedImage.__proto__ || (0, _getPrototypeOf2.default)(EditorDrawerFeaturedImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			isSelecting: false
		}, _this.startSelecting = function () {
			return _this.setState({ isSelecting: true });
		}, _this.endSelecting = function () {
			return _this.setState({ isSelecting: false });
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(EditorDrawerFeaturedImage, [{
		key: 'removeImage',
		value: function removeImage() {
			_actions2.default.edit({
				featured_image: ''
			});

			stats.recordStat('featured_image_removed');
			stats.recordEvent('Featured image removed');
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    translate = _props.translate,
			    site = _props.site,
			    post = _props.post,
			    isDrawerHidden = _props.isDrawerHidden;


			return _react2.default.createElement(
				_accordion2.default,
				{ title: translate('Featured Image'), forceExpand: isDrawerHidden, e2eTitle: 'featured-image' },
				_react2.default.createElement(
					_editorDrawerWell2.default,
					{
						label: translate('Set Featured Image'),
						empty: !site || !post || !(0, _utils.getFeaturedImageId)(post),
						onClick: this.startSelecting,
						customDropZone: _react2.default.createElement(_dropzone2.default, null),
						onRemove: this.removeImage,
						isHidden: isDrawerHidden
					},
					_react2.default.createElement(_editorFeaturedImage2.default, {
						selecting: this.state.isSelecting,
						onImageSelected: this.endSelecting,
						site: site,
						post: post
					})
				)
			);
		}
	}]);
	return EditorDrawerFeaturedImage;
}(_react.Component); /**
                      * External dependencies
                      */


EditorDrawerFeaturedImage.propTypes = {
	site: _react.PropTypes.object,
	post: _react.PropTypes.object,
	translate: _react.PropTypes.func,
	isDrawerHidden: _react.PropTypes.bool
};
EditorDrawerFeaturedImage.defaultProps = {
	isDrawerHidden: false
};
exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		isDrawerHidden: (0, _isDropZoneVisible2.default)(state, 'featuredImage')
	};
})((0, _i18nCalypso.localize)(EditorDrawerFeaturedImage));
module.exports = exports['default'];

/***/ }),

/***/ "./client/post-editor/editor-featured-image/dropzone-icon.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	return _react2.default.createElement(
		"svg",
		{ width: "55", height: "42", viewBox: "0 0 55 42", xmlns: "http://www.w3.org/2000/svg" },
		_react2.default.createElement(
			"title",
			null,
			"Featured Image"
		),
		_react2.default.createElement(
			"g",
			{ fillRule: "nonzero", fill: "#542B06" },
			_react2.default.createElement("path", {
				d: "M22 11c0-1.656 1.344-3 3-3s3 1.344 3 3-1.344 3-3 3-3-1.344-3-3zm18-7v12.33l-3.173 8.29-12.01.637L31.992 32H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4zm-4 0H4v14.888L12 10l11.79 13.1 3.174-3.7c1.596-1.864 4.48-1.864 6.074 0L36 22.852V4z"
			}),
			_react2.default.createElement("path", {
				d: "M41 16.667l3.443 9.27 9.89.406-7.762 6.136L49.24 42 41 36.52 32.76 42l2.67-9.52-7.763-6.14 9.89-.404"
			})
		)
	);
}; /**
    * External dependencies
    */


module.exports = exports["default"];

/***/ }),

/***/ "./client/post-editor/editor-featured-image/dropzone.jsx":
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

var _uniqueId2 = __webpack_require__("./node_modules/lodash/uniqueId.js");

var _uniqueId3 = _interopRequireDefault(_uniqueId2);

var _head2 = __webpack_require__("./node_modules/lodash/head.js");

var _head3 = _interopRequireDefault(_head2);

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("./node_modules/react-redux/es/index.js");

var _i18nCalypso = __webpack_require__("./node_modules/i18n-calypso/index.js");

var _dropZone = __webpack_require__("./client/components/drop-zone/index.jsx");

var _dropZone2 = _interopRequireDefault(_dropZone);

var _actions = __webpack_require__("./client/lib/media/actions.js");

var _actions2 = _interopRequireDefault(_actions);

var _store = __webpack_require__("./client/lib/media/store.js");

var _store2 = _interopRequireDefault(_store);

var _utils = __webpack_require__("./client/lib/media/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _actions3 = __webpack_require__("./client/lib/posts/actions.js");

var _actions4 = _interopRequireDefault(_actions3);

var _dropzoneIcon = __webpack_require__("./client/post-editor/editor-featured-image/dropzone-icon.jsx");

var _dropzoneIcon2 = _interopRequireDefault(_dropzoneIcon);

var _actions5 = __webpack_require__("./client/state/media/actions.js");

var _actions6 = __webpack_require__("./client/state/posts/actions.js");

var _selectors = __webpack_require__("./client/state/ui/selectors.js");

var _selectors2 = __webpack_require__("./client/state/ui/editor/selectors.js");

var _actions7 = __webpack_require__("./client/state/analytics/actions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * External dependencies
 */
var FeaturedImageDropZone = function (_Component) {
	(0, _inherits3.default)(FeaturedImageDropZone, _Component);

	function FeaturedImageDropZone() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, FeaturedImageDropZone);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FeaturedImageDropZone.__proto__ || (0, _getPrototypeOf2.default)(FeaturedImageDropZone)).call.apply(_ref, [this].concat(args))), _this), _this.onFilesDrop = function (files) {
			/**
    * Filter files for `image` media prefix and return the first image.
    *
    * At the moment we ignore all the other images that were dragged onto the DropZone
    */
			var droppedImage = (0, _head3.default)(_utils2.default.filterItemsByMimePrefix(files, 'image'));

			if (!droppedImage) {
				return false;
			}

			var transientMediaId = (0, _uniqueId3.default)('featured-image');
			var siteId = _this.props.siteId;


			var handleFeaturedImageUpload = function handleFeaturedImageUpload() {
				var media = _store2.default.get(siteId, transientMediaId);
				var isUploadInProgress = media && _utils2.default.isItemBeingUploaded(media);
				var isFailedUpload = !media;

				if (isFailedUpload) {
					_this.props.deleteMedia(siteId, transientMediaId);
				} else {
					_this.props.receiveMedia(siteId, media);
				}

				/**
     * File upload finished. No need to listen for changes anymore.
     */
				if (!isUploadInProgress) {
					_store2.default.off('change', handleFeaturedImageUpload);

					// Successful image upload.
					if (media) {
						_this.props.recordTracksEvent('calypso_editor_featured_image_upload', {
							source: 'dropzone',
							type: 'dragdrop'
						});
					}
				}

				/**
     * TODO: Redux way. What's left: figure out how to properly use `editPost`
     * and research if the whole FeaturedImage component has to be updated to
     * work properly with Redux.
     *
     * Right now `PostActions.edit` seems to be the best way to approach the problem.
     */
				// this.props.editPost( siteId, this.props.postId, { featured_image: media.ID } );

				// Cannot dispatch an action while in a dispatched action. Temporary(tm).
				setTimeout(function () {
					_actions4.default.edit({
						featured_image: media.ID
					});
				}, 0);
			};

			_store2.default.on('change', handleFeaturedImageUpload);

			_actions2.default.add(siteId, {
				ID: transientMediaId,
				fileContents: droppedImage,
				fileName: droppedImage.name
			});
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(FeaturedImageDropZone, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_dropZone2.default, {
				className: 'editor-featured-image__dropzone',
				dropZoneName: 'featuredImage',
				icon: _react2.default.createElement(_dropzoneIcon2.default, null),
				textLabel: this.props.translate('Set as Featured Image'),
				onFilesDrop: this.onFilesDrop
			});
		}
	}]);
	return FeaturedImageDropZone;
}(_react.Component);

/**
 * Internal dependencies
 */


exports.default = (0, _reactRedux.connect)(function (state) {
	return {
		siteId: (0, _selectors.getSelectedSiteId)(state),
		postId: (0, _selectors2.getEditorPostId)(state)
	};
}, {
	editPost: _actions6.editPost,
	deleteMedia: _actions5.deleteMedia,
	receiveMedia: _actions5.receiveMedia,
	recordTracksEvent: _actions7.recordTracksEvent
})((0, _i18nCalypso.localize)(FeaturedImageDropZone));
module.exports = exports['default'];

/***/ })

});