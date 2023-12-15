let name = "Brutus";
let value = 300;
let join = "";

let addName = [{ piano: 500 }, { Brutus: 400 }, { Caligula: 440 }];
let str = "";

function toString(n1) {
  for (let i = 0; i <= n1.length; i++) {
    str += "{" + n1[i].key + "}" + ",";
  }
  return str;
}

str = toString(addName);
console.log(str);

function keyValueAdd(n1, n2, n3) {
  let i = 0;
  join += n3 + "{" + `${n1}: ` + `${n2}` + "}";
  return join;
}

join = keyValueAdd(name, value, addName, join);
