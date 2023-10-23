import characters from './cards';

export default function Board({ cards, handleClick }) {
  return (
    <>
      <div className="board">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="card"
              onClick={() => handleClick(card.id)}
            >
              <img src={card.src} alt="" />
              <div className="name">{card.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
