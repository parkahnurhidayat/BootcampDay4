const li = document.querySelectorAll(".nav-link");

li.forEach((item) => {
    item.addEventListener("click", () => {
        li.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
        
    })
})