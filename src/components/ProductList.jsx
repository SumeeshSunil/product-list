import ProductCard from './ProductCard';

function ProductList({ products }) {
  if (products.length === 0) {
    return (
      <p className="text-center text-slate-500 mt-10">
        No products match your search/filter.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
