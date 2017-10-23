        // $(document).ready(function() {
        //     var width = $(window).width();
        //     if (width <= 1024) {
        //         $(".menu-button").click(function() {
        //                 $(".menu-options").toggleClass("visible");
        //             }),
        //             $('.sub-btn').click(function() {
        //                 $(this).next('.sub-menu-opt').toggleClass('sub-drop');

        //             });



        //     } else if (width >= 1024) {

        //       
        //     }


        $(".menu-button").click(function() {
            $(".menu-options").toggleClass("visible");
        });
        $('.sub-btn').click(function() {
            $(this).next('.sub-menu-opt').toggleClass('sub-drop');
            $(this).next('.sub-menu-opt').toggleClass('sub-drop-dt');

        });