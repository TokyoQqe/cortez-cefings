$(this).keydown(function(eventObject){
    if (eventObject.which == 27) //буква ESC
    {
            cef.hide(true); 
            cef.set_focus(false); 
    }
        
});