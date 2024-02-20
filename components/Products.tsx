// components/ProductList.tsx

import { products } from "./productsData";

const ProductList: React.FC = () => {
  const productContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '20px',
  };

  const h2: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '20px', // Add margin to the bottom of h2
  };

  const productCardStyle: React.CSSProperties = {
    boxSizing: 'border-box',
    flex: '0 0 30%', // Each card takes up 30% of the container width
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    textAlign: 'center',
    marginTop: '100px',
  };

  const productImageStyle: React.CSSProperties = {
    maxWidth: '600',
    maxHeight: '300px',
    marginBottom: '10px',
  };


  return (
    <div style={productContainerStyle}>

     <h2 style={h2} className='bold-52 '>Buy the Products </h2>
  

      {products.map((product) => (
        <div key={product.id} style={productCardStyle}>
          <img
            src={product.image}
            alt={product.name}
            style={productImageStyle}
          />
          <div>
            <strong>{product.name}</strong>
          </div>
          <div>₹{product.price.toFixed(2)}</div>
          <div>
          <strong>{product.quantity}</strong> </div>
          <button>Add to Cart</button>
        </div>
      ))}
     
    </div>
  );
};

export default ProductList;
