/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */


function myFunction(hiddengrid,iconid,maingrid) {
  var elements = document.getElementsByClassName(hiddengrid);

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("morevideos");
  }
  change(iconid)
  document.getElementsByClassName("fa fa-caret-down")
  document.getElementById(maingrid).classList.toggle("studentscroll")
  console.log(elements)
}

function change (iconID){
  if(document.getElementById(iconID).className==="fa fa-caret-down"){
    document.getElementById(iconID).className = "fa fa-caret-up";
  }else{
    document.getElementById(iconID).className = "fa fa-caret-down";
  }
}
