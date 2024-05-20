// components/SignUp.tsx
import { Box, Typography } from '@mui/material';
import LoginOpt from './loginOpt'; 

export default function SignUp() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width={'800px'}
      minHeight="90vh"
      bgcolor="inherit"
      color="white"
    >
      <Typography variant="h2" gutterBottom style={{ fontWeight: "bold", width: "auto", fontFamily:"sans-serif"}}>
        Happening now
      </Typography>
      <Typography variant="h5" gutterBottom>
        Join today.
      </Typography>
      <LoginOpt/>
    </Box>
  );
};