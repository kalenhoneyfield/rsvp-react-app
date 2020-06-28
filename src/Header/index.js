import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = (props) => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <GuestInputForm
        handleNewGuest={props.handleNewGuest}
        pendingGuest={props.pendingGuest}
        addNewGuest={props.addNewGuest}
      />
    </header>
  );
};

Header.propTypes = {
  addNewGuest: PropTypes.func.isRequired,
  handleNewGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default Header;
