let alphabet = window.prompt(
  "Та дурын том үсэг оруулна уу. Жижиг үсгээр сольё:"
);

let toLowerCase = (letter) => {
  let lowerCase = letter.replace(letter[0], letter[0].toLowerCase());
  return lowerCase;
};

console.log(toLowerCase(alphabet));
