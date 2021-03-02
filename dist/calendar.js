/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/***/ ((module) => {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ ((module) => {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ ((module) => {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/Admin.js":
/*!**********************!*\
  !*** ./src/Admin.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Admin)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./src/User.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Admin = /*#__PURE__*/function (_User) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(Admin, _User);

  var _super = _createSuper(Admin);

  function Admin(name) {
    var _this;

    var admin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Admin);

    _this = _super.call(this);
    _this.name = name;
    _this.admin = admin;
    return _this;
  }

  return Admin;
}(_User__WEBPACK_IMPORTED_MODULE_4__.default);



/***/ }),

/***/ "./src/CalendarEvent.js":
/*!******************************!*\
  !*** ./src/CalendarEvent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CalendarEvent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var CalendarEvent = function CalendarEvent(title, timeslot, weekday, participantsId) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CalendarEvent);

  this.title = title;
  this.timeslot = timeslot;
  this.weekday = weekday;
  this.participantsId = participantsId;
};



/***/ }),

/***/ "./src/EventEmitter.js":
/*!*****************************!*\
  !*** ./src/EventEmitter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_app_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app/index */ "./src/components/app/index.js");





var appComponent = new _components_app_index__WEBPACK_IMPORTED_MODULE_4__.default();

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EventEmitter);

    this.callbacks = {};
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(EventEmitter, [{
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

eventEmitter.on('storeChanged', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return appComponent.render();

        case 2:
          setTimeout(appComponent.setupPageListeners.call(appComponent), 1);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventEmitter);

/***/ }),

/***/ "./src/Notification.js":
/*!*****************************!*\
  !*** ./src/Notification.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);





var Notification = /*#__PURE__*/function () {
  function Notification() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Notification);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notification, [{
    key: "successfulResponseNotification",
    value: function () {
      var _successfulResponseNotification = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.responseNotification = document.querySelector('.server-notification');
                this.responseNotification.style.visibility = 'visible';
                setTimeout(function () {
                  _this.responseNotification.style.visibility = 'hidden';
                }, 2000);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function successfulResponseNotification() {
        return _successfulResponseNotification.apply(this, arguments);
      }

      return successfulResponseNotification;
    }()
  }, {
    key: "errorResponseNotification",
    value: function () {
      var _errorResponseNotification = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(err) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.responseNotification = document.querySelector('.server-notification');
                this.responseNotification.classList.add('err');
                this.responseNotification.innerText = err.message;
                setTimeout(function () {
                  _this2.responseNotification.style.visibility = 'hidden';
                }, 2000);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function errorResponseNotification(_x) {
        return _errorResponseNotification.apply(this, arguments);
      }

      return errorResponseNotification;
    }()
  }]);

  return Notification;
}();

var notification = new Notification();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (notification);

/***/ }),

/***/ "./src/Service.js":
/*!************************!*\
  !*** ./src/Service.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);






var Service = /*#__PURE__*/function () {
  function Service() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Service);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "apiBase", 'http://158.101.166.74:8080/api/data/anpilov_a/');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Service, [{
    key: "getEventsData",
    value: function () {
      var _getEventsData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee(url) {
        var res, eventsData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch("".concat(this.apiBase).concat(url));

              case 2:
                res = _context.sent;

                if (res.ok) {
                  _context.next = 5;
                  break;
                }

                throw new Error("Could not fetch ".concat(url) + ", received ".concat(res.status));

              case 5:
                _context.next = 7;
                return res.json();

              case 7:
                eventsData = _context.sent;
                return _context.abrupt("return", eventsData === null ? [] : eventsData.map(function (_ref) {
                  var id = _ref.id,
                      data = _ref.data;
                  return {
                    id: id,
                    data: JSON.parse(data)
                  };
                }));

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEventsData(_x) {
        return _getEventsData.apply(this, arguments);
      }

      return getEventsData;
    }()
  }, {
    key: "deleteEvent",
    value: function () {
      var _deleteEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(url) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch("".concat(this.apiBase).concat(url), {
                  method: 'DELETE'
                });

              case 2:
                res = _context2.sent;

                if (res.ok) {
                  _context2.next = 5;
                  break;
                }

                throw new Error("Could not fetch ".concat(url) + ", received ".concat(res.status));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteEvent(_x2) {
        return _deleteEvent.apply(this, arguments);
      }

      return deleteEvent;
    }()
  }, {
    key: "setEvent",
    value: function () {
      var _setEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(url, body) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch("".concat(this.apiBase).concat(url), {
                  method: 'POST',
                  body: JSON.stringify({
                    data: JSON.stringify(body)
                  })
                });

              case 2:
                res = _context3.sent;

                if (res.ok) {
                  _context3.next = 5;
                  break;
                }

                throw new Error("Could not fetch ".concat(url) + ", received ".concat(res.status));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function setEvent(_x3, _x4) {
        return _setEvent.apply(this, arguments);
      }

      return setEvent;
    }()
  }]);

  return Service;
}();

var service = new Service();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (service);

/***/ }),

/***/ "./src/User.js":
/*!*********************!*\
  !*** ./src/User.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



var User = function User(name) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);

  User.counterId += 1;
  this.id = User.counterId;
  this.name = name;
};

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(User, "counterId", 1);



/***/ }),

/***/ "./src/components/app/index.js":
/*!*************************************!*\
  !*** ./src/components/app/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar/index */ "./src/components/calendar/index.js");
/* harmony import */ var _createEvent_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../createEvent/index */ "./src/components/createEvent/index.js");
/* harmony import */ var _loginWindow_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loginWindow/index */ "./src/components/loginWindow/index.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Notification */ "./src/Notification.js");











