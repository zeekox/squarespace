<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

<script>
jQuery( document ).ready(function($) { 
	$( "div.slide" ).each(
		function(e) {
			var link = $(this).find("a").first().attr("href") + '?format=original';
			$(this).append($('<a class="img-full-size-link" onclick="window.location=\''+link+'\'">Download</a>'));
	});
});
</script>



