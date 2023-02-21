import { Piece, Color } from './pieces/piece'
import { Rato } from './pieces/rato'
import { Gato } from './pieces/gato'

import { ICoordinate } from './game'

var boardMatrix: Piece[][] = [[], [], [], [], [], [], [], []];

function inicializaTabuleiro(boardMatrix: Piece[][]): void {
    // Adiciona o gato
    boardMatrix[1][3] = new Gato(1,3, 'white');
    
    
    // Black pieces
    boardMatrix[6][0] = new Rato(6,0, 'black');
    boardMatrix[6][1] = new Rato(6,1, 'black');
    boardMatrix[6][2] = new Rato(6,2, 'black');
    boardMatrix[6][5] = new Rato(6,5, 'black');
    boardMatrix[6][6] = new Rato(6,6, 'black');
    boardMatrix[6][7] = new Rato(6,7, 'black');
}

// Render pieces from the matrix
function renderBoard(boardMatrix: Piece[][], board: Element): void {
    let e = 0;
    const listOfDivs = Array.from(board.children);

    for (let i = 7; i >= 0; i--) {
        for (let j = 0; j< 8; j++) {
            if (boardMatrix[i][j] !== undefined && boardMatrix[i][j] !== null) {
                  // Pick what is the piece
                const piece = boardMatrix[i][j].constructor["name"].toLowerCase();
                const { color } = boardMatrix[i][j];
                // Next div element
                const divElement = listOfDivs[e];
                // Add classes to div element, so the piece will appear with the correct color.
                divElement.classList.add(piece, color);
              // If the element is null so this shouldn't appear  
            } else if (boardMatrix[i][j] === null && listOfDivs[e].classList.length > 1) {

                listOfDivs[e].classList.contains('black') ? listOfDivs[e].classList.remove('black') : 0;
                listOfDivs[e].classList.contains('white') ? listOfDivs[e].classList.remove('white') : 0;

                listOfDivs[e].classList.forEach(n => {
                    if (n !== 'light' && n !== 'dark') {
                        listOfDivs[e].classList.remove(n);
                    } 
                });
            } else {
                boardMatrix[i][j] = null;
            }
            e++;
        }
    }
}

export interface IPieceType {
  pieceType: string
  color: Color
}

function pickPiece({ row, column }: ICoordinate, matrix: Piece[][]): IPieceType {
  if (row >= 8 || row < 0 || column >= 8 || column < 0) {
    return { pieceType: null, color: null };
  } else if (matrix[row][column] === null) {
    return { pieceType: null, color: null };
  }
  const pieceType = matrix[row][column].constructor["name"].toLowerCase();
  const color = matrix[row][column].color;
  
  return { pieceType, color }
}

export {
    boardMatrix,
    inicializaTabuleiro,
    renderBoard,
    pickPiece,
}