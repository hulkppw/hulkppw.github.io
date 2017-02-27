jQuery(function($) {
	$.datepicker.regional['zh-CN'] = {
		closeText : '�ر�',
		prevText : '&#x3c;����',
		nextText : '����&#x3e;',
		currentText : '����',
		monthNames : [ 'һ��', '����', '����', '����', '����', '����', '����', '����', '����',
				'ʮ��', 'ʮһ��', 'ʮ����' ],
		monthNamesShort : [ 'һ', '��', '��', '��', '��', '��', '��', '��', '��', 'ʮ',
				'ʮһ', 'ʮ��' ],
		dayNames : [ '������', '����һ', '���ڶ�', '������', '������', '������', '������' ],
		dayNamesShort : [ '����', '��һ', '�ܶ�', '����', '����', '����', '����' ],
		dayNamesMin : [ '��', 'һ', '��', '��', '��', '��', '��' ],
		weekHeader : '��',
		dateFormat : 'yy-mm-dd',
		firstDay : 1,
		isRTL : false,
		showMonthAfterYear : true,
		yearSuffix : '��'
	};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
