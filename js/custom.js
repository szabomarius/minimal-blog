// Social Icon Text Variables
var twitter_text = "Follow me on Twitter!";
var facebook_text = "Like me on Facebook!";
var googleplus_text = "Join me on GooglePlus!";
var linkedin_text = "View my LinkedIn Profile!";
var github_text = "Follow me on GitHub!";

// Finds what link this is (based on a data-tip html attribute) and changes tooltip to reflect this
function change_tooltip_content() {
	var currentDatatype = $(this).attr("data-tip");
	return currentDatatype;
}
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