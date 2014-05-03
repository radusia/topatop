(function ($) {

Drupal.behaviors.initCustomProductManagement = {
  attach: function (context, settings) {
	  if (typeof(CustomProductManagementInit) == 'undefined') {
	     //This code will be implemented once per page load	
	  }
	  CustomProductManagementInit = true;
	  //This code will be implemented for each ajax request	
	  $(".view-content").prepend($(".view-footer").html());
	  $(".view-footer").html('');
	  $( ".custom-bulk-operations .form-submit" ).click(
			  function() { 
				  var bulk_update_fields = $('input[type=text]','.field-type-commerce-price');	
				  var bulk_update_title_fields = $('input[type=text]','.field-name-title-field');
				  var operation = $( ".custom-bulk-operations .form-select" ).val();
				  switch(operation) {
				  	case '1':	
				  		bulk_update_fields.each( function() {
			  			    var bulk_update_value = $('input[name=bulk-operations-field]').val();
			  				$(this).val(parseFloat(bulk_update_value).toFixed(2));
			  			}
			  		);
				  	break;
				  	
				  	case '2':
				  		bulk_update_fields.each( function() {
				  			    var bulk_update_value = $('input[name=bulk-operations-field]').val();
				  				calculated_value = parseFloat($(this).val()) + parseFloat(bulk_update_value);
				  				$(this).val(parseFloat(calculated_value).toFixed(2));
				  			}
				  		);
				  	break;
				  	
				  	
				  	case '3':
				  		bulk_update_fields.each( function() {
			  			    var bulk_update_value = $('input[name=bulk-operations-field]').val();
			  				calculated_value = parseFloat($(this).val()) - parseFloat(bulk_update_value);
			  				$(this).val(parseFloat(calculated_value).toFixed(2));
			  			}
			  		);
				  	break;
				  	
				  	case '4':
				  		bulk_update_fields.each( function() {
			  			    var bulk_update_value = $('input[name=bulk-operations-field]').val();
			  				calculated_value = parseFloat($(this).val()) * ((100+parseFloat(bulk_update_value))/100);
			  				$(this).val(parseFloat(calculated_value).toFixed(2));
			  			}
				  		);
				  	break;
				  	
				  	case '5':
				  		bulk_update_fields.each( function() {
			  			    var bulk_update_value = $('input[name=bulk-operations-field]').val();
			  				//console.log('1-'+$(this).val());
			  				//console.log('2-'+bulk_update_value);
			  				//console.log('3-'+$(this).val() + bulk_update_value);
			  				calculated_value = parseFloat($(this).val()) * ((100-parseFloat(bulk_update_value))/100);
			  				$(this).val(parseFloat(calculated_value).toFixed(2));
			  			}
				  		);
				  	break;
				  	case '6':
				  		bulk_update_title_fields.each( function() {
			  			    var bulk_update_value = $('input[name=bulk-operations-field]').val();
			  				$(this).val(bulk_update_value);
			  			}
				  		);
				  	break;
				  }
			   }
	   );
  }
};


})(jQuery);