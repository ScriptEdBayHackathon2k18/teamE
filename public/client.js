//charater variables
var character = "";
var health = 10;
var food = 30;
var strength = 1;
var skills = [];//Shield,smoke,damage,item. Shen has shield, Razzi has smoke
//location variables
var x = 0;
var y = 0;
//grid variables
//set up the grid
var grid = new Array(10);
for (var i = 0; i < 10; i ++){
  grid[i] = new Array(10);
}
for (i = 0; i < 10; i ++){
  for (var i2 = 0; i2 < 10; i2 ++){
    grid[i][i2] = "empty";
  }
}
//cheetah position
var cx = randomInt(1,9);
var cy = randomInt(1,9);
var Chealth = 1;
var encounter = false;
var defeatedTimes = 0;
$("#chealth").hide();

//functions
function randomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function say(text){
  $("#message").text(text);
}

function add(text){
  $("#message").append("<br"+text);
}

function r(){
  character = "Razzi";
  chooseCha(character);
  $(".container").css("background","white");

}
function s(){
  character="Shen";
  chooseCha(character);
  $(".container").css("background","white");
}

//draws the grid
function draw(){
  //erase all stuff inside grid
  $("#grids").html("");
  for(i = 0; i < 10;i++){
    for (i2 = 0; i2 < 10; i2 ++){
      //setting class
      var box = $("<div>").attr("class","box");
      box.css("position","absolute");
      box.css("top",i*55+90+"px");
      box.css("left",i2*55+770+"px");
      box.css("border","solid","1px");
      box.css("width","50px");
      box.css("height","50px");
      if (grid[i][i2] === "destroy"){
        box.css("color","red");
      }
      //if character on tile
      if (i === y && i2 === x){
        var pic = $("<img>").css("left",i2*55+770+"px");
        pic.css("position","absolute");
        pic.css("top",i*55+90+"px");
        pic.css("width","50px");
        pic.css("height","50px");
        if (character === "Razzi"){
          pic.attr("src","https://avatars3.githubusercontent.com/u/2244895?s=400&v=4");
        } else {
          pic.attr("src","https://avatars1.githubusercontent.com/u/3596778?s=460&v=4");
        }
        $("#grids").append(pic);
        console.log(character);
      }
      //if cheetah on tile
      if (i === cy && i2 === cx && encounter === true){
        var pic2 = $("<img>").css("left",i2*55+770+"px");
        pic2.css("position","absolute");
        pic2.css("top",i*55+90+"px");
        pic2.css("width","50px");
        pic2.css("height","50px");
        pic2.attr("src","https://dg2d3wxprq381.cloudfront.net/cms/sites/default/files/header-cheetah-sperka.jpg?itok=0AGjZLOP");
        $("#grids").append(pic2);
      }
      //add the box
      $("#grids").append(box);
    }
  }
}
//choose the character
function chooseCha(cha){
  character = cha;
  if (cha === "Razzi"){
    skills.push("smoke");
  } else {
    skills.push("shield");
  }
  if (randomInt(0,1) === 0){
    skills.push("damage");
  } else {
    skills.push("item");
  }
  grid[0][0] = "character";
}

//random function when get to empty space
function randoming(){
  var a = randomInt(0,10);
  if (a === 0){
    say("The sun is too hot so you eat another piece of food, but the extra food give you strength!");
    health += 2;
    food --;
  }
  if (a === 1){
    say("The wind is too strong and it's making you cold so you eat another piece of food");
    food --;
  }
  if (a === 2){
    say("The sun is too hot so you eat another piece of food");
    food --;
  }
  if (a === 3){
    say("You find another piece of food");
    food += 3;
  }
  if (a === 4){
    say("You find another piece of food, and you get a healing pack!");
    food ++;
    health += 2;
  }
  if (a === 5){
    say("You find a spear and increase a strength!");
    strength ++;
  }
  if (a === 6){
    say("The animals stole a piece of your food");
    food --;
  }
  if (a === 7){
    say("You lost a piece of food");
    food --;
  }
  if (a === 8){
    say("You prayed for food. Some food spawned right before your eyes");
    food ++;
  }
  if (a === 9){
    say("Food is good and you save a piece for later!");
    food ++;
  }
  if (a === 10){
    say("The food in front of you is extremely tempting to eat so you eat it!");
    food --;
  }
}

