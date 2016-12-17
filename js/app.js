/*function getBackgroundColor(argument) {
	console.log(argument);
}*/

function changeColorOnClick(idName) {
	console.log("HERE!!")
	var originalElementColor = document.getElementById('selectedColorName').style.backgroundColor;
	console.log(originalElementColor);
}

function getBackgroundColor(idName) {
	console.log("hey")
	var element = document.getElementById(idName); 
	var style = window.getComputedStyle(element,null).getPropertyValue("background-color");
	console.log(style);
	document.getElementById('selectedColorName').style.backgroundColor = style;
}	