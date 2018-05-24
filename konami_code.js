const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


index = 0
body = document.getElementByID('body')
function init() {
  body.addEventListener('keydown',function(e) {
    if (e.which === codes[index]) {
      index++
       if (index===codes.length) {
         alert("You did it!")
         index = 0
       }
    } else {
      index = 0
    }
  })}