var x;
var y;

var row1 = [0,0,0,0,0,0,0];
var row2 = [0,0,0,0,5,0,0];
var row3 = [0,3,0,2,2,0,0];
var row4 = [0,2,2,2,0,0,0];
var row5 = [0,4,2,2,2,3,0];
var row6 = [0,0,0,1,0,0,0];
var row7 = [0,0,0,0,0,0,0];

var dungeonArray = [row1,row2,row3,row4,row5,row6,row7];

$( "#northButton" ).click(function() {
	$( "#choice").css("display", "initial");
	$( "#nav").css("display", "none");
});
$( "#aButton" ).click(function() {
	$( "#nav").css("display", "initial");
	$( "#choice").css("display", "none");
});

$( "#textBox" ).html(roomDsc)
$( "#aOption" ).html(aOptn)
$( "#bOption" ).html(bOptn)
$( "#cOption" ).html(cOptn)
$( "#dOption" ).html(dOptn)