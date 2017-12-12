/*
    fantastic-funicular
	Irene Lam and Yuyang Zhang
	SoftDev1 pd7
	K17 -- Moo?
	2017-12-12
*/

var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random() * boxWidth;//boxWidth / 2;
var targetY = Math.random() * boxHeight;//boxHeight / 2;
var away = 30;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target (returns an integer)
var distance = function (x0, y0, x1, y1) {
    return Math.round(Math.hypot(x1-x0, y1-y0));
  //return Math.sqrt(Math.pow(y1-y0)+Math.pow(x1-x0));
};

var findIt = function(e) {
    var x = event.clientX;
    var y = event.clientY;
    //console.log(x);
    away = distance(targetX, targetY, x, y);
    console.log("You are " + away + " units away");
    var bcolor = box.getAttribute("style");
    box.setAttribute("style", "background-color: rgb(0, 0, " + (256-away) + ");");
    //goal(away));
};


//Helper method that gives a congratulations when the mouse is close enough to the goal
var goal = function(e) {
    if (away < 20) {
        console.log("Congratulations!");
        var body = document.getElementsByClassName("full");
        body[0].innerHTML = "Congratulations! You've successfully found the (hidden) cow!";
    }
}
box.addEventListener("mousemove", findIt);
box.addEventListener("click", goal);

