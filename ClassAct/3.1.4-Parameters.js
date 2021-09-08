// Named Parameters
// write a function that takes two named parameters:

// print each named parameter,
// then return the parameters added together
function functionWithtwoparams(x=, y=1, ...z)) {
    console.log(x);
    console.log(y);
    console.log("this is the rest operator", z);
    return x + y;
}
// invoke the function and pass in two numbers
(5, 8)
// invoke the function and pass in more than two numbers
(1,2,3,4);
// invoke the function and pass in only one number
(9)
// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers