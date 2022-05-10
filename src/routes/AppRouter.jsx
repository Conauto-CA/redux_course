import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicNavBar } from "../components/PublicNavBar";
import { Login } from "../pages/Login";
import { Welcome } from "../pages/Welcome";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <PublicNavBar />
      <Routes>
        <Route
          path={'/'}
          element={<Welcome />} 
          />
          <Route
          path={'/login'}
          element={<Login />} 
          />
      </Routes>
    </BrowserRouter >
  )
}
