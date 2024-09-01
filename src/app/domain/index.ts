import StartGame from "./startGame/StartGame";
import Guess from "./guess/Guess";

type Controller = typeof StartGame | typeof Guess;

const controllers = <Controller[]>[StartGame, Guess];

export { controllers };
