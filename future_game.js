function playGame() {
  const responses = ["You will become a famous Nurse", 
                     "You will become a successful entrepreneur!", 
                     "You will become a renowned scientist!", 
                     "You will become a Software Engineer"];
  
  // Randomly choose a response from the list
  const response = responses[Math.floor(Math.random() * responses.length)];
  
  const result = document.getElementById("result");
  result.innerHTML = `Drumroll please... ${response}`;
}
