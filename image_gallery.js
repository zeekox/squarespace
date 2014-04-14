<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

<script>
  jQuery( document ).ready(function($) { 
    var link_class = 'img-full-size-link';
    var link_selector = '.' + link_class;
    $( "div.slide" ).hover(
      function() {
       var link = $(this).find("a").first().attr("href") + '?format=original';
        if ($(this).find(link_selector).length == 0){
			$(this).append($('<a class="'+link_class+'" onclick="window.location=\''+link+'\'">Download</a>'));
        }
      }, function() {
        $( this ).parent().find(link_selector).remove();
      }
    );
  });
</script>
