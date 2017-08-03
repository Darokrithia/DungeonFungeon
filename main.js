function loadRoom(){

	var url = makeRoomString(dungeonArray[x][y]);
	document.getElementById("room").src = url;

	$( "#textBox" ).html(roomDsc);
	$( "#aOption" ).html(aOptn);
	$( "#bOption" ).html(bOptn);
	$( "#cOption" ).html(cOptn);
	$( "#dOption" ).html(dOptn);
}

function move(_direction){ // 1 = N, 2 = E, 3 = S, 4 W,

	if(_direction = 1){
		if(dungeonArray[x][(y-1)].ID != 0){
			y--;
		}
	}
	if(_direction = 2){
		if(dungeonArray[x][(x+1)].ID != 0){
			x++;
		}
	}
	if(_direction = 3){
		if(dungeonArray[x][(y+1)].ID != 0){
			y++;
		}
	}
	if(_direction = 4){
		if(dungeonArray[x][(x-1)].ID != 0){
			x--;
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