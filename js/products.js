const url = "https://schoolproject.tech/flowerpower/wp-json/wc/store/products";
const productContainer = document.querySelector(".product");

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const fetchResults = await response.json();
    createHTML(fetchResults);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();

function createHTML(product) {
  product.forEach(function (product) {
    productContainer.innerHTML += `<div>
        <img src="${product.image[0].src}" alt="${product.name}">
        <h4>${product.name}</h4>
    </div>`;
  });
}
