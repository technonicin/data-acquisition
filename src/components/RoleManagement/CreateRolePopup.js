import React from 'react'
import { Dialog, DialogActions, DialogContent, Button } from '@mui/material'
import CreateRoleForm from './CreateRoleForm';
import { BootstrapDialogTitle } from '../dialog';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function CreateRolePopup({ show, setShow }) {
  return (
    <BootstrapDialog
      onClose={setShow}
      aria-labelledby="customized-dialog-title"
      open={show}
      maxWidth="xl"
    >
      <BootstrapDialogTitle id="customized-dialog-title"
        onClose={setShow}>
        Create Role
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <CreateRoleForm setShow={setShow} />
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

export default CreateRolePopup
