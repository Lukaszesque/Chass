
  var items = document.querySelectorAll(".container div");
  console.log(items);
  for (var i = 0; i < items.length; i++)
  {
    var item = items[i];
    console.log(item, item.id)
    item.style.gridArea = item.id;
  }
