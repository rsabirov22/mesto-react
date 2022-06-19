function PopupWithForm({ name, title, children, isOpen }) {

  let popupClassName = `popup popup_${name}`;

  if (isOpen) {
    popupClassName += ' popup_opened';
  }

  return (

    <div className={popupClassName}>
      <div className="popup__container">
        <form className={`popup__form popup__form_${name}`} name={name} noValidate>
          <h3 className="popup__title">{title}</h3>
          {children}
          <button
            type="submit"
            id="add-submit"
            className="popup__button"
          >
            Создать
          </button>
        </form>
        <button
          type="button"
          aria-label="Закрыть"
          id={`${name}-close`}
          className="popup__close-btn"
        ></button>
      </div>
    </div>
  );

}

export default PopupWithForm;
