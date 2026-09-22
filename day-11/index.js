async function getProducts() {

  const response = await fetch("https://dummyjson.com/products");

  const data = await response.json();

  console.log(data);

  const productsDiv = document.getElementById("products");

  data.products.forEach((product) => {

    productsDiv.innerHTML += `
      <div class="product">

        <img src="${product.thumbnail}" alt="${product.title}">

        <h2>${product.title}</h2>

        <p>${product.description}</p>

        <h3>$${product.price}</h3>

      </div>
    `;

  });
}

getProducts();