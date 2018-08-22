//script.js

// Hand animated icon

function hand() {
    var a;
    a = document.getElementById("animated-icons");
    a.innerHTML = "&#xf255;";
    setTimeout(function () {
        a.innerHTML = "&#xf256;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf257;";
      }, 2000);
}
hand();
setInterval(hand, 3000);

// New game button

var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame); // 'click' event 

// Player pick

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });

// Game state

var gameState = 'notStarted',
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

var welcomeElem = document.getElementById('js-welcomeElement'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

// Game elements display

function setGameElements() {
  switch(gameState) {

    case 'started':
        welcomeElem.style.display = 'none';
        newGameElem.style.display = 'none';
        pickElem.style.display = 'inline-block';
        resultsElem.style.display = 'block';
        break;
    case 'ended':
        newGameElem.style.display = 'block';
        newGameBtn.innerText = 'Jeszcze raz';
        break;
    case 'notStarted':
        welcomeElem.style.display = 'block';
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
        break;
    default:
        // do nothing
  }
}

setGameElements();

// New game

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name', 'imię gracza');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }

}

// Player pick

function playerPick(playerPick) {
    console.log(playerPick);
}

// Computer's random choice

var x = Math.random();

Math.floor(Math.random()*3);

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

// Game main

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  
    var winnerIs = 'player';
  
    if (playerPick == computerPick) {
          winnerIs = 'noone'; 
    } 
    else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
  
        winnerIs = 'computer';
    }
  
    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } 
    else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    setGamePoints(); 
    endOfGame();
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

// Game points 
  
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

// Game end

function endOfGame() {
    if (player.score === 10) {
        alert('You win!');
        gameState = 'ended';
        setGameElements();
    } 
    else if (computer.score === 10) {
        alert('Game over!');
        gameState = 'ended';
        setGameElements();
    }
}