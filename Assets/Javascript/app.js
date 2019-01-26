var panel = $("#quiz");

$(document).on("click", "#start", function() {
    game.start();
  });
  
  
  $(document).on("click", "#end", function() {
    game.end();
  });

// Questions
var questions = [{
  question: "What NFL team won Super Bowl 50?",
  answers: ["Denver Broncos", "Seattle Seahawks", "New York Jets", "Carolina Panthers"],
  correctAnswer: "Denver Broncos"
}, {
  question: "Who is Fry's best friend?",
  answers: ["Leela", "Zoidberg", "Bender", "Amy"],
  correctAnswer: "Bender"
}, {
  question: "How many band members are there in blink-182?",
  answers: ["4", "3", "6", "5"],
  correctAnswer: "3"
}, {
  question: "Who didn't die in Grey's Anatomy?",
  answers: ["George", "Mark", "Addison", "Lexie"],
  correctAnswer: "Addison"
}, {
  question: "Which Marvel character is a part of MCU?",
  answers: ["Spider-Man", "Deadpool", "Wolverine", "Silver Surfer"],
  correctAnswer: "Spider-Man"
}, {
  question: "What instrument does ?uestlove play?",
  answers: ["Drums", "Keyboard", "Tuba", "Guitar"],
  correctAnswer: "Drums"
}, {
  question: "What town do you start in Pokemon: Red/Blue/Yellow?",
  answers: ["New Bark Town", "Cinnabar Island", "Goldenrod City", "Pallet Town"],
  correctAnswer: "Skeeter"
}, {
  question: "How many playable characters are there currently in Super Smash Bros Ultimate?",
  answers: ["50", "64", "35", "74"],
  correctAnswer: "74"
}];

//Game Start
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("Time's Up");
      game.end();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='end'>Done</button>");
  },

  end: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>Finished!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};




