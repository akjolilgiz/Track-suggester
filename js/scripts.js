$(document).ready(function() {
  $("form#Survey-questions").submit(function(event) {
  event.preventDefault();

    var firstName = $("input#name").val();
    var City = $("#questions1").val();
    var Endtype = $("#question2").val();
    var pProgramming = $("#question3").val();
    var EventDriven = $("#question4").val();
    var applySkills = $("#question5").val();
    var result;
    if (City === "Other") {alert("Epicodus courses are available only in Seattle and Portland")}
     else if (Endtype === "Front-End"){$("#frontend").show();}
      else if (pProgramming === "No"){$("#ruby").show();}
        else if (EventDriven === "No"){result = "Adolescense");}

    $(".hideanswers").text(result);
    $(".name#firstname").text(firstName+",");

  });
});
