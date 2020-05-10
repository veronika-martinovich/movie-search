export function recognizeSpeech(recognition) {
  const microphone = document.querySelector(".icon_microphone");
  microphone.addEventListener("click", function () {
    recognition.start();
  });
  recognition.addEventListener("result", function (e) {
    document.querySelector(".search__text").value = e.results[0][0].transcript;
  });
}
