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
    
    $(".request").hide();
    $(".overlay").hide();
    $(".error").hide();
    
    
    function myFunction() {
            
        if ($("#firstname").val() == "") {
            $(".error").show();  
            $(".overlay").show();
            $("#blur-region").addClass("blur-filter"); 
            reutrn;
        }
        else if ($("#lastname").val() == "") {
            $(".error").show();  
            $(".overlay").show();
            $("#blur-region").addClass("blur-filter");     
            return;
        }
                 
        else if ($("#emailaddress").val() == "") {
            $(".error").show();  
            $(".overlay").show();
            $("#blur-region").addClass("blur-filter");     
            return;
        }
           
                 
        $.ajax(
                {
                    url: "../data.json",
                    cache:false,
                    complete: function(data){
                    $(".request").show();  
                    $(".overlay").show();
                    $("#blur-region").addClass("blur-filter");
                    }
                }
      
            );

};

    $("#submit-btn").click(myFunction);
   function closeButton() {
        $(".request").hide();
        $(".error").hide();
        $(".overlay").hide(); 
        $("#blur-region").removeClass("blur-filter");
   }
    
    $(".close-request").click(closeButton);
    
    
});

