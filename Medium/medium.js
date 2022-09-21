const num = Number(prompt("ʕ •ᴥ•ʔ: Pick a number between 1 and 12!"));
var month;

if (num === 1) {
  month = "January";
  alert("You picked January!");
} else if (num === 2) {
  month = "February";
  alert("You picked February!");
} else if (num === 3) {
  month = "March";
  alert("You picked March!");
} else if (num === 4) {
  month = "April";
  alert("You picked April!");
} else if (num === 5) {
  month = "May";
  alert("You picked May!");
} else if (num === 6) {
  month = "June";
  alert("You picked June!");
} else if (num === 7) {
  month = "July";
  alert("You picked July!");
} else if (num === 8) {
  month = "August";
  alert("You picked August!");
} else if (num === 9) {
  month = "September";
  alert("You picked September!");
} else if (num === 10) {
  month = "October";
  alert("You picked October!");
} else if (num === 11) {
  month = "November";
  alert("You picked November!");
} else if (num === 12) {
  month = "December";
  alert("You picked December!");
} else {
  alert("(｡•́︿•̀｡): You were supposed to pick a number between 1 and 12 :(");
}
console.log(month);
