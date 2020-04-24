import React, { useState } from 'react'
import Card from './Card'
import update from 'immutability-helper'
import { useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'

const style = {
  height: '100vh',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  marginLeft:600,
  paddingTop:50,
  width: 400,
}

const Dustbin = () => {
  const [cards, setCards] = useState([
      {
        id: 'start',
        text: 'When Someone Active on Site',
      },
      {
        id: 'end',
        text: 'Exit',
      }
    ])
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.SIDEITEM,
    drop(item, monitor) {
      cards.push(
        {
          id:item.id,
          text:item.text
        }
      )      
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  const moveCard = (dragIndex, hoverIndex) => {
    //console.log(cards)
      const dragCard = cards[dragIndex]
      setCards(
        update(cards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        }),
      )
    }
  return (
    <div ref={drop} style={{ ...style}}>
      {cards.map((card, i) => (
        <Card
          key={card.id}
          index={i}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      ))}
    </div>
  )
}
export default Dustbin
