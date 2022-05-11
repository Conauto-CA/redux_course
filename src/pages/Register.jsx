import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Swal from 'sweetalert2';
import useRegister from '../hooks/useRegister';

export const Register = () => {
  const {
    handleRegister,
    onLoginRedirect,
    handleMouseDownPassword,
    handlePasswordView,
    handleInputChange,
    msgError,
    showPassword,
    formValues,
  } = useRegister();
  const { name, email, role, password, password2 } = formValues;
  return (
    <Grid>
      <Box>
      {
          msgError &&
          (
            Swal.fire('Error', msgError, 'error')
          )
        }
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid>
            <TextField 
            name='name'
            autoComplete='off'
            value={name}
            onchange={handleInputChange}
            label={'Nombres Completos'}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  )
}
