

  var items = document.querySelectorAll(".container div");
  //console.log(items);
  for (var i = 0; i < items.length; i++)
  {
    var item = items[i];
    //console.log(item, item.id)
    item.style.gridArea = item.id;
  }
    
    //creates white pawns
    for (let i = 0; i < 8; i++)    
    {
      const pawn = document.createElement("img");
      pawn.src = "Icons/white pawn.svg";
      let chessboardNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    document.getElementById(chessboardNum[i] + '2').appendChild(pawn);
    }
    
    //creates black pawns
    for (let i = 0; i < 8; i++)    
    {
      const pawn = document.createElement("img");
      pawn.src = "Icons/black pawn.svg";
      let chessboardNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    document.getElementById(chessboardNum[i] + '7').appendChild(pawn);
    }

    //https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces chess pieces link

    