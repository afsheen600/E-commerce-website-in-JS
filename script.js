const proudctsListEl = document.querySelector(".women-products-list");
const switchToWomenBtn = document.querySelector(".switch-to-women-btn");
const switchToKidsBtn = document.querySelector(".switch-to-kids-btn");
const sideBarShadowEl = document.querySelector(".side-bar-shadow");
const sideBarEl = document.querySelector("#sidebar");
const shoppingCartEl = document.querySelector("#shopping-cart");
const wishListEl = document.querySelector("#wish-list");
const wishListItemsEl = document.querySelector(".wish-list__items");
const checkoutAmountEl = document.querySelector('.sidebar__checkout-info');
const checkoutMessageShadowEl = document.querySelector('.checkout-message-shadow');
const productListEl = document.querySelector(".section__1-products");
const checkoutBtnEl = document.querySelector('#sidebar__checkout-btn');
const checkoutConformationMessageEl = document.querySelector('.conform-checkout');
const addToCartBtnEl = document.querySelector(".cart-icon");
const addToWishListBtnEl = document.querySelector(".wishlist-icon");
const sideBarCloseBtnEl = document.querySelector(".sidebar__close-btn");
const addtoWishListBtnEl = document.querySelector("#wish-list");
const shoppingCartList = document.querySelector(".shopping-cart__items");
const shoppingCartItemDeleteBtnEl = document.querySelector( ".cart-item-delete-btn");
const conformationMessageEl = document.querySelector('.conform-checkout__message');




const womenProductsData = [
  {
    productName: "cotton",
    price: 3000,
    image: "/image/img.png-2.webp",
    id: 1,
  },
  {
    productName: "lawn",
    price: 3500,
    image: "/image/img.png-3.webp",
    id: 2,
  },
  {
    productName: "lawn",
    price: 3200,
    image: "/image/img.png-4.webp",
    id: 3,
  },
  {
    productName: "lawn",
    price: 3800,
    image: "/image/img.png-5.webp",
    id: 4,
  },
  {
    productName: "lawn",
    price: 2000,
    image: "/image/saya.png",
    id: 5,
  },
  {
    productName: "lawn",
    price: 4000,
    image: "/image/saya.png3.webp",
    id: 6,
  },

  {
    productName: "lawn",
    price: 2800,
    image: "/image/saya.png4.webp",
    id: 7,
  },

  {
    productName: "lawn",
    price: 4500,
    image: "/image/saya.png2.webp",
    id: 8,
  },
];

const kidsProductsData = [
  {
    productName: "blue frock",
    price: 2000,
    image: "/image/endrob.png",
    id: 9,
  },
  {
    productName: "lawn 2pc",
    price: 3000,
    image: "/image/endrobe.png4.webp",
    id: 10,
  },
  {
    productName: "white cotton",
    price: 4000,
    image: "/image/endrobe.png2.webp",
    id: 11,
  },
  {
    productName: "lawn 2pc",
    price: 2500,
    image: "/image/endrobe.png3.webp",
    id: 12,
  },
  {
    productName: "lawn frock",
    price: 2800,
    image: "/image/boy.png5.webp",
    id: 13,
  },
  {
    productName: "boy's orange polo shirt 2pc",
    price: 4000,
    image: "/image/boys.png3.webp",
    id: 14,
  },

  {
    productName: "cotton ",
    price: 3000,
    image: "/image/boy.png3.webp",
    id: 15,
  },

  {
    productName: "Boy 2pc",
    price: 4000,
    image: "/image/boy.png4.webp",
    id: 16,
  },
];

let cartData = [];
let wishListData = [];
//=================================
// Price culculation
//=================================
let totalAmount = 0;
let discount = 0;
let totalItems = 0;

function handleCalculateAmount(){
  if(cartData.length === 0) {
    totalAmount = discount = totalAmount = 0;
  };
  const price = cartData.reduce((price, el) => price += el.price , 0);
  if(price >= 5000){
    discount = price * 0.10;
  }else{
    discount = 0;
  }
  totalAmount = price - discount;
 totalItems = cartData.length;
}

// =======================================
// View
// =======================================

function clearList() {
  proudctsListEl.innerHTML = "";
}

function renderAmount(){
  checkoutAmountEl.insertAdjacentHTML("afterbegin", `
        <div class="sidebar__checkout-total-items d-flex justify-content-between mb-3"><span>Total items:</span><span>
  ${totalItems}</span></div>
            <div class="sidebar__checkout-discount d-flex justify-content-between mb-2"><span>Discount:</span><span>${discount}</span></div>
            <div class="sidebar__checkout-total-price d-flex justify-content-between mb-1"><span>Total Price:</span><span>${totalAmount}</span></  
          div>
    `);
}

