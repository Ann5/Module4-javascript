(function(window) {
	var helloSpeaker = {};

var helloSpeaker.speakWord = "Hello";

function helloSpeaker.speak(name) {
  console.log(speakWord + " " + helloSpeaker.name);
}

window.helloSpeaker= helloSpeaker;
})(window);

<script src="byespeaker.js"></script>
  <script src="module4script.js"></script>
  <script src="hellospeaker.js"></script>