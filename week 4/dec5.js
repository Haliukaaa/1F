// let b1 = 8;
// let b2 = 6;

function isRectangle(b1, b2) {
    return (b1*b2);
}

let area = isRectangle(b1, b2);
console.log("Тэгш өнцөгтийн талбай: " + area);

let a = 10;
let b = 8;
let c = 6;

function rightTriangleArea(n1, n2, n3) {
    if (n1*n1 + n2*n2 === n3*n3) {
        return (n1 * n2) / 2;
    }
    else if (n3*n3 + n1*n1 === n2*n2) {
        return (n1 * n3) / 2;
    }
    else if (n2*n2 + n3*n3 === n1*n1) {
        return (n2 * n3) / 2;
    }
    else {
        console.log("Уучлаарай, тэгш өнцөгт гурвалжин биш байна");
    }
};
let areaOfRightTriangle = rightTriangleArea(a, b, c);
console.log("Тэгш өнцөгт гурвалжны талбай: " + areaOfRightTriangle);

let x = window.prompt("(x² + 5x + 6) Тэгшитгэлийг бодож байна. \nТа 'х' утгыг оруулна уу.");

function equationX(x) {
    return Math.pow(x, 2) + 5 * x + 6;
}
let equationWithX = equationX(x);
console.log("x² + 5x + 6 = " + equationWithX);