$(function() {
  $.ajax({
    url: "http://nabettu.php.xdomain.jp/instaScraper/?u=niwan5",
    type: "GET",
    success: function(data) {
      $("body").append(data);
      var photos = window._sharedData.entry_data.ProfilePage[0].user.media.nodes;
      $.each(photos,function(index,photo){
        var $imgDom = $("<img />");
        $imgDom.attr("src",photo.thumbnail_src);
        $("#photo").append($imgDom);
      })
    }
  });
})
