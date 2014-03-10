// Finds what link this is (based on a data-tip html attribute) and changes tooltip to reflect this
function change_tooltip_content() {
	var currentDatatype = $(this).attr("data-tip");
	return currentDatatype;
}
//JqueryUI tooltip declaration
$(".social_links li").tooltip({
	content: change_tooltip_content(),
	show: {
		effect: "fade",
		duration: 150
	},
	hide: {
		effect: "fade",
		duration: 250
	},
	position: {
		my: 'center top',
		at: 'center bottom+10'
	}
});

// Rollover effect
$(".social_links img").hover(
	function() {
		var location = $(this);
		switch (location.attr("title")) {
			case 'Twitter' :
				location.attr('src' , 'img/social/twitter-icon-active.png');
				break;
			case 'Facebook' :
				location.attr('src' , 'img/social/facebook-icon-active.png');
				break;
			case 'Google+' :
				location.attr('src' , 'img/social/googleplus-icon-active.png');
				break;
			case 'LinkedIn' :
				location.attr('src' , 'img/social/linkedin-icon-active.png');
				break;
			case 'Github' :
				location.attr('src' , 'img/social/github-icon-active.png');
				break;
		}
	},
	function() {
		var location = $(this);
		switch (location.attr("alt")) {
			case 'Twitter profile' :
				location.attr('src' , 'img/social/twitter-icon.png');
				break;
			case 'Facebook profile' :
				location.attr('src' , 'img/social/facebook-icon.png');
				break;
			case 'Google+ profile' :
				location.attr('src' , 'img/social/googleplus-icon.png');
				break;
			case 'LinkedIn profile' :
				location.attr('src' , 'img/social/linkedin-icon.png');
				break;
			case 'Github profile' :
				location.attr('src' , 'img/social/github-icon.png');
				break;
		}
	}
);
// Background Position Change for Back Button
$(".back_button").hover(
	function() {
		$(this).css('background-position', 'left -43px');
	},
	function() {
		$(this).css('background-position', 'left 13px');
	}
);