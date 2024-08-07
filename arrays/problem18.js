// find the largest number in array
 
let arr=[40,56,90,56,89,45,67,101]
let largest_num= -Infinity

for(i=0;i<arr.length;i++)
    {
        if(arr[i]>largest_num)
            {
             largest_num=arr[i]
            }

    }
    console.log(largest_num)
