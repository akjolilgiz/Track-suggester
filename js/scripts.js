$(document).ready(function() {
  $("form#Identity").submit(function(event) {
    var firstName = $("input#name").val();
    var firstSide = $("input#first").val();
    var secondSide = $("input#second").val();
    var thirdSide = $("input#third").val();
    var result;


    if((firstSide+secondSide)<thirdSide ||
    secondSide+thirdSide<firstSide||
    firstSide+thirdSide<secondSide||
    firstSide===0||
    secondSide===0||
    thirdSide===0 ) {
    result = "Not a triangle";
    } else if (
       firstSide === secondSide && secondSide === thirdSide){
       result = "Equilateral";
    } else if (firstSide === secondSide ||
              secondSide === thirdSide||
              firstSide === thirdSide) {
              result = "Isosceles";
    }else { result = "Scalene";
    }
    $(".name#firstname").text(firstName+",");

    $(".hideanswers").text(result);
    //  }else  {
    //    document.write("PLEASE INPUT THE NUMBER");
    //  }






    event.preventDefault();
  });
});
