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


<script>
jQuery( document ).ready(function($) { 

	var $img_blk = $("#block-807e458a9b2493bfa5cd");
	var $text_blk = $("#block-null");

	var resize_text_block = function() {
		var img_size = $img_blk.height();
		var text_size = $text_blk.height();
		if(text_size > img_size){
			$text_blk.css("height", "");
		} else {
			$text_blk.height(img_size-8);
		}
	};
	$img_blk.find("img").load(resize_text_block);
	$(window).resize(resize_text_block);
});
</script>
