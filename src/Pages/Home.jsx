import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">The everyday edit</p>
          <h1>Good things,<br /><em>well chosen.</em></h1>
          <p className="hero-description">Thoughtful pieces for the way you live, work, and wander. Discover a considered collection without the endless scroll.</p>
          <Link className="primary-link" to="/products">Shop the collection <span>→</span></Link>
        </div>
        <div className="hero-image-wrap">
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1100&q=85" alt="A bright, curated clothing store" />
          <span className="hero-note">New season / 01</span>
        </div>
      </section>

      <section className="home-intro">
        <p className="eyebrow">Why ShopKart</p>
        <h2>A little more intention<br />in every basket.</h2>
        <div className="value-grid">
          <div><strong>01</strong><h3>Curated, not crowded</h3><p>Products with a point of view, selected to work beautifully together.</p></div>
          <div><strong>02</strong><h3>Made for real life</h3><p>Useful, lasting pieces that earn their place in your everyday.</p></div>
          <div><strong>03</strong><h3>Easy by design</h3><p>A calm way to browse, choose, and get on with your day.</p></div>
        </div>
      </section>

      <section className="home-banner">
        <div><p className="eyebrow">The latest arrivals</p><h2>Small upgrades.<br />Big difference.</h2></div>
        <Link className="outline-link" to="/products">Explore new arrivals <span>↗</span></Link>
      </section>
    </main>
  )
}

export default Home