export default function determineWin(player, pc) {
  // pc 1 - rock, 2 - paper, 3 - scissors
  if (player === 0 && pc === 0) {
    return "player vs pc";
  } else if (player === 1 && pc === 1) {
    return "draw";
  } else if (player === 1 && pc === 2) {
    return "pc won";
  } else if (player === 1 && pc === 3) {
    return "player won";
  } else if (player === 2 && pc === 2) {
    return "draw";
  } else if (player === 2 && pc === 1) {
    return "player won";
  } else if (player === 2 && pc === 3) {
    return "pc won";
  } else if (player === 3 && pc === 3) {
    return "draw";
  } else if (player === 3 && pc === 2) {
    return "player won";
  } else if (player === 3 && pc === 1) {
    return "pc won";
  }
}
