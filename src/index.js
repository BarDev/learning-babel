console.log("Starting in index.js")

// Polyfill code from - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith#Polyfill
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position){
      return this.substr(position || 0, searchString.length) === searchString;
  };
}

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
let letters = "abcdefgh";
let doesStartWithA = letters.startsWith("a")
console.log(doesStartWithA)