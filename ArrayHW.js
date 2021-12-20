function uc1() {
  let arr = [];
  let num1 = Math.floor(Math.random() * 900) + 100;
  let num2 = Math.floor(Math.random() * 900) + 100;
  let num3 = Math.floor(Math.random() * 900) + 100;
  let num4 = Math.floor(Math.random() * 900) + 100;
  let num5 = Math.floor(Math.random() * 900) + 100;
  let num6 = Math.floor(Math.random() * 900) + 100;
  let num7 = Math.floor(Math.random() * 900) + 100;
  let num8 = Math.floor(Math.random() * 900) + 100;
  let num9 = Math.floor(Math.random() * 900) + 100;
  let num10 = Math.floor(Math.random() * 900) + 100;

  arr.push(num1);
  arr.push(num2);
  arr.push(num3);
  arr.push(num4);
  arr.push(num5);
  arr.push(num6);
  arr.push(num7);
  arr.push(num8);
  arr.push(num9);
  arr.push(num10);
  console.log(arr);
  arr.sort();
  console.log(arr[1] + ' 2nd small');
  console.log(arr[8] + ' 2nd large');
  return;
}

uc1();

function uc3() {
  let num1 = 56;
  let arr = [];
  for (let i = 2; i <= num1; i++) {
    if (num1 % i == 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}
uc3();
function uc4() {
  let num1 = Math.floor(Math.random() * 900) + 100;
  let num2 = Math.floor(Math.random() * -900) + 100;
  let num3 = -(num1 + num2);
  console.log(num1 + ' ' + num2 + ' ' + num3);
}
uc4();
function uc5() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 11 == 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}
uc5();
