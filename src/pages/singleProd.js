// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { getElement, formatPrice } from '../utils.js';
import { store } from '../store.js'

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');
const singleProd = getElement('.single-product')


let productId;
const singleUrl = 'https://62cd95fca43bf780085b5573.mockapi.io/api/v1/Pizzeria';


window.addEventListener('DOMContentLoaded', async function () {
  const urlId = window.location.search
  const response = await fetch(`${singleUrl}${urlId}`)
  const data = await response.json();

  const singlePageFunc = data.map((item) => {
    const { id, name, prices, img, category, topping } = item
    productId = id
    document.title = `${name.toUpperCase()}`
    imgDOM.src = img
    titleDOM.textContent = name
    companyDOM.textContent = `${category}`
    priceDOM.textContent = formatPrice(prices)
    descDOM.textContent = topping
    return productId
  })
  loading.style.display = 'none'
})


cartBtn.addEventListener('click', function () {
  addToCart(productId)
})


