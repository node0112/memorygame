import React, { useEffect, useState } from "react";
import logo from '../images/logo.png'
import menuIcon from '../images/menu.png'

const Header=(gameStart)=>{
    const [menu,setMenu]=useState('menu menu-close')
    useEffect(()=>{
        if(gameStart.gameStart==true){
            document.querySelector('.close-menu').addEventListener('click',()=>{
            setMenu('menu menu-close')
            })
            document.querySelector('.menu-button').addEventListener('click',()=>{
                setMenu('menu menu-open')
            })
        }
    })
    if(gameStart.gameStart == false){
        return(
        <div className="header">
            <div className="logo"><img src={logo} alt="logo"/> Memory Game</div>
            <ul>
                <li className="header-list-item"><a className="header-list-link" target="_blank" href="https://github.com/node0112/memorygame">GitHub</a></li>
                <li className="header-list-item"><a className="header-list-link" target="_blank" href="https://github.com/node0112/memorygame/tree/main/src">Source</a></li>
                <li className="header-list-item"><a className="header-list-link" target="_blank" href="https://github.com/node0112">Other Projects</a></li>
            </ul>
        </div>
    )}
    else if(gameStart.gameStart == true){
        let currentScore=gameStart.currentScore
        let bestScore=gameStart.bestScore
        return(
            <div className="header header-game">
                <div className="logo"><i class="menu-button material-icons">menu</i> Memory Game</div>
                <div className={menu}>
                    <span className="close-menu">X</span>
                    <ul className="side-menu">
                    <li className="header-list-item"><a className="header-list-link" target="_blank" href="https://github.com/node0112/memorygame">GitHub</a></li>
                    <li className="header-list-item"><a className="header-list-link" target="_blank" href="https://github.com/node0112/memorygame/tree/main/src">Source</a></li>
                    <li className="header-list-item"><a className="header-list-link" target="_blank" href="https://github.com/node0112">Other Projects</a></li>
                    <li className="rules">
                        <div className="rules-title">
                            Rules + How To:
                            <div className="rules-text">- Select A Card And After The Grid Refreshes, Select The Same Card</div>
                            <div className="rules-text">- Everytime you choose a wrong card, the score and current selection will get reset.</div>
                            <div className="rules-text">- Your Best Score Will Be Stored Locally And Will Remain Even After Closing This Tab!</div>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="scoreboard">
                    <div className="score-text">Scores</div>
                    <div className="scores-container">
                        <div className="score">CURRENT: {currentScore}</div>
                        <div className="score">BEST: {bestScore} </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header