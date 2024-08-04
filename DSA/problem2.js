/*
the given number is N 
lets derive variable x which is equal to floor of a number you get when 32/n 
i) case 1-if x=0 print too low
ii) case 2-if it not possible to genrate then print -1
iii)case 3-in all other case print x
*/

function floor(n)
{
    let x=Math.floor(32/n);  // math.floor function to round a number down to the nearest integer.
                             // for ex- x=3.7 it print x=3
    if(x==0)
        {
            console.log("too low");
        }
        else if(n==0)
            {
                console.log(-1);
            }
            else{
                console.log(x);
            }
}

floor(33)