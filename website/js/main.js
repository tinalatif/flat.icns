$(document).ready(function() {
	if($("#info-block").height() < $("#info-container").height()) { 
		$("#info-block").css("position", "relative");
		$("#info-block").css("top", $("#info-container").height()/2);
		$("#info-block").css("transform", "translateY(-50%)");
	}
	if($("#info-block").height() > $("#info-container").height()) { 
		$("#info-container").css("height", $("#info-block").height());
	}	

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

