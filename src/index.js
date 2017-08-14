console.log("Starting in index.js")


//Object.assign -- ES6/ES2015 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//Not work: IE11
let obj = { a: "mike" };
let copy = Object.assign({}, obj);
console.log(copy); // { a: "mike" }