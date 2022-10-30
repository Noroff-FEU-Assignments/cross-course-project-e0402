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
  const categoryTitleOne = document.querySelector(".delete-one");
  const categoryTitleTwo = document.querySelector(".delete-two");

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

    const filterButtonOne = document.querySelector(".filter-button-one");
    const filterButtonTwo = document.querySelector(".filter-button-two");
    const filterButtonThree = document.querySelector(".filter-button-three");
    const filterButtonFour = document.querySelector(".filter-button-four");
    const filterButtonFive = document.querySelector(".filter-button-five");
    const btnOne = document.getElementById("btn-one");
    const btnTwo = document.getElementById("btn-two");
    const btnThree = document.getElementById("btn-three");
    const btnFour = document.getElementById("btn-four");
    const btnFive = document.getElementById("btn-five");

    btnOne.addEventListener("click", function onClick() {
      btnOne.style.backgroundColor = "#373736";
      btnOne.style.color = "white";
    });

    btnTwo.addEventListener("click", function onClick() {
      btnTwo.style.backgroundColor = "#373736";
      btnTwo.style.color = "white";
    });

    btnThree.addEventListener("click", function onClick() {
      btnThree.style.backgroundColor = "#373736";
      btnThree.style.color = "white";
    });

    btnFour.addEventListener("click", function onClick() {
      btnFour.style.backgroundColor = "#373736";
      btnFour.style.color = "white";
    });

    btnFive.addEventListener("click", function onClick() {
      btnFive.style.backgroundColor = "#373736";
      btnFive.style.color = "white";
    });

    function checkNameOne(product) {
      return product.name === "Lorem (Drama)";
    }

    function checkNameTwo(product) {
      return product.name === "Lorem (Comedy)";
    }

    function checkNameThree(product) {
      return product.name === "Lorem (Action)";
    }

    function checkNameFour(product) {
      return product.name === "Lorem (Sci-fi)";
    }

    function checkNameFive(product) {
      return product.name === "Lorem (History)";
    }

    filterButtonOne.onclick = function filterMoviesOne() {
      const filteredMoviesOne = products.filter(checkNameOne);
      featuredProductsContainer.innerHTML = "";
      categoryTitleOne.innerHTML = "Drama";
      categoryTitleTwo.innerHTML = "";
      createProducts(filteredMoviesOne);
    };

    filterButtonTwo.onclick = function filterMoviesTwo() {
      const filteredMoviesTwo = products.filter(checkNameTwo);
      featuredProductsContainer.innerHTML = "";
      categoryTitleOne.innerHTML = "Comedy";
      categoryTitleTwo.innerHTML = "";
      createProducts(filteredMoviesTwo);
    };

    filterButtonThree.onclick = function filterMoviesThree() {
      const filteredMoviesThree = products.filter(checkNameThree);
      featuredProductsContainer.innerHTML = "";
      categoryTitleOne.innerHTML = "Action";
      categoryTitleTwo.innerHTML = "";
      createProducts(filteredMoviesThree);
    };

    filterButtonFour.onclick = function filterMoviesFour() {
      const filteredMoviesFour = products.filter(checkNameFour);
      featuredProductsContainer.innerHTML = "";
      categoryTitleOne.innerHTML = "Sci-fi";
      categoryTitleTwo.innerHTML = "";
      createProducts(filteredMoviesFour);
    };

    filterButtonFive.onclick = function filterMoviesFive() {
      const filteredMoviesFive = products.filter(checkNameFive);
      featuredProductsContainer.innerHTML = "";
      categoryTitleOne.innerHTML = "History";
      categoryTitleTwo.innerHTML = "";
      createProducts(filteredMoviesFive);
    };
  });
}
