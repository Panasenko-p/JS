
(function($) {
    $(function() {
      $("ul.tab_list").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active") //додає клас active
          .siblings() //вибирае усі елементи окрім вибраного
          .removeClass("active") //удаля клас active 
          .closest("div.tab_block") // вибираємо загльну обгортку
          .find("div.tab_content") // вибираємо дочерні елементи с класом tabs__content
          .removeClass("active_text")    // удаляємо у елементів с класом tabs__content класс active
          .eq($(this).index()) // вибирає елемент с класом tabs__content по індексу 
          .addClass("active_text"); // присвоює цьому елементу класс active
      });
    });
  })(jQuery);
  
