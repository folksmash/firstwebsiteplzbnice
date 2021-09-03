function tellmename(){
  let userName = prompt('TELL ME YOUR NAME:');

  if(userName == 'Jordan'){
      document.write('Time to go fast ' + userName);
  } else {
      document.write(userName)    
  }
}
var userAnswer = prompt('Do you wanna zoom?');

function sleepfan(){
  console.log(userAnswer);
  if(userAnswer.toLowerCase() == 'no'){
      let url = "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2012/11/09/100110389-drive-fast-gettyp.1910x1000.jpg?v=1424731074"
      document.write('<img src="' + url + '">');
  }
}
function gimmeyonumba(){
  let correctAnswer = 200
  let letsPlay = prompt('Caaan I have it? (yay or nay)');
  console.log(userAnswer)
  while(letsPlay.toLowerCase() == 'yay'){
      let numberOfAttempts = 6;
      for(let i = 1; i <= numberOfAttempts; i++){
          userAnswer = prompt("What's the best number between 1-300");
          if(userAnswer == correctAnswer){
              alert('Try again' + (numberOfAttempts - i) + 'attempts left');
              break;
          } else if(userAnswer < correctAnswer){
              alert('Are you even trying?' + (numberOfAttempts - i) + 'attempts left');
          } else if(userAnswer > correctAnswer){
              alert('Are you even trying?' + (numberOfAttempts - i) + 'attempts left');
      
          }
      }
      letsPlay = prompt('Wanna Play a Game? (yay or nay)');
  }
  
}