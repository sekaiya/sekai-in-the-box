jQuery(document).ready(function() {

	$("#menus > ul > li, #menus > ul > ul > *").click(function(){
		$("#contents").hide();
		
		if ($("#title").length != 0) {
			$("#title").remove();
		}
		$("#contents").css("background-color", "#F9FAFF");
		
		var pagename = $(this).attr("id");
		$("#contents").load("inc/" + pagename + ".inc");
		$("#contents").toggle("slow");
		$("#contents").animate({ scrollTop: 0 }, 'fast');
	});
	
	$("#menus > ul > li").click(function(){
		if(!$(this).is('.subs')){
			$(".submenu").hide("slow");
			return;
		}
		if($(this).next().is(':visible')){
			$(".submenu").hide("slow");
			return;
		}
		$(".submenu").hide();
		$(this).next().toggle("slow");
	});
	
});


