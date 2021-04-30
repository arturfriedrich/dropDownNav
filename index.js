const openBtn = document.querySelector(".open-menu")
const closeBtn = document.querySelector(".close-menu")
const navBar = document.querySelector(".nav")
const contentContainer = document.querySelector(".container")

openBtn.addEventListener("click", toggle)
closeBtn.addEventListener("click", toggle)

function toggle() {
  navBar.classList.toggle("active-nav")
  contentContainer.classList.toggle("inactive-container")
}

contentContainer.addEventListener("click", close)

function close(event) {
  if(!event.target.classList.contains("material-icons-outlined")) {
    navBar.classList.remove("active-nav")
    contentContainer.classList.remove("inactive-container")
  }
}