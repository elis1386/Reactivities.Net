import { Info, CalendarToday, Place } from "@mui/icons-material";
import { Paper, Typography, Divider, Grid } from "@mui/material";

import { Activity } from "../../../../types/activity";

const ActivityDetailInfo = ({ activity }: { activity: Activity }) => {
  return (
    <Paper sx={{ mb: 2 }}>
      <Grid container alignItems="center" pl={2} py={1}>
        <Grid size={1}>
          <Info color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>{activity.description}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container alignItems="center" pl={2} py={1}>
        <Grid size={1}>
          <CalendarToday color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>{new Date(activity.date).toISOString().split("T")[0]}</Typography>
        </Grid>
      </Grid>
      <Divider />

      <Grid container alignItems="center" pl={2} py={1}>
        <Grid size={1}>
          <Place color="info" fontSize="large" />
        </Grid>
        <Grid size={11}>
          <Typography>
            {activity.venue}, {activity.city}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ActivityDetailInfo;
