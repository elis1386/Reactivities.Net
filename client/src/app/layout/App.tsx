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
  const [editMode, setEditMode] = useState(false);

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

  const handleOpenFrom = (id?: string) => {
    if (id) handleSelectActivity(id);
    else handleCancelSelecetedActivity();
    setEditMode(true);
  };

  const handleCloseFrom = () => {
    setEditMode(false);
  };

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(
        activities.map((x) => (x.id === activity.id ? activity : x))
      );
    } else {
      const newActivity = { ...activity, id: activities.length.toString() };
      setSelectedActivity(newActivity);
      setActivities([...activities, { ...activity, ...newActivity }]);
    }
    setEditMode(false);
  };

  const handleDelete = (id: string) => {
    setActivities(activities.filter((x) => x.id !== id));
  };

  return (
    <Box sx={{ bgColor: "#eeeee" }}>
      <CssBaseline />
      <NavBar openForm={handleOpenFrom} />
      <ActivityDashboard
        activities={activities}
        selectActivity={handleSelectActivity}
        cancelSelectedActivity={handleCancelSelecetedActivity}
        selectedActivity={selectedAcitivity}
        editMode={editMode}
        openForm={handleOpenFrom}
        closeForm={handleCloseFrom}
        submitForm={handleSubmitForm}
        deleteActivity={handleDelete}
      />
    </Box>
  );
}

export default App;
