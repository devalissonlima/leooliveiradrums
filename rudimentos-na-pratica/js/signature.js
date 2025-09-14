(function(){

    const svgSign = document.querySelector("#signature")

    const observer = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting){
            entries[0].target.classList.add("active")
        }
    },{
        threshold: .5
    })

    observer.observe(svgSign)

})()