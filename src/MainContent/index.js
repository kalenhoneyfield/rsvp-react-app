import React from 'react';
import PropTypes from 'prop-types';

import GuestList from './GuestList/';
import Counter from './Counter';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = (props) => {
  return (
    <div className="main">
      <ConfirmedFilter toggleFiltered={props.toggleFiltered} isFiltered={props.isFiltered} />
      <Counter
        totalInvited={props.totalInvited}
        numberAttending={props.numberAttending}
        numberUnconfirmed={props.numberUnconfirmed}
      />
      <GuestList
        guests={props.guests}
        toggleConfirmationAt={props.toggleConfirmationAt}
        toggleEditingAt={props.toggleEditingAt}
        setNameAt={props.setNameAt}
        isFiltered={props.isFiltered}
        removeGuestAt={props.removeGuestAt}
        pendingGuest={props.pendingGuest}
      />
    </div>
  );
};

MainContent.propTypes = {
  toggleFiltered: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  numberAttending: PropTypes.number.isRequired,
  numberUnconfirmed: PropTypes.number.isRequired,
  totalInvited: PropTypes.number.isRequired,
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired,
};

export default MainContent;
