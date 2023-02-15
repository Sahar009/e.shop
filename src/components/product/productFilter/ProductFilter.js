import React from 'react';
import styles from "./ProductFilter.module.scss";

const ProductFilter = () => {
  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select value='all'>
         All
        </select>
        <h4>Price</h4>
        <p>7000</p>
        <div className={styles.price}>
          <input
            type="range"
            name='price'
            min='100'
            max='1000'
          />
        </div>
        <br />
        <button className="--btn --btn-danger" >
          Clear Filter
        </button>
      </div>
    </div>
  )
}

export default ProductFilter