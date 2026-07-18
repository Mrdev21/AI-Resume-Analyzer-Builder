import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ResumeBuilder from "./pages/ResumeBuilder";
import JDMatcher from "./pages/JDMatcher";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route
            path="/resume-analyzer"
            element={<ResumeAnalyzer />}
          />

          <Route
            path="/resume-builder"
            element={<ResumeBuilder />}
          />

          <Route
            path="/jd-matcher"
            element={<JDMatcher />}
          />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
          

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/terms-and-conditions" element={<TermsConditions />} />

          <Route path="/contact-us" element={<ContactUs />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;