const vars = require('./variables.js');
const colors = require('colors');
const blue = colors.blue;

const highestBall = vars.highestBall;
const numberBalls = vars.numberBalls;
const list = vars.list;
const winningNumbersList = vars.winningNumbersList;
const prizes = vars.prizes;
const tableOfWinnings = vars.tableOfWinnings;
var valid = false;

if(highestBall < 1 || numberBalls < 1 || highestBall < numberBalls){
  console.log(`You can't have a highestBall or numberBalls Less than 0.\nYou also cannot have a highestBall less than numberBalls.\nCheck that your highestBall / numberBalls are above 1, and that highestBall is not less than your numberBalls`);
} else {
  valid = true;
}

function getRandomList(size, lowest, highest){
  var numbers = [];
  for(i=0;i<size;i++){
    var add = true;
    var randomNumber = Math.floor(Math.random() * highest) + 1;
    for(y=0;y<highest;y++){
      if(numbers[y] == randomNumber){
         add = false;
      }
    }
    if(add) {
      numbers.push(randomNumber);
    } else {
      i--;
    }
  }
  var highestNumber = 0;
  for(i=0;i<numbers.length;i++){
    for(j=0;j<numbers.length;j++){
      if(numbers[j] < numbers[j+1]){
        highestNumber = numbers[j];
        numbers[j] = numbers[j+1];
        numbers[j+1] = highestNumber;
      }
    }
  }
  return numbers;
}

function calculateOddOfWinning(){
  var odds = 1;
  var ballCountCounter = highestBall;
  var ballCounter = 1;
  var balls = numberBalls;
  for(i=0;i<numberBalls;i++){
    odds *= ballCountCounter;
    ballCountCounter -= 1;
  }
  for(i=0;i<numberBalls;i++){
    ballCounter *= balls;
    balls -= 1;
  }
  return odds/ballCounter;
}

function isWinner(client,winning){
  for(i=0;i<client.length;i++){
    for(j=0;j<client.length;j++){
      if(client[i] === winning[j]){
        winningNumbersList.push(winning[j]);
      }
    }
  }
  if(winningNumbersList.length == 0){
    return `You haven't won this time.`;
  }
  for(i=0;i<numberBalls;i++){
    if(winningNumbersList.length == (i+1)){
      return `Winner: €${prizes[i]}\nYou matched numbers ${winningNumbersList}`;
    }
  }
}

function prizeList(){
  return tableOfWinnings
}

if(valid){
  const clientNumbers = getRandomList(numberBalls, 1, highestBall);
  const winningNumbers = getRandomList(numberBalls, 1, highestBall);
  const oddsOfWinning = calculateOddOfWinning();
  const isWinningTicket = isWinner(clientNumbers,winningNumbers);
  const prizeListTable = prizeList();
  console.log(`Your Numbers: ${clientNumbers}`)
  console.log(`Winning Numbers: ${winningNumbers}`)
  console.log(isWinningTicket);
  console.table(prizeListTable);
  console.log(blue(`You've a 1 in ${oddsOfWinning} chance of winning the lotto`))
}
