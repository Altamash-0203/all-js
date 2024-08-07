//print second half of array with if -else odd /even


let arr=[1,2,3,4,5,6,10,20,30,40,50]

if(arr.length%2==0)
    {
   var      start=arr.length/2
    }
else{
   var   start=Math.floor (arr.length/2)

}

for(i=start;i<arr.length;i++)
    {
        console.log(arr[i])
    }