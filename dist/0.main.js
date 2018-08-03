(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addImg = exports.addToDom = exports.login = undefined;

var _users = __webpack_require__(/*! ./users */ "./src/users.js");

var _users2 = _interopRequireDefault(_users);

var _jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = exports.login = function login(username, password) {
    var user = _users2.default[username];

    if (user && user.password === password) {
        return 'User logged in as: ' + user.name;
    }

    return 'Invalid username and/or password';
};

var addToDom = exports.addToDom = function addToDom(type, text) {
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'red';

    var element = (0, _jquery2.default)('<' + type + '>', {
        text: text,
        class: className
    });

    (0, _jquery2.default)('#root').append(element);
};

var addImg = exports.addImg = function addImg(src) {
    var img = (0, _jquery2.default)('<img>', { src: src });
    (0, _jquery2.default)('#root').append(img);
};

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    DiscoStu: {
        password: 'asdf',
        name: 'Stu Dunworth'
    },
    SassySally: {
        password: 'sass',
        name: 'Heather Newman'
    },
    DangerMouse: {
        password: 'danger',
        name: 'Danger Mouse'
    },
    DietCoke: {
        password: 'betterthanpepsi',
        name: 'Coke Floats'
    }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXNlcnMuanMiXSwibmFtZXMiOlsibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidXNlciIsInVzZXJzIiwibmFtZSIsImFkZFRvRG9tIiwidHlwZSIsInRleHQiLCJjbGFzc05hbWUiLCJlbGVtZW50IiwiY2xhc3MiLCJhcHBlbmQiLCJhZGRJbWciLCJzcmMiLCJpbWciLCJEaXNjb1N0dSIsIlNhc3N5U2FsbHkiLCJEYW5nZXJNb3VzZSIsIkRpZXRDb2tlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHdCQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsUUFBRCxFQUFXQyxRQUFYLEVBQXdCO0FBQ3pDLFFBQU1DLE9BQU9DLGdCQUFNSCxRQUFOLENBQWI7O0FBRUEsUUFBR0UsUUFBUUEsS0FBS0QsUUFBTCxLQUFrQkEsUUFBN0IsRUFBc0M7QUFDbEMsZUFBTyx3QkFBdUJDLEtBQUtFLElBQW5DO0FBQ0g7O0FBRUQsV0FBTyxrQ0FBUDtBQUNILENBUk07O0FBVUEsSUFBTUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBbUM7QUFBQSxRQUF0QkMsU0FBc0IsdUVBQVYsS0FBVTs7QUFDdkQsUUFBTUMsVUFBVSw0QkFBTUgsSUFBTixRQUFlO0FBQzNCQyxrQkFEMkI7QUFFM0JHLGVBQU9GO0FBRm9CLEtBQWYsQ0FBaEI7O0FBS0EsMEJBQUUsT0FBRixFQUFXRyxNQUFYLENBQWtCRixPQUFsQjtBQUNILENBUE07O0FBU0EsSUFBTUcsMEJBQVMsU0FBVEEsTUFBUyxDQUFDQyxHQUFELEVBQVM7QUFDM0IsUUFBTUMsTUFBTSxzQkFBRSxPQUFGLEVBQVcsRUFBQ0QsUUFBRCxFQUFYLENBQVo7QUFDQSwwQkFBRSxPQUFGLEVBQVdGLE1BQVgsQ0FBa0JHLEdBQWxCO0FBQ0gsQ0FITSxDOzs7Ozs7Ozs7Ozs7Ozs7OztrQkN0QlE7QUFDWEMsY0FBVztBQUNQZCxrQkFBVSxNQURIO0FBRVBHLGNBQU07QUFGQyxLQURBO0FBS1hZLGdCQUFZO0FBQ1JmLGtCQUFVLE1BREY7QUFFUkcsY0FBTTtBQUZFLEtBTEQ7QUFTWGEsaUJBQWE7QUFDVGhCLGtCQUFVLFFBREQ7QUFFVEcsY0FBTTtBQUZHLEtBVEY7QUFhWGMsY0FBVTtBQUNOakIsa0JBQVUsaUJBREo7QUFFTkcsY0FBTTtBQUZBO0FBYkMsQyIsImZpbGUiOiIwLm1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vycyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSAodXNlcm5hbWUsIHBhc3N3b3JkKSA9PiB7XG4gICAgY29uc3QgdXNlciA9IHVzZXJzW3VzZXJuYW1lXTtcblxuICAgIGlmKHVzZXIgJiYgdXNlci5wYXNzd29yZCA9PT0gcGFzc3dvcmQpe1xuICAgICAgICByZXR1cm4gJ1VzZXIgbG9nZ2VkIGluIGFzOiAnKyB1c2VyLm5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICdJbnZhbGlkIHVzZXJuYW1lIGFuZC9vciBwYXNzd29yZCc7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUb0RvbSA9ICh0eXBlLCB0ZXh0LCBjbGFzc05hbWUgPSAncmVkJykgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSAkKGA8JHt0eXBlfT5gLCB7IFxuICAgICAgICB0ZXh0LFxuICAgICAgICBjbGFzczogY2xhc3NOYW1lXG4gICAgfSk7XG5cbiAgICAkKCcjcm9vdCcpLmFwcGVuZChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZEltZyA9IChzcmMpID0+IHtcbiAgICBjb25zdCBpbWcgPSAkKCc8aW1nPicsIHtzcmN9KTtcbiAgICAkKCcjcm9vdCcpLmFwcGVuZChpbWcpO1xufSIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBEaXNjb1N0dSA6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdhc2RmJyxcbiAgICAgICAgbmFtZTogJ1N0dSBEdW53b3J0aCdcbiAgICB9LFxuICAgIFNhc3N5U2FsbHk6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdzYXNzJyxcbiAgICAgICAgbmFtZTogJ0hlYXRoZXIgTmV3bWFuJ1xuICAgIH0sXG4gICAgRGFuZ2VyTW91c2U6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdkYW5nZXInLFxuICAgICAgICBuYW1lOiAnRGFuZ2VyIE1vdXNlJ1xuICAgIH0sXG4gICAgRGlldENva2U6IHtcbiAgICAgICAgcGFzc3dvcmQ6ICdiZXR0ZXJ0aGFucGVwc2knLFxuICAgICAgICBuYW1lOiAnQ29rZSBGbG9hdHMnXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=