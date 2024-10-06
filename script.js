const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () =>{
    const synth = window.speechSynthesis;
    const text = textarea.value;

    const utterance =  new SpeechSynthesisUtterance(text); 
    synth.speak(utterance);


    if(!synth.speaking && text){
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
    }

    if(text.length > 50){
       if(synth.speaking && isSpeaking){
        button.innerText = "pause";
        synth.resume();
        isSpeaking = false;
       }else{
        button.innerText = "resume";
        synth.pause();
        isSpeaking = true;
       }

    }else{
        isSpeaking = false;
        button.innerText = "speaking"; 
    }

    setInterval(() =>{
        if(!synth.speaking && !isSpeaking){
           isSpeaking = true;
           button.innerText = "Convert To Speech"; 
        }
    })
} ;

button.addEventListener('click',  textToSpeech);