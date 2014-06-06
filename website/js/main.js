$(window).load(function() {

	// icon overflow
	var iconOverflow = $(document.body).height() < $("#icon-content").height() + 50 + 80;
	var contentTopPadding;
	if(!iconOverflow) { 
		// expand icon-page to fill full screen
		$("#icon-page").css("height", "calc(100% - 50px)");		
		// center contents
		var whiteSpace = $("#icon-page").height() - ($("#icon-content").height());
		contentTopPadding = parseInt($("#icon-content").css("padding-top"), 10);
		$("#icon-content").css("top", whiteSpace/3 - contentTopPadding);
		$("#icon-table").css("padding-top", whiteSpace/3);
	}

	// info overflow
	var infoOverflow = $(document.body).height() < $("#info-page").height() + 50;
	if(!infoOverflow) { 
		$("#info-page").css("height", "calc(100% - 50px)");
		var whiteSpace = $("#info-page").height() - $("#info-content").height();
		$("#info-content").css("top", whiteSpace/2);
	}

	// label changing
	$(".icon").mouseover(function() { 
		$("#label").text($(this).attr('id'));
	});
	$(".icon").mouseout(function() { 
		$("#label").text("");
	});	

	// expand/collapse button
	var expandMode = true;
	var oldHeight; // lol hack
	$(".see-more-btn").click(function() { 
		if(expandMode) { 	
			$("#hidden-icons").show();
			$(this).text('see less');
			expandMode = false;
			
			if($(document.body).height() < $("#icon-content").height() + 50 + 80 + contentTopPadding) { 
				oldHeight = $("#icon-page").css("height");
				$("#icon-page").css("height", "auto");
			}			
		}
		else { 
			$("#hidden-icons").hide();
			$(this).text('see more');
			expandMode = true;
			$("#icon-page").css("height", oldHeight);			
		}
		
	});
});