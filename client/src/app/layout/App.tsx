import { Box, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router";
import HomePage from "../features/activities/home/HomePage";

function App() {
  const location = useLocation();
  return (
    <Box sx={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <CssBaseline />
      {location.pathname === "/" ? (
        <HomePage />
      ) : (
        <>
          <NavBar />
          <Outlet />
        </>
      )}
    </Box>
  );
}

export default App;
