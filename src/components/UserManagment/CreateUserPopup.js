import React from 'react'
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material'
import { BootstrapDialogTitle } from '../dialog';
import { styled } from '@mui/material/styles';
import CreateUserForm from './CreateUserForm';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function CreateUserPopup({ show, setShow }) {
  return (
    <BootstrapDialog
      onClose={setShow}
      aria-labelledby="customized-dialog-title"
      open={show}
      maxWidth="xl"
    >
      <BootstrapDialogTitle id="customized-dialog-title"
        onClose={setShow}>
        Create User
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <CreateUserForm handleSubmit={setShow} />
      </DialogContent>
      <DialogActions>
        <Button variant="contained">
          Submit
        </Button>
        <Button onClick={setShow}>
          Cancel
        </Button>
      </DialogActions>
    </BootstrapDialog>
  )
}

export default CreateUserPopup