window.addEventListener("DOMContentLoaded", () => {
    const startbutton = document.getElementById("start");
    const stopbutton = document.getElementById("stop");
    const text = document.getElementById("time");
    
    let starttime = Date.now();           
    let interval = null;
    let paused = true;

    startbutton.addEventListener("click", () => {
        if(paused){
            paused = false;
            starttime = Date.now();  
            

            interval = setInterval(() => {
                text.innerText = (parseFloat(text.innerText) + (Date.now() - starttime)/1000).toFixed(1);
                starttime = Date.now();  
            }, 100)
        }

    })

    stopbutton.addEventListener("click", () => {
        if(!paused){
            paused = true;
            clearInterval(interval);
        }
    })

})