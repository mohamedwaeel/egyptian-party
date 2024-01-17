/// <reference types="../@types/jquery" />

$(()=>{
    // menu button
    let isMarginSet = false;
    $('#menuBtn').on('click',()=>{
        const newMargin = isMarginSet ? '0%' : '19.5%';
        $('.header-content').animate({"marginLeft": newMargin},1000);
       $('#menu').animate({width:'toggle'},1000);
       isMarginSet = !isMarginSet;
    })
    // scroll smooth
$('#menu a').on('click',(e)=>{
    let aHref=$(e.target).attr('href');
let sectionOffset=$(aHref).offset().top; 
    $('html,body').animate({scrollTop:sectionOffset},1000)
})
// detatils slider
$('#details h3').on('click',(e)=>{
    let singernumber=$(e.target).attr('singerNo');
    let targetP =$('#details h3').eq(singernumber).next()
    $('#details p').not( targetP).slideUp(1000);
    targetP.slideToggle(1000);
})


const targetDate = new Date("2025-12-31T23:59:59");

// Initialize the countdown
$('#day').countdown(targetDate, function(e) {
  $(this).html(e.strftime('-%D D'));
});
$('#month').countdown(targetDate, function(e) {
  $(this).html(e.strftime('%M m'));
});
$('#hour').countdown(targetDate, function(e) {
  $(this).html(e.strftime('%H h'));
});
$('#sec').countdown(targetDate, function(e) {
  $(this).html(e.strftime('%S s'));
});


const maxLength = 100;

$('textarea').on('input', function() {
  const currentLength = $(this).val().length;
  const remainingChars = maxLength - currentLength;

  if (remainingChars < 0) {
    // Limit the input to maxLength characters
    $(this).val($(this).val().substring(0, maxLength));
    remainingChars = 0;
  }

  $('#charCount').text(remainingChars);
});
})
