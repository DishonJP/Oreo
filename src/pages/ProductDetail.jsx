import React, { useState } from "react";
import Layout from "./Layout";
import products from "../assets/product.json";
import { Star, StarBorder, Favorite } from "@material-ui/icons";
import { connect } from "react-redux";

const ProductDetail = (props) => {
  console.log(props.currentProduct);
  
  const [product, setProduct] = useState(
    products.filter((el, index) => index < 5)
  );
  const [currentProduct, setCurrentProduct] = useState(props.currentProduct);
  const [animate, setAnimate] = useState(true);
  const [current, setCurrent] = useState("a");
  const setActive = (value) => {
    if (value === current) {
      return "active-div";
    }
    return null;
  };
  const dynamicContent = (value) => {
    switch (value) {
      case "a":
        return (
          <div className="description">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto itaque accusamus ullam delectus excepturi cupiditate
              sit corporis aliquid quidem aut quae, doloremque veritatis eius
              molestiae, consequuntur dolores nobis amet dignissimos.
            </span>
            <span className="description-margin">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
              voluptatem nulla nesciunt eum accusantium impedit adipisci quasi
              quae nam, accusamus omnis perspiciatis cum, reiciendis molestias
              beatae vel. Eos, beatae corrupti?
            </span>
          </div>
        );
      case "b":
        return (
          <div className="review">
            <img src="../assets/avatar2.jpg" alt="" />
            <div>
              <h4>Hossein Shams</h4>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Officiis distinctio nostrum minima culpa nemo totam
                voluptatibus.
              </span>
              <div>
                <div>IPHONE 8</div>
                <div className="detail-container-data-rating">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarBorder className="color" />
                </div>
              </div>
            </div>
          </div>
        );
      case "c":
        return (
          <div className="about">
            <h6>WHERE DOES IT COME FROM?</h6>
            <span>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </span>
          </div>
        );

      default:
        return null;
    }
  };
  return (
    <Layout>
      <div className="detail-container">
        <div className="detail-container-images">
          <div className="image">
            <img
              onAnimationEnd={() => setAnimate(false)}
              className={animate ? "animate" : null}
              src={currentProduct.image}
              alt="a"
            />
          </div>
          <div>
            {product.map((prod) => {
              return (
                <img
                  key={prod.id}
                  className={prod.image === currentProduct.image ? "active" : null}
                  onClick={() => {
                    setCurrentProduct(prod);
                    setAnimate(true);
                  }}
                  src={prod.image}
                  alt="a"
                />
              );
            })}
          </div>
        </div>
        <div className="detail-container-data">
          <h1>{currentProduct.name}</h1>
          <div className="detail-container-data-price">
            <h2>Current Price:</h2>
          <h2 className="warning">${currentProduct.price}</h2>
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
      <section className="session-one">
        <div className={setActive("a")} onClick={() => setCurrent("a")}>
          Description
        </div>
        <div className={setActive("b")} onClick={() => setCurrent("b")}>
          Review
        </div>
        <div className={setActive("c")} onClick={() => setCurrent("c")}>
          About
        </div>
      </section>
      <section className="session-two">{dynamicContent(current)}</section>
    </Layout>
  );
};
const mapStateToProps=state=>{
  return{
    currentProduct:state.currentProduct
  }
}
export default connect(mapStateToProps)(ProductDetail);
