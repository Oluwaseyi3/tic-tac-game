import React from 'react'

type Player = "X" | "O" | "BOTH" |  null;
const Square = ({value, onClick, winner} 
    : {winner: Player;
       value: Player;
       onClick: () => void
    }) => {

    if (!value) {
        return <button onClick={onClick} disabled ={Boolean(winner)} className="square"/>
    }
  return (
     <button 
     className={`square square_${value.toLocaleLowerCase()}`}
     disabled> {value} </button>
  )
}

export default Square