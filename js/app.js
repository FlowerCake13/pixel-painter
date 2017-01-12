function changeColorOnClick(idName) {
	var originalElementColor = document.getElementById('selectedColorName').style.backgroundColor;
	console.log(originalElementColor);
	document.getElementById(idName).style.backgroundColor = originalElementColor;
}

function erase(){
	document.getElementById('inputc').value = "#ffffff";
}

function changeColorFromPicker(idName){
	var element = document.getElementById(idName); 
	var style = document.getElementById('inputc').value;
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
