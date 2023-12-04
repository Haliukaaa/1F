// Wending machine
// Baraanuud
// 1. Cola 1200
// 2. Sprite 1500
// 3. Alpen gold 2000
// 4. Suu 2200
// 5. Talh 1000
// 6. Zairmag 500
// 7. Bohi 150
// 7. Arhi 15000
// Garaas avj boloh devsgertuud
// 1. 5000
// 2. 10000
// 3. 20000
// Hariult uguh devsgert
// 1. 50
// 2. 100
// 3. 500
// 4. 1000
// 5. 5000
// 6. 10000
// Ajillagaa
// 1. Hereglegch avah yma songono
// 2. Mungu hiine.
//  1. Avah devsgertuudees uurig avahgue
//  2. Avah ymnaas baga devsgert avahgue
// 3. Hariult bodno
//  1. Hariulah niit dung bodno
//  2. Ymar2 devsgert tgd hden sh uguhig bodno. (Nemelt)


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

let change = money - product;

if (product < money) {
    window.alert("Гүйлгээ амжилттай. Таны хариулт: " + change);
} else if (product > money) {
    window.alert("Үлдэгдэл хүрэлцэхгүй байна. Та дараа дахин оролдоно уу!!");
};
