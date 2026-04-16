const API = "https://dummyjson.com/products";
const box = document.getElementById("main__API");
const input = document.getElementById("input2");

let allProducts = [];

fetch(API)
  .then(res => res.json())
  .then(data => {
    allProducts = data.products;
    showProducts(allProducts);
  });

function showProducts(products){
  box.innerHTML = "";

  products.slice(0,15).forEach(p => {

    const card = document.createElement("div");
    card.classList.add("productss");

    card.innerHTML = `
    
    <div class="discount">${Math.ceil(p.discountPercentage)}%</div>

    <img src="${p.thumbnail}" class="product-img">

    <p class="category">${p.category}</p>

    <h4 class="title">${p.title}</h4>

   
<div class="flex8">
     <div class="price-box">
        <span class="price">$${p.price}</span>
        <span class="old">$${Math.floor(p.price*1.2)}</span>
    </div>

    <button class="add"><img src="image/Vector (9).png" alt="Vector">Add</button>
</div>
    
    `;

    box.appendChild(card);
  });
}



input.addEventListener("input", () => {

  const value = input.value.toLowerCase();

  const filtered = allProducts.filter(p =>
    p.title.toLowerCase().includes(value)
  );

  showProducts(filtered);

});