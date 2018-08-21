/*
1. make an array of fighters
2. give them attack, counter and HP
3. make the fighter's attack increases by the base attack everytime they attack
4. counter attack stays the same
5. first fighter chosen goes to the hero area
6. second fighter chosen goes to the villain
*/


$(document).ready(function(){
    //fighter's attributes

//created object for each characters
let duterte = {
    hp: 180,
    attack: 20,
    counterAttack: 20,
    background: $('.one').css("background", "url(assets/images/duterte.jpeg)")
};
let kim = {
    hp: 200,
    attack: 15,
    counterAttack: 20,
    background: $('.two').css("background", "url(assets/images/kim.jpg)")
};
let putin = {
    hp: 150,
    attack: 30,
    counterAttack: 30,
    background: $('.three').css("background", "url(assets/images/putin.jpg)")
};
let trump = {
    hp: 220,
    attack: 10,
    counterAttack: 20,
    background: $('.four').css("background", "url(assets/images/trump.jpg)")
};

//array of fighters
let fighters = [duterte, kim, putin, trump];
let gameStart = false;
let gameHero = false;
let heroDeath = false;
let villainDeath = false;
let hero;
let villain;
let winner;
let power;
let interval;
let deathArray = [];

$(".fighter").on("click", function() {
    if (!(gameStart) && !(gameHero)){
        gameHero = true;
        //moves a fighter from the list hero
        hero = $(this).detach().appendTo($(".hero"));
        //test
        console.log(hero);
        console.log(power);
    } else if (gameHero) {
        gameHero = false;
        gameStart = true;
        //moves a fighter to the villain
        villain = $(this).detach().appendTo(".villain");
        console.log(villain);
    }
}); 



//when a fighter is clicked an goes to either the hero or villain are
//picture changes to a gif
    $('.one').click(function(e){
        $(this).css("background", "url(assets/images/duterteg.gif)")
    });

    $('.two').click(function(e){
        $(this).css("background", "url(assets/images/kimg.gif)")
    })
    $('.three').click(function(e){
        $(this).css("background", "url(assets/images/puting.gif)")
    })
    $('.four').click(function(e){
        $(this).css("background", "url(assets/images/trumpg.gif)")
    })

    function gameReset () {
        if (heroDeath) {
            winner = villain.detach();
        }
        gameStart = false;
        gameHero = false;
        heroDeath = false;
        villainDeath = false;  
        //return all dead fighters
        for (let i = 0; i < deathArray.length; i++) {
            death[i].appendTo(".fighters");
        }
        //reset data

        //duterte
        $(".one").data("hp", duterte.hp).find(".hp").html(duterte.hp);
        $(".one").data("attack", duterte.attack);
        //kim
        $(".two").data("hp", kim.hp).find(".hp").html(kim.hp);
        $(".two").data("attack", kim.attack);
        //putin
        $(".three").data("hp", putin.hp).find(".hp").html(putin.hp);
        $(".three").data("attack", putin.attack);
        //trump
        $(".four").data("hp", trump.hp).find(".hp").html(trump.hp);
        $(".four").data("attack", trump.attack);
    }

    function checkWinner () {
        //if all villains are out
        if (deathArray.length === 3) {
            function win() {
                //something
                gameStart = false;
                winner = hero.detach();
            }

            interval = setTimeout(win, 2000);
            
        } else {
            //something
            gameHero = true;
        }
    }

    

   
    gameReset();
   

    
})



