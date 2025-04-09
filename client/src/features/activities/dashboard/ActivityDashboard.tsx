import { Grid } from "@mui/material";
import { Activity } from "../../../types/activity";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  selectedActivity?: Activity | undefined;
  openForm: (id: string) => void;
  closeForm: () => void;
  editMode: boolean;
};

const ActivityDashboard = ({
  activities,
  selectActivity,
  cancelSelectedActivity,
  selectedActivity,
  openForm,
  closeForm,
  editMode,
}: Props) => {
  return (
    <Grid container sx={{ mt: 2 }}>
      <Grid size={7}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid>
      <Grid size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            cancelSelectedActivity={cancelSelectedActivity}
            openForm={openForm}
          />
        )}
        {editMode && <ActivityForm closeForm={closeForm} activity={selectedActivity} />}
      </Grid>
    </Grid>
  );
};

export default ActivityDashboard;
