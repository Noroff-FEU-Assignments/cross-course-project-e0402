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
  products_section.forEach((product) => {
    const image = product.images[0].src;
    productContainer.innerHTML += `<div class="product-container">
        <div>
            <div class="product_image" style="background-image:url('${image}');" alt="${product.name}"></div>
            <h4>${product.name}</h4>
            <a href="product-info.html" class="view-info_button">View info</a>
        </div>
    </div>`;
  });
}
