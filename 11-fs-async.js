const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log("done read file 1");

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log("done read file 2");

    writeFile(
      "./content/result-async.txt",
      `\nhere is async result: \n${first}, \n${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");

readFile("./content/cobain1.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const cobain = result;
  console.log("done read cobain");
  writeFile(
    "./content/hasilcobain.txt",
    `ini hasil dari: ${cobain}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result, "done write cobain");
    }
  );
});
console.log("starting next");
