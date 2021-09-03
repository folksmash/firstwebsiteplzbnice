let userName = prompt('Please Enter your Name: ');

if(userName == 'Jordan'){
    document.write('Bananarama');
} else {
    document.write(userName)
}
function getUserName(){
	let userName = prompt('Please Enter your Name: ');

	if(userName == 'Jordan'){
		document.write('Welcome ' + userName);
	}else {
		document.write('Welcome' + userName);
	}
}

function doyouwannagofast(){
    if (confirm("Press ok if you knew you wanted to go fast all along")) {
        txt = "Of course you did";
      } else {
        txt = "check yo self";
      }
    }
    <script>
    function guessGame(){
        number = Math.floor(Math.random()*150);
        document.write(number);
        var guess = prompt("Guess a number: ");
            do {
                guess = prompt("Keep guessing!");
                if (number < guess) {
                    prompt("You're living in the clouds");
                } else if (number > guess) {
                    prompt("Get those numbas up");
                } else document.write("Gurtz");
                while (guess != number);
    </script>