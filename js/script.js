 (function( $ ){
    $.fn.check = function(block) {
        if ($(block).hasClass("disable"))
            return false;
        $(block).siblings('.default-subtitle').toggle();
        $(block).siblings('.selected-subtitle').toggle();
    }; 
 })( jQuery );
 (function( $ ){
    $(".disable").siblings('.default-subtitle').toggle();
    $(".disable").siblings('.disabled-subtitle').toggle();
 })( jQuery );
$( document ).ready(function() {
    $(".section-block").on("click",function(event){
        if ($(event.target.closest("selected")) && $(this).hasClass("selected")){
            $(this).check(this);
            $(this).removeClass("selected");
            return false;
        }
        if ($(this).data("selected") == 1){
            $(this).check(this);
            $(this).toggleClass("selectedHover");
            return false;
        }
        $(this).addClass("selected");
        $(this).check(this);
        $(event.target).closest(this).addClass("hover");
        $(this).data("selected",1);
    });
});