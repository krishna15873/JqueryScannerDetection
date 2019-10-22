// Code goes here

$().ready(function(){
  
    $("#barcode, #batch").scannerDetection({
  
  	//timeBeforeScanTest: 200, // wait for the next character for upto 200ms
	avgTimeByChar: 100,
        endChar: [13],
	onComplete: function(barcode, qty){
    
    $("#gross").focus();
    
    } // main callback function	
  
    
  });
  
});
