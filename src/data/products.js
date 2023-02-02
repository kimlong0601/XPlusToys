import pack_1 from '../assets/image/product_ss1_01.png';
import pack_2 from '../assets/image/product_ss1_02.png';
import pack_3 from '../assets/image/product_ss2_01.png';
import pack_4 from '../assets/image/product_ss2_02.png';


const productList = [
    {
        id: "1",
        title: "XPlus Space Cyclop Season 1 Standard Pack",
        price: "9.99",
        quantity: "2",
        image: pack_1,
        season: "season-1",
        slug: "season-1-pack-standard"
    },
    {
        id: "2",
        title: "XPlus Space Cyclop Season 1 Prenium Pack",
        price: "24.99",
        quantity: "2",
        image: pack_2,
        season: "season-1",
        slug: "season-1-pack-prenium"
    },
    {
        id: "3",
        title: "XPlus Space Cyclop Season 2 Standard Pack",
        price: "9.99",
        quantity: "2",
        image: pack_3,
        season: "season-2",
        slug: "season-2-pack-standard"
    },
    {
        id: "4",
        title: "XPlus Space Cyclop Season 2 Prenium Pack",
        price: "24.99",
        quantity: "2",
        image: pack_4,
        season: "season-2",
        slug: "season-2-pack-prenium"
    }
]

const getAllProducts = () => productList

const getProductById = (id) => productList.find(e => e.id === id)
const productData = {
    getAllProducts,
    getProductById
}

export default productData