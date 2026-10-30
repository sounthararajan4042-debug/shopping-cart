let price = 500;
let quantity = 0;

let quantityDisplay = document.getElementById("quantity");
let totalDisplay = document.getElementById("total");

let addButton = document.getElementById("addBtn");
let removeButton = document.getElementById("removeBtn");

function updateCart() {
  let total = price * quantity;

  quantityDisplay.textContent = quantity;
  totalDisplay.textContent = total;
}

addButton.addEventListener("click", function () {
  quantity = quantity + 1;
  updateCart();
});

removeButton.addEventListener("click", function () {
    if (quantity>0){
      quantity = quantity - 1;
      updateCart();
    }
    
});

updateCart();