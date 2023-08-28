import React from 'react'
import { Dialog, DialogContent, Button, Unstable_Grid2 as Grid, Typography, } from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
function DeleteSuccess({ isOpen, title, handleCloseClick }) {
  return (
    <Dialog
      onClose={handleCloseClick}
      open={isOpen}
    >
      <DialogContent>
        <Grid
          container
          spacing={2}
          sx={{ alignItems: 'center', flexDirection: 'column', padding: 1 }}
        >
          <Grid>
            <CheckCircleOutlineOutlinedIcon color='success'
              sx={{ fontSize: 100 }} />
          </Grid>
          <Grid sx={{ textAlign: 'center', mb: 1 }}>
            <Typography variant="h2">Deleted</Typography>
            <Typography variant="body1">{title} Deleted successfully</Typography>
          </Grid>
          <Grid>
            <Button
              variant='contained'
              color="primary"
              onClick={handleCloseClick}>
              Ok
            </Button>
          </Grid>
        </Grid>
      </DialogContent>


    </Dialog>
  )
}

export default DeleteSuccess