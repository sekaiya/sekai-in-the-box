var left = ($(window).width()-500)/2

jQuery(document).ready(
	function() {
		var dfd = $.Deferred();
		dfd.then(
			function(){
						return $("body").css("background-color", "#ffffff");
			}
		).then(
			function(){
				return $(".notanime").hide();
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						 $("#anime1").show();
						dfd.resolve();
					}, 1000);
				});
			}
		).then(
			function(){
				return $("#anime1").animate(
					{marginLeft: left + "px",
					 marginTop: "250px",
					 opacity: 1}, 500, 'swing'
				)
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						$("#anime1").animate(
							{marginLeft: "-500px",opacity: 0}, 500
						);
						dfd.resolve();
					}, 1000);
				});
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						$("#anime1").remove();
						$("#anime2").show();
						dfd.resolve();
					}, 1300);
				});
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						 $("#anime2").animate(
							{marginLeft: left + "px",
							 marginTop: "250px",
					 		 opacity: 1}, 500, 'swing'
						)
						dfd.resolve();
					});
				});
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						$("#anime2").hide();
						dfd.resolve();
					}, 3000);
				});
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						$("#anime2").remove();
						$("body").css("background-color", "#00bfff");
						dfd.resolve();
					}, 800);
				});
			}
		).then(
			function(){
				 return jQuery.Deferred(function(dfd) {
					setTimeout(function() {
						$(".notanime").show(3000)
						dfd.resolve();
					});
				});
			}
		);
		dfd.resolve();
	}
);


