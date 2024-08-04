/* you are given number n ,you need find sum of all the even numbers
  which lesss than oor equal to n


  */


  let n=6
  
  let sum=0;
  for(i=1;i<=n;i++)
      {
     if(i%2==0)
      {
          sum=sum+i
            
      }
    
      }
      console.log(sum)