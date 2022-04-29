

  // var items = document.querySelectorAll(".container div");
  // //console.log(items);
  // for (var i = 0; i < items.length; i++)
  // {
  //   var item = items[i];
  //   console.log(item.id)
  //   item.style.gridArea = item.id;
  // }

function createPiece(url, chessboardSquare, pieceId) {
      let pieceName = document.createElement("img");
      pieceName.src = url;
      let element = document.getElementById(chessboardSquare).appendChild(pieceName);
      element.setAttribute("id", pieceId);
}

for (let i = 0; i < 8; i++)    
{
  let chessboardNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  createPiece("Icons/black pawn.svg", chessboardNum[i] + "7", "blackPawn")
}
for (let i = 0; i < 8; i++)    
{
  let chessboardNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  createPiece("Icons/white pawn.svg", chessboardNum[i] + "2", "whitePawn")
}

createPiece('Icons/white rook.svg', 'a1', "whiteRook");
createPiece('Icons/white rook.svg', 'h1', "whiteRook");
createPiece('Icons/black rook.svg', 'a8', "blackRook");
createPiece('Icons/black rook.svg', 'h8', "blackRook");

createPiece('Icons/white bishop.svg', 'c1', "whiteBishop");   
createPiece('Icons/white bishop.svg', 'f1', "whiteBishop");   
createPiece('Icons/black bishop.svg', 'c8', "blackBishop");   
createPiece('Icons/black bishop.svg', 'f8', "blackBishop");   
createPiece('Icons/white knight.svg', 'b1', "whiteKnight");   
createPiece('Icons/white knight.svg', 'g1', "whiteKnight");   
createPiece('Icons/black knight.svg', 'b8', "blackKnight");   
createPiece('Icons/black knight.svg', 'g8', "blackKnight");   
createPiece('Icons/white king.svg', 'e1', "whiteKing");   
createPiece('Icons/black king.svg', 'e8', "blackKing");  
createPiece('Icons/white queen.svg', 'd1', "whiteQueen");   
createPiece('Icons/black queen.svg', 'd8', "blackQueen");  

//https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces chess pieces link

//Logic for storing last two moves in an array
let clickArray = [];   
clickArray.push(chessSquareId);
  if (clickArray.length > 2) 
  {
    clickArray.shift();
  }
  console.log(clickArray);

  
function clickChessboard(chessSquareId) 
{
  var items = document.querySelectorAll(".container div");
  for (var i = 0; i < items.length; i++)
    {
      var item = items[i];
      item.classList.remove('onClick');
    }
  document.getElementById(chessSquareId).classList.add('onClick');

  let pieceTypeId = document.getElementById(chessSquareId).firstElementChild.id;

  //ToDo: Work on logic to decide what happens to pawn after it moves
  if (pieceTypeId === "whitePawn") {
    //console.log("hi");
    } 
 
  

  return document.getElementById(chessSquareId);
}

  