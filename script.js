$(function() {

  var user = [getQueryString().u0, getQueryString().u1];
  for (var i = 0; i < user.length; i++) {
    $.ajax({
      url: "http://nabettu.php.xdomain.jp/instaScraper/?u=" + user[i],
      context: {
        username: user[i],
        num: i
      }
    }).done(function(data) {
      var scriptDom = $("<script></script>");
      var ctx = this;
      scriptDom.html("window._u_" + ctx.username + " = " + data);
      $("body").append(scriptDom);
      var photos = window["_u_" + ctx.username].entry_data.ProfilePage[0].user.media.nodes;
      $.each(photos, function(index, photo) {
        var $imgDom = $("<img />");
        $imgDom.addClass("u" + ctx.num)
          .attr({
            "src": photo.thumbnail_src,
            "id": "u" + ctx.num + "_" + index
          });
        $("#u" + ctx.num).append($imgDom);
      });
    });
  }
})


function getQueryString() {
  var result = {};
  if (1 < window.location.search.length) {
    var query = window.location.search.substring(1);
    var parameters = query.split('&');
    for (var i = 0; i < parameters.length; i++) {
      var element = parameters[i].split('=');
      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);
      result[paramName] = paramValue;
    }
  }
  return result;
}
