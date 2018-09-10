
const args = {
	size : 5,
}

const expected = [0, 1, 1, 2, 3];

const closure = {
	while_condition : function(_count, _argssize){ // give the value of the condition and increment count in "global scope"
		let step_1 = _count < _argssize;
		let _condition = step_1;
		return  _condition
	},
}


let actual;

{// = fibonacci(size)
    let ret_val = [];
    fibonacci_frame : {
        let first = 0;
        let second = 1;
        let next;
        let count = 2;
        let result = [first, second];    
		let condition = false;

	
		if (args.size < 2) {
            ret_val = "the request was made but it was not good"; 
            break fibonacci_frame            
        }
		
		condition = closure.while_condition(count,args.size) 
		count = count + 1 ;

        while (condition) {
            next = first + second; 
            first = second; 
            second = next; 
            result.push(next);
			condition = closure.while_condition(count,args.size) 
			count = count +1;
        }        
        ret_val =  result;
        break fibonacci_frame;
    } 	
    actual = ret_val;
}
console.log(actual)
// console.log(ret_str)
assert(compare_arrays(actual,expected), "you are the best");


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
    } else {
        console.log("Assertion failed");
    };
}