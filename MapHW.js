function uc1() {
  const DiceMap = new Map();
  DiceMap[1] = 0;
  DiceMap[2] = 0;
  DiceMap[3] = 0;
  DiceMap[4] = 0;
  DiceMap[5] = 0;
  DiceMap[6] = 0;
  for (let i = 0; i < 100; i++) {
    let num1 = Math.floor(Math.random() * 5) + 1;
    DiceMap[num1]++;
  }
  console.log(DiceMap);
}
uc1();
function uc2() {
  const DiceMap1 = new Map();
  DiceMap1[1] = 0;
  DiceMap1[2] = 0;
  DiceMap1[3] = 0;
  DiceMap1[4] = 0;
  DiceMap1[5] = 0;
  DiceMap1[6] = 0;
  while (
    DiceMap1[1] < 10 &&
    DiceMap1[2] < 10 &&
    DiceMap1[3] < 10 &&
    DiceMap1[4] < 10 &&
    DiceMap1[5] < 10 &&
    DiceMap1[6] < 10
  ) {
    let num1 = Math.floor(Math.random() * 5) + 1;
    DiceMap1[num1]++;
  }
  console.log(DiceMap1);
}
uc2();

function uc3() {
  const MonthMap = new Map();
  MonthMap[1] = 0;
  MonthMap[2] = 0;
  MonthMap[3] = 0;
  MonthMap[4] = 0;
  MonthMap[5] = 0;
  MonthMap[6] = 0;
  MonthMap[7] = 0;
  MonthMap[8] = 0;
  MonthMap[9] = 0;
  MonthMap[10] = 0;
  MonthMap[11] = 0;
  MonthMap[12] = 0;
  for (let i = 0; i < 50; i++) {
    let num1 = Math.floor(Math.random() * 11) + 1;
    MonthMap[num1]++;
  }
  console.log(MonthMap);
}
uc3();
