// ==================================================
// 
// jquery-input-mask-phone-number 1.0.14
//
// Licensed (The MIT License)
// 
// Copyright © Raja Rama Mohan Thavalam <rajaram.tavalam@gmail.com>
//
// Last Updated On: 22/Aug/2020 IST 12:05 AM 
//
// ==================================================

!function(e){e.fn.usPhoneFormat=function(t){var i=e.extend({format:"xxx-xxx-xxxx",international:!1},t);"xxx-xxx-xxxx"===i.format?(e(this).bind("paste",function(t){t.preventDefault();var i=t.originalEvent&&t.originalEvent.clipboardData.getData("Text");if(i=i.replace(/\D/g,""),!e.isNumeric(i))return!1;i=i.length>9?String(i.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")):String(i.replace(/(\d{3})(?=\d)/g,"$1-")),e(this).val(i),e(this).val(""),i=i.substring(0,12),e(this).val(i)}),e(this).on("keydown touchend",function(t){var i=(t=t||window.event).which||t.keyCode,h=t.ctrlKey||t.metaKey||17===i;if(86==i&&h);else if(67==i&&h);else if(88==i&&h);else if(65==i&&h)e(this).trigger("paste");else if(!(9==i||8==t.which||0==t.which||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=48&&t.keyCode<=57))return!1;var a=this.value.length,n=e(this).val();3==a&&8!=t.which&&0!=t.which?e(this).val(n+"-"):7==a&&8!=t.which&&0!=t.which&&e(this).val(n+"-"),e(this).attr("maxlength","12")})):"(xxx) xxx-xxxx"===i.format&&(e(this).on("keydown touchend",function(t){var i=(t=t||window.event).which||t.keyCode,h=t.ctrlKey||t.metaKey||17===i;if(86==i&&h);else if(67==i&&h);else if(88==i&&h);else if(65==i&&h)e(this).trigger("paste");else if(!(9==i||8==t.which||0==t.which||t.keyCode>=96&&t.keyCode<=105||t.keyCode>=48&&t.keyCode<=57))return!1;var a=this.value.length,n=e(this).val();3==a&&8!=t.which&&0!=t.which?e(this).val("("+n+") "):9==a&&8!=t.which&&0!=t.which&&e(this).val(n+"-"),e(this).attr("maxlength","14")}),e(this).bind("paste",function(t){t.preventDefault();var i=t.originalEvent&&t.originalEvent.clipboardData.getData("Text");if(i=i.replace(/\D/g,""),!e.isNumeric(i))return!1;i.length>9?i=String(i.replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3")):i.length>6?i=String(i.replace(/(\d{3})(\d{3})(?=\d)/g,"($1) $2-")):i.length>3&&(i=String(i.replace(/(\d{3})(?=\d)/g,"($1) "))),e(this).val(i),e(this).val(""),i=i.substring(0,14),e(this).val(i)}))}}(jQuery);