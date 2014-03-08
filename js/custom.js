// Social Icon Text Variables
var twitter_text = "Follow me on Twitter!";
var facebook_text = "Like me on Facebook!";
var googleplus_text = "Join me on GooglePlus!";
var linkedin_text = "View my LinkedIn Profile!";
var github_text = "Follow me on GitHub!";

$(".social_twitter").tooltip({
	content: twitter_text,
	show: {
		effect: "fade",
		duration: 250
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