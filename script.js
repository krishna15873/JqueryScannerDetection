// Code goes here

$().ready(function(){
  
  var keyCodeUp='';
  var keyCodeDown='';
  var keyCodePress='';
  
  $("#keydown").on("keydown",function(e){
    keyCodeDown+=e.which+" - ";
  })
  
  $("#keypress").on("keypress",function(e){
    keyCodePress+=e.which+" - ";
    
  })
  
  $("#keyup").on("keyup",function(e){
    keyCodeUp+=e.which+" - ";
  })
  
  
  $("button").click(function(){
    console.log("View Codes");
    
    $("#keyCodesView").html('');
    
    var htmlLong="Key Down =["+ keyCodeDown +"] <br/>";
    htmlLong+="Key Press =["+keyCodePress+"] <br/>";
    htmlLong+="Key Up =["+keyCodeUp+"] <br/>";
    
    
    $("#keyCodesView").html(htmlLong);
  
  
  keyCodeUp='';
   keyCodeDown='';
   keyCodePress='';
  
    
  });
  
  
  
});
