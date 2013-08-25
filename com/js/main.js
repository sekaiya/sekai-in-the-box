jQuery(document).ready(function() {

	var hibi_left = $(window).width();
	var hibi_top = $(window).height();

	$(".hibi").css("left", hibi_left - 250 + "px");
	$(".hibi").css("top", hibi_top - 130 + "px");

	$("#menus > ul > li, #menus > ul > ul > *").click(function(){
	
		if ($("#title").length != 0) { $("#title").remove(); }
		
		if(rgbTo16($(this).css("color")) == "#ffffff") { return; }
		
		$("#menus > ul > li, #menus > ul > ul > *").css("color", "#00617f");
		$(this).css("color", "#ffffff");
		
		make_content($(this).attr("id"));
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

rgbTo16 = function(col){
  return "#" + col.match(/\d+/g).map(function(a){return ("0" + parseInt(a).toString(16)).slice(-2)}).join("");
}
make_content = function(pagename){

	$("#contents").hide();
	$("#contents").css("background-color", "#ffffff");
	
	$("#contents").load("inc/" + pagename + ".inc");
	$("#contents").toggle("slow");
	$("#contents").animate({ scrollTop: 0 }, 'fast');
}
