import {
    getElement
} from "../utils.js";
import display from "../displayProducts.js";

const setupCategory = (store) => {
    let category = ['all', ...new Set(store.map((product) => product.category))]
    const categoryDOM = getElement('.companies')
 
    categoryDOM.innerHTML = category.map((categories) => {
        return `
      <button class="company-btn">${categories}</button>
      `
    }).join('');
    categoryDOM.addEventListener('click', function (e) {
        const element = e.target;
        if (element.classList.contains('company-btn')) {
            let newStore = [];
            if (element.textContent === 'all') {
                newStore = [...store]
            } else {
              newStore = store.filter((product) => product.category === e.target.textContent)
            }
            display(newStore, getElement('.products-container'), true)
        }
    })
}

export default setupCategory

