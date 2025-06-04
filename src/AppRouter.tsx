import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { AuthLayout } from "./auth/layout/AuthLayout";
import { LoginPage } from "./auth/pages/LoginPage";
import { Suspense, lazy } from "react";
import { RegisterPage } from "./auth/pages/RegisterPage";
import { sleep } from "./lib/sleep";
//Lazy Loading
const ChatLayout = lazy(async () => {
  await sleep(1500);
  return import("./chat/layout/ChatLayout");
});

const ChatPages = lazy(async () => {
  return import("./chat/pages/ChatPages");
});

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Nester Routes -> Routas Hijas / rutas anidadas */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-screen">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-2 border-primary"></div>
                </div>
              }
            >
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<ChatPages />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
