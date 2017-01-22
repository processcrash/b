/**
 * Created by admin on 2016/9/14.
 */
$(function () {
	var c = getQueryParam('c');
	changeDiv(c);
	setEvent();
});

function getQueryParam(name) {
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null) {return unescape(r[2]);}
	return null;
}

function changeDiv(n) {
	$(".nav3").removeClass("ck_nav");
	$(".nav2").addClass("ck_nav");
	$(".top_pic img").attr("src", "img/top_bg2.png");

	if (n == 'server') {
		$(".menu_list:nth-child(2)").closest("li").siblings().removeClass("active").removeClass("li_bg");
		$(".menu_list:nth-child(2)").addClass("active").addClass("li_bg");
		$(".content_right").load("embed/source_right.html");
		$(".load_content").load("embed/source_introduct.html");
	}
	if (n == 2) {
		$(".menu_list:nth-child(3)").closest("li").siblings().removeClass("active").removeClass("li_bg");
		$(".menu_list:nth-child(3)").addClass("active").addClass("li_bg");
		$(".content_right").load("embed/net_right.html");
		$(".load_content").load("embed/net_introduct.html");
	}
	if (n == 3) {
		$(".menu_list:nth-child(4)").closest("li").siblings().removeClass("active").removeClass("li_bg");
		$(".menu_list:nth-child(4)").addClass("active").addClass("li_bg");
		$(".content_right").load("embed/electricity_right.html");
		$(".load_content").load("embed/clearBox.html");
	}
	if (n == 'product') {
		$(".menu_list:nth-child(7)").closest("li").siblings().removeClass("active").removeClass("li_bg");
		$(".menu_list:nth-child(7)").addClass("active").addClass("li_bg");
		$(".content_right").load("embed/dmp_right.html");
		$(".load_content").load("embed/dmp_introduct.html");

		$(".nav2").removeClass("ck_nav");
		$(".nav3").addClass("ck_nav");
		$(".top_pic img").attr("src","images/top_bg1.png");
	}
}

function setEvent() {
	$(".menu_list").click(function(){
		$(this).closest("li").siblings().removeClass("active").removeClass("li_bg");
		$(this).addClass("active").addClass("li_bg");
	});

	$("#source, #net, #electronic").on("click",function(){
		$(".nav3").removeClass("ck_nav");
		$(".nav2").addClass("ck_nav");
		$(".top_pic img").attr("src","images/top_bg2.png");
	});
	$("#DMP, #DSP, #DCRM, #NMS, #PAS").on("click",function(){
		$(".nav2").removeClass("ck_nav");
		$(".nav3").addClass("ck_nav");
		$(".top_pic img").attr("src","images/top_bg1.png");
	});
	$("#source").on("click",function(){
		$(".content_right").load("embed/source_right.html");
		$(".load_content").load("embed/source_introduct.html");
	});
	$("#net").on("click",function(){
		$(".content_right").load("embed/net_right.html");
		$(".load_content").load("embed/net_introduct.html");
	});
	$("#electronic").on("click",function(){
		$(".content_right").load("embed/electricity_right.html");
		$(".load_content").load("embed/clearBox.html");
	});
	$("#DMP").on("click",function(){
		$(".content_right").load("embed/dmp_right.html");
		$(".load_content").load("embed/dmp_introduct.html");
	});

	$("#DSP").on("click",function(){
		$(".content_right").load("embed/dsp_right.html");
		$(".load_content").load("embed/dsp_introduct.html");
	});
	$("#PAS").on("click",function(){
		$(".content_right").load("embed/pas_right.html");
		$(".load_content").load("embed/pas_introduct.html");
	});
	$("#DCRM").on("click",function(){
		$(".content_right").load("embed/dcrm_right.html");
		$(".load_content").load("embed/dcrm_introduct.html");
	});
	$("#NMS").on("click",function(){
		$(".content_right").load("embed/nms_right.html");
		$(".load_content").load("embed/clearBox.html");
	});

	$(".address").on("click",function(){
		$(".bg").show();
		$(".address_map").show();
	});
	$(".weixin,.fenxiang").on("click",function(){
		$(".bg").show();
		$(".ewm_img").show();
	});
	$(".bg,.ewm_img,.address_map,.about_bottom").on("click",function(){
		$(".bg").hide();
		$(".ewm_img").hide();
		$(".address_map").hide();
		$(".about_bottom").hide();
	});

	$(".more").on("click",function(){
		$(".more").html("正在加载...");
		setTimeout(function(){
			$(".more").html("加载更多");
		},2000);
	});
}