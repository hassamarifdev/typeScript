let data: (string | number)[] = ["Cosmos", 13, 50, "Star"];

for (let dataPoint in data) {
  //   console.log(dataPoint);
  //   console.log(typeof dataPoint); //dataPoint type is string
  //   console.log(typeof +dataPoint);  //by using + we changed its type to number... equivalent to parseInt() method or parseFloat() method

  console.log(`${+dataPoint + 1}- ${data[dataPoint]}`); //changed the type of dataPoint from string to number
  // then we added 1 other wise the output would be 01, 02, 03...
}
