import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { db } from "../../db/firebase-config";
import { COLLECTIONS, ENTERPRISE_NAME } from "../../db/globals";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

const auth = getAuth();
export const startLoginWithEmailPassword = (email, password, { onLogin }) => {
    return (dispatch) => {
        dispatch(startLoading());
        Swal.fire({
            title: `${ENTERPRISE_NAME}`,
            text: 'Ingresando al Sistema',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        signInWithEmailAndPassword(auth, email, password).then(({ user }) => {
            dispatch(login(user.uid, user.displayName))
            dispatch(finishLoading());
            onLogin();
            Swal.close();
        }).catch(error => {
            dispatch(finishLoading());
            Swal.fire('ERROR!!!', error.message, 'error');
        })
    }
}

export const startInsideRegister = (email, password, name, role, { onLogin }) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                const { photoURL, uid } = user;
                let img = '';
                !photoURL ? img = '' : img = photoURL;
                const dataUser = {
                    uid,
                    name,
                    email,
                    role,
                    isActive: false,
                    createdAt: new Date().getTime(),
                };
                Swal.fire({
                    title: `${ENTERPRISE_NAME}`,
                    text: 'Registrando ...',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                })
                await setDoc(doc(db, `${COLLECTIONS.USERS}`, uid), dataUser);
                await updateProfile(user, { displayName: name });
                dispatch(login(user.uid, user.displayName));
                onLogin();
                Swal.close();
            }).catch(err => {
                Swal.fire('Error', err.message, 'error');
            })
    }
}

export const login = (uid, diplayName) => (
    {
        type: types.login,
        payload: {
            uid,
            diplayName
        }
    }
)


export const startLogout = () => {
    return async (dispatch) => {
        await signOut(auth);
        //agregar sweet alert
        dispatch(logout());
        Swal.fire({
            title: 'Saliendo del Sistema...',
            text: 'Hasta pronto ...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        })
        Swal.close();
        window.location.reload();
        //add more dipatches on logout
    }
}


export const logout = () => ({
    type: types.logout
})
