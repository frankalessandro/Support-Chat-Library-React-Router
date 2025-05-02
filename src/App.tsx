// import { AuthLayout } from "./auth/layout/AuthLayout";
import ChatLayout from "./chat/layout/ChatLayout";
import ChatPages from "./chat/pages/ChatPages";

function App() {
  return (
    <>
      {/* <AuthLayout /> */}
      <ChatLayout>
        <ChatPages/>
      </ChatLayout>
    </>
  );
}

export default App;
