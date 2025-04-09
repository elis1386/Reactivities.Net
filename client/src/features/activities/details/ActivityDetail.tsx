import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Activity } from "../../../types/activity";
import { useActivities } from "../../../hooks/useActivities";

type Props = {
  selectedActivity: Activity;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
};

const ActivityDetail = ({ selectedActivity, cancelSelectedActivity, openForm }: Props) => {
  const { activities } = useActivities();
  const activity = activities?.find((x) => x.id === selectedActivity.id);

  if (!activity) return <Typography>...</Typography>;
  return (
    <Card sx={{ borderRadius: 3, mr: 3 }}>
      <CardMedia component="img" src={`/images/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {new Date(activity.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={() => openForm(activity.id)}>
          Edit
        </Button>
        <Button color="inherit" onClick={cancelSelectedActivity}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityDetail;
