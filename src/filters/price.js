import { getElement } from "../utils.js";
import display from "../displayProducts.js";


const setupPrice = (store) => {
   const priceInput = getElement('.price-filter');
   const priceValue = getElement('.price-value');

   let maxPrice = store.map((product) => product.prices);
   maxPrice = Math.max(...maxPrice);
   maxPrice = Math.ceil(maxPrice / 10);
   priceInput.max = maxPrice;
   priceInput.min = 0;
   priceValue.textContent = `Value: $${maxPrice}`

   priceInput.addEventListener('input', function() {
       const value = parseInt(priceInput.value);
       priceValue.textContent = `Value : $${value}`
       let newStore = store.filter((product) => product.prices / 10 <= value)
       display(newStore, getElement('.products-container'), true)
        if(newStore.length < 1) {
            const products = getElement('.products-container')
            products.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`
        }
   })
}

export default setupPrice;