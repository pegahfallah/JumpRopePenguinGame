var character = document.getElementById("character");
var block = document.getElementById("block");
var image = document.getElementById("penguin");

function jump() {
    if(character.classList != "animate"){
        
        image.src = "penguin2.png";
        character.classList.add("animate");
        
    }
    setTimeout(function(){
        character.classList.remove("animate");
        image.src = "penguin.png";

    }, 500);
}

var checkJump = setInterval(function() {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    var blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );
 
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130){
        // block.style.animation = "none";
        // alert("u lose");
    }
}, 10);