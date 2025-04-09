import { useState } from "react";
import { Box, CssBaseline, Typography } from "@mui/material";
import { Activity } from "../../types/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../hooks/useActivities";

function App() {
  const [selectedAcitivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivities();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((activity) => activity.id === id));
  };

  const handleCancelSelecetedActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenFrom = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelecetedActivity();
    setEditMode(true);
  };

  const handleCloseFrom = () => {
    setEditMode(false);
  };

  return (
    <Box sx={{ backgroundColor: "#eee", minHeight: "100vh" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenFrom} />
      {!activities || isPending ? (
        <Typography sx={{ m: 3 }}>...Loading</Typography>
      ) : (
        <ActivityDashboard
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectedActivity={handleCancelSelecetedActivity}
          selectedActivity={selectedAcitivity}
          editMode={editMode}
          openForm={handleOpenFrom}
          closeForm={handleCloseFrom}
        />
      )}
    </Box>
  );
}

export default App;
