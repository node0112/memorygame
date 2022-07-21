import React from "react";
import Gamescreen from "./gamescreen";
import Header from "./header";


const Home=(objects)=>{
    let curtainStat=objects.curtainStat
    let gameStart=objects.gameStart
    let currentScore=objects.currentScore
    let bestScore=objects.bestScore
    if(gameStart==false){
        return(
            <div className="home">
                <div className="home-container">
                    <Header gameStart={gameStart}/>
                    <div className="abs-text">FT</div>
                    <button className="start" type="Button">Start</button>
                </div> 
                <div className={curtainStat}></div>
            </div>
        )
    }
    else if(gameStart==true){
        return(
            <div className="game">
                <Gamescreen gameStart={gameStart} currentScore={currentScore} bestScore={bestScore} />
                <div className={curtainStat}></div>
            </div>
        )
    }
}

export default Home