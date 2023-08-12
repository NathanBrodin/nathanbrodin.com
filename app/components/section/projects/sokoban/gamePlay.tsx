"use client";
import IphoneFrame from "@/app/components/ui/frame/iphone";
import DirectionPad from "./directionPad";

import { GameTile, GameState, move } from "./sokoban";
import { useState } from "react";

interface SokobanGameProps {
  initialGameState: GameState;
}

export default function GamePlay({ initialGameState }: SokobanGameProps) {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  const handleMove = (direction: 'up' | 'down' | 'left' | 'right') => {
    const newState = move(direction, gameState);
    setGameState(newState);
  };

  return (
    <IphoneFrame>
      <div
        className=" w-full h-full bg-repeat flex justify-center content-center items-center"
        style={{
          backgroundImage: "url(/sokoban/sol.png)",
          backgroundSize: "30%",
        }}
      >
        <div>
          {gameState.tiles.map((row, y) => (
            <div key={y} className="flex">
              {row.map((tile, x) => (
                <div
                  key={x}
                  className="w-8 h-8 relative"
                >
                  <div
                    className="absolute w-full h-full"
                    style={{
                      backgroundImage: `url('/sokoban/${tile}.png')`,
                      backgroundSize: "100%",
                    }}
                  />
                  {gameState.playerX === x && gameState.playerY === y && (
                    <div
                      className="absolute w-full h-full"
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
      </div>
    </IphoneFrame>
  );
}
