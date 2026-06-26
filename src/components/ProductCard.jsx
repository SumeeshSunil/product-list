function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(product.name);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-36 object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-slate-800">{product.name}</h3>
      <p className="text-sm text-slate-500">{product.category}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="font-bold text-slate-900">₹{product.price}</span>
        <span className="text-sm text-amber-500">★ {product.rating}</span>
      </div>
      <button
        onClick={handleAddToCart}
        className="mt-3 bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
