import { useMemo, useState } from 'react';
import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid, Button, SvgIcon } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { subDays, subHours } from 'date-fns';
import ProjectManagementCard from 'src/components/ProjectManagement/ProjectManagementCard'
import Breadcrumb from 'src/components/Breadcrumb';

const Page = () => {
  const [show, setShow] = useState(false);

  const handleSetShow = () => setShow(!show);

  const handleDelete = () => { }
  return (
    <>
      <Head>
        <title>
          Project Management  | Data ACQ
        </title>
      </Head>
      <Breadcrumb
        title="Project Management"
        handleAddClick={handleSetShow}
        handleReloadClick={() => { }}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >

        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
          >
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <ProjectManagementCard
                handleEditClick={handleSetShow}
                handleDeleteClick={handleDelete} />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <ProjectManagementCard
                handleEditClick={handleSetShow}
                handleDeleteClick={handleDelete} />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <ProjectManagementCard
                handleEditClick={handleSetShow}
                handleDeleteClick={handleDelete} />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <ProjectManagementCard
                handleEditClick={handleSetShow}
                handleDeleteClick={handleDelete} />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <ProjectManagementCard
                handleEditClick={handleSetShow}
                handleDeleteClick={handleDelete} />
            </Grid>
          </Grid>
        </Container>

      </Box>
      {/* {show && <CreateUserPopup
                show={show}
                setShow={handleSetShow} />} */}
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
