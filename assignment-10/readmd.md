## Why is preventDefault being used in the different handlers?

preventDefault is used to prevent the default action of an event. For example, preventing a form from submitting when a submit button is clicked, allowing custom handling instead.

## What is a jQuery plugin?

A jQuery plugin is a method that extends jQuery's prototype object. It allows you to add custom functions to jQuery that can be called on jQuery objects.
What is the plugin being used in this code and where?

Identify any custom functions (plugins) defined on the jQuery object within the provided code.
Explain what each jQuery function call is doing.

For each jQuery function call in the code, understand its purpose and what it manipulates or handles.
### Modifying the Code
   Modify the toObject Method
   Replace the $.each method with a more modern approach using reduce:

## javascript

$.fn.toObject = function() {
var obj = $(this).find(':input').toArray().reduce((acc, input) => {
if (input.name) {
acc[input.name] = $(input).val();
}
return acc;
}, {});
return obj;
};
Add 'Print object to console' Button
Add a button to the HTML:

## html

<button id="printObject">Print object to console</button>
Add an event handler to the JavaScript:

## javascript

$('#printObject').on('click', function() {
var obj = $('form').toObject();
console.log(JSON.stringify(obj));
});
Add 'Load object into console' Button
Add another button to the HTML:

## html

<button id="loadObject">Load object into console</button>
Add an event handler to the JavaScript:

## javascript

$('#loadObject').on('click', function() {
var obj = {
field1: 'value1',
field2: 'value2',
// Add more fields as needed
};
$('form').fromObject(obj);
});