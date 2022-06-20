function ImagePopup({ card, onClose }) {

  return (
    <div className={Object.keys(card).length === 0 ? 'gallery' : 'gallery popup_opened'}>
      <div className="gallery__container">
        <img src={card.link} className="gallery__img" alt={card.name}/>
        <p className="gallery__description">{card.name}</p>
        <button type="button" aria-label="Закрыть" className="gallery__close-btn" onClick={onClose}></button>
      </div>
    </div>
  );

}

export default ImagePopup;
