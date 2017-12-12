var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target (returns an integer)
var distance = function (x0, y0, x1, y1) {
    return Math.round(Math.hypot(x1-x0, y1-y0));
  //return Math.sqrt(Math.pow(y1-y0)+Math.pow(x1-x0));
};

var findIt = function(e) {
    //var body = document.getElementsByClassName("full");

    //console.log(color);
    var x = event.clientX;
    var y = event.clientY;
    //console.log(x);
    var away = distance(targetX, targetY, x, y);
    console.log(away);
    var body = document.getElementById("box");
    var bcolor = body.getAttribute("style");
    body.setAttribute("style", "background-color: rgb(0, 0, " + (256-away) + ");");
    //document.getElementById("box").style.background-color.innerHTML = "rgb(0,0,"+away+")";
    //body.innerHTML("background-color")
};

/*
your OTHER FXNS

*/

box.addEventListener("mousemove", findIt);