function clearAmountList(){
  checkoutAmountEl.innerHTML = '';
}


function renderKidsList() {
  kidsProductsData.forEach((el) => {
    proudctsListEl.insertAdjacentHTML(
      "afterbegin",
      `
            <li class=" col-12 col-md-6 col-lg-4 col-xl-3  p-2">
                        <div class="section__1-product p-3" data-id=${el.id}>
                            <img class="product__image" src=${el.image}>
                            <div class="product__info">
                                <h3 class="product__name">${el.productName}</h3>
                                <div class="product__price">Price: <span>${el.price}</span></div>
                            </div>
                            <div class="product__btns d-flex flex-row-column p-2 gap-2">
                                <button class="btn btn-add-to-wish-list btn--primary">Wish List</button>
                                <button class="btn btn-add-to-cart btn--primary">Add To Cart</button>
                            </div>
                 </div>
          </li>
        `
    );
  });
}

function renderWomenList() {
  womenProductsData.forEach((el) => {
    proudctsListEl.insertAdjacentHTML(
      "afterbegin",
      `
            <li class=" col-12 col-md-6 col-lg-4 col-xl-3  p-2" >
                        <div class="section__1-product p-3" data-id=${el.id}>
                            <img class="product__image" src=${el.image}>
                            <div class="product__info">
                                <h3 class="product__name">${el.productName}</h3>
                                <div class="product__price">Price: <span>${el.price}</span></div>
                            </div>
                            <div class="product__btns d-flex flex-row-column p-2 gap-2">
                                <button class="btn btn-add-to-wish-list btn--primary">Wish List</button>
                                <button class="btn btn-add-to-cart btn--primary">Add To Cart</button>
                            </div>
                 </div>
          </li>
        `
    );
  });
}

renderWomenList();

function clearCartList() {
  shoppingCartList.innerHTML = "";
}

function renderCartList() {
  if (cartData.length === 0) {
    shoppingCartList.innerHTML =
      '<h2 class="message text-center">Your cart is empty</h2>';
  }
  cartData.forEach((el) => {
    shoppingCartList.insertAdjacentHTML(
      "afterbegin",
      `
        <li class="shopping-cart__item d-flex gap-4">
            <image class="shopping-cart__item-image" width="120" height="150" src=${el.image} alt="IMAGE" />
            <div class="shopping-cart__item-info">
              <h4 class="item-name">${el.productName}</h4>
              <p class="item-price">Rs.${el.price} </p>
              <div class="cart-item-delete-btn" ><i class="bi bi-trash3" data-id="${el.id}" ></i></div>
            </div>
          </li>
       `
    );
  });
}

renderCartList();

let tabeState = "woman";

function renderWishList() {
  if (wishListData.length === 0) {
    wishListItemsEl.innerHTML = "<h2>Wish List is empty</h2>";
  }
  wishListData.forEach((el) => {
    wishListItemsEl.insertAdjacentHTML(
      "afterbegin",
      `
        <li class="shopping-cart__item d-flex gap-4">
            <image class="shopping-cart__item-image" width="120" height="150" src=${el.image} alt="IMAGE" />
            <div class="shopping-cart__item-info">
              <h4 class="item-name">${el.productName}</h4>
              <p class="item-price">Rs.${el.price} </p>
              <div class="d-flex gap-3 mt-2">
                <div class="cart-item-delete-btn" ><i class="bi bi-trash3" data-id="${el.id}"></i></div>
                <div class="cart-item-delete-btn" ><i class="bi bi-cart3" data-w-id="${el.id}"></i></div>
              </div>
            </div>
          </li>
    `
    );
  });
}

function clearWishList() {
  wishListItemsEl.innerHTML = "";
}

renderWishList();

//================================================
// Switch between Woman category and Boys Category
//===============================================
switchToKidsBtn.addEventListener("click", function () {
  tabeState = "kids";
  clearList();
  renderKidsList();
  switchToWomenBtn.classList.remove("active-tab");
  switchToKidsBtn.classList.add("active-tab");
});

switchToWomenBtn.addEventListener("click", function () {
  tabeState = "woman";
  clearList();
  renderWomenList();
  switchToWomenBtn.classList.add("active-tab");
  switchToKidsBtn.classList.remove("active-tab");
});

//=================================
// Hide and Show Side Bar
//================================
function showSideBarForCart() {
  sideBarEl.classList.add("show-side-bar");
  sideBarShadowEl.classList.remove("hidden");
  shoppingCartEl.classList.remove("hidden");
  wishListEl.classList.add("hidden");
}

function hiddenSideBarForCart() {
  sideBarEl.classList.remove("show-side-bar");
  sideBarShadowEl.classList.add("hidden");
}

