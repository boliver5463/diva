jQuery('body').on('click','.copy',function(){
  // var copy = jQuery('<div id="copy-message" style="z-index: 5463; position: fixed; top: 0; left: 0; right: 0; padding: 20px; text-align: center; box-sizing: border-box; font-weight: bold; text-transform: uppercase; background-color: #19dc19;">Copied to Clipboard</div>');
  var copy = jQuery('<div class="alert alert-success text-center" role="alert" style="z-index: 5463; position: fixed; top: 0; left: 0; right: 0;">COPIED TO CLIPBOARD</div>');

  var temp = jQuery("<input>");
  jQuery("body").append(temp);
  temp.val( jQuery(this).text() ).select();
  document.execCommand("copy");
  temp.remove();

  jQuery("body").append(copy);
  setTimeout(function(){
    copy.fadeOut("slow", function(){
      copy.remove();
    });
  }, 1000);
});