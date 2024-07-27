var x = 3

switch (x) {
    case 1:
        console.log("first");
        break;

    case 2:
        console.log("second");
        break;

    case 3:
        console.log("third");
        break;

    case 4:
        console.log("fourth");
        break;

    case 5:
        console.log("fifth");
        break;
}
//---------------------------------
//example 2

switch (new Date().getDay()) {
    case 0:
        console.log("sunday")
        break;

    case 6:
        console.log("saturday")


    default:
        console.log("lokking for next weekend")

}

//ex-3



let level = 2

switch (level) {
    case 1:
        console.log("level 1");

    case 2:
        console.log("level 2");
        break;


    case 3:
        console.log("level 3");
        break;

    case 4:
        console.log("level 4");

    case 5:
        console.log("level 5");
}