"use client";
import IphoneFrame from "@/app/components/ui/frame/iphone";
import DirectionPad from "./directionPad";

import { GameState, move } from "./sokoban";
import { useState } from "react";
import { RefreshCcwDot, SkipForward, Undo } from "lucide-react";

const initialGameState: GameState = {
  tiles: [
    ["block", "block", "block", "block", "block", "block", "block"],
    ["block", "ground", "ground", "block", "target", "ground", "block"],
    ["block", "ground", "ground", "ground", "box", "ground", "block"],
    ["block", "ground", "box", "ground", "ground", "ground", "block"],
    ["block", "ground", "ground", "ground", "ground", "ground", "block"],
    ["block", "ground", "ground", "target", "block", "block", "block"],
    ["block", "block", "block", "block", "block"],
  ],
  playerX: 2,
  playerY: 2,
};

export default function GamePlay() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [gameHistory, setGameHistory] = useState<GameState[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const handleMove = (direction: "up" | "down" | "left" | "right") => {
    setGameHistory((prevHistory) => [...prevHistory, gameState]);

    const newState = move(direction, gameState);
    setGameState(newState);

    // Check if the game is finished
    if (checkGameFinished(newState)) {
      setIsFinished(true);
    }
  };

  function checkGameFinished(state: GameState): boolean {
    return state.tiles.every((row, y) =>
      row.every(
        (tile, x) =>
          tile !== "box" || (tile === "box" && state.tiles[y][x] === "target"),
      ),
    );
  }

  function restart() {
    setGameState(initialGameState);
    setGameHistory([]); // Clear the game history
  }

  function undo() {
    if (gameHistory.length > 0) {
      const lastState = gameHistory.pop();
      setGameHistory([...gameHistory]);
      setGameState(lastState!);
    }
  }

  return (
    <IphoneFrame>
      <div
        className=" relative flex h-full w-full content-center items-center justify-center bg-black/50 bg-repeat"
        style={{
          backgroundImage: "url(/sokoban/ground.png)",
          backgroundSize: "30%",
        }}
      >
        <div className="absolute top-0 flex w-full justify-between bg-[#627678] text-white shadow-lg">
          <div className="px-4 py-1 font-extrabold">LEVEL 1</div>
          <div className="flex ">
            <button
              onClick={undo}
              className="flex items-center justify-center bg-[#E84B39] p-2"
            >
              <Undo className="h-4 w-4" />
            </button>
            <button
              onClick={restart}
              className="flex items-center justify-center bg-[#CE8D49] p-2"
            >
              <RefreshCcwDot className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div>
          {gameState.tiles.map((row, y) => (
            <div key={y} className="flex">
              {row.map((tile, x) => (
                <div key={x} className="relative h-8 w-8">
                  <div
                    className="absolute h-full w-full"
                    style={{
                      backgroundImage: `url('/sokoban/${
                        tile === "box-on-target" ? "box" : tile
                      }.png')`,
                      filter:
                        tile === "box-on-target" ? "hue-rotate(90deg)" : "",
                      backgroundSize: "100%",
                    }}
                  />
                  {gameState.playerX === x && gameState.playerY === y && (
                    <div
                      className="absolute h-full w-full"
                      style={{
                        backgroundImage: `url('/sokoban/player.png')`,
                        backgroundSize: "100%",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
        <DirectionPad onMove={handleMove} />
        {isFinished && (
          <div className="absolute z-10 flex h-full w-full items-center justify-center bg-black/50 px-4 py-16">
            <div className="flex flex-col items-center justify-center gap-4 rounded-md  bg-[#627678] p-4 text-white shadow-lg">
              <div className="flex flex-col justify-start">
                <h1 className="font-bold">CONGRATULATION !</h1>
                <p>Level 1 finished</p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    restart();
                    setIsFinished(false);
                  }}
                  className="flex items-center justify-center rounded-md bg-[#E84B39] p-2"
                >
                  <RefreshCcwDot className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    restart();
                    setIsFinished(false);
                  }}
                  className="flex items-center justify-center rounded-md bg-[#CE8D49] p-2"
                >
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </IphoneFrame>
  );
}
