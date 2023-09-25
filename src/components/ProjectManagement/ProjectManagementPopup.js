import React from 'react'
import { Dialog, DialogContent, Button } from '@mui/material'
import CreateProjectFrom from './CreateProjectFrom';
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


function ProjectManagementPopup({ show, setShow }) {
  return (
    <BootstrapDialog
      onClose={setShow}
      aria-labelledby="customized-dialog-title"
      open={show}
      maxWidth="xl"
    >
      <BootstrapDialogTitle id="customized-dialog-title"
        onClose={setShow}>
        Create Project
      </BootstrapDialogTitle>
      <DialogContent dividers>
        <CreateProjectFrom />
      </DialogContent>

    </BootstrapDialog>

  )
}

export default ProjectManagementPopup
