import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <header>
      <h1>RSVP</h1>
      <p>A Treehouse App</p>
      <form onSubmit={(e) => this.addNewGuest(e)}>
        <input
          type="text"
          placeholder="Invite Someone"
          onChange={this.handleNewGuest}
          value={this.state.pendingGuest}
        />
        <button type="submit" name="submit" value="submit">
          Submit
        </button>
      </form>
    </header>
  );
};

Header.propTypes = {};

export default Header;
