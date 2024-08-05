$(document).ready(function() {
    // Plugin to convert form to object
    $.fn.toObject = function() {
        var obj = $(this).find(':input').toArray().reduce((acc, input) => {
            if (input.name) {
                acc[input.name] = $(input).val();
            }
            return acc;
        }, {});
        return obj;
    };

    // Plugin to load object into form
    $.fn.fromObject = function(obj) {
        $.each(this.find(':input'), function(i, input) {
            if (obj[input.name]) {
                $(input).val(obj[input.name]);
            }
        });
    };

    // Print object to console
    $('#printObject').on('click', function() {
        var obj = $('#taskForm').toObject();
        console.log(JSON.stringify(obj));
    });

    // Load object into form fields
    $('#loadObject').on('click', function() {
        var obj = {
            taskName: 'Sample Task',
            taskDescription: 'This is a sample description'
        };
        $('#taskForm').fromObject(obj);
    });

    // Prevent default form submission and handle it manually
    $('#taskForm').on('submit', function(event) {
        event.preventDefault();
        var obj = $(this).toObject();
        console.log('Form submitted:', JSON.stringify(obj));
    });
});
