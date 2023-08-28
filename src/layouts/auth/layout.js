import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from 'src/components/logo';

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto',
        backgroundColor: '#f8f7fc'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            // background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            },
            textAlign: 'center'
          }}
        >
          <Box sx={{ p: 3 }}>
            <img
              alt=""
              src="/assets/auth-illustration.svg"
            />
            <Typography
              align="center"
              color="black"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1
              }}
              variant="h1"
            >
              Fast, Efficient and Productive
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="subtitle1"
              color="black"
            >
              Unleashing the Power of Data: Connecting Insights, Transforming Possibilities
            </Typography>
          </Box>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >

          {children}
        </Grid>

      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node
};