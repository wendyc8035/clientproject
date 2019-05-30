/* global $ */

console.log('hi');

$('h1').click(function(){
    $('h1').css('color', 'green');
    $('h1').text('Ready to Code');
});

$('#searchButton').click(function() {
    var searchTerm = $("#song").val();
    var url = "https://api.soundcloud.com/tracks?q=" + searchTerm + "&client_id=5aa8e389ba4e24b6106af5159ab3e344";

    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            console.log(response)
            response.forEach(function(song){
                console.log('song', song);
                var title = song.title;
                var artist = song.user.username;
                var imgSrc = song.artwork_url;
                var html = `
                <h1>${title}</h1>
                <p>${artist}</p>
                <img src='${imgSrc}' />
                `
                $("body").append(html)
            })
        }
    })
});