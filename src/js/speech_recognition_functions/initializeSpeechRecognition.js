import { recognizeSpeech } from "./recognizeSpeech";

function initializeSpeechRecognition() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognizeSpeech(recognition);
}

initializeSpeechRecognition();
