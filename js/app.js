//contador stats

const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');
const count3 = document.getElementById('count3');
const count4 = document.getElementById('count4');
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;

let time1 = setInterval(() => {
  count1.textContent = `${(value1 += 1)} + `;

  if (value1 === 250) {
    clearInterval(time1);
  }
}, 25);

let time2 = setInterval(() => {
  count2.textContent = `${(value2 += 1)} + `;

  if (value2 === 100) {
    clearInterval(time2);
  }
}, 50);

let time3 = setInterval(() => {
  count3.textContent = `${(value3 += 1)} + `;

  if (value3 === 30) {
    clearInterval(time3);
  }
}, 100);

let time4 = setInterval(() => {
  count4.textContent = `${(value4 += 1)} + `;

  if (value4 === 10) {
    clearInterval(time4);
  }
}, 250);
