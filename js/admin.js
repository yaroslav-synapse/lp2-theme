/* Author: Synapse-studio */
(function($){
  $(function(){

    var pos = $.cookie("bl_sys_nav_pos"),
        nav_expanded = $.cookie("nav_expanded");

    if( nav_expanded == null || nav_expanded == undefined ){
      $.cookie("nav_expanded", 1, {path: '/'});
    };
    
    if( nav_expanded == 0){
      $('#manager-menu nav').hide();
    }else{
      $('#manager-menu nav').show();
    };
    
    if( pos !== null && pos !== undefined ){
      $('#manager-menu').css({'left': pos.split('|')[0] + 'px', 'top': pos.split('|')[1] + 'px'});
    };

    $('#manager-menu').draggable({
      containment: 'body',
      stop: function( dragstop, ui ) {
        $.cookie("bl_sys_nav_pos", ui.offset.left + '|' + ui.offset.top, {path: '/'});
      }
    });

    $('#manager-menu .toggle-manager').click(function(){
      $('#manager-menu').css({'height':'auto','width':'auto'}); 
      if( $('#manager-menu nav').is(':hidden') ){
        $('#manager-menu nav').slideDown();
        $.cookie("nav_expanded", 1, {path: '/'});
      }else{
        $.cookie("nav_expanded", 0, {path: '/'});
        $('#manager-menu nav').slideUp();
      };
    });

  });

  Drupal.behaviors.admin_helper = {
    attach: function(context) {
      
    }
  };

})(this.jQuery);

