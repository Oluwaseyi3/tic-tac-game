import Square from '@/components/Square'
import React, {useState} from 'react'

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
   ( Math.round(Math.random() * 1) === 1 ? "X" : "O")
  )

  const [winner, setWinner] = useState(null)

   const setSquareValue = (index: any) => {
      const newData = squares.map((val , i) => {
        if (i=== index){
            return currentPlayer
        }
        return val
      })
      setSquares(newData)
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
   }
  return (
    <>
      <h2> Hey {currentPlayer} its your turn</h2>
      <p>This is the Board</p>
      
    
      {
        Array(9).fill(null).map((_, i) =>{
          return  <Square
          winner={winner}
          key={i}
          onClick={() => setSquareValue(i)}
          value={squares[i]}
          />
        })
      }
    </>
  )
}

export default Board