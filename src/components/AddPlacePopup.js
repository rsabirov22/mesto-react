import { useState, useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function AddPlacePopup ({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
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
  );

}

export default AddPlacePopup;
