$(window).on('load', function(){
	setTimeout(removeLoader, 300);
});
function removeLoader(){
	$( "#preloader").fadeOut(200, function() {
		$( "#preloader" ).remove();  
	});
    $( "#pdpLeftPreloader").fadeOut(200, function() {
		$( "#pdpLeftPreloader" ).remove();
	});
}

// JQuery Ready Function Start
jQuery(document).ready(function($){	

	/*--------- Header Fix ------------*/
    var scrollMain = $(window).scrollTop();
    if (scrollMain < 10) {
        $("header").removeClass("fixed-top");
    } else {
        $("header").addClass("fixed-top");
    }
	$(window).on("scroll", function() {
        let scrollMain = $(window).scrollTop();
        if (scrollMain < 10) {
            $("header").removeClass("fixed-top");
        } else {
            $("header").addClass("fixed-top");
        }
	});
    
	
    /*--------- Copyrights Year ------------*/
    $("#copyrightYear").text(new Date().getFullYear())
	
    /*--------- Back To Top ------------*/
    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $("#backToTop").removeClass("opacity1");
            $("#backToTop").hide();
        } else {
            $("#backToTop").addClass("opacity1");
            $("#backToTop").show();
        }
	});
    $("#backToTop").on("click", function(){
        window.scrollTo(0, 0);
    })
    
    // Count Down Timer``
    setInterval(() => {
        let d = new Date();
        console.log(`${60 - d.getHours()}:${60 - d.getMinutes()}:${60 - d.getSeconds()}`);
        $(".time-counter").html(`${60 - d.getHours()}:${60 - d.getMinutes()}:${60 - d.getSeconds()}`);
    }, 1000);


    // Banner Section Slider
    $(".banner-slider-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        centerMode: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // Bidding Slider
    $(".biding-slider-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true,
        centerMode: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    // Auction Slider
    $(".auction-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: false,
        centerMode: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    // Categories Slider
    $(".categories-wrapper").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        centerPadding: '70px',
        arrows: false,
        fade: false,
        dots: false,
        centerMode: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
            breakpoint: 1440,
            settings: {
                slidesToShow: 5,
            }
            },
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
    });
    
    // Product Wrapper Slider
    $(".product-wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '30px',
        arrows: true,
        fade: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
            }
            },
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
    });

    // Client Slider
    $(".clients-wrapper").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
            }
            },
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
            },
            {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
            }
            }
        ]
    });

    // Feather Icon
    feather.replace()

});
// End : JQery Ready Function