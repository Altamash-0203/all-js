/*
1]multiple of two numbers 
2]check num even or not
3]find the grater num 
4]get length of string
5]convert mintues in seconds
6]square a num
7]concate two strings
8}calculate area of reactangle
9]return the first element of an array
10] convert hours into mintues
11] convert mintes into hours
*/


// <!------------------------------------------practice queations---------------------------!>



// 1]multiple of two numbers  ===>

    function multi(a,b)
    {
        let multiple=a*b
        console.log("multiple of two given is numbers ",multiple,"\n")
    }

    multi(7,7)



// 2]check num even or not

function checkEven(c)
{
    if(c%2==0)
        {
            console.log("its even",c,"\n");
        }
        else 
        {
            console.log("not even",c,"\n");
        }
}
checkEven(4)



// 3]find the grater num 

function checkmax(d,e,)
{
    if(d>e)
        {
            console.log(d,"greater than",e,"\n");
        }
        else if(e>d){
            console.log(e,"greater than",d ,"\n");
        }
        else{
            
                console.log("equal value","\n");
            
        }
}
checkmax(5,5)



// get length of string

function getLength(name) {
    let char=name.length;
    console.log("the name consist",char,"characters" ,"\n")
  }
  
getLength("shaikh Altamash","\n")



// 5]convert mintues in seconds

function mintosec(mintues)
{
    let seconds =mintues*60
 console.log("There are",seconds,"sec in",mintues,"\n");
}

mintosec(2)



// 6]square a num


function numsq(sq)
{
    let square=sq*sq
    console.log("the square of",sq,"is",square,"\n");
}
numsq(8)




// 7]concate two strings

function concatestr(str1,str2)
{
    let concate=str1+str2
    console.log(concate);
}
concatestr("shaikh","Altamash \n")




// 8}calculate area of reactangle

function areaofreac(length,width)
{
    let area=length*width
    console.log("area of reactangle is",area ,"\n");
}
areaofreac(5,10)




//return the first element of an array

function arrelement(arr)

{
    return arr[0]
}

console.log(arrelement([1,2,3,45,6]),"\n")






// 10] convert hours into mintues

function hourstomin(hr)
{
    let min=hr*60
    console.log("there are ",min,"mintues in",hr,"hours \n")
}
hourstomin(2)





// 11] convert mintes into hours


function mintohour(min)
{
    let hr=min/60
    console.log("there are",hr,"hours in",min,"mintues \n");
}
mintohour(300)



// <!------------------------------------------practice queations---------------------------!>