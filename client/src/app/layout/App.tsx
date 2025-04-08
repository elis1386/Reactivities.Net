import { useEffect, useState } from "react";
import { Box, CssBaseline } from "@mui/material";
import axios from "axios";
import { Activity } from "../../types/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedAcitivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then((response) => setActivities(response.data));
  }, []);
  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((activity) => activity.id === id));
  };
  const handleCancelSelecetedActivity = () => {
    setSelectedActivity(undefined);
  };
  return (
    <Box sx={{ bgColor: "#eeeee" }}>
      <CssBaseline />
      <NavBar />
      <ActivityDashboard
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectedActivity={handleCancelSelecetedActivity}
        selectedActivity={selectedAcitivity}
      />
    </Box>
  );
}

export default App;
