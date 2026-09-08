import './App.css'
import Navbar from './Component/Navbar'
import { Outlet } from "react-router-dom";
import { ThemeContext } from './Context/ThemeContext';
import { useContext } from "react";

function App() {

  const { state } = useContext(ThemeContext)  
  
  return (
    <div className={`app-shell ${state.theme === "dark" ? "app-shell--dark" : ""}`}>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App