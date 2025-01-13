function hideElement(elementId){
    const elements = document.getElementById(elementId);
    elements.classList.add('hidden');
}
function showElement(elementId){
    const showId =document.getElementById(elementId);
    showId.classList.remove('hidden');
}


function getRandomAlphabet(){
    // get or create an alphabet array 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('') ;
   
    // get a random index between 0-25 
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const  alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;

}
// background color
function setBackGroundColor(elementId){
    const elementAdd = document.getElementById(elementId);
    elementAdd.classList.add('bg-orange-400');
   }
function removesetBackGroundColor(elementId){
    const elementAdd = document.getElementById(elementId);
    elementAdd.classList.remove('bg-orange-400');
   }
function setTextElementById(elementId, value){
    const element =document.getElementById(elementId);
    element.innerText= value;
}
function getTextElementValueId(elementId){
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value;

}
function getTextElementById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}