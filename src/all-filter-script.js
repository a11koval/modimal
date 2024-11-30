document.addEventListener("DOMContentLoaded", () => {
    const filters = {
      sort: null,
      size: [],
    };
  
    const products = [
      { id: 1, name: "Chill Wrap Top", price: 120, size: "s" },
      { id: 2, name: "Easy In Short", price: 130, size: "m" },
      { id: 3, name: "Boss Pullover", price: 160, size: "l" },
    ];
  
    const productList = document.getElementById("product-list");
  
    function renderProducts() {
      let filteredProducts = [...products];
  
      
      if (filters.size.length) {
        filteredProducts = filteredProducts.filter((product) =>
          filters.size.includes(product.size)
        );
      }
  
      
      if (filters.sort) {
        if (filters.sort === "price-low-high") {
          filteredProducts.sort((a, b) => a.price - b.price);
        } else if (filters.sort === "price-high-low") {
          filteredProducts.sort((a, b) => b.price - a.price);
        }
      }
  

      productList.innerHTML = filteredProducts
        .map(
          (product) =>
            `<div class="product">
              <h5>${product.name}</h5>
              <p>Price: $${product.price}</p>
            </div>`
        )
        .join("");
    }
  
    function updateFilters(event) {
      const { name, value, type, checked } = event.target;
  
      if (name === "sort") {
        filters.sort = value;
      } else if (name === "size") {
        if (checked) {
          filters.size.push(value);
        } else {
          filters.size = filters.size.filter((size) => size !== value);
        }
      }
  
      renderProducts();
    }
  
    document.querySelectorAll(".filters input").forEach((input) =>
      input.addEventListener("change", updateFilters)
    );
  
    renderProducts();
  });