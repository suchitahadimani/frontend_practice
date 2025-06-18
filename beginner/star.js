window.addEventListener("DOMContentLoaded", () => {
    const rating = document.querySelectorAll("#stars .star");
    
    rating.forEach((cur_star, cur_index) => {
        cur_star.addEventListener("click", () => {

            rating.forEach((star, index) => {
                if(index >= cur_index)
                    star.textContent = "★";
                else
                    star.textContent = "☆";
            })
            
        })
    })

    
    
    
});