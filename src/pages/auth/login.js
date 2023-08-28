
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
      password: '',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await auth.signIn(values.email, values.password);
        router.push('/');
      } catch (err) {
        console.log("error submit", err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <>
      <Head>
        <title>
          Login | Data ACQ
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
                Sign In
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Unlock the Power of Data: Seamlessly Connect, Analyze, and Transform
              </Typography>
            </Stack>

            {formik.errors.submit && (
              <Alert
                color="error"
                severity="error"
                sx={{ mb: 3 }}
              >
                <Typography
                  color="error"
                  variant="body2">
                  {formik.errors.submit}
                </Typography>
              </Alert>
            )}

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
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              <FormHelperText sx={{ mt: 1 }}
                style={{ textAlign: 'right' }}>
                <Link
                  component={NextLink}
                  href="/auth/forgot-password"
                  underline="hover"
                  variant="subtitle2"
                >
                  Forgot password?
                </Link>
              </FormHelperText>

              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>


              <FormHelperText sx={{ mt: 3 }}
                style={{ textAlign: 'center' }}>
                Not Member yet? &nbsp;
                <Link
                  component={NextLink}
                  href="/auth/register"
                  underline="hover"
                  variant="subtitle2"
                >
                  sing up
                </Link>
              </FormHelperText>

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
