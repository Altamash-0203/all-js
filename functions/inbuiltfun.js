// 1] convert number to string using toString method
    //exampel
     var x=12
     var z=x.toString()
     console.log(z,typeof(z))



     var a=10
     a= a.toString()  // without using another variable 
     console.log(a,typeof(a))
/*__________________________________________________________________________________________________________________________*/


 //2] convet a string in number
  
      //example
        var x="23"
        x=Number(x)
        console.log(x,typeof(x));


 // we can't change alapabet character into a number
 
/*__________________________________________________________________________________________________________________________*/

// pop & push method

//push
 var fruits=["banana","apple","papaya"]

 fruits.push("watermeloon")
 console.log(fruits);

 //POP

 var arr =[11,12,13,14,15,16,17,45]
 arr.pop()
 console.log(arr);

/*__________________________________________________________________________________________________________________________*/

// Lastindexod() method & first index method
  // example
  var arr=[1,2,3,4,5,67,7]
//   var x=arr.lastIndexOf(5)
var x=arr.lastIndexOf(9)// the 3 is indacating where should seaching start in array in backward direction from that index num if the search element not found then it will be written -1
  console.log(x)


  //exampl of first index and last index

  var names=["kalicharan","kalishakti","chudail","pandu","prushotam zhavne","chudail"] // chudail is repeated two time

  //lastindex
  var x=names.lastIndexOf("chudail")// expected output 5 or if we are giving index num  >5 o/p will be 2
  console.log(x)

  // first index
  var y=names.indexOf("chudail")// if index number is provided the this method search element in forward direction
  console.log(y);
/*__________________________________________________________________________________________________________________________*/


//shift method & unshit () method
  
  //example of shift

  var arr=[23,1,2,3,4,5]
  arr.shift() // REMOVE FORST ELEMENT OF ARRAY
  console.log(arr)


  //exmaple of unshift
   
  var arr1=[2,3,4,5,6,7]
  arr1.unshift(1) // add element FIRST INDEX OF ARRAY
  console.log(arr1);

/*__________________________________________________________________________________________________________________________*/

//JOIN METHOD

 var arr=['j','a','v','a']
console.log(arr.join());
console.log(arr.join(""));// to remove seprator  add nothing in inverted comma

/*__________________________________________________________________________________________________________________________*/

//slice method

 var arr=['s','p','e','e','d']
 var x=arr.slice(2) // which index num is enter from that index array cut in seprate 
 var y=arr.slice(1,4) // which index is you provided from that number to the the less than one from given second number is sliced
 console.log(x)
 console.log(y)

/*__________________________________________________________________________________________________________________________*/

//QUIZ
var item= ['rice',"oil","vegetables","chilli"]  // dont add vegetables and chilli in cart 
var cart=""

for (i=0;i<item.length;i++)
  {
     if(item[i]=="vegetables")
      {
        continue;
      }
    else  if(item[i]=="chilli")
        {
          continue;
        }
      else{
         cart=cart+"-"+item[i]
      }
  }
 console.log(cart)


/*__________________________________________________________________________________________________________________________*/

