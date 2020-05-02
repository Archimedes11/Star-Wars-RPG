$(document).ready(function () {




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
            name: "Ben Kenobi",
            health: 120,
            attackDmg: 8,
            counterDmg: 15,
        },
        {
            name: "Luke Skywalker",
            health: 100,
            attackDmg: 4,
            counterDmg: 5,

        },
        {
            name: "Darth Sidious",
            health: 150,
            attackDmg: 12,
            counterDmg: 20,

        },
        {
            name: "Darth Maul",
            health: 180,
            attackDmg: 15,
            counterDmg: 25,

        }
    ]

    ObiArray = staticPlayerData[0];
    LukeArray = staticPlayerData[1];
    SidiousArray = staticPlayerData[2];
    MaulArray = staticPlayerData[3];
    heroArray = [];
    villianArray = [];
    originalAttackDmg = 0;
    originalHealth = 0;
    villianHealth = 0;


    if (true) {
        // Decides who is the "hero" and who are the potential enemies
        $(".characterPics").on("click", function () {
            currentGameState.playerChosen = (event.target.parentNode.id);
            var heroChosen = currentGameState.playerChosen;
            if (heroChosen === "BenKenobi") {

                heroArray = ObiArray;
                originalAttackDmg = heroArray.attackDmg;
                originalHealth = heroArray.health;

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

                heroArray = LukeArray;
                originalAttackDmg = heroArray.attackDmg;
                originalHealth = heroArray.health;

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

                heroArray = SidiousArray;
                originalAttackDmg = heroArray.attackDmg;
                originalHealth = heroArray.health;

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

                heroArray = MaulArray;
                originalAttackDmg = heroArray.attackDmg;
                originalHealth = heroArray.health;

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

                villianArray = ObiArray;
                villianHealth = ObiArray.health;

                var obiwanK = $("#BenKenobi");
                $("#currentEnemy")[0].innerHTML = kenobiPic;
                $("#kenobiEnemy")[0].innerHTML = "";
                obiwanK[0].innerHTML = "";
            }

            if (villianChosen === "LukeSkywalker") {

                villianArray = LukeArray;
                villianHealth = LukeArray.health;

                var luke = $("#LukeSkywalker");
                $("#currentEnemy")[0].innerHTML = skywalkerPic;
                $("#skywalkerEnemy")[0].innerHTML = "";
                luke[0].innerHTML = "";
            }

            if (villianChosen === "DarthSidious") {

                villianArray = SidiousArray;
                villianHealth = SidiousArray.health;

                var palpatine = $("#DarthSidious");
                $("#currentEnemy")[0].innerHTML = sidiousPic;
                $("#sidiousEnemy")[0].innerHTML = "";
                palpatine[0].innerHTML = "";
            }

            if (villianChosen === "DarthMaul") {

                villianArray = MaulArray;
                villianHealth = MaulArray.health;

                var darthMaul = $("#DarthMaul");
                $("#currentEnemy")[0].innerHTML = maulPic;
                $("#maulEnemy")[0].innerHTML = "";
                darthMaul[0].innerHTML = "";
            }

        });
    }







    //////////////////////////////
    /////////////////////////////
    // to be used after an enemy has been selected.
    //////////////////////////////



    
    $("#attackButton").on("click", function () {
        // var round = 0; not sure why this doesnt work.



        if (currentGameState.playerChosen && currentGameState.enemyChosen) {

             
            console.log("Hero's beginning attack dmg: " + originalAttackDmg);

            console.log("Hero health (before click): " + heroArray.health);
            console.log("Villian's counter dmg: " + villianArray.counterDmg)
            heroArray.health -= villianArray.counterDmg;
            console.log("Hero health (after click): " + heroArray.health);

            console.log("Villian's health (before click): " + villianArray.health);
            villianArray.health -= heroArray.attackDmg;
            console.log("Villian's health (after click): " + villianArray.health);

            heroArray.attackDmg += originalAttackDmg;
            console.log("Hero's current attack dmg: " + heroArray.attackDmg);

            if ((heroArray.health >= 0) && (villianArray.health >= 0)) {
                $("#attackText")[0].innerHTML = "";
                $("#attackText").append("You attacked " + villianArray.name + " for " + (heroArray.attackDmg - originalAttackDmg) + " damage!");
                $("#counterText")[0].innerHTML = "";
                $("#counterText").append("" + villianArray.name + " attacked you back for  " + villianArray.counterDmg + " damage!");

            }

            ////////////////RESET/////////////
            if (heroArray.health <= 0) {
                $("#attackText")[0].innerHTML = "<h2>You have been defeated..... The Force is weak with you......</h2>";
                $("#counterText")[0].innerHTML = '<button id="resetButton">Reset!</button>';
                $("#counterText").on("click", "#resetButton", function () {
                    console.log("Reset has been Pushed")// delete later
                    //Clearing the first row.
                    $("#kenobi")[0].innerHTML = "";
                    $("#skywalker")[0].innerHTML = "";
                    $("#sidious")[0].innerHTML = "";
                    $("#maul")[0].innerHTML = "";
                    //Adding the original pictures.
                    $("#kenobi").append(kenobiPic);
                    $("#skywalker").append(skywalkerPic);
                    $("#sidious").append(sidiousPic);
                    $("#maul").append(maulPic);
                    //Clearing the second row.
                    $("#kenobiEnemy")[0].innerHTML = "";
                    $("#skywalkerEnemy")[0].innerHTML = "";
                    $("#sidiousEnemy")[0].innerHTML = "";
                    $("#maulEnemy")[0].innerHTML = "";
                    //Clearing the last row
                    $("#currentEnemy")[0].innerHTML = "";
                    //Clearing the reset button.
                    $("#attackText")[0].innerHTML = "";
                    $("#counterText")[0].innerHTML = "";

                    //Setting the player stats back to the original
                    heroArray.attackDmg = originalAttackDmg;
                    heroArray.health = originalHealth;
                    villianArray.health = villianHealth;







                    // reset our variables back to emtpy strings and zeroes
                    // move your HTML back to the way it was at the beginning
                })
                
            }
            //add styling to anchor tags: border, text,



            // round+=1;
            // console.log("HeroChosen: " + currentGameState.playerChosen)
            // console.log("EnemyChosen: " + currentGameState.enemyChosen)
            // console.log("Round # ") + (round); not sure why this doesnt work.

            // console.log("hero name test: " + heroArray.name)
            // console.log("hero health test: " + heroArray.health)
            // console.log("hero attackDmg test: " + heroArray.attackDmg)


            // console.log("villian name test: " + villianArray.name)
            // console.log("villian health test: " + villianArray.health)
            // console.log("villian counterDmg test: " + villianArray.counterDmg)

        }

    });















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