var m$=document.getElementById;

document.getElementById("load-audio").onclick = function(){
	document.getElementById("audioguy").setAttribute("src",
	                                    document.getElementById("source-input").value
										);
};