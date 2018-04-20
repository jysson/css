var arrow = document.getElementById("arrow");
var contImg = document.getElementById("contImg");
var spanO = document.getElementById("spanO");
var onOff;
arrow.onmousedown = function() {
	var btnE = window.event || arguments[0];
	var currentClientX = btnE.clientX;
	var currentOffsetX = btnE.offsetX;
	arrow.style.backgroundColor = "rgb(65,91,124)";
	onOff = true;
	document.onmousemove = function() {
		var docE = window.event || arguments[0];
		var moveClientX = docE.clientX;
		if(onOff == true && 318<=moveClientX && moveClientX<=1048) {
			arrow.style.left = moveClientX - 293  + "px"; 
			contImg.style.width = moveClientX - 293  + "px";
		}	
	}
}
document.onmouseup = function() {
	onOff = false;
	arrow.style.backgroundColor = "rgb(229,125,124)";
}
