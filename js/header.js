function sidebarFunc(){
    //! Home Sidebar

const btnOpenSidebar = document.querySelector("#btn-menu");
const sidebar = document.querySelector("#sidebar");
const btnCloseSidebar = document.querySelector("#close-sidebar");

btnOpenSidebar.addEventListener("click", function(){
    sidebar.style.left= "0";
});

btnCloseSidebar.addEventListener("click", function(){
    sidebar.style.left= "-100%";
});

/* click out side */

document.addEventListener("click", function(event){
    if(!event.composedPath().includes(sidebar) && 
    !event.composedPath().includes(btnOpenSidebar)){
        sidebar.style.left= "-100%";
    };
});

/* click out side */
};

function searchModalFunc(){
    //! Search Modal

const btnOpenSearch = document.querySelector(".search-button");
const modalSearch = document.getElementsByClassName("modal-search");
const btnCloseSearch = document.querySelector("#close-search");
const modalSearchWrapper = document.querySelector(".modal-wrapper");

btnOpenSearch.addEventListener("click", function(){
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
});

btnCloseSearch.addEventListener("click" , function(){
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
});

/* click out side */

document.addEventListener("click" , function(e){
    if(!e.composedPath().includes(modalSearchWrapper) &&
    !e.composedPath().includes(btnOpenSearch)){
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";
    };
});

/* click out side */

//! Search Modal
};

function headerFunc(){
    sidebarFunc();
    searchModalFunc();
};

export default headerFunc();