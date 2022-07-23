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
                <li className="header-list-item"><a className="header-list-link" href="">GitHub</a></li>
                <li className="header-list-item"><a className="header-list-link" href="">Source</a></li>
                <li className="header-list-item"><a className="header-list-link" href="https://github.com/node0112">Other Projects</a></li>
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
                        <li className="header-list-item">GitHub</li>
                        <li className="header-list-item">Source</li>
                        <li className="header-list-item">Other Projects</li>
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