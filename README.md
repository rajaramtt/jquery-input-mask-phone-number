# jquery-input-mask-phone-number

A jQuery Plugin to make masks on input field to US phone format.


## Quick start

1\.  Add latest jQuery and jquery-input-mask -phone-number files

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/path/to/jquery-input-mask-phone-number.min.js"></script>
```


2\.  Usage

The jquery-input-mask -phone-number syntax is pretty simple. 
First,you input your  selector, followed by the .usPhoneFormat and then as a parameters you have to put the mask that you want the plugin to apply on the form field.

```html
<input type='text' id='yourphone' />

//(xxx) xxx-xxxx format code
$(document).ready(function () {
    $('#yourphone').usPhoneFormat({
        format: '(xxx) xxx-xxxx',
    });   
});

OR
//xxx-xxx-xxxx format code
$(document).ready(function () {
    $('#yourphone').usPhoneFormat({
        format: 'xxx-xxx-xxxx',
    });   
});

//Default xxx-xxx-xxxx  
$(document).ready(function () {
    $('#yourphone').usPhoneFormat();   
});
```

## Demo Example

Working JSFiddle Link https://jsfiddle.net/1kbat1nb/751/



## Help/Assistance

Email Us : rajaram.tavalam@gmail.com          
Follow Me for latest updates. 
Twitter : [@rajaramtt](//twitter.com/rajaramtt) 
FaceBook: [@rajaramtt](//fb.com/rajaramtt)
Medium:  [@rajaramtt](//medium.com/@rajaramtt)

## License


(The MIT License)

Copyright (c) 2018 Raja Rama Mohan Thavalam<rajaram.tavalam@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


