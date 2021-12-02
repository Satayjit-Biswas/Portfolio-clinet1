(function ($) {
    $(window).on("load", function () {
        //===== Prealoder
        $(".preloader").delay(500).fadeOut(500);

        //02. Isotope Initialize
        var $grid = $(".grid").isotope({
            // options
            itemSelector: ".grid-item",
            layoutMode: "fitRows",
        });

        // change is-checked class on buttons
        var $buttonGroup = $(".filters");
        $buttonGroup.on("click", "li", function (event) {
            $buttonGroup.find(".is-checked").removeClass("is-checked");
            var $button = $(event.currentTarget);
            $button.addClass("is-checked");
            var filterValue = $button.attr("data-filter");
            $grid.isotope({
                filter: filterValue,
            });
        });
    });

    $(document).ready(function () {
        //05. sticky header
        function sticky_header() {
            var wind = $(window);
            var sticky = $("header");
            wind.on("scroll", function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass("sticky");
                } else {
                    sticky.addClass("sticky");
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 600) {
                $(".back-to-top").fadeIn(200);
            } else {
                $(".back-to-top").fadeOut(200);
            }
        });

        //Animate the scroll to yop
        $(".back-to-top").on("click", function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                1500
            );
        });

        $("#menu li a").bind("click", function (event) {
            var $anchor = $(this);
            var headerH = "70";
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop:
                            $($anchor.attr("href")).offset().top -
                            headerH +
                            "px",
                    },
                    1200,
                    "easeInSine"
                );
            event.preventDefault();
        });

        $(".demo-header-area a").bind("click", function (event) {
            var $anchor = $(this);
            var headerH = "70";
            $("html, body")
                .stop()
                .animate(
                    {
                        scrollTop:
                            $($anchor.attr("href")).offset().top -
                            headerH +
                            "px",
                    },
                    1200,
                    "easeInSine"
                );
            event.preventDefault();
        });

        // Hamburger-menu
        $(".hamburger-menu,#menu li").on("click", function () {
            $(".hamburger-menu .line-top, #menu ").toggleClass("current");
            $(".hamburger-menu .line-center").toggleClass("current");
            $(".hamburger-menu .line-bottom").toggleClass("current");
        });

        //06. magnific Popup Initialize
        function magnificPopupInit() {
            $(".popup-section a").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
                zoom: {
                    enabled: true,
                },
            });
        }
        magnificPopupInit();

        //10. Client Slider Initialize
        function client_carouselInit() {
            $(".owl-carousel.client_carousel").owlCarousel({
                loop: true,
                margin: 30,
                items: 5,
                autoplay: true,
                autoplayTimeout: 1500,
                autoplayHoverPause: true,
                nav: false,
                dots: false,
                responsive: {
                    0: {
                        items: 1,
                    },
                    390: {
                        items: 2,
                    },
                    575: {
                        items: 3,
                    },
                    768: {
                        items: 4,
                    },
                    992: {
                        items: 5,
                    },
                },
            });
        }
        client_carouselInit();
    });
})(jQuery);
// 12. TYPE ANIMATION
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
//inview js
$(".service-text").on("inview", function (event, visible) {
    if (visible) {
        // service text
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: ".ml5 .line",
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700,
            })
            .add({
                targets: ".ml5 .line",
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
            })
            .add({
                targets: ".ml5 .ampersand",
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            })
            .add({
                targets: ".ml5 .letters-left",
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=300",
            })
            .add({
                targets: ".ml5 .letters-right",
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            });
        $(this).unbind("inview");
    }
});

//Counter Number
$(".counter-area").on("inview", function (event, visible) {
    if (visible) {
        $(this)
            .find(".count-up")
            .each(function () {
                var $this = $(this);
                $({
                    Counter: 0,
                }).animate(
                    {
                        Counter: $this.text(),
                    },
                    {
                        duration: 1500,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        },
                    }
                );
            });
        $(this).unbind("inview");
    }
});
//inview js
$(".portfolio-area").on("inview", function (event, visible) {
    if (visible) {
        // service text
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: ".ml6 .line",
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700,
            })
            .add({
                targets: ".ml6 .line",
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
            })
            .add({
                targets: ".ml6 .ampersand",
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            })
            .add({
                targets: ".ml6 .letters-left",
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=300",
            })
            .add({
                targets: ".ml6 .letters-right",
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            });
        $(this).unbind("inview");
    }
});
$(".blog-area").on("inview", function (event, visible) {
    if (visible) {
        // service text
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: ".ml7 .line",
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700,
            })
            .add({
                targets: ".ml7 .line",
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
            })
            .add({
                targets: ".ml7 .ampersand",
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            })
            .add({
                targets: ".ml7 .letters-left",
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=300",
            })
            .add({
                targets: ".ml7 .letters-right",
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            });
        $(this).unbind("inview");
    }
});
$(".client-review-area").on("inview", function (event, visible) {
    if (visible) {
        // service text
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: ".ml8 .line",
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700,
            })
            .add({
                targets: ".ml8 .line",
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
            })
            .add({
                targets: ".ml8 .ampersand",
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            })
            .add({
                targets: ".ml8 .letters-left",
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=300",
            })
            .add({
                targets: ".ml8 .letters-right",
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            });
        $(this).unbind("inview");
    }
});
$(".contact-area").on("inview", function (event, visible) {
    if (visible) {
        // service text
        anime
            .timeline({
                loop: false,
            })
            .add({
                targets: ".ml9 .line",
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700,
            })
            .add({
                targets: ".ml9 .line",
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => -0.625 + 0.625 * 2 * i + "em",
            })
            .add({
                targets: ".ml9 .ampersand",
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            })
            .add({
                targets: ".ml9 .letters-left",
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=300",
            })
            .add({
                targets: ".ml9 .letters-right",
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: "-=600",
            });
        $(this).unbind("inview");
    }
});
