


function fibonacci(size, trace)  {
        
        let first = 0;
        let second = 1;
        let next;
        let count = 2;
        let ret_val = [first, second];    

        if (trace) {
            result = {}
            result.size = size;
            result.isSizeOK = true;
        };
		if (size < 2) {
            if (trace) {
                result.isSizeOk = false;
            }
            return "the request was made but it was not good"; 
        }
		
        while (while_condition(count,size)) {
            next = first + second; 
            first = second; 
            second = next; 
            ret_val.push(next);
			count = count +1;
        }   
        if (trace) {
            result.result = ret_val;
        } else {
            result = ret_val;
        }
        return result;
}

// console.log(fibonacci(3,true))
module.exports = fibonacci;

function while_condition(_count, _argssize){
		let step_1 = _count < _argssize;
		let _condition = step_1;
		return  _condition
}

