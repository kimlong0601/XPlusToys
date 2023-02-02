import React , { useState, useCallback, useEffect, useRef } from 'react'
import Checkbox from '../components/Common/Checkbox';
import productData from '../data/products';
import ProductCard from './../components/ProductsComponent/productCard';
import season from './../data/product-season';
import Button from '../components/Common/Button';

const Products = () => {

  const initFilter = {
    season: [],
  }

  const productsList = productData.getAllProducts()

  const [products,setProducts] = useState(productsList)

  const [filter, setFilter] = useState(initFilter)

  const filterSelect = (type, checked, item) =>{
    if(checked){
      switch(type){
        case "SEASON": 
            setFilter({...filter, season: [...filter.season, item.season]})
            break
          default:
      }
    }else{
      switch(type){
        case "SEASON": 
            const newSeason = filter.season.filter(e => e !== item.season)
            setFilter({...filter, season: newSeason})
            break
        
        default: 
      }
    }
  }

  const updateProducts = useCallback(
    () => {
      let temp = productsList

      if(filter.season.length > 0){
        temp = temp.filter(e => filter.season.includes(e.season))
      }


      setProducts(temp)
    },
    [filter, productsList]
  )

  useEffect(() => {
    updateProducts()
  }, [updateProducts])

  const productRef = useRef(null)
  const show = () => productRef.current.classList.toggle('active')

  return (
    <div className="product">
      <div className="container">
          <div className="product-container">
              <div className="product-filter" ref={productRef}>
                  <div className="product-filter__close" onClick={() => show()}>
                    <i class='bx bx-left-arrow-alt'></i>
                  </div>
                  <div className="product-filter__widget">
                      <div className="product-filter__widget__title">
                          Season
                      </div>
                      <div className="product-filter__widget__content">
                        {
                          season.map((item,index) => (
                            <div key={index} className="product-filter__widget__content__item">
                              <Checkbox
                                label={item.display}
                                onChange={(input) => filterSelect("SEASON", input.checked, item)}
                              />
                            </div>
                          ))
                        }
                      </div>
                  </div>

              </div>
              <div className="product-filter__toggle" >
                <Button styleClass='btn-primary-sm' value='Filter' onClick={() => show()}/>
              </div>
              <div className="product-content">
                
                {
                  products.map((item,index) => (
                    <ProductCard
                      key={index}
                      image={item.image}
                      title={item.title}
                      price={Number(item.price)}
                      slug={item.slug}
                      id={item.id}
                    />
                  ))
                }
              </div>
          </div>
      </div>
    </div>
  )
}

export default Products