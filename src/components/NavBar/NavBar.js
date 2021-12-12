import React, { useState } from "react";
import {AppBar} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [value, setValue] = useState("/");

  const handleChange = (_e, newValue) => {
      setValue(newValue);
  };

  return (
    <AppBar position="static" color="transparent" style={{ position: "fixed", top: 0 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" index={0} value="/" component={Link} to="/" />
        <Tab label="Favorites" index={1} value="/MyFavorite" component={Link} to="/MyFavorite" />
      </Tabs>
    </AppBar>
  );
};

export default NavBar;
