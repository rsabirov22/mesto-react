import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import logo from '../images/logo.svg';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  };

  return (
    <div className="page">
      <div className="page__container">
        <Header logo={logo}/>

        <Main onEditProfile={handleEditProfileClick} onAddPlace ={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />

        <Footer/>

        <template id="card">
          <div className="element">
            <img className="element__image" src="#" alt="#"/>
            <div className="element__description">
              <p className="element__title"></p>
              <div className="element__likes">
                <button type="button" aria-label="Лайк" className="element__btn"></button>
                <span className="element__counter"></span>
              </div>
            </div>
            <button type="button" aria-label="Удалить" className="element__del" disabled="disabled"></button>
          </div>
        </template>

        <PopupWithForm name={'edit'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen}>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_name"
              id="nickname"
              name="name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required
              autoComplete="off"
            />
            <span id="nickname-error" className="popup__error"></span>
          </label>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input popup__input_type_description"
              id="job"
              name="about"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              required
              autoComplete="off"
            />
            <span id="job-error" className="popup__error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name={'add'} title={'Новое место'} isOpen={isAddPlacePopupOpen}>
          <label className="popup__field">
            <input
              type="text"
              className="popup__input"
              id="card-name"
              name="name"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
              autoComplete="off"
            />
            <span id="card-name-error" className="popup__error"></span>
          </label>
          <label className="popup__field">
            <input
              type="url"
              className="popup__input"
              id="img-link"
              name="link"
              placeholder="Ссылка на картинку"
              required
              autoComplete="off"
            />
            <span id="img-link-error" className="popup__error"></span>
          </label>
        </PopupWithForm>

        <PopupWithForm name={'confirm'} title={'Вы уверены?'}/>

        <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen}>
          <label className="popup__field">
            <input
              type="url"
              className="popup__input"
              id="avatar-url"
              name="avatar"
              placeholder="Ссылка на картинку"
              minLength="2"
              required
              autoComplete="off"
            />
            <span id="avatar-url-error" className="popup__error"></span>
          </label>
        </PopupWithForm>

        <ImagePopup/>

      </div>
    </div>
  );
}

export default App;
