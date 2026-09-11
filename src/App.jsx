import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";

function StudentDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
      Student Dashboard
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<StudentLogin />} />

        <Route
          path="/student-dashboard"
          element={<StudentDashboard />}
        />
        <Route
          path="/student-register"
          element={<StudentRegister />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;