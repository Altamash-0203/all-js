// skip 4th and 5th index from array

let arr=[10,20,30,40,90,70,50,60,70]

for(i=0;i<arr.length;i++)
    {
        if(i==4||i==5)
            {
                continue;
            }
console.log(arr[i]);
        }