function showSideBarForWishList() {
  sideBarEl.classList.add("show-side-bar");
  sideBarShadowEl.classList.remove("hidden");
  shoppingCartEl.classList.add("hidden");
  wishListEl.classList.remove("hidden");
}

function hiddenSideBarForWishList() {
  sideBarEl.classList.remove("show-side-bar");
  sideBarShadowEl.classList.add("hidden");
}

addToCartBtnEl.addEventListener("click", showSideBarForCart);

sideBarShadowEl.addEventListener("click", hiddenSideBarForCart);

sideBarCloseBtnEl.addEventListener("click", hiddenSideBarForCart);

addToWishListBtnEl.addEventListener("click", showSideBarForWishList);

// =====================================
// Add New Item into cart and Wish List
// =====================================
function handleAmountAndRender(){
  handleCalculateAmount();
  clearAmountList()
  renderAmount();
  if(cartData.length !== 0){
    checkoutBtnEl.classList.remove("hidden");
  }else {
    checkoutBtnEl.classList.add("hidden");
  }
}

function handleAddProductToCart(product, id) {
  if (!cartData.some((el) => el.id === id)) {
    cartData.push(product);
    handleAmountAndRender();
  }
}

function handleAddProductToWishList(product, id) {
  if (!wishListData.some((el) => el.id === id)) {
    wishListData.push(product);
    handleAmountAndRender();
  }
}

function handleAddNewItem(addTo, clearList, renderList, e) {
  const el = e.target.closest(".section__1-product");

  const productID = Number(el.dataset.id);
  if (tabeState === "woman") {
    womenProductsData.forEach((el) => {
      if (productID === el.id) {
        addTo(el, productID);
      }
    });
    clearList();
    renderList();
  }

  if (tabeState === "kids") {
    kidsProductsData.forEach((el) => {
      if (productID === el.id) {
        addTo(el, productID);
      }
    });
    clearList();
    renderList();
  }
}

productListEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-add-to-cart")) {
    handleAddNewItem(handleAddProductToCart, clearCartList, renderCartList, e);
  }

  if (e.target.classList.contains("btn-add-to-wish-list")) {
    handleAddNewItem(
      handleAddProductToWishList,
      clearWishList,
      renderWishList,
      e
    );
  }
});

// ========================================
// Delete Item from Cart
// ========================================
function handleDeleteItemFromCart(id) {
  cartData = cartData.filter((el) => el.id !== id);
  clearCartList();
  renderCartList();
  handleAmountAndRender();
}

shoppingCartEl.addEventListener("click", function (e) {
  const itemId = Number(e.target.dataset.id);
  if(!itemId) return;
  handleDeleteItemFromCart(itemId);
});
// ============================================================
// Delete Item from Wish List and move item form wish list to cart
// ============================================================

function handleMoveItemIntoCart(id){
 const item = wishListData.find(el => el.id === id);
 handleAddProductToCart(item, id);
 clearCartList()
 renderCartList();
}

function handleDeleteItemFromWishList(id) {
  wishListData = wishListData.filter((el) => el.id !== id);
  clearWishList();
  renderWishList();
}

wishListItemsEl.addEventListener("click", function (e) {
  const itemId = Number(e.target.dataset.id);
  const whishListId = Number(e.target.dataset.wId);
  console.log(whishListId)
  if(itemId){
    handleDeleteItemFromWishList(itemId);
  }
  if(whishListId){
    handleMoveItemIntoCart(whishListId);
  }
});

// ==============================
// checkout info
// ==============================
function resetAll(){
  totalAmount = 0;
  discount  = 0;
  totalItems = 0;
  cartData = [];
  wishListData = [];
  clearAmountList();
  clearWishList();
  clearCartList();
  renderCartList()
  renderWishList();
  renderAmount();
  hiddenSideBarForCart();
  hiddenSideBarForCart();
  checkoutBtnEl.classList.add('hidden')
}

function handleHideCheckoutConformationMessage(){
  checkoutConformationMessageEl.classList.add('hidden');
  checkoutMessageShadowEl.classList.add('hidden');
}

checkoutBtnEl.addEventListener('click', function(){
  checkoutConformationMessageEl.classList.remove('hidden');
  checkoutMessageShadowEl.classList.remove('hidden');
})

checkoutMessageShadowEl.addEventListener('click', handleHideCheckoutConformationMessage);

checkoutConformationMessageEl.addEventListener('click', function(e){
  if(e.target.classList.contains("checkout-conform-btn")){
    handleHideCheckoutConformationMessage();
    resetAll();
  }
  if(e.target.classList.contains("checkout-not-conform-btn")){
    handleHideCheckoutConformationMessage();
  }
})
