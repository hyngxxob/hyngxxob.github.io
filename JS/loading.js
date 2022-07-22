$(document).ready(function () {
    console.log("Loaded");
    $('.loader6').hide();
    $("body").removeAttr("style");
    $(".div-container").css("visibility","visible");
    $(document).bind('keydown',function(e){
        if ( e.keyCode == 123 /* F12 */) {
            e.preventDefault();
            e.returnValue = false;
        }
    });
    console.log("End");
});

// document.onkeydown = function(e) {
//     if(e.keyCode === 123 || 
//       (e.ctrlKey && e.shiftKey && e.keyCode == 73) || 
//       (e.ctrlKey && e.shiftKey && e.keyCode == 74) || 
//       (e.ctrlKey && e.shiftKey && e.keyCode == 67)) {
//         e.preventDefault();
//         e.returnValue = false;
//     }
// };