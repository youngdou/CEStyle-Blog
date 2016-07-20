window.onload = drag;

function drag(event) {
	var music = document.getElementById("music");
	music.onmousedown=fndown;
}

function fndown(event) {
	event = event || window.event;
	var music=document.getElementById("music");
	var disX=event.clientX - music.offsetLeft;
	var disY=event.clientY - music.offsetTop;
	document.onmousemove = function(event) {
		event = event || window.event;
		fnMove(event, disX, disY);
	}
	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

function fnMove(event, disX, disY) {
	var music = document.getElementById("music");
	var l = event.clientX - disX;
	var t = event.clientY - disY;
	var WHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var WWidth = document.documentElement.clientWidth || document.body.clientWidth;
	var maxWid = WWidth - music.offsetWidth;
	var maxHei = WHeight - music.offsetHeight;
	if (l < 0) {
		l = 0;
	}
	else if (l >maxWid) {
		l = maxWid;
	}
	if (t < 0) {
		t = 0;
	}
	else if (t > maxHei) {
		t = maxHei;
	}
	music.style.left = l+"px";
	music.style.top = t +"px";
}