/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js ***!
  \*************************************************************************/
/***/ ((module) => {

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

module.exports = _applyDecoratedDescriptor;

/***/ }),

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
          return appComponent.checkComponentForRender();

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
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _calendar_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar/index */ "./src/components/calendar/index.js");
/* harmony import */ var _createEvent_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../createEvent/index */ "./src/components/createEvent/index.js");
/* harmony import */ var _loginWindow_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loginWindow/index */ "./src/components/loginWindow/index.js");
/* harmony import */ var _service_TryCatchDecorator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../service/TryCatchDecorator */ "./src/service/TryCatchDecorator.js");





var _class, _temp;







var App = (_class = (_temp = /*#__PURE__*/function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, App);

    this.componentsMap = {
      calendar: new _calendar_index__WEBPACK_IMPORTED_MODULE_6__.default(),
      createEvent: new _createEvent_index__WEBPACK_IMPORTED_MODULE_7__.default(),
      loginWindow: new _loginWindow_index__WEBPACK_IMPORTED_MODULE_8__.default()
    };
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(App, [{
    key: "checkComponentForRender",
    value: function checkComponentForRender() {
      var component = this.componentsMap[(0,_store_index__WEBPACK_IMPORTED_MODULE_5__.getField)('componentForRenderName')];

      if (component instanceof _calendar_index__WEBPACK_IMPORTED_MODULE_6__.default) {
        return this.calendarRender();
      }

      if (component && component.render) {
        document.getElementById('application').innerHTML = component.render();
      }

      return '<div>Sorry something went wrong</div>';
    }
  }, {
    key: "calendarRender",
    value: function () {
      var _calendarRender = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var component;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                component = this.componentsMap[(0,_store_index__WEBPACK_IMPORTED_MODULE_5__.getField)('componentForRenderName')];
                _context.next = 3;
                return component.render();

              case 3:
                document.getElementById('application').innerHTML = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function calendarRender() {
        return _calendarRender.apply(this, arguments);
      }

      return calendarRender;
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
}(), _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "calendarRender", [_service_TryCatchDecorator__WEBPACK_IMPORTED_MODULE_9__.default], Object.getOwnPropertyDescriptor(_class.prototype, "calendarRender"), _class.prototype)), _class);


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
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_Service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/Service */ "./src/service/Service.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _service_TryCatchDecorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/TryCatchDecorator */ "./src/service/TryCatchDecorator.js");





var _class, _class2, _temp;





var Calendar = (_class = (_temp = _class2 = /*#__PURE__*/function () {
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
                _context3.next = 2;
                return _service_Service__WEBPACK_IMPORTED_MODULE_5__.default.getEventsData('/events/');

              case 2:
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
                          return _service_Service__WEBPACK_IMPORTED_MODULE_5__.default.deleteEvent("events/".concat(browserEvent.target.attributes.id.value));

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

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
                return _service_Service__WEBPACK_IMPORTED_MODULE_5__.default.getEventsData('events');

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
}(), _class2.adminMode = null, _temp), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "deleteEvent", [_service_TryCatchDecorator__WEBPACK_IMPORTED_MODULE_7__.default], Object.getOwnPropertyDescriptor(_class.prototype, "deleteEvent"), _class.prototype)), _class);


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
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CalendarEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CalendarEvent */ "./src/CalendarEvent.js");
/* harmony import */ var _service_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/Service */ "./src/service/Service.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/index */ "./src/store/index.js");
/* harmony import */ var _service_TryCatchDecorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/TryCatchDecorator */ "./src/service/TryCatchDecorator.js");





var _class;






var CreateEvent = (_class = /*#__PURE__*/function () {
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

      var people = (0,_store_index__WEBPACK_IMPORTED_MODULE_7__.getField)('people');
      this.options = '';
      people.forEach(function (human) {
        _this.options += "<option value='".concat(human.id, "'>").concat(human.name, "</option>");
      });
      return "\n        <label for=\"participants\">Participants:</label>\n        <select id=\"participants\" multiple>\n            <option value='0'selected>All members</option>\n            ".concat(this.options, "\n        </select><br>");
    }
  }, {
    key: "createWeekdaySelect",
    value: function createWeekdaySelect() {
      var weekdays = (0,_store_index__WEBPACK_IMPORTED_MODULE_7__.getField)('weekdays');
      this.options = '';

      for (var i = 0; i < weekdays.length; i += 1) {
        this.options += "<option value=".concat(i, ">").concat(weekdays[i], "</option>");
      }

      return "\n        <label for=\"select-day\">Day:</label>\n        <select id =\"select-day\">\n        ".concat(this.options, "\n        </select><br>");
    }
  }, {
    key: "createTimeSelect",
    value: function createTimeSelect() {
      var timeslots = (0,_store_index__WEBPACK_IMPORTED_MODULE_7__.getField)('timeslots');
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
        (0,_store_index__WEBPACK_IMPORTED_MODULE_7__.setField)('componentForRenderName', 'calendar');
      });
    }
  }, {
    key: "settingNewEvent",
    value: function () {
      var _settingNewEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var eventTitle, eventParticipants, eventParticipantId, i, eventDays, eventWeekdayValue, _i, eventTimes, eventTimeValue, _i2, events, event, toast, eventTitleInput;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
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

                _context.next = 13;
                return _service_Service__WEBPACK_IMPORTED_MODULE_6__.default.getEventsData('/events/');

              case 13:
                events = _context.sent;
                event = events.find(function (e) {
                  return e.data.weekday === eventWeekdayValue && e.data.timeslot === eventTimeValue;
                });

                if (!event) {
                  _context.next = 20;
                  break;
                }

                toast = document.querySelector('.toast');
                toast.style.visibility = 'visible';
                _context.next = 30;
                break;

              case 20:
                if (eventTitle) {
                  _context.next = 26;
                  break;
                }

                eventTitleInput = document.getElementById('event-name');
                eventTitleInput.setAttribute('placeholder', 'Required field');
                eventTitleInput.classList.add('empty-field');
                _context.next = 30;
                break;

              case 26:
                this.eventObj = new _CalendarEvent__WEBPACK_IMPORTED_MODULE_5__.default(eventTitle, eventTimeValue, eventWeekdayValue, eventParticipantId);
                _context.next = 29;
                return _service_Service__WEBPACK_IMPORTED_MODULE_6__.default.setEvent('events', this.eventObj);

              case 29:
                (0,_store_index__WEBPACK_IMPORTED_MODULE_7__.setField)('componentForRenderName', 'calendar');

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
}(), (_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "settingNewEvent", [_service_TryCatchDecorator__WEBPACK_IMPORTED_MODULE_8__.default], Object.getOwnPropertyDescriptor(_class.prototype, "settingNewEvent"), _class.prototype)), _class);


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

/***/ "./src/participants/Admin.js":
/*!***********************************!*\
  !*** ./src/participants/Admin.js ***!
  \***********************************/
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
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./src/participants/User.js");





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

/***/ "./src/participants/User.js":
/*!**********************************!*\
  !*** ./src/participants/User.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var User = function User(name) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, User);

  User.counterId += 1;
  this.id = User.counterId;
  this.name = name;
};

User.counterId = 1;


/***/ }),

/***/ "./src/service/Notification.js":
/*!*************************************!*\
  !*** ./src/service/Notification.js ***!
  \*************************************/
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

/***/ "./src/service/Service.js":
/*!********************************!*\
  !*** ./src/service/Service.js ***!
  \********************************/
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





var Service = /*#__PURE__*/function () {
  function Service() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Service);

    this.apiBase = 'http://158.101.166.74:8080/api/data/anpilov_a/';

    if (Service.instance) {
      return Service.instance;
    }

    Service.instance = this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Service, [{
    key: "getEventsData",
    value: function () {
      var _getEventsData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(url) {
        var res, eventsData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
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
      var _deleteEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(url) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
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
      var _setEvent = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3(url, body) {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
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

/***/ "./src/service/TryCatchDecorator.js":
/*!******************************************!*\
  !*** ./src/service/TryCatchDecorator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TryCatchDecorator)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Notification */ "./src/service/Notification.js");



function TryCatchDecorator(target, key, descriptor) {
  var fn = descriptor.value;
  descriptor.value = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var _len,
        args,
        _key,
        result,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = _args[_key];
            }

            _context.next = 4;
            return fn.apply(this, args);

          case 4:
            result = _context.sent;
            _Notification__WEBPACK_IMPORTED_MODULE_2__.default.successfulResponseNotification();
            return _context.abrupt("return", result);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _Notification__WEBPACK_IMPORTED_MODULE_2__.default.errorResponseNotification(_context.t0));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 9]]);
  }));
  return descriptor;
}

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
/* harmony import */ var _participants_Admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../participants/Admin */ "./src/participants/Admin.js");
/* harmony import */ var _participants_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../participants/User */ "./src/participants/User.js");



