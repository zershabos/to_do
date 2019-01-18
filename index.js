    {
  alert("Welcome Salem press OK to Start")
    }
function newItem() {
    var img=document.createElement('img');
    img.src="img/checkmark.png";
    var item = document.getElementById("input").value;
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
    li.appendChild(img);
    document.getElementById("input").value = "";
    li.onclick = removeItem;
  }
  
  document.body.onkeyup = function(e) {
    if (e.keyCode == 13) {
      newItem();
    }
  };
  
  function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
  }


