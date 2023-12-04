import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
