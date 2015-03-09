// gnb
$(function(){

	// GNB
	$('#gnb>ul>li>a').on('mouseenter focus', function() {
		
		$(this).parent('li').addClass('active').siblings('li').removeClass('active');
		$("#gnb_bg").slideDown(100);
		$('#gnb>ul>li>a').parent().find('ul').slideDown(100);
	});

	$('#gnb').on('mouseleave blur', function() {
		$('#gnb>ul>li').removeClass('active');
		$("#gnb_bg").slideUp(150);
		$('#gnb>ul>li>a').parent().find('ul').slideUp(150);
	});

	var open = 1;
	$('.family h2 a').click(function(){
		if(open ==1){
			$(this).parent().next().slideDown(150);
			open = 0;
		}else{
			$(this).parent().next().slideUp(150);
			open = 1;
		}
		return false;
	});
});

