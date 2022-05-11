import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { startLoginWithEmailPassword } from "../redux/actions/auth";
import {useNavigate} from "react-router-dom";

const useLogin = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
    email: '',
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleRegistry = () => {
    navigate('/register');
  }
  const onLogin = () => {
    navigate('/login');
  }
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({
      email: values.email,
      password: values.password,
      onLogin
    }));
  }
  return {
    values,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleRegistry,
    handleLogin,
    msgError
  }
}

export default useLogin;