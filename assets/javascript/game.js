$(document).ready(function () {

    let player;
    let enemy;
    player = "";
    count = 0;

    var kenobiPic = '<a href="#" onclick= count+=1 id="BenKenobi"><img src="./assets/images/kenobi.jpg" alt="BenKenobi"></img></a>';
    var skywalkerPic = '<a href="#" onclick= count+=2 id="LukeSkywalker"><img src="./assets/images/skywalker.jpg" alt="LukeSkywalker"></a>';
    var sidiousPic = '<a href="#" onclick= count+=3 id="DarthSidious"><img src="./assets/images/sidious.jpg" alt="DarthSidious"></a>';
    var maulPic = '<a href="#" onclick= count+=4 id="DarthMaul" ><img src="./assets/images/maul.jpg" alt="DarthMaul"></a>';

    $("#kenobi").append(kenobiPic);
    $("#skywalker").append(skywalkerPic);
    $("#sidious").append(sidiousPic);
    $("#maul").append(maulPic);

    // This is used on line 60
    var currentGameState = {
        playerChosen: "",
        enemyChosen: "",
        playerHealth: 0,
        enemyHealth: 0,
    }

    staticPlayerData = [
        {
            name: "BenKenobi",
            startingPoints: 120,
            counterAttack: 15,
            attackDmg: 8,
        },
        {
            name: "LukeSkywalker",
            startingPoints: 100,
            counterAttack: 5,
            attackDmg: 4,
        },
        {
            name: "DarthSidious",
            startingPoints: 150,
            counterAttack: 20,
            attackDmg: 12,
        },
        {
            name: "DarthMaul",
            startingPoints: 180,
            counterAttack: 25,
            attackDmg: 15,
        }
    ]

    ObiArray = staticPlayerData[0];
    LukeArray = staticPlayerData[1];
    SidousArray = staticPlayerData[2];
    MaulArray = staticPlayerData[3];


    // Decides who is the "hero" and who are the potential enemies
    $(".characterPics").on("click", function () {
        currentGameState.playerChosen = (event.target.parentNode.id);
        var heroChosen = currentGameState.playerChosen;
        if (heroChosen === "BenKenobi") {

            var luke = $("#LukeSkywalker");
            $("#skywalkerEnemy")[0].innerHTML = skywalkerPic;
            luke[0].innerHTML = "";

            var palpatine = $("#DarthSidious");
            $("#sidiousEnemy")[0].innerHTML = sidiousPic;
            palpatine[0].innerHTML = "";

            var darthMaul = $("#DarthMaul");
            $("#maulEnemy")[0].innerHTML = maulPic;
            darthMaul[0].innerHTML = "";
        }

        if (heroChosen === "LukeSkywalker") {

            var obiwanK = $("#BenKenobi");
            $("#kenobiEnemy")[0].innerHTML = kenobiPic;
            obiwanK[0].innerHTML = "";

            var palpatine = $("#DarthSidious");
            $("#sidiousEnemy")[0].innerHTML = sidiousPic;
            palpatine[0].innerHTML = "";

            var darthMaul = $("#DarthMaul");
            $("#maulEnemy")[0].innerHTML = maulPic;
            darthMaul[0].innerHTML = "";
        }

        if (heroChosen === "DarthSidious") {

            var obiwanK = $("#BenKenobi");
            $("#kenobiEnemy")[0].innerHTML = kenobiPic;
            obiwanK[0].innerHTML = "";

            var darthMaul = $("#DarthMaul");
            $("#maulEnemy")[0].innerHTML = maulPic;
            darthMaul[0].innerHTML = "";

            var luke = $("#LukeSkywalker");
            $("#skywalkerEnemy")[0].innerHTML = skywalkerPic;
            luke[0].innerHTML = "";
        }

        if (heroChosen === "DarthMaul") {

            var luke = $("#LukeSkywalker");
            $("#skywalkerEnemy")[0].innerHTML = skywalkerPic;
            luke[0].innerHTML = "";

            var palpatine = $("#DarthSidious");
            $("#sidiousEnemy")[0].innerHTML = sidiousPic;
            palpatine[0].innerHTML = "";

            var obiwanK = $("#BenKenobi");
            $("#kenobiEnemy")[0].innerHTML = kenobiPic;
            obiwanK[0].innerHTML = "";
        }


        // event.target.parentNode.parentNode.innerHTML = ""; for myself

    });




    var adam = 0;
    $("#attackButton").on("click", function () {
        if (currentGameState.playerChosen && currentGameState.enemyChosen) {
            adam++;
            console.log(adam);
        }

    });


    

    console.log("staticPlayerData name: " + ObiArray.name)
    console.log("staticPlayerData name: " + LukeArray.name)
    console.log("staticPlayerData name: " + SidousArray.name)
    console.log("staticPlayerData name: " + MaulArray.name)





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





});