window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab-content");
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const tag = button.getAttribute("data-tab");
            

            buttons.forEach((b) => {
                b.classList.remove("active")
            });

            tabs.forEach((b) => {
                b.classList.remove("active")
            });

            const tab = document.getElementById(tag);
            tab.classList.add("active");
            button.classList.add("active");


        })
    });
})