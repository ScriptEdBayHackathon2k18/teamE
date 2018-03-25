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
    for (i2 = 0; i2 < 10; i2 ++){
      //setting class
      var box = $("<div>").attr("class","box");
      box.css("position","absolute")
      box.css("top",i*50+"px");
      box.css("left",i2*50+770+"px");
      box.css("border","solid","5px");
      box.css("width","50px");
      box.css("height","50px");
      //if character on tile
      if (grid[i][i2] === "character"){
        var pic = $("<img>").css();
        if (character === "Razzi"){
          pic.css("src","https://avatars3.githubusercontent.com/u/2244895?s=400&v=4");
        } else {
          
        }
        $("#grids").append(pic);
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

$("#shen").click(function(){
  chooseCha("Shen");
  $("#razzi").hide();
  $("#shen").hide();
  $("#Razziname").html("Shen");
});

$("#razzi").click(function(){
  chooseCha("Razzi");
  $("#shen").hide();
});

//hide buttons during selection
$("#shen, #razzi").click(function(){
  $(".button").show();
  $("#title").html("Jungle Exploration with "+character);
});
$(".button").hide();










