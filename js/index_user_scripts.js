(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         
        
        $(".uib_w_8").click(function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_2"));  
        });
        $(".uib_w_4").click(function(evt)
        {
        uib_sb.close_all_sidebars()
        /* your code goes here */ 
        });
        $("#botao_meache").click(function(evt)
        {
        uib_sb.close_all_sidebars()
        /* your code goes here */ 
        });

        $("#botao_onde_chegar").click(function(evt)
        {
        /* your code goes here */ 
        });
        $(".uib_w_6").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#botao_zera_marcadores").click(function(evt)
        {
        /* your code goes here */ 
        });
        $("#botao_elevacao").click(function(evt)
        {
        /* your code goes here */ 
        });
}
 $(document).ready(register_event_handlers);
})();
