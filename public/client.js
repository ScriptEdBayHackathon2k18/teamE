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

//draws the grid
function draw(){
  for(i = 0; i < 10;i++){
    for (i2 = 0; i < 10; i ++){
      //styling the box
      var box = $("<div>").attr("class","box");
      if (grid[i][i2] === "empty"){
        box.css("position","relative")
        box.css("left","20px");
        box.css("border","solid","5px");
        box.css("width","20px");
        box.css("height","20px");
      }
      //add the box
      $("#right").append(box);
    }
    $("#right").append("<br>");
  }
}
draw();
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
}

$("#shen").click(function(){
  chooseCha("Shen");
  alert(character);
});

$("#razzi").click(function(){
  chooseCha("Razzi");
  alert(character);
});

//hide buttons during selection
$("")
if (character===""){
  $(".button").hide();
}else{
  $(".button").show();
}











