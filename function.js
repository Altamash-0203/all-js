// //types of function

// //  1==> 

// function ammi_jaan() {
//     var x = 4
//     var y = 6
//     var sum = x + y
//     console.log("beta sum is", sum);

// }
// ammi_jaan()






// //2==>

//     function abba_jaan(a,b)
//     {

//         var multiply=a*b
//         console.log("beta multiply is ",multiply)
//     }
//     abba_jaan(9,9)





//     //3==>

// //  function f_n(f,l)
// //  {

// //     return x+=y;
// //  }
// //  var fn=f_n(4,8)

// //  console.log(fn)


// //  const abba_jaan = (a, b)=> {

// // };

// // abba_jaan(9, 9);



// function pro(r)

// {
//     var r=20
//     var squ=r*r
//     console.log(squ)

//     var multiply=squ*10
//     console.log(multiply)
// }

// pro()



// var o="ksajbkabsdj"

// function x_son()
// {
//     var v="jkdsb"
//     console.log(v);
//      console.log(o);
//     y_son()
// }

// function y_son()
// {
//     var k="dsjakbb"
//     console.log(k);
// }

// function z_son()
// {
//     var b="jkdsjaksjasb"
//     console.log(b);
// }

// x_son()



//check odd or even

// function checkeo(num)
// {
//     if(num%2==0)
//         {
//             console.log("even")
//         }
//         else
//         {
//             console.log("odd")
//         }

// }
// checkeo()




//check prime or not

function checkprime(num) {
    if (num <= 1) {
        console.log("not prime");
        return;
    }
    
    let factors = 0;
    
    // Loop to check for factors up to square root of num
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            factors++;
            // If i is not equal to num/i, count the pair (i, num/i) as factors
            if (i !== num / i) {
                factors++;
            }
        }
    }
    
    // A prime number should have exactly 2 factors: 1 and itself
    if (factors === 2) {
        console.log("prime");
    } else {
        console.log("not prime");
    }
}

// Example usage:
checkprime(10); // Output: not prime
checkprime(7);  // Output: prime
checkprime(23); // Output: prime
