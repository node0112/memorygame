import './App.css';
import './reset.css'
import './components/home.css'
import Home from './components/home';
import { useState,useEffect } from 'react';
import Gamescreen from './components/gamescreen';

const App=()=>{

  const [curtainStat,setCurtainStat]=useState('curtain close')
  const [gameStart,setGameStart]=useState(false)
  const [currentScore,setCurrentScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)

  let gameArray=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
  let newArray=[]//used to store new chosen cards. after last card, reset and set value of OG array to this array
  let choice

  useEffect(()=>{
    document.querySelector('.start').addEventListener('click',()=>{
      setCurtainStat('curtain open')
        setTimeout(() => {
          setGameStart(true)
          setCurtainStat('curtain close')
        }, 1000);
    })
  },[Home])

  useEffect(()=>{
    function genRandomChoice(end){
      choice=Math.floor(Math.random() * (end));
    }
    function createGrid(){
      let length=gameArray.length
      let i=0
      let gridContainer=document.querySelector('.grid-container')
      while(length !=0){
        genRandomChoice(length)
        let image=gameArray[choice]
        newArray[i]=gameArray.splice(choice,1)[0]
        length=gameArray.length
        i++
        //creating grid item
        document.createElement(div)
      }
      console.log(newArray)
    }
    createGrid()
  },[Gamescreen])

  return(
    <div>
      <Home curtainStat={curtainStat} gameStart={gameStart} currentScore={currentScore} bestScore={bestScore} />
    </div>
  )
}

export default App;
