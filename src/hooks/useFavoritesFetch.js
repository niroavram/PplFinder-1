import { useState, useCallback, useEffect } from "react";

export const useFavoriteFetch = () => {
  const [favoriteUsers, setFavoriteUsers] = useState(
    JSON.parse(localStorage.getItem("usersFavorite")) || []
  );
  const [isLoading, setIsLoading] = useState(false);

  const unLikeUser = useCallback(
    (user) => {
      let unLike = favoriteUsers.filter((a) => a.login.uuid !== user.login.uuid);
      let stringifyArr = JSON.stringify(unLike);
      setFavoriteUsers(unLike);
      localStorage.setItem("usersFavorite", stringifyArr);
    },
    [favoriteUsers]
  );

  const likeUser = useCallback(
    (user) => {
      let stringifyArr = JSON.stringify([...favoriteUsers, user]);
      localStorage.setItem("usersFavorite", stringifyArr);
      setFavoriteUsers([...favoriteUsers, user]);
    },
    [favoriteUsers]
  );

  return { favoriteUsers, isLoading, unLikeUser, likeUser };
};
