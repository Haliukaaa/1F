let number = 123456;

let digitFinder = (number) => {
    let numStr = number.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum++;
    }
    return sum;
}

console.log("Таны оруулсан тооны орон: " + digitFinder(number));