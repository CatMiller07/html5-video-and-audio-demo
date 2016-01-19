var inputFile =  document.getElementById("source-input");

console.log("input File : "+inputFile.files[0]);
if (typeof(Storage) !== "undefined"){
	 //store
    localStorage.setItem("lastThingPlayed",inputFile.files[0] );
	document.getElementById("audioguy").setAttribute("src",
												 localStorage.getItem("lastThingPlayed"));
}

document.getElementById("load-audio").onclick = function(){
	console.log("input file is " +  document.getElementById("source-input").value)
	document.getElementById("audioguy").setAttribute("src",
	                                   localStorage.getItem("lastThingPlayed")
										);
};

document.getElementById("slowdown").onclick = function() {
	alert("I'm now slowing down");
	document.getElementById("audioguy").playbackRate -=0.01;
};

document.getElementById("speedup").onclick = function() {
	alert("I'm now speeding up");
	document.getElementById("audioguy").playbackRate +=0.01;
};
document.getElementById("speedreset").onclick = function() {
	alert("I'm now resetting my speed.");
	document.getElementById("audioguy").playbackRate = 1;
};
