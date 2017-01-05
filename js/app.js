/*function getBackgroundColor(argument) {
	console.log(argument);
}*/
    
function changeColorOnClick(idName) {
	console.log("HERE!!")
	var originalElementColor = document.getElementById('selectedColorName').style.backgroundColor;
	console.log(originalElementColor);
	document.getElementById(idName).style.backgroundColor = originalElementColor;
}

/*function getBackgroundColor(idName) {
	console.log(idName);
	console.log("hey")
	var element = document.getElementById(idName); 
	var style = window.getComputedStyle(element,null).getPropertyValue("background-color");
	console.log(style);
	document.getElementById('selectedColorName').style.backgroundColor = style;
}*/
 
function colorPicker(color){
	console.log(color);
	console.log(document.getElementById('inputc').value)
}

function changeColorFromPicker(idName){
	var element = document.getElementById(idName); 
	var style = document.getElementById('inputc').value;
	element.style.backgroundColor = style;
}

function fill() {
	var originalElementColor = document.getElementById('selectedColorName').style.backgroundColor;
	var gcname = document.getElementsByClassName("canvas");
	var i;
	for (i = 0; i < gcname.length; i++){
		gcname[i].style.backgroundColor = originalElementColor;
	}
}

function clearButton() {
	console.log("affaewfefewauefwfewu")
	var originalElementColor = document.getElementById('eraser').style.backgroundColor;
	var gcname = document.getElementsByClassName("canvas");
	console.log("faufahu")
	var i;
	for (i = 0; i < gcname.length; i++){
		gcname[i].style.backgroundColor = originalElementColor;
	}
}
