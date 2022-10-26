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
    console.log(product);
    productContainer.innerHTML += `<div>
        <h4>${product.name}</h4>
        <div class="product featured-product_background">
              <a href="product-info.html" class="view-info_button">View info</a>
            </div>
    </div>`;
  });
}
