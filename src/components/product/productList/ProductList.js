import React, {useEffect, useState} from 'react'
import styles from './ProductList.module.scss';
import {BsFillGridFill} from 'react-icons/bs';
import {FaListAlt} from 'react-icons/fa';
import Search from '../../search/Search';
import ProductItem from "../productItem/ProductItem";
import { productData } from '../productItem/productData';
import { useDispatch, useSelector } from "react-redux";
import { FILTER_BY_SEARCH,selectFilteredProducts } from '../../../redux/filterSlice/filterSlice';


// productData
const ProductList = ({products}) => {
    const [grid, setGrid] = useState(true);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
  // const filteredProducts = useSelector(selectFilteredProducts)

  //   useEffect (() =>  {
  //       dispatch(FILTER_BY_SEARCH({productData,search}))
  //   },[dispatch, productData,search]);

  return (
    <div className={styles['product-list']} id='product'>
        <div className={styles.top}>
            <div className={styles.icons}>
                <BsFillGridFill size={22} color='orangered' onClick={() => setGrid(true)}/>
                <FaListAlt size={24} color='#00066d4' onClick={() => setGrid(false)}/>
           <p><b>10</b> Products found.</p>
           {/* {filteredProducts.length} */}
            </div>
            {/* search icon */}
            <div>
                <Search value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            {/* sort product */}
            <div className={styles.sort}>
                <label>sort by:</label>
               <select>
                <option value='latest'>Latest</option>
                <option value='lowest-price'>Lowest Price</option>
                <option value='highest-price'>Highest Price</option>
                <option value='a-z'>A - Z</option>
                <option value='z-a'>Z - A</option>
               </select>
            </div>
        </div>
       {/* commented */}
    <div className={grid ? `${styles.grid}` : `${styles.list}`}>
        
{/* {productData.length === 0 ? (
  <p>No product found.</p>
) : ( */}
  <>
  {/* //filteredProducts */}
  {productData.map((product) => {
   return (
      <div key={product.id}>
         <ProductItem {...product} grid={grid} product={product} />
     </div>
      );
    }
  
  
)}
</>

</div>
    </div>
  )
}

export default ProductList


