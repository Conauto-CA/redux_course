import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Swal from 'sweetalert2';
import PasswordInput from '../components/PasswordInput';
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
    <Grid sx={{ diplay: 'flex', flexDirection: 'column' }} >
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        paddingX="20px"
        maxWidth="1000px"
        alignSelf="center">
        {
          msgError &&
          (
            Swal.fire('Error', msgError, 'error')
          )
        }
      </Box>
      <Box sx={{
        width: '20%',
        height: '20%',
        minWidth: '150px',
        paddingBottom: '3%',
        paddingTop: '3%',
      }}>Registro</Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name='name'
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
            label={'Nombres Completos'}
            sx={{ textField: { width: '100%', paddingTop: '5%' } }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name='email'
            autoComplete='off'
            value={email}
            type={'email'}
            onChange={handleInputChange}
            label={'Email'}
            sx={{ textField: { width: '100%', paddingTop: '5%' } }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PasswordInput
            name='password'
            values={{ showPassword: showPassword.password, password }}
            handleChange={() => (event) => handleInputChange({ target: event.target })}
            handleClickShowPassword={handlePasswordView('password')}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        </Grid>
        <Grid item xs={6}>
          <PasswordInput
            label="Repita su contraseña"
            name='password2'
            values={{ showPassword: showPassword.password2, password: password2 }}
            handleChange={() => (event) => handleInputChange({ target: event.target })}
            handleClickShowPassword={handlePasswordView('password2')}
            handleMouseDownPassword={handleMouseDownPassword}
          />
        </Grid>
      </Grid>
      <FormControl fullWidth>
        <InputLabel>Rol</InputLabel>
        <Select
          label={'Rol'}
          name='role'
          value={role}
          onChange={handleInputChange}
          sx={{ textField: { width: '100%', paddingTop: '5%' } }}
        >
          <MenuItem value={'admin'}>Administrador</MenuItem>
          <MenuItem value={'seller'}>Vendedor</MenuItem>
        </Select>
      </FormControl>
      <Grid item xs={12}>
        <Button
          type='submit'
          variant="contained"
          sx={{ textTransform: 'none', marginY: '7px', minHeight: '50px', width: '100%' }}
          onClick={handleRegister}
        >
          <Typography>Registrarme</Typography>
        </Button>
      </Grid>
    </Grid>
  )
}
