let x = Number(window.prompt("y = 3x - 5 тэгшитгэлийг бодож байна.\nТа 'x'-ийн утгыг оруулна уу: "));

function findY(n1) {
    let findY = (3*n1)-5;
    return findY;
};

let result = findY(x)

console.log("y = 3x - 5 Тэгшитгэлийг бодлоо.\ny = " + result);
