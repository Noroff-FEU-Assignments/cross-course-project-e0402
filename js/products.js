const url = "https://schoolproject.tech/flowerpower/wp-json/wc/store/products";

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const fetchResults = await response.json;
    console.log(fetchResults);
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
