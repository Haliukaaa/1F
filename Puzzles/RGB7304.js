let number = 23457;
let sum;

function oddDigitFinder (n1) {
    sum = 0;
    debugger;
    numStr = n1.toString();
    for (let i = 0; i <= numStr.length; i++) {
        if(numStr[i] % 2 !== 0) {
            sum += i;
        }
    }
    return sum;
}

let result = oddDigitFinder(number);
console.log(result);
