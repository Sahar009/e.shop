import styles from "./ProductDetails.module.scss";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import spinnerImg from "../../../assets/loader.gif";
import ProductItem from "../productItem/ProductItem";
import Card from '../../card/Card';
import { productData } from "../productItem/productData";
const ProductDetails = () => {
  
  const [product, setProduct] = useState();
  
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <div>
          <Link to="/#products">&larr; Back To Products</Link>
        </div>
        
        <Card cardClass={styles.list}>
        {/* {productData.map((product) => {
        return(
          <Card cardClass={styles.list}>
            <Link to={`/product-details/${product.id}`}>
              <div className={styles.img}>
                <img src={product.image} alt={product.name} />
              </div>
            </Link>
            <div className={styles.content}>
              <div className={styles.details} >
                <p>{product.price}</p>
                <h4>{product.name}</h4>
              </div>
              <p className={styles.desc}>{product.desc}</p>
              <button className="--btn --btn-danger">
                Add To Cart
              </button>
            </div>
          </Card>
        )
      })} */}
          {/* <div className={styles.details}>
            <div className={styles.img}>
              <img src={image} alt={product.name} />
            </div>
            <div className={styles.content}>
              <div className={styles.details}>
                <p>{price}</p>
                <h4>{name}</h4>
              </div>
              <p className={styles.desc}>{desc}</p>
            </div>
          </div> */}
          <button className="--btn --btn-danger">ADD TO CART</button>
        </Card>
      </div>
    </section>
  )
}

export default ProductDetails