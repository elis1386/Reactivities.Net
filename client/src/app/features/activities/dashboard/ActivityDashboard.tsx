import { Grid } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityFilters from "../dashboard/ActivityFilters";

const ActivityDashboard = () => {
  return (
    <Grid container sx={{ m: 2 }}>
      <Grid size={8}>
        <ActivityList />
      </Grid>
      <Grid size={4}>
        {" "}
        <ActivityFilters />
      </Grid>
    </Grid>
  );
};

export default ActivityDashboard;
