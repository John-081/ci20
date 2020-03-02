var entryCount = 0;
var displayCount = 0;
var str = "The weak fear happiness itself. They can harm themselves on cotton wool. Sometimes they are wounded even by happiness.The world, after all, was still a place of bottomless horror. It was by no means a place of childlike simplicity where everything could be settled by a simple then-and-there decision. Now I have neither happiness nor unhappiness. Everything passes.";


function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  var cursor = document.querySelector("#cursor");
  var span = document.createElement("span");
  span.innerHTML = key;
  cursor.parentNode.insertBefore(span, cursor);

  var char = str.charAt(entryCount - 1);
  if (key == char) {
      //things to do when right
      var yes = document.getElementById("text").style.opacity = "1";

      //change the opacity of the (entryCount - 1)
  }
  // else {
  //   //things to do when wrong
  //   var res = str.replace("The weak fear happiness itself. They can harm themselves on cotton wool. Sometimes they are wounded even by happiness.The world, after all, was still a place of bottomless horror. It was by no means a place of childlike simplicity where everything could be settled by a simple then-and-there decision. Now I have neither happiness nor unhappiness. Everything passes.", "&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633");
  //   document.getElementById("text").innerHTML = res;
  //   document.getElementById("sub01").className = document.getElementById("sub01").className + " show";
  // }

  if (key == "&nbsp;"){
    var yes = document.getElementById("text").style.opacity = "0";
  }

  // console.log("letter should be: " + str.charAt(entryCount - 1));
}






function deleteElement() {
  entryCount += 1;
  var letter = document.querySelector("#cursor").previousSibling;
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 8) {
    deleteElement();
  }
  if (e.keyCode == 13) {
    createLetter("<br>");
  }
  if (e.key == " ") {
    createLetter("&nbsp;");
  }
  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    createLetter(e.key);
  }
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}
