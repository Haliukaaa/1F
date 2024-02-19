let product = window.prompt("Та авахыг хүссэн бараагаа гаргана уу. \n 1. coke 1200 \n 2. sprite 1500 \n 3. alpen gold 2000 \n 4. milk 2200 \n 5. bread 1000 \n 6. icecream 500 \n 7. gum 150 \n 8. alcohol 15000");
switch(product) {
    case '1':
        product = 1200;
        break;
    case '2':
        product = 1500;
        break;
    case '3':
        product = 2000;
        break;
    case '4':
        product = 2200;
        break;
    case '5':
        product = 1000;
        break;
    case '6':
        product = 500;
        break;
    case '7':
        product = 150;
        break;
    case '8':
        product = 15000;
        break;
    default:
        window.alert("Та зөвхөн 1-8 хүртэл сонгоно  уу.");
};

let money = window.prompt("Та оруулах дэвсгэртээ сонгоно уу. \n 1. 5000 \n 2. 10000 \n 3. 20000");

switch (money) {
    case '1':
        money = 5000;
        break;
    case '2':
        money = 10000;
        break;
    case '3':
        money = 20000;
        break;
    default:
        window.alert("Та зөвхөн 5000, 10000, 20000 төгрөгийн дэвсгэрт оруулна уу.");
};

let change = (money, product) => {
    change = money - product;
};
change(money, product);

function changeCalculate(product, money) {
  if (product < money) {
    window.alert("Гүйлгээ амжилттай. Таны хариулт: " + change);
  } else if (product > money) {
    window.alert("Үлдэгдэл хүрэлцэхгүй байна. Та дараа дахин оролдоно уу!!");
  };
};
changeCalculate(product, money)

function changeBillCount (change) {
    let tenK = Math.floor(change/10000);
    change = change % 10000;

    let fiveK = Math.floor(change/5000);
    change = change % 5000;

    let oneK = Math.floor(change/1000);
    change = change % 1000;

    let fiveHundred = Math.floor(change/500);
    change = change % 500;

    let oneHundred = Math.floor(change/100);
    change = change % 100;

    let fifty = Math.floor(change/50);
    change = change % 50;
    return {
        tenK: tenK,
        fiveK: fiveK,
        oneK: oneK,
        fiveHundred: fiveHundred,
        oneHundred: oneHundred,
        fifty: fifty
    }
};
let result = changeBillCount(change);
window.alert(
  `10000₮-ийн дэвсгэрт: ${result.tenK}\n5000₮-ийн дэвсгэрт: ${result.fiveK}\n1000₮-ийн дэвсгэрт: ${result.oneK}\n500₮-ийн дэвсгэрт: ${result.fiveHundred}\n100₮-ийн дэвсгэрт: ${result.oneHundred}\n50₮-ийн дэвсгэрт: ${result.fifty}`
);