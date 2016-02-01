// manage active state of toc based on current page
var href = window.location.pathname;
href = href.substr(href.lastIndexOf('/') + 1);
if (href === "" || href === "index.html")
  href = "index.html";
$('a.toc-item[href="' + href + '"]').addClass('active');

// Create a clone of the menu, right next to navbar-original.
$('#navbar').addClass('navbar-original').clone().insertAfter('#navbar').addClass('navbar-cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('navbar-original').hide();

scrollIntervalID = setInterval(stickIt, 10);

function stickIt() {
  
  var orgElementPos = $('.navbar-original').offset();
  orgElementTop = orgElementPos.top;               
  
  if ($(window).scrollTop() > 0 && $(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the navbar-original position; now only show the navbar-cloned, sticky element.
    
    // Cloned element should always have same left position and width as navbar-original element.     
    orgElement = $('.navbar-original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.navbar-cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.navbar-original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the navbar-original menu.
    $('.navbar-cloned').hide();
    $('.navbar-original').css('visibility','visible');
  }
}