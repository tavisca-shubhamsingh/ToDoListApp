function changeTab(evt, tabName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  var contentSpan=document.createElement("span");
  contentSpan.className="todo"
  contentSpan.appendChild(t);

  
  li.appendChild(contentSpan);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list-items").appendChild(li);
  }
  document.getElementById("myInput").value = "";


  var editSpan=document.createElement("span");
  var txt=document.createTextNode("\u270E");
  editSpan.className="edit";
  editSpan.addEventListener('click',function(evt){
      evt.target.parentElement.getElementsByClassName("todo")[0].contentEditable=true;
     
    });
  editSpan.appendChild(txt);


  var saveSpan=document.createElement("span");
  var txt=document.createTextNode("\u2713")
  saveSpan.className="save";
  saveSpan.appendChild(txt);
  saveSpan.addEventListener('click',function(evt){
    evt.target.parentElement.getElementsByClassName("todo")[0].contentEditable=false;
  });

  var closeSpan = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  closeSpan.className = "close";
  closeSpan.appendChild(txt);

  li.appendChild(saveSpan);
  li.appendChild(contentSpan);
  li.appendChild(editSpan);
  
  li.appendChild(closeSpan);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
