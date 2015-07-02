var Uscore = 0;

var highscore = 10;

var press = function() {
	Uscore++;
	document.getElementById('score').innerHTML = "Your Score: " + Uscore;
	if (Uscore > highscore) {
		document.getElementById('highscore').innerHTML = "New Highscore: " + Uscore;
		return;
	}
};