$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    var size = $("input:radio[name=biz-size]:checked").val();

    if (size === "large") {
      $("#C").show();
      $('#RUBY').hide();
      $('#PHP').hide();
    } else if (size === "small") {
      $('#RUBY').show();
      $('#PHP').hide();
      $('#C').hide();
    } else if (size === "fast") {
      $('#PHP').show();
      $('#RUBY').hide();
      $('#C').hide();
    }
    event.preventDefault();
  });
});
