// write a function to detemine num is prime or not

function Checkprime(num) {
    let factor = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            factor++;
        }
    }

    if (factor == 2) {
        return true;
    } else {
        return false;
    }
}

if (Checkprime(11)) {
    console.log("It's prime");
} else {
    console.log("Not prime");
}
