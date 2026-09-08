import { useContext } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../Context/ThemeContext'

const Navbar = () => {

  const { state, dispatch } = useContext(ThemeContext)

  return (
    <>
    <nav className={state.theme === "light" ? "light" : "dark"}>
      <NavLink className="nav-logo" to="/" aria-label="ShopKart home">
        <span className="nav-logo-mark" aria-hidden="true"><span> S </span></span>
        <span className="nav-logo-name">ShopKart<span>.</span></span>
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/login">Login</NavLink>
        
        <button
          className={`theme-toggle-btn ${state.theme === "dark" ? "is-dark" : ""}`}
          aria-label={`Switch to ${state.theme === "light" ? "dark" : "light"} theme`}
          aria-pressed={state.theme === "dark"}
          onClick={() => dispatch({type:"TOGGLE_THEME"})}
        >
          <span className="theme-icon theme-icon--sun" aria-hidden="true">☼</span>
          <span className="theme-switch" aria-hidden="true"><span /></span>
          <span className="theme-icon theme-icon--moon" aria-hidden="true">◐</span>
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar