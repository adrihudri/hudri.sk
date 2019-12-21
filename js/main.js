/*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
$(document).ready(function() {

    //window and animation items
    var animation_elements = $.find('.lod');
    var web_window = $(window);

    //check to see if any animation containers are currently in view
    function check_if_in_view() {
        //get current window information
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        //iterate through elements to see if its in view
        $.each(animation_elements, function() {

            //get the element sinformation
            var element = $(this);
            var element_height = $(element).outerHeight();
            var element_top_position = $(element).offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                element.addClass('lod-slide');
            } else {
                element.removeClass('lod-slide');
            }
        });

    }

    //on or scroll, detect elements in view
    $(window).on('scroll resize', function() {
            check_if_in_view()
        })
        //trigger our scroll event on initial load
    $(window).trigger('scroll');

});



// set the starting position of the cursor outside of the screen
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector(".cursor--small");

const initCursor = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", e => {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        // if you are already using TweenMax in your project, you might as well
        // use TweenMax.set() instead
        // TweenMax.set(innerCursor, {
        //   x: clientX,
        //   y: clientY
        // });

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();

$('.titleHidden').removeAttr('title');



$(function() { // wait for document ready
    // init controller
    var controller = new ScrollMagic.Controller();

    var tl = new TimelineMax()
        .to("#mouse", 60, {
            ease: Linear.easeNone,
            opacity: 0,
            y: -200
        }, 3)
        .from(".hd", 30, {
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".c2", 30, {
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".c1", 30, {
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".mnts", 60, {
            x: -2000,
            ease: Linear.easeNone
        }, )
        .from(".hill", 30, {
            y: 1000,
            ease: Linear.easeNone
        }, )
        /*P*/
        .to("pause", 30, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".camping", 80, {
            opacity: 0
        }, )
        /*P*/
        .to("pause", 30, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".hd", 30, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".hd2", 30, {
            x: 2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".hd2", 30, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".hd3", 30, {
            x: 2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".hd3", 30, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        //  .to("#scene2", 30, {y:-2000, ease: Linear.easeNone, opacity: 0}, )
        //  /*P*/.to("pause", 30, {x:-2000, ease: Linear.easeNone, opacity: 0}, )

    ;

    var scene = new ScrollMagic.Scene({
            triggerElement: "#pin1",
            duration: 6000
        })
        //.setTween(tween2)
        .setTween(tl)
        .setPin("#scene2", {
            pushFollowers: true
        })
        .addIndicators()
        .addTo(controller);


    var tl2 = new TimelineMax()

    /*P*/
    .to("pause", 100, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".text1", 40, {
            y: -100,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 70, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".text1", 40, {
            y: 50,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 70, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".text2", 40, {
            y: -30,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".text2", 40, {
            y: 50,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )



    .from(".text3", 40, {
            y: -100,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 70, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".text3", 40, {
            y: 50,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 70, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".text4", 40, {
            y: -30,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".text4", 40, {
            y: 50,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".text5", 40, {
            y: -30,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".text5", 40, {
            y: 50,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 60, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )



    .to(".atd", 60, {
        scale: "20",
        x: 400,
    }, )


    /*P*/
    .to("pause", 70, {
        x: -2000,
        ease: Linear.easeNone,
        opacity: 0
    }, );

    var scene2 = new ScrollMagic.Scene({
            triggerElement: "#pin2",
            duration: 8000,
            pushFollowers: true
        })
        //.setTween(tween2)
        .setTween(tl2)
        .setPin("#about", {
            pushFollowers: true
        })
        .addIndicators()
        .addTo(controller);

    var tl3 = new TimelineMax()
        .from(".hello1", 60, {
            y: 20,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 150, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".hello1", 60, {
            y: -40,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".hello2", 60, {
            y: 20,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 150, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".hello2", 60, {
            y: -40,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .from(".hello3", 60, {
            y: 20,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        /*P*/
        .to("pause", 150, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to(".hello3", 60, {
            y: -40,
            ease: Linear.easeNone,
            opacity: 0
        }, )


    ;

    var scene3 = new ScrollMagic.Scene({
            triggerElement: "#pin3",
            duration: 4000
        })
        //.setTween(tween2)
        .setTween(tl3)
        .setPin("#hello", {
            pushFollowers: true
        })
        //  .addIndicators()
        .addTo(controller);




    var tlG = new TimelineMax()
        .from("#Gtext", 250, {
            x: -1500,
            ease: Linear.easeNone
        }, 1.5)
        .from("#lodka", 350, {
            x: -2000,
            ease: Power3.easeOut
        }, 1)
        .to("pause", 150, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, )
        .to("#lodka", 260, {
            x: 2000,
            ease: Power3.easeIn
        }, )
        .to("#Gtext", 260, {
            x: 2000,
            ease: Power3.easeIn,
            opacity: 0
        }, )
        .to("#wave-front", 100, {
            opacity: 0
        }, )
        .to("#wave-back", 100, {
            opacity: 0
        }, );

    var sceneG = new ScrollMagic.Scene({
            triggerElement: "#pinG",
            duration: 2000
        })
        //.setTween(tween2)
        .setTween(tlG)
        .setPin("#ser1", {
            pushFollowers: true
        })
        .addIndicators()
        .addTo(controller);



    var tlW = new TimelineMax()
        .from(".error", 260, {
            opacity: 0
        }, )
        .from("#load", 260, {
            opacity: 0
        }, )
        .from("#try", 260, {
            opacity: 0
        }, )
        .to("pause", 150, {
            x: -2000,
            ease: Linear.easeNone,
            opacity: 0
        }, );

    var sceneW = new ScrollMagic.Scene({
            triggerElement: "#pinW",
            duration: 1000
        })
        //.setTween(tween2)
        .setTween(tlW)
        .setPin("#ser2", {
            pushFollowers: true
        })
        //  .addIndicators()
        .addTo(controller);


});




new TypeIt('#ur', {
        speed: 200,
        cursor: true,
        waitUntilVisible: true,
        loop: true,
    })
    .type('better')
    .pause(1500)
    .delete(6)
    .pause(250)
    .type('unique')
    .pause(1500)
    .delete(6)
    .pause(250)
    .type('interactive')
    .pause(1500)
    .delete(11)
    .pause(250)
    .type('different')
    .pause(1500)
    .delete(9)
    .pause(250)
    .type('special')
    .pause(1500)
    .delete(7)
    .pause(250)
    .type('creative')
    .pause(1500)
    .delete(8)
    .pause(250)
    .type('extraordinary')
    .pause(1500)
    .delete(13)
    .pause(250)
    .go();






$("#form").submit(function(event) {

    event.preventDefault();

    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (!isValidEmailAddress($("#email").val())) {

        alert("not valid");

    }


});




var out = document.getElementById("out");
out.scrollTop = out.scrollHeight - out.clientHeight;
var c = 0;
var add = setInterval(function() {
    // allow 1px inaccuracy by adding 1
    var isScrolledToBottom = out.scrollHeight - out.clientHeight <= out.scrollTop + 1;
    console.log(out.scrollHeight - out.clientHeight, out.scrollTop + 1);
    var newElement = document.createElement("div");
    // scroll to bottom if isScrolledToBotto
    if (isScrolledToBottom)
        out.scrollTop = out.scrollHeight - out.clientHeight;
}, 1000);


(function($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

$(window).scroll(function(event) {

    $(".p1").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("slide-top");
        }
    });

});