const url = "https://schoolproject.tech/flowerpower/wp-json/wc/store/products";
const productContainer = document.querySelector(".products_section");

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

function createHTML(products_section) {
  products_section.forEach(function (product) {
    console.log(product);
    productContainer.innerHTML += `<div class="product-container">
        <div class="product featured-product_background">
            <h4>${product.name}</h4>
            <a href="product-info.html" class="view-info_button">View info</a>
        </div>
    </div>`;
  });
}
