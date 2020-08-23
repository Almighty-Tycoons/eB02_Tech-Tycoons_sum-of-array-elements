/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function () {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


  /////////////////////////////////////////////////////////////////////////////

  /////////////////////// Do not modify the above code ////////////////////////

  /////////////////////////////////////////////////////////////////////////////






  /////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "Choose the correct option to assing 1 or more elements in array at once in C?",  ///// Write the question inside double quotes
      answers: {
        a: "int[2];",                  ///// Write the option 1 inside double quotes
        b: "int['a','b'];",                  ///// Write the option 2 inside double quotes
        c: "int[2] = {1,2};",                  ///// Write the option 3 inside double quotes
        d: "int{1,2};"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
      question: "What does the following declaration mean? <br>' int (*ptr)[10]; '",  ///// Write the question inside double quotes
      answers: {
        a: "ptr is a pointer to an array of 10 integers",                  ///// Write the option 1 inside double quotes
        b: "ptr is an array of 10 integers",                  ///// Write the option 2 inside double quotes
        c: "ptr is an pointer to array",                  ///// Write the option 3 inside double quotes
        d: "ptr is array of pointers to 10 integers"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
                                        ///// this line

    {
      question: "Does C perform array out of bound checking? What is the output of the following program? <br> int main()<br> {<br>int i;<br>int arr[5] = {0};<br>for (i = 0; i <= 5; i++)<br>printf('%d', arr[i]);<br>return 0;<br>} <br>",
      answers: {
        a: "Compiler Error: Array index out of bound.",
        b: "The program may print 0 five times followed by garbage value, or may crash if address (arr+5) is invalid.",
        c: "The program always crashes.",
        d: "None of them"
      },
      correctAnswer: "b"
    },

    {
      question: "Predict output of following program.<br>int main()<br>   {<br>int i;<br>int arr[5] = {1};<br>for (i = 0; i < 5; i++)<br>printf('%d', arr[i]);<br>return 0;<br>}<br>",
      answers: {
        a: "1 followed by four garbage values",
        b: "1 1 1 1 1",
        c: "1 0 0 0 0",
        d: "0 0 0 0 0"
      },
      correctAnswer: "c"
    },

    {
      question: "Predict the output of below program.<br>#include <stdio.h><br> int main()<br>   { <br>int arr[5];<br>// Assume that base address of arr is 2000 and size of integer <br>// is 32 bit  <br>arr++;  <br>printf('%u', arr);  <br>return 0; <br>}  <br>",
      answers: {
        a: "2020",
        b: "lvalue required",
        c: "2004",
        d: "None of above"
      },
      correctAnswer: "b"
    },


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




  /////////////////////////////////////////////////////////////////////////////

  /////////////////////// Do not modify the below code ////////////////////////

  /////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
