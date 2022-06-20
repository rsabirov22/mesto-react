function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}/>
      <div className="element__description">
        <p className="element__title">{card.name}</p>
        <div className="element__likes">
          <button type="button" aria-label="Лайк" className="element__btn"></button>
          <span className="element__counter">{card.likes.length}</span>
        </div>
      </div>
      <button type="button" aria-label="Удалить" className="element__del" disabled="disabled"></button>
    </div>
  );

}

export default Card;
