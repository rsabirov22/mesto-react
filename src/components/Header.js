import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logo = props.logo
  }

  render() {
      return (
        <header className="header">
          <img src={this.logo} alt="логотип" className="header__logo"/>
        </header>
      );
    }
}

export default Header;
