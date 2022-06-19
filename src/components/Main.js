function Main({ onEditProfile, onAddPlace, onEditAvatar }) {

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img src="#" alt="аватар" className="profile__avatar"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <p className="profile__description"></p>
          <button type="button" aria-label="Редактировать" id="edit-profile" className="profile__edit-button" onClick={onEditProfile}></button>
        </div>
        <button type="button" aria-label="Добавить" id="add-mesto" className="profile__add-button" onClick={onAddPlace}></button>
      </section>
      <section className="elements"></section>
    </main>
  );

}

export default Main;
