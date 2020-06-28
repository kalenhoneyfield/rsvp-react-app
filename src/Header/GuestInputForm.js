import React from 'react';
import PropTypes from 'prop-types';

const GuestInputForm = (props) => {
  return (
    <form onSubmit={(e) => props.addNewGuest(e)}>
      <input
        type="text"
        placeholder="Invite Someone"
        onChange={props.handleNewGuest}
        value={props.pendingGuest}
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

GuestInputForm.propTypes = {
  addNewGuest: PropTypes.func.isRequired,
  handleNewGuest: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default GuestInputForm;
