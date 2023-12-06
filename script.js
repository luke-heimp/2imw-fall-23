//https://www.youtube.com/watch?v=18Jvyp60Vbg&t=2473s

document.addEventListener("DOMContentLoaded", function () {
  var opendoor = document.getElementById("opendoor");
  var clickbox = document.getElementById("clickbox");
  var waitsection = document.getElementById("waitsection");
  var knock = document.getElementById("knock");
  var hanginthere = document.getElementById("hanginthere");
  var hanginthere = document.getElementById("hangon");
  var transit = document.getElementById("transit");
  var be = document.getElementById("be");
  var your = document.getElementById("your");
  var cardboardbox = document.getElementById("cardboardbox");
  var loading = document.getElementById("loading");
  var draggable = $("#draggable");
  var draggable = $("#check");
  var windowWidth = $(window).width();
});

$(document).ready(function () {
  console.log("hello!");
  opendoor.style.display = "none"; // Hide the div
  clickbox.style.display = "none"; // Hide the div
  knock.style.display = "none"; // Hide the div
  hanginthere.style.display = "none"; // Hide the div
  hangon.style.display = "none"; // Hide the div
  transit.style.display = "none"; // Hide the div
  be.style.display = "none"; // Hide the div
  your.style.display = "none"; // Hide the div
  cardboardbox.style.display = "none";
  waitsection.style.display = "none";
  check.style.display = "none";
  loading.style.display = "none";
});

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

