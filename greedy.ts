import { Board, BoardCollection } from './board';

export function greedy_algorithm(pieces: number[], material_size: number) {
  /* Implementation of the First-Fit Greedy Algorithm
    Inputs:
    pieces - list[] of items to place optimally
    material_size - length of Boards to cut from, assumes unlimited supply
    Output:
    Optimally laid out BoardCollection.contents, which is a list[] of Boards 
    */

  let bc: BoardCollection = new BoardCollection();
  bc.append(new Board(material_size));

  pieces.reverse(); // sort in ascending order

  // we must copy pieces, else our actual list will get modified
  for (let piece of [...pieces]) {
    let piece_added: boolean = false; // for recording state: did we add this piece to BoardCollection yet?

    let board: Board;

    //if piece fits, add it on that Board, remove it from the list, mark it as such and break out of for loop

    for (let board of bc.contents) {
      if (board.space_remaining >= piece) {
        board.insert(piece);
        const index = pieces.indexOf(piece);
        pieces.splice(index, 1);
        piece_added = true;
        break;
      }
    }

    // if it hasn't been added yet, make a new Board and put it there
    if (!piece_added) {
      bc.append(new Board(material_size));
      bc.last.insert(piece);
      const index = pieces.indexOf(piece);
      pieces.splice(index, 1);
    }
  }
  return bc.contents;
}
