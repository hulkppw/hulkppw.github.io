
function selectAll(obj) {
	var selectbox = document.getElementsByName(obj);
	with (selectbox) {
		for (var i = 0; i < selectbox.length; i++) {
			var element = selectbox[i];
			if (!element.disabled && element.type == "checkbox" && element.checked) {
				
			} else {
				element.checked = true;
			}
		}
	}
}
function backwardSelect(obj) {
	var selectbox = document.getElementsByName(obj);
	with (selectbox) {
		for (var i = 0; i < selectbox.length; i++) {
			var element = selectbox[i];
			if (!element.disabled && element.type == "checkbox") {
				if (element.checked) {
					element.checked = false;
				} else {
					element.checked = true;
				}
			}
		}
	}
}
checkedAll = function (check_name, obj) {
	var array = document.getElementsByName(check_name);
	for (var i = 0; i < array.length; i++) {
		array[i].checked = obj.checked;
	}
};
isChecked = function (check_name) {
	var flag = false;
	var array = document.getElementsByName(check_name);
	for (var i = 0; i < array.length; i++) {
		if (array[i].checked) {
			flag = true;
			break;
		}
	}
	return flag;
};
function checkNumber(){
		var value = this.value;
		var reg=/^\d+(\.\d+)?$/;
		if(!reg.exec(value)){
			this.value='';
		}
}