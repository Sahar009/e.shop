import styles from "./ProductDetails.module.scss";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import spinnerImg from "../../../assets/loader.gif";
import ProductItem from "../productItem/ProductItem";
import Card from '../../card/Card'

const ProductDetails = () => {
  
  const [product, setProduct] = useState(null);
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <div>
          <Link to="/#products">&larr; Back To Products</Link>
        </div>
        
        <Card cardClass={styles.list}>
          {/* <div className={styles.details}>
            <div className={styles.img}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.content}>
              <div className={styles.details}>
                <p>{product.price}</p>
                <h4>{product.name}</h4>
              </div>
              <p className={styles.desc}>{product.desc}</p>
            </div>
          </div> */}
          <button className="--btn --btn-danger">ADD TO CART</button>
        </Card>
      </div>
    </section>
  )
}

export default ProductDetails