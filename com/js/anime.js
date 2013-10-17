var left_a = ($(window).width()-500)/2
var top_a = ($(window).height()-120)/2

not_anime_hide = function(){$(".notanime").hide();}
show = function(node){$(node).show();}
remove = function(node){$(node).remove();}
hide =  function(node){$(node).hide();}
backcolor_blue = function(color){$("body").css("background-color", color);}
fade_in = function(){$(".notanime").fadeIn(3000);}
left = function() {
	$("#anime1").animate({marginLeft: "-500px",opacity: 0}, 400);
}
slide = function(node){
	$(node).animate(
		{marginLeft: left_a + "px",
		 marginTop: top_a + "px",
		 opacity: 1}, 500, 'swing');
}
anime = function(event, time,node) {
 return jQuery.Deferred(function(dfd) {
		setTimeout(function() {
		event(node);
		dfd.resolve();
	}, time);
	});
}
jQuery(document).ready(
	function() {
		$("body").css("background-color", "#ffffff");
		anime(not_anime_hide, 0);
		var dfd = $.Deferred();
		dfd.then(
			function(){return anime(show, 1000, "#anime1");}
		).then(
			function(){return anime(slide, 0, "#anime1");}
		).then(
			function(){return anime(left, 1500, "#anime1");}
		).then(
			function(){return anime(remove, 1300, "#anime1");}
		).then(
			function(){return anime(show, 0, "#anime2");}
		).then(
			function(){return anime(slide, 0, "#anime2");}
		).then(
			function(){return anime(hide, 2700, "#anime2");}
		).then(
			function(){return anime(remove, 0, "#anime2");}
		).then(
			function(){return anime(backcolor_blue, 800, "#00bfff");}
		).then(
			function(){return anime(fade_in, 100);}
		);
		dfd.resolve();
	}
);


