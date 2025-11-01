import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];

  return (
    <ThemeProvider>
      <Router>
        {/* Apply global background + text color based on theme */}
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out">
          {/* Navbar */}
          <Navbar brand="LearnTrack" links={navLinks} />

          {/* Main Content */}
          <main className="flex-grow max-w-5xl mx-auto w-full py-8 px-4 sm:px-6 lg:px-8 space-y-10">
            <Routes>
              {/* Home Page */}
              <Route
                path="/"
                element={
                  <>
                    {/* --- Task Manager Section --- */}
                    <section className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-colors duration-300 animate-fadeIn">
                      <h1 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
                        Task Management Dashboard
                      </h1>
                      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                        Stay organized and productive with an easy-to-use task management system.
                      </p>
                      <TaskManager />
                    </section>

                    {/* --- Learning Resources Section --- */}
                    <section className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-colors duration-300">
                      <h1 className="text-3xl font-bold text-center mb-4 text-blue-600 dark:text-blue-400">
                        Learning Resources
                      </h1>
                      <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
                        Explore educational content fetched dynamically to enhance your learning.
                      </p>
                      <ApiData />
                    </section>
                  </>
                }
              />

              {/* About Page */}
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
