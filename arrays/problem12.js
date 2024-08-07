//print first three index using loop and break


let arr=["hell0","hi","bye","goodbye","hey",]

//first way

for(i=0;i<3;i++)
    {
        console.log(arr[i])
    }


 //second way 
 
 for(i=0;i<=arr.length;i++)
    {
        if(i==3)
            {
                break;
            }
            console.log(arr[i])
    }