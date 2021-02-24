/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Admin.js":
/*!**********************!*\
  !*** ./src/Admin.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin)
/* harmony export */ });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/User.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Admin = /*#__PURE__*/function (_User) {
  _inherits(Admin, _User);

  var _super = _createSuper(Admin);

  function Admin(name) {
    var _this;

    var admin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.name = name;
    _this.admin = admin;
    return _this;
  }

  return Admin;
}(_User__WEBPACK_IMPORTED_MODULE_0__.default);



/***/ }),

/***/ "./src/CalendarEvent.js":
/*!******************************!*\
  !*** ./src/CalendarEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarEvent)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarEvent = function CalendarEvent(title, timeslot, weekday, participantsId) {
  _classCallCheck(this, CalendarEvent);

  CalendarEvent.counterId += 1;
  this.id = CalendarEvent.counterId;
  this.title = title;
  this.timeslot = timeslot;
  this.weekday = weekday;
  this.participantsId = participantsId;
};

_defineProperty(CalendarEvent, "counterId", 0);



/***/ }),

/***/ "./src/EventEmitter.js":
/*!*****************************!*\
  !*** ./src/EventEmitter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_app_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/app/index */ "./src/components/app/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var appComponent = new _components_app_index__WEBPACK_IMPORTED_MODULE_0__.default();

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.callbacks = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, cb) {
      if (!this.callbacks[event]) this.callbacks[event] = [];
      this.callbacks[event].push(cb);
    }
  }, {
    key: "emit",
    value: function emit(event, data) {
      var cbs = this.callbacks[event];

      if (cbs) {
        cbs.forEach(function (cb) {
          return cb(data);
        });
      }
    }
  }]);

  return EventEmitter;
}();

var eventEmitter = new EventEmitter(); // setup our listeners for event Emitter

eventEmitter.on('storeChanged', function () {
  appComponent.render();
  setTimeout(appComponent.setupPageListeners.call(appComponent), 1);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventEmitter);

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var User = function User(name) {
  _classCallCheck(this, User);

  User.counterId += 1;
  this.id = User.counterId;
  this.name = name;
};

_defineProperty(User, "counterId", 1);



/***/ }),

/***/ "./src/components/app/index.js":
/*!*************************************!*\
  !*** ./src/components/app/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calendar/index */ "./src/components/calendar/index.js");
/* harmony import */ var _create_event_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create-event/index */ "./src/components/create-event/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    _defineProperty(this, "componentsMap", {
      calendar: new _calendar_index__WEBPACK_IMPORTED_MODULE_1__.default(),
      createEvent: new _create_event_index__WEBPACK_IMPORTED_MODULE_2__.default()
    });
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var component = this.componentsMap[(0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('componentForRenderName')];

      if (component && component.render) {
        document.getElementById('application').innerHTML = component.render();
      }

      return '<div>Sorry, something went wrong!</div>';
    }
  }, {
    key: "setupPageListeners",
    value: function setupPageListeners() {
      var component = this.componentsMap[(0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('componentForRenderName')];

      if (component && component.setupPageListeners) {
        component.setupPageListeners();
      }
    }
  }]);

  return App;
}();



/***/ }),

/***/ "./src/components/calendar/index.js":
/*!******************************************!*\
  !*** ./src/components/calendar/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    _classCallCheck(this, Calendar);
  }

  _createClass(Calendar, [{
    key: "createLoginWindow",
    value: function createLoginWindow() {
      var _this = this;

      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('people');
      this.options = '';
      people.forEach(function (human) {
        _this.options += "<option value='".concat(human.id, "'>").concat(human.name, "</option>");
      });

      if (Calendar.adminMode !== null) {
        this.style = 'display:none;';
      }

      if (Calendar.adminMode === false) {
        var deleteEventButtons = document.querySelectorAll('.delete-button');
        deleteEventButtons.style.display = 'none';
      }

      return "\n    <div id=\"login-window\" style=".concat(this.style, ">\n    <h1>Please authorise</h1>\n    <select id=\"login-select\">").concat(this.options, "</select>\n    <div><button id=\"login-button\">Confirm</button></div>\n    </div>\n    ");
    }
  }, {
    key: "createFilterSelect",
    value: function createFilterSelect() {
      var _this2 = this;

      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('people');
      var filterSelectedId = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('filterSelectedId');
      this.options = '';
      people.forEach(function (human) {
        _this2.options += "<option ".concat(filterSelectedId === human.id ? 'selected' : '', " value='").concat(human.id, "'>").concat(human.name, "</option>");
      });
      return "\n        <select id=\"participants-filter\">\n            <option value='0' ".concat(filterSelectedId === 0 ? 'selected' : '', ">All members</option>\n            ").concat(this.options, "\n        </select>\n        <button id=\"new-event\">New event +</button>\n            ");
    }
  }, {
    key: "getWeekdaysMarkup",
    value: function getWeekdaysMarkup() {
      var _this3 = this;

      var weekdays = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('weekdays');
      this.result = '<div class="time-header">Time</div>';
      weekdays.forEach(function (weekday) {
        _this3.result += "<div class= \"day\"> ".concat(weekday, "</div> ");
      });
      return this.result;
    }
  }, {
    key: "getTimeslotsMarkup",
    value: function getTimeslotsMarkup() {
      var _this4 = this;

      var timeslots = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('timeslots');
      this.result = '';
      timeslots.forEach(function (timeslot) {
        _this4.result += "<div class= \"time\"> ".concat(timeslot, "</div>");
      });
      return this.result;
    }
  }, {
    key: "getCalendarBodyMarkup",
    value: function getCalendarBodyMarkup() {
      var _this5 = this;

      var events = this.filterEvent();
      this.result = '';

      var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
          var event = events.find(function (ev) {
            return ev.weekday === j && ev.timeslot === i;
          });

          if (event) {
            _this5.result += "<div class=\"active-event\" value=\"".concat(event.title, "\"> ").concat(event.title, "\n                    <button class=\"delete-button\" id='").concat(event.id, "'>X</button></div>");
          } else {
            _this5.result += '<div></div>';
          }
        };

        for (var j = 0; j < 5; j += 1) {
          _loop2(j);
        }
      };

      for (var i = 0; i < 9; i += 1) {
        _loop(i);
      }

      return this.result;
    }
  }, {
    key: "setupPageListeners",
    value: function setupPageListeners() {
      var newEventButton = document.getElementById('new-event');
      var filterPeopleSelect = document.getElementById('participants-filter');
      var deleteEventButtons = document.querySelectorAll('.delete-button');
      var loginButton = document.getElementById('login-button');
      newEventButton.addEventListener('click', function () {
        return (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.setField)('componentForRenderName', 'createEvent');
      });

      for (var i = 0; i < deleteEventButtons.length; i += 1) {
        deleteEventButtons[i].addEventListener('click', this.deleteEvent);
      }

      filterPeopleSelect.addEventListener('change', function (event) {
        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.setField)('filterSelectedId', +event.target.value);
      });
      loginButton.addEventListener('click', this.loginEvent);
    }
  }, {
    key: "loginEvent",
    value: function loginEvent() {
      this.people = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('people');
      var loginWindow = document.getElementById('login-window');
      var selectedLoginHumanId = document.getElementById('login-select').value;
      var newEventButton = document.getElementById('new-event');

      if (!this.people.find(function (human) {
        return human.id === +selectedLoginHumanId && human.admin;
      })) {
        newEventButton.style.display = 'none';
        Calendar.adminMode = false;
      } else {
        Calendar.adminMode = true;
      }

      loginWindow.style.display = 'none';
    }
  }, {
    key: "deleteEvent",
    value: function deleteEvent(browserEvent) {
      var _this6 = this;

      this.events = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('events');
      var deleteEventMessage = document.getElementById('delete-message');
      var deleteEventTitleMessage = document.getElementById('delete-title');
      var eventTitle = browserEvent.target.parentNode.attributes.value.value;
      deleteEventTitleMessage.innerHTML = eventTitle;
      deleteEventMessage.style.display = 'block';
      var cancelDelete = document.getElementById('cancel-delete');
      var сonfirmDelete = document.getElementById('confirm-delete');
      cancelDelete.addEventListener('click', function () {
        deleteEventMessage.style.display = 'none';
      });
      сonfirmDelete.addEventListener('click', function () {
        var newEvents = _this6.events.filter(function (event) {
          return event.id !== +browserEvent.target.attributes.id.value;
        });

        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.setField)('events', newEvents);
      });
    }
  }, {
    key: "filterEvent",
    value: function filterEvent() {
      var events = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('events');
      var filterSelectedId = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('filterSelectedId');

      if (filterSelectedId === 0) {
        return events;
      }

      this.filteredEvents = events.filter(function (ev) {
        return ev.participantsId.some(function (id) {
          return id === filterSelectedId;
        });
      });
      return this.filteredEvents;
    }
  }, {
    key: "render",
    value: function render() {
      return "\n<div class= \"calendar-component\">\n    ".concat(this.createLoginWindow(), "\n    <div class=\"header\">\n        <h1>Calendar</h1>\n        <div class=\"filter\">\n                ").concat(this.createFilterSelect(), "\n        </div>\n    </div>\n    <div class=\"calendar\">\n        <div class=\"weekdays\">\n                ").concat(this.getWeekdaysMarkup(), "\n        </div>\n        <div class=\"time-column\">\n                ").concat(this.getTimeslotsMarkup(), "\n        </div>\n        <div id='events-body'>\n                ").concat(this.getCalendarBodyMarkup(), "\n        </div>\n    </div>\n        <div id=\"delete-message\">\n             <p>Are you sure want to delete \"<span id=\"delete-title\"></span>\" event?</p>\n            <div>\n                <button id=\"cancel-delete\">No</button>\n                <button id=\"confirm-delete\">Yes</button>\n            </div>\n        </div>\n</div>\n            ");
    }
  }]);

  return Calendar;
}();

_defineProperty(Calendar, "adminMode", null);



/***/ }),

