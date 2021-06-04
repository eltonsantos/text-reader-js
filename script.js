const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
utterance.rate = 1.5;

function speak() {
	speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

function clearDiv() {
  console.log('entra aqui')
  document.getElementById('inputText').innerHTML = '';
}

function setText(event) {
	utterance.text = event.target.innerText;
}