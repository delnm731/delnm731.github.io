$(function(){
    
    function dayClick(){
        
         var day = $("#day").val();
         $("#sentence .day").html(day); 
        
         var color = $("#color").val();
         $("#sentence .color").html(color);
        
         var food = $("#food").val();
         $("#sentence .food").html(food);

        var body = $("#body").val();
         $("#sentence .body").html(body); 
        
        var company = $("#company").val();
         $("#sentence .company").html(company); 
}
   
    $("#dayCTA").click(dayClick); 
   
})

$(function(){
    
    function dayClick(){
        
        
            $("#sentence").fadeIn();

         var day = $("#day").val();
         $("#sentence .day").html(day); 
  
         var color = $("#color").val();
         $("#sentence .color").html(color);
        
        var food = $("#food").val();
         $("#sentence .food").html(food);
        
        var body = $("#body").val();
         $("#sentence .body").html(body); 
        
        var day = $("#company").val();
         $("#sentence .company").html(comapany); 
}
    $("#sentence").hide();
    $("#dayCTA").click(dayClick); 
   
})