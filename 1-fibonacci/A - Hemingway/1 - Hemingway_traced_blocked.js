const args = {
	size : 6,
}

const expected = [0, 1, 1, 2, 3, 5];


let actual;
{// = fibonacci(size)
    let ret_val = [];
    fibonacci_frame : {
        let first = 0;
        let second = 1;
        let next;
        let count = 2;
        let result = [first, second];    
    
        
        if (args.size < 2) {
            ret_val = "the request was made but it was not good"; 
            break fibonacci_frame            
        }

        let condition;
        {// = count++ < args.size
            let step_1 = count < args.size;
            count = count + 1;
            condition = step_1;
        }
               
        while (condition) {
            next = first + second; 
            first = second; 
            second = next; 
            result.push(next);
            {// = count++ < args.size
                let step_1 = count < args.size;
                count = count+1;
                condition = step_1;
            }
        }        
        ret_val =  result;
        break fibonacci_frame;
    } 	
    actual = ret_val;
}

console.log("Actual value : " + actual)
console.log("Expected value is : " + expected)
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