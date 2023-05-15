import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export const TimeLimit = (props) => {
  const { limit, setLimit } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="TimeLimit"
        value={limit}
        onChange={(newValue) => {
          setLimit(newValue);
        }}
      />
    </LocalizationProvider>
  );
}