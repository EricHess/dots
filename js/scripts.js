

/*
Set up grid of dots (10x10 to start)
Need 2 players (or more?)
Turn taking mechanism
Logic to determine finished square
Scoring
*/


//set up grid of dots
//get info from popups

//grid object which holds boxes
var grid = function(x,y){

  this.x = x
  this.y = y
  this.parentContain = document.getElementById("mainContain");

  this.createGrid = function(){
    var $this = this;
    var boxNum = this.x * this.y;
    for (var i=0; i<boxNum; i++){
      $this.parentContain.appendChild(new box(i));
    }
  };

  this.createGrid();
};

//box object
var box = function(count){
  var box = document.createElement("div");
  box.classList.add("box"+count);
  return box;
};

//clickobject 
var clicking = function(){
  this.enabledBox = document.querySelectorAll("div[class^='box']");
  var $this =this;

  for (var i = 0;i < $this.enabledBox.length;i++){

  $this.enabledBox[i].addEventListener("click", function(e){
   console.log(e.offsetY) 
   console.log(e.offsetX) 
   e.target.classList.add("rightClick");
  });


  }

}

//click helper
function clickedElement(e,el){
  console.log(el.classList);  
};

//make sure elements are there 
window.onload = function(){
  new grid(10,10);
  new clicking();
};