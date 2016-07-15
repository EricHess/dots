

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
    console.log(e)
    $this.testClickedArea(e.offsetX, e.offsetY);

   //need logic to determine which triangle quadrant was clicked and add border
   //need to move this out to a helper

  });


  }

  this.testClickedArea = function(x,y){
    // x/y > 1 && (y-250) / x > 1
    //Y is up and down
    //X is left to right
    var NQuad = ((x/y) > 1 && ((x-250) / y) > 1) ? true : false;
    
    var SQuad = ((y/x) > 1 && x < 24) ? true : false;
    
    var EQuad = ((y/x) > 1 && x < 24) ? true : false;
    
    var WQuad = ((y/x) > 1 && x < 24) ? true : false;

      console.log("x: "+x+" y: "+y);
      console.log("x / y = "+x/y);
      console.log("y-x / 250 = "+(x-250) / y)

      if(NQuad){
        console.log('top triangle')
      }
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