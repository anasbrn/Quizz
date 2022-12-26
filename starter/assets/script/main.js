const newQuestion = quizzQuestions.sort((a, b) => 0.5 - Math.random());

let currnetQuestion = -1;





function switchFromRulesToCounter(){
    document.getElementById('rules').style.display = "none" ;
    document.getElementById('counter').style.display = "block" ;
}


function switchFromQuestionsToResult(){
    document.getElementById('questions').style.display = "none" ;
    document.getElementById('loading_questions').style.display = "block" ;
    document.getElementById('loading').classList.add('loading') ;
    
    
    setTimeout(function() {
        $('#bar').fadeOut('100');
    }, 3000);

    $('#loading').fadeIn('100');

    setTimeout(function() {
        $('#loading').fadeOut('100');
    }, 3000);

    setTimeout(function() {
        $('#result').fadeIn('100');
    }, 3400);
}

timeLeft = 3;

function countdown() {
	timeLeft--;
	document.getElementById("secondes").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 600);
	}

    else{
        document.getElementById('secondes').innerText = "Start!" ;
        document.getElementById('counter').style.display = "none" ;
        document.getElementById('questions').style.display = "block" ;
        document.getElementById('bar').style.display = "block" ;
    }

};


function loadingQuestions(){
    document.getElementById('questions').style.display = "none" ;
    document.getElementById('loading_questions').style.display = "block" ;
    document.getElementById('loading').classList.add('loading') ;
    
    $('#loading').fadeIn('100');
    const timeOut = setTimeout(function() {
        $('#questions').fadeIn('100');
    }, 1400);

    const timeOut2 = setTimeout(function() {
        $('#loading').fadeOut('100');
    }, 1000);
}

function changeProgress(maxValue,finalValue){
    const barLevel = document.querySelector('.barLevel');
    
    barLevel.style.width =`${(maxValue * 100) / finalValue}%`;
    barLevel.innerHTML   =`${Number((maxValue * 100) / finalValue)}%`;
    
}

function finalScore(maxScore, length) {
    const barResultLevel = document.querySelector('.barResultLevel');
    
    barResultLevel.style.width =`${(maxScore * 100) / length}%`;
    barResultLevel.innerHTML   =`${Number((maxScore * 100) / length)}%`;
    
}


questionC = 1 ;

function progressBar(){

    changeProgress(questionC, quizzQuestions.length) ;
    questionC++ ;

}


function allQuestions(){
    currnetQuestion++ ;
    
    document.getElementById('question').innerText = newQuestion[currnetQuestion]['question'];
    document.getElementById('a').innerText        = newQuestion[currnetQuestion]['a'] ;
    document.getElementById('b').innerText        = newQuestion[currnetQuestion]['b'] ;
    document.getElementById('c').innerText        = newQuestion[currnetQuestion]['c'] ;
    document.getElementById('d').innerText        = newQuestion[currnetQuestion]['d'] ;

    document.getElementById('currentQuestion').innerText = currnetQuestion + 1 ;

    
    if (currnetQuestion == quizzQuestions.length - 1){
        document.getElementById('nextQuestion').style.display = "none" ;
    }

        deselectChosenQuestions() ;
        
}

function deselectChosenQuestions(){
    let answersSelected = document.querySelectorAll('.radio') ;

    answersSelected.forEach(answerSelected => {
        answerSelected.checked = false ;
    });
}

let score = 0 ;
let wrong = 0 ;
let currnetQ = -1 ;

function determineTheCorrectanswer(){
    currnetQ++ ;
    let answer = 0 ;
    let answersSelected = document.querySelectorAll('.radio') ;

    answersSelected.forEach(answerSelected => {
        if(answerSelected.checked ){
            answer = answerSelected.id ;
        }
    }) ;

    if(answer == 0){
        let text = "Are you sure, every question not chosen is wrong!"
        if (confirm(text) == false){
            console.log('You cancelled');
            // return again ;
        }
        
        else console.log('score', score);
        
    }


    else if(answer){
        if(answer == newQuestion[currnetQ]['answer']){
            score++ ;
        }

        else{
            wrong++ ;
        }

        finalScore(score, quizzQuestions.length) ;
        document.getElementById('barResult').style.backgroundColor = '#ff0000' ;
        document.getElementById('correctAnswers').innerText = 'Correct answers:' + " " + score ; 
        document.getElementById('wrongAnswers').innerText   = 'Wrong answers:' + " " + wrong ; 
 
    }
}

    if(score == 0){
        finalScore(0, quizzQuestions.length) ;
        document.getElementById('barResult').style.backgroundColor = '#ff0000' ;
        document.getElementById('correctAnswers').innerText = 'Correct answers:' + " " + score ; 
        document.getElementById('wrongAnswers').innerText   = 'Wrong answers:' + " " + quizzQuestions.length ; 


    }




function stepperCompenantStep2(){
    document.getElementById('step2').classList.add('active') ;
    document.getElementById('step2').innerHTML = `<i class="fa fa-check"></i>`;
    
}

function stepperCompenantStep3(){
    document.getElementById('step3').classList.add('active') ;
    document.getElementById('step3').innerText = "" ;
    document.getElementById('step3').innerHTML = `<i class="fa fa-check"></i>`;
    
}


function replayQuizz(){
    // document.getElementById('rules').style.display = "block" ;
    // document.getElementById('result').style.display = "none" ;
    window.location.reload() ;
}


  





