  var q = 1,correct=0;

  let questions = [
    {
      "question" : "Full form of HTML",
      "options" : ["Hypertext Markup Language", "Hat Than Making Language", "Hyperfill Text Making Language", "Hop Than Making Language"],
      "answer" : 1
    },
    {
      "question" : "Full form of CSS",
      "options" : ["Centering Styling Sheet", "Center Self Sheet", "Cascading Style Sheet", "None of the Above"],
      "answer" : 3
    },
    {
      "question" : "Python could be used for:",
      "options" : ["Web Development", "Programming", "Machine Learning", "All of the Above"],
      "answer" : 4
    },
    {
      "question" : "Full form of NPM",
      "options" : ["Node Package Manager", "Net Package Maintainer", "Noise Pulse Module", "None of the Above"],
      "answer" : 1
    }
  ];

  printQuestion();
  
  function printQuestion() {
    $('#overlay').removeClass('overlay');
    var ques = '', adds = '';
    ques = '<div class="question text-center">' + questions[q-1].question + '</div><div class="row">';
    for (var i = 0; i < 4; i++){
      adds = '<div id="option'+ (i+1) +'" class="option text-center col-lg-6 col-md-6" onclick="answerQuestion(' + (i+1) + ')">' + questions[q-1].options[i] + '</div>';
      ques = ques + adds;
    }
    ques += '</div>';
    $('#quiz-container').html(ques);
  }

  function answerQuestion(o){
    if (o == questions[q-1].answer){
      correct++;
      $('#overlay').addClass('overlay');
      $('#option'+o).addClass('correct');
      setTimeout(function(){ 
        nextQuestion();   
      }, 2000); 
    }
    else {
      $('#overlay').addClass('overlay');
      $('#option'+o).addClass('wrong');
      setTimeout(function(){ 
        nextQuestion();   
      }, 2000);    
    }
  }

  function nextQuestion() {
    q++;
    if (q-1 == questions.length) {
      $('#quiz-container').html('<div class="finish text-center">Score<br>' + correct + '/' +questions.length + '</div>');
    }
    else {
      printQuestion();
    }
  }
