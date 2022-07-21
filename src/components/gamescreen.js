import React from "react"
import Header from "./header"

export default function Gamescreen(objects){
    let gameStart=objects.gameStart
    let currentScore=objects.currentScore
    let bestScore=objects.bestScore
    return(
        <div className="game-container">
            <Header gameStart={gameStart} currentScore={currentScore} bestScore={bestScore} />
            <div className="play-area">
                <div className="grid-container">

                </div>
            </div>
        </div>
    )
}