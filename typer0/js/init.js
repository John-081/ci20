var entryCount = 0;
var displayCount = 0;
var str = "The weak fear happiness itself. They can harm themselves on cotton wool.";
var str2 = "Sometimes they are wounded even by happiness."



function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  var span = document.createElement("span");
   span.innerHTML = key;
   cursor.parentNode.insertBefore(span, cursor);
  var char = str.charAt(entryCount - 1);
  var char2 = str2.charAt(entryCount - 1);


  if (key == char) {
      var string  = document.getElementById("t01").innerHTML;
      document.getElementById("t01").innerHTML = string.slice(1);
      var element = querySelector("#cursor")
      element.remove();
  }

  // else {
  //   //things to do when wrong
  //   var res = str.replace("The weak fear happiness itself. They can harm themselves on cotton wool. Sometimes they are wounded even by happiness.The world, after all, was still a place of bottomless horror. It was by no means a place of childlike simplicity where everything could be settled by a simple then-and-there decision. Now I have neither happiness nor unhappiness. Everything passes.", "&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633&#9633");
  //   document.getElementById("text2").style.visibility = "hidden";
  //   document.getElementById("square").style.visibility = "visible";
  //   document.getElementById("text").innerHTML = res;
  //   document.getElementById("sub01").className = document.getElementById("sub01").className + " show";
  //   document.getElementById("sub02").className = document.getElementById("sub02").className + " show2";
  // }


  if (entryCount == 4){
    document.getElementById("t02").style.opacity = ".1";
    document.getElementById("c01").style.opacity = "1";
  }
  if (entryCount == 9){
    document.getElementById("t02").style.opacity = ".2";
    document.getElementById("c02").style.opacity = "1";
  }
  if (entryCount == 14){
    document.getElementById("t02").style.opacity = ".3";
    document.getElementById("c03").style.opacity = "1";
  }
  if (entryCount == 24){
    document.getElementById("t02").style.opacity = "1";
    document.getElementById("c04").style.opacity = "1";
  }
}







document.onkeydown = function(e) {
  if (e.keyCode == 8) {
    deleteElement();
  }
  if (e.key == " ") {
    createLetter(" ");
  }
  if (e.key == ".") {
    createLetter(".");
  }


  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    createLetter(e.key);
  }
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}


// function moveOnMax(t01,t02){
//   if(t01.value.length >= t01.maxLength){
//     document.getElementById(t02).focus();
//   }
// }
