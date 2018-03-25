//charater variables
var character = "";
var health = 0;
var food = 20;
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

//functions
function randomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function r(){
  character = "Razzi";
}
function s(){
character
}

//draws the grid
function draw(){
  //erase all stuff inside grid
  $("#grids").html("");
  for(i = 0; i < 10;i++){
    for (i2 = 0; i2 < 10; i2 ++){
      //setting class
      var box = $("<div>").attr("class","box");
      box.css("position","absolute")
      box.css("top",i*50+"px");
      box.css("left",i2*50+770+"px");
      box.css("border","solid","1px");
      box.css("width","50px");
      box.css("height","50px");
      //if character on tile
      if (i === y && i2 === x){
        var pic = $("<img>").css("left",i2*50+770+"px");
        pic.css("position","absolute");
        pic.css("top",i*50+"px");
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
  if (direction === "north" && y > 0){
    north();
  }
  if (direction === "south" && y < 9){
    south();
  }
  if (direction === "west" && x > 0){
    west();
  }
  if (direction === "east" && x < 9){
    east();
  }
  if (grid[x][y] === "empty"){
    randoming();
  }
  draw();
});











