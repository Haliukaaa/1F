let char = window.prompt("Та дурын англи цагаан толгойн үсэг оруулна уу. Дараагийн үсэгтэй хамт хэвлэе: ");
let asciiCode = char.charCodeAt(0);
let nextchar = String.fromCharCode(asciiCode + 1);
console.log(char, nextchar);