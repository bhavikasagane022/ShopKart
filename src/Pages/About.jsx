import { Link } from 'react-router-dom'
import './About.css'

const About = () => (
	<main className="about-page">
		<section className="about-hero">
			<div className="about-hero-copy">
				<p className="eyebrow">A better way to browse</p>
				<h1>Shopping with<br /><em>more intention.</em></h1>
				<p>ShopKart is a considered collection of useful, beautiful things for everyday living. No noise. No pressure. Just good finds, chosen well.</p>
			</div>
			<div className="about-hero-image">
				<img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&q=85" alt="A curated fashion collection" />
				<span>Our point of view / 01</span>
			</div>
		</section>

		<section className="about-statement">
			<p className="eyebrow">The ShopKart point of view</p>
			<h2>Less scrolling.<br />More finding.</h2>
			<p>We started ShopKart with a simple idea: online shopping can feel personal again. Every product has a reason to be here, whether it makes your mornings easier, your space calmer, or your everyday style feel more like you.</p>
		</section>

		<section className="about-principles">
			<div className="about-section-heading"><p className="eyebrow">What guides us</p><h2>Good choices,<br /><em>made simple.</em></h2></div>
			<div className="principle-list">
				<article><span>01</span><div><h3>Curiosity over clutter</h3><p>We look for pieces with character and purpose, then leave the rest behind.</p></div></article>
				<article><span>02</span><div><h3>Useful can be beautiful</h3><p>The things you reach for every day deserve to feel as good as they work.</p></div></article>
				<article><span>03</span><div><h3>A calmer experience</h3><p>Clear choices, honest details, and a little more breathing room in your basket.</p></div></article>
			</div>
		</section>

		<section className="about-cta">
			<p className="eyebrow">Ready when you are</p>
			<h2>Find something<br /><em>worth keeping.</em></h2>
			<Link className="primary-link" to="/products">Explore the collection <span>→</span></Link>
		</section>
	</main>
)

export default About
