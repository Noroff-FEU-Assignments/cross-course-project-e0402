const productsUrl = `https://schoolproject.tech/flowerpower/wp-json/wc/v3/products/?consumer_key=ck_6c90a14e6f8635c6ec35e78ebd8f73b23a0647cc&consumer_secret=cs_f1de37e9ba6d73daacf712e2536c593462ddce89&featured=false`;

async function fetchProducts() {
  try {
    const response = await fetch(productsUrl);
    const products = await response.json();

    console.log(products);

    createProducts(products);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();

function createProducts(products) {
  const productsContainer = document.querySelector(".products_section");

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

const btns = document.querySelectorAll(".category_styling");
const movieProducts = document.querySelectorAll(".product");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;

    console.log(filter);

    movieProducts.forEach((product) => {
      if (filter === "all") {
        product.style.display = "block";
      } else {
        if (product.text.contains(filter)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      }
    });
  });
}
