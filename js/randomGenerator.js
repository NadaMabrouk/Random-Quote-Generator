$(document).ready(function(){
	
			
	$('button').click(function(){
		$('.container').fadeOut('slow',function() {
$.ajaxSetup({
    scriptCharset: "utf-8",
    contentType: "application/json; charset=utf-8"
});   
  $.ajax({
  	url:'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1', 
  	success: function(data){
  		var my_data = data.shift();
  		console.log(my_data);
        $('.quote').html(my_data.content);
		$('.author').html("&mdash; "+my_data.title);},
				cache: false
		  });  
	});
		var c = colorGen();
			$('body').animate({
				backgroundColor: c,
				color: c},
				1000);
			$('button, .twitter-share').animate({
				backgroundColor: c,
				borderColor: c},
				1000);
			$('.container').fadeIn('slow');
	
});
		
	$('.twitter-share').click(function() {
		var text= $(".quote").text();
		$(this).attr('href','https://twitter.com/intent/tweet?text=' + encodeURI(text) );
		$(this).attr('target','_blank');
	});

	function colorGen(){
		var letters = "0123456789abcdef";
		var color="#";
		for(var i=0;i<6;i++){
			var r = Math.floor(Math.random()*16);
			color += letters.charAt(r);
		}
		return color;
	}

});