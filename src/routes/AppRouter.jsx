import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import { auth } from "../db/firebase-config";
import { LoadingScreen } from "../pages/LoadingScreen";
import { login } from "../redux/actions/auth";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const dispatch  = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    })
  }, [setChecking, setIsLoggedIn, dispatch])

  if(checking){
    console.log(isLoggedIn)
    return (<LoadingScreen/>)
  }

  return (
    <BrowserRouter>
    {
      (!isLoggedIn)?(<PublicRoutes/>):(<PrivateRoutes/>)
    }
    </BrowserRouter >
  )
}
