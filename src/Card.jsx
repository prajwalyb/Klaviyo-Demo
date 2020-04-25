import React, { useRef , useState, Fragment} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'


const Item = ({ item , id , text, index, moveCard }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ItemTypes.CARD,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }            
            moveCard(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.CARD, ...item, index },
        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));
    
    var style={
        background: '#D9E0E7',
        minHeight: '112px',
        maxHeight: '168px',
        border: '2px solid transparent',
        position: 'relative',
        padding: '12px',
        borderRadius: '2px',
        boxShadow: '0 1px 2px rgba(98,111,126,.66)',
        width:'305px',
        boxSizing: 'border-box',
    };
    if(id==='email' || id==='updateProfile')
        style.background='#FFFFFF'
        
    if(id==='timeDelay')
        style.background='#F6F8F9'

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ 
                    ...style , 
                    opacity: isDragging ? 0 : 1, 
                }}
                className={"item"}
            >
                <div className="placed-component-body">
                    {text}
                </div>                
            </div>
            {
                (()=>{
                    if(id!=='end')
                    return(
                        <div className={'line'}/>
                    )
                })()                    
            }
        </Fragment>
    );
};

export default Item;