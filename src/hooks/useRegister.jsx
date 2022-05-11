import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import validator from "validator";
import { startInsideRegister } from "../redux/actions/auth";
import { removeError, setError } from "../redux/actions/ui";
import useForm from "./useForm";


 const userRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState({
        password: false,
        password2: false,
    });

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        role: '',
        password: '',
        password2: '',
        createdAt: '',
    })

    const { name, email, role, password, password2 } = formValues;
    const onLoginRedirect = () => {
        navigate('/login');
    }
    const handleRegister = () => {
        if (isFormValid()) {
            dispatch(startInsideRegister(email, password, name, role, { onLoginRedirect }));
        } else {
            window.location.reload();
        }
    }
    const onLogin = () => {
        navigate('/');
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('Nombre es requerido...!!!!!'))
            Swal.fire('Error', 'Nombre es requerido...!!!!!', 'error');
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email es invalido...!!!!!'))
            Swal.fire('Error', 'Email es invalido...!!!!!', 'error');
            return false;
        } else if (password !== password2) {
            dispatch(setError('Password no coincide...!!!!!'))
            Swal.fire('Error', 'Password no coincide...!!!!!', 'error');
            return false;
        }
        dispatch(removeError());
        return true;
    }

    const handlePasswordView = (id) => () => {
        setShowPasswords({
            ...showPasswords,
            [id]: !showPasswords[id],
        });
    };
return {
    handleRegister,
    onLoginRedirect,
    handleMouseDownPassword,
    handlePasswordView
}

}

export default userRegister;