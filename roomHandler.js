var x;
var y;

var roomID;

function Room(_x, _y, _ID, _s){
	this.x = _x;
	this.y = _y;
	this.ID = _ID;
	this.state = _s;
	this.roomString = makeRoomString(_ID, _s);
}

function makeRoomString(_ID, _s){
	var str;

	if (_ID == 1){
		str = "start"
	}
	else{
		str = ("R" + _ID);
	}

	str = ("rooms/" + str + "S" + _s + ".js");
	return str;
}

function makeRoomString(_ROOM){
	var str;

	ID = _ROOM.ID;
	s = _ROOM.state;

	if (ID == 1){
		str = "start"
	}
	else{
		str = ("R" + ID);
	}

	str = ("rooms/" + str + "S" + s + ".js");
	return str;
}

var row1 = [0,0,0,0,0,0,0];
var row2 = [0,0,0,0,5,0,0];
var row3 = [0,3,0,2,2,0,0];
var row4 = [0,2,2,2,0,0,0];
var row5 = [0,4,2,2,2,3,0];
var row6 = [0,0,0,1,0,0,0];
var row7 = [0,0,0,0,0,0,0];

var dungeonArray = [row1,row2,row3,row4,row5,row6,row7];

for (var i = 0; i < dungeonArray.length; i++){
	for (var j = 0; j < row1.length; j++){
		if(dungeonArray[i][j] == 1){
			x = i;
			y = j;
		}
		dungeonArray[i][j] = new Room(i, j, dungeonArray[i][j], 0);
	}
}