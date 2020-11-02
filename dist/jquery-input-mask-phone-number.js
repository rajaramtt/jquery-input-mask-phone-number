// ==================================================
// 
// jquery-input-mask-phone-number 1.0.14
//
// Licensed (The MIT License)
// 
// Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>
//
// Last Updated On: 22/Aug/2020 IST  12:05 AM 
//
// ==================================================

(function ($) {
    $.fn.usPhoneFormat = function (options) {
        var params = $.extend({
            format: 'xxx-xxx-xxxx',
            international: false,

        }, options);

        if (params.format === 'xxx-xxx-xxxx') {
            $(this).bind('paste', function (e) {

                e.preventDefault();
                var inputValue = e.originalEvent && e.originalEvent.clipboardData.getData('Text');
                inputValue = inputValue.replace(/\D/g, '');
                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {
                    if (inputValue.length > 9) {
                        inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
                    } else {
                        inputValue = String(inputValue.replace(/(\d{3})(?=\d)/g, '$1-'));
                    }
                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 12);
                    $(this).val(inputValue);
                }
            });
            $(this).on('keydown touchend', function (e) {

                e = e || window.event;
                var key = e.which || e.keyCode; // keyCode detection
                var ctrl = e.ctrlKey || e.metaKey || key === 17; // ctrl detection
                if (key == 86 && ctrl) { // Ctrl + V Pressed !

                } else if (key == 67 && ctrl) { // Ctrl + C Pressed !

                } else if (key == 88 && ctrl) { // Ctrl + x Pressed !

                } else if (key == 65 && ctrl) { // Ctrl + a Pressed !
                    $(this).trigger("paste");
                } else if (key != 9 && e.which != 8 && e.which != 0 && !(e.keyCode >= 96 && e.keyCode <= 105) && !(e.keyCode >= 48 && e.keyCode <= 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                } else if (curchr == 7 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '12');
            });

        } else if (params.format === '(xxx) xxx-xxxx') {
            $(this).on('keydown touchend', function (e) {

                e = e || window.event;
                var key = e.which || e.keyCode; // keyCode detection
                var ctrl = e.ctrlKey || e.metaKey || key === 17; // ctrl detection
                if (key == 86 && ctrl) { // Ctrl + V Pressed !

                } else if (key == 67 && ctrl) { // Ctrl + C Pressed !

                } else if (key == 88 && ctrl) { //Ctrl + x Pressed

                } else if (key == 65 && ctrl) { //Ctrl + a Pressed !
                    $(this).trigger("paste");
                } else if (key != 9 && e.which != 8 && e.which != 0 && !(e.keyCode >= 96 && e.keyCode <= 105) && !(e.keyCode >= 48 && e.keyCode <= 57)) {
                    return false;
                }
                var curchr = this.value.length;
                var curval = $(this).val();
                if (curchr == 3 && e.which != 8 && e.which != 0) {
                    $(this).val('(' + curval + ')' + " ");
                } else if (curchr == 9 && e.which != 8 && e.which != 0) {
                    $(this).val(curval + "-");
                }
                $(this).attr('maxlength', '14');

            });
            $(this).bind('paste', function (e) {

                e.preventDefault();
                var inputValue = e.originalEvent && e.originalEvent.clipboardData.getData('Text');
                inputValue = inputValue.replace(/\D/g, '');

                if (!$.isNumeric(inputValue)) {
                    return false;
                } else {

                    if (inputValue.length > 9) {
                        inputValue = String(inputValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3"));
                    } else if (inputValue.length > 6) {
                        inputValue = String(inputValue.replace(/(\d{3})(\d{3})(?=\d)/g, '($1) $2-'));
                    } else if (inputValue.length > 3) {
                        inputValue = String(inputValue.replace(/(\d{3})(?=\d)/g, '($1) '));
                    }

                    $(this).val(inputValue);
                    $(this).val('');
                    inputValue = inputValue.substring(0, 14);
                    $(this).val(inputValue);
                }
            });

        }
        
    }
}(jQuery));
