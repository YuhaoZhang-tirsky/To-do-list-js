//Add a close button
var myNodeList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  myNodeList[i].appendChild(span);
  span.appendChild(txt);
}

//When click on close, hide the item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    console.log("1");
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.className.toggle("checked");
  }
})

// Add a item when clicking on add
function addItem() {
  var li = document.createElement("li");
  var userInput = document.getElementById("input-area").value;
  var txt = document.createTextNode(userInput);
  li.appendChild(txt);

  if (userInput === "") {
    alert("Please input something");
  } else {
    list.appendChild(li);
  }

  //Add a close button
  for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    myNodeList[i].appendChild(span);
    span.appendChild(txt);
  }

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      console.log("2");
    }
  }
}



