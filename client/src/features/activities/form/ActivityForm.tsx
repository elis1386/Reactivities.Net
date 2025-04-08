import { Box, Button, Paper, Typography, TextField } from "@mui/material";

const ActivityForm = () => {
  return (
    <Paper sx={{ borderRadius: 3, mr: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Create activity
      </Typography>
      <Box component="form" display="flex" flexDirection="column" gap={3}>
        <TextField label="Title" variant="outlined" />
        <TextField label="Description" multiline rows={3} variant="outlined" />
        <TextField label="Category" variant="outlined" />
        <TextField label="Date" type="date" variant="outlined" />
        <TextField label="City" variant="outlined" />
        <TextField label="Venue" variant="outlined" />
        <Box display="flex" justifyContent="end" gap={3}>
          <Button color="inherit">Cancel</Button>
          <Button color="success">Submit</Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ActivityForm;
