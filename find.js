var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
  return sqrt(Math.pow(y1-y0)+Math.pow(x1-x0));
};


var findIt = function(e) {
    var body = document.getElementsByClassName("full");
    console.log(e.X);
    console.logg(e.Y);
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

