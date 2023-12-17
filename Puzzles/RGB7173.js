let number = "-13 20";
let n1 = number.split(" ")[0];
let n2 = number.split(" ")[1];

let coordinationSectionFinder = (n1, n2) => {
    if (n1 > 0 && n2 > 0) {
        return console.log("I" + "-р мөч");
    } else if (n1 < 0 && n2 > 0) {
        return console.log("II" + "-р мөч");
    } else if (n1 > 0 && n2 < 0) {
        return console.log("IV" + "-р мөч");
    } else if (n1 < 0 && n2 < 0) {
        return console.log("III" + "-р мөч");
    }
}

coordinationSectionFinder(n1, n2);