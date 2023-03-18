import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const styles = {
  center: {
    margin: "auto",
    width: "50%",
    padding: "10px",
    bottom: 0,
    position: "fixed",
  },
};

const Footer = (props) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={styles.center}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Location" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="settings" icon={<RestoreIcon />} />
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
