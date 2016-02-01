// Create a clone of the menu, right next to toggle-original.
$('#toggle').addClass('toggle-original').clone().insertAfter('#toggle').addClass('toggle-cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('toggle-original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  
  var orgElementPos = $('.toggle-original').offset();
  orgElementTop = orgElementPos.top;               
  
  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the toggle-original position; now only show the toggle-cloned, sticky element.
    
    // Cloned element should always have same left position and width as toggle-original element.     
    orgElement = $('.toggle-original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.toggle-cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.toggle-original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the toggle-original menu.
    $('.toggle-cloned').hide();
    $('.toggle-original').css('visibility','visible');
  }
}

$('.toggle-collapse').on('click', function () {
    $('#main-content').toggleClass('col-xs-6 col-md-7 col-xs-10 col-md-10');
    $('#nav-content').toggleClass('show hide');
});



