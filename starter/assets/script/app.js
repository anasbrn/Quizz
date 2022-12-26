function lightmode(){

let lightmode = document.getElementById('lightmode') ;
let darkmode  = document.getElementById('darkmode') ;
let background = document.getElementById('homepage') ;
let texts       = document.getElementById('homeContent') ;
let breadcrumbs = document.getElementById('breadcrumbs') ;
let getStarted = document.getElementById('getStarted') ;

background.style.backgroundImage = "linear-gradient(to left, #4ade80 , #fff)" ;
getStarted.style.backgroundImage = "linear-gradient(to left, #09834a , #4ade80)" ;
texts.style.color = "#333" ;
breadcrumbs.style.color = "#333" ;
lightmode.style.display = "none" ;
darkmode.style.display = "block" ;


}

function darkmode(){
    
let texts       = document.getElementById('homeContent') ;
let lightmode = document.getElementById('lightmode') ;
let darkmode  = document.getElementById('darkmode') ;
let background = document.getElementById('homepage') ;
let breadcrumbs = document.getElementById('breadcrumbs') ;
let getStarted = document.getElementById('getStarted') ;



    background.style.backgroundImage = "linear-gradient(to right, black , #23BE75)"
    getStarted.style.backgroundImage = "linear-gradient(to left, #23BE75 , #09834a)" ;
    texts.style.color = "white" ;
    breadcrumbs.style.color = "white" ;
    lightmode.style.display = "block" ;
    darkmode.style.display = "none" ;


}