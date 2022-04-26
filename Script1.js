

  // var items = document.querySelectorAll(".container div");
  // //console.log(items);
  // for (var i = 0; i < items.length; i++)
  // {
  //   var item = items[i];
  //   console.log(item.id)
  //   item.style.gridArea = item.id;
  // }
    
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

    //rooks
    function createPiece(piece, url, chessboardSquare) {
      piece = document.createElement("img");
      piece.src = url;
      document.getElementById(chessboardSquare).appendChild(piece);
    }

    createPiece('rook', 'Icons/white rook.svg', 'a1');
    createPiece('rook', 'Icons/white rook.svg', 'h1');
    createPiece('rook', 'Icons/black rook.svg', 'a8');
    createPiece('rook', 'Icons/black rook.svg', 'h8');
    
    createPiece('bishop', 'Icons/white bishop.svg', 'c1');   
    createPiece('bishop', 'Icons/white bishop.svg', 'f1');   
    createPiece('bishop', 'Icons/black bishop.svg', 'c8');   
    createPiece('bishop', 'Icons/black bishop.svg', 'f8');   

    createPiece('knight', 'Icons/white knight.svg', 'b1');   
    createPiece('knight', 'Icons/white knight.svg', 'g1');   
    createPiece('knight', 'Icons/black knight.svg', 'b8');   
    createPiece('knight', 'Icons/black knight.svg', 'g8');   

    createPiece('king', 'Icons/white king.svg', 'e1');   
    createPiece('king', 'Icons/black king.svg', 'e8');  

    createPiece('queen', 'Icons/white queen.svg', 'd1');   
    createPiece('queen', 'Icons/black queen.svg', 'd8');  

    //https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces chess pieces link
   
  function clickChessboard(id) 
  {
    var items = document.querySelectorAll(".container div");
  for (var i = 0; i < items.length; i++)
  {
    var item = items[i];
    item.classList.remove('onClick');
  }
  document.getElementById(id).classList.add('onClick');
  }

  