$("#shen").click(function(){
  chooseCha("Shen");
  $("#title").html("Exploring The Jungle with "+character);
  //$("#razzi").hide();
  //$("#shen").hide();
  //$("#Razziname").html("Shen");
});

$("#razzi").click(function(){
  chooseCha("Razzi");
  $("#title").html("Exploring The Jungle with "+character);
  //$("#shen").hide();
});

//clear background and call draw
if(character!==""){
$(".container").css("background","white");
}
//direction
function north(){
  y -= 1;
}

function south(){
  y += 1;
}

function west(){
  x -= 1;
}

function east(){
  x += 1;
}

$(".button").click(function(){
  var direction = $(this).attr("id");
  //direction = direction.substr(1,direction.length);
  console.log(direction);
  var x 
  if (direction === "destroy"){
    destroy();
    return;
  }
  if (direction === "north" && y > 0){
    north();
    food --;
  }
  if (direction === "south" && y < 9){
    south();
    food --;
  }
  if (direction === "west" && x > 0){
    west();
    food --;
  }
  if (direction === "east" && x < 9){
    east();
    food --;
  }
  if (grid[x][y] === "empty"){
    randoming();
  } else if (grid[x][y] === "destroy"){
    say("All you see is a ruin in the vast jungle,");
  }
  //if encounter the cheetah 
  if (x === cx && y === cy ){
    encounter = true;
    say(character+" encounters the cheetah!");
    battle();
  }
  //if the food reaches 0
  if (food <= 0){
    $("#north").prop( "disabled", true );
    $("#south").prop( "disabled", true );
    $("#east").prop( "disabled", true );
    $("#west").prop( "disabled", true );
    $("#destroy").prop( "disabled", true );
    say("No!You are out of food! Game Over!");
  }
  if (encounter === true){
    running();
  }
  
  draw();
});

function destroy(){
  if (grid[y][x] !== "destroy") {
    grid[y][x] = "destroy";
    say("You destroy a place! You also get some food for gathering in that place.");
    food += 3;
  } else {
    say("The tile is already destroyed!");
  }
}

setInterval(function(){
  $("#food").text("Food: "+food); // <div id="food">Food</div>
  $("#health").text("Health: "+health);
  $("#str").text("Strength: "+strength);
  $("#chealth").text("Cheetah Health: "+Chealth);
},100);


//status count

  
//battle system
//cheetah running
function running(){
  var direction = [];
  if (cx < 9){
    direction.push("right");
  }
  if (cx > 0){
    direction.push("left");
  }
  if (cy < 9){
    direction.push("down");
  }
  if (cy > 0){
    direction.push("up");
  }
  if (direction.length > 0){
    var way = direction[randomInt(0,direction.length)];
    if (way === "right"){
      cx ++;
    }
    if (way === "left"){
      cx --;
    }
    if (way === "down"){
      cy ++;
    }
    if (way === "up"){
      cy --;
    }
    
  } else {
    return;
  }
}

// cheetah attack
function attack(){
  var dmg = randomInt(1,4);
  health -= dmg;
  add("The cheetah attacks you and you take "+dmg+" damage!");
  if(health <= 0){
    BG();
  }
}

function battle(){
$("#chealth").show();
var result ="";
Chealth = randomInt(10,15);
$(".button").hide();
$(".Bbuttons").show();
}

$("#attack").click(function(){
  Chealth -= strength;
  say("You attack the cheetah and it takes "+strength+" damage!");
  if(Chealth > 0){
    attack();
  }
  
  if (Chealth <= 0){
      say("You defeated the cheetah and the cheetah run away!");
      defeatedTimes += 1;
      cx = randomInt(0,9);
      cy = randomInt(0,9);
      $(".Bbuttons").hide();
      $(".button").show();
      $("#chealth").hide();
      draw();
      if(defeatedTimes >= 3){
        say("GG, you won the game as "+character+"!");
        $(".Bbuttons").hide();
        $(".button").hide();
      }
  }
});

$("#escape").click(function(){
  $(".Bbuttons").hide();
  $(".button").show();
  say("You escaped! The cheetah can't find you and run away too!");
  cx = randomInt(0,9);
  cy = randomInt(0,9);
  $("#chealth").hide();
  draw();
});


function BG(){
  $(".Bbuttons").hide();
  $(".button").hide();
  say(character+" had been defeated by the cheetah!");
}

