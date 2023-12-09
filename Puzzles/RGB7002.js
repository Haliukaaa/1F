let a = Number(window.prompt("Гурвалжны периметрийг олъё.\nТа гурвалжны 'а' талыг оруулна уу."));
let b = Number(window.prompt("Та гурвалжны 'b' талыг оруулна уу."));
let c = Number(window.prompt("Та гурвалжны 'c' талыг оруулна уу."));

function trianglePerimeter(n1, n2, n3) {
    return n1 + n2 + n3;
};

perimeterTriangle = trianglePerimeter(a, b, c);

console.log("Гурвалжны периметр" + perimeterTriangle);