var participants = [new _participants_Admin__WEBPACK_IMPORTED_MODULE_1__.default('Alex'), new _participants_User__WEBPACK_IMPORTED_MODULE_2__.default('Anastasia'), new _participants_User__WEBPACK_IMPORTED_MODULE_2__.default('Dmitriy')];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvQ2FsZW5kYXJFdmVudC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvY29tcG9uZW50cy9jYWxlbmRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL2NvbXBvbmVudHMvY3JlYXRlRXZlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9jb21wb25lbnRzL2xvZ2luV2luZG93L2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9wYXJ0aWNpcGFudHMvQWRtaW4uanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9wYXJ0aWNpcGFudHMvVXNlci5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL3NlcnZpY2UvTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvc2VydmljZS9TZXJ2aWNlLmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvc2VydmljZS9UcnlDYXRjaERlY29yYXRvci5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVldGluZy1jYWxlbmRhci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21lZXRpbmctY2FsZW5kYXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZWV0aW5nLWNhbGVuZGFyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJDYWxlbmRhckV2ZW50IiwidGl0bGUiLCJ0aW1lc2xvdCIsIndlZWtkYXkiLCJwYXJ0aWNpcGFudHNJZCIsImFwcENvbXBvbmVudCIsIkFwcCIsIkV2ZW50RW1pdHRlciIsImNhbGxiYWNrcyIsImV2ZW50IiwiY2IiLCJwdXNoIiwiZGF0YSIsImNicyIsImZvckVhY2giLCJldmVudEVtaXR0ZXIiLCJvbiIsImNoZWNrQ29tcG9uZW50Rm9yUmVuZGVyIiwic2V0VGltZW91dCIsInNldHVwUGFnZUxpc3RlbmVycyIsImNhbGwiLCJjb21wb25lbnRzTWFwIiwiY2FsZW5kYXIiLCJDYWxlbmRhciIsImNyZWF0ZUV2ZW50IiwiQ3JlYXRlRXZlbnQiLCJsb2dpbldpbmRvdyIsIkxvZ2luV2luZG93IiwiY29tcG9uZW50IiwiZ2V0RmllbGQiLCJjYWxlbmRhclJlbmRlciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJUcnlDYXRjaERlY29yYXRvciIsImFkbWluTW9kZSIsIm1vZGVTdHlsZSIsImNoZWNrTW9kZSIsInBlb3BsZSIsImZpbHRlclNlbGVjdGVkSWQiLCJvcHRpb25zIiwiaHVtYW4iLCJpZCIsIm5hbWUiLCJ3ZWVrZGF5cyIsInJlc3VsdCIsInRpbWVzbG90cyIsImZpbHRlckV2ZW50IiwiZXZlbnRzIiwiaSIsImoiLCJmaW5kIiwiZXYiLCJuZXdFdmVudEJ1dHRvbiIsImZpbHRlclBlb3BsZVNlbGVjdCIsImRlbGV0ZUV2ZW50QnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0RmllbGQiLCJsZW5ndGgiLCJkZWxldGVFdmVudCIsInRhcmdldCIsInZhbHVlIiwiYnJvd3NlckV2ZW50Iiwic2VydmljZSIsImRlbGV0ZUV2ZW50TWVzc2FnZSIsImRlbGV0ZUV2ZW50VGl0bGVNZXNzYWdlIiwiZXZlbnRUaXRsZSIsInBhcmVudE5vZGUiLCJhdHRyaWJ1dGVzIiwic3R5bGUiLCJkaXNwbGF5IiwiY2FuY2VsRGVsZXRlIiwi0YFvbmZpcm1EZWxldGUiLCJmaWx0ZXJlZEV2ZW50cyIsImZpbHRlciIsInNvbWUiLCJjcmVhdGVGaWx0ZXJTZWxlY3QiLCJnZXRXZWVrZGF5c01hcmt1cCIsImdldFRpbWVzbG90c01hcmt1cCIsImdldENhbGVuZGFyQm9keU1hcmt1cCIsImNsb3NlVG9hc3RCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlRXZlbnRCdXR0b24iLCJjYW5jZWxFdmVudEJ1dHRvbiIsImhpZGVUb2FzdCIsInByZXZlbnREZWZhdWx0Iiwic2V0dGluZ05ld0V2ZW50IiwiZXZlbnRPYmoiLCJldmVudFBhcnRpY2lwYW50cyIsImNoaWxkcmVuIiwiZXZlbnRQYXJ0aWNpcGFudElkIiwic2VsZWN0ZWQiLCJldmVudERheXMiLCJldmVudFdlZWtkYXlWYWx1ZSIsImV2ZW50VGltZXMiLCJldmVudFRpbWVWYWx1ZSIsImUiLCJ0b2FzdCIsInZpc2liaWxpdHkiLCJldmVudFRpdGxlSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjcmVhdGVUb2FzdCIsImNyZWF0ZUlucHV0IiwiY3JlYXRlUGVvcGxlU2VsZWN0IiwiY3JlYXRlV2Vla2RheVNlbGVjdCIsImNyZWF0ZVRpbWVTZWxlY3QiLCJjcmVhdGVCdXR0b25zIiwibG9naW5CdXR0b24iLCJsb2dpbkV2ZW50Iiwic2VsZWN0ZWRMb2dpbkh1bWFuSWQiLCJhZG1pbiIsImNyZWF0ZUxvZ2luV2luZG93IiwiaW5pdFN0b3JlIiwiQWRtaW4iLCJVc2VyIiwiY291bnRlcklkIiwiTm90aWZpY2F0aW9uIiwicmVzcG9uc2VOb3RpZmljYXRpb24iLCJlcnIiLCJpbm5lclRleHQiLCJtZXNzYWdlIiwibm90aWZpY2F0aW9uIiwiU2VydmljZSIsImFwaUJhc2UiLCJpbnN0YW5jZSIsInVybCIsImZldGNoIiwicmVzIiwib2siLCJFcnJvciIsInN0YXR1cyIsImpzb24iLCJldmVudHNEYXRhIiwibWFwIiwiSlNPTiIsInBhcnNlIiwibWV0aG9kIiwiYm9keSIsInN0cmluZ2lmeSIsImtleSIsImRlc2NyaXB0b3IiLCJmbiIsImFyZ3MiLCJhcHBseSIsInBhcnRpY2lwYW50cyIsInN0b3JlIiwiY29tcG9uZW50Rm9yUmVuZGVyTmFtZSIsImZpZWxkbmFtZSIsImZpZWxkVmFsdWUiXSwibWFwcGluZ3Mi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O0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxLQUEwQixvQkFBb0IsQ0FBRTtBQUNsRDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM3VCQSw0SUFBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQTFCQSxhLEdBQ25CLHVCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QkMsT0FBN0IsRUFBc0NDLGNBQXRDLEVBQXNEO0FBQUE7O0FBQ3BELE9BQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsT0FBS0MsY0FBTCxHQUFzQkEsY0FBdEI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOSDtBQUVBLElBQU1DLFlBQVksR0FBRyxJQUFJQywwREFBSixFQUFyQjs7SUFFTUMsWTtBQUNKLDBCQUFjO0FBQUE7O0FBQ1osU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNEOzs7O1dBRUQsWUFBR0MsS0FBSCxFQUFVQyxFQUFWLEVBQWM7QUFDWixVQUFJLENBQUMsS0FBS0YsU0FBTCxDQUFlQyxLQUFmLENBQUwsRUFBNEIsS0FBS0QsU0FBTCxDQUFlQyxLQUFmLElBQXdCLEVBQXhCO0FBQzVCLFdBQUtELFNBQUwsQ0FBZUMsS0FBZixFQUFzQkUsSUFBdEIsQ0FBMkJELEVBQTNCO0FBQ0Q7OztXQUVELGNBQUtELEtBQUwsRUFBWUcsSUFBWixFQUFrQjtBQUNoQixVQUFNQyxHQUFHLEdBQUcsS0FBS0wsU0FBTCxDQUFlQyxLQUFmLENBQVo7O0FBQ0EsVUFBSUksR0FBSixFQUFTO0FBQ1BBLFdBQUcsQ0FBQ0MsT0FBSixDQUFZLFVBQUNKLEVBQUQ7QUFBQSxpQkFBUUEsRUFBRSxDQUFDRSxJQUFELENBQVY7QUFBQSxTQUFaO0FBQ0Q7QUFDRjs7Ozs7O0FBR0gsSUFBTUcsWUFBWSxHQUFHLElBQUlSLFlBQUosRUFBckIsQyxDQUVBOztBQUNBUSxZQUFZLENBQUNDLEVBQWIsQ0FBZ0IsY0FBaEIsbUxBQWdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUN4QlgsWUFBWSxDQUFDWSx1QkFBYixFQUR3Qjs7QUFBQTtBQUU5QkMsb0JBQVUsQ0FBQ2IsWUFBWSxDQUFDYyxrQkFBYixDQUFnQ0MsSUFBaEMsQ0FBcUNmLFlBQXJDLENBQUQsRUFBcUQsQ0FBckQsQ0FBVjs7QUFGOEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBaEM7QUFLQSxpRUFBZVUsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBRXFCVCxHOzs7O1NBQ2pCZSxhLEdBQWdCO0FBQ2RDLGNBQVEsRUFBRSxJQUFJQyxvREFBSixFQURJO0FBRWRDLGlCQUFXLEVBQUUsSUFBSUMsdURBQUosRUFGQztBQUdkQyxpQkFBVyxFQUFFLElBQUlDLHVEQUFKO0FBSEMsSzs7Ozs7V0FNaEIsbUNBQTBCO0FBQ3hCLFVBQU1DLFNBQVMsR0FBRyxLQUFLUCxhQUFMLENBQW1CUSxzREFBUSxDQUFDLHdCQUFELENBQTNCLENBQWxCOztBQUNBLFVBQUlELFNBQVMsWUFBWUwsb0RBQXpCLEVBQW1DO0FBQ2pDLGVBQU8sS0FBS08sY0FBTCxFQUFQO0FBQ0Q7O0FBQUMsVUFBSUYsU0FBUyxJQUFJQSxTQUFTLENBQUNHLE1BQTNCLEVBQW1DO0FBQ25DQyxnQkFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQyxTQUF2QyxHQUFtRE4sU0FBUyxDQUFDRyxNQUFWLEVBQW5EO0FBQ0Q7O0FBQ0QsYUFBTyx1Q0FBUDtBQUNEOzs7O2dNQUVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVRSCx5QkFGUixHQUVvQixLQUFLUCxhQUFMLENBQW1CUSxzREFBUSxDQUFDLHdCQUFELENBQTNCLENBRnBCO0FBQUE7QUFBQSx1QkFHMkRELFNBQVMsQ0FBQ0csTUFBVixFQUgzRDs7QUFBQTtBQUdFQyx3QkFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQyxTQUh6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7O1dBTUEsOEJBQXFCO0FBQ25CLFVBQU1OLFNBQVMsR0FBRyxLQUFLUCxhQUFMLENBQW1CUSxzREFBUSxDQUFDLHdCQUFELENBQTNCLENBQWxCOztBQUNBLFVBQUlELFNBQVMsSUFBSUEsU0FBUyxDQUFDVCxrQkFBM0IsRUFBK0M7QUFDN0NTLGlCQUFTLENBQUNULGtCQUFWO0FBQ0Q7QUFDRjs7OzswSUFYQWdCLCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJMO0FBQ0E7QUFDQTtJQUVxQlosUTs7Ozs7OztXQUduQixxQkFBWTtBQUNWLFVBQUlBLFFBQVEsQ0FBQ2EsU0FBVCxLQUF1QixLQUEzQixFQUFrQztBQUNoQyxhQUFLQyxTQUFMLEdBQWlCLGNBQWpCO0FBQ0Q7O0FBQ0QsYUFBTyxLQUFLQSxTQUFaO0FBQ0Q7OztXQUVELDhCQUFxQjtBQUFBOztBQUNuQixXQUFLQyxTQUFMO0FBQ0EsVUFBTUMsTUFBTSxHQUFHVixzREFBUSxDQUFDLFFBQUQsQ0FBdkI7QUFDQSxVQUFNVyxnQkFBZ0IsR0FBR1gsc0RBQVEsQ0FBQyxrQkFBRCxDQUFqQztBQUNBLFdBQUtZLE9BQUwsR0FBZSxFQUFmO0FBQ0FGLFlBQU0sQ0FBQ3pCLE9BQVAsQ0FBZSxVQUFDNEIsS0FBRCxFQUFXO0FBQ3hCLGFBQUksQ0FBQ0QsT0FBTCxzQkFBMkJELGdCQUFnQixLQUFLRSxLQUFLLENBQUNDLEVBQTNCLEdBQWdDLFVBQWhDLEdBQTZDLEVBQXhFLHFCQUFxRkQsS0FBSyxDQUFDQyxFQUEzRixlQUFrR0QsS0FBSyxDQUFDRSxJQUF4RztBQUNELE9BRkQ7QUFJQSxvR0FFNEJKLGdCQUFnQixLQUFLLENBQXJCLEdBQXlCLFVBQXpCLEdBQXNDLEVBRmxFLGdEQUdVLEtBQUtDLE9BSGYseUVBS21DLEtBQUtKLFNBTHhDO0FBT0Q7OztXQUVELDZCQUFvQjtBQUFBOztBQUNsQixVQUFNUSxRQUFRLEdBQUdoQixzREFBUSxDQUFDLFVBQUQsQ0FBekI7QUFDQSxXQUFLaUIsTUFBTCxHQUFjLHFDQUFkO0FBQ0FELGNBQVEsQ0FBQy9CLE9BQVQsQ0FBaUIsVUFBQ1gsT0FBRCxFQUFhO0FBQzVCLGNBQUksQ0FBQzJDLE1BQUwsa0NBQW9DM0MsT0FBcEM7QUFDRCxPQUZEO0FBSUEsYUFBTyxLQUFLMkMsTUFBWjtBQUNEOzs7V0FFRCw4QkFBcUI7QUFBQTs7QUFDbkIsVUFBTUMsU0FBUyxHQUFHbEIsc0RBQVEsQ0FBQyxXQUFELENBQTFCO0FBQ0EsV0FBS2lCLE1BQUwsR0FBYyxFQUFkO0FBQ0FDLGVBQVMsQ0FBQ2pDLE9BQVYsQ0FBa0IsVUFBQ1osUUFBRCxFQUFjO0FBQzlCLGNBQUksQ0FBQzRDLE1BQUwsbUNBQXFDNUMsUUFBckM7QUFDRCxPQUZEO0FBR0EsYUFBTyxLQUFLNEMsTUFBWjtBQUNEOzs7O3VNQUVEO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxxQkFBS1IsU0FBTDtBQURGO0FBQUEsdUJBRXVCLEtBQUtVLFdBQUwsRUFGdkI7O0FBQUE7QUFFUUMsc0JBRlI7QUFHRSxxQkFBS0gsTUFBTCxHQUFjLEVBQWQ7O0FBSEYsdUNBSVdJLENBSlg7QUFBQSwrQ0FLYUMsQ0FMYjtBQU1NLHdCQUFNMUMsS0FBSyxHQUFHd0MsTUFBTSxDQUFDRyxJQUFQLENBQVksVUFBQ0MsRUFBRDtBQUFBLDZCQUFRQSxFQUFFLENBQUN6QyxJQUFILENBQVFULE9BQVIsS0FBb0JnRCxDQUFwQixJQUF5QkUsRUFBRSxDQUFDekMsSUFBSCxDQUFRVixRQUFSLEtBQXFCZ0QsQ0FBdEQ7QUFBQSxxQkFBWixDQUFkOztBQUNBLHdCQUFJekMsS0FBSixFQUFXO0FBQ1QsNEJBQUksQ0FBQ3FDLE1BQUwsa0RBQW1EckMsS0FBSyxDQUFDRyxJQUFOLENBQVdYLEtBQTlELGlCQUF5RVEsS0FBSyxDQUFDRyxJQUFOLENBQVdYLEtBQXBGLHVFQUM4Q1EsS0FBSyxDQUFDa0MsRUFEcEQscUJBQ2lFLE1BQUksQ0FBQ04sU0FEdEU7QUFFRCxxQkFIRCxNQUdPO0FBQ0wsNEJBQUksQ0FBQ1MsTUFBTCxJQUFlLGFBQWY7QUFDRDtBQVpQOztBQUtJLHVCQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsSUFBSSxDQUE1QixFQUErQjtBQUFBLDJCQUF0QkEsQ0FBc0I7QUFROUI7QUFiTDs7QUFJRSxxQkFBU0QsQ0FBVCxHQUFhLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxJQUFJLENBQTVCLEVBQStCO0FBQUEsd0JBQXRCQSxDQUFzQjtBQVU5Qjs7QUFkSCxpREFlUyxLQUFLSixNQWZkOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7V0FrQkEsOEJBQXFCO0FBQ25CLFVBQU1RLGNBQWMsR0FBR3RCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUF2QjtBQUNBLFVBQU1zQixrQkFBa0IsR0FBR3ZCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBM0I7QUFDQSxVQUFNdUIsa0JBQWtCLEdBQUd4QixRQUFRLENBQUN5QixnQkFBVCxDQUEwQixnQkFBMUIsQ0FBM0I7QUFDQUgsb0JBQWMsQ0FBQ0ksZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUM7QUFBQSxlQUFNQyxzREFBUSxDQUFDLHdCQUFELEVBQTJCLGFBQTNCLENBQWQ7QUFBQSxPQUF6Qzs7QUFDQSxXQUFLLElBQUlULENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdNLGtCQUFrQixDQUFDSSxNQUF2QyxFQUErQ1YsQ0FBQyxJQUFJLENBQXBELEVBQXVEO0FBQ3JETSwwQkFBa0IsQ0FBQ04sQ0FBRCxDQUFsQixDQUFzQlEsZ0JBQXRCLENBQXVDLE9BQXZDLEVBQWdELEtBQUtHLFdBQXJEO0FBQ0Q7O0FBQ0ROLHdCQUFrQixDQUFDRyxnQkFBbkIsQ0FBb0MsUUFBcEMsRUFBOEMsVUFBQ2pELEtBQUQsRUFBVztBQUN2RGtELDhEQUFRLENBQUMsa0JBQUQsRUFBcUIsQ0FBQ2xELEtBQUssQ0FBQ3FELE1BQU4sQ0FBYUMsS0FBbkMsQ0FBUjtBQUNELE9BRkQ7QUFHRDs7Ozs2TEFFRCxrQkFDa0JDLFlBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRXNCQyxtRUFBQSxDQUFzQixVQUF0QixDQUZ0Qjs7QUFBQTtBQUVFLHFCQUFLaEIsTUFGUDtBQUdRaUIsa0NBSFIsR0FHNkJsQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBSDdCO0FBSVFrQyx1Q0FKUixHQUlrQ25DLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixDQUpsQztBQUtRbUMsMEJBTFIsR0FLcUJKLFlBQVksQ0FBQ0YsTUFBYixDQUFvQk8sVUFBcEIsQ0FBK0JDLFVBQS9CLENBQTBDUCxLQUExQyxDQUFnREEsS0FMckU7QUFNRUksdUNBQXVCLENBQUNqQyxTQUF4QixHQUFvQ2tDLFVBQXBDO0FBQ0FGLGtDQUFrQixDQUFDSyxLQUFuQixDQUF5QkMsT0FBekIsR0FBbUMsT0FBbkM7QUFDTUMsNEJBUlIsR0FRdUJ6QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FSdkI7QUFTUXlDLDZCQVRSLEdBU3dCMUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQVR4QjtBQVVFd0MsNEJBQVksQ0FBQ2YsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQ1Esb0NBQWtCLENBQUNLLEtBQW5CLENBQXlCQyxPQUF6QixHQUFtQyxNQUFuQztBQUNELGlCQUZEO0FBR0FFLDZCQUFhLENBQUNoQixnQkFBZCxDQUErQixPQUEvQixtTEFBd0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ2hDTyxpRUFBQSxrQkFBOEJELFlBQVksQ0FBQ0YsTUFBYixDQUFvQlEsVUFBcEIsQ0FBK0IzQixFQUEvQixDQUFrQ29CLEtBQWhFLEVBRGdDOztBQUFBO0FBRXRDRyw0Q0FBa0IsQ0FBQ0ssS0FBbkIsQ0FBeUJDLE9BQXpCLEdBQW1DLE1BQW5DO0FBQ0FiLGdGQUFRLENBQUMsd0JBQUQsRUFBMkIsVUFBM0IsQ0FBUjs7QUFIc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXhDOztBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzZMQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN1Qk0sbUVBQUEsQ0FBc0IsUUFBdEIsQ0FEdkI7O0FBQUE7QUFDUWhCLHNCQURSO0FBRVFULGdDQUZSLEdBRTJCWCxzREFBUSxDQUFDLGtCQUFELENBRm5DOztBQUFBLHNCQUdNVyxnQkFBZ0IsS0FBSyxDQUgzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrREFJV1MsTUFKWDs7QUFBQTtBQU1FLHFCQUFLMEIsY0FBTCxHQUNFMUIsTUFBTSxDQUFDMkIsTUFBUCxDQUFjLFVBQUN2QixFQUFEO0FBQUEseUJBQVFBLEVBQUUsQ0FBQ3pDLElBQUgsQ0FBUVIsY0FBUixDQUF1QnlFLElBQXZCLENBQTRCLFVBQUNsQyxFQUFEO0FBQUEsMkJBQVFBLEVBQUUsS0FBS0gsZ0JBQWY7QUFBQSxtQkFBNUIsQ0FBUjtBQUFBLGlCQUFkLENBREY7QUFORixrREFRUyxLQUFLbUMsY0FSZDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozt3TEFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ1RBT29CLEtBQUtHLGtCQUFMLEVBUHBCLG1KQVlvQixLQUFLQyxpQkFBTCxFQVpwQixnR0Flb0IsS0FBS0Msa0JBQUwsRUFmcEI7QUFBQTtBQUFBLHVCQWtCeUIsS0FBS0MscUJBQUwsRUFsQnpCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7OzthQTVHTzdDLFMsR0FBWSxJLG9JQTZFbEJELCtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGSDtBQUNBO0FBQ0E7QUFDQTtJQUVxQlYsVzs7Ozs7OztXQUNuQix1QkFBYztBQUNaLFdBQUtxQixNQUFMO0FBR0EsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztXQUVELHVCQUFjO0FBQ1osV0FBS0EsTUFBTDtBQUlBLGFBQU8sS0FBS0EsTUFBWjtBQUNEOzs7V0FFRCw4QkFBcUI7QUFBQTs7QUFDbkIsVUFBTVAsTUFBTSxHQUFHVixzREFBUSxDQUFDLFFBQUQsQ0FBdkI7QUFDQSxXQUFLWSxPQUFMLEdBQWUsRUFBZjtBQUNBRixZQUFNLENBQUN6QixPQUFQLENBQWUsVUFBQzRCLEtBQUQsRUFBVztBQUN4QixhQUFJLENBQUNELE9BQUwsNkJBQWtDQyxLQUFLLENBQUNDLEVBQXhDLGVBQStDRCxLQUFLLENBQUNFLElBQXJEO0FBQ0QsT0FGRDtBQUdBLDJNQUlVLEtBQUtILE9BSmY7QUFNRDs7O1dBRUQsK0JBQXNCO0FBQ3BCLFVBQU1JLFFBQVEsR0FBR2hCLHNEQUFRLENBQUMsVUFBRCxDQUF6QjtBQUNBLFdBQUtZLE9BQUwsR0FBZSxFQUFmOztBQUNBLFdBQUssSUFBSVMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0wsUUFBUSxDQUFDZSxNQUE3QixFQUFxQ1YsQ0FBQyxJQUFJLENBQTFDLEVBQTZDO0FBQzNDLGFBQUtULE9BQUwsNEJBQWlDUyxDQUFqQyxjQUFzQ0wsUUFBUSxDQUFDSyxDQUFELENBQTlDO0FBQ0Q7O0FBQ0Qsc0hBR00sS0FBS1QsT0FIWDtBQUtEOzs7V0FFRCw0QkFBbUI7QUFDakIsVUFBTU0sU0FBUyxHQUFHbEIsc0RBQVEsQ0FBQyxXQUFELENBQTFCO0FBQ0EsV0FBS1ksT0FBTCxHQUFlLEVBQWY7O0FBQ0EsV0FBSyxJQUFJUyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxTQUFTLENBQUNhLE1BQTlCLEVBQXNDVixDQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDNUMsYUFBS1QsT0FBTCw0QkFBaUNTLENBQWpDLGNBQXNDSCxTQUFTLENBQUNHLENBQUQsQ0FBL0M7QUFDRDs7QUFDRCx3SEFHTSxLQUFLVCxPQUhYO0FBS0Q7OztXQUVELHlCQUFnQjtBQUNkLFdBQUtLLE1BQUw7QUFLQSxhQUFPLEtBQUtBLE1BQVo7QUFDRDs7O1dBRUQsOEJBQXFCO0FBQUE7O0FBQ25CLFVBQU1vQyxnQkFBZ0IsR0FBR2xELFFBQVEsQ0FBQ21ELGFBQVQsQ0FBdUIsY0FBdkIsQ0FBekI7QUFDQSxVQUFNQyxpQkFBaUIsR0FBR3BELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUExQjtBQUNBLFVBQU1vRCxpQkFBaUIsR0FBR3JELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUExQjtBQUNBaUQsc0JBQWdCLENBQUN4QixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkM7QUFBQSxlQUFNLE1BQUksQ0FBQzRCLFNBQUwsRUFBTjtBQUFBLE9BQTNDO0FBQ0FGLHVCQUFpQixDQUFDMUIsZ0JBQWxCLENBQW1DLE9BQW5DLEVBQTRDLFVBQUNqRCxLQUFELEVBQVc7QUFDckRBLGFBQUssQ0FBQzhFLGNBQU47O0FBQ0EsY0FBSSxDQUFDQyxlQUFMO0FBQ0QsT0FIRDtBQUlBSCx1QkFBaUIsQ0FBQzNCLGdCQUFsQixDQUFtQyxPQUFuQyxFQUE0QyxVQUFDakQsS0FBRCxFQUFXO0FBQ3JEQSxhQUFLLENBQUM4RSxjQUFOO0FBQ0E1Qiw4REFBUSxDQUFDLHdCQUFELEVBQTJCLFVBQTNCLENBQVI7QUFDRCxPQUhEO0FBSUQ7Ozs7aU1BRUQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVFLHFCQUFLOEIsUUFBTCxHQUFnQixFQUFoQjtBQUNNckIsMEJBSFIsR0FHcUJwQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0M4QixLQUgzRDtBQUlRMkIsaUNBSlIsR0FJNEIxRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0MwRCxRQUpwRTtBQUtRQyxrQ0FMUixHQUs2QixFQUw3Qjs7QUFNRSxxQkFBUzFDLENBQVQsR0FBYSxDQUFiLEVBQWdCQSxDQUFDLEdBQUd3QyxpQkFBaUIsQ0FBQzlCLE1BQXRDLEVBQThDVixDQUFDLElBQUksQ0FBbkQsRUFBc0Q7QUFDcEQsc0JBQUl3QyxpQkFBaUIsQ0FBQ3hDLENBQUQsQ0FBakIsQ0FBcUIyQyxRQUF6QixFQUFtQztBQUNqQ0Qsc0NBQWtCLENBQUNqRixJQUFuQixDQUF3QixDQUFDK0UsaUJBQWlCLENBQUN4QyxDQUFELENBQWpCLENBQXFCb0IsVUFBckIsQ0FBZ0NQLEtBQWhDLENBQXNDQSxLQUEvRDtBQUNEO0FBQ0Y7O0FBRUsrQix5QkFaUixHQVlvQjlELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQzBELFFBWjFEO0FBYU1JLGlDQWJOLEdBYTBCLEVBYjFCOztBQWNFLHFCQUFTN0MsRUFBVCxHQUFhLENBQWIsRUFBZ0JBLEVBQUMsR0FBRzRDLFNBQVMsQ0FBQ2xDLE1BQTlCLEVBQXNDVixFQUFDLElBQUksQ0FBM0MsRUFBOEM7QUFDNUMsc0JBQUk0QyxTQUFTLENBQUM1QyxFQUFELENBQVQsQ0FBYTJDLFFBQWpCLEVBQTJCO0FBQ3pCRSxxQ0FBaUIsR0FBRyxDQUFDRCxTQUFTLENBQUM1QyxFQUFELENBQVQsQ0FBYW9CLFVBQWIsQ0FBd0JQLEtBQXhCLENBQThCQSxLQUFuRDtBQUNEO0FBQ0Y7O0FBQ0tpQywwQkFuQlIsR0FtQnFCaEUsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDMEQsUUFuQjVEO0FBb0JNTSw4QkFwQk4sR0FvQnVCLEVBcEJ2Qjs7QUFxQkUscUJBQVMvQyxHQUFULEdBQWEsQ0FBYixFQUFnQkEsR0FBQyxHQUFHOEMsVUFBVSxDQUFDcEMsTUFBL0IsRUFBdUNWLEdBQUMsSUFBSSxDQUE1QyxFQUErQztBQUM3QyxzQkFBSThDLFVBQVUsQ0FBQzlDLEdBQUQsQ0FBVixDQUFjMkMsUUFBbEIsRUFBNEI7QUFDMUJJLGtDQUFjLEdBQUcsQ0FBQ0QsVUFBVSxDQUFDOUMsR0FBRCxDQUFWLENBQWNvQixVQUFkLENBQXlCUCxLQUF6QixDQUErQkEsS0FBakQ7QUFDRDtBQUNGOztBQXpCSDtBQUFBLHVCQTJCdUJFLG1FQUFBLENBQXNCLFVBQXRCLENBM0J2Qjs7QUFBQTtBQTJCUWhCLHNCQTNCUjtBQTRCUXhDLHFCQTVCUixHQTZCSXdDLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLFVBQUM4QyxDQUFEO0FBQUEseUJBQU9BLENBQUMsQ0FBQ3RGLElBQUYsQ0FBT1QsT0FBUCxLQUFtQjRGLGlCQUFuQixJQUF3Q0csQ0FBQyxDQUFDdEYsSUFBRixDQUFPVixRQUFQLEtBQW9CK0YsY0FBbkU7QUFBQSxpQkFBWixDQTdCSjs7QUFBQSxxQkErQk14RixLQS9CTjtBQUFBO0FBQUE7QUFBQTs7QUFnQ1UwRixxQkFoQ1YsR0FnQ2tCbkUsUUFBUSxDQUFDbUQsYUFBVCxDQUF1QixRQUF2QixDQWhDbEI7QUFpQ0lnQixxQkFBSyxDQUFDNUIsS0FBTixDQUFZNkIsVUFBWixHQUF5QixTQUF6QjtBQWpDSjtBQUFBOztBQUFBO0FBQUEsb0JBa0NjaEMsVUFsQ2Q7QUFBQTtBQUFBO0FBQUE7O0FBbUNVaUMsK0JBbkNWLEdBbUM0QnJFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQW5DNUI7QUFvQ0lvRSwrQkFBZSxDQUFDQyxZQUFoQixDQUE2QixhQUE3QixFQUE0QyxnQkFBNUM7QUFDQUQsK0JBQWUsQ0FBQ0UsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLGFBQTlCO0FBckNKO0FBQUE7O0FBQUE7QUF1Q0kscUJBQUtmLFFBQUwsR0FBZ0IsSUFBSXpGLG1EQUFKLENBQWtCb0UsVUFBbEIsRUFBOEI2QixjQUE5QixFQUNkRixpQkFEYyxFQUNLSCxrQkFETCxDQUFoQjtBQXZDSjtBQUFBLHVCQXlDVTNCLDhEQUFBLENBQWlCLFFBQWpCLEVBQTJCLEtBQUt3QixRQUFoQyxDQXpDVjs7QUFBQTtBQTBDSTlCLHNFQUFRLENBQUMsd0JBQUQsRUFBMkIsVUFBM0IsQ0FBUjs7QUExQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7OztXQThDQSxxQkFBWTtBQUNWLFdBQUt3QyxLQUFMLEdBQWFuRSxRQUFRLENBQUNtRCxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxXQUFLZ0IsS0FBTCxDQUFXNUIsS0FBWCxDQUFpQjZCLFVBQWpCLEdBQThCLFFBQTlCO0FBQ0Q7OztXQUVELGtCQUFTO0FBQ1Asc0tBR0ssS0FBS0ssV0FBTCxFQUhMLHFDQUtNLEtBQUtDLFdBQUwsRUFMTix1QkFNTSxLQUFLQyxrQkFBTCxFQU5OLHVCQU9NLEtBQUtDLG1CQUFMLEVBUE4sdUJBUU0sS0FBS0MsZ0JBQUwsRUFSTix1QkFTTSxLQUFLQyxhQUFMLEVBVE47QUFhRDs7OzttSUFqRUEzRSwrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZIO0FBQ0E7O0lBRXFCUixXOzs7Ozs7O1dBQ25CLDZCQUFvQjtBQUFBOztBQUNsQixVQUFNWSxNQUFNLEdBQUdWLHNEQUFRLENBQUMsUUFBRCxDQUF2QjtBQUNBLFdBQUtZLE9BQUwsR0FBZSxFQUFmO0FBQ0FGLFlBQU0sQ0FBQ3pCLE9BQVAsQ0FBZSxVQUFDNEIsS0FBRCxFQUFXO0FBQ3hCLGFBQUksQ0FBQ0QsT0FBTCw2QkFBa0NDLEtBQUssQ0FBQ0MsRUFBeEMsZUFBK0NELEtBQUssQ0FBQ0UsSUFBckQ7QUFDRCxPQUZEO0FBSUEsdUhBRzRCLEtBQUtILE9BSGpDO0FBT0Q7OztXQUVELDhCQUFxQjtBQUNuQixVQUFNc0UsV0FBVyxHQUFHL0UsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQXBCO0FBQ0E4RSxpQkFBVyxDQUFDckQsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS3NELFVBQTNDO0FBQ0Q7OztXQUVELHNCQUFhO0FBQ1gsV0FBS3pFLE1BQUwsR0FBY1Ysc0RBQVEsQ0FBQyxRQUFELENBQXRCO0FBQ0EsVUFBTW9GLG9CQUFvQixHQUFHakYsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLEVBQXdDOEIsS0FBckU7O0FBQ0EsVUFBSSxDQUFDLEtBQUt4QixNQUFMLENBQVlhLElBQVosQ0FBaUIsVUFBQ1YsS0FBRDtBQUFBLGVBQVdBLEtBQUssQ0FBQ0MsRUFBTixLQUFhLENBQUNzRSxvQkFBZCxJQUFzQ3ZFLEtBQUssQ0FBQ3dFLEtBQXZEO0FBQUEsT0FBakIsQ0FBTCxFQUFxRjtBQUNuRjNGLHNFQUFBLEdBQXFCLEtBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLHNFQUFBLEdBQXFCLElBQXJCO0FBQ0Q7O0FBQ0RvQyw0REFBUSxDQUFDLHdCQUFELEVBQTJCLFVBQTNCLENBQVI7QUFDRDs7O1dBRUQsa0JBQVM7QUFDUCw2QkFDRSxLQUFLd0QsaUJBQUwsRUFERjtBQUdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDSDtBQUNBO0FBRUFDLHVEQUFTLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hUOztJQUVxQkMsSzs7Ozs7QUFDbkIsaUJBQVl6RSxJQUFaLEVBQWdDO0FBQUE7O0FBQUEsUUFBZHNFLEtBQWMsdUVBQU4sSUFBTTs7QUFBQTs7QUFDOUI7QUFDQSxVQUFLdEUsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS3NFLEtBQUwsR0FBYUEsS0FBYjtBQUg4QjtBQUkvQjs7O0VBTGdDSSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRmRBLEksR0FHakIsY0FBWTFFLElBQVosRUFBa0I7QUFBQTs7QUFDaEIwRSxNQUFJLENBQUNDLFNBQUwsSUFBa0IsQ0FBbEI7QUFDQSxPQUFLNUUsRUFBTCxHQUFVMkUsSUFBSSxDQUFDQyxTQUFmO0FBQ0EsT0FBSzNFLElBQUwsR0FBWUEsSUFBWjtBQUNELEM7O0FBUGdCMEUsSSxDQUNWQyxTLEdBQVksQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNEakJDLFk7Ozs7Ozs7O2dOQUNKO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxxQkFBS0Msb0JBQUwsR0FBNEJ6RixRQUFRLENBQUNtRCxhQUFULENBQXVCLHNCQUF2QixDQUE1QjtBQUNBLHFCQUFLc0Msb0JBQUwsQ0FBMEJsRCxLQUExQixDQUFnQzZCLFVBQWhDLEdBQTZDLFNBQTdDO0FBQ0FsRiwwQkFBVSxDQUFDLFlBQU07QUFDZix1QkFBSSxDQUFDdUcsb0JBQUwsQ0FBMEJsRCxLQUExQixDQUFnQzZCLFVBQWhDLEdBQTZDLFFBQTdDO0FBQ0QsaUJBRlMsRUFFUCxJQUZPLENBQVY7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7Mk1BUUEsa0JBQWdDc0IsR0FBaEM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFLHFCQUFLRCxvQkFBTCxHQUE0QnpGLFFBQVEsQ0FBQ21ELGFBQVQsQ0FBdUIsc0JBQXZCLENBQTVCO0FBQ0EscUJBQUtzQyxvQkFBTCxDQUEwQmxCLFNBQTFCLENBQW9DQyxHQUFwQyxDQUF3QyxLQUF4QztBQUNBLHFCQUFLaUIsb0JBQUwsQ0FBMEJFLFNBQTFCLEdBQXNDRCxHQUFHLENBQUNFLE9BQTFDO0FBQ0ExRywwQkFBVSxDQUFDLFlBQU07QUFDZix3QkFBSSxDQUFDdUcsb0JBQUwsQ0FBMEJsRCxLQUExQixDQUFnQzZCLFVBQWhDLEdBQTZDLFFBQTdDO0FBQ0QsaUJBRlMsRUFFUCxJQUZPLENBQVY7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7OztBQVVGLElBQU15QixZQUFZLEdBQUcsSUFBSUwsWUFBSixFQUFyQjtBQUNBLGlFQUFlSyxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwQk1DLE87QUFHRixxQkFBYztBQUFBOztBQUFBLFNBRmRDLE9BRWMsR0FGSixnREFFSTs7QUFDWixRQUFJRCxPQUFPLENBQUNFLFFBQVosRUFBc0I7QUFDcEIsYUFBT0YsT0FBTyxDQUFDRSxRQUFmO0FBQ0Q7O0FBQ0RGLFdBQU8sQ0FBQ0UsUUFBUixHQUFtQixJQUFuQjtBQUNEOzs7OzsrTEFFRCxpQkFBb0JDLEdBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ29CQyxLQUFLLFdBQUksS0FBS0gsT0FBVCxTQUFtQkUsR0FBbkIsRUFEekI7O0FBQUE7QUFDUUUsbUJBRFI7O0FBQUEsb0JBRU9BLEdBQUcsQ0FBQ0MsRUFGWDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxzQkFHVSxJQUFJQyxLQUFKLENBQVUsMEJBQW1CSixHQUFuQix5QkFDSUUsR0FBRyxDQUFDRyxNQURSLENBQVYsQ0FIVjs7QUFBQTtBQUFBO0FBQUEsdUJBTTJCSCxHQUFHLENBQUNJLElBQUosRUFOM0I7O0FBQUE7QUFNUUMsMEJBTlI7QUFBQSxpREFPU0EsVUFBVSxLQUFLLElBQWYsR0FBc0IsRUFBdEIsR0FBMkJBLFVBQVUsQ0FBQ0MsR0FBWCxDQUFlO0FBQUEsc0JBQUc5RixFQUFILFFBQUdBLEVBQUg7QUFBQSxzQkFBTy9CLElBQVAsUUFBT0EsSUFBUDtBQUFBLHlCQUFtQjtBQUNsRStCLHNCQUFFLEVBQUZBLEVBRGtFO0FBQzlEL0Isd0JBQUksRUFBRThILElBQUksQ0FBQ0MsS0FBTCxDQUFXL0gsSUFBWDtBQUR3RCxtQkFBbkI7QUFBQSxpQkFBZixDQVBwQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7Ozs7Ozs2TEFZQSxrQkFBa0JxSCxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNvQkMsS0FBSyxXQUFJLEtBQUtILE9BQVQsU0FBbUJFLEdBQW5CLEdBQTBCO0FBQy9DVyx3QkFBTSxFQUFFO0FBRHVDLGlCQUExQixDQUR6Qjs7QUFBQTtBQUNRVCxtQkFEUjs7QUFBQSxvQkFJT0EsR0FBRyxDQUFDQyxFQUpYO0FBQUE7QUFBQTtBQUFBOztBQUFBLHNCQUtVLElBQUlDLEtBQUosQ0FBVSwwQkFBbUJKLEdBQW5CLHlCQUNHRSxHQUFHLENBQUNHLE1BRFAsQ0FBVixDQUxWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7Ozs7OzBMQVVBLGtCQUFlTCxHQUFmLEVBQW9CWSxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNvQlgsS0FBSyxXQUFJLEtBQUtILE9BQVQsU0FBbUJFLEdBQW5CLEdBQTBCO0FBQy9DVyx3QkFBTSxFQUFFLE1BRHVDO0FBRS9DQyxzQkFBSSxFQUFFSCxJQUFJLENBQUNJLFNBQUwsQ0FBZTtBQUFFbEksd0JBQUksRUFBRThILElBQUksQ0FBQ0ksU0FBTCxDQUFlRCxJQUFmO0FBQVIsbUJBQWY7QUFGeUMsaUJBQTFCLENBRHpCOztBQUFBO0FBQ1FWLG1CQURSOztBQUFBLG9CQUtPQSxHQUFHLENBQUNDLEVBTFg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsc0JBTVUsSUFBSUMsS0FBSixDQUFVLDBCQUFtQkosR0FBbkIseUJBQ1dFLEdBQUcsQ0FBQ0csTUFEZixDQUFWLENBTlY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTzs7Ozs7Ozs7Ozs7OztBQVlKLElBQU1yRSxPQUFPLEdBQUcsSUFBSTZELE9BQUosRUFBaEI7QUFDQSxpRUFBZTdELE9BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUVlLFNBQVM5QixpQkFBVCxDQUEyQjJCLE1BQTNCLEVBQW1DaUYsR0FBbkMsRUFBd0NDLFVBQXhDLEVBQW9EO0FBQ2pFLE1BQU1DLEVBQUUsR0FBR0QsVUFBVSxDQUFDakYsS0FBdEI7QUFFQWlGLFlBQVUsQ0FBQ2pGLEtBQVgsb0xBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLHNDQUFtQm1GLElBQW5CO0FBQW1CQSxrQkFBbkI7QUFBQTs7QUFBQTtBQUFBLG1CQUVNRCxFQUFFLENBQUNFLEtBQUgsQ0FBUyxJQUFULEVBQWVELElBQWYsQ0FGTjs7QUFBQTtBQUVUcEcsa0JBRlM7QUFHZitFLDZGQUFBO0FBSGUsNkNBSVIvRSxNQUpROztBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQU1SK0UsNEVBQUEsYUFOUTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFuQjtBQVVBLFNBQU9tQixVQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkQ7QUFDQTtBQUNBO0FBRUEsSUFBTUksWUFBWSxHQUFHLENBQ25CLElBQUkvQix3REFBSixDQUFVLE1BQVYsQ0FEbUIsRUFFbkIsSUFBSUMsdURBQUosQ0FBUyxXQUFULENBRm1CLEVBR25CLElBQUlBLHVEQUFKLENBQVMsU0FBVCxDQUhtQixDQUFyQjtBQU1BLElBQUkrQixLQUFLLEdBQUcsRUFBWjtBQUNPLElBQU1qQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQzdCaUMsT0FBSyxHQUFHO0FBQ054RyxZQUFRLEVBQUUsQ0FDUixRQURRLEVBRVIsU0FGUSxFQUdSLFdBSFEsRUFJUixVQUpRLEVBS1IsUUFMUSxDQURKO0FBUU5FLGFBQVMsRUFBRSxDQUNULE9BRFMsRUFFVCxPQUZTLEVBR1QsT0FIUyxFQUlULE9BSlMsRUFLVCxPQUxTLEVBTVQsT0FOUyxFQU9ULE9BUFMsRUFRVCxPQVJTLEVBU1QsT0FUUyxDQVJMO0FBbUJOUixVQUFNLFlBQU02RyxZQUFOLENBbkJBO0FBb0JORSwwQkFBc0IsRUFBRSxhQXBCbEI7QUFxQk45RyxvQkFBZ0IsRUFBRTtBQXJCWixHQUFSO0FBd0JBekIseURBQUEsQ0FBa0IsY0FBbEI7QUFDRCxDQTFCTTtBQTRCQSxJQUFNYyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDMEgsU0FBRDtBQUFBLFNBQWVGLEtBQUssQ0FBQ0UsU0FBRCxDQUFwQjtBQUFBLENBQWpCO0FBRUEsSUFBTTVGLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUM0RixTQUFELEVBQVlDLFVBQVosRUFBMkI7QUFDakRILE9BQUssQ0FBQ0UsU0FBRCxDQUFMLEdBQW1CQyxVQUFuQjtBQUNBekkseURBQUEsQ0FBa0IsY0FBbEI7QUFDRCxDQUhNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q1A7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLCtEQUErRCx1QkFBdUIsMkNBQTJDLGtCQUFrQixrQkFBa0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsR0FBRyxhQUFhLGtCQUFrQixHQUFHLGNBQWMsdUJBQXVCLEdBQUcsbUJBQW1CLHNCQUFzQixxQkFBcUIsdUJBQXVCLEdBQUcsb0NBQW9DLGlCQUFpQixpQkFBaUIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsZUFBZSxrQkFBa0IsMENBQTBDLHdDQUF3Qyx5TEFBeUwsa0JBQWtCLGlCQUFpQiw0QkFBNEIsdUJBQXVCLEdBQUcsZUFBZSxpQkFBaUIsa0JBQWtCLGlEQUFpRCxpQkFBaUIscUJBQXFCLEdBQUcsMkNBQTJDLGlCQUFpQixrQkFBa0Isc0JBQXNCLHVCQUF1Qiw0QkFBNEIsR0FBRyxrQkFBa0IsaUJBQWlCLGlCQUFpQiw2Q0FBNkMsR0FBRyxzQkFBc0IsNEJBQTRCLHNCQUFzQix1QkFBdUIsa0JBQWtCLEdBQUcsa0JBQWtCLGlCQUFpQixrQkFBa0IsMENBQTBDLHVDQUF1QyxHQUFHLG9CQUFvQixtQ0FBbUMsZ0NBQWdDLCtCQUErQiwyQkFBMkIsY0FBYyxpQkFBaUIsNEJBQTRCLEdBQUcsOEJBQThCLG1DQUFtQyxnQ0FBZ0MsK0JBQStCLDJCQUEyQix1QkFBdUIsOEJBQThCLCtDQUErQyxxQkFBcUIsc0JBQXNCLG9CQUFvQixzQkFBc0IsNEJBQTRCLDJCQUEyQixHQUFHLG9CQUFvQixtQkFBbUIsdUJBQXVCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGNBQWMsYUFBYSxlQUFlLG1CQUFtQix3QkFBd0IsOEJBQThCLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsd0NBQXdDLHdCQUF3QixHQUFHLDBCQUEwQixrQkFBa0IsaURBQWlELEdBQUcscUJBQXFCLGtCQUFrQix1QkFBdUIsYUFBYSxjQUFjLGdEQUFnRCxpQkFBaUIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsbUJBQW1CLHFCQUFxQiw4QkFBOEIsNEJBQTRCLHdCQUF3QixHQUFHLHFCQUFxQix1QkFBdUIsb0JBQW9CLHdCQUF3QixHQUFHLHVCQUF1Qix1QkFBdUIsZUFBZSx1QkFBdUIsZ0JBQWdCLEdBQUcsMEJBQTBCLGdCQUFnQixpQkFBaUIsdUJBQXVCLHNCQUFzQixvQkFBb0IsR0FBRyxtQkFBbUIsMkNBQTJDLGlCQUFpQixrQkFBa0IsaUJBQWlCLG9CQUFvQix1QkFBdUIsR0FBRyxVQUFVLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHdCQUF3Qiw0QkFBNEIsK0NBQStDLEdBQUcsV0FBVyxlQUFlLDBCQUEwQixnQkFBZ0IseUJBQXlCLEdBQUcsV0FBVyxtQ0FBbUMsZ0NBQWdDLCtCQUErQiwyQkFBMkIsZUFBZSxpQkFBaUIsR0FBRyxZQUFZLG1DQUFtQyxnQ0FBZ0MsK0JBQStCLDJCQUEyQixlQUFlLGlCQUFpQixvQkFBb0IsR0FBRyxtQkFBbUIsaUJBQWlCLEdBQUcsY0FBYyxtQkFBbUIsc0JBQXNCLEdBQUcsbUJBQW1CLG9CQUFvQixHQUFHLFlBQVksZ0JBQWdCLGlCQUFpQixrQkFBa0IsdUJBQXVCLDZDQUE2QyxnQkFBZ0Isd0JBQXdCLEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsaUJBQWlCLGVBQWUsc0JBQXNCLGdDQUFnQyxpQkFBaUIsd0JBQXdCLG9CQUFvQixHQUFHLGtCQUFrQiwwQkFBMEIsR0FBRyxtQkFBbUIsdUJBQXVCLGFBQWEsY0FBYyxpQkFBaUIsa0JBQWtCLHdCQUF3Qix1QkFBdUIsbUJBQW1CLGlEQUFpRCxpQkFBaUIsd0JBQXdCLDRCQUE0QixHQUFHLG9CQUFvQix1QkFBdUIsR0FBRywrQkFBK0IsbUJBQW1CLGlCQUFpQixlQUFlLGlCQUFpQixvQkFBb0IsR0FBRyxxQkFBcUIsa0JBQWtCLEdBQUcsbUNBQW1DLG1CQUFtQixpQkFBaUIsaUJBQWlCLGlCQUFpQixvQkFBb0IsR0FBRyxVQUFVLCtCQUErQixHQUFHLDBCQUEwQix1QkFBdUIsZUFBZSxnQkFBZ0IscUJBQXFCLGlCQUFpQixrQkFBa0IsdUJBQXVCLDhDQUE4Qyx3QkFBd0IscUJBQXFCLEdBQUcsVUFBVSw2Q0FBNkMsd0JBQXdCLEdBQUcsT0FBTywwT0FBME8sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsVUFBVSxXQUFXLEtBQUssTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLCtDQUErQyx5QkFBeUIsMkNBQTJDLG9CQUFvQixvQkFBb0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsS0FBSyxpQkFBaUIsb0JBQW9CLFVBQVUsMkJBQTJCLE9BQU8sbUJBQW1CLDBCQUEwQix5QkFBeUIsMkJBQTJCLE9BQU8sS0FBSyxpQkFBaUIscUJBQXFCLHFCQUFxQixxQkFBcUIsT0FBTyxjQUFjLDhCQUE4QixPQUFPLGNBQWMsd0JBQXdCLDhCQUE4QixPQUFPLEtBQUssZUFBZSxvQkFBb0IsNENBQTRDLDBDQUEwQyw2T0FBNk8sb0JBQW9CLG1CQUFtQiw4QkFBOEIseUJBQXlCLEtBQUssbUJBQW1CLG1CQUFtQixvQkFBb0IsbURBQW1ELG1CQUFtQix1QkFBdUIsK0JBQStCLHFCQUFxQixzQkFBc0IsMEJBQTBCLDJCQUEyQixnQ0FBZ0MsT0FBTyxLQUFLLHNCQUFzQixtQkFBbUIsbUJBQW1CLCtDQUErQyxhQUFhLGdDQUFnQywwQkFBMEIsMkJBQTJCLHNCQUFzQixPQUFPLEtBQUssc0JBQXNCLG1CQUFtQixvQkFBb0IsNENBQTRDLHlDQUF5QyxXQUFXLHVDQUF1QyxvQ0FBb0MsbUNBQW1DLCtCQUErQixrQkFBa0IscUJBQXFCLGdDQUFnQyxPQUFPLHlCQUF5Qix1Q0FBdUMsb0NBQW9DLG1DQUFtQywrQkFBK0IsMkJBQTJCLGtDQUFrQyxtREFBbUQseUJBQXlCLDBCQUEwQix3QkFBd0IsMEJBQTBCLGdDQUFnQywrQkFBK0IsT0FBTyxLQUFLLG9CQUFvQixxQkFBcUIseUJBQXlCLHlCQUF5QixrQkFBa0IsbUJBQW1CLGdCQUFnQixlQUFlLGlCQUFpQiw4QkFBOEIsMEJBQTBCLGdDQUFnQyxtQkFBbUIseUJBQXlCLHNCQUFzQixLQUFLLDZCQUE2QixzQkFBc0IsNEJBQTRCLE9BQU8sS0FBSywwQkFBMEIsb0JBQW9CLG1EQUFtRCxLQUFLLHFCQUFxQixvQkFBb0IseUJBQXlCLGVBQWUsZ0JBQWdCLGtEQUFrRCxtQkFBbUIsb0JBQW9CLDBCQUEwQix5QkFBeUIscUJBQXFCLHVCQUF1QixnQ0FBZ0MsOEJBQThCLDBCQUEwQixTQUFTLDJCQUEyQix3QkFBd0IsNEJBQTRCLE9BQU8sV0FBVywyQkFBMkIsbUJBQW1CLDJCQUEyQixvQkFBb0IsT0FBTyxjQUFjLG9CQUFvQixxQkFBcUIsMkJBQTJCLDBCQUEwQix3QkFBd0IsT0FBTyxLQUFLLGtEQUFrRCxrREFBa0Qsa0RBQWtELFVBQVUsaUNBQWlDLEtBQUssOEJBQThCLHlCQUF5QixpQkFBaUIsa0JBQWtCLHVCQUF1QixtQkFBbUIsb0JBQW9CLHlCQUF5QixnREFBZ0QsMEJBQTBCLHVCQUF1QixLQUFLLGNBQWMsOENBQThDLDBCQUEwQixLQUFLLGtCQUFrQiwyQ0FBMkMsbUJBQW1CLG9CQUFvQixtQkFBbUIsc0JBQXNCLHlCQUF5QixLQUFLLFVBQVUsb0JBQW9CLG1CQUFtQixrQkFBa0IsMEJBQTBCLDhCQUE4QixpREFBaUQsS0FBSyxlQUFlLGlCQUFpQiw0QkFBNEIsa0JBQWtCLDJCQUEyQixLQUFLLGVBQWUscUNBQXFDLGtDQUFrQyxpQ0FBaUMsNkJBQTZCLGlCQUFpQixtQkFBbUIsS0FBSyxnQkFBZ0IscUNBQXFDLGtDQUFrQyxpQ0FBaUMsNkJBQTZCLGlCQUFpQixtQkFBbUIsc0JBQXNCLEtBQUssbUJBQW1CLG1CQUFtQixLQUFLLGNBQWMscUJBQXFCLHdCQUF3QixhQUFhLG9CQUFvQixLQUFLLEtBQUssZ0JBQWdCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHlCQUF5QiwrQ0FBK0Msa0JBQWtCLDBCQUEwQixjQUFjLHFCQUFxQixvQkFBb0IscUJBQXFCLG1CQUFtQiwwQkFBMEIsb0NBQW9DLHFCQUFxQiw0QkFBNEIsd0JBQXdCLE9BQU8sS0FBSyxrQkFBa0IsNEJBQTRCLEtBQUssc0JBQXNCLDJCQUEyQixpQkFBaUIsa0JBQWtCLHFCQUFxQixzQkFBc0IsNEJBQTRCLDJCQUEyQix1QkFBdUIscURBQXFELHFCQUFxQiw0QkFBNEIsZ0NBQWdDLFlBQVksNkJBQTZCLFNBQVMsdUJBQXVCLHFCQUFxQixtQkFBbUIsaUJBQWlCLG1CQUFtQixzQkFBc0IsU0FBUyxhQUFhLHdCQUF3Qix1QkFBdUIseUJBQXlCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLDBCQUEwQixTQUFTLE9BQU8sT0FBTyxtQkFBbUI7QUFDL2lkO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLGdGQUFnRixlQUFlLGVBQWUsZ0JBQWdCLG9CQUFvQixNQUFNLDBDQUEwQywrQkFBK0IsYUFBYSxxQkFBcUIsbUNBQW1DLEVBQUUsRUFBRSxjQUFjLFdBQVcsVUFBVSxFQUFFLFVBQVUsTUFBTSxpREFBaUQsRUFBRSxVQUFVLGtCQUFrQixFQUFFLEVBQUUsYUFBYTs7QUFFdmUsK0JBQStCLG9DQUFvQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQnlGO0FBQ3pGLFlBQWdJOztBQUVoSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx5SEFBTzs7OztBQUl4QixpRUFBZSxnSUFBYyxNQUFNLEU7Ozs7Ozs7Ozs7O0FDWnRCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImNhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5LCBkZWNvcmF0b3JzLCBkZXNjcmlwdG9yLCBjb250ZXh0KSB7XG4gIHZhciBkZXNjID0ge307XG4gIE9iamVjdC5rZXlzKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplZDsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIC8vIElFIDggaGFzIGEgYnJva2VuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB0aGF0IG9ubHkgd29ya3Mgb24gRE9NIG9iamVjdHMuXG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24ob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQgYW5kIG91dGVyRm4ucHJvdG90eXBlIGlzIGEgR2VuZXJhdG9yLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yO1xuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgLy8gVGhpcyBpcyBhIHBvbHlmaWxsIGZvciAlSXRlcmF0b3JQcm90b3R5cGUlIGZvciBlbnZpcm9ubWVudHMgdGhhdFxuICAvLyBkb24ndCBuYXRpdmVseSBzdXBwb3J0IGl0LlxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgSXRlcmF0b3JQcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgdmFyIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBpZiAoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiZcbiAgICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJlxuICAgICAgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSkge1xuICAgIC8vIFRoaXMgZW52aXJvbm1lbnQgaGFzIGEgbmF0aXZlICVJdGVyYXRvclByb3RvdHlwZSU7IHVzZSBpdCBpbnN0ZWFkXG4gICAgLy8gb2YgdGhlIHBvbHlmaWxsLlxuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPVxuICAgIEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIik7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXJFdmVudCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCB0aW1lc2xvdCwgd2Vla2RheSwgcGFydGljaXBhbnRzSWQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy50aW1lc2xvdCA9IHRpbWVzbG90O1xuICAgIHRoaXMud2Vla2RheSA9IHdlZWtkYXk7XG4gICAgdGhpcy5wYXJ0aWNpcGFudHNJZCA9IHBhcnRpY2lwYW50c0lkO1xuICB9XG59XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAvaW5kZXgnO1xuXG5jb25zdCBhcHBDb21wb25lbnQgPSBuZXcgQXBwKCk7XG5cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gIH1cblxuICBvbihldmVudCwgY2IpIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2V2ZW50XSkgdGhpcy5jYWxsYmFja3NbZXZlbnRdID0gW107XG4gICAgdGhpcy5jYWxsYmFja3NbZXZlbnRdLnB1c2goY2IpO1xuICB9XG5cbiAgZW1pdChldmVudCwgZGF0YSkge1xuICAgIGNvbnN0IGNicyA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMuZm9yRWFjaCgoY2IpID0+IGNiKGRhdGEpKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4vLyBzZXR1cCBvdXIgbGlzdGVuZXJzIGZvciBldmVudCBFbWl0dGVyXG5ldmVudEVtaXR0ZXIub24oJ3N0b3JlQ2hhbmdlZCcsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgYXBwQ29tcG9uZW50LmNoZWNrQ29tcG9uZW50Rm9yUmVuZGVyKCk7XG4gIHNldFRpbWVvdXQoYXBwQ29tcG9uZW50LnNldHVwUGFnZUxpc3RlbmVycy5jYWxsKGFwcENvbXBvbmVudCksIDEpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50RW1pdHRlcjtcbiIsImltcG9ydCB7IGdldEZpZWxkIH0gZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NhbGVuZGFyL2luZGV4JztcbmltcG9ydCBDcmVhdGVFdmVudCBmcm9tICcuLi9jcmVhdGVFdmVudC9pbmRleCc7XG5pbXBvcnQgTG9naW5XaW5kb3cgZnJvbSAnLi4vbG9naW5XaW5kb3cvaW5kZXgnO1xuaW1wb3J0IFRyeUNhdGNoRGVjb3JhdG9yIGZyb20gJy4uLy4uL3NlcnZpY2UvVHJ5Q2F0Y2hEZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xuICAgIGNvbXBvbmVudHNNYXAgPSB7XG4gICAgICBjYWxlbmRhcjogbmV3IENhbGVuZGFyKCksXG4gICAgICBjcmVhdGVFdmVudDogbmV3IENyZWF0ZUV2ZW50KCksXG4gICAgICBsb2dpbldpbmRvdzogbmV3IExvZ2luV2luZG93KCksXG4gICAgfTtcblxuICAgIGNoZWNrQ29tcG9uZW50Rm9yUmVuZGVyKCkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzTWFwW2dldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJyldO1xuICAgICAgaWYgKGNvbXBvbmVudCBpbnN0YW5jZW9mIENhbGVuZGFyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGVuZGFyUmVuZGVyKCk7XG4gICAgICB9IGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LnJlbmRlcikge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwbGljYXRpb24nKS5pbm5lckhUTUwgPSBjb21wb25lbnQucmVuZGVyKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gJzxkaXY+U29ycnkgc29tZXRoaW5nIHdlbnQgd3Jvbmc8L2Rpdj4nO1xuICAgIH1cblxuICAgIEBUcnlDYXRjaERlY29yYXRvclxuICAgIGFzeW5jIGNhbGVuZGFyUmVuZGVyKCkge1xuICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzTWFwW2dldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJyldO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2F0aW9uJykuaW5uZXJIVE1MID0gYXdhaXQgY29tcG9uZW50LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHNldHVwUGFnZUxpc3RlbmVycygpIHtcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c01hcFtnZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScpXTtcbiAgICAgIGlmIChjb21wb25lbnQgJiYgY29tcG9uZW50LnNldHVwUGFnZUxpc3RlbmVycykge1xuICAgICAgICBjb21wb25lbnQuc2V0dXBQYWdlTGlzdGVuZXJzKCk7XG4gICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZS9TZXJ2aWNlJztcbmltcG9ydCB7IGdldEZpZWxkLCBzZXRGaWVsZCB9IGZyb20gJy4uLy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCBUcnlDYXRjaERlY29yYXRvciBmcm9tICcuLi8uLi9zZXJ2aWNlL1RyeUNhdGNoRGVjb3JhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsZW5kYXIge1xuICBzdGF0aWMgYWRtaW5Nb2RlID0gbnVsbDtcblxuICBjaGVja01vZGUoKSB7XG4gICAgaWYgKENhbGVuZGFyLmFkbWluTW9kZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMubW9kZVN0eWxlID0gJ2Rpc3BsYXk6bm9uZSc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vZGVTdHlsZTtcbiAgfVxuXG4gIGNyZWF0ZUZpbHRlclNlbGVjdCgpIHtcbiAgICB0aGlzLmNoZWNrTW9kZSgpO1xuICAgIGNvbnN0IHBlb3BsZSA9IGdldEZpZWxkKCdwZW9wbGUnKTtcbiAgICBjb25zdCBmaWx0ZXJTZWxlY3RlZElkID0gZ2V0RmllbGQoJ2ZpbHRlclNlbGVjdGVkSWQnKTtcbiAgICB0aGlzLm9wdGlvbnMgPSAnJztcbiAgICBwZW9wbGUuZm9yRWFjaCgoaHVtYW4pID0+IHtcbiAgICAgIHRoaXMub3B0aW9ucyArPSBgPG9wdGlvbiAke2ZpbHRlclNlbGVjdGVkSWQgPT09IGh1bWFuLmlkID8gJ3NlbGVjdGVkJyA6ICcnfSB2YWx1ZT0nJHtodW1hbi5pZH0nPiR7aHVtYW4ubmFtZX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGBcbiAgICAgICAgPHNlbGVjdCBpZD1cInBhcnRpY2lwYW50cy1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzAnICR7ZmlsdGVyU2VsZWN0ZWRJZCA9PT0gMCA/ICdzZWxlY3RlZCcgOiAnJ30+QWxsIG1lbWJlcnM8L29wdGlvbj5cbiAgICAgICAgICAgICR7dGhpcy5vcHRpb25zfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJ1dHRvbiBpZD1cIm5ldy1ldmVudFwiIHN0eWxlPSR7dGhpcy5tb2RlU3R5bGV9Pk5ldyBldmVudCArPC9idXR0b24+XG4gICAgICAgICAgICBgO1xuICB9XG5cbiAgZ2V0V2Vla2RheXNNYXJrdXAoKSB7XG4gICAgY29uc3Qgd2Vla2RheXMgPSBnZXRGaWVsZCgnd2Vla2RheXMnKTtcbiAgICB0aGlzLnJlc3VsdCA9ICc8ZGl2IGNsYXNzPVwidGltZS1oZWFkZXJcIj5UaW1lPC9kaXY+JztcbiAgICB3ZWVrZGF5cy5mb3JFYWNoKCh3ZWVrZGF5KSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdCArPSBgPGRpdiBjbGFzcz0gXCJkYXlcIj4ke3dlZWtkYXl9PC9kaXY+IGA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cblxuICBnZXRUaW1lc2xvdHNNYXJrdXAoKSB7XG4gICAgY29uc3QgdGltZXNsb3RzID0gZ2V0RmllbGQoJ3RpbWVzbG90cycpO1xuICAgIHRoaXMucmVzdWx0ID0gJyc7XG4gICAgdGltZXNsb3RzLmZvckVhY2goKHRpbWVzbG90KSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdCArPSBgPGRpdiBjbGFzcz0gXCJ0aW1lXCI+JHt0aW1lc2xvdH08L2Rpdj5gO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGdldENhbGVuZGFyQm9keU1hcmt1cCgpIHtcbiAgICB0aGlzLmNoZWNrTW9kZSgpO1xuICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHRoaXMuZmlsdGVyRXZlbnQoKTtcbiAgICB0aGlzLnJlc3VsdCA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSArPSAxKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5maW5kKChldikgPT4gZXYuZGF0YS53ZWVrZGF5ID09PSBqICYmIGV2LmRhdGEudGltZXNsb3QgPT09IGkpO1xuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdCArPSBgPGRpdiBjbGFzcz1cImFjdGl2ZS1ldmVudFwiIHZhbHVlPVwiJHtldmVudC5kYXRhLnRpdGxlfVwiPiAke2V2ZW50LmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtYnV0dG9uXCIgaWQ9JyR7ZXZlbnQuaWR9JyBzdHlsZT0ke3RoaXMubW9kZVN0eWxlfT5YPC9idXR0b24+PC9kaXY+YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdCArPSAnPGRpdj48L2Rpdj4nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIHNldHVwUGFnZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBuZXdFdmVudEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZXZlbnQnKTtcbiAgICBjb25zdCBmaWx0ZXJQZW9wbGVTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFydGljaXBhbnRzLWZpbHRlcicpO1xuICAgIGNvbnN0IGRlbGV0ZUV2ZW50QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtYnV0dG9uJyk7XG4gICAgbmV3RXZlbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRGaWVsZCgnY29tcG9uZW50Rm9yUmVuZGVyTmFtZScsICdjcmVhdGVFdmVudCcpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGV0ZUV2ZW50QnV0dG9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgZGVsZXRlRXZlbnRCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kZWxldGVFdmVudCk7XG4gICAgfVxuICAgIGZpbHRlclBlb3BsZVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgIHNldEZpZWxkKCdmaWx0ZXJTZWxlY3RlZElkJywgK2V2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBAVHJ5Q2F0Y2hEZWNvcmF0b3JcbiAgYXN5bmMgZGVsZXRlRXZlbnQoYnJvd3NlckV2ZW50KSB7XG4gICAgdGhpcy5ldmVudHMgPSBhd2FpdCBzZXJ2aWNlLmdldEV2ZW50c0RhdGEoJy9ldmVudHMvJyk7XG4gICAgY29uc3QgZGVsZXRlRXZlbnRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1tZXNzYWdlJyk7XG4gICAgY29uc3QgZGVsZXRlRXZlbnRUaXRsZU1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXRpdGxlJyk7XG4gICAgY29uc3QgZXZlbnRUaXRsZSA9IGJyb3dzZXJFdmVudC50YXJnZXQucGFyZW50Tm9kZS5hdHRyaWJ1dGVzLnZhbHVlLnZhbHVlO1xuICAgIGRlbGV0ZUV2ZW50VGl0bGVNZXNzYWdlLmlubmVySFRNTCA9IGV2ZW50VGl0bGU7XG4gICAgZGVsZXRlRXZlbnRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNvbnN0IGNhbmNlbERlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZGVsZXRlJyk7XG4gICAgY29uc3Qg0YFvbmZpcm1EZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlybS1kZWxldGUnKTtcbiAgICBjYW5jZWxEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkZWxldGVFdmVudE1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICDRgW9uZmlybURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHNlcnZpY2UuZGVsZXRlRXZlbnQoYGV2ZW50cy8ke2Jyb3dzZXJFdmVudC50YXJnZXQuYXR0cmlidXRlcy5pZC52YWx1ZX1gKTtcbiAgICAgIGRlbGV0ZUV2ZW50TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgc2V0RmllbGQoJ2NvbXBvbmVudEZvclJlbmRlck5hbWUnLCAnY2FsZW5kYXInKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGZpbHRlckV2ZW50KCkge1xuICAgIGNvbnN0IGV2ZW50cyA9IGF3YWl0IHNlcnZpY2UuZ2V0RXZlbnRzRGF0YSgnZXZlbnRzJyk7XG4gICAgY29uc3QgZmlsdGVyU2VsZWN0ZWRJZCA9IGdldEZpZWxkKCdmaWx0ZXJTZWxlY3RlZElkJyk7XG4gICAgaWYgKGZpbHRlclNlbGVjdGVkSWQgPT09IDApIHtcbiAgICAgIHJldHVybiBldmVudHM7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyZWRFdmVudHMgPSAoXG4gICAgICBldmVudHMuZmlsdGVyKChldikgPT4gZXYuZGF0YS5wYXJ0aWNpcGFudHNJZC5zb21lKChpZCkgPT4gaWQgPT09IGZpbHRlclNlbGVjdGVkSWQpKSk7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRFdmVudHM7XG4gIH1cblxuICBhc3luYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICA8cCBjbGFzcz1cInNlcnZlci1ub3RpZmljYXRpb25cIj5BIGNvbm5lY3Rpb24gd2FzIHN1Y2Nlc3NmdWxseSBlc3RhYmxpc2hlZCB3aXRoIHRoZSBzZXJ2ZXI8L3A+XG4gICAgPGRpdiBjbGFzcz0gXCJjYWxlbmRhci1jb21wb25lbnRcIiA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMT5DYWxlbmRhcjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5jcmVhdGVGaWx0ZXJTZWxlY3QoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlZWtkYXlzXCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5nZXRXZWVrZGF5c01hcmt1cCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmdldFRpbWVzbG90c01hcmt1cCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPSdldmVudHMtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgJHthd2FpdCB0aGlzLmdldENhbGVuZGFyQm9keU1hcmt1cCgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImRlbGV0ZS1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB3YW50IHRvIGRlbGV0ZSBcIjxzcGFuIGlkPVwiZGVsZXRlLXRpdGxlXCI+PC9zcGFuPlwiIGV2ZW50PzwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsLWRlbGV0ZVwiPk5vPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjb25maXJtLWRlbGV0ZVwiPlllczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IENhbGVuZGFyRXZlbnQgZnJvbSAnLi4vLi4vQ2FsZW5kYXJFdmVudCc7XG5pbXBvcnQgc2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlL1NlcnZpY2UnO1xuaW1wb3J0IHsgZ2V0RmllbGQsIHNldEZpZWxkIH0gZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IFRyeUNhdGNoRGVjb3JhdG9yIGZyb20gJy4uLy4uL3NlcnZpY2UvVHJ5Q2F0Y2hEZWNvcmF0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVFdmVudCB7XG4gIGNyZWF0ZVRvYXN0KCkge1xuICAgIHRoaXMucmVzdWx0ID0gYFxuICAgICAgICA8cCBjbGFzcz1cInRvYXN0XCI+RmFpbGVkIHRvIGNyZWF0ZSBhbiBldmVudC4gVGltZSBzbG90IGlzIGFscmVhZHkgYm9va2VkLjxidXR0b24gY2xhc3M9XCJ0b2FzdC1jbG9zZVwiPlg8L2J1dHRvbj48L3A+XG4gICAgICBgO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIGNyZWF0ZUlucHV0KCkge1xuICAgIHRoaXMucmVzdWx0ID0gYFxuICAgIDxsYWJlbCBmb3I9XCJldmVudC1uYW1lXCI+TmFtZSBvZiB0aGUgZXZlbnQ6PC9sYWJlbD5cbiAgICA8aW5wdXQgaWQ9XCJldmVudC1uYW1lXCIgdHlwZT1cInRleHRcIiBtYXhsZW5ndGg9XCI0MFwiID48YnI+XG4gICAgYDtcbiAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XG4gIH1cblxuICBjcmVhdGVQZW9wbGVTZWxlY3QoKSB7XG4gICAgY29uc3QgcGVvcGxlID0gZ2V0RmllbGQoJ3Blb3BsZScpO1xuICAgIHRoaXMub3B0aW9ucyA9ICcnO1xuICAgIHBlb3BsZS5mb3JFYWNoKChodW1hbikgPT4ge1xuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPScke2h1bWFuLmlkfSc+JHtodW1hbi5uYW1lfTwvb3B0aW9uPmA7XG4gICAgfSk7XG4gICAgcmV0dXJuIGBcbiAgICAgICAgPGxhYmVsIGZvcj1cInBhcnRpY2lwYW50c1wiPlBhcnRpY2lwYW50czo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkPVwicGFydGljaXBhbnRzXCIgbXVsdGlwbGU+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScwJ3NlbGVjdGVkPkFsbCBtZW1iZXJzPC9vcHRpb24+XG4gICAgICAgICAgICAke3RoaXMub3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+PGJyPmA7XG4gIH1cblxuICBjcmVhdGVXZWVrZGF5U2VsZWN0KCkge1xuICAgIGNvbnN0IHdlZWtkYXlzID0gZ2V0RmllbGQoJ3dlZWtkYXlzJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrZGF5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdGhpcy5vcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPSR7aX0+JHt3ZWVrZGF5c1tpXX08L29wdGlvbj5gO1xuICAgIH1cbiAgICByZXR1cm4gYFxuICAgICAgICA8bGFiZWwgZm9yPVwic2VsZWN0LWRheVwiPkRheTo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGlkID1cInNlbGVjdC1kYXlcIj5cbiAgICAgICAgJHt0aGlzLm9wdGlvbnN9XG4gICAgICAgIDwvc2VsZWN0Pjxicj5gO1xuICB9XG5cbiAgY3JlYXRlVGltZVNlbGVjdCgpIHtcbiAgICBjb25zdCB0aW1lc2xvdHMgPSBnZXRGaWVsZCgndGltZXNsb3RzJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lc2xvdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHRoaXMub3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0ke2l9PiR7dGltZXNsb3RzW2ldfTwvb3B0aW9uPmA7XG4gICAgfVxuICAgIHJldHVybiBgXG4gICAgICAgIDxsYWJlbCBmb3I9XCJzZWxlY3QtdGltZVwiPlRpbWU6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBpZD1cInNlbGVjdC10aW1lXCI+XG4gICAgICAgICR7dGhpcy5vcHRpb25zfVxuICAgICAgICA8L3NlbGVjdD48YnI+YDtcbiAgfVxuXG4gIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgdGhpcy5yZXN1bHQgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNyZWF0ZVwiPkNyZWF0ZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5gO1xuICAgIHJldHVybiB0aGlzLnJlc3VsdDtcbiAgfVxuXG4gIHNldHVwUGFnZUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBjbG9zZVRvYXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0LWNsb3NlJyk7XG4gICAgY29uc3QgY3JlYXRlRXZlbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlJyk7XG4gICAgY29uc3QgY2FuY2VsRXZlbnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsJyk7XG4gICAgY2xvc2VUb2FzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuaGlkZVRvYXN0KCkpO1xuICAgIGNyZWF0ZUV2ZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5zZXR0aW5nTmV3RXZlbnQoKTtcbiAgICB9KTtcbiAgICBjYW5jZWxFdmVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XG4gICAgfSk7XG4gIH1cblxuICBAVHJ5Q2F0Y2hEZWNvcmF0b3JcbiAgYXN5bmMgc2V0dGluZ05ld0V2ZW50KCkge1xuICAgIHRoaXMuZXZlbnRPYmogPSB7fTtcbiAgICBjb25zdCBldmVudFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50LW5hbWUnKS52YWx1ZTtcbiAgICBjb25zdCBldmVudFBhcnRpY2lwYW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXJ0aWNpcGFudHMnKS5jaGlsZHJlbjtcbiAgICBjb25zdCBldmVudFBhcnRpY2lwYW50SWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50UGFydGljaXBhbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZXZlbnRQYXJ0aWNpcGFudHNbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgZXZlbnRQYXJ0aWNpcGFudElkLnB1c2goK2V2ZW50UGFydGljaXBhbnRzW2ldLmF0dHJpYnV0ZXMudmFsdWUudmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50RGF5cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3QtZGF5JykuY2hpbGRyZW47XG4gICAgbGV0IGV2ZW50V2Vla2RheVZhbHVlID0gJyc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudERheXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudERheXNbaV0uc2VsZWN0ZWQpIHtcbiAgICAgICAgZXZlbnRXZWVrZGF5VmFsdWUgPSArZXZlbnREYXlzW2ldLmF0dHJpYnV0ZXMudmFsdWUudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGV2ZW50VGltZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0LXRpbWUnKS5jaGlsZHJlbjtcbiAgICBsZXQgZXZlbnRUaW1lVmFsdWUgPSAnJztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50VGltZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudFRpbWVzW2ldLnNlbGVjdGVkKSB7XG4gICAgICAgIGV2ZW50VGltZVZhbHVlID0gK2V2ZW50VGltZXNbaV0uYXR0cmlidXRlcy52YWx1ZS52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudHMgPSBhd2FpdCBzZXJ2aWNlLmdldEV2ZW50c0RhdGEoJy9ldmVudHMvJyk7XG4gICAgY29uc3QgZXZlbnQgPSAoXG4gICAgICBldmVudHMuZmluZCgoZSkgPT4gZS5kYXRhLndlZWtkYXkgPT09IGV2ZW50V2Vla2RheVZhbHVlICYmIGUuZGF0YS50aW1lc2xvdCA9PT0gZXZlbnRUaW1lVmFsdWUpXG4gICAgKTtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IHRvYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0Jyk7XG4gICAgICB0b2FzdC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH0gZWxzZSBpZiAoIWV2ZW50VGl0bGUpIHtcbiAgICAgIGNvbnN0IGV2ZW50VGl0bGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdldmVudC1uYW1lJyk7XG4gICAgICBldmVudFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdSZXF1aXJlZCBmaWVsZCcpO1xuICAgICAgZXZlbnRUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2VtcHR5LWZpZWxkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXZlbnRPYmogPSBuZXcgQ2FsZW5kYXJFdmVudChldmVudFRpdGxlLCBldmVudFRpbWVWYWx1ZSxcbiAgICAgICAgZXZlbnRXZWVrZGF5VmFsdWUsIGV2ZW50UGFydGljaXBhbnRJZCk7XG4gICAgICBhd2FpdCBzZXJ2aWNlLnNldEV2ZW50KCdldmVudHMnLCB0aGlzLmV2ZW50T2JqKTtcbiAgICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XG4gICAgfVxuICB9XG5cbiAgaGlkZVRvYXN0KCkge1xuICAgIHRoaXMudG9hc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9hc3QnKTtcbiAgICB0aGlzLnRvYXN0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gYFxuICAgIDxwIGNsYXNzPVwic2VydmVyLW5vdGlmaWNhdGlvblwiPkEgY29ubmVjdGlvbiB3YXMgc3VjY2Vzc2Z1bGx5IGVzdGFibGlzaGVkIHdpdGggdGhlIHNlcnZlcjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLWV2ZW50XCI+XG4gICAgICAgJHt0aGlzLmNyZWF0ZVRvYXN0KCl9XG4gICAgICA8Zm9ybT5cbiAgICAgICAgJHt0aGlzLmNyZWF0ZUlucHV0KCl9XG4gICAgICAgICR7dGhpcy5jcmVhdGVQZW9wbGVTZWxlY3QoKX1cbiAgICAgICAgJHt0aGlzLmNyZWF0ZVdlZWtkYXlTZWxlY3QoKX1cbiAgICAgICAgJHt0aGlzLmNyZWF0ZVRpbWVTZWxlY3QoKX1cbiAgICAgICAgJHt0aGlzLmNyZWF0ZUJ1dHRvbnMoKX1cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0RmllbGQsIHNldEZpZWxkIH0gZnJvbSAnLi4vLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NhbGVuZGFyL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5XaW5kb3cge1xuICBjcmVhdGVMb2dpbldpbmRvdygpIHtcbiAgICBjb25zdCBwZW9wbGUgPSBnZXRGaWVsZCgncGVvcGxlJyk7XG4gICAgdGhpcy5vcHRpb25zID0gJyc7XG4gICAgcGVvcGxlLmZvckVhY2goKGh1bWFuKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aHVtYW4uaWR9Jz4ke2h1bWFuLm5hbWV9PC9vcHRpb24+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgXG4gICAgPGRpdiBpZD1cImxvZ2luLXdpbmRvd1wiPlxuICAgIDxoMT5QbGVhc2UgYXV0aG9yaXNlPC9oMT5cbiAgICA8c2VsZWN0IGlkPVwibG9naW4tc2VsZWN0XCI+JHt0aGlzLm9wdGlvbnN9PC9zZWxlY3Q+XG4gICAgPGRpdj48YnV0dG9uIGlkPVwibG9naW4tYnV0dG9uXCI+Q29uZmlybTwvYnV0dG9uPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzZXR1cFBhZ2VMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tYnV0dG9uJyk7XG4gICAgbG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvZ2luRXZlbnQpO1xuICB9XG5cbiAgbG9naW5FdmVudCgpIHtcbiAgICB0aGlzLnBlb3BsZSA9IGdldEZpZWxkKCdwZW9wbGUnKTtcbiAgICBjb25zdCBzZWxlY3RlZExvZ2luSHVtYW5JZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1zZWxlY3QnKS52YWx1ZTtcbiAgICBpZiAoIXRoaXMucGVvcGxlLmZpbmQoKGh1bWFuKSA9PiBodW1hbi5pZCA9PT0gK3NlbGVjdGVkTG9naW5IdW1hbklkICYmIGh1bWFuLmFkbWluKSkge1xuICAgICAgQ2FsZW5kYXIuYWRtaW5Nb2RlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIENhbGVuZGFyLmFkbWluTW9kZSA9IHRydWU7XG4gICAgfVxuICAgIHNldEZpZWxkKCdjb21wb25lbnRGb3JSZW5kZXJOYW1lJywgJ2NhbGVuZGFyJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAke3RoaXMuY3JlYXRlTG9naW5XaW5kb3coKX1cbmA7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluaXRTdG9yZSB9IGZyb20gJy4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5pbml0U3RvcmUoKTtcbiIsImltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkbWluIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGFkbWluID0gdHJ1ZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFkbWluID0gYWRtaW47XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIge1xuICAgIHN0YXRpYyBjb3VudGVySWQgPSAxXG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICBVc2VyLmNvdW50ZXJJZCArPSAxO1xuICAgICAgdGhpcy5pZCA9IFVzZXIuY291bnRlcklkO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG59XG4iLCJjbGFzcyBOb3RpZmljYXRpb24ge1xuICBhc3luYyBzdWNjZXNzZnVsUmVzcG9uc2VOb3RpZmljYXRpb24oKSB7XG4gICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2ZXItbm90aWZpY2F0aW9uJyk7XG4gICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBhc3luYyBlcnJvclJlc3BvbnNlTm90aWZpY2F0aW9uKGVycikge1xuICAgIHRoaXMucmVzcG9uc2VOb3RpZmljYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmVyLW5vdGlmaWNhdGlvbicpO1xuICAgIHRoaXMucmVzcG9uc2VOb3RpZmljYXRpb24uY2xhc3NMaXN0LmFkZCgnZXJyJyk7XG4gICAgdGhpcy5yZXNwb25zZU5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSBlcnIubWVzc2FnZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVzcG9uc2VOb3RpZmljYXRpb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0sIDIwMDApO1xuICB9XG59XG5cbmNvbnN0IG5vdGlmaWNhdGlvbiA9IG5ldyBOb3RpZmljYXRpb24oKTtcbmV4cG9ydCBkZWZhdWx0IG5vdGlmaWNhdGlvbjtcbiIsImNsYXNzIFNlcnZpY2Uge1xuICAgIGFwaUJhc2UgPSAnaHR0cDovLzE1OC4xMDEuMTY2Ljc0OjgwODAvYXBpL2RhdGEvYW5waWxvdl9hLydcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgaWYgKFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIFNlcnZpY2UuaW5zdGFuY2U7XG4gICAgICB9XG4gICAgICBTZXJ2aWNlLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBhc3luYyBnZXRFdmVudHNEYXRhKHVybCkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5hcGlCYXNlfSR7dXJsfWApO1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggJHt1cmx9YFxuICAgICAgICAgICAgKyBgLCByZWNlaXZlZCAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBldmVudHNEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgIHJldHVybiBldmVudHNEYXRhID09PSBudWxsID8gW10gOiBldmVudHNEYXRhLm1hcCgoeyBpZCwgZGF0YSB9KSA9PiAoe1xuICAgICAgICBpZCwgZGF0YTogSlNPTi5wYXJzZShkYXRhKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWxldGVFdmVudCh1cmwpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3RoaXMuYXBpQmFzZX0ke3VybH1gLCB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB9KTtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZldGNoICR7dXJsfWBcbiAgICAgICAgICAgKyBgLCByZWNlaXZlZCAke3Jlcy5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0RXZlbnQodXJsLCBib2R5KSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmFwaUJhc2V9JHt1cmx9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiBKU09OLnN0cmluZ2lmeShib2R5KSB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgZmV0Y2ggJHt1cmx9YFxuICAgICAgICAgICAgICAgICAgICsgYCwgcmVjZWl2ZWQgJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfVxuICAgIH1cbn1cblxuY29uc3Qgc2VydmljZSA9IG5ldyBTZXJ2aWNlKCk7XG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlO1xuIiwiaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyeUNhdGNoRGVjb3JhdG9yKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcblxuICBkZXNjcmlwdG9yLnZhbHVlID0gYXN5bmMgZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICBub3RpZmljYXRpb24uc3VjY2Vzc2Z1bFJlc3BvbnNlTm90aWZpY2F0aW9uKCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbi5lcnJvclJlc3BvbnNlTm90aWZpY2F0aW9uKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBkZXNjcmlwdG9yO1xufVxuIiwiaW1wb3J0IGV2ZW50RW1pdHRlciBmcm9tICcuLi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEFkbWluIGZyb20gJy4uL3BhcnRpY2lwYW50cy9BZG1pbic7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9wYXJ0aWNpcGFudHMvVXNlcic7XG5cbmNvbnN0IHBhcnRpY2lwYW50cyA9IFtcbiAgbmV3IEFkbWluKCdBbGV4JyksXG4gIG5ldyBVc2VyKCdBbmFzdGFzaWEnKSxcbiAgbmV3IFVzZXIoJ0RtaXRyaXknKSxcbl07XG5cbmxldCBzdG9yZSA9IHt9O1xuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgc3RvcmUgPSB7XG4gICAgd2Vla2RheXM6IFtcbiAgICAgICdNb25kYXknLFxuICAgICAgJ1R1ZXNkYXknLFxuICAgICAgJ1dlZG5lc2RheScsXG4gICAgICAnVGh1cnNkYXknLFxuICAgICAgJ0ZyaWRheScsXG4gICAgXSxcbiAgICB0aW1lc2xvdHM6IFtcbiAgICAgICcxMDowMCcsXG4gICAgICAnMTE6MDAnLFxuICAgICAgJzEyOjAwJyxcbiAgICAgICcxMzowMCcsXG4gICAgICAnMTQ6MDAnLFxuICAgICAgJzE1OjAwJyxcbiAgICAgICcxNjowMCcsXG4gICAgICAnMTc6MDAnLFxuICAgICAgJzE4OjAwJyxcbiAgICBdLFxuICAgIHBlb3BsZTogWy4uLnBhcnRpY2lwYW50c10sXG4gICAgY29tcG9uZW50Rm9yUmVuZGVyTmFtZTogJ2xvZ2luV2luZG93JyxcbiAgICBmaWx0ZXJTZWxlY3RlZElkOiAwLFxuXG4gIH07XG4gIGV2ZW50RW1pdHRlci5lbWl0KCdzdG9yZUNoYW5nZWQnKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGaWVsZCA9IChmaWVsZG5hbWUpID0+IHN0b3JlW2ZpZWxkbmFtZV07XG5cbmV4cG9ydCBjb25zdCBzZXRGaWVsZCA9IChmaWVsZG5hbWUsIGZpZWxkVmFsdWUpID0+IHtcbiAgc3RvcmVbZmllbGRuYW1lXSA9IGZpZWxkVmFsdWU7XG4gIGV2ZW50RW1pdHRlci5lbWl0KCdzdG9yZUNoYW5nZWQnKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jYWxlbmRhci1jb21wb25lbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEyMDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaGVhZGVyIGgxIHtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLmhlYWRlciAuZmlsdGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmZpbHRlciBidXR0b24sIC5maWx0ZXIgc2VsZWN0IHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuLmZpbHRlciBidXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FsZW5kYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ3IHcgdyB3IHcgd1xcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCIgXFxcInQgZSBlIGUgZSBlXFxcIiBcXFwidCBlIGUgZSBlIGVcXFwiIFxcXCJ0IGUgZSBlIGUgZVxcXCI7XFxuICB3aWR0aDogMTIwMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi53ZWVrZGF5cyB7XFxuICBncmlkLWFyZWE6IHc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDQsIDEwNywgMTAzLCAwLjgxNSk7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ud2Vla2RheXMgLmRheSxcXG4ud2Vla2RheXMgLnRpbWUtaGVhZGVyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGltZS1jb2x1bW4ge1xcbiAgZ3JpZC1hcmVhOiB0O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NiwgNzgsIDc1LCAwLjEzKTtcXG59XFxuLnRpbWUtY29sdW1uIC50aW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4jZXZlbnRzLWJvZHkge1xcbiAgZ3JpZC1hcmVhOiBlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LCAxZnIpO1xcbn1cXG4jZXZlbnRzLWJvZHkgZGl2IHtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG4jZXZlbnRzLWJvZHkgLmFjdGl2ZS1ldmVudCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgMTM5LCAxNiwgMC43OTUpO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB0b3A6IDE1cHg7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogI2Q2MGUwZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlLWV2ZW50OmhvdmVyIC5kZWxldGUtYnV0dG9uIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi5kZWxldGUtYnV0dG9uOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMTAwLCAxMDAsIDAuNjY0KTtcXG59XFxuXFxuI2RlbGV0ZS1tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44OSk7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXG4gIG1hcmdpbi10b3A6IC0xMDBweDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiNkZWxldGUtbWVzc2FnZSBwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbiNkZWxldGUtbWVzc2FnZSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1JTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4jZGVsZXRlLW1lc3NhZ2UgYnV0dG9uIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcmVhdGUtZXZlbnQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1NiwgMTU2LCAxMjYsIDAuNCk7XFxufVxcblxcbmxhYmVsIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDZweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB3aWR0aDogMzAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDMwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3BhcnRpY2lwYW50cyB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2FzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zMjkpO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4udG9hc3QgYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgY29sb3I6IHJlZDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjgxO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVtcHR5LWZpZWxkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcXG59XFxuXFxuI2xvZ2luLXdpbmRvdyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW4tbGVmdDogLTIwMHB4O1xcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODE1KTtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuI2xvZ2luLXdpbmRvdyBoMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNsb2dpbi13aW5kb3cgI2xvZ2luLXNlbGVjdCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNsb2dpbi13aW5kb3cgZGl2IHtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcbiNsb2dpbi13aW5kb3cgZGl2ICNsb2dpbi1idXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTUwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaG9uZXlkZXc7XFxufVxcblxcbi5zZXJ2ZXItbm90aWZpY2F0aW9uIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGxpbmUtaGVpZ2h0OiAzcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjU1LCAwLCAwLjU2Mik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjV2dztcXG59XFxuXFxuLmVyciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zMjkpO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbXBvbmVudHMvY2FsZW5kYXIvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZUV2ZW50L2luZGV4LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jb21wb25lbnRzL2xvZ2luV2luZG93L2luZGV4LnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3Nc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Q3BLQztFQUNELGVBQUE7QURzS0E7O0FDbEtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBRHFLRjtBQ3BLRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBRHNLSjs7QUNuS0E7RUFDRSxxQkFBQTtBRHNLRjs7QUVoUEE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUZtUEo7QUVsUEk7RUFDRSxrQkFBQTtBRm9QTjtBRWxQSTtFQUNGLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FGb1BGO0FFbFBJO0VBQ0UsYUFBQTtBRm9QTjtBRW5QSTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FGcVBOOztBQWhSQTtFQUNFLDBCQUFBO0FBbVJGOztBQWhSQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFtUkY7O0FBaFJBO0VBQ0Usd0NBQUE7RUFDQSxtQkFBQTtBQW1SRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2FsZW5kYXItY29tcG9uZW50IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0Jywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiAxMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGgxIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZpbHRlciB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXIge1xcclxcbiAgJWJ1dHRvbi1zaXplcyB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgfVxcclxcbiAgc2VsZWN0IHtcXHJcXG4gICAgQGV4dGVuZCAlYnV0dG9uLXNpemVzO1xcclxcbiAgfVxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBAZXh0ZW5kICVidXR0b24tc2l6ZXM7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jYWxlbmRhciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgJ3cgdyB3IHcgdyB3J1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJ1xcclxcbiAgICAndCBlIGUgZSBlIGUnXFxyXFxuICAgICd0IGUgZSBlIGUgZSdcXHJcXG4gICAgJ3QgZSBlIGUgZSBlJztcXHJcXG4gIHdpZHRoOiAxMjAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlZWtkYXlzIHtcXHJcXG4gIGdyaWQtYXJlYTogdztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODE1KTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAuZGF5LFxcclxcbiAgLnRpbWUtaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnRpbWUtY29sdW1uIHtcXHJcXG4gIGdyaWQtYXJlYTogdDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzYsIDc4LCA3NSwgMC4xMyk7XFxyXFxuICAudGltZSB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jZXZlbnRzLWJvZHkge1xcclxcbiAgZ3JpZC1hcmVhOiBlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg5LCAxZnIpO1xcclxcbiAgZGl2IHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWN0aXZlLWV2ZW50IHtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDEzOSwgMTYsIDAuNzk1KTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgdG9wOiAxNXB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6IHJnYigyMTQsIDE0LCAxNCk7XFxyXFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZS1ldmVudDpob3ZlciB7XFxyXFxuICAuZGVsZXRlLWJ1dHRvbiB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB9XFxyXFxufVxcclxcbi5kZWxldGUtYnV0dG9uOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMTAwLCAxMDAsIDAuNjY0KTtcXHJcXG59XFxyXFxuI2RlbGV0ZS1tZXNzYWdlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA0LCAxMDcsIDEwMywgMC44OSk7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0yMDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0xMDBweDtcXHJcXG4gIHotaW5kZXg6IDEwMDAwO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICB9XFxyXFxuICBkaXYge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogNSU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCAnLi9jb21wb25lbnRzL2NhbGVuZGFyL2luZGV4LnNjc3MnO1xcclxcbkBpbXBvcnQgJy4vY29tcG9uZW50cy9jcmVhdGVFdmVudC9pbmRleC5zY3NzJztcXHJcXG5AaW1wb3J0ICcuL2NvbXBvbmVudHMvbG9naW5XaW5kb3cvaW5kZXguc2Nzcyc7XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBob25leWRldztcXHJcXG59XFxyXFxuXFxyXFxuLnNlcnZlci1ub3RpZmljYXRpb24ge1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDNweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyNTUsIDAsIDAuNTYyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNTUsIDAsIDAsIDAuMzI5KTtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVwiLFwiLmNyZWF0ZS1ldmVudCB7XFxyXFxuICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCcsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBoZWlnaHQ6IDM1MHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcclxcbn1cXHJcXG5mb3JtIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU2LCAxNTYsIDEyNiwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIG1hcmdpbjogNnB4O1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jcGFydGljaXBhbnRzIHtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuLmJ1dHRvbnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gYnV0dG9uIHtcXHJcXG5jdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbn1cXHJcXG5cXHJcXG4udG9hc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzI5KTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY4MTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcbi5lbXB0eS1maWVsZCB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxyXFxufVxcclxcblwiLFwiI2xvZ2luLXdpbmRvdyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTIwMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTAwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNCwgMTA3LCAxMDMsIDAuODE1KTtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgaDEge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAjbG9naW4tc2VsZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICBkaXYge1xcclxcbiAgICAgIHBhZGRpbmc6IDQwcHg7XFxyXFxuICAgICNsb2dpbi1idXR0b24ge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==