function outer(){
    return function inner(){
       console.log(a)
    }

}

var a = 19
outer() 

// if we need to print value of a then we need to write
outer ()()