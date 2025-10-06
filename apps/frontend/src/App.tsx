import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.tsx";
import Tasks from "./pages/Tasks.tsx";
import Calendar from "./pages/Calendar.tsx";
import Charts from "./pages/Chart.tsx";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/charts" element={<Charts />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
