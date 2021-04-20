(function() 
 {
  var allQuestions = [{
    question: "Django was introduced by ..................",
    options: ["Adrian Holovaty", "Bill Gates", "Rasmus Lerdorf", "Tim Berners-Lee"],
    answer: 0
  }, {
    question: "Which architectural pattern does django follow?",
    options: ["PHP", "MVT", "HTML", "None of the above"],
    answer: 1
  }, {
    question: "Which of the following is a valid forloop attributes of Django Template System?",
    options: ["forloop.reverse", "forloop.firstitem", ". forloop.counter0","forloop.lastitem"],
    answer: 2
  },{
    question: "What are the features of Django web framework?",
    options: ["Templating", "Form handling", "Admin Interface (CRUD)", "All of the above"],
    answer: 3
  }, {
    question: " django is written in which language?",
    options: ["PHP", "Python", "Java", "Perl"],
    answer: 1
  },{
    question: "Django is a type of ",
    options: ["Programming Language", "Software", "Web framework", "none"],
    answer: 2
  },{
    question: "Django was initially released in ..................",
    options: ["July 2005", "July 2006", "June 2005", "None of above"],
    answer: 0
  },{
    question: "What is the Django shortcut method to more easily render an html response?",
    options: ["render_to_html", "render_to_response", "response_render", "render"],
    answer: 1
  },{
     question: " What is the most easiest, fastest, and most stable deployment choice in most cases with Django?",
    options: ["FastCGI", "mod_wsgi", "SCGI", " AJP"],
    answer: 1
  },{
    question: "What Commands are used to create a project in Django?",
    options: [" Project", "_init_.py", " manage.py", "All of the above"],
    answer: 3
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var $ = jQuery;
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();