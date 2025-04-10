import { Box, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../../hooks/useActivities";

const ActivityList = () => {
  const { activities, isPending } = useActivities();
  if (!activities || isPending) return <Typography>Loading...</Typography>;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </Box>
  );
};

export default ActivityList;
