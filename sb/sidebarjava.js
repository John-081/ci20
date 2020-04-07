var div1 = document.createElement('div');
//create a variable defined as a div
div1.className = 'sidebar';
//give the div a classname
document.getElementsByTagName('body')[0].appendChild(div1);
//append the div into the parent body div

var div2 = document.createElement('div');
div2.className = 'content';
document.getElementsByTagName('body')[0].appendChild(div2);
//the same


var pages = ["home", "writings", "drawings", "sketchbook",
"prints", "travel", "organizations", "contact", "links"];

var sidebar = document.querySelector(".sidebar");
//store the contents of sidebar

for (let i =0; i < pages.length; i++) {
  //createt a loop of values in the array, each time a different value.
  console.log(pages[i]);
  //run the loop with the array.
  var link = `<a href ="${pages[i]}.html" class="sidebar-link"> ${pages[i]}</a>`;
  //define variable link: link name = href link that is made up of the array.
  sidebar.innerHTML += link;
  //insert varibale "link" into the sidebar;
}
