import React, { Component } from 'react';
import './App.css';

import Header from './Header/';
import MainContent from './MainContent/';

class App extends Component {
  state = {
    isFiltered: false,
    pendingGuest: '',
    guests: [],
  };

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId++;
    return id;
  };

  toggleGuestPropertyAt = (property, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });
  };

  removeGuestAt = (id) => {
    this.setState({
      guests: this.state.guests.filter((guest) => id !== guest.id),
    });
  };

  toggleConfirmationAt = (id) => {
    return this.toggleGuestPropertyAt('isConfirmed', id);
  };

  toggleEditingAt = (id) => {
    return this.toggleGuestPropertyAt('isEditing', id);
  };

  getTotalInvited = () => {
    return this.state.guests.length;
  };

  setNameAt = (name, id) => {
    this.setState({
      guests: this.state.guests.map((guest) => {
        if (id === guest.id) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      }),
    });
  };

  getAttendingGuests = () => {
    return this.state.guests.reduce((total, guest) => {
      return guest.isConfirmed ? total + 1 : total;
    }, 0);
  };
  // getUnconfirmedGuests = () => {}

  toggleFiltered = () => {
    return this.setState({ isFiltered: !this.state.isFiltered });
  };

  addNewGuest = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id: this.newGuestId(),
        },
        ...this.state.guests,
      ],
      pendingGuest: '',
    });
  };

  handleNewGuest = (e) => {
    this.setState({
      pendingGuest: e.target.value,
    });
  };

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;
    return (
      <div className="App">
        <Header
          handleNewGuest={this.handleNewGuest}
          pendingGuest={this.state.pendingGuest}
          addNewGuest={this.addNewGuest}
        />
        <MainContent
          toggleFiltered={this.toggleFiltered}
          isFiltered={this.state.isFiltered}
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        />
      </div>
    );
  }
}

export default App;
