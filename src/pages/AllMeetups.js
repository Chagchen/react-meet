import MeetupList from "../components/meetups/MeetupList";
import React from 'react';


//for dev purposes hold the dummy meetups
const DUMMY_DATA = [
  {
    id: "m1",
    title: "Meetup 1",
    image:
      "https://i.stack.imgur.com/Of2w5.jpg",
    address: "123 Main St, Raincity",
    description: "test meetup #1",
  },

  {
    id: "m2",
    title: "Meetup 2",
    image:
      "https://www.wallpapertip.com/wmimgs/8-82164_soothing-background.jpg",
    address: "34 rain St, Raincity",
    description: "test meetup #2",
  },

  {
    id: "m3",
    title: "Meetup 3",
    image:
      "https://www.freepsdbazaar.com/wp-content/uploads/2020/06/stbd/new-bg/digital-background-2.jpg",
    address: "345 water St, Raincity",
    description: "test meetup #3",
  },

  {
    id: "m4",
    title: "Meetup 4",
    image:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2017/11/autumn_fireball/17255671-1-eng-GB/Autumn_fireball.jpg",
    address: "56 boat St, Raincity",
    description: "test meetup #4",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1 className="h1--alt">All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
