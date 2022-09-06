
let modal = document.getElementById("modal-form")


let btn = document.getElementById("modal-button")


let span = document.querySelector(".close")


btn.onclick = function() {
  modal.style.display = "block"
}


span.onclick = function() {
  modal.style.display = "none"
}
