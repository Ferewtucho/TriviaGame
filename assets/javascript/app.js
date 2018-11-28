var q1 = {
    question: "What was the name of Dr. Martin Luther King Jr.'s father's church?",
    choice: ["Ebenezer Baptist", "Atlanta Southern Baptist", "Southern Church of the People", "Atlanta Tabernacle"],
    rightAnswer: "Ebenezer Baptist",
    image: '<img src="assets/images/ebenezer.jpg" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">In his spare time, King rested, wrote and preached at Ebenezer Baptist, a recently restored gem at 407 Auburn Avenue in Atlanta.</div>'
};
var q2 = {
    question: "What group launched the Freedom Rides in 1961?",
    choice: ["ACLU-American Civil Liberties Union", "SCLC-Southern Christian Leadership Conference", "CORE-Congress of Racial Equality", "SNCC-Student Nonviolent Coordinating Committee"],
    rightAnswer: "CORE-Congress of Racial Equality",
    image: '<img src="assets/images/congress_of_Racial_Equality.gif" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in"> Busloads of Freedom Riders went from town to town, testing local compliance with federal orders to desegregate interstate bus terminals.</div>'
};
var q3 = {
    question: "At the time of her historic bus incident, what was Rosa Parks' occupation?",
    choice: ["Hospital orderly", "Drugstore clerk", "High school cafeteria worker", "Department store seamstress"],
    rightAnswer: "Department store seamstress",
    image: '<img src="assets/images/rosaparks.jpg" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">Parks was arrested Dec. 1, 1955, after refusing to surrender her seat to a white passenger.</div>'
};
var q4 = {
    question: "SNCC member Stokely Carmichael was instrumental in forming the Lowndes County Freedom Organization in Alabama. What was its symbol?",
    choice: ["A balance scale", "The letters MLK", "A black panther", "A raised fist"],
    rightAnswer: "A black panther",
    image: '<img src="assets/images/lowndes_sncc.jpg" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">Huey P. Newton and Bobby Seale got permission to adapt the emblem for their Oakland-based Black Panther Party.</div>'
};
var q5 = {
    question: "Who wrote the bestselling memoir:- I Know Why the Caged Bird Sings?",
    choice: ["Maya Angelou", "Coretta Scott King", "Fannie Lou Hamer", "Rosa Parks"],
    rightAnswer: "Maya Angelou",
    image: '<img src="assets/images/mayaangelou.gif" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">The book explores her early years, spent in St. Louis and Stamps, Ark.</div>'
};
var q6 = {
    question: "What was Muhammad Ali's original name?",
    choice: ["Leviticus Lewis", "Marcellus Moore", "Cassius Clay", "Aaron Brown"],
    rightAnswer: "Cassius Clay",
    image: '<img src="assets/images/cassius.gif" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">He changed his name after joining the Nation of Islam in 1964.</div>'
};
var q7 = {
    question: "In 1960, four African American college students staged a sit-in that helped integrate this store's lunch counter.",
    choice: ["Woolworth's", "W.T. Grant", "G.C. Murphy", "S.S. Kresge"],
    rightAnswer: "Woolworth's",
    image: '<img src="assets/images/woolworths.jpg" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">The store was in downtown Greensboro, N.C.</div>'
};
var q8 = {
    question: "What famous baseball player said:- Today's black athletes have no idea what we had to endure.",
    choice: ["Hank Aaron", "Bob Gibson", "Ernie Banks", "Willie Mays"],
    rightAnswer: "Ernie Banks",
    image: '<img src="assets/images/ernie-banks.gif" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">“During the civil rights era,” Banks told the AARP Bulletin in a 2011 interview, “black players encountered racial barriers, both on and off the field: teammates refusing to shake hands, fans shouting out insults, whites-only signs and many other painful struggles just to play baseball.”</div>'
};
var q9 = {
    question: "Members of what labor union helped to build the nation’s black middle class and civil rights movement?",
    choice: ["Brotherhood of Sleeping Car Porters", "American Federal of Teachers", "Communications Workers of America", "International Ladies’ Garment Workers’ Union"],
    rightAnswer: "Brotherhood of Sleeping Car Porters",
    image: '<img src="assets/images/brotherhood-porters.jpg" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">Thousands of Pullman porters created the first labor union for African Americans and exemplified the possibility of upward mobility for blacks.</div>'
};
var q10 = {
    question: "Who was elected chairman of the Student Nonviolent Coordinating Committee (SNCC) in 1966?",
    choice: ["Charles E. Cobb Jr.", "Stokely Carmichael", "John Lewis", "Bobby Seale"],
    rightAnswer: "Stokely Carmichael",
    image: '<img src="assets/images/stokely-crmichael.gif" id="image">',
    explanation: '<div id="legend" data-aos="zoom-in">Carmichael replaced John Lewis and began advocating black power.</div>'
};

