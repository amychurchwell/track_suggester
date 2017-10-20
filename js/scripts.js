$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    var size = parseInt($("input:radio[name=biz-size]:checked").val());
    var tech = parseInt($("input:radio[name=tech]:checked").val());
    var flaw = parseInt($("input:radio[name=flaw]:checked").val());
    var pro = parseInt($("input:radio[name=pro]:checked").val());
    var company = parseInt($("input:radio[name=company]:checked").val());

    var answer = size + tech + flaw + pro + company

    if (answer <= 2){
      $("#C").show();
      $('#RUBY').hide();
      $('#PHP').hide();
    } else if (answer > 2) {
      $('#RUBY').show();
      $('#PHP').hide();
      $('#C').hide();

    }
    event.preventDefault();
  });
});
