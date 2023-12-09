let a = Number(window.prompt("Тэгш өнцөгтийн талбайг олъё.\nТа 'а' талыг оруулна уу."));
let b = Number(window.prompt("Та 'b' талыг оруулна уу."));

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