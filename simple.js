var bridgePlaying = false;

document.getElementById("play-btn").onclick=function() {
	if (bridgePlaying) {
		document.getElementById("bridge").pause();
		document.getElementById("play-btn").innerHTML="Play";
		bridgePlaying = false;
	}
	else{
		bridgePlaying = true;
		document.getElementById("play-btn").innerHTML="Pause";
		document.getElementById("bridge").play();
	}
} ;

document.getElementById("speedup-btn").onclick=function(){
	document.getElementById("bridge").playbackRate +=.01;
};

document.getElementById("slowdwn-btn").onclick=function(){
	document.getElementById("bridge").playbackRate -=.01;
};