[Dribbble](http://www.pinceladasdaweb.com.br/blog/uploads/dribbble/)
=================

Grab Dribbble feed with jQuery and Handlebars.

##Usage

1. Paste right before your page's closing `</body>` tag
```html
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.rc.1/handlebars.min.js"></script>
<script type="text/javascript" src="src/dribbble.js"></script>
```

2. From within a script tag or a JS file
```javascript	
	Dribbble.init({
    	template: $('#shots-template').html(),	// The ID of your template
    	container: $('#container'),				// domNode to attach to
    	username: 'rogie',						// Dribbble username
    	count: 32								// Number of shots to display. Maximum 50
	});
```

##Customize Template

1. To customize the template open the index.html file and look for the following block of code:

```javascript
<script id="shots-template" type="text/x-handlebars-template">
{{#each this}}
<div class="shots">
	<a title="{{title}}" href="{{link}}" target="_blank"><img alt="{{title}}" src="{{image}}" /></a>
	<h3><a title="{{title}}" href="{{link}}" target="_blank">{{title}}</a></h3>
</div>
{{/each}}
</script>
```

Change the HTML as it deems necessary.

##License

[WTFPL](http://www.wtfpl.net/)
