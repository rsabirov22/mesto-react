import { useState, useEffect } from 'react';
import api from '../utils/api.js';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Загрузка информации о пользователе
    api.getProfile()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => console.log(err));
    // Загрузка информации о пользователе
  }, []);

  useEffect(() => {
    // Загрузка карточек
    api.getInitialCards()
      .then((data) => {
        setCards(data)
      })
      .catch(err => console.log(err));
    // Загрузка карточек
  }, [cards]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img src={userAvatar} alt="аватар" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__description">{userDescription}</p>
          <button type="button" aria-label="Редактировать" id="edit-profile" className="profile__edit-button" onClick={onEditProfile}></button>
        </div>
        <button type="button" aria-label="Добавить" id="add-mesto" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        {cards.map(card => {
          return <Card card={card} key={card._id} onCardClick={onCardClick}/>
        })}
      </section>
    </main>
  );

}

export default Main;
