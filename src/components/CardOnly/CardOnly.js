import { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export const CardOnly = () => {

const [cardList, setCardList] = useState(
    [
    {id:1, order:1, text: 'карточка 1'},
    {id:2, order:2, text: 'карточка 2'},
    {id:3, order:3, text: 'карточка 3'},
    {id:4, order:4, text: 'карточка 4'},
    {id:5, order:5, text: 'карточка 5'},
    {id:6, order:6, text: 'карточка 6'},  
    ]
  )
const [currentCard, setCurrentCard] = useState(null)

  const dragStartHandler = (e, card) => {
    setCurrentCard(card)
  }
  
  const dragEndHandler = (e) => {
    e.target.style.background = 'white'
  }
  
  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = 'gray'
  }
  
  const drophandler = (e, card) => {
    e.preventDefault();
    setCardList(cardList.map(c => {
        if(c.id === card.id) {
          return {...c, order: currentCard.order}
        }
        if(c.id === currentCard.id) {
          return {...c, order: card.order}
        }
        return c
    }))
    console.log(cardList);
    e.target.style.background = 'white'
  }

  const sortCards = (a,b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }

  }
  
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    <div className="App">
     {cardList.sort(sortCards).map((card) => (
      <div
        key={card.id}
        className="card"
        draggable={true}
        onDragStart={e => dragStartHandler(e, card)}
        onDragLeave={e => dragEndHandler(e)}
        onDragEnd={e => dragEndHandler(e)}
        onDragOver={e => dragOverHandler(e)}
        onDrop={e => drophandler(e,card)}
      >{card.text}</div>
     ))}
    </div>
  </>
  );
}
