// import logo from "./logo.svg";
import "./App.css";
function Product() {
  return (
    <div className="App">
      <div className="col-md-3">
        <div className="product-card">
          <div className="product-card-img">
            <label className="stock bg-success">In Stock</label>
            <img src="hp-laptop.jpg" alt="Laptop"></img>
          </div>
          <div className="product-card-body">
            <p className="product-brand">HP</p>
            <h5 className="product-name">Hello</h5>
            <div>
              <span className="selling-price">$500</span>
              <span className="original-price">$799</span>
            </div>
            <div className="mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
