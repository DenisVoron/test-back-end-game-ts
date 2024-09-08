import { JsonController, Post, Body } from "routing-controllers";

import { IGuess } from "./Guess.types";

import { ApiResponse } from "helpers/ApiResponse";
import { ApiError } from "helpers/ApiError";

const storeDataGuess: IGuess[] = [];
const startingNumber: number = 55;

@JsonController("/guess")
export default class Guess {
  @Post()
  async setGuessNumber(@Body() body: IGuess) {
    try {
      const newDataGuess = {
        guessNumber: body.guessNumber,
      };

      storeDataGuess.push(newDataGuess);

      if (storeDataGuess.length > 0) {
        return storeDataGuess.map(({ guessNumber }) => {
          if (guessNumber < startingNumber) {
            return new ApiResponse(true, "Number needed more");
          }
          if (guessNumber > startingNumber) {
            return new ApiResponse(true, "Number needed less");
          }
          if (guessNumber === startingNumber) {
            return new ApiResponse(true, "You Winner!");
          }
        });
      }
    } catch (error) {
      throw new ApiError(500, {
        code: "HTTP Error Internal Server Error",
        message: `Server errors`,
      });
    }
  }
}
