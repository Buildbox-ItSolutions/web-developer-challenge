import { Link, Typography } from '@mui/material';

const CopyrightComponent = () => {
  return (
    <Typography variant='body2' color='text.secondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://github.com/bcocheto/'>
        Breno Cocheto
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default CopyrightComponent;
