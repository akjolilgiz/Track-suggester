$(document).ready(function() {
  $("form#Survey-questions").submit(function(event) {
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

        else if (EventDriven === "No"){$("#PHP").show();}

          else if (applySkills === "To work for a large company"){result = "Csharp";}

            else if (applySkills === "Android Developing"){result = "Java";}

              else if (applySkills === "Content Management"){result = "PHP";}

                else if (applySkills === "Content Management"){result = "Ruby";}

    $(".hideanswers").text(result);
    $(".name#firstname").text(firstName+", we recommend you to study");

  event.preventDefault();
  });
});
