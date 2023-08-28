import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Unstable_Grid2 as Grid,
  Typography,
  SvgIcon,
  Avatar,
  Chip,
  AvatarGroup
} from '@mui/material';

import TrashIcon from '@heroicons/react/24/solid/TrashIcon';

const user = {
  avatar: '/assets/avatars/avatar-anika-visser.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Anika Visser',
  timezone: 'GTM-7'
};

function RoleManagementCard({ openRolePopup }) {
  return (
    <Card>
      <CardContent sx={{ padding: '10px 20px' }}>
        <Box sx={{ m: -1.5 }}>
          <Grid
            container
            spacing={2}
          >
            <Grid
              xs={12}
              md={6}
            >
              <Typography gutterBottom
                variant="h6" >
                total users - 15
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <AvatarGroup
                max={3}
                sx={{
                  '& .MuiAvatar-root': { width: 25, height: 25 },
                }}>
                <Avatar
                  src={user.avatar}
                  sx={{
                    height: 25,
                    mb: 2,
                    width: 25
                  }}
                />
                <Avatar
                  src={user.avatar}
                  sx={{
                    height: 25,
                    mb: 2,
                    width: 25
                  }}
                />
                <Avatar
                  src={user.avatar}
                  sx={{
                    height: 25,
                    mb: 2,
                    width: 25
                  }}
                />
                <Avatar
                  src={user.avatar}
                  sx={{
                    height: 25,
                    mb: 2,
                    width: 25
                  }}
                />
              </AvatarGroup>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <Typography gutterBottom
                variant="h6" >
                Super Admin
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              sx={{ textAlign: 'right' }}
            >
              <Chip
                label="active"
                size="small"
                color="success"
              />
            </Grid>
            {/* <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Country"
                name="country"
                onChange={handleChange}
                required
                value={values.country}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <TextField
                fullWidth
                label="Select State"
                name="state"
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
            </Grid> */}
          </Grid>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          variant="text"
          size="small"
          onClick={openRolePopup}>
          Edit Role
        </Button>
        <Button
          variant="text"
          size="small">
          View Permission
        </Button>
        <Button
          variant="text"
          size="small"
          color="error"
          startIcon={(
            <SvgIcon fontSize="small">
              <TrashIcon />
            </SvgIcon>
          )}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default RoleManagementCard