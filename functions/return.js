// return Function 

function percentage(marks,subjects)
{
    let per=marks/subjects
    return per;
}

var result=percentage(120,6)

console.log(result)

if(result<35)
    {
        console.log("fail")
    }
    else{
        console.log("pass")
    }