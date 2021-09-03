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