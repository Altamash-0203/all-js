/* 
you provided integer n 

for all numbers between range[ 1,n] including N you have to print a string as per cases

i)print hello wolrd if number is multiple of both 2&3
ii)print hello if number is multiple of 7
iii)print world if number is multiple of 5
iv)print nothing in all other cases
*/
 
function printStrings(n) {
    for (let i = 1; i <= n; i++) {

        if (i % 5 == 0 && i % 7== 0) {
            console.log("hello wolrd");

        } else if (i % 7== 0) {
            console.log("hello");
        } else if (i % 5== 0) {
            console.log("wolrd");
        }
        else{
            console.log("nothing")
        }
    }
}

printStrings(7);
