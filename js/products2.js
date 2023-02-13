import {product2} from "./glide.js";

let products2 = []




function productsFunc2(){
    products2 = localStorage.getItem("products2") ? 
    JSON.parse(localStorage.getItem("products2")) : [];
    
    const productsContainer2 = document.querySelector("#product-list2")
    

    let results = "";
    products2.forEach((item) =>{
    
    results +=`
    <li class="product-item glide__slide">
        <div class="product-image">
        <a href="#"><img src= ${item.img.singleImage} class="img1" alt=""></a>
        <a href="#"><img src=${item.img.thumbs[1]} class="img2" alt=""></a>
        </div>
        <div class="product-info">
        <a href="" class="product-title">${item.name}</a>
        <ul class="product-star">
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-fill"></i>
            </li>
            <li>
            <i class="bi bi-star-half"></i>
            </li>
        </ul>
        <div class="product-prices">
            <strong>$${item.price.newPrice.toFixed(2)}</strong>
            <span>$${item.price.oldPrice.toFixed(2)}</span>
        </div>
        <span class="product-discount">-${item.discount}%</span>
        <div class="product-links">
            <button class="add-to-cart" data-id=${item.id}>
            <i class="bi bi-basket-fill"></i>
            </button>

            <button>
            <i class="bi bi-heart-fill"></i>
            </button>

            <a href="#">
            <i class="bi bi-eye-fill"></i>
            </a>

            <a href="#">
            <i class="bi bi-share-fill"></i>
            </a>
        </div>
        </div>
    </li>
    `;
    productsContainer2.innerHTML = results;
});
product2();
};

 export default productsFunc2;