// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     const playGround = document.getElementById('playground');
//     playGround.classList.remove('hidden')
    
// }
function handlerboardKeyUpEvent(event){
    const playerPress = event.key ;
    console.log(playerPress)
    if(playerPress === 'Escape'){
        gameOver();
    }
    // )

// get the expected to press 
const currentAlphabet = document.getElementById('current-alphabet');
const currentAlphabetElement = currentAlphabet.innerText;
const expectedAlphabet = currentAlphabetElement.toLowerCase();
// console.log(playerPress , expectedAlphabet);
// check matched or not 
if(playerPress === expectedAlphabet){
    console.log('you got a pont')
    // update score 
    // 1.get the current score 
    const currentScoreElelment = document.getElementById('current-score');
    const currentScoreInnerText = currentScoreElelment.innerText;
    const currentParesIn = parseInt(currentScoreInnerText);
    const newScore = currentParesIn + 1;
    currentScoreElelment.innerText = newScore;

    console.log('you have pressed correctly',expectedAlphabet);
   removesetBackGroundColor(expectedAlphabet);
    continueGame();
}
else{
    console.log('you missed. you lost the point')
    const currentScore = document.getElementById('current-life');
    const currentLife = currentScore.innerText
    const scoreParse = parseInt(currentLife);
    const newScoreLife = scoreParse - 1;
    currentScore.innerHTML = newScoreLife;
    if(newScoreLife === 0){
        gameOver();
    }
}

}
    

 


document.addEventListener('keyup', handlerboardKeyUpEvent)

function continueGame(){
    const alphabetGet = getRandomAlphabet();
    console.log( 'your random alphabet ',alphabetGet);
    // show it 
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabetGet
    setBackGroundColor(alphabetGet);
}
function play(){
    hideElement('home-screen');
    hideElement('finnal-score')
    showElement('playground')
    setTextElementById('current-life',5)
    setTextElementById('current-score',0)
    continueGame();
   
}
function gameOver(){
    hideElement('playground')
    showElement('finnal-score')
    // update score ?
    const lastScore = getTextElementValueId('current-score');
    console.log(lastScore)
    setTextElementById('last-score',lastScore);
    const currentAlphabet = getTextElementById('current-alphabet');
    removesetBackGroundColor(currentAlphabet);

}