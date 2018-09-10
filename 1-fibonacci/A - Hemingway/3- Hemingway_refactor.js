


const expected = [0, 1, 1, 2, 3];

let actual;

function fibonacci(size)  {
        
        let first = 0;
        let second = 1;
        let next;
        let count = 2;
        let result = [first, second];    
		let condition = false;

		if (size < 2) {
            return "the request was made but it was not good"; 
        }
		
        while (while_condition(count,size)) {
            next = first + second; 
            first = second; 
            second = next; 
            result.push(next);
			count = count +1;
        }        
        return result;
}


module.exports = fibonacci

function while_condition(_count, _argssize){
		let step_1 = _count < _argssize;
		let _condition = step_1;
		return  _condition
}

