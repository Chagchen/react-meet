import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
//only temp memory used on page re-load all fav content disapears
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <h3> You've got no favorites yet. Start adding some!  </h3>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1 class='font-family: roboto;'>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
