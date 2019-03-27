!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";(function(e,n){var o,i=r(2);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var u=Object(i.a)(o);t.a=u}).call(this,r(4),r(5)(e))},function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(0),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function u(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,r){var o;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(c)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var a=e,s=t,f=[],d=f,p=!1;function l(){d===f&&(d=f.slice())}function b(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return l(),d.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,l();var r=d.indexOf(e);d.splice(r,1)}}}function y(e){if(!u(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=a(s,e)}finally{p=!1}for(var t=f=d,r=0;r<t.length;r++){(0,t[r])()}return e}return y({type:i.INIT}),(o={dispatch:y,subscribe:h,getState:b,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");a=e,y({type:i.REPLACE})}})[n.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function r(){e.next&&e.next(b())}return r(),{unsubscribe:t(r)}}})[n.a]=function(){return this},e},o}},function(e,t,r){"use strict";function n(e){var t,r=e.Symbol;return"function"==typeof r?r.observable?t=r.observable:(t=r("observable"),r.observable=t):t="@@observable",t}r.d(t,"a",function(){return n})},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var redux__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1);const INPUT_ADDED="INPUT_ADDED",EVALUATION_STARTED="EVALUATION_STARTED",EVALUATION_COMPLETED="EVALUATION_COMPLETED";function inputAdded(e){return{type:INPUT_ADDED,payload:e}}function evaluationStarted(){return{type:EVALUATION_STARTED,payload:null}}function evaluationCompleted(){return{type:EVALUATION_COMPLETED,payload:null}}const initialState={inputs:[],expressions:[],evaluated:[]};function calculatorReducer(e=initialState,t){switch(t.type){case INPUT_ADDED:return{...e,inputs:[...e.inputs.concat(t.payload)]};case EVALUATION_STARTED:return{...e,expressions:[...e.expressions.push([...e.inputs])]};case EVALUATION_COMPLETED:return{...e};default:return e}}function evaluate(input){const expression=input.join(""),answer=eval(expression);return answer}const store=Object(redux__WEBPACK_IMPORTED_MODULE_0__.a)(calculatorReducer),unsubscribe=store.subscribe(()=>console.log(store.getState()));store.dispatch(inputAdded("1")),store.dispatch(inputAdded("2")),store.dispatch(inputAdded("*")),store.dispatch(inputAdded("1")),store.dispatch(inputAdded("+")),store.dispatch(inputAdded("8")),store.dispatch(evaluationStarted()),store.dispatch(evaluationCompleted())},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]);