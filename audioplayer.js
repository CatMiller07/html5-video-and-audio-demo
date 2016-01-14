if (localStorage.getItem("lastThingPlayed")){
	
	document.getElementById("audioguy").setAttribute("src",
												 localStorage.getItem("lastThingPlayed"));
}

document.getElementById("load-audio").onclick = function(){
	console.log("input file is " +  document.getElementById("source-input").value)
	document.getElementById("audioguy").setAttribute("src",
	                                    document.getElementById("source-input").value
										);
};

document.getElementById("slowdown").onclick = function() {
	document.getElementById("audioguy").playbackRate -=0.01;
};

document.getElementById("speedup").onclick = function() {
	document.getElementById("audioguy").playbackRate +=0.01;
};
document.getElementById("speedreset").onclick = function() {
	document.getElementById("audioguy").playbackRate = 1;
};