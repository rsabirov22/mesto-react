function ImagePopup() {

  return (
    <div className="gallery">
      <div className="gallery__container">
        <img src="#" className="gallery__img" alt="изображение"/>
        <p className="gallery__description"></p>
        <button type="button" aria-label="Закрыть" className="gallery__close-btn"></button>
      </div>
    </div>
  );

}

export default ImagePopup;
