var toggle = 0

function Showheader(){
  var elements = document.getElementsByClassName("phone-header-item")

  for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("phone-header")
  }
  var phoneheader = document.getElementById("right-top-bar");
  if (toggle === 0){
    phoneheader.style.fontSize = "20px"
    toggle = 1
  }
  else {
    phoneheader.style.fontSize = "0px"
    toggle = 0
  }

}
//
// if (window.innerWidth > "750px"){
//   document.getElementById("right-top-bar").style. = "100%"
// }
