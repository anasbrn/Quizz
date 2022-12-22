const newQuestion = quizzQuestions.sort((a, b) => 0.5 - Math.random());

let currnetQuestion = -1;

function switchFromRulesToCounter(){
    document.getElementById('rules').style.display = "none" ;
    document.getElementById('counter').style.display = "block" ;
}


function switchFromQuestionsToResult(){
    document.getElementById('questions').style.display = "none" ;
    document.getElementById('result').style.display = "block" ;

}

timeLeft = 5;

function countdown() {
	timeLeft--;
	document.getElementById("secondes").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}

    else{
        document.getElementById('secondes').innerText = "Start!" ;
        document.getElementById('counter').style.display = "none" ;
        document.getElementById('questions').style.display = "block" ;
    }

};

// timeLeft = 2;

function loadingQuestions(){
    document.getElementById('questions').style.display = "none" ;
    document.getElementById('loading_questions').style.display = "block" ;
    document.getElementById('loading').classList.add('loading') ;
    
    $('#loading').fadeIn('');
    const timeOut = setTimeout(function() {
        $('#questions').fadeIn('');
        $('#loading').fadeOut('');
    }, 1000);
}

function loadingResult(){
    document.getElementById('result').style.display = "none" ;
    document.getElementById('loading_questions').style.display = "block" ;
    document.getElementById('loading').classList.add('loading') ;

    $('#loading').fadeIn('');
    $('#result').fadeOut('');
    const timeOut = setTimeout(function() {
        $('#result').fadeIn('');
        $('#loading').fadeOut('');
    }, 1000);
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
        alert('Please choose an answer') ;
        
    }

    else if(answer){
        if(answer == newQuestion[currnetQ]['answer']){
            score++ ;
        }

        document.getElementById('progressBar').innerText = score +'/'+ quizzQuestions.length ;
    }

    if(score == 0){
        document.getElementById('progressBar').innerText = 0 + '/' + quizzQuestions.length ;
    }

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

// const progressBarLevel = document.querySelector('.progressBarLevel'); 

// function progressBar(maxValue, finalValue){
//     progressBarLevel.style.width = `${(maxValue * 100) / finalValue}%`
//     progressBarLevel.innerHTML = `${Number((maxValue * 100) / finalValue).toFixed(2)}%` ;
// }


