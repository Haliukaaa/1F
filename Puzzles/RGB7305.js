let number = window.prompt("Та дурын тоогоо оруулаад, зай аваад n тоог оруулна уу. \nТухайн тоонд n тоо хэдэн удаа орсныг шалгаж үзүүлье");
let split = number.split(" ");
let a = split[0];
let n = split[1];
let sum = 0;

function counter (n1, n2) {
    for (let i = 0; i<n1.length; i++) {
        if (Number(n1[i]) === Number(n2)) {
        sum += 1;
        }
    } 
    return sum;
}


let result = counter(a, n)
console.log(result);