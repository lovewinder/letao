$(function () {
  $(document).ajaxStart(function () {
    NProgress.start();
  });

  $(document).ajaxStop(function () {
    NProgress.done();
  })

  $(".top .slide").on("click", function () {
    $(".aslid").toggleClass("slideLeft")
    $(".top .slide").toggleClass("misPaddingLeft")
  })

  $(".top .quit").on("click", function () {
    $(".modal").modal("show")
  })

  $(".quit-sure").on("click", function () {
    location.href = "./login.html"
  })

  $(".doClass li:not('.notActive')").on("click", function () {
    $(this).addClass("active")
    $(this).siblings().removeClass("active")
  })

  $(".outUl>li.notActive").on("click", function () {
    $(".sg").parent().slideToggle(1000)
  })
})