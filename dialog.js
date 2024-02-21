$(this).keydown(function(eventObject){
    if (eventObject.which == 27) //буква ESC
    {
            cef.emit("close", "close");
            cef.set_focus(false); 
    }
        
});
