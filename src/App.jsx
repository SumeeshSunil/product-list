import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import SortOptions from './components/SortOptions';
import ProductList from './components/ProductList';
import { products } from './data/products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('none');
  const [visibleProducts, setVisibleProducts] = useState(products);

  const categories = [...new Set(products.map((p) => p.category))];

  useEffect(() => {
    let result = [...products];

    if (searchTerm.trim() !== '') {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (sortOption === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setVisibleProducts(result);
  }, [searchTerm, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Header />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex gap-3">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <SortOptions sortOption={sortOption} setSortOption={setSortOption} />
        </div>
      </div>

      <ProductList products={visibleProducts} />
    </div>
  );
}

export default App;
