function ProductCard({product, index, cartItems,setCartItems})
{
  const addToCart = (productName,setCartItems) => {
    debugger;
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { name: productName, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName,setCartItems) => {
    const updatedCart = cartItems.map(item =>
      item.name === productName ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );

    const filteredCart = updatedCart.filter(item => item.quantity > 0);

    setCartItems(filteredCart);
  };

  const isItemInCart = (productName) => {
    return cartItems.some(item => item.name === productName);
  };

    return<>
      <div key={index} className="col mb-5">
    <div className="card h-100">
      <img className="card-img-top" src={product.image} alt="..." />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{product.name}</h5>
          {product.sale && <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>}
          {product.reviews && (
            <div className="d-flex justify-content-center small text-warning mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="bi-star-fill"></div>
              ))}
            </div>
          )}
          <span className="text-muted text-decoration-line-through">{product.discountedPrice}</span>
          {product.discountedPrice}
        </div>
      </div>
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {isItemInCart(product.name,cartItems) ? (
            <button className="btn btn-outline-dark mt-auto" onClick={() => removeFromCart(product.name,setCartItems)}>
              Remove from cart
            </button>
          ) : (
            <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product.name,setCartItems)}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
    </>

  
}

function isItemInCart(productName,cartItems){
    return cartItems.some(item => item.name === productName);

}

export default ProductCard;