$(document).ready(function(){
		
	$('#noah p span').hover(function(){
		$('#noah div').css({'width':'190px'});
		$('#noah div').stop().clearQueue().toggleClass('hehe');
		$('#noah div span').css({'display':'inline'});
		$('#where p a').css({'color':'#fff'})
		$('body').css({'backgroundImage':'url(img/background.jpg)', 'backgroundSize':'cover', 'backgroundRepeat':'no-repeat'});
	},function(){
		$('#noah div').css({'width':'200px'});
		$('#noah div').stop().clearQueue().removeClass();
		$('#noah div span').delay(3000).fadeOut(1000,'linear');
	});
});
  
