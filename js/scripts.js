$(document).ready(function() {
  $("form#suggester").submit(function(event) {
    var size = parseInt($("input:radio[name=biz-size]:checked").val());
    var tech = parseInt($("input:radio[name=tech]:checked").val());
    var flaw = parseInt($("input:radio[name=flaw]:checked").val());
    var pro = parseInt($("input:radio[name=pro]:checked").val());
    var company = parseInt($("input:radio[name=company]:checked").val());
    var list = [size, tech, company, flaw, pro];
    var answer = size + tech + flaw + pro + company;

    debugger;


    /*function sort(list) {
        var a = [], b = []
        for ( var i = 0; i < arr.length; i++ ) {
          if ( list[i] !== prev ) {
            a.push(list[i]);
            b.push(1);
          } else {
              b[b.length-1]++;
          }
          prev = list[i];
      }

      return [a, b];
  }

    var result = sort(list);

    if(sort){

    $("#test").append(result[1]);
}


*/

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
