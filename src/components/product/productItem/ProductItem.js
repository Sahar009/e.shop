import React from 'react'
import Card from '../../card/Card'
import styles from './ProductItem.module.scss';
import {Link} from 'react-router-dom'
import {productData} from './productData';

const ProductItem = () => {
  const shortenText = (text,n) => {
    if (text.length> n){
        const shortenedText = text.substring(0,n).concat('...')
        return shortenedText;
    }
    return text
  }
  return (
    <>
      {productData.map((product) => {
        return(
          <Card cardClass={styles.grid}>
            <Link to={`/product-details/${product.id}`}>
              <div className={styles.img}>
                <img src={product.image} alt={product.name} />
              </div>
            </Link>
            <div className={styles.content}>
              <div className={styles.details} >
                <p>{product.price}</p>
                <h4>{shortenText(product.name,18)}</h4>
              </div>
              <p className={styles.desc}>{shortenText(product.desc,200)}</p>
              <button className="--btn --btn-danger">
                Add To Cart
              </button>
            </div>
          </Card>
        )
      })}
    </>
  )
}

export default ProductItem