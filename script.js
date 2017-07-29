$(document).ready(function() {

  var quotes;
  getQuote();

  $("#button").on("click", getQuote);

  function getQuote() {
    var color = Math.round(105 - 0.5 + Math.random() * (998 - 105 + 1));
    $.ajax({
      url: 'https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        quotes = data;
      },
      cache: false
    });

    $('.main blockquote').fadeOut(1000, function() {
      $(this).html(quotes[0].content);
      $('body, #button, .twitter-share-button').css({
        background: "#" + color
      });
      $('cite, blockquote').css({
        color: "#" + color
      });
    }).fadeIn(1000, function() {
      $(".twitter-share-button").attr("href", "https://twitter.com/intent/tweet?text=" +
        "\"" + $('.main blockquote').html() + "\"" + "   " + $('.main cite').html());
    });

    $('.main cite').fadeOut(1000, function() {
      $(this).html(quotes[0].title);
    }).fadeIn(1000);
  }
})
