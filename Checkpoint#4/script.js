

var itemPriceElements = document.getElementsByClassName("itemPrice");
var quantityElements = document.getElementsByClassName("quantity");
var totalPriceElement = document.getElementById("totalPrice");
var decreaseButtons = document.getElementsByClassName("decreaseButton");
var increaseButtons = document.getElementsByClassName("increaseButton");
var itemContainers = document.querySelectorAll('.quantity-container');


// Pour Mettre à jour le total
function updateTotal() {
  var total = 0;
  for (var i = 0; i < itemPriceElements.length; i++) {
    var itemPrice = parseFloat(itemPriceElements[i].textContent.replace("$", ""));
    var quantity = parseInt(quantityElements[i].textContent);
    total += itemPrice * quantity;
  }
  totalPriceElement.textContent = "$" + total;
}

// je vais ajouter des écouteurs d'événements aux boutons "Moins" et "Plus" de chaque article
for (var i = 0; i < decreaseButtons.length; i++) {
  decreaseButtons[i].addEventListener("click", function() {
    var quantityElement = this.parentNode.querySelector(".quantity");
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
      updateTotal();
    }
  });
}



for (var i = 0; i < increaseButtons.length; i++) {
    increaseButtons[i].addEventListener("click", function() {
      var quantityElement = this.parentNode.querySelector(".quantity");
      var quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotal();
    });
  }

  // Remove an item
function removeItem(itemContainer) {
    itemContainer.remove();
    updateTotal();
  }
  
  // Add event listeners to remove buttons
  var removeButtons = document.getElementsByClassName("removeButton");
  for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", function() {
      var itemContainer = this.parentNode.parentNode;
      removeItem(itemContainer);
    });
  }

  
  var heartButtons = document.getElementsByClassName("heartButton");


  
  
  
  
  






