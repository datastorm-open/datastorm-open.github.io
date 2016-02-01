// manage active state of toc based on current page
var href = window.location.pathname;
href = href.substr(href.lastIndexOf('/') + 1);
if (href === "" || href === "index.html")
  href = "index.html";
$('a.toc-item[href="' + href + '"]').addClass('active');
