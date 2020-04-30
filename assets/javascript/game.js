$( document ).ready(function() {
    console.log( "ready!" );



let player;
let enemy;
player = "";
count = 0;

var kenobiPic = '<a href="#" onclick= count+=1 id="BenKenobi"><img src="./assets/images/kenobi.jpg" alt="BenKenobi"></img></a>';
var skywalkerPic ='<a href="#" onclick= count+=2 id="LukeSkywalker"><img src="./assets/images/skywalker.jpg" alt="LukeSkywalker"></a>';
var sidiousPic = '<a href="#" onclick= count+=3 id="DarthSidious"><img src="./assets/images/sidious.jpg" alt="DarthSidious"></a>';
var maulPic = '<a href="#" onclick= count+=4 id="DarthMaul" ><img src="./assets/images/maul.jpg" alt="DarthMaul"></a>';


var currentGameState = {
    playerChosen: "",
    enemyChosen: "",
    playerHealth: 0,
    enemyHealth: 0,
}

var staticPlayerData = [
    {
        name:"BenKenobi",
        startingPoints: 120,
        counterAttack: 15,
        attackDmg: 8,
    },
    {
        name:"LukeSkywalker",
        startingPoints: 100,
        counterAttack: 5,
        attackDmg: 4,
    },
    {
        name:"DarthSidious",
        startingPoints: 150,
        counterAttack: 20,
        attackDmg: 12,
    },
    {
        name:"DarthMaul",
        startingPoints: 180,
        counterAttack: 25,
        attackDmg: 15,
    }
]

$(".characterPics").on( "click", function() {
    currentGameState.playerChosen=(event.target.parentNode.id);
    var heroChosen=currentGameState.playerChosen;
    if (heroChosen === "BenKenobi"){
        var luke = $("#LukeSkywalker");
        $("#skywalkerEnemy")[0].innerHTML=skywalkerPic;
        console.log( $("#skywalkerEnemy"));


        luke[0].innerHTML="";
        // console.log(luke[0].parentNode.innerHTML);
    }
    else if(heroChosen != "LukeSkywalker"){
        event.target.parentNode.parentNode.innerHTML = "";
    }
    else if(heroChosen != "DarthSidious"){
        event.target.parentNode.parentNode.innerHTML = "";
    }
    else if(heroChosen != "DarthMaul"){
        event.target.parentNode.parentNode.innerHTML = "";
    }


    // event.target.parentNode.parentNode.innerHTML = ""; for myself

  });
  var adam = 0;
  $("#attackButton").on( "click", function() {
    if (currentGameState.playerChosen && currentGameState.enemyChosen){
        adam ++;
        console.log(adam);
    }

  });
  







// BenKenobi = ["kenobi", 120, 15, 8]
// LukeSkywalker = ["skywalker", 100, 5, 4]
// DarthSidious = ["sidious", 150, 20, 12]
// DarthMaul = ["maul", 180, 25, 15]


// function Player(characterType, health, counterAttack, attackPower) {
//     this.characterType = characterType;
//     this.health = health;
//     this.counterAttack = counterAttack;
//     this.attackPower = attackPower;
// }

// function Enemy(characterType, health, counterAttack, attackPower) {
//     this.characterType = characterType;
//     this.health = health;
//     this.counterAttack = counterAttack;
//     this.attackPower = attackPower;
// }

$("#kenobi").append(kenobiPic);
$("#skywalker").append(skywalkerPic);
$("#sidious").append(sidiousPic);
$("#maul").append(maulPic)

if (count === 1) {
    player = "ObiWan";
}
else if (count === 2) {
    player = "LukeSkywalker";
}
else if (count === 3) {
    player = "DarthSidious";
}
else if (count === 4) {
    player = "DarthMaul";
}



});