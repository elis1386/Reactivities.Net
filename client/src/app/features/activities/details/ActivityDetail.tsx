import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../../../hooks/useActivities";

const ActivityDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivities(id);

  if (!activity) return <Typography>Activity not found</Typography>;
  if (isLoadingActivity) return <Typography>Loading...</Typography>;

  return (
    <Card sx={{ borderRadius: 3, width: "50%", minWidth: "350px", margin: "2rem auto", p: 3 }}>
      <CardMedia component="img" src={`/images/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <Typography variant="h5">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight="light">
          {new Date(activity.date).toLocaleDateString()}
        </Typography>
        <Typography variant="body1">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" component={Link} to={`/edit/${activity.id}`}>
          Edit
        </Button>
        <Button color="inherit" onClick={() => navigate("/activities")}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
};

export default ActivityDetail;
