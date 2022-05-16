// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
var counter = 1

imgClickAndChange.onclick = function () {
  if (counter == 0) {
    document.getElementById('imgClickAndChange').src = './images/unicorn-0.png'
    counter++
  } else if (counter == 1) {
    document.getElementById('imgClickAndChange').src = './images/unicorn-1.png'
    counter++
  } else if (counter == 2) {
    document.getElementById('imgClickAndChange').src = './images/unicorn-2.png'
    counter++
  } else if (counter == 3) {
    document.getElementById('imgClickAndChange').src = './images/unicorn-3.png'
    counter++
  } else if (counter == 4) {
    window.alert('Congratulations on inflating a unicorn')
    counter = 0
  }
}
