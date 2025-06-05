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

const NoChatSelectedPage = lazy(() => import("./chat/pages/NoChatSelectedPage"));

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
                <div className="flex items-center justify-center h-screen bg-background">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 border-4 border-secondary border-t-transparent rounded-full animate-spin [animation-direction:reverse]" />
                    </div>
                    <span className="text-sm text-muted-foreground">Loading conversation...</span>
                  </div>
                </div>
              }
            >
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path='/chat/:clientId' element={<ChatPages />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
