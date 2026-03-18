function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/lbr boss edit 2.2.PNG")
  } else {
    img.setAttribute("src", "./assets/lbr boss edit 1.1.png")
  }
}
