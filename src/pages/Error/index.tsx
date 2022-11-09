import { Box, Button, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h6'>Essa página não existe.</Typography>
            <Button variant='contained'>
              <Link to={'/'}>Retornar</Link>
            </Button>
          </Grid>
          <Grid xs={6}>
            <img
              src='https://img.freepik.com/vetores-gratis/glitch-error-404-page_23-2148105404.jpg?w=2000'
              alt=''
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
