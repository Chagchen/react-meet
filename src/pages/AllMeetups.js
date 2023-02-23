import MeetupList from "../components/meetups/MeetupList";
import React from "react";
import { useState } from "react";

//for dev purposes hold the dummy meetups
// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "Meetup 1",
//     image: "https://i.stack.imgur.com/Of2w5.jpg",
//     address: "123 Main St, Raincity",
//     description: "test meetup #1",
//   },
// ];

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMetups] = useState([]);

  fetch("https://react-meet-14c23-default-rtdb.firebaseio.com/meetups.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setIsLoading(false);
      setLoadedMetups(data);
    }); //not loading anymore, set it false when we have the data

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

  return (
    <section>
      <h1 className='h1--alt'>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
