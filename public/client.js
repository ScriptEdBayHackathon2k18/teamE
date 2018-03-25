//charater variables
var charater;
var health = 0;
var food = 20;
var skills = [];//Shield,smoke,damage,item. Shen has shield, Razzi has smoke
//location variables
var x = 0;
var y = 0;
//grid variables
var grid = {};
for (var i = 1; i <= 10; i ++){
  
}

function randomInt(min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function chooseCha(character){
  if (character === "Razzi"){
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

