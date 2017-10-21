        $(document).ready(function() {
            var width = $(window).width();
            if (width <= 1024) {
                $(".menu-button").click(function() {
                        $(".menu-options").toggleClass("visible");
                    }),
                    $('.sub-btn').click(function() {
                        $(this).next('.sub-menu-opt').toggleClass('sub-drop');

                    });



            } else if (width >= 1024) {
                $('.menu-options').show();
            }
        });

        $('.sub-btn').click(function(e) {
            e.stopPropagation();
        })


        // $('.sub-btn').click(function(){
        //     if($('.sub-menu-opt').css('display', 'none')){
        //     $('.sub-menu-opt').addClass('visible');

        //     }
        // });