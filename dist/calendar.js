/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    _classCallCheck(this, Calendar);
  }

  _createClass(Calendar, [{
    key: "createFilterSelect",
    value: function createFilterSelect() {
      var _this = this;

      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('people');
      var filterSelectedId = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('filterSelectedId');
      this.options = '';
      people.forEach(function (human) {
        _this.options += "<option ".concat(filterSelectedId === human.id ? 'selected' : '', " value='").concat(human.id, "'>").concat(human.name, "</option>");
      });
      return "\n        <select id=\"participants-filter\">\n            <option value='0' ".concat(filterSelectedId === 0 ? 'selected' : '', ">All members</option>\n            ").concat(this.options, "\n        </select>\n        <button id=\"new-event\">New event +</button>\n            ");
    }
  }, {
    key: "getWeekdaysMarkup",
    value: function getWeekdaysMarkup() {
      var _this2 = this;

      var weekdays = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('weekdays');
      this.result = '<div class="time-header">Time</div>';
      weekdays.forEach(function (weekday) {
        _this2.result += "<div class= \"day\"> ".concat(weekday, "</div> ");
      });
      return this.result;
    }
  }, {
    key: "getTimeslotsMarkup",
    value: function getTimeslotsMarkup() {
      var _this3 = this;

      var timeslots = (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.getField)('timeslots');
      this.result = '';
      timeslots.forEach(function (timeslot) {
        _this3.result += "<div class= \"time\"> ".concat(timeslot, "</div>");
      });
      return this.result;
    }
  }, {
    key: "getCalendarBodyMarkup",
    value: function getCalendarBodyMarkup() {
      var _this4 = this;

      var events = this.filterEvent();
      this.result = '';

      var _loop = function _loop(i) {
        var _loop2 = function _loop2(j) {
          var event = events.find(function (ev) {
            return ev.weekday === j && ev.timeslot === i;
          });

          if (event) {
            _this4.result += "<div class=\"active-event\" value=\"".concat(event.title, "\"> ").concat(event.title, "\n                    <button class=\"delete-button\" id='").concat(event.id, "'>X</button></div>");
          } else {
            _this4.result += '<div></div>';
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
      newEventButton.addEventListener('click', function () {
        return (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.setField)('componentForRenderName', 'createEvent');
      });

      for (var i = 0; i < deleteEventButtons.length; i += 1) {
        deleteEventButtons[i].addEventListener('click', this.deleteEvent);
      }

      filterPeopleSelect.addEventListener('change', function (event) {
        (0,_store_index__WEBPACK_IMPORTED_MODULE_0__.setField)('filterSelectedId', +event.target.value);
      });
    }
  }, {
    key: "deleteEvent",
    value: function deleteEvent(browserEvent) {
      var _this5 = this;

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
        var newEvents = _this5.events.filter(function (event) {
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
      return "\n<div class= \"calendar-component\">\n    <div class=\"header\">\n        <h1>Calendar</h1>\n        <div class=\"filter\">\n                ".concat(this.createFilterSelect(), "\n        </div>\n    </div>\n    <div class=\"calendar\">\n        <div class=\"weekdays\">\n                ").concat(this.getWeekdaysMarkup(), "\n        </div>\n        <div class=\"time-column\">\n                ").concat(this.getTimeslotsMarkup(), "\n        </div>\n        <div id='events-body'>\n                ").concat(this.getCalendarBodyMarkup(), "\n        </div>\n    </div>\n        <div id=\"delete-message\">\n             <p>Are you sure want to delete \"<span id=\"delete-title\"></span>\" event?</p>\n            <div>\n                <button id=\"cancel-delete\">No</button>\n                <button id=\"confirm-delete\">Yes</button>\n            </div>\n        </div>\n</div>\n            ");
    }
  }]);

  return Calendar;
}();



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
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ "./src/models.js");
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
        this.eventObj = new _models__WEBPACK_IMPORTED_MODULE_0__.default(eventTitle, eventTimeValue, eventWeekdayValue, eventParticipantId);
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

/***/ "./src/models.js":
/*!***********************!*\
  !*** ./src/models.js ***!
  \***********************/
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

var store = {};
var initStore = function initStore() {
  store = {
    weekdays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    timeslots: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
    people: [{
      id: 1,
      name: 'Alex'
    }, {
      id: 2,
      name: 'Anastasia'
    }, {
      id: 3,
      name: 'Dmitriy'
    }],
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
___CSS_LOADER_EXPORT___.push([module.id, ".calendar-component {\n  font-family: \"Trebuchet\", sans-serif;\n  width: 1200px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\n.header {\n  display: flex;\n}\n.header h1 {\n  margin-bottom: 5px;\n}\n.header .filter {\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: 5px;\n}\n\n.filter button, .filter select {\n  width: 150px;\n  height: 30px;\n}\n.calendar {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-areas: \"w w w w w w\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\";\n  width: 1200px;\n  height: 100%;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.weekdays {\n  grid-area: w;\n  display: flex;\n  background-color: rgba(104, 107, 103, 0.815);\n  height: 50px;\n  margin-bottom: 0;\n}\n.weekdays .day,\n.weekdays .time-header {\n  width: 200px;\n  padding: 15px;\n  font-weight: bold;\n  text-align: center;\n  border: 1px solid black;\n}\n\n.time-column {\n  grid-area: t;\n  width: 200px;\n  background-color: rgba(76, 78, 75, 0.13);\n}\n.time-column .time {\n  border: 1px solid black;\n  font-weight: bold;\n  text-align: center;\n  padding: 15px;\n}\n\n#events-body {\n  grid-area: e;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(9, 1fr);\n}\n#events-body div {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  width: 200px;\n  border: 1px solid black;\n}\n#events-body .active-event {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  overflow-wrap: break-word;\n  background-color: rgba(31, 139, 16, 0.795);\n  padding-top: 5px;\n  padding-left: 5px;\n  font-size: 14px;\n  font-weight: bold;\n  border: 1px solid black;\n  vertical-align: middle;\n}\n\n.delete-button {\n  display: block;\n  visibility: hidden;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 15px;\n  right: 0;\n  padding: 0;\n  color: #d60e0e;\n  font-weight: bolder;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.active-event:hover .delete-button {\n  visibility: visible;\n}\n\n.delete-button:focus {\n  outline: none;\n  background-color: rgba(197, 100, 100, 0.664);\n}\n\n#delete-message {\n  display: none;\n  position: absolute;\n  top: 220px;\n  left: 485px;\n  background-color: rgba(104, 107, 103, 0.89);\n  width: 400px;\n  height: 200px;\n  z-index: 10000;\n  font-weight: 600;\n  overflow-wrap: break-word;\n  border: 1px solid black;\n  border-radius: 10px;\n}\n#delete-message p {\n  text-align: center;\n  font-size: 25px;\n  margin-bottom: 15px;\n}\n#delete-message div {\n  position: absolute;\n  bottom: 5%;\n  text-align: center;\n  width: 100%;\n}\n#delete-message button {\n  width: 50px;\n  height: 30px;\n  margin-right: 70px;\n  margin-left: 70px;\n}\n\n.create-event {\n  font-family: \"Trebuchet\", sans-serif;\n  width: 600px;\n  height: 350px;\n  margin: auto;\n  font-size: 20px;\n  padding-top: 100px;\n}\n\nform {\n  padding: 10px;\n  margin: auto;\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid black;\n  background-color: rgba(156, 156, 126, 0.4);\n}\n\nlabel {\n  width: 30%;\n  display: inline-block;\n  margin: 6px;\n  padding-bottom: 20px;\n}\n\ninput {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30%;\n  height: 30px;\n}\n\nselect {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30%;\n  height: 30px;\n}\n\n#participants {\n  height: 70px;\n}\n\n.buttons {\n  display: block;\n  text-align: right;\n}\n\n.toast {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  visibility: hidden;\n  background-color: rgba(255, 0, 0, 0.329);\n  color: #fff;\n  border-radius: 10px;\n}\n.toast button {\n  float: right;\n  width: 25px;\n  height: 25px;\n  color: red;\n  font-weight: bold;\n  background-color: #ffffff81;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n}\n\n.empty-field {\n  border: 2px solid red;\n}\n\nbody {\n  background-color: honeydew;\n}", "",{"version":3,"sources":["webpack://./src/components/calendar/index.scss","webpack://./src/index.scss","webpack://./src/components/create-event/index.scss"],"names":[],"mappings":"AAAA;EACE,oCAAA;EACA,aAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;ACCF;;ADEA;EACE,aAAA;ACCF;ADAE;EACE,kBAAA;ACEJ;ADCE;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;ACCJ;;ADIE;EACE,YAAA;EACA,YAAA;ACDJ;ADUA;EACE,aAAA;EACA,qCAAA;EACA,mCAAA;EACA,gKACE;EAUF,aAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;AClBF;;ADqBA;EACE,YAAA;EACA,aAAA;EACA,4CAAA;EACA,YAAA;EACA,gBAAA;AClBF;ADmBE;;EAEE,YAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,uBAAA;ACjBJ;;ADqBA;EACE,YAAA;EACA,YAAA;EACA,wCAAA;AClBF;ADmBE;EACE,uBAAA;EACA,iBAAA;EACA,kBAAA;EACA,aAAA;ACjBJ;;ADqBA;EACE,YAAA;EACA,aAAA;EACA,qCAAA;EACA,kCAAA;AClBF;ADmBE;EACE,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,SAAA;EACA,YAAA;EACA,uBAAA;ACjBJ;ADoBE;EACE,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,kBAAA;EACA,yBAAA;EACA,0CAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;EACA,iBAAA;EACA,uBAAA;EACA,sBAAA;AClBJ;;ADqBA;EACE,cAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;EACA,cAAA;EACA,mBAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;AClBF;;ADsBE;EACE,mBAAA;ACnBJ;;ADsBA;EACE,aAAA;EACA,4CAAA;ACnBF;;ADqBA;EACE,aAAA;EACA,kBAAA;EACA,UAAA;EACA,WAAA;EACA,2CAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,yBAAA;EACA,uBAAA;EACA,mBAAA;AClBF;ADmBE;EACE,kBAAA;EACA,eAAA;EACA,mBAAA;ACjBJ;ADmBE;EACE,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,WAAA;ACjBJ;ADmBE;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,iBAAA;ACjBJ;;ACvJA;EACE,oCAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;AD0JF;;ACxJA;EACE,aAAA;EACA,YAAA;EACA,WAAA;EACA,mBAAA;EACA,uBAAA;EACA,0CAAA;AD2JF;;ACxJA;EACE,UAAA;EACA,qBAAA;EACA,WAAA;EACA,oBAAA;AD2JF;;ACxJA;EACE,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,UAAA;EACA,YAAA;AD2JF;;ACxJA;EACE,8BAAA;EACA,2BAAA;EACA,0BAAA;EACA,sBAAA;EACA,UAAA;EACA,YAAA;AD2JF;;ACzJA;EACE,YAAA;AD4JF;;AC1JA;EACE,cAAA;EACA,iBAAA;AD6JF;;AC1JA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,wCAAA;EACA,WAAA;EACA,mBAAA;AD6JF;AC5JE;EACE,YAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,iBAAA;EACA,2BAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;AD8JJ;;AC3JA;EACE,qBAAA;AD8JF;;AAjOA;EACE,0BAAA;AAoOF","sourcesContent":[".calendar-component {\r\n  font-family: 'Trebuchet', sans-serif;\r\n  width: 1200px;\r\n  height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  h1 {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .filter {\r\n    margin-left: auto;\r\n    margin-top: auto;\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n\r\n.filter {\r\n  %button-sizes {\r\n    width: 150px;\r\n    height: 30px;\r\n  }\r\n  select {\r\n    @extend %button-sizes;\r\n  }\r\n  button {\r\n    @extend %button-sizes;\r\n  }\r\n}\r\n.calendar {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  grid-template-areas:\r\n    'w w w w w w'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e';\r\n  width: 1200px;\r\n  height: 100%;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n}\r\n\r\n.weekdays {\r\n  grid-area: w;\r\n  display: flex;\r\n  background-color: rgba(104, 107, 103, 0.815);\r\n  height: 50px;\r\n  margin-bottom: 0;\r\n  .day,\r\n  .time-header {\r\n    width: 200px;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    border: 1px solid black;\r\n  }\r\n}\r\n\r\n.time-column {\r\n  grid-area: t;\r\n  width: 200px;\r\n  background-color: rgba(76, 78, 75, 0.13);\r\n  .time {\r\n    border: 1px solid black;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n#events-body {\r\n  grid-area: e;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-template-rows: repeat(9, 1fr);\r\n  div {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    width: 200px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n  .active-event {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    overflow-wrap: break-word;\r\n    background-color: rgba(31, 139, 16, 0.795);\r\n    padding-top: 5px;\r\n    padding-left: 5px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border: 1px solid black;\r\n    vertical-align: middle;\r\n  }\r\n}\r\n.delete-button {\r\n  display: block;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  top: 15px;\r\n  right: 0;\r\n  padding: 0;\r\n  color: rgb(214, 14, 14);\r\n  font-weight: bolder;\r\n  background-color: #ffffff;\r\n  border: none;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.active-event:hover {\r\n  .delete-button {\r\n    visibility: visible;\r\n  }\r\n}\r\n.delete-button:focus {\r\n  outline: none;\r\n  background-color: rgba(197, 100, 100, 0.664);\r\n}\r\n#delete-message {\r\n  display: none;\r\n  position: absolute;\r\n  top: 220px;\r\n  left: 485px;\r\n  background-color: rgba(104, 107, 103, 0.89);\r\n  width: 400px;\r\n  height: 200px;\r\n  z-index: 10000;\r\n  font-weight: 600;\r\n  overflow-wrap: break-word;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  p {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    margin-bottom: 15px;\r\n  }\r\n  div {\r\n    position: absolute;\r\n    bottom: 5%;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n  button {\r\n    width: 50px;\r\n    height: 30px;\r\n    margin-right: 70px;\r\n    margin-left: 70px;\r\n  }\r\n}\r\n","@import './components/calendar/index.scss';\r\n@import './components/create-event/index.scss';\r\n\r\nbody {\r\n  background-color: honeydew;\r\n}\r\n",".create-event {\r\n  font-family: 'Trebuchet', sans-serif;\r\n  width: 600px;\r\n  height: 350px;\r\n  margin: auto;\r\n  font-size: 20px;\r\n  padding-top: 100px;\r\n}\r\nform {\r\n  padding: 10px;\r\n  margin: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  border: 1px solid black;\r\n  background-color: rgba(156, 156, 126, 0.4);\r\n}\r\n\r\nlabel {\r\n  width: 30%;\r\n  display: inline-block;\r\n  margin: 6px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  height: 30px;\r\n}\r\n\r\nselect {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  height: 30px;\r\n}\r\n#participants {\r\n  height: 70px;\r\n}\r\n.buttons {\r\n  display: block;\r\n  text-align: right;\r\n}\r\n\r\n.toast {\r\n  width: 100%;\r\n  margin: auto;\r\n  padding: 10px;\r\n  visibility: hidden;\r\n  background-color: rgba(255, 0, 0, 0.329);\r\n  color: #fff;\r\n  border-radius: 10px;\r\n  button {\r\n    float: right;\r\n    width: 25px;\r\n    height: 25px;\r\n    color: red;\r\n    font-weight: bold;\r\n    background-color: #ffffff81;\r\n    border: none;\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n.empty-field {\r\n  border: 2px solid red;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLWV2ZW50L2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9tb2RlbHMuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiYXBwQ29tcG9uZW50IiwiQXBwIiwiRXZlbnRFbWl0dGVyIiwiY2FsbGJhY2tzIiwiZXZlbnQiLCJjYiIsInB1c2giLCJkYXRhIiwiY2JzIiwiZm9yRWFjaCIsImV2ZW50RW1pdHRlciIsIm9uIiwicmVuZGVyIiwic2V0VGltZW91dCIsInNldHVwUGFnZUxpc3RlbmVycyIsImNhbGwiLCJjYWxlbmRhciIsIkNhbGVuZGFyIiwiY3JlYXRlRXZlbnQiLCJDcmVhdGVFdmVudCIsImNvbXBvbmVudCIsImNvbXBvbmVudHNNYXAiLCJnZXRGaWVsZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJwZW9wbGUiLCJmaWx0ZXJTZWxlY3RlZElkIiwib3B0aW9ucyIsImh1bWFuIiwiaWQiLCJuYW1lIiwid2Vla2RheXMiLCJyZXN1bHQiLCJ3ZWVrZGF5IiwidGltZXNsb3RzIiwidGltZXNsb3QiLCJldmVudHMiLCJmaWx0ZXJFdmVudCIsImkiLCJqIiwiZmluZCIsImV2IiwidGl0bGUiLCJuZXdFdmVudEJ1dHRvbiIsImZpbHRlclBlb3BsZVNlbGVjdCIsImRlbGV0ZUV2ZW50QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0RmllbGQiLCJsZW5ndGgiLCJkZWxldGVFdmVudCIsInRhcmdldCIsInZhbHVlIiwiYnJvd3NlckV2ZW50IiwiZGVsZXRlRXZlbnRNZXNzYWdlIiwiZGVsZXRlRXZlbnRUaXRsZU1lc3NhZ2UiLCJldmVudFRpdGxlIiwicGFyZW50Tm9kZSIsImF0dHJpYnV0ZXMiLCJzdHlsZSIsImRpc3BsYXkiLCJjYW5jZWxEZWxldGUiLCLRgW9uZmlybURlbGV0ZSIsIm5ld0V2ZW50cyIsImZpbHRlciIsImZpbHRlcmVkRXZlbnRzIiwicGFydGljaXBhbnRzSWQiLCJzb21lIiwiY3JlYXRlRmlsdGVyU2VsZWN0IiwiZ2V0V2Vla2RheXNNYXJrdXAiLCJnZXRUaW1lc2xvdHNNYXJrdXAiLCJnZXRDYWxlbmRhckJvZHlNYXJrdXAiLCJjbG9zZVRvYXN0QnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUV2ZW50QnV0dG9uIiwiY2FuY2VsRXZlbnRCdXR0b24iLCJoaWRlVG9hc3QiLCJwcmV2ZW50RGVmYXVsdCIsInNldHRpbmdOZXdFdmVudCIsImV2ZW50T2JqIiwiZXZlbnRQYXJ0aWNpcGFudHMiLCJjaGlsZHJlbiIsImV2ZW50UGFydGljaXBhbnRJZCIsInNlbGVjdGVkIiwiZXZlbnREYXlzIiwiZXZlbnRXZWVrZGF5VmFsdWUiLCJldmVudFRpbWVzIiwiZXZlbnRUaW1lVmFsdWUiLCJ0b2FzdCIsInZpc2liaWxpdHkiLCJldmVudFRpdGxlSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJDYWxlbmRhckV2ZW50IiwiY3JlYXRlVG9hc3QiLCJjcmVhdGVJbnB1dCIsImNyZWF0ZVBlb3BsZVNlbGVjdCIsImNyZWF0ZVdlZWtkYXlTZWxlY3QiLCJjcmVhdGVUaW1lU2VsZWN0IiwiY3JlYXRlQnV0dG9ucyIsImluaXRTdG9yZSIsImNvdW50ZXJJZCIsInN0b3JlIiwiY29tcG9uZW50Rm9yUmVuZGVyTmFtZSIsImZpZWxkbmFtZSIsImZpZWxkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLElBQUlDLDBEQUFKLEVBQXJCOztJQUVNQyxZO0FBQ0osMEJBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7Ozs7V0FFRCxZQUFHQyxLQUFILEVBQVVDLEVBQVYsRUFBYztBQUNaLFVBQUksQ0FBQyxLQUFLRixTQUFMLENBQWVDLEtBQWYsQ0FBTCxFQUE0QixLQUFLRCxTQUFMLENBQWVDLEtBQWYsSUFBd0IsRUFBeEI7QUFDNUIsV0FBS0QsU0FBTCxDQUFlQyxLQUFmLEVBQXNCRSxJQUF0QixDQUEyQkQsRUFBM0I7QUFDRDs7O1dBRUQsY0FBS0QsS0FBTCxFQUFZRyxJQUFaLEVBQWtCO0FBQ2hCLFVBQU1DLEdBQUcsR0FBRyxLQUFLTCxTQUFMLENBQWVDLEtBQWYsQ0FBWjs7QUFDQSxVQUFJSSxHQUFKLEVBQVM7QUFDUEEsV0FBRyxDQUFDQyxPQUFKLENBQVksVUFBQ0osRUFBRDtBQUFBLGlCQUFRQSxFQUFFLENBQUNFLElBQUQsQ0FBVjtBQUFBLFNBQVo7QUFDRDtBQUNGOzs7Ozs7QUFHSCxJQUFNRyxZQUFZLEdBQUcsSUFBSVIsWUFBSixFQUFyQixDLENBRUE7O0FBQ0FRLFlBQVksQ0FBQ0MsRUFBYixDQUFnQixjQUFoQixFQUFnQyxZQUFNO0FBQ3BDWCxjQUFZLENBQUNZLE1BQWI7QUFDQUMsWUFBVSxDQUFDYixZQUFZLENBQUNjLGtCQUFiLENBQWdDQyxJQUFoQyxDQUFxQ2YsWUFBckMsQ0FBRCxFQUFxRCxDQUFyRCxDQUFWO0FBQ0QsQ0FIRDtBQUtBLGlFQUFlVSxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBOztJQUVxQlQsRzs7OzsyQ0FDRDtBQUNkZSxjQUFRLEVBQUUsSUFBSUMsb0RBQUosRUFESTtBQUVkQyxpQkFBVyxFQUFFLElBQUlDLHdEQUFKO0FBRkMsSzs7Ozs7V0FLaEIsa0JBQVM7QUFDUCxVQUFNQyxTQUFTLEdBQUcsS0FBS0MsYUFBTCxDQUFtQkMsc0RBQVEsQ0FBQyx3QkFBRCxDQUEzQixDQUFsQjs7QUFDQSxVQUFJRixTQUFTLElBQUlBLFNBQVMsQ0FBQ1IsTUFBM0IsRUFBbUM7QUFDakNXLGdCQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLFNBQXZDLEdBQW1ETCxTQUFTLENBQUNSLE1BQVYsRUFBbkQ7QUFDRDs7QUFDRCxhQUFPLHlDQUFQO0FBQ0Q7OztXQUVELDhCQUFxQjtBQUNuQixVQUFNUSxTQUFTLEdBQUcsS0FBS0MsYUFBTCxDQUFtQkMsc0RBQVEsQ0FBQyx3QkFBRCxDQUEzQixDQUFsQjs7QUFDQSxVQUFJRixTQUFTLElBQUlBLFNBQVMsQ0FBQ04sa0JBQTNCLEVBQStDO0FBQzdDTSxpQkFBUyxDQUFDTixrQkFBVjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTDs7SUFFcUJHLFE7Ozs7Ozs7V0FDbkIsOEJBQXFCO0FBQUE7O0FBQ25CLFVBQU1TLE1BQU0sR0FBR0osc0RBQVEsQ0FBQyxRQUFELENBQXZCO0FBQ0EsVUFBTUssZ0JBQWdCLEdBQUdMLHNEQUFRLENBQUMsa0JBQUQsQ0FBakM7QUFDQSxXQUFLTSxPQUFMLEdBQWUsRUFBZjtBQUNBRixZQUFNLENBQUNqQixPQUFQLENBQWUsVUFBQ29CLEtBQUQsRUFBVztBQUN4QixhQUFJLENBQUNELE9BQUwsc0JBQTJCRCxnQkFBZ0IsS0FBS0UsS0FBSyxDQUFDQyxFQUEzQixHQUFnQyxVQUFoQyxHQUE2QyxFQUF4RSxxQkFBcUZELEtBQUssQ0FBQ0MsRUFBM0YsZUFBa0dELEtBQUssQ0FBQ0UsSUFBeEc7QUFDRCxPQUZEO0FBSUEsb0dBRTRCSixnQkFBZ0IsS0FBSyxDQUFyQixHQUF5QixVQUF6QixHQUFzQyxFQUZsRSxnREFHVSxLQUFLQyxPQUhmO0FBT0Q7OztXQUVELDZCQUFvQjtBQUFBOztBQUNsQixVQUFNSSxRQUFRLEdBQUdWLHNEQUFRLENBQUMsVUFBRCxDQUF6QjtBQUNBLFdBQUtXLE1BQUwsR0FBYyxxQ0FBZDtBQUNBRCxjQUFRLENBQUN2QixPQUFULENBQWlCLFVBQUN5QixPQUFELEVBQWE7QUFDNUIsY0FBSSxDQUFDRCxNQUFMLG1DQUFxQ0MsT0FBckM7QUFDRCxPQUZEO0FBSUEsYUFBTyxLQUFLRCxNQUFaO0FBQ0Q7OztXQUVELDhCQUFxQjtBQUFBOztBQUNuQixVQUFNRSxTQUFTLEdBQUdiLHNEQUFRLENBQUMsV0FBRCxDQUExQjtBQUNBLFdBQUtXLE1BQUwsR0FBYyxFQUFkO0FBQ0FFLGVBQVMsQ0FBQzFCLE9BQVYsQ0FBa0IsVUFBQzJCLFFBQUQsRUFBYztBQUM5QixjQUFJLENBQUNILE1BQUwsb0NBQXNDRyxRQUF0QztBQUNELE9BRkQ7QUFHQSxhQUFPLEtBQUtILE1BQVo7QUFDRDs7O1dBRUQsaUNBQXdCO0FBQUE7O0FBQ3RCLFVBQU1JLE1BQU0sR0FBRyxLQUFLQyxXQUFMLEVBQWY7QUFDQSxXQUFLTCxNQUFMLEdBQWMsRUFBZDs7QUFGc0IsaUNBR2JNLENBSGE7QUFBQSxxQ0FJWEMsQ0FKVztBQUtsQixjQUFNcEMsS0FBSyxHQUFHaUMsTUFBTSxDQUFDSSxJQUFQLENBQVksVUFBQ0MsRUFBRDtBQUFBLG1CQUFRQSxFQUFFLENBQUNSLE9BQUgsS0FBZU0sQ0FBZixJQUFvQkUsRUFBRSxDQUFDTixRQUFILEtBQWdCRyxDQUE1QztBQUFBLFdBQVosQ0FBZDs7QUFDQSxjQUFJbkMsS0FBSixFQUFXO0FBQ1Qsa0JBQUksQ0FBQzZCLE1BQUwsa0RBQW1EN0IsS0FBSyxDQUFDdUMsS0FBekQsaUJBQW9FdkMsS0FBSyxDQUFDdUMsS0FBMUUsdUVBQzhDdkMsS0FBSyxDQUFDMEIsRUFEcEQ7QUFFRCxXQUhELE1BR087QUFDTCxrQkFBSSxDQUFDRyxNQUFMLElBQWUsYUFBZjtBQUNEO0FBWGlCOztBQUlwQixhQUFLLElBQUlPLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsSUFBSSxDQUE1QixFQUErQjtBQUFBLGlCQUF0QkEsQ0FBc0I7QUFROUI7QUFabUI7O0FBR3RCLFdBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQUEsY0FBdEJBLENBQXNCO0FBVTlCOztBQUNELGFBQU8sS0FBS04sTUFBWjtBQUNEOzs7V0FFRCw4QkFBcUI7QUFDbkIsVUFBTVcsY0FBYyxHQUFHckIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQXZCO0FBQ0EsVUFBTXFCLGtCQUFrQixHQUFHdEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLHFCQUF4QixDQUEzQjtBQUNBLFVBQU1zQixrQkFBa0IsR0FBR3ZCLFFBQVEsQ0FBQ3dCLGdCQUFULENBQTBCLGdCQUExQixDQUEzQjtBQUNBSCxvQkFBYyxDQUFDSSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QztBQUFBLGVBQU1DLHNEQUFRLENBQUMsd0JBQUQsRUFBMkIsYUFBM0IsQ0FBZDtBQUFBLE9BQXpDOztBQUNBLFdBQUssSUFBSVYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR08sa0JBQWtCLENBQUNJLE1BQXZDLEVBQStDWCxDQUFDLElBQUksQ0FBcEQsRUFBdUQ7QUFDckRPLDBCQUFrQixDQUFDUCxDQUFELENBQWxCLENBQXNCUyxnQkFBdEIsQ0FBdUMsT0FBdkMsRUFBZ0QsS0FBS0csV0FBckQ7QUFDRDs7QUFDRE4sd0JBQWtCLENBQUNHLGdCQUFuQixDQUFvQyxRQUFwQyxFQUE4QyxVQUFDNUMsS0FBRCxFQUFXO0FBQ3ZENkMsOERBQVEsQ0FBQyxrQkFBRCxFQUFxQixDQUFDN0MsS0FBSyxDQUFDZ0QsTUFBTixDQUFhQyxLQUFuQyxDQUFSO0FBQ0QsT0FGRDtBQUdEOzs7V0FFRCxxQkFBWUMsWUFBWixFQUEwQjtBQUFBOztBQUN4QixXQUFLakIsTUFBTCxHQUFjZixzREFBUSxDQUFDLFFBQUQsQ0FBdEI7QUFDQSxVQUFNaUMsa0JBQWtCLEdBQUdoQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQTNCO0FBQ0EsVUFBTWdDLHVCQUF1QixHQUFHakMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWhDO0FBQ0EsVUFBTWlDLFVBQVUsR0FBR0gsWUFBWSxDQUFDRixNQUFiLENBQW9CTSxVQUFwQixDQUErQkMsVUFBL0IsQ0FBMENOLEtBQTFDLENBQWdEQSxLQUFuRTtBQUNBRyw2QkFBdUIsQ0FBQy9CLFNBQXhCLEdBQW9DZ0MsVUFBcEM7QUFDQUYsd0JBQWtCLENBQUNLLEtBQW5CLENBQXlCQyxPQUF6QixHQUFtQyxPQUFuQztBQUNBLFVBQU1DLFlBQVksR0FBR3ZDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBLFVBQU11QyxhQUFhLEdBQUd4QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXRCO0FBQ0FzQyxrQkFBWSxDQUFDZCxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDTywwQkFBa0IsQ0FBQ0ssS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0QsT0FGRDtBQUdBRSxtQkFBYSxDQUFDZixnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzVDLFlBQU1nQixTQUFTLEdBQUcsTUFBSSxDQUFDM0IsTUFBTCxDQUFZNEIsTUFBWixDQUNoQixVQUFDN0QsS0FBRDtBQUFBLGlCQUFXQSxLQUFLLENBQUMwQixFQUFOLEtBQWEsQ0FBQ3dCLFlBQVksQ0FBQ0YsTUFBYixDQUFvQk8sVUFBcEIsQ0FBK0I3QixFQUEvQixDQUFrQ3VCLEtBQTNEO0FBQUEsU0FEZ0IsQ0FBbEI7O0FBR0FKLDhEQUFRLENBQUMsUUFBRCxFQUFXZSxTQUFYLENBQVI7QUFDRCxPQUxEO0FBTUQ7OztXQUVELHVCQUFjO0FBQ1osVUFBTTNCLE1BQU0sR0FBR2Ysc0RBQVEsQ0FBQyxRQUFELENBQXZCO0FBQ0EsVUFBTUssZ0JBQWdCLEdBQUdMLHNEQUFRLENBQUMsa0JBQUQsQ0FBakM7O0FBQ0EsVUFBSUssZ0JBQWdCLEtBQUssQ0FBekIsRUFBNEI7QUFDMUIsZUFBT1UsTUFBUDtBQUNEOztBQUNELFdBQUs2QixjQUFMLEdBQ0U3QixNQUFNLENBQUM0QixNQUFQLENBQWMsVUFBQ3ZCLEVBQUQ7QUFBQSxlQUFRQSxFQUFFLENBQUN5QixjQUFILENBQWtCQyxJQUFsQixDQUF1QixVQUFDdEMsRUFBRDtBQUFBLGlCQUFRQSxFQUFFLEtBQUtILGdCQUFmO0FBQUEsU0FBdkIsQ0FBUjtBQUFBLE9BQWQsQ0FERjtBQUVBLGFBQU8sS0FBS3VDLGNBQVo7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCxxS0FLYyxLQUFLRyxrQkFBTCxFQUxkLDJIQVVjLEtBQUtDLGlCQUFMLEVBVmQsb0ZBYWMsS0FBS0Msa0JBQUwsRUFiZCwrRUFnQmMsS0FBS0MscUJBQUwsRUFoQmQ7QUE0QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUg7QUFDQTs7SUFFcUJyRCxXOzs7Ozs7O1dBQ25CLHVCQUFjO0FBQ1osV0FBS2MsTUFBTDtBQUdBLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7V0FFRCx1QkFBYztBQUNaLFdBQUtBLE1BQUw7QUFJQSxhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O1dBRUQsOEJBQXFCO0FBQUE7O0FBQ25CLFVBQU1QLE1BQU0sR0FBR0osc0RBQVEsQ0FBQyxRQUFELENBQXZCO0FBQ0EsV0FBS00sT0FBTCxHQUFlLEVBQWY7QUFDQUYsWUFBTSxDQUFDakIsT0FBUCxDQUFlLFVBQUNvQixLQUFELEVBQVc7QUFDeEIsYUFBSSxDQUFDRCxPQUFMLDZCQUFrQ0MsS0FBSyxDQUFDQyxFQUF4QyxlQUErQ0QsS0FBSyxDQUFDRSxJQUFyRDtBQUNELE9BRkQ7QUFHQSwyTUFJVSxLQUFLSCxPQUpmO0FBTUQ7OztXQUVELCtCQUFzQjtBQUNwQixVQUFNSSxRQUFRLEdBQUdWLHNEQUFRLENBQUMsVUFBRCxDQUF6QjtBQUNBLFdBQUtNLE9BQUwsR0FBZSxFQUFmOztBQUNBLFdBQUssSUFBSVcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsUUFBUSxDQUFDa0IsTUFBN0IsRUFBcUNYLENBQUMsSUFBSSxDQUExQyxFQUE2QztBQUMzQyxhQUFLWCxPQUFMLDRCQUFpQ1csQ0FBakMsY0FBc0NQLFFBQVEsQ0FBQ08sQ0FBRCxDQUE5QztBQUNEOztBQUNELHNIQUdNLEtBQUtYLE9BSFg7QUFLRDs7O1dBRUQsNEJBQW1CO0FBQ2pCLFVBQU1PLFNBQVMsR0FBR2Isc0RBQVEsQ0FBQyxXQUFELENBQTFCO0FBQ0EsV0FBS00sT0FBTCxHQUFlLEVBQWY7O0FBQ0EsV0FBSyxJQUFJVyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixTQUFTLENBQUNlLE1BQTlCLEVBQXNDWCxDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDNUMsYUFBS1gsT0FBTCw0QkFBaUNXLENBQWpDLGNBQXNDSixTQUFTLENBQUNJLENBQUQsQ0FBL0M7QUFDRDs7QUFDRCx3SEFHTSxLQUFLWCxPQUhYO0FBS0Q7OztXQUVELHlCQUFnQjtBQUNkLFdBQUtLLE1BQUw7QUFLQSxhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O1dBRUQsOEJBQXFCO0FBQUE7O0FBQ25CLFVBQU13QyxnQkFBZ0IsR0FBR2xELFFBQVEsQ0FBQ21ELGFBQVQsQ0FBdUIsY0FBdkIsQ0FBekI7QUFDQSxVQUFNQyxpQkFBaUIsR0FBR3BELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUExQjtBQUNBLFVBQU1vRCxpQkFBaUIsR0FBR3JELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUExQjtBQUNBaUQsc0JBQWdCLENBQUN6QixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkM7QUFBQSxlQUFNLE1BQUksQ0FBQzZCLFNBQUwsRUFBTjtBQUFBLE9BQTNDO0FBQ0FGLHVCQUFpQixDQUFDM0IsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFVBQUM1QyxLQUFELEVBQVc7QUFDckRBLGFBQUssQ0FBQzBFLGNBQU47O0FBQ0EsY0FBSSxDQUFDQyxlQUFMO0FBQ0QsT0FIRDtBQUlBSCx1QkFBaUIsQ0FBQzVCLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxVQUFDNUMsS0FBRCxFQUFXO0FBQ3JEQSxhQUFLLENBQUMwRSxjQUFOO0FBQ0E3Qiw4REFBUSxDQUFDLHdCQUFELEVBQTJCLFVBQTNCLENBQVI7QUFDRCxPQUhEO0FBSUQ7OztXQUVELDJCQUFrQjtBQUNoQixXQUFLK0IsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQU12QixVQUFVLEdBQUdsQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0M2QixLQUF6RDtBQUNBLFVBQU00QixpQkFBaUIsR0FBRzFELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3QzBELFFBQWxFO0FBQ0EsVUFBTUMsa0JBQWtCLEdBQUcsRUFBM0I7O0FBQ0EsV0FBSyxJQUFJNUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBDLGlCQUFpQixDQUFDL0IsTUFBdEMsRUFBOENYLENBQUMsSUFBSSxDQUFuRCxFQUFzRDtBQUNwRCxZQUFJMEMsaUJBQWlCLENBQUMxQyxDQUFELENBQWpCLENBQXFCNkMsUUFBekIsRUFBbUM7QUFDakNELDRCQUFrQixDQUFDN0UsSUFBbkIsQ0FBd0IsQ0FBQzJFLGlCQUFpQixDQUFDMUMsQ0FBRCxDQUFqQixDQUFxQm9CLFVBQXJCLENBQWdDTixLQUFoQyxDQUFzQ0EsS0FBL0Q7QUFDRDtBQUNGOztBQUVELFVBQU1nQyxTQUFTLEdBQUc5RCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0MwRCxRQUF4RDtBQUNBLFVBQUlJLGlCQUFpQixHQUFHLEVBQXhCOztBQUNBLFdBQUssSUFBSS9DLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUc4QyxTQUFTLENBQUNuQyxNQUE5QixFQUFzQ1gsRUFBQyxJQUFJLENBQTNDLEVBQThDO0FBQzVDLFlBQUk4QyxTQUFTLENBQUM5QyxFQUFELENBQVQsQ0FBYTZDLFFBQWpCLEVBQTJCO0FBQ3pCRSwyQkFBaUIsR0FBRyxDQUFDRCxTQUFTLENBQUM5QyxFQUFELENBQVQsQ0FBYW9CLFVBQWIsQ0FBd0JOLEtBQXhCLENBQThCQSxLQUFuRDtBQUNEO0FBQ0Y7O0FBQ0QsVUFBTWtDLFVBQVUsR0FBR2hFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1QzBELFFBQTFEO0FBQ0EsVUFBSU0sY0FBYyxHQUFHLEVBQXJCOztBQUNBLFdBQUssSUFBSWpELEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUdnRCxVQUFVLENBQUNyQyxNQUEvQixFQUF1Q1gsR0FBQyxJQUFJLENBQTVDLEVBQStDO0FBQzdDLFlBQUlnRCxVQUFVLENBQUNoRCxHQUFELENBQVYsQ0FBYzZDLFFBQWxCLEVBQTRCO0FBQzFCSSx3QkFBYyxHQUFHLENBQUNELFVBQVUsQ0FBQ2hELEdBQUQsQ0FBVixDQUFjb0IsVUFBZCxDQUF5Qk4sS0FBekIsQ0FBK0JBLEtBQWpEO0FBQ0Q7QUFDRjs7QUFDRCxVQUFNaEIsTUFBTSxHQUFHZixzREFBUSxDQUFDLFFBQUQsQ0FBdkI7QUFDQSxVQUFNbEIsS0FBSyxHQUNUaUMsTUFBTSxDQUFDSSxJQUFQLENBQVksVUFBQ0MsRUFBRDtBQUFBLGVBQVFBLEVBQUUsQ0FBQ1IsT0FBSCxLQUFlb0QsaUJBQWYsSUFBb0M1QyxFQUFFLENBQUNOLFFBQUgsS0FBZ0JvRCxjQUE1RDtBQUFBLE9BQVosQ0FERjs7QUFFQSxVQUFJcEYsS0FBSixFQUFXO0FBQ1QsWUFBTXFGLEtBQUssR0FBR2xFLFFBQVEsQ0FBQ21ELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBZSxhQUFLLENBQUM3QixLQUFOLENBQVk4QixVQUFaLEdBQXlCLFNBQXpCO0FBQ0QsT0FIRCxNQUdPLElBQUksQ0FBQ2pDLFVBQUwsRUFBaUI7QUFDdEIsWUFBTWtDLGVBQWUsR0FBR3BFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUF4QjtBQUNBbUUsdUJBQWUsQ0FBQ0MsWUFBaEIsQ0FBNkIsYUFBN0IsRUFBNEMsZ0JBQTVDO0FBQ0FELHVCQUFlLENBQUNFLFNBQWhCLENBQTBCQyxHQUExQixDQUE4QixhQUE5QjtBQUNELE9BSk0sTUFJQTtBQUNMLGFBQUtkLFFBQUwsR0FBZ0IsSUFBSWUsNENBQUosQ0FBa0J0QyxVQUFsQixFQUE4QitCLGNBQTlCLEVBQ2RGLGlCQURjLEVBQ0tILGtCQURMLENBQWhCO0FBRUFsQyw4REFBUSxDQUFDLFFBQUQsK0JBQWUzQixzREFBUSxDQUFDLFFBQUQsQ0FBdkIsSUFBbUMsS0FBSzBELFFBQXhDLEdBQVI7QUFDQS9CLDhEQUFRLENBQUMsd0JBQUQsRUFBMkIsVUFBM0IsQ0FBUjtBQUNEO0FBQ0Y7OztXQUVELHFCQUFZO0FBQ1YsV0FBS3dDLEtBQUwsR0FBYWxFLFFBQVEsQ0FBQ21ELGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBLFdBQUtlLEtBQUwsQ0FBVzdCLEtBQVgsQ0FBaUI4QixVQUFqQixHQUE4QixRQUE5QjtBQUNEOzs7V0FFRCxrQkFBUztBQUNQLGtFQUVLLEtBQUtNLFdBQUwsRUFGTCxxQ0FJTSxLQUFLQyxXQUFMLEVBSk4sdUJBS00sS0FBS0Msa0JBQUwsRUFMTix1QkFNTSxLQUFLQyxtQkFBTCxFQU5OLHVCQU9NLEtBQUtDLGdCQUFMLEVBUE4sdUJBUU0sS0FBS0MsYUFBTCxFQVJOO0FBWUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSkg7QUFDQTtBQUVBQyx1REFBUyxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNIWVAsYSxHQUduQix1QkFBWXBELEtBQVosRUFBbUJQLFFBQW5CLEVBQTZCRixPQUE3QixFQUFzQ2lDLGNBQXRDLEVBQXNEO0FBQUE7O0FBQ3BENEIsZUFBYSxDQUFDUSxTQUFkLElBQTJCLENBQTNCO0FBQ0EsT0FBS3pFLEVBQUwsR0FBVWlFLGFBQWEsQ0FBQ1EsU0FBeEI7QUFDQSxPQUFLNUQsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsT0FBS1AsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxPQUFLRixPQUFMLEdBQWVBLE9BQWY7QUFDQSxPQUFLaUMsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRCxDOztnQkFWa0I0QixhLGVBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RyQjtBQUVBLElBQUlTLEtBQUssR0FBRyxFQUFaO0FBRU8sSUFBTUYsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUM3QkUsT0FBSyxHQUFHO0FBQ054RSxZQUFRLEVBQUUsQ0FDUixRQURRLEVBRVIsU0FGUSxFQUdSLFdBSFEsRUFJUixVQUpRLEVBS1IsUUFMUSxDQURKO0FBUU5HLGFBQVMsRUFBRSxDQUNULE9BRFMsRUFFVCxPQUZTLEVBR1QsT0FIUyxFQUlULE9BSlMsRUFLVCxPQUxTLEVBTVQsT0FOUyxFQU9ULE9BUFMsRUFRVCxPQVJTLEVBU1QsT0FUUyxDQVJMO0FBbUJOVCxVQUFNLEVBQUUsQ0FBQztBQUNQSSxRQUFFLEVBQUUsQ0FERztBQUVQQyxVQUFJLEVBQUU7QUFGQyxLQUFELEVBR0w7QUFDREQsUUFBRSxFQUFFLENBREg7QUFFREMsVUFBSSxFQUFFO0FBRkwsS0FISyxFQU1MO0FBQ0RELFFBQUUsRUFBRSxDQURIO0FBRURDLFVBQUksRUFBRTtBQUZMLEtBTkssQ0FuQkY7QUE4Qk5NLFVBQU0sRUFBRSxFQTlCRjtBQStCTm9FLDBCQUFzQixFQUFFLFVBL0JsQjtBQWdDTjlFLG9CQUFnQixFQUFFO0FBaENaLEdBQVI7QUFrQ0FqQix5REFBQSxDQUFrQixjQUFsQjtBQUNELENBcENNO0FBc0NBLElBQU1ZLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNvRixTQUFEO0FBQUEsU0FBZUYsS0FBSyxDQUFDRSxTQUFELENBQXBCO0FBQUEsQ0FBakI7QUFFQSxJQUFNekQsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ3lELFNBQUQsRUFBWUMsVUFBWixFQUEyQjtBQUNqREgsT0FBSyxDQUFDRSxTQUFELENBQUwsR0FBbUJDLFVBQW5CO0FBQ0FqRyx5REFBQSxDQUFrQixjQUFsQjtBQUNELENBSE0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNQO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwrREFBK0QsMkNBQTJDLGtCQUFrQixrQkFBa0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsbUJBQW1CLHNCQUFzQixxQkFBcUIsdUJBQXVCLEdBQUcsb0NBQW9DLGlCQUFpQixpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQiwwQ0FBMEMsd0NBQXdDLHlMQUF5TCxrQkFBa0IsaUJBQWlCLDRCQUE0Qix1QkFBdUIsR0FBRyxlQUFlLGlCQUFpQixrQkFBa0IsaURBQWlELGlCQUFpQixxQkFBcUIsR0FBRywyQ0FBMkMsaUJBQWlCLGtCQUFrQixzQkFBc0IsdUJBQXVCLDRCQUE0QixHQUFHLGtCQUFrQixpQkFBaUIsaUJBQWlCLDZDQUE2QyxHQUFHLHNCQUFzQiw0QkFBNEIsc0JBQXNCLHVCQUF1QixrQkFBa0IsR0FBRyxrQkFBa0IsaUJBQWlCLGtCQUFrQiwwQ0FBMEMsdUNBQXVDLEdBQUcsb0JBQW9CLG1DQUFtQyxnQ0FBZ0MsK0JBQStCLDJCQUEyQixjQUFjLGlCQUFpQiw0QkFBNEIsR0FBRyw4QkFBOEIsbUNBQW1DLGdDQUFnQywrQkFBK0IsMkJBQTJCLHVCQUF1Qiw4QkFBOEIsK0NBQStDLHFCQUFxQixzQkFBc0Isb0JBQW9CLHNCQUFzQiw0QkFBNEIsMkJBQTJCLEdBQUcsb0JBQW9CLG1CQUFtQix1QkFBdUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsY0FBYyxhQUFhLGVBQWUsbUJBQW1CLHdCQUF3Qiw4QkFBOEIsaUJBQWlCLHVCQUF1QixvQkFBb0IsR0FBRyx3Q0FBd0Msd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQixpREFBaUQsR0FBRyxxQkFBcUIsa0JBQWtCLHVCQUF1QixlQUFlLGdCQUFnQixnREFBZ0QsaUJBQWlCLGtCQUFrQixtQkFBbUIscUJBQXFCLDhCQUE4Qiw0QkFBNEIsd0JBQXdCLEdBQUcscUJBQXFCLHVCQUF1QixvQkFBb0Isd0JBQXdCLEdBQUcsdUJBQXVCLHVCQUF1QixlQUFlLHVCQUF1QixnQkFBZ0IsR0FBRywwQkFBMEIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsbUJBQW1CLDJDQUEyQyxpQkFBaUIsa0JBQWtCLGlCQUFpQixvQkFBb0IsdUJBQXVCLEdBQUcsVUFBVSxrQkFBa0IsaUJBQWlCLGdCQUFnQix3QkFBd0IsNEJBQTRCLCtDQUErQyxHQUFHLFdBQVcsZUFBZSwwQkFBMEIsZ0JBQWdCLHlCQUF5QixHQUFHLFdBQVcsbUNBQW1DLGdDQUFnQywrQkFBK0IsMkJBQTJCLGVBQWUsaUJBQWlCLEdBQUcsWUFBWSxtQ0FBbUMsZ0NBQWdDLCtCQUErQiwyQkFBMkIsZUFBZSxpQkFBaUIsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsY0FBYyxtQkFBbUIsc0JBQXNCLEdBQUcsWUFBWSxnQkFBZ0IsaUJBQWlCLGtCQUFrQix1QkFBdUIsNkNBQTZDLGdCQUFnQix3QkFBd0IsR0FBRyxpQkFBaUIsaUJBQWlCLGdCQUFnQixpQkFBaUIsZUFBZSxzQkFBc0IsZ0NBQWdDLGlCQUFpQix3QkFBd0Isb0JBQW9CLEdBQUcsa0JBQWtCLDBCQUEwQixHQUFHLFVBQVUsK0JBQStCLEdBQUcsT0FBTyx1TEFBdUwsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVywrQ0FBK0MsMkNBQTJDLG9CQUFvQixvQkFBb0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsS0FBSyxpQkFBaUIsb0JBQW9CLFVBQVUsMkJBQTJCLE9BQU8sbUJBQW1CLDBCQUEwQix5QkFBeUIsMkJBQTJCLE9BQU8sS0FBSyxpQkFBaUIscUJBQXFCLHFCQUFxQixxQkFBcUIsT0FBTyxjQUFjLDhCQUE4QixPQUFPLGNBQWMsOEJBQThCLE9BQU8sS0FBSyxlQUFlLG9CQUFvQiw0Q0FBNEMsMENBQTBDLDZPQUE2TyxvQkFBb0IsbUJBQW1CLDhCQUE4Qix5QkFBeUIsS0FBSyxtQkFBbUIsbUJBQW1CLG9CQUFvQixtREFBbUQsbUJBQW1CLHVCQUF1QiwrQkFBK0IscUJBQXFCLHNCQUFzQiwwQkFBMEIsMkJBQTJCLGdDQUFnQyxPQUFPLEtBQUssc0JBQXNCLG1CQUFtQixtQkFBbUIsK0NBQStDLGFBQWEsZ0NBQWdDLDBCQUEwQiwyQkFBMkIsc0JBQXNCLE9BQU8sS0FBSyxzQkFBc0IsbUJBQW1CLG9CQUFvQiw0Q0FBNEMseUNBQXlDLFdBQVcsdUNBQXVDLG9DQUFvQyxtQ0FBbUMsK0JBQStCLGtCQUFrQixxQkFBcUIsZ0NBQWdDLE9BQU8seUJBQXlCLHVDQUF1QyxvQ0FBb0MsbUNBQW1DLCtCQUErQiwyQkFBMkIsa0NBQWtDLG1EQUFtRCx5QkFBeUIsMEJBQTBCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLCtCQUErQixPQUFPLEtBQUssb0JBQW9CLHFCQUFxQix5QkFBeUIseUJBQXlCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLGVBQWUsaUJBQWlCLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLG1CQUFtQix5QkFBeUIsc0JBQXNCLEtBQUssNkJBQTZCLHNCQUFzQiw0QkFBNEIsT0FBTyxLQUFLLDBCQUEwQixvQkFBb0IsbURBQW1ELEtBQUsscUJBQXFCLG9CQUFvQix5QkFBeUIsaUJBQWlCLGtCQUFrQixrREFBa0QsbUJBQW1CLG9CQUFvQixxQkFBcUIsdUJBQXVCLGdDQUFnQyw4QkFBOEIsMEJBQTBCLFNBQVMsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsT0FBTyxXQUFXLDJCQUEyQixtQkFBbUIsMkJBQTJCLG9CQUFvQixPQUFPLGNBQWMsb0JBQW9CLHFCQUFxQiwyQkFBMkIsMEJBQTBCLE9BQU8sS0FBSyxrREFBa0QsbURBQW1ELGNBQWMsaUNBQWlDLEtBQUssc0JBQXNCLDJDQUEyQyxtQkFBbUIsb0JBQW9CLG1CQUFtQixzQkFBc0IseUJBQXlCLEtBQUssVUFBVSxvQkFBb0IsbUJBQW1CLGtCQUFrQiwwQkFBMEIsOEJBQThCLGlEQUFpRCxLQUFLLGVBQWUsaUJBQWlCLDRCQUE0QixrQkFBa0IsMkJBQTJCLEtBQUssZUFBZSxxQ0FBcUMsa0NBQWtDLGlDQUFpQyw2QkFBNkIsaUJBQWlCLG1CQUFtQixLQUFLLGdCQUFnQixxQ0FBcUMsa0NBQWtDLGlDQUFpQyw2QkFBNkIsaUJBQWlCLG1CQUFtQixLQUFLLG1CQUFtQixtQkFBbUIsS0FBSyxjQUFjLHFCQUFxQix3QkFBd0IsS0FBSyxnQkFBZ0Isa0JBQWtCLG1CQUFtQixvQkFBb0IseUJBQXlCLCtDQUErQyxrQkFBa0IsMEJBQTBCLGNBQWMscUJBQXFCLG9CQUFvQixxQkFBcUIsbUJBQW1CLDBCQUEwQixvQ0FBb0MscUJBQXFCLDRCQUE0Qix3QkFBd0IsT0FBTyxLQUFLLGtCQUFrQiw0QkFBNEIsS0FBSyx1QkFBdUI7QUFDM2pYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZlLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnlGO0FBQ3pGLFlBQWdJOztBQUVoSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx5SEFBTzs7OztBQUl4QixpRUFBZSxnSUFBYyxNQUFNLEU7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvaW5kZXgnO1xuXG5jb25zdCBhcHBDb21wb25lbnQgPSBuZXcgQXBwKCk7XG5cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gIH1cblxuICBvbihldmVudCwgY2IpIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2V2ZW50XSkgdGhpcy5jYWxsYmFja3NbZXZlbnRdID0gW107XG4gICAgdGhpcy5jYWxsYmFja3NbZXZlbnRdLnB1c2goY2IpO1xuICB9XG5cbiAgZW1pdChldmVudCwgZGF0YSkge1xuICAgIGNvbnN0IGNicyA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMuZm9yRWFjaCgoY2IpID0+IGNiKGRhdGEpKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4vLyBzZXR1cCBvdXIgbGlzdGVuZXJzIGZvciBldmVudCBFbWl0dGVyXG5ldmVudEVtaXR0ZXIub24oJ3N0b3JlQ2hhbmdlZCcsICgpID0+IHtcbiAgYXBwQ29tcG9uZW50LnJlbmRlcigpO1xuICBzZXRUaW1lb3V0KGFwcENvbXBvbmVudC5zZXR1cFBhZ2VMaXN0ZW5lcnMuY2FsbChhcHBDb21wb25lbnQpLCAxKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudEVtaXR0ZXI7XG4iLCJpbXBvcnQgeyBnZXRGaWVsZCB9IGZyb20gJy4uLy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuLi9jYWxlbmRhci9pbmRleCc7XG5pbXBvcnQgQ3JlYXRlRXZlbnQgZnJvbSAnLi4vY3JlYXRlLWV2ZW50L2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcbiAgICBjb21wb25lbnRzTWFwID0ge1xuICAgICAgY2FsZW5kYXI6IG5ldyBDYWxlbmRhcigpLFxuICAgICAgY3JlYXRlRXZlbnQ6IG5ldyBDcmVhdGVFdmVudCgpLFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNNYXBbZ2V0RmllbGQoJ2NvbXBvbmVudEZvclJlbmRlck5hbWUnKV07XG4gICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5yZW5kZXIpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2F0aW9uJykuaW5uZXJIVE1MID0gY29tcG9uZW50LnJlbmRlcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICc8ZGl2PlNvcnJ5LCBzb21ldGhpbmcgd2VudCB3cm9uZyE8L2Rpdj4nO1xuICAgIH1cblxuICAgIHNldHVwUGFnZUxpc3RlbmVycygpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c01hcFtnZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScpXTtcbiAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LnNldHVwUGFnZUxpc3RlbmVycykge1xuICAgICAgICBjb21wb25lbnQuc2V0dXBQYWdlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0RmllbGQsIHNldEZpZWxkIH0gZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhciB7XG4gIGNyZWF0ZUZpbHRlclNlbGVjdCgpIHtcbiAgICBjb25zdCBwZW9wbGUgPSBnZXRGaWVsZCgncGVvcGxlJyk7XG4gICAgY29uc3QgZmlsdGVyU2VsZWN0ZWRJZCA9IGdldEZpZWxkKCdmaWx0ZXJTZWxlY3RlZElkJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgcGVvcGxlLmZvckVhY2goKGh1bWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgKz0gYDxvcHRpb24gJHtmaWx0ZXJTZWxlY3RlZElkID09PSBodW1hbi5pZCA/ICdzZWxlY3RlZCcgOiAnJ30gdmFsdWU9JyR7aHVtYW4uaWR9Jz4ke2h1bWFuLm5hbWV9PC9vcHRpb24+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJwYXJ0aWNpcGFudHMtZmlsdGVyXCI+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJyAke2ZpbHRlclNlbGVjdGVkSWQgPT09IDAgPyAnc2VsZWN0ZWQnIDogJyd9PkFsbCBtZW1iZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAke3RoaXMub3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gaWQ9XCJuZXctZXZlbnRcIj5OZXcgZXZlbnQgKzwvYnV0dG9uPlxuICAgICAgICAgICAgYDtcbiAgfVxuXG4gIGdldFdlZWtkYXlzTWFya3VwKCkge1xuICAgIGNvbnN0IHdlZWtkYXlzID0gZ2V0RmllbGQoJ3dlZWtkYXlzJyk7XG4gICAgdGhpcy5yZXN1bHQgPSAnPGRpdiBjbGFzcz1cInRpbWUtaGVhZGVyXCI+VGltZTwvZGl2Pic7XG4gICAgd2Vla2RheXMuZm9yRWFjaCgod2Vla2RheSkgPT4ge1xuICAgICAgdGhpcy5yZXN1bHQgKz0gYDxkaXYgY2xhc3M9IFwiZGF5XCI+ICR7d2Vla2RheX08L2Rpdj4gYDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGdldFRpbWVzbG90c01hcmt1cCgpIHtcbiAgICBjb25zdCB0aW1lc2xvdHMgPSBnZXRGaWVsZCgndGltZXNsb3RzJyk7XG4gICAgdGhpcy5yZXN1bHQgPSAnJztcbiAgICB0aW1lc2xvdHMuZm9yRWFjaCgodGltZXNsb3QpID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ICs9IGA8ZGl2IGNsYXNzPSBcInRpbWVcIj4gJHt0aW1lc2xvdH08L2Rpdj5gO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGdldENhbGVuZGFyQm9keU1hcmt1cCgpIHtcbiAgICBjb25zdCBldmVudHMgPSB0aGlzLmZpbHRlckV2ZW50KCk7XG4gICAgdGhpcy5yZXN1bHQgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkgKz0gMSkge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqICs9IDEpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmluZCgoZXYpID0+IGV2LndlZWtkYXkgPT09IGogJiYgZXYudGltZXNsb3QgPT09IGkpO1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdCArPSBgPGRpdiBjbGFzcz1cImFjdGl2ZS1ldmVudFwiIHZhbHVlPVwiJHtldmVudC50aXRsZX1cIj4gJHtldmVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1idXR0b25cIiBpZD0nJHtldmVudC5pZH0nPlg8L2J1dHRvbj48L2Rpdj5gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzdWx0ICs9ICc8ZGl2PjwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICB9XG5cbiAgc2V0dXBQYWdlTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IG5ld0V2ZW50QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1ldmVudCcpO1xuICAgIGNvbnN0IGZpbHRlclBlb3BsZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJ0aWNpcGFudHMtZmlsdGVyJyk7XG4gICAgY29uc3QgZGVsZXRlRXZlbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1idXR0b24nKTtcbiAgICBuZXdFdmVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NyZWF0ZUV2ZW50JykpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlRXZlbnRCdXR0b25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBkZWxldGVFdmVudEJ1dHRvbnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRlbGV0ZUV2ZW50KTtcbiAgICB9XG4gICAgZmlsdGVyUGVvcGxlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgc2V0RmllbGQoJ2ZpbHRlclNlbGVjdGVkSWQnLCArZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZUV2ZW50KGJyb3dzZXJFdmVudCkge1xuICAgIHRoaXMuZXZlbnRzID0gZ2V0RmllbGQoJ2V2ZW50cycpO1xuICAgIGNvbnN0IGRlbGV0ZUV2ZW50TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtbWVzc2FnZScpO1xuICAgIGNvbnN0IGRlbGV0ZUV2ZW50VGl0bGVNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS10aXRsZScpO1xuICAgIGNvbnN0IGV2ZW50VGl0bGUgPSBicm93c2VyRXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuYXR0cmlidXRlcy52YWx1ZS52YWx1ZTtcbiAgICBkZWxldGVFdmVudFRpdGxlTWVzc2FnZS5pbm5lckhUTUwgPSBldmVudFRpdGxlO1xuICAgIGRlbGV0ZUV2ZW50TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjb25zdCBjYW5jZWxEZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWRlbGV0ZScpO1xuICAgIGNvbnN0INGBb25maXJtRGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm0tZGVsZXRlJyk7XG4gICAgY2FuY2VsRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGVsZXRlRXZlbnRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAg0YFvbmZpcm1EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdFdmVudHMgPSB0aGlzLmV2ZW50cy5maWx0ZXIoXG4gICAgICAgIChldmVudCkgPT4gZXZlbnQuaWQgIT09ICticm93c2VyRXZlbnQudGFyZ2V0LmF0dHJpYnV0ZXMuaWQudmFsdWUsXG4gICAgICApO1xuICAgICAgc2V0RmllbGQoJ2V2ZW50cycsIG5ld0V2ZW50cyk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXJFdmVudCgpIHtcbiAgICBjb25zdCBldmVudHMgPSBnZXRGaWVsZCgnZXZlbnRzJyk7XG4gICAgY29uc3QgZmlsdGVyU2VsZWN0ZWRJZCA9IGdldEZpZWxkKCdmaWx0ZXJTZWxlY3RlZElkJyk7XG4gICAgaWYgKGZpbHRlclNlbGVjdGVkSWQgPT09IDApIHtcbiAgICAgIHJldHVybiBldmVudHM7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyZWRFdmVudHMgPSAoXG4gICAgICBldmVudHMuZmlsdGVyKChldikgPT4gZXYucGFydGljaXBhbnRzSWQuc29tZSgoaWQpID0+IGlkID09PSBmaWx0ZXJTZWxlY3RlZElkKSkpO1xuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkRXZlbnRzO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBgXG48ZGl2IGNsYXNzPSBcImNhbGVuZGFyLWNvbXBvbmVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxPkNhbGVuZGFyPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlclwiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVGaWx0ZXJTZWxlY3QoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrZGF5c1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5nZXRXZWVrZGF5c01hcmt1cCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWUtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmdldFRpbWVzbG90c01hcmt1cCgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD0nZXZlbnRzLWJvZHknPlxuICAgICAgICAgICAgICAgICR7dGhpcy5nZXRDYWxlbmRhckJvZHlNYXJrdXAoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJkZWxldGUtbWVzc2FnZVwiPlxuICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBcIjxzcGFuIGlkPVwiZGVsZXRlLXRpdGxlXCI+PC9zcGFuPlwiIGV2ZW50PzwvcD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1kZWxldGVcIj5ObzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb25maXJtLWRlbGV0ZVwiPlllczwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuPC9kaXY+XG4gICAgICAgICAgICBgO1xuICB9XG59XG4iLCJpbXBvcnQgQ2FsZW5kYXJFdmVudCBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgZ2V0RmllbGQsIHNldEZpZWxkIH0gZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVFdmVudCB7XG4gIGNyZWF0ZVRvYXN0KCkge1xuICAgIHRoaXMucmVzdWx0ID0gYFxuICAgICAgICA8cCBjbGFzcz1cInRvYXN0XCI+RmFpbGVkIHRvIGNyZWF0ZSBhbiBldmVudC4gVGltZSBzbG90IGlzIGFscmVhZHkgYm9va2VkLjxidXR0b24gY2xhc3M9XCJ0b2FzdC1jbG9zZVwiPlg8L2J1dHRvbj48L3A+XG4gICAgICBgO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGNyZWF0ZUlucHV0KCkge1xuICAgIHRoaXMucmVzdWx0ID0gYFxuICAgIDxsYWJlbCBmb3I9XCJldmVudC1uYW1lXCI+TmFtZSBvZiB0aGUgZXZlbnQ6PC9sYWJlbD5cbiAgICA8aW5wdXQgaWQ9XCJldmVudC1uYW1lXCIgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCI0MFwiID48YnI+XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cblxuICBjcmVhdGVQZW9wbGVTZWxlY3QoKSB7XG4gICAgY29uc3QgcGVvcGxlID0gZ2V0RmllbGQoJ3Blb3BsZScpO1xuICAgIHRoaXMub3B0aW9ucyA9ICcnO1xuICAgIHBlb3BsZS5mb3JFYWNoKChodW1hbikgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPScke2h1bWFuLmlkfSc+JHtodW1hbi5uYW1lfTwvb3B0aW9uPmA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGxhYmVsIGZvcj1cInBhcnRpY2lwYW50c1wiPlBhcnRpY2lwYW50czo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwicGFydGljaXBhbnRzXCIgbXVsdGlwbGU+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJ3NlbGVjdGVkPkFsbCBtZW1iZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAke3RoaXMub3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+PGJyPmA7XG4gIH1cblxuICBjcmVhdGVXZWVrZGF5U2VsZWN0KCkge1xuICAgIGNvbnN0IHdlZWtkYXlzID0gZ2V0RmllbGQoJ3dlZWtkYXlzJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrZGF5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPSR7aX0+JHt3ZWVrZGF5c1tpXX08L29wdGlvbj5gO1xuICAgIH1cbiAgICByZXR1cm4gYFxuICAgICAgICA8bGFiZWwgZm9yPVwic2VsZWN0LWRheVwiPkRheTo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkID1cInNlbGVjdC1kYXlcIj5cbiAgICAgICAgJHt0aGlzLm9wdGlvbnN9XG4gICAgICAgIDwvc2VsZWN0Pjxicj5gO1xuICB9XG5cbiAgY3JlYXRlVGltZVNlbGVjdCgpIHtcbiAgICBjb25zdCB0aW1lc2xvdHMgPSBnZXRGaWVsZCgndGltZXNsb3RzJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lc2xvdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMub3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0ke2l9PiR7dGltZXNsb3RzW2ldfTwvb3B0aW9uPmA7XG4gICAgfVxuICAgIHJldHVybiBgXG4gICAgICAgIDxsYWJlbCBmb3I9XCJzZWxlY3QtdGltZVwiPlRpbWU6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC10aW1lXCI+XG4gICAgICAgICR7dGhpcy5vcHRpb25zfVxuICAgICAgICA8L3NlbGVjdD48YnI+YDtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZVwiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIHNldHVwUGFnZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBjbG9zZVRvYXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0LWNsb3NlJyk7XG4gICAgY29uc3QgY3JlYXRlRXZlbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlJyk7XG4gICAgY29uc3QgY2FuY2VsRXZlbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XG4gICAgY2xvc2VUb2FzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGlkZVRvYXN0KCkpO1xuICAgIGNyZWF0ZUV2ZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXR0aW5nTmV3RXZlbnQoKTtcbiAgICB9KTtcbiAgICBjYW5jZWxFdmVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XG4gICAgfSk7XG4gIH1cblxuICBzZXR0aW5nTmV3RXZlbnQoKSB7XG4gICAgdGhpcy5ldmVudE9iaiA9IHt9O1xuICAgIGNvbnN0IGV2ZW50VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnQtbmFtZScpLnZhbHVlO1xuICAgIGNvbnN0IGV2ZW50UGFydGljaXBhbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcnRpY2lwYW50cycpLmNoaWxkcmVuO1xuICAgIGNvbnN0IGV2ZW50UGFydGljaXBhbnRJZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRQYXJ0aWNpcGFudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudFBhcnRpY2lwYW50c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICBldmVudFBhcnRpY2lwYW50SWQucHVzaCgrZXZlbnRQYXJ0aWNpcGFudHNbaV0uYXR0cmlidXRlcy52YWx1ZS52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZXZlbnREYXlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1kYXknKS5jaGlsZHJlbjtcbiAgICBsZXQgZXZlbnRXZWVrZGF5VmFsdWUgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50RGF5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50RGF5c1tpXS5zZWxlY3RlZCkge1xuICAgICAgICBldmVudFdlZWtkYXlWYWx1ZSA9ICtldmVudERheXNbaV0uYXR0cmlidXRlcy52YWx1ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZXZlbnRUaW1lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtdGltZScpLmNoaWxkcmVuO1xuICAgIGxldCBldmVudFRpbWVWYWx1ZSA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRUaW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50VGltZXNbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgZXZlbnRUaW1lVmFsdWUgPSArZXZlbnRUaW1lc1tpXS5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBldmVudHMgPSBnZXRGaWVsZCgnZXZlbnRzJyk7XG4gICAgY29uc3QgZXZlbnQgPSAoXG4gICAgICBldmVudHMuZmluZCgoZXYpID0+IGV2LndlZWtkYXkgPT09IGV2ZW50V2Vla2RheVZhbHVlICYmIGV2LnRpbWVzbG90ID09PSBldmVudFRpbWVWYWx1ZSkpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QnKTtcbiAgICAgIHRvYXN0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfSBlbHNlIGlmICghZXZlbnRUaXRsZSkge1xuICAgICAgY29uc3QgZXZlbnRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50LW5hbWUnKTtcbiAgICAgIGV2ZW50VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1JlcXVpcmVkIGZpZWxkJyk7XG4gICAgICBldmVudFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZW1wdHktZmllbGQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ldmVudE9iaiA9IG5ldyBDYWxlbmRhckV2ZW50KGV2ZW50VGl0bGUsIGV2ZW50VGltZVZhbHVlLFxuICAgICAgICBldmVudFdlZWtkYXlWYWx1ZSwgZXZlbnRQYXJ0aWNpcGFudElkKTtcbiAgICAgIHNldEZpZWxkKCdldmVudHMnLCBbLi4uZ2V0RmllbGQoJ2V2ZW50cycpLCB0aGlzLmV2ZW50T2JqXSk7XG4gICAgICBzZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScsICdjYWxlbmRhcicpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVUb2FzdCgpIHtcbiAgICB0aGlzLnRvYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0Jyk7XG4gICAgdGhpcy50b2FzdC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLWV2ZW50XCI+XG4gICAgICAgJHt0aGlzLmNyZWF0ZVRvYXN0KCl9XG4gICAgICA8Zm9ybT5cbiAgICAgICAgJHt0aGlzLmNyZWF0ZUlucHV0KCl9XG4gICAgICAgICR7dGhpcy5jcmVhdGVQZW9wbGVTZWxlY3QoKX1cbiAgICAgICAgJHt0aGlzLmNyZWF0ZVdlZWtkYXlTZWxlY3QoKX1cbiAgICAgICAgJHt0aGlzLmNyZWF0ZVRpbWVTZWxlY3QoKX1cbiAgICAgICAgJHt0aGlzLmNyZWF0ZUJ1dHRvbnMoKX1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSAnLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmluaXRTdG9yZSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJFdmVudCB7XG4gIHN0YXRpYyBjb3VudGVySWQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0aW1lc2xvdCwgd2Vla2RheSwgcGFydGljaXBhbnRzSWQpIHtcbiAgICBDYWxlbmRhckV2ZW50LmNvdW50ZXJJZCArPSAxO1xuICAgIHRoaXMuaWQgPSBDYWxlbmRhckV2ZW50LmNvdW50ZXJJZDtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50aW1lc2xvdCA9IHRpbWVzbG90O1xuICAgIHRoaXMud2Vla2RheSA9IHdlZWtkYXk7XG4gICAgdGhpcy5wYXJ0aWNpcGFudHNJZCA9IHBhcnRpY2lwYW50c0lkO1xuICB9XG59XG4iLCJpbXBvcnQgZXZlbnRFbWl0dGVyIGZyb20gJy4uL0V2ZW50RW1pdHRlcic7XG5cbmxldCBzdG9yZSA9IHt9O1xuXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xuICBzdG9yZSA9IHtcbiAgICB3ZWVrZGF5czogW1xuICAgICAgJ01vbmRheScsXG4gICAgICAnVHVlc2RheScsXG4gICAgICAnV2VkbmVzZGF5JyxcbiAgICAgICdUaHVyc2RheScsXG4gICAgICAnRnJpZGF5JyxcbiAgICBdLFxuICAgIHRpbWVzbG90czogW1xuICAgICAgJzEwOjAwJyxcbiAgICAgICcxMTowMCcsXG4gICAgICAnMTI6MDAnLFxuICAgICAgJzEzOjAwJyxcbiAgICAgICcxNDowMCcsXG4gICAgICAnMTU6MDAnLFxuICAgICAgJzE2OjAwJyxcbiAgICAgICcxNzowMCcsXG4gICAgICAnMTg6MDAnLFxuICAgIF0sXG4gICAgcGVvcGxlOiBbe1xuICAgICAgaWQ6IDEsXG4gICAgICBuYW1lOiAnQWxleCcsXG4gICAgfSwge1xuICAgICAgaWQ6IDIsXG4gICAgICBuYW1lOiAnQW5hc3Rhc2lhJyxcbiAgICB9LCB7XG4gICAgICBpZDogMyxcbiAgICAgIG5hbWU6ICdEbWl0cml5JyxcbiAgICB9XSxcblxuICAgIGV2ZW50czogW10sXG4gICAgY29tcG9uZW50Rm9yUmVuZGVyTmFtZTogJ2NhbGVuZGFyJyxcbiAgICBmaWx0ZXJTZWxlY3RlZElkOiAwLFxuICB9O1xuICBldmVudEVtaXR0ZXIuZW1pdCgnc3RvcmVDaGFuZ2VkJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RmllbGQgPSAoZmllbGRuYW1lKSA9PiBzdG9yZVtmaWVsZG5hbWVdO1xuXG5leHBvcnQgY29uc3Qgc2V0RmllbGQgPSAoZmllbGRuYW1lLCBmaWVsZFZhbHVlKSA9PiB7XG4gIHN0b3JlW2ZpZWxkbmFtZV0gPSBmaWVsZFZhbHVlO1xuICBldmVudEVtaXR0ZXIuZW1pdCgnc3RvcmVDaGFuZ2VkJyk7XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FsZW5kYXItY29tcG9uZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhlYWRlciBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5oZWFkZXIgLmZpbHRlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5maWx0ZXIgYnV0dG9uLCAuZmlsdGVyIHNlbGVjdCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5jYWxlbmRhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcIncgdyB3IHcgdyB3XFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIjtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLndlZWtkYXlzIHtcXG4gIGdyaWQtYXJlYTogdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODE1KTtcXG4gIGhlaWdodDogNTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi53ZWVrZGF5cyAuZGF5LFxcbi53ZWVrZGF5cyAudGltZS1oZWFkZXIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50aW1lLWNvbHVtbiB7XFxuICBncmlkLWFyZWE6IHQ7XFxuICB3aWR0aDogMjAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCA3OCwgNzUsIDAuMTMpO1xcbn1cXG4udGltZS1jb2x1bW4gLnRpbWUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbiNldmVudHMtYm9keSB7XFxuICBncmlkLWFyZWE6IGU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDFmcik7XFxufVxcbiNldmVudHMtYm9keSBkaXYge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNldmVudHMtYm9keSAuYWN0aXZlLWV2ZW50IHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAxMzksIDE2LCAwLjc5NSk7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHRvcDogMTVweDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiAjZDYwZTBlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hY3RpdmUtZXZlbnQ6aG92ZXIgLmRlbGV0ZS1idXR0b24ge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLmRlbGV0ZS1idXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAxMDAsIDEwMCwgMC42NjQpO1xcbn1cXG5cXG4jZGVsZXRlLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjIwcHg7XFxuICBsZWZ0OiA0ODVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44OSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuI2RlbGV0ZS1tZXNzYWdlIHAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuI2RlbGV0ZS1tZXNzYWdlIGRpdiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbiNkZWxldGUtbWVzc2FnZSBidXR0b24ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XFxuICBtYXJnaW4tbGVmdDogNzBweDtcXG59XFxuXFxuLmNyZWF0ZS1ldmVudCB7XFxuICBmb250LWZhbWlseTogXFxcIlRyZWJ1Y2hldFxcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAxNTYsIDEyNiwgMC40KTtcXG59XFxuXFxubGFiZWwge1xcbiAgd2lkdGg6IDMwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbnNlbGVjdCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4jcGFydGljaXBhbnRzIHtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnRvYXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMyOSk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi50b2FzdCBidXR0b24ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBjb2xvcjogcmVkO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODE7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZW1wdHktZmllbGQge1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLWV2ZW50L2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREo7QURVQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0tBQ0U7RUFVRixhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ2xCRjtBRG1CRTs7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ2pCSjs7QURxQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FDbEJGO0FEbUJFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2pCSjs7QURxQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esa0NBQUE7QUNsQkY7QURtQkU7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNqQko7QURvQkU7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDbEJKOztBRHFCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNsQkY7O0FEc0JFO0VBQ0UsbUJBQUE7QUNuQko7O0FEc0JBO0VBQ0UsYUFBQTtFQUNBLDRDQUFBO0FDbkJGOztBRHFCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2xCRjtBRG1CRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDakJKO0FEbUJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDakJKO0FEbUJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDakJKOztBQ3ZKQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEMEpGOztBQ3hKQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBRDJKRjs7QUN4SkE7RUFDRSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUQySkY7O0FDeEpBO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRDJKRjs7QUN4SkE7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FEMkpGOztBQ3pKQTtFQUNFLFlBQUE7QUQ0SkY7O0FDMUpBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FENkpGOztBQzFKQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUQ2SkY7QUM1SkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUQ4Sko7O0FDM0pBO0VBQ0UscUJBQUE7QUQ4SkY7O0FBak9BO0VBQ0UsMEJBQUE7QUFvT0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhbGVuZGFyLWNvbXBvbmVudCB7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCcsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTIwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWx0ZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyIHtcXHJcXG4gICVidXR0b24tc2l6ZXMge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIHNlbGVjdCB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbi1zaXplcztcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbi1zaXplcztcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNhbGVuZGFyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAndyB3IHcgdyB3IHcnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnO1xcclxcbiAgd2lkdGg6IDEyMDBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2Vla2RheXMge1xcclxcbiAgZ3JpZC1hcmVhOiB3O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44MTUpO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIC5kYXksXFxyXFxuICAudGltZS1oZWFkZXIge1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4udGltZS1jb2x1bW4ge1xcclxcbiAgZ3JpZC1hcmVhOiB0O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgNzgsIDc1LCAwLjEzKTtcXHJcXG4gIC50aW1lIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNldmVudHMtYm9keSB7XFxyXFxuICBncmlkLWFyZWE6IGU7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDksIDFmcik7XFxyXFxuICBkaXYge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hY3RpdmUtZXZlbnQge1xcclxcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMTM5LCAxNiwgMC43OTUpO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICB9XFxyXFxufVxcclxcbi5kZWxldGUtYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB0b3A6IDE1cHg7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogcmdiKDIxNCwgMTQsIDE0KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlLWV2ZW50OmhvdmVyIHtcXHJcXG4gIC5kZWxldGUtYnV0dG9uIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmRlbGV0ZS1idXR0b246Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAxMDAsIDEwMCwgMC42NjQpO1xcclxcbn1cXHJcXG4jZGVsZXRlLW1lc3NhZ2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjIwcHg7XFxyXFxuICBsZWZ0OiA0ODVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44OSk7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgei1pbmRleDogMTAwMDA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIH1cXHJcXG4gIGRpdiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiA1JTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9jcmVhdGUtZXZlbnQvaW5kZXguc2Nzcyc7XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcXHJcXG59XFxyXFxuXCIsXCIuY3JlYXRlLWV2ZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGhlaWdodDogMzUwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxyXFxufVxcclxcbmZvcm0ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDE1NiwgMTI2LCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbCB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgbWFyZ2luOiA2cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcbiNwYXJ0aWNpcGFudHMge1xcclxcbiAgaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG4uYnV0dG9ucyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9hc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzI5KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4MTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbi5lbXB0eS1maWVsZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==