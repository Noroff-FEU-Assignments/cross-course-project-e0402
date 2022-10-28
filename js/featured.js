const url =
  "https://schoolproject.tech/flowerpower/wp-json/wc/v3/products?consumer_key=ck_6c90a14e6f8635c6ec35e78ebd8f73b23a0647cc&consumer_secret=cs_f1de37e9ba6d73daacf712e2536c593462ddce89&featured=true";
const detailsContainer = document.querySelector(".products_section_three");

async function fetchDetails() {
  try {
    const response = await fetch(url);
    const fetchResultsss = await response.json();
    createHTML(fetchResultsss);
  } catch (error) {
    console.log(error);
  }
}

fetchDetails();

function createHTML(products_section_three) {
  products_section_three.forEach((product) => {
    detailsContainer.innerHTML += `<div class="product-container">
        <div class="product featured-product_background">
            <img src="${product.images[0].src}" class="product_image" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="center-price">Price: ${product.price} NOK</p>
            <a href="product-info.html" class="view-info_button">View info</a>
        </div>
    </div>`;
  });
}
