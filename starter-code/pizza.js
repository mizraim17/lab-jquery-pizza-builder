// Write your Pizza Builder JavaScript in this file.

$(document).ready( function   () {
  x=true;
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");
   
  var x=$(".panel price>ul li").toArray();
  console.log(x[1]);
  // x[1].css("display","none");

  
  // x=$(".btn-pepperonni");
  // console.log("x",x);
  $(".btn-pepperonni").click(function(){
  x=($(".btn-pepperonni").hasClass("active"));
  console.log("x",x);

    if($(".btn-pepperonni").hasClass("active")){
      $('.btn-pepperonni').removeClass("active");
      $('.pep').toggle(function(){
        $('.pep').toggleClass("hide");
      });
      
      console.log("esta activado y agrego peperoni");
    }else{
      $('.pep').toggle(function(){
        $('.pep').toggleClass("hide");
      });
       $(".btn-pepperonni").addClass("active");
      console.log("esta desactivado y quito peperoni");
    }   
  });

  
  $(".btn-green-peppers").click(function(){ 
    if($(".btn-green-peppers").hasClass("active")){
      $('.btn-green-peppers').removeClass("active");
      $('.green-pepper').toggle(function(){
        $('.green-pepper').toggleClass("hide");
      });
      
      console.log("esta activado y agrego peppers");
    }else{
      $('.green-pepper').toggle(function(){
        $('.green-pepper').toggleClass("hide");
      });
       $(".btn-green-peppers").addClass("active");
      console.log("esta desactivado y quito peppers");
    }   
  });

  $(".btn-mushrooms").click(function(){ 
    if($(".btn-mushrooms").hasClass("active")){
      $('.btn-mushrooms').removeClass("active");
      $('.mushroom').toggle(function(){
        $('.mushroom').toggleClass("hide");
      });
      
      console.log("esta activado y agrego mushrooms");
    }else{
      $('.mushroom').toggle(function(){
        $('.mushroom').toggleClass("hide");
      });
       $(".btn-mushrooms").addClass("active");
      console.log("esta desactivado y quito mushrooms");
    }   
  });

  $(".btn-sauce").click(function(){ 
    if($(".btn-sauce").hasClass("active")){
        $('.btn-sauce').removeClass("active");
        $('.sauce').removeClass("sauce-white");
        
        console.log("esta activado y agrego sauce-white");
      }else
        {
          // x=.sauce-white;
          console.log($('.sauce-white'));
          
            $('.sauce').addClass("sauce-white");
            // $('.sauce-white').css("display","block");
           
          $(".btn-sauce").addClass("active");
          console.log("esta desactivado y agrego sauce-white");
        }   
    });

  $(".btn-crust").click(function(){      


  if($(".btn-crust").hasClass("active")){
    $('.btn-crust').removeClass("active");
    $('.crust').removeClass("crust-gluten-free");
    
    console.log("esta activado y agrego sauce-white");
  }else
    {
      // x=.sauce-white;
      console.log($('.sauce-white'));
      
        $('.crust').addClass("crust-gluten-free");
        // $('.sauce-white').css("display","block");
       
      $(".btn-crust").addClass("active");
      console.log("esta desactivado y agrego crust-gluten-free");
    }   
});

});