import { BrowserRouter, Routes, Route } from "react-router-dom";
import VoiceAssistant from "./pages/VoiceAssistant";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Counter from "./pages/Counter";
import Palindrome from "./pages/Palindrome";
import Prime from "./pages/Prime";
import Calculator from "./pages/Calculator";
import Theme from "./pages/Theme";
import Stopwatch from "./pages/Stopwatch";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import Notes from "./pages/Notes";
import Skills from "./pages/Skills";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import Profile from "./pages/Profile";
import Tracker from "./pages/Tracker";
import MapPage from "./pages/Map";
import Resume from "./pages/Resume";
import Armstrong from "./pages/Armstrong";
import TicTacToe from "./pages/TicTacToe";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing */}
        <Route path="/" element={<Dashboard />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
      <Route path="/assistant" element={<VoiceAssistant />}/>
        {/* Projects */}
        <Route path="/weather" element={<Weather />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/palindrome" element={<Palindrome />} />
        <Route path="/armstrong" element={<Armstrong />} />
        <Route path="/prime" element={<Prime />} />
        <Route path="/tictactoe" element={<TicTacToe />} />

        {/* Skills */}
        <Route path="/skills" element={<Skills />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route element={<PrivateRoute />}>
          <Route path="/counter" element={<Counter />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;