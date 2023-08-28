import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Unstable_Grid2 as Grid,
  Stack,
  Switch,
  TextField
} from '@mui/material';
import SelectAllTransferList from '../SelectAllTransferList';
import { states } from 'src/utils/constants';



function CreateRoleForm({ handleClose }) {

  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <form onSubmit={handleSubmit}>


      <Grid
        container
        spacing={2}
      >
        <Grid
          xs={12}
          md={6}
          lg={6}
        >
          <TextField
            fullWidth
            label="Role Name"
            name="roleName"
            onChange={handleChange}
            type="text"
            value={values.roleName}
          />
        </Grid>

        <Grid
          xs={12}
          md={6}
          lg={6}
        >

          <TextField
            fullWidth
            label="Default Lending Page"
            name="lendingPage"
            placeholder='Select Lending Page'
            onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
            value={values.state}
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
        </Grid>

        <Grid
          xs={12}
          md={12}
          lg={12}
          sx={{ paddingLeft: '20px' }}
        >
          <FormControl>
            <FormLabel component='legend'>is Active?</FormLabel>
            <FormControlLabel control={<Switch checked={values.isActive}
              onChange={handleChange} />} />
          </FormControl>
        </Grid>

        <Grid
          xs={12}
          md={12}
          lg={12}
        >
          <SelectAllTransferList />
        </Grid>

      </Grid>


    </form >
  )
}

export default CreateRoleForm