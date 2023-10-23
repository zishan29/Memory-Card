import { useState, useEffect } from 'react';
import './App.css';
import characters from './components/cards';
import Board from './components/board';
import shuffle from './components/shuffle';

function App() {
  const [cards, setCards] = useState(shuffle(characters));
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setCards(shuffle(cards));
    return () => {
      setCards(shuffle(cards));
    };
  }, [currentScore]);

  function resetCards() {
    setCards(
      cards.map((element) => {
        element.clicked = false;
        return element;
      }),
    );
  }

  function handleClick(id) {
    setCards(
      cards.map((element) => {
        if (element.id === id) {
          if (!element.clicked) {
            element.clicked = true;
            setCurrentScore(currentScore + 1);
            return element;
          } else {
            resetCards();
            setCurrentScore(0);
            return element;
          }
        }
        return element;
      }),
    );
  }

  if (currentScore > bestScore) {
    setBestScore(currentScore);
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          padding: '10px',
          alignItems: 'center',
          height: '110px',
        }}
      >
        <h1 className="title">One Piece Memory Game</h1>
        <div className="score" style={{ marginLeft: 'auto' }}>
          <div className="current">Score: {currentScore}</div>
          <div className="best">Best Score: {bestScore}</div>
        </div>
      </div>
      <Board cards={cards} handleClick={handleClick} />
    </>
  );
}

export default App;
