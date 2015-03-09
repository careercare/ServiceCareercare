
// 롤링배너
$(function(){
	var visual_num = 1;
	$('.visual-box #visual01').css('display','block');
	$('.visual-box .prev').click(function(){
		if(visual_num == 1){
			visual_num = 3;
		}else{
			visual_num --;
		}
		$('.visual-box > div').removeClass('active');
		$('.visual-box #visual0' + visual_num).addClass('active').fadeIn(500,function(){
			$('.visual-box > div').css('display','none');
			$('.visual-box #visual0' + visual_num).css('display','block');
		});
		return false;
	});

	$('.visual-box .next').click(function(){
		if(visual_num == 3){
			visual_num = 1;
		}else{
			visual_num ++;
		}
		$('.visual-box > div').removeClass('active');
		$('.visual-box #visual0' + visual_num).addClass('active').fadeIn(500,function(){
			$('.visual-box > div').css('display','none');
			$('.visual-box #visual0' + visual_num).css('display','block');
		});
		return false;
	});

});

