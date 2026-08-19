// function Car(make, mode){
//     this.make = make;
//     this.mode = mode;
// }
// let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.make); // Output: Toyota
// console.log(myCar.mode); // Output: Corolla
// console.log(myCar instanceof Car); // Output: true
// console.log(myCar instanceof Object); // Output: true
// console.log(myCar.__proto__ === Car.prototype); // Output: true
// console.log(Car.prototype.constructor === Car); // Output: true
// console.log(myCar)

// NORMAL FUNCTION THIS IS USING CLOSURE PROPERTY TO RETURN A FUNCTION INSIDE A FUNCTION 
function Tea(type){
       function any(){
        return `this is a cup of ${type} tea.`;
    }
    return any;
}
let myTea = Tea("lemon")
console.log(myTea())


// function Tea(type){
//     this.type = type;
//     this.describe = function(){
//         return `this is a cup of ${this.type} tea.`;
//     }
// }
// let  myTea = new Tea("lemon");
// console.log(myTea.describe())



function Animal(species){ 
    this.species = species;
     
}
Animal.prototype.sound = function(){
    return `The ${this.species} makes a sound.`;
}
let dog = new Animal("dog");
console.log(dog.sound()); // Output: The dog makes a sound.
let cat = new Animal("cat");
console.log(cat.sound()); // Output: The cat makes a sound.