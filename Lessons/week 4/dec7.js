let number = 35;
let sum = 0;
let i = 0;

while (i <= number) {
    if ((i%2)===0) {
        sum += i;
    }
    i++;
}

console.log(number + " тооны тэгш тооны нийлбэр нь: " + sum);

