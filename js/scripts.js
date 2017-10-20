$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    var business = $("select#biz-sof").val();

    if (business === "true") {
      $("#C").show();
    }

    event.preventDefault();
  });
});
