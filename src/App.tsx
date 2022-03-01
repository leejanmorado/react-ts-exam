import { Route, Routes } from "react-router";
import { Home, SignIn, SignUp } from "./pages";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
