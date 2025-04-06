$(document).ready(function() {
    // Back to top button functionality
    const backToTopButton = $('#back-to-top');
    
    // Show or hide the button based on scroll position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            backToTopButton.fadeIn();
        } else {
            backToTopButton.fadeOut();
        }
    });
    
    // Scroll to top when button is clicked
    backToTopButton.click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
    
    // About page: More About Me button
    $('#more-about-btn').click(function() {
        $('#more-about-me').slideToggle(400);
        
        const buttonText = $(this).text();
        if (buttonText === 'More About Me') {
            $(this).text('Show Less');
        } else {
            $(this).text('More About Me');
        }
    });
    
    // About page: Surprise Me button functionality
    $('#surprise-btn').click(function() {
        const funFacts = [
            "I love fixing computers.",
            "I like cliff diving.",
            "I love cooking and my specialty is homemade chicken nuggets.",
            "The only 2 games i like to play is Dota 2 and CS2.",
            "My favorite programming language is C#.",
        ];
        
        // Get a random fun fact
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        $('#fun-fact').text(funFacts[randomIndex]).fadeIn();
    });
    
    // Portfolio page: View More button functionality
    $('.view-more-btn').click(function() {
        // Find the project details section in the same parent container
        const detailsSection = $(this).siblings('.project-details');
        
        // Toggle the visibility with a slide effect
        detailsSection.slideToggle(400);
        
        // Change button text based on current state
        const buttonText = $(this).text();
        if (buttonText === 'View More') {
            $(this).text('Show Less');
        } else {
            $(this).text('View More');
        }
    });
    
    // Initialize lightbox gallery if the plugin exists
    if (typeof $.fn.lightbox === 'function') {
        $('.gallery-item').lightbox({
            opacity: 0.9,
            fadeIn: 300,
            fadeOut: 300
        });
    }
});