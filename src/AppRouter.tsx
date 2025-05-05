import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthLayout } from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./auth/pages/RegisterPage";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* Nester Routes -> Routas Hijas / rutas anidadas */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route path='/' element={<Navigate to="/auth" />}/>
        <Route path='*' element={<Navigate to="/auth" />}/>

      </Routes>
    </BrowserRouter>
  );
};
