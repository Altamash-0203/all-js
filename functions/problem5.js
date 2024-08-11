// write a function to detemine num is prime or not

function Checkprime(num)
{
    var factor=0
    for(i=1;i<=num;i++)
        {
           if(num%i==0)
            {
                factor++;
            }
        }
        if(factor==2)
            {
            console.log(   "prime")
            }
            else{
                 console.log("not prime");
            }
}

Checkprime(11)