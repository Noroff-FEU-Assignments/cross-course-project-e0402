const url = "https://schoolproject.tech/flowerpower/wp-json/wc/store/products";
const productContainer = document.querySelector(".product");

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const fetchResults = await response.json();
    console.log(fetchResults);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();

function createHTML(product) {
  product.forEach(function (product) {
    productContainer.innerHTML = `<div class="product>
            <img src="${product.image[0].src}" alt="${product.name}">
        </div>`;
  });
}