import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import logo from '../images/logo.svg';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header logo={logo}/>

        <Main />

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

        <div className="popup popup_edit">
          <div className="popup__container">
            <form className="popup__form" name="edit-profile" noValidate>
              <h3 className="popup__title">Редактировать профиль</h3>
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
              <button
                type="submit"
                id="edit-submit"
                className="popup__button popup__button_disabled"
              >
                Сохранить
              </button>
            </form>
            <button
              type="button"
              aria-label="Закрыть"
              id="edit-close"
              className="popup__close-btn"
            ></button>
          </div>
        </div>

        <div className="popup popup_add">
          <div className="popup__container">
            <form className="popup__form popup__form_add-card" name="add-card" noValidate>
              <h3 className="popup__title">Новое место</h3>
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
              id="add-close"
              className="popup__close-btn"
            ></button>
          </div>
        </div>

        <div className="popup popup_confirm">
          <div className="popup__container">
            <form className="popup__form popup__form_confirm" name="confirm" noValidate>
              <h3 className="popup__title">Вы уверены?</h3>
              <button
                type="submit"
                id="confirm-submit"
                className="popup__button"
              >
                Да
              </button>
            </form>
            <button
              type="button"
              aria-label="Закрыть"
              id="confirm-close"
              className="popup__close-btn"
            ></button>
          </div>
        </div>

        <div className="popup popup_avatar">
          <div className="popup__container">
            <form className="popup__form popup__form_change-avatar" name="change-avatar" noValidate>
              <h3 className="popup__title">Обновить аватар</h3>
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
              <button
                type="submit"
                id="avatar-submit"
                className="popup__button"
              >
                Сохранить
              </button>
            </form>
            <button
              type="button"
              aria-label="Закрыть"
              id="avatar-close"
              className="popup__close-btn"
            ></button>
          </div>
        </div>

        <div className="gallery">
          <div className="gallery__container">
            <img src="#" className="gallery__img" alt="изображение"/>
            <p className="gallery__description"></p>
            <button type="button" aria-label="Закрыть" className="gallery__close-btn"></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
