import React from 'react'
import Head from 'next/head';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { Box } from '@mui/material';
import Breadcrumb from 'src/components/Breadcrumb';
import { makeStyles } from '@mui/styles';
import PageList from 'src/sections/permissions/PageList';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    cursor: 'pointer',
    display: 'flex',
    overflow: 'hidden',
    '@media (max-width: 863px)': {
      '& $pageList, & $conversationDetails': {
        flexBasis: '100%',
        width: '100%',
        maxWidth: 'none',
        flexShrink: '0',
        transform: 'translateX(0)'
      }
    }
  },
  openConversion: {
    '@media (max-width: 863px)': {
      '& $pageList, & $conversationDetails': {
        transform: 'translateX(-100%)'
      }
    }
  },
  pageList: {
    width: 300,
    flexBasis: 300,
    flexShrink: 0,
    '@media (min-width: 864px)': {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  },
  conversationDetails: {
    flexGrow: 1
  },
  conversationPlaceholder: {
    flexGrow: 1
  }
}));

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