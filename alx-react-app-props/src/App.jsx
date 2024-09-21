import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import UserContext from "./components/UserContext";
import ProfilePage from "./ProfilePage";

function App() {
  const [count, setCount] = useState(0);
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  };

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
        <MainContent />
        <Counter />
        <Footer />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
    </>
  );
}

export default App;
