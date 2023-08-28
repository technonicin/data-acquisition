import React, { useCallback } from 'react'
import {
  FormControl, FormLabel,
  RadioGroup,
  FormControlLabel, Radio, Unstable_Grid2 as Grid, TextField, Switch
} from '@mui/material'

import { states } from 'src/utils/constants'
import MyDropzone from '../MyDropzone'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


const fileType = {
  'image/jpeg': [],
  'image/png': []
}
const handleChange = () => { }
function CreateUserForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>


      <Grid
        container
        spacing={2}
      >
        <Grid xs={12} >
          <MyDropzone
            maxFiles={1}
            fileType={fileType} />
        </Grid>
        <Grid xs={12} >
          <TextField
            fullWidth
            placeholder='user name'
            name="username"
            label="user name" />
        </Grid>
        <Grid xs={12}
lg={6}
md={6}>
          <TextField
            fullWidth
            placeholder='First name'
            name="firstName"
            label="First name" /></Grid>
        <Grid xs={12}
lg={6}
md={6}>
          <TextField
            fullWidth
            placeholder='Last name'
            name="lastName"
            label="Last name" /></Grid>
        <Grid xs={12}
lg={6}
md={6}>

          {/* <DatePicker /> */}

          <DatePicker
            value={new Date()}
            onChange={() => { }}
            renderInput={(props) =>
              <TextField {...props}
                fullWidth
                type='date'
                placeholder='Date Of Birth'
                name="dob"
                label="Date Of Birth" />
            }
          />

        </Grid>
        <Grid xs={12}
lg={6}
md={6}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <FormControlLabel value="female"
control={<Radio />}
label="Female" />
              <FormControlLabel value="male"
control={<Radio />}
label="Male" />
              <FormControlLabel value="other"
control={<Radio />}
label="Other" />
            </RadioGroup>
          </FormControl></Grid>
        <Grid xs={12}
lg={6}
md={6}><TextField fullWidth
type="number"
placeholder='Mobile No'
name="username"
label="Mobile No" /></Grid>
        <Grid xs={12}
lg={6}
md={6}><TextField fullWidth
type="email"
placeholder='Email'
name="username"
label="Email" /></Grid>
        <Grid xs={12}
lg={6}
md={6}>

          <TextField
            fullWidth
            label="Assign Role"
            name="lendingPage"
            placeholder='Assign Role'
            onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
          // value={values.state}
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
        <Grid xs={12}
lg={6}
md={6}>

          <TextField
            fullWidth
            label="Permitted Application"
            name="lendingPage"
            placeholder='Permitted Application'
            onChange={handleChange}
            required
            select
            SelectProps={{ native: true }}
          // value={values.state}
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
        <Grid xs={12} >
          <FormControl>
            <FormLabel component='legend'>is Active?</FormLabel>
            <FormControlLabel control={<Switch
              // checked={values.isActive}
              onChange={handleChange} />} />
          </FormControl>
        </Grid>
      </Grid>
    </form>
  )
}

export default CreateUserForm