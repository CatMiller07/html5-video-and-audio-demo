$(function () {
    $('#fileupload').fileupload({
			dataType: 'json',
			done: function (e, data) {
				$.each(data.result.files, function (index, file) {
					$('<p/>').text(file.name).appendTo(document.body);
				});
			} ,
		progressall: function (e, data) {
        var progress = parseInt(data.loaded / data.total * 100, 10);
        $('#progress .bar').css(
            'width',
            progress + '%'
        );
    }
    });
});


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
