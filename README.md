# jQuery antimail

Simple jQuery Plugin for antispam E-Mails.
Feel free to use it or let me know your improvements.


## How it works

The plugin parses your code for the classes and replace an attribute (or the tag itself) with the correct email address.

- if it's an a-tag the plugin adds the "mailto:"

## Usage

1. Include jQuery:

	```html
	<script src="/js/antimail.js"></script>
	```

2. Call the plugin:

	```javascript
	$("body").antimail({
        domain: 'mydomain.com', // everything behind the @
        email: 'email' // everything before the @,
        attribute: 'href' // param to orverride
	});
	```

3. In your Code:

    ```html
    <a href="#" data-antimail-domain="yourdomain" data-antimail-email="yourname">
        <span class="antimail" data-antimail-domain="yourdomain" data-antimail-email="yourname">&nbsp;</span>
    </a>
    ```

## Team

Roland Kainbacher

## History

2015-07-30 V 0.1 Release

## License

based on https://github.com/jquery-boilerplate/boilerplate/

## TODO

- add support for mailto subject
- add support for mailto body