var App = /*#__PURE__*/function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, "componentsMap", {
      calendar: new _calendar_index__WEBPACK_IMPORTED_MODULE_6__.default(),
      createEvent: new _createEvent_index__WEBPACK_IMPORTED_MODULE_7__.default(),
      loginWindow: new _loginWindow_index__WEBPACK_IMPORTED_MODULE_8__.default()
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: "render",
    value: function () {
      var _render = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var component;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                component = this.componentsMap[(0,_store_index__WEBPACK_IMPORTED_MODULE_5__.getField)('componentForRenderName')];

                if (!(component instanceof _calendar_index__WEBPACK_IMPORTED_MODULE_6__.default)) {
                  _context.next = 14;
                  break;
                }

                _context.prev = 2;
                _context.next = 5;
                return component.render();

              case 5:
                document.getElementById('application').innerHTML = _context.sent;
                _Notification__WEBPACK_IMPORTED_MODULE_9__.default.successfulResponseNotification();
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);
                _Notification__WEBPACK_IMPORTED_MODULE_9__.default.errorResponseNotification(_context.t0);

              case 12:
                _context.next = 18;
                break;

              case 14:
                if (!(component && component.render)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 17;
                return component.render();

              case 17:
                document.getElementById('application').innerHTML = _context.sent;

              case 18:
                return _context.abrupt("return", '<div>Sorry, something went wrong!</div>');

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: "setupPageListeners",
    value: function setupPageListeners() {
      var component = this.componentsMap[(0,_store_index__WEBPACK_IMPORTED_MODULE_5__.getField)('componentForRenderName')];

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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Service */ "./src/Service.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Notification */ "./src/Notification.js");









var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Calendar);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Calendar, [{
    key: "checkMode",
    value: function checkMode() {
      if (Calendar.adminMode === false) {
        this.modeStyle = 'display:none';
      }

      return this.modeStyle;
    }
  }, {
    key: "createFilterSelect",
    value: function createFilterSelect() {
      var _this = this;

      this.checkMode();
      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('people');
      var filterSelectedId = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('filterSelectedId');
      this.options = '';
      people.forEach(function (human) {
        _this.options += "<option ".concat(filterSelectedId === human.id ? 'selected' : '', " value='").concat(human.id, "'>").concat(human.name, "</option>");
      });
      return "\n        <select id=\"participants-filter\">\n            <option value='0' ".concat(filterSelectedId === 0 ? 'selected' : '', ">All members</option>\n            ").concat(this.options, "\n        </select>\n        <button id=\"new-event\" style=").concat(this.modeStyle, ">New event +</button>\n            ");
    }
  }, {
    key: "getWeekdaysMarkup",
    value: function getWeekdaysMarkup() {
      var _this2 = this;

      var weekdays = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('weekdays');
      this.result = '<div class="time-header">Time</div>';
      weekdays.forEach(function (weekday) {
        _this2.result += "<div class= \"day\">".concat(weekday, "</div> ");
      });
      return this.result;
    }
  }, {
    key: "getTimeslotsMarkup",
    value: function getTimeslotsMarkup() {
      var _this3 = this;

      var timeslots = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('timeslots');
      this.result = '';
      timeslots.forEach(function (timeslot) {
        _this3.result += "<div class= \"time\">".concat(timeslot, "</div>");
      });
      return this.result;
    }
  }, {
    key: "getCalendarBodyMarkup",
    value: function () {
      var _getCalendarBodyMarkup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var _this4 = this;

        var events, _loop, i;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.checkMode();
                _context.next = 3;
                return this.filterEvent();

              case 3:
                events = _context.sent;
                this.result = '';

                _loop = function _loop(i) {
                  var _loop2 = function _loop2(j) {
                    var event = events.find(function (ev) {
                      return ev.data.weekday === j && ev.data.timeslot === i;
                    });

                    if (event) {
                      _this4.result += "<div class=\"active-event\" value=\"".concat(event.data.title, "\"> ").concat(event.data.title, "\n                    <button class=\"delete-button\" id='").concat(event.id, "' style=").concat(_this4.modeStyle, ">X</button></div>");
                    } else {
                      _this4.result += '<div></div>';
                    }
                  };

                  for (var j = 0; j < 5; j += 1) {
                    _loop2(j);
                  }
                };

                for (i = 0; i < 9; i += 1) {
                  _loop(i);
                }

                return _context.abrupt("return", this.result);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCalendarBodyMarkup() {
        return _getCalendarBodyMarkup.apply(this, arguments);
      }

      return getCalendarBodyMarkup;
    }()
  }, {
    key: "setupPageListeners",
    value: function setupPageListeners() {
      var newEventButton = document.getElementById('new-event');
      var filterPeopleSelect = document.getElementById('participants-filter');
      var deleteEventButtons = document.querySelectorAll('.delete-button');
      newEventButton.addEventListener('click', function () {
        return (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.setField)('componentForRenderName', 'createEvent');
      });

      for (var i = 0; i < deleteEventButtons.length; i += 1) {
        deleteEventButtons[i].addEventListener('click', this.deleteEvent);
      }

      filterPeopleSelect.addEventListener('change', function (event) {
        (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.setField)('filterSelectedId', +event.target.value);
      });
    }
  }, {
    key: "deleteEvent",
    value: function () {
      var _deleteEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3(browserEvent) {
        var deleteEventMessage, deleteEventTitleMessage, eventTitle, cancelDelete, сonfirmDelete;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _Service__WEBPACK_IMPORTED_MODULE_5__.default.getEventsData('events');

              case 3:
                this.events = _context3.sent;
                deleteEventMessage = document.getElementById('delete-message');
                deleteEventTitleMessage = document.getElementById('delete-title');
                eventTitle = browserEvent.target.parentNode.attributes.value.value;
                deleteEventTitleMessage.innerHTML = eventTitle;
                deleteEventMessage.style.display = 'block';
                cancelDelete = document.getElementById('cancel-delete');
                сonfirmDelete = document.getElementById('confirm-delete');
                cancelDelete.addEventListener('click', function () {
                  deleteEventMessage.style.display = 'none';
                });
                сonfirmDelete.addEventListener('click', /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _Service__WEBPACK_IMPORTED_MODULE_5__.default.deleteEvent("events/".concat(browserEvent.target.attributes.id.value));

                        case 2:
                          deleteEventMessage.style.display = 'none';
                          (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.setField)('componentForRenderName', 'calendar');

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                })));
                _Notification__WEBPACK_IMPORTED_MODULE_7__.default.successfulResponseNotification();
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](0);
                _Notification__WEBPACK_IMPORTED_MODULE_7__.default.errorResponseNotification(_context3.t0);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 16]]);
      }));

      function deleteEvent(_x) {
        return _deleteEvent.apply(this, arguments);
      }

      return deleteEvent;
    }()
  }, {
    key: "filterEvent",
    value: function () {
      var _filterEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
        var events, filterSelectedId;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _Service__WEBPACK_IMPORTED_MODULE_5__.default.getEventsData('events');

              case 2:
                events = _context4.sent;
                filterSelectedId = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('filterSelectedId');

                if (!(filterSelectedId === 0)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt("return", events);

              case 6:
                this.filteredEvents = events.filter(function (ev) {
                  return ev.data.participantsId.some(function (id) {
                    return id === filterSelectedId;
                  });
                });
                return _context4.abrupt("return", this.filteredEvents);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function filterEvent() {
        return _filterEvent.apply(this, arguments);
      }

      return filterEvent;
    }()
  }, {
    key: "render",
    value: function () {
      var _render = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.t0 = "\n    <p class=\"server-notification\">A connection was successfully established with the server</p>\n    <div class= \"calendar-component\" >\n        <div class=\"header\">\n            <h1>Calendar</h1>\n            <div class=\"filter\">\n                    ".concat(this.createFilterSelect(), "\n            </div>\n            </div>\n        <div class=\"calendar\">\n            <div class=\"weekdays\">\n                    ").concat(this.getWeekdaysMarkup(), "\n            </div>\n            <div class=\"time-column\">\n                    ").concat(this.getTimeslotsMarkup(), "\n            </div>\n            <div id='events-body'>\n                   ");
                _context5.next = 3;
                return this.getCalendarBodyMarkup();

              case 3:
                _context5.t1 = _context5.sent;
                return _context5.abrupt("return", _context5.t0.concat.call(_context5.t0, _context5.t1, "\n            </div>\n        </div>\n            <div id=\"delete-message\">\n                 <p>Are you sure want to delete \"<span id=\"delete-title\"></span>\" event?</p>\n                <div>\n                    <button id=\"cancel-delete\">No</button>\n                    <button id=\"confirm-delete\">Yes</button>\n                </div>\n            </div>\n    </div>\n                "));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
  }]);

  return Calendar;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(Calendar, "adminMode", null);



/***/ }),

/***/ "./src/components/createEvent/index.js":
/*!*********************************************!*\
  !*** ./src/components/createEvent/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateEvent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CalendarEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../CalendarEvent */ "./src/CalendarEvent.js");
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Service */ "./src/Service.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Notification */ "./src/Notification.js");









var CreateEvent = /*#__PURE__*/function () {
  function CreateEvent() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CreateEvent);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CreateEvent, [{
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

      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('people');
      this.options = '';
      people.forEach(function (human) {
        _this.options += "<option value='".concat(human.id, "'>").concat(human.name, "</option>");
      });
      return "\n        <label for=\"participants\">Participants:</label>\n        <select id=\"participants\" multiple>\n            <option value='0'selected>All members</option>\n            ".concat(this.options, "\n        </select><br>");
    }
  }, {
    key: "createWeekdaySelect",
    value: function createWeekdaySelect() {
      var weekdays = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('weekdays');
      this.options = '';

      for (var i = 0; i < weekdays.length; i += 1) {
        this.options += "<option value=".concat(i, ">").concat(weekdays[i], "</option>");
      }

      return "\n        <label for=\"select-day\">Day:</label>\n        <select id =\"select-day\">\n        ".concat(this.options, "\n        </select><br>");
    }
  }, {
    key: "createTimeSelect",
    value: function createTimeSelect() {
      var timeslots = (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.getField)('timeslots');
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
        (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.setField)('componentForRenderName', 'calendar');
      });
    }
  }, {
    key: "settingNewEvent",
    value: function () {
      var _settingNewEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var eventTitle, eventParticipants, eventParticipantId, i, eventDays, eventWeekdayValue, _i, eventTimes, eventTimeValue, _i2, events, event, toast, eventTitleInput;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.eventObj = {};
                eventTitle = document.getElementById('event-name').value;
                eventParticipants = document.getElementById('participants').children;
                eventParticipantId = [];

                for (i = 0; i < eventParticipants.length; i += 1) {
                  if (eventParticipants[i].selected) {
                    eventParticipantId.push(+eventParticipants[i].attributes.value.value);
                  }
                }

                eventDays = document.getElementById('select-day').children;
                eventWeekdayValue = '';

                for (_i = 0; _i < eventDays.length; _i += 1) {
                  if (eventDays[_i].selected) {
                    eventWeekdayValue = +eventDays[_i].attributes.value.value;
                  }
                }

                eventTimes = document.getElementById('select-time').children;
                eventTimeValue = '';

                for (_i2 = 0; _i2 < eventTimes.length; _i2 += 1) {
                  if (eventTimes[_i2].selected) {
                    eventTimeValue = +eventTimes[_i2].attributes.value.value;
                  }
                }

                _context.prev = 11;
                _context.next = 14;
                return _Service__WEBPACK_IMPORTED_MODULE_5__.default.getEventsData('events/');

              case 14:
                events = _context.sent;
                event = events.find(function (e) {
                  return e.data.weekday === eventWeekdayValue && e.data.timeslot === eventTimeValue;
                });

                if (!event) {
                  _context.next = 21;
                  break;
                }

                toast = document.querySelector('.toast');
                toast.style.visibility = 'visible';
                _context.next = 31;
                break;

              case 21:
                if (eventTitle) {
                  _context.next = 27;
                  break;
                }

                eventTitleInput = document.getElementById('event-name');
                eventTitleInput.setAttribute('placeholder', 'Required field');
                eventTitleInput.classList.add('empty-field');
                _context.next = 31;
                break;

              case 27:
                this.eventObj = new _CalendarEvent__WEBPACK_IMPORTED_MODULE_4__.default(eventTitle, eventTimeValue, eventWeekdayValue, eventParticipantId);
                _context.next = 30;
                return _Service__WEBPACK_IMPORTED_MODULE_5__.default.setEvent('events', this.eventObj);

              case 30:
                (0,_store_index__WEBPACK_IMPORTED_MODULE_6__.setField)('componentForRenderName', 'calendar');

              case 31:
                _Notification__WEBPACK_IMPORTED_MODULE_7__.default.successfulResponseNotification();
                _context.next = 37;
                break;

              case 34:
                _context.prev = 34;
                _context.t0 = _context["catch"](11);
                _Notification__WEBPACK_IMPORTED_MODULE_7__.default.errorResponseNotification(_context.t0);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[11, 34]]);
      }));

      function settingNewEvent() {
        return _settingNewEvent.apply(this, arguments);
      }

      return settingNewEvent;
    }()
  }, {
    key: "hideToast",
    value: function hideToast() {
      this.toast = document.querySelector('.toast');
      this.toast.style.visibility = 'hidden';
    }
  }, {
    key: "render",
    value: function render() {
      return "\n    <p class=\"server-notification\">A connection was successfully established with the server</p>\n    <div class=\"create-event\">\n       ".concat(this.createToast(), "\n      <form>\n        ").concat(this.createInput(), "\n        ").concat(this.createPeopleSelect(), "\n        ").concat(this.createWeekdaySelect(), "\n        ").concat(this.createTimeSelect(), "\n        ").concat(this.createButtons(), "\n      </form>\n    </div>\n        ");
    }
  }]);

  return CreateEvent;
}();



