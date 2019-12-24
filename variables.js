const highestBall = 40;
const numberBalls = 6;
const lowestPrize = 5;
const multiplier = 4;
var list = [];
var winningNumbersList = [];
var prizes = [];
var tableOfWinnings = [];

prizes.push(lowestPrize);
var prizeToAdd = lowestPrize;
for(i=0;i<numberBalls;i++){
  prizeToAdd *= multiplier;
  prizes.push(prizeToAdd);
}

tableOfWinnings.push({Description: 'Prize for 0 numbers matched', Prize: 0});
for(i=0;i<numberBalls;i++){
  tableOfWinnings.push({Description: `Prize for ${i+1} numbers matched`, Prize: prizes[i]})
}


module.exports = {
  highestBall: highestBall,
  numberBalls: numberBalls,
  list: list,
  winningNumbersList: winningNumbersList,
  prizes: prizes,
  tableOfWinnings: tableOfWinnings
}
