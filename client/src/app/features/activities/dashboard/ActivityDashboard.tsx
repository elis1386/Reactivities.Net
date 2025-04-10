import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";

const ActivityDashboard = () => {
  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid size={7}>
        <ActivityList />
      </Grid>
      <Grid size={5}>Activity filters go here</Grid>
    </Grid>
  );
};

export default ActivityDashboard;
