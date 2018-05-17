$(document).ready(function(e) {
	
	function remainTime(){
		var x=15;
		var y=5;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		$("#home").append().text(rand+"+");
		
		
	}
	function remainTime2(){
		var x=15;
		var y=5;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		$("#city").append().text(rand+"+");
		
		
	}
	function remainTime3(){
		var x=15;
		var y=5;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		$("#company").append().text(rand+"+");
	}
	function remainTime4(){
		var x=20;
		var y=40;
		var rand = parseInt(Math.random() * (x - y + 1) + y);
		$("#barnd").append().text(rand+"+");
	}
	setInterval(remainTime,1000)
	setInterval(remainTime2,1000)
	setInterval(remainTime3,1000)
	setInterval(remainTime4,1000)
	
	 $('.video ul li:gt(0)').hide();//大于0的，也就是除了第一个以外的LI全部隐藏
	var n=0;//定义变量N 代表图片索引值（顺序）
	var len=$('.video ul li').length//求出LI的个数
	//alert(len)
	var t//设置变量T用于存放定时器
	function play(){//定义函数PLAY，用于封装播放
		$('.video ul li').eq(n).show().siblings().hide();//将定于N的li显示，其他li隐藏
//		$('#num span').eq(n).addClass('on').siblings().removeClass('on')//将类ON赋给等于N的SPAN
		}
	play();//调用函数PLAY
	
	function autoPlay(){//定义自动播放函数
		t=setInterval(function(){//使用变量T封装定时器
			n++;//n自动加1
			if(n>=len){// 判断N的值是否超出LI的个数
				n=0;//如果超出，也就是条件为真，n赋值为0，也就是回到第一张图片
				}
			play();
			//alert(n);
			},2000)
	}
	autoPlay();
	
	$('.video').hover(function(){
		clearInterval(t)//当鼠标进过最大的div banner的时候，清除定时器T
		},function(){
			autoPlay();//当鼠标离开div banner的时候，重新调用AUTOPLAY进行自动播放
			})
	$('#next').click(function(){
		    n++;//n自动加1
			if(n>=len){// 判断N的值是否超出LI的个数
				n=0;//如果超出，也就是条件为真，n赋值为0，也就是回到第一张图片
				}
			play();
		})
	$('#prev').click(function(){
			if(n<=0){// 判断N的值是否超出LI的个数
				n=len;//如果超出，也就是条件为真，n赋值为0，也就是回到第一张图片
				}
			n--;//n自减1
			play();
		})
//	$('#num span').each(function(index) {//求每个span的索引值
//      $(this).click(function(){//点击这个span（当前被点击的span）
//			n=index;//将当前被点击的span的索引值index，赋值给N
//			play();//播放当前N值
//			})
//  });
//	$("#next").click(function(){
//		
//		$('video').prop('src','video/movie+'id'.mp4')
//	})
//	$("#prev").click(function(){
//		$('video').prop('src','video/movie.mp4')
//	})
//	
//	var len=$('.Style_img ul li').length//求LI的个数
//	//alert(len)
//	var ulW=len*640;//求UL的宽度
//	var n=0;//定义变量N 代表图片索引值（顺序）
//	
//	$('.Style_img ul').css({'width':ulW+'px'})//将求出的UL宽赋值给UL的CSS样式
//	var i=0;
//	function play(){//定义函数PLAY，用于封装播放
//		$('.Style_img ul').animate({marginLeft:'-640px'},function(){
//		$(this).css({'margin-left':0}).find('li:first').appendTo(this);
//			});
//		$('#num span').eq(n).addClass('on').siblings().removeClass('on');//将类ON赋给等于N的SPAN
//		$('.Style_img ul li div').eq(n).addClass('active').siblings().removeClass('active');
//		}
//	$('#num span').each(function(index) {//求每个span的索引值
//      $(this).click(function(){//点击这个span（当前被点击的span）
//			n=index;//将当前被点击的span的索引值index，赋值给N
//			play();
//			})
//  });
})