/***/ "./src/components/create-event/index.js":
/*!**********************************************!*\
  !*** ./src/components/create-event/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEvent)
/* harmony export */ });
/* harmony import */ var _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../CalendarEvent */ "./src/CalendarEvent.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CreateEvent = /*#__PURE__*/function () {
  function CreateEvent() {
    _classCallCheck(this, CreateEvent);
  }

  _createClass(CreateEvent, [{
    key: "createToast",
    value: function createToast() {
      this.result = "\n        <p class=\"toast\">Failed to create an event. Time slot is already booked.<button class=\"toast-close\">X</button></p>\n      ";
      return this.result;
    }
  }, {
    key: "createInput",
    value: function createInput() {
      this.result = "\n    <label for=\"event-name\">Name of the event:</label>\n    <input id=\"event-name\" type=\"text\" maxlength=\"40\" ><br>\n    ";
      return this.result;
    }
  }, {
    key: "createPeopleSelect",
    value: function createPeopleSelect() {
      var _this = this;

      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.getField)('people');
      this.options = '';
      people.forEach(function (human) {
        _this.options += "<option value='".concat(human.id, "'>").concat(human.name, "</option>");
      });
      return "\n        <label for=\"participants\">Participants:</label>\n        <select id=\"participants\" multiple>\n            <option value='0'selected>All members</option>\n            ".concat(this.options, "\n        </select><br>");
    }
  }, {
    key: "createWeekdaySelect",
    value: function createWeekdaySelect() {
      var weekdays = (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.getField)('weekdays');
      this.options = '';

      for (var i = 0; i < weekdays.length; i += 1) {
        this.options += "<option value=".concat(i, ">").concat(weekdays[i], "</option>");
      }

      return "\n        <label for=\"select-day\">Day:</label>\n        <select id =\"select-day\">\n        ".concat(this.options, "\n        </select><br>");
    }
  }, {
    key: "createTimeSelect",
    value: function createTimeSelect() {
      var timeslots = (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.getField)('timeslots');
      this.options = '';

      for (var i = 0; i < timeslots.length; i += 1) {
        this.options += "<option value=".concat(i, ">").concat(timeslots[i], "</option>");
      }

      return "\n        <label for=\"select-time\">Time:</label>\n        <select id=\"select-time\">\n        ".concat(this.options, "\n        </select><br>");
    }
  }, {
    key: "createButtons",
    value: function createButtons() {
      this.result = "\n        <div class=\"buttons\">\n        <button id=\"cancel\">Cancel</button>\n        <button id=\"create\">Create</button>\n        </div>";
      return this.result;
    }
  }, {
    key: "setupPageListeners",
    value: function setupPageListeners() {
      var _this2 = this;

      var closeToastButton = document.querySelector('.toast-close');
      var createEventButton = document.getElementById('create');
      var cancelEventButton = document.getElementById('cancel');
      closeToastButton.addEventListener('click', function () {
        return _this2.hideToast();
      });
      createEventButton.addEventListener('click', function (event) {
        event.preventDefault();

        _this2.settingNewEvent();
      });
      cancelEventButton.addEventListener('click', function (event) {
        event.preventDefault();
        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.setField)('componentForRenderName', 'calendar');
      });
    }
  }, {
    key: "settingNewEvent",
    value: function settingNewEvent() {
      this.eventObj = {};
      var eventTitle = document.getElementById('event-name').value;
      var eventParticipants = document.getElementById('participants').children;
      var eventParticipantId = [];

      for (var i = 0; i < eventParticipants.length; i += 1) {
        if (eventParticipants[i].selected) {
          eventParticipantId.push(+eventParticipants[i].attributes.value.value);
        }
      }

      var eventDays = document.getElementById('select-day').children;
      var eventWeekdayValue = '';

      for (var _i = 0; _i < eventDays.length; _i += 1) {
        if (eventDays[_i].selected) {
          eventWeekdayValue = +eventDays[_i].attributes.value.value;
        }
      }

      var eventTimes = document.getElementById('select-time').children;
      var eventTimeValue = '';

      for (var _i2 = 0; _i2 < eventTimes.length; _i2 += 1) {
        if (eventTimes[_i2].selected) {
          eventTimeValue = +eventTimes[_i2].attributes.value.value;
        }
      }

      var events = (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.getField)('events');
      var event = events.find(function (ev) {
        return ev.weekday === eventWeekdayValue && ev.timeslot === eventTimeValue;
      });

      if (event) {
        var toast = document.querySelector('.toast');
        toast.style.visibility = 'visible';
      } else if (!eventTitle) {
        var eventTitleInput = document.getElementById('event-name');
        eventTitleInput.setAttribute('placeholder', 'Required field');
        eventTitleInput.classList.add('empty-field');
      } else {
        this.eventObj = new _CalendarEvent__WEBPACK_IMPORTED_MODULE_0__.default(eventTitle, eventTimeValue, eventWeekdayValue, eventParticipantId);
        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.setField)('events', [].concat(_toConsumableArray((0,_store_index__WEBPACK_IMPORTED_MODULE_1__.getField)('events')), [this.eventObj]));
        (0,_store_index__WEBPACK_IMPORTED_MODULE_1__.setField)('componentForRenderName', 'calendar');
      }
    }
  }, {
    key: "hideToast",
    value: function hideToast() {
      this.toast = document.querySelector('.toast');
      this.toast.style.visibility = 'hidden';
    }
  }, {
    key: "render",
    value: function render() {
      return "\n    <div class=\"create-event\">\n       ".concat(this.createToast(), "\n      <form>\n        ").concat(this.createInput(), "\n        ").concat(this.createPeopleSelect(), "\n        ").concat(this.createWeekdaySelect(), "\n        ").concat(this.createTimeSelect(), "\n        ").concat(this.createButtons(), "\n      </form>\n    </div>\n        ");
    }
  }]);

  return CreateEvent;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/index */ "./src/store/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");


