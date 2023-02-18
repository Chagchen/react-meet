//for dev purposes hold the dummy meetups
const DUMMY_DATA = [
  {
    id: "m1",
    Title: "Meetup 1",
    Image:
      "https://pixabay.com/photos/tree-sunset-clouds-sky-silhouette-736885/",
    address: "123 Main St, Raincity",
    description: "test meetup #1",
  },

  {
    id: "m2",
    Title: "Meetup 2",
    Image:
      "https://pixabay.com/photos/sunrise-boat-rowing-boat-nobody-1014712/",
    address: "34 rain St, Raincity",
    description: "test meetup #2",
  },

  {
    id: "m3",
    Title: "Meetup 3",
    Image:
      "https://pixabay.com/photos/road-forest-fall-path-trail-trees-1072821/",
    address: "345 water St, Raincity",
    description: "test meetup #3",
  },

  {
    id: "m4",
    Title: "Meetup 4",
    Image:
      "https://pixabay.com/photos/mountains-sun-clouds-peak-summit-190055/",
    address: "56 boat St, Raincity",
    description: "test meetup #4",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.Title}</li>;
        })}
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
