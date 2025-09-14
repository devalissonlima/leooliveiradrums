(function(){
    const span = document.querySelector(".copy-date-span")

    const date = new Date()
    const year = date.getFullYear()
    span.textContent = year
})()