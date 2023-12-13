let number = "3 4 5";
let split = number.split(" ");
let a = split[0];
let b = split[1];
let c = split[2];
let area = 0;

function triangleArea (n1, n2, n3) {
    area = 0.5 * Number(n1) * Number(n2);
    area = area.toFixed(2);
    return area;
}

area = triangleArea(a, b);

console.log(area);