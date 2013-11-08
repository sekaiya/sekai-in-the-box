jQuery(document).ready(function() {
	$("#hibi").css("left", $(window).width() - 220 + "px");
	$("#hibi").css("top", $(window).height() - 100 + "px");
	var menus = $("#menus > ul > li, #menus > ul > ul > *")
	menus.click(function(){
		if($(this).css("color") == "rgb(255, 255, 255)") { return; }
		$('html,body').animate({ scrollTop: 0 }, 'fast');
		menus.css("color", "#00617f");
		$(this).css("color", "#ffffff");
		if(!$(this).is('#menus > ul > ul > *')){$(".submenu").hide("slow")};
		if($(this).next().is('ul')){ $(this).next().toggle("slow");}
		_make_content($(this).attr("id"));
	});
	$.getJSON("https://api.github.com/repos/sekaiya/sekai-in-the-box/commits?per_page=5", function(res){
		histories = new Array();
		for (var i=0 ; i < res.length ; i++){
			var commit_info = new CommitInfo(new Date(res[i].commit.author.date).toLocaleString(), res[i].commit.message, res[i].html_url);
			histories.push(commit_info);
		};
	});
});
_make_content = function(pagename){
	$("#contents").hide();
	$("#contents").css("height", "");
	if(pagename == "history") {
		_make_history_page();
	} else {
		$("#contents").load("inc/" + pagename + ".inc",null,function(){if($("#contents").height() < 430) { $("#contents").height(430) }});
	}
	$("#contents").fadeIn("slow");
}

_make_history_page = function() {
	$("#contents").load("inc/history.inc", function(){
		$("#contents").html($.tmpl($("#contents"), [{contents: histories}]));
	});
}

var CommitInfo = function(date, comment, url) {
  this.date = date;
  this.comment = comment;
  this.url = url;
}