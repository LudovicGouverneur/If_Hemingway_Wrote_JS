
// const assert = require('tressa');

const cases = require('./test-cases.js');

const hemingway_fib = require("../3- Hemingway_refactor.js");

for (let cond of cases) {
   
    assert(compare_arrays(hemingway_fib(cond.input), cond.expected), cond.message);
        
};



function compare_arrays(_a, _b) {
    let result = true; 
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


