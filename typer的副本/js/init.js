var entryCount = 0;
var displayCount = 0;
// var str = "The weak fear happiness itself. They can harm themselves on cotton wool. Sometimes they are wounded even by happiness.The world, after all, was still a place of bottomless horror. It was by no means a place of childlike simplicity where everything could be settled by a simple then-and-there decision. Now I have neither happiness nor unhappiness. Everything passes.";

var word = "";

document.onkeydown = function(e) {

  if (e.keyCode == 8) {
    word = word.slice(0, word.length - 1);
  }
  if (e.keyCode == 13) {
    //reset program
    // createLetter("<br>");
    word = "";
  }
  if (e.key == " ") {
    //reset also
    // createLetter("&nbsp;");
    word = "";
  }
  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("abcdefghijklmnopqrstuvwxyz".includes(e.key.toLowerCase())) {
    word = word + e.key;
  }

  console.log(word);
  // console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}
