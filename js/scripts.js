$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    var size = parseInt($("input:radio[name=biz-size]:checked").val());
    var tech = parseInt($("input:radio[name=tech]:checked").val());
    var flaw = parseInt($("input:radio[name=flaw]:checked").val());
    var pro = parseInt($("input:radio[name=pro]:checked").val());
    var company = parseInt($("input:radio[name=company]:checked").val());

    var something = [size, tech, company, flaw, pro]; //test for ties
    var answer = size + tech + flaw + pro + company;

    if (answer > 10 && answer != 12) { //fix math, there is something off
      $('#PHP').show();
      $('#RUBY').hide();
      $('#C').hide();

      } else if (answer < 13 && answer > 7){
        $('#RUBY').show();
        $('#PHP').hide();
        $('#C').hide();

      } else if (answer < 7){
        $("#C").show();
        $('#RUBY').hide();
        $('#PHP').hide();
      } else {
        alert('Please make some selections.')
      }

    event.preventDefault();
  });
});
