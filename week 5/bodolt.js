const arr = [1, 2, 3, 4];
let add = 5;
let sum = "";
let result = "";

function pushAtEnd(n1, n2) {
  n1 = n1.toString();
  sum += `${n1}` + "," + `${n2}`;
  return sum;
}

function minusLastValue(n1, n2) {
    let i = 0;
    while (i < n1.length -1) {
        result += n1[i];
        if (i < n1.length -1 -i) {
            result += ",";
        }
        i++;
    }
  return result
}

sum = pushAtEnd(arr, add);
result = minusLastValue(arr, add);
console.log(result);
