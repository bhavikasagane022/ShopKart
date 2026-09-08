
import ProductCard from '../Component/ProductCard'
import './Products.css'
import { useMemo, useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const controller = new AbortController()

    fetch('https://fakestoreapi.com/products', { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Unable to load products.')
        }
        return response.json()
      })
      .then((data) => setProducts(data))
      .catch((requestError) => {
        if (requestError.name !== 'AbortError') {
          setError('Products could not be loaded. Please try again.')
        }
      })
      .finally(() => setIsLoading(false))

    return () => controller.abort()
  }, [])



  const categories = useMemo(() => ['All', ...new Set(products.map((product) => product.category))], [products])

  const filteredProducts = useMemo(() => {
    const matchingProducts = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || product.category === category
      return product.price > 0 && matchesSearch && matchesCategory
    })

    return [...matchingProducts].sort((first, second) => {
      if (sort === 'price-low') return first.price - second.price
      if (sort === 'price-high') return second.price - first.price
      return first.id - second.id
    })
  }, [category, products, search, sort])


  return (
    <main className="container products-page py-4 py-md-5">
      <div className="products-intro">
        <div><p className="products-kicker">The ShopKart edit</p><h1 className="products-heading">Find your next favourite.</h1></div>
        <p className="products-description">A considered mix of useful, beautiful things for every kind of day.</p>
      </div>
      <div className="products-toolbar">
        <div className="category-tabs" aria-label="Filter by category">
          {categories.map((item) => <button className={category === item ? 'is-selected' : ''} key={item} type="button" onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <div className="products-tools">
          <label className="search-field"><span aria-hidden="true">⌕</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search the edit" aria-label="Search products" /></label>
          <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </div>
      </div>
      {isLoading && <p className="products-status text-center">Loading...</p>}
      {error && <p className="products-status products-status--error text-center">{error}</p>}
      {!isLoading && !error && (
        <>
          <div className="products-results"><span>{filteredProducts.length} pieces</span><span>{category === 'All' ? 'All products' : category}</span></div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <ProductCard
                title={product.title}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
          </div>
          {filteredProducts.length === 0 && <p className="products-status">No pieces match that search. Try another phrase.</p>}
        </>
      )}
    </main>
  )
}

export default Products