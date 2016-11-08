//--------------------------------Paralax for main page-----------------------------
/*$(document).ready(
    function() {
        dotNav(); // викликаємо функцію одразу, щоб як тілкьи загружався док. вона вже могла викор.
        $(window).bind("scroll", function(event) {
            parallaxScroll();
            dotNav();
        })



        $("nav#dots a").hover( // функція вспливання секції
            function() {
                $(this).prev("h1").show()
            },
            function() {
                $(this).prev("h1").hide()
            }
        )
    }
)

function parallaxScroll() { // розраховуємо свій час для кожного з елементів для ефекту паралакс! Це ОСНОВНЕ!!!
    var scrolled = $(window).scrollTop();
    $("#parallax-bg1").css("top", (0 - (scrolled * 0.25)) + "px");
    $("#parallax-bg2").css("top", (0 - (scrolled * 0.5)) + "px");
    $("#parallax-bg3").css("top", (0 - (scrolled * 0.75)) + "px");
}*/

//--------------------------------menu pages-----------------------------
function addPage(page, book) {

    var id, pages = book.turn('pages');

    // Create a new element for this page
    var element = $('<div />', {});

    // Add the page to the flipbook
    if (book.turn('addPage', element, page)) {

        // Add the initial HTML
        // It will contain a loader indicator and a gradient
        element.html('<div class="gradient"></div><div class="loader"></div>');

        // Load the page
        loadPage(page, element);
    }

}

function loadPage(page, pageElement) {

    // Create an image element

    var img = $('<img />');

    img.mousedown(function (e) {
        e.preventDefault();
    });

    img.load(function () {

        // Set the size
        $(this).css({
            width: '100%',
            height: '100%'
        });

        // Add the image to the page after loaded

        $(this).appendTo(pageElement);

        // Remove the loader indicator

        pageElement.find('.loader').remove();
    });

    // Load the page

    img.attr('src', 'img/menu' + page + '.jpg');

}


function loadLargePage(page, pageElement) {

    var img = $('<img />');

    img.load(function () {

        var prevImg = pageElement.find('img');
        $(this).css({
            width: '100%',
            height: '100%'
        });
        $(this).appendTo(pageElement);
        prevImg.remove();

    });

    // Loadnew page

    img.attr('src', 'img/menu' + page + '-large.jpg');
}


function loadSmallPage(page, pageElement) {

    var img = pageElement.find('img');

    img.css({
        width: '100%',
        height: '100%'
    });

    img.unbind('load');
    // Loadnew page

    img.attr('src', 'img/menu' + page + '.jpg');
}



// http://code.google.com/p/chromium/issues/detail?id=128488
function isChrome() {

    return navigator.userAgent.indexOf('Chrome') != -1;

}

//--------------------------------------------------Gallery-----------------------
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