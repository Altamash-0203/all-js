//print first of half of array [odd/even]



let arr=[1,2,3,4,5,10,20,30,40,50]

if(arr.length%2==0)
    {
   var      start=arr.length/2
    }
else{
   var   start=Math.floor (arr.length/2)

}

for(i=0;i<start;i++)
    {
        console.log(arr[i])
    }