import React from 'react'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon'
import { Box, Button, Card, CardActions, CardContent, SvgIcon, Typography, Unstable_Grid2 as Grid, AvatarGroup, Avatar, Chip, Link, IconButton, } from '@mui/material'
import { SeverityPill } from 'src/components/severity-pill';
const avatar = '/assets/avatars/avatar-anika-visser.png'
function ProjectManagementCard({ handleEditClick, handleDeleteClick }) {
  return (
    <Card>
      <CardContent sx={{ padding: '10px 20px' }}>
        <Box sx={{ m: -1.5 }}>
          <Grid
            container
            spacing={1}
          >

            <Grid
              xs={12}
              md={12}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <div sx={{ alignItems: 'center' }}>
                <Box
                  component="img"
                  src={avatar}
                  sx={{
                    borderRadius: 1,
                    height: 48,
                    width: 48
                  }}
                />
              </div>


              <div>
                <SeverityPill color='success'>
                  Active
                </SeverityPill>
                <Typography gutterBottom
                  variant="h6">
                  Resume Data
                </Typography>
                <Typography gutterBottom
                  variant="h6">
                  Segregate Project
                </Typography>
              </div>


              <SvgIcon sx={{ alignItems: 'baseline' }}>
                <EllipsisVerticalIcon />
              </SvgIcon>


            </Grid>
            <Grid
              xs={12}
              md={12}
            >
              <Typography gutterBottom
                variant="subtitle2">
                Domain : <Link>www.resume.com</Link>
              </Typography>

            </Grid>
            <Grid
              xs={12}
              md={8}
            >
              <Typography gutterBottom
                variant="h6">
                Total Freelancers: 100
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={4}
            >
              <AvatarGroup
                max={3}
                sx={{
                  '& .MuiAvatar-root': { width: 25, height: 25 },
                  height: '25px'
                }}>
                <Avatar
                  src={avatar}
                  sx={{
                    height: 25,
                    mb: 2,
                    width: 25
                  }}
                />
                <Avatar
                  src={avatar}
                  sx={{
                    height: 25,
                    mb: 2,
                    width: 25
                  }}
                />
                <Avatar
                  src={avatar}
                  sx={{
                    height: 25,
                    mb: 2,
                    width: 25
                  }}
                />
                <Avatar
                  src={avatar}
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
                variant="subtitle3">
                Updated Time : 23-july-2023
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
            >
              <Typography gutterBottom
                variant="subtitle3">
                Updated By : Pratik Lochawala
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>

        <Button
          variant="text"
          size="small"
          onClick={handleEditClick}>
          Edit Project
        </Button>
        <Button
          variant="text"
          size="small"
          color="warning">
          Form Builder
        </Button>
        <Button
          variant="text"
          size="small"
          color="error"
          startIcon={(
            <SvgIcon fontSize="small">
              <TrashIcon />
            </SvgIcon>
          )}
          onClick={handleDeleteClick}>
          Delete
        </Button>
      </CardActions>
    </Card >
  )
}

export default ProjectManagementCard