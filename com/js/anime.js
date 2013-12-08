var hurl = location.hash;
if(hurl!="" && $(hurl)[0]){$("#loadingWrap").remove()}else{
	var left_a = ($(window).width()-500)/2;
	var top_a = ($(window).height()-120)/2;

	not_anime_hide = function(){$(".notanime").hide();}
	show = function(node){node.show();}
	remove = function(node){node.remove();}
	hide =  function(node){node.hide();}
	backcolor_blue = function(color){$("body").css("background-color", color);}
	fade_in = function(){$(".notanime").fadeIn(3000);}
	left = function(node) {
		node.animate({marginLeft: "-500px",opacity: 0}, 400);
	}
	slide = function(node){
		$(node).animate(
			{marginLeft: left_a + "px",
			 marginTop: top_a + "px",
			 opacity: 1}, 500, 'swing');
	}
	anime = function(event, time, node) {
	 return jQuery.Deferred(function(dfd) {
			setTimeout(function() {
			event(node);
			dfd.resolve();
		}, time);
		});
	}
	jQuery(document).ready(
		function() {
			$(".notanime").hide();
			$("body").css("background-color", "#ffffff");
			$("#loadingWrap").remove();
			var no1 = $("#anime1");
			var no2 = $("#anime2");
			var dfd = $.Deferred();
			dfd.then(
				function(){return anime(show, 1000, no1);}
			).then(
				function(){return anime(slide, 0, no1);}
			).then(
				function(){return anime(left, 1500, no1);}
			).then(
				function(){return anime(remove, 1300, no1);}
			).then(
				function(){return anime(show, 0, no2);}
			).then(
				function(){return anime(slide, 0, no2);}
			).then(
				function(){return anime(hide, 2700, no2);}
			).then(
				function(){return anime(remove, 0, no2);}
			).then(
				function(){return anime(backcolor_blue, 800, "#00bfff");}
			).then(
				function(){return anime(fade_in, 100);}
			);
			dfd.resolve();
		}
	);
}

