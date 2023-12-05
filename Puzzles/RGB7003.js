let a = 4;
let b = 6;

function areaCalc(n1, n2) {
    return n1*n2;
}

let areaOfRectangle = areaCalc(a, b);

console.log("Тэгш өнцөгтийн талбай: " + areaOfRectangle);

function perimeterCalc(n1, n2) {
    return 2*(n1+n2);
}

let perimeterRectangle = perimeterCalc(a, b);
console.log("Тэгш өнцөгтийн периметр: " + perimeterRectangle);