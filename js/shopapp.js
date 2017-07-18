// 下拉框
$(function(){
	$(".header_outside_address").click(function(){
		if($(".header_outside_address_list").is(':hidden')){
			$(".header_outside_address_list").show();
			$(".header_outside_address img").css("transform","rotate(-180deg)");
		}else {
			$(".header_outside_address_list").hide();
			$(".header_outside_address img").css("transform","rotate(360deg)");
		}
	});
	$(".header_outside_address_list li").click(function(){
		$(".header_outside_address span").html($(this).html());
	});
});

// 输入域获取、失去焦点
$(function(){
	$(".header_outside_search>input").focus(function(){
		$(".header_outside_search>input").prop("placeholder","");
	});
	$(".header_outside_search>input").blur(function(){
		$(".header_outside_search>input").prop("placeholder","请输入商品名、品类或商圈...");
	});
});

//倒计时

$(function(){
	var timer;
	function countTime(){
		var date=new Date();
		var now=new Date(2017,3,25);
		var year=date.getFullYear();
		var mon=date.getMonth();
		var day=date.getDate();
		var hour=date.getHours();
		var minu=date.getMinutes();
		var second=date.getSeconds();
		var temp=new Date(year,mon+1,0);
		var yearTemp = now.getFullYear()-year;
		var monTemp = now.getMonth()-mon;
		var dayTemp = now.getDate()-day
		var hourTemp = now.getHours()-hour
		var minTemp = now.getMinutes()-minu
		var ssTemp =  now.getSeconds()-second;
		if(ssTemp<0){
			minTemp-=1;	
			ssTemp+=60;	
		}
		if(minTemp<0){
			hourTemp-=1;
			minTemp+=60;
		}
		if(hourTemp<0){
			dayTemp-=1;
			hourTemp+=24;
		}
		if(dayTemp<0){
			monTemp-=1;
			dayTemp+=temp.getDate();
		}
		if(monTemp<0){
			yearTemp-=1;
			monTemp+=12;
		}
		dayTemp=checkNum(dayTemp);
		hourTemp=checkNum(hourTemp);
		minTemp=checkNum(minTemp);
		ssTemp=checkNum(ssTemp);
		$('#timestart>span').html(dayTemp+'天'+' '
			+hourTemp+':'+minTemp+':'+ssTemp+' ');
	}
	countTime();
	timer=setInterval(countTime,1000);
	function checkNum(num){
		if(num<10){
			num="0"+num;
		}
		return num;
	}
});

//查看全部团购
$(function(){
	$(".guess_like_icon:nth-child(5)").hide();
	$(".guess_like_icon:nth-child(6)").hide();
	$(".guess_like_lookAll").click(function(){
		if($(".guess_like_icon:nth-child(5)").is(":hidden")){
			$(".guess_like_icon:nth-child(5)").show();
			$(".guess_like_icon:nth-child(6)").show();
			$(".guess_like_lookAll i").removeClass('icon iconfont icon-xia');
			$(".guess_like_lookAll i").addClass('icon iconfont icon-d-arrow-up');
		}else {
			$(".guess_like_icon:nth-child(5)").hide();
			$(".guess_like_icon:nth-child(6)").hide();
			$(".guess_like_lookAll i").css("transform","rotate(-180deg)");
			$(".guess_like_lookAll i").removeClass('icon iconfont icon-d-arrow-up');
			$(".guess_like_lookAll i").addClass('icon iconfont icon-xia');
		}
	});
});