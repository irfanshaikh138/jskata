const add  = (a, b) => {
    if(!b){
        return a;
    }
    else{
        return a+b;
    }
};






const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

module.exports = { "add": add, "sub":sub, "multiply":multiply, "divide":divide };