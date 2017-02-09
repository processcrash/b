
/**
 * Created by admin on 2016/9/14.
 */
$(function(){
  $(window).on("scroll",function(){
    $(this).scrollTop()>100?$(".back_btn").fadeIn():$(".back_btn").fadeOut();
  })
  $(".back_btn").on("click",function(){
    $("html,body").animate({scrollTop:0},1000);
  });

  $(".dsp_list").hover(function(){
    $(".dsp_show").fadeIn(500);
  },function(){
    $(".dsp_show").fadeOut(100);
  })

  $(".pas_list").hover(function(){
    $(".pas_show").fadeIn(500);
  },function(){
    $(".pas_show").fadeOut(100);
  })
  $(".sjj_list").hover(function(){
    $(".sjj_show").fadeIn(500);
  },function(){
    $(".sjj_show").fadeOut(100);
  })
})
