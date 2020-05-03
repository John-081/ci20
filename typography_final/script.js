
var xmlhttp = new XMLHttpRequest();
var url = "data-json.txt"; //your filename
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    //we do something here
    console.log(data);
    if (document.getElementById('index')) {
      buildIndex(data);
    }
    else {
      buildItem(data);
    }
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function buildItem(data){
  //get URL parameter "id"
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var id = parseInt(urlParams.get('id'));
  console.log('currently seeing item ' + id);

  document.querySelector('.title').innerText = data[id].manifesto;
  document.querySelector('.desc').innerText = data[id].description;
}

function buildIndex(data){
  //for each row of data:
  for (i = 0; i < data.length; i++){
    var item = document.createElement("span");
    item.classList.add('items');
    // item.classList.add(data[i].type);
    // item.classList.add(data[i].color);

    var elem = document.createElement("a");
    elem.innerText = data[i].manifesto;
    elem.href = "#";
    elem.href = "item.html?id=" + i;


    item.appendChild(elem);
    document.querySelector('h2').appendChild(item);
  }
}
