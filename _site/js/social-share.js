function socialShareURL(){
	var html = '';	
	if( !jQuery( '#social-share-modal' ).length ){
		html += '<div class="modal fade" id="social-share-modal" role="dialog">';
		html += 	'<div class="modal-dialog modal-dialog-centered">';
		html += 		'<div class="modal-content">';
		html += 			'<div class="modal-header">';
        html +=  				'<h4 class="modal-title"> Social Share URL Generator</h4>';
        html +=					'<button type="button" class="close" data-dismiss="modal">&times;</button>';
        html +=				'</div>';
		html += 			'<div class="modal-body">';
		html+='					<ul class="nav nav-tabs">';
		html+='    					<li class="active"><a class="active" data-toggle="tab" href="#facebook">Facebook</a></li>';
		html+='    					<li><a data-toggle="tab" href="#twitter">Twitter</a></li>';
		html+='    					<li><a data-toggle="tab" href="#linkedin">LinkedIn</a></li>';
		html+='   				 <li><a data-toggle="tab" href="#email">Email</a></li>';
		html+=' 				</ul>';
		html+='  				<div class="tab-content">';
		html+='    					<div id="facebook" class="tab-pane fade in active show">';
		html+=' 						<input type="text" class="auto-generate social-url" placeholder="Enter the url you want to share" data-ref="https://www.facebook.com/sharer/sharer.php?u=" style="width: 100%;">';
		html+=' 						<code class="copy"></code>';
		html+='    					</div>';
		html+='    					<div id="twitter" class="tab-pane fade">';
		html+=' 						<input type="text" class="auto-generate social-url" placeholder="Enter the url you want to share" data-ref="https://twitter.com/home?status=" style="width: 100%;">';
		html+=' 						<code class="copy"></code>';
		html+='    					</div>';
		html+='    					<div id="linkedin" class="tab-pane fade">';
		html+=' 						<input type="text" class="auto-generate social-url" placeholder="Enter the url you want to share" data-ref="https://www.linkedin.com/sharing/share-offsite/?url=" style="width: 100%;">';
		html+='							<input type="text" class="auto-generate social-title" placeholder="Enter the Title" style="width: 100%;">';
		html+='							<input type="text" class="auto-generate social-summary" placeholder="Enter the Summary" style="width: 100%;">';
		html+='							<input type="text" class="auto-generate social-source" placeholder="Enter the Source" style="width: 100%;">';
		html+=' 						<code class="copy"></code>';
		html+='    					</div>';
		html+='    					<div id="email" class="tab-pane fade">';
		html+=' 						<input type="text" class="auto-generate social-url" placeholder="Enter the url you want to share" data-ref="mailto:" style="width: 100%;">';
		html+=' 						<input type="text" class="auto-generate social-cc" placeholder="Who you want to CC" style="width: 100%;">';
		html+=' 						<input type="text" class="auto-generate social-bcc" placeholder="Who you want to BCC" style="width: 100%;">';
		html+=' 						<input type="text" class="auto-generate social-subject" placeholder="The email subject" style="width: 100%;">';
		html+=' 						<input type="text" class="auto-generate social-body" placeholder="The body of the email" style="width: 100%;">';
		html+=' 						<code class="copy"></code>';
		html+='    					</div>';
		html+='  				</div>';
		html += 			'</div>';
		html += 		'</div>';
		html += 	'</div>';
		html += '</div>';
		jQuery('body').append( html );
	}
	jQuery('#social-share-modal').modal();
}

jQuery(document).on('keyup','.auto-generate',function(){
	var parent = jQuery( this ).parent();
	var ref = parent.children('.social-url').data('ref');
	var url = encodeURIComponent( parent.children('.social-url').val() );
	
	/* Adds LinkedIn variables if they exist */
	if( parent.children('.social-cc').length ){
		url = decodeURIComponent( url );
		url += '?&cc=' + encodeURIComponent( parent.children('.social-cc').val() );
	}
	if( parent.children('.social-bcc').length ){
		url += '&bcc=' + encodeURIComponent( parent.children('.social-bcc').val() );
	}
	if( parent.children('.social-subject').length ){
		url += '&subject=' + encodeURIComponent( parent.children('.social-subject').val() );
	}
	if( parent.children('.social-body').length ){
		url += '&body=' + encodeURIComponent( parent.children('.social-body').val() );
	}

	/* Adds LinkedIn variables if they exist */
	if( parent.children('.social-title').length ){
		url += '&title=' + encodeURIComponent( parent.children('.social-title').val() );
	}
	if( parent.children('.social-summary').length ){
		url += '&summary=' + encodeURIComponent( parent.children('.social-summary').val() );
	}
	if( parent.children('.social-source').length ){
		url += '&source=' + encodeURIComponent( parent.children('.social-source').val() );
	}

	parent.children('code').text( ref + url );
});