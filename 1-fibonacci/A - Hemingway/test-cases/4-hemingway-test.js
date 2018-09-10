
// const assert = require('tressa');

const cases = require('./test-cases.js');

const hemingway_fib = require("../4- Hemingway_trace.js");
const util = require("util")

for (let cond of cases) {
    // console.log( hemingway_fib(3, false))
    assert(compare_arrays(hemingway_fib(cond.input,false), cond.expected), util.inspect({
      rienavoir : "rien",
      trace : hemingway_fib(cond.input, true),
      expected : cond.expected,
      message : cond.message
    }));       
};



function compare_arrays(_a, _b) {
    let result = true; 
    // console.log("_a : " + _a)
    // console.log("_b : " + _b)
    if (_a.length !== _b.length) {
      return !result;
    }
    for (let i = 0; i < _a.length; i++) {
      if (_a[i] !== _b[i]) {
        return !result;
      };
    };
    return result;
  };
  
  function assert(assertion, message) {
    if (assertion) {
      
        console.log("Assertion Passed : " + message);
    };
  };


