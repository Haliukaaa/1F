let number = "3.5 12.47";
let n1 = number.split(" ")[0];
let n2 = number.split(" ")[1];

let geometricMean = (n1, n2) => {
    let result = Math.sqrt(n1 * n2);
    return result.toFixed(2);
}

let avg = (n1, n2) => {
    let ans = (parseFloat(n1) + parseFloat(n2))/2;
    return ans.toFixed(2);
}

console.log("Таны оруулсан тооны арифметик дундаж нь: " + avg(n1, n2));
console.log("Таны оруулсан тооны геометрийн дундаж нь: " + geometricMean(n1, n2));