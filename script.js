$(function() {

  $.ajax({
    url: "http://nabettu.php.xdomain.jp/instaScraper/?u=niwan5",
    type: "GET",
    success: function(data) {
      var scriptDom = $("<script></script>");
      scriptDom.html("window._data1 = " + data);
      $("body").append(scriptDom);
      var photos = window._data1.entry_data.ProfilePage[0].user.media.nodes;
      $.each(photos,function(index,photo){
        var $imgDom = $("<img />");
        $imgDom.attr("src",photo.thumbnail_src);
        $("#photo").append($imgDom);
      })
    }
  });
})
