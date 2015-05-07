$(function(){
    $(".hamburger").click(function(){
        $(".navigation").toggleClass("expand");
        $(".hamburger").toggleClass("expand");
        if ( $(".hamburger").hasClass("expand")) {
            $(".hamburger > img").attr("src", "resources/hide.jpg");
        } else {
            $(".hamburger > img").attr("src", "resources/hamburger.jpg");
        }
    });
});
