// HEADLINE
const thumb = document.querySelector(".video_curso");

thumb.addEventListener("click", ()=>{
    thumb.innerHTML = `
    <iframe  width="100%" height="100%" style="border-radius: 16px" src="https://www.youtube.com/embed/GB_F6sRzKXs?si=X88WaLyhFsahmHTk" title="CURSO FÓRMULA DE VIRADAS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
});
