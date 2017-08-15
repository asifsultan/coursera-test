//** Prototypal inheritance
// var parent = {
//     value: "parentValue",
//     obj: {
//         objValue: "parentobjValue"
//     },
//     walk :function(){
//         console.log("walking!");
//     }
// };

// var child = Object.create(parent);
// console.log("** Child - child.value: ", child.value);
// console.log("** Child - child.obj.objValue: ", child.obj.objValue);
// console.log("Parent - parent.value: ", parent.value);
// console.log("Parent - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent : ", parent);
// console.log("child : ", child); 

// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("Changed : child.value = 'child.value'");
// console.log("Changed : child.obj.objValue = 'childObjValue'");
// console.log("Child - child.value: ", child.value);
// console.log("Child - child.obj.objValue: ", child.obj.objValue);
// console.log("Parent - parent.value: ", parent.value);
// console.log("Parent - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent : ", parent);
// console.log("child : ", child); 

// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);

// var grandChild = Object.create(child);
// console.log("GrandChild: ", grandChild);
// grandChild.walk();

function Car(make){
    this.make = make;
    console.log("'this' is ", this);

}
var myCar = new Car("Honda");
console.log("myCar: ", myCar);

//Not being used as fuction constructor
Car("Honda");