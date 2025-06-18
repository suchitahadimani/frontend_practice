
window.addEventListener("DOMContentLoaded", () =>{
    const button = document.getElementById("button");
    
    button.addEventListener("click", () => {
        button.innerText = parseInt(button.textContent) + 1;
    })
})