var questions = [q1, q2, q3, q4, q5, q6,q7, q8, q9, q10];
var currentQuestion = 0;
var userGuess = '';
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var userChoise = '';
var correctAnswer = '';
var timeLeft = 20;
var counter = 0;

$(document).ready(function () {
    $('.startButton').click(function () {
        displayNext();
    });

    //this is the function that starts the game


    function answerSelection() {
        timeLeft = 20;
        counter = setInterval(timer, 1000)
        $('.answerChoices').click(function () {
            userGuess = $(this).data('userGuess');
            rightAnswer = questions[currentQuestion].rightAnswer;
            if (userGuess === rightAnswer) {
                $('.gameBox').html('<div id="correctIncorrectHeader" data-aos="zoom-in-right">Correct!</div>');
                $('.gameBox').append(questions[currentQuestion].explanation).addClass('question');
                $('.gameBox').append(questions[currentQuestion].image);
                resetTimer();
                correctAnswers++;
                currentQuestion++;
                setTimeout(displayNext, 6500);
            } else {
                $('.gameBox').html('<div id="correctIncorrectHeader" data-aos="zoom-in-left">Wrong!</div>')
                $('.gameBox').append(questions[currentQuestion].explanation).addClass('question');
                $('.gameBox').append(questions[currentQuestion].image);
                resetTimer();
                wrongAnswers++;
                currentQuestion++;
                setTimeout(displayNext, 6500);
            }
        });
    }

    function displayNext() {
        // resetTimer();
        if (currentQuestion >= questions.length) {
            $('.gameBox').html('<div class="question">Let\'s see how you did!</div>');
            $('.gameBox').append('<div id="correctIncorrect" data-aos="zoom-in-left">Correct Answers: ' + correctAnswers + '</div>');
            $('.gameBox').append('<div id="correctIncorrect" data-aos="zoom-in-right">Wrong Answers: ' + wrongAnswers + '</div>')
            $('.gameBox').append('<div id="correctIncorrect" data-aos="zoom-in-left">Unanswered Questions: ' + unanswered + '</div>')
            $('.gameBox').append('<button class="restartButton hvr-radial-in" data-aos="zoom-in-right">Restart Game?</button>')
            $('.restartButton').click(function () {
                $('.gameBox').empty();

                currentQuestion = 0;
                userGuess = '';
                correctAnswers = 0;
                wrongAnswers = 0;
                unanswered = 0;
                userChoise = '';
                correctAnswer = '';
                timeLeft = 20;
                counter = 0;

                $('.gameBox').html("<button class='startButton btn btn-primary center-block'>Start</button>");
                $('.startButton').click(function () {
                    displayNext();
                });
            });
            return false;
        }
        // counter = setInterval(timer,1000);

        $('.gameBox').html('<div class="timeLeft">Time Left: <span id="time">20</span></div>');
        var questionToAnswer = $('<div>').append(questions[currentQuestion].question).addClass('question');
        $('.gameBox').append(questionToAnswer);

        var questionsDiv = $('.gameBox');

        for (var i = 0; i < 4; i++) {
            var newQuestionsDiv = $('<div>').append(questions[currentQuestion].choice[i])
                .addClass('answerChoices')
                .data('rightAnswer', questions[currentQuestion].rightAnswer)
                .data('userGuess', questions[currentQuestion].choice[i]);
            questionsDiv.append(newQuestionsDiv);
        }
        answerSelection();
    }


    function timer() {
        if (timeLeft === 1) {
            $('.gameBox').html('<div id="correctIncorrectHeader"><b>Your time is up!</b></div>');
            $('.gameBox').append(questions[currentQuestion].explanation).addClass('question');
            $('.gameBox').append(questions[currentQuestion].image);
            resetTimer();
            unanswered++;
            currentQuestion++;
            setTimeout(displayNext, 6500);
        }
        timeLeft--;
        $('#time').html(timeLeft);
    }

    function resetTimer() {
        clearInterval(counter);
        counter = 0;
    }
});