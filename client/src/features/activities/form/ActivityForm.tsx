import { Box, Button, Paper, Typography, TextField } from "@mui/material";
import { Activity } from "../../../types/activity";
import { FormEvent } from "react";

type Props = {
  activity?: Activity;
  closeForm: () => void;
  submitForm: (activity: Activity) => void;
};

const ActivityForm = ({ activity, closeForm, submitForm }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formDate = new FormData(event.currentTarget);
    const data: { [key: string]: FormDataEntryValue } = {};
    formDate.forEach((value, key) => {
      data[key] = value;
    });
    if (activity) data.id = activity.id;
    submitForm(data as unknown as Activity);
  };
  return (
    <Paper sx={{ borderRadius: 3, mr: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create activity
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={3}
      >
        <TextField
          label="Title"
          variant="outlined"
          defaultValue={activity?.title}
          name="title"
        />
        <TextField
          label="Description"
          multiline
          rows={3}
          variant="outlined"
          defaultValue={activity?.description}
          name="description"
        />
        <TextField
          label="Category"
          variant="outlined"
          defaultValue={activity?.category}
          name="category"
        />
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          defaultValue={activity?.date}
          name="date"
        />
        <TextField
          label="City"
          variant="outlined"
          defaultValue={activity?.city}
          name="city"
        />
        <TextField
          label="Venue"
          variant="outlined"
          name="venue"
          defaultValue={activity?.venue}
        />
        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit" onClick={closeForm}>
            Cancel
          </Button>
          <Button color="success" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
