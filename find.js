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


var targetX = boxWidth/2;
var targetY = boxHeight/2;
/*
var targetX = boxWidth * Math.random();
var targetY = boxHeight * Math.random();
*/

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


//checks how far the cow is
var findIt = function(e) {
    var x = event.clientX;
    var y = event.clientY;
    //console.log(x);
    away = distance(targetX, targetY, x, y);
    console.log("You are " + away + " units away");
    var bcolor = box.getAttribute("style");
    //Changes the color depending on the score (red/blue/green)
    if (score%3 == 1) 
	box.setAttribute("style", "background-color: rgb(0, 0, " + (256-away) + ");");
    else if (score%3 == 2) 
	box.setAttribute("style", "background-color: rgb(0, " + (256-away) + ", 0);");
    else
	box.setAttribute("style", "background-color: rgb(" + (256-away) + ", 0, 0);");
    //console.log(bcolor);

    /*var mooFont = box.getAttribute("h1");
    var mooHTML = document.getElementsByClassName("full");
    box.setAttribute("h1","moo");
    box.setAttribute("h1","document.write('moo')");
    console.log(mooFont); */
    //goal(away));
};


var score = 0;

//increases score when cow is found
var addScore = function(e){
    if (away < 20) {
	score += 1;
	console.log("Your score is now " + score);
    }
    else{
	console.log("Not here!");
    }
}



//Helper method that gives a congratulations when the mouse is close enough to the goal
var goal = function(e) {
    if (away < 20) {
        console.log("Cow found!");
        var body = document.getElementsByClassName("full");
	targetX = Math.random() * boxWidth;
	targetY = Math.random() * boxHeight;
	

    }
    
}


var imgDisplay = function(e){
    if (away < 20){
	var x = document.createElement("IMG");
	x.setAttribute("src", "funicular.jpg");
	document.body.appendChild(x);
	box.innerHTML = x;
	console.log(x);
    }
    else{
	box.innerHTML = "";
    }
}


//gives visual to show user that cow is in the area.

var msgDisplay = function(e){
    	box.innerHTML = "COW";
    if (away < 20){
	box.style.fontSize = "30px";
	//console.log("COW");
    }
    else if (away < 30){
	box.style.fontSize = "20px";
    }
    else if (away < 40){
	box.style.fontSize = "10px";
    }
    else{
	box.style.fontSize = "5px";
    }
}



box.addEventListener("mousemove", findIt); //distance for console

box.addEventListener("click", addScore); //adds score

box.addEventListener("click", goal); //changes coordinate of cow and tells you that cow is found

box.addEventListener("mousemove", msgDisplay); //gives visual hint of where the cow is by displaying a word

