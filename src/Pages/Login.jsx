import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError('')
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.email || !form.password) {
      setError('Enter your email and password to continue.')
      return
    }

    setSubmitted(true)
  }

  return (
    <main className="login-page">
      <section className="auth-layout" aria-labelledby="login-title">
        <div className="auth-showcase">
          <div className="showcase-topline"><span>ShopKart.</span><span>Est. 2024</span></div>
          <div className="showcase-content">
            <p className="showcase-kicker">A considered way to shop</p>
            <h1>Come on in.<br /><em>Good finds await.</em></h1>
            <p>Keep your favourites close, pick up where you left off, and make every order feel a little more personal.</p>
          </div>
          <div className="showcase-footer"><span className="showcase-mark">✳</span><span>Curated for everyday living</span></div>
        </div>

        <div className="login-card">
        <div className="login-heading">
          <span className="login-kicker">ShopKart account</span>
          <h1 id="login-title">Welcome back</h1>
          <p>Sign in to continue shopping with ShopKart.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
          </div>

          <div className="form-field">
            <div className="field-label-row">
              <label htmlFor="password">Password</label>
              <button className="text-button" type="button">Forgot password?</button>
            </div>
            <input id="password" name="password" type="password" autoComplete="current-password" value={form.password} onChange={handleChange} placeholder="Enter your password" required />
          </div>

          {error && <p className="form-message error-message" role="alert">{error}</p>}
          {submitted && <p className="form-message success-message" role="status">You are ready to continue shopping.</p>}

          <button className="login-btn" type="submit">Sign in</button>
        </form>

        <p className="auth-switch">New to ShopKart? <Link to="/register">Create an account</Link></p>
        </div>
      </section>
    </main>
  )
}

export default Login