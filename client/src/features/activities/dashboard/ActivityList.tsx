import { Box } from "@mui/material";
import { Activity } from "../../../types/activity";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
};

const ActivityList = ({ activities, selectActivity }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          selectActivity={selectActivity}
        />
      ))}
    </Box>
  );
};

export default ActivityList;
