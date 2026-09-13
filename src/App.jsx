import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentLogin from "./pages/StudentLogin";
import StudentRegister from "./pages/StudentRegister";
import StudentDashboard from "./pages/StudentDashboard";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
// import ExamForm from "./pages/ExamForm";
// import ExamPreview from "./pages/FormPreview";
// import Payment from "./pages/Payment";
// import SubmissionSuccess from "./pages/SubmissionSuccess";

function App() {

  // const formData = {
  //   studentName: "Ankit Kumar",
  //   fatherName: "Rajesh Kumar",
  //   rollNumber: "BCA2026001",
  //   universityNumber: "UNI202600123",
  //   dateOfBirth: "2004-08-15",

  //   email: "ankit@example.com",
  //   mobile: "9876543210",

  //   course: "BCA",
  //   semester: "6",
  //   examType: "Regular",

  //   subjects: [
  //     "Web Development",
  //     "Java Programming",
  //     "Database Management",
  //     "Computer Networks",
  //   ],

  //   address: "123 Main Road",
  //   city: "Delhi",
  //   state: "Delhi",
  //   pincode: "110001",
  // };

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

        {/* <Route
          path="/exam-form"
          element={<ExamForm />}
        />

        <Route
          path="/form-preview"
          element={<ExamPreview formData={formData}/>}
        />

        <Route 
          path="/payment"
          element={<Payment formData={formData}/>}
        />

        <Route 
          path="/submission"
          element={<SubmissionSuccess formData={formData}/>}
        /> */}

        <Route 
          path="/admin/register"
          element={<AdminRegister />}
        />

        <Route 
          path="/admin/login"
          element={<AdminLogin />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;