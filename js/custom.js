// Check if Everything is working correctly
if ($("html")) {
	console.log("Jquery loaded with version " + $().jquery);
} 
// Rest of code	
 $(window).load(function() {
    $('.flexslider').flexslider({
    	animation: 'slide',
    	
    });
  });