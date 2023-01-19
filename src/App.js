import Home from "./views/Home";
import TodoAnalytics from "./views/TodoAnalytics";
// import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import UserInfo from "./views/UserInfo";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<TodoAnalytics />} />
      <Route path="/user" element={<UserInfo />} />
    </Routes>
  );
}

export default App;
