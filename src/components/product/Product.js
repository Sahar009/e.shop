import React from 'react'
import ProductList from './productList/ProductList'
import styles from "./Product.module.scss";
import ProductFilter from './productFilter/ProductFilter';
const Product = () => {
  // const products = useSelector(selectProducts);
  return (
    
    <section>
    <div className={`container ${styles.product}`}>
    <aside className={styles.filter}>
      <ProductFilter/>
    </aside>
    <div className={styles.content}>
      <ProductList  /> 
      {/* products={products} */}
      </div>
    </div>
    </section>
  )
}

export default Product