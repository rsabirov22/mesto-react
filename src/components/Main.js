import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  handleEditAvatarClick = () => {

  };

  handleEditProfileClick = () => {
    document.querySelector('.popup_edit').classList.add('popup_opened');
  };

  handleAddPlaceClick = () => {

  };


  render() {
      return (
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-container" onClick={this.handleEditAvatarClick}>
              <img src="#" alt="аватар" className="profile__avatar"/>
            </div>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <p className="profile__description"></p>
              <button type="button" aria-label="Редактировать" id="edit-profile" className="profile__edit-button" onClick={this.handleEditProfileClick}></button>
            </div>
            <button type="button" aria-label="Добавить" id="add-mesto" className="profile__add-button" onClick={this.handleAddPlaceClick}></button>
          </section>
          <section className="elements"></section>
        </main>
      );
    }
}

export default Main;
