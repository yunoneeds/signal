$(document).ready(function(){
    $(function(){
        $(".boxes").draggable();
    });
});


let pictureone;
$(window).on("scroll", function(){
    pictureone=$(window).scrollTop();
    $(".newstory").css("background-size", 100+parseInt(pictureone/10)+"%");
});



$(".button_sectionfirst").click(function() {
    $(".sectionsecond").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
    $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_sectionsecond").click(function() {
    $(".sectionthird").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
    $(".sectionfirst").addClass("sectionnone").removeClass("sectionblock");
  });

  $(".button_sectionthird").click(function() {
    $(".sectionfirst").addClass("sectionblock").removeClass("sectionnone");
    $(".sectionthird").addClass("sectionnone").removeClass("sectionblock");
    $(".sectionsecond").addClass("sectionnone").removeClass("sectionblock");
  });
