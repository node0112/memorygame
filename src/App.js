import './App.css';
import './reset.css'
import './components/home.css'
import React, { Component }  from 'react';
import Home from './components/home';
import { useState,useEffect } from 'react';
import mordecai from './images/mordecai.png';
import eileen from './images/eileen.png';
import margaret from './images/margaret.png';
import muscleman from './images/muscleman.png';
import rigby from './images/rigby.png';
import skips from './images/skips.png';
import thomas from './images/thomas.png';
import benson from './images/benson.png';


const App=()=>{

  const [curtainStat,setCurtainStat]=useState('curtain close')
  const [gameStart,setGameStart]=useState(false)
  const [rendered,setRendered]=useState(false)

  //game states
  let currentSelected=undefined
  let score=0
  let started=false
  let bestScoreDependency=0 //since bestScore is async, we use another var to store the best score so that it can be accesed synchronously
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
        setTimeout(() => { //this prevents null error for grid container
          createGrid()
        }, 1100);
    })
  },[Home])
  useEffect(()=>{updateBestScore()},[])

function genRandomChoice(end){
  choice=Math.floor(Math.random() * (end));
}
function getImage(index,type){// retreives image for the particular position
  if(type=='image'){
    if(index==1){
    return mordecai
  }
  else if(index==2){
    return rigby
  }
  else if(index==3){
    return margaret
  }
  else if(index==4){
    return eileen
  }
  else if(index==5){
    return skips
  }
  else if(index==6){
    return muscleman
  }
  else if(index==7){
    return benson
  }
  else if(index==8){
    return thomas
  }}
  else if(type=='text'){
    if(index==1){
    return 'mordecai'
  }
  else if(index==2){
    return 'rigby'
  }
  else if(index==3){
    return 'margaret'
  }
  else if(index==4){
    return 'eileen'
  }
  else if(index==5){
    return 'skips'
  }
  else if(index==6){
    return 'muscleman'
  }
  else if(index==7){
    return 'benson'
  }
  else if(index==8){
    return 'thomas'
  }}
}
function createGrid(){
  let length=gameArray.length
  let i=0
  let gridContainer=document.querySelector('.grid-container')
  while(length !=0){
    genRandomChoice(length)
    let index=gameArray[choice]
    let image=getImage(index,'image')
    let text=getImage(index,'text')
    newArray[i]=gameArray.splice(choice,1)[0]
    length=gameArray.length
    i++
    //creating grid item
    let grid=document.createElement('div')
    let img=document.createElement('img')
    let charName=document.createElement('div')
    charName.textContent=text
    img.classList.add('char-image')
    img.src=image
    grid.classList.add('character-card')
    grid.id=index
    grid.appendChild(img)
    grid.appendChild(charName)
    gridContainer.appendChild(grid)
    grid.addEventListener('click',()=>{checkgrid(grid.id)})
  }
  for(let i=0;i<16;i++){
    gameArray[i]=newArray[i]
  }
  newArray=[]
}
function removeGrid(){
  let grids=document.querySelector('.grid-container')
  while(grids.firstChild) {
    grids.removeChild(grids.lastChild)
  }
}

const updateCurrScore = ()=>setCurrentScore((currentScore) => currentScore+1) //makes it synchronus
const resetCurrScore = ()=>setCurrentScore((currentScore)=> 0)
const updateBestScr = (currentScore)=>setBestScore((bestScore) =>  currentScore)

function updateBestScore(){
  let bestScoreLocal=localStorage.getItem('bestScore')
  let setItem=()=>{localStorage.setItem('bestScore',bestScoreDependency)}
  if(bestScoreLocal !== null && started === false){
    bestScoreDependency=bestScoreLocal
    console.log(bestScoreLocal)
    score=bestScoreLocal
    console.log(score)
    updateBestScr(score)
    started = true
  }
  else if( started === false){
    started = true
  }
  else if(started === true){
    console.log(score)
    if(bestScoreDependency > bestScoreLocal){
      setItem()
    }
    console.log(score)
    updateBestScr(score)
    score=0
    resetCurrScore()
    currentSelected=undefined
  }
}
function checkgrid(id){
  let selected=parseInt(id)
  if(currentSelected == undefined){
    currentSelected=selected
    removeGrid()
    createGrid()
  }
  else if(currentSelected != undefined){
    if(currentSelected === selected){
      selected=null
      currentSelected=undefined
      score=score+1
      removeGrid()
      createGrid()
      updateCurrScore()
    }
    else if(currentSelected != selected){
      if(score>bestScoreDependency){
        bestScoreDependency=score
        updateBestScore()
        score=0
      }
      else{
        score=0
        resetCurrScore()
        currentSelected=undefined
      }
        removeGrid()
        createGrid()
    }
  }
}


  return(
    <div>
      <Home curtainStat={curtainStat} gameStart={gameStart} currentScore={currentScore} bestScore={bestScore} setRendered={setRendered} rendered={rendered} />
    </div>
  )
}

export default App;
