import React from "react";
import { HashRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import MyFavorite from "pages/MyFavorite";
import { useFavoriteFetch } from "hooks/useFavoritesFetch";

const AppRouter = () => {
  const { favoriteUsers, isLoading, likeUser, unLikeUser } = useFavoriteFetch();

  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                likeUser={likeUser}
                unLikeUser={unLikeUser}
                favoriteUsers={favoriteUsers}
              />
            )}
          />
          <Route
            exact
            path="/MyFavorite"
            render={() => (
              <MyFavorite
                likeUser={likeUser}
                unLikeUser={unLikeUser}
                isLoading={isLoading}
                favoriteUsers={favoriteUsers}
              />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
