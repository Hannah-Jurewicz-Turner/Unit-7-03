// 
document.getElementById('button').addEventListener('click', checkAge)
let userInput = 0

function checkAge () {
userInput = document.getElementById('input').value
userInput = parseInt(userInput)

// 
if (userInput >= 17) {
  document.getElementById('answer').innerHTML = 'You can watch an R rated movie alone.'
} else if (userInput >= 13) {
  document.getElementById('answer').innerHTML = 'You can watch a PG-13 rated movie alone.'
} else if (userInput >= 5) {
  document.getElementById('answer').innerHTML = 'You can watch a G or PG rated movie alone.'
} else {
  document.getElementById('answer').innerHTML = 'Um. You are too young to watch anything.'
}
}