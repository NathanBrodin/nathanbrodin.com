export type GameTile =
  | "ground"
  | "box"
  | "target"
  | "block"
  | "player"
  | "box-on-target";
export type GameDirection = "up" | "down" | "left" | "right";

export interface GameState {
  tiles: GameTile[][];
  playerX: number;
  playerY: number;
}

export function move(direction: GameDirection, state: GameState): GameState {
  let { playerX, playerY } = state;
  const tiles = state.tiles.map((row) => row.slice()); // Clone the tiles array

  // Define the new player coordinates
  let newX = playerX;
  let newY = playerY;

  if (direction === "up") newY--;
  if (direction === "down") newY++;
  if (direction === "left") newX--;
  if (direction === "right") newX++;

  // Check for out-of-bounds
  if (newX < 0 || newY < 0 || newX >= tiles[0].length || newY >= tiles.length) {
    return state; // If out of bounds, don't move
  }

  // Check for moving into a block
  if (tiles[newY][newX] === "block") {
    return state; // If moving into a block, don't move
  }

  // Check for moving a box
  if (tiles[newY][newX] === "box") {
    let nextX = newX;
    let nextY = newY;

    // Determine the position of the next tile in the direction of movement
    if (direction === "up") nextY--;
    if (direction === "down") nextY++;
    if (direction === "left") nextX--;
    if (direction === "right") nextX++;

    // Check if the next tile is out of bounds, a block, or another box
    if (
      nextX < 0 ||
      nextY < 0 ||
      nextX >= tiles[0].length ||
      nextY >= tiles.length ||
      tiles[nextY][nextX] === "block" ||
      tiles[nextY][nextX] === "box"
    ) {
      return state; // If the next tile is invalid, don't move
    }

    // Check if the box has been moved onto a target
    if (tiles[nextY][nextX] === "target") {
      tiles[nextY][nextX] = "box-on-target"; // Mark the box as being on a target
    } else {
      tiles[nextY][nextX] = "box"; // Move the box to the next tile
    }
    tiles[newY][newX] = "ground"; // Replace the box's previous position with ground
  }

  return {
    tiles,
    playerX: newX,
    playerY: newY,
  };
}
