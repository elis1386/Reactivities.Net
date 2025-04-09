import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Activity } from "../../../types/activity";

type Props = {
  activity: Activity;
  cancelSelectedActivity: () => void;
  openForm: (id: string) => void;
};

const ActivityDetail = ({
  activity,
  cancelSelectedActivity,
  openForm,
}: Props) => {
  return (
    <Card sx={{ borderRadius: 3, mr: 3 }}>
      <CardMedia
        component="img"
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
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
