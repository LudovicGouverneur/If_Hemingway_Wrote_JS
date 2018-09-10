let a = 0;
let b = 0;

let closure = {
    hello : function(c,d) {
    c = 1;
    d = 2;
    return c,d
    }
} 

a,b = closure.hello(a,b);
console.log(a,b)
