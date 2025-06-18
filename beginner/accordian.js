window.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".questions");
    const answers = document.querySelectorAll(".answers");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const index = question.getAttribute("index");
            const answer = document.getElementById(index);

            if(answer.classList.contains("active")){
                answer.classList.remove("active");
                return;
            }

            answers.forEach((a) => {
                a.classList.remove("active");
            })

            answer.classList.add("active")
        })
    })
})