var toggle = 0

function Showheader(){
  var elements = document.getElementsByClassName("phone-header-item")

  for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("phone-header")
  }
  var phoneheader = document.getElementById("right-top-bar");
  if (toggle === 0){
    phoneheader.style.width = "160px"
    toggle = 1
  }
  else {
    phoneheader.style.width = "0px"
    toggle = 0
  }

}
