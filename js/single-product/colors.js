function colorsFunc(){
    const colorsDOM = document.querySelectorAll(".color-wrapper")
    colorsDOM.forEach((color) =>{
        color.addEventListener("click", () =>{
            colorsDOM.forEach((item) =>{
                item.classList.remove("active");
            })
            color.addEventListener("click", () =>{
                color.classList.add("active");
            })
        }
    )}
)};

export default colorsFunc();