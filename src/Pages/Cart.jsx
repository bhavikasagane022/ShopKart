import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
  return (
    <main className="cart-page">
      <div className="cart-meta"><span>Shopping bag</span><strong>0 items</strong></div>
      <div className="cart-heading">
        <p className="eyebrow">Your selections</p>
        <h1>A good place<br /><em>to begin.</em></h1>
        <p className="cart-copy">Your cart is ready for something considered. Start exploring and your chosen pieces will appear here.</p>
        <Link className="primary-link" to="/products">Browse products <span>→</span></Link>
      </div>

      <div className="cart-visual" aria-hidden="true">
        <span className="cart-sticker">Take your time</span>
        <div className="cart-circle"><span>✳</span></div>
        <div className="cart-basket"><span /><span /></div>
        <div className="cart-handle" />
        <p><strong>Nothing here yet</strong><br />Your next favourite could be.</p>
      </div>

      <section className="cart-benefits" aria-label="ShopKart benefits">
        <article><span>01</span><div><h2>Easy choices</h2><p>A considered edit, without the endless scroll.</p></div></article>
        <article><span>02</span><div><h2>Secure checkout</h2><p>Your details stay protected from basket to door.</p></div></article>
        <article><span>03</span><div><h2>Made for you</h2><p>Save your favourites and come back whenever you like.</p></div></article>
      </section>
    </main>
  )
}

export default Cart