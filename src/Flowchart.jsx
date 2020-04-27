import React, { useState ,useRef } from 'react'
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
  
  const ref = useRef(null);

  const [{ isOver ,index}, drop] = useDrop({
    accept: ItemTypes.SIDEITEM,
    drop(item, monitor) {      
      setCards(prevState => {
          const newItems = prevState
              .concat({ ...item });
          return [ ...newItems ];
      }); 
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const moveCard = (dragIndex, hoverIndex) => {
        const item = cards[dragIndex];
        setCards(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);           
            return  [ ...newItems ];
        });
    };
  
  return (
      <div ref={drop} style={{ ...style }}>
        {
          cards.map((card, i) => (
            <Card
              key={card.id}
              index={i}
              id={card.id}
              text={card.text}
              moveCard={moveCard}
            />    
          ))             
        }
         
      </div>
  )
}
export default Dustbin
