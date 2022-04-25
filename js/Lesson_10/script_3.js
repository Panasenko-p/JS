(function($) {
    $(function() {
       $(".tab_list").on('click', function(e){
        $(".tab_list > li").removeClass("active");
        $(e.target).addClass("active");
        $(".tab_content").removeClass("active_text");
        console.log(index);
        $(".tab_content").eq(index).addClass("active_text");
        $(this).removeClass("active");
       })
    });
  })(jQuery);