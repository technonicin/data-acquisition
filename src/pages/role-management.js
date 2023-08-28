import {  useState } from 'react';
import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid, } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import RoleManagementCard from 'src/components/RoleManagement/RoleManagementCard';
import CreateRolePopup from 'src/components/RoleManagement/CreateRolePopup';
import Breadcrumb from 'src/components/Breadcrumb';

const Page = () => {

  const [isOpenRolePopup, setIsOpenRolePopup] = useState(false)
  const openRolePopup = () => setIsOpenRolePopup(!isOpenRolePopup);

  return (
    <>
      <Head>
        <title>
          Role Management  | Data ACQ
        </title>
      </Head>
      <Breadcrumb
        title="Role Management"
        handleAddClick={openRolePopup}
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
              <RoleManagementCard openRolePopup={openRolePopup} />
            </Grid>

            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <RoleManagementCard openRolePopup={openRolePopup} />
            </Grid>

            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <RoleManagementCard openRolePopup={openRolePopup} />
            </Grid>
            <Grid
              xs={12}
              sm={6}
              lg={3}
            >
              <RoleManagementCard openRolePopup={openRolePopup} />
            </Grid>
          </Grid>

        </Container>

      </Box>
      {isOpenRolePopup && <CreateRolePopup
        show={isOpenRolePopup}
        setShow={openRolePopup} />}
    </>
  )
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