/***/ }),

/***/ "./src/components/loginWindow/index.js":
/*!*********************************************!*\
  !*** ./src/components/loginWindow/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginWindow)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/index */ "./src/components/calendar/index.js");





var LoginWindow = /*#__PURE__*/function () {
  function LoginWindow() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LoginWindow);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LoginWindow, [{
    key: "createLoginWindow",
    value: function createLoginWindow() {
      var _this = this;

      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_2__.getField)('people');
      this.options = '';
      people.forEach(function (human) {
        _this.options += "<option value='".concat(human.id, "'>").concat(human.name, "</option>");
      });
      return "\n    <div id=\"login-window\">\n    <h1>Please authorise</h1>\n    <select id=\"login-select\">".concat(this.options, "</select>\n    <div><button id=\"login-button\">Confirm</button></div>\n    </div>\n    ");
    }
  }, {
    key: "setupPageListeners",
    value: function setupPageListeners() {
      var loginButton = document.getElementById('login-button');
      loginButton.addEventListener('click', this.loginEvent);
    }
  }, {
    key: "loginEvent",
    value: function loginEvent() {
      this.people = (0,_store_index__WEBPACK_IMPORTED_MODULE_2__.getField)('people');
      var selectedLoginHumanId = document.getElementById('login-select').value;

      if (!this.people.find(function (human) {
        return human.id === +selectedLoginHumanId && human.admin;
      })) {
        _calendar_index__WEBPACK_IMPORTED_MODULE_3__.default.adminMode = false;
      } else {
        _calendar_index__WEBPACK_IMPORTED_MODULE_3__.default.adminMode = true;
      }

      (0,_store_index__WEBPACK_IMPORTED_MODULE_2__.setField)('componentForRenderName', 'calendar');
    }
  }, {
    key: "render",
    value: function render() {
      return "\n    ".concat(this.createLoginWindow(), "\n");
    }
  }]);

  return LoginWindow;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
    componentForRenderName: 'loginWindow',
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

