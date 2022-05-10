import {
  Grid,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import useLogin from '../hooks/useLogin';
import Link from "@mui/material/Link";
import PasswordInput from '../components/PasswordInput';

export const Login = () => {
  const {
    values,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleRegistry,
    handleLogin,
  } = useLogin();


  return (
    <Grid >
      <Grid
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Grid container >
          <Typography align="center" variant="h5">
            Login
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange("email")}
                type="email"
                label="Correo electrónico"
                autoComplete="off"
               
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                values={values}
                handleChange={handleChange}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" onClick={handleLogin}>
                <Typography>Entrar</Typography>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" >
                No tienes cuenta?{" "}
                <Link onClick={handleRegistry}>Regístrate aquí</Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
