import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon'
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon'
import PlusIcon from '@heroicons/react/24/solid/PlusIcon'
import { Button, SvgIcon, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function Breadcrumb({ title, handleAddClick, handleReloadClick }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={4}
      padding={1}
      style={{ backgroundColor: '#ffffff' }}
    >
      <Stack spacing={1}>
        <Typography variant="h5">
          <SvgIcon fontSize="small">
            <ArrowLeftIcon />
          </SvgIcon>
          {title}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={1}>
        <Button
          startIcon={(
            <SvgIcon fontSize="small">
              <ArrowPathIcon />
            </SvgIcon>
          )}
          variant="contained"
          color="black"
          onClick={handleReloadClick}
        >
          Reload
        </Button>
        <Button
          startIcon={(
            <SvgIcon fontSize="small">
              <PlusIcon />
            </SvgIcon>
          )}
          variant="contained"
          onClick={handleAddClick}
        >
          Add
        </Button>
      </Stack>
    </Stack>
  )
}

export default Breadcrumb