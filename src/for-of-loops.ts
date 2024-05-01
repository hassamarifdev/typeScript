let mixData: (string | number)[] = ["Cosmas", 30, 15, "star"];

// for (let item of mixData) {
//   console.log(item);
// }

// for (let item of mixData.entries()) {
//   console.log(item);
// }

// for (let item of mixData.entries()) {
//   console.log(item[0], item[1]);
// }

for (let [i, item] of mixData.entries()) {
  console.log(`${i + 1}- ${item}`);
}
