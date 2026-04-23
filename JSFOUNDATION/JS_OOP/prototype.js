// let computer = {
//     cpu: "i7",
// }
// let lenovo = {
//     screen: "HD",
//     __proto__: computer
// }
// console.log("lenovo", lenovo.__proto__)
// console.log("lenovo cpu", lenovo.cpu)
// console.log("lenovo screen", lenovo.screen)
// console.log("lenovo", computer.__proto__)
// console.log(lenovo)

// “If a property is not found in an object, JavaScript looks for it in its prototype chain.”
// “[Object: null prototype] {} means an empty base object whose parent is null (end of prototype chain).”


// let genericCar = {tyres: 4}

// let tesla = {driver: "AI"}

// Object.setPrototypeOf(tesla, genericCar);
// console.log(tesla.tyres) // 4
// console.log(tesla.driver) // AI
// console.log(tesla.__proto__) // {tyres: 4}
// console.log(tesla.__proto__.__proto__) // null
// console.log(`tesla`, Object.getPrototypeOf(tesla)) // {tyres: 4}



// let genericCar = { tyres: 4 }

// let tesla = { driver: "AI" }

// Object.setPrototypeOf(tesla, genericCar);

// console.log(tesla.hasOwnProperty("driver")); // true
// console.log(tesla.hasOwnProperty("tyres"));  // false