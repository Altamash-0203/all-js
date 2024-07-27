//var 
var a = 10
function f() {
    var b = 20
    console.log(a, b)
}
f();
console.log(a);


var a = 10

// User can re-declare
// variable using var
var a = 8

// User can update var variable
a = 7 
console.log(a);


//-----------------
//const
const a = 10;
function f() {
    a = 9  // cant access or modify after delcration
    console.log(a)
}
f();

//----------------------------
//let
let x=20
let x=30  //  cant declare again
//its allowd 
x=40

















//local variable

function x() {
    let e = 30;
    console.log(e)
}
x()
 //console.log(e)   we can not access local variable outside the function


//-------------------------------------------------

//global variable
let a = 20            //global  variable
function y() {
   console.log(a)
}
y()
console.log(a)  //we can access outside the function


//-----------------------------------------------------------

//console table example
let k=20
let l=25
let m=30
let n=35
console.table([k])

//-----------------------------------------------------