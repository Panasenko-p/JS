(function($) {
    $(function() {
        $(".calc-btn").on('click',function(){
            if($(this).attr('data-role') =='number') {
                $('.display').val($('.display').val()+$(this).val());
            } else {
                if($(this).attr('data-role') == 'operator'){
                    $('.display').val($('.display').val()+$(this).val());
                    }
            } 
        })
        $('.clear-btn').on('click', function(){
            $('.display').val('');
        })
        $('.calculate-btn').on('click', function(){
            $('.display').val(eval($('.display').val()))
        })
        $('.arrow-btn').on('click', function(){
            const arrow =$('.display').val();
            $('.display').val(arrow.substring(0, arrow.length - 1));
        })
    });
  })(jQuery);
