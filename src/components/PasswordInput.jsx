import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PasswordInput = (props) => {
  const {values, handleChange, handleClickShowPassword, handleMouseDownPassword, name, label} = props;
  return (
    <FormControl variant="outlined" >
      <InputLabel htmlFor="outlined-adornment-password">
        {label ?? 'Contraseña'}
      </InputLabel>
      <OutlinedInput
        name={name}
        id={`outlined-adornment-password-${name ?? ''}`}
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label ?? "Contraseña"}
      />
    </FormControl>
  );
}

export default PasswordInput;