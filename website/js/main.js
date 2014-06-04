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

	// expansion
	$(".see-more-btn").click(function() { 
		$("#hidden-icons").show();
		$(this).hide();

		var newOverflow = $(document.body).height() < $("#icon-content").height() + 50 + 80 + contentTopPadding;
		if(newOverflow) { 
			$("#icon-page").css("height", "auto");
		}
		
	});
});