function createPiece(url, chessboardSquare, pieceId, pieceClass) {
  let pieceName = document.createElement("img");
  pieceName.src = url;
  let element = document.getElementById(chessboardSquare).appendChild(pieceName);
  element.setAttribute("id", pieceId);
  element.setAttribute("class", pieceClass);
}

var pieceIdUrlDictionary = {
  blackPawn: "Icons/black pawn.svg",
  whitePawn: "Icons/white pawn.svg",
  whiteRook: 'Icons/white rook.svg',
  blackRook: 'Icons/black rook.svg',
  whiteBishop: 'Icons/white bishop.svg',
  blackBishop: 'Icons/black bishop.svg',
  whiteKnight: 'Icons/white knight.svg',
  blackKnight: 'Icons/black knight.svg',
  whiteKing: 'Icons/white king.svg',
  blackKing: 'Icons/black king.svg',
  whiteQueen: 'Icons/white queen.svg',
  blackQueen: 'Icons/black queen.svg'
}

function AccessPieceSource(pieceId) {
  if (pieceId == "whitePawn") {
    return pieceIdUrlDictionary.whitePawn
  }
  if (pieceId == "blackPawn") {
    return pieceIdUrlDictionary.blackPawn
  }
  if (pieceId == "whiteBishop") {
    return pieceIdUrlDictionary.whiteBishop
  }
  if (pieceId == "blackBishop") {
    return pieceIdUrlDictionary.blackBishop
  }
  if (pieceId == "whiteKnight") {
    return pieceIdUrlDictionary.whiteKnight
  }
  if (pieceId == "blackKnight") {
    return pieceIdUrlDictionary.blackKnight
  }
  if (pieceId == "whiteRook") {
    return pieceIdUrlDictionary.whiteRook
  }
  if (pieceId == "blackRook") {
    return pieceIdUrlDictionary.blackRook
  }
  if (pieceId == "whiteKing") {
    return pieceIdUrlDictionary.whiteKing
  }
  if (pieceId == "blackKing") {
    return pieceIdUrlDictionary.blackKing
  }
  if (pieceId == "whiteQueen") {
    return pieceIdUrlDictionary.whiteQueen
  }
  if (pieceId == "blackQueen") {
    return pieceIdUrlDictionary.blackQueen
  }
}


for (let i = 0; i < 8; i++) {
  let chessboardNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  createPiece(pieceIdUrlDictionary.blackPawn, chessboardNum[i] + "7", "blackPawn", "black")
}

for (let i = 0; i < 8; i++) {
  let chessboardNum = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  createPiece(pieceIdUrlDictionary.whitePawn, chessboardNum[i] + "2", "whitePawn", "white")
}

createPiece('Icons/white rook.svg', 'a1', "whiteRook", "white");
createPiece('Icons/white rook.svg', 'h1', "whiteRook", "white");
createPiece('Icons/black rook.svg', 'a8', "blackRook", "black");
createPiece('Icons/black rook.svg', 'h8', "blackRook", "black");
createPiece('Icons/white bishop.svg', 'c1', "whiteBishop", "white");
createPiece('Icons/white bishop.svg', 'f1', "whiteBishop", "white");
createPiece('Icons/black bishop.svg', 'c8', "blackBishop", "black");
createPiece('Icons/black bishop.svg', 'f8', "blackBishop", "black");
createPiece('Icons/white knight.svg', 'b1', "whiteKnight", "white");
createPiece('Icons/white knight.svg', 'g1', "whiteKnight", "white");
createPiece('Icons/black knight.svg', 'b8', "blackKnight", "black");
createPiece('Icons/black knight.svg', 'g8', "blackKnight", "black");
createPiece('Icons/white king.svg', 'e1', "whiteKing", "white");
createPiece('Icons/black king.svg', 'e8', "blackKing", "black");
createPiece('Icons/white queen.svg', 'd1', "whiteQueen", "white");
createPiece('Icons/black queen.svg', 'd8', "blackQueen", "black");

//https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces chess pieces link


let clickArray = [];
let turn = 1;

function clickChessboard(chessSquareId) {
  //This logic tells you the piece ID
  let pieceTypeId;
  let pieceTypeElement = document.getElementById(chessSquareId).firstElementChild;
  if (pieceTypeElement != null) {
    pieceTypeId = pieceTypeElement.id
  }
  //console.log("the selected piece Id is " + pieceTypeId);

  //Logic for storing last two moves in an array 
  clickArray.push(chessSquareId);
  if (clickArray.length > 2) {
    clickArray.shift();
  }
  //console.log("click array value(s) are " + clickArray);

  //logic for the highlight
  var items = document.querySelectorAll(".container div");
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    item.classList.remove('onClick');
  }
  if (pieceTypeId !== undefined) {
    document.getElementById(chessSquareId).classList.add('onClick');
  }

  //If a square is clicked and another square is clicked, the piece div gets appended to the other square
  function MoveLogic(clickArray0, clickArray1) {
    let ele = document.getElementById(clickArray0);
    createPiece(AccessPieceSource(ele.firstChild.id), clickArray1, ele.firstChild.id, ele.firstChild.classList[0]);
    ele.removeChild(ele.firstChild);
    clickArray = [];
    turn++
  }

  //Turns Logic (notice the piece validation):
  if (turn % 2 === 1 && clickArray.length > 1 && document.getElementById(clickArray[0]).firstChild.className === "white") {
    if (clickArray.length > 1) {
      if (pieceValidation(document.getElementById(clickArray[0]).firstChild.id, clickArray[0], clickArray[1]) == true) {
        MoveLogic(clickArray[0], clickArray[1]);
      }
      //console.log(document.getElementById(clickArray[0]).firstChild.id, clickArray[0][1], clickArray[1][1]);     
    }
  }

  if (turn % 2 === 0 && clickArray.length > 1 && document.getElementById(clickArray[0]).firstChild.className === "black") {
    if (clickArray.length > 1) {
      if (pieceValidation(document.getElementById(clickArray[0]).firstChild.id, clickArray[0], clickArray[1]) == true) {
        MoveLogic(clickArray[0], clickArray[1]);
      }
    }
  }
  //console.log("its turn " + turn);

}

//TODO: Work on the piece validation (finish pawns)
function pieceValidation(pieceId, orginSquare, targetSquare) {
  let orginSquareNumber = parseInt(orginSquare[1], 10);
  let targetSquareNumber = parseInt(targetSquare[1], 10);
  if (pieceId === "whitePawn") {
    if (targetSquareNumber === (orginSquareNumber + 1)) {
      //console.log("validated true")
      return true
    } else {
      return false
    }
  }

  if (pieceId === "blackPawn") {
    if (targetSquareNumber === (orginSquareNumber - 1)) {
      //console.log("validated true")
      return true
    } else {
      return false
    }
  }

}