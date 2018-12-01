// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score 
  // If you add more choices and outcomes, you must add another variable here.

  var ok = 0;
  
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score

      if (choices[i].value == 'c1') {
        ok = 1
      }
 
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
 
  
  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (ok == 0) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Va multumit! Va rugam sa completati formularul pentru donare"
  }
  else {
    answerbox.innerHTML = "Ne pare rau, din pacate momentan nu puteti dona. Va rugam, incercati peste 6 luni."
  }
 
  // If you add more choices, you must add another response below.
}

// program the reset button
function fill_as_email() {
  var as_vorname = document.querySelector("#as_vorname").value;
  var as_nachname = document.querySelector("#as_nachname").value;
  var domain = "@hengstenberg.de";
  var as_email = as_vorname + "." + as_nachname + domain;

  //umwandlung in kleinbuchstaben:
  var as_email = as_email.toLowerCase();

  //umwandlung der umlaute:
  var as_email = as_email.replace(/ä/gi, "ae");
  var as_email = as_email.replace(/ö/gi, "oe");
  var as_email = as_email.replace(/ü/gi, "ue");
  var as_email = as_email.replace(/ß/gi, "ss");

  //as_email befüllen:
  document.querySelector("#as_email").value = as_email;
}

