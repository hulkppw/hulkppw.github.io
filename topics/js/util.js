(function($) {
	YUTIL = {
		trimFormVal : trim_form , 
		clearVal	: clearVal,
		trimFormValWithoutPassword : trim_form_p
	};
	function clearVal(container_id){
		$('#' + container_id).find(":input,select").each(function() {
			$(this).val('');
		});
	}
	
	function trim_form(container_id) {
		$('#' + container_id).find(":input").each(function() {
			
			$(this).val($.trim($(this).val()));
		});
		$('#' + container_id).find("select option:selected").each(function() {
			$(this).val($.trim($(this).val()));
		});
	}
	;
	function trim_form_p( form_id ){
		$('#' + form_id).find(":input").each(function() {
			var type = this.getAttribute("type");
			if( type != 'password' ){
				$(this).val($.trim($(this).val()));
			}
		});
		$('#' + form_id).find("select option:selected").each(function() {
			$(this).val($.trim($(this).val()));
		});
	}
	$.fn.toggleCheckboxes = function(filter, returnChecked) {
		filter = filter || "*";
		returnChecked = returnChecked || false;
		var returnWhat = $( []);
		this.each(function() {
			var checked = $("input[type=checkbox]", this).filter(filter).each(
					function() {
						this.checked = !this.checked;
					}).filter(":checked");
			returnWhat = checked;
		});
		if (!returnChecked) {
			returnWhat = this;
		}
		return returnWhat;
	};
}(jQuery));