(0,_store_index__WEBPACK_IMPORTED_MODULE_0__.initStore)();

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initStore": () => (/* binding */ initStore),
/* harmony export */   "getField": () => (/* binding */ getField),
/* harmony export */   "setField": () => (/* binding */ setField)
/* harmony export */ });
/* harmony import */ var _EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventEmitter */ "./src/EventEmitter.js");
/* harmony import */ var _Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Admin */ "./src/Admin.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../User */ "./src/User.js");



var participants = [new _Admin__WEBPACK_IMPORTED_MODULE_1__.default('Alex'), new _User__WEBPACK_IMPORTED_MODULE_2__.default('Anastasia'), new _User__WEBPACK_IMPORTED_MODULE_2__.default('Dmitriy')];
var store = {};
var initStore = function initStore() {
  store = {
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeslots: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    people: [].concat(participants),
    events: [],
    componentForRenderName: 'calendar',
    filterSelectedId: 0
  };
  _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default.emit('storeChanged');
};
var getField = function getField(fieldname) {
  return store[fieldname];
};
var setField = function setField(fieldname, fieldValue) {
  store[fieldname] = fieldValue;
  _EventEmitter__WEBPACK_IMPORTED_MODULE_0__.default.emit('storeChanged');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".calendar-component {\n  font-family: \"Trebuchet\", sans-serif;\n  width: 1200px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\n.header {\n  display: flex;\n}\n.header h1 {\n  margin-bottom: 5px;\n}\n.header .filter {\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: 5px;\n}\n\n.filter button, .filter select {\n  width: 150px;\n  height: 30px;\n}\n.calendar {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-areas: \"w w w w w w\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\";\n  width: 1200px;\n  height: 100%;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.weekdays {\n  grid-area: w;\n  display: flex;\n  background-color: rgba(104, 107, 103, 0.815);\n  height: 50px;\n  margin-bottom: 0;\n}\n.weekdays .day,\n.weekdays .time-header {\n  width: 200px;\n  padding: 15px;\n  font-weight: bold;\n  text-align: center;\n  border: 1px solid black;\n}\n\n.time-column {\n  grid-area: t;\n  width: 200px;\n  background-color: rgba(76, 78, 75, 0.13);\n}\n.time-column .time {\n  border: 1px solid black;\n  font-weight: bold;\n  text-align: center;\n  padding: 15px;\n}\n\n#events-body {\n  grid-area: e;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(9, 1fr);\n}\n#events-body div {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  width: 200px;\n  border: 1px solid black;\n}\n#events-body .active-event {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  overflow-wrap: break-word;\n  background-color: rgba(31, 139, 16, 0.795);\n  padding-top: 5px;\n  padding-left: 5px;\n  font-size: 14px;\n  font-weight: bold;\n  border: 1px solid black;\n  vertical-align: middle;\n}\n\n.delete-button {\n  display: block;\n  visibility: hidden;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 15px;\n  right: 0;\n  padding: 0;\n  color: #d60e0e;\n  font-weight: bolder;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.active-event:hover .delete-button {\n  visibility: visible;\n}\n\n.delete-button:focus {\n  outline: none;\n  background-color: rgba(197, 100, 100, 0.664);\n}\n\n#delete-message {\n  display: none;\n  position: absolute;\n  top: 220px;\n  left: 485px;\n  background-color: rgba(104, 107, 103, 0.89);\n  width: 400px;\n  height: 200px;\n  z-index: 10000;\n  font-weight: 600;\n  overflow-wrap: break-word;\n  border: 1px solid black;\n  border-radius: 10px;\n}\n#delete-message p {\n  text-align: center;\n  font-size: 25px;\n  margin-bottom: 15px;\n}\n#delete-message div {\n  position: absolute;\n  bottom: 5%;\n  text-align: center;\n  width: 100%;\n}\n#delete-message button {\n  width: 50px;\n  height: 30px;\n  margin-right: 70px;\n  margin-left: 70px;\n}\n\n#login-window {\n  position: absolute;\n  top: 170px;\n  left: 485px;\n  width: 400px;\n  height: 200px;\n  z-index: 10000;\n  background-color: rgba(104, 107, 103, 0.815);\n  width: 400px;\n  border-radius: 10px;\n  border: 1px solid black;\n}\n#login-window h1 {\n  text-align: center;\n}\n#login-window #login-select {\n  display: block;\n  margin: auto;\n  width: 40%;\n  height: 30px;\n}\n#login-window div {\n  padding: 40px;\n}\n#login-window div #login-button {\n  display: block;\n  width: 150px;\n  height: 30px;\n  margin: auto;\n}\n\n.create-event {\n  font-family: \"Trebuchet\", sans-serif;\n  width: 600px;\n  height: 350px;\n  margin: auto;\n  font-size: 20px;\n  padding-top: 100px;\n}\n\nform {\n  padding: 10px;\n  margin: auto;\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid black;\n  background-color: rgba(156, 156, 126, 0.4);\n}\n\nlabel {\n  width: 30%;\n  display: inline-block;\n  margin: 6px;\n  padding-bottom: 20px;\n}\n\ninput {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30%;\n  height: 30px;\n}\n\nselect {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30%;\n  height: 30px;\n}\n\n#participants {\n  height: 70px;\n}\n\n.buttons {\n  display: block;\n  text-align: right;\n}\n\n.toast {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  visibility: hidden;\n  background-color: rgba(255, 0, 0, 0.329);\n  color: #fff;\n  border-radius: 10px;\n}\n.toast button {\n  float: right;\n  width: 25px;\n  height: 25px;\n  color: red;\n  font-weight: bold;\n  background-color: #ffffff81;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n}\n\n.empty-field {\n  border: 2px solid red;\n}\n\nbody {\n  background-color: honeydew;\n}", "",{"version":3,"sources":["webpack://./src/components/calendar/index.scss","webpack://./src/index.scss","webpack://./src/components/create-event/index.scss"],"names":[],"mappings":"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","sourcesContent":[".calendar-component {\r\n  font-family: 'Trebuchet', sans-serif;\r\n  width: 1200px;\r\n  height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  h1 {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .filter {\r\n    margin-left: auto;\r\n    margin-top: auto;\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n\r\n.filter {\r\n  %button-sizes {\r\n    width: 150px;\r\n    height: 30px;\r\n  }\r\n  select {\r\n    @extend %button-sizes;\r\n  }\r\n  button {\r\n    @extend %button-sizes;\r\n  }\r\n}\r\n.calendar {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  grid-template-areas:\r\n    'w w w w w w'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e';\r\n  width: 1200px;\r\n  height: 100%;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n}\r\n\r\n.weekdays {\r\n  grid-area: w;\r\n  display: flex;\r\n  background-color: rgba(104, 107, 103, 0.815);\r\n  height: 50px;\r\n  margin-bottom: 0;\r\n  .day,\r\n  .time-header {\r\n    width: 200px;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    border: 1px solid black;\r\n  }\r\n}\r\n\r\n.time-column {\r\n  grid-area: t;\r\n  width: 200px;\r\n  background-color: rgba(76, 78, 75, 0.13);\r\n  .time {\r\n    border: 1px solid black;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n#events-body {\r\n  grid-area: e;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-template-rows: repeat(9, 1fr);\r\n  div {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    width: 200px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n  .active-event {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    overflow-wrap: break-word;\r\n    background-color: rgba(31, 139, 16, 0.795);\r\n    padding-top: 5px;\r\n    padding-left: 5px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border: 1px solid black;\r\n    vertical-align: middle;\r\n  }\r\n}\r\n.delete-button {\r\n  display: block;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  top: 15px;\r\n  right: 0;\r\n  padding: 0;\r\n  color: rgb(214, 14, 14);\r\n  font-weight: bolder;\r\n  background-color: #ffffff;\r\n  border: none;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.active-event:hover {\r\n  .delete-button {\r\n    visibility: visible;\r\n  }\r\n}\r\n.delete-button:focus {\r\n  outline: none;\r\n  background-color: rgba(197, 100, 100, 0.664);\r\n}\r\n#delete-message {\r\n  display: none;\r\n  position: absolute;\r\n  top: 220px;\r\n  left: 485px;\r\n  background-color: rgba(104, 107, 103, 0.89);\r\n  width: 400px;\r\n  height: 200px;\r\n  z-index: 10000;\r\n  font-weight: 600;\r\n  overflow-wrap: break-word;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  p {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    margin-bottom: 15px;\r\n  }\r\n  div {\r\n    position: absolute;\r\n    bottom: 5%;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n  button {\r\n    width: 50px;\r\n    height: 30px;\r\n    margin-right: 70px;\r\n    margin-left: 70px;\r\n  }\r\n}\r\n\r\n#login-window {\r\n  position: absolute;\r\n  top: 170px;\r\n  left: 485px;\r\n  width: 400px;\r\n  height: 200px;\r\n  z-index: 10000;\r\n  background-color: rgba(104, 107, 103, 0.815);\r\n  width: 400px;\r\n  border-radius: 10px;\r\n  border: 1px solid black;\r\n  h1 {\r\n    text-align: center;\r\n  }\r\n  #login-select {\r\ndisplay: block;\r\nmargin: auto;\r\nwidth: 40%;\r\n  height: 30px;\r\n  }\r\n  div {\r\n    padding: 40px;\r\n  #login-button {\r\n    display: block;\r\n    width: 150px;\r\n    height: 30px;\r\n    margin: auto;\r\n  }\r\n}\r\n}","@import './components/calendar/index.scss';\r\n@import './components/create-event/index.scss';\r\n\r\nbody {\r\n  background-color: honeydew;\r\n}\r\n",".create-event {\r\n  font-family: 'Trebuchet', sans-serif;\r\n  width: 600px;\r\n  height: 350px;\r\n  margin: auto;\r\n  font-size: 20px;\r\n  padding-top: 100px;\r\n}\r\nform {\r\n  padding: 10px;\r\n  margin: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  border: 1px solid black;\r\n  background-color: rgba(156, 156, 126, 0.4);\r\n}\r\n\r\nlabel {\r\n  width: 30%;\r\n  display: inline-block;\r\n  margin: 6px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  height: 30px;\r\n}\r\n\r\nselect {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  height: 30px;\r\n}\r\n#participants {\r\n  height: 70px;\r\n}\r\n.buttons {\r\n  display: block;\r\n  text-align: right;\r\n}\r\n\r\n.toast {\r\n  width: 100%;\r\n  margin: auto;\r\n  padding: 10px;\r\n  visibility: hidden;\r\n  background-color: rgba(255, 0, 0, 0.329);\r\n  color: #fff;\r\n  border-radius: 10px;\r\n  button {\r\n    float: right;\r\n    width: 25px;\r\n    height: 25px;\r\n    color: red;\r\n    font-weight: bold;\r\n    background-color: #ffffff81;\r\n    border: none;\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n.empty-field {\r\n  border: 2px solid red;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL0FkbWluLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvQ2FsZW5kYXJFdmVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL1VzZXIuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9jb21wb25lbnRzL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZS1ldmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbIkFkbWluIiwibmFtZSIsImFkbWluIiwiVXNlciIsIkNhbGVuZGFyRXZlbnQiLCJ0aXRsZSIsInRpbWVzbG90Iiwid2Vla2RheSIsInBhcnRpY2lwYW50c0lkIiwiY291bnRlcklkIiwiaWQiLCJhcHBDb21wb25lbnQiLCJBcHAiLCJFdmVudEVtaXR0ZXIiLCJjYWxsYmFja3MiLCJldmVudCIsImNiIiwicHVzaCIsImRhdGEiLCJjYnMiLCJmb3JFYWNoIiwiZXZlbnRFbWl0dGVyIiwib24iLCJyZW5kZXIiLCJzZXRUaW1lb3V0Iiwic2V0dXBQYWdlTGlzdGVuZXJzIiwiY2FsbCIsImNhbGVuZGFyIiwiQ2FsZW5kYXIiLCJjcmVhdGVFdmVudCIsIkNyZWF0ZUV2ZW50IiwiY29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsImdldEZpZWxkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInBlb3BsZSIsIm9wdGlvbnMiLCJodW1hbiIsImFkbWluTW9kZSIsInN0eWxlIiwiZGVsZXRlRXZlbnRCdXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImRpc3BsYXkiLCJmaWx0ZXJTZWxlY3RlZElkIiwid2Vla2RheXMiLCJyZXN1bHQiLCJ0aW1lc2xvdHMiLCJldmVudHMiLCJmaWx0ZXJFdmVudCIsImkiLCJqIiwiZmluZCIsImV2IiwibmV3RXZlbnRCdXR0b24iLCJmaWx0ZXJQZW9wbGVTZWxlY3QiLCJsb2dpbkJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRGaWVsZCIsImxlbmd0aCIsImRlbGV0ZUV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsb2dpbkV2ZW50IiwibG9naW5XaW5kb3ciLCJzZWxlY3RlZExvZ2luSHVtYW5JZCIsImJyb3dzZXJFdmVudCIsImRlbGV0ZUV2ZW50TWVzc2FnZSIsImRlbGV0ZUV2ZW50VGl0bGVNZXNzYWdlIiwiZXZlbnRUaXRsZSIsInBhcmVudE5vZGUiLCJhdHRyaWJ1dGVzIiwiY2FuY2VsRGVsZXRlIiwi0YFvbmZpcm1EZWxldGUiLCJuZXdFdmVudHMiLCJmaWx0ZXIiLCJmaWx0ZXJlZEV2ZW50cyIsInNvbWUiLCJjcmVhdGVMb2dpbldpbmRvdyIsImNyZWF0ZUZpbHRlclNlbGVjdCIsImdldFdlZWtkYXlzTWFya3VwIiwiZ2V0VGltZXNsb3RzTWFya3VwIiwiZ2V0Q2FsZW5kYXJCb2R5TWFya3VwIiwiY2xvc2VUb2FzdEJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFdmVudEJ1dHRvbiIsImNhbmNlbEV2ZW50QnV0dG9uIiwiaGlkZVRvYXN0IiwicHJldmVudERlZmF1bHQiLCJzZXR0aW5nTmV3RXZlbnQiLCJldmVudE9iaiIsImV2ZW50UGFydGljaXBhbnRzIiwiY2hpbGRyZW4iLCJldmVudFBhcnRpY2lwYW50SWQiLCJzZWxlY3RlZCIsImV2ZW50RGF5cyIsImV2ZW50V2Vla2RheVZhbHVlIiwiZXZlbnRUaW1lcyIsImV2ZW50VGltZVZhbHVlIiwidG9hc3QiLCJ2aXNpYmlsaXR5IiwiZXZlbnRUaXRsZUlucHV0Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlVG9hc3QiLCJjcmVhdGVJbnB1dCIsImNyZWF0ZVBlb3BsZVNlbGVjdCIsImNyZWF0ZVdlZWtkYXlTZWxlY3QiLCJjcmVhdGVUaW1lU2VsZWN0IiwiY3JlYXRlQnV0dG9ucyIsImluaXRTdG9yZSIsInBhcnRpY2lwYW50cyIsInN0b3JlIiwiY29tcG9uZW50Rm9yUmVuZGVyTmFtZSIsImZpZWxkbmFtZSIsImZpZWxkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsSzs7Ozs7QUFDbkIsaUJBQVlDLElBQVosRUFBZ0M7QUFBQTs7QUFBQSxRQUFkQyxLQUFjLHVFQUFOLElBQU07O0FBQUE7O0FBQzlCO0FBQ0EsVUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBSDhCO0FBSS9COzs7RUFMZ0NDLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ZkQyxhLEdBR25CLHVCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QkMsT0FBN0IsRUFBc0NDLGNBQXRDLEVBQXNEO0FBQUE7O0FBQ3BESixlQUFhLENBQUNLLFNBQWQsSUFBMkIsQ0FBM0I7QUFDQSxPQUFLQyxFQUFMLEdBQVVOLGFBQWEsQ0FBQ0ssU0FBeEI7QUFDQSxPQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxPQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLE9BQUtDLGNBQUwsR0FBc0JBLGNBQXRCO0FBQ0QsQzs7Z0JBVmtCSixhLGVBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEckI7QUFFQSxJQUFNTyxZQUFZLEdBQUcsSUFBSUMsMERBQUosRUFBckI7O0lBRU1DLFk7QUFDSiwwQkFBYztBQUFBOztBQUNaLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDRDs7OztXQUVELFlBQUdDLEtBQUgsRUFBVUMsRUFBVixFQUFjO0FBQ1osVUFBSSxDQUFDLEtBQUtGLFNBQUwsQ0FBZUMsS0FBZixDQUFMLEVBQTRCLEtBQUtELFNBQUwsQ0FBZUMsS0FBZixJQUF3QixFQUF4QjtBQUM1QixXQUFLRCxTQUFMLENBQWVDLEtBQWYs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QVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE9B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QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRtaW4gZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgYWRtaW4gPSB0cnVlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWRtaW4gPSBhZG1pbjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJFdmVudCB7XG4gIHN0YXRpYyBjb3VudGVySWQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0aW1lc2xvdCwgd2Vla2RheSwgcGFydGljaXBhbnRzSWQpIHtcbiAgICBDYWxlbmRhckV2ZW50LmNvdW50ZXJJZCArPSAxO1xuICAgIHRoaXMuaWQgPSBDYWxlbmRhckV2ZW50LmNvdW50ZXJJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50aW1lc2xvdCA9IHRpbWVzbG90O1xuICAgIHRoaXMud2Vla2RheSA9IHdlZWtkYXk7XG4gICAgdGhpcy5wYXJ0aWNpcGFudHNJZCA9IHBhcnRpY2lwYW50c0lkO1xuICB9XG59XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvaW5kZXgnO1xuXG5jb25zdCBhcHBDb21wb25lbnQgPSBuZXcgQXBwKCk7XG5cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gIH1cblxuICBvbihldmVudCwgY2IpIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2V2ZW50XSkgdGhpcy5jYWxsYmFja3NbZXZlbnRdID0gW107XG4gICAgdGhpcy5jYWxsYmFja3NbZXZlbnRdLnB1c2goY2IpO1xuICB9XG5cbiAgZW1pdChldmVudCwgZGF0YSkge1xuICAgIGNvbnN0IGNicyA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMuZm9yRWFjaCgoY2IpID0+IGNiKGRhdGEpKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4vLyBzZXR1cCBvdXIgbGlzdGVuZXJzIGZvciBldmVudCBFbWl0dGVyXG5ldmVudEVtaXR0ZXIub24oJ3N0b3JlQ2hhbmdlZCcsICgpID0+IHtcbiAgYXBwQ29tcG9uZW50LnJlbmRlcigpO1xuICBzZXRUaW1lb3V0KGFwcENvbXBvbmVudC5zZXR1cFBhZ2VMaXN0ZW5lcnMuY2FsbChhcHBDb21wb25lbnQpLCAxKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudEVtaXR0ZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgICBzdGF0aWMgY291bnRlcklkID0gMVxuXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgVXNlci5jb3VudGVySWQgKz0gMTtcbiAgICAgIHRoaXMuaWQgPSBVc2VyLmNvdW50ZXJJZDtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0RmllbGQgfSBmcm9tICcuLi8uLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vY2FsZW5kYXIvaW5kZXgnO1xuaW1wb3J0IENyZWF0ZUV2ZW50IGZyb20gJy4uL2NyZWF0ZS1ldmVudC9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XG4gICAgY29tcG9uZW50c01hcCA9IHtcbiAgICAgIGNhbGVuZGFyOiBuZXcgQ2FsZW5kYXIoKSxcbiAgICAgIGNyZWF0ZUV2ZW50OiBuZXcgQ3JlYXRlRXZlbnQoKSxcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzTWFwW2dldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJyldO1xuICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVuZGVyKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHBsaWNhdGlvbicpLmlubmVySFRNTCA9IGNvbXBvbmVudC5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAnPGRpdj5Tb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmchPC9kaXY+JztcbiAgICB9XG5cbiAgICBzZXR1cFBhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNNYXBbZ2V0RmllbGQoJ2NvbXBvbmVudEZvclJlbmRlck5hbWUnKV07XG4gICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5zZXR1cFBhZ2VMaXN0ZW5lcnMpIHtcbiAgICAgICAgY29tcG9uZW50LnNldHVwUGFnZUxpc3RlbmVycygpO1xuICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldEZpZWxkLCBzZXRGaWVsZCB9IGZyb20gJy4uLy4uL3N0b3JlL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIge1xuICBzdGF0aWMgYWRtaW5Nb2RlID0gbnVsbDtcblxuICBjcmVhdGVMb2dpbldpbmRvdygpIHtcbiAgICBjb25zdCBwZW9wbGUgPSBnZXRGaWVsZCgncGVvcGxlJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgcGVvcGxlLmZvckVhY2goKGh1bWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aHVtYW4uaWR9Jz4ke2h1bWFuLm5hbWV9PC9vcHRpb24+YDtcbiAgICB9KTtcbiAgICBpZiAoQ2FsZW5kYXIuYWRtaW5Nb2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTsnO1xuICAgIH1cbiAgICBpZiAoQ2FsZW5kYXIuYWRtaW5Nb2RlID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgZGVsZXRlRXZlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1idXR0b24nKTtcbiAgICAgIGRlbGV0ZUV2ZW50QnV0dG9ucy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cImxvZ2luLXdpbmRvd1wiIHN0eWxlPSR7dGhpcy5zdHlsZX0+XG4gICAgPGgxPlBsZWFzZSBhdXRob3Jpc2U8L2gxPlxuICAgIDxzZWxlY3QgaWQ9XCJsb2dpbi1zZWxlY3RcIj4ke3RoaXMub3B0aW9uc308L3NlbGVjdD5cbiAgICA8ZGl2PjxidXR0b24gaWQ9XCJsb2dpbi1idXR0b25cIj5Db25maXJtPC9idXR0b24+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGNyZWF0ZUZpbHRlclNlbGVjdCgpIHtcbiAgICBjb25zdCBwZW9wbGUgPSBnZXRGaWVsZCgncGVvcGxlJyk7XG4gICAgY29uc3QgZmlsdGVyU2VsZWN0ZWRJZCA9IGdldEZpZWxkKCdmaWx0ZXJTZWxlY3RlZElkJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgcGVvcGxlLmZvckVhY2goKGh1bWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgKz0gYDxvcHRpb24gJHtmaWx0ZXJTZWxlY3RlZElkID09PSBodW1hbi5pZCA/ICdzZWxlY3RlZCcgOiAnJ30gdmFsdWU9JyR7aHVtYW4uaWR9Jz4ke2h1bWFuLm5hbWV9PC9vcHRpb24+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJwYXJ0aWNpcGFudHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJyAke2ZpbHRlclNlbGVjdGVkSWQgPT09IDAgPyAnc2VsZWN0ZWQnIDogJyd9PkFsbCBtZW1iZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAke3RoaXMub3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gaWQ9XCJuZXctZXZlbnRcIj5OZXcgZXZlbnQgKzwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgfVxuXG4gIGdldFdlZWtkYXlzTWFya3VwKCkge1xuICAgIGNvbnN0IHdlZWtkYXlzID0gZ2V0RmllbGQoJ3dlZWtkYXlzJyk7XG4gICAgdGhpcy5yZXN1bHQgPSAnPGRpdiBjbGFzcz1cInRpbWUtaGVhZGVyXCI+VGltZTwvZGl2Pic7XG4gICAgd2Vla2RheXMuZm9yRWFjaCgod2Vla2RheSkgPT4ge1xuICAgICAgdGhpcy5yZXN1bHQgKz0gYDxkaXYgY2xhc3M9IFwiZGF5XCI+ICR7d2Vla2RheX08L2Rpdj4gYDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGdldFRpbWVzbG90c01hcmt1cCgpIHtcbiAgICBjb25zdCB0aW1lc2xvdHMgPSBnZXRGaWVsZCgndGltZXNsb3RzJyk7XG4gICAgdGhpcy5yZXN1bHQgPSAnJztcbiAgICB0aW1lc2xvdHMuZm9yRWFjaCgodGltZXNsb3QpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ICs9IGA8ZGl2IGNsYXNzPSBcInRpbWVcIj4gJHt0aW1lc2xvdH08L2Rpdj5gO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGdldENhbGVuZGFyQm9keU1hcmt1cCgpIHtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmZpbHRlckV2ZW50KCk7XG4gICAgdGhpcy5yZXN1bHQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmluZCgoZXYpID0+IGV2LndlZWtkYXkgPT09IGogJiYgZXYudGltZXNsb3QgPT09IGkpO1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdCArPSBgPGRpdiBjbGFzcz1cImFjdGl2ZS1ldmVudFwiIHZhbHVlPVwiJHtldmVudC50aXRsZX1cIj4gJHtldmVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idXR0b25cIiBpZD0nJHtldmVudC5pZH0nPlg8L2J1dHRvbj48L2Rpdj5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzdWx0ICs9ICc8ZGl2PjwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG5cbiAgc2V0dXBQYWdlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IG5ld0V2ZW50QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1ldmVudCcpO1xuICAgIGNvbnN0IGZpbHRlclBlb3BsZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJ0aWNpcGFudHMtZmlsdGVyJyk7XG4gICAgY29uc3QgZGVsZXRlRXZlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1idXR0b24nKTtcbiAgICBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1idXR0b24nKTtcbiAgICBuZXdFdmVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NyZWF0ZUV2ZW50JykpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlRXZlbnRCdXR0b25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBkZWxldGVFdmVudEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZUV2ZW50KTtcbiAgICB9XG4gICAgZmlsdGVyUGVvcGxlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgc2V0RmllbGQoJ2ZpbHRlclNlbGVjdGVkSWQnLCArZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgICBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9naW5FdmVudCk7XG4gIH1cblxuICBsb2dpbkV2ZW50KCkge1xuICAgIHRoaXMucGVvcGxlID0gZ2V0RmllbGQoJ3Blb3BsZScpO1xuICAgIGNvbnN0IGxvZ2luV2luZG93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXdpbmRvdycpO1xuICAgIGNvbnN0IHNlbGVjdGVkTG9naW5IdW1hbklkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXNlbGVjdCcpLnZhbHVlO1xuICAgIGNvbnN0IG5ld0V2ZW50QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1ldmVudCcpO1xuICAgIGlmICghdGhpcy5wZW9wbGUuZmluZCgoaHVtYW4pID0+IGh1bWFuLmlkID09PSArc2VsZWN0ZWRMb2dpbkh1bWFuSWQgJiYgaHVtYW4uYWRtaW4pKSB7XG4gICAgICBuZXdFdmVudEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgQ2FsZW5kYXIuYWRtaW5Nb2RlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIENhbGVuZGFyLmFkbWluTW9kZSA9IHRydWU7XG4gICAgfVxuICAgIGxvZ2luV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBkZWxldGVFdmVudChicm93c2VyRXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50cyA9IGdldEZpZWxkKCdldmVudHMnKTtcbiAgICBjb25zdCBkZWxldGVFdmVudE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLW1lc3NhZ2UnKTtcbiAgICBjb25zdCBkZWxldGVFdmVudFRpdGxlTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtdGl0bGUnKTtcbiAgICBjb25zdCBldmVudFRpdGxlID0gYnJvd3NlckV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgZGVsZXRlRXZlbnRUaXRsZU1lc3NhZ2UuaW5uZXJIVE1MID0gZXZlbnRUaXRsZTtcbiAgICBkZWxldGVFdmVudE1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY29uc3QgY2FuY2VsRGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1kZWxldGUnKTtcbiAgICBjb25zdCDRgW9uZmlybURlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtLWRlbGV0ZScpO1xuICAgIGNhbmNlbERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRlbGV0ZUV2ZW50TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xuICAgINGBb25maXJtRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RXZlbnRzID0gdGhpcy5ldmVudHMuZmlsdGVyKFxuICAgICAgICAoZXZlbnQpID0+IGV2ZW50LmlkICE9PSArYnJvd3NlckV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmlkLnZhbHVlLFxuICAgICAgKTtcbiAgICAgIHNldEZpZWxkKCdldmVudHMnLCBuZXdFdmVudHMpO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyRXZlbnQoKSB7XG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RmllbGQoJ2V2ZW50cycpO1xuICAgIGNvbnN0IGZpbHRlclNlbGVjdGVkSWQgPSBnZXRGaWVsZCgnZmlsdGVyU2VsZWN0ZWRJZCcpO1xuICAgIGlmIChmaWx0ZXJTZWxlY3RlZElkID09PSAwKSB7XG4gICAgICByZXR1cm4gZXZlbnRzO1xuICAgIH1cbiAgICB0aGlzLmZpbHRlcmVkRXZlbnRzID0gKFxuICAgICAgZXZlbnRzLmZpbHRlcigoZXYpID0+IGV2LnBhcnRpY2lwYW50c0lkLnNvbWUoKGlkKSA9PiBpZCA9PT0gZmlsdGVyU2VsZWN0ZWRJZCkpKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEV2ZW50cztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuPGRpdiBjbGFzcz0gXCJjYWxlbmRhci1jb21wb25lbnRcIj5cbiAgICAke3RoaXMuY3JlYXRlTG9naW5XaW5kb3coKX1cbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgIDxoMT5DYWxlbmRhcjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuY3JlYXRlRmlsdGVyU2VsZWN0KCl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheXNcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuZ2V0V2Vla2RheXNNYXJrdXAoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5nZXRUaW1lc2xvdHNNYXJrdXAoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9J2V2ZW50cy1ib2R5Jz5cbiAgICAgICAgICAgICAgICAke3RoaXMuZ2V0Q2FsZW5kYXJCb2R5TWFya3VwKCl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZGVsZXRlLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgd2FudCB0byBkZWxldGUgXCI8c3BhbiBpZD1cImRlbGV0ZS10aXRsZVwiPjwvc3Bhbj5cIiBldmVudD88L3A+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtZGVsZXRlXCI+Tm88L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY29uZmlybS1kZWxldGVcIj5ZZXM8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbjwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IENhbGVuZGFyRXZlbnQgZnJvbSAnLi4vLi4vQ2FsZW5kYXJFdmVudCc7XG5pbXBvcnQgeyBnZXRGaWVsZCwgc2V0RmllbGQgfSBmcm9tICcuLi8uLi9zdG9yZS9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyZWF0ZUV2ZW50IHtcbiAgY3JlYXRlVG9hc3QoKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBgXG4gICAgICAgIDxwIGNsYXNzPVwidG9hc3RcIj5GYWlsZWQgdG8gY3JlYXRlIGFuIGV2ZW50LiBUaW1lIHNsb3QgaXMgYWxyZWFkeSBib29rZWQuPGJ1dHRvbiBjbGFzcz1cInRvYXN0LWNsb3NlXCI+WDwvYnV0dG9uPjwvcD5cbiAgICAgIGA7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG5cbiAgY3JlYXRlSW5wdXQoKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBgXG4gICAgPGxhYmVsIGZvcj1cImV2ZW50LW5hbWVcIj5OYW1lIG9mIHRoZSBldmVudDo8L2xhYmVsPlxuICAgIDxpbnB1dCBpZD1cImV2ZW50LW5hbWVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjQwXCIgPjxicj5cbiAgICBgO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGNyZWF0ZVBlb3BsZVNlbGVjdCgpIHtcbiAgICBjb25zdCBwZW9wbGUgPSBnZXRGaWVsZCgncGVvcGxlJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgcGVvcGxlLmZvckVhY2goKGh1bWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aHVtYW4uaWR9Jz4ke2h1bWFuLm5hbWV9PC9vcHRpb24+YDtcbiAgICB9KTtcbiAgICByZXR1cm4gYFxuICAgICAgICA8bGFiZWwgZm9yPVwicGFydGljaXBhbnRzXCI+UGFydGljaXBhbnRzOjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9XCJwYXJ0aWNpcGFudHNcIiBtdWx0aXBsZT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzAnc2VsZWN0ZWQ+QWxsIG1lbWJlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICR7dGhpcy5vcHRpb25zfVxuICAgICAgICA8L3NlbGVjdD48YnI+YDtcbiAgfVxuXG4gIGNyZWF0ZVdlZWtkYXlTZWxlY3QoKSB7XG4gICAgY29uc3Qgd2Vla2RheXMgPSBnZXRGaWVsZCgnd2Vla2RheXMnKTtcbiAgICB0aGlzLm9wdGlvbnMgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlZWtkYXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLm9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JHtpfT4ke3dlZWtkYXlzW2ldfTwvb3B0aW9uPmA7XG4gICAgfVxuICAgIHJldHVybiBgXG4gICAgICAgIDxsYWJlbCBmb3I9XCJzZWxlY3QtZGF5XCI+RGF5OjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQgPVwic2VsZWN0LWRheVwiPlxuICAgICAgICAke3RoaXMub3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+PGJyPmA7XG4gIH1cblxuICBjcmVhdGVUaW1lU2VsZWN0KCkge1xuICAgIGNvbnN0IHRpbWVzbG90cyA9IGdldEZpZWxkKCd0aW1lc2xvdHMnKTtcbiAgICB0aGlzLm9wdGlvbnMgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzbG90cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPSR7aX0+JHt0aW1lc2xvdHNbaV19PC9vcHRpb24+YDtcbiAgICB9XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGxhYmVsIGZvcj1cInNlbGVjdC10aW1lXCI+VGltZTo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwic2VsZWN0LXRpbWVcIj5cbiAgICAgICAgJHt0aGlzLm9wdGlvbnN9XG4gICAgICAgIDwvc2VsZWN0Pjxicj5gO1xuICB9XG5cbiAgY3JlYXRlQnV0dG9ucygpIHtcbiAgICB0aGlzLnJlc3VsdCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlXCI+Q3JlYXRlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG5cbiAgc2V0dXBQYWdlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGNsb3NlVG9hc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QtY2xvc2UnKTtcbiAgICBjb25zdCBjcmVhdGVFdmVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcbiAgICBjb25zdCBjYW5jZWxFdmVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcbiAgICBjbG9zZVRvYXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5oaWRlVG9hc3QoKSk7XG4gICAgY3JlYXRlRXZlbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnNldHRpbmdOZXdFdmVudCgpO1xuICAgIH0pO1xuICAgIGNhbmNlbEV2ZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgc2V0RmllbGQoJ2NvbXBvbmVudEZvclJlbmRlck5hbWUnLCAnY2FsZW5kYXInKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldHRpbmdOZXdFdmVudCgpIHtcbiAgICB0aGlzLmV2ZW50T2JqID0ge307XG4gICAgY29uc3QgZXZlbnRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudC1uYW1lJykudmFsdWU7XG4gICAgY29uc3QgZXZlbnRQYXJ0aWNpcGFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnRzJykuY2hpbGRyZW47XG4gICAgY29uc3QgZXZlbnRQYXJ0aWNpcGFudElkID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudFBhcnRpY2lwYW50cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50UGFydGljaXBhbnRzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgIGV2ZW50UGFydGljaXBhbnRJZC5wdXNoKCtldmVudFBhcnRpY2lwYW50c1tpXS5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudERheXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LWRheScpLmNoaWxkcmVuO1xuICAgIGxldCBldmVudFdlZWtkYXlWYWx1ZSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnREYXlzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZXZlbnREYXlzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgIGV2ZW50V2Vla2RheVZhbHVlID0gK2V2ZW50RGF5c1tpXS5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBldmVudFRpbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC10aW1lJykuY2hpbGRyZW47XG4gICAgbGV0IGV2ZW50VGltZVZhbHVlID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudFRpbWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZXZlbnRUaW1lc1tpXS5zZWxlY3RlZCkge1xuICAgICAgICBldmVudFRpbWVWYWx1ZSA9ICtldmVudFRpbWVzW2ldLmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEZpZWxkKCdldmVudHMnKTtcbiAgICBjb25zdCBldmVudCA9IChcbiAgICAgIGV2ZW50cy5maW5kKChldikgPT4gZXYud2Vla2RheSA9PT0gZXZlbnRXZWVrZGF5VmFsdWUgJiYgZXYudGltZXNsb3QgPT09IGV2ZW50VGltZVZhbHVlKSk7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdCcpO1xuICAgICAgdG9hc3Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9IGVsc2UgaWYgKCFldmVudFRpdGxlKSB7XG4gICAgICBjb25zdCBldmVudFRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnQtbmFtZScpO1xuICAgICAgZXZlbnRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUmVxdWlyZWQgZmllbGQnKTtcbiAgICAgIGV2ZW50VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCdlbXB0eS1maWVsZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmV2ZW50T2JqID0gbmV3IENhbGVuZGFyRXZlbnQoZXZlbnRUaXRsZSwgZXZlbnRUaW1lVmFsdWUsXG4gICAgICAgIGV2ZW50V2Vla2RheVZhbHVlLCBldmVudFBhcnRpY2lwYW50SWQpO1xuICAgICAgc2V0RmllbGQoJ2V2ZW50cycsIFsuLi5nZXRGaWVsZCgnZXZlbnRzJyksIHRoaXMuZXZlbnRPYmpdKTtcbiAgICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XG4gICAgfVxuICB9XG5cbiAgaGlkZVRvYXN0KCkge1xuICAgIHRoaXMudG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QnKTtcbiAgICB0aGlzLnRvYXN0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJjcmVhdGUtZXZlbnRcIj5cbiAgICAgICAke3RoaXMuY3JlYXRlVG9hc3QoKX1cbiAgICAgIDxmb3JtPlxuICAgICAgICAke3RoaXMuY3JlYXRlSW5wdXQoKX1cbiAgICAgICAgJHt0aGlzLmNyZWF0ZVBlb3BsZVNlbGVjdCgpfVxuICAgICAgICAke3RoaXMuY3JlYXRlV2Vla2RheVNlbGVjdCgpfVxuICAgICAgICAke3RoaXMuY3JlYXRlVGltZVNlbGVjdCgpfVxuICAgICAgICAke3RoaXMuY3JlYXRlQnV0dG9ucygpfVxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgICAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuL3N0b3JlL2luZGV4JztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuaW5pdFN0b3JlKCk7XG4iLCJpbXBvcnQgZXZlbnRFbWl0dGVyIGZyb20gJy4uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vQWRtaW4nO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vVXNlcic7XG5cbmNvbnN0IHBhcnRpY2lwYW50cyA9IFtcbiAgbmV3IEFkbWluKCdBbGV4JyksXG4gIG5ldyBVc2VyKCdBbmFzdGFzaWEnKSxcbiAgbmV3IFVzZXIoJ0RtaXRyaXknKSxcbl07XG5cbmxldCBzdG9yZSA9IHt9O1xuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xuICBzdG9yZSA9IHtcbiAgICB3ZWVrZGF5czogW1xuICAgICAgJ01vbmRheScsXG4gICAgICAnVHVlc2RheScsXG4gICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICdUaHVyc2RheScsXG4gICAgICAnRnJpZGF5JyxcbiAgICBdLFxuICAgIHRpbWVzbG90czogW1xuICAgICAgJzEwOjAwJyxcbiAgICAgICcxMTowMCcsXG4gICAgICAnMTI6MDAnLFxuICAgICAgJzEzOjAwJyxcbiAgICAgICcxNDowMCcsXG4gICAgICAnMTU6MDAnLFxuICAgICAgJzE2OjAwJyxcbiAgICAgICcxNzowMCcsXG4gICAgICAnMTg6MDAnLFxuICAgIF0sXG4gICAgcGVvcGxlOiBbLi4ucGFydGljaXBhbnRzXSxcblxuICAgIGV2ZW50czogW10sXG4gICAgY29tcG9uZW50Rm9yUmVuZGVyTmFtZTogJ2NhbGVuZGFyJyxcbiAgICBmaWx0ZXJTZWxlY3RlZElkOiAwLFxuICB9O1xuICBldmVudEVtaXR0ZXIuZW1pdCgnc3RvcmVDaGFuZ2VkJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RmllbGQgPSAoZmllbGRuYW1lKSA9PiBzdG9yZVtmaWVsZG5hbWVdO1xuXG5leHBvcnQgY29uc3Qgc2V0RmllbGQgPSAoZmllbGRuYW1lLCBmaWVsZFZhbHVlKSA9PiB7XG4gIHN0b3JlW2ZpZWxkbmFtZV0gPSBmaWVsZFZhbHVlO1xuICBldmVudEVtaXR0ZXIuZW1pdCgnc3RvcmVDaGFuZ2VkJyk7XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FsZW5kYXItY29tcG9uZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhlYWRlciBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5oZWFkZXIgLmZpbHRlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5maWx0ZXIgYnV0dG9uLCAuZmlsdGVyIHNlbGVjdCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5jYWxlbmRhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIncgdyB3IHcgdyB3XFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIjtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLndlZWtkYXlzIHtcXG4gIGdyaWQtYXJlYTogdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODE1KTtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi53ZWVrZGF5cyAuZGF5LFxcbi53ZWVrZGF5cyAudGltZS1oZWFkZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aW1lLWNvbHVtbiB7XFxuICBncmlkLWFyZWE6IHQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCA3OCwgNzUsIDAuMTMpO1xcbn1cXG4udGltZS1jb2x1bW4gLnRpbWUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbiNldmVudHMtYm9keSB7XFxuICBncmlkLWFyZWE6IGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDFmcik7XFxufVxcbiNldmVudHMtYm9keSBkaXYge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNldmVudHMtYm9keSAuYWN0aXZlLWV2ZW50IHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAxMzksIDE2LCAwLjc5NSk7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjZDYwZTBlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUtZXZlbnQ6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAxMDAsIDEwMCwgMC42NjQpO1xcbn1cXG5cXG4jZGVsZXRlLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjIwcHg7XFxuICBsZWZ0OiA0ODVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44OSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI2RlbGV0ZS1tZXNzYWdlIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuI2RlbGV0ZS1tZXNzYWdlIGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNkZWxldGUtbWVzc2FnZSBidXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XFxuICBtYXJnaW4tbGVmdDogNzBweDtcXG59XFxuXFxuI2xvZ2luLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE3MHB4O1xcbiAgbGVmdDogNDg1cHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODE1KTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI2xvZ2luLXdpbmRvdyBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNsb2dpbi13aW5kb3cgI2xvZ2luLXNlbGVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbiNsb2dpbi13aW5kb3cgZGl2IHtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcbiNsb2dpbi13aW5kb3cgZGl2ICNsb2dpbi1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5jcmVhdGUtZXZlbnQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMTU2LCAxMjYsIDAuNCk7XFxufVxcblxcbmxhYmVsIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuI3BhcnRpY2lwYW50cyB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi50b2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zMjkpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4udG9hc3QgYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVtcHR5LWZpZWxkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZS1ldmVudC9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0NBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7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LDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEMExGOztBQ3hMQTtFQUNFLFlBQUE7QUQyTEY7O0FDekxBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FENExGOztBQ3pMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUQ0TEY7QUMzTEU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUQ2TEo7O0FDMUxBO0VBQ0UscUJBQUE7QUQ2TEY7O0FBaFFBO0VBQ0UsMEJBQUE7QUFtUUZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhbGVuZGFyLWNvbXBvbmVudCB7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCcsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTIwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWx0ZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyIHtcXHJcXG4gICVidXR0b24tc2l6ZXMge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIHNlbGVjdCB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbi1zaXplcztcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbi1zaXplcztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNhbGVuZGFyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAndyB3IHcgdyB3IHcnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnO1xcclxcbiAgd2lkdGg6IDEyMDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla2RheXMge1xcclxcbiAgZ3JpZC1hcmVhOiB3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44MTUpO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIC5kYXksXFxyXFxuICAudGltZS1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGltZS1jb2x1bW4ge1xcclxcbiAgZ3JpZC1hcmVhOiB0O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgNzgsIDc1LCAwLjEzKTtcXHJcXG4gIC50aW1lIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNldmVudHMtYm9keSB7XFxyXFxuICBncmlkLWFyZWE6IGU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDFmcik7XFxyXFxuICBkaXYge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtZXZlbnQge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMTM5LCAxNiwgMC43OTUpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB9XFxyXFxufVxcclxcbi5kZWxldGUtYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogcmdiKDIxNCwgMTQsIDE0KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWV2ZW50OmhvdmVyIHtcXHJcXG4gIC5kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmRlbGV0ZS1idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAxMDAsIDEwMCwgMC42NjQpO1xcclxcbn1cXHJcXG4jZGVsZXRlLW1lc3NhZ2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjIwcHg7XFxyXFxuICBsZWZ0OiA0ODVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44OSk7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgei1pbmRleDogMTAwMDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA1JTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNsb2dpbi13aW5kb3cge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxNzBweDtcXHJcXG4gIGxlZnQ6IDQ4NXB4O1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHotaW5kZXg6IDEwMDAwO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDEwNywgMTAzLCAwLjgxNSk7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBoMSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gICNsb2dpbi1zZWxlY3Qge1xcclxcbmRpc3BsYXk6IGJsb2NrO1xcclxcbm1hcmdpbjogYXV0bztcXHJcXG53aWR0aDogNDAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgcGFkZGluZzogNDBweDtcXHJcXG4gICNsb2dpbi1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gIH1cXHJcXG59XFxyXFxufVwiLFwiQGltcG9ydCAnLi9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9jcmVhdGUtZXZlbnQvaW5kZXguc2Nzcyc7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcXHJcXG59XFxyXFxuXCIsXCIuY3JlYXRlLWV2ZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogMzUwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcbmZvcm0ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDE1NiwgMTI2LCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiA2cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbiNwYXJ0aWNpcGFudHMge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG4uYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9hc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzI5KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4MTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbi5lbXB0eS1maWVsZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==