//cart working js
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//making Function
function ready() {
  //Remove Items From Cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
  //Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  //Add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
  //Purchase Button
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

//Buy Button
function buyButtonClicked() {
  alert("Your order is being placed");
  shopping.style.display = "none";
  displayImagesInBox();
  shopping.style.display = "none";
  cardboardbox.style.display = "none";
  loading.style.display = "block";
  $("#draggable").animate(
    {
      marginLeft: "+=10vw",
    },
    5000
  );

  setTimeout(function () {
    document.getElementById("check").style.display = "block";
  }, 9000);
}

//remove Items From Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
//Quantity Changes
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

//Add to cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  addProductToBox(productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already added this item to your cart");
      return;
    }
  }

  var cartBoxContent = `
        <img src="${productImg}" alt="product1" class="cart-img" />
        <div class="detail-box">
        <div class="cart-product-title">${title}</div>
        <div class="cart-price">${price}</div>
      
        </div>
        <!--Get rid from cart-->
        <i class="fa-solid fa-trash-can cart-remove"></i>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);
}

//  <input type="number" value="1" class="cart-quantity">

//Update Total
function updatetotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  //if price has cents
  total = Math.round(total * 100) / 100;

  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}

var shopping = document.getElementById("shopping");

$("#btn-buy").click(function () {
  shopping.style.display = "none";
});

//
function displayImagesInBox() {
  const cardboardBox = document.querySelector(".cardboardbox");
  const cartBoxes = document.querySelectorAll(".cart-box");
  cardboardBox.innerHTML = "";

  cartBoxes.forEach((box) => {
    const productName = box.querySelector(".cart-product-title").innerText;
    const productImage = box.querySelector(".cart-img");

    const link = document.createElement("a");
    link.href = generateProductLink(productName);
    link.target = "_blank";

    const imgElement = document.createElement("img");
    imgElement.src = productImage.src;
    imgElement.alt = "Product Image";
    imgElement.classList.add("product-in-box");

    link.appendChild(imgElement);
    cardboardBox.appendChild(link);
  });

  cardboardBox.style.display = "flex";
}

//generate links based on the product name
function generateProductLink(productName) {
  switch (productName) {
    case "Exercise 1":
      return "index/index.html";
    case "Exercise 2":
      return "index/E2/Grids-Page.html";
    case "Exercise 3":
      return "index/E3/E3.html";
    case "Exercise 4":
      return "index/E4/flexbox-luke.html";
    case "Exercise 5":
      return "index/E5/index.html";
    case "Exercise 6":
      return "index/E6/index.html";
    case "Exercise 7":
      return "index/E7/index.html";
    case "Exercise 8":
      return "index/E8/index.html";
    case "Exercise 9":
      return "index/E9/index.html";
    case "Exercise 10":
      return "index/E10/index.html";
    case "Project 1":
      return "index/P1/tortoise2.html";
    case "Project 2":
      return "index/P2/p2.html";
    case "Project 3":
      return "index/P37/index.html";
    case "Reading 1":
      return "index/R1/index.html";
    case "Reading 2":
      return "index/R2/index.html";
    case "Reading 3":
      return "index/R3/index.html";
    case "Reading 4":
      return "index/R4/index.html";
    case "Reading 5":
      return "index/R5/index.html";
    case "Resources":
      return "index/Resources/index.html";
    case "Process Docs":
      return "index/Process/index.html";

    default:
      return "#"; // Default link if product name doesn't match
  }
}

$("#text").on("click", function () {
  $(".sky1").toggleClass("sky1-fade");
  $(".sky2").toggleClass("sky2-fade");
  $(".sky3").toggleClass("sky3-fade");
  $(".sky4").toggleClass("sky4-fade");
  $("#night").fadeTo(3900, 0.21);
  $("#night").fadeTo(1930, 0);
  $("#night").fadeTo(1560, 0.21);
  $("#night").fadeTo(1230, 0);
  $("#night").fadeTo(1750, 0.21);
  $("#night").fadeTo(1510, 0);
  $("#night").fadeTo(1810, 0.21);
  $("#night").fadeTo(1980, 0);
  $("#night").fadeTo(2480, 0.21);
  $("#night").fadeTo(3180, 0);
  $("#night").fadeTo(5020, 0.21);
  $("#night").fadeTo(12690, 0);
});

$("#text").click(function () {
  setTimeout(function () {
    $("#door").click(function () {
      $("#door").hide();
      opendoor.style.display = "block";
      clickbox.style.display = "block";
    });
  }, 37000);
});
$("#text").click(function () {
  setTimeout(function () {
    $("#night").hide();
  }, 38000);
});

$("#text").click(function () {
  setTimeout(function () {
    document.getElementById("knock").style.display = "block";
  }, 36000); // 36 seconds in milliseconds
  setTimeout(function () {
    document.getElementById("knock").style.display = "none";
  }, 38000); // 36 seconds in milliseconds
});

$("#text").click(function () {
  setTimeout(function () {
    document.getElementById("hanginthere").style.display = "block";
  }, 29000);
  setTimeout(function () {
    document.getElementById("hanginthere").style.display = "none";
  }, 31000);
});

$("#text").click(function () {
  setTimeout(function () {
    document.getElementById("hangon").style.display = "block";
  }, 19000);
  setTimeout(function () {
    document.getElementById("hangon").style.display = "none";
  }, 22000);
});

$("#text").click(function () {
  setTimeout(function () {
    document.getElementById("transit").style.display = "block";
  }, 10000);
  setTimeout(function () {
    document.getElementById("transit").style.display = "none";
  }, 12000);
});

$("#text").click(function () {
  setTimeout(function () {
    document.getElementById("be").style.display = "block";
  }, 24000);
  setTimeout(function () {
    document.getElementById("be").style.display = "none";
  }, 27000);
});

$("#text").click(function () {
  setTimeout(function () {
    document.getElementById("your").style.display = "block";
  }, 4000);
  setTimeout(function () {
    document.getElementById("your").style.display = "none";
  }, 9000);
});

$("#text").click(function () {
  setTimeout(function () {
    $("#myAudio")[0].play();
  }, 35500); // 36 seconds in milliseconds
});

$("#clickbox").click(function () {
  waitsection.style.display = "none";
  cardboardbox.style.display = "block";
  document.body.style.backgroundColor = "#B0E0E6";
});

$(document).ready(function () {
  var draggable = $("#draggable");
  var windowWidth = $(window).width();

  draggable.draggable({
    axis: "x",
    drag: function () {
      var position = draggable.position().left;
      var divWidth = draggable.width();
      var currentPosition = position + divWidth;

      // Check if the div crosses 75% of the window width
      if ((currentPosition / windowWidth) * 100 > 70) {
        waitsection.style.display = "block";
        loading.style.display = "none";
      } else {
      }
    },
  });
});
