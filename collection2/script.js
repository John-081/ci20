var xmlhttp = new XMLHttpRequest();
var url = "data-json.txt"; //your filename
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
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


function buildIndex(data){
  //vertical marquee

  var mar = document.createElement('p');
  mar.className = 'marquee marquee1';
  document.querySelector('.box1').appendChild(mar);
  var text = document.createElement('span');
  text.className = 'myspan';
  document.querySelector('.marquee1').appendChild(text);

  var mar2 = document.createElement('p');
  mar2.className = 'marquee marquee1 marquee2';
  document.querySelector('.box1').appendChild(mar2);
  var text2 = document.createElement('span');
  text2.className = 'myspan2';
  document.querySelector('.marquee2').appendChild(text2);

  setTimeout(function(){
    document.getElementsByClassName('marquee2')[0].style.display = "inline-block";
  }, 60000);

//second vertical marquee

  var mar5 = document.createElement('p');
  mar5.className = 'marquee5 marquee6';
  document.querySelector('.box4').appendChild(mar5);
  var text5 = document.createElement('span');
  text5.className = 'myspan5';
  document.querySelector('.marquee6').appendChild(text5);

  var mar6 = document.createElement('p');
  mar6.className = 'marquee5 marquee6 marquee7';
  document.querySelector('.box4').appendChild(mar6);
  var text6 = document.createElement('span');
  text6.className = 'myspan6';
  document.querySelector('.marquee7').appendChild(text6);

  setTimeout(function(){
    document.getElementsByClassName('marquee7')[0].style.display = "inline-block";
  }, 60000);


  //horizontal marquee

  var mar3 = document.createElement('p');
  mar3.className = 'marquee0 marquee3';
  document.querySelector('.box2').appendChild(mar3);
  var text3 = document.createElement('span');
  text3.className = 'myspan3';
  document.querySelector('.marquee3').appendChild(text3);

  var mar4 = document.createElement('p');
  mar4.className = 'marquee0 marquee3 marquee4';
  document.querySelector('.box2').appendChild(mar4);
  var text4 = document.createElement('span');
  text4.className = 'myspan4';
  document.querySelector('.marquee4').appendChild(text4);




  //for each row of data:
    for (i = 0; i < data.length; i++){

var item = document.createElement("a");
    item.classList.add('items');
    item.classList.add(data[i].kind);
    item.classList.add(data[i].eat);
    item.classList.add(data[i].species);
var elem = document.createElement("a");
    elem.innerText = data[i].ChineseName + " ";
    elem.href = "item.html?id=" + i;

    item.appendChild(elem);
    document.querySelector('.myspan').appendChild(item);

var item2 = document.createElement("a");
    item2.classList.add('items');
    item2.classList.add(data[i].kind);
    item2.classList.add(data[i].eat);
    item2.classList.add(data[i].species);
var elem2 = document.createElement("a");
    elem2.innerText = data[i].ChineseName + " ";
    elem2.href = "item.html?id=" + i;

    item2.appendChild(elem2);
    document.querySelector('.myspan2').appendChild(item2);

var item3 = document.createElement("a");
    item3.classList.add('items');
    item3.classList.add(data[i].kind);
    item3.classList.add(data[i].eat);
    item3.classList.add(data[i].species);
var elem3 = document.createElement("a");
    elem3.innerText = data[i].EnglishName + " ";
    elem3.href = "item.html?id=" + i;

    item3.appendChild(elem3);
    document.querySelector('.myspan3').appendChild(item3);

var item4 = document.createElement("a");
    item4.classList.add('items');
    item4.classList.add(data[i].kind);
    item4.classList.add(data[i].eat);
    item4.classList.add(data[i].species);
var elem4 = document.createElement("a");
    elem4.innerText = data[i].EnglishName + " ";
    elem4.href = "item.html?id=" + i;

    item4.appendChild(elem4);
    document.querySelector('.myspan4').appendChild(item4);

    var item5 = document.createElement("a");
        item5.classList.add('items');
        item5.classList.add(data[i].kind);
        item5.classList.add(data[i].eat);
        item5.classList.add(data[i].species);
    var elem5 = document.createElement("a");
        elem5.innerText = data[i].EnglishName + " ";
        elem5.href = "item.html?id=" + i;

        item5.appendChild(elem5);
        document.querySelector('.myspan5').appendChild(item5);

        var item6 = document.createElement("a");
            item6.classList.add('items');
            item6.classList.add(data[i].kind);
            item6.classList.add(data[i].eat);
            item6.classList.add(data[i].species);
        var elem6 = document.createElement("a");
            elem6.innerText = data[i].EnglishName + " ";
            elem6.href = "item.html?id=" + i;

            item6.appendChild(elem6);
            document.querySelector('.myspan6').appendChild(item6);

            var item7 = document.createElement("a");
                item7.classList.add('items');
                item7.classList.add(data[i].kind);
                item7.classList.add(data[i].eat);
                item7.classList.add(data[i].species);
            var elem7 = document.createElement("a");
                elem7.innerText = data[i].ChineseName + " " + data[i].EnglishName;
                elem7.href = "item.html?id=" + i;

                item7.appendChild(elem7);
                document.querySelector('.box5').appendChild(item7);
    }
};







