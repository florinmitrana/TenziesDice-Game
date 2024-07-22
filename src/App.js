import './App.css';
import Dice from './Components/Dice';
import React from "react";
import {nanoid} from 'nanoid';
import Confetti from "react-confetti"
import DiceImage from './Components/DiceImage';


export default function App() {
  const [dice,setDice] =  React.useState(newDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() =>{
    const allHeld = dice.every(dice => dice.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(dice => dice.value === firstValue)
    if(allHeld && allSameValue){
      setTenzies(true)
      console.log("You Won!")
    }
    
  },[dice])

  function newDice(){
    const newdice = []
    for(let i =0; i<10; i++){
      newdice.push({value: Math.ceil(Math.random() *6),
         isHeld: false,
         id: nanoid()

      })
    }
    console.log(newDice)
    console.log(newdice[1].id)
    return newdice
  }

  function generatenewDice(){
    return {
      value: Math.ceil(Math.random() *6),
         isHeld: false,
         id: nanoid()

    }
  }

  function rollDice(){
    if(!tenzies){
    setDice(oldDice => oldDice.map(dice =>{
      return dice.isHeld ? 
      dice :
      generatenewDice()
    }))
  } else{
    setTenzies(false)
    setDice(newDice())
  }
  }

  function holdDice(id){
    setDice(oldDice => oldDice.map(dice =>{
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} :
      dice
    }))
  }

  const diceElements = dice.map(dice => (  <DiceImage roll={dice.value} isHeld={dice.isHeld} holdDice ={() => holdDice(dice.id)}/>))

  return (
   <main>
    {tenzies && <Confetti />}
    <h1 className='title'>Tenzies</h1>
    <p className='instructions'>Roll until all dice are the same. Click each dice to freeze it at its current value between rolls.</p>
    <div className='dice-container'>
      {diceElements}
    </div>
    <button className="roll-dice" onClick={rollDice}>
      {tenzies ? "New Game" : "Roll" }
    </button>
   </main>
  );
}

