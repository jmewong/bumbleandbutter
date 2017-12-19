/*global $*/

/*function slideshow() {
    window.setInterval("changeImage()", 1000);
}

current_img = 0;

function changeImage() {   
    var imgSrcs = [
        "JME-6312.jpg",
        "JME-6269.jpg",
        "JME-6290.jpg",
        "JME-6389.jpg"
    ];
    var address = "../assets/" + imgSrcs[current_img];
    var current_img = (current_img + 1) % imgSrcs.length;
    $("#slideshow").css("background-url", "address");
    console.log(address);
}*/

$(document).ready(function () {
    'use strict';

    // $('.scroll_spacer').css("top", "-" + $('#nav_bar').height() + "px");

    $('#slideshow').height($(window).height() - $('#nav_bar').height());

    // smooth scroll. code taken from https://paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

    (function () {
        var height = $('#nav_bar').height();
        $('.spacer').height(height);

        $('.fa-chevron-circle-down').click(function() {
            $('#scroll_spacer').css("top", "-" + height + "px");
        });
    }());

    (function () {
        var flavors = [
            "Rosemary & Currants",
            "Vanilla Bean & Dried Cherry",
            "Sharp Cheddar & Cracked Black Pepper"
        ],
        descriptions = [
            "You'll be surprised to find how versatile your favorite herb is, not only pairing well with your roast chicken, but also with a sweet handful of toasted oats and nuts. We handpick fresh rosemary and throw in some dried currants to give you an aromatic granola that goes just as well with your morning yogurt as it does with a soup or salad. Sweet, savory, and quite addicting.",
            "This isn't your average vanilla granola. We bake with real ground vanilla beans, not vanilla extract, to give you that pure, intense flavor and visual appeal of generously speckled granola. With depth in flavor, the right amount of salt, and a handful of dried cherries, this wholesome bag of oats gives you the perfect balance between sweet and tart.",
            "Get fancy with this granola, inspired by ingredients reminiscent of a dinner party. We roll our honeyed granola in sharp white cheddar and give it a kick of freshly ground black pepper and cayenne. A surprisingly sweet and salty snack, with a hint of spice. Try it on top of a tomato soup, baked onto a potato gratin, or straight out of the bag."
        ],
        images = [
            ["JME-9091.jpg"],
            ["JME-9089.jpg"],
            ["JME-9094.jpg"]
        ],
        file_names = [
            "rosemary_currant.html",
            "vanilla_cherry.html",
            "cheddar_pepper.html"
        ],
        num_flavors = flavors.length,
        id = 0;

        $('#purchase_tab').click(function() {
            window.location.href = file_names[id];
        });


        $('#flavor_options').change(function () {
            id = parseInt($('#flavor_options').val());
            window.location.href = file_names[id];
        });

        // Write a flavor title, description, and image to the modal window
        function write_modal(id) {
            $('#modal_title').html(flavors[id]);
            $('#modal_description').html(descriptions[id]);
            $('#modal_img').attr('src', 'assets/' + images[id][0]);
            $('#buynow').attr('href', file_names[id]);
        }

        // When a flavor is clicked
        $('.flavor_img').click(function (e) {
            id = parseInt((this.id).substring(1), 10);
            write_modal(id);
        });

    }());
    
     // Freeze the body when the modal window is open
    function freeze_body() {
        $('html').css('overflow', 'hidden');
        $('body').bind('touchmove', function (e) {
            e.preventDefault();
        });
    }

    // Unfreeze the body when the modal window is closed
    function unfreeze_body() {
        $('html').css('overflow', 'scroll');
        $('body').unbind('touchmove');
    }

    // Open the modal window
    $('.modal_opener').click(function () {
        if (this.id === "FAQ") {
            $('#FAQ_modal').css("display", "block");
        } else {
            $('#flavor_modal').css("display", "block");
        }

        freeze_body();
    });

    // Click on the x
    $('.close').click(function () {
        $('.modal').css("display", "none");
        unfreeze_body();
    });

    // Click outside the modal window
    $(window).click(function (e) {
        if ($(e.target).attr("class") === "modal") {
            $('.modal').css("display", "none");
            unfreeze_body();
        }
    });

});
