import React from 'react'
import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Box } from '@mui/material';
import Breadcrumb from 'src/components/Breadcrumb';
import PageList from 'src/sections/permissions/PageList';

const Page = () => (
  <>
    <Head>
      <title>
        Permission Management | Data ACQ
      </title>
    </Head>
    <Breadcrumb
      title="Permission Management"
      handleAddClick={handleSetShow}
      handleReloadClick={() => { }}
    />
    <Box
      component="main">
      <PageList className={classes.conversationList} />
    </Box>
  </>
)


Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;