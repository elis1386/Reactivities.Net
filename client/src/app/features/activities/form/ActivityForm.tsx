import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { Activity } from "../../../../types/activity";
import { FormEvent } from "react";
import { useActivities } from "../../../../hooks/useActivities";
import { useNavigate, useParams } from "react-router";

const ActivityForm = () => {
  const { id } = useParams();
  const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDate = new FormData(event.currentTarget);
    const data: { [key: string]: FormDataEntryValue } = {};

    formDate.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data.id = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      navigate(`/activities/${activity.id}`);
    } else {
      createActivity.mutate(data as unknown as Activity, {
        onSuccess: (id) => {
          navigate(`/activities/${id}`);
        },
      });
    }
  };
  if (isLoadingActivity) return <Typography>Loading activity from</Typography>;

  return (
    <Paper sx={{ borderRadius: 3, m: "1rem auto", p: 3, width: "50%" }}>
      <Typography variant="h5" gutterBottom color="primary">
        {activity ? "Edit activity" : "Create activity"}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={3}>
        <TextField variant="outlined" label="Title" defaultValue={activity?.title} name="title" />
        <TextField
          label="Description"
          multiline
          rows={3}
          variant="outlined"
          defaultValue={activity?.description}
          name="description"
        />
        <TextField label="Category" variant="outlined" defaultValue={activity?.category} name="category" />
        <TextField
          type="date"
          variant="outlined"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0]
          }
          name="date"
        />
        <TextField label="City" variant="outlined" defaultValue={activity?.city} name="city" />
        <TextField label="Venue" variant="outlined" name="venue" defaultValue={activity?.venue} />
        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit">Cancel</Button>
          <Button
            color="success"
            type="submit"
            variant="contained"
            disabled={updateActivity.isPending || createActivity.isPending}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
