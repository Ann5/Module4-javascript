(function(window) {
var byeSpeaker ={};
var byeSpeaker.speakWord = "Good Bye";

function byeSpeaker.speak(name) {
  console.log(speakWord + " " + byeSpeaker.name);
}
window.byeSpeaker=byeSpeaker;

})(window);

byeSpeaker.speak("anu");s