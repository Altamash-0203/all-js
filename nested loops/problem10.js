// find number prime or not from 1 to 100

let num=prompt("enter num")
let factor=0
for(i=1;i<=100;i++)
{
    if (num%i==0)
    {
        factor++;
    }
}

if(factor==2)
{
    console.log("its prime")
}
else 
{
    console.log("not prime")
}