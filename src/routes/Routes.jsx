import Home from './../pages/Home';
import About from './../pages/About';
import Products from './../pages/Products';
import Craft from './../pages/Craft';
import Service from './../pages/Service';
import Catalog from './../pages/Catalog';
import ProductDetail from './../pages/ProductDetail';
import Cart from '../pages/Cart';




const publicRoutes = [
    
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '/packs', component: Products},
    {path: '/packs/:id', component: ProductDetail},
    {path: '/cart', component: Cart},
    {path: '/catalog', component: Catalog},
    {path: '/craft', component: Craft},
    {path: '/service', component: Service},
]

const privateRoutes = [

]

export { publicRoutes , privateRoutes };