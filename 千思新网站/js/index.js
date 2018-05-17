//头部轮播图
var index= 0;
			var lev=$(".tu li").length;//3
			var timer = setInterval(left, 5000);			
			$(".banner").mouseenter(function(){clearInterval(timer)});
		    $(".banner").mouseleave(function(){timer =setInterval(left, 5000)});
			function left(){
					index--;
					if (index < 0) {
						index =	lev-1;
					}			
					txz();
					changeCircles();
			}
			$(".leftbtn").mousedown(function (){
				 if($(".tu li:animated").length){return}
					index--;
					if (index < 0) {
						index =	lev-1;
					}					
					txz();
					changeCircles();
			});			
			$(".rightbtn").mousedown(function (){	
				if($(".tu li:animated").length){return}
					index++;
					if (index > lev-1) {
						index =	0;
					}						
					txz();
					changeCircles();
			})
//			圆点切换
			for(var i=0;i<$(".btn li").length;i++){				
				 (function(i){
			        $(".btn li").eq(i).mouseenter(function(){
			        	if($(".tu li:animated").length){return};
			        	index = i;
			        	txz();
			        	changeCircles();
			        });
			      })(i);
			}
			//更换小圆点颜色
		    function changeCircles() {
		      var n = index;
		     for(var i =0;i<$(".btn li").length;i++){
		     	$(".btn li").eq(i).css({"background":"white"});
		     }
		       $(".btn li").eq(n).css({"background":"#007AFF"})
		    }
			function txz(){
				if(index == 2){
					$(".tu li").eq(2).animate({left:'-30%'},1000,function(){//2
						$(".tu li").eq(2).css({"z-index":"0"}).animate({left:'50%',width:"100%",height:"600px",opacity:".6"},500)
					});
					$(".tu li").eq(1).animate({width:"84.1%",height:"400px",opacity:"1"},1000,function(){//1
						$(".tu li").eq(1).css({"z-index":"3"})
					});					
					$(".tu li").eq(0).animate({left:"150%"},1000,function(){//0
						$(".tu li").eq(0).css({"z-index":"2"}).animate({left:'50%',width:"91.6%",height:"500px",opacity:".8"},500)
					})
				}
				if(index == 1){
					$(".tu li").eq(1).animate({left:'-30%'},1000,function(){//2
						$(".tu li").eq(1).css({"z-index":"0"}).animate({left:'50%',width:"100%",height:"600px",opacity:".6"},500)
					});
					$(".tu li").eq(0).animate({width:"84.1%",height:"400px",opacity:"1"},1000,function(){//1
						$(".tu li").eq(0).css({"z-index":"3"})
					});					
					$(".tu li").eq(2).animate({left:"150%"},1000,function(){//0
						$(".tu li").eq(2).css({"z-index":"2"}).animate({left:'50%',width:"91.6%",height:"500px",opacity:".8"},500)
					})
				}
				if(index == 0){
					$(".tu li").eq(0).animate({left:'-30%'},1000,function(){//2
						$(".tu li").eq(0).css({"z-index":"0"}).animate({left:'50%',width:"100%",height:"600px",opacity:".6"},500)
					});
					$(".tu li").eq(2).animate({width:"84.1%",height:"400px",opacity:"1"},1000,function(){//1
						$(".tu li").eq(2).css({"z-index":"3"})
					});					
					$(".tu li").eq(1).animate({left:"150%"},1000,function(){//0
						$(".tu li").eq(1).css({"z-index":"2"}).animate({left:'50%',width:"91.6%",height:"500px",opacity:".8"},500)
					})
				}
			}
			//品牌主材
			/*报价管家报价*/
$("input[name='mianji']").bind("input propertychange", function () {
                var a = $(this).parents(".bj_left_box"),b = $(a).find("input[name='mianji']").val();
                60 >= parseInt(b) ? ($(a).find("select[name='baojia_shi']").val("1"), $(a).find("select[name='baojia_ting']").val("1"),$(a).find("select[name='baojia_wei']").val("1")): 60 < parseInt(b) && 90 > parseInt(b) ? ($(a).find("select[name='baojia_shi']").val("2"), $(a).find("select[name='baojia_ting']").val("1"), $(a).find("select[name='baojia_wei']").val("1")): 90 <= parseInt(b) && 136 > parseInt(b) ? ($(a).find("select[name='baojia_shi']").val("3"), $(a).find("select[name='baojia_ting']").val("2"), $(a).find("select[name='baojia_wei']").val("2")): 136 <= parseInt(b) && ($(a).find("select[name='baojia_shi']").val("4"), $(a).find("select[name='baojia_ting']").val("2"), $(a).find("select[name='baojia_wei']").val("2"))
     }); 
function submitBaojiaForm(){
	var meiping=688;//每平方多少钱
	var name 		= $('#baojia_name').val(); 
	var mobile 		= $('#baojia_mobile').val(); 
	var xinfang_loupan=$('#xinfang_loupan').val();
	var mianji  	= $('#baojia_mianji').val();
	var username = /^([\u4e00-\u9fa5]){2,7}$/;//姓名正则表达
	var checkmianji = /^[0-9]+\.?[0-9]*$/;  //正则验证面积只能填写数字
	var checkmobile = /^1[3|4|5|7|8][0-9]{9}$/;  //正则手机验证
	var shi 	= $('#baojia_shi').val();
	var ting    = $('#baojia_ting').val();
	var wei     = $('#baojia_wei').val();


	if(mianji=='' || mianji=='房屋面积' || mianji < 10 || isNaN(mianji)){
		alert('请输入你的房屋面积');
		return false;
	}else if(!checkmianji.test(mianji)){
		alert('面积格式不正确');
		return false;
	};
	
     
    if(xinfang_loupan=='' || xinfang_loupan=='请输入您的楼盘名称' || xinfang_loupan=='楼盘名称'){
		alert('请输入你的楼盘名称');
		return false;
	};
	if(name=='' || name=='请输入您的姓名' || name=='您的称呼'){
		alert('请输入姓名');
		return false;
	}else if(!username.test(name)){
		alert('姓名格式不正确');
		return false;
	};

	if(mobile==''  || mobile=='请输入您的手机号码' || mobile=='您的联系方式'){
		alert('请输入你的手机号码');
		return false;
	}else if(!checkmobile.test(mobile)){
		alert('手机格式不正确');
		return false;
	};


	$('#baojia_huxing').val(shi+' '+ting+' '+wei);
	$("#submitBaojiaForm").removeAttr("onclick");  //提交成功前锁定该按钮，防止重复提交

	$.ajax({
        type: "POST",
        url: "#", //提交到后台文件
        data: $('#baojiaForm').serialize(), //表单序列化传值
        success: function(data) {
		        alert('提交成功');
		        var money = mianji*828;
				$(".mt-pay").html(parseInt(money));
				$(".rg-m").html(parseInt(money*0.3));
				$(".cl-m").html(parseInt(money*0.7));
				$(".sj-m").html(60).css("text-decoration","line-through");
				$(".zj-m").html(38).css("text-decoration","line-through");
            	$('#baojia_mobile').val('请输入您的手机号码');
            	$('#baojia_mianji').val('房屋面积');
            	$('#xinfang_loupan').val('楼盘名称');
            	$('#baojia_name').val('请输入你的姓名');
            	
            	//$('#baojia_name').val(''); 
            
	        	$("#submitBaojiaForm").attr({"onclick":"submitBaojiaForm()"}); //提交成功前锁定该按钮，防止重复提交
        }
    });
}
//brand
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

