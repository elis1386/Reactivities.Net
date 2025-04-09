import { Group } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

type Props = {
  openForm: () => void;
};

const NavBar = ({ openForm }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#182a73" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <MenuItem sx={{ display: "flex", gap: 2 }}>
              <Group fontSize="large" />
              <Typography variant="h6" fontWeight="bold">
                ReActivities
              </Typography>
            </MenuItem>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <MenuItem
              sx={{
                fontSize: "1rem",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Activities
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "1rem",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              About
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "1rem",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              Contact
            </MenuItem>
          </Box>
          <Button
            size="large"
            variant="contained"
            color="warning"
            onClick={openForm}
          >
            Create activity
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
