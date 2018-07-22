// Hide/show dropdown
$(".dropdown__toggle").click(function(e){
    e.stopPropagation();
    $(".dropdown").toggleClass("show");

});

// Hide dropdown if user clicks outside
$(document).click(function(e){
    if(!$(".dropdown").is(e.target) && $(".dropdown").has(e.target).length === 0){
        $(".dropdown").removeClass("show");
    }
});

//Hamburger menu toggle
$(".menu-toggle").click(function(e){
    e.stopPropagation();
    $(this).toggleClass("close");
    $(".navbar").toggleClass("open");
});