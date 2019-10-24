$().ready(function(){
  
  $("#barcode").on("keypress",function(e){
    
    
    if(e.which==13 || e.keyCode==13)
    {
      alert("Scan done");
      
      $("#keyCodesView").text($(this).val());
    }
  })
  
  
});
