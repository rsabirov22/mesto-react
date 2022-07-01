import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import logo from '../images/logo.svg';
import ImagePopup from './ImagePopup';
import api from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';
import EditProfilePopup from './EditProfilePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  function handleUpdateUser(userInfo) {
    api.patchProfile(userInfo)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
  }

  React.useEffect(() => {
    // Загрузка информации о пользователе
    api.getProfile()
      .then((data) => {
        setCurrentUser(data)
      })
      .catch(err => console.log(err));
    // Загрузка информации о пользователе
  }, []);

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header logo={logo}/>

          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace ={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />

          <Footer/>

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

          <PopupWithForm
            name="add"
            title="Новое место"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
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

          <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
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

          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
