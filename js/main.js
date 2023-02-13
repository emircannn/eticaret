import headerFunc from "./header.js";
import productsFunc from "./products.js";
import productsFunc2 from "./products2.js"; 
import searchFunc from "./search.js";


//?----------------------------------------------------------

headerFunc;

async function getData2(){
    const product = await fetch("/js/data2.json");
    const data2 = await product.json();

    data2 ? localStorage.setItem("products2", JSON.stringify(data2)) : [];

    productsFunc2();
}

getData2();


//! Local Storage
(async function () {
    const product = await fetch("/js/data.json");
    const data = await product.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    
    productsFunc();
    searchFunc(data);
})();







//! Local Storage


const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";

//! modal dialog start
const modalDialogDOM = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");

btnCloseDialog.addEventListener("click", function () {
  modalDialogDOM.classList.remove("show");
});

document.addEventListener("click", (e) => {
  if (!e.composedPath().includes(modalContentDOM)) {
    modalDialogDOM.classList.remove("show");
  }
});

setTimeout(() => {
  modalDialogDOM.classList.add("show");
}, 3000);
//! modal dialog end