//THIS IS THE ITEM PAGE!!!!!!!!!!

function buildItem(data){
  //get URL parameter "id"
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var id = parseInt(urlParams.get('id'));
  console.log('currently seeing item ' + id);


document.querySelector('h1').innerText = data[id].ChineseName ;
document.querySelector('h2').innerText = data[id].EnglishName;
  document.querySelector('.desc1').innerText = data[id].Description1;
  document.querySelector('.desc2').innerText = data[id].Description2;
  document.querySelector('.eat').innerText = data[id].eat;
  document.querySelector('.kind').innerText = data[id].kind;
  document.querySelector('.species').innerText = data[id].species;
  document.querySelector('img').src = "assets/" + data[id].img;


  var mar8 = document.createElement('p');
  mar8.className = 'marquee8 marquee9';
  document.querySelector('.container').appendChild(mar8);
  var text8 = document.createElement('span');
  text8.className = 'myspan8';
  document.querySelector('.marquee9').appendChild(text8);

  var mar9 = document.createElement('p');
  mar9.className = 'marquee8 marquee9 marquee10';
  document.querySelector('.container').appendChild(mar9);
  var text9 = document.createElement('span');
  text9.className = 'myspan9';
  document.querySelector('.marquee10').appendChild(text9);

  setTimeout(function(){
    document.getElementsByClassName('marquee10')[0].style.display = "inline-block";
  }, 30000);








    for (i = 0; i < data.length; i++){

var item8 = document.createElement("a");
    item8.classList.add('items');
    item8.classList.add(data[i].kind);
    item8.classList.add(data[i].eat);
    item8.classList.add(data[i].species);

var elem8 = document.createElement("a");
    elem8.innerText = data[i].ChineseName + data[i].EnglishName + " ";
    elem8.href = "item.html?id=" + i;

    item8.appendChild(elem8);
    document.querySelector('.myspan8').appendChild(item8);

var item9 = document.createElement("a");
    item9.classList.add('items');
    item9.classList.add(data[i].kind);
    item9.classList.add(data[i].eat);
    item9.classList.add(data[i].species);

var elem9 = document.createElement("a");
    elem9.innerText = data[i].ChineseName + data[i].EnglishName + " ";
    elem9.href = "item.html?id=" + i;

        item9.appendChild(elem9);
        document.querySelector('.myspan9').appendChild(item9);



  }
};


//FILTER FUNCTION!!!!!!

function show(target){
  var items = document.querySelectorAll('.items');
  for (i = 0; i < items.length; i++){
    items[i].style.display = "none";
  }
  var selected = document.querySelectorAll(target);
  for (i = 0; i < selected.length; i++){
    selected[i].style.display = "inline-block";
  }
}

function Species(){
  var target = document.querySelector('.species').innerText;
  if (target == "Terrestrial" ) {
    var items = document.querySelectorAll('.items');
    for (i = 0; i < items.length; i++){
      items[i].style.display = "none";
    }
    var selected = document.querySelectorAll(".Terrestrial");
    for (i = 0; i < selected.length; i++){
      selected[i].style.display = "inline-block";
    }
  }
  if (target == "Aquatic" ) {
    var items = document.querySelectorAll('.items');
    for (i = 0; i < items.length; i++){
      items[i].style.display = "none";
    }
    var selected = document.querySelectorAll(".Aquatic");
    for (i = 0; i < selected.length; i++){
      selected[i].style.display = "inline-block";
    }
  }
  if (target == "Bird" ) {
    var items = document.querySelectorAll('.items');
    for (i = 0; i < items.length; i++){
      items[i].style.display = "none";
    }
    var selected = document.querySelectorAll(".Bird");
    for (i = 0; i < selected.length; i++){
      selected[i].style.display = "inline-block";
    }
  }
}

function Kind(){
  var target = document.querySelector('.kind').innerText;
  if (target == "Evil" ) {
    var items = document.querySelectorAll('.items');
    for (i = 0; i < items.length; i++){
      items[i].style.display = "none";
    }
    var selected = document.querySelectorAll(".Evil");
    for (i = 0; i < selected.length; i++){
      selected[i].style.display = "inline-block";
    }
  }
  if (target == "Auspicious" ) {
    var items = document.querySelectorAll('.items');
    for (i = 0; i < items.length; i++){
      items[i].style.display = "none";
    }
    var selected = document.querySelectorAll(".Auspicious");
    for (i = 0; i < selected.length; i++){
      selected[i].style.display = "inline-block";
    }
  }
}

function Eat(){
  var target = document.querySelector('.eat').innerText;
  if (target == "Dont" ) {
    var items = document.querySelectorAll('.items');
    for (i = 0; i < items.length; i++){
      items[i].style.display = "none";
    }
    var selected = document.querySelectorAll(".Dont");
    for (i = 0; i < selected.length; i++){
      selected[i].style.display = "inline-block";
    }
  }
  if (target == "Do" ) {
    var items = document.querySelectorAll('.items');
    for (i = 0; i < items.length; i++){
      items[i].style.display = "none";
    }
    var selected = document.querySelectorAll(".Do");
    for (i = 0; i < selected.length; i++){
      selected[i].style.display = "inline-block";
    }
  }
}
