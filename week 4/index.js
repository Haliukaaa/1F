let name = window.prompt("Нэрээ оруулна уу: ");
let greet = (name) => {
  window.alert("Сайн уу! " + name + " :)");
};

greet(name);

let n1 = window.prompt("Тооны машин: Эхний тоог оруул: ");
let calc = window.prompt(
  "Та хийхийг хүссэн үйлдлээ сонгоно уу: \n1. Үржих \n2. Хуваах \n3. Нэмэх \n4. Хасах \n5. Хувь олох"
);
let n2 = window.prompt("Тооны машин: Хоёр дахь тоо: ");


function calculate(calc, n1, n2) {
  switch (calc) {
    case "1":
      window.alert(n1 * n2);
      break;
    case "2":
      window.alert(n1 / n2);
      break;
    case "3":
      window.alert(Number(n1) + Number(n2));
      break;
    case "4":
      window.alert(n1 - n2);
      break;
    case "5":
      window.alert(n1 / 100 + "%, " + n2 / 100 + "%");
      break;
    default:
      window.alert(
        "Таны оруулсан тоог бодох боломжгүй байна. Та зөв тоо оруулна уу."
      );
  };
};
calculate(calc, n1, n2);

