function loadRoom(){

	var url = dungeonArray[x][y].roomString;
	$.getScript(url, function(){

   		alert("Script loaded but not necessarily executed.");

	});

	$( "#textBox" ).html(roomDsc);
	$( "#aOption" ).html(aOptn);
	$( "#bOption" ).html(bOptn);
	$( "#cOption" ).html(cOptn);
	$( "#dOption" ).html(dOptn);
}

function move(_direction){ // 1 = N, 2 = E, 3 = S, 4 W,

	if(_direction == 1){
		if(dungeonArray[(x-1)][y].ID != 0){
			x--;
 			alert("N");
		}
	}
	if(_direction == 2){
		if(dungeonArray[x][(y+1)].ID != 0){
			y++;
 			alert("E");
		}
	}
	if(_direction == 3){
		if(dungeonArray[(x-1)][y].ID != 0){
			x++;
 			alert("S");
		}
	}
	if(_direction == 4){
		if(dungeonArray[x][(y-1)].ID != 0){
			y--;
 			alert("W");
		}
	}
	
	loadRoom();

}

$( "#aButton" ).click(function() {
	$( "#nav").css("display", "initial");
	$( "#choice").css("display", "none");
});
$( "#bButton" ).click(function() {
	$( "#nav").css("display", "initial");
	$( "#choice").css("display", "none");
});
$( "#cButton" ).click(function() {
	$( "#nav").css("display", "initial");
	$( "#choice").css("display", "none");
});
$( "#dButton" ).click(function() {
	$( "#nav").css("display", "initial");
	$( "#choice").css("display", "none");
});


$( "#northButton" ).click(function() {
	move(1);
	$( "#choice").css("display", "initial");
	$( "#nav").css("display", "none");
});
$( "#eastButton" ).click(function() {
	move(2);
	$( "#choice").css("display", "initial");
	$( "#nav").css("display", "none");
});
$( "#southButton" ).click(function() {
	move(3);
	$( "#choice").css("display", "initial");
	$( "#nav").css("display", "none");
});
$( "#westButton" ).click(function() {
	move(4);
	$( "#choice").css("display", "initial");
	$( "#nav").css("display", "none");
});

loadRoom();