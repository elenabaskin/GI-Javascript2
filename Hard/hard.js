const tomHeight = 9;
const tomWeight = 8;
const tomBMI = tomWeight / (tomHeight * tomHeight);
console.log(tomBMI);

const jerryHeight = 10;
const jerryWeight = 45;
const jerryBMI = jerryWeight / (jerryHeight * jerryHeight);
console.log(jerryBMI);

// console.log(tomBMI > jerryBMI);
if (tomBMI > jerryBMI) {
  console.log(`Tom having a higher BMI is ${tomBMI > jerryBMI} :)!`);
} else {
  console.log(`Tom having a higher BMI is ${tomBMI > jerryBMI} :(!`);
}
