import React from 'react'
import Card from '../../card/Card'
import styles from './ProductItem.module.scss';
import {Link} from 'react-router-dom'


const ProductItem = (product, grid, id,name, price, desc,imageURL ) => {
  return (
    <Card cardClass={grid ? `${styles.grid}` : `${styles.list}`}>
       <Link to={`/product-details`}>
       
        <div className={styles.img}>

            <img src={imageURL} alt={name}/>
        </div>
        </Link>
        <div className={styles.content}>
        <div className={styles.details}>
          <p>{`$${price}`}</p>
          <h4>{name}</h4>
        </div>
        {!grid && <p className={styles.desc}>{desc}</p>}

        <button
          className="--btn --btn-danger"
         
        >
          Add To Cart
        </button>
      </div>
    </Card>
  )
}

export default ProductItem