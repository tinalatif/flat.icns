$(document).ready(function() {
	// centers info-block if small, otherwise extends info page to be longer
	if($("#info-block").height() < $("#info-container").height()) { 
		$("#info-block").css("position", "relative");
		$("#info-block").css("top", $("#info-container").height()/2);
		$("#info-block").css("transform", "translateY(-50%)");
	}
	if($("#info-block").height() > $("#info-container").height()) { 
		$("#info-container").css("height", $("#info-block").height());
	}	

	// label changing
	$(".icon").mouseover(function() { 
		$("#label").text($(this).attr('id'));
	});
	$(".icon").mouseout(function() { 
		$("#label").text("");
	});

	// icon section sizing
	if($(document.body).height() < $("#icon-content").height() + 50) { 
		$("#icon-container").css("height", "auto");
	}		
	var initialTopSpace = ($("#icon-container").height() - $("#icon-content").height())/2;
	$("#icon-content").css("padding-top", initialTopSpace);
	
	// expansion
	$(".see-more-btn").click(function() { 
		$("#hidden-icons").show();
		$(this).hide();

		if($("#icons").height() > $("#icon-container").height()) { 
			$("#icon-container").css("height", "auto");
		}	
	});
});