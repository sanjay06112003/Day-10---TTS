let voices = [];

function loadVoices() {
    voices = speechSynthesis.getVoices();
}

function getFemaleVoice() {
    return voices.find(voice => voice.name.includes('Female') || voice.gender === 'female') || voices[0];
}

var speech = new SpeechSynthesisUtterance();


function Speak(){
    speech.text = texttospeak.value;

    speech.rate = 1;
    speech.volume = 5;
    speech.pitch = 1;

    var femaleVoice = getFemaleVoice();
    if (femaleVoice) {
        speech.voice = femaleVoice;
    }

    window.speechSynthesis.speak(speech );
}

speechSynthesis.onvoiceschanged = loadVoices;

document.getElementById('texttospeak').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();  
        Speak();  
    }
});

loadVoices();