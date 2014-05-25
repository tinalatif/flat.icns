$(document).ready(function() {
	if($("#info-block").height() < $("#info-container").height()) { 
		$("#info-block").css("position", "relative");
		$("#info-block").css("top", $("#info-container").height()/2);
		$("#info-block").css("transform", "translateY(-50%)");
	}
	if($("#info-block").height() > $("#info-container").height()) { 
		$("#info-container").css("height", $("#info-block").height());
	}	
});