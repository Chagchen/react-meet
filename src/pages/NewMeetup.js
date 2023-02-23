import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { jsx as _jsx } from "react/jsx-runtime";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-meet-14c23-default-rtdb.firebaseio.com/meetups.json',
       {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  return (
    <section><h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>);
}

export default NewMeetupPage;
