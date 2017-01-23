/**
 * Created by admin on 2016/9/14.
 */
$(function () {
	changeDiv(getQueryParam('id'));
	$(".about_li").hover(function () {
		switch ($(this).index()) {
			case 0:
				changeDiv(1);
				break;
			case 1:
				changeDiv(2);
				break;
			case 2:
				changeDiv(3);
				break;
			default:
				break;
		}
	});
});

function changeDiv(index) {
	if (index == 1) {
		$(".about_li:first-child").siblings().removeClass("active");
		$(".about_li:first-child").addClass("active");
		$(".about_li:first-child").find(".about_img").addClass("about_01_new");
		$(".about_li:first-child").siblings().find(".about_02").removeClass("about_02_new");
		$(".about_li:first-child").siblings().find(".about_03").removeClass("about_03_new");
		$(".about_About").show();
		$(".about_Concept").hide();
		$(".about_Development_history").hide();
	} else if (index == 2) {
		$(".about_li:nth-child(2)").siblings().removeClass("active");
		$(".about_li:nth-child(2)").addClass("active");
		$(".about_li:nth-child(2)").find(".about_img").addClass("about_03_new");
		$(".about_li:nth-child(2)").siblings().find(".about_01").removeClass("about_01_new");
		$(".about_li:nth-child(2)").siblings().find(".about_02").removeClass("about_02_new");
		$(".about_Development_history").show();
		$(".about_Concept").hide();
		$(".about_About").hide();
	} else {
		$(".about_li:last-child").siblings().removeClass("active");
		$(".about_li:last-child").addClass("active");
		$(".about_li:last-child").find(".about_img").addClass("about_02_new");
		$(".about_li:last-child").siblings().find(".about_01").removeClass("about_01_new");
		$(".about_li:last-child").siblings().find(".about_03").removeClass("about_03_new");
		$(".about_Concept").show();
		$(".about_Development_history").hide();
		$(".about_About").hide();
	}

}