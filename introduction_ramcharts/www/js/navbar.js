// manage active state of toc based on current page
var href = window.location.pathname;
href = href.substr(href.lastIndexOf('/') + 1);
if (href === "" || href === "index.html")
  href = "index.html";
$('a.toc-item[href="' + href + '"]').addClass('active');

// Create a clone of the menu, right next to original.
$('#navbar').addClass('original').clone().insertAfter('#navbar').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  
  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               
  
  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.
    
    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}