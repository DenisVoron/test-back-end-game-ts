import { JsonController, Get, Post, Body, Param } from "routing-controllers";

import { IGuess } from "./Guess.types";

import { ApiResponse } from "helpers/ApiResponse";
import { ApiError } from "helpers/ApiError";

const storeData: IGuess[] = [];

@JsonController("/guess")
export default class Guess {
  @Post()
  async setGuessNumber(@Body() body: IGuess) {
    storeData.push(body);

    return new ApiResponse(true, "Guess number successfully created");
  }
}
