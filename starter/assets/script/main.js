const newQuestion = quizzQuestions.sort((a, b) => 0.5 - Math.random());

let currnetQuestion = -1;

function switchFromRulesToQuestions(){
    document.getElementById('rules').style.display = "none" ;
    document.getElementById('questions').style.display = "block" ;
}


function switchFromQuestionsToResult(){
    document.getElementById('questions').style.display = "none" ;
    document.getElementById('result').style.display = "block" ;
}


function allQuestions(){
    currnetQuestion++ ;

    console.log(currnetQuestion);

    console.log(newQuestion );
    
    document.getElementById('question').innerText = newQuestion[currnetQuestion]['question'];
    document.getElementById('a').innerText        = newQuestion[currnetQuestion]['a'] ;
    document.getElementById('b').innerText        = newQuestion[currnetQuestion]['b'] ;
    document.getElementById('c').innerText        = newQuestion[currnetQuestion]['c'] ;
    document.getElementById('d').innerText        = newQuestion[currnetQuestion]['d'] ;

    document.getElementById('currentQuestion').innerText = currnetQuestion + 1 ;

    if (currnetQuestion == quizzQuestions.length - 1){
        document.getElementById('nextQuestion').style.display = "none" ;
    }

}

function stepperCompenantStep2(){
    document.getElementById('step2').classList.add('active') ;
    document.getElementById('step2Value').innerText = "";
    document.getElementById('checkStep2').classList.add('fa-check') ;
}

function stepperCompenantStep3(){
    document.getElementById('step3').classList.add('active') ;
    document.getElementById('step3Value').innerText = "" ;
    document.getElementById('checkStep3').classList.add('fa-check') ;
}



