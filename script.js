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
    var blockTop = parseInt(
      window.getComputedStyle(block).getPropertyValue("top")
    );
    console.log(characterTop);

    if(blockTop >= 148 && characterTop == 150){
        console.log(blockTop); 
        alert("You Lose! Click to Jump.")
        block.style.top = "0px";
    }
}, 10);