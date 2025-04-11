import { Avatar, Box, Button, Card, CardContent, CardHeader, Chip, Divider, Typography } from "@mui/material";
import { Activity } from "../../../../types/activity";
import { Link } from "react-router";
import { AccessTime, Place } from "@mui/icons-material";

const ActivityCard = ({ activity }: { activity: Activity }) => {
  const isHost = false;
  const isGoing = false;
  const label = isHost ? "You are hosting" : "You are going";
  const isCancelled = false;
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";
  return (
    <Card elevation={3} sx={{ borderRadius: 3, mx: 3 }}>
      <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
        <CardHeader
          avatar={<Avatar sx={{ height: 80, width: 80 }} />}
          title={activity.title}
          titleTypographyProps={{ fontWeight: "bold", fontSize: 20 }}
          subheader={
            <>
              Hosted by <Link to={`/profiles/bob`} />{" "}
            </>
          }
        />
        <Box display={"flex"} flexDirection={"column"} gap={2} mr={2}>
          {(isHost || isGoing) && <Chip label={label} color={color} sx={{ borderRadius: 2 }} />}
          {isCancelled && <Chip label="Cancelled" color="error" sx={{ borderRadius: 2 }} />}
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />
      <CardContent sx={{ p: 0 }}>
        <Box display={"flex"} alignItems={"center"} mb={2} px={2}>
          <AccessTime sx={{ mr: 1 }} />
          <Typography variant="body2">{new Date(activity.date).toISOString().split("T")[0]}</Typography>
          <Place sx={{ ml: 3, mr: 1 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box display={"flex"} gap={2} sx={{ backgroundColor: "grey.200", py: 3, pl: 3 }}>
          Attendees got here
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 2 }}>
        <Typography variant="body2">{activity.description} </Typography>
        <Button
          size="medium"
          variant="contained"
          component={Link}
          to={`/activities/${activity.id}`}
          sx={{ display: "flex", justifySelf: "self-end", borderRadius: 3 }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
