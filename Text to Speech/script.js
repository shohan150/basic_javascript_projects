let speech = new SpeechSynthesisUtterance();
// The SpeechSynthesisUtterance object is part of the Web Speech API. 
// It is used to configure and control the parameters of speech synthesis (text-to-speech) in web applications. It allows you to specify various aspects of how the generated speech should sound, including the text to be spoken, the voice, pitch, rate, volume, and more. 

// Properties:
// text: A string representing the text that should be spoken.
// lang: A string representing the language and locale for the speech synthesis.
// voice: An instance of the SpeechSynthesisVoice object, specifying the voice to be used.
// volume: A number ranging from 0 to 1, controlling the volume of the speech.
// rate: A number representing the rate of speech (e.g., 1.0 for normal speed, 2.0 for faster, 0.5 for slower).
// pitch: A number that controls the pitch or tone of the speech (e.g., 1.0 for normal pitch).
let voices = [];
let voiceSelect = document.querySelector('select');

//This event handler is triggered when the list of available voices for speech synthesis changes. It sets up a callback function to handle this event.

//The `window.speechSynthesis.onvoiceschanged` event is triggered when the list of available voices for speech synthesis changes. It's not directly tied to selecting an option from a `<select>` element in your HTML. you're setting up this event handler to ensure that you have the most up-to-date list of available voices when it changes. The list of voices can change if, for example, the user installs or removes text-to-speech voices from their system.

// While selecting an option from a `<select>` element doesn't inherently change the list of voices, it's common to use this event to populate a dropdown list of available voices. When you initially set up the voices using `window.speechSynthesis.getVoices()` and populate the `<select>` element's options, you are ensuring that the user has the latest list of available voices to choose from.

// So, while selecting an option in your `<select>` doesn't directly trigger the `onvoiceschanged` event, it's a best practice to use the event handler to keep the list of voices up-to-date in your application.

window.speechSynthesis.onvoiceschanged = () => {

    voices = window.speechSynthesis.getVoices();
    // This line retrieves the list of available voices and assigns it to the voices variable. The list of voices is an array of SpeechSynthesisVoice objects.
    speech.voice = voices[0];
    // It sets the voice property of the SpeechSynthesisUtterance object speech to the first voice in the list. This specifies the default voice to be used for speech synthesis.

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
    // loops through the list of available voices and creates Option elements for each voice in a <select> element. This effectively populates a dropdown menu with voice options for the user to choose from.

    voiceSelect.addEventListener('change', () => {
        speech.voice = voices[voiceSelect.value];
    })
    // sets up an event listener on the voiceSelect dropdown to detect when the user changes the selected voice. When the user selects a different voice, it updates the voice property of the SpeechSynthesisUtterance object speech to use the newly selected voice.
}
// This code creates a dynamic voice selection feature that allows users to choose from available voices and specify which voice should be used for speech synthesis. 


document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
})

// sets the `text` property of the `SpeechSynthesisUtterance` object named `speech` to the value entered in the `<textarea>` element.

// `window.speechSynthesis.speak(speech);`: It uses the `speak()` method of the `window.speechSynthesis` object to convert the text specified in the `speech` object into audible speech using the selected voice.

