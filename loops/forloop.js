// // for(let i=0;i<=5;i++)
// //     {
// //         console.log(i)
// //     }




// for(a=1;a<=10;a++)
//     console.log(a)




// // if body

// for (z=1;z<=10;z++)
//     {
//         if(z%2==0)   
//               //  in for loop if curly bracket block ({}) not needed
//             console.log(z)


//     }



// //# print the multiple of 2   1 to 40

// for(i=1;i<=40;i++)
// {
//     if(i%2==0)
//         {
//             console.log(i)
//         }
// }





//# BREAK AND CONTINUE

// //BREAK ==>
// let guest = 5
// for (i = 1; i <= 10; i++) {
//     if (i == guest) {
//         break;  // stop the loop when if condition is true
//     }
//     console.log("drop guest" + i)
// }




// //#CONTINUE
// let relative =5
// for(j=1;j<=15;j++)
//     {
//         if(j==relative)
//             {
//                 continue; //this is skip that specific number and continue the loop 
//             }
//             console.log("relative goes"+j)

//     }



//print even number between 1 to 20 using if condition in for loop

// for(i=1;i<=20;i++)
//     {
//         if(i%2!=0)
//             {
//                 continue;
//             }
//             console.log(i)
//     }


//  //print odd number between 1 to 20 using if condition in for loop   

//     for(i=1;i<=20;i++)
//         {
//             if(i%2==0)
//                 {
//                     continue;
//                 }
//                 console.log(i)
//         }





// let count=1;
// for(i=1;i<=10;i++)
//     {
//         count++
//         if(i==5)
//             {

//                 continue
//             }
            
//     }
//     console.log(count)








//mod of 10
function modof10(num){
for(i=1;i<=num;i++)
    {
        console.log(i%10)
    }
}
modof10(15)