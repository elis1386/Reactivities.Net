import { Group } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import MenuItemLink from "../shared/components/MenuItemLink";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#0658a0" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <MenuItemLink to="/">
              <Group fontSize="large" />
              <Typography variant="h6" fontWeight="bold">
                ReActivities
              </Typography>
            </MenuItemLink>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <MenuItemLink to="/activities">Activities</MenuItemLink>
            <MenuItemLink to="/createActivity">Create activity</MenuItemLink>
          </Box>
          <MenuItemLink to="/user">User menu</MenuItemLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
