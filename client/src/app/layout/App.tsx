import { Box, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router";

function App() {
  return (
    <Box sx={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default App;
