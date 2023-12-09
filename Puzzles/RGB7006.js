let x = window.prompt("y = 4x2-3x+5 Тэгшитгэлийн 'у' утгыг олох гэж байна.\n Та 'x' утгыг онооно уу:");

function findY(n1) {
    let y = 4*(Math.pow(x, 2)) - (3*x) + 5;
    return y;
};

let result = findY(x);
console.log("y = 4x2-3x+5 Тэгшитгэлийг бодлоо.\ny = " + result);