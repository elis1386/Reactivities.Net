import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { useActivities } from "../../../../hooks/useActivities";
import { Activity } from "../../../../types/activity";
import { Link } from "react-router";

const ActivityCard = ({ activity }: { activity: Activity }) => {
  const { deleteActivity } = useActivities();
  return (
    <Card sx={{ borderRadius: 3, mx: 3 }} variant="outlined">
      <CardContent>
        <Typography variant="h6">{activity.title}</Typography>
        <Typography sx={{ color: "text-secondary", mt: 1 }}>{new Date(activity.date).toLocaleDateString()}</Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle1">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          direction: "flex",
          justifyContent: "space-between",
          pb: 2,
        }}
      >
        <Chip label={activity.category} />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            size="medium"
            variant="contained"
            component={Link}
            to={`/activities/${activity.id}`}
            onClick={() => {}}
          >
            View
          </Button>
          <Button
            size="medium"
            variant="contained"
            color="error"
            onClick={() => deleteActivity.mutate(activity.id)}
            disabled={deleteActivity.isPending}
          >
            delete
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ActivityCard;
