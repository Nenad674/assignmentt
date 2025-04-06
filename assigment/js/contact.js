$(document).ready(function() {
    // Contact form validation
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // Reset all error messages
        $('.error-message').text('');
        
        // Get form input values
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const message = $('#message').val().trim();
        
        // Flag to track validation state
        let isValid = true;
        
        // Validate name
        if (name === '') {
            $('#name-error').text('Name is required');
            isValid = false;
        }
        
        // Validate email
        if (email === '') {
            $('#email-error').text('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            $('#email-error').text('Please enter a valid email address');
            isValid = false;
        }
        
        // Validate phone number
        if (phone === '') {
            $('#phone-error').text('Contact number is required');
            isValid = false;
        } else if (!isValidPhone(phone)) {
            $('#phone-error').text('Please enter a valid phone number in format +356 #### ####');
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            $('#message-error').text('Message is required');
            isValid = false;
        } else if (message.length < 10) {
            $('#message-error').text('Message must be at least 10 characters long');
            isValid = false;
        }
        
        // If form is valid, display success message and reset form
        if (isValid) {
            alert('Thank you! Your message has been sent.');
            $('#contactForm')[0].reset();
        }
    });
    
    // Real-time validation for email field
    $('#email').on('blur', function() {
        const email = $(this).val().trim();
        
        if (email !== '' && !isValidEmail(email)) {
            $('#email-error').text('Please enter a valid email address');
        } else {
            $('#email-error').text('');
        }
    });
    
    // Real-time validation for phone field
    $('#phone').on('blur', function() {
        const phone = $(this).val().trim();
        
        if (phone !== '' && !isValidPhone(phone)) {
            $('#phone-error').text('Please enter a valid phone number in format +356 #### ####');
        } else {
            $('#phone-error').text('');
        }
    });
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    
    // Helper function to validate phone number format (+356 #### ####)
    function isValidPhone(phone) {
        const phonePattern = /^\+356\s\d{4}\s\d{4}$/;
        return phonePattern.test(phone);
    }
});