$(document).ready(function () {

    // Not sure if i need lines 4-7....
    let player;
    let enemy;
    player = "";
    count = 0;

    var kenobiPic = '<a href="#" id="BenKenobi"><img src="./assets/images/kenobi.jpg" alt="BenKenobi"></img></a>';
    var skywalkerPic = '<a href="#" id="LukeSkywalker"><img src="./assets/images/skywalker.jpg" alt="LukeSkywalker"></a>';
    var sidiousPic = '<a href="#" id="DarthSidious"><img src="./assets/images/sidious.jpg" alt="DarthSidious"></a>';
    var maulPic = '<a href="#" id="DarthMaul" ><img src="./assets/images/maul.jpg" alt="DarthMaul"></a>';

    // Adds the pictures to the character choices div (lines 26-31 in HTML file)
    $("#kenobi").append(kenobiPic);
    $("#skywalker").append(skywalkerPic);
    $("#sidious").append(sidiousPic);
    $("#maul").append(maulPic);

    // This is used on line 60
    var currentGameState = {
        playerChosen: "",
        enemyChosen: "",
    }

    staticPlayerData = [
        {
            name: "BenKenobi",
            health: 120,
            attackDmg: 8,
            counterDmg: 15,
        },
        {
            name: "LukeSkywalker",
            health: 100,
            attackDmg: 4,
            counterDmg: 5,
            
        },
        {
            name: "DarthSidious",
            health: 150,
            attackDmg: 12,
            counterDmg: 20,
            
        },
        {
            name: "DarthMaul",
            health: 180,
            attackDmg: 15,
            counterDmg: 25,
            
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




    });

    /////////////////////////////////////////////
    // choosing enemy
    //////////////////////////////////////////////
    $(".enemyPics").on("click", function () {
        currentGameState.enemyChosen = (event.target.parentNode.id);
        var villianChosen = currentGameState.enemyChosen;
        if (villianChosen === "BenKenobi") {

            var obiwanK = $("#BenKenobi");
            $("#currentEnemy")[0].innerHTML = kenobiPic;
            $("#kenobiEnemy")[0].innerHTML = "";
            obiwanK[0].innerHTML = "";
        }

        if (villianChosen === "LukeSkywalker") {

            var luke = $("#LukeSkywalker");
            $("#currentEnemy")[0].innerHTML = skywalkerPic;
            $("#skywalkerEnemy")[0].innerHTML = "";
            luke[0].innerHTML = "";
        }

        if (villianChosen === "DarthSidious") {

            var palpatine = $("#DarthSidious");
            $("#currentEnemy")[0].innerHTML = sidiousPic;
            $("#sidiousEnemy")[0].innerHTML = "";
            palpatine[0].innerHTML = "";
        }

        if (villianChosen === "DarthMaul") {

            var darthMaul = $("#DarthMaul");
            $("#currentEnemy")[0].innerHTML = maulPic;
            $("#maulEnemy")[0].innerHTML = "";
            darthMaul[0].innerHTML = "";
        }

    });








    //////////////////////////////
    /////////////////////////////
    // to be used after an enemy has been selected.
    //////////////////////////////


    var adam = 0;
    $("#attackButton").on("click", function () {
        if (currentGameState.playerChosen && currentGameState.enemyChosen) {
            adam++;
            console.log("HeroChosen: " + currentGameState.playerChosen)
            console.log("EnemyChosen: " + currentGameState.enemyChosen)
            console.log(adam);
        }

    });




    console.log("staticPlayerData name: " + ObiArray.name)
    console.log("staticPlayerData name: " + LukeArray.name)
    console.log("staticPlayerData name: " + SidousArray.name)
    console.log("staticPlayerData name: " + MaulArray.name)






    BenKenobiStats = [120, 15, 8]
    LukeSkywalkerStats = [100, 5, 4]
    DarthSidiousStats = [150, 20, 12]
    DarthMaulStats = [180, 25, 15]


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

    // event.target.parentNode.parentNode.innerHTML = ""; for myself



});