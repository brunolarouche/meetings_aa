$(document).ready(function() {
  $( ".video-link" ).click(function(event) {
    event.preventDefault();
    $(this).next('.video-popup').append('<iframe class="youtube-iframe" id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/bVdN954oCX8?enablejsapi=1&origin=http://example.com&autohide=1&autoplay=1&rel=0" frameborder="0"></iframe>')
  });
  $(".video-link").leanModal({ closeButton: ".close-classic" });

  $('#lean_overlay, .close-classic').click(function() {
    $('.youtube-iframe').remove()
  });
});