"use strict";
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
___CSS_LOADER_EXPORT___.push([module.id, ".calendar-component {\n  position: relative;\n  font-family: \"Trebuchet\", sans-serif;\n  width: 1200px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n\n.header {\n  display: flex;\n}\n.header h1 {\n  margin-bottom: 5px;\n}\n.header .filter {\n  margin-left: auto;\n  margin-top: auto;\n  margin-bottom: 5px;\n}\n\n.filter button, .filter select {\n  width: 150px;\n  height: 30px;\n}\n.filter button {\n  cursor: pointer;\n}\n\n.calendar {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  grid-template-areas: \"w w w w w w\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\" \"t e e e e e\";\n  width: 1200px;\n  height: 100%;\n  border: 2px solid black;\n  border-radius: 5px;\n}\n\n.weekdays {\n  grid-area: w;\n  display: flex;\n  background-color: rgba(104, 107, 103, 0.815);\n  height: 50px;\n  margin-bottom: 0;\n}\n.weekdays .day,\n.weekdays .time-header {\n  width: 200px;\n  padding: 15px;\n  font-weight: bold;\n  text-align: center;\n  border: 1px solid black;\n}\n\n.time-column {\n  grid-area: t;\n  width: 200px;\n  background-color: rgba(76, 78, 75, 0.13);\n}\n.time-column .time {\n  border: 1px solid black;\n  font-weight: bold;\n  text-align: center;\n  padding: 15px;\n}\n\n#events-body {\n  grid-area: e;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(9, 1fr);\n}\n#events-body div {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0;\n  width: 200px;\n  border: 1px solid black;\n}\n#events-body .active-event {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  overflow-wrap: break-word;\n  background-color: rgba(31, 139, 16, 0.795);\n  padding-top: 5px;\n  padding-left: 5px;\n  font-size: 14px;\n  font-weight: bold;\n  border: 1px solid black;\n  vertical-align: middle;\n}\n\n.delete-button {\n  display: block;\n  visibility: hidden;\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: 15px;\n  right: 0;\n  padding: 0;\n  color: #d60e0e;\n  font-weight: bolder;\n  background-color: #ffffff;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.active-event:hover .delete-button {\n  visibility: visible;\n}\n\n.delete-button:focus {\n  outline: none;\n  background-color: rgba(197, 100, 100, 0.664);\n}\n\n#delete-message {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background-color: rgba(104, 107, 103, 0.89);\n  width: 400px;\n  height: 200px;\n  margin-left: -200px;\n  margin-top: -100px;\n  z-index: 10000;\n  font-weight: 600;\n  overflow-wrap: break-word;\n  border: 1px solid black;\n  border-radius: 10px;\n}\n#delete-message p {\n  text-align: center;\n  font-size: 25px;\n  margin-bottom: 15px;\n}\n#delete-message div {\n  position: absolute;\n  bottom: 5%;\n  text-align: center;\n  width: 100%;\n}\n#delete-message button {\n  width: 50px;\n  height: 30px;\n  margin-right: 70px;\n  margin-left: 70px;\n  cursor: pointer;\n}\n\n.create-event {\n  font-family: \"Trebuchet\", sans-serif;\n  width: 600px;\n  height: 350px;\n  margin: auto;\n  font-size: 20px;\n  padding-top: 100px;\n}\n\nform {\n  padding: 10px;\n  margin: auto;\n  width: 100%;\n  border-radius: 10px;\n  border: 1px solid black;\n  background-color: rgba(156, 156, 126, 0.4);\n}\n\nlabel {\n  width: 30%;\n  display: inline-block;\n  margin: 6px;\n  padding-bottom: 20px;\n}\n\ninput {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30%;\n  height: 30px;\n}\n\nselect {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  width: 30%;\n  height: 30px;\n  cursor: pointer;\n}\n\n#participants {\n  height: 70px;\n}\n\n.buttons {\n  display: block;\n  text-align: right;\n}\n.buttons button {\n  cursor: pointer;\n}\n\n.toast {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n  visibility: hidden;\n  background-color: rgba(255, 0, 0, 0.329);\n  color: #fff;\n  border-radius: 10px;\n}\n.toast button {\n  float: right;\n  width: 25px;\n  height: 25px;\n  color: red;\n  font-weight: bold;\n  background-color: #ffffff81;\n  border: none;\n  border-radius: 50px;\n  cursor: pointer;\n}\n\n.empty-field {\n  border: 2px solid red;\n}\n\n#login-window {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 400px;\n  height: 200px;\n  margin-left: -200px;\n  margin-top: -100px;\n  z-index: 10000;\n  background-color: rgba(104, 107, 103, 0.815);\n  width: 400px;\n  border-radius: 10px;\n  border: 1px solid black;\n}\n#login-window h1 {\n  text-align: center;\n}\n#login-window #login-select {\n  display: block;\n  margin: auto;\n  width: 40%;\n  height: 30px;\n  cursor: pointer;\n}\n#login-window div {\n  padding: 40px;\n}\n#login-window div #login-button {\n  display: block;\n  width: 150px;\n  height: 30px;\n  margin: auto;\n  cursor: pointer;\n}\n\nbody {\n  background-color: honeydew;\n}\n\n.server-notification {\n  visibility: hidden;\n  width: 40%;\n  height: 5px;\n  line-height: 3px;\n  margin: auto;\n  padding: 10px;\n  text-align: center;\n  background-color: rgba(21, 255, 0, 0.562);\n  border-radius: 10px;\n  font-size: 1.5vw;\n}\n\n.err {\n  background-color: rgba(255, 0, 0, 0.329);\n  visibility: visible;\n}", "",{"version":3,"sources":["webpack://./src/components/calendar/index.scss","webpack://./src/index.scss","webpack://./src/components/createEvent/index.scss","webpack://./src/components/loginWindow/index.scss"],"names":[],"mappings":"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","sourcesContent":[".calendar-component {\r\n  position: relative;\r\n  font-family: 'Trebuchet', sans-serif;\r\n  width: 1200px;\r\n  height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  h1 {\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .filter {\r\n    margin-left: auto;\r\n    margin-top: auto;\r\n    margin-bottom: 5px;\r\n  }\r\n}\r\n\r\n.filter {\r\n  %button-sizes {\r\n    width: 150px;\r\n    height: 30px;\r\n  }\r\n  select {\r\n    @extend %button-sizes;\r\n  }\r\n  button {\r\n    cursor: pointer;\r\n    @extend %button-sizes;\r\n  }\r\n}\r\n.calendar {\r\n  display: grid;\r\n  grid-template-columns: repeat(6, 1fr);\r\n  grid-template-rows: repeat(10, 1fr);\r\n  grid-template-areas:\r\n    'w w w w w w'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e'\r\n    't e e e e e';\r\n  width: 1200px;\r\n  height: 100%;\r\n  border: 2px solid black;\r\n  border-radius: 5px;\r\n}\r\n\r\n.weekdays {\r\n  grid-area: w;\r\n  display: flex;\r\n  background-color: rgba(104, 107, 103, 0.815);\r\n  height: 50px;\r\n  margin-bottom: 0;\r\n  .day,\r\n  .time-header {\r\n    width: 200px;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    border: 1px solid black;\r\n  }\r\n}\r\n\r\n.time-column {\r\n  grid-area: t;\r\n  width: 200px;\r\n  background-color: rgba(76, 78, 75, 0.13);\r\n  .time {\r\n    border: 1px solid black;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    padding: 15px;\r\n  }\r\n}\r\n\r\n#events-body {\r\n  grid-area: e;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  grid-template-rows: repeat(9, 1fr);\r\n  div {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    width: 200px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n  .active-event {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    -ms-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    overflow-wrap: break-word;\r\n    background-color: rgba(31, 139, 16, 0.795);\r\n    padding-top: 5px;\r\n    padding-left: 5px;\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    border: 1px solid black;\r\n    vertical-align: middle;\r\n  }\r\n}\r\n.delete-button {\r\n  display: block;\r\n  visibility: hidden;\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  top: 15px;\r\n  right: 0;\r\n  padding: 0;\r\n  color: rgb(214, 14, 14);\r\n  font-weight: bolder;\r\n  background-color: #ffffff;\r\n  border: none;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.active-event:hover {\r\n  .delete-button {\r\n    visibility: visible;\r\n  }\r\n}\r\n.delete-button:focus {\r\n  outline: none;\r\n  background-color: rgba(197, 100, 100, 0.664);\r\n}\r\n#delete-message {\r\n  display: none;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  background-color: rgba(104, 107, 103, 0.89);\r\n  width: 400px;\r\n  height: 200px;\r\n  margin-left: -200px;\r\n  margin-top: -100px;\r\n  z-index: 10000;\r\n  font-weight: 600;\r\n  overflow-wrap: break-word;\r\n  border: 1px solid black;\r\n  border-radius: 10px;\r\n  p {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    margin-bottom: 15px;\r\n  }\r\n  div {\r\n    position: absolute;\r\n    bottom: 5%;\r\n    text-align: center;\r\n    width: 100%;\r\n  }\r\n  button {\r\n    width: 50px;\r\n    height: 30px;\r\n    margin-right: 70px;\r\n    margin-left: 70px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n","@import './components/calendar/index.scss';\r\n@import './components/createEvent/index.scss';\r\n@import './components/loginWindow/index.scss';\r\nbody {\r\n  background-color: honeydew;\r\n}\r\n\r\n.server-notification {\r\n  visibility: hidden;\r\n  width: 40%;\r\n  height: 5px;\r\n  line-height: 3px;\r\n  margin: auto;\r\n  padding: 10px;\r\n  text-align: center;\r\n  background-color: rgba(21, 255, 0, 0.562);\r\n  border-radius: 10px;\r\n  font-size: 1.5vw;\r\n}\r\n\r\n.err {\r\n  background-color:rgba(255, 0, 0, 0.329);\r\n  visibility: visible;\r\n}",".create-event {\r\n  font-family: 'Trebuchet', sans-serif;\r\n  width: 600px;\r\n  height: 350px;\r\n  margin: auto;\r\n  font-size: 20px;\r\n  padding-top: 100px;\r\n}\r\nform {\r\n  padding: 10px;\r\n  margin: auto;\r\n  width: 100%;\r\n  border-radius: 10px;\r\n  border: 1px solid black;\r\n  background-color: rgba(156, 156, 126, 0.4);\r\n}\r\n\r\nlabel {\r\n  width: 30%;\r\n  display: inline-block;\r\n  margin: 6px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\ninput {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  height: 30px;\r\n}\r\n\r\nselect {\r\n  -webkit-box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -ms-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n  width: 30%;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n#participants {\r\n  height: 70px;\r\n}\r\n.buttons {\r\n  display: block;\r\n  text-align: right;\r\n button {\r\ncursor: pointer;\r\n}\r\n}\r\n\r\n.toast {\r\n  width: 100%;\r\n  margin: auto;\r\n  padding: 10px;\r\n  visibility: hidden;\r\n  background-color: rgba(255, 0, 0, 0.329);\r\n  color: #fff;\r\n  border-radius: 10px;\r\n  button {\r\n    float: right;\r\n    width: 25px;\r\n    height: 25px;\r\n    color: red;\r\n    font-weight: bold;\r\n    background-color: #ffffff81;\r\n    border: none;\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n  }\r\n}\r\n.empty-field {\r\n  border: 2px solid red;\r\n}\r\n","#login-window {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 400px;\r\n    height: 200px;\r\n    margin-left: -200px;\r\n    margin-top: -100px;\r\n    z-index: 10000;\r\n    background-color: rgba(104, 107, 103, 0.815);\r\n    width: 400px;\r\n    border-radius: 10px;\r\n    border: 1px solid black;\r\n    h1 {\r\n      text-align: center;\r\n    }\r\n    #login-select {\r\n  display: block;\r\n  margin: auto;\r\n  width: 40%;\r\n  height: 30px;\r\n  cursor: pointer;\r\n    }\r\n    div {\r\n      padding: 40px;\r\n    #login-button {\r\n      display: block;\r\n      width: 150px;\r\n      height: 30px;\r\n      margin: auto;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9BZG1pbi5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL0NhbGVuZGFyRXZlbnQuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9FdmVudEVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9TZXJ2aWNlLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvVXNlci5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlRXZlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9jb21wb25lbnRzL2xvZ2luV2luZG93L2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiQWRtaW4iLCJuYW1lIiwiYWRtaW4iLCJVc2VyIiwiQ2FsZW5kYXJFdmVudCIsInRpdGxlIiwidGltZXNsb3QiLCJ3ZWVrZGF5IiwicGFydGljaXBhbnRzSWQiLCJhcHBDb21wb25lbnQiLCJBcHAiLCJFdmVudEVtaXR0ZXIiLCJjYWxsYmFja3MiLCJldmVudCIsImNiIiwicHVzaCIsImRhdGEiLCJjYnMiLCJmb3JFYWNoIiwiZXZlbnRFbWl0dGVyIiwib24iLCJyZW5kZXIiLCJzZXRUaW1lb3V0Iiwic2V0dXBQYWdlTGlzdGVuZXJzIiwiY2FsbCIsIk5vdGlmaWNhdGlvbiIsInJlc3BvbnNlTm90aWZpY2F0aW9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiZXJyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwibWVzc2FnZSIsIm5vdGlmaWNhdGlvbiIsIlNlcnZpY2UiLCJ1cmwiLCJmZXRjaCIsImFwaUJhc2UiLCJyZXMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwianNvbiIsImV2ZW50c0RhdGEiLCJtYXAiLCJpZCIsIkpTT04iLCJwYXJzZSIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJzZXJ2aWNlIiwiY291bnRlcklkIiwiY2FsZW5kYXIiLCJDYWxlbmRhciIsImNyZWF0ZUV2ZW50IiwiQ3JlYXRlRXZlbnQiLCJsb2dpbldpbmRvdyIsIkxvZ2luV2luZG93IiwiY29tcG9uZW50IiwiY29tcG9uZW50c01hcCIsImdldEZpZWxkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJhZG1pbk1vZGUiLCJtb2RlU3R5bGUiLCJjaGVja01vZGUiLCJwZW9wbGUiLCJmaWx0ZXJTZWxlY3RlZElkIiwib3B0aW9ucyIsImh1bWFuIiwid2Vla2RheXMiLCJyZXN1bHQiLCJ0aW1lc2xvdHMiLCJmaWx0ZXJFdmVudCIsImV2ZW50cyIsImkiLCJqIiwiZmluZCIsImV2IiwibmV3RXZlbnRCdXR0b24iLCJmaWx0ZXJQZW9wbGVTZWxlY3QiLCJkZWxldGVFdmVudEJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldEZpZWxkIiwibGVuZ3RoIiwiZGVsZXRlRXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJyb3dzZXJFdmVudCIsImRlbGV0ZUV2ZW50TWVzc2FnZSIsImRlbGV0ZUV2ZW50VGl0bGVNZXNzYWdlIiwiZXZlbnRUaXRsZSIsInBhcmVudE5vZGUiLCJhdHRyaWJ1dGVzIiwiZGlzcGxheSIsImNhbmNlbERlbGV0ZSIsItGBb25maXJtRGVsZXRlIiwiZmlsdGVyZWRFdmVudHMiLCJmaWx0ZXIiLCJzb21lIiwiY3JlYXRlRmlsdGVyU2VsZWN0IiwiZ2V0V2Vla2RheXNNYXJrdXAiLCJnZXRUaW1lc2xvdHNNYXJrdXAiLCJnZXRDYWxlbmRhckJvZHlNYXJrdXAiLCJjbG9zZVRvYXN0QnV0dG9uIiwiY3JlYXRlRXZlbnRCdXR0b24iLCJjYW5jZWxFdmVudEJ1dHRvbiIsImhpZGVUb2FzdCIsInByZXZlbnREZWZhdWx0Iiwic2V0dGluZ05ld0V2ZW50IiwiZXZlbnRPYmoiLCJldmVudFBhcnRpY2lwYW50cyIsImNoaWxkcmVuIiwiZXZlbnRQYXJ0aWNpcGFudElkIiwic2VsZWN0ZWQiLCJldmVudERheXMiLCJldmVudFdlZWtkYXlWYWx1ZSIsImV2ZW50VGltZXMiLCJldmVudFRpbWVWYWx1ZSIsImUiLCJ0b2FzdCIsImV2ZW50VGl0bGVJbnB1dCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZVRvYXN0IiwiY3JlYXRlSW5wdXQiLCJjcmVhdGVQZW9wbGVTZWxlY3QiLCJjcmVhdGVXZWVrZGF5U2VsZWN0IiwiY3JlYXRlVGltZVNlbGVjdCIsImNyZWF0ZUJ1dHRvbnMiLCJsb2dpbkJ1dHRvbiIsImxvZ2luRXZlbnQiLCJzZWxlY3RlZExvZ2luSHVtYW5JZCIsImNyZWF0ZUxvZ2luV2luZG93IiwiaW5pdFN0b3JlIiwicGFydGljaXBhbnRzIiwic3RvcmUiLCJjb21wb25lbnRGb3JSZW5kZXJOYW1lIiwiZmllbGRuYW1lIiwiZmllbGRWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLG1DOzs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4Qjs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7O0FDUEEscUJBQXFCLG1CQUFPLENBQUMsaUZBQWtCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSwyQjs7Ozs7Ozs7OztBQ2pCQSxjQUFjLG1CQUFPLENBQUMsc0ZBQStCOztBQUVyRCw0QkFBNEIsbUJBQU8sQ0FBQywrRkFBeUI7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsNEM7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUM7Ozs7Ozs7Ozs7QUNUQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUI7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztB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QUFrQix1QkFBdUIsOENBQThDLHdCQUF3QixxQkFBcUIsR0FBRyxVQUFVLDZDQUE2Qyx3QkFBd0IsR0FBRyxPQUFPLDBPQUEwTyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxV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QTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRtaW4gZXh0ZW5kcyBVc2VyIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBhZG1pbiA9IHRydWUpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5hZG1pbiA9IGFkbWluO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxlbmRhckV2ZW50IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgdGltZXNsb3QsIHdlZWtkYXksIHBhcnRpY2lwYW50c0lkKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRpbWVzbG90ID0gdGltZXNsb3Q7XHJcbiAgICB0aGlzLndlZWtkYXkgPSB3ZWVrZGF5O1xyXG4gICAgdGhpcy5wYXJ0aWNpcGFudHNJZCA9IHBhcnRpY2lwYW50c0lkO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvaW5kZXgnO1xyXG5cclxuY29uc3QgYXBwQ29tcG9uZW50ID0gbmV3IEFwcCgpO1xyXG5cclxuY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XHJcbiAgfVxyXG5cclxuICBvbihldmVudCwgY2IpIHtcclxuICAgIGlmICghdGhpcy5jYWxsYmFja3NbZXZlbnRdKSB0aGlzLmNhbGxiYWNrc1tldmVudF0gPSBbXTtcclxuICAgIHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNiKTtcclxuICB9XHJcblxyXG4gIGVtaXQoZXZlbnQsIGRhdGEpIHtcclxuICAgIGNvbnN0IGNicyA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcclxuICAgIGlmIChjYnMpIHtcclxuICAgICAgY2JzLmZvckVhY2goKGNiKSA9PiBjYihkYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4vLyBzZXR1cCBvdXIgbGlzdGVuZXJzIGZvciBldmVudCBFbWl0dGVyXHJcbmV2ZW50RW1pdHRlci5vbignc3RvcmVDaGFuZ2VkJywgYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IGFwcENvbXBvbmVudC5yZW5kZXIoKTtcclxuICBzZXRUaW1lb3V0KGFwcENvbXBvbmVudC5zZXR1cFBhZ2VMaXN0ZW5lcnMuY2FsbChhcHBDb21wb25lbnQpLCAxKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBldmVudEVtaXR0ZXI7XHJcbiIsImNsYXNzIE5vdGlmaWNhdGlvbiB7XHJcblxyXG5cclxuXHJcbiAgYXN5bmMgc3VjY2Vzc2Z1bFJlc3BvbnNlTm90aWZpY2F0aW9uKCkge1xyXG4gICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2ZXItbm90aWZpY2F0aW9uJyk7XHJcbiAgICB0aGlzLnJlc3BvbnNlTm90aWZpY2F0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICB9LCAyMDAwKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGVycm9yUmVzcG9uc2VOb3RpZmljYXRpb24oZXJyKSB7XHJcblxyXG4gICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2ZXItbm90aWZpY2F0aW9uJyk7XHJcbiAgICB0aGlzLnJlc3BvbnNlTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2VycicpO1xyXG4gICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSBlcnIubWVzc2FnZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc3BvbnNlTm90aWZpY2F0aW9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIH0sIDIwMDApO1xyXG5cclxufVxyXG59XHJcblxyXG5jb25zdCBub3RpZmljYXRpb24gPSBuZXcgTm90aWZpY2F0aW9uKCk7XHJcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvbjtcclxuIiwiY2xhc3MgU2VydmljZSB7XHJcbiAgICBhcGlCYXNlID0gJ2h0dHA6Ly8xNTguMTAxLjE2Ni43NDo4MDgwL2FwaS9kYXRhL2FucGlsb3ZfYS8nXHJcblxyXG4gICAgYXN5bmMgZ2V0RXZlbnRzRGF0YSh1cmwpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5hcGlCYXNlfSR7dXJsfWApO1xyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZldGNoICR7dXJsfWBcclxuICAgICAgICAgICAgKyBgLCByZWNlaXZlZCAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZXZlbnRzRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHJldHVybiBldmVudHNEYXRhID09PSBudWxsID8gW10gOiBldmVudHNEYXRhLm1hcCgoeyBpZCwgZGF0YSB9KSA9PiAoe1xyXG4gICAgICAgIGlkLCBkYXRhOiBKU09OLnBhcnNlKGRhdGEpLFxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlRXZlbnQodXJsKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMuYXBpQmFzZX0ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggJHt1cmx9YFxyXG4gICAgICAgICAgICsgYCwgcmVjZWl2ZWQgJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0RXZlbnQodXJsLCBib2R5KSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMuYXBpQmFzZX0ke3VybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiBKU09OLnN0cmluZ2lmeShib2R5KSB9KSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggJHt1cmx9YFxyXG4gICAgICAgICAgICAgICAgICAgKyBgLCByZWNlaXZlZCAke3Jlcy5zdGF0dXN9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2VydmljZSA9IG5ldyBTZXJ2aWNlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2U7XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xyXG4gICAgc3RhdGljIGNvdW50ZXJJZCA9IDFcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgIFVzZXIuY291bnRlcklkICs9IDE7XHJcbiAgICAgIHRoaXMuaWQgPSBVc2VyLmNvdW50ZXJJZDtcclxuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnZXRGaWVsZCB9IGZyb20gJy4uLy4uL3N0b3JlL2luZGV4JztcclxuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NhbGVuZGFyL2luZGV4JztcclxuaW1wb3J0IENyZWF0ZUV2ZW50IGZyb20gJy4uL2NyZWF0ZUV2ZW50L2luZGV4JztcclxuaW1wb3J0IExvZ2luV2luZG93IGZyb20gJy4uL2xvZ2luV2luZG93L2luZGV4JztcclxuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIHtcclxuICAgIGNvbXBvbmVudHNNYXAgPSB7XHJcbiAgICAgIGNhbGVuZGFyOiBuZXcgQ2FsZW5kYXIoKSxcclxuICAgICAgY3JlYXRlRXZlbnQ6IG5ldyBDcmVhdGVFdmVudCgpLFxyXG4gICAgICBsb2dpbldpbmRvdzogbmV3IExvZ2luV2luZG93KCksXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIHJlbmRlcigpIHtcclxuXHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c01hcFtnZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScpXTtcclxuICAgICAgXHJcbmlmKGNvbXBvbmVudCBpbnN0YW5jZW9mIENhbGVuZGFyKXtcclxuICB0cnkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2F0aW9uJykuaW5uZXJIVE1MID0gYXdhaXQgY29tcG9uZW50LnJlbmRlcigpO1xyXG4gICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3NmdWxSZXNwb25zZU5vdGlmaWNhdGlvbigpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgbm90aWZpY2F0aW9uLmVycm9yUmVzcG9uc2VOb3RpZmljYXRpb24oZXJyKTtcclxufSBcclxufSBlbHNlIGlmKGNvbXBvbmVudCAmJiBjb21wb25lbnQucmVuZGVyKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbGljYXRpb24nKS5pbm5lckhUTUwgPSBhd2FpdCBjb21wb25lbnQucmVuZGVyKCk7XHJcbn1cclxuXHJcbiAgICAgIHJldHVybiAnPGRpdj5Tb3JyeSwgc29tZXRoaW5nIHdlbnQgd3JvbmchPC9kaXY+JztcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFBhZ2VMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c01hcFtnZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScpXTtcclxuICAgICAgaWYgKGNvbXBvbmVudCAmJiBjb21wb25lbnQuc2V0dXBQYWdlTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgY29tcG9uZW50LnNldHVwUGFnZUxpc3RlbmVycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHNlcnZpY2UgZnJvbSAnLi4vLi4vU2VydmljZSc7XHJcbmltcG9ydCB7IGdldEZpZWxkLCBzZXRGaWVsZCB9IGZyb20gJy4uLy4uL3N0b3JlL2luZGV4JztcclxuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIge1xyXG4gIHN0YXRpYyBhZG1pbk1vZGUgPSBudWxsO1xyXG5cclxuICBjaGVja01vZGUoKSB7XHJcbiAgICBpZiAoQ2FsZW5kYXIuYWRtaW5Nb2RlID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLm1vZGVTdHlsZSA9ICdkaXNwbGF5Om5vbmUnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubW9kZVN0eWxlO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlsdGVyU2VsZWN0KCkge1xyXG4gICAgdGhpcy5jaGVja01vZGUoKTtcclxuICAgIGNvbnN0IHBlb3BsZSA9IGdldEZpZWxkKCdwZW9wbGUnKTtcclxuICAgIGNvbnN0IGZpbHRlclNlbGVjdGVkSWQgPSBnZXRGaWVsZCgnZmlsdGVyU2VsZWN0ZWRJZCcpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gJyc7XHJcbiAgICBwZW9wbGUuZm9yRWFjaCgoaHVtYW4pID0+IHtcclxuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uICR7ZmlsdGVyU2VsZWN0ZWRJZCA9PT0gaHVtYW4uaWQgPyAnc2VsZWN0ZWQnIDogJyd9IHZhbHVlPScke2h1bWFuLmlkfSc+JHtodW1hbi5uYW1lfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJwYXJ0aWNpcGFudHMtZmlsdGVyXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzAnICR7ZmlsdGVyU2VsZWN0ZWRJZCA9PT0gMCA/ICdzZWxlY3RlZCcgOiAnJ30+QWxsIG1lbWJlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgJHt0aGlzLm9wdGlvbnN9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cIm5ldy1ldmVudFwiIHN0eWxlPSR7dGhpcy5tb2RlU3R5bGV9Pk5ldyBldmVudCArPC9idXR0b24+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrZGF5c01hcmt1cCgpIHtcclxuICAgIGNvbnN0IHdlZWtkYXlzID0gZ2V0RmllbGQoJ3dlZWtkYXlzJyk7XHJcbiAgICB0aGlzLnJlc3VsdCA9ICc8ZGl2IGNsYXNzPVwidGltZS1oZWFkZXJcIj5UaW1lPC9kaXY+JztcclxuICAgIHdlZWtkYXlzLmZvckVhY2goKHdlZWtkYXkpID0+IHtcclxuICAgICAgdGhpcy5yZXN1bHQgKz0gYDxkaXYgY2xhc3M9IFwiZGF5XCI+JHt3ZWVrZGF5fTwvZGl2PiBgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZXNsb3RzTWFya3VwKCkge1xyXG4gICAgY29uc3QgdGltZXNsb3RzID0gZ2V0RmllbGQoJ3RpbWVzbG90cycpO1xyXG4gICAgdGhpcy5yZXN1bHQgPSAnJztcclxuICAgIHRpbWVzbG90cy5mb3JFYWNoKCh0aW1lc2xvdCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc3VsdCArPSBgPGRpdiBjbGFzcz0gXCJ0aW1lXCI+JHt0aW1lc2xvdH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRDYWxlbmRhckJvZHlNYXJrdXAoKSB7XHJcbiAgICB0aGlzLmNoZWNrTW9kZSgpO1xyXG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgdGhpcy5maWx0ZXJFdmVudCgpO1xyXG4gICAgdGhpcy5yZXN1bHQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSArPSAxKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaiArPSAxKSB7XHJcbiAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHMuZmluZCgoZXYpID0+IGV2LmRhdGEud2Vla2RheSA9PT0gaiAmJiBldi5kYXRhLnRpbWVzbG90ID09PSBpKTtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgIHRoaXMucmVzdWx0ICs9IGA8ZGl2IGNsYXNzPVwiYWN0aXZlLWV2ZW50XCIgdmFsdWU9XCIke2V2ZW50LmRhdGEudGl0bGV9XCI+ICR7ZXZlbnQuZGF0YS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLWJ1dHRvblwiIGlkPScke2V2ZW50LmlkfScgc3R5bGU9JHt0aGlzLm1vZGVTdHlsZX0+WDwvYnV0dG9uPjwvZGl2PmA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucmVzdWx0ICs9ICc8ZGl2PjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBzZXR1cFBhZ2VMaXN0ZW5lcnMoKSB7XHJcbiAgICBjb25zdCBuZXdFdmVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZXZlbnQnKTtcclxuICAgIGNvbnN0IGZpbHRlclBlb3BsZVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJ0aWNpcGFudHMtZmlsdGVyJyk7XHJcbiAgICBjb25zdCBkZWxldGVFdmVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWJ1dHRvbicpO1xyXG4gICAgbmV3RXZlbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScsICdjcmVhdGVFdmVudCcpKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlRXZlbnRCdXR0b25zLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIGRlbGV0ZUV2ZW50QnV0dG9uc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZGVsZXRlRXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyUGVvcGxlU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xyXG4gICAgICBzZXRGaWVsZCgnZmlsdGVyU2VsZWN0ZWRJZCcsICtldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkZWxldGVFdmVudChicm93c2VyRXZlbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzID0gYXdhaXQgc2VydmljZS5nZXRFdmVudHNEYXRhKCdldmVudHMnKTtcclxuICAgICAgY29uc3QgZGVsZXRlRXZlbnRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1tZXNzYWdlJyk7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZUV2ZW50VGl0bGVNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS10aXRsZScpO1xyXG4gICAgICBjb25zdCBldmVudFRpdGxlID0gYnJvd3NlckV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XHJcbiAgICAgIGRlbGV0ZUV2ZW50VGl0bGVNZXNzYWdlLmlubmVySFRNTCA9IGV2ZW50VGl0bGU7XHJcbiAgICAgIGRlbGV0ZUV2ZW50TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgY29uc3QgY2FuY2VsRGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1kZWxldGUnKTtcclxuICAgICAgY29uc3Qg0YFvbmZpcm1EZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1kZWxldGUnKTtcclxuICAgICAgY2FuY2VsRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUV2ZW50TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB9KTtcclxuICAgICAg0YFvbmZpcm1EZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2VydmljZS5kZWxldGVFdmVudChgZXZlbnRzLyR7YnJvd3NlckV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzLmlkLnZhbHVlfWApO1xyXG4gICAgICAgIGRlbGV0ZUV2ZW50TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBub3RpZmljYXRpb24uc3VjY2Vzc2Z1bFJlc3BvbnNlTm90aWZpY2F0aW9uKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgbm90aWZpY2F0aW9uLmVycm9yUmVzcG9uc2VOb3RpZmljYXRpb24oZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbHRlckV2ZW50KCkge1xyXG4gICAgY29uc3QgZXZlbnRzID0gYXdhaXQgc2VydmljZS5nZXRFdmVudHNEYXRhKCdldmVudHMnKTtcclxuICAgIGNvbnN0IGZpbHRlclNlbGVjdGVkSWQgPSBnZXRGaWVsZCgnZmlsdGVyU2VsZWN0ZWRJZCcpO1xyXG4gICAgaWYgKGZpbHRlclNlbGVjdGVkSWQgPT09IDApIHtcclxuICAgICAgcmV0dXJuIGV2ZW50cztcclxuICAgIH1cclxuICAgIHRoaXMuZmlsdGVyZWRFdmVudHMgPSAoXHJcbiAgICAgIGV2ZW50cy5maWx0ZXIoKGV2KSA9PiBldi5kYXRhLnBhcnRpY2lwYW50c0lkLnNvbWUoKGlkKSA9PiBpZCA9PT0gZmlsdGVyU2VsZWN0ZWRJZCkpKTtcclxuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkRXZlbnRzO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxwIGNsYXNzPVwic2VydmVyLW5vdGlmaWNhdGlvblwiPkEgY29ubmVjdGlvbiB3YXMgc3VjY2Vzc2Z1bGx5IGVzdGFibGlzaGVkIHdpdGggdGhlIHNlcnZlcjwvcD5cclxuICAgIDxkaXYgY2xhc3M9IFwiY2FsZW5kYXItY29tcG9uZW50XCIgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGgxPkNhbGVuZGFyPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVGaWx0ZXJTZWxlY3QoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2Vla2RheXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3RoaXMuZ2V0V2Vla2RheXNNYXJrdXAoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lLWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRUaW1lc2xvdHNNYXJrdXAoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J2V2ZW50cy1ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICR7YXdhaXQgdGhpcy5nZXRDYWxlbmRhckJvZHlNYXJrdXAoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkZWxldGUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBcIjxzcGFuIGlkPVwiZGVsZXRlLXRpdGxlXCI+PC9zcGFuPlwiIGV2ZW50PzwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbC1kZWxldGVcIj5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb25maXJtLWRlbGV0ZVwiPlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBgO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgQ2FsZW5kYXJFdmVudCBmcm9tICcuLi8uLi9DYWxlbmRhckV2ZW50JztcclxuaW1wb3J0IHNlcnZpY2UgZnJvbSAnLi4vLi4vU2VydmljZSc7XHJcbmltcG9ydCB7IGdldEZpZWxkLCBzZXRGaWVsZCB9IGZyb20gJy4uLy4uL3N0b3JlL2luZGV4JztcclxuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlRXZlbnQge1xyXG4gIGNyZWF0ZVRvYXN0KCkge1xyXG4gICAgdGhpcy5yZXN1bHQgPSBgXHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0b2FzdFwiPkZhaWxlZCB0byBjcmVhdGUgYW4gZXZlbnQuIFRpbWUgc2xvdCBpcyBhbHJlYWR5IGJvb2tlZC48YnV0dG9uIGNsYXNzPVwidG9hc3QtY2xvc2VcIj5YPC9idXR0b24+PC9wPlxyXG4gICAgICBgO1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlSW5wdXQoKSB7XHJcbiAgICB0aGlzLnJlc3VsdCA9IGBcclxuICAgIDxsYWJlbCBmb3I9XCJldmVudC1uYW1lXCI+TmFtZSBvZiB0aGUgZXZlbnQ6PC9sYWJlbD5cclxuICAgIDxpbnB1dCBpZD1cImV2ZW50LW5hbWVcIiB0eXBlPVwidGV4dFwiIG1heGxlbmd0aD1cIjQwXCIgPjxicj5cclxuICAgIGA7XHJcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVQZW9wbGVTZWxlY3QoKSB7XHJcbiAgICBjb25zdCBwZW9wbGUgPSBnZXRGaWVsZCgncGVvcGxlJyk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSAnJztcclxuICAgIHBlb3BsZS5mb3JFYWNoKChodW1hbikgPT4ge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aHVtYW4uaWR9Jz4ke2h1bWFuLm5hbWV9PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8bGFiZWwgZm9yPVwicGFydGljaXBhbnRzXCI+UGFydGljaXBhbnRzOjwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCBpZD1cInBhcnRpY2lwYW50c1wiIG11bHRpcGxlPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJ3NlbGVjdGVkPkFsbCBtZW1iZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICR7dGhpcy5vcHRpb25zfVxyXG4gICAgICAgIDwvc2VsZWN0Pjxicj5gO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlV2Vla2RheVNlbGVjdCgpIHtcclxuICAgIGNvbnN0IHdlZWtkYXlzID0gZ2V0RmllbGQoJ3dlZWtkYXlzJyk7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vla2RheXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPSR7aX0+JHt3ZWVrZGF5c1tpXX08L29wdGlvbj5gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8bGFiZWwgZm9yPVwic2VsZWN0LWRheVwiPkRheTo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgaWQgPVwic2VsZWN0LWRheVwiPlxyXG4gICAgICAgICR7dGhpcy5vcHRpb25zfVxyXG4gICAgICAgIDwvc2VsZWN0Pjxicj5gO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlVGltZVNlbGVjdCgpIHtcclxuICAgIGNvbnN0IHRpbWVzbG90cyA9IGdldEZpZWxkKCd0aW1lc2xvdHMnKTtcclxuICAgIHRoaXMub3B0aW9ucyA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lc2xvdHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPSR7aX0+JHt0aW1lc2xvdHNbaV19PC9vcHRpb24+YDtcclxuICAgIH1cclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGxhYmVsIGZvcj1cInNlbGVjdC10aW1lXCI+VGltZTo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgaWQ9XCJzZWxlY3QtdGltZVwiPlxyXG4gICAgICAgICR7dGhpcy5vcHRpb25zfVxyXG4gICAgICAgIDwvc2VsZWN0Pjxicj5gO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQnV0dG9ucygpIHtcclxuICAgIHRoaXMucmVzdWx0ID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgc2V0dXBQYWdlTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgY2xvc2VUb2FzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdC1jbG9zZScpO1xyXG4gICAgY29uc3QgY3JlYXRlRXZlbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlJyk7XHJcbiAgICBjb25zdCBjYW5jZWxFdmVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwnKTtcclxuICAgIGNsb3NlVG9hc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhpZGVUb2FzdCgpKTtcclxuICAgIGNyZWF0ZUV2ZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuc2V0dGluZ05ld0V2ZW50KCk7XHJcbiAgICB9KTtcclxuICAgIGNhbmNlbEV2ZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldHRpbmdOZXdFdmVudCgpIHtcclxuICAgIHRoaXMuZXZlbnRPYmogPSB7fTtcclxuICAgIGNvbnN0IGV2ZW50VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnQtbmFtZScpLnZhbHVlO1xyXG4gICAgY29uc3QgZXZlbnRQYXJ0aWNpcGFudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnRzJykuY2hpbGRyZW47XHJcbiAgICBjb25zdCBldmVudFBhcnRpY2lwYW50SWQgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRQYXJ0aWNpcGFudHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKGV2ZW50UGFydGljaXBhbnRzW2ldLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgZXZlbnRQYXJ0aWNpcGFudElkLnB1c2goK2V2ZW50UGFydGljaXBhbnRzW2ldLmF0dHJpYnV0ZXMudmFsdWUudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXZlbnREYXlzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1kYXknKS5jaGlsZHJlbjtcclxuICAgIGxldCBldmVudFdlZWtkYXlWYWx1ZSA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudERheXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgaWYgKGV2ZW50RGF5c1tpXS5zZWxlY3RlZCkge1xyXG4gICAgICAgIGV2ZW50V2Vla2RheVZhbHVlID0gK2V2ZW50RGF5c1tpXS5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBldmVudFRpbWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC10aW1lJykuY2hpbGRyZW47XHJcbiAgICBsZXQgZXZlbnRUaW1lVmFsdWUgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRUaW1lcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoZXZlbnRUaW1lc1tpXS5zZWxlY3RlZCkge1xyXG4gICAgICAgIGV2ZW50VGltZVZhbHVlID0gK2V2ZW50VGltZXNbaV0uYXR0cmlidXRlcy52YWx1ZS52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZXZlbnRzID0gYXdhaXQgc2VydmljZS5nZXRFdmVudHNEYXRhKCdldmVudHMvJyk7XHJcbiAgICAgIGNvbnN0IGV2ZW50ID0gKFxyXG4gICAgICBldmVudHMuZmluZCgoZSkgPT4gZS5kYXRhLndlZWtkYXkgPT09IGV2ZW50V2Vla2RheVZhbHVlICYmIGUuZGF0YS50aW1lc2xvdCA9PT0gZXZlbnRUaW1lVmFsdWUpXHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0Jyk7XHJcbiAgICAgICAgdG9hc3Quc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgfSBlbHNlIGlmICghZXZlbnRUaXRsZSkge1xyXG4gICAgICAgIGNvbnN0IGV2ZW50VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudC1uYW1lJyk7XHJcbiAgICAgICAgZXZlbnRUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnUmVxdWlyZWQgZmllbGQnKTtcclxuICAgICAgICBldmVudFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZW1wdHktZmllbGQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmV2ZW50T2JqID0gbmV3IENhbGVuZGFyRXZlbnQoZXZlbnRUaXRsZSwgZXZlbnRUaW1lVmFsdWUsXHJcbiAgICAgICAgICBldmVudFdlZWtkYXlWYWx1ZSwgZXZlbnRQYXJ0aWNpcGFudElkKTtcclxuICAgICAgICBhd2FpdCBzZXJ2aWNlLnNldEV2ZW50KCdldmVudHMnLCB0aGlzLmV2ZW50T2JqKTtcclxuICAgICAgICBzZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScsICdjYWxlbmRhcicpO1xyXG4gICAgICB9XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5zdWNjZXNzZnVsUmVzcG9uc2VOb3RpZmljYXRpb24oKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBub3RpZmljYXRpb24uZXJyb3JSZXNwb25zZU5vdGlmaWNhdGlvbihlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZVRvYXN0KCkge1xyXG4gICAgdGhpcy50b2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2FzdCcpO1xyXG4gICAgdGhpcy50b2FzdC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHAgY2xhc3M9XCJzZXJ2ZXItbm90aWZpY2F0aW9uXCI+QSBjb25uZWN0aW9uIHdhcyBzdWNjZXNzZnVsbHkgZXN0YWJsaXNoZWQgd2l0aCB0aGUgc2VydmVyPC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImNyZWF0ZS1ldmVudFwiPlxyXG4gICAgICAgJHt0aGlzLmNyZWF0ZVRvYXN0KCl9XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgICR7dGhpcy5jcmVhdGVJbnB1dCgpfVxyXG4gICAgICAgICR7dGhpcy5jcmVhdGVQZW9wbGVTZWxlY3QoKX1cclxuICAgICAgICAke3RoaXMuY3JlYXRlV2Vla2RheVNlbGVjdCgpfVxyXG4gICAgICAgICR7dGhpcy5jcmVhdGVUaW1lU2VsZWN0KCl9XHJcbiAgICAgICAgJHt0aGlzLmNyZWF0ZUJ1dHRvbnMoKX1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0RmllbGQsIHNldEZpZWxkIH0gZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnO1xyXG5pbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi4vY2FsZW5kYXIvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5XaW5kb3cge1xyXG4gIGNyZWF0ZUxvZ2luV2luZG93KCkge1xyXG4gICAgY29uc3QgcGVvcGxlID0gZ2V0RmllbGQoJ3Blb3BsZScpO1xyXG4gICAgdGhpcy5vcHRpb25zID0gJyc7XHJcbiAgICBwZW9wbGUuZm9yRWFjaCgoaHVtYW4pID0+IHtcclxuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPScke2h1bWFuLmlkfSc+JHtodW1hbi5uYW1lfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBpZD1cImxvZ2luLXdpbmRvd1wiPlxyXG4gICAgPGgxPlBsZWFzZSBhdXRob3Jpc2U8L2gxPlxyXG4gICAgPHNlbGVjdCBpZD1cImxvZ2luLXNlbGVjdFwiPiR7dGhpcy5vcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgPGRpdj48YnV0dG9uIGlkPVwibG9naW4tYnV0dG9uXCI+Q29uZmlybTwvYnV0dG9uPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgc2V0dXBQYWdlTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tYnV0dG9uJyk7XHJcbiAgICBsb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9naW5FdmVudCk7XHJcbiAgfVxyXG5cclxuICBsb2dpbkV2ZW50KCkge1xyXG4gICAgdGhpcy5wZW9wbGUgPSBnZXRGaWVsZCgncGVvcGxlJyk7XHJcbiAgICBjb25zdCBzZWxlY3RlZExvZ2luSHVtYW5JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1zZWxlY3QnKS52YWx1ZTtcclxuICAgIGlmICghdGhpcy5wZW9wbGUuZmluZCgoaHVtYW4pID0+IGh1bWFuLmlkID09PSArc2VsZWN0ZWRMb2dpbkh1bWFuSWQgJiYgaHVtYW4uYWRtaW4pKSB7XHJcbiAgICAgIENhbGVuZGFyLmFkbWluTW9kZSA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQ2FsZW5kYXIuYWRtaW5Nb2RlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgJHt0aGlzLmNyZWF0ZUxvZ2luV2luZG93KCl9XHJcbmA7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4vc3RvcmUvaW5kZXgnO1xyXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XHJcblxyXG5pbml0U3RvcmUoKTtcclxuIiwiaW1wb3J0IGV2ZW50RW1pdHRlciBmcm9tICcuLi9FdmVudEVtaXR0ZXInO1xyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vQWRtaW4nO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi9Vc2VyJztcclxuXHJcbmNvbnN0IHBhcnRpY2lwYW50cyA9IFtcclxuICBuZXcgQWRtaW4oJ0FsZXgnKSxcclxuICBuZXcgVXNlcignQW5hc3Rhc2lhJyksXHJcbiAgbmV3IFVzZXIoJ0RtaXRyaXknKSxcclxuXTtcclxuXHJcbmxldCBzdG9yZSA9IHt9O1xyXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xyXG4gIHN0b3JlID0ge1xyXG4gICAgd2Vla2RheXM6IFtcclxuICAgICAgJ01vbmRheScsXHJcbiAgICAgICdUdWVzZGF5JyxcclxuICAgICAgJ1dlZG5lc2RheScsXHJcbiAgICAgICdUaHVyc2RheScsXHJcbiAgICAgICdGcmlkYXknLFxyXG4gICAgXSxcclxuICAgIHRpbWVzbG90czogW1xyXG4gICAgICAnMTA6MDAnLFxyXG4gICAgICAnMTE6MDAnLFxyXG4gICAgICAnMTI6MDAnLFxyXG4gICAgICAnMTM6MDAnLFxyXG4gICAgICAnMTQ6MDAnLFxyXG4gICAgICAnMTU6MDAnLFxyXG4gICAgICAnMTY6MDAnLFxyXG4gICAgICAnMTc6MDAnLFxyXG4gICAgICAnMTg6MDAnLFxyXG4gICAgXSxcclxuICAgIHBlb3BsZTogWy4uLnBhcnRpY2lwYW50c10sXHJcbiAgICBjb21wb25lbnRGb3JSZW5kZXJOYW1lOiAnbG9naW5XaW5kb3cnLFxyXG4gICAgZmlsdGVyU2VsZWN0ZWRJZDogMCxcclxuXHJcbiAgfTtcclxuICBldmVudEVtaXR0ZXIuZW1pdCgnc3RvcmVDaGFuZ2VkJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RmllbGQgPSAoZmllbGRuYW1lKSA9PiBzdG9yZVtmaWVsZG5hbWVdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEZpZWxkID0gKGZpZWxkbmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xyXG4gIHN0b3JlW2ZpZWxkbmFtZV0gPSBmaWVsZFZhbHVlO1xyXG4gIGV2ZW50RW1pdHRlci5lbWl0KCdzdG9yZUNoYW5nZWQnKTtcclxufTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuY2FsZW5kYXItY29tcG9uZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiAxMjAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhlYWRlciBoMSB7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5oZWFkZXIgLmZpbHRlciB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5maWx0ZXIgYnV0dG9uLCAuZmlsdGVyIHNlbGVjdCB7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5maWx0ZXIgYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbGVuZGFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidyB3IHcgdyB3IHdcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiO1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ud2Vla2RheXMge1xcbiAgZ3JpZC1hcmVhOiB3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44MTUpO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLndlZWtkYXlzIC5kYXksXFxuLndlZWtkYXlzIC50aW1lLWhlYWRlciB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRpbWUtY29sdW1uIHtcXG4gIGdyaWQtYXJlYTogdDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDc4LCA3NSwgMC4xMyk7XFxufVxcbi50aW1lLWNvbHVtbiAudGltZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuI2V2ZW50cy1ib2R5IHtcXG4gIGdyaWQtYXJlYTogZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgMWZyKTtcXG59XFxuI2V2ZW50cy1ib2R5IGRpdiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI2V2ZW50cy1ib2R5IC5hY3RpdmUtZXZlbnQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDEzOSwgMTYsIDAuNzk1KTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgdG9wOiAxNXB4O1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6ICNkNjBlMGU7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZS1ldmVudDpob3ZlciAuZGVsZXRlLWJ1dHRvbiB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4uZGVsZXRlLWJ1dHRvbjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDEwMCwgMTAwLCAwLjY2NCk7XFxufVxcblxcbiNkZWxldGUtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODkpO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XFxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4jZGVsZXRlLW1lc3NhZ2UgcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG4jZGVsZXRlLW1lc3NhZ2UgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuI2RlbGV0ZS1tZXNzYWdlIGJ1dHRvbiB7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogNzBweDtcXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY3JlYXRlLWV2ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVHJlYnVjaGV0XFxcIiwgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTYsIDE1NiwgMTI2LCAwLjQpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICB3aWR0aDogMzAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiA2cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAzMCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwYXJ0aWNpcGFudHMge1xcbiAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9hc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzI5KTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnRvYXN0IGJ1dHRvbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG4gIGNvbG9yOiByZWQ7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4MTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbXB0eS1maWVsZCB7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcblxcbiNsb2dpbi13aW5kb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXG4gIG1hcmdpbi10b3A6IC0xMDBweDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDEwNywgMTAzLCAwLjgxNSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcbiNsb2dpbi13aW5kb3cgaDEge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jbG9naW4td2luZG93ICNsb2dpbi1zZWxlY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbG9naW4td2luZG93IGRpdiB7XFxuICBwYWRkaW5nOiA0MHB4O1xcbn1cXG4jbG9naW4td2luZG93IGRpdiAjbG9naW4tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xcbn1cXG5cXG4uc2VydmVyLW5vdGlmaWNhdGlvbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBsaW5lLWhlaWdodDogM3B4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDI1NSwgMCwgMC41NjIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS41dnc7XFxufVxcblxcbi5lcnIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzI5KTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9jcmVhdGVFdmVudC9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY29tcG9uZW50cy9sb2dpbldpbmRvdy9pbmRleC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtBQ0VKO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDREo7QURNRTtFQUNFLGVBQUE7QUNKSjs7QURRQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0tBQ0U7RUFVRixhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNmRjs7QURrQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDZkY7QURnQkU7O0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNkSjs7QURrQkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FDZkY7QURnQkU7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDZEo7O0FEa0JBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGtDQUFBO0FDZkY7QURnQkU7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNkSjtBRGlCRTtFQUNF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QUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUFtUkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhbGVuZGFyLWNvbXBvbmVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCcsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogMTIwMHB4O1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBoMSB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5maWx0ZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyIHtcXHJcXG4gICVidXR0b24tc2l6ZXMge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gIH1cXHJcXG4gIHNlbGVjdCB7XFxyXFxuICAgIEBleHRlbmQgJWJ1dHRvbi1zaXplcztcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgQGV4dGVuZCAlYnV0dG9uLXNpemVzO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uY2FsZW5kYXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICd3IHcgdyB3IHcgdydcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSc7XFxyXFxuICB3aWR0aDogMTIwMHB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi53ZWVrZGF5cyB7XFxyXFxuICBncmlkLWFyZWE6IHc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDEwNywgMTAzLCAwLjgxNSk7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgLmRheSxcXHJcXG4gIC50aW1lLWhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi50aW1lLWNvbHVtbiB7XFxyXFxuICBncmlkLWFyZWE6IHQ7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc2LCA3OCwgNzUsIDAuMTMpO1xcclxcbiAgLnRpbWUge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI2V2ZW50cy1ib2R5IHtcXHJcXG4gIGdyaWQtYXJlYTogZTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOSwgMWZyKTtcXHJcXG4gIGRpdiB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFjdGl2ZS1ldmVudCB7XFxyXFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAxMzksIDE2LCAwLjc5NSk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHRvcDogMTVweDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGNvbG9yOiByZ2IoMjE0LCAxNCwgMTQpO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUtZXZlbnQ6aG92ZXIge1xcclxcbiAgLmRlbGV0ZS1idXR0b24ge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZGVsZXRlLWJ1dHRvbjpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDEwMCwgMTAwLCAwLjY2NCk7XFxyXFxufVxcclxcbiNkZWxldGUtbWVzc2FnZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODkpO1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICB6LWluZGV4OiAxMDAwMDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgfVxcclxcbiAgZGl2IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDUlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgJy4vY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL2NvbXBvbmVudHMvY3JlYXRlRXZlbnQvaW5kZXguc2Nzcyc7XFxyXFxuQGltcG9ydCAnLi9jb21wb25lbnRzL2xvZ2luV2luZG93L2luZGV4LnNjc3MnO1xcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaG9uZXlkZXc7XFxyXFxufVxcclxcblxcclxcbi5zZXJ2ZXItbm90aWZpY2F0aW9uIHtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjU1LCAwLCAwLjU2Mik7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjV2dztcXHJcXG59XFxyXFxuXFxyXFxuLmVyciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAwLCAwLCAwLjMyOSk7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cIixcIi5jcmVhdGUtZXZlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgaGVpZ2h0OiAzNTBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXHJcXG59XFxyXFxuZm9ybSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMTU2LCAxMjYsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbmxhYmVsIHtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBtYXJnaW46IDZweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI3BhcnRpY2lwYW50cyB7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxufVxcclxcbi5idXR0b25zIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuIGJ1dHRvbiB7XFxyXFxuY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG59XFxyXFxuXFxyXFxuLnRvYXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMyOSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBidXR0b24ge1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmODE7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZW1wdHktZmllbGQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cIixcIiNsb2dpbi13aW5kb3cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTEwMHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDAwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDEwNywgMTAzLCAwLjgxNSk7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgI2xvZ2luLXNlbGVjdCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgZGl2IHtcXHJcXG4gICAgICBwYWRkaW5nOiA0MHB4O1xcclxcbiAgICAjbG9naW4tYnV0dG9uIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=