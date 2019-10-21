// Code goes here

$().ready(function(){
  
  $("#barcode, #batch").scannerDetection({
  
  timeBeforeScanTest: 200, // wait for the next character for upto 200ms
	avgTimeByChar: 100, // it's not a barcode if a character takes longer than 100ms
	onComplete: function(barcode, qty){
    
    alert(barcode);
    
    } // main callback function	
  
    
  });
  
});