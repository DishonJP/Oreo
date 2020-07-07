import React, { useState } from "react";
import Layout from "./Layout";
import products from "../assets/product.json";
import { Star, StarBorder, Favorite } from "@material-ui/icons";

const ProductDetail = () => {
  const [product, setProduct] = useState(
    products.filter((el, index) => index < 5)
  );
  const [currentProduct, setCurrentProduct] = useState(product[0].image);
  const [animate,setAnimate]=useState(true)
  return (
    <Layout>
      <div className="detail-container">
        <div className="detail-container-images">
          <div className="image">
            <img
            onAnimationEnd={()=>setAnimate(false)}
              className={animate?"animate":null}
              src={currentProduct}
              alt="a"
            />
          </div>
          <div>
            {product.map((prod) => {
              return (
                <img
                  key={prod.id}
                  className={prod.image === currentProduct ? "active" : null}
                  onClick={() => {
                    setCurrentProduct(prod.image);
                    setAnimate(true)
                  }}
                  src={prod.image}
                  alt="a"
                />
              );
            })}
          </div>
        </div>
        <div className="detail-container-data">
          <h1>Cycle</h1>
          <div className="detail-container-data-price">
            <h2>Current Price:</h2>
            <h2 className="warning">$180</h2>
          </div>
          <div className="detail-container-data-rating">
            <Star />
            <Star />
            <Star />
            <Star />
            <StarBorder className="color" />
            <span>41 reviews</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            dignissimos illo, recusandae beatae labore et non accusamus vitae
            sit deleniti perspiciatis veniam. Hic excepturi et quidem cum omnis,
            nesciunt repudiandae.
          </p>
          <div className="detail-container-data-text">
            <span>78% </span>
            <span className="text">of buyers enjoyed this product!</span>
            <span> (23 votes)</span>
          </div>
          <div className="detail-container-data-size">
            <h3>sizes:</h3>
            <div>
              <h3>s</h3>
              <h3>m</h3>
              <h3>x</h3>
              <h3>xl</h3>
            </div>
          </div>
          <div className="detail-container-data-color">
            <h3>colors:</h3>
            <div className="flex">
            <div className="yellow"></div>
            <div className="green"></div>
            <div className="blue"></div>
            </div>
          </div>
          <div className="detail-container-data-button">
            <button>add to cart</button>
            <i>
              <Favorite />
            </i>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
