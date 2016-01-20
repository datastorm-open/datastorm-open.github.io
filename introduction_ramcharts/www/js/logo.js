// Create a clone of the menu, right next to logo-original.
$('#logo').addClass('logo-original').clone().insertAfter('#logo').addClass('logo-cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('logo-original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  
  var orgElementPos = $('.logo-original').offset();
  orgElementTop = orgElementPos.top;               
  
  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the logo-original position; now only show the logo-cloned, sticky element.
    
    // Cloned element should always have same left position and width as logo-original element.     
    orgElement = $('.logo-original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.logo-cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.logo-original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the logo-original menu.
    $('.logo-cloned').hide();
    $('.logo-original').css('visibility','visible');
  }
}