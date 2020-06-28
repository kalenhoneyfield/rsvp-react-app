import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = (props) => {
  return (
    <ul>
      <PendingGuest name={props.pendingGuest} />
      {props.guests
        .filter((guest) => !props.isFiltered || guest.isConfirmed)
        .map((guest) => {
          // if (!props.isFiltered || guest.isConfirmed) {
          return (
            <Guest
              key={guest.id}
              name={guest.name}
              isConfirmed={guest.isConfirmed}
              isEditing={guest.isEditing}
              handleConfirmation={() => props.toggleConfirmationAt(guest.id)}
              handleToggleEditing={() => props.toggleEditingAt(guest.id)}
              setName={(text) => props.setNameAt(text, guest.id)}
              removeGuestAt={() => props.removeGuestAt(guest.id)}
            />
          );
          // }
          // return null;
        })}
    </ul>
  );
};

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default GuestList;
