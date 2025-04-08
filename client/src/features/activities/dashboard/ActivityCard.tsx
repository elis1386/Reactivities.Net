import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { Activity } from "../../../types/activity";
type Props = {
  activity: Activity;
  selectActivity: (id: string) => void;
};

const ActivityCard = ({ activity, selectActivity }: Props) => {
  return (
    <Card sx={{ borderRadius: 3, mx: 3 }} variant="outlined">
      <CardContent>
        <Typography variant="h6">{activity.title}</Typography>
        <Typography sx={{ color: "text-secondary", mt: 1 }}>
          {new Date(activity.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ direction: "flex", justifyContent: "space-between", pb: 2 }}
      >
        <Chip label={activity.category} />
        <Button
          size="medium"
          variant="contained"
          onClick={() => selectActivity(activity.id)}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;
