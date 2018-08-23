/*
1. make an array of fighters
2. give them attack, counter and HP
3. make the fighter's attack increases by the base attack everytime they attack
4. counter attack stays the same
5. first fighter chosen goes to the hero area
6. second fighter chosen goes to the villain
*/

//array of fighters
let fighters = {
    'RODRIGO DUTERTE': {
        name: 'RODRIGO DUTERTE',
        hp: 200,
        attack: 10,
        counterAttack: 20,
        background: $('.one').css("background", "url(assets/images/duterte.jpeg)"),
        gif: ("background", "url(assets/images/duterteg.gif)"),
        dead: ("background", "url(assets/images/dutertex.jpeg)")
    },
    'KIM JONG UN': {
        name: 'KIM JONG UN',
        hp: 210,
        attack: 10,
        counterAttack: 20,
        background: $('.two').css("background", "url(assets/images/kim.jpg)"),
        gif: ("background", "url(assets/images/kimg.gif)"),
        dead: ("background", "url(assets/images/kimx.jpg)")
    },
    'VLADIMIR PUTIN': {
        name: 'VLADIMIR PUTIN',
        hp: 170,
        attack: 12,
        counterAttack: 30,
        background: $('.three').css("background", "url(assets/images/putin.jpg)"),
        gif: ("background", "url(assets/images/puting.gif)"),
        dead: ("background", "url(assets/images/putinx.jpg)")
    },
    'DONALD TRUMP': {
        name: 'DONALD TRUMP',
        hp: 220,
        attack: 7,
        counterAttack: 20,
        background: $('.four').css("background", "url(assets/images/trump.jpg)"),
        gif: ("background", "url(assets/images/trumpg.gif)"),
        dead: ("background", "url(assets/images/trumpx.jpg)")
    }
}

//conditional arrays
let gameStart = false;
let gameHero = false;
let heroDeath = false;
let villainDeath = false;
let hero;
let villain;
let winner;
let heroHp;
let heroHpUpdate;
let villainHp;
let villainHpUpdate;
let heroAttack;
let villainAttack;
let interval;
let enemyCounter = 0;

/************************************************************************************************************************************* */

//display name and hp
//Duterte
document.querySelector('.rd').innerText = fighters['RODRIGO DUTERTE'].name;
document.querySelector('.hpd').innerText = fighters['RODRIGO DUTERTE'].hp;
//Kim
document.querySelector('.kju').innerText = fighters['KIM JONG UN'].name;
document.querySelector('.hpk').innerText = fighters['KIM JONG UN'].hp;
//Putin
document.querySelector('.vp').innerText = fighters['VLADIMIR PUTIN'].name;
document.querySelector('.hpp').innerText = fighters['VLADIMIR PUTIN'].hp;
//Trump
document.querySelector('.dt').innerText = fighters['DONALD TRUMP'].name;
document.querySelector('.hpt').innerText = fighters['DONALD TRUMP'].hp;

/*************************************************************************************************************************************** */

$(document).ready(function () {


    //gamereset
    function gameReset() {
        gameStart = false;
        gameHero = false;
        heroDeath = false;
        villainDeath = false;
        hero;
        villain;
        enemyCounter = 0;
        heroHp;
        villainHp;

        //duterte
        document.querySelector('.rd').innerText = fighters['RODRIGO DUTERTE'].name;
        document.querySelector('.hpd').innerText = fighters['RODRIGO DUTERTE'].hp;
        //Kim
        document.querySelector('.kju').innerText = fighters['KIM JONG UN'].name;
        document.querySelector('.hpk').innerText = fighters['KIM JONG UN'].hp;
        //Putin
        document.querySelector('.vp').innerText = fighters['VLADIMIR PUTIN'].name;
        document.querySelector('.hpp').innerText = fighters['VLADIMIR PUTIN'].hp;
        //Trump
        document.querySelector('.dt').innerText = fighters['DONALD TRUMP'].name;
        document.querySelector('.hpt').innerText = fighters['DONALD TRUMP'].hp;
    }

    //first fighter clicked goes to hero, second goes to villain
    $(".fighter").on("click", function () {
        if (gameHero !== true) {

            //give us the hero and provide it with 'hero' class and remove fighter class
            //to prevent it from being clicked twice

            gameHero = true;
            hero = $(this).find(".fighter, .name").text()
            $(this).detach().appendTo('.hero')
            $(this).addClass('hero')
            $(this).removeClass('fighter')
            $(this).css('background', fighters[hero].gif); //changes the image of the hero to a gif
            $(this).find('.hp').addClass('hhp');
            heroHp = fighters[hero].hp;
            heroAttack = fighters[hero].attack;
            //test
            console.log(hero);
            console.log(heroHp);
            console.log(heroAttack);

        } else if (gameStart !== true) {

            //give us the villain and provide it with 'villain' class and remove fighter class
            //to prevent it from being clicked twice

            gameStart = true;
            villain = $(this).find(".fighter, .name").text()
            $(this).detach().appendTo('.villain')
            $(this).addClass('villain')
            $(this).removeClass('fighter')
            $(this).css('background', fighters[villain].gif); //changes the image of the villain to a gif instead
            $(this).find('.hp').addClass('vhp');
            villainHp = fighters[villain].hp;
            villainAttack = fighters[villain].counterAttack;
            $(this).find("span.hp").text(villainHp);
           

            console.log(villain);//test
            console.log(villainHp);//test
            console.log(villainAttack);//test
        }

    });

    //function to remove the dead villain and create a new element that the next chosen villain will go to
    function moveToVillainDeathArea() {
        $('.villain').addClass('dead').removeClass('.villain');
        $('.dead').detach();
        $(".villaincol").append("<a class='imgHolder villain d-flex align-items-center'></a>");

        //test
        console.log('move villain to dead villain area')
    }


    //counter to check if won
    function checkIfWon() {
        if (enemyCounter === 3) {
            window.location.href = "win.html";
        }
    }

    //give us conditions of you win or lose
    function checkHp() {
        if (heroHp <= 0) {
            window.location.href = "game-over.html";
        } else if (villainHp <= 0) {
            moveToVillainDeathArea();
            gameStart = false;
            villain = null;
            enemyCounter++;
            checkIfWon();
            //test
            console.log("villain defeated")
        }
    };




    //fight
    $(".nuke").on("click", function () {
        if (hero != null && villain != null) {
            //test
            console.log("FIGHT");

            villainHp -= heroAttack;
            heroAttack += heroAttack;
            heroHp -= villainAttack;
            checkHp();
            document.querySelector('.hhp').innerText = heroHp;
            document.querySelector('.vhp').innerText = villainHp;
            //test
            console.log(heroHp);
            console.log(heroAttack);
            console.log("vs");
            console.log(villainHp);
            console.log(villainAttack);
        }
    })



})

