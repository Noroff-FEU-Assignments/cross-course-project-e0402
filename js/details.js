const url =
  "https://schoolproject.tech/flowerpower/wp-json/wc/v3/products/${id}?consumer_key=ck_6c90a14e6f8635c6ec35e78ebd8f73b23a0647cc&consumer_secret=cs_f1de37e9ba6d73daacf712e2536c593462ddce89&featured=true";
const productContainer = document.querySelector(".featured_section");

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

function createHTML(featured_section) {
  featured_section.forEach((product) => {
    productContainer.innerHTML += `<div class="product-container_two">
        <div class="product_three"><img src="images/trailer.jpeg" alt="A white large play icon against a dark grey background" class="product_image_three"/>
            <h3 class="center_product-info">${product.name}</h3>
            <p>${product.description}</p>
            <h4><span class="regular-text">Price:</span>${product.price}</h4>
            <div class="button_center">
              <a href="log-in_two.html" class="view-info_button_three">Buy now</a>
            </div>
        </div>
    </div>`;
  });
}
