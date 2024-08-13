// find prime number in between 2 to 100


function Checkprime(num)
{
    var factor=0;
  for(i=1; i<=num;i++)
    {
        if(num%i==0)
            {
                factor++;
            }
    }

    if(factor==2)
        {
            console.log(num,"prime");
        }
        else{
            console.log(num,"not prime");
        }
}

for(j=2;j<=100;j++)
    {
        Checkprime(j)
    }