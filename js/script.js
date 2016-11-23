//
//--------------------------------------------------Gallery-----------------------
//

//Start slider gallery
$(document).ready(function () {
    $(".fancybox-thumb")
        .attr('rel', 'gallery')
        .fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            padding: 0,
            margin: 5,
            nextEffect: 'fade',
            prevEffect: 'none',
            autoCenter: false,
            afterLoad: function () {
                $.extend(this, {
                    aspectRatio: false,
                    type: 'html',
                    width: '100%',
                    height: '100%',
                    content: '<div class="fancybox-thumb" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
                });
            },
            beforeShow: function () {
                /* Disable right click */
                $.fancybox.wrap.bind("contextmenu", function (e) {
                    return false;
                });

            },
            helpers: {
                title: {
                    type: 'outside'
                },
                thumbs: {
                    width: 50,
                    height: 50
                }

            }

        });

});




//------- top food menu description-----

$(".click").click(function () {
    if ($(this).parents('.ttp').find('.descript').is(":hidden")) {
        $(this).parents('.ttp').find('.descript').show("slow");
        $(this).parents('.ttp').find('.click').val("Згорнути");
    } else {
        $(this).parents('.ttp').find('.descript').hide("slow");
        $(this).parents('.ttp').find('.click').val("Детальніше");
    }
});


//--------------------------------- parallax for main page----------------
$(document).ready(
    function () {
        $(window).bind("scroll", function (event) {
            parallaxScroll();
        })
    })

function parallaxScroll() {
    var scrolled = $(window).scrollTop();

    $(".scrl").css("top", (0 - (scrolled * 0.09)) + "px");
    $(".scrl").css("left", (0 - (scrolled * 0.045)) + "px");
    $(".scrl2").css("top", (0 - (scrolled * 0.09)) + "px");
    $(".scrl2").css("left", (0 - (scrolled * 0.045)) + "px");
    $(".scrl3").css("top", (0 - (scrolled * 0.09)) + "px");
    $(".scrl3").css("left", (0 - (scrolled * 0.05)) + "px");

    $(".scrl4").css("top", (0 - (scrolled * 0.06)) + "px");
    $(".scrl4").css("left", (0 - (scrolled * 0.015)) + "px");
    $(".scrl5").css("top", (0 - (scrolled * 0.06)) + "px");
    $(".scrl5").css("left", (0 - (scrolled * 0.02)) + "px");
    $(".scrl6").css("top", (0 - (scrolled * 0.06)) + "px");
    $(".scrl6").css("left", (0 - (scrolled * 0.02)) + "px");

    $(".scrl7").css("top", (0 - (scrolled * 0.03)) + "px");
    $(".scrl7").css("left", (0 + (scrolled * 0.02)) + "px");
    $(".scrl8").css("top", (0 - (scrolled * 0.03)) + "px");
    $(".scrl8").css("left", (0 + (scrolled * 0.02)) + "px");
    $(".scrl9").css("top", (0 - (scrolled * 0.03)) + "px");
    $(".scrl9").css("left", (0 + (scrolled * 0.02)) + "px");

    $(".scrl10").css("left", (0 + (scrolled * 0.06)) + "px");
    $(".scrl11").css("left", (0 - (scrolled * 0.020)) + "px");
}