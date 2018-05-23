webpackJsonp([0],{

/***/ 16:
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
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Lv = function (_React$Component) {
  _inherits(Lv, _React$Component);

  function Lv() {
    _classCallCheck(this, Lv);

    return _possibleConstructorReturn(this, (Lv.__proto__ || Object.getPrototypeOf(Lv)).apply(this, arguments));
  }

  _createClass(Lv, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.pullToRefresh) {
        this.forceUpdate();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var child = this.props.children;
      if (this.props.pullToRefresh) {
        child = __WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(this.props.pullToRefresh, {
          getScrollContainer: function getScrollContainer() {
            return _this2.lv;
          }
        }, child);
      }
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        { ref: function ref(el) {
            return _this2.lv = el;
          }, style: { height: 200, border: 1, overflow: 'auto' } },
        child
      );
    }
  }]);

  return Lv;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    var _ref;

    var _temp, _this3, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this3), _this3.state = {
      refreshing: false
    }, _temp), _possibleConstructorReturn(_this3, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.style.overflowY = navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) ? 'hidden' : 'auto';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        Lv,
        {
          pullToRefresh: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__src__["a" /* default */], {
            className: 'forTest',
            direction: 'up',
            refreshing: this.state.refreshing,
            onRefresh: function onRefresh() {
              _this4.setState({ refreshing: true });
              setTimeout(function () {
                _this4.setState({ refreshing: false });
              }, 1000);
            }
          })
        },
        [1, 2, 3, 4, 5, 6, 7].map(function (i) {
          return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'div',
            { key: i, style: { textAlign: 'center', padding: 20 } },
            'item ',
            i
          );
        })
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_3_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(App, null), document.getElementById('__react-content'));

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ })

},[31]);
//# sourceMappingURL=base1.js.map