import { JsonController, Post } from "routing-controllers";

import { IStartGame } from "./StartGame.types";
import { ApiResponse } from "helpers/ApiResponse";
import { ApiError } from "helpers/ApiError";

const storeData: IStartGame[] = [];

@JsonController("/start_game")
export default class StartGame {
  @Post()
  async setRandomNumber() {
    try {
      const randomNumber = Math.ceil(Math.random() * (10 - 1) + 1);

      const userData: IStartGame = { startNumber: randomNumber };

      storeData.push(userData);

      return new ApiResponse(true, "Number successfully created");
    } catch (error) {
      throw new ApiError(500, {
        code: "HTTP Error Internal Server Error",
        message: `Server errors`,
      });
    }
  }
}
