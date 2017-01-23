/**
 * Created by admin on 2016/9/9.
 */
$(function(){
   $(".pic img").on("click",function(){
       $(".bg").show();
       var src = $(this).attr("src");
       $(".about_bottom img").attr("src",src);
       $(".about_bottom").show();
   }) ;
});