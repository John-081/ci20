//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=B7T9HkbkdrsHWi0pcv6Rhev2R5QSxaAA

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //getMonth() is 0 based
var yyyy = today.getFullYear();
if(dd < 10) {
    dd = '0' + dd;
}
if(mm < 10) {
    mm= '0' + mm;
}
today = yyyy + mm + dd;
console.log("Today is " + today);

var xmlhttp = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=movie&api-key=B7T9HkbkdrsHWi0pcv6Rhev2R5QSxaAA&begin_date=20120101&end_date=" + today; //your file name (or, the structured URL for API call)
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    printArticles(data);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printArticles(data){
  var docs = data.response.docs;
  for (i = 0; i < docs.length; i++) {
      var item = document.createElement("li");
      item.classList.add('articles');

      var anchor = document.createElement("a");
      anchor.innerText = docs[i].headline.main;
      anchor.href = docs[i].web_url;
      anchor.target = "_blank";


var image = document.createElement("img");
    var imageUrl;
    for (j = 0; j < docs[i].multimedia.length; j++){
      if (docs[i].multimedia[j].type == "image") {
        imageUrl = docs[i].multimedia[j].url;
        break;
      }
    }
    image.src = "http://www.nytimes.com/" + imageUrl;

      // attach things
      item.appendChild(anchor);
      anchor.appendChild(image);
      document.querySelector('.result').appendChild(item);
  }
}
