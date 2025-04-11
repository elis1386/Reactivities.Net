import { Group } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        height: "100vh",
        gap: 6,
        backgroundImage: "linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", gap: 3 }}>
        <Group sx={{ height: 110, width: 110 }} />
        <Typography variant="h1">Reactivities</Typography>
      </Box>
      <Typography variant="h3">Welcome to reactivities</Typography>
      <Button
        component={Link}
        to="/activities"
        size="large"
        variant="contained"
        sx={{ height: 80, borderRadius: 4, fontSize: "1.5rem" }}
      >
        Take me to the activities!
      </Button>
    </Paper>
  );
};

export default HomePage;
