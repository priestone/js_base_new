jQuery(document).ready(function(){

    $(`.menu`).mouseover(function(){
        $(this).find(`.sub_menu_wrap`).stop().slideDown(500);
    }).mouseout(function(){
        $(this).find(`.sub_menu_wrap`).stop().slideUp(500);
    })

})