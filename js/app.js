function erase(){
	document.getElementById('inputc').value = "#ffffff";
}

function changeColorFromPicker(idName){
	var element = document.getElementById(idName); 
	var style = document.getElementById('inputc').value;
	if (element.tagName == 'SPAN') {
		element.style.color = style;
		return;
	}
	element.style.backgroundColor = style;
}

function fill() {
	var originalElementColor = document.getElementById('inputc').value;
	var gcname = document.getElementsByClassName("canvas");
	var i;
	for (i = 0; i < gcname.length; i++){
		gcname[i].style.backgroundColor = originalElementColor;
	}
}

function clearButton() {
	var originalElementColor = document.getElementById('eraser').style.backgroundColor;
	var gcname = document.getElementsByClassName("canvas");
	for (var i = 0; i < gcname.length; i++){
		gcname[i].style.backgroundColor = originalElementColor;
	}
}
