import React from 'react';
import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';




const mainNav = [
  {
    display: 'Home',
    path: '/'
  },
  {
    display: 'Cyclop Lore',
    path: '/about'
  },
  {
    display: 'Packs',
    path: '/packs'
  },
  {
    display: 'Catalog',
    path: '/catalog'
  },
] 




const Header = () => {

  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex(e => e.path === pathname)



  const menuLeft = useRef(null)
  const menuToggle = () => menuLeft.current.classList.toggle('active')

  const searchRef = useRef(null)
  const searchToggle = () => searchRef.current.classList.toggle('active')

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
            <div className="header-title">
              <Link to="/">
                <h1>X Plus</h1>
              </Link>
            </div>
            <div className="menu-toggle" onClick={menuToggle}>
                <i class='bx bx-menu' ></i>
              </div>
            <div className="header-menu" ref={menuLeft}>
              <div className="menu-close" onClick={menuToggle}>
                <i class='bx bx-x'></i>
              </div>
              {
                mainNav.map((item,index) => (
                  <div 
                    key={index}
                    className={`header-menu_item ${index === activeNav ? 'active' : ''}`}
                  >
                      <Link to={item.path}>
                        <span>
                          {item.display}
                        </span>
                      </Link>
                  </div>
                ))
              }
            </div>
            <div className="userSection">
              <i class='bx bx-search' onClick={searchToggle}></i>
              <i class='bx bx-envelope'></i>
              <i class='bx bx-user'></i>
              <Link to={`/cart`}><i class='bx bx-cart' ></i></Link>
            </div>
            <div className="header-search" ref={searchRef}>
              <form action="">
                <input type="text" placeholder='Search'/>
                <button type='submit'><i class='bx bx-search' ></i></button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header