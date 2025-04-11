import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useActivities } from "../../../../hooks/useActivities";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSidebar from "./ActivityDetailSidebar";

const ActivityDetailPage = () => {
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (!activity) return <Typography>Activity not found</Typography>;
  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  return (
    <Grid container spacing={3} m={3}>
      <Grid size={8}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDetailChat />
      </Grid>
      <Grid size={4}>
        <ActivityDetailSidebar />
      </Grid>
    </Grid>
  );
};

export default ActivityDetailPage;
