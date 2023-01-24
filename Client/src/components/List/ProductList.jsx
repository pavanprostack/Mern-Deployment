import Axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../List/list.scss'

const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://joyous-tiara-deer.cyclic.app/product/all`
    Axios.get(url).then((response) => {
      setProducts(response.data);
    }).catch(() => { })
  }, [])

  return <>
    <div className="container mt-5">
      {/* <pre>{JSON.stringify(products)}</pre> */}
      <div className="row">
        {
          products.length > 0 ? <>
            {
              products.map((product)=>{
                return <div className="col-3" key={product.id}>
                  <div className="card-list">
                    <div className="card-header">
                      <img src={product.image} alt="img" width='70px'/>
                    </div>
                    <div className="card-body">
                      <ul className='list-group'>
                        <li className='list-group-item'>Name : <b>{product.name}</b></li>
                        <li className='list-group-item'>Price : <b>{product.price}</b></li>
                        <li className='list-group-item'>Qty : <b>{product.qty}</b></li>
                      </ul>
                    </div>
                  </div>
                </div>
              })
            }
          </> : null
        }
      </div>
    </div>
  </>
}

export default ProductList
