webpackJsonp([1],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_index_less__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      refreshing: false,
      switchContainer: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // setTimeout(() => { this.setState({ refreshing: true }); }, 10);
      // setTimeout(() => { this.setState({ refreshing: true }); }, 100);
      // setTimeout(() => { this.setState({ refreshing: false }); }, 3000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'button',
          {
            style: { display: 'inline-block', marginBottom: 30, border: 1 },
            onClick: function onClick() {
              return _this2.setState({ switchContainer: !_this2.state.switchContainer });
            }
          },
          'switchContainer: ',
          this.state.switchContainer ? 'true' : 'false'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__src__["a" /* default */],
          _extends({
            key: this.state.switchContainer,
            style: { height: 200, overflow: 'auto', border: '1px solid #ccc' }
          }, this.state.switchContainer ? { getScrollContainer: function getScrollContainer() {
              return document.body;
            } } : {}, {
            className: 'forTest',
            direction: 'down',
            refreshing: this.state.refreshing,
            onRefresh: function onRefresh() {
              _this2.setState({ refreshing: true });
              setTimeout(function () {
                _this2.setState({ refreshing: false });
              }, 1000);
            },
            indicator: { deactivate: '下拉' },
            damping: 150
          }),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1__src__["a" /* default */],
            _extends({
              key: this.state.switchContainer,
              style: { height: 200, overflow: 'auto', border: '1px solid #ccc' }
            }, this.state.switchContainer ? { getScrollContainer: function getScrollContainer() {
                return document.body;
              } } : {}, {
              className: 'forTest',
              direction: 'up',
              refreshing: this.state.refreshing,
              onRefresh: function onRefresh() {
                _this2.setState({ refreshing: true });
                setTimeout(function () {
                  _this2.setState({ refreshing: false });
                }, 1000);
              },
              indicator: { deactivate: '上拉' },
              damping: 150
            }),
            [1, 2, 3, 4, 5, 6, 7].map(function (i) {
              return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'div',
                { key: i, style: { textAlign: 'center', padding: 20 }, onClick: function onClick() {
                    return alert(1);
                  } },
                'item ',
                i
              );
            })
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement('div', { dangerouslySetInnerHTML: {
            __html: navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) ? '<style>#qrcode, .highlight{ display: none }</style>' : ''
          }
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })

},[30]);
//# sourceMappingURL=base.js.map