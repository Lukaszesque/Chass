const chessboardLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const chessboardNumbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

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
  let chessboardNum = chessboardLetters;
  createPiece(pieceIdUrlDictionary.blackPawn, chessboardNum[i] + "7", "blackPawn", "black")
}

for (let i = 0; i < 8; i++) {
  let chessboardNum = chessboardLetters;
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

  //White Turn Logic (notice the piece validation):
  if (turn % 2 === 1 && clickArray.length > 1 && document.getElementById(clickArray[0]).firstChild.className === "white") {
    if (clickArray.length > 1) {
      if (pieceValidation(document.getElementById(clickArray[0]).firstChild.id, clickArray[0], clickArray[1]) == true) {
        takingPiece(clickArray[1], "black");
        MoveLogic(clickArray[0], clickArray[1]);
      }
      //console.log(document.getElementById(clickArray[0]).firstChild.id, clickArray[0][1], clickArray[1][1]);     
    }
  }

  //Black Turn:
  if (turn % 2 === 0 && clickArray.length > 1 && document.getElementById(clickArray[0]).firstChild.className === "black") {
    if (clickArray.length > 1) {
      if (pieceValidation(document.getElementById(clickArray[0]).firstChild.id, clickArray[0], clickArray[1]) == true) {
        takingPiece(clickArray[1], "white");
        MoveLogic(clickArray[0], clickArray[1]);
      }
    }
  }
}

