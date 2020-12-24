var numberofbuttons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbuttons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",play);


}

function play(){
  soundselect(this.textContent);
  buttonpressed(this.textContent);



}

//function to detec keyboard

document.addEventListener("keypress", function (event){
  // console.log(event.key);
  soundselect(event.key);
  buttonpressed(event.key);
})

//function for switch case sounds
function soundselect(value)
{
  this.a=value;
  switch(this.a)
  {
    case 'w' : var audio = new Audio("sounds/tom-1.mp3")
    audio.play();
    break;
    case 'a' :   var audio = new Audio("sounds/tom-2.mp3")
      audio.play();
      break;

      case 's' :   var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
        break;
        case 'd' :   var audio = new Audio("sounds/tom-4.mp3")
          audio.play();
          break;
          case 'j' :   var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
            case 'k' :   var audio = new Audio("sounds/crash.mp3")
              audio.play();
              break;
              case 'l' :   var audio = new Audio("sounds/kick-bass.mp3")
                audio.play();
                break;
              }

}


function buttonpressed(key){
  document.querySelector("."+key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("."+key).classList.remove("pressed");
  }, 100);


}
