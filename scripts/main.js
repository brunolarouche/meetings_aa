$(document).ready(function() {
  $( ".video-link" ).click(function(event) {
    var videoLink;
    event.preventDefault();

    videoLink = $(this).data('youtube-id')

    $(this).next('.video-popup').append('<iframe class="youtube-iframe" id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + videoLink + '?enablejsapi=1&origin=http://meetingsavecaa.com&autohide=1&autoplay=1&rel=0" frameborder="0"></iframe>')
  });

  $(".video-link").leanModal({ closeButton: ".close-classic" });

  $('#lean_overlay, .close-classic').click(function(event) {
    event.preventDefault();
    $('.youtube-iframe').remove();
  });

  $(".named-thumb").hover(
    function() {
      $(this).next().toggleClass('hide');
    }, function() {
      $(this).next().toggleClass('hide');
    }
  );
});