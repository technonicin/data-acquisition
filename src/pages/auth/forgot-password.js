import { useCallback, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from 'src/hooks/use-auth';
import { Layout as AuthLayout } from 'src/layouts/auth/layout';

const Page = () => {
  const router = useRouter();
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      email: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push('/');
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });


  const handleSkip = useCallback(
    () => {
      router.push('/');
    },
    [router]
  );

  return (
    <>
      <Head>
        <title>
          Forgot Password | Data ACQ
        </title>
      </Head>
      <Box
        sx={{
          backgroundColor: '#f8f7fc',
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%',
            backgroundColor: 'background.paper',
            borderRadius: '10px',
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
              style={{ textAlign: 'center' }}
            >
              <Typography variant="h4">
                Forgot Password ?
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Enter your email to reset your password.
              </Typography>
            </Stack>

            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />

              </Stack>

              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
                sx={{ mt: 3 }}
              >
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Submit
                </Button>

                <Button
                  fullWidth
                  size="large"
                  onClick={handleSkip}
                >
                  Cancel
                </Button>
              </Stack>
            </form>

          </div>
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
);

export default Page;
