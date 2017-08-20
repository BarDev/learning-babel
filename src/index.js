console.log("Starting in index.js")

/*
    ES6/ES2015 - let
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
    Compatiblity:
        - Chorme:             yes
        - IE11:               yes
        - Babel-Polyfill:     no
        - Babel-runtime:      no
        - Babel-Transpile:    yes
******************************************** */
// let alphabet = "abcdefgh";
// console.log(alphabet);

/*
    ES6/ES2015 - String.prototype.startsWith 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
    Compatiblity:
        - Chorme:             yes
        - IE11:               no
        - Babel-Polyfill:     yes
        - Babel-runtime:      no        
        - Babel-Transpile:    no
******************************************** */
// let letters = "abcdefgh";
// let doesStartWithA = letters.startsWith("a")
// console.log(doesStartWithA)

/*
    ES6/ES2015 - Object.assign 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    Compatiblity:
        - Chorme:             yes
        - IE11:               no
        - Babel-polyfill:     yes
        - Babel-runtime:      yes        
        - Babel-Transpile:    no
******************************************** */
// let obj = { a: "mike" };
// let copy = Object.assign({}, obj);
// console.log(copy); // { a: "mike" }

/*
    ES7/ES2016 - Array.prototype.includes
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    Compatiblity:
        - Chorme:             yes
        - IE11:               nols
        - Babel-polyfill:     yes
        - Babel-runtime:      no        
        - Babel-Transpile:    no
******************************************** */
// var a = [1, 2, 3];
// var resultIncludes = a.includes(2); 
// console.log(resultIncludes)

/*
    ES6/ES2015 - Math.log2
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2
    Compatiblity:
        - Chorme:             
        - IE11:               
        - Babel-Polyfill:     
        - Babel-runtime:              
        - Babel-Transpile:    
******************************************** */
// let logNum = Math.log2(33);
// console.log(logNum)

/*
    ES6/ES2015 - Arrow Functions 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    Compatiblity:
        - Chorme:             yes
        - IE11:               no
        - Babel-Polyfill:     no
        - Babel-runtime:      no        
        - Babel-Transpile:    yes
******************************************** */
// let writeLine = (a) => console.log(a)
// writeLine("hello ");

/*  
    Proposal/stage-2 - String.prototype.padStart
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
    Compatiblity:
        - Chorme >= 57:       yes
        - IE11:               no
        - Babel-Polyfill:     yes
        - Babel-runtime:      yes        
        - Babel-Transpile:    no
******************************************** */
// let stringValue = "BarDev"
// let stringWithPad = stringValue.padStart(10)
// console.log(stringWithPad);

/*   
    Proposal/stage-2 - String.prototype.trimEnd
    Compatiblity:
        - Chorme:             no
        - IE11:               no
        - Babel-Polyfill:     yes
        - Babel-runtime:      yes
        - Babel-Transpile:    no
******************************************** */
// let stringWithSpaces = "Wow!   "
// let stringWithNoSpaces = stringWithSpaces.trimEnd();
// console.log(stringWithNoSpaces);


/* 
    ES6/ES2015 - Class 
    Compatiblity:
        - Chorme:           yes
        - IE11:             no
        - Babel-Polyfill:   no
        - Babel-runtime:    no
        - Babel-Transpile:  yes
******************************************** */
// class Something  {
//     constructor (){
//         this.title = "Welcome";
//         this.name = "Mike";
//     }

//     render() {
//         //Simulate an user action
//         console.log(this.title)
//     }
// }
// var something = new Something();
// something.render();

/*  
    Proposal/stage-3 - Class Fields
    Compatiblity:
        - Chorme:           yes
        - IE11:             no
        - Babel-Polyfill:   no
        - Babel-runtime:    no
        - Babel-Transpile:  yes
******************************************** */
// class Something  {
//     title = "Welcome";
//     name = "Mike";
 
//     render() {
//         //Simulate an user action
//         console.log(this.title)
//     }
// }
// var something = new Something();
// something.render();
