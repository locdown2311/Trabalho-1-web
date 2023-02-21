import { Piece, IPiece, Color } from './piece';
import { ICoordinate, board } from '../game'

export class Rato extends Piece implements IPiece {
    constructor(row: number, column: number, color: Color) {
        super(row, column, color);
        this.Moved = true;
    }
    //* Return an array with the availables movements
    public possibleMovementsList(board: Piece[][]): ICoordinate[] {
        const listOfCoordinates: ICoordinate[] = [];
        const color = this.color;
        const mov = (color == 'white') ? 1 : -1;

        if (this.row + mov < 8 && this.row + mov >= 0) {
            // movement 1 row up
            if(board[this.row + mov][this.column] === null) {
                listOfCoordinates.push({ row: this.row + mov, column: this.column });
            }
        }

        //* left diagonal movement
        if (this.row + mov < 8 && this.row + mov >= 0 && this.column - 1 >= 0) {
            if (board[this.row + mov][this.column - 1] !== null && board[this.row + mov][this.column - 1].color !== this.color) {
                listOfCoordinates.push({ row: this.row + mov, column: this.column - 1 });
            }

        }

        //* right diagonal movement
        if (this.row + mov < 8 && this.row + mov >= 0 && this.column + 1 < 8) {
            if (board[this.row + mov][this.column + 1] !== null && board[this.row + mov][this.column + 1].color !== this.color) {
                listOfCoordinates.push({ row: this.row + mov, column: this.column + 1 });
            }

        }
        return listOfCoordinates;
    }
}
