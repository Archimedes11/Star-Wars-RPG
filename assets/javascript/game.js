let player;
let enemy;

var kenobiPic = $('<a href="#" onclick="console.log(1)"><img src="./assets/images/kenobi.jpg" alt="BenKenobi"></img></a>');
var skywalkerPic = $('<a href="#" onclick="console.log(2)"><img src="./assets/images/skywalker.jpg" alt="LukeSkywalker"></a>');
var sidiousPic = $(' <a href="#" onclick="console.log(3)"><img src="./assets/images/sidious.jpg" alt="DarthSidious"></a>');
var maulPic = $('<a href="#" onclick="console.log(4)"><img src="./assets/images/maul.jpg" alt="DarthMaul"></a>');

BenKenobi = ["kenobi", 120, 15, 8]
LukeSkywalker = ["skywalker", 100, 5, 4]
DarthSidious = ["sidious", 150, 20, 12]
DarthMaul = ["maul", 180, 25, 15]


function Player(characterType, health, counterAttack, attackPower) {
    this.characterType = characterType;
    this.health = health;
    this.counterAttack = counterAttack;
    this.attackPower = attackPower;
}

function Enemy(characterType, health, counterAttack, attackPower) {
    this.characterType = characterType;
    this.health = health;
    this.counterAttack = counterAttack;
    this.attackPower = attackPower;
}

$("#kenobi").append(kenobiPic);
$("#skywalker").append(skywalkerPic);
$("#sidious").append(sidiousPic);
$("#maul").append(maulPic);