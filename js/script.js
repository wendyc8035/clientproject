/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

   $('#searchButton').click(function() {
        var searchTerm = $("#searchTerm").val();
        var giphyUrl = "https://api.soundcloud.com/tracks?q=" + searchTerm + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";


        $.ajax({
          url: giphyUrl,
          method: "GET",
          success: function(response) {
              var songTitle = response[0].title;
              console.log(songTitle);
               var songs = "<h1>" + songTitle + " </h1>";

              $("body").append(songs);
          }
        })
   });