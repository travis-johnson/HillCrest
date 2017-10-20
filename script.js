        var width = $(window).width();
        if (width <= 1024) {
            $("#menu-button").click(function() {
                $(".menu-options").toggleClass("visible");
            });
        } else if (width >= 1024) {
            $(".menu-options").show();
        }