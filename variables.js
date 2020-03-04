const highestBall = 40;
const numberBalls = 6;
const lowestPrize = 5;
const multiplier = 4;
const winningNumbersList = [];
const prizes = [];
const tableOfWinnings = [];

prizes.push(lowestPrize);
let prizeToAdd = lowestPrize;
for (i=0; i<numberBalls; i++) {
  prizeToAdd *= multiplier;
  prizes.push(prizeToAdd);
}

tableOfWinnings.push({Description: "Prize for 0 numbers matched", Prize: 0});
for (i=0; i<numberBalls; i++) {
  tableOfWinnings.push({Description: `Prize for ${i+1} numbers matched`, Prize: prizes[i]});
}

module.exports = {
  highestBall: highestBall,
  numberBalls: numberBalls,
  winningNumbersList: winningNumbersList,
  prizes: prizes,
  tableOfWinnings: tableOfWinnings,
};
