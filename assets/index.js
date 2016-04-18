$(function () {
  $('#path').on('keyup', function (event) {
    if (event.keyCode == 13)
      $('#download').click();
  });

  $('#download').on('click', function (event) {
    var version = $('input[name="version"]:checked').val();
    var path = $('#path').val();
    if (path.length == 0)
      path = $('#path').attr('placeholder');

    window.location.href = version + '/' + path;
  });
});
