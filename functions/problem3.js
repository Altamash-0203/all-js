/*
given x=20
write three function
test:
1] find square of x
2] multiply the above result by 10
3]print the result 
*/


function square(x)
{
    let sq=x*x
    return sq;
}

  function multiply(y)
  {
    let multi=y*10
    return multi
  }
  
function printresult(n)
{
    console.log("multipilication by 10 is -",n)
}


let result1=square(20)
console.log("sqaure of x is-",result1)
let result2=multiply(result1)
printresult(result2)