//Movement Validation
function pieceValidation(pieceId, orginSquare, targetSquare) {
  let orginSquareLetter = orginSquare[0];
  let orginSquareNumber = parseInt(orginSquare[1], 10);
  let targetSquareLetter = targetSquare[0]
  let targetSquareNumber = parseInt(targetSquare[1], 10);

  //pawns
  if (pieceId === "whitePawn") {
    let indexOfOrginLetter = chessboardLetters.indexOf(orginSquareLetter);
    //Taking diagonally
    if (document.getElementById(targetSquare).firstChild !== null) {
      if (document.getElementById(targetSquare).firstChild.className === "black") {
        if (targetSquareNumber === (orginSquareNumber + 1) && targetSquareLetter == orginSquareLetter) {
          console.log("hi");
          return false
        }
        if (targetSquareNumber === (orginSquareNumber + 1) && targetSquareLetter === chessboardLetters[indexOfOrginLetter + 1]) {
          return true
        }
        if (targetSquareNumber === (orginSquareNumber + 1) && targetSquareLetter === chessboardLetters[indexOfOrginLetter - 1]) {
          return true
        }
      }
    }
    //Moving 1 square
    if (targetSquareNumber === (orginSquareNumber + 1) && orginSquareLetter === targetSquareLetter) {
      return true
    }
    //Moving 2 squares at the start
    if (targetSquareNumber === 4 && orginSquareNumber === 2 && orginSquareLetter === targetSquareLetter) {
      return true
    } else {
      return false
    }
  }

  //Black pawns
  if (pieceId === "blackPawn") {
    let indexOfOrginLetter = chessboardLetters.indexOf(orginSquareLetter);
    //Taking diagonally
    if (document.getElementById(targetSquare).firstChild !== null) {
      if (document.getElementById(targetSquare).firstChild.className === "white") {
        if (targetSquareNumber === (orginSquareNumber - 1) && targetSquareLetter == orginSquareLetter) {
          console.log("hi");
          return false
        }
        if (targetSquareNumber === (orginSquareNumber - 1) && targetSquareLetter === chessboardLetters[indexOfOrginLetter + 1]) {
          return true
        }
        if (targetSquareNumber === (orginSquareNumber - 1) && targetSquareLetter === chessboardLetters[indexOfOrginLetter - 1]) {
          return true
        }
      }
    }
    if (targetSquareNumber === (orginSquareNumber - 1) && orginSquareLetter === targetSquareLetter) {
      //console.log("validated true")
      return true
    }
    if (targetSquareNumber === 5 && orginSquareNumber === 7 && orginSquareLetter === targetSquareLetter) {
      return true
    } else {
      return false
    }
  }

  //rooks
  if (pieceId === "whiteRook" || pieceId === "blackRook") {
    if (orginSquareLetter === targetSquareLetter || orginSquareNumber === targetSquareNumber) {
      if (RookBlockLogic("white", "black", orginSquare, targetSquare) === "not blocked") {
      return true
      }
      
    } else {
      return false
    }
  }

  function RookBlockLogic(pieceColour, enemyPieceColour, orginSquare, targetSquare) {
    //Getting the squares difference
    let screened = false;
  let diff = 0;
  let screenedSquareId = "";
  if (targetSquare[0] === orginSquare[0]) {
    diff = Math.abs(targetSquare[1] - orginSquare[1]);
  }
  if (targetSquare[1] === orginSquare[1]) {
    diff = Math.abs(chessboardLetters.indexOf(targetSquare[0]) - chessboardLetters.indexOf(orginSquare[0]))
  }
  
  //TODO: Finish the sideways motion 

  //Up
  //Cycle through squares to check for a piece
  for (let i = 1; i < diff; i++) {
    if (document.getElementById(orginSquare[0] + (parseInt(orginSquare[1]) + i)).firstChild !== null) {
      if (document.getElementById(orginSquare[0] + (parseInt(orginSquare[1]) + i)).firstChild.className === pieceColour) {
        screened = true
      }
      if (document.getElementById(orginSquare[0] + (parseInt(orginSquare[1]) + i)).firstChild.className === enemyPieceColour) {
        if ((orginSquare[0] + (parseInt(orginSquare[1]) + i)) === targetSquare) {
          screened = false
        }
        else {screened = true}
      }
    }
  }

  if (screened === true) {return "blocked"}
  else {return "not blocked"};
  }

  //bishops
  if (pieceId === "whiteBishop" || pieceId == "blackBishop") {
    let diff = Math.abs(targetSquareNumber - orginSquareNumber);
    let indexOfLetter = chessboardLetters.indexOf(orginSquareLetter);
    let screened = false;
    //Logic for not moving through pieces
    if (pieceId === "whiteBishop") {
      if (BishopBlockLogic("white", "black") === true) {
        return true
      } else {
        return false
      }
    }

    if (pieceId === "blackBishop") {
      if (BishopBlockLogic("black", "white") === true) {
        return true
      } else {
        return false
      }
    }

    function BishopBlockLogic(pieceColour, enemyPieceColour) {

      //Up/right motion
      if (targetSquareLetter === chessboardLetters[indexOfLetter + diff]) {
        if (targetSquareNumber === orginSquareNumber + diff && orginSquareNumber + diff < 9) {
          for (let i = 1; i < diff + 1; i++) {
            let screenedElementId = chessboardLetters[indexOfLetter + i] + (orginSquareNumber + i);
            //console.log(screenedElementId);
            if (document.getElementById(screenedElementId).firstChild !== null) {
              if (document.getElementById(screenedElementId).firstChild.className === pieceColour) {
                screened = true;
              }
              if (document.getElementById(screenedElementId).firstChild.className === enemyPieceColour) {
                if (screenedElementId === targetSquare) {
                  screened = false
                } else {
                  screened = true;
                }
              };
            }
            if (screened === true) {
              return false
            }

          };
          if (screened === false) {
            return true
          }
        }
      }

      //Up/left motion
      if (targetSquareLetter === chessboardLetters[indexOfLetter - diff]) {
        if (targetSquareNumber === orginSquareNumber + diff && orginSquareNumber + diff < 9) {
          for (let i = 1; i < diff + 1; i++) {
            let screenedElementId = chessboardLetters[indexOfLetter - i] + (orginSquareNumber + i);
            //console.log(screenedElementId);
            if (document.getElementById(screenedElementId).firstChild !== null) {
              if (document.getElementById(screenedElementId).firstChild.className === pieceColour) {
                screened = true;
              }
              if (document.getElementById(screenedElementId).firstChild.className === enemyPieceColour) {
                if (screenedElementId === targetSquare) {
                  screened = false
                } else {
                  screened = true;
                }
              };
            }
            if (screened === true) {
              return false
            }
          };
          if (screened === false) {
            return true

          }
        }
      }

      //down/right motion
      if (targetSquareLetter === chessboardLetters[indexOfLetter + diff]) {
        if (targetSquareNumber === orginSquareNumber - diff && orginSquareNumber - diff > 0) {
          for (let i = 1; i < diff + 1; i++) {
            let screenedElementId = chessboardLetters[indexOfLetter + i] + (orginSquareNumber - i);
            console.log(screenedElementId);
            if (document.getElementById(screenedElementId).firstChild !== null) {
              if (document.getElementById(screenedElementId).firstChild.className === pieceColour) {
                screened = true;
              }
              if (document.getElementById(screenedElementId).firstChild.className === enemyPieceColour) {
                if (screenedElementId === targetSquare) {
                  screened = false
                } else {
                  screened = true;
                }
              };
            }
            if (screened === true) {
              return false
            }
          }
          if (screened === false) {
            return true
          }
        }
      }

      //down/left motion
      if (targetSquareLetter === chessboardLetters[indexOfLetter - diff]) {
        if (targetSquareNumber === orginSquareNumber - diff && orginSquareNumber - diff > 0) {
          for (let i = 1; i < diff + 1; i++) {
            let screenedElementId = chessboardLetters[indexOfLetter - i] + (orginSquareNumber - i);
            console.log(screenedElementId);
            if (document.getElementById(screenedElementId).firstChild !== null) {
              if (document.getElementById(screenedElementId).firstChild.className === pieceColour) {
                screened = true;
              }
              if (document.getElementById(screenedElementId).firstChild.className === enemyPieceColour) {
                if (screenedElementId === targetSquare) {
                  screened = false
                } else {
                  screened = true;
                }
              };
            }
            if (screened === true) {
              return false
            }
          }
          if (screened === false) {
            return true
          }
        }
      } else {
        return false
      }
    }


  }

  //knights
  if (pieceId === "whiteKnight" || pieceId === "blackKnight") {
    let indexOfLetter = chessboardLetters.indexOf(orginSquareLetter);
    if (targetSquareNumber === orginSquareNumber + 2 && targetSquareLetter === chessboardLetters[indexOfLetter + 1]) {
      return true
    }
    if (targetSquareNumber === orginSquareNumber + 2 && targetSquareLetter === chessboardLetters[indexOfLetter - 1]) {
      return true
    }
    if (targetSquareNumber === orginSquareNumber - 2 && targetSquareLetter === chessboardLetters[indexOfLetter + 1]) {
      return true
    }
    if (targetSquareNumber === orginSquareNumber - 2 && targetSquareLetter === chessboardLetters[indexOfLetter - 1]) {
      return true
    }
    if (targetSquareNumber === orginSquareNumber + 1 && targetSquareLetter === chessboardLetters[indexOfLetter + 2]) {
      return true
    }
    if (targetSquareNumber === orginSquareNumber + 1 && targetSquareLetter === chessboardLetters[indexOfLetter - 2]) {
      return true
    }
    if (targetSquareNumber === orginSquareNumber - 1 && targetSquareLetter === chessboardLetters[indexOfLetter + 2]) {
      return true
    }
    if (targetSquareNumber === orginSquareNumber - 1 && targetSquareLetter === chessboardLetters[indexOfLetter - 2]) {
      return true
    } else {
      return false
    }
  }

  //queens
  if (pieceId === "whiteQueen" || pieceId === "blackQueen") {
    let diff = targetSquareNumber - orginSquareNumber;
    let indexOfLetter = chessboardLetters.indexOf(orginSquareLetter);
    if (targetSquareLetter === chessboardLetters[indexOfLetter + diff] || targetSquareLetter === chessboardLetters[indexOfLetter - diff]) {
      return true
    }
    if (orginSquareLetter === targetSquareLetter || orginSquareNumber === targetSquareNumber) {
      return true
    } else {
      return false
    }
  }

  //kings
  if (pieceId === "whiteKing" || pieceId === "blackKing") {
    let indexOfLetter = chessboardLetters.indexOf(orginSquareLetter);
    if (targetSquareLetter === chessboardLetters[indexOfLetter + 1] && targetSquareNumber === orginSquareNumber + 1) {
      return true
    }
    if (targetSquareLetter === chessboardLetters[indexOfLetter - 1] && targetSquareNumber === orginSquareNumber + 1) {
      return true
    }
    if (targetSquareLetter === chessboardLetters[indexOfLetter + 1] && targetSquareNumber === orginSquareNumber - 1) {
      return true
    }
    if (targetSquareLetter === chessboardLetters[indexOfLetter - 1] && targetSquareNumber === orginSquareNumber - 1) {
      return true
    }
    if (targetSquareLetter === chessboardLetters[indexOfLetter] && targetSquareNumber === orginSquareNumber + 1) {
      return true
    }
    if (targetSquareLetter === chessboardLetters[indexOfLetter] && targetSquareNumber === orginSquareNumber - 1) {
      return true
    }
    if (targetSquareLetter === chessboardLetters[indexOfLetter + 1] && targetSquareNumber === orginSquareNumber) {
      return true
    }
    if (targetSquareLetter === chessboardLetters[indexOfLetter + -1] && targetSquareNumber === orginSquareNumber) {
      return true
    } else {
      return false
    }
  }

}

function takingPiece(targetSquare, pieceTargetColour) {
  let targetElement = document.getElementById(targetSquare);
  if (targetElement.firstChild !== null) {
    if (targetElement.firstChild.className === pieceTargetColour) {
      targetElement.removeChild(targetElement.firstChild);
    } else {
      clickArray = []
    }
  }
}

function pieceBlockChecker() {};