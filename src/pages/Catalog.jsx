import React, { useEffect,useCallback, useState,useRef } from 'react'


import catalogData from '../data/catalog';
import CatalogCard from '../components/CatalogComponent/CatalogCard';
import catalogName from '../data/catalog-name';
import Checkbox from './../components/Common/Checkbox';
import rare from '../data/catalog-rarity';
import colors from '../data/catalog-color';
import InfinityList from '../components/Common/InfinityList';
import Button from './../components/Common/Button';


const Catalog = () => {

  const initFilter = {
    catalogName: [],
    rare: [],
    color: []
  }

  const catalogsList = catalogData.getAllCatalogs()

  const [catalogs, setCatalogs] = useState(catalogsList)

  const [filter, setFilter] = useState(initFilter)

 
  const filterSelect = (type, checked, item) =>{
    if(checked){
      switch(type){
        case "CATEGORY": 
            setFilter({...filter, catalogName: [...filter.catalogName, item.catalogSlug]})
            break
        case "RARE":
            setFilter({...filter, rare: [...filter.rare, item.rare]})
            break
        case "COLOR":
            setFilter({...filter, color: [...filter.color, item.color]})
            break
          default:
      }
    }else{
      switch(type){
        case "CATEGORY": 
            const newCategory = filter.catalogName.filter(e => e !== item.catalogSlug)
            setFilter({...filter, catalogName: newCategory})
            break
        case "RARE":
            const newRare = filter.rare.filter(e => e !== item.rare)
            setFilter({...filter, rare: newRare})
            break
        case "COLOR": 
            const newColor = filter.color.filter(e => e !== item.color)
            setFilter({...filter, color: newColor})
            break
        
        default: 
      }
    }
  }

  const updateCatalogs = useCallback(
    () => {
      let temp = catalogsList

      if(filter.catalogName.length > 0){
        temp = temp.filter(e => filter.catalogName.includes(e.catalogSlug))
      }

      if(filter.rare.length > 0){
        temp = temp.filter(e => filter.rare.includes(e.rare))
        // temp = temp.filter(e => {
        //     const check = e.rare.find(rare => filter.rare.includes(rare))
        //     return check !== undefined
        // })
      }

      if(filter.color.length > 0){
        temp = temp.filter(e => filter.color.includes(e.colors))
        // temp = temp.filter(e => {
        //     const check = e.colors.find(color => filter.color.includes(color))
        //     return check !== undefined
        // })
      }

      setCatalogs(temp)
    },
    [filter, catalogsList]
  )

  useEffect(() => {
    updateCatalogs()
  }, [updateCatalogs])

  const filterRef = useRef(null)
  const showFilter = () => filterRef.current.classList.toggle('active')
    
  
  return (
    
    <div className="catalog">

        <div className="container">
          
            <div className="catalog-container">
              <div className="catalog-filter" ref={filterRef}>

                <div className="catalog-filter__close" onClick={() => showFilter()}>
                  <i class='bx bx-left-arrow-alt'></i>
                </div>
                <div className="catalog-filter__widget">
                    <div className="catalog-filter__widget__title">
                      Name Cyclop
                    </div>
                    <div className="catalog-filter__widget__content">
                      {
                        catalogName.map((item,index) => (
                          <div key={index} className="catalog-filter__widget__content__item">
                            <Checkbox
                              label={item.display}
                              onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                              
                            />
                          </div>
                        ))
                      }
                    </div>
                </div>

                <div className="catalog-filter__widget">
                    <div className="catalog-filter__widget__title">
                      Rarity
                    </div>
                    <div className="catalog-filter__widget__content">
                      {
                        rare.map((item,index) => (
                          <div key={index} className="catalog-filter__widget__content__item">
                            <Checkbox
                              label={item.display}
                              onChange={(input) => filterSelect("RARE", input.checked, item)}
                              
                            />
                          </div>
                        ))
                      }
                    </div>
                </div>

                <div className="catalog-filter__widget">
                    <div className="catalog-filter__widget__title">
                      Colors
                    </div>
                    <div className="catalog-filter__widget__content">
                      {
                        colors.map((item,index) => (
                          <div key={index} className="catalog-filter__widget__content__item">
                            <Checkbox
                              label={item.display}
                              onChange={(input) => filterSelect("COLOR", input.checked, item)}
                              
                            />
                          </div>
                        ))
                      }
                    </div>
                </div>

              </div>
              <div className="catalog-filter__toggle" >
                <Button styleClass='btn-primary-sm' value='Filter' onClick={() => showFilter()}/>
              </div>
              <div className="catalog-content">
                <InfinityList
                  data={catalogs}
                />
                {/* {
                  catalogs.map((item,index) => (
                    <CatalogCard
                      key={index}
                      video={item.video}
                    />
                  ))
                } */}
              </div>

            </div>

        </div>
    </div>
  )
}

export default Catalog