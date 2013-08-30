jQuery(document).ready(function() {
	var hibi_left = $(window).width();
	var hibi_top = $(window).height();

	$(".hibi").css("left", hibi_left - 250 + "px");
	$(".hibi").css("top", hibi_top - 130 + "px");


	$("#menus > ul > li, #menus > ul > ul > *").click(function(){
	
		if ($("#title").length != 0) { $("#title").remove(); }
		
		if(_rgbTo16($(this).css("color")) == "#ffffff") { return; }
		
		$("#menus > ul > li, #menus > ul > ul > *").css("color", "#00617f");
		$(this).css("color", "#ffffff");
		
		_make_content($(this).attr("id"));
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
_make_content = function(pagename){

	$("#contents").hide();
	$("#contents").css("background-color", "#ffffff");
	
	$("#contents").css("height", "");
	if(pagename == "info") {
		_make_info_page();
	} else {
		$("#contents").load("inc/" + pagename + ".inc");
	}
	$("#contents").toggle("slow", function(){
		if($("#contents").height() < 450) { $("#contents").height(450) }
	});
}

_make_info_page = function() {
	$.getJSON("https://api.github.com/repos/sekaiya/sekai-in-the-box/commits", function(res){
		datas = new Array();
		for (var i=0 ; i < 5 ; i++){
			var data = new Data(res[i].commit.author.date, res[i].commit.message, res[i].html_url);
			datas.push(data);
		};
		$("#contents").load("inc/info.inc", function(){
			changed = $.tmpl($("#contents"), [{contents: datas}]);
			$("#contents").html(changed);
		});
	});
}

var Data = function(date, comment, url) {
  this.date = date;
  this.comment = comment;
  this.url = url;
}

_rgbTo16 = function(col){
  return "#" + col.match(/\d+/g).map(function(a){return ("0" + parseInt(a).toString(16)).slice(-2)}).join("");
}
