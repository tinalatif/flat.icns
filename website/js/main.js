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
		$("#label").text($(this).attr('id') + ".icns");
	});
	$(".icon").mouseout(function() { 
		$("#label").text("flat.icns");
	});



	var overflow = $(document.body).height() < $("#icon-container").height();

	if(!overflow) { 
		$("#icons").css("padding-top", "0px");
		$("#icons").css("padding-bottom", "0px");
		$("#icons").addClass("icons-centered");

		$("#icon-container").css("height", "calc(100% - 50px)");
	}

	$(".see-more-btn").click(function() { 		

		if(overflow) { 
			$("#hidden-icons").show();
			$(this).hide();
		}

		else { 
			var oldTop = $("#icons").css("top");
			var oldTransform = $("#icons").css("transform");

			$("#hidden-icons").show();
			$("#icon-container").css("height", 
			$("#icon-container").height() + $("#hidden-icons").height() - $((this)).height() - 45);
		
			$(this).hide();

			$("#icons").css("top", oldTop);
			$("#icons").css("transform", oldTransform);		
		}
		
	});
});

