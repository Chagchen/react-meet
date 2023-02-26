import { createContext, useState } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup)=>{}, //these helps later with autocompletion
  removeFavorite: (meetupId)=>{}, //these helps later with autocompletion
  itemIsFavorite: (meetupId)=>{} //these helps later with autocompletion
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    }); //this will guarantee the latest state as react will execute the function.
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler, //we only point at the function here, not execute it here.\
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
  //this needs to wrap all the componnents that are intersted listenign to the values
  //all that need values from the context.
  //also updates the context values.
}


export default FavoritesContext;