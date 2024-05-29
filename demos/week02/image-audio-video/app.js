console.log("test");
const bumblebeeAudio = document.getElementById("bumblebee-audio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");

//I want the user to click the play button, and I want the audio to play

//the second parameter is an anonymous function. We can write as usual or as an arrow function
playBtn.addEventListener("click", () => {
  //action
  bumblebeeAudio.play();
});

pauseBtn.addEventListener("click", function () {
  bumblebeeAudio.pause();
});

stopBtn.addEventListener("click", () => {
  //there is no stop method; we have to pause and set time to 0
  bumblebeeAudio.pause();
  bumblebeeAudio.currentTime = 0;
});

skipBack.addEventListener("click", function () {
  //we set current time to 5 seconds behind
  bumblebeeAudio.currentTime = bumblebeeAudio.currentTime - 5;
  //   bumblebeeAudio.currentTime -= 5;
});

skipFor.addEventListener("click", () => {
  //we set current time to 5 seconds ahead
  bumblebeeAudio.currentTime += 5;
});

//a different way of writing event listeners
function playAction(sampleAudio) {
  sampleAudio.play();
}

playBtn2.addEventListener("click", playAction(bumblebeeAudio));
