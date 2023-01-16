export class Board {
  board_length: number;
  items: number[];
  space_remaining: number;
  space_used: number = 0;

  constructor(material_size: number) {
    this.board_length = material_size;
    this.items = [];
    this.space_remaining = this.board_length;
  }

  public insert(piece_length: number) {
    //Add a item to the Board
    if (this.space_remaining >= piece_length) {
      this.items.push(piece_length);
      this.space_remaining -= piece_length;
      this.space_used += piece_length;
    } else {
      throw new Error('piece of length too long to be inserted');
    }
  }

  public remove(piece_length: number) {
    //Remove an item from the Board
    if (piece_length in this.items) {
      const index = this.items.indexOf(piece_length);
      const x = this.items.splice(index, 1);
      this.space_remaining += piece_length;
    } else {
      throw new Error('piece not on the Board!');
    }
  }
  toString() {
    return `Board with items ${this.items}, unused space: ${this.space_remaining}`;
  }
}

export class BoardCollection {
  /* 
  /* Represents a collection of Boards, representing the result of calculation
  /* BoardCollection inializes its contents to []
  /* num_boards is supported
  /* append adds a Board to the collection 
  */

  contents: Board[];

  constructor() {
    this.contents = [];
  }

  get num_boards() {
    return this.contents.length;
  }

  get last() {
    // Returns the last Board on a BoardCollection
    if (this.contents.at(-1)) return this.contents.at(-1);
  }

  append(board: Board) {
    // Adds a Board at the end of a BoardCollection
    if (board instanceof Board) {
      this.contents.push(board);
    } else {
      throw new Error('Only Board can be appended to BoardCollection');
    }
  }
}
