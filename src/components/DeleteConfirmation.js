import React from 'react'
import { Dialog, DialogContent, Button, Grid, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
function DeleteConfirmation({ isOpen, title, handleOkClick, handleCloseClick }) {
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
          <Grid >
            <InfoOutlinedIcon
              color='warning'
              sx={{ fontSize: 100 }} />
          </Grid>
          <Grid sx={{ textAlign: 'center', mb: 1 }}>
            <Typography variant="h2">Are you Sure?</Typography>
            <Typography variant="body1">Are you Sure want to delete the {title},</Typography>
            <Typography variant="body1">you won&apos;t be able to revert.</Typography>
          </Grid>
          <Grid>
            <Button
              sx={{ mr: 1 }}
              variant='contained'
              color="primary"
              onClick={handleOkClick}>
              Ok
            </Button>
            <Button
              variant='contained'
              color='error'
              onClick={handleCloseClick}>
              No
            </Button>
          </Grid>
        </Grid>
      </DialogContent>


    </Dialog>
  )
}

export default DeleteConfirmation