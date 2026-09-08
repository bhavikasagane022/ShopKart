import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setError('')
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError('Complete all fields to create your account.')
      return
    }

    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setSubmitted(true)
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="register-title">
        <div className="login-heading">
          <span className="login-kicker">ShopKart account</span>
          <h1 id="register-title">Create your account</h1>
          <p>Join ShopKart and keep your orders in one place.</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={handleChange} placeholder="Alex Johnson" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" autoComplete="new-password" value={form.password} onChange={handleChange} placeholder="At least 8 characters" required />
          </div>
          <div className="form-field">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" value={form.confirmPassword} onChange={handleChange} placeholder="Repeat your password" required />
          </div>

          {error && <p className="form-message error-message" role="alert">{error}</p>}
          {submitted && <p className="form-message success-message" role="status">Account created successfully.</p>}
          <button className="login-btn" type="submit">Create account</button>
        </form>

        <p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </section>
    </main>
  )
}

export default Register