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