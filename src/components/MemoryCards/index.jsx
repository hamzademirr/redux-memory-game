import { useDispatch, useSelector } from 'react-redux';
import { SelectselectedmemoryCards, Selectscore, suffled, SelectmemoryCards, selectCard, deSelect, SelectmatchedmemoryCards } from '../../redux/memoryCardSlice';
import './style.scss';

function MemoryCards() {
  const dispatch = useDispatch();
  const memoryCards = useSelector(SelectmemoryCards);
  const score = useSelector(Selectscore);
  const selectedmemoryCards = useSelector(SelectselectedmemoryCards);
  const matchedmemoryCards = useSelector(SelectmatchedmemoryCards);

  if(matchedmemoryCards.length === memoryCards.length) {
    window.alert(`You won the game! Score: ${score}`);
    dispatch(suffled());
  }

  if (selectedmemoryCards.length === 2) {
    setTimeout(() => {
      dispatch(deSelect());
    }, 1000);
  }

  const handleClick = (id) => {
      const clickedCard = memoryCards.find(card => card.id === id);
      console.log(clickedCard.isMatch)
      if (clickedCard.isMatch) {
        console.log('matched');
        return;
      }
      dispatch(selectCard({ id: id }));
  };

  return (
    <div id="cards">
      <div className="memory-cards-container">
        {memoryCards.map((card, index) => (
          <button
            disabled={card.isOpen || selectedmemoryCards.length === 2}
            className={`memory-card ${card.isOpen ? "back" : ""} ${card.matched ? "matched" : ""}`}
            onClick={() => handleClick(card.id)}
            key={index}
          >
            {card.isOpen ? (
              <img src={`/dummy/${card.name}.png`} alt="Memory Card" />
            ) : (
              <img src="/dummy/who-is-pokemon.jpg" alt="Memory Card" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MemoryCards;
