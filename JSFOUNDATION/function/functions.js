// 2. Create a function named 'orderTea' that takes one
// parameter, `teaType'. Inside this function, create
// another function named `confirmOrder' that returns a
// message like '"Order confirmed for chai".
// Call `confirmOrder' from within 'orderTea' and return the
// result

// function orderTea(teaType){
//     function confirmOrder(){
//         return `Order confirmed for ${teaType}`;
// }
//     return confirmOrder();
// }
// let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation)



// function test(a,b){
//     console.log(a+b);
// }
// let result = test(2,3);
// console.log(result)


// function makeTea(typeOfTea) {
//     return `maketea: ${typeOfTea}`;
// }
// function processTeaOrder(teaFunction) {
//     return teaFunction("earl grey");
// }
// let order = processTeaOrder(makeTea);
// console.log (order);

// function sayHello(name){
//     return "hello, " + name;
// }
// function greet(callback, name){
//     return callback(name);
// }
// let greeting = greet(sayHello, "javascript")
// console.log(greeting)



// function createTeaMaker (name) {
//     return function (teaType) {
//         return `Making ${teaType} for ${name}`;
//     };
// }
// let teaMaker = createTeaMaker("hitesh");
// let result = teaMaker("green tea");
// console.log(result);


// function test() {
//     console.log("Hi");
// }

// let a = test;
// a();  Output: Hi
