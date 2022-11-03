const productsUrl = `https://schoolproject.tech/flowerpower/wp-json/wc/v3/products/?consumer_key=ck_6c90a14e6f8635c6ec35e78ebd8f73b23a0647cc&consumer_secret=cs_f1de37e9ba6d73daacf712e2536c593462ddce89&featured=false`;

async function fetchProducts() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    console.log(products);

    createProducts(products);
    handleCategoryButtons(products);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();

function createProducts(products) {
  const productsContainer = document.querySelector(".products_section");

  productsContainer.innerHTML = "";

  products.forEach(function (product) {
    productsContainer.innerHTML += `<div class="product-container">
	                                  <div class="product">
	                                    <img src="${product.images[0].src}" alt="Woman in a white dress wearing a tiara in front of a waterfall" class="product_image" />
	                                    <h4>${product.name}</h4>
	                                    <p class="center_product-info_two">Price: ${product.price} NOK</p>
	                                    <a href="product-info.html?id=${product.id}" class="view-info_button">View info</a>
	                                  </div>
	                                </div>`;
  });
}

let buttons = document.querySelectorAll(".category_styling");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove(".category_styling_two"));
    this.classList.add(".category_styling_two");
  });
});

function handleCategoryButtons(allProducts) {
  const btns = document.querySelectorAll("button");

  if (btns.length === 0) {
    return console.log("No category buttons found");
  }

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
      const filter = e.target.dataset.filter;
      const categoryTitle = document.querySelector(".category-title");

      categoryTitle.innerHTML = e.target.dataset.filter;

      console.log(filter);
      const filteredProducts = handleCategoryFiltering(allProducts, filter);

      createProducts(filteredProducts);
    });
  }
}

function handleCategoryFiltering(allProducts, filter) {
  const filteredProducts = allProducts.filter(function (product) {
    if (product.categories.some((category) => category.name === filter)) {
      return true;
    }
  });

  console.log(filteredProducts);

  return filteredProducts;
}
