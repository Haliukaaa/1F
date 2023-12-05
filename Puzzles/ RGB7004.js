let a = window.prompt("Кубийн эзэлхүүн ба гадаргуугийн талбайг олоод өгье.\nКубийн талыг оруулна уу: ");

function VolumeOfCube(n1) {
    return n1**=3;
};

let cubicVolume = VolumeOfCube(a);
console.log("Кубийн эзэлхүүн: " + cubicVolume);

function surfaceArea(n1) {
    return 6*(Math.pow(n1, 2));
};

let surfaceAreaOfCube = surfaceArea(a);
console.log("Кубийн гүйцэд гадаргуугийн талбай: " + surfaceAreaOfCube); 