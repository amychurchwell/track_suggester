$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    var size = parseInt($("input:radio[name=biz-size]:checked").val());
    var tech = parseInt($("input:radio[name=tech]:checked").val());
    var flaw = parseInt($("input:radio[name=flaw]:checked").val());
    var pro = parseInt($("input:radio[name=pro]:checked").val());
    var company = parseInt($("input:radio[name=company]:checked").val());
    var list = [size, tech, company, flaw, pro];
    var answer = size + tech + flaw + pro + company;

    if (answer >= 11 && answer <= 15) {
      $('#PHP').show();
      $('#RUBY').hide();
      $('#C').hide();

    } else if (answer >= 8 && answer <= 12) {
      $('#RUBY').show();
      $('#PHP').hide();
      $('#C').hide();

    } else if (answer < 10) {
      $("#C").show();
      $('#RUBY').hide();
      $('#PHP').hide();

    } else {
      alert('Be sure to answer all of the questions!')
    }

    event.preventDefault();
  });
});
