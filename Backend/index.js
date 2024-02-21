import express from "express";

const port = 8080;
const app = express();

let arr = [{ name: "Haliuka", age: 26, id: 1, hobby: "coding" }];

app.get("/", (request, response) => {
  response.send(arr);
  response.status(200);
});

app.post("/", (request, response) => {
  arr.push({ name: "Nomio", age: 30, id: 2, hobby: "sleeping" });
  response.send(arr)
});

app.delete("/", (request, response) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == 1) {
      arr.splice(i, 1);
    }
    break;
  }
  response.send(arr);
});

app.listen(port, () => {
  console.log(`Your server is on on the port "http:localhost:${8080}"`);
});
