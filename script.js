document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.transit a');

  Array.from(links).forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      var targetUrl = event.target.href;
      var pageTransition = event.target.closest('.transit');

      pageTransition.style.opacity = 0;

      setTimeout(function() {
        window.location.href = targetUrl;
      }, 500);
    });
  });
});
