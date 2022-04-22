

  var items = document.querySelectorAll(".container div");
  //console.log(items);
  for (var i = 0; i < items.length; i++)
  {
    var item = items[i];
    //console.log(item, item.id)
    item.style.gridArea = item.id;
  }
  const pawn = document.createElement("img");
    pawn.src = "Icons/pawn.svg";
    //console.log("hi");
    document.getElementById('a2').appendChild(pawn);
 