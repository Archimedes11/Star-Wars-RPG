$(document).ready(function () {

    //Defines two songs and a flag to be used later.
    var imperialMarch = new Audio('./assets/songs/Darth.mp3');
    var jediSong = new Audio('./assets/songs/Jedi.mp3');
    var lightsaberOn = new Audio('./assets/songs/LightsaberOn.mp3');
    flag = false;



    //Links to my pics
    var kenobiPic = '<a href="#" id="BenKenobi"><img src="./assets/images/kenobi.jpg" alt="BenKenobi"><span class="obi">Ben Kenobi</span><span class="obiHealth">120</span></a>';
    var skywalkerPic = '<a href="#" id="LukeSkywalker"><img src="./assets/images/skywalker.jpg" alt="LukeSkywalker"><span class="luke">Luke Skywalker</span><span class="lukeHealth">100</span></a>';
    var sidiousPic = '<a href="#" id="DarthSidious"><img src="./assets/images/sidious.jpg" alt="DarthSidious"><span class="sid">Darth Sidious</span><span class="sidHealth">150</span></a>';
    var maulPic = '<a href="#" id="DarthMaul"><img src="./assets/images/maul.jpg" alt="DarthMaul"><span class="darthMaul">Darth maul</span><span class="darthMaulHealth">140</span></a>';


    // Adds the pictures to the character choices divs
    $("#kenobi").append(kenobiPic);
    $("#skywalker").append(skywalkerPic);
    $("#sidious").append(sidiousPic);
    $("#maul").append(maulPic);

    //This object will be used quite often to define my characters.
    var currentGameState = {
        playerChosen: "",
        enemyChosen: "",
    }

    //This is the "Heart" of the program that holds the character data that will be needed later.
    staticPlayerData = [
        {
            name: "Ben Kenobi",
            health: 120,
            attackDmg: 8,
            counterDmg: 18,
        },
        {
            name: "Luke Skywalker",
            health: 100,
            attackDmg: 10,
            counterDmg: 8,

        },
        {
            name: "Darth Sidious",
            health: 150,
            attackDmg: 6,
            counterDmg: 10,

        },
        {
            name: "Darth Maul",
            health: 140,
            attackDmg: 8,
            counterDmg: 13,

        }
    ]

    //Creates seperate object arrays for each character of the game.
    ObiArray = staticPlayerData[0];
    LukeArray = staticPlayerData[1];
    SidiousArray = staticPlayerData[2];
    MaulArray = staticPlayerData[3];

    //Defines empty array variables for use later.
    heroArray = [];
    villianArray = [];

    //Defines variables that I will use later in resets.
    originalAttackDmg = 0;
    originalHealth = 0;
    villianHealth = 0;
    wins = 0;


    //////////////////////////////////////////////
    //  Choosing the Enemy  //////////////////////
    //////////////////////////////////////////////
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


            $(".darthMaulHealth")[0].style.background = "red";
            $(".darthMaulHealth")[0].style.color = "black";
            $(".darthMaul")[0].style.background = "red";
            $(".darthMaul")[0].style.color = "black";

            $(".sidHealth")[0].style.background = "red";
            $(".sidHealth")[0].style.color = "black";
            $(".sid")[0].style.background = "red";
            $(".sid")[0].style.color = "black";

            $(".lukeHealth")[0].style.background = "red";
            $(".lukeHealth")[0].style.color = "black";
            $(".luke")[0].style.background = "red";
            $(".luke")[0].style.color = "black";

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


            $(".darthMaulHealth")[0].style.background = "red";
            $(".darthMaulHealth")[0].style.color = "black";
            $(".darthMaul")[0].style.background = "red";
            $(".darthMaul")[0].style.color = "black";

            $(".sidHealth")[0].style.background = "red";
            $(".sidHealth")[0].style.color = "black";
            $(".sid")[0].style.background = "red";
            $(".sid")[0].style.color = "black";

            $(".obiHealth")[0].style.background = "red";
            $(".obiHealth")[0].style.color = "black";
            $(".obi")[0].style.background = "red";
            $(".obi")[0].style.color = "black";


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


            $(".darthMaulHealth")[0].style.background = "red";
            $(".darthMaulHealth")[0].style.color = "black";
            $(".darthMaul")[0].style.background = "red";
            $(".darthMaul")[0].style.color = "black";

            $(".lukeHealth")[0].style.background = "red";
            $(".lukeHealth")[0].style.color = "black";
            $(".luke")[0].style.background = "red";
            $(".luke")[0].style.color = "black";

            $(".obiHealth")[0].style.background = "red";
            $(".obiHealth")[0].style.color = "black";
            $(".obi")[0].style.background = "red";
            $(".obi")[0].style.color = "black";


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

            $(".sidHealth")[0].style.background = "red";
            $(".sidHealth")[0].style.color = "black";
            $(".sid")[0].style.background = "red";
            $(".sid")[0].style.color = "black";

            $(".lukeHealth")[0].style.background = "red";
            $(".lukeHealth")[0].style.color = "black";
            $(".luke")[0].style.background = "red";
            $(".luke")[0].style.color = "black";

            $(".obiHealth")[0].style.background = "red";
            $(".obiHealth")[0].style.color = "black";
            $(".obi")[0].style.background = "red";
            $(".obi")[0].style.color = "black";
        }

    });

    //////////////////////////////////////////////
    //  Choosing the Enemy  //////////////////////
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

            $(".obiHealth")[0].style.background = "black";
            $(".obiHealth")[0].style.color = "white";
            $(".obi")[0].style.background = "black";
            $(".obi")[0].style.color = "white";
        }

        if (villianChosen === "LukeSkywalker") {

            villianArray = LukeArray;
            villianHealth = LukeArray.health;

            var luke = $("#LukeSkywalker");
            $("#currentEnemy")[0].innerHTML = skywalkerPic;
            $("#skywalkerEnemy")[0].innerHTML = "";
            luke[0].innerHTML = "";

            $(".lukeHealth")[0].style.background = "black";
            $(".lukeHealth")[0].style.color = "white";
            $(".luke")[0].style.background = "black";
            $(".luke")[0].style.color = "white";
        }

        if (villianChosen === "DarthSidious") {

            villianArray = SidiousArray;
            villianHealth = SidiousArray.health;

            var palpatine = $("#DarthSidious");
            $("#currentEnemy")[0].innerHTML = sidiousPic;
            $("#sidiousEnemy")[0].innerHTML = "";
            palpatine[0].innerHTML = "";

            $(".sidHealth")[0].style.background = "black";
            $(".sidHealth")[0].style.color = "white";
            $(".sid")[0].style.background = "black";
            $(".sid")[0].style.color = "white";
        }

        if (villianChosen === "DarthMaul") {

            villianArray = MaulArray;
            villianHealth = MaulArray.health;

            var darthMaul = $("#DarthMaul");
            $("#currentEnemy")[0].innerHTML = maulPic;
            $("#maulEnemy")[0].innerHTML = "";
            darthMaul[0].innerHTML = "";

            $(".darthMaulHealth")[0].style.background = "black";
            $(".darthMaulHealth")[0].style.color = "white";
            $(".darthMaul")[0].style.background = "black";
            $(".darthMaul")[0].style.color = "white";
        }

    });






    //Characters are Selected and the real game begins
    $("#attackButton").on("click", function () {
        if (currentGameState.playerChosen && currentGameState.enemyChosen) {



            if ($("#currentEnemy")[0].innerHTML === '') {
                $("#attackText")[0].innerHTML = "No enemy here.";
                $("#counterText")[0].innerHTML = "";
                return;
            }

            lightsaberOn.play();



            //Changes the health of the hero depending on the enemy's counter attack.
            heroArray.health -= villianArray.counterDmg;
            // console.log("Hero health (after click): " + heroArray.health);

            console.log("Villian's health (before click): " + villianArray.health);
            //Changes the health of the villian depending on the hero's attack.
            villianArray.health -= heroArray.attackDmg;
            console.log("Villian's health (after click): " + villianArray.health);

            //Raises the attack damage of the hero as the game progresses.
            heroArray.attackDmg += originalAttackDmg;
            console.log("Hero's current attack dmg: " + heroArray.attackDmg);



            ////////////////////////////////////////////////////
            //  DYNAMICALLY UPDATES THE "HERO'S" HEALTH
            ////////////////////////////////////////////////////
            if (currentGameState.playerChosen === "BenKenobi") {
                $(".obiHealth")[0].innerHTML = '';
                $(".obiHealth").append(heroArray.health);

            }
            if (currentGameState.playerChosen === "LukeSkywalker") {
                $(".lukeHealth")[0].innerHTML = '';
                $(".lukeHealth").append(heroArray.health);
            }
            if (currentGameState.playerChosen === "DarthSidious") {
                $(".sidHealth")[0].innerHTML = '';
                $(".sidHealth").append(heroArray.health);
            }
            if (currentGameState.playerChosen === "DarthMaul") {
                $(".darthMaulHealth")[0].innerHTML = '';
                $(".darthMaulHealth").append(heroArray.health);
            }
            /////////////////////////////////////////////////////
            //   DYNAMICALLY UPDATES THE "VILLIAN'S" HEALTH
            /////////////////////////////////////////////////////
            if (currentGameState.enemyChosen === "BenKenobi") {
                $(".obiHealth")[0].innerHTML = '';
                $(".obiHealth").append(villianArray.health);
            }
            if (currentGameState.enemyChosen === "LukeSkywalker") {
                $(".lukeHealth")[0].innerHTML = '';
                $(".lukeHealth").append(villianArray.health);
            }
            if (currentGameState.enemyChosen === "DarthSidious") {
                $(".sidHealth")[0].innerHTML = '';
                $(".sidHealth").append(villianArray.health);
            }
            if (currentGameState.enemyChosen === "DarthMaul") {
                $(".darthMaulHealth")[0].innerHTML = '';
                $(".darthMaulHealth").append(villianArray.health);
            }
            //////////////////////////////////////////////////////
            //////////////////////////////////////////////////////
            //////////////////////////////////////////////////////

            //The bottom text during gameplay.
            if ((heroArray.health >= 0) && (villianArray.health >= 0)) {
                $("#attackText")[0].innerHTML = "";
                $("#attackText").append("<p>" + "You attacked " + villianArray.name + " for " + (heroArray.attackDmg - originalAttackDmg) + " damage!" + "</p>");
                $("#counterText")[0].innerHTML = "";
                $("#counterText").append("<p>" + villianArray.name + " attacked you back for  " + villianArray.counterDmg + " damage!" + "</p>");

            }

            //If you win a round.
            if ((heroArray.health >= 0) && (villianArray.health <= 0)) {

                //Fixes the text at the bottom
                $("#attackText")[0].innerHTML = "";
                $("#attackText").append("<p>" + "You have defeated " + villianArray.name + ", you can choose to fight another enemy" + "</p>");
                $("#counterText")[0].innerHTML = "";
                //Clearing the last row
                $("#currentEnemy")[0].innerHTML = "";
                //Setting the player stats back to the original
                villianArray.health = villianHealth;
                wins++;
            }

            //////////////////////////////////
            ////////////////RESET/////////////.......if you win :)
            //////////////////////////////////
            if (wins === 3 && flag === false) {
                jediSong.play();
                $("#attackText")[0].innerHTML = "<h2>Strong with you The Force is......</h2>";
                $("#counterText")[0].innerHTML = '<button id="resetButton">Reset!</button>';
                $("#counterText").on("click", "#resetButton", function () {

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
                    //Clearing the reset button.
                    $("#attackText")[0].innerHTML = "";
                    $("#counterText")[0].innerHTML = "";

                    //Setting the player stats back to the original
                    heroArray.attackDmg = originalAttackDmg;
                    heroArray.health = originalHealth;
                    villianArray.health = villianHealth;

                    //Stops "The Force Theme"
                    jediSong.pause();
                    flag = true;

                })
            }
            //////////////////////////////////
            ////////////////RESET/////////////.......if you lose :(
            //////////////////////////////////
            if (heroArray.health <= 0) {
                imperialMarch.play();
                $("#attackText")[0].innerHTML = "<h2>You have been defeated..... The Force is weak with you......</h2>";
                $("#counterText")[0].innerHTML = '<button id="resetButton">Reset!</button>';
                $("#counterText").on("click", "#resetButton", function () {

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

                    //Stops Imperial March
                    imperialMarch.pause();

                })

            }

        }

    });

});