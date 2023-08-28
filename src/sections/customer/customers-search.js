import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Card, InputAdornment, OutlinedInput, SvgIcon, TextField } from '@mui/material';
const states = [{
  values: 'Enabled ',
  label: 'Enabled'
}, {
  values: 'Disabled ',
  label: 'Disabled'
}]

const handleChange = () => { }
export const CustomersSearch = () => (
  <Card sx={{ p: 2, marginBottom: '10px', display: 'flex', justifyContent: "end" }}>

    <TextField
      fullWidth
      label="Select Status"
      name="status"
      placeholder='Select Status'
      onChange={handleChange}
      required
      select
      SelectProps={{ native: true }}
      sx={{ maxWidth: 200 }}
    >
      {states.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </TextField>


    <OutlinedInput
      defaultValue=""
      fullWidth
      placeholder="Search customer"
      startAdornment={(
        <InputAdornment position="start">
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <MagnifyingGlassIcon />
          </SvgIcon>
        </InputAdornment>
      )}
      sx={{ maxWidth: 200, marginLeft: '10px' }}
    />